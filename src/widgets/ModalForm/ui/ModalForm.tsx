import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "src/shared/Input";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import {
  createContact,
  getContact,
} from "src/features/model/reducers/ContactsSlice";
import { Loader } from "src/shared/ui/Loader";
import { Button } from "src/shared/ui/Button";

import classes from "./ModalForm.module.scss";

interface ModalFormData {
  email: string;
  first_name: string;
  last_name: string;
  tel: null | number;
  company: string;
  about: string;
}

interface ModalFormProps {
  setShow: (e: boolean) => void;
}

const ModalForm = ({ setShow }: ModalFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalFormData>({
    mode: "all",
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      tel: null,
      company: "",
      about: "",
    },
  });

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.contacts.loading);

  const onSubmit: SubmitHandler<ModalFormData> = async (data) => {
    dispatch(createContact(data));
    dispatch(getContact());
    setShow(false);
  };

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Input
          id="email"
          name="email"
          placeholder="Enter you email"
          register={register}
          required="Поле Email не может быть пустым!"
          type="email"
          label="Email"
          errors={errors?.email?.message}
        />

        <Input
          id="first_name"
          name="first_name"
          placeholder="Enter you first name"
          register={register}
          required="Поле First name не может быть пустым!"
          type="text"
          label="First name"
          errors={errors?.first_name?.message}
        />

        <Input
          id="last_name"
          name="last_name"
          placeholder="Enter you last name"
          register={register}
          required="Поле Last name не может быть пустым!"
          type="text"
          label="Last name"
          errors={errors?.last_name?.message}
        />

        <Input
          id="tel"
          name="tel"
          placeholder="Enter you tel"
          register={register}
          required="Поле Tel не может быть пустым!"
          type="number"
          label="Tel"
          errors={errors?.tel?.message}
        />

        <Input
          id="company"
          name="company"
          placeholder="Enter you company"
          register={register}
          required="Поле Company не может быть пустым!"
          type="text"
          label="Company"
          errors={errors?.company?.message}
        />

        <Input
          id="about"
          name="about"
          placeholder="Enter you about"
          register={register}
          required="Поле About не может быть пустым!"
          type="text"
          label="About"
          errors={errors?.about?.message}
        />

        <Button type="submit">Create contact</Button>
      </form>
    </>
  );
};

export default ModalForm;
