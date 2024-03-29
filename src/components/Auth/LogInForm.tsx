import { FormLabel, Input, useToast } from "@chakra-ui/react";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useFormik } from "formik";
import { useUserAuth } from "../../contexts/AuthContext";
import * as Yup from "yup";
import useUserDetails from "../../hooks/UserDetailsHook";
import { whereQuery } from "../../configs/firebase/actions";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../../pages/types";
import { User } from "./types";
import "./../form/Form.css";

const initialValues = { email: "", password: "" };

export default function LogInForm() {
  const { logIn } = useUserAuth();
  const { storeCurrentUserDetails } = useUserDetails();
  const navigate = useNavigate();
  const alert = useToast();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
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
    } catch (error) {
      alert({ description: (error as Error).message, status: "error" });
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: handleSubmit,
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
          <p className="error">{formik.errors.email}</p>
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
          <p className="error">{formik.errors.password}</p>
        ) : null}

        <ButtonUI children="Login" type="submit" />
      </form>
    </div>
  );
}
