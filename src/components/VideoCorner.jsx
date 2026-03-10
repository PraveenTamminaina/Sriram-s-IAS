import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Play } from 'lucide-react';

const videos = [
 {
 title: "UPSC Prelims Strategy 2025 by AIR 23",
 thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
 views: "1.2M Views",
 duration: "45:20"
 },
 {
 title: "Complete Modern History Marathon",
 thumbnail: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80",
 views: "850K Views",
 duration: "4:30:15"
 },
 {
 title: "How to Read The Hindu for UPSC",
 thumbnail: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
 views: "2.5M Views",
 duration: "25:10"
 },
 {
 title: "Answer Writing Masterclass",
 thumbnail: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=800&q=80",
 views: "500K Views",
 duration: "1:15:00"
 },
 {
 title: "Geography Mapping Strategy",
 thumbnail: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
 views: "340K Views",
 duration: "35:40"
 }
];

const VideoCorner = () => {
 return (
 <section id="videos" className="py-24 bg-[var(--color-bg-base)] relative overflow-hidden">
 <div className="container mx-auto px-6 lg:px-12">
 <div className="flex flex-col md:flex-row justify-between items-end mb-12">
 <div className="max-w-xl">
 <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Free Resources</span>
 <h2 className="text-4xl font-extrabold text-[var(--color-primary)] leading-tight">
 Watch Our <span className="text-gradient">Top Performing</span> Masterclasses
 </h2>
 </div>
 <button className="mt-6 md:mt-0 text-[var(--color-primary)] font-bold px-6 py-2 border border-[var(--color-primary)] rounded-full hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all">
 View Channel
 </button>
 </div>

 <div className="relative">
 {/* Swiper Custom Styles for Navigation dots if needed */}
 <Swiper
 slidesPerView={1}
 spaceBetween={20}
 breakpoints={{
 640: { slidesPerView: 2, spaceBetween: 20 },
 1024: { slidesPerView: 3, spaceBetween: 30 },
 1280: { slidesPerView: 4, spaceBetween: 30 },
 }}
 pagination={{ clickable: true, dynamicBullets: true }}
 modules={[Pagination]}
 className="pb-16 video-swiper"
 >
 {videos.map((video, index) => (
 <SwiperSlide key={index}>
 <div className="bg-[var(--color-bg-card)] rounded-2xl overflow-hidden shadow-none border border-[var(--color-border)] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
 <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-card)]">
 <img 
 src={video.thumbnail} 
 alt={video.title} 
 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
 />
 
 {/* Timestamp */}
 <div className="absolute bottom-3 right-3 bg-black/80 text-[var(--color-primary)] text-xs font-bold px-2 py-1 rounded">
 {video.duration}
 </div>

 {/* Play Button Overlay */}
 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
 <div className="w-16 h-16 bg-[#fff] text-[var(--color-bg-base)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 hover:border-[var(--color-border)] transition-colors duration-300">
 <Play className="w-6 h-6 text-[var(--color-primary)] fill-current ml-1" />
 </div>
 </div>
 </div>
 
 <div className="p-5">
 <h3 className="font-bold text-[var(--color-primary)] text-lg mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
 {video.title}
 </h3>
 <div className="flex items-center text-[var(--color-secondary)] text-sm font-medium">
 <span>SRIRAM's IAS IAS</span>
 <span className="mx-2">•</span>
 <span>{video.views}</span>
 </div>
 </div>
 </div>
 </SwiperSlide>
 ))}
 </Swiper>
 </div>
 </div>
 </section>
 );
};

export default VideoCorner;
