import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ReactNode, ReactPortal} from "react";
import { createPortal } from "react-dom";

export const modalAtributes = {
  modalID: "",
  isOpen: false,
  onClose: ()=>{},
};

export function ModalUI(props: {
  title?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalID?: string;
}): ReactPortal | null {



  return createPortal(
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader m="auto">{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>
        </ModalContent>
      </Modal>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
}
export default ModalUI;
