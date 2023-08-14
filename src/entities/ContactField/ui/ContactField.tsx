import React from "react";
import { Input } from "src/shared/Input";
import classes from "./ContactField.module.scss";
interface ContactField {
  edit: boolean;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  register: any;
  required: string;
  label: string;
  errors: string | undefined;
  data: string | number | null;
}

const ContactField = ({
  edit,
  id,
  name,
  placeholder,
  register,
  required,
  type,
  label,
  errors,
  data,
}: ContactField) => {
  if (edit)
    return (
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        register={register}
        required={required}
        type={type}
        label={label}
        errors={errors}
      />
    );
  return (
    <div className={classes.info}>
      <strong>{label}: </strong>
      <span>{data}</span>
    </div>
  );
};

export default ContactField;
