import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layers, TrendingUp, Award, BookOpen, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
};

const WhyChoose = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-[var(--color-bg-base)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm mb-4 block">The SRIRAM's IAS Advantage</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-4 leading-tight">
            Why Choose <span className="text-gradient">Our Mentorship?</span>
          </h2>
        </div>

        {/* Bento Box Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[minmax(200px,auto)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Large Card spanning 2 rows */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="md:row-span-2 bg-[var(--color-bg-card)] rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent)] transition-all duration-300 flex flex-col items-start gap-4"
          >
            <div className="w-14 h-14 bg-[var(--color-bg-base)] rounded-2xl flex items-center justify-center border border-[var(--color-border)]">
              <Users className="w-6 h-6 text-[#D16B3A]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-primary)]">Expert Faculty & Bureaucrats</h3>
            <p className="text-[var(--color-secondary)] leading-relaxed text-sm">
              Learn from veterans including ex-bureaucrats, subject experts, and seasoned educators with years of UPSC coaching experience. Our faculty doesn't just teach syllabus—they build analytical minds capable of administering the nation.
            </p>
            <div className="mt-auto pt-6 border-t border-[var(--color-border)] w-full">
              <span className="text-3xl font-black text-[var(--color-primary)]">50+</span>
              <p className="text-xs uppercase tracking-wider text-[var(--color-secondary)] font-bold mt-1">Dedicated Mentors</p>
            </div>
          </motion.div>

          {/* Medium Card - Wide */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-[var(--color-accent)] text-[var(--color-bg-base)] rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 pattern-grid pointer-events-none"></div>
            
            <div className="relative z-10 sm:w-2/3">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                <Award className="w-5 h-5 text-[#2A2522] dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2A2522] dark:text-white mb-2">Proven Track Record</h3>
              <p className="text-[#5A4E46] dark:text-white/90 leading-relaxed text-sm">
                With 500+ successful selections in the last 5 years, our methodology is tested and proven by toppers time and again.
              </p>
            </div>
            <div className="relative z-10 bg-[#2A2522] dark:bg-[#111] text-[#F5E7DE] dark:text-white p-6 rounded-2xl w-full sm:w-1/3 flex flex-col items-center justify-center border border-[#3A332E] dark:border-[#333]">
              <span className="text-4xl font-black mb-1">500+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B49682] dark:text-white/70">Selections</span>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-[var(--color-bg-card)] rounded-3xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[#D16B3A] transition-colors flex flex-col gap-3 justify-center"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[var(--color-bg-base)] rounded-lg flex items-center justify-center border border-[var(--color-border)]">
                <Layers className="w-5 h-5 text-[#D16B3A]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)]">Structured Core</h3>
            </div>
            <p className="text-[var(--color-secondary)] text-sm leading-relaxed">
              Meticulously planned curriculum ensuring timely coverage with ample revision time.
            </p>
          </motion.div>

           {/* Small Card 2 */}
           <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-[var(--color-bg-card)] rounded-3xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[#D16B3A] transition-colors flex flex-col gap-3 justify-center relative overflow-hidden"
          >
            <div className="absolute -right-4 -bottom-4 opacity-5 text-[var(--color-primary)] pointer-events-none">
              <BookOpen className="w-32 h-32" />
            </div>
            <div className="relative z-10 flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[var(--color-bg-base)] rounded-lg flex items-center justify-center border border-[var(--color-border)]">
                <TrendingUp className="w-5 h-5 text-[#D16B3A]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)]">Daily Analysis</h3>
            </div>
            <p className="relative z-10 text-[var(--color-secondary)] text-sm leading-relaxed">
              In-depth current affairs analysis aligning perfectly with dynamic exam patterns.
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
