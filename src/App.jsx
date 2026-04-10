import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import Contact from './Contact/ContactUs';
import ServicesPage from './Services/ServicesPage';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}