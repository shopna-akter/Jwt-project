import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target
        const User_Name = form.User_Name.value
        const User_Email = form.User_Email.value
        const Food_name = form.Food_name.value
        const Pickup_Location = form.Pickup_Location.value
        const Expired_Date = form.Expired_Date.value
        const Quantity = form.Quantity.value
        const Food_Status = form.Food_Status.value
        const Image = form.Image.value
        const Donator_Image = form.Donator_Image.value
        const Additional_Notes = form.Additional_Notes.value
        const newFood = { User_Email, Food_name, User_Name, Pickup_Location, Food_Status, Image, Donator_Image, Additional_Notes, Quantity, Expired_Date }
        console.log(newFood);
        axios.post('http://localhost:5000/allFoods', newFood, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Tour added successfuly!",
                        icon: "success"
                      })
                }
            })
    }
    return (
        <div className="flex flex-col items-center justify-center py-6 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-center mb-4">Add New Food</h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddFood} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Donator Name
                            </label>
                            <input required type="text" defaultValue={user.displayName} placeholder="Enter User Name" name="User_Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Donator Email</label>
                            <input defaultValue={user.email} required type="email" placeholder="Enter User Email" name="User_Email" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input required type="text" placeholder="Enter Food Name" name="Food_name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pickup Location
                            </label>
                            <input required type="text" placeholder="Enter Food Pickup location" name="Pickup_Location" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Expired Date
                            </label>
                            <input required type="date" placeholder="Enter Food Expired Date" name="Expired_Date" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quantity
                            </label>
                            <input required type="number" placeholder="Enter Food Quantity" name="Quantity" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Food Status</label>
                            <input defaultValue="available" required type="text" placeholder="Enter Food Status" name="Food_Status" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Donator Image</label>
                            <input  type="url" defaultValue={user.photoURL} placeholder="Enter Food Donator Image" name="Donator_Image" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image</label>
                            <input required type="url" placeholder="Enter Food Image" name="Image" className="input input-bordered w-full" />
                        </div>
                        <br />
                        <div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                                <textarea required type="text" placeholder="Enter Food Additional Notes" name="Additional_Notes" className="textarea textarea-bordered w-full md:w-[204%]" />
                            </div>
                            <div>
                                <button className="btn w-full md:w-[204%] text-gray-100 
                            hover:text-white btn-info">Add Food Spot
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;