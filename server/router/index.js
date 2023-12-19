import { Router } from "express";

import AuthRouter from "./auth/index.js";

const ServerPublicRouter = Router();
const ServerProtectedRouter = Router();

ServerPublicRouter.use("/api/auth", AuthRouter.authPublicRouter);
ServerProtectedRouter.use("/api/auth", AuthRouter.authProtectedRouter);

export { ServerPublicRouter, ServerProtectedRouter };
