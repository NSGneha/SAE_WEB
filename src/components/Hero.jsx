import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-driver.png';

const Hero = () => {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
            {/* Background Image / Glow */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="F1 Driver"
                    className="w-full h-full object-cover object-top opacity-80"
                />
                {/* Overlay gradient to ensure text readability if needed, or to enhance the 'diverging' colors */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 drop-shadow-[0_0_30px_rgba(217,4,41,0.6)]"
                >
                    SAE MITS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-4 text-xl md:text-2xl font-light tracking-[0.2em] text-gray-200"
                >
                    AUTOMOTIVE ENGINEERS CLUB
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
