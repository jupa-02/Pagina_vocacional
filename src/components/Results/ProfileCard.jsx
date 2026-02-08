import { Map, Briefcase, BookOpen, User, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfileCard({ profileData }) {
    if (!profileData) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white"
        >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600/50 to-purple-600/50 p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-50 backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-4 shadow-inner ring-1 ring-white/30">
                        <User size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-2">{profileData.title}</h2>
                    <p className="text-indigo-100 italic text-lg opacity-90">{profileData.tagline}</p>
                </div>
            </div>

            {/* Body Section */}
            <div className="p-8 space-y-8">
                {/* Mission */}
                <div>
                    <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Map size={16} /> Tu Misión
                    </h3>
                    <p className="text-slate-200 leading-relaxed font-light text-lg">
                        {profileData.description}
                    </p>
                </div>

                {/* Grid: Superpowers & Roadmap */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Superpowers */}
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                            <Star size={18} className="text-yellow-400" /> Superpoderes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {profileData.tags.map(tag => (
                                <span key={tag} className="bg-indigo-500/30 text-indigo-100 text-xs px-3 py-1 rounded-full border border-indigo-400/30">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap Steps */}
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                            <BookOpen size={18} className="text-pink-400" /> Ruta de Aprendizaje
                        </h4>
                        <ul className="text-sm space-y-2 text-slate-300">
                            {profileData.roadmap.map((stepObj, i) => (
                                <li key={i} className="flex gap-2 items-start">
                                    <span className="text-indigo-400 font-bold shrink-0">{i + 1}.</span>
                                    <div>
                                        <span className="font-semibold text-slate-200 block">{stepObj.step}</span>
                                        <span className="text-slate-300">{stepObj.item}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-10 pt-8 border-t border-white/10 flex gap-4">
                    <button className="flex-1 bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
                        <Map size={18} />
                        Ver Roadmap Detallado
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
