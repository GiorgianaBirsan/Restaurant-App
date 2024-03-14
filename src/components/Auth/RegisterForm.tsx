import {
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  HStack,
  useToast,
} from "@chakra-ui/react";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useFormik } from "formik";
import { UserTypes } from "./types";
import * as Yup from "yup";
import { useUserAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../../pages/types";
import "./../form/Form.css";

const initialValues = { name: "", email: "", password: "", type: "" };

export default function RegisterForm() {
  const { signUp } = useUserAuth();
  const alert = useToast();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(2, "Too short")
      .max(30, "Too long"),
    email: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(4, "Password must be at least 4 characters"),
    type: Yup.string().required("Required"),
  });

  const handlesubmit = (values: {
    email: string;
    password: string;
    name: string;
    type: string;
  }) => {
    try {
      signUp(values.email, values.password, values.name, values.type);
      alert({ description: "Account created", status: "success" });
      navigate(PagesPaths.DASHBOARD);
    } catch (error) {
      alert({
        description: (error as Error).message,
        status: "error",
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handlesubmit,
    validationSchema,
    validateOnChange: false,
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
          <p className="error">{formik.errors.name}</p>
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
          <p className="error">{formik.errors.type}</p>
        ) : null}

        <ButtonUI children="Create account" type="submit" />
      </form>
    </div>
  );
}
