import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import Booking from './Booking/Booking';
import ServicesPage from './Services/ServicesPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/schedule-booking" element={<Booking />} />
      </Routes>
    </>
  )
}