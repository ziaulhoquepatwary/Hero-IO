import React from 'react';
import { MdOutlineFileDownload, MdOutlineRateReview, MdStar } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import apps from '../../data/apps.json';
import { getInstalledApps } from '../../utils/installedApps';
import InstalledApp from '../../components/InstalledApp';

const InstalledApps = () => {
    const installed = getInstalledApps()

    const matchingApps = apps.filter(app =>
        installed.includes(app.id)
    );

    console.log(matchingApps);



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
                        {matchingApps.length} Apps Found
                    </h2>

                    <div className="relative inline-block w-full sm:w-auto min-w-[180px]">
                        <select
                            className="appearance-none w-full bg-white border border-slate-200 text-slate-600 text-sm font-medium py-2.5 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00D991]/20 focus:border-purple-600 transition-all cursor-pointer"
                            defaultValue="sort-by-size"
                        >
                            <option value="sort-by-size">Sort By Size</option>
                            <option value="newest">Newest First</option>
                            <option value="alphabetical">Alphabetical (A-Z)</option>
                            <option value="top-rated">Top Rated</option>
                        </select>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <FaChevronDown className="text-[10px] text-slate-400" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    {matchingApps.map((app) => (
                        <InstalledApp key={app.id} app={app} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default InstalledApps;