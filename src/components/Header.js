import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtnTxt, setLoginBtnTxt] = useState("Login");

  const { loggedInUser, setHeaderUser } = useContext(UserContext);

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-4 flex justify-between bg-green-200 align-middle shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex p-4">
        <ul className="flex">
          <li className="mx-4 my-auto">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-4 my-auto">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mx-4 my-auto">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="mx-4 my-auto">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="mx-4 my-auto">
            <Link to={"cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="mx-4 my-auto"
            onClick={() => {
              // setHeaderUser("New User");
              loginBtnTxt === "Login"
                ? setLoginBtnTxt("Logout")
                : setLoginBtnTxt("Login");
            }}
          >
            {loginBtnTxt}
          </button>
          <li className="mx-4 my-auto">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
