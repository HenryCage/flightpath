import { Link } from 'react-router-dom';
import plane from '../assets/p1.jpg'

export default function Hero(){
  return(
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src={plane}
          alt="private jet"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-32 md:pt-40 pb-20">

        <div className="max-w-2xl text-white">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Precision in Aviation Consulting
          </h1>

          <p className="text-xl md:text-2xl font-light mb-12">
            Elevate your operational efficiency and achieve strategic growth with the industry's most trusted executive advisors.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:items-start items-center">
            
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <Link to="/contact" className="relative group bg-yellow-400 text-center text-slate-900 px-8 py-4 rounded-xl font-black text-lg shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] active:scale-95 transition-all duration-300 w-full sm:w-max">
                <div className="absolute inset-0 rounded-xl ring-2 ring-yellow-400 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20 group-hover:opacity-0 transition-opacity"></div>
                Book a Consultation
              </Link>
              
              <div className="flex items-center gap-2 my-4 text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-90 drop-shadow-md">
                <span className="block w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></span>
                Strictly Confidential 
              </div>
            </div>

            <button className="border-b-2 border-white/50 text-center px-4 py-4 font-bold text-lg hover:text-white hover:border-white transition-colors w-full sm:w-max h-max">
              View Our Approach
            </button>
            
          </div>

        </div>

      </div>
    </section>
  )
}