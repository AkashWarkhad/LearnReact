
const Card = ({params}) => 
{
    const {name, cloudinaryImageId, avgRating, cuisines, totalRatingsString, costForTwo} = params;
    return (
        <div className="restro-card">
        <img
            className="card-img"
            src= {"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
        >
        </img>

        <b className="restro">{name}</b>
        <p className="cuisine">{cuisines.join(", ")}</p>

        <div className="more-info">
            <p className="info">{avgRating}</p>
            <p className="info">Votes({totalRatingsString})</p>
            <p className="info">{costForTwo}</p>
        </div>
        </div>
    );
};

export default Card;