import { FormLabel, Input } from "@chakra-ui/react";
import ButtonUI from "../ButtonUI/ButtonUI";
import { useFormik } from "formik";

import * as Yup from "yup";

const initialValues = { email: "", password: "" };

export default function LogInForm(){
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
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

        <ButtonUI children="Login" type="submit" />
      </form>
    </div>
  );
}
