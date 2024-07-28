import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex flex-col w-64 flex-wrap p-2 bg-gray-200 m-2 min-h-[480px] rounded-lg hover:bg-slate-400">
      <img
        alt="res-logo"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold my-2">{name}</h3>
      <h4>
        {cuisines.slice(0, 4).join(", ")} {cuisines.length > 4 && "..."}
      </h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;

export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => (
    <div data-testid="resCard">
      <label className="absolute px-2 bg-black text-white rounded-lg m-1">
        Open Now
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};
