import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { registerUser } from "src/features/model/reducers/AuthSlice";
import { Input } from "src/shared/Input";

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
    <>
      {loading && <h1>Loading...</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
            id="password"
            name="password"
            placeholder="Enter you password"
            register={register}
            required="Поле Password не может быть пустым!"
            type="password"
            label="Password"
          />
          {errors && <span>{errors?.password?.message}</span>}
        </div>
        {/* <div>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Enter you Confirm Password"
          register={register}
          required="Поле Confirm password не может быть пустым!"
          type="password"
          label="Confirm Password"
        />
        {errors && <span>{errors?.confirmPassword?.message}</span>}
      </div>
      <div>
        <Input
          id="first_name"
          name="first_name"
          placeholder="Enter you First name"
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
          placeholder="Enter you Last name"
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
          placeholder="Enter you Tel"
          register={register}
          required="Поле Tel name не может быть пустым!"
          type="number"
          label="Tel"
        />
        {errors && <span>{errors?.tel?.message}</span>}
      </div> */}
        <button type="submit">Sing up</button>
      </form>
    </>
  );
};

export default Register;
