import CategoryItems from "./CategoryItems";

const MenuCategory = ({data , showItems, setShowIndex}) => 
{
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 p-3 bg-gray-100 shadow-xl">

                <div 
                    className= "flex justify-between cursor-pointer" 
                    onClick= {() =>  setShowIndex() } 
                >
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {/**Accordion Body */
                    showItems && <CategoryItems data={data.itemCards}/>
                }
            </div>
        </div>
    )
     
};

export default MenuCategory;