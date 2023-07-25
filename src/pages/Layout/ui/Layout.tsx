import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
