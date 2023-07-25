import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";
import { Header } from "src/widgets/Header";
import { Footer } from "src/widgets/Footer";

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
