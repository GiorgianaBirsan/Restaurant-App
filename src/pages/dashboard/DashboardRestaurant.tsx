import { HStack } from "@chakra-ui/react";
import { ButtonUI, CardUI } from "../../components";
import useFetchRestaurant from "../../hooks/FetchRestaurantHook";
import useUserDetails from "../../hooks/UserDetailsHook";

export default function DashboardRestaurant() {
  const { getCurrentUserDetails } = useUserDetails();
  const { userId } = getCurrentUserDetails();

  const getRestaurant = useFetchRestaurant("userId", userId);

  const currentRestaurant = async()=>{
    const response = await getRestaurant().then((res)=> {
        return res
  })
  console.log("🚀 ~ currentRestaurant ~ response:", response);
  return response
  }; 
 
  console.log("🚀 ~ currentRestaurant ~ currentRestaurant:", currentRestaurant)
  return (
    <div>
      <HStack>
        <ButtonUI children="View restaurant" />
        <ButtonUI children="Edit restaurant"/>
      </HStack>
      <CardUI title={currentRestaurant.location}></CardUI>
    </div>
  );
}
