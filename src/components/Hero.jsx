import { ArrowRight } from 'lucide-react';

export default function Hero({ onStart }) {
    return (
        <div className="text-center py-20 relative z-10">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-sm font-medium tracking-wide animate-fade-in-up">
                Descubre tu verdadero potencial
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100 drop-shadow-xl">
                Hola Caro ✨<br />
                <span className="text-3xl md:text-5xl block mt-4 font-sans font-light text-indigo-100">
                    Tu talento conecta
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-300 block mt-2">
                    Economía y Gestión
                </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                No más tests genéricos. Un diagnóstico profundo impulsado por IA para encontrar maestrías, becas y empleos hechos a tu medida.
            </p>

            <button
                onClick={onStart}
                className="group bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] flex items-center gap-3 mx-auto animate-fade-in-up delay-300"
            >
                Iniciar Diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-white/50 animate-fade-in-up delay-500">
                <div>
                    <span className="block text-2xl font-bold text-white">20+</span>
                    <span className="text-xs uppercase tracking-widest">Universidades Top</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold text-white">100%</span>
                    <span className="text-xs uppercase tracking-widest">Personalizado</span>
                </div>
                <div>
                    <span className="block text-2xl font-bold text-white">IA</span>
                    <span className="text-xs uppercase tracking-widest">Agentes Reales</span>
                </div>
            </div>
        </div>
    )
}
