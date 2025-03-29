import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-100">


            {/* Main Content */}
            <div className="flex flex-grow items-center justify-center w-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Platform</h1>
                    <p className="mt-4 text-gray-600">Building the future, one line of code at a time.</p>
                    <div className="mt-6">
                        <Link
                            to="/login"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
