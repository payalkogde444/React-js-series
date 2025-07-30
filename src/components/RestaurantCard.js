import { CDN_URL } from "../utils/contsants";
import Body from "./Body";

const RestaurantCard = (props) => {
   const{resData} =props;
   console.log(resData)

   const{cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
  }=resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="reslogo"
        src= {CDN_URL+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
       <h4>{sla.deliveryTime}minutes</h4>
      
    </div>
  );
};
export default  RestaurantCard;