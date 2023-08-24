import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { registerUser } from "src/features/model/reducers/AuthSlice";

import { Loader } from "src/shared/ui/Loader";

import { Button } from "src/shared/ui/Button";
import { LinkButton } from "src/features/ui/LinkButton";

import { Input } from "src/shared/ui/Input";

import classes from "./Register.module.scss";
interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  first_name: string;
  last_name: string;
  tel: number;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      first_name: "",
      last_name: "",
      tel: 0,
    },
  });

  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisterData> = (data) => {
    dispatch(registerUser(data)).then(() => navigate("/login"));
  };

  return (
    <div className={classes.wrap}>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <h2 className={classes.form__title} data-testid="title">
          Sing up
        </h2>
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
          id="password"
          name="password"
          placeholder="Enter you password"
          register={register}
          required="Поле Password не может быть пустым!"
          type="password"
          label="Password"
          errors={errors?.password?.message}
        />
        <div className={classes.form__btn}>
          <Button type="submit">Sing up</Button>
          <LinkButton link={"/login"}>Sing in</LinkButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
