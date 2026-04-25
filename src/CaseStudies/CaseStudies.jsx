import React from 'react';
import Footer from '../Components/Footer';
import caseStudiesBg from '../assets/case-studies-bg.jpg';

const caseStudies = [
  {
    id: 1,
    title: "Fleet Optimization & Fuel Efficiency",
    client: "Global Cargo Airline",
    challenge: "The client faced soaring operational costs due to an aging fleet and inefficient routing protocols, resulting in a 15% lower profit margin compared to industry standards.",
    solution: "We implemented a comprehensive fleet modernization strategy alongside an AI-driven route optimization system. We also retrained flight crews on advanced fuel-saving techniques.",
    results: [
      "Reduced fuel consumption by 12% annually.",
      "Increased overall fleet utilization by 18%.",
      "Saved $45M in operational expenditures in the first year."
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Regulatory Compliance Turnaround",
    client: "Regional Commercial Carrier",
    challenge: "Following a failed safety audit, the carrier was at risk of losing its operating license. They needed a rapid, sweeping overhaul of their safety management systems (SMS).",
    solution: "Flightpath deployed a crisis-response team to completely rebuild the airline's SMS, digitize compliance tracking, and establish a continuous safety culture training program.",
    results: [
      "Achieved 100% compliance in a follow-up audit within 6 months.",
      "Reduced safety incident reports by 40%.",
      "Restored stakeholder confidence and stabilized stock value."
    ],
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Strategic Route Expansion",
    client: "Emerging Market Airline",
    challenge: "The airline aimed to double its market share by entering highly competitive international routes, but lacked the market intelligence and regulatory relationships to execute smoothly.",
    solution: "We conducted a deep-dive market analysis, secured necessary bilateral air service agreements, and developed a phased rollout plan targeting underserved demographics.",
    results: [
      "Successfully launched 8 new international routes in 18 months.",
      "Captured a 22% market share on new routes within the first year.",
      "Increased overall annual revenue by 35%."
    ],
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pt-24 md:pt-32 flex flex-col">
      {/* Page Header with Background Image */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 min-h-[50vh] flex items-center overflow-hidden w-full">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0">
          <img 
            src={caseStudiesBg} 
            alt="Airport Tarmac at Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-md">
            Our <span className="text-yellow-400">Impact.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Explore how Flightpath Consulting Limited has partnered with aviation leaders worldwide to navigate complex challenges, optimize operations, and achieve unprecedented growth.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="px-6 md:px-12 pb-24 w-full max-w-[1440px] mx-auto space-y-16 lg:space-y-24">
        {caseStudies.map((study, index) => (
          <div key={study.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-300 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)]`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <p className="text-yellow-500 font-bold tracking-widest text-sm uppercase mb-2">{study.client}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{study.title}</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-500 text-xl">error</span>
                    The Challenge
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-500 text-xl">lightbulb</span>
                    The Solution
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                    Key Results
                  </h3>
                  <ul className="space-y-3">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5">arrow_right</span>
                        <span className="leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        ))}
      </section>
      
      <Footer />
    </div>
  );
}
