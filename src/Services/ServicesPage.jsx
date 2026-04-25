import Footer from '../Components/Footer';

const expandedServices = [
  {
    icon: 'corporate_fare',
    title: 'Aviation Consultancy',
    desc: 'Advisory for airline operations, management, and strategic representation.'
  },
  {
    icon: 'moving',
    title: 'Business & Route Planning',
    desc: 'Feasibility studies, route development, and complete startup support.'
  },
  {
    icon: 'policy',
    title: 'Regulatory & Licensing',
    desc: 'Certification and compliance with local frameworks and international authorities.'
  },
  {
    icon: 'health_and_safety',
    title: 'Safety Management (SMS)',
    desc: 'Rigorous risk assessments, safety systems, and comprehensive compliance audits.'
  },
  {
    icon: 'school',
    title: 'Training & Development',
    desc: 'Workshops and targeted capacity building for operations and management teams.'
  },
  {
    icon: 'airport_shuttle',
    title: 'Infrastructure & Logistics',
    desc: 'Advisory on airport development, airspace management, and logistics systems design.'
  },
  {
    icon: 'flight',
    title: 'Fleet Advisory',
    desc: 'Expert guidance on aircraft acquisition, leasing structures, and lifecycle management.'
  }
];

const coreServices = expandedServices.slice(0, 3);
const advisoryServices = expandedServices.slice(3);

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 font-sans text-slate-900 flex flex-col">
      <main className="flex-grow">
        {/* Page Header with Background Image */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop" 
              alt="Aviation Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/75"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto relative z-10 w-full text-center">
            <span className="text-yellow-400 uppercase tracking-[0.3em] font-extrabold text-sm mb-6 block drop-shadow-sm">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mt-4 md:mt-6 tracking-tight drop-shadow-md">
              Aviation Services
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mt-6 md:mt-8 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
              Comprehensive consulting solutions rigorously <strong className="font-bold text-white">tailored</strong> for the global aviation industry.
            </p>
          </div>
        </section>

        <div className="py-20 md:py-32 px-4 md:px-12 max-w-[1440px] mx-auto">
          {/* Section 1: Core Strategy */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Core Strategy</h2>
            <div className="h-[2px] flex-1 bg-slate-200 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {coreServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col"
              >
                <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors duration-500">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">{service.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Specialized Advisory */}
        <div>
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Specialized Advisory</h2>
            <div className="h-[2px] flex-1 bg-slate-200 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {advisoryServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col sm:flex-row items-start gap-4 md:gap-6"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors duration-500">
                  <span className="material-symbols-outlined text-2xl md:text-3xl text-slate-400 group-hover:text-white">
                    {service.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      </main>
      <Footer />
    </div>
  );
}
