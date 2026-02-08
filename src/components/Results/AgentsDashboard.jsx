import { GraduationCap, Briefcase, BookOpen, Search, ArrowUpRight, Award, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCareer } from '../../store/CareerContext';
import { realOpportunities } from '../../data/opportunities';
import { useState, useEffect } from 'react';

export default function AgentsDashboard() {
    const { recommendedPath } = useCareer();
    const [opportunities, setOpportunities] = useState({
        maestrias: [],
        becas: [],
        empleos: [],
        cursos: []
    });

    useEffect(() => {
        if (!recommendedPath) return;

        console.log("Filtering opportunities for:", recommendedPath);

        // FALLBACK MAP: If a profile has few specific results, borrow from related profiles
        const relatedProfiles = {
            corporative: ['businessEconomist', 'top_tier'],
            businessEconomist: ['corporative', 'techEconomist'],
            techEconomist: ['businessEconomist', 'researcher'],
            policyWonk: ['researcher', 'social_mobility'],
            researcher: ['policyWonk', 'top_tier']
        };

        const filterByTag = (items) => {
            if (!items) return [];

            const path = recommendedPath.toLowerCase().trim();

            // 1. Strict Match
            let matches = items.filter(item =>
                item.tags && (item.tags.some(t => t.toLowerCase() === path) || item.tags.includes('all'))
            );

            // 2. Fallback: Related Profiles
            if (matches.length < 2) {
                const backups = relatedProfiles[path] || [];
                const backupMatches = items.filter(item =>
                    item.tags && item.tags.some(t => backups.includes(t))
                );
                matches = [...matches, ...backupMatches.filter(b => !matches.find(m => m.id === b.id))];
            }

            // 3. Ultimate Fallback: Show Top 3 Generic Items if still empty
            if (matches.length === 0) {
                console.warn(`No matches found for ${path} in category. Using generic fallback.`);
                matches = items.slice(0, 3);
            }

            return matches.slice(0, 3);
        };

        const getAIExplanation = (itemTags) => {
            if (!itemTags || !recommendedPath) return "Oportunidad general recomendada.";

            const path = recommendedPath.toLowerCase().trim();
            const isDirectMatch = itemTags.some(t => t.toLowerCase() === path);

            const matchTemplates = [
                `🎯 Tu perfil ${path} es ideal para esto.`,
                `🚀 Potencia tus habilidades de ${path}.`,
                `✨ Seleccionado por nuestro algoritmo para ${path}.`,
                `💡 Alta afinidad con tus intereses detectados.`
            ];

            const generalTemplates = [
                "💎 Una oportunidad de alto valor curricular.",
                "🔥 Altamente demandado en el mercado actual.",
                "🌟 Recomendado para perfiles de liderazgo.",
                "⚡ Oportunidad destacada por nuestros agentes."
            ];

            if (isDirectMatch) {
                return matchTemplates[Math.floor(Math.random() * matchTemplates.length)];
            }
            return generalTemplates[Math.floor(Math.random() * generalTemplates.length)];
        };

        const enhanceWithExplanation = (items) => {
            return items.map(item => ({
                ...item,
                explanation: getAIExplanation(item.tags)
            }));
        };

        setOpportunities({
            maestrias: enhanceWithExplanation(filterByTag(realOpportunities.universityPrograms)),
            becas: enhanceWithExplanation(filterByTag(realOpportunities.scholarships)),
            empleos: enhanceWithExplanation(filterByTag(realOpportunities.jobs)),
            cursos: enhanceWithExplanation(filterByTag(realOpportunities.courses))
        });

    }, [recommendedPath]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
        >
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-indigo-200 text-sm font-medium mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    AGENTS ACTIVE
                </div>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">Oportunidades Reales (2025)</h2>
                <p className="text-indigo-200">
                    Basado en tu perfil <strong>{recommendedPath}</strong>, hemos encontrado esto para ti:
                </p>
            </div>

            {/* SECTION 1: ACADEMIA & BECAS */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Masters Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <GraduationCap className="text-pink-400" /> Programas Recomendados
                    </h3>
                    <div className="space-y-4">
                        {opportunities.maestrias.length > 0 ? (
                            opportunities.maestrias.map((prog, i) => (
                                <motion.div
                                    key={prog.id}
                                    variants={itemVariants}
                                    className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                                >
                                    <div className="absolute top-4 right-4 text-white/20 group-hover:text-pink-400 transition-colors">
                                        <ExternalLink size={20} />
                                    </div>
                                    <div>
                                        <span className="bg-white/10 text-indigo-200 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-white/10">{prog.type}</span>
                                        <h3 className="text-lg font-bold text-white mt-2 mb-1 group-hover:text-pink-300 transition-colors">{prog.program}</h3>
                                        <p className="text-indigo-200 font-medium text-sm mb-2">{prog.university} • {prog.location}</p>
                                        <p className="text-slate-300 text-sm mb-4 line-clamp-3 font-light leading-relaxed">{prog.description}</p>
                                        {prog.ranking && (
                                            <div className="text-xs text-emerald-300 font-bold bg-emerald-500/10 px-2 py-1 rounded-md inline-block border border-emerald-500/20">
                                                🏆 {prog.ranking}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-white/50 italic">Buscando programas específicos...</p>
                        )}
                    </div>
                </div>

                {/* Scholarships Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Award className="text-yellow-400" /> Becas Disponibles
                    </h3>
                    <div className="space-y-4">
                        {opportunities.becas.length > 0 ? (
                            opportunities.becas.map((beca, i) => (
                                <motion.div
                                    key={beca.id}
                                    variants={itemVariants}
                                    className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-white text-lg">{beca.name}</h4>
                                    </div>
                                    <p className="text-sm text-yellow-100/80 mb-1 font-medium">{beca.provider}</p>
                                    <p className="text-sm text-slate-300 mb-4 font-light">{beca.description}</p>

                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div className="bg-white/5 p-2 rounded border border-white/5">
                                            <span className="block text-slate-400 mb-0.5">Cobertura</span>
                                            <span className="text-white font-medium">{beca.coverage}</span>
                                        </div>
                                        <div className="bg-white/5 p-2 rounded border border-white/5">
                                            <span className="block text-slate-400 mb-0.5">Cierre</span>
                                            <span className="text-white font-medium">{beca.deadline}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-right">
                                        <a href={beca.link} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-200 text-xs font-bold uppercase tracking-wider underline">
                                            Ver Convocatoria Oficial
                                        </a>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-white/50 italic">Escaneando bases de datos de becas...</p>
                        )}
                    </div>
                </div>
            </div>

            {/* SECTION 2: MUNDO LABORAL & SKILLS */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Jobs Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="text-blue-400" /> Mercado Laboral (Ejemplos)
                    </h3>
                    <div className="space-y-4">
                        {opportunities.empleos.length > 0 ? (
                            opportunities.empleos.map((job, i) => (
                                <motion.div
                                    key={job.id}
                                    variants={itemVariants}
                                    className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-white/10 text-blue-200 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-white/10">{job.type}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-blue-300 transition-colors">{job.role}</h3>
                                    <p className="text-indigo-200 text-sm mb-3">{job.company} • {job.location}</p>
                                    <p className="text-slate-300 text-sm mb-4 font-light leading-relaxed">{job.description}</p>

                                    <a href={job.link} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-300 hover:text-white text-xs font-bold transition-colors">
                                        Ver Portal de Empleo →
                                    </a>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-white/50 italic">Buscando vacantes relevantes...</p>
                        )}
                    </div>
                </div>

                {/* Courses Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <BookOpen className="text-green-400" /> Ruta de Aprendizaje
                    </h3>
                    <div className="space-y-4">
                        {opportunities.cursos.length > 0 ? (
                            opportunities.cursos.map((course, i) => (
                                <motion.div
                                    key={course.id}
                                    variants={itemVariants}
                                    className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="bg-white/10 text-green-200 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-white/10">{course.type}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-300 transition-colors">{course.title}</h3>
                                    <p className="text-indigo-200 text-sm mb-2">{course.platform}</p>
                                    <p className="text-slate-300 text-sm mb-4 font-light">{course.description}</p>

                                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 text-xs font-bold underline">
                                        Ir al Curso
                                    </a>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-white/50 italic">Curando cursos para ti...</p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
