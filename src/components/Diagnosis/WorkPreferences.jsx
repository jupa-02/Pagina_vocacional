import { useCareer } from '../../store/CareerContext';
import { Briefcase, DollarSign, Heart, Home, Building2, Landmark, Rocket, GraduationCap } from 'lucide-react';

const environmentOptions = [
    { id: 'startup', label: 'Startup / Tech', icon: Rocket, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'corporate', label: 'Corporativo', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'public', label: 'Sector Público', icon: Landmark, color: 'text-teal-600', bg: 'bg-teal-50' },
    { id: 'academia', label: 'Academia / OIG', icon: GraduationCap, color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function WorkPreferences() {
    const { profile, updateProfile } = useCareer();

    const handleSliderChange = (key, value) => {
        updateProfile('preferences', key, parseInt(value));
    };

    const toggleSector = (sectorId) => {
        const currentSectors = profile.preferences.sector || [];
        const newSectors = currentSectors.includes(sectorId)
            ? currentSectors.filter(s => s !== sectorId)
            : [...currentSectors, sectorId];

        updateProfile('preferences', 'sector', newSectors);
    };

    const setRemote = (value) => {
        updateProfile('preferences', 'remote', value);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-12">

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Preferencias de Trabajo</h2>
                <p className="text-slate-600">Para encontrar tu "Match" perfecto, necesitamos saber qué valoras más.</p>
            </div>

            {/* Dilemas (Sliders) */}
            <div className="space-y-8">

                {/* Salary vs Impact */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between mb-4 font-semibold text-slate-700">
                        <span className="flex items-center gap-2 text-pink-600"><Heart size={18} /> Impacto Social</span>
                        <span className="flex items-center gap-2 text-green-600">Salario Alto <DollarSign size={18} /></span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={profile.preferences.salary}
                        onChange={(e) => handleSliderChange('salary', e.target.value)}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="text-center mt-2 text-sm text-slate-500">
                        {profile.preferences.salary < 30 ? 'Priorizo el propósito sobre el dinero' :
                            profile.preferences.salary > 70 ? 'Busco maximizar mis ingresos' :
                                'Busco un equilibrio entre ambos'}
                    </div>
                </div>

                {/* Work Life Balance */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between mb-4 font-semibold text-slate-700">
                        <span className="flex items-center gap-2 text-orange-600"><Home size={18} /> Balance Vida/Trabajo</span>
                        <span className="flex items-center gap-2 text-slate-900">Crecimiento Rápido / Grind <Rocket size={18} /></span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={profile.preferences.workLifeBalance}
                        onChange={(e) => handleSliderChange('workLifeBalance', e.target.value)}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="text-center mt-2 text-sm text-slate-500">
                        {profile.preferences.workLifeBalance < 30 ? 'Mi tiempo libre es sagrado' :
                            profile.preferences.workLifeBalance > 70 ? 'Estoy dispuesto a trabajar duro por crecer' :
                                'Busco un ritmo sostenible'}
                    </div>
                </div>

            </div>

            {/* Tipo de Entorno */}
            <div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">¿En qué entornos te ves feliz?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {environmentOptions.map(env => (
                        <button
                            key={env.id}
                            onClick={() => toggleSector(env.id)}
                            className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-3 text-center
                        ${(profile.preferences.sector || []).includes(env.id)
                                    ? `border-${env.color.split('-')[1]}-500 ${env.bg} shadow-md`
                                    : 'border-slate-200 hover:bg-slate-50'
                                }
                    `}
                        >
                            <env.icon className={`w-8 h-8 ${env.color}`} />
                            <span className="font-semibold text-sm text-slate-700">{env.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Remoto vs Presencial */}
            <div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Modalidad</h3>
                <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
                    {['remote', 'hybrid', 'onsite'].map(mode => (
                        <button
                            key={mode}
                            onClick={() => setRemote(mode)}
                            className={`flex-1 py-2 rounded-md text-sm font-semibold transition-all capitalize
                        ${profile.preferences.remote === mode
                                    ? 'bg-white text-indigo-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700'
                                }
                    `}
                        >
                            {mode === 'onsite' ? 'Presencial' : mode === 'hybrid' ? 'Híbrido' : 'Remoto'}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}
