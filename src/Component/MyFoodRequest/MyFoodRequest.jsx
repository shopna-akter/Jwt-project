import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyFoodRequest = () => {
    const {user} = useContext(AuthContext)
    const { isPending, isError, error, data: myRequests } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/requests?email=${user.email}` , {credentials: 'include'});
            return res.json()
        }
    })
    if (isPending) {
        return <span className="loading loading-spinner"></span>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Your Donation Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            myRequests.map(myRequest => (
                                <tr key={myRequest._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <h2 className="font-bold">{myRequest.User_Name}</h2>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold">{myRequest.Pickup_Location}</td>
                                    <td className="font-bold">{myRequest.Expired_Date}</td>
                                    <th>{myRequest.formattedTime}</th>
                                    <th></th>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;