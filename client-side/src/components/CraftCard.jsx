import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CraftCard = ({craft}) => {
    const { _id, craftName, category, stockStatus, processingTime, craftPhotoURL, shortDescription, price, rating } = craft;

    return (
        <Fade cascade duration={1500} damping={500}>
        <div className="card max-w-96 bg-base-100 shadow-xl border mx-auto mb-6">
            <figure className="max-h-64">
                <img src={craftPhotoURL} alt="photo" className="w-full" />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">{craftName}</h2>
                    <span className="badge bg-orange-500 text-white p-3 font-medium">{stockStatus}</span>
                </div>
                <p>{shortDescription}</p>
                <div>
                    <p>
                        <span className="font-bold">Price: </span>
                        <span className="text-orange-600 font-bold text-lg">${price}</span>
                    </p>
                    <p>
                        <span className="font-bold">Category: </span>
                        <span>{category}</span>
                    </p>
                    <p>
                        <span className="font-bold">Processing Time: </span>
                        <span>{processingTime}</span>
                    </p>
                    <p>
                        <span className="font-bold">Rating: </span>
                        <span>{rating} Out of 5</span>
                    </p>
                </div>
                <div className="card-actions self-center">
                    <Link to={`/craft/${_id}`} className="btn bg-orange-500 text-white">View Details</Link>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default CraftCard;