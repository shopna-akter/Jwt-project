import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AvailableFoods = () => {
    const [searchValue, setSearchValue] = useState()
    const allFoods = useLoaderData()
    const [foods, setFoods] = useState(allFoods);
    const [layOut, setLayOut] = useState('lg:grid-cols-3');
    const handleChangeLayout = () => {
        setLayOut(prevLayout => (prevLayout === 'lg:grid-cols-3' ? 'lg:grid-cols-2' : 'lg:grid-cols-3'));
    };
    const handleSearch = e => {
        e.preventDefault()
        const form = e.target
        const searchField = form.searchField.value
        console.log(searchField);
        setSearchValue(searchField)
    }
    const handleSearchValue = () => {
        fetch(`http://localhost:5000/foods/${searchValue}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }
    const handleInputChange = e => {
        setSearchValue(e.target.value);
    };
    return (
        <>
            <div>
                <div className="text-center">
                    <h1 className="text-xl font-bold">Available Food</h1>
                    <p>Explore our selection of delicious and fresh foods available for you to enjoy!</p>
                </div>
                <div className="flex gap-8 my-6 justify-center">
                    <button onClick={handleChangeLayout} className="btn bg-green-400">Change Layout</button>
                    <div className="join">
                        <form onSubmit={handleSearch}>
                            <input name="searchField" onChange={handleInputChange} className="input input-bordered join-item" placeholder="Search" />
                        </form>
                        <div className="indicator">
                            <button onClick={handleSearchValue} className="btn join-item">Search</button>
                        </div>
                    </div>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${layOut}`}>
                    {foods.map((food) => (
                        <div className="mx-4" key={food._id}>
                            <div className="mb-4">
                                <div className="card border bg-base-100 shadow-xl">
                                    <figure>
                                        <img src={food.Image} className="h-60" alt={food.Food_name} />
                                    </figure>
                                    <div className="card-body text-left">
                                        <div className="text-center mr-2">
                                            <h2 className="font-bold text-xl">{food.Food_name}</h2>
                                        </div>
                                        <p>{food.Additional_Notes}</p>
                                        <div className="card-actions justify-between">
                                            <div className="flex gap-2">
                                                <span>Cost:</span>
                                                <span>{food.Quantity}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <h1>Country:</h1>
                                                <span>{food.Expired_Date}</span>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-between">
                                            <div className="flex gap-2">
                                                <span>Seasonality:</span>
                                                <span>{food.Food_Status}</span>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-between">
                                            <div className="flex items-center gap-2">
                                                <span>Travel time:</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span>Visitors(year):</span>
                                                <span>{food.Pickup_Location}</span>
                                            </div>
                                        </div>
                                        <Link className="btn btn-info" to={`Foods/${food._id}`}>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AvailableFoods;
