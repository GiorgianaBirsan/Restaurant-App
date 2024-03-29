import { useEffect, useState } from "react";
import { NavigateButton } from "../../components";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import CardUI from "../../components/UI/CardUI/CardUI";
import AppLogo from "../../components/UI/logo/AppLogo";
import useFetchRestaurant from "../../hooks/FetchRestaurantHook";
import useUserDetails from "../../hooks/UserDetailsHook";
import { PagesPaths } from "../types";

export default function Dashboard() {
  const { getCurrentUserDetails } = useUserDetails();
  const currentUser = getCurrentUserDetails();

  const currentUserIsCustomer = currentUser?.type === "customer";
 const getRestaurant = useFetchRestaurant("userId", currentUser?.userId);

  const [action, setAction] = useState(
    currentUserIsCustomer
      ? {
          path: PagesPaths.RESTAURANTS,
          children: "View all restaurants",
        }
      : null
  );
  useEffect(() => {
    //if (action) return;

    getRestaurant().then((restaurant) => {
      if (restaurant) {
        
        setAction({
          path: PagesPaths.MANAGE_RESTAURANT,
          children: "Manage your restaurant",
        });
      } else {
        setAction({
          path: PagesPaths.CREATE_RESTAURANT,
          children: "Create restaurant",
        });
      }
    });
  },[currentUser]);

  if (!action) return <div>Loading...</div>;
  return (
    <>
      <LogoutButton />
      <CardUI
        title={
          `Welcome ${currentUser?.firstName.charAt(0).toUpperCase()}` +
          `${currentUser?.firstName.slice(1)}`
        }
        children={
          <div>
            <AppLogo />

            <NavigateButton path={action.path} children={action.children} />
          </div>
        }
      ></CardUI>
    </>
  );
}
