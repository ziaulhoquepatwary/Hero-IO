import React from 'react'
import image from '../assets/App-Error.png'
import { useNavigate } from 'react-router-dom';

function AppNotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className="h-full bg-gray-100 flex items-center justify-center px-4 py-12">
            <div className="flex flex-col items-center text-center max-w-lg w-full py-5">

                {/* Illustration */}
                <div className="relative flex items-center justify-center mb-8">
                    <img src={image} alt="error-img" />
                </div>

                {/* Text */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    OPPS!! APP NOT FOUND
                </h1>
                <p className="text-gray-400 text-sm sm:text-base mb-8">
                    The App you are requesting is not found on our system. please try another apps
                </p>

                {/* Button */}
                <button
                    onClick={handleGoBack}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-10 py-3 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner">
                    Go Back!
                </button>

            </div>
        </section>
    )
}

export default AppNotFound