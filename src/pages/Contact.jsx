import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-sae-dark pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">GET IN <span className="text-sae-red">TOUCH</span></h1>
                    <p className="text-gray-400">Have questions? We'd love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-8">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-sae-red/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sae-red/10 rounded-full flex items-center justify-center text-sae-red shrink-0"><MapPin /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Visit Us</h4>
                                        <p className="text-gray-400">Muthoot Institute of Technology and Science,<br />Varikoli, Kochi, Kerala 682308</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sae-red/10 rounded-full flex items-center justify-center text-sae-red shrink-0"><Phone /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-400">+91 98765 43210 (Faculty Coordinator)<br />+91 87654 32109 (Student Lead)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sae-red/10 rounded-full flex items-center justify-center text-sae-red shrink-0"><Mail /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400">saemits@mits.ac.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Social Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="flex-1 py-4 bg-black rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-sae-red/20 hover:text-sae-red transition-colors text-gray-400 border border-white/10">
                                    <Instagram size={24} />
                                    <span className="text-sm font-bold">Instagram</span>
                                </a>
                                <a href="#" className="flex-1 py-4 bg-black rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-sae-red/20 hover:text-sae-red transition-colors text-gray-400 border border-white/10">
                                    <Linkedin size={24} />
                                    <span className="text-sm font-bold">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sae-red w-full placeholder-gray-600" />
                                <input type="text" placeholder="Last Name" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sae-red w-full placeholder-gray-600" />
                            </div>
                            <input type="email" placeholder="Email Address" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sae-red w-full placeholder-gray-600" />
                            <input type="tel" placeholder="Phone Number" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sae-red w-full placeholder-gray-600" />
                            <textarea rows="4" placeholder="Your Message" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sae-red w-full placeholder-gray-600"></textarea>

                            <button type="submit" className="w-full bg-sae-red text-white font-bold py-4 rounded-lg tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                                SEND MESSAGE <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
