import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer
} from 'recharts';
import { FcAndroidOs } from 'react-icons/fc';

// Data for the ratings chart (Recharts draws from bottom to top, so we reverse the order)
const ratingData = [
    { name: '1 star', value: 1000 },
    { name: '2 star', value: 1800 },
    { name: '3 star', value: 2800 },
    { name: '4 star', value: 6500 },
    { name: '5 star', value: 11000 },
];

const AppDetails = () => {
    return (
        <div className="min-h-screen bg-[#f5f6f8] py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto bg-[#f5f6f8]">

                {/* --- Top Section: App Info --- */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    {/* App Icon / Image */}
                    <div className="w-full md:w-64 h-64 bg-white flex items-center justify-center rounded-xl shadow-sm flex-shrink-0">
                        <FcAndroidOs size={100} />
                    </div>

                    {/* App Metadata */}
                    <div className="flex flex-col justify-center w-full">
                        <h1 className="text-3xl font-bold text-[#0B1c33] mb-1">
                            SmPlan:ToDo List With Reminder
                        </h1>
                        <p className="text-gray-500 mb-6">
                            Developed by <span className="text-purple-600 font-medium cursor-pointer">productive.io</span>
                        </p>

                        {/* Divider */}
                        <hr className="border-gray-300 mb-6" />

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-10 mb-6">
                            <div className="flex flex-col">
                                <FiDownload className="text-green-500 text-2xl mb-1" />
                                <span className="text-xs text-gray-500 font-medium">Downloads</span>
                                <span className="text-2xl font-bold text-[#0B1c33]">8M</span>
                            </div>

                            <div className="flex flex-col">
                                <FaStar className="text-orange-400 text-2xl mb-1" />
                                <span className="text-xs text-gray-500 font-medium">Average Ratings</span>
                                <span className="text-2xl font-bold text-[#0B1c33]">4.9</span>
                            </div>

                            <div className="flex flex-col">
                                <MdOutlineRateReview className="text-purple-500 text-2xl mb-1" />
                                <span className="text-xs text-gray-500 font-medium">Total Reviews</span>
                                <span className="text-2xl font-bold text-[#0B1c33]">54K</span>
                            </div>
                        </div>

                        {/* Install Button */}
                        <button className="w-full sm:w-max bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-inner">
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-300 my-8" />

                {/* --- Middle Section: Ratings Chart --- */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-[#0B1c33] mb-6">Ratings</h2>
                    <div className="h-[250px] w-full -ml-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                layout="vertical"
                                data={ratingData}
                                margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                            >
                                <XAxis
                                    type="number"
                                    ticks={[0, 3000, 6000, 9000, 12000]}
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

                {/* Divider */}
                <hr className="border-gray-300 my-8" />

                {/* --- Bottom Section: Description --- */}
                <div>
                    <h2 className="text-xl font-bold text-[#0B1c33] mb-4">Description</h2>
                    <div className="text-gray-500 space-y-6 leading-relaxed">
                        <p>
                            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
                        </p>
                        <p>
                            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you've worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
                        </p>
                        <p>
                            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you're studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;