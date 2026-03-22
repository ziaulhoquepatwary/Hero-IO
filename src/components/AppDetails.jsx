import React, { useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { isAppInstalled, saveInstalledApp } from '../utils/installedApps';
import Swal from 'sweetalert2';



const AppDetails = () => {
    const apps = useLoaderData();
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (isAppInstalled(apps.id)) {
            setInstalled(true);
        }
    }, [apps.id]);

    const ratingData = apps?.ratings?.map(item => ({
        name: item.name,
        value: item.count
    })).reverse();

    const handleInstall = () => {
        let progress = 0;

        Swal.fire({
            title: "Installing...",
            html: `<div style="width:100%; background:#eee; border-radius:10px;">
                <div id="progress-bar" style="width:0%; height:10px; background:#6c5ce7; border-radius:10px;"></div>
              </div>`,
            showConfirmButton: false,
            allowOutsideClick: false,
        });

        const interval = setInterval(() => {
            progress += 10;

            const bar = document.getElementById("progress-bar");
            if (bar) {
                bar.style.width = `${progress}%`;
            }

            if (progress >= 100) {
                clearInterval(interval);

                Swal.fire({
                    icon: "success",
                    title: "Installed Successfully 🎉",
                    timer: 1500,
                    showConfirmButton: false,
                });

                saveInstalledApp(apps.id);
                setInstalled(true);
            }
        }, 200);
    };


    return (
        <div className="min-h-screen bg-[#f5f6f8] py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto bg-[#f5f6f8]">

                {/* --- Top Section: App Info --- */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <img src={apps.image} alt={apps.title} className="w-full md:w-64 h-64 object-cover" />

                    {/* App Metadata */}
                    <div className="flex flex-col justify-center w-full">
                        <h2 className="text-3xl font-bold text-[#0B1c33] mb-1">
                            {apps.title}
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Developed by <span className="text-purple-600 font-medium cursor-pointer">{apps.companyName}</span>
                        </p>

                        {/* Divider */}
                        <hr className="border-gray-300 mb-6" />

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-10 mb-6">
                            <div className="flex flex-col text-center">
                                <FiDownload className="text-green-500 text-2xl mb-1 mx-auto" />
                                <span className="text-xs text-gray-500 font-medium">Downloads</span>
                                <span className="text-2xl font-bold text-[#0B1c33]">{apps.downloads}</span>
                            </div>

                            <div className="flex flex-col text-center">
                                <FaStar className="text-orange-400 text-2xl mb-1 mx-auto" />
                                <span className="text-xs text-gray-500 font-medium">Average Ratings</span>
                                <span className="text-2xl font-bold text-[#0B1c33]">{apps.ratingAvg}</span>
                            </div>

                            <div className="flex flex-col text-center">
                                <MdOutlineRateReview className="text-purple-500 text-2xl mb-1 mx-auto" />
                                <span className="text-xs text-gray-500 font-medium">Total Reviews</span>
                                <span className="text-2xl font-bold text-[#0B1c33]">{apps.reviews}</span>
                            </div>
                        </div>

                        {/* Install Button */}
                        <button
                            onClick={handleInstall}
                            disabled={installed}
                            className={`w-full sm:w-max px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300
                                ${installed
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 hover:scale-105 active:scale-95"
                                }`}
                        >
                            {installed ? "Installed" : `Install Now (${apps.size}) MB`}
                        </button>
                    </div>
                </div>

                <hr className="border-gray-300 my-8" />

                <div className="mb-10">
                    <h2 className="text-xl font-bold text-[#0B1c33] mb-6">Ratings</h2>
                    <div className="w-full">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart
                                layout="vertical"
                                data={ratingData}
                                margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                            >
                                <XAxis
                                    type="number"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 14 }}
                                    width={60}
                                />
                                <Bar
                                    dataKey="value"
                                    fill="#f97316"
                                    barSize={24}
                                    radius={[0, 4, 4, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <hr className="border-gray-300 my-8" />

                <div>
                    <h2 className="text-xl font-bold text-[#0B1c33] mb-4">Description</h2>
                    <div className="text-gray-500 space-y-6 leading-relaxed">
                        {apps.description}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;