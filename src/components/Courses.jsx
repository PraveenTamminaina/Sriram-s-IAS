import React from 'react';
import { motion } from 'framer-motion';
import { Clock, IndianRupee } from 'lucide-react';

 const coursesData = [
  {
  id: 1,
  title: "UPSC Foundation Batch 2025",
  description: "Comprehensive coverage of Prelims and Mains with daily answer writing.",
  duration: "14 months",
  price: "49,999",
  image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
  },
  {
  id: 2,
  title: "GS Prelims Crash Course",
  description: "Intensive 3-month program focusing on high-yielding topics for Prelims.",
  duration: "3 months",
  price: "15,000",
  image: "https://images.unsplash.com/photo-1513475382585-d8cae31f6d63?auto=format&fit=crop&q=80&w=800",
  },
  {
  id: 3,
  title: "Ethics GS4 Masterclass",
  description: "Master ethics case studies and theory with Dr. Rajiv Menon.",
  duration: "2.5 months",
  price: "12,500",
  image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
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
  image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
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
 hidden: { y: 40, opacity: 0, scale: 0.95 },
 visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
};

const Courses = () => {
 return (
 <section id="courses" className="py-16 bg-[var(--color-bg-base)] relative">
 <div className="container mx-auto px-6 lg:px-12">
 <div className="text-center max-w-2xl mx-auto mb-16">
 <h2 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">
 Explore Our <span className="text-gradient">Popular Courses</span>
 </h2>
 <p className="text-[var(--color-secondary)] text-lg">
 Carefully crafted programs designed by India's top educators to ensure your success in the UPSC examination.
 </p>
 </div>

 <motion.div 
 className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
 variants={containerVariants}
 initial="hidden"
 whileInView="visible"
 viewport={{ once: false, margin: "-100px" }}
 >
 {coursesData.map((course) => (
 <motion.div 
 key={course.id}
 variants={itemVariants}
 whileHover={{ y: -12, scale: 1.02 }}
 className="bg-[var(--color-bg-card)] rounded-2xl overflow-hidden shadow-none hover:shadow-none transition-all duration-500 border border-[var(--color-border)] flex flex-col group card-premium"
 >
 <div className="relative h-56 overflow-hidden">
 <img 
 src={course.image} 
 alt={course.title} 
 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
 </div>
 
 <div className="p-6 flex flex-col flex-grow">
 <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
 {course.title}
 </h3>
 <p className="text-[var(--color-secondary)] text-sm mb-6 flex-grow">
 {course.description}
 </p>
 
 <div className="flex items-center justify-between mb-6 pb-6 border-b border-[var(--color-border)]">
 <div className="flex items-center gap-2 text-[var(--color-secondary)]">
 <Clock className="w-4 h-4 text-[var(--color-secondary)]" />
 <span className="text-sm font-medium">{course.duration}</span>
 </div>
 <div className="flex items-center gap-1 text-[var(--color-primary)] font-bold text-lg">
 <IndianRupee className="w-4 h-4" />
 <span>{course.price}</span>
 </div>
 </div>

 <button className="w-full py-3 bg-[var(--color-bg-base)] text-[var(--color-primary)] font-bold rounded-xl group-hover:bg-[#fff] text-[var(--color-bg-base)] group-hover:text-[var(--color-primary)] transition-colors duration-300 flex justify-center items-center gap-2">
 Enroll Now
 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
 </svg>
 </button>
 </div>
 </motion.div>
 ))}
 </motion.div>
 
 <div className="mt-16 text-center">
 <button className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-bold hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all duration-300 hover:border-[var(--color-border)] transition-colors duration-300">
 View All Courses
 </button>
 </div>
 </div>
 </section>
 );
};

export default Courses;
