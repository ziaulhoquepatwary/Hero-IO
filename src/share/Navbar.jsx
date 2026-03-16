import React from 'react';
import { FaBars, FaGithub, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-100 font-sans">
            <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between md:grid md:grid-cols-3">

                {/* Left: Logo Section */}
                <Link to="/" className="text-2xl font-bold flex items-center justify-start">
                    <img className='w-10 h-10' src={logo} alt="Logo" />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ml-1">
                        HERO.IO
                    </span>
                </Link>

                {/* Mobile: Hamburger Icon */}
                <input type="checkbox" id="menu-toggle" className="hidden peer" />
                <label htmlFor="menu-toggle"
                    className="md:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400">
                    <FaBars className="text-black" />
                </label>

                {/* Middle & Right: Navigation & Button */}
                <div className="hidden peer-checked:flex flex-col md:contents w-full mt-4 md:mt-0">

                    {/* Center: Links */}
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-8 font-medium order-1 md:order-none py-4 md:py-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-600 border-b-2 border-purple-600 pb-0.5 transition"
                                        : "hover:text-purple-600 transition"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/apps"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-600 border-b-2 border-purple-600 pb-0.5 transition"
                                        : "hover:text-purple-600 transition"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/installation"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-600 border-b-2 border-purple-600 pb-0.5 transition"
                                        : "hover:text-purple-600 transition"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                    </ul>

                    {/* Right: Action Button */}
                    <div className="flex justify-center md:justify-end order-2 md:order-none">
                        <Link
                            to="https://github.com"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition transform hover:scale-105 shadow-md"
                        >
                            <FaGithub size={18} />
                            <span>Contribute</span>
                            <FaArrowRight size={12} />
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;