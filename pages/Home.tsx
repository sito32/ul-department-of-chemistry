import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Beaker, FileText, Calendar, ChevronRight } from 'lucide-react';
import { ANNOUNCEMENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay with University vibe */}
        <div className="absolute inset-0 z-0">
           {/* Dark Navy Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-academic-900/95 via-academic-900/80 to-academic-900/40 z-10"></div>
           
           {/* Placeholder for University Image - In production this would be a real image URL */}
           <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Chemistry Lab Background" 
              className="absolute inset-0 w-full h-full object-cover"
           />
           
           {/* Abstract molecule pattern representation */}
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-academic-accent/10 to-transparent z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-academic-accent/50 rounded-full bg-academic-accent/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-academic-accent animate-pulse"></span>
              <span className="text-academic-accent text-sm font-semibold tracking-wide uppercase">Est. 2009 • Layyah, Pakistan</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Department of <br />
              <span className="text-academic-accent">Chemistry</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Welcome to the University of Layyah. Our department serves as a center of excellence, nurturing the next generation of chemists through rigorous academic training and innovative research.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/research" className="w-full sm:w-auto px-8 py-3 bg-academic-accent text-academic-900 font-bold rounded hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                Explore Research <ArrowRight size={18} />
              </Link>
              <Link to="/faculty" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/30 text-white font-semibold rounded hover:bg-white/10 hover:border-white transition-all duration-300">
                Meet Faculty
              </Link>
            </div>
          </div>
          
          {/* Hero Visual/Graphic */}
          <div className="hidden md:flex justify-center relative">
            <div className="absolute inset-0 bg-academic-accent/20 blur-[100px] rounded-full"></div>
            <div className="relative glass-panel p-8 rounded-2xl border-t-4 border-t-academic-accent max-w-md w-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-academic-accent rounded-full flex items-center justify-center">
                  <Beaker className="text-academic-900" size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-lg">Student Portal</h3>
                  <p className="text-xs text-slate-300">Quick access to resources</p>
                </div>
              </div>
              <div className="space-y-3">
                <Link to="/syllabus" className="block bg-academic-800/50 p-3 rounded border border-white/5 hover:border-academic-accent/50 transition-colors flex justify-between items-center group">
                  <span className="text-sm text-slate-200">Download Syllabus</span>
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-academic-accent" />
                </Link>
                <Link to="/practicals" className="block bg-academic-800/50 p-3 rounded border border-white/5 hover:border-academic-accent/50 transition-colors flex justify-between items-center group">
                  <span className="text-sm text-slate-200">Lab Safety Guides</span>
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-academic-accent" />
                </Link>
                <Link to="/tips" className="block bg-academic-800/50 p-3 rounded border border-white/5 hover:border-academic-accent/50 transition-colors flex justify-between items-center group">
                  <span className="text-sm text-slate-200">Exam Preparation Tips</span>
                  <ChevronRight size={16} className="text-slate-500 group-hover:text-academic-accent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/syllabus" className="bg-academic-800 p-8 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 group cursor-pointer border border-white/5 hover:border-academic-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar size={100} />
            </div>
            <div className="bg-academic-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-academic-accent shadow-lg">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Academic Syllabus</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Access detailed course modules, semester breakdowns, and downloadable curriculum guides for BS and MS programs.</p>
          </Link>

          <Link to="/practicals" className="bg-academic-800 p-8 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 group cursor-pointer border border-white/5 hover:border-academic-accent relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Beaker size={100} />
            </div>
            <div className="bg-academic-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-academic-accent shadow-lg">
              <Beaker size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Practical & Labs</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Step-by-step experimental procedures, chemical safety data sheets, and equipment handling manuals.</p>
          </Link>

          <Link to="/research" className="bg-academic-800 p-8 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 group cursor-pointer border border-white/5 hover:border-academic-accent relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={100} />
            </div>
            <div className="bg-academic-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-academic-accent shadow-lg">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Research Archive</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Explore the latest publications, thesis submissions, and ongoing research projects by our faculty and scholars.</p>
          </Link>
        </div>
      </section>

      {/* Announcements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-academic-accent/20 p-2 rounded-lg">
             <Bell className="text-academic-accent" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white">Department Notice Board</h2>
        </div>
        
        <div className="grid gap-4">
          {ANNOUNCEMENTS.map((item) => (
            <div key={item.id} className="bg-academic-800/40 p-6 rounded-lg flex flex-col md:flex-row md:items-center gap-6 border-l-4 border-l-academic-accent hover:bg-academic-800 transition-colors group">
              <div className="flex flex-col text-center md:text-left min-w-[100px] border-r border-white/10 md:pr-6">
                 <span className="text-3xl font-bold text-academic-accent">{new Date(item.date).getDate()}</span>
                 <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">{new Date(item.date).toLocaleString('default', { month: 'short' })} '{new Date(item.date).getFullYear().toString().substr(-2)}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-academic-accent transition-colors">{item.title}</h3>
                  {item.important && (
                    <span className="bg-red-500/20 text-red-400 text-[10px] uppercase font-bold px-2 py-1 rounded border border-red-500/30">Urgent</span>
                  )}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.content}</p>
              </div>
              <div>
                <button className="text-sm text-academic-accent hover:text-white transition-colors font-medium border border-academic-accent/30 px-4 py-2 rounded hover:bg-academic-accent/10">Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;