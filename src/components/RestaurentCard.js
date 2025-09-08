import { FOOD_IMG } from "../utils/constants";
const RestaurentCard = ({restdata}) => {
    //const {restList} = props; //Destructuring  

    const{cloudinaryImageId, name,costForTwo,cuisines, avgRating} = restdata?.info
    return (
        <div className="restaurant-card">
        <img
            className="restaurant-logo"
            src={FOOD_IMG + cloudinaryImageId}
            alt="restaurant-logo"
        />
            {/* <h3>{props.name}</h3>
            <h4>{props.cusine}</h4> */}
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
        </div>
    )
}
export default RestaurentCard;