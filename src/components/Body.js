import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import restList from "../utils/mockData";
const Body = () => {
    const [listofRestaurents, setListofRestaurents] = useState(restList);
    return (
    <div className="body">
        <div className="search">
            <button onClick={() => {
                const filteredList = listofRestaurents.filter(
                    (res) => res.info.avgRating > 4
                );
                setListofRestaurents(filteredList);
            }
            }>Top Restaurents</button>
            </div>
        <div className="restaurant-container">
        {
            listofRestaurents.map((restaurant) => (
                <RestaurentCard   key={restaurant.info.id} restdata={restaurant}/>
            ))
        }
        </div>
        
    </div>

    )
}
export default Body;