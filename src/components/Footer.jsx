import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-3xl font-display font-bold text-white tracking-wider flex items-center gap-2 mb-4">
                            <span className="text-sae-red">SAE</span> MITS
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-6">
                            A student-driven community focused on hands-on engineering, tech events, competitions, and industry collaboration.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sae-red hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sae-red hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sae-red hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-400 hover:text-sae-red transition-colors">Home</Link></li>
                            <li><Link to="/teams" className="text-gray-400 hover:text-sae-red transition-colors">Teams</Link></li>
                            <li><Link to="/awards" className="text-gray-400 hover:text-sae-red transition-colors">Awards</Link></li>
                            <li><Link to="/membership" className="text-gray-400 hover:text-sae-red transition-colors">Membership</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-400">
                                <MapPin size={20} className="text-sae-red shrink-0" />
                                <span>Muthoot Institute of Technology and Science, Kochi, India</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Phone size={20} className="text-sae-red shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Mail size={20} className="text-sae-red shrink-0" />
                                <span>sae@mits.ac.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2026 SAE MITS. All rights reserved.</p>
                    <p>Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
