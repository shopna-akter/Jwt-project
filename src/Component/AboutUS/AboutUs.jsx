import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <section id="about" className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-1/2 lg:pr-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Welcome to Your Website Name, a platform dedicated to reducing food waste and fostering community engagement through food sharing. Our mission is to connect individuals, businesses, and organizations with surplus food to those who need it most, creating a more sustainable and equitable food system.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At Your Website Name, we believe that food should not go to waste when there are people in our communities who are struggling to put meals on the table. By leveraging technology and community partnerships, we provide a platform for individuals and organizations to easily donate excess food, find meals for themselves or their families, and volunteer their time to support our cause.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Together, we can make a difference in the lives of those facing food insecurity while also reducing the environmental impact of food waste. Join us in our mission to build a healthier, more resilient community for all.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:pl-8">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src="about-image.jpg" alt="About Us" className="object-cover w-full h-full" />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Link to='/' className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">Watch Our Story</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
