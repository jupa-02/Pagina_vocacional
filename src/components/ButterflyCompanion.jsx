import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function ButterflyCompanion({ step }) {
    // Mouse tracking for "landing" position relative to cursor
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const springConfig = { damping: 20, stiffness: 100 };
    const x = useSpring(useTransform(mouseX, [-1, 1], [-50, 50]), springConfig);
    const y = useSpring(useTransform(mouseY, [-1, 1], [-50, 50]), springConfig);

    // Dynamic scale/position based on step
    const getStyles = (s) => {
        if (s <= 0) return { top: "30%", left: "50%", scale: 1.5 };
        if (s === 1) return { top: "10%", left: "90%", scale: 0.6 };
        if (s === 2) return { top: "15%", left: "50%", scale: 0.8 };
        return { top: "5%", left: "50%", scale: 0.5 };
    };

    const style = getStyles(step);

    return (
        <div className="mariposa-container">
            <motion.div
                className="mariposa"
                initial={false}
                animate={{
                    top: style.top,
                    left: style.left,
                    scale: style.scale
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ x, y }}
            >
                <div className="mariposa-turn">
                    <div className="mariposa-flutter">
                        {/* LEFT WING SVG */}
                        <div className="wing wing-left">
                            <svg viewBox="0 0 50 100" className="w-full h-full overflow-visible drop-shadow-xl">
                                <defs>
                                    <radialGradient id="wingGradL" cx="0.8" cy="0.3" r="0.8">
                                        <stop offset="0%" stopColor="#fbbf24" />
                                        <stop offset="100%" stopColor="#d97706" />
                                    </radialGradient>
                                </defs>
                                <path d="M50 50 C 10 10, -10 40, 10 80 C 25 90, 48 60, 50 50 Z" fill="#18181b" />
                                <path d="M48 52 C 15 20, 0 45, 15 75 C 25 82, 45 60, 48 52 Z" fill="url(#wingGradL)" />
                                {/* Dots */}
                                <circle cx="5" cy="40" r="1.5" fill="white" />
                                <circle cx="10" cy="75" r="1.2" fill="white" />
                            </svg>
                        </div>

                        {/* RIGHT WING SVG */}
                        <div className="wing wing-right">
                            <svg viewBox="0 0 50 100" className="w-full h-full overflow-visible drop-shadow-xl">
                                <defs>
                                    <radialGradient id="wingGradR" cx="0.2" cy="0.3" r="0.8">
                                        <stop offset="0%" stopColor="#fbbf24" />
                                        <stop offset="100%" stopColor="#d97706" />
                                    </radialGradient>
                                </defs>
                                <path d="M0 50 C 40 10, 60 40, 40 80 C 25 90, 2 60, 0 50 Z" fill="#18181b" />
                                <path d="M2 52 C 35 20, 50 45, 35 75 C 25 82, 5 60, 2 52 Z" fill="url(#wingGradR)" />
                                {/* Dots */}
                                <circle cx="45" cy="40" r="1.5" fill="white" />
                                <circle cx="40" cy="75" r="1.2" fill="white" />
                            </svg>
                        </div>

                        {/* BODY */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-16 bg-zinc-900 rounded-full"></div>
                        {/* Antennae */}
                        <div className="absolute -top-4 left-1/2 w-6 h-8 -translate-x-1/2 border-t-2 border-zinc-900 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
