import { useContext, useEffect, useState } from "react";
// import resObj from "../common/mockData";
import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurtants] = useState([]);
  const RestaurantWithIsOpen = withIsOpenLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  const fetchData = async () => {
    const data = await fetch(DATA_URL);

    const json = await data.json();

    const actualApiData =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(actualApiData);
    setfilteredRestaurtants(actualApiData);
  };

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-4 flex justify-center">
        <div>
          <input
          data-testid="searchText"
            type="text"
            className="border-[1px] border-black p-2 w-80"
            value={searchText}
            placeholder="Search you restaurant"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className=" bg-blue-300 px-5 py-2 rounded-sm mx-2"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurtants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className=" bg-orange-300 px-5 py-2 rounded-sm mx-2">
          <button
            onClick={() => {
              setListOfRestaurants(
                listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4
                )
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <label>User Name: </label>
          <input
            type="text"
            className="border-[1px] border-black p-2 w-80"
            value={loggedInUser}
            placeholder="Type User Name here"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/1"} key={restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <RestaurantWithIsOpen resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
