import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  register: any;
  required: string;
  label: string;
}

const Input = ({
  type,
  id,
  name,
  placeholder,
  register,
  required,
  label,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}: </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, {
          required: required,
        })}
      />
    </>
  );
};

export default Input;
