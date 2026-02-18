import React, { useState } from 'react';
import { ShieldAlert, Clock, Beaker, ChevronRight } from 'lucide-react';
import { PRACTICALS } from '../constants';
import { PracticalProcedure } from '../types';

const Practicals: React.FC = () => {
  const [selectedPractical, setSelectedPractical] = useState<PracticalProcedure | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
      {/* Sidebar List */}
      <div className="lg:w-1/3 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Lab Procedures</h1>
          <p className="text-slate-400 text-sm">Select an experiment to view detailed instructions.</p>
        </div>
        
        <div className="space-y-3">
          {PRACTICALS.map((practical) => (
            <button
              key={practical.id}
              onClick={() => setSelectedPractical(practical)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${
                selectedPractical?.id === practical.id
                  ? 'bg-academic-accent/20 border-academic-accent'
                  : 'bg-academic-800/50 border-white/10 hover:bg-academic-800 hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className={`font-semibold ${selectedPractical?.id === practical.id ? 'text-academic-accent' : 'text-slate-200'}`}>
                  {practical.title}
                </h3>
                <ChevronRight size={16} className={`text-slate-500 transition-transform ${selectedPractical?.id === practical.id ? 'rotate-90 text-academic-accent' : ''}`} />
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Clock size={12} /> {practical.duration}</span>
                <span className={`px-2 py-0.5 rounded-full ${
                  practical.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
                  practical.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {practical.difficulty}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-red-900/20 border border-red-500/20 mt-8">
          <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
            <ShieldAlert size={20} />
            <h4>Safety First</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Always wear proper PPE (Coat, Goggles, Gloves). 
            Locate the nearest eyewash station and fire extinguisher before starting any experiment.
            In case of emergency, contact the lab supervisor immediately.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:w-2/3">
        {selectedPractical ? (
          <div className="glass-panel p-8 rounded-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">{selectedPractical.title}</h2>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Safety Level</span>
                <span className={`font-bold px-3 py-1 rounded text-sm ${
                   selectedPractical.safetyLevel === 'High' ? 'bg-red-500 text-white' : 
                   selectedPractical.safetyLevel === 'Medium' ? 'bg-orange-500 text-white' : 
                   'bg-green-500 text-white'
                }`}>
                  {selectedPractical.safetyLevel} Risk
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Beaker size={18} className="text-academic-accent" /> Description
              </h3>
              <p className="text-slate-300 leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5">
                {selectedPractical.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Chemicals Required</h3>
                <ul className="space-y-2">
                  {selectedPractical.chemicals.map((chem, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-academic-accent rounded-full"></div>
                      {chem}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Equipment</h3>
                <ul className="space-y-2">
                   <li className="flex items-center gap-2 text-slate-300 text-sm"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>Standard Glassware Kit</li>
                   <li className="flex items-center gap-2 text-slate-300 text-sm"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>Heating Mantle</li>
                   <li className="flex items-center gap-2 text-slate-300 text-sm"><div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>Digital Balance</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Procedure Steps</h3>
              <div className="space-y-4">
                 {[1, 2, 3, 4].map(step => (
                   <div key={step} className="flex gap-4">
                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-academic-800 border border-white/10 flex items-center justify-center font-mono text-academic-accent font-bold">
                       {step}
                     </div>
                     <p className="text-slate-300 text-sm mt-1">
                       {step === 1 ? "Prepare the apparatus and ensure all glassware is clean and dry." : 
                        step === 2 ? "Measure the reagents precisely using the digital balance." :
                        step === 3 ? "Combine reactants in the flask and set up the reflux condenser." :
                        "Allow the mixture to cool and filter the precipitate."}
                     </p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full min-h-[400px] glass-panel rounded-xl flex flex-col items-center justify-center text-slate-500 p-8 text-center border-dashed border-2 border-white/10">
            <Beaker size={64} className="mb-4 opacity-50" />
            <h3 className="text-xl font-medium text-white mb-2">Ready to Experiment?</h3>
            <p>Select a procedure from the list to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practicals;