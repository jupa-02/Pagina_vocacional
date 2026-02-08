import { motion } from 'framer-motion';
import { useCareer } from '../store/CareerContext';

export default function ButterflyCompanion({ step }) {
    // Determine position based on step
    const getPosition = (s) => {
        if (s <= 0) {
            // Welcome / Hero: Center, Large
            return {
                top: "30%", left: "50%", x: "-50%", y: "-50%", scale: 1.5, rotate: 0
            };
        }
        if (s === 1) { // Diagnosis
            // Top Right Corner, Small, Observing
            return {
                top: "10%", left: "90%", x: "-50%", y: "-50%", scale: 0.6, rotate: 15
            };
        }
        if (s === 2) { // Results
            // Resting on top of card
            return {
                top: "15%", left: "50%", x: "-50%", y: "0%", scale: 0.8, rotate: 0
            };
        }
        if (s === 3) { // Agents
            // Orbiting / Active
            return {
                top: "5%", left: "50%", x: "-50%", y: "0%", scale: 0.5, rotate: 0
            };
        }
        return { top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 0 };
    };

    const pos = getPosition(step);

    return (
        <motion.div
            initial={false}
            animate={pos}
            transition={{
                type: "spring", stiffness: 40, damping: 15, mass: 1,
                layout: { duration: 1.5 }
            }}
            className="fixed z-50 pointer-events-none"
        >
            <div className="relative w-32 h-32">
                {/* Vector Butterfly - No external image dependency */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    <defs>
                        <radialGradient id="wingGlow" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.2" />
                        </radialGradient>
                        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1e1b4b" />
                            <stop offset="100%" stopColor="#4338ca" />
                        </linearGradient>
                    </defs>

                    {/* Wings Container for Flapping */}
                    <g className="animate-float">
                        {/* Left Wing */}
                        <motion.g
                            animate={{ rotateY: [0, 60, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
                            style={{ originX: 0.5 }}
                        >
                            <path d="M50 50 C 20 10, 0 40, 20 80 C 35 90, 48 60, 50 50 Z" fill="url(#wingGlow)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" className="mix-blend-screen" />
                            <path d="M50 50 C 25 25, 10 50, 30 70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                        </motion.g>

                        {/* Right Wing */}
                        <motion.g
                            animate={{ rotateY: [0, -60, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
                            style={{ originX: 0.5 }}
                        >
                            <path d="M50 50 C 80 10, 100 40, 80 80 C 65 90, 52 60, 50 50 Z" fill="url(#wingGlow)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" className="mix-blend-screen" />
                            <path d="M50 50 C 75 25, 90 50, 70 70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                        </motion.g>

                        {/* Body */}
                        <ellipse cx="50" cy="50" rx="3" ry="15" fill="url(#bodyGrad)" />
                        {/* Antennae */}
                        <path d="M50 35 Q 45 20 40 25" fill="none" stroke="white" strokeWidth="0.5" opacity="0.8" />
                        <path d="M50 35 Q 55 20 60 25" fill="none" stroke="white" strokeWidth="0.5" opacity="0.8" />
                    </g>
                </svg>

                {/* Magical Particles Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full animate-pulse opacity-30 bg-indigo-500 blur-2xl rounded-full"></div>
                </div>
            </div>
        </motion.div>
    );
}

// Add Float Animation if not present globally
// .animate-float { animation: float 3s ease-in-out infinite; }
// @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
