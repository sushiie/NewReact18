import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {items.map((item) => {
        const { itemName, price, id } = item;
        return (
          <div
            className="flex justify-between border-b-2 border-gray-100 items-center bg-slate-200 pr-4"
            key={id}
          >
            <div className="p-4">
              <h1>{itemName}</h1>
              <p>$ {price}</p>
            </div>
            <div>
              <button
                className="py-1 px-2 bg-slate-600 rounded-lg text-white"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
