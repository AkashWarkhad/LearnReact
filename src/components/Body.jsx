import Card from "./RestrCard";
import { useState, useEffect } from "react";
import ShimmerLoader from "./ShimmerLoader";
import { Link } from "react-router-dom";

const Body = () => 
{
  // useState Variable - Local state variable super powerful variable
  const [sourceData, setSourceData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const [searchInput, setSearchInput] = useState("");

 /**
 * useEffect accepts two parameters:
 * 1. A callback function (side-effect logic)
 * 2. A dependency array (optional)
 *
 * Behavior of useEffect:
 * - If no dependency array is provided:
 *   → Runs after every render of the component
 *
 * - If an empty dependency array [] is provided:
 *   → Runs only once after the initial render (component mount)
 *
 * - If dependency array has values [value1, value2]:
 *   → Runs after initial render and whenever any dependency value changes
 */

  useEffect(()=> 
    {
      console.log("Last - UseEffect Redering Called! after Body rendering completes.");
      fetchData();

      return() =>{
         // cleanup BEFORE next effect run
      };
    }, []);

  const fetchData = async () => 
  {
    // https://corsproxy.io/? use corsProxy is used to avoid CORS issue. has a limit so keep mind in prod
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log("Swiggy Api:", json);

    // Optional Chaining
    var restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
    console.log("Restaurants :", restaurants);
    setSourceData(restaurants);
    setFilterData(restaurants);
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
                const searchFilter = sourceData.filter(x=> x.info.name.toLowerCase().includes(searchInput.toLowerCase()));
                setFilterData(searchFilter);
                console.log("Filtered Data After Search:" , searchFilter);
              }}>Search
          </button>
        </div>
        
        
        <button className="filter-btn" onClick=
          {()=> 
            {
              const filteredData = sourceData
              .filter(x=> x.info.avgRating >= 4.5)
              .sort((a, b)=> b.info.avgRating - a.info.avgRating);

              setFilterData(filteredData);
              console.log("Button Clicked!!! Filtered Data", filteredData);
            }
          }>Filter Top Rated Restaurants
        </button>
      </div>

      <div className="restro-container">
        {
            filterData.map((rest)=> 
            (
                /**Key should be present always & use of index as a key is not recommended 
                 * For Routing :
                 *  - Added Link on top of Card 
                 *  - Added routing by to= "http://localhost:1234/restaurant/243625"
                 *  - Moved Key from Card to on Link
                */
                <Link key={rest.info.parentId + rest.info.id} to={"/restaurant/" + rest.info.id}>
                  <Card params={rest.info}></Card>
                </Link>
            ))
        }
      </div>
    </div>
  );
};

export default Body;