import { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
//import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listofRestaurents, setListofRestaurents] = useState([]);
    const [filteredRestaurents, setFilteredRestaurents] = useState([]);
    const [searchText, setSearchText] = useState("");
   // const [page, setPage] = useState(1); // Track page or offset for pagination==========
    //const [loading, setLoading] = useState(false);===========
    useEffect(() => {
        fetchData();
         // Attach scroll event
        // window.addEventListener("scroll", handleScroll);===================
        // return () => window.removeEventListener("scroll", handleScroll);===================
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
                <RestaurentCard   key={restaurant.info.id} restdata={restaurant}/>
            ))
        }
        </div> 
    </div>

    )
}
export default Body;

// Infinite scroll POST fetch===================
    // const fetchMore = async () => {
    //     setLoading(true);
    //     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             lat: 17.38430,
    //             lng: 78.45830,
    //             // Add more params if needed
    //         }),
    //     });
    //     const json = await response.json();
    //     const more = json?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    //     setListofRestaurents(prev => [...prev, ...more]);
    //     setFilteredRestaurents(prev => [...prev, ...more]);
    //     setLoading(false);
    // };

    // // Detect scroll to bottom
    // const handleScroll = () => {
    //     if (
    //         window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading
    //          ) {
    //         fetchMore();
    //     }
    // };==============================
   //Conditional Rendering
//    if(listofRestaurents.length== 0) {
//         return <Shimmer/>;
//    }