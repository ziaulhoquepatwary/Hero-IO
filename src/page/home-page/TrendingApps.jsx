import React from 'react'
import AppCard from '../../components/AppCard';

const apps = [
    {
        title: "Forest: Focus For Productivity",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "SmPlan:ToDo List With Reminder",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "FLIP - Focus Timer For Study",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "Pomocat - Cute Pomodoro Timer",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "Time Planner: Schedule & Tasks",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "Morning Habits - Daily Routine",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "Focus Plant: Pomodoro Forest",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
    {
        title: "Alarmy - Alarm Clock & Sleep",
        downloads: "9M",
        rating: "5",
        image: "https://images.unsplash.com"
    },
];


function TrendingApps() {
    return (
        <section className="bg-gray-50 py-14 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
                        Trending Apps
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {apps.map((app) => (
                        <AppCard key={app.title} {...app} />
                    ))}
                </div>

                {/* Show All Button */}
                <div className="flex justify-center mt-10">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-10 py-3 rounded-xl transition-colors">
                        Show All
                    </button>
                </div>

            </div>
        </section>
    )
}

export default TrendingApps