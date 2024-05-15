import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const FeaturedFood = () => {
  const { isPending, isError, error, data: foods } = useQuery({
    queryKey: ['bestFoods'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/featuredFoods');
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
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold mb-2">Featured Foods</h2>
        <p className="text-lg">The Featured Food section showcases a curated selection of food items that are highlighted or promoted for various reasons, <br className="md:block hidden" /> such as popularity, freshness, or special offers. This section typically appears on a website or application,<br /> often on the homepage or a dedicated page, to attract attention and promote specific food products.</p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mx-4">
        {foods?.map((food) => (
          <div key={food._id} className="mb-4">
            <div className="card border bg-base-100 shadow-xl">
              <figure>
                <img src={food.Image} className='h-60' alt={food.Food_name} />
              </figure>
              <div className="card-body text-left">
                <div className="text-center mr-2">
                  <h2 className="font-bold text-xl">{food.Food_name}</h2>
                </div>
                <p>{food.Additional_Notes}</p>
                <div className="card-actions justify-between">
                  <div className="flex gap-2">
                    <span>Quantity:</span>
                    <span>{food.Quantity}</span>
                  </div>
                  <div className="flex gap-2">
                    <h1>Expired_Date:</h1>
                    <span>{food.Expired_Date}</span>
                  </div>
                </div>
                <div className="card-actions justify-between">
                  <div className="flex gap-2">
                    <span>Donator Image:</span>
                    <img className="rounded-full h-12 w-12 pb-2" src={food.Donator_Image} alt="" />
                  </div>
                  <div className="flex gap-2">
                    <span>Donator Name:</span>
                    <span>{food.User_Name}</span>
                  </div>
                </div>
                <div className="card-actions justify-between">
                  <div className="flex gap-2">
                    <span>Food_Status:</span>
                    <span>{food.Food_Status}</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Pickup Location:</span>
                    <span>{food.Pickup_Location}</span>
                  </div>
                </div>
                <Link className="btn btn-info" to={`Foods/${food._id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFood;
