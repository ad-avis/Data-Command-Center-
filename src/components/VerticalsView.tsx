import React from 'react';
import { Filter, RefreshCw, Link as LinkIcon, Gauge, AlertTriangle } from 'lucide-react';
import { INITIATIVES } from '../constants';
import { motion } from 'motion/react';

const VerticalsView: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* View Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-5xl font-serif italic text-white tracking-tight mb-2">Vertical Alignment Map</h2>
          <p className="text-on-surface-variant max-w-2xl">
            Visualizing cross-functional dependencies and infrastructure sequencing for 2024 content engineering initiatives.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-on-surface hover:bg-white/10 transition-all font-mono text-xs uppercase cursor-pointer">
            <Filter size={14} />
            Filter Verticals
          </button>
          <button className="bg-primary-container text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all text-sm cursor-pointer shadow-lg shadow-primary-container/20">
            Sync Map
          </button>
        </div>
      </div>

      {/* Alignment Map Grid */}
      <div className="grid grid-cols-12 gap-8 relative min-h-[600px]">
        {/* Vertical Lane: Content Engineering */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="p-4 rounded-xl border-l-4 border-primary-container bg-surface-container-lowest/40 flex items-center justify-between">
            <h3 className="font-bold text-on-surface">Content Engineering</h3>
            <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary-container text-[10px] font-bold uppercase tracking-widest leading-none">Primary Anchor</span>
          </div>

          {INITIATIVES.map((initiative) => (
            <motion.div 
              key={initiative.id}
              whileHover={{ x: 4 }}
              className="glass-card p-5 rounded-xl border border-white/5 relative group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-primary uppercase">{initiative.code}</span>
                <span className={`flex items-center gap-1.5 text-[10px] font-bold ${
                  initiative.status === 'COMMITTED' ? 'text-success' : 'text-warning'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    initiative.status === 'COMMITTED' ? 'bg-success shadow-[0_0_8px_rgba(70,211,105,0.6)]' : 'bg-warning shadow-[0_0_8px_rgba(245,197,24,0.6)]'
                  }`}></span>
                  {initiative.status}
                </span>
              </div>
              <h4 className="text-lg font-bold text-on-surface mb-2">{initiative.title}</h4>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">{initiative.description}</p>
              
              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-4">
                <div className="flex -space-x-2">
                  {initiative.assignees.map((img, i) => (
                    <img 
                      key={i} 
                      className="w-6 h-6 rounded-full border border-background" 
                      src={img} 
                      alt="Avatar" 
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-on-tertiary-container bg-surface-container-highest px-2 py-1 rounded">
                  {initiative.milestone}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Dependency Visualizer (SVG Connections) */}
        <div className="hidden lg:block col-span-1 h-full relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path className="flow-path" d="M 0 150 C 40 150, 60 250, 100 250" fill="transparent" stroke="rgba(229, 9, 20, 0.4)" strokeWidth="2"></path>
            <path className="flow-path" d="M 0 150 C 40 150, 60 550, 100 550" fill="transparent" stroke="rgba(229, 9, 20, 0.2)" strokeWidth="2"></path>
            <path className="flow-path" d="M 0 450 C 40 450, 60 250, 100 250" fill="transparent" stroke="rgba(245, 197, 24, 0.3)" strokeWidth="2"></path>
          </svg>
        </div>

        {/* Target Vertical: Studio Tech */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 lg:mt-24">
          <div className="p-4 rounded-xl border-l-4 border-outline bg-surface-container-lowest/40">
            <h3 className="font-bold text-on-surface">Studio Tech</h3>
          </div>
          <div className="glass-card p-5 rounded-xl border-primary-container/30 ring-1 ring-primary-container/15">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] text-primary-container uppercase font-bold">Dependent Path</span>
              <LinkIcon size={14} className="text-primary-container" />
            </div>
            <h4 className="font-bold text-on-surface mb-2">Production Ledger 2.0</h4>
            <p className="text-[11px] text-on-surface-variant leading-relaxed">
              Requires Project Red Dragon's API hooks for real-time asset tracking on-set.
            </p>
            <div className="mt-4 bg-surface-container-highest h-1 w-full rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} className="bg-primary-container h-full"></motion.div>
            </div>
          </div>
        </div>

        {/* Target Vertical: Product */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:mt-48">
          <div className="p-4 rounded-xl border-l-4 border-outline-variant bg-surface-container-lowest/40">
            <h3 className="font-bold text-on-surface">Product Experience</h3>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase font-bold">Downstream Impact</span>
            </div>
            <h4 className="font-bold text-on-surface mb-2">Direct-to-Device Localization</h4>
            <p className="text-[11px] text-on-surface-variant leading-relaxed">
              Leverages new media ingest pipeline to reduce localization-to-air latency by 40%.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1.5">
                <Gauge size={12} className="text-success" />
                <span className="text-[10px] text-on-surface-variant">High Impact</span>
              </div>
              <div className="flex items-center gap-1.5">
                <AlertTriangle size={12} className="text-warning" />
                <span className="text-[10px] text-on-surface-variant">Risk: Q4 Overlap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <section className="mt-12 pt-8 border-t border-outline-variant/30">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-on-surface">Sequenced Execution Timeline</h3>
          <div className="flex items-center gap-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-primary-container"></span> Engineering</span>
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></span> Infrastructure</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 relative overflow-hidden min-h-[200px]">
          <div className="absolute inset-0 flex opacity-[0.03] pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-1 border-r border-white"></div>
            ))}
          </div>
          
          <div className="relative space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-20 font-mono text-primary font-bold pt-1 uppercase">July</div>
              <div className="flex-grow space-y-3">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  className="h-8 bg-primary-container rounded-lg flex items-center px-4 hover:brightness-125 transition-all shadow-inner"
                >
                  <span className="text-white text-[10px] font-bold uppercase truncate">Core Pipeline Migration (Red Dragon)</span>
                </motion.div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  className="h-8 bg-surface-container-highest/40 border border-white/5 rounded-lg flex items-center px-4"
                >
                  <span className="text-on-surface-variant text-[10px] uppercase truncate">Studio Metadata Schema Lock</span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-20 font-mono text-primary font-bold pt-1 uppercase">August</div>
              <div className="flex-grow space-y-3">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '55%' }}
                  className="ml-[20%] h-8 bg-primary-container/60 border border-primary-container/20 rounded-lg flex items-center px-4"
                >
                  <span className="text-white text-[10px] font-bold uppercase truncate">API Endpoint Exposure</span>
                </motion.div>
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '30%' }}
                   className="ml-[10%] h-8 bg-surface-container-highest rounded-lg flex items-center px-4"
                >
                  <span className="text-white text-[10px] font-bold uppercase truncate">CDN Cache Warming</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerticalsView;
