import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const socialLinks = [
    {
        href: "https://x.com",
        icon: <FaXTwitter size={13} />,
        label: "X Twitter"
    },
    {
        href: "https://linkedin.com",
        icon: <FaLinkedinIn size={13} />,
        label: "LinkedIn"
    },
    {
        href: "https://facebook.com",
        icon: <FaFacebookF size={13} />,
        label: "Facebook"
    },
];

function Footer() {
    return (
        <footer className="bg-[#0b1a2e] text-white font-sans">

            {/* Top Row */}
            <div className="container max-w-6xl mx-auto px-6 pt-6 pb-5 flex items-start justify-between">

                {/* Left: Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-9 h-9" src={logo} alt="Logo" />
                    <span className="text-base font-bold tracking-widest text-white uppercase">
                        HERO.IO
                    </span>
                </Link>

                {/* Right: Social Links */}
                <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-semibold text-white tracking-wide">
                        Social Links
                    </span>
                    <div className="flex items-center gap-2">
                        {socialLinks.map(({ href, icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                className="w-8 h-8 rounded-full bg-[#162035] border border-white/10 flex items-center justify-center hover:bg-blue-600 transition duration-300"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Bottom: Copyright */}
            <div className="container max-w-6xl mx-auto px-6 py-4 flex justify-center">
                <p className="text-sm text-gray-400 tracking-wide">
                    Copyright &copy; 2025 - All right reserved by HERO.IO
                </p>
            </div>

        </footer>
    );
}

export default Footer;