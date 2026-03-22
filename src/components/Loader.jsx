import React from 'react';
import loaderImg from '../assets/logo.png';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={loaderImg}
                    className="w-20 animate-[spin_5s_linear_infinite]"
                    alt="Loading..."
                />
                <p className="text-gray-500 font-medium animate-pulse">Loading App Details...</p>
            </div>
        </div>
    );
};

export default Loader;