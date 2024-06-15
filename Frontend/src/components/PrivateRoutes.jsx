import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function PrivateRoutes({ children }) {
    const { AuthDetails } = useContext(AuthContext);
  
    if (!AuthDetails.islogDin) {
      return <Navigate to="/login" />;
    }
    return children;
  }