import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Youtube } from 'lucide-react';

const faculty = [
 {
 name: "Dr. Rajiv Menon",
 subject: "Polity & Governance",
 experience: "15+ Years",
 image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
 },
 {
 name: "Anita Sharma",
 subject: "Modern History",
 experience: "12+ Years",
 image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
 },
 {
 name: "Vikram Singh",
 subject: "Economy & Planning",
 experience: "8+ Years",
 image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
 },
 {
 name: "Dr. Riya Sen",
 subject: "Geography & Environment",
 experience: "10+ Years",
 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
 }
];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.1 }
 }
};

const itemVariants = {
 hidden: { y: 20, opacity: 0 },
 visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Faculty = () => {
 return (
 <section id="faculty" className="py-24 bg-[var(--color-bg-card)] relative overflow-hidden">
 <div className="container mx-auto px-6 lg:px-12">
  <div className="flex flex-col lg:flex-row gap-16 relative">
  {/* Left Side: Sticky Title */}
  <div className="lg:w-1/3 lg:sticky lg:top-32 h-max z-20">
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
    <span className="w-8 h-[2px] bg-[var(--color-accent)]"></span>
    Mentorship That Matters
    </span>
    <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
    Meet Our <br/><span className="text-gradient-accent">Teaching Experts</span>
    </h2>
    <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed font-medium">
    Learn from India's most respected educators who have guided thousands of successful aspirants. Expertise combined with dedication.
    </p>
    <button className="hidden lg:flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group">
    View Full Faculty 
    <span className="w-10 h-10 rounded-full border border-[var(--color-primary)] group-hover:border-[var(--color-accent)] flex items-center justify-center group-hover:translate-x-2 transition-all">
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
    </span>
    </button>
  </motion.div>
  </div>

  {/* Right Side: Stacked Faculty Cards */}
  <motion.div 
  className="lg:w-2/3 flex flex-col gap-10"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  >
  {faculty.map((member, index) => (
  <motion.div 
  key={index}
  variants={itemVariants}
  whileHover={{ y: -8, scale: 1.01 }}
  className={`flex flex-col md:flex-row gap-8 items-center bg-[var(--color-bg-base)] p-6 md:p-8 rounded-[2rem] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 transition-all duration-500 group relative overflow-hidden ${index % 2 !== 0 ? 'md:-translate-x-8' : 'md:translate-x-8'}`}
  >
  {/* Decorative outline */}
  <div className="absolute inset-0 border-2 border-[var(--color-accent)]/0 rounded-[2rem] group-hover:border-[var(--color-accent)]/50 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

  {/* Decorative quote mark */}
  <div className="absolute top-4 right-8 text-8xl font-serif text-[var(--color-border)] opacity-20 group-hover:text-[var(--color-accent)] transition-colors duration-500 select-none pointer-events-none">"</div>

  {/* Image */}
  <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-[1.5rem] overflow-hidden shadow-lg border-[4px] border-[var(--color-bg-base)] z-10">
  <img 
  src={member.image} 
  alt={member.name} 
  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700"
  />
  </div>
  
  {/* Content */}
  <div className="flex-grow z-10 text-center md:text-left">
  <div className="inline-block px-4 py-1.5 bg-[var(--color-bg-card)] rounded-full text-xs font-bold tracking-widest uppercase text-[#D16B3A] mb-4 border border-[var(--color-border)] shadow-sm">
  {member.experience} Experience
  </div>
  <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
  {member.name}
  </h3>
  <p className="text-[var(--color-secondary)] font-medium text-lg mb-6">{member.subject}</p>
  
  <div className="flex items-center justify-center md:justify-start gap-4">
  <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)] rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary)] hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
  <Twitter className="w-4 h-4" />
  </a>
  <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)] rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary)] hover:border-[#0077b5] hover:text-[#0077b5] transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
  <Linkedin className="w-4 h-4" />
  </a>
  <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)] rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-secondary)] hover:border-[#FF0000] hover:text-[#FF0000] transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
  <Youtube className="w-4 h-4" />
  </a>
  </div>
  </div>
  </motion.div>
  ))}
  
  <button className="lg:hidden mt-8 mx-auto flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group">
  View Full Faculty 
  <span className="w-10 h-10 rounded-full border border-[var(--color-primary)] group-hover:border-[var(--color-accent)] flex items-center justify-center group-hover:translate-x-2 transition-all">
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  </span>
  </button>
  </motion.div>
  </div>
 </div>
 </section>
 );
};

export default Faculty;
