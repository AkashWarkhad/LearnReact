import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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

const Footer = () => 
{
  return <h1></h1>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// Retrieve the start tag & render the page
const start = ReactDOM.createRoot(document.getElementById("start"));
start.render(<AppLayout />);