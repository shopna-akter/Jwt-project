import Slider from "../Slider/Slider";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import AboutUs from "../AboutUS/AboutUs";
import RecentDonations from "../RecentDonation/RecentDonation";
const Home = () => {
    // console.log(foods);
    return (
        <div>
            <div className="z-10">
                <Slider></Slider>
            </div>
            <FeaturedFood></FeaturedFood>
            <AboutUs></AboutUs>
            <RecentDonations></RecentDonations>
        </div>
    );
};

export default Home;