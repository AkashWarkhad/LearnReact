import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Food app design : 
 * HEADER :
 *  - Logo
 *  - Nav Items
 * 
 * BODY :
 *  - Search Bar
 *  - Restaurant Container
 *      - Food Cards
 *          - Img, Name of restro, star rating, cusines, delivery time
 *  
 * FOOTER :
 *  - Copyrights
 *  - Contact details
 *  - Links
 *  - Addess
 */

const Header = () => 
{
    return(
    <div className="header">
        
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&s"></img>
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);
}

const Card = () => 
{
    return(
        <div className="restro-card">
            <img className="card-img" 
            src="https://b.zmtcdn.com/data/pictures/6/20873206/fb8df9abc30109756ebcb080f6e3003e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"></img>
            <b className="restro">Gruham Restaurant.</b>
            <p className="reference">North Indian, Kebab, Seafood, Biryani, Beverages</p>
            <div className="more-info">
                <p className="info">4.4 Star</p>
                <p className="info">32 min</p>
                <p className="info">₹500 for 2</p>
            </div>
        </div>
    );

}

const Body = () => 
{
    return(
        <div className="body">

            <div className="search-bar">
                SearchBar
            </div>

            <div className="restro-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
    );
}

const Footer = () => 
{
    return(
        <h1></h1>
    );
}

const AppLayout = () => 
{
    return(
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>);
}


// Retrieve the start tag & render the page
const start = ReactDOM.createRoot(document.getElementById("start"));
start.render(<AppLayout/>);