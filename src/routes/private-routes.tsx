import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { AppContext } from "../context/app.context";
import { DEFAULT_PUBLIC_ROUTE } from "./routes";

const PrivateRoute = () => {
  const { authData } = useContext(AppContext);
  const location = useLocation();

  if (authData === "") {
    return (
      <Navigate to={DEFAULT_PUBLIC_ROUTE} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
