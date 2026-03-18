import { DEFAULT_CARD_IMAGE_URL } from "../utils/Constant";

const Card = ({params}) => 
{
    const {name, image, rating, cuisine, cft} = params;
    return (
        <div className="restro-card">
        <img
            className="card-img"
            src={image?.url?? DEFAULT_CARD_IMAGE_URL}
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