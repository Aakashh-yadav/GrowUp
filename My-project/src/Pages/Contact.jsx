import React from "react";

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center px-6">
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Have a question or want to collaborate? Fill out the form below or reach out to us directly.
                </p>

                {/* Contact Form */}
                <form className="grid grid-cols-1 gap-6">
                    <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" />
                    <input type="email" placeholder="Your Email" className="border p-3 rounded-md w-full" />
                    <textarea placeholder="Your Message" rows="4" className="border p-3 rounded-md w-full"></textarea>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-600 transition">
                        Send Message
                    </button>
                </form>

                {/* Contact Information */}
                <div className="mt-8 text-gray-700">
                    <p><strong>Email:</strong> contact@startupsphere.com</p>
                    <p><strong>Phone:</strong> +91 9729336893</p>
                    <p><strong>Location:</strong> Haryana, India</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
