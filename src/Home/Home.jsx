import Hero from '../Components/Hero'
import Services from '../Components/Services'

export default function App() {
  return (
    <div className="text-slate-900 bg-slate-50 min-h-screen">
      <main className="pt-24">

        {/* HERO SECTION */}
        <Hero/>

        {/* SERVICES */}
        <Services/>



        {/* CTA */}
        <section className="bg-slate-800 py-32 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Ready to define your new horizon?
          </h2>

          <p className="text-xl max-w-2xl mx-auto mb-12 text-slate-300">
            Contact our executive team today for a confidential assessment.
          </p>

          <button className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-10 py-5 rounded-md font-extrabold text-xl hover:-translate-y-1 transition-all">
            Start a Consultation
          </button>

        </section>

      </main>



      {/* FOOTER */}
      <footer className="bg-slate-950 w-full mt-auto">

        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-[1440px] mx-auto">

          <div className="mb-8 md:mb-0">
            <div className="font-extrabold text-white text-xl mb-4 tracking-tight">
              Executive Horizon
            </div>

            <p className="text-slate-400 text-sm">
              © 2024 Executive Horizon Aviation Consulting.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <a className="text-slate-400 hover:text-white">Privacy Policy</a>
            <a className="text-slate-400 hover:text-white">Terms of Service</a>
            <a className="text-slate-400 hover:text-white">Global Offices</a>
            <a className="text-slate-400 hover:text-white">Careers</a>
          </div>

        </div>

      </footer>

    </div>
  )
}