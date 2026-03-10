import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const toppers = [
 {
 rank: 23,
 name: "Ananya Sharma",
 quote: "Consistent mentorship made the difference.",
 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
 },
 {
 rank: 47,
 name: "Rahul Verma",
 quote: "The structured daily answer writing was game-changing.",
 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
 },
 {
 rank: 68,
 name: "Sneha Reddy",
 quote: "Test series exactly matched UPSC standards.",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
 },
 {
 rank: 112,
 name: "Vikram Singh",
 quote: "Exceptional faculty and personalized guidance.",
 image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
 }
];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.15 }
 }
};

const itemVariants = {
 hidden: { y: 40, opacity: 0 },
 visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const Selections = () => {
 return (
 <section id="results" className="py-24 bg-[var(--color-bg-base)] relative overflow-hidden">
 {/* Decorative Wave */}
 <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-bg-card)]"></div>

 <div className="container mx-auto px-6 lg:px-12">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Proven Track Record</span>
 <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
 Celebrating Our <span className="text-gradient">Successful</span> UPSC Selections
 </h2>
 <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed font-medium">
 Over 500+ students have turned their dreams into reality. Join the league of extraordinary civil servants.
 </p>
 </div>

 <motion.div 
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-100px" }}
 >
 {toppers.map((topper, index) => (
 <motion.div 
 key={index}
 variants={itemVariants}
 whileHover={{ y: -10, scale: 1.02 }}
 className="bg-[var(--color-bg-card)] rounded-3xl p-8 shadow-none hover: transition-all duration-300 border border-[var(--color-border)] flex flex-col items-center text-center group relative overflow-hidden"
 >
 {/* Internal decorative background */}
 <div className="absolute top-0 left-0 w-full h-32 bg-[var(--color-bg-card)] opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>

 <div className="relative mb-6 z-10 p-1 bg-[var(--color-bg-card)] rounded-full ">
 <div className="w-24 h-24 rounded-full overflow-hidden">
 <img 
 src={topper.image} 
 alt={topper.name} 
 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
 />
 </div>
 {/* Rank Badge */}
 <div className="absolute -bottom-3 -right-3 bg-[var(--color-accent)] text-[var(--color-primary)] w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 border-white shadow-md">
 #{topper.rank}
 </div>
 </div>

 <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-1 z-10">{topper.name}</h3>
 <div className="flex text-[var(--color-secondary)] mb-4 z-10">
 {[...Array(5)].map((_, i) => (
 <Star key={i} className="w-4 h-4 fill-current" />
 ))}
 </div>
 <p className="text-[var(--color-secondary)] text-sm italic z-10 leading-relaxed max-w-xs px-2 relative">
 <span className="text-5xl text-gray-200 absolute -top-4 -left-2 -z-10 font-serif">"</span>
 {topper.quote}
 <span className="text-5xl text-gray-200 absolute -bottom-8 -right-2 -z-10 font-serif">"</span>
 </p>
 </motion.div>
 ))}
 </motion.div>
 </div>
 </section>
 );
};

export default Selections;
