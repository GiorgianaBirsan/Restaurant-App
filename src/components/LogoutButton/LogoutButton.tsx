
import ButtonUI from "../../components/UI/ButtonUI/ButtonUI";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../../pages/types";
import { useUserAuth } from "../../contexts/AuthContext";
export default function LogoutButton() {
  const navigate = useNavigate();
  const { logOut } = useUserAuth();
  return (
    <div>
      <ButtonUI
        type="button"
        children="Logout"
        onClick={async () => {
          navigate(PagesPaths.LANDING), await logOut();
        }}
      />
    </div>
  );
}
