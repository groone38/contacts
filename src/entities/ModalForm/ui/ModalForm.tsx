import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classes from "./ModalForm.module.scss";
import { Input } from "src/shared/Input";
import { addDoc, collection } from "firebase/firestore";
import { db } from "src/app/providers";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { createContact } from "src/features/model/reducers/ContactsSlice";

interface ModalFormData {
  email: string;
  first_name: string;
  last_name: string;
  tel: null | number;
  company: string;
  about: string;
}

const ModalForm = () => {
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
    // const res = await addDoc(collection(db, "contacts"), data);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div>
          <Input
            id="email"
            name="email"
            placeholder="Enter you email"
            register={register}
            required="Поле Email не может быть пустым!"
            type="email"
            label="Email"
          />
          {errors && <span>{errors?.email?.message}</span>}
        </div>
        <div>
          <Input
            id="first_name"
            name="first_name"
            placeholder="Enter you first name"
            register={register}
            required="Поле First name не может быть пустым!"
            type="text"
            label="First name"
          />
          {errors && <span>{errors?.first_name?.message}</span>}
        </div>
        <div>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Enter you last name"
            register={register}
            required="Поле Last name не может быть пустым!"
            type="text"
            label="Last name"
          />
          {errors && <span>{errors?.last_name?.message}</span>}
        </div>
        <div>
          <Input
            id="tel"
            name="tel"
            placeholder="Enter you tel"
            register={register}
            required="Поле Tel не может быть пустым!"
            type="number"
            label="Tel"
          />
          {errors && <span>{errors?.tel?.message}</span>}
        </div>
        <div>
          <Input
            id="company"
            name="company"
            placeholder="Enter you company"
            register={register}
            required="Поле Company не может быть пустым!"
            type="text"
            label="Company"
          />
          {errors && <span>{errors?.company?.message}</span>}
        </div>
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
        <button type="submit">Create contact</button>
      </form>
    </>
  );
};

export default ModalForm;
