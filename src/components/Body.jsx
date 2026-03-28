import React from "react";
import Card from "./RestrCard";
import { useState, useEffect } from "react";
import ShimmerLoader from "./ShimmerLoader";

const Body = () => 
{
  // useState Variable - Local state variable super powerful variable
  const [sourceData, setSourceData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  /**
   * useEffect is accepts the 2 parameters (CallBackFunction, [Value- If its changes then useEffect refreshes/Activate])
   * Generally useEffect hook called after Body/main content renders.
   */
  useEffect(()=> 
    {
      console.log("Last - UseEffect Redering Called! after Body rendering completes.");
      fetchData();
    }, []);

  const fetchData = async () => 
  {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log("Swiggy Api:", json);

    // Optional Chaining
    var restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
    console.log("Restaurants :", restaurants);
    setSourceData(restaurants);
  }

  //Whenever state variable updates then react triggers the reconciliation cycle process(re-rendering the component)
  console.log("1. Body Rendering Called")

  // Conditional Rendering
  return sourceData.length === 0 
  ? (<ShimmerLoader/>)
  : (
    <div className="body">
      <div className="filter-bar">

        <div className="search">
          <input
            name="inputSearch"
            className="search-input" 
            type="search"
            value={searchInput} // Tied the searchInput with input value
            onChange={(evt)=>
              {
                setSearchInput(evt.target.value); // OnChange of input, the data will be set to searchInput varaible + Input Search box as we tied value with input
              }}>
          </input>

          <button 
            className="search-btn" 
            onClick={()=> 
              {
                // Filter the cards based on input from search bar. value={searchInput} <- binding input with local useState variable
                const serachFilter = sourceData.filter(x=> x.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                setSourceData(serachFilter);

                console.log(serachFilter);
              }}>Search
          </button>
        </div>
        
        
        <button className="filter-btn" onClick=
          {()=> 
            {
              const filteredData = sourceData
              .filter(x=> x.info.avgRating >= 4.5)
              .sort((a, b)=> b.info.avgRating - a.info.avgRating);

              setSourceData(filteredData);
              console.log("Button Clicked!!! Filtered Data", filteredData);
            }
          }>Filter Top Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
        {
            sourceData.map((rest)=> 
            (
                /**Key should be present always & use of index as a key is not recommended */
                <Card key={rest.info.parentId + rest.info.id} params={rest.info}></Card>
            ))
        }
      </div>
    </div>
  );
};

export default Body;