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

    return (
        <div>
            <h1>{restroInfo.name + (Math.random() * 100)  ?? "Green pice Hotel"}</h1>
            <h3>Cuisines :{restroInfo.cuisines.join(", ") ?? "Coffe, South Indian, North Indian"}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    menuCards.map(x => <li key={ x.card.info.id}>{x.card.info.name} - RS {x.card.info.price /100}</li>)
                }
            </ul>
        </div>
    )
}

export default RestroMenu;