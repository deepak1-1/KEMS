import { promiseResolver } from "./promiseResolver.js";

export function reqErrorHandlerWrapper(_function) {
    return async function errorHandler(...args) {
        const [response, error] = await promiseResolver(_function(...args));
        if (error) {
            console.log(`[Error]: `, error);
            // Use online error logger to submit your errors there

            if (args.length > 1) {
                return args[1].status(500).json({
                    error: "Something went wrong!",
                });
            }
        } else {
            return response;
        }
    };
}
