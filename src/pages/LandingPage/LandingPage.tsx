import { Stack } from "@chakra-ui/react";
import ButtonUI from "../../components/UI/buttonUI/ButtonUI";
import ModalUI from "../../components/UI/modalUI/ModalUI";
import { useState } from "react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LogInForm from "../../components/Auth/LogInForm";
import { AuthModals } from "../../components/Auth/types";
import CardUI from "../../components/UI/cardUI/CardUI";
import AppLogo from "../../components/UI/logo/AppLogo";
import { modalAtributes } from "../../components/UI/modalUI/ModalUI";

function LandingForm() {
  const [modal, setModal] = useState(modalAtributes);
  return (
    <>
      <AppLogo />
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
      <ModalUI
        modalID={modal.modalID}
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: !modal.isOpen })}
        title={
          modal.modalID === "login"
            ? "Login to your account"
            : "Register your restaurant"
        }
        children={modal.modalID === "login" ? <LogInForm /> : <RegisterForm />}
      />
    </>
  );
}

export default function LandingPage() {
  return (
    <CardUI title="Welcome to the Restaurant" children={<LandingForm />} />
  );
}
