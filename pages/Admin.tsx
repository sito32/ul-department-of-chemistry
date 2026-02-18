import React, { useState } from 'react';
import { LayoutDashboard, Plus, Upload, Users, Settings } from 'lucide-react';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <LayoutDashboard className="text-academic-accent h-8 w-8" />
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="glass-panel p-4 rounded-xl h-fit">
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'papers', label: 'Research Papers', icon: Upload },
              { id: 'users', label: 'Faculty & Users', icon: Users },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id 
                    ? 'bg-academic-accent/20 text-academic-accent' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="glass-panel p-8 rounded-xl min-h-[500px]">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-academic-800 p-6 rounded-xl border border-white/10">
                    <h3 className="text-slate-400 text-sm font-medium uppercase">Total Papers</h3>
                    <p className="text-3xl font-bold text-white mt-2">124</p>
                  </div>
                  <div className="bg-academic-800 p-6 rounded-xl border border-white/10">
                    <h3 className="text-slate-400 text-sm font-medium uppercase">Active Students</h3>
                    <p className="text-3xl font-bold text-white mt-2">850</p>
                  </div>
                  <div className="bg-academic-800 p-6 rounded-xl border border-white/10">
                    <h3 className="text-slate-400 text-sm font-medium uppercase">System Status</h3>
                    <p className="text-3xl font-bold text-green-400 mt-2">Online</p>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                   <h3 className="text-lg font-bold text-white mb-2">Welcome, Administrator</h3>
                   <p className="text-slate-300 text-sm">You have full access to manage content. Use the sidebar to upload new research papers or manage faculty profiles.</p>
                </div>
              </div>
            )}

            {activeTab === 'papers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Manage Research Papers</h2>
                  <button className="bg-academic-accent hover:bg-academic-accentHover text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <Plus size={16} /> Upload New Paper
                  </button>
                </div>
                
                <div className="bg-academic-800/50 rounded-lg border border-white/5 overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-slate-300">
                      <tr>
                        <th className="p-4">Title</th>
                        <th className="p-4">Author</th>
                        <th className="p-4">Date</th>
                        <th className="p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-400">
                      <tr>
                        <td className="p-4 text-white">Catalytic Activation of C-H Bonds</td>
                        <td className="p-4">Dr. A. Smith</td>
                        <td className="p-4">2023-11-15</td>
                        <td className="p-4 text-academic-accent hover:underline cursor-pointer">Edit</td>
                      </tr>
                       <tr>
                        <td className="p-4 text-white">Synthesis of novel Alkaloids</td>
                        <td className="p-4">Dr. S. O-Neil</td>
                        <td className="p-4">2023-09-10</td>
                        <td className="p-4 text-academic-accent hover:underline cursor-pointer">Edit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {(activeTab === 'users' || activeTab === 'settings') && (
               <div className="flex flex-col items-center justify-center h-full text-slate-500 pt-20">
                 <Settings size={48} className="mb-4 opacity-50" />
                 <p>This module is currently under maintenance.</p>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;