import { VStack, HStack, Image } from "@chakra-ui/react";
import React, { ChangeEventHandler, useState } from "react";
import { ButtonUI, InputBox, TextAreaUI } from "..";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../../pages/types";

export interface formDataInterface {
  name: string;
  location: string;
  description: string;
  imageRef: string;
  contact: string;
  email: string;
  openAt: string;
  closeAt: string;
}
const initialValues = {
  name: "",
  location: "",
  description: "",
  contact: "",
  imageRef: "",
  email: "",
  openAt: "",
  closeAt: "",
};

interface ChildProps {
  handleCreateRestaurantSubmit: (data: formDataInterface) => void;
}

const RestaurantForm: React.FC<ChildProps> = ({
  handleCreateRestaurantSubmit,
}) => {
  const [files, setFiles] = useState<string[]>([]);
  const values = initialValues;
  const navigate = useNavigate();

  const photoChangeHandler = (e: {
    target: { files: (Blob | MediaSource)[] };
  }) => {
    const enhancedFilesLinks = [];
    for (let i = 0; i < e.target.files.length; i++) {
      enhancedFilesLinks.push(URL.createObjectURL(e.target.files[i]));
    }
    setFiles(enhancedFilesLinks);
  };

  const handleSubmit = (values: formDataInterface) => {
    try {
      files.length > 1
        ? (values.imageRef = files.join(","))
        : (values.imageRef = files[0]);

      // this will pass the values to the parent component to be stored in firebase.
      handleCreateRestaurantSubmit(values);

      formik.resetForm();
    } catch (error) {
      alert({ description: (error as Error).message, status: "error" });
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    location: Yup.string().required("required"),
    description: Yup.string().required("required"),
    email: Yup.string().required("required"),
    openAt: Yup.string().required("required"),
    closeAt: Yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
        <VStack>
          <InputBox
            title="Restaurant name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.location ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}

          <InputBox
            title="Address"
            name="location"
            type="text"
            value={formik.values.location}
            onChange={formik.handleChange}
          />
          {formik.errors.location ? (
            <p className="error">{formik.errors.location}</p>
          ) : null}

          <TextAreaUI
            title="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.errors.description ? (
            <p className="error">{formik.errors.description}</p>
          ) : null}

          <InputBox
            title="Restaurant contact (tel)"
            name="contact"
            type="tel"
            value={formik.values.contact}
            onChange={formik.handleChange}
          />
          {formik.errors.contact ? (
            <p className="error">{formik.errors.contact}</p>
          ) : null}

          <InputBox
            title="Restaurant email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}

          <HStack>
            <VStack>
              <InputBox
                title="Open At"
                name="openAt"
                type="time"
                value={formik.values.openAt}
                onChange={formik.handleChange}
              />
              {formik.errors.openAt ? (
                <p className="error">{formik.errors.openAt}</p>
              ) : null}
            </VStack>

            <VStack>
              <InputBox
                title="Close At"
                name="closeAt"
                type="time"
                value={formik.values.closeAt}
                onChange={formik.handleChange}
              />
              {formik.errors.closeAt ? (
                <p className="error">{formik.errors.closeAt}</p>
              ) : null}
            </VStack>
          </HStack>

          <label style={{ alignSelf: "flex-start" }}>Image Gallery</label>
          <input
            style={{ alignSelf: "flex-start" }}
            title="Image Gallery"
            name="imageRef"
            type="file"
            multiple={true}
            value={values.imageRef}
            onChange={photoChangeHandler as unknown as ChangeEventHandler}
          />
        </VStack>
        <HStack mt={5} w="500px" h="auto" flexWrap="wrap">
          {files.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="restaurant image"
              boxSize="100px"
              objectFit="cover"
            />
          ))}
        </HStack>
        <HStack mt={5} w="500px" justifyContent="right">
          <ButtonUI children="Save restaurant" type="submit" />
          <ButtonUI
            children="Cancel"
            type="button"
            variant="outline"
            onClick={() => navigate(PagesPaths.DASHBOARD)}
          />
        </HStack>
      </form>
    </div>
  );
};

export default RestaurantForm;
