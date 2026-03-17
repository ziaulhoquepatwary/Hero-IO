import React from 'react'
import { FaDownload } from 'react-icons/fa'

function AppCard({ title, downloads, rating, image }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-col gap-3">
            <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-gray-900 font-semibold text-sm leading-snug line-clamp-2">
                {title}
            </p>
            <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-md">
                    <FaDownload size={10} />
                    {downloads}
                </span>
                <span className="flex items-center gap-1 bg-orange-50 text-orange-500 text-[10px] font-bold px-2 py-1 rounded-md">
                    <FaStar size={10} />
                    {rating}
                </span>
            </div>
        </div>
    )
}

export default AppCard