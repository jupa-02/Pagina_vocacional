import { Share2, Download, BookOpen, User } from 'lucide-react';

export default function ProfileCard({ profileData }) {
    if (!profileData) return null;

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-slate-100">
            <div className="bg-indigo-600 p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-2">Tu Perfil de Mercado</div>
                    <h2 className="text-4xl font-bold mb-4">{profileData.title}</h2>
                    <p className="text-indigo-100 text-lg max-w-2xl">{profileData.description}</p>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <User size={200} />
                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-8">
                    {profileData.tags.map((tag, i) => (
                        <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                    Tu Hoja de Ruta Personalizada
                </h3>

                <div className="space-y-6">
                    {profileData.roadmap.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm mt-1 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 text-lg">{item.step}</h4>
                                <p className="text-slate-600">{item.item}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100 flex gap-4">
                    <button className="flex-1 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Descargar Roadmap
                    </button>
                    <button className="px-6 py-3 rounded-lg font-semibold text-slate-600 hover:bg-slate-50 transition-colors border border-slate-200 flex items-center gap-2">
                        <Share2 className="w-5 h-5" />
                        Compartir
                    </button>
                </div>
            </div>
        </div>
    );
}
