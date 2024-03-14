import { Heading } from "@chakra-ui/react";
import { RestaurantForm } from "../../components";
import { formDataInterface } from "../../components/form/RestaurantForm";
import { add } from "../../configs/firebase/actions";
import useUserDetails from "../../hooks/UserDetailsHook";
import { useNavigate } from "react-router-dom";
import useFetchRestaurant from "../../hooks/FetchRestaurantHook";


export default function CreateRestaurant() {
  const { getCurrentUserDetails } = useUserDetails();
  const { userId } = getCurrentUserDetails();
  const restaurant = useFetchRestaurant("userId", userId);
  const navigate = useNavigate();

  const submitRestaurantFormHandler = (formData: formDataInterface) => {
    add("restaurants", { ...formData, userId }).then(() => {
      navigate("/dashboard");
    });
  };

    return (
    <div>
      <Heading mb={50}>Register your business</Heading>
      <RestaurantForm  handleCreateRestaurantSubmit ={submitRestaurantFormHandler} />
    </div>
  );
}
