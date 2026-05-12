import React from 'react';
import { Search, Plus, ChevronDown, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { DECISIONS } from '../constants';
import { motion } from 'motion/react';

const LogView: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header & Controls */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-serif italic text-white tracking-tight">Decision Log</h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              High-velocity orchestration history. Tracking pragmatic trade-offs across global infrastructure to maintain delivery momentum over theoretical perfection.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <input 
                type="text" 
                placeholder="Search decision hash, owner, or vertical..." 
                className="bg-black border border-outline-variant rounded-lg pl-10 pr-4 py-2.5 w-full md:w-80 text-sm text-on-surface focus:border-primary-container transition-all outline-none font-mono"
              />
            </div>
            <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/20 whitespace-nowrap">
              New Entry
            </button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-mono text-[10px] text-outline uppercase tracking-[0.2em] mr-2">Filters:</span>
          {['Vertical: All', 'Status: All'].map((filter) => (
            <button key={filter} className="px-4 py-1.5 rounded-full border border-white/10 bg-surface-container-low text-xs text-on-surface hover:bg-surface-container-high hover:border-primary-container/40 transition-all font-mono flex items-center gap-2 cursor-pointer">
              {filter} <ChevronDown size={14} />
            </button>
          ))}
          <button className="px-4 py-1.5 rounded-full border border-primary-container/40 bg-surface-container-low text-xs text-on-surface font-mono flex items-center gap-2 cursor-pointer">
            Impact: High <X size={14} className="text-primary-container" />
          </button>
          <button className="ml-auto text-primary text-[10px] font-mono uppercase font-bold tracking-widest hover:underline px-2">
            Clear all
          </button>
        </div>
      </section>

      {/* Decision Table */}
      <div className="glass-card rounded-xl overflow-hidden border border-white/5 shadow-2xl">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-lowest border-b border-outline-variant/30 font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.15em] font-bold">
          <div className="col-span-12 md:col-span-5">Decision Title & Rationale</div>
          <div className="hidden md:block md:col-span-2">Vertical</div>
          <div className="hidden md:block md:col-span-2">Owner</div>
          <div className="hidden md:block md:col-span-2 text-center">Impact</div>
          <div className="hidden md:block md:col-span-1 text-right">Status</div>
        </div>

        {/* Entry Rows */}
        <div className="divide-y divide-white/5">
          {DECISIONS.map((decision, i) => (
            <motion.div 
              key={decision.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`grid grid-cols-12 gap-4 px-6 py-6 items-start transition-colors cursor-pointer group ${
                i % 2 === 0 ? 'bg-black' : 'bg-[#141414]'
              } hover:bg-white/5`}
            >
              <div className="col-span-12 md:col-span-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg text-on-surface group-hover:text-primary-container transition-colors leading-tight">
                    {decision.title}
                  </span>
                  <ExternalLink size={14} className="text-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-on-surface-variant/80 leading-relaxed font-medium">
                  {decision.rationale}
                </p>
                {/* Mobile meta (only visible small screens) */}
                <div className="flex flex-wrap gap-2 md:hidden pt-2">
                   <span className="bg-white/5 text-[10px] font-mono text-outline px-2 py-1 rounded">
                    {decision.vertical}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-1 rounded font-bold uppercase tracking-wider ${
                    decision.impact === 'Critical' ? 'text-primary-container bg-primary-container/10' :
                    decision.impact === 'High' ? 'text-primary-container bg-primary-container/5' : 'text-on-surface-variant bg-white/5'
                  }`}>
                    {decision.impact}
                  </span>
                </div>
              </div>

              <div className="hidden md:block md:col-span-2">
                <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-mono uppercase border border-white/5 tracking-wider">
                  {decision.vertical}
                </span>
              </div>

              <div className="hidden md:block md:col-span-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-surface-container-highest flex-shrink-0 overflow-hidden ring-1 ring-white/10">
                  <img src={decision.ownerImage} alt={decision.owner} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-on-surface font-mono text-xs font-medium">{decision.owner}</span>
              </div>

              <div className="hidden md:block md:col-span-2 flex justify-center">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${
                  decision.impact === 'Critical' ? 'bg-primary-container/10 border-primary-container/30' :
                  decision.impact === 'High' ? 'bg-primary-container/5 border-primary-container/20' : 'bg-surface-container-high border-white/5'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    decision.impact === 'Critical' || decision.impact === 'High' ? 'bg-primary-container shadow-[0_0_8px_rgba(229,9,20,0.6)]' : 'bg-secondary'
                  }`}></div>
                  <span className={`font-mono text-[10px] uppercase font-bold tracking-widest ${
                    decision.impact === 'Critical' || decision.impact === 'High' ? 'text-primary-container' : 'text-on-surface-variant'
                  }`}>
                    {decision.impact}
                  </span>
                </div>
              </div>

              <div className="hidden md:block md:col-span-1 text-right">
                <span className={`font-mono text-[11px] ${decision.reversible ? 'italic text-on-surface-variant/60' : 'text-on-surface font-semibold'}`}>
                  {decision.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer / Pagination */}
        <div className="px-6 py-4 bg-surface-container-lowest border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-outline uppercase tracking-wider opacity-60">Showing 1-4 of 248 decisions</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 hover:bg-surface-container transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-white font-mono text-xs font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 hover:bg-surface-container transition-colors font-mono text-xs">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 hover:bg-surface-container transition-colors font-mono text-xs">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 hover:bg-surface-container transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Side Visual Info (Desktop Only) */}
      <aside className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-64 space-y-6">
        <div className="glass-card p-6 rounded-2xl space-y-5 border border-white/5">
          <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">System Health</h3>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-on-surface-variant">Decisions / Mo</span>
                <span className="text-on-surface font-bold">142</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="bg-primary-container h-full"></motion.div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-on-surface-variant">Reversibility</span>
                <span className="text-warning font-bold">42%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '42%' }} className="bg-warning h-full"></motion.div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-white/5">
            <p className="text-[10px] text-outline leading-relaxed italic">
              "Pragmatism is the art of knowing which flaws to accept for the sake of speed."
            </p>
          </div>
        </div>
        
        <div className="p-6 bg-surface-container-highest/20 rounded-2xl border border-white/5">
          <h3 className="font-mono text-[10px] text-outline uppercase tracking-widest mb-4">Recent Contributors</h3>
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-black bg-surface-container-highest"></div>
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-black bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-outline">+12</div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LogView;
