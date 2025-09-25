import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
const RestaurentMenu = () => {
   const [resInfo, setResInfo] = useState(null);

   const {resId} = useParams();

useEffect(() => {
    //Api call to fetch Restaurent Menu data
    fetchMenu();
},[]);

const fetchMenu = async () => {
    const data = await fetch (
        Menu_API + resId
    );
    const json = await data.json();
    console.log(json)

    setResInfo(json.data);
}
if (resInfo === null) {
    return <Shimmer/>;
}
const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
console.log(name, cuisines, costForTwoMessage);
//const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
// Get all REGULAR cards
const regularCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

// Find the card that has itemCards
const menuCard = regularCards.find(
  (c) => c?.card?.card?.itemCards
);

// Extract itemCards (fallback to empty array if not found)
const itemCards = menuCard?.card?.card?.itemCards || [];
console.log(itemCards);
return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(" , ")} - {costForTwoMessage}</h3> 
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs. "} {item.card.info.defaultPrice/100 || item.card.info.price/100}
                </li>)}
            </ul>
        </div>
    );
}
export default RestaurentMenu