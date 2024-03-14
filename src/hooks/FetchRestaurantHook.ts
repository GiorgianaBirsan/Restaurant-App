import { whereQuery } from "../configs/firebase/actions";

const useFetchRestaurant = (key: string, value: string) => {
  // console.log("🚀 ~ useFetchRestaurant ~ value:", value);
  // console.log("🚀 ~ useFetchRestaurant ~ key:", key);
  const fetch = async () => {
    const restaurants = await whereQuery("restaurants", key, "==", value);
    return restaurants[0];
  };

  return fetch;
};
export default useFetchRestaurant;
