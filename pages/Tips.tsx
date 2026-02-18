import React from 'react';
import { Lightbulb, Briefcase, BookOpen, AlertTriangle } from 'lucide-react';

const Tips: React.FC = () => {
  const tips = [
    {
      title: "Master the Basics",
      icon: <BookOpen className="text-blue-400" size={24} />,
      content: "Don't rush to complex reactions. Spend time perfecting weighing, pipetting, and titration. Precision in the basics leads to accuracy in advanced research."
    },
    {
      title: "Lab Safety is Non-Negotiable",
      icon: <AlertTriangle className="text-red-400" size={24} />,
      content: "Never work alone in the lab. Always check MSDS (Material Safety Data Sheets) before handling new chemicals. If you are unsure, ASK."
    },
    {
      title: "Document Everything",
      icon: <Lightbulb className="text-yellow-400" size={24} />,
      content: "Your lab notebook is a legal document. Record observations immediately, not at the end of the day. Include mistakes—they are data too."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">New Chemist's Guide</h1>

      {/* Tips Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {tips.map((tip, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-xl border-t-4 border-t-academic-accent/50 hover:bg-white/5 transition-colors">
            <div className="bg-academic-900 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-white/10">
              {tip.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{tip.content}</p>
          </div>
        ))}
      </div>

      {/* Career Section */}
      <div className="glass-panel rounded-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-academic-accent h-8 w-8" />
          <h2 className="text-2xl font-bold text-white">Career Pathways</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Academic Route</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-col items-center hidden md:flex">
                  <div className="w-0.5 h-full bg-slate-700"></div>
                </div>
                <div className="pb-4">
                  <h4 className="text-academic-accent font-medium">PhD & Postdoc</h4>
                  <p className="text-sm text-slate-400 mt-1">Focus on publishing high-impact papers and building a specialized research niche.</p>
                </div>
              </li>
              <li className="flex gap-4">
                 <div className="flex-col items-center hidden md:flex">
                  <div className="w-0.5 h-full bg-slate-700"></div>
                </div>
                <div>
                  <h4 className="text-academic-accent font-medium">Lectureship</h4>
                  <p className="text-sm text-slate-400 mt-1">Balancing teaching responsibilities with grant writing and lab management.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Industrial Route</h3>
            <div className="space-y-4">
              <div className="bg-academic-800/50 p-4 rounded-lg border border-white/5">
                <h4 className="font-medium text-slate-200">R&D Scientist</h4>
                <p className="text-xs text-slate-400 mt-1">Product development in pharma, materials, or energy sectors.</p>
              </div>
              <div className="bg-academic-800/50 p-4 rounded-lg border border-white/5">
                <h4 className="font-medium text-slate-200">Quality Control (QC)</h4>
                <p className="text-xs text-slate-400 mt-1">Ensuring product standards and regulatory compliance.</p>
              </div>
              <div className="bg-academic-800/50 p-4 rounded-lg border border-white/5">
                <h4 className="font-medium text-slate-200">Patent Law</h4>
                <p className="text-xs text-slate-400 mt-1">Combining legal expertise with scientific knowledge to protect intellectual property.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;