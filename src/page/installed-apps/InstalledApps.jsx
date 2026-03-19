import React from 'react';
// Importing icons from React Icons (Material Design and Font Awesome)
import { MdOutlineFileDownload, MdStar } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";

const InstalledApps = () => {
    const apps = [
        { id: 1, name: 'Forest: Focus For Productivity', downloads: '9M', rating: '5', size: '258 MB' },
        { id: 2, name: 'Forest: Focus For Productivity', downloads: '9M', rating: '5', size: '258 MB' },
        { id: 3, name: 'Forest: Focus For Productivity', downloads: '9M', rating: '5', size: '258 MB' },
    ];

    return (
        <div className="bg-[#F8FAFC] py-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                        Your Installed Apps
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </header>

                {/* Filter Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <h2 className="text-2xl font-bold text-[#1E293B]">
                        {apps.length} Apps Found
                    </h2>

                    <div className="relative inline-block w-full sm:w-auto min-w-[180px]">
                        {/* Select Input Field */}
                        <select
                            className="appearance-none w-full bg-white border border-slate-200 text-slate-600 text-sm font-medium py-2.5 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00D991]/20 focus:border-purple-600 transition-all cursor-pointer"
                            defaultValue="sort-by-size"
                        >
                            <option value="sort-by-size">Sort By Size</option>
                            <option value="newest">Newest First</option>
                            <option value="alphabetical">Alphabetical (A-Z)</option>
                            <option value="top-rated">Top Rated</option>
                        </select>

                        {/* Custom Arrow Icon (Absolute position) */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <FaChevronDown className="text-[10px] text-slate-400" />
                        </div>
                    </div>
                </div>

                {/* App List Container */}
                <div className="flex flex-col gap-5">
                    {apps.map((app) => (
                        <div
                            key={app.id}
                            className="group bg-white p-5 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6"
                        >
                            {/* App Icon (Placeholder) */}
                            <div className="w-20 h-20 bg-[#D9D9D9] rounded-xl flex-shrink-0" />

                            {/* App Content */}
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold text-[#1E293B] mb-2 leading-tight">
                                    {app.name}
                                </h3>

                                <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 text-slate-500 font-medium">
                                    <div className="flex items-center gap-1">
                                        <MdOutlineFileDownload className="text-xl text-[#00D991]" />
                                        <span>{app.downloads}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdStar className="text-xl text-[#F97316]" />
                                        <span>{app.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>{app.size}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="w-full md:w-auto">
                                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-10 py-3 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner">
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default InstalledApps;