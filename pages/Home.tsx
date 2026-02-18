import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, Beaker, FileText, Calendar } from 'lucide-react';
import { ANNOUNCEMENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
            {/* Using a subtle dark gradient and a placeholder for 'chemistry' pattern via CSS radial gradients */}
           <div className="absolute inset-0 bg-gradient-to-b from-academic-900 via-transparent to-academic-900 z-10"></div>
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-academic-accent via-academic-900 to-black"></div>
           {/* Abstract molecule pattern representation */}
           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-academic-accent/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="inline-block px-3 py-1 mb-6 border border-academic-accent/30 rounded-full bg-academic-accent/10 backdrop-blur-md">
            <span className="text-academic-accent text-sm font-medium tracking-wide uppercase">Est. 1954 • Excellence in Science</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Unraveling the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-academic-accent to-blue-500">Molecular World</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to the Department of Chemistry. A hub for innovation, research, and academic excellence dedicated to solving tomorrow's challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/research" className="w-full sm:w-auto px-8 py-3 bg-academic-accent text-white font-semibold rounded-lg hover:bg-academic-accentHover transition-colors flex items-center justify-center gap-2">
              Explore Research <ArrowRight size={18} />
            </Link>
            <Link to="/faculty" className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Meet Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/syllabus" className="glass-panel p-8 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 group cursor-pointer border-t-4 border-t-transparent hover:border-t-academic-accent">
            <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-academic-accent/20 transition-colors">
              <Calendar className="text-blue-400 group-hover:text-academic-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Academic Syllabus</h3>
            <p className="text-slate-400 text-sm">Access course modules, semester plans, and downloadable curriculum guides.</p>
          </Link>

          <Link to="/practicals" className="glass-panel p-8 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 group cursor-pointer border-t-4 border-t-transparent hover:border-t-academic-accent">
            <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-academic-accent/20 transition-colors">
              <Beaker className="text-purple-400 group-hover:text-academic-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lab Procedures</h3>
            <p className="text-slate-400 text-sm">Step-by-step experimental guides, safety data sheets, and equipment lists.</p>
          </Link>

          <Link to="/research" className="glass-panel p-8 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 group cursor-pointer border-t-4 border-t-transparent hover:border-t-academic-accent">
            <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-academic-accent/20 transition-colors">
              <FileText className="text-emerald-400 group-hover:text-academic-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Research Archive</h3>
            <p className="text-slate-400 text-sm">Browse published papers, ongoing projects, and thesis submissions.</p>
          </Link>
        </div>
      </section>

      {/* Announcements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Bell className="text-academic-accent" />
          <h2 className="text-2xl font-bold text-white">Latest Announcements</h2>
        </div>
        
        <div className="grid gap-4">
          {ANNOUNCEMENTS.map((item) => (
            <div key={item.id} className="glass-panel p-6 rounded-lg flex flex-col md:flex-row md:items-center gap-6 border-l-4 border-l-academic-accent hover:bg-white/5 transition-colors">
              <div className="flex flex-col text-center md:text-left min-w-[100px]">
                 <span className="text-2xl font-bold text-white">{new Date(item.date).getDate()}</span>
                 <span className="text-sm text-slate-400 uppercase tracking-wider">{new Date(item.date).toLocaleString('default', { month: 'short' })}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  {item.important && (
                    <span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded-full border border-red-500/30">Important</span>
                  )}
                </div>
                <p className="text-slate-300 text-sm">{item.content}</p>
              </div>
              <div>
                <button className="text-sm text-academic-accent hover:text-white transition-colors font-medium">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;