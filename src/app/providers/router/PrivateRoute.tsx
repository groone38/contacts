import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const location = useLocation();
  const auth = localStorage.getItem("token");

  if (!auth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
