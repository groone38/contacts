import compose from "compose-function";
import { WithRouter } from "./router/WithRouter";
import PrivateRoute from "./router/PrivateRoute";

export const withProviders = compose(WithRouter);
export { PrivateRoute };
