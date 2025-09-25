import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
//import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listofRestaurents, setListofRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
        
    }, []);

    const fetchData=async () => {
        // API call
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        // const restaurantCard = json?.data?.cards.find(
        // (c) => c?.card?.card?.id === "restaurant_grid_listing_v2"
        // );
         const restaurants = json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

        // const restaurants =
        // restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListofRestaurents(restaurants);
        setFilteredRestaurents(restaurants);
          // setLoading(false);==============
   }
    return listofRestaurents.length== 0 ? (<Shimmer/>) : (
    <div className="body">
        <input className="search" type="text" placeholder="Search"
        value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value)}}
        />
        <button
        onClick={() => {
            
            const filteredRestaurents=listofRestaurents.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
                setFilteredRestaurents(filteredRestaurents);
            
        }}
        >Search</button>
        <div className="filter">
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
            filteredRestaurents.map((restaurant) => (
                <Link to={"/restaurents/"+ restaurant.info.id} key={restaurant.info.id}><RestaurentCard  restdata={restaurant}/></Link>
            ))
        }
        </div> 
    </div>

    )
}
export default Body;

// Infinite scroll POST fetch===================
   