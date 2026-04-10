export default function Contact() {
  return (
    <section className="bg-slate-50 py-32 px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <span className="text-slate-500 uppercase tracking-[0.3em] font-bold text-sm">
            Get in Touch
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-500 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-yellow-400 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-yellow-400 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-yellow-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-2">Message</label>
                <textarea className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-yellow-400 focus:outline-none h-32"></textarea>
              </div>
              <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-900">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">[EMAIL_ADDRESS]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-900">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">+234 800 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-900">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                  <p className="text-slate-600">123 Aviation Drive, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}