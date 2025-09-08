import React from "react";
import ReactDOM from "react-dom/client";

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
