import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold">
                    <Link to="/">Startup Sphere</Link>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">

                    <Link to="/about" className="hover:text-gray-400 transition">About</Link>
                    <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
                    <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex gap-4">
                    <Link
                        to="/login"
                        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                        Signup
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-gray-800 p-4 mt-2 space-y-4">
                    <Link to="/" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/services" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/contact" className="hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
                    <hr className="border-gray-600" />
                    <Link
                        to="/login"
                        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Signup
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
