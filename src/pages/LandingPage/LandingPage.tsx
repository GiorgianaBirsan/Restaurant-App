import { Card, Stack, Heading, Image, CardProps } from "@chakra-ui/react";
import ButtonUI from "../../components/UI/ButtonUI/ButtonUI";
import ModalUI from "../../components/UI/ModalUI/ModalUI";
import { useState } from "react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LogInForm from "../../components/Auth/LogInForm";
import { AuthModals } from "../../components/Auth/types";

// type ModalAtributes = {
//   modalID: AuthModals;
//   isOpen: boolean;
//   onClose: () => void;
// };

const modalAtributes = {
  modalID: "",
  isOpen: false,
  onClose: () => {},
};
export default function LandingPage() {
  const [modal, setModal] = useState(modalAtributes);

  return (
    <>
      <Card {...cardStyle}>
        <Heading as="h3" color="teal">
          Welcome to the Restaurant
        </Heading>
        <Image
          src="../../../public/assets/Experikitchen Logo - Original with Transparent Background.svg"
          alt="restaurant logo"
          boxSize="300px"
          objectFit="cover"
          mt={50}
          mb={50}
        />
        <Stack gap="200px" direction="row">
          <ButtonUI
            onClick={() =>
              setModal({
                ...modal,
                modalID: AuthModals.LOGIN,
                isOpen: !modal.isOpen,
              })
            }
            children="Login"
          />
          <ButtonUI
            onClick={() =>
              setModal({
                ...modal,
                modalID: AuthModals.REGISTER,
                isOpen: !modal.isOpen,
              })
            }
            children="Register"
          />
        </Stack>
      </Card>
      <ModalUI
        modalID={modal.modalID}
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: !modal.isOpen })}
        title={
          modal.modalID === "login"
            ? "Login to your account"
            : "Register your restaurant"
        }
        children={modal.modalID === "login" ? <LogInForm /> : <RegisterForm />} //onClose={()=> !modal.isOpen}
      />
    </>
  );
}

const cardStyle = {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "auto",
  marginTop: "10%",
  marginBottom: "auto",
  direction: "column",
  padding: "50px",
  variant: "elevated",
  shadow: "xl",
} as CardProps;
