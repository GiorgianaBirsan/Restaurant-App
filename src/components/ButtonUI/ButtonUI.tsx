
import {Button} from "@chakra-ui/react";

export default function ButtonUI(props:{
  variant?: string, 
  colorScheme?: string,
  type?: string,
  onClick?: () => void,
  children: string,
}) {
  return (
    <Button
      variant={props.variant || "solid"}
      colorScheme={props.colorScheme || "teal"}
      type={props.type as "submit" | "reset" | undefined || "button"}
      onClick={props.onClick}
      pl={10}
      pr={10}
      mt={10}
      mb={10}
    >
      {props.children}
    </Button>
  );
}
