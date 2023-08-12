import React from "react";
import { Input } from "src/shared/Input";

interface ContactInput {}

const ContactInput = ({}: ContactInput) => {
  return (
    <div>
      {/* {edit ? (
      <div>
        <Input
          id="about"
          name="about"
          placeholder="Enter you about"
          register={register}
          required="Поле About не может быть пустым!"
          type="text"
          label="About"
        />
        {errors && <span>{errors?.about?.message}</span>}
      </div>
    ) : (
      <>
        <strong>About: </strong>
        <span>{data?.about}</span>
      </> */}
      {/* )} */}
    </div>
  );
};

export default ContactInput;
