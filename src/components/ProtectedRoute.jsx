import { Navigate } from "react-router-dom";
import { isAdminSession } from "./AdminOnly";

function ProtectedRoute({ children }) {
  return isAdminSession() ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;