import React from 'react';
import { motion } from 'framer-motion';
import { Clock, IndianRupee, ArrowUpRight, Sparkles } from 'lucide-react';

const coursesData = [
 {
 id: 1,
 title: "UPSC Foundation Batch 2025",
 description: "Comprehensive coverage of Prelims and Mains with daily answer writing.",
 duration: "14 months",
 price: "49,999",
 image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
 badge: "Most Popular"
 },
 {
 id: 2,
 title: "GS Prelims Crash Course",
 description: "Intensive 3-month program focusing on high-yielding topics for Prelims.",
 duration: "3 months",
 price: "15,000",
 image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800",
 },
 {
 id: 3,
 title: "Ethics GS4 Masterclass",
 description: "Master ethics case studies and theory with Dr. Rajiv Menon.",
 duration: "2.5 months",
 price: "12,500",
 image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
 },
 {
 id: 4,
 title: "Optional Subject Strategy",
 description: "Detailed strategy and material for Sociology, PSIR, and Public Admin.",
 duration: "4 months",
 price: "25,000",
 image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
 },
 {
 id: 5,
 title: "CSAT Special Batch",
 description: "Clear CSAT with ease. Focus on Quantitative Aptitude and Reasoning.",
 duration: "2 months",
 price: "8,999",
 image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
 },
 {
 id: 6,
 title: "Mains Answer Writing",
 description: "Daily evaluation, feedback, and model answers by selected candidates.",
 duration: "6 months",
 price: "18,000",
 image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
 badge: "New"
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
 hidden: { y: 50, opacity: 0, filter: 'blur(5px)' },
 visible: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, type: "spring", stiffness: 80 } }
};

const Courses = () => {
 return (
 <section id="courses" className="py-24 bg-[var(--color-bg-base)] relative overflow-hidden">
 
 {/* Background Decorative Blob */}
 <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

 <div className="container mx-auto px-6 lg:px-12 relative z-10">
 <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
 <div className="max-w-2xl">
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: false }}
 className="flex items-center gap-2 mb-4"
 >
 <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
 <span className="text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm">Pathways to Success</span>
 </motion.div>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: false }}
 transition={{ delay: 0.1 }}
 className="text-4xl lg:text-5xl md:text-6xl font-extrabold text-[var(--color-primary)] mb-4 leading-tight"
 >
 Explore Our <br/><span className="text-gradient-accent">Premium Courses</span>
 </motion.h2>
 </div>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: false }}
 transition={{ delay: 0.2 }}
 className="text-[var(--color-secondary)] text-lg max-w-md"
 >
 Carefully crafted programs designed by India's top educators to ensure your success in the UPSC examination.
 </motion.p>
 </div>

 <motion.div 
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16 mt-12"
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: false, margin: "-100px" }}
 >
 {coursesData.map((course, index) => (
 <motion.div 
 key={course.id}
 variants={itemVariants}
 className={`group flex flex-col ${index % 3 === 1 ? 'lg:translate-y-12' : ''}`}
 >
 <div className="relative rounded-3xl overflow-hidden mb-6 bg-[var(--color-bg-card)] border-[6px] border-[var(--color-bg-card)] shadow-xl group-hover:border-[var(--color-accent)]/30 transition-all duration-500 aspect-[4/3]">
 {course.badge && (
 <div className="absolute top-4 left-4 z-20 bg-[var(--color-accent)] text-[#111] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
 {course.badge}
 </div>
 )}
 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
 <img 
 src={course.image} 
 alt={course.title} 
 className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
 />
 <div className="absolute bottom-4 right-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
 <ArrowUpRight className="w-6 h-6 text-white" />
 </div>
 </div>
 
 <div className="flex flex-col flex-grow px-2">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2 bg-[var(--color-bg-card)] px-3 py-1.5 rounded-full border border-[var(--color-border)]">
 <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
 <span className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">{course.duration}</span>
 </div>
 <div className="flex items-center text-[var(--color-primary)] font-black text-xl">
 <IndianRupee className="w-5 h-5" />
 <span>{course.price}</span>
 </div>
 </div>

 <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300 line-clamp-2">
 {course.title}
 </h3>
 <p className="text-[var(--color-secondary)] text-md leading-relaxed mb-6 line-clamp-2">
 {course.description}
 </p>
 
 <div className="mt-auto pt-4 border-t border-[var(--color-border)] opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
 <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">View Details</span>
 <span className="w-8 h-[2px] bg-[var(--color-accent)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
 </div>
 </div>
 </motion.div>
 ))}
 </motion.div>
 
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: false }}
 className="mt-24 text-center flex justify-center"
 >
 <button className="btn-primary flex items-center gap-3 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-xl hover:shadow-[var(--color-accent)]/40 hover:-translate-y-1 transition-all duration-300">
 Browse Complete Syllabus
 <ArrowUpRight className="w-5 h-5" />
 </button>
 </motion.div>
 </div>
 </section>
 );
};

export default Courses;
