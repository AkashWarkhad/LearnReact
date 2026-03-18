import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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