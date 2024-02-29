import ButtonUI from "../UI/buttonUI/ButtonUI";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../../pages/types";
import { useUserAuth } from "../../contexts/AuthContext";

export default function LogoutButton() {
  const navigate = useNavigate();
  const { logOut } = useUserAuth();
  return (
    <div>
      <ButtonUI
        variant="outline"
        type="button"
        children="Logout"
        onClick={async () => {
          navigate(PagesPaths.LANDING), await logOut();
        }}
      />
    </div>
  );
}
