import React from 'react';
import { motion } from 'framer-motion';
import { Play, FileText, CheckCircle, ArrowRight, Download, Clock } from 'lucide-react';

const FreeContent = () => {
  return (
    <section id="free-content" className="relative z-20 pb-20 pt-10">
      <div className="container mx-auto px-6 lg:px-12 relative -mt-32">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Quality Without Cost</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
            Our <span className="text-gradient-accent">Free Learning</span> Vault
          </h2>
        </div>

        {/* Asymmetric Bento/Masonry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Main Video Block - Spans 8 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="lg:col-span-8 lg:row-span-2 relative rounded-3xl overflow-hidden group border border-[var(--color-border)] shadow-xl bg-[var(--color-bg-base)] cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1200&q=80" 
              alt="Answer Writing Masterclass"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[#2A2522] flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 fill-current ml-1" />
              </div>
              <span className="bg-[#2A2522] text-[#F5E7DE] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-max mb-3">Live Masterclass</span>
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Answer Writing Masterclass</h3>
              <p className="text-[var(--color-secondary)] line-clamp-2 max-w-xl font-medium">Learn the exact framework used by toppers to structure GS answers and score 400+ marks in UPSC Mains.</p>
            </div>
          </motion.div>

          {/* Notes Block - Spans 4 cols, 1 row */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="lg:col-span-4 lg:row-span-1 bg-[var(--color-bg-card)] rounded-3xl p-8 border border-[var(--color-border)] shadow-sm flex flex-col justify-between group cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-base)] border border-[var(--color-border)] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#D16B3A]" />
              </div>
              <Download className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-[#D16B3A] transition-colors" />
            </div>
            
            <div>
              <span className="text-xs font-bold text-[#D16B3A] uppercase tracking-wider mb-2 block">Monthly PDF</span>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">March Current Affairs Compilation</h3>
              <p className="text-sm text-[var(--color-secondary)]">Over 120 pages of highly curated, syllabus-mapped news from The Hindu & PIB.</p>
            </div>
          </motion.div>

          {/* Mock Test Block - Spans 4 cols, 1 row */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-4 lg:row-span-1 bg-[#2A2522] text-[var(--color-bg-base)] rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group cursor-pointer"
          >
            {/* Background Texture in Dark block */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')]"></div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="px-3 py-1 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-[#F2BFA4]">
                All India Mock
              </div>
              <div className="flex items-center gap-1 text-white/60 text-sm font-medium">
                <Clock className="w-4 h-4" /> 2 Hours
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#F5E7DE] leading-tight max-w-[200px]">Prelims Test Series 2025 (Test 4)</h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F2BFA4] group-hover:text-[#2A2522] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#F2BFA4] w-[45%] rounded-full"></div>
              </div>
              <p className="text-xs text-white/50 mt-2">45% of students scored above cutoff</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FreeContent;
