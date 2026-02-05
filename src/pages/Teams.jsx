import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';

const Teams = () => {
    const [activeTab, setActiveTab] = useState('HBaja'); // 'HBaja' | 'EBaja'

    // Mock Data
    const hbajaMembers = [
        { id: 1, name: "Name 1", role: "Captain", image: null },
        { id: 2, name: "Name 2", role: "Driver", image: null },
        { id: 3, name: "Name 3", role: "Chassis Lead", image: null },
        { id: 4, name: "Name 4", role: "Suspension", image: null },
    ];

    const ebajaMembers = [
        { id: 1, name: "Name A", role: "Electrical Lead", image: null },
        { id: 2, name: "Name B", role: "Power Train", image: null },
        { id: 3, name: "Name C", role: "BMS Lead", image: null },
        { id: 4, name: "Name D", role: "Driver", image: null },
    ];

    const members = activeTab === 'HBaja' ? hbajaMembers : ebajaMembers;

    return (
        <div className="min-h-screen bg-sae-dark pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">OUR <span className="text-sae-red">TEAMS</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Meet the minds behind the machines.</p>
                </div>

                {/* Toggle / Dropdown */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/5 p-1 rounded-full border border-white/10 flex relative">
                        <button
                            onClick={() => setActiveTab('HBaja')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-colors duration-300 ${activeTab === 'HBaja' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            H-BAJA
                        </button>
                        <button
                            onClick={() => setActiveTab('EBaja')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold tracking-widest transition-colors duration-300 ${activeTab === 'EBaja' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            E-BAJA
                        </button>

                        {/* Sliding Background */}
                        <motion.div
                            layoutId="tab-bg"
                            className="absolute top-1 bottom-1 bg-sae-red rounded-full"
                            initial={false}
                            animate={{
                                left: activeTab === 'HBaja' ? '4px' : '50%',
                                width: activeTab === 'HBaja' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                                x: activeTab === 'EBaja' ? 0 : 0
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {members.map(member => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Teams;
