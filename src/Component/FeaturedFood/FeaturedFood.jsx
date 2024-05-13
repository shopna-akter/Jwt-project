/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeaturedFood = ({food}) => {
    const {  Food_name, User_Name, Pickup_Location, Food_Status, Image, Donator_Image, Additional_Notes, Quantity, Expired_Date , _id } = food
    // console.log(food);
    return (
        <div className="mx-4">
            <div>
                <div className="mb-4">
                    <div className="card border bg-base-100 shadow-xl">
                        <figure>
                            <img src={Image} className='h-60' alt={Food_name} />
                        </figure>
                        <div className="card-body text-left">
                            <div className="text-center mr-2">
                                <h2 className="font-bold text-xl">{Food_name}</h2>
                            </div>
                            <p>{Additional_Notes}</p>
                            <div className="card-actions justify-between">
                                <div className="flex gap-2">
                                    <span>Cost:</span>
                                    <span>{Quantity}</span>
                                </div>
                                <div className="flex gap-2">
                                    <h1>Country:</h1>
                                    <span>{Expired_Date}</span>
                                </div>
                            </div>
                            <div className="card-actions justify-between">
                                {/* <div className="flex items-center gap-2">
                                    <span><FaLocationDot /></span>
                                    <span>{location}</span>
                                </div> */}
                                <div className="flex gap-2">
                                    <span>Seasonality:</span>
                                    <span>{Food_Status}</span>
                                </div>
                            </div>
                            <div className="card-actions justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Travel time:</span>
                                    {/* <span>{User_Email}</span> */}
                                </div>
                                <div className="flex gap-2">
                                    <span>Visitors(year):</span>
                                    <span>{Pickup_Location}</span>
                                </div>
                            </div>
                            <Link className="btn btn-info" to={`Foods/${_id}`}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;