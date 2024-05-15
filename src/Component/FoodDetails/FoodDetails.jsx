import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const foods = useLoaderData();
    const { id } = useParams();
    const food = foods.find(food => food._id == id);
    const currentTime = new Date();
    const formattedTime = `${currentTime.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target
        const User_Name = form.User_Name.value
        const Donator_Email = form.Donator_Email.value
        const Food_name = form.Food_name.value
        const Pickup_Location = form.Pickup_Location.value
        const Expired_Date = form.Expired_Date.value
        const User_Email = form.User_Email.value
        const Image = form.Image.value
        const Donator_Image = form.Donator_Image.value
        const Additional_Notes = form.Additional_Notes.value

        const requestedFood = { Donator_Email, Food_name, User_Name, Pickup_Location, User_Email, Image, Donator_Image, Additional_Notes, formattedTime, Expired_Date }
        console.log(requestedFood);
        fetch('http://localhost:5000/requests', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestedFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const updateData = { status: 'Pending' };
                    fetch(`http://localhost:5000/foods/${food._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updateData) 
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                Swal.fire({
                                    title: "Success!",
                                    text: "Request Succesful",
                                    icon: "success"
                                })
                            }
                        })
                }
            })
    }
    return (
        <div className="container mx-auto my-8">
            <Helmet>
                <title>HomeSpot | food Details of {food.Food_name}</title>
            </Helmet>
            <div className="max-w-3xl mx-auto px-4">
                <img className="w-full h-[500px] rounded-lg" src={food.Image} alt="" />
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
                        <p className="md:text-2xl font-semiBold">{food.Pickup_Location}</p>
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
                    <button className="btn btn-outline w-full btn-neutral" onClick={() => document.getElementById('my_modal_4').showModal()}>Request</button>
                    <dialog id="my_modal_4" className="modal z-0">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <div>
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-6">Food Request</h2>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                    </div>
                                </div>
                                <form onSubmit={handleAddFood} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Donator Name
                                            </label>
                                            <input required type="text" disabled defaultValue={food.User_Name} placeholder="Enter User Name" name="User_Name" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Donator Email</label>
                                            <input disabled defaultValue={food.User_Email} required type="email" placeholder="Enter User Email" name="Donator_Email" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Donator Image</label>
                                            <input type="url" disabled defaultValue={food.Donator_Image} placeholder="Enter Food Donator Image" name="Donator_Image" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Food Id</label>
                                            <input required type="text" disabled defaultValue={food._id} placeholder="Enter Food Image" name="Image" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Food Name</label>
                                            <input required type="text" disabled defaultValue={food.Food_name} placeholder="Enter Food Name" name="Food_name" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Food Image</label>
                                            <input required type="url" disabled defaultValue={food.Image} placeholder="Enter Food Image" name="Image" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Pickup Location
                                            </label>
                                            <input required disabled type="text" defaultValue={food.Pickup_Location} placeholder="Enter Food Pickup location" name="Pickup_Location" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Expired Date
                                            </label>
                                            <input required type="date" disabled defaultValue={food.Expired_Date} placeholder="Enter Food Expired Date" name="Expired_Date" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">User Email</label>
                                            <input defaultValue={user.email} disabled required type="text" placeholder="Enter Food User Email" name="User_Email" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Request Time</label>
                                            <input required type="text" disabled defaultValue={formattedTime} placeholder="Enter Food Image" name="Image" className="input input-bordered w-full" />
                                        </div>
                                        <div>
                                            <div className="mb-2">
                                                <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                                                <textarea required defaultValue={food.Additional_Notes} type="text" placeholder="Enter Food Additional Notes" name="Additional_Notes" className="textarea textarea-bordered w-full md:w-[204%]" />
                                            </div>
                                            <div>
                                                <button className="btn w-full md:w-[204%] text-gray-100 
                            hover:text-white btn-info">Request Food
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;