import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import {
  deleteContact,
  getOneContact,
  updateContact,
} from "src/features/model/reducers/ContactsSlice";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaCheck, FaTrashCan, FaPencil, FaX } from "react-icons/fa6";
import { Button } from "src/shared/ui/Button";
import { ContactField } from "src/entities/ContactField";
import { Loader } from "src/shared/ui/Loader";

import classes from "./Contact.module.scss";

interface ModalFormData {
  email: string;
  first_name: string;
  last_name: string;
  tel: null | number;
  company: string;
  about: string;
}

const Contact = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const data = useAppSelector(
    (state) => state.contacts.contact,
  ) as ModalFormData;
  const loading = useAppSelector((state) => state.contacts.loading);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ModalFormData>({
    mode: "all",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOneContact(id));
    const defaultValues: ModalFormData = {
      first_name: "",
      company: "",
      about: "",
      email: "",
      last_name: "",
      tel: null,
    };
    defaultValues.first_name = data?.first_name;
    defaultValues.about = data?.about;
    defaultValues.company = data?.company;
    defaultValues.email = data?.email;
    defaultValues.last_name = data?.last_name;
    defaultValues.tel = data?.tel;
    reset({ ...defaultValues });
  }, [edit]);

  const remove = () => {
    dispatch(deleteContact(id)).then(() => navigate("/"));
  };

  const editHandler = () => {
    setEdit(!edit);
  };

  const onSubmit: SubmitHandler<ModalFormData> = async (data) => {
    const newFilds = {
      id,
      newData: {
        ...data,
      },
    };
    await dispatch(updateContact(newFilds));
    setEdit(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={classes.contact}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.contact__block}
        >
          <ContactField
            edit={edit}
            id="first_name"
            name="first_name"
            placeholder="Enter you first name"
            register={register}
            required="Поле First name не может быть пустым!"
            type="text"
            label="First name"
            errors={errors?.first_name?.message}
            data={data?.first_name}
          />
          <ContactField
            edit={edit}
            id="last_name"
            name="last_name"
            placeholder="Enter you last name"
            register={register}
            required="Поле Last name не может быть пустым!"
            type="text"
            label="Last name"
            errors={errors?.last_name?.message}
            data={data?.last_name}
          />
          <ContactField
            edit={edit}
            id="email"
            name="email"
            placeholder="Enter you email"
            register={register}
            required="Поле Email не может быть пустым!"
            type="email"
            label="Email"
            errors={errors?.email?.message}
            data={data?.email}
          />
          <ContactField
            edit={edit}
            id="company"
            name="company"
            placeholder="Enter you company"
            register={register}
            required="Поле Company не может быть пустым!"
            type="text"
            label="Company"
            errors={errors?.company?.message}
            data={data?.company}
          />
          <ContactField
            edit={edit}
            id="tel"
            name="tel"
            placeholder="Enter you tel"
            register={register}
            required="Поле Tel не может быть пустым!"
            type="number"
            label="Tel"
            errors={errors?.tel?.message}
            data={data?.tel}
          />
          <ContactField
            edit={edit}
            id="about"
            name="about"
            placeholder="Enter you about"
            register={register}
            required="Поле About не может быть пустым!"
            type="text"
            label="About"
            errors={errors?.about?.message}
            data={data?.about}
          />
          <div className={classes.contact__btn}>
            {edit && (
              <>
                <Button type="submit">
                  <FaCheck fill="white" />
                </Button>
                <Button onclick={remove} type="button">
                  <FaTrashCan />
                </Button>
              </>
            )}
            <Button onclick={editHandler} type="button">
              {edit ? <FaX /> : <FaPencil />}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
