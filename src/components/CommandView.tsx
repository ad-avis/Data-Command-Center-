import React from 'react';
import { 
  Info, 
  FileText, 
  RefreshCw, 
  Users, 
  Rocket, 
  Gauge, 
  CalendarCheck, 
  Clock, 
  AlertTriangle, 
  User, 
  ExternalLink,
  ChevronRight,
  Globe
} from 'lucide-react';
import { PROGRAMS, COMMITMENTS } from '../constants';
import { motion } from 'motion/react';

const CommandView: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Executive Briefing */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6 border-l-4 border-l-primary-container"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary-container" size={24} />
            <h3 className="text-2xl font-bold text-on-surface">Executive Briefing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Info size={18} />
                <p className="font-mono text-[11px] uppercase tracking-wider font-bold">Context</p>
              </div>
              <p className="text-sm text-on-surface-variant">A cross-functional command center for Netflix's <span className="text-on-surface font-semibold">data platform transformation</span>.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <RefreshCw size={18} />
                <p className="font-mono text-[11px] uppercase tracking-wider font-bold">Objective</p>
              </div>
              <p className="text-sm text-on-surface-variant">Synchronize milestone sequencing across Content, Studio, and Cloud while maintaining <span className="text-primary-container font-semibold">99.98% reliability</span>.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Users size={18} />
                <p className="font-mono text-[11px] uppercase tracking-wider font-bold">Action Items</p>
              </div>
              <p className="text-sm text-on-surface-variant">Data Architects lead migration; Vertical Leads resolve spikes; Teams prioritize <span className="text-on-surface font-semibold italic">at-risk</span> commitments.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Rocket size={18} />
                <p className="font-mono text-[11px] uppercase tracking-wider font-bold">Impact</p>
              </div>
              <p className="text-sm text-on-surface-variant">Ensures we <span className="text-primary-container font-semibold uppercase">"change the engine in flight"</span> without disrupting global streaming velocity.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <nav className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-on-surface-variant opacity-60">SYSTEMS</span>
            <ChevronRight size={12} className="text-outline" />
            <span className="font-mono text-xs text-on-surface-variant opacity-60">GLOBAL</span>
          </nav>
          <h2 className="text-6xl font-serif italic text-white tracking-tighter">Global Data Programs</h2>
        </div>
        
        <div className="glass-card p-4 rounded-xl flex items-center gap-4 min-w-[280px]">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-surface-container-highest rounded-full"></div>
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
               className="absolute inset-0 border-4 border-primary-container rounded-full border-t-transparent"
            ></motion.div>
            <Gauge className="text-primary-container" size={20} />
          </div>
          <div>
            <p className="font-mono text-[10px] text-on-surface-variant opacity-70 uppercase tracking-widest">Engine in Flight</p>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-on-surface">99.98% Reliability</h3>
              <div className="h-2 w-2 rounded-full bg-success status-glow-green"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Program Health Grid */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2">
              Program Health
              <Info className="text-outline" size={20} />
            </h3>
            <button className="bg-primary-container hover:bg-[#ff0a16] text-white px-4 py-2 rounded font-semibold text-sm transition-colors cursor-pointer">
              View All Initiatives
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((program) => (
              <motion.div 
                key={program.id}
                whileHover={{ y: -4 }}
                className={`glass-card rounded-xl p-5 flex flex-col gap-4 border-t-2 ${
                  program.status === 'HEALTHY' ? 'border-t-success' : 
                  program.status === 'WARNING' ? 'border-t-warning' : 'border-t-primary-container'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-on-surface">{program.name}</h4>
                    <p className="font-mono text-xs text-on-surface-variant opacity-60 uppercase">{program.code}</p>
                  </div>
                  <span className={`px-2 py-1 text-[10px] font-bold rounded border ${
                    program.status === 'HEALTHY' ? 'bg-success/10 text-success border-success/20' : 
                    program.status === 'WARNING' ? 'bg-warning/10 text-warning border-warning/20' : 'bg-primary-container/10 text-primary-container border-primary-container/20'
                  }`}>
                    {program.status}
                  </span>
                </div>

                {program.image && (
                  <div className="w-full h-32 bg-black/40 rounded overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt="Visualization" 
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    {program.traffic && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="font-mono text-[10px] bg-black/80 px-2 py-1 rounded text-on-surface border border-white/10 uppercase tracking-widest">
                          Live Traffic: {program.traffic}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {!program.image && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-on-surface-variant">Progress</span>
                      <span className="text-on-surface">{program.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${program.progress}%` }}
                        className="bg-primary-container h-full rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                )}

                <div className="mt-2 space-y-3">
                  {program.description && (
                    <p className="text-sm text-on-surface-variant">{program.description}</p>
                  )}
                  <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <CalendarCheck size={18} className="shrink-0" />
                    <span>Milestone: {program.milestone}</span>
                  </div>
                  {program.next && (
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <Clock size={18} className="shrink-0" />
                      <span>Next: {program.next}</span>
                    </div>
                  )}
                  {program.assignee && (
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                      <User size={18} className="shrink-0" />
                      <span>Assignee: {program.assignee}</span>
                    </div>
                  )}
                </div>

                {program.status === 'AT RISK' && (
                  <div className="flex -space-x-2 mt-auto">
                    <div className="h-8 w-8 rounded-full border-2 border-black bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">JD</div>
                    <div className="h-8 w-8 rounded-full border-2 border-black bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">AM</div>
                    <div className="h-8 w-8 rounded-full border-2 border-black bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">SL</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-xl p-5 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-on-surface border-b border-outline-variant pb-4">At-Risk Commitments</h3>
            <div className="space-y-4">
              {COMMITMENTS.map((commitment) => (
                <div key={commitment.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors group cursor-pointer">
                  <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${
                    commitment.status === 'critical' ? 'bg-primary-container status-glow-red' : 'bg-warning status-glow-yellow'
                  }`}></div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{commitment.title}</p>
                    <p className="text-xs text-on-surface-variant opacity-70">Impact: {commitment.impact}</p>
                    <p className={`font-mono text-[10px] mt-1 ${
                      commitment.due === 'OVERDUE' ? 'text-primary-container font-bold' : 'text-on-surface-variant'
                    }`}>
                      {commitment.due === 'OVERDUE' ? 'OVERDUE' : `DUE IN ${commitment.due}`}
                    </p>
                  </div>
                  <ExternalLink size={16} className="text-outline group-hover:text-on-surface transition-colors" />
                </div>
              ))}
            </div>
            <button className="w-full py-3 rounded-lg border border-outline-variant font-bold text-on-surface hover:bg-surface-container-high transition-all active:scale-95 cursor-pointer">
              Download Risk Report
            </button>
          </motion.div>

          {/* Quick Context Nav (Sidebar style) */}
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-2 p-4 bg-surface-container-lowest rounded-2xl shadow-2xl border border-white/5"
          >
            <div className="flex items-center gap-3 p-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary-container flex items-center justify-center shadow-lg shadow-primary-container/20">
                <Rocket className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-on-surface">Data Architect</p>
                <p className="text-xs text-on-surface-variant opacity-70">Global Command • v4.2.0</p>
              </div>
            </div>
            {['Global Health', 'Cloud Ops', 'Content Eng', 'Settings'].map((item, idx) => (
              <a 
                key={item} 
                href="#" 
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  idx === 0 ? 'bg-surface-container-highest text-on-surface font-bold' : 'text-on-surface-variant hover:bg-white/5'
                }`}
              >
                <Globe size={18} />
                <span className="text-sm">{item}</span>
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default CommandView;
