import React from "react";
import Card from "./RestrCard";
import { useState, useEffect } from "react";
import ShimmerLoader from "./ShimmerLoader";

const Body = () => 
{
  // useState Variable - Local state variable super powerful variable
  const [sourceData, setSourceData] = useState([]);

  /**
   * useEffect is accepts the 2 parameters (CallBackFunction, [])
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


  if(sourceData.length === 0)
  {
    // Can replace with loader icon.
    //return <h1>Loading...</h1>

    return <ShimmerLoader/>
  }

  console.log("1. Body Rendering Called")
  return (
    <div className="body">
      <div className="filter-bar">
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