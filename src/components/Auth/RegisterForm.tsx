import { FormLabel, Input, RadioGroup, Radio, HStack } from "@chakra-ui/react";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useFormik } from "formik";
import { UserTypes } from "./types";
import * as Yup from "yup";
import { useUserAuth } from "../../contexts/AuthContext";

const initialValues = { name: "", email: "", password: "", type: "" };

export default function RegisterForm() {

  const { signUp } = useUserAuth();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      signUp(values.email, values.password, values.name, values.type);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Too short")
        .max(30, "Too long"),
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      type: Yup.string().required("Required"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel>First name</FormLabel>
        <Input
          type="text"
          placeholder="First name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        {formik.errors.name ? (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        ) : null}

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

        <RadioGroup defaultValue="" name="type" mt={5}>
          <HStack spacing="24px">
            <Radio onChange={formik.handleChange} value={UserTypes.CUSTOMER}>
              Customer
            </Radio>
            <Radio onChange={formik.handleChange} value={UserTypes.RESTAURANT}>
              Restaurant owner
            </Radio>
          </HStack>
        </RadioGroup>
        {formik.errors.type ? (
          <p style={{ color: "red" }}>{formik.errors.type}</p>
        ) : null}

        <ButtonUI children="Create account" type="submit" />
      </form>
    </div>
  );
}
