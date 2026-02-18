import React from 'react';
import { Mail, GraduationCap } from 'lucide-react';
import { FACULTY } from '../constants';

const Faculty: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Distinguished Faculty</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Meet the educators and researchers dedicated to academic excellence at the University of Layyah.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACULTY.map((member) => (
          <div key={member.id} className="bg-academic-800 rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group border border-white/5 hover:border-academic-accent/50 shadow-lg">
            <div className="aspect-w-1 aspect-h-1 w-full h-72 bg-academic-900 relative overflow-hidden">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academic-800 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold text-academic-900 bg-academic-accent px-2 py-1 rounded shadow-md">
                  {member.role}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-2">{member.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Specialization</p>
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap size={16} className="text-academic-accent" />
                  {member.specialization}
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-academic-accent transition-colors">
                  <Mail size={16} />
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Department History Teaser */}
      <div className="mt-24 bg-academic-800 border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden">
        {/* Decorative Gold Circles */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-academic-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-blue-900/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">About the Department</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Established as a cornerstone of the University of Layyah, the Department of Chemistry has grown into a premier center for scientific learning in the region.
              <br/><br/>
              We are dedicated to providing high-quality education and fostering a research culture that addresses local and global challenges. Our curriculum matches international standards, preparing students for careers in industry, academia, and research.
            </p>
            <button className="text-academic-accent font-bold hover:text-white transition-colors flex items-center gap-2">
              Read Full History <span className="text-xl">&rarr;</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-academic-900/50 p-6 rounded-lg text-center border border-white/5 hover:border-academic-accent/30 transition-colors">
              <span className="text-4xl font-bold text-white block mb-1">15+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">PhD Faculty</span>
            </div>
            <div className="bg-academic-900/50 p-6 rounded-lg text-center border border-white/5 hover:border-academic-accent/30 transition-colors">
              <span className="text-4xl font-bold text-white block mb-1">50+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Publications/Year</span>
            </div>
            <div className="bg-academic-900/50 p-6 rounded-lg text-center border border-white/5 hover:border-academic-accent/30 transition-colors">
              <span className="text-4xl font-bold text-white block mb-1">4</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Specialized Labs</span>
            </div>
            <div className="bg-academic-900/50 p-6 rounded-lg text-center border border-white/5 hover:border-academic-accent/30 transition-colors">
              <span className="text-4xl font-bold text-white block mb-1">800+</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Alumni</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;