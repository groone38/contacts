import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "src/app/providers";
import { Layout } from "./Layout";
import { Register } from "./Register";
import { Contact } from "./Contact";

const Login = lazy(() => import("./Login"));
const Home = lazy(() => import("./Home"));

export const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Contact />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
