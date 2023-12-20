"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";

import { useUser } from "@/context";
import { KapilaLogo } from "@/assets/icons";
import { AntdButton } from "@/components";

import "react-toastify/dist/ReactToastify.css";
import styles from "./page.module.css";

const Login = () => {
    const router = useRouter();
    const [form] = Form.useForm();

    const { isAuthenticated, login } = useUser();

    const submitLogin = async (values) => {
        const isLoggedIn = await login({
            username: values.username,
            password: values.password,
        });
        if (!isLoggedIn) {
            toast.error("Invalid Credentials");
        }
    };

    if (isAuthenticated) {
        router.push("/");
        return null;
    }

    return (
        <div className={styles["login_main-container"]}>
            <ToastContainer />
            <div className={styles["login_form_container"]}>
                <KapilaLogo size="60" />
                <div className={styles["login_login-text"]}>Login</div>
                <Form
                    form={form}
                    name="login_form"
                    layout="vertical"
                    style={{
                        width: 300,
                    }}
                    onFinish={submitLogin}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <AntdButton
                            type="primary"
                            htmlType="submit"
                            style={{
                                width: "100%",
                                borderRadius: "4px",
                            }}
                            size="large"
                        >
                            Login
                        </AntdButton>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
