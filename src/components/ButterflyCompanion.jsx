import { useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function ButterflyCompanion({ step }) {
    // Mouse Parallax Logic using useMotionValue for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position from -1 to 1
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Smooth spring animation for the mouse follow
    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), springConfig);
    const y = useSpring(useTransform(mouseY, [-1, 1], [-30, 30]), springConfig);
    const rotateX = useSpring(useTransform(mouseY, [-1, 1], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), springConfig);

    // Determine position based on step
    const getPosition = (s) => {
        if (s <= 0) {
            // Welcome / Hero: Center, Large
            return {
                top: "40%", left: "50%", x: "-50%", y: "-50%", scale: 1.2, rotate: 0
            };
        }
        if (s === 1) { // Diagnosis
            // Top Right Corner, Small, Observing
            return {
                top: "10%", left: "90%", x: "-50%", y: "-50%", scale: 0.5, rotate: 15
            };
        }
        if (s === 2) { // Results
            // Resting on top of card
            return {
                top: "12%", left: "50%", x: "-50%", y: "0%", scale: 0.7, rotate: 0
            };
        }
        if (s === 3) { // Agents
            // Orbiting / Active
            return {
                top: "5%", left: "50%", x: "-50%", y: "0%", scale: 0.4, rotate: 0
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
            className="fixed z-50 pointer-events-none perspective-1000"
            style={{ perspective: 1000 }}
        >
            {/* Inner container for Parallax & 3D Rotation */}
            <motion.div
                style={{ x: x, y: y, rotateX: rotateX, rotateY: rotateY }}
                className="relative w-48 h-48"
            >
                <img
                    src={`${import.meta.env.BASE_URL}butterfly_real.png`}
                    alt="Butterfly Companion"
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] animate-float-slow"
                />
            </motion.div>
        </motion.div>
    );
}
