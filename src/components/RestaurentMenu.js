import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
   const [resInfo, setResInfo] = useState(null);
useEffect(() => {
    //Api call to fetch Restaurent Menu data
    fetchMenu();
},[]);

const fetchMenu = async () => {
    const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=10490&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json)

    setResInfo(json.data);
}
if (resInfo === null) {
    return <Shimmer/>;
}
const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedcard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards;
   console.log(itemCards);
return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(" , ")} - {costForTwoMessage}</h3> 
            <h3>Menu</h3>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}
export default RestaurentMenu