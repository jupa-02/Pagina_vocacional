import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function WelcomeScreen({ onStart }) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-4 z-50 overflow-hidden">

            {/* Background Gradient - Cinematic/Ethereal */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950 to-black opacity-80 z-0"></div>

            {/* Realistic Butterfly Container */}
            <div className="relative z-10 mb-12 mix-blend-screen opacity-90">
                {/* Using a reliable high-quality GIF of a real butterfly (Morpho) from Wikimedia/Public Domain or similar stable source */}
                {/* Fallback to high-quality CSS if image breaks, but we will use an image tag */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/23/Blue_Morpho_Butterfly.jpg"
                    alt="Real Butterfly"
                    className="w-64 h-64 object-cover rounded-full shadow-[0_0_100px_rgba(99,102,241,0.5)] animate-pulse-slow mask-image-circle"
                    style={{
                        maskImage: 'radial-gradient(circle, black 50%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 70%)'
                    }}
                />
                {/* Overlay animation for "life" */}
                <div className="absolute inset-0 bg-indigo-500 mix-blend-overlay animate-pulse rounded-full opacity-20"></div>
            </div>

            <div className="relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tight animate-fade-in-up drop-shadow-2xl">
                    Hola, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">Caro</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-lg mx-auto font-light leading-relaxed animate-fade-in-up delay-700">
                    Tu vocación no es un destino.<br />Es una métrica exacta.
                </p>

                {showButton && (
                    <button
                        onClick={onStart}
                        className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-lg tracking-widest uppercase hover:bg-white/20 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] animate-fade-in"
                    >
                        <span className="flex items-center gap-4">
                            Iniciar Diagnóstico Real
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                )}
            </div>

            <style>{`
        .delay-700 { animation-delay: 700ms; }
        .animate-fade-in-up { animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(20px); }
        .animate-pulse-slow { animation: pulseSlow 4s infinite ease-in-out; }
        
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
        </div>
    );
}
