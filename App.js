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
const RestaurentCard = (props) => {
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/9/19/13269d05-5a85-4281-a769-f1c3177bf404_1441e7bd-e897-4200-88fe-10c90840abe6.jpg" alt="restaurant-logo"/>
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h5>4.5 Stars</h5>
        </div>
    )
}
const Body = () => {
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
            <RestaurentCard name="KFC" cusine="fast food"/>
            <RestaurentCard name="pistahouse"  cusine="biryani"/>
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
