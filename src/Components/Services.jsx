const servicesData = [
  {
    icon: 'strategy',
    title: 'Strategic Planning',
    description: 'Market analysis and long-term asset positioning strategies designed for global aviation leaders.',
    highlighted: false,
  },
  {
    icon: 'flight_takeoff',
    title: 'Fleet Management',
    description: 'End-to-end lifecycle management from acquisition to divestment with a focus on residual value.',
    highlighted: true,
  },
  {
    icon: 'gavel',
    title: 'Regulatory Compliance',
    description: 'Navigating complex international aviation laws and safety standards with absolute precision.',
    highlighted: false,
  }
];

export default function Services() {
  return(
    <section className="bg-surface py-32 px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20">
          <span className="text-slate-500 uppercase tracking-[0.3em] font-bold text-sm">
            Strategic Excellence
          </span>
          <h2 className="text-5xl font-extrabold text-slate-900 mt-4">
            Consulting Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-2xl shadow-lg group transition-all duration-300 hover:-translate-y-2 ${service.highlighted ? 'bg-slate-900 text-white' : 'bg-white'}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-8 ${service.highlighted ? 'bg-slate-800' : 'bg-gray-100'}`}>
                <span className={`material-symbols-outlined ${service.highlighted ? 'text-yellow-400' : 'text-slate-900'}`}>
                  {service.icon}
                </span>
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${service.highlighted ? '' : 'text-slate-900'}`}>
                {service.title}
              </h3>

              <p className={`leading-relaxed mb-8 ${service.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                {service.description}
              </p>

              <a className={`font-bold inline-flex items-center gap-2 transition-all ${service.highlighted ? 'text-yellow-400' : 'text-slate-900 group-hover:gap-4'}`}>
                Explore Service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}