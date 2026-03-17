import React from 'react'

const stats = [
    {
        label: "Total Downloads",
        value: "29.6M",
        sub: "21% More Than Last Month",
    },
    {
        label: "Total Reviews",
        value: "906K",
        sub: "46% More Than Last Month",
    },
    {
        label: "Active Apps",
        value: "132+",
        sub: "31 More Will Launch",
    },
];

function StatsSection() {
    return (
        <section className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-4">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-white text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
                    Trusted By Millions, Built For You
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center gap-2 py-8 sm:py-0 sm:px-12 lg:px-20 w-full sm:w-1/3"
                        >
                            <p className="text-white/70 text-sm font-medium tracking-wide">
                                {stat.label}
                            </p>
                            <p className="text-white text-5xl lg:text-6xl font-extrabold">
                                {stat.value}
                            </p>
                            <p className="text-white/60 text-sm">
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default StatsSection