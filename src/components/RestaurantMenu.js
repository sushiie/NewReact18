import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [isOpen, setIsOpen] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  const renderContent = () => {
    const { name, cuisines, priceForTwo, categories } = resInfo;
    return (
      <>
        <div className="text-center mb-4">
          <h1 className="font-bold my-4 text-2xl">{name}</h1>
          <h1 className="font-bold">
            {cuisines.join(", ")} - {priceForTwo}
          </h1>
        </div>

        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.id}
            data={category}
            isOpen={index === isOpen && true}
            setIsOpen={() => setIsOpen(index === isOpen ? null : index)}
          />
        ))}
      </>
    );
  };

  return resInfo === null ? <Shimmer /> : renderContent();
};

export default RestaurantMenu;
