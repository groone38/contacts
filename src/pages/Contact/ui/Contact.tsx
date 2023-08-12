import React, { useState, useEffect } from "react";
import classes from "./Contact.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteContact,
  getOneContact,
} from "src/features/model/reducers/ContactsSlice";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import Delete from "../../../shared/img/delete.svg";
import Edit from "../../../shared/img/edit.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "src/shared/Input";
import { FaCheck, FaRegCircleXmark } from "react-icons/fa6";
import { Button } from "src/shared/ui/Button";

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
    (state) => state.contacts.contact
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

  const remove = async () => {
    dispatch(deleteContact(id)).then(() => navigate("/"));
  };

  const onSubmit: SubmitHandler<ModalFormData> = async (data) => {
    console.log(data);
    setEdit(false);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div className={classes.contact}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.contact__block}
        >
          <div>
            {edit ? (
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
            ) : (
              <>
                <strong>Name: </strong>
                <span>{data?.first_name}</span>
              </>
            )}
          </div>

          <div>
            {edit ? (
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
            ) : (
              <>
                <strong>Last name: </strong>
                <span>{data?.last_name}</span>
              </>
            )}
          </div>
          <div>
            {edit ? (
              // <div>
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
            ) : (
              /* {errors && <span>{errors?.email?.message}</span>} */
              /* </div> */
              <>
                <strong>Email: </strong>
                <span>{data?.email}</span>
              </>
            )}
          </div>
          <div>
            {edit ? (
              // <div>
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
            ) : (
              /* {errors && <span>{errors?.company?.message}</span>}
              </div> */
              <>
                <strong>Company: </strong>
                <span>{data?.company}</span>
              </>
            )}
          </div>
          <div>
            {edit ? (
              // <div>
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
            ) : (
              /* {errors && <span>{errors?.tel?.message}</span>} */
              /* </div> */
              <>
                <strong>Tel: </strong>
                <span>{data?.tel}</span>
              </>
            )}
          </div>
          {/* <ContactInput edit={edit} id="about"
                  name="about"
                  placeholder="Enter you about"
                  register={register}
                  required="Поле About не может быть пустым!"
                  type="text"
                  label="About"
                  errors={errors?.tel?.message}
                  /> */}
          <div>
            {edit ? (
              // <div>
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
            ) : (
              /* {errors && <span>{errors?.about?.message}</span>} */
              // </div>
              <>
                <strong>About: </strong>
                <span>{data?.about}</span>
              </>
            )}
          </div>
          <div className={classes.contact__btn}>
            {edit ? (
              <>
                <button type="submit">
                  <FaCheck fill="white" />
                </button>
                <button onClick={() => setEdit(false)}>
                  <FaRegCircleXmark fill="white" />
                </button>
              </>
            ) : (
              <>
                <Button onclick={() => setEdit(true)} type="button">
                  <img src={Edit} alt="edit" />
                </Button>
                <Button onclick={remove} type="button">
                  <img src={Delete} alt="delete" />
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
