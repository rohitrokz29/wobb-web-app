import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Footer of the application
const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-6 pt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <span className="text-sm">© 2025 Wobb</span>
                    <Link
                        to="#terms"
                        className="text-sm hover:text-gray-200 transition duration-200"
                    >
                        Terms
                    </Link>
                    <Link
                        to="#privacy"
                        className="text-sm hover:text-gray-200 transition duration-200"
                    >
                        Privacy
                    </Link>
                </div>

                {/* Right Section with social platform ids */}
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link
                        to="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition duration-200"
                    >
                        <FaLinkedin size={20} />
                    </Link>
                    <Link
                        to="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition duration-200"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <Link
                        to="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition duration-200"
                    >
                        <FaFacebook size={20} />
                    </Link>
                    <Link
                        to="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition duration-200"
                    >
                        <FaInstagram size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
