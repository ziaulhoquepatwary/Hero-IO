import React from 'react';
import { FaGooglePlay, FaAppStore, } from 'react-icons/fa';
import BannerImg from '../../assets/hero.png'

function Banner() {
    return (
        <section className="bg-[#f0f1f3] font-sans pt-8 px-4 overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a1a2e] leading-tight">
                    We Build <br />
                    <span className="text-purple-600">Productive</span>
                    <span className="text-[#1a1a2e]"> Apps</span>
                </h1>
            </div>

            {/* Subtitle */}
            <p className="text-center text-gray-500 text-sm sm:text-base mx-auto mb-8 leading-relaxed">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                <br className="hidden sm:block" />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">

                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-lg hover:border-green-400 hover:text-green-600 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-gray-800 text-sm sm:text-base">
                    <FaGooglePlay className="text-green-500 group-hover:scale-110 transition-transform duration-300" size={20} />
                    Google Play
                </a>

                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-400 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-gray-800 text-sm sm:text-base">
                    <FaAppStore className="text-blue-500 group-hover:scale-110 transition-transform duration-300" size={20} />
                    App Store
                </a>

            </div>

            <img className='mx-auto w-full lg:w-3xl md:w-2xl' src={BannerImg} alt="banner-img" />

        </section >
    );
}

export default Banner;