import ShimmerLoader from "../ShimmerLoader";
import { menuData } from "../../utils/StaticData/menuMockData";
import { useParams } from "react-router-dom";
import useRestroInfoCustomHook from "../../utils/CustomHooks/useRestroInfoCustomHook";
import { useContext, useState, useTransition } from "react";
import MenuCategory from "./MenuCategory";
import UserContext from "../../utils/UserContext";

const ShowCardData = () => 
{
    /**
     * Here using Mock data as Api calls is blocked by swiggy.
     */
    const [restro, setRestro] = useState(menuData);
    const [showIndex, setShowIndex] = useState(0);

    //useTransition is used to mark state updates as low priority to keep the UI responsive during heavy rendering.
    const [isPending, startTransition] = useTransition();


    // Access the context data everywhere
    const { loggedInUser } = useContext(UserContext);

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
    
    // const restroData = useRestroInfoCustomHook(resId);
    // console.log("restroData", restroData);


    if(restro === null)
    {
        return <ShimmerLoader />
    }

    /**
     * FOr now on every card routes we are returing a static data which is commig from the Mock Data file.
     */
    //const menuCards = menuData[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards;
    //console.log("itemCards", menuCards);
    
    const restroInfo = restro[2]?.card?.card?.info;
    
    //Fetching Restro Menu cards with ItemCategory sections
    // NOTE : Data is not visible then just change array number
    const menuCategories = restro[4].groupedCard.cardGroupMap.REGULAR.cards.filter(x=> x.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("restroData", menuCategories[1].card.card.itemCards);
    return (
        <div className="p-2 m-1">
            <h1 className="text-center font-bold text-3xl">{restroInfo.name ?? "Green spice Hotel"}</h1>

            <p className="italic">Hi {loggedInUser} happy to see you here, select food & enjoy your meal...</p>
            
            <p className=" text-lg m-4">Cuisines: {restroInfo.cuisines.join(", ") ?? "Coffe, South Indian, North Indian"}</p>

            <h1 className="text-xl font-bold text-center">Menu</h1>

            {/* // While loading the data isPending is true so Loader will be redered for good user interface */}
            {isPending && <h3 className="text-center">Loading items...</h3>}

            {
                /*Show the Menu categories Accordion */
                menuCategories.map((category, index) => 
                    <MenuCategory
                        key={category.card.card.categoryId}
                        data={category?.card.card}

                        // Controlled Component
                        showItems={index === showIndex ? true : false}
                        setShowIndex= {()=>{
                            startTransition(() => 
                            {
                                setShowIndex(index);
                            })
                        }} 
                    />) 
            }
        </div>
    )
}

export default ShowCardData;