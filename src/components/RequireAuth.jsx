import { Children, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAuth({children}) {
  const { token } = useContext(AuthContext)
  
  if (!token) {
 return <Navigate to="/" replace />
  }
  return children
}