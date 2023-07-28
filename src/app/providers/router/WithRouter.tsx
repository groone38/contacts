import React, { ReactNode, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store";

export const WithRouter = (component: () => ReactNode) => () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<span>Loading...</span>}>{component()}</Suspense>
      </Provider>
    </BrowserRouter>
  );
};
