import ShimmerLoader from "./ShimmerLoader";
import { menuData } from "../utils/menuMockData";
import { useParams } from "react-router-dom";
import useRestroInfoCustomHook from "../utils/useRestroInfoCustomHook";
import { useState } from "react";

const RestroMenu = () => 
{
    /**
     * Here using Mock data as Api calls is blocked by swiggy.
     */
    const [restro, setRestro] = useState(menuData);

    /**
     * useParams is a React Router hook used to access dynamic route parameters from the URL,
     * such as resId, which helps in fetching specific data.
     */
    const {resId} = useParams();

    console.log("useParams data :", resId);


    /**
     * Due to API call blocked by Swiggy we commented the fetching logic
     *  - After body rendering UseEffect hooks will calls the Fetch() Api call to fetch the resourcses using resId 
     *  - And then set the restro data.
     * 
     *  Custom hook which uses useState & useHook under the hood.
     */
    
    //const restroData = useRestroInfoCustomHook(resId);


    if(restro === null){
        return <ShimmerLoader />
    }

    /**
     * FOr now on every card routes we are returing a static data which is commig from the Mock Data file.
     */
    const menuCards = menuData[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards;
    console.log("itemCards", menuCards);
    console.log(menuData[2]?.card?.card?.info);
    const restroInfo = menuData[2]?.card?.card?.info;

    //Fetching Restro Menu cards with ItemCategory sections
    const category = menuData[4].groupedCard.cardGroupMap.REGULAR.cards.filter(x=> x.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("## category : ", category);

    return (
        <div className="p-2 m-1">
            <h1 className="text-center font-bold text-3xl">{restroInfo.name ?? "Green spice Hotel"}</h1>
            <p className="font-bold text-xl">{restroInfo.cuisines.join(", ") ?? "Coffe, South Indian, North Indian"}</p>
             
        </div>
    )
}

export default RestroMenu;