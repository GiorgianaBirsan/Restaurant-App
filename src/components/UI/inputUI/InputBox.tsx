import { Input, Stack } from "@chakra-ui/react";

export default function InputBox(props: {
  title?: string;
  type: string | undefined;
  placeholder?: string;
  value: string;
  required?: boolean;
  name: string;
  variant?: string;
  multiple?: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
}) {
  return (
    <div>
      <Stack spacing={3} alignItems="flex-start">
        <label>{props.title}</label>
        <Input
          width={props.type === "time" ? "250px" : "500px"}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.required}
          name={props.name}
          variant={props.variant}
          multiple={props.multiple}
          onChange={props.onChange}
          className={props.className}
        />
      </Stack>
    </div>
  );
}
