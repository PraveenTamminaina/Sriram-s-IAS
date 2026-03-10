import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Bookmark, Clock } from 'lucide-react';

const CurrentAffairs = () => {
  return (
    <section id="current-affairs" className="py-12 bg-[var(--color-bg-base)]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden card-premium"
        >
          <div className="flex flex-col lg:flex-row border border-[var(--color-border)] rounded-3xl overflow-hidden bg-[var(--color-bg-card)]">
            
            {/* Left Content */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[var(--color-accent)]/20 text-[#D16B3A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[var(--color-accent)]/30">
                  Daily Update
                </span>
                <span className="flex items-center gap-1 text-[var(--color-secondary)] text-sm font-medium">
                  <Clock className="w-4 h-4" /> 5 min read
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-[1.1] tracking-tight">
                Current Affairs to <br/> <span className="text-gradient-accent text-3xl md:text-5xl">Stay Ahead</span>
              </h2>
              
              <p className="text-[var(--color-secondary)] mb-8 leading-relaxed font-medium">
                Curated daily news analysis from The Hindu, Indian Express, and PIB. Cut through the noise and read exactly what matters for the examination.
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 group"
                >
                  Read Today's News
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Right Graphics - News Feed Mockup */}
            <div className="lg:w-1/2 bg-[var(--color-bg-base)] p-8 lg:p-12 relative border-l border-[var(--color-border)] flex flex-col">
              {/* Decorative background blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col gap-4 flex-1">
                {/* Mock Article Card 1 */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[var(--color-bg-card)] p-5 rounded-2xl border border-[var(--color-border)] shadow-sm hover:-translate-y-1 transition-transform cursor-pointer flex-1 flex flex-col justify-center"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-[#D16B3A] uppercase tracking-wider">Economy</span>
                    <Bookmark className="w-4 h-4 text-[var(--color-secondary)] hover:text-[#D16B3A] transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2 leading-tight">RBI's New Monetary Policy Framework Changes</h4>
                  <p className="text-sm text-[var(--color-secondary)] line-clamp-2">A detailed analysis of how the repo rate changes will impact the broader macroeconomic indicators...</p>
                </motion.div>

                {/* Mock Article Card 2 */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-[var(--color-bg-card)] p-5 rounded-2xl border border-[var(--color-border)] shadow-sm hover:-translate-y-1 transition-transform cursor-pointer flex-1 flex flex-col justify-center"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-[#D16B3A] uppercase tracking-wider">International Relations</span>
                    <Bookmark className="w-4 h-4 text-[var(--color-secondary)] hover:text-[#D16B3A] transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2 leading-tight">India-Middle East-Europe Corridor (IMEC) Updates</h4>
                  <p className="text-sm text-[var(--color-secondary)] line-clamp-2">Strategic implications of the new transit routes and how it counters the BRI initiative globally...</p>
                </motion.div>
                
                 {/* Mock Article Card 3 */}
                 <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[var(--color-bg-card)] p-5 rounded-2xl border border-[var(--color-border)] shadow-sm hover:-translate-y-1 transition-transform cursor-pointer flex-1 flex flex-col justify-center opacity-70"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-[#D16B3A] uppercase tracking-wider">Environment</span>
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2 leading-tight">COP28 Resolutions</h4>
                  <p className="text-sm text-[var(--color-secondary)] line-clamp-2">Key takeaways from the climate summit and what it means for India's policy decisions...</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentAffairs;
