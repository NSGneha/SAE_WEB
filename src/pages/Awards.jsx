import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const AwardItem = ({ title, year, description, image, align = 'left' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center mb-20`}
        >
            <div className="w-full md:w-1/2 aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 relative group">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-gray-900 to-gray-800">
                        <Trophy size={64} className="text-gray-700" />
                    </div>
                )}
            </div>

            <div className="w-full md:w-1/2">
                <span className="text-sae-red font-mono text-xl mb-2 block">{year}</span>
                <h3 className="text-4xl font-display font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{description}</p>
            </div>
        </motion.div>
    );
};

const Awards = () => {
    return (
        <div className="min-h-screen bg-sae-dark pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">HALL OF <span className="text-sae-red">FAME</span></h1>
                    <p className="text-gray-400">Celebrating our achievements on the track.</p>
                </div>

                <div className="space-y-4">
                    <AwardItem
                        year="2025"
                        title="Best Innovation Award"
                        description="Secured the 1st prize for innovative transmission system design at the National BAJA Competition."
                        align="left"
                    />
                    <AwardItem
                        year="2024"
                        title="Endurance Race - 2nd Place"
                        description="Completed the 4-hour endurance race with zero breakdowns, securing the podium finish among 50+ teams."
                        align="right"
                    />
                    <AwardItem
                        year="2023"
                        title="Best Rookie Team"
                        description="Recognized as the most promising debut team in the e-BAJA segment."
                        align="left"
                    />
                </div>
            </div>
        </div>
    );
};

export default Awards;
