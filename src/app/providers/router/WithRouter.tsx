import React, { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const WithRouter = (component: () => ReactNode) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading...</span>}>{component()}</Suspense>
    </BrowserRouter>
  );
};
