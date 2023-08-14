import React from "react";

import { Link } from "react-router-dom";

import classes from "./Contact.module.scss";

interface ContactProps {
  id: string;
  name: string;
}

const Contact = ({ id, name }: ContactProps) => {
  return (
    <Link to={`/${id}`} className={classes.contact}>
      <p>{name}</p>
    </Link>
  );
};

export default Contact;
