import { useState } from 'react';
import { useCareer } from '../../store/CareerContext';
import { ArrowRight, Brain, Heart, Briefcase, BookOpen, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    // DIMENSIÓN SER (Valores y Propósito)
    {
        id: 'purpose',
        dimension: 'SER',
        type: 'choice',
        question: "¿Qué te mueve realmente?",
        options: [
            { id: 'change_world', label: "Cambiar realidades sociales (Impacto)", value: { interests: { publicPolicy: true, research: true } } },
            { id: 'build_tech', label: "Construir soluciones tecnológicas (Innovación)", value: { interests: { tech: true } } },
            { id: 'maximize_income', label: "Maximizar eficiencia y retorno (Dinero/Estrategia)", value: { interests: { finance: true } } },
        ]
    },
    {
        id: 'environment',
        dimension: 'SER',
        type: 'choice',
        question: "¿En qué ambiente fluyes mejor?",
        options: [
            { id: 'fast_paced', label: "Caótico, rápido, sin manuales (Startup)", value: { preferences: { sector: ['startup'] } } },
            { id: 'structured', label: "Estructurado, jerárquico, gran escala (Corporativo/Gobierno)", value: { preferences: { sector: ['corporate', 'public'] } } },
            { id: 'intellectual', label: "Reflexivo, profundo, largo plazo (Academia)", value: { preferences: { sector: ['academia'] } } },
        ]
    },
    // DIMENSIÓN HACER (Situacional / Skills implícitos)
    {
        id: 'data_problem',
        dimension: 'HACER',
        type: 'scenario',
        question: "Te entregan una base de datos de 1 millón de filas desordenada. ¿Qué haces?",
        options: [
            { id: 'excel', label: "Abro Excel y trato de filtrar. Si no carga, pido ayuda.", points: { software: { excel: 2 } } },
            { id: 'python_pandas', label: "Script en Python/Pandas para limpiar y EDA automático.", points: { software: { python: 3 }, skills: { machineLearning: 1 } } },
            { id: 'stata', label: "La cargo en Stata y corro un do-file de limpieza.", points: { software: { stata: 3 } } },
        ]
    },
    {
        id: 'analysis_preferences',
        dimension: 'HACER',
        type: 'choice',
        question: "¿Qué tipo de entregable disfrutas más producir?",
        options: [
            { id: 'dashboard', label: "Un Dashboard interactivo en tiempo real", value: { software: { r: 1 }, interests: { tech: true } } },
            { id: 'paper', label: "Un documento analítico riguroso (Paper/Policy Brief)", value: { skills: { writing: 3 }, interests: { research: true } } },
            { id: 'deck', label: "Una presentación ejecutiva para toma de decisiones", value: { skills: { writing: 2 }, interests: { finance: true } } },
        ]
    },
    // DIMENSIÓN SABER (Académico)
    {
        id: 'learning_style',
        dimension: 'SABER',
        type: 'choice',
        question: "Si decidieras estudiar hoy, ¿qué buscarías?",
        options: [
            { id: 'theory', label: "Entender los fundamentos matemáticos profundos", value: { interests: { research: true } } },
            { id: 'tools', label: "Herramientas prácticas aplicables ya (Cajas de herramientas)", value: { interests: { tech: true } } },
            { id: 'network', label: "Conexiones y casos de negocio", value: { interests: { finance: true, publicPolicy: true } } },
        ]
    }
];

export default function HolisticDiagnosis({ onComplete }) {
    const { updateProfile } = useCareer();
    const [currentQ, setCurrentQ] = useState(0);

    const handleAnswer = (option) => {
        // Apply logic to update profile based on answer
        if (option.value) {
            // Merge values into profile
            Object.keys(option.value).forEach(section => {
                Object.keys(option.value[section]).forEach(key => {
                    updateProfile(section, key, option.value[section][key]);
                });
            });
        }
        if (option.points) {
            // Add points/levels logic if needed, for now simlified update
            Object.keys(option.points).forEach(section => {
                Object.keys(option.points[section]).forEach(key => {
                    // For simplicity, just setting the level provided in the answer
                    updateProfile(section, key, { level: option.points[section][key] });
                });
            });
        }

        if (currentQ < questions.length - 1) {
            setCurrentQ(c => c + 1);
        } else {
            onComplete();
        }
    };

    const question = questions[currentQ];

    return (
        <div className="max-w-2xl mx-auto py-12 px-6">
            <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase mb-2 block">
                    Dimensión: {question.dimension}
                </span>
                <h2 className="text-3xl font-serif text-slate-900 leading-tight">
                    {question.question}
                </h2>
                <div className="w-full bg-slate-100 h-1 mt-6 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-indigo-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <div className="space-y-4">
                <AnimatePresence mode="wait">
                    {question.options.map((opt, idx) => (
                        <motion.button
                            key={opt.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handleAnswer(opt)}
                            className="w-full text-left p-6 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-slate-50 transition-all group group-hover:shadow-md bg-white"
                        >
                            <span className="text-lg text-slate-700 group-hover:text-slate-900 font-medium">
                                {opt.label}
                            </span>
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
