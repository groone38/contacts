import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "src/shared/Input";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { signInUser } from "src/features/model/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";
import { Loader } from "src/shared/ui/Loader";

import { Button } from "src/shared/ui/Button";
import { LinkButton } from "src/features/ui/LinkButton";

import classes from "./Login.module.scss";
interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    dispatch(signInUser(data)).then(() => navigate("/"));
  };

  return (
    <div className={classes.wrap}>
      {loading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <h2 className={classes.form__title}>Sing in</h2>
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
          <Button type="submit">Sing in</Button>
          <LinkButton link={"/register"}>Sing Up</LinkButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
