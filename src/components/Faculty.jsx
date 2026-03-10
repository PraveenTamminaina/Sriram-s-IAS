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
 <div className="text-center max-w-2xl mx-auto mb-16">
 <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Mentorship That Matters</span>
 <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
 Meet Our <span className="text-gradient">Teaching Experts</span>
 </h2>
 <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed font-medium">
 Learn from India's most respected educators who have guided thousands of successful aspirants.
 </p>
 </div>

 <motion.div 
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 >
 {faculty.map((member, index) => (
 <motion.div 
 key={index}
 variants={itemVariants}
 className="bg-[var(--color-bg-base)] rounded-2xl overflow-hidden group border border-[var(--color-border)] shadow-none hover: transition-all duration-300"
 >
 <div className="relative h-72 overflow-hidden">
 <img 
 src={member.image} 
 alt={member.name} 
 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
 />
 
 {/* Overlay with Social Icons */}
 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[#fff] text-[var(--color-bg-base)] transition-colors duration-300 transform hover:scale-110">
 <Twitter className="w-5 h-5" />
 </a>
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[#fff] text-[var(--color-bg-base)] transition-colors duration-300 transform hover:scale-110">
 <Linkedin className="w-5 h-5" />
 </a>
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-red-600 transition-colors duration-300 transform hover:scale-110">
 <Youtube className="w-5 h-5" />
 </a>
 </div>
 </div>
 
 <div className="p-6 text-center">
 <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
 {member.name}
 </h3>
 <p className="text-[var(--color-primary)] font-semibold text-sm mb-3">{member.subject}</p>
 <div className="inline-block px-3 py-1 bg-gray-200/50 rounded-full text-xs font-bold text-[var(--color-secondary)]">
 {member.experience} Experience
 </div>
 </div>
 </motion.div>
 ))}
 </motion.div>
 </div>
 </section>
 );
};

export default Faculty;
