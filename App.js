import React from "react";
import ReactDOM from "react-dom/client";

// Assingmant With React.createElement
// const parent = React.createElement("div",{id:"parent"},
// [
//     React.createElement("div",{id:"child1"},
//         [React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("h2",{},"I am h2 tag")]),
//     React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{},"I am h1 tag"),
//             React.createElement("h2",{},"I am h2 tag")])
// ]
// )
//Assingmant With JSX element
// const jsxElement =(
//     <div id="parent">
//         <div id="child1">
//             <h1>I am h1 tag</h1>
//             <h2>I am h2 tag</h2>            
//         </div>
//         <div id="child2">
//             <h1>I am h1 tag</h1>
//             <h2>I am h2 tag</h2>            
//         </div>
//     </div>
// );
//Assingmant With Functional Component
// const JsxComponent = () => (
//     <div id="parent">
//         <div id="child1">
//             <h1>I am h1 tag</h1>
//             <h2>I am h2 tag</h2>            
//         </div>  
//         <div id="child2">
//             <h1>I am h1 tag</h1>
//             <h2>I am h2 tag</h2>            
//         </div>      
//     </div>
//     );

 //Functional Component with return
// const HeadingComponent = () => {
//     return (
//         <div id="container">
//          <Title/>
//             <h2>This is a functional component</h2>
//         </div>
//     );
// };
//React Components
// const Title = ()=>  <h1 className="jsx">Title Component</h1>; 
// const element = <h1> Test element</h1>;
// const Function1 = () => <h1> Test Function</h1>;
// const Function2 = () => <h1> Test Function2</h1>;
// const Function3 = () => <h1> Test Function3</h1>;
 //Functional Component without return
 //Component Composition example
// const HeadingComponent = () => (
//         <div id="container">
//         {13423+987678}
//          {Function1()}
//          <Function2/>
//         <Function3> </Function3>
//          <Title/>
//             <h2>This is a functional component</h2>
//             {element}
//             <JsxComponent/>
//         </div>

// );
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);


//JSX examples:
// const jsxHeading = <h1 id="heading" className="jsx">React Page in JSX</h1>;
// const Heading = <h1 id="heading" className="jsx">React Page in JSX</h1>;
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(Heading);
//const heading = React.createElement("h1", { id: "heading" }, "React Page");

//=======================================
// const LogoComponent = () => (
//     <img src="https://cdn.vectorstock.com/i/1000v/42/04/phoenix-logo-template-vector-43534204.avif" alt="logo"/>
// );
// const SearchComponent = () => (
//    <h1> <input type="text" placeholder="Search"/></h1>
// );
// const UserIconComponent = () => (
//     <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010" alt="user"/>
// );
// const HeaderComponent = () => (
// <div id="header">
// <LogoComponent/>
// <SearchComponent/>
// <UserIconComponent/>
// </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent/>);
// Food App
//List of components for Food App**
/*
1. Header
  > Logo
  > Nav Items
2. Body
  > Search Bar
  > Restaurant Container
    > Restaurant Card
        > Image
        > Name
        > Cusines
        > Rating
3. Footer   
    > Copyright Information
    > Links
    > Address
*/
const Logo = () => (
    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="logo"/>
)
const NavItems = () => {
    return (
    <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    )
}
const Header = () => {
return (
    <div className="header">
        <Logo/>
        <NavItems/>
    </div>
)
}


const RestaurentCard = ({restdata}) => {
    //const {restList} = props; //Destructuring  

    const{cloudinaryImageId, name,costForTwo,cuisines, avgRating} = restdata?.info
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
           cloudinaryImageId
            }alt="restaurant-logo"/>
            {/* <h3>{props.name}</h3>
            <h4>{props.cusine}</h4> */}
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
        </div>
    )
}


const restList = [
    {
    
      info: {
        id: "17105",
        name: "KFC",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5cd9018c-0e72-4cbd-8b53-4e0495282338_17105.JPG",
        locality: "Mehdipatnam",
        areaName: "Mehdipatnam",
        costForTwo: "₹400 for two",
        cuisines: [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        avgRating: 4.1,
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "36K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-08 00:45:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "6.1K+"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/kfc-mehdipatnam-rest17105",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    
      info: {
        id: "10490",
        name: "Pizza Hut",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/04851373-8e8f-4254-af64-919785527369_10490.JPG",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹350 for two",
        cuisines: [
          "Pizzas"
        ],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "29K+",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 4.5,
          serviceability: "SERVICEABLE",
          slaString: "45-55 mins",
          lastMileTravelString: "4.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-08 01:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "3.7K+"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/pizza-hut-banjara-hills-rest10490",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      info: {
        id: "1035580",
        name: "Chinese Wok",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/28/d60a3430-e2c2-41cb-a69d-b7c1e5c3f6f1_1035580.jpg",
        locality: "Attapur",
        areaName: "M-Qube Mall",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        avgRating: 3.8,
        parentId: "61955",
        avgRatingString: "3.8",
        totalRatingsString: "526",
        sla: {
          deliveryTime: 50,
          lastMileTravel: 7,
          serviceability: "SERVICEABLE",
          slaString: "50-60 mins",
          lastMileTravelString: "7.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-07 23:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/chinese-wok-attapur-m-qube-mall-rest1035580",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      info: {
        id: "378344",
        name: "Theobroma",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/0c8391c6-ff9b-4745-8c34-c6f905092c6c_378344.JPG",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Desserts"
        ],
        avgRating: 4.5,
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "4.4K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 4.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-08 00:30:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!"
            },
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png"
                  }
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "265"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/theobroma-banjara-hills-rest378344",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      info: {
        id: "657474",
        name: "Burger King",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
        locality: "R5 Chambers",
        areaName: "Mehdipatnam",
        costForTwo: "₹350 for two",
        cuisines: [
          "Burgers",
          "American"
        ],
        avgRating: 4.2,
        parentId: "166",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-08 04:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/burger-king-r5-chambers-mehdipatnam-rest657474",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      info: {
        id: "56268",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/33479e84-7446-481e-9792-b2699c7598b6_56268.JPG",
        locality: "Panjagutta",
        areaName: "Punjagutta",
        costForTwo: "₹200 for two",
        cuisines: [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        avgRating: 4.6,
        parentId: "2233",
        avgRatingString: "4.6",
        totalRatingsString: "8.4K+",
        sla: {
          deliveryTime: 60,
          lastMileTravel: 6,
          serviceability: "SERVICEABLE",
          slaString: "55-65 mins",
          lastMileTravelString: "6.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-07 23:55:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "769"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/the-belgian-waffle-co-panjagutta-punjagutta-rest56268",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      info: {
        id: "970628",
        name: "Olio - The Wood Fired Pizzeria",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/a3001d91-08ad-41a0-8ae7-24aee19bb074_970628.JPG",
        locality: "AKSHMI VILLA",
        areaName: "Himayat Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts"
        ],
        avgRating: 4.3,
        parentId: "11633",
        avgRatingString: "4.3",
        totalRatingsString: "876",
        sla: {
          deliveryTime: 49,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "45-55 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-08 00:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/olio-the-wood-fired-pizzeria-akshmi-villa-himayat-nagar-rest970628",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    
      info: {
        id: "662646",
        name: "Starbucks Coffee",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/17332b1a-e15c-4c7f-b98c-5f33cc6bf8a0_662646.JPG",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        avgRating: 4.4,
        parentId: "195515",
        avgRatingString: "4.4",
        totalRatingsString: "926",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 4.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-09-07 23:30:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
              description: "Delivery!"
            },
            {
              imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
                  }
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          discountTag: "FLAT DEAL"
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "191"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {
        context: "seo-data-8f7c7f1a-4e55-4afb-b53c-430c3942b01e"
      },
      cta: {
        link: "https://www.swiggy.com/city/hyderabad/starbucks-coffee-banjara-hills-rest662646",
        text: "RESTAURANT_MENU",
        type: "WEBLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ];


const Body = () => {
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
        {
            restList.map((restaurant) => (
                <RestaurentCard   key={restaurant.info.id} restdata={restaurant}/>
            ))
        }
        </div>
        
    </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
// =======================================
