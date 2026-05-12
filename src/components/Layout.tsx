import React from 'react';
import { Network, GitBranch, Scale, FileText, BarChart3, Menu, X, LayoutDashboard } from 'lucide-react';
import { View } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: View;
  onViewChange: (view: View) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="atmosphere" />
      
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-glass-surface backdrop-blur-xl border-b border-outline-variant flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-3">
          <div className="p-1 px-2 border-2 border-primary-container rounded">
            <BarChart3 className="text-primary-container" size={20} />
          </div>
          <h1 className="text-2xl font-serif italic tracking-tight text-white">Data Command Center</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {[View.Command, View.Verticals, View.Balance, View.Log].map((v) => (
            <button
              key={v}
              onClick={() => onViewChange(v)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-lg transition-all ${
                activeView === v 
                  ? 'text-primary-container font-bold bg-white/5 border border-outline' 
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
              }`}
            >
              {v}
            </button>
          ))}
          <div className="ml-4 h-8 w-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-z7onF4Ej6oNbX-3pVXSGeofrDLsh2DFe0ZwbD_hef1Y4vur8rvltmXZUosOwqVWoZknte0JG3KTcmX4RGw68ol-H4EPqqDQ_LjMOvWIwGqIAYBOJttPBkIfR3CDnmIyuscdlQZzBD0OMv-3wc3Pr6_0w_iAq6PpJG4-ukNPDepj6zQvZQcWdGGhigA96cEGLnxP-gP2dBx1J6bEeWa-Ur1ZMQQsERPqma5kfsHSUgMielf7KXZzMYfNCSG0HqKUqcYdqKKYX3SI" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </nav>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </header>

      <div className="flex flex-1 pt-16">
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
          {children}
        </main>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <footer className="md:hidden fixed bottom-0 w-full z-50 rounded-t-3xl bg-glass-surface backdrop-blur-2xl border-t border-outline flex justify-around items-center h-20 pb-4 px-4 shadow-2xl">
        <button 
          onClick={() => onViewChange(View.Command)}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === View.Command ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <LayoutDashboard size={20} className={activeView === View.Command ? 'fill-current opacity-20' : ''} />
          <span className="font-mono text-[10px]">Command</span>
        </button>
        <button 
          onClick={() => onViewChange(View.Verticals)}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === View.Verticals ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <Network size={20} />
          <span className="font-mono text-[10px]">Verticals</span>
        </button>
        <button 
          onClick={() => onViewChange(View.Balance)}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === View.Balance ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <Scale size={20} />
          <span className="font-mono text-[10px]">Balance</span>
        </button>
        <button 
          onClick={() => onViewChange(View.Log)}
          className={`flex flex-col items-center gap-1 transition-all ${activeView === View.Log ? 'text-primary-container' : 'text-on-surface-variant'}`}
        >
          <FileText size={20} />
          <span className="font-mono text-[10px]">Log</span>
        </button>
      </footer>
    </div>
  );
};

export default Layout;
