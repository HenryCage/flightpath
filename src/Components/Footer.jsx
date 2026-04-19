import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full mt-auto border-t border-slate-900">
      <div className="px-6 md:px-12 py-16 lg:py-24 max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Brand & Rights */}
          <div className="md:col-span-1">
            <div className="font-black text-white text-2xl mb-6 tracking-tight uppercase">
              Flightpath
            </div>
            <p className="text-slate-400 text-sm leading-loose mb-8">
              Elevating operational efficiency and achieving strategic growth for the global aviation industry.
            </p>
            <p className="text-slate-500 text-xs">
              © 2026 Flightpath Consulting Limited. <br/>All rights reserved.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-yellow-400">mail</span>
                <a href="mailto:contact@flightpath.com" className="hover:text-white transition-colors">contact@flightpath.com</a>
              </div>
              <div className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-yellow-400">call</span>
                <a href="tel:+2348000000000" className="hover:text-white transition-colors">+234 800 000 0000</a>
              </div>
              <div className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-yellow-400">location_on</span>
                <p>123 Aviation Drive, Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2 tracking-widest text-sm uppercase">Quick Links</h4>
            <Link to="/services" className="text-slate-400 hover:text-white transition-colors max-w-max">Services</Link>
            <a className="text-slate-400 hover:text-white transition-colors max-w-max cursor-pointer">About Us</a>
            <a className="text-slate-400 hover:text-white transition-colors max-w-max cursor-pointer">Case Studies</a>
            <Link to="/contact" className="text-slate-400 hover:tracking-wide hover:text-yellow-400 transition-all font-bold max-w-max mt-2">Schedule Consultation →</Link>
          </div>

        </div>

      </div>
    </footer>
  )
}