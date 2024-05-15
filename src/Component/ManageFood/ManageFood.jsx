import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ManageMyFood = () => {
    const { user } = useContext(AuthContext);
    const loadedfoods = useLoaderData();
    console.log(loadedfoods);
    const [foods, setfoods] = useState(loadedfoods);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure you want to delete?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://assignment-p11-server.vercel.app/foods/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your food has been deleted.", "success");
                            const updatedfoods = foods.filter(food => food._id !== _id);
                            setfoods(updatedfoods);
                        }
                    });
            }
        });
    };

    if (!foods || foods.length === 0) {
        return (
            <div className="text-center">
                <h2>You have not added any foods</h2>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>|| Manage My Food</title>
            </Helmet>
            <table className="md:min-w-full divide-y table divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Food Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y  divide-gray-200">
                    {foods.filter(food => food.User_Email === user.email).map((food, index) => (
                        <tr key={food._id} className={index % 2 === 0 ? "bg-gray-300" : "bg-white"}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <h2 className="md:text-lg font-semibold">{food.Food_name}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <h2 className="md:text-lg font-semibold">{food.Pickup_Location}</h2>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <h2 className="md:text-lg font-semibold">{food.Quantity}</h2>
                            </td>
                            <td className="px-6 gap-4 py-4 flex whitespace-nowrap text-sm text-gray-500">
                                <Link to={`/updatefood/${food._id}`} className="text-indigo-600 hover:text-indigo-900">
                                    <FaEdit />
                                </Link>
                                <button onClick={() => handleDelete(food._id)} className="text-red-600 hover:text-red-900 ml-2">
                                    <FaDeleteLeft />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageMyFood;
