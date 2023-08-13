import React from "react";
import classes from "./Contact.module.scss";
import { Link } from "react-router-dom";

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
