import React, { useMemo, useState } from 'react';
import { MdOutlineFileDownload, MdOutlineRateReview, MdStar } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import apps from '../../data/apps.json';
import { getInstalledApps, removeInstalledApp } from '../../utils/installedApps';
import InstalledApp from '../../components/InstalledApp';

const MyInstallation = () => {
    const [sortBy, setSortBy] = useState('high-to-low');
    const [installedApps, setInstalledApps] = useState(getInstalledApps());

    const sortedApps = useMemo(() => {
        const matching = apps.filter(app => installedApps.includes(app.id));

        return [...matching].sort((a, b) => {
            if (sortBy === "high-to-low") {
                return b.downloads - a.downloads;
            } else {
                return a.downloads - b.downloads;
            }
        });
    }, [sortBy, installedApps]);

    const handleRemove = (appId) => {
        removeInstalledApp(appId);
        setInstalledApps(getInstalledApps());
    }


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
                        {sortedApps.length} Apps Found
                    </h2>

                    <div className="relative inline-block w-full sm:w-auto min-w-[180px]">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none w-full bg-white border border-slate-200 text-slate-600 text-sm font-medium py-2.5 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00D991]/20 focus:border-purple-600 transition-all cursor-pointer"
                        >
                            <option value="high-to-low">High to Low Size</option>
                            <option value="low-to-high">Low to High Size</option>
                        </select>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <FaChevronDown className="text-[10px] text-slate-400" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    {sortedApps.map((app) => (
                        <InstalledApp key={app.id} app={app} onUninstall={handleRemove} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MyInstallation;