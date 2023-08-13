import React from "react";
import { Input } from "src/shared/Input";

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
  return (
    <div>
      {edit ? (
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
      ) : (
        <>
          <strong>{label}: </strong>
          <span>{data}</span>
        </>
      )}
    </div>
  );
};

export default ContactField;
