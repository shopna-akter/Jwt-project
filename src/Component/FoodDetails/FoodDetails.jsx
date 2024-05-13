import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const FoodDetails = () => {
    const foods = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const food = foods.find(food => food._id == id);
    console.log(id, idInt, foods);
    return (
        <div className="container mx-auto my-8">
            <Helmet>
                <title>HomeSpot | food Details of {food.Food_name}</title>
            </Helmet>
            <div className="max-w-3xl mx-auto px-4">
                <img className="w-full h-auto rounded-lg" src={food.Image} alt="" />
                <div className="text-center">
                    <h2 className="text-3xl font-bold mt-6 mb-4 mx-auto ">{food.Food_name}</h2>
                </div>
                <h2 className="text-3xl font-bold mb-2">Importent Info</h2>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <h2 className="md:text-2xl font-semiBold">Donator:</h2>
                        <p className="md:text-2xl font-semiBold">{food.User_Name}</p>
                    </div>
                    <div className="flex gap-2">
                        <h2 className="md:text-2xl font-semiBold">Pickup Location:</h2>
                        <p  className="md:text-2xl font-semiBold">{food.Pickup_Location}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-2">Food Details</h2>
                    <hr />
                    <div className="flex justify-between gap-4">
                        <div className="flex gap-1">
                            <h2 className="font-semibold mb-2">Quantity:</h2>
                            <p>{food.Quantity}</p>
                        </div>
                        <div className="flex gap-1">
                            <h2 className="font-semibold">Expired Date/Time :</h2>
                            <p>{food.Expired_Date}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link to={`/checkRequest/${food._id}`} className="btn btn-outline w-full">Request</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;