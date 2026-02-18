import React, { useState } from 'react';
import { Search, Filter, Download, FileText } from 'lucide-react';
import { RESEARCH_PAPERS } from '../constants';
import { ResearchField } from '../types';

const Research: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedField, setSelectedField] = useState<string>('All');

  const filteredPapers = RESEARCH_PAPERS.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          paper.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = selectedField === 'All' || paper.field === selectedField;
    return matchesSearch && matchesField;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Department Research</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore the cutting-edge discoveries made by our faculty and students. 
          From synthesis to simulation, our work pushes the boundaries of chemical science.
        </p>
      </div>

      {/* Controls */}
      <div className="glass-panel p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search papers, authors, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-academic-900/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-academic-accent"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter size={18} className="text-slate-400 min-w-[18px]" />
          <select 
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
            className="bg-academic-900/50 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-academic-accent cursor-pointer"
          >
            <option value="All">All Fields</option>
            {Object.values(ResearchField).map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Papers Grid */}
      <div className="grid gap-6">
        {filteredPapers.length > 0 ? (
          filteredPapers.map(paper => (
            <div key={paper.id} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                   <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-academic-accent group-hover:bg-academic-accent/10 transition-colors">
                     <FileText size={32} />
                   </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-academic-accent transition-colors">{paper.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap">
                      {paper.field}
                    </span>
                  </div>
                  <p className="text-sm text-academic-accent mb-3">{paper.authors.join(', ')} • <span className="text-slate-500">{paper.date}</span></p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{paper.abstract}</p>
                  <button className="flex items-center gap-2 text-sm font-medium text-white bg-slate-700 hover:bg-academic-accent px-4 py-2 rounded-md transition-colors w-fit">
                    <Download size={16} /> Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-500">
            No papers found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Research;