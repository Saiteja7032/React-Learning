import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";             
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
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
import Header from "./components/Header";
import Body from "./components/Body";
//Outlet is used to show the children of the component..
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
     path: "/",
     element: <AppLayout/>,
     children: [
        {
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurentMenu />,
        },
     ],
     errorElement: <Error/>,
    },
]);   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// =======================================
