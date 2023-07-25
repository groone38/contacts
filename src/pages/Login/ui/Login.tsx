import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "src/shared/Input";

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

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password).then(
      console.log
    );
    console.log(data);
  };

  return (
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
      <button type="submit">Sing in</button>
    </form>
  );
};

export default Login;
