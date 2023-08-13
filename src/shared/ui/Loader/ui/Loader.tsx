import React from "react";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
