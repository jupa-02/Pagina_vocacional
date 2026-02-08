import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react';
import opportunities from '../../data/opportunities.json';
import { useCareer } from '../../store/CareerContext';
// import { motion } from 'framer-motion'; // Removed motion to avoid build issues if it wasn't resolving correctly, or standard CSS is fine. Re-adding for consistency.
import { motion } from 'framer-motion';
import { filterOpportunities } from '../../utils/matchingEngine';

export default function AgentsDashboard() {
    const { profile, recommendedPath } = useCareer(); // Get profile
    const [loading, setLoading] = useState(true);
    const [activeMessage, setActiveMessage] = useState('Iniciando búsqueda...');
    const [results, setResults] = useState({ maestrias: [], becas: [], empleos: [], cursos: [] });

    useEffect(() => {
        const sequence = async () => {
            setLoading(true);
            setActiveMessage('Analizando tus vectores de preferencia...');
            await new Promise(r => setTimeout(r, 1000));

            const filtered = filterOpportunities(profile, opportunities);
            setResults(filtered);

            setActiveMessage('Buscando oportunidades con >80% de Match...');
            await new Promise(r => setTimeout(r, 1000));
            setLoading(false);
        };
        sequence();
    }, [profile]);

    // Use the filtered results
    const relevantMasters = results.maestrias;
    const relevantScholarships = results.becas; // Becas
    const relevantJobs = results.empleos;
    const relevantCourses = results.cursos;

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
                <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-semibold text-slate-800 animate-pulse transition-all duration-300">{activeMessage}</h3>
                <p className="text-slate-500 mt-2">Nuestros agentes están curando las mejores opciones para ti.</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12 max-w-5xl mx-auto py-8 px-4"
        >

            {/* Sección de Maestrías */}
            <section>
                <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-200">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Posgrados Recomendados</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {relevantMasters.map(master => (
                        <div key={master.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="bg-indigo-50 text-indigo-700 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider border border-indigo-100">{master.type}</span>
                                    {master.score && <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full border border-green-200">{master.score}% Match</span>}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{master.program}</h3>
                                <p className="text-indigo-900 font-medium text-sm mb-3">{master.university}</p>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{master.description}</p>
                                <a href={master.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors">
                                    Ver programa <Search size={14} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Becas */}
            <section>
                <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-200">
                    <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                        <Award size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Becas y Financiación</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {relevantScholarships.map(beca => (
                        <div key={beca.id} className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl p-6 border border-pink-100 hover:border-pink-200 transition-colors">
                            <h3 className="font-bold text-pink-900 text-lg mb-1">{beca.name}</h3>
                            <p className="text-pink-700 text-sm font-medium mb-3">{beca.entity}</p>
                            <p className="text-slate-700 text-sm mb-4 leading-relaxed">{beca.description}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-xs font-semibold text-pink-600 bg-white px-2 py-1 rounded shadow-sm border border-pink-100">
                                    Cierre: {beca.deadline}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Cursos (NUEVA AGENTE) */}
            <section>
                <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-200">
                    <div className="p-2 bg-indigo-600 rounded-lg text-white">
                        <BookOpen size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Agente de Aprendizaje (Cursos Reales)</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relevantCourses.map(course => (
                        <div key={course.id} className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors flex flex-col">
                            <div className="mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-600 px-2 py-1 rounded">{course.platform}</span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-md mb-2 leading-tight">{course.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 flex-1">{course.description}</p>

                            <div className="flex flex-wrap gap-1 mb-4">
                                {course.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500">{tag}</span>
                                ))}
                            </div>

                            <a href={course.link} target="_blank" rel="noopener noreferrer" className="mt-auto block text-center bg-white border border-slate-300 text-slate-700 text-sm font-semibold py-2 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors">
                                Ver Curso
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Empleos */}
            <section>
                <div className="flex items-center gap-3 mb-6 border-b pb-4 border-slate-200">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Mercado Laboral (Live Simulation)</h2>
                </div>

                <div className="space-y-4">
                    {relevantJobs.map(job => (
                        <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-teal-300 hover:shadow-md transition-all">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                                    {job.score && <span className="bg-teal-50 text-teal-700 text-xs font-bold px-2 py-0.5 rounded border border-teal-100">{job.score}% Match</span>}
                                </div>
                                <p className="text-slate-600 text-sm font-medium mb-2">{job.company} • {job.location}</p>
                                <p className="text-slate-500 text-sm mb-3">{job.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {job.skills.map(skill => (
                                        <span key={skill} className="bg-slate-50 text-slate-600 text-[10px] font-medium px-2 py-1 rounded border border-slate-200 uppercase tracking-wide">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="text-right min-w-[140px]">
                                <div className="font-bold text-teal-700 text-lg mb-3">{job.salary}</div>
                                <button className="w-full bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-transform active:scale-95 shadow-sm">
                                    Aplicar ahora
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </motion.div>
    );
}
