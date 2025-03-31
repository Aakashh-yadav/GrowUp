import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from './Pages/Signup';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
