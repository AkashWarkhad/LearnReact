
const DisplayCard = ({params}) => 
{
    //console.log("DisplayCard :", params);
    const {name, cloudinaryImageId, avgRating, cuisines, totalRatingsString, costForTwo} = params;
    return (
        <div className="w-68 h-90 p-1 m-1 rounded-lg bg-amber-100 hover:bg-amber-200">
            <img
                className="h-50 object-cover w-full rounded-lg bg-cover"
                src= {"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}>
            </img>

            <b className="m-2">{name}</b>
            <p className="p-2 italic">{cuisines.join(", ")}</p>

            <div className="flex">
                <p className="p-2">{avgRating}</p>
                <p className="p-2">Votes({totalRatingsString})</p>
                <p className="p-2 bold">{costForTwo}</p>
            </div>
        </div>
    );
};

export default DisplayCard;

// Higher Order Component
// RestroCard (Input) => RestroCardPromoted (Returns Updated Card)
export const UpdatedDisplayCard = (DisplayCard) => 
{
    return (props) => 
    {
        return(
            <div>
                <label className="absolute bg-black text-white p-1 rounded">Promoted</label>
                <DisplayCard  {...props}/>
            </div>
        );
    };
};