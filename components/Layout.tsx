import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FlaskConical, Atom, BookOpen, User, Beaker, FileText, LayoutDashboard } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <FlaskConical size={18} /> },
    { name: 'Research', path: '/research', icon: <FileText size={18} /> },
    { name: 'Syllabus', path: '/syllabus', icon: <BookOpen size={18} /> },
    { name: 'Practicals', path: '/practicals', icon: <Beaker size={18} /> },
    { name: 'Tips & Career', path: '/tips', icon: <Atom size={18} /> },
    { name: 'Faculty', path: '/faculty', icon: <User size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-academic-900 text-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-academic-accent/20 p-2 rounded-lg">
                <Atom className="text-academic-accent h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Etheria<span className="text-academic-accent">Chem</span></span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                      isActive(item.path)
                        ? 'bg-academic-accent/20 text-academic-accent border border-academic-accent/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    isActive(item.path)
                      ? 'bg-academic-accent/20 text-academic-accent'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-academic-800 border-t border-white/10 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Atom className="text-academic-accent h-5 w-5" />
                <span className="font-bold text-lg">Department of Chemistry</span>
              </div>
              <p className="text-slate-400 text-sm">
                Advancing the frontiers of molecular science through research, education, and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/research" className="hover:text-academic-accent">Research Papers</Link></li>
                <li><Link to="/practicals" className="hover:text-academic-accent">Safety Protocols</Link></li>
                <li><Link to="/faculty" className="hover:text-academic-accent">Faculty Directory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-slate-400 text-sm">
                Science Block C, Etheria University<br />
                contact@etheriachem.edu<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-slate-500 text-sm flex justify-between items-center">
            <span>&copy; 2024 Etheria University. All rights reserved.</span>
            <Link to="/admin" className="flex items-center gap-1 hover:text-slate-300 transition-colors">
               <LayoutDashboard size={14} /> Admin Access
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;