import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
    const food = useLoaderData()
    
    const {Food_name,Pickup_Location, Food_Status, Additional_Notes, Quantity, Expired_Date , _id } = food
    console.log(Food_name);
    const handleUpdateFood = e => {
        e.preventDefault()
        const form = e.target
        const Food_name = form.Food_name.value
        const Pickup_Location = form.Pickup_Location.value
        const Expired_Date = form.Expired_Date.value
        const Quantity = form.Quantity.value
        const Food_Image = form.Food_Image.value
        const Additional_Notes = form.Additional_Notes.value
        const updatedFood = {Food_name,Pickup_Location, Food_Image, Additional_Notes, Quantity, Expired_Date }
        console.log(updatedFood);
        fetch(`https://assignment-p11-server.vercel.app/foods/${_id}` , {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:   JSON.stringify(updatedFood)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Good job!",
                    text: "Tour Updated successfuly!",
                    icon: "success"
                  })
            }
        });
    }
    return (
        <div className="flex flex-col items-center justify-center py-6 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-center mb-4">Update Food</h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleUpdateFood} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Food Name</label>
                            <input required defaultValue={Food_name} type="text" placeholder="Enter Food Name" name="Food_name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pickup Location
                            </label>
                            <input required defaultValue={Pickup_Location} type="text" placeholder="Enter Food Pickup location" name="Pickup_Location" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Expired Date
                            </label>
                            <input required defaultValue={Expired_Date} type="date" placeholder="Enter Food Expired Date" name="Expired_Date" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quantity
                            </label>
                            <input required type="number" placeholder="Enter Food Quantity" name="Quantity" defaultValue={Quantity} className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Food Image</label>
                            <input defaultValue={Food_Status} required type="text" placeholder="Enter Food Image" name="Food_Image" className="input input-bordered w-full" />
                        </div>
                        <br />
                        <div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                                <textarea required type="text" placeholder="Enter Food Additional Notes" name="Additional_Notes" defaultValue={Additional_Notes} className="textarea textarea-bordered w-full md:w-[204%]" />
                            </div>
                            <div>
                                <button className="btn w-full md:w-[204%] text-gray-100 
                            hover:text-white btn-info">update Food
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;