import compose from "compose-function";

import { WithRouter } from "./router/WithRouter";
import PrivateRoute from "./router/PrivateRoute";
import { auth, db } from "./firebase/index";

export const withProviders = compose(WithRouter);
export { PrivateRoute, auth, db };
