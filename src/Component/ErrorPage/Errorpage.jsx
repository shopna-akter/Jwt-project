import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src={'https://i.ibb.co/fXR9dvr/Whats-App-Image-2024-05-13-at-23-11-34-e771d2ad.jpg'} alt="" />
            <Link className="btn">Back to Home</Link>
        </div>
    );
};

export default Errorpage;