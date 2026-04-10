import { useState, useEffect } from "react";

const useRestroInfoCustomHook = (resId) => 
{
    const [restroInfo, setRestroInfo] = useState(null);

    useEffect(()=> 
    {
        fetchData();
    }, [resId]);

    // Return the fetched restroInfo data to custom Hook Calller.
    return restroInfo;

    async function fetchData()
    {
        try
        {
            const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5211&lng=73.8502&restaurantId=" 
            + resId + 
            "434066&catalog_qa=undefined&submitAction=ENTER");

            const json = await data.json();

            console.log(resId + " Restro Data:", json);
            var restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
            console.log("Restro", restaurants);

            setRestroInfo(restaurants); 
        }
        catch (ex)
        {
            console.log("Exception :", ex);
        }

        //return Cleanup CallBack Function;
    }
}

export default useRestroInfoCustomHook;