import React from "react";
import './../index.css';
import { assets } from "./../assets/assets";

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} alt="" />
                <ul className="hidden md:flex gap-7 text-white">
                    <li>
                        <a href="#Header" className="cursor-pointer hover:text-gray-500 ">
                            Home
                        </a>
                    </li>
                    <li>

                        <a href="#Header" className="cursor-pointer hover:text-gray-500 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Header" className="cursor-pointer hover:text-gray-500">
                            Projects
                        </a>

                    </li>
                    <li>
                        <a href="#Header" className="cursor-pointer hover:text-gray-500">
                            Testimonials
                        </a>
                    </li>
                </ul>

                <button className="hidden md:block bg-white px-8 py-2 rounded-full">
                    SignUp
                </button>
            </div>
        </div>
    );
};

export default Navbar;
