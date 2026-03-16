const Card = ({params}) => 
{
    const {name, image, rating, cuisine, cft} = params;
    return (
        <div className="restro-card">
        <img
            className="card-img"
            src={image?.url?? "https://b.zmtcdn.com/data/pictures/6/20873206/fb8df9abc30109756ebcb080f6e3003e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"}
        ></img>

        <b className="restro">{name}</b>
        <p className="cuisine">{cuisine.join(", ")}</p>

        <div className="more-info">
            <p className="info">{rating.aggregate_rating}</p>
            <p className="info">Votes({rating.votes})</p>
            <p className="info">{cft.text}</p>
        </div>
        </div>
    );
};

export default Card;