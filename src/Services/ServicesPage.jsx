import React from 'react';

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

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-12 bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-20 text-center">
          <span className="text-slate-500 uppercase tracking-[0.3em] font-bold text-sm">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4">
            Aviation Services
          </h1>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Comprehensive consulting solutions rigorously tailored for the global aviation industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expandedServices.map((service, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-10 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 border border-slate-100 group ${idx === expandedServices.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2 md:max-w-md lg:max-w-none md:mx-auto lg:mx-0 w-full' : ''}`}
            >
              <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-slate-900">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
