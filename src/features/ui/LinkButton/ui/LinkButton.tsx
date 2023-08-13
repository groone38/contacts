import React from "react";
import { Link } from "react-router-dom";
import classes from "./LinkButton.module.scss";

interface LinkProps {
  children: string | JSX.Element;
  link: string;
}

const LinkButton = ({ link, children }: LinkProps) => {
  return (
    <Link to={link} className={classes.link}>
      {children}
    </Link>
  );
};

export default LinkButton;
