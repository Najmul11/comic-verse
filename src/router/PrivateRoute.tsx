import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: IProps) => {
  const { user } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
