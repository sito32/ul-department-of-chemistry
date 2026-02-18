import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Download, Search } from 'lucide-react';
import { SYLLABUS_DATA } from '../constants';

const Syllabus: React.FC = () => {
  const [openSemester, setOpenSemester] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSemester = (sem: number) => {
    setOpenSemester(openSemester === sem ? null : sem);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-4">Course Syllabus</h1>
        <p className="text-slate-400">
          Detailed curriculum breakdown by semester. Download specific module guides and reading lists.
        </p>
      </div>

      <div className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
        <input
          type="text"
          placeholder="Search modules (e.g., Organic Chemistry)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-academic-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-academic-accent"
        />
      </div>

      <div className="space-y-4">
        {SYLLABUS_DATA.map((semData) => {
          // Filter modules if search term exists
          const filteredModules = semData.modules.filter(m => 
            m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            m.code.toLowerCase().includes(searchTerm.toLowerCase())
          );

          // If searching and no match in this semester, hide it
          if (searchTerm && filteredModules.length === 0) return null;

          // Always expand if searching
          const isOpen = searchTerm ? true : openSemester === semData.semester;

          return (
            <div key={semData.semester} className="glass-panel rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSemester(semData.semester)}
                className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-academic-accent/20 flex items-center justify-center text-academic-accent font-bold">
                    {semData.semester}
                  </div>
                  <h2 className="text-lg font-semibold text-white">Semester {semData.semester}</h2>
                </div>
                {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </button>

              {isOpen && (
                <div className="p-6 border-t border-white/10 bg-black/20">
                  <div className="grid gap-4">
                    {(searchTerm ? filteredModules : semData.modules).map(module => (
                      <div key={module.id} className="bg-slate-800/50 rounded-lg p-4 border border-white/5 hover:border-academic-accent/30 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-academic-accent bg-academic-accent/10 px-2 py-0.5 rounded">{module.code}</span>
                            <h3 className="font-semibold text-slate-200">{module.name}</h3>
                          </div>
                          <p className="text-sm text-slate-400 mb-1">{module.description}</p>
                          <span className="text-xs text-slate-500">{module.credits} Credits</span>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded transition-colors whitespace-nowrap w-fit">
                          <Download size={14} /> Module Guide
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Syllabus;