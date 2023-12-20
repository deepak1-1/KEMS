import { isClient } from "./isClient";
import { get } from "lodash";

export const getEnv = (title) => {
    if (title === "SERVER_BASE_URL") {
        return process.env.NEXT_PUBLIC_SERVER_BASE_URL || "/server";
    }
    if (!isClient) return;
    const env = get(window, "_env_." + title, "");
    if (!env && title === "GRAPHQL_WS_ENDPOINT") {
        return process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT;
    }
    if (!env && title === "GRAPHQL_HTTP_ENDPOINT") {
        return process.env.NEXT_PUBLIC_GRAPHQL_HTTP_ENDPOINT;
    }

    return env;
};
