import useFetchRestaurant from "../../hooks/FetchRestaurantHook";


export default function DashboardRestaurant() {
   const getRestaurant = useFetchRestaurant();
   console.log("🚀 ~ DashboardRestaurant ~ getRestaurant:", getRestaurant)
  return (
    <div>
      <h1>Dashboard Restaurant</h1>
    </div>
  );
}
