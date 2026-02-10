
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular, formula, formUrl }) => {
    return (
        <div className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
            isPopular 
                ? 'bg-sae-red/10 border-sae-red shadow-[0_0_30px_rgba(217,4,41,0.2)] hover:shadow-[0_0_50px_rgba(217,4,41,0.5)] hover:border-sae-red/80' 
                : 'bg-white/5 border-white/10 hover:border-sae-red hover:shadow-[0_0_40px_rgba(217,4,41,0.3)] hover:bg-sae-red/5'
        } backdrop-blur-md group`}>
            {isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sae-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                    Most Popular
                </span>
            )}

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-display font-bold text-white">₹{price}</span>
                <span className="text-gray-400 text-sm">/ total</span>
            </div>
            <p className="text-xs text-sae-red mb-6 font-mono">{formula}</p>

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={16} className="text-sae-red mt-0.5 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a 
                href={formUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg text-sm font-bold tracking-widest transition-all text-center block ${
                    isPopular 
                        ? 'bg-sae-red text-white hover:bg-red-700 hover:shadow-lg' 
                        : 'bg-white text-black hover:bg-gray-200 hover:shadow-lg'
                }`}
            >
                JOIN NOW
            </a>
        </div>
    );
};

const Membership = () => {
    const tiers = [
        { 
            title: "1st Year (4+1)", 
            price: "2478", 
            formula: "₹400×4 + ₹500 + Tax", 
            features: ["4 Year Membership", "Smart Card Access", "Freshers Kit", "Workshop Discounts"], 
            isPopular: true, 
            formUrl: "https://forms.google.com/your-form-url-here" 
        },
        { 
            title: "2nd Year (3+1)", 
            price: "2124", 
            formula: "₹400×3 + ₹600 + Tax", 
            features: ["3 Year Membership", "Access to Events", "Online Resources"], 
            isPopular: false, 
            formUrl: "https://forms.google.com/your-form-url-here" 
        },
        { 
            title: "3rd Year (2+1)", 
            price: "1770", 
            formula: "₹400×2 + ₹700 + Tax", 
            features: ["2 Year Membership", "Internship Support"], 
            isPopular: false, 
            formUrl: "https://forms.google.com/your-form-url-here" 
        },
        { 
            title: "4th Year (1+1)", 
            price: "1416", 
            formula: "₹400×1 + ₹800 + Tax", 
            features: ["1 Year Membership", "Project Guidance"], 
            isPopular: false, 
            formUrl: "https://forms.google.com/your-form-url-here" 
        },
        { 
            title: "Annual", 
            price: "472", 
            formula: "₹400 + Tax", 
            features: ["1 Year Membership"], 
            isPopular: false, 
            formUrl: "https://forms.google.com/your-form-url-here" 
        },
    ];

    return (
        <div className="min-h-screen bg-sae-dark pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">MEMBERSHIP</h1>
                    <p className="text-gray-400">Join the elite community of automotive engineers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {tiers.map((tier, i) => (
                        <PricingCard key={i} {...tier} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Membership;