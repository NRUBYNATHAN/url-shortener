import { Navigate } from "react-router-dom";

export function ProductedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? (
    <div>{children}</div>
  ) : (<Navigate replace to="/login" />);
}
