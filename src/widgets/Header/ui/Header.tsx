import React, { useState } from "react";
import classes from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Modal } from "src/widgets/Modal";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const singOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h3>LOGO</h3>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li onClick={() => setShow(true)}>Create new contact</li>
          <li>About</li>
          <li onClick={singOut}>Exit</li>
        </ul>
      </nav>
      <Modal show={show} setShow={setShow} />
    </header>
  );
};

export default Header;
