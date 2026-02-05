import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const TeamCard = ({ member }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-sae-red/50 transition-all duration-300"
        >
            <div className="aspect-[3/4] overflow-hidden">
                {/* Placeholder for member image, using gray bg if no image */}
                <div className={`w-full h-full bg-gray-800 ${member.image ? '' : 'flex items-center justify-center text-gray-600'}`}>
                    {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                        <span>No Image</span>
                    )}
                </div>
            </div>

            <div className="p-4 bg-gradient-to-t from-black via-black/90 to-transparent absolute bottom-0 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sae-red text-sm font-medium tracking-wide uppercase">{member.role}</p>

                <div className="flex gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><Mail size={18} /></a>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;
