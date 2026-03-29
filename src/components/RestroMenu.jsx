import { useEffect, useState } from "react"
import ShimmerLoader from "./ShimmerLoader";

const RestroMenu = () => 
{
    const [restro, setRestro] = useState(null);

    useEffect(()=> {
        FetchMenu();
    }, []);

    const FetchMenu = async ()=>
    {
        try{
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();

            console.log("Card Data:", json);
            var restaurants = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
            console.log("Restro", restaurants);
            setRestro(restaurants);
        }
        catch (ex){
            console.log(ex);
        }
    }

    return restro === null 
    ? <ShimmerLoader/> 
    :(
        <div>
            <h1>{restro[0]?.info.name}</h1>
            <h2>{restro[0]?.info.costForTwo}</h2>
            <h2>Cuisines</h2>
            <ul>
                {
                    restro[0]?.info.cuisines.map(x=> <li key={ restro[0]?.info.id + Math.random()}>{x}</li>)
                }
            </ul>
        </div>
    )
}

export default RestroMenu