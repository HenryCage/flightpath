import Footer from '../Components/Footer';

export default function About() {
  const team = [
    {
      name: 'Alexander Sterling',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Alexander brings over 25 years of global aviation leadership, driving strategic growth and pioneering sustainable aviation solutions.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Consulting',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Leading our consulting operations, Sarah specializes in airline fleet planning and operational optimization across emerging markets.'
    },
    {
      name: 'Michael O\'Connor',
      role: 'Chief Strategy Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'An expert in regulatory compliance and international aviation law, Michael has advised government bodies across five continents.'
    },
    {
      name: 'David Okafor',
      role: 'Director of Aerospace Innovation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'David spearheads our digital transformation initiatives, integrating advanced AI and data analytics into modern airline operations.'
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Global Partnerships',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'With an unparalleled network in the aviation supply chain, Elena fosters critical alliances between airlines and key manufacturers.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 font-sans text-slate-900 flex flex-col">
      <main className="grow">
        {/* Header Section */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" 
              alt="Aviation Future" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>
          
          <div className="max-w-[1440px] mx-auto relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
                Pioneering the <span className="text-yellow-400">Future</span> of Aviation
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl drop-shadow-md">
                Redefining the standards of aerospace consulting through innovation, strategy, and unparalleled expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-[1000px] mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-8">
              Our Vision & Mission
            </h2>
            <div className="prose prose-lg text-slate-600 leading-loose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
              </p>
              <p className="font-semibold text-slate-900 border-l-4 border-yellow-400 pl-6 my-8">
                "Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum."
              </p>
              <p>
                Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 md:px-12 bg-slate-50">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-4">
                Leadership Team
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Meet the visionary leaders orchestrating the transformation of the global aviation landscape.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
              {team.map((person, index) => (
                <div key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] max-w-md bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                  <div className="h-80 overflow-hidden relative">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 h-full">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{person.name}</h3>
                    <p className="text-yellow-600 font-semibold uppercase tracking-wider text-sm mb-4">{person.role}</p>
                    <p className="text-slate-600 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
