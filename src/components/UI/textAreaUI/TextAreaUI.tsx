import { Textarea, Stack } from "@chakra-ui/react";

export default function TextAreaUI(props: {
  title: string;
  value?: string;
  onChange?: (e: { target: { name: string; value: string } }) => void;
  placeholder?: string;
  name: string;
}) {
  return (
    <Stack spacing={3} alignItems="flex-start">
      <label>{props.title}</label>
      <Textarea
        width="500px"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </Stack>
  );
}
