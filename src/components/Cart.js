import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 my-4 mx-auto w-6/12 text-center">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      <button
        className="m-2 p-2 rounded-lg self-center bg-orange-200"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
