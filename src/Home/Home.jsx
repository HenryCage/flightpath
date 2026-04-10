import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

export default function App() {
  return (
    <div className="text-slate-900 bg-slate-50 min-h-screen">
      <main className="pt-24">
        {/* HERO SECTION */}
        <Hero/>

        {/* SERVICES */}
        <Services/>
      </main>

      {/* FOOTER */}
      <Footer/>
    </div>
  )
}