import React from 'react';
import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import aboutImage from '../assets/about-team.png';
import { Calendar, Bell, ChevronRight } from 'lucide-react';

const Home = () => {
    // Mock Core Team
    const coreTeam = [
        { id: 1, name: "Arjun K", role: "Chairperson", image: null },
        { id: 2, name: "Sneha P", role: "Vice Chair", image: null },
        { id: 3, name: "Rahul M", role: "Secretary", image: null },
        { id: 4, name: "Anjali S", role: "Treasurer", image: null },
    ];

    const announcements = [
        { id: 1, type: "EVENT", title: "National BAJA Competition 2025", desc: "Registration opens for the annual BAJA SAE competition. Team assembly begins.", date: "Dec 15" },
        { id: 2, type: "WORKSHOP", title: "EV Powertrain Design", desc: "Hands-on workshop on battery management systems and motor selection.", date: "Jan 10" },
        { id: 3, type: "RECRUITMENT", title: "Phase 1 Recruitment", desc: "Join the legacy. Open for all 1st and 2nd year students.", date: "Feb 05" },
    ];

    return (
        <div className="bg-sae-dark">
            <Hero />

            {/* Announcements */}
            <section id="announcements" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-white uppercase tracking-wider">
                        Announcements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {announcements.map((item) => (
                            <div key={item.id} className="group bg-neutral-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-sae-red/50 hover:-translate-y-2 transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-sae-red text-xs font-bold tracking-[0.2em] border border-sae-red/30 px-3 py-1 rounded-full">{item.type}</span>
                                    <span className="text-gray-500 text-sm font-mono flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-sae-red transition-colors">{item.title}</h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">{item.desc}</p>
                                <a href="#" className="inline-flex items-center text-sm font-bold text-white group-hover:gap-2 transition-all">
                                    READ MORE <ChevronRight size={16} className="text-sae-red" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-sae-red/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sae-red to-sae-accent">EXCELLENCE</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                <strong className="text-white">SAE MITS</strong> is the premier automotive collegiate club at Muthoot Institute of Technology and Science. We are more than just a club; we are a dedicated team of student engineers passionate about pushing the limits of mobility.
                            </p>
                            <p>
                                From designing all-terrain vehicles to implementing electric power-trains, we provide a platform for hands-on learning, industrial exposure, and technical innovation.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-4xl font-bold text-white mb-1">5+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">National Awards</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-bold text-white mb-1">50+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">Active Members</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                            <img src={aboutImage} alt="SAE Team Workshop" className="w-full object-cover aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-mono text-sm">/ OUR WORKSHOP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Team Section */}
            <section id="core-team" className="py-24 px-6 bg-sae-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">CORE TEAM</h2>
                            <p className="text-gray-400">Led by visionaries.</p>
                        </div>
                        <a href="/teams" className="px-6 py-3 border border-white/20 rounded-full text-sm font-bold text-white hover:bg-white hover:text-black transition-all">VIEW ALL TEAMS</a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {coreTeam.map(member => (
                            <TeamCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
