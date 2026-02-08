import { useState } from 'react';
import { useCareer } from './store/CareerContext';
import WelcomeScreen from './components/WelcomeScreen';
import Hero from './components/Hero';
import HolisticDiagnosis from './components/Diagnosis/HolisticDiagnosis';
import ProfileCard from './components/Results/ProfileCard';
import AgentsDashboard from './components/Results/AgentsDashboard';
import ButterflyCompanion from './components/ButterflyCompanion';
import { careerProfiles } from './data/profiles';
import { ArrowLeft, ArrowRight, CheckCircle, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [step, setStep] = useState(0); // Start at 0 (Hero) immediately, butterfly handles intro anim
  const { calculatePath, recommendedPath } = useCareer();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleFinish = () => {
    calculatePath();
    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case 0: return <Hero onStart={nextStep} />;
      case 1: return <HolisticDiagnosis onComplete={handleFinish} />;
      // Removed old steps
      case 2:
        const profileData = recommendedPath ? careerProfiles[recommendedPath] : null;
        return (
          <div className="py-8 space-y-8">
            {profileData ? (
              <>
                <ProfileCard profileData={profileData} />
                <div className="text-center">
                  <button
                    onClick={nextStep}
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] animate-bounce"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="w-6 h-6" />
                      Buscar Oportunidades Reales
                    </span>
                  </button>
                  <p className="mt-4 text-white/70 text-sm">Nuestros agentes de IA escanearán el mercado por ti.</p>
                </div>
              </>
            ) : (
              <div className="text-center p-10">
                <p className="text-xl text-white">Analizando tu perfil...</p>
              </div>
            )}
          </div>
        );
      case 3: return <AgentsDashboard />;
      default: return <Hero onStart={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden relative text-slate-900 bg-slate-900 selection:bg-indigo-500 selection:text-white">

      {/* GLOBAL ANIMATED BACKGROUND (Aurora) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"></div>
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-pink-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* PERSISTENT BUTTERFLY COMPANION */}
      <ButterflyCompanion step={step} />

      <nav className="relative z-40 p-6 flex justify-between items-center max-w-6xl mx-auto">
        <span className="font-serif font-bold text-2xl tracking-tight text-white drop-shadow-md">
          Caro <span className="text-indigo-400">✨</span>
        </span>
        {step > 0 && step < 3 && (
          <div className="flex gap-2">
            <div className={`h-1.5 w-8 rounded-full transition-all duration-500 ${step >= 1 ? 'bg-indigo-400 shadow-[0_0_10px_#818cf8]' : 'bg-white/10'}`}></div>
            <div className={`h-1.5 w-8 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-indigo-400 shadow-[0_0_10px_#818cf8]' : 'bg-white/10'}`}></div>
          </div>
        )}
      </nav>

      <main className="relative z-30 container mx-auto p-4 max-w-4xl min-h-[80vh] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation bar logic simplified for the new flow */}
      {step > 0 && step < 3 && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 z-40 shadow-2xl">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-slate-400 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>

            {/* Steps 1 (Diagnosis) handles its own 'Next' internally until finish */}
            {/* But we can keep a manual override or just let the component handle it */}
            {step === 2 && (
              // Step 2 is Results, so next is Agents
              <span className="text-sm text-slate-400">Continúa arriba para ver empleos</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
