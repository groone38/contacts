import React from "react";

import classes from "./Input.module.scss";
interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  register?: any;
  required?: string;
  label?: string;
  errors?: string | undefined;
}

const Input = ({
  type,
  id,
  name,
  placeholder,
  register,
  required,
  label,
  errors,
}: InputProps) => {
  return (
    <div className={classes.input}>
      <label htmlFor={id}>{label}: </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, {
          required: required,
        })}
      />
      {errors && <span data-testid="message">{errors}</span>}
    </div>
  );
};

export default Input;
