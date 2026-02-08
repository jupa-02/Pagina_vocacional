import { useCareer } from '../../store/CareerContext';
import { Terminal, Database, FileSpreadsheet, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const softwareOptions = [
    { id: 'r', label: 'R / RStudio', icon: Terminal, color: 'text-blue-600', description: 'Tidyverse, ggplot2, Shiny' },
    { id: 'python', label: 'Python', icon: Code2, color: 'text-yellow-600', description: 'Pandas, Scikit-Learn, PyTorch' },
    { id: 'stata', label: 'Stata', icon: Database, color: 'text-teal-600', description: 'Microeconometría, Panel Data' },
    { id: 'excel', label: 'Excel', icon: FileSpreadsheet, color: 'text-green-600', description: 'Macros, Power Query, Financial Modeling' },
];

const levels = [
    { value: 0, label: 'No lo uso', color: 'bg-slate-100 text-slate-400' },
    { value: 1, label: 'Básico', color: 'bg-indigo-100 text-indigo-600' },
    { value: 2, label: 'Intermedio', color: 'bg-indigo-500 text-white' },
    { value: 3, label: 'Avanzado', color: 'bg-indigo-900 text-white' },
];

export default function SoftwareSelector() {
    const { profile, updateProfile } = useCareer();

    const handleLevelChange = (softwareId, level) => {
        updateProfile('software', softwareId, {
            ...profile.software[softwareId],
            level: level
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Diagnóstico Técnico</h2>
                <p className="text-slate-600">Sé honesta con tu nivel de confianza. Esto calibrará tus oportunidades.</p>
            </div>

            <div className="space-y-6">
                {softwareOptions.map(option => {
                    const Icon = option.icon;
                    const currentLevel = profile.software[option.id]?.level || 0;

                    return (
                        <div key={option.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                                <div className={`p-3 rounded-lg bg-slate-50`}>
                                    <Icon className={`w-8 h-8 ${option.color}`} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-800">{option.label}</h3>
                                    <p className="text-sm text-slate-500">{option.description}</p>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-2 grid grid-cols-4 gap-2">
                                {levels.map((level) => (
                                    <button
                                        key={level.value}
                                        onClick={() => handleLevelChange(option.id, level.value)}
                                        className={`py-2 px-1 rounded-lg text-sm font-medium transition-all duration-200
                                    ${currentLevel === level.value
                                                ? `${level.color} ring-2 ring-offset-1 ring-indigo-200 shadow-sm scale-105`
                                                : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                            }
                                `}
                                    >
                                        {level.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
