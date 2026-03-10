import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Quote } from 'lucide-react';

const testimonials = [
 {
 name: "Rahul Verma",
 role: "UPSC Prelims 2024 Clearer",
 image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
 review: "The structured preparation structure helped me clear prelims relatively easily. The daily mock tests exactly replicated the real exam environment."
 },
 {
 name: "Sneha Reddy",
 role: "Selected as IPS (2023)",
 image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
 review: "Mains answer writing program was unparalleled. The feedback was constructive and helped me increase my score by 40 marks in GS."
 },
 {
 name: "Amit Kumar",
 role: "UPSC CSE Air 112",
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
 review: "The current affairs magazines saved me hundreds of hours. Highly concise, point-to-point, and incredibly effective for last-minute revision."
 },
 {
 name: "Priyanka Desai",
 role: "Selected as IRS (2022)",
 image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
 review: "SRIRAM's IAS's faculty doesn't just teach, they mentor. The one-on-one doubt clearing sessions were the highlight of my preparation journey."
 }
];

const Testimonials = () => {
 return (
 <section id="testimonials" className="py-24 bg-[var(--color-bg-base)] relative overflow-hidden">
 {/* Decorative Elements */}
 <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-border)] rounded-full filter blur-[100px] opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)] rounded-full filter blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

 <div className="container mx-auto px-6 lg:px-12 relative z-10">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">Student Testimonials</span>
 <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
 Hear From Our <span className="text-gradient">Achievers</span>
 </h2>
 <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed font-medium">
 Real stories, real results. See what our students have to say about their journey with SRIRAM's IAS.
 </p>
 </div>

 <div className="max-w-6xl mx-auto">
 <Swiper
 effect={'coverflow'}
 grabCursor={true}
 centeredSlides={true}
 slidesPerView={'auto'}
 coverflowEffect={{
 rotate: 30,
 stretch: 0,
 depth: 100,
 modifier: 1,
 slideShadows: false,
 }}
 autoplay={{
 delay: 3500,
 disableOnInteraction: false,
 }}
 pagination={{
 clickable: true,
 dynamicBullets: true,
 }}
 modules={[EffectCoverflow, Pagination, Autoplay]}
 className="testimonial-swiper py-10"
 >
 {testimonials.map((item, index) => (
 <SwiperSlide key={index} className="max-w-md w-full">
 <div className="bg-[var(--color-bg-card)] backdrop-blur-xl border border-[var(--color-border)] rounded-3xl p-10 m-4 relative h-full shadow-[0_4px_20px_-5px_rgba(42,37,34,0.05)]">
 <Quote className="absolute top-6 right-6 w-16 h-16 text-[var(--color-accent)]/80" />
 
 <div className="flex items-center gap-4 mb-8">
 <img 
 src={item.image} 
 alt={item.name} 
 className="w-16 h-16 object-cover rounded-full border-2 border-[var(--color-accent)]"
 />
 <div>
 <h4 className="text-xl font-bold text-[var(--color-primary)]">{item.name}</h4>
 <span className="text-sm font-medium text-[var(--color-secondary)]">{item.role}</span>
 </div>
 </div>
 
 <p className="text-[var(--color-primary)] font-serif text-lg italic leading-relaxed font-light">
 "{item.review}"
 </p>
 </div>
 </SwiperSlide>
 ))}
 </Swiper>
 </div>
 </div>
 </section>
 );
};

export default Testimonials;
