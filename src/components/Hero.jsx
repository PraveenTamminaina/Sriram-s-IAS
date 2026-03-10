import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
 return (
 <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden text-center z-10">
 <div className="glow-bg"></div>

 <div className="container mx-auto px-6 lg:px-12 z-20">
 
 {/* Banner */}
 <motion.div 
 initial={{ opacity: 0, y: -20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, ease: "easeOut" }}
 className="flex justify-center mb-8"
 >
 <a href="#courses" className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] text-sm text-[var(--color-primary)] transition-colors cursor-pointer group">
 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
 UPSC 2025 Foundation Batches Open
 <ChevronRight className="w-4 h-4 text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
 </a>
 </motion.div>

 {/* Headings */}
 <motion.h1 
 initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
 animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 className="text-5xl md:text-7xl lg:text-8xl font-black text-[var(--color-primary)] tracking-tighter leading-[1.1] mb-8 max-w-5xl mx-auto"
 >
 Master the UPSC <br/>
 <span className="text-gradient-accent">Shape the Nation</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
 className="text-lg md:text-xl text-[var(--color-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed"
 >
 Structured courses, expert faculty, and data-driven learning paths designed for modern civil services aspirants. Fast, precise, and highly effective.
 </motion.p>
 
 {/* Actions */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
 className="flex flex-col sm:flex-row items-center gap-4 justify-center"
 >
 <a href="#courses" className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-lg flex items-center justify-center gap-2 group">
 Start Learning
 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </a>
 
 <a href="#videocorner" className="btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-lg flex items-center justify-center gap-2 group">
 <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
 Watch Demo
 </a>
 </motion.div>

 {/* Video / App Preview UI */}
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
 className="mt-20 mx-auto max-w-5xl relative perspective-1000"
 >
 <div className="relative rounded-xl overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.15)] border border-[var(--color-border)] card-premium p-1 md:p-2 bg-[var(--color-bg-card)]/50 backdrop-blur-3xl transform hover:rotate-0 transition-transform duration-700">
 {/* Toolbar mock */}
 <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
 <div className="w-3 h-3 rounded-full bg-[#333]"></div>
 </div>
 {/* Content */}
 <div className="relative aspect-video bg-[var(--color-bg-card)] rounded-b-lg overflow-hidden flex items-center justify-center">
 <img 
 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
 alt="Classroom Platform" 
 className="w-full h-full object-cover opacity-80 mix-blend-multiply hover:mix-blend-normal transition-all duration-700"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 to-transparent flex items-center justify-center pointer-events-none">
 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center pointer-events-auto cursor-pointer hover:scale-110 hover:bg-white/20 transition-all">
 <Play className="w-6 h-6 text-[var(--color-primary)] fill-current ml-1" />
 </div>
 </div>
 </div>
 </div>
 
 {/* Subtle bottom fade */}
 <div className="absolute -bottom-10 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent z-10 pointer-events-none"></div>
 </motion.div>

 </div>
 </section>
 );
};

export default Hero;
