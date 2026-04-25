import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/flightpath-33.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-[#f7f9fc]/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)] border-b border-white/50">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 w-full max-w-[1440px] mx-auto">

          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Flightpath Consulting Limited" className="h-16 md:h-20 object-contain w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10 items-center">
            <Link to="/services" className="text-slate-500 font-semibold cursor-pointer hover:text-slate-900 transition-colors duration-300 focus:outline-none">
              Services
            </Link>
            <Link to="/about" className="text-slate-500 font-semibold cursor-pointer hover:text-slate-900 transition-colors duration-300 focus:outline-none">About Us</Link>
            <Link to="/case-studies" className="text-slate-500 font-semibold cursor-pointer hover:text-slate-900 transition-colors duration-300 focus:outline-none">Case Studies</Link>
            <a className="text-slate-500 font-semibold cursor-pointer hover:text-slate-900 transition-colors duration-300 focus:outline-none">Insights</a>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/schedule-booking" className="hidden md:inline-block bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-md font-semibold active:scale-[0.98] transition-all cursor-pointer">
              Schedule
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-slate-900 p-2 focus:outline-none"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col px-6 py-8 gap-6 max-h-[80vh] overflow-y-auto">
            <Link onClick={() => setIsOpen(false)} to="/services" className="text-slate-600 font-bold text-lg hover:text-slate-900">Services</Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="text-slate-600 font-bold text-lg hover:text-slate-900">About Us</Link>
            <Link onClick={() => setIsOpen(false)} to="/case-studies" className="text-slate-600 font-bold text-lg hover:text-slate-900 cursor-pointer">Case Studies</Link>
            <a onClick={() => setIsOpen(false)} className="text-slate-600 font-bold text-lg hover:text-slate-900 cursor-pointer">Insights</a>

            <Link onClick={() => setIsOpen(false)} to="/schedule-booking" className="bg-yellow-400 text-slate-900 text-center px-6 py-4 rounded-md font-extrabold mt-4 shadow-sm hover:bg-yellow-300 transition-colors">
              Schedule Consultation
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}