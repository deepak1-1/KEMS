import JWT from "jsonwebtoken";

import { gqlClient } from "../../lib/index.js";
import {
    GET_USER,
    INSERT_LOGIN_TOKEN,
    UPDATE_LOGIN_TOKEN,
    GET_LOGIN_TOKENS,
    INSERT_UPDATE_LOGIN_TOKEN,
} from "../../graphql/index.js";

const [accessTokenSecret, refreshTokenSecret] = [
    new TextEncoder().encode(process.env.JWT_ACCESS_TOKEN_SECRET_KEY),
    new TextEncoder().encode(process.env.JWT_REFRESH_TOKEN_SECRET_KEY),
];

export const loginHandler = async (req, res) => {
    const { username, password } = req.body;

    const {
        users: [user],
    } = await gqlClient.request(GET_USER, {
        where: { username: { _eq: username } },
    });

    if (!user || user.password !== password) {
        return res.status(401).json({
            success: false,
            error: "Invalid credentials",
        });
    }

    if (
        !user.user_roles ||
        user.user_roles.length === 0 ||
        user.user_roles.map((r) => r.permissions).flat().length === 0
    ) {
        user.user_roles = [{ role: { permissions: ["anonymous"] } }];
    }

    const accessToken = JWT.sign(
        {
            userId: user.id,
            name: user.name,
            hasura: {
                claims: {
                    "x-hasura-default-role":
                        user.user_roles[0].role.permissions[0].permission,
                    "x-hasura-allowed-roles": user.user_roles
                        .map((r) => r.role.permissions.map((p) => p.permission))
                        .flat(),
                    "x-hasura-user-id": String(user.id),
                },
            },
        },
        accessTokenSecret,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || "1h" }
    );

    const refreshToken = JWT.sign(
        {
            userId: user.id,
            name: user.name,
            timestamp: Date.now(),
        },
        refreshTokenSecret,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION || "10d" }
    );

    await gqlClient.request(INSERT_LOGIN_TOKEN, {
        objects: [
            {
                type: "REFRESH_TOKEN",
                token: refreshToken,
                user_id: user.id,
                ip_address: req.ip,
                device: req.headers["user-agent"],
            },
        ],
    });

    return res.json({
        success: true,
        user: {
            id: user.id,
            name: user.name,
        },
        permissions: user.user_roles.map((r) =>
            r.role.permissions.map((p) => p.permission).flat()
        ),
        accessToken,
        refreshToken,
    });
};

export const logoutHandler = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res
            .status(400)
            .json({ success: false, error: "Invalid refresh token" });
    }

    JWT.verify(
        refreshToken,
        refreshTokenSecret,
        async (jwtError, tokenData) => {
            if (
                jwtError instanceof JWT.TokenExpiredError ||
                jwtError instanceof JWT.JsonWebTokenError ||
                !tokenData ||
                !tokenData["userId"]
            )
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid refresh token" });

            await gqlClient.request(UPDATE_LOGIN_TOKEN, {
                where: {
                    user_id: { _eq: tokenData["userId"] },
                    token: { _eq: refreshToken },
                },
                _set: {
                    is_active: false,
                },
            });

            res.status(200).json({ success: true });
        }
    );
};

export const refreshTokenHandler = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({
            success: false,
            error: "Invalid refresh token",
        });
    }

    JWT.verify(
        refreshToken,
        refreshTokenSecret,
        async (jwtError, tokenData) => {
            if (
                jwtError instanceof JWT.TokenExpiredError ||
                jwtError instanceof JWT.JsonWebTokenError ||
                !tokenData ||
                !tokenData["userId"]
            )
                return res
                    .status(400)
                    .json({ success: false, error: "Invalid refresh token" });

            const {
                user_login_token: [user_login_token],
            } = await gqlClient.request(GET_LOGIN_TOKENS, {
                where: {
                    user_id: { _eq: tokenData["userId"] },
                    token: { _eq: refreshToken },
                },
            });

            if (!user_login_token.is_active) {
                await gqlClient.request(UPDATE_LOGIN_TOKEN, {
                    where: {
                        user_id: { _eq: user_login_token.user.id },
                        family_id: { _eq: user_login_token.family_id },
                    },
                    _set: {
                        is_active: false,
                    },
                });

                return res.json({
                    success: false,
                    error: "Token reuse detected, disabled all tokens related to this family",
                });
            }

            if (
                !user_login_token.user.user_roles ||
                user_login_token.user.user_roles.length === 0 ||
                user_login_token.user.user_roles
                    .map((r) => r.role.permissions.map((p) => p.permission))
                    .flat().length <= 0
            ) {
                user_login_token.user.user_roles = [
                    { role: { permissions: [{ permission: "anonymous" }] } },
                ];
            }

            const accessToken = JWT.sign(
                {
                    userId: user_login_token.user.id,
                    name: user_login_token.user.name,
                    hasura: {
                        claims: {
                            "x-hasura-default-role":
                                user_login_token.user.user_roles[0].role
                                    .permissions[0].permission,
                            "x-hasura-allowed-roles":
                                user_login_token.user.user_roles
                                    .map((r) =>
                                        r.role.permissions.map(
                                            (p) => p.permission
                                        )
                                    )
                                    .flat(),
                            "x-hasura-user-id": String(
                                user_login_token.user.id
                            ),
                        },
                    },
                },
                accessTokenSecret,
                { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || "1h" }
            );

            const newRefreshToken = JWT.sign(
                {
                    userId: user_login_token.user.id,
                    name: user_login_token.user.name,
                    timestamp: Date.now(),
                },
                refreshTokenSecret,
                { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION || "10d" }
            );

            await gqlClient.request(INSERT_UPDATE_LOGIN_TOKEN, {
                objects: [
                    {
                        type: "REFRESH_TOKEN",
                        token: newRefreshToken,
                        user_id: user_login_token.user.id,
                        family_id: user_login_token.family_id,
                        ip_address: req.ip,
                        device: req.headers["user-agent"],
                    },
                ],
                where: {
                    user_id: { _eq: user_login_token.user.id },
                    token: { _eq: refreshToken },
                },
                _set: {
                    is_active: false,
                },
            });

            return res.json({
                success: true,
                accessToken,
                refreshToken: newRefreshToken,
            });
        }
    );
};
