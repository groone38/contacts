import React, { ReactNode, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";
import { Loader } from "src/shared/ui/Loader";

export const WithRouter = (component: () => ReactNode) => () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>{component()}</Suspense>
      </Provider>
    </BrowserRouter>
  );
};
