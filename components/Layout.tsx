import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FlaskConical, Atom, BookOpen, User, Beaker, FileText, LayoutDashboard, GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// Custom University Seal Logo Component matching the description:
// Navy/Gold color scheme, Flask center, DNA left, Benzene right.
const UniversityLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer Seal Background - Navy Blue */}
    <circle cx="100" cy="100" r="98" fill="#021024" stroke="#f59e0b" strokeWidth="4" />
    <circle cx="100" cy="100" r="90" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />

    {/* Central Flask - Navy with white outline */}
    <path d="M85 50 L115 50 L120 90 L145 140 C150 150 145 160 135 160 L65 160 C55 160 50 150 55 140 L80 90 L85 50Z" fill="#021024" stroke="#ffffff" strokeWidth="2"/>
    
    {/* Liquid in Flask - Navy Blue to match logo description */}
    <path d="M60 140 L140 140 L135 155 L65 155 Z" fill="#052659" />
    {/* Bubbles - Gold */}
    <circle cx="90" cy="130" r="4" fill="#f59e0b" />
    <circle cx="110" cy="110" r="3" fill="#f59e0b" />
    <circle cx="100" cy="100" r="5" fill="#f59e0b" />

    {/* DNA Helix (Left) - Gold and White */}
    <path d="M50 70 Q 70 90 50 110 T 50 150" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M50 70 Q 30 90 50 110 T 50 150" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
    {/* DNA rungs */}
    <line x1="38" y1="85" x2="62" y2="85" stroke="#f59e0b" strokeWidth="2" />
    <line x1="38" y1="105" x2="62" y2="105" stroke="#f59e0b" strokeWidth="2" />
    <line x1="38" y1="125" x2="62" y2="125" stroke="#f59e0b" strokeWidth="2" />

    {/* Benzene/Hexagon Structure (Right) - Gold */}
    <path d="M150 80 L175 95 L175 125 L150 140 L125 125 L125 95 Z" fill="none" stroke="#f59e0b" strokeWidth="3" />
    {/* Inner Benzene Ring / Chemical Notation */}
    <path d="M150 90 L165 100 L165 120 L150 130 L135 120 L135 100 Z" fill="#f59e0b" opacity="0.2" />
    <text x="142" y="120" fontFamily="serif" fontSize="24" fill="#ffffff" fontWeight="bold">C</text>
    <text x="156" y="125" fontFamily="serif" fontSize="14" fill="#ffffff" fontWeight="bold">6</text>

    {/* Decorative Atom Icons for 'Science' feel */}
    <circle cx="30" cy="150" r="8" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
    <circle cx="30" cy="150" r="2" fill="#ffffff" />
    <circle cx="170" cy="150" r="8" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
    <circle cx="170" cy="150" r="2" fill="#ffffff" />
  </svg>
);

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
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                 <div className="absolute inset-0 bg-academic-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <UniversityLogo className="h-16 w-16 drop-shadow-lg relative z-10" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-xl leading-none text-white tracking-wide mb-1 group-hover:text-academic-accent transition-colors">UNIVERSITY OF LAYYAH</span>
                <span className="text-xs text-academic-accent font-medium tracking-[0.2em] uppercase border-t border-academic-accent/30 pt-1">Department of Chemistry</span>
              </div>
            </Link>
            
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
                className="bg-academic-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-academic-700 focus:outline-none"
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
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-academic-800 border-t border-academic-accent/20 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <UniversityLogo className="h-10 w-10" />
                <span className="font-serif font-bold text-xl text-white">University of Layyah</span>
              </div>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                The Department of Chemistry at the University of Layyah is committed to excellence in chemical education and research, fostering innovation for the betterment of society.
              </p>
            </div>
            <div>
              <h3 className="text-white font-serif font-semibold mb-4 text-lg border-b-2 border-academic-accent inline-block pb-1">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/research" className="hover:text-academic-accent transition-colors">Research Papers</Link></li>
                <li><Link to="/syllabus" className="hover:text-academic-accent transition-colors">Academic Syllabus</Link></li>
                <li><Link to="/practicals" className="hover:text-academic-accent transition-colors">Safety Protocols</Link></li>
                <li><Link to="/faculty" className="hover:text-academic-accent transition-colors">Faculty Directory</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-serif font-semibold mb-4 text-lg border-b-2 border-academic-accent inline-block pb-1">Contact Us</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Department of Chemistry<br />
                University of Layyah, Layyah Campus<br />
                Punjab, Pakistan<br />
                <br />
                <span className="text-academic-accent">E:</span> info@ul.edu.pk<br />
                <span className="text-academic-accent">P:</span> +92 606 123456
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} University of Layyah. All rights reserved.</span>
            <Link to="/admin" className="flex items-center gap-1 hover:text-academic-accent transition-colors">
               <LayoutDashboard size={14} /> Admin Portal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;