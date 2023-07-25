import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h3>LOGO</h3>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>Create new contact</li>
          <li>About</li>
          <li>Exit</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
