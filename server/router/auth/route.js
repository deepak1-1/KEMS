import { Router } from "express";

import { reqErrorHandlerWrapper } from "../../utils/index.js";
import {
    loginHandler,
    logoutHandler,
    refreshTokenHandler,
} from "./controllers.js";

const authPublicRouter = Router();
const authProtectedRouter = Router();

authPublicRouter.post("/login", reqErrorHandlerWrapper(loginHandler));
authPublicRouter.post("/logout", reqErrorHandlerWrapper(logoutHandler));
authPublicRouter.post(
    "/refresh-token",
    reqErrorHandlerWrapper(refreshTokenHandler)
);

export { authProtectedRouter, authPublicRouter };
