import { useDispatch } from "react-redux";
import { CDN_URL, EX_URL } from "../../utils/StaticData/constant";
// Also needs to Import the dispatch action
import { addItem } from "../../utils/Redux/cartSlice";

const CategoryItems = (itemCards) => 
{
  // Returns the dispatch function from the Redux store.
  const dispatch = useDispatch();

  const addItemsToCart = (item) => 
  {
    console.log(item.card.info.name, "Item added in the Cart");
    
    // Dispatch an action called addItem with payload, Note addItem action needs to import otherwise you will see error: ReferenceError: addItem is not defined
    dispatch(addItem(item));
  }

  return (
    <div className="bg-white">
      {
        itemCards.data.map((item) => 
        (
            <div key={item.card.info.id} className="p-2 m-3 border border-gray-200 border-b-4 text-left flex justify-between">
                    
                <div className="w-9/12">

                    <div className="py-2">
                        <h2>{item.card.info.name}</h2>
                        <span> ₹. {item.card.info.price / 100}</span>
                    </div>

                    <p className="text-xs">{item.card.info.description}</p>
                </div>

                <div className="w-3/12">
                    <div className="absolute"> 
                        <button 
                          className="cursor-pointer p-2 bg-white shadow-lg mx-10 my-20 rounded-xl text-green-600 font-bold"
                          onClick={() => addItemsToCart(item)}
                        >Add➕
                        </button>
                    </div>

                    <img className="w-full rounded-lg" src={item.card.info?.imageId != null ? CDN_URL + item.card.info?.imageId : EX_URL} />
                </div>

            </div>
        ))
      }
    </div>
  );
};

export default CategoryItems;
