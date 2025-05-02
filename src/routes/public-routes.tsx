import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router";
import { AppContext } from "../context/app.context";
import { DEFAULT_PRIVATE_ROUTE } from "./routes";

interface PublicRouteProps {
  restricted?: boolean;
}

const PublicRoute = ({ restricted = false }: PublicRouteProps) => {
  const { authData } = useContext(AppContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || DEFAULT_PRIVATE_ROUTE;

  if (restricted && authData !== "") {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
