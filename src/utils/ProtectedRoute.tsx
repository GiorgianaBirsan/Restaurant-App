
import useUserDetails from "../hooks/UserDetailsHook";
import { Navigate } from "react-router-dom";
import React from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }  ) {

   const {getCurrentUserDetails} = useUserDetails();
    const userDetails = getCurrentUserDetails();

    if (userDetails) {
        return <React.Fragment>{children}</React.Fragment>;
    }else{
        <p>Loading...</p>
    }
    return <Navigate to={userDetails ? "/dashboard" : "/"} />;
    }