import React from 'react';

export default function BookingCTA() {
  return (
    <section className="bg-slate-900 py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Text and persuasion */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="text-yellow-400 uppercase tracking-[0.3em] font-extrabold text-sm mb-4 block">
            Take the Next Step
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Ready to Elevate Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Schedule a personalized strategy session today. Our experts are ready to audit your processes and roadmap your path to global aviation leadership.
          </p>
          
          <div className="hidden lg:flex items-center gap-6">
             <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700"></div>
                <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-600"></div>
                <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-xs font-bold text-white shadow-sm">+24</div>
             </div>
             <p className="text-sm text-slate-400 font-bold max-w-[200px]">Trusted by global airlines and regional operators.</p>
          </div>
        </div>

        {/* Right Side: Floating Booking Form */}
        <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:mx-0">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative border border-white/20">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Book Your Session</h3>
            <p className="text-slate-500 mb-8 font-medium text-lg">Select a time that works for you.</p>

            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all" placeholder="john@company.com" />
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-yellow-400 text-slate-900 px-8 py-5 rounded-xl font-black text-lg shadow-[0_10px_30px_rgba(250,204,21,0.3)] hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(250,204,21,0.4)] active:scale-[0.98] transition-all duration-300">
                  Secure My Spot
                </button>
              </div>
            </form>
            <p className="text-xs text-center text-slate-400 font-medium mt-6">
              No commitment required. 100% confidential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
