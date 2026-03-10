import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const stats = [
 { label: "Students", value: 10000, suffix: "+" },
 { label: "UPSC Selections", value: 500, suffix: "+" },
 { label: "Faculty", value: 50, suffix: "+" },
 { label: "Years Experience", value: 8, suffix: "+" }
];

const Counter = ({ end, suffix }) => {
 const [count, setCount] = useState(0);

 useEffect(() => {
 let start = 0;
 const duration = 2000;
 const increment = end / (duration / 16);
 
 const timer = setInterval(() => {
 start += increment;
 if (start > end) {
 setCount(end);
 clearInterval(timer);
 } else {
 setCount(Math.ceil(start));
 }
 }, 16);
 
 return () => clearInterval(timer);
 }, [end]);

 return <span>{count.toLocaleString()}{suffix}</span>;
};

const About = () => {
 return (
 <section id="about" className="py-24 bg-[var(--color-bg-card)] relative overflow-hidden">
 <div className="container mx-auto px-6 lg:px-12">
 <div className="flex flex-col lg:flex-row items-center gap-16">
 
 {/* Left - Image/Illustration */}
 <motion.div 
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: false, margin: "-100px" }}
 className="flex-1 w-full relative"
 >
 <motion.div 
 animate={{ y: [0, -10, 0] }}
 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
 className="relative z-10 rounded-3xl overflow-hidden card-premium p-3 border border-[var(--color-border)] card-premium"
 >
 <img 
 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
 alt="Students studying" 
 className="w-full h-[500px] object-cover rounded-2xl"
 />
 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent mix-blend-overlay"></div>
 </motion.div>
 {/* Decorative background vectors */}
 <div className="absolute -top-10 -left-10 w-full h-full bg-[var(--color-bg-base)] rounded-3xl -z-10 shadow-inner"></div>
 <div className="absolute bottom-10 -right-10 w-48 h-48 bg-[var(--color-bg-card)] rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
 </motion.div>

 {/* Right - Content */}
 <motion.div 
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: false, margin: "-100px" }}
 className="flex-1"
 >
 <span className="text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm mb-4 block">About SRIRAM's IAS</span>
 <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
 Shaping the Future of <span className="text-gradient">India's Leaders</span>
 </h2>
 <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed">
 For over a decade, we have been at the forefront of UPSC preparation. Our comprehensive approach, combining expert mentorship with meticulously crafted study materials, ensures that every aspirant gets the best chance to succeed.
 </p>
 <p className="text-[var(--color-secondary)] text-lg mb-10 leading-relaxed font-medium">
 We don't just teach syllabus; we build analytical minds capable of administering the nation.
 </p>

 {/* Stats Grid */}
 <div className="grid grid-cols-2 gap-8">
 {stats.map((stat, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, scale: 0.8, y: 20 }}
 whileInView={{ opacity: 1, scale: 1, y: 0 }}
 transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
 viewport={{ once: false }}
 >
 <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-2 flex items-baseline">
 <span className="text-gradient"><Counter end={stat.value} suffix={stat.suffix} /></span>
 </h3>
 <p className="text-[var(--color-secondary)] font-medium">{stat.label}</p>
 </motion.div>
 ))}
 </div>
 </motion.div>

 </div>
 </div>
 </section>
 );
};

export default About;
