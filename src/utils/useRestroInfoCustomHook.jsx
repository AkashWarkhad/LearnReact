import { useState, useEffect } from "react";

const useRestroInfoCustomHook = (resId) => 
{
    const [restroInfo, setRestro] = useState(null);

    useEffect(()=> 
    {
        try{
            fetchData();
        }
        catch (ex){
            console.log("Exception :", ex);
        }
    }, []);

    async function fetchData()
    {
        const resp = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=" 
            + resId + 
            "434066&catalog_qa=undefined&submitAction=ENTER");

            const json = await data.json();

            console.log("Card Data:", json);
            var restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
            console.log("Restro", restaurants);

            setRestro(restaurants);

            // Hooks return the Fetch data
            return restroInfo;
    }
}

export default useRestroInfoCustomHook;