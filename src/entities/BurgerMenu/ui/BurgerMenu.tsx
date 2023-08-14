import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";

import { Link } from "react-router-dom";

import classes from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  create: () => void;
  exist: () => void;
}

const BurgerMenu = ({ create, exist }: BurgerMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={classes.burger}>
      <FaAlignJustify onClick={() => setOpen(!open)} />
      <div
        className={classes.menu + " " + (open ? classes.open : classes.close)}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              HOME
            </Link>
          </li>
          <li onClick={create}>
            <p>CREATE NEW CONTACT</p>
          </li>
          <li onClick={exist}>EXIT</li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
