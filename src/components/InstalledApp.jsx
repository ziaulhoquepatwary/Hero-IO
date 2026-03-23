import React from 'react'
import { MdOutlineFileDownload, MdOutlineRateReview, MdStar } from 'react-icons/md'
import Swal from 'sweetalert2';

function InstalledApp({ app, onUninstall }) {

    const handleUnInstalled = () => {
        let progress = 0;

        Swal.fire({
            title: "UnInstalling...",
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
                    title: "Uninstalled Successfully 🎉",
                    timer: 1500,
                    showConfirmButton: false,
                });

                onUninstall(app.id);
            }
        }, 200);
    };


    return (
        <div
            key={app.id}
            className="group bg-white p-5 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6"
        >
            <img className="w-20 h-20 bg-[#D9D9D9] rounded-xl flex-shrink-0" src={app.image} alt={app.title} />

            <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-[#1E293B] mb-2 leading-tight">
                    {app.title}
                </h3>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                        <MdOutlineFileDownload className="text-xl text-[#00D991]" />
                        <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdStar className="text-xl text-[#F97316]" />
                        <span>{app.ratingAvg}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MdOutlineRateReview className="text-xl text-purple-600" />
                        <span>{app.reviews}</span>
                    </div>
                </div>
            </div>

            <div onClick={handleUnInstalled} className="w-full md:w-auto flex justify-center md:block">
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-10 py-3 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner">
                    Uninstall {app.size} MB
                </button>
            </div>
        </div>
    )
}

export default InstalledApp