import React, { useState } from 'react'
import AppCard from '../../components/AppCard'
import { FaSearch } from 'react-icons/fa'
import apps from '../../data/apps.json'
import AppNotFound from '../../components/AppNotFound';

function AllApps() {
    const [search, setSearch] = useState("");

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="bg-[#f5f6f8] min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#0B1c33] tracking-tight mb-3">
                        Our All Applications
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                {/* Toolbar: App Count & Search */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <h3 className="text-xl font-bold text-[#0B1c33]">
                        (8) Apps Found
                    </h3>

                    <div className="relative w-full sm:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="search Apps"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                {/* App Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredApps.length > 0 ? (
                        filteredApps.map((app) => (
                            <AppCard key={app.title} app={app} />
                        ))
                    ) : (
                        <AppNotFound />
                    )}
                </div>

            </div>
        </section>
    )
}

export default AllApps