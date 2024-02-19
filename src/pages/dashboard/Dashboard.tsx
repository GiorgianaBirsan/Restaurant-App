import LogoutButton from "../../components/LogoutButton/LogoutButton";
import CardUI from "../../components/UI/CardUI/CardUI";
import AppLogo from "../../components/UI/logo/AppLogo";

export default function Dashboard() {
  return (
    <CardUI
      title="Dashboard"
      children={
        <>
          <AppLogo />
          <LogoutButton />
        </>
      }
    ></CardUI>
  );
}
