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

          <div className="relative z-10 max-w-[1440px] mx-auto px-12 w-full">

            <div className="max-w-2xl text-white">

              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Precision in Aviation Consulting
              </h1>

              <p className="text-xl md:text-2xl font-light mb-12">
                Elevate your operational efficiency and achieve strategic growth with the industry's most trusted executive advisors.
              </p>

              <div className="flex gap-6">
                <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-300 transition-colors w-max">
                  Book a Consultation
                </button>

                <button className="border-b-2 border-white px-4 py-4 font-bold text-lg hover:text-yellow-400 hover:border-yellow-400 transition-colors w-max">
                  View Our Approach
                </button>
              </div>

            </div>

          </div>
        </section>
  )
}