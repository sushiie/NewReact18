import { useEffect, useState } from "react";
import { getRestaurantDataById } from "./mockMenuData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getRestaurantDataById(resId);
    setResInfo(data[0]);
  };
  return resInfo;
};

export default useRestaurantMenu;
