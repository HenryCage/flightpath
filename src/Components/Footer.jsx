export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-[1440px] mx-auto">

          <div className="mb-8 md:mb-0">
            <div className="font-extrabold text-white text-xl mb-4 tracking-tight">
              Flightpath Consulting Limited
            </div>

            <p className="text-slate-400 text-sm">
              © 2026 Flightpath Consulting Limited.
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
  )
}