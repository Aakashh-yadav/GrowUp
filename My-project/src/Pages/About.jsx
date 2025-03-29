import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white text-center py-16 px-6">
                <h1 className="text-4xl font-bold">About StartupSphere</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Connecting ambitious entrepreneurs and professionals through a modern networking platform.
                </p>
            </section>

            {/* Company Mission */}
            <section className="container mx-auto py-12 px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    We aim to **revolutionize startup networking** by providing a platform where founders, investors, and professionals can connect, collaborate, and grow their businesses seamlessly.
                </p>
            </section>

            {/* Key Features */}
            <section className="bg-white py-12 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Why Choose StartupSphere?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">🔗 Professional Networking</h3>
                            <p className="mt-2 text-gray-600">Connect with like-minded entrepreneurs, mentors, and investors.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">🚀 Growth Opportunities</h3>
                            <p className="mt-2 text-gray-600">Gain access to funding, mentorship, and industry experts.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">📢 Startup Promotion</h3>
                            <p className="mt-2 text-gray-600">Showcase your startup to the right audience and attract investors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto py-12 px-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
                <p className="mt-4 text-gray-600">
                    A passionate team dedicated to empowering the startup community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Team Members */}
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Aakash Yadav</h3>
                        <p className="text-gray-600">Founder & Frontend Developer</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Sandeep</h3>
                        <p className="text-gray-600">Operations & Execution</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Ayush</h3>
                        <p className="text-gray-600">Strategy & Growth</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-500 text-white text-center py-12 px-6">
                <h2 className="text-3xl font-semibold">Join StartupSphere Today!</h2>
                <p className="mt-4 text-lg">Start your journey with the best networking platform for startups.</p>
                <Link
                    to="/signup"
                    className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
                >
                    Get Started
                </Link>
            </section>
        </div>
    );
};

export default About;
