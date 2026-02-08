import { useState } from 'react';
import { useCareer } from '../../store/CareerContext';
import { motion, AnimatePresence } from 'framer-motion';
import { diagnosisQuestions } from '../../data/diagnosisQuestions';

export default function HolisticDiagnosis({ onComplete }) {
    const { updateScore, calculatePath } = useCareer();
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const question = diagnosisQuestions[currentQIndex];

    const handleAnswer = (option) => {
        // Update the score for the specific dimension
        updateScore(option.value, option.weight);

        if (currentQIndex < diagnosisQuestions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
        } else {
            finishDiagnosis();
        }
    };

    const finishDiagnosis = async () => {
        setIsAnalyzing(true);
        // Simulate "AI Analysis" depth
        await new Promise(r => setTimeout(r, 2000));
        calculatePath(); // Calculate the best fit based on scores
        onComplete();
    };

    if (isAnalyzing) {
        return (
            <div className="flex flex-col items-center justify-center h-96 text-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-16 h-16 border-4 border-indigo-400 border-t-transparent rounded-full mb-6"
                />
                <h2 className="text-2xl font-serif text-white mb-2">Analizando tu perfil...</h2>
                <p className="text-slate-400">Cruzando tus respuestas con 5 arquetipos de carrera...</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-12 px-6 relative z-10">
            {/* Glass Container */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase block">
                            {question.category}
                        </span>
                        <span className="text-xs text-slate-400">
                            {currentQIndex + 1} / {diagnosisQuestions.length}
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight drop-shadow-md min-h-[80px]">
                        {question.text}
                    </h2>

                    <div className="w-full bg-white/10 h-1.5 mt-6 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-indigo-400 shadow-[0_0_10px_#818cf8]"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQIndex + 1) / diagnosisQuestions.length) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <AnimatePresence mode="wait">
                        {question.options.map((opt, idx) => (
                            <motion.button
                                key={`${question.id}-${idx}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => handleAnswer(opt)}
                                className="w-full text-left p-5 rounded-xl border border-white/10 hover:border-indigo-400/50 hover:bg-white/20 transition-all group bg-white/5 active:scale-[0.98] flex items-center justify-between"
                            >
                                <span className="text-lg text-indigo-50 group-hover:text-white font-medium transition-colors">
                                    {opt.label}
                                </span>
                            </motion.button>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
