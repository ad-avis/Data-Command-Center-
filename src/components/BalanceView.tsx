import React from 'react';
import { RefreshCw, LayoutList, Download, Filter, Zap, LayoutDashboard, ChevronRight } from 'lucide-react';
import { TRANSITION_LOGS } from '../constants';
import { motion } from 'motion/react';

const BalanceView: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-on-surface-variant opacity-60">DASHBOARD</span>
            <ChevronRight size={12} className="text-outline" />
            <span className="font-mono text-xs text-on-surface-variant opacity-60">MIGRATION</span>
            <ChevronRight size={12} className="text-outline" />
            <span className="font-mono text-xs text-primary uppercase">Engine_Flight_v4.2.0</span>
          </nav>
          <h2 className="text-5xl font-serif italic text-white tracking-tight">Changing the Engine in Flight</h2>
          <p className="text-on-surface-variant opacity-70">Infrastructure transition vs. service innovation velocity metrics.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary-container text-white px-6 py-2 rounded font-bold transition-all active:scale-95 text-sm cursor-pointer shadow-lg shadow-primary-container/20">
            FORCE_COMMIT
          </button>
          <button className="border border-outline-variant hover:bg-white/5 text-on-surface px-6 py-2 rounded font-bold transition-all text-sm cursor-pointer">
            VIEW_LOGS
          </button>
        </div>
      </section>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Operational Balance (Gauges) */}
        <div className="md:col-span-8 glass-card rounded-xl p-6 border-t-2 border-t-warning shadow-[0_-10px_20px_-10px_rgba(245,197,24,0.3)] min-h-[400px] flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-lg font-bold">Operational Balance Shell</h3>
            <span className="font-mono text-[10px] text-warning bg-warning/10 px-2 py-1 rounded border border-warning/20 uppercase tracking-widest font-bold">Warning: Delta_Increasing</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 flex-grow items-center gap-8">
            {/* Gauge 1: Migration */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="96" cy="96" fill="none" r="88" stroke="#2a1614" strokeWidth="12"></circle>
                  <motion.circle 
                    initial={{ strokeDashoffset: 552.9 }}
                    animate={{ strokeDashoffset: 193.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    cx="96" cy="96" fill="none" r="88" stroke="#e50914" 
                    strokeDasharray="552.9" strokeLinecap="round" strokeWidth="12"
                  ></motion.circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-on-surface">65%</span>
                  <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest opacity-60">Migrated</span>
                </div>
              </div>
              <p className="font-mono text-[11px] text-center text-on-surface-variant tracking-wider">LEGACY_ORCHESTRATOR_DRAIN</p>
            </div>

            {/* Gauge 2: Reliability */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="96" cy="96" fill="none" r="88" stroke="#2a1614" strokeWidth="12"></circle>
                  <motion.circle 
                    initial={{ strokeDashoffset: 552.9 }}
                    animate={{ strokeDashoffset: 5.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    cx="96" cy="96" fill="none" r="88" stroke="#46D369" 
                    strokeDasharray="552.9" strokeLinecap="round" strokeWidth="12"
                  ></motion.circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-on-surface">99.9%</span>
                  <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest opacity-60">Uptime</span>
                </div>
              </div>
              <p className="font-mono text-[11px] text-center text-on-surface-variant tracking-wider">GLOBAL_LATENCY_P99: 142ms</p>
            </div>
          </div>
        </div>

        {/* Innovation Velocity */}
        <div className="md:col-span-4 glass-card rounded-xl p-6 border-t-2 border-t-success shadow-[0_-10px_20px_-10px_rgba(70,211,105,0.3)] flex flex-col gap-6">
          <h3 className="text-lg font-bold">Innovation Velocity</h3>
          <div className="flex-grow flex flex-col justify-center gap-8">
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                <span>Feature_Deploy_Rate</span>
                <span className="text-primary-container font-bold">+12% vs LY</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '78%' }} className="h-full bg-primary-container shadow-[0_0_8px_rgba(229,9,20,0.4)]"></motion.div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                <span>API_Expansion_Index</span>
                <span className="text-primary-container font-bold">ACTIVE</span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} className="h-full bg-primary-container shadow-[0_0_8px_rgba(229,9,20,0.4)]"></motion.div>
              </div>
            </div>
            
            <div className="p-4 bg-surface-container-lowest border border-white/5 rounded-lg">
              <p className="font-mono text-[11px] leading-relaxed text-on-surface-variant">
                Innovation continues at peak capacity. Migration overhead currently absorbing <span className="text-primary-container font-bold">14%</span> of Core Eng cycles.
              </p>
            </div>
          </div>
        </div>

        {/* Heatmap Section */}
        <div className="md:col-span-12 glass-card rounded-xl p-6 border-t-2 border-t-primary-container shadow-[0_-10px_20px_-10px_rgba(229,9,20,0.3)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface">Transition Failure Risk Heatmap</h3>
            <div className="flex gap-4">
              {[
                { label: 'CRITICAL', color: 'bg-primary-container shadow-[0_0_8px_#e50914]' },
                { label: 'ELEVATED', color: 'bg-warning' },
                { label: 'NOMINAL', color: 'bg-surface-container-highest' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-2 h-48">
            {[...Array(48)].map((_, i) => {
              const colors = ['bg-surface-container-highest', 'bg-warning/30', 'bg-primary-container/30', 'bg-primary-container/60'];
              const borders = ['border-white/5', 'border-warning/40', 'border-primary-container/40', 'border-primary-container font-bold'];
              // pseudo random distribution
              const intensity = (Math.sin(i * 0.5) + 1) / 2;
              const idx = intensity > 0.8 ? 3 : intensity > 0.6 ? 2 : intensity > 0.3 ? 1 : 0;
              
              return (
                <div 
                  key={i} 
                  className={`${colors[idx]} ${borders[idx]} border rounded flex items-center justify-center hover:bg-white/10 transition-all cursor-crosshair group relative`}
                >
                  {idx === 3 && <div className="absolute inset-0 bg-primary-container/20 animate-pulse rounded"></div>}
                </div>
              );
            })}
          </div>
          
          <div className="mt-4 flex justify-between font-mono text-[9px] text-on-surface-variant uppercase tracking-widest opacity-40">
            <span>NORTH_AMERICA_REGION_CLUSTER_A</span>
            <span>SYSTEM_INTERDEPENDENCY_MATRIX_v9</span>
            <span>SOUTH_EAST_ASIA_CLUSTER_G</span>
          </div>
        </div>

        {/* Transition Logs */}
        <div className="md:col-span-12 glass-card rounded-xl overflow-hidden border border-white/5">
          <div className="px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest">
            <h3 className="text-sm font-bold uppercase tracking-tight">Engine Transition Logs</h3>
            <div className="flex gap-4">
              <Filter size={16} className="text-on-surface-variant cursor-pointer hover:text-on-surface" />
              <Download size={16} className="text-on-surface-variant cursor-pointer hover:text-on-surface" />
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto font-mono text-[11px] divide-y divide-white/5">
            {TRANSITION_LOGS.map((log, i) => (
              <div key={i} className={`flex items-center gap-6 px-6 py-2.5 ${i % 2 === 0 ? 'bg-black' : 'bg-[#141414]'}`}>
                <span className="text-on-surface-variant opacity-50 shrink-0">{log.timestamp}</span>
                <span className={`font-bold shrink-0 w-20 ${
                  log.level === 'SUCCESS' ? 'text-success' : 
                  log.level === 'WARN' ? 'text-warning' : 
                  log.level === 'INFO' ? 'text-primary' : 'text-primary-container'
                }`}>
                  [{log.level}]
                </span>
                <span className="text-on-surface-variant opacity-90">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Contextual */}
      <button className="fixed right-8 bottom-28 w-14 h-14 bg-primary-container text-white rounded-full shadow-[0_8px_24px_rgba(229,9,20,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
        <Zap size={24} className="fill-current" />
      </button>
    </div>
  );
};

export default BalanceView;
