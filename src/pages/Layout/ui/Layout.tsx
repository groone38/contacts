import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "src/widgets/Header";
import { Footer } from "src/widgets/Footer";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
