import ButtonUI from "../../components/UI/ButtonUI/ButtonUI";
import { useNavigate } from "react-router-dom";
import { PagesPaths } from "../types";
import { useUserAuth } from "../../contexts/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { logOut } = useUserAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <ButtonUI
        type="button"
        children="Logout"
        onClick={() => {
          navigate(PagesPaths.LANDING), logOut();
        }}
      />
    </div>
  );
}
