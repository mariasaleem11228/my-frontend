import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
