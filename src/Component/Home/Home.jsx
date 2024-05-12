import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import AboutUs from "../AboutUS/AboutUs";

const Home = () => {
    const foods = useLoaderData()
    console.log(foods);
    return (
        <div>
            <Slider></Slider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    foods.map(food => <FeaturedFood key={food._id} food={food}></FeaturedFood>)
                }
            </div>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;