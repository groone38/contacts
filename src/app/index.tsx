import React from "react";
import "./index.scss";
// import Login from "src/pages/Login";
// import { Home } from "src/pages/Home";
import { withProviders } from "./providers";
import { Routing } from "src/pages";

function App() {
  return (
    <div className="App">
      <Routing />
      {/* <Home />
      <Login /> */}
    </div>
  );
}

export default withProviders(App);
