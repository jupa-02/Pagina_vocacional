import { useCareer } from '../../store/CareerContext';
import { BrainCircuit, BookOpen, LineChart, Landmark, Briefcase, GraduationCap, Globe, Languages } from 'lucide-react';

const skillsOptions = [
    { id: 'causalInference', label: 'Inferencia Causal', icon: LineChart },
    { id: 'machineLearning', label: 'Machine Learning', icon: BrainCircuit },
    { id: 'writing', label: 'Redacción Económica', icon: BookOpen },
    { id: 'english', label: 'Inglés Profesional', icon: Languages },
];

const interestOptions = [
    { id: 'publicPolicy', label: 'Política Pública', icon: Landmark },
    { id: 'finance', label: 'Finanzas / Banca', icon: Briefcase },
    { id: 'tech', label: 'Sector Tech', icon: BrainCircuit },
    { id: 'research', label: 'Academia / Investigación', icon: GraduationCap },
    { id: 'international', label: 'Org. Multilaterales', icon: Globe },
];

const levels = [
    { value: 0, label: 'Bajo', color: 'bg-slate-100 text-slate-400' },
    { value: 1, label: 'Medio', color: 'bg-indigo-100 text-indigo-600' },
    { value: 2, label: 'Alto', color: 'bg-indigo-500 text-white' },
];

export default function SkillsInterests() {
    const { profile, updateProfile } = useCareer();

    const handleSkillLevel = (skillId, level) => {
        updateProfile('skills', skillId, level);
    };

    const toggleInterest = (interestId) => {
        updateProfile('interests', interestId, !profile.interests[interestId]);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-12">

            {/* Habilidades Técnicas */}
            <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <LineChart className="text-indigo-600" />
                    Habilidades Clave
                </h3>
                <p className="text-slate-500 mb-6 text-sm">¿Cómo calificarías tu nivel actual en estas áreas?</p>

                <div className="space-y-4">
                    {skillsOptions.map(option => (
                        <div key={option.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <option.icon className="w-5 h-5 text-indigo-500" />
                                <span className="font-semibold text-slate-700">{option.label}</span>
                            </div>
                            <div className="flex gap-2">
                                {levels.map((level) => (
                                    <button
                                        key={level.value}
                                        onClick={() => handleSkillLevel(option.id, level.value)}
                                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all
                                    ${profile.skills[option.id] === level.value
                                                ? `${level.color} ring-2 ring-indigo-100`
                                                : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                                            }
                                `}
                                    >
                                        {level.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Intereses Profesionales */}
            <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <BrainCircuit className="text-pink-600" />
                    Intereses
                </h3>
                <p className="text-slate-500 mb-6 text-sm">Selecciona las áreas que realmente te apasionan.</p>

                <div className="grid grid-cols-1 gap-3">
                    {interestOptions.map(option => {
                        const Icon = option.icon;
                        const isSelected = profile.interests[option.id];

                        return (
                            <button
                                key={option.id}
                                onClick={() => toggleInterest(option.id)}
                                className={`p-4 rounded-xl flex items-center gap-4 transition-all border
                            ${isSelected
                                        ? 'border-pink-500 bg-pink-50 shadow-md transform scale-[1.02]'
                                        : 'border-slate-200 hover:border-pink-300 hover:bg-slate-50'
                                    }
                        `}
                            >
                                <div className={`p-2 rounded-lg ${isSelected ? 'bg-pink-100 text-pink-600' : 'bg-slate-100 text-slate-400'}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <span className={`font-semibold text-lg ${isSelected ? 'text-pink-900' : 'text-slate-600'}`}>
                                    {option.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}
