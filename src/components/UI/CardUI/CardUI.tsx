import { Card, Heading, CardProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function CardUI(props: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <Card {...cardStyle}>
        <Heading as="h3" color="teal">
          {props.title}
        </Heading>
        {props.children}
      </Card>
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
