import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';
import { FACULTY } from '../constants';

const Faculty: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-white mb-4">Meet Our Faculty</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          World-class educators and researchers dedicated to advancing the chemical sciences and mentoring the next generation of chemists.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACULTY.map((member) => (
          <div key={member.id} className="glass-panel rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group">
            <div className="aspect-w-1 aspect-h-1 w-full h-64 bg-slate-800 relative overflow-hidden">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academic-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold text-academic-accent bg-academic-900/80 px-2 py-1 rounded backdrop-blur-sm">
                  {member.role}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{member.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Specialization</p>
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap size={16} className="text-academic-accent" />
                  {member.specialization}
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail size={16} />
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Department History Teaser */}
      <div className="mt-24 glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-academic-accent/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">A Legacy of Discovery</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Founded in 1954, the Etheria University Department of Chemistry has been at the forefront of scientific innovation. 
              From the early days of structural determination to modern computational modelling, our department has evolved while maintaining a commitment to rigorous inquiry.
            </p>
            <button className="text-academic-accent font-medium hover:text-white transition-colors">
              Read Full History &rarr;
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-academic-800 p-6 rounded-lg text-center border border-white/5">
              <span className="text-4xl font-bold text-white block mb-1">50+</span>
              <span className="text-xs text-slate-400 uppercase">Active Patents</span>
            </div>
            <div className="bg-academic-800 p-6 rounded-lg text-center border border-white/5">
              <span className="text-4xl font-bold text-white block mb-1">200+</span>
              <span className="text-xs text-slate-400 uppercase">Published Papers/Year</span>
            </div>
            <div className="bg-academic-800 p-6 rounded-lg text-center border border-white/5">
              <span className="text-4xl font-bold text-white block mb-1">3</span>
              <span className="text-xs text-slate-400 uppercase">Nobel Laureates</span>
            </div>
            <div className="bg-academic-800 p-6 rounded-lg text-center border border-white/5">
              <span className="text-4xl font-bold text-white block mb-1">12</span>
              <span className="text-xs text-slate-400 uppercase">Research Labs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;