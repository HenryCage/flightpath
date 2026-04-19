export default function Booking() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dark Hero Section */}
      <section className="bg-slate-900 pt-32 md:pt-40 pb-48 px-4 md:px-12 text-center text-white relative">
        <div className="max-w-3xl mx-auto">
          <span className="text-yellow-400 uppercase tracking-[0.3em] font-extrabold text-xs md:text-sm">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 md:mt-6 tracking-tight">
            Schedule a Consultation
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-4 md:mt-6 mx-auto px-4">
            Secure your time with our strategists and let's elevate your aviation operations to the next level.
          </p>
        </div>
      </section>

      {/* Overlapping Booking Form */}
      <section className="px-4 md:px-12 pb-32 relative">
        <div className="max-w-[900px] mx-auto -mt-32 relative z-10">
          <div className="bg-white p-8 md:p-14 lg:p-16 rounded-[2rem] shadow-[0_30px_80px_rgb(0,0,0,0.12)] border border-slate-100">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Your Details</h2>
              <p className="text-slate-500 mt-2 text-sm md:text-base">Fill out the form below and we'll reach out promptly.</p>
            </div>
            
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all duration-300" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all duration-300" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all duration-300" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Message</label>
                <textarea className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-yellow-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-400/10 h-32 md:h-40 resize-none transition-all duration-300" placeholder="Share some details about your inquiry..."></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-slate-900 px-8 py-5 rounded-xl font-black text-lg md:text-xl shadow-[0_10px_30px_rgba(250,204,21,0.3)] hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(250,204,21,0.4)] active:scale-[0.98] transition-all duration-300">
                Submit Request
              </button>
            </form>
          </div>
        </div>

      </section>
    </div>
  )
}
