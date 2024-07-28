import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setIsOpen }) => {
  const { title, menuItems } = data;

  const handleClick = () => {
    setIsOpen();
  };
  return (
    <div className="p-4 bg-sky-100 w-6/12 mx-auto shadow-lg mb-5 rounded-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <h1 className="font-bold" >
          {title} ({menuItems.length})
        </h1>
        <span>▼</span>
      </div>
      {isOpen && (
        <div className="p-4">
          <ItemList items={menuItems} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
