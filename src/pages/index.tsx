import { lazy } from "react";
import { Routes } from "react-router-dom";

const Login = lazy(() => import("./Login"));
const Home = lazy(() => import("./Home"));

export const Routing = () => {
  return <Routes>{/* <Route element={<}></Route> */}</Routes>;
};
