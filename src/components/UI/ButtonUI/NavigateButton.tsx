import { useNavigate } from "react-router-dom";
import ButtonUI from "./ButtonUI";

export default function NavigateButton(props: {
  path: string;
  children: string;
}) {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(props.path);
  };

  return (
    <ButtonUI
      children={props.children}
      onClick={onClickHandler}
      type="button"
    />
  );
}
