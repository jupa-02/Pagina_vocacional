import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function WelcomeScreen({ onStart }) {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-4 z-50 transition-opacity duration-1000">

            {/* Butterfly Animation Container */}
            <div className="relative w-32 h-32 mb-8 animate-float">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                    <g className="animate-wing-left origin-center">
                        <path d="M50 50 C 20 20, 0 50, 20 80 C 30 90, 45 60, 50 50 Z" fill="url(#wingGradient)" opacity="0.9" />
                    </g>
                    <g className="animate-wing-right origin-center">
                        <path d="M50 50 C 80 20, 100 50, 80 80 C 70 90, 55 60, 50 50 Z" fill="url(#wingGradient)" opacity="0.9" />
                    </g>
                    <defs>
                        <linearGradient id="wingGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-6 animate-fade-in-up">
                Hola Caro ✨
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-lg text-center opacity-0 animate-fade-in-up delay-500">
                Tu futuro es brillante. Vamos a encontrar el camino exacto para ti.
            </p>

            {showButton && (
                <button
                    onClick={onStart}
                    className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-fade-in"
                >
                    Comenzar Diagnóstico
                    <ArrowRight className="w-5 h-5" />
                </button>
            )}

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wing-left {
          0%, 100% { transform: scaleX(1) rotate(0deg); }
          50% { transform: scaleX(0.8) rotate(10deg); }
        }
        @keyframes wing-right {
          0%, 100% { transform: scaleX(1) rotate(0deg); }
          50% { transform: scaleX(0.8) rotate(-10deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-wing-left { animation: wing-left 0.5s ease-in-out infinite alternate; transform-origin: 50% 50%; }
        .animate-wing-right { animation: wing-right 0.5s ease-in-out infinite alternate; transform-origin: 50% 50%; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
        </div>
    );
}
