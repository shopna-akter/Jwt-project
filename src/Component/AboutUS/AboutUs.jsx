import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const mirpurCoordinates = {
        lat: 23.8103,
        lng: 90.4125
    };

    const impactLocations = [
        {
            name: "Location 1",
            position: [37.7749, -122.4194],
            story: "Impact story for Location 1.",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Location 2",
            position: [34.0522, -118.2437],
            story: "Impact story for Location 2.",
            image: "https://via.placeholder.com/150",
        },
        // Add more locations as needed
    ];

    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });
    return (
        <div>
            <section id="about" className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-full md:w-1/2 lg:pr-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
                            <div className="w-[200%] h-[500px]">
                                <MapContainer center={[mirpurCoordinates.lat, mirpurCoordinates.lng]} zoom={12} className="h-full">
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />

                                    <Marker
                                        position={[mirpurCoordinates.lat, mirpurCoordinates.lng]}
                                        icon={customIcon}
                                        eventHandlers={{
                                            click: () => {
                                                setSelectedLocation({
                                                    name: "Mirpur, Dhaka",
                                                    position: [mirpurCoordinates.lat, mirpurCoordinates.lng],
                                                    story: "Impact story for Mirpur, Dhaka.",
                                                    image: "https://via.placeholder.com/150",
                                                });
                                            },
                                        }}
                                    />

                                    {impactLocations.map((location, index) => (
                                        <Marker
                                            key={index}
                                            position={location.position}
                                            icon={customIcon}
                                            eventHandlers={{
                                                click: () => {
                                                    setSelectedLocation(location);
                                                },
                                            }}
                                        />
                                    ))}

                                    {selectedLocation && (
                                        <Popup
                                            position={selectedLocation.position}
                                            onClose={() => setSelectedLocation(null)}
                                        >
                                            <div>
                                                <h2 className="font-bold">{selectedLocation.name}</h2>
                                                <img
                                                    src={selectedLocation.image}
                                                    alt={selectedLocation.name}
                                                    className="w-32 h-24 object-cover my-2"
                                                />
                                                <p>{selectedLocation.story}</p>
                                            </div>
                                        </Popup>
                                    )}
                                </MapContainer>
                            </div>
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
                        <div className="w-full lg:mt-[430px] md:w-1/2 lg:pl-8">
                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                {/* <div className="container" ref={container}></div> */}
                                <img src="https://i.ibb.co/gvYMj1F/upic-team-cta.jpg" alt="About Us" className="object-cover w-full h-full" />
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
