import React from 'react'
import { FaDownload, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AppCard({ app }) {
    return (
        <Link to={`/apps/${app.id}`} className="block">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-col gap-3">
                <div className="w-full aspect-[4/4] overflow-hidden rounded-xl bg-gray-100">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-gray-900 font-semibold text-sm leading-snug line-clamp-2">
                    {app.title}
                </p>
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 bg-green-50 text-green-600 text-[12px] font-bold px-2 py-1 rounded-md">
                        <FaDownload size={10} />
                        {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 bg-orange-50 text-orange-500 text-[12px] font-bold px-2 py-1 rounded-md">
                        <FaStar size={10} />
                        {app.ratingAvg}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default AppCard