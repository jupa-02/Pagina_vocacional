import { ArrowRight } from 'lucide-react';

export default function Hero({ onStart }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Tu Brújula Profesional <br />
                <span className="text-indigo-600">en Economía</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                Descubre tu perfil de mercado ideal (Tech, Policy, Corporate o Research) y obtén una hoja de ruta personalizada para potenciar tu carrera.
            </p>
            <button
                onClick={onStart}
                className="group bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                Comenzar Diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
}
