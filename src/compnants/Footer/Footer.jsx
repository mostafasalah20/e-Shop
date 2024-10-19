import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-auto w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between md:px-9">

                    
                    <div className="mb-8 md:mb-0 text-center ">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to={''}  className="hover:text-gray-400">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to={'about'}  className="hover:text-gray-400">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to={'product'} className="hover:text-gray-400">Our Products</Link>
                            </li>
                            <li className="mb-2">
                                <Link to={'contact'} className="hover:text-gray-400">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                  
                    <div className="mb-8 md:mb-0 text-center">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul>
                            <li className="mb-2">
                                <p className="text-gray-400">Email: contact@example.com</p>
                            </li>
                            <li className="mb-2">
                                <p className="text-gray-400">Phone: +123 456 7890</p>
                            </li>
                            <li className="mb-2">
                                <p className="text-gray-400">Address: 123 Street, City, Country</p>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="mb-8 md:mb-0 text-center">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                    <p className="text-gray-500 text-sm">© 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
