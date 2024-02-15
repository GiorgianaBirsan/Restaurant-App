import { FormLabel, Input } from "@chakra-ui/react";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useFormik } from "formik";
import { useUserAuth } from "../../contexts/AuthContext";
import * as Yup from "yup";
import useUserDetails from "../../hooks/UserDetailsHook";
import { whereQuery } from "../../configs/firebase/actions";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../../pages/types";
import { User } from "./types";
const initialValues = { email: "", password: "" };

export default function LogInForm() {
  const { logIn } = useUserAuth();
  const { storeCurrentUserDetails } = useUserDetails();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values ) => {
      
      const userCredentials = logIn(values.email, values.password);
      const userQueryResult = await whereQuery(
        "users",
        "userId",
        "==",
        (
          await userCredentials
        ).user.uid
      );
      storeCurrentUserDetails(userQueryResult[0] as User);
      navigate(PagesPaths.DASHBOARD);
     
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  return (
           
       <div>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        ) : null}

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        ) : null}

         <ButtonUI children="Login" type="submit"   /> 
      </form>
    </div>
  );
}
