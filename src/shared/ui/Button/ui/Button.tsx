import React from "react";

import classes from "./Button.module.scss";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: JSX.Element | string;
  onclick?: () => void;
}

const Button = ({ children, onclick, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={classes.btn}
      data-testid="btn"
    >
      {children}
    </button>
  );
};

export default Button;
