import React from "react";
import Card from "./RestrCard";
import source from "../utils/mockData";
import { useState } from "react";

const Body = () => 
{
  // useState Variable - Local state variable super powerful variable
  const [sourceData, setSourceData] = useState(source);

  return (
    <div className="body">
      <div className="filter-bar">
        <button className="filter-btn" onClick=
          {()=> 
            {
              setSourceData(sourceData.filter(x=> x.info.rating.aggregate_rating > 4.4));
              console.log("Button Clicked!!!", sourceData);
            }
          }>Filter Top Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
        {
            sourceData.map((rest)=> 
            (
                /**Key should be present always & use of index as a key is not recommended */
                <Card key={rest.info.resId} params={rest.info}></Card>
            ))
        }
      </div>
    </div>
  );
};

export default Body;