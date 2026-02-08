import { GraduationCap, Briefcase, BookOpen, Search, ArrowUpRight, Award, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data simulates Agent Retrieval
const mockOpportunities = {
    maestrias: [
        { id: 1, type: "Maestría", university: "LSE (London School of Economics)", program: "MSc Development Economics", score: 98, link: "https://www.lse.ac.uk/study-at-lse/Graduate", description: "Enfoque cuantitativo ideal para tu perfil técnico. Red de alumni en organismos multilaterales.", explanation: "Tu perfil 'Tech-Economist' encaja al 98% con el currículo de econometría aplicada." },
        { id: 2, type: "Maestría", university: "Universidad de los Andes", program: "Maestría en Economía (PEG)", score: 95, link: "https://economia.uniandes.edu.co/posgrados/maestria-en-economia", description: "La mejor opción local con proyección internacional. Convenios de doble titulación.", explanation: "Excelente si buscas mantener tu red local mientras profundizas en teoría." },
        { id: 3, type: "MBA", university: "INSEAD", program: "Master in Business Administration", score: 99, link: "https://www.insead.edu/", description: "El programa número 1 para perfiles internacionales. Foco en estrategia global.", explanation: "Tu background en gestión empresarial es la base perfecta para este salto." },
    ],
    becas: [
        { id: 1, name: "Crédito Beca Colfuturo", entity: "Colfuturo", deadline: "28 Feb 2026", link: "https://www.colfuturo.org/", description: "Financiación de hasta 50k USD. Condonable hasta el 80%.", type: "Financiación" },
        { id: 2, name: "Beca Chevening", entity: "UK Govt", deadline: "Nov 2025", link: "https://www.chevening.org/", description: "Beca completa para estudiar un año en UK. Requiere 2 años de experiencia.", type: "Full Ride", explanation: "Tu experiencia en voluntariado suma puntos clave aquí." },
        { id: 3, name: "Forté Foundation Fellowships", entity: "Forté", deadline: "Varies", link: "http://www.fortefoundation.org/", description: "Becas exclusivas para mujeres líderes en negocios.", type: "Liderazgo", explanation: "Diseñada para potenciar el liderazgo femenino en alta gerencia." },
    ],
    empleos: [
        { id: 1, role: "Data Scientist (Economics)", company: "NuBank", location: "Bogotá / Remoto", score: 94, skills: ["Python", "Causal Inference"], description: "Analizar comportamiento crediticio usando modelos estructurales.", explanation: "Buscan economistas que sepan programar (tu fuerte).", type: "Tech" },
        { id: 2, role: "Consultor Jr. Políticas Públicas", company: "Fedesarrollo", location: "Bogotá", score: 88, skills: ["Stata", "Redacción"], description: "Apoyo en investigación de mercado laboral y pensiones.", type: "Policy" },
        { id: 3, role: "Strategy Analyst", company: "McKinsey & Company", location: "Bogotá", score: 97, skills: ["Estrategia", "Problem Solving"], description: "Resolver problemas complejos de negocio para clientes top.", type: "Consultoría", explanation: "Tu perfil híbrido (Gestión + Economía) es oro aquí." },
    ],
    cursos: [
        { id: 1, title: "Microeconometrics with R", platform: "Coursera / Johns Hopkins", description: "Refuerza tus bases en R con aplicaciones modernas.", type: "Certificación", score: 99, explanation: "Cierra la brecha detectada en tu autodiagnóstico de R." },
        { id: 2, title: "Machine Learning for Economists", platform: "AEA / DataCamp", description: "La intersección perfecta para tu perfil Tech-Economist.", type: "Skill", score: 96 }
    ]
};

export default function AgentsDashboard() {
    const { maestrias, becas, empleos, cursos } = mockOpportunities;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
        >
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-indigo-200 text-sm font-medium mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    AGENTS ACTIVE
                </div>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">Oportunidades Encontradas</h2>
                <p className="text-indigo-200">Nuestros agentes han escaneado 15,000+ fuentes para ti.</p>
            </div>

            {/* SECTION 1: POSGRADOS & BECAS */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Masters Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <GraduationCap className="text-pink-400" /> Posgrados Top Tier
                    </h3>
                    <div className="space-y-4">
                        {maestrias.map((master, i) => (
                            <motion.div
                                key={master.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                            >
                                <div className="absolute top-4 right-4 text-white/20 group-hover:text-pink-400 transition-colors">
                                    <ExternalLink size={20} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-white/10 text-indigo-200 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-white/10">{master.type}</span>
                                        {master.score && (
                                            <div className="text-right">
                                                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded-full border border-emerald-500/30 block w-fit ml-auto">{master.score}% Match</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">{master.program}</h3>
                                    {master.explanation && (
                                        <p className="text-xs text-emerald-300 font-medium mb-2 italic">✨ {master.explanation}</p>
                                    )}
                                    <p className="text-indigo-200 font-medium text-sm mb-3">{master.university}</p>
                                    <p className="text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed font-light">{master.description}</p>

                                    <a href={master.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/80 font-semibold text-sm hover:text-white transition-colors">
                                        Aplicar ahora <ArrowUpRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scholarships Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Award className="text-yellow-400" /> Becas & Financiación
                    </h3>
                    <div className="space-y-4">
                        {becas.map((beca, i) => (
                            <motion.div
                                key={beca.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-white text-lg">{beca.name}</h4>
                                    <span className="bg-white/10 text-yellow-200 text-xs px-2 py-1 rounded border border-white/10">{beca.entity}</span>
                                </div>
                                <p className="text-sm text-slate-300 mb-3 font-light">{beca.description}</p>
                                <div className="flex items-center gap-4 text-xs font-medium text-white/60">
                                    <span className="flex items-center gap-1"><Clock size={12} /> Deadline: {beca.deadline}</span>
                                    <a href={beca.link} className="text-yellow-300 hover:text-yellow-200 underline">Más info</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 2: EMPLEOS & CURSOS */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Jobs Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="text-blue-400" /> Empleos Top Tier
                    </h3>
                    <div className="space-y-4">
                        {empleos.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]"
                            >
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-white/10 text-blue-200 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-white/10">{job.type}</span>
                                        {job.score && (
                                            <div className="text-right">
                                                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded-full border border-emerald-500/30 block w-fit ml-auto">{job.score}% Match</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{job.role}</h3>
                                    {job.explanation && (
                                        <p className="text-xs text-emerald-300 font-medium mb-2 italic">✨ {job.explanation}</p>
                                    )}
                                    <p className="text-indigo-200 font-medium text-sm mb-2">{job.company} • {job.location}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map(skill => (
                                            <span key={skill} className="text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Courses Column */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <BookOpen className="text-green-400" /> Cursos y Certificaciones
                    </h3>
                    <div className="space-y-4">
                        {cursos.map((course, i) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
                            >
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="bg-white/10 text-green-200 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-white/10">{course.type}</span>
                                        {course.score && (
                                            <div className="text-right">
                                                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded-full border border-emerald-500/30 block w-fit ml-auto">{course.score}% Match</span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors">{course.title}</h3>
                                    {course.explanation && (
                                        <p className="text-xs text-emerald-300 font-medium mb-2 italic">✨ {course.explanation}</p>
                                    )}
                                    <p className="text-sm text-slate-300 mt-2 font-light">{course.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
