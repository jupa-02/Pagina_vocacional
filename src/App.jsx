import { useState } from 'react';
import { useCareer } from './store/CareerContext';
import WelcomeScreen from './components/WelcomeScreen';
import Hero from './components/Hero';
import SoftwareSelector from './components/Diagnosis/SoftwareSelector';
import SkillsInterests from './components/Diagnosis/SkillsInterests';
import WorkPreferences from './components/Diagnosis/WorkPreferences';
import ProfileCard from './components/Results/ProfileCard';
import AgentsDashboard from './components/Results/AgentsDashboard';
import { careerProfiles } from './data/profiles';
import { ArrowLeft, ArrowRight, CheckCircle, Search } from 'lucide-react';

function App() {
  const [step, setStep] = useState(-1); // Start at -1 for Welcome Screen
  const { calculatePath, recommendedPath } = useCareer();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleFinish = () => {
    calculatePath();
    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case -1: return <WelcomeScreen onStart={nextStep} />;
      case 0: return <Hero onStart={nextStep} />;
      case 1: return <SoftwareSelector />;
      case 2: return <SkillsInterests />;
      case 3: return <WorkPreferences />;
      case 4:
        const profileData = recommendedPath ? careerProfiles[recommendedPath] : null;
        return (
          <div className="py-8 space-y-8">
            {profileData ? (
              <>
                <ProfileCard profileData={profileData} />
                <div className="text-center">
                  <button
                    onClick={nextStep}
                    className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl animate-bounce"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="w-6 h-6" />
                      Buscar Oportunidades Reales
                    </span>
                  </button>
                  <p className="mt-4 text-slate-500 text-sm">Nuestros agentes de IA escanearán el mercado por ti.</p>
                </div>
              </>
            ) : (
              <div className="text-center p-10">
                <p className="text-xl">Analizando tu perfil...</p>
              </div>
            )}
          </div>
        );
      case 5: return <AgentsDashboard />;
      default: return <Hero onStart={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <span className="font-bold text-xl tracking-tight text-slate-800">CareerHub</span>
        {step > 0 && step < 3 && (
          <div className="flex gap-2">
            <div className={`h - 2 w - 8 rounded - full ${step >= 1 ? 'bg-indigo-600' : 'bg-slate-200'} `}></div>
            <div className={`h - 2 w - 8 rounded - full ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'} `}></div>
          </div>
        )}
      </nav>

      <main className="container mx-auto p-4 max-w-4xl">
        {renderStep()}
      </main>

      {step > 0 && step < 5 && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-200 z-40 shadow-lg-up">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Atrás
            </button>

            {step === 3 ? (
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
              >
                Ver Resultados
                <CheckCircle className="w-5 h-5" />
              </button>
            ) : step === 4 ? (
              // Button is inside the renderStep for step 4 to clearly call to action
              <span className="text-sm text-slate-400">Continúa arriba para ver empleos</span>
            ) : (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg"
              >
                Siguiente
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
