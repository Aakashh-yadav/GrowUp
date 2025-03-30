import React from "react";

const Services = () => {
    const services = [
        {
            title: "Startup Networking",
            description: "Connect with founders, investors, and industry experts to accelerate your startup journey.",
            icon: "🌐"
        },
        {
            title: "Funding Opportunities",
            description: "Gain access to potential investors and funding resources to scale your business.",
            icon: "💰"
        },
        {
            title: "Mentorship & Guidance",
            description: "Get expert advice from experienced entrepreneurs and industry leaders.",
            icon: "📚"
        },
        {
            title: "Co-Founder Matching",
            description: "Find like-minded professionals to collaborate and build your startup with.",
            icon: "🤝"
        },
        {
            title: "Startup Promotion",
            description: "Showcase your startup to a wider audience and attract potential customers and partners.",
            icon: "📢"
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center px-6 py-16">
            <div className="w-full max-w-5xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h1>

                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-lg text-gray-600 max-w-2xl mb-16">
                        <b> We offer a range of services designed to help startups grow, connect, and succeed in the competitive business world.</b>
                    </p>
                </div>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center space-y-6">
                            <div className="text-5xl">{service.icon}</div>
                            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
