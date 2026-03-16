import React from 'react';
import { FaBars, FaGithub, FaArrowRight } from 'react-icons/fa'; // Import specific icons
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 font-sans">
            <div className="container max-w-6xl mx-auto px-4 py-4 md:grid md:grid-cols-3 flex flex-wrap items-center justify-between">

                {/* Logo Section */}
                <div className="text-2xl font-bold flex items-center justify-start">
                    <img className='w-10 h-10' src={logo} alt="Logo" />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ml-1">
                        HERO.IO
                    </span>
                </div>

                {/* Mobile Menu Toggle */}
                <input type="checkbox" id="menu-toggle" className="hidden peer" />
                <label htmlFor="menu-toggle"
                    className="md:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400">
                    <FaBars className="text-black" />
                </label>

                {/* Navigation Links & Actions */}
                <div className="hidden peer-checked:flex flex-col md:contents w-full mt-4 md:mt-0">
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-8 font-medium order-1 md:order-none py-4 md:py-0">
                        <li className="hover:text-purple-600 transition"><a href="#about">Home</a></li>
                        <li className="hover:text-purple-600 transition"><a href="#episodes">Apps</a></li>
                        <li className="hover:text-purple-600 transition"><a href="#host">Installation</a></li>
                    </ul>

                    <div className="flex items-center justify-center md:justify-end gap-4 order-2 md:order-none">

                        
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition transform hover:scale-105 shadow-md">
                            {/* GitHub Icon Link */}
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black transition">
                            <FaGithub size={20} />
                        </a>
                            Contribute
                            <FaArrowRight size={14} />
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
