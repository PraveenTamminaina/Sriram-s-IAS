import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const centers = [
  {
    city: "New Delhi (ORN)",
    name: "Old Rajinder Nagar Center",
    address: "22-B, Pusa Road, Bada Bazar Marg, Old Rajinder Nagar, New Delhi, Delhi 110060",
    phone: "+91 11-42437002",
    email: "orn@sriramsias.com",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    isMain: true
  },
  {
    city: "New Delhi (GTB)",
    name: "Mukherjee Nagar Center",
    address: "A-12, 1st Floor, Commercial Complex, Dr. Mukherjee Nagar, New Delhi, Delhi 110009",
    phone: "+91 11-41416666",
    email: "gtb@sriramsias.com",
    image: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isMain: false
  },
  {
    city: "Hyderabad",
    name: "Ashok Nagar Center",
    address: "1-2-345/A, 2nd Floor, Indira Park Road, Ashok Nagar, Hyderabad, Telangana 500029",
    phone: "+91 40-27663333",
    email: "hyderabad@sriramsias.com",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isMain: false
  }
];

const OfflineCenters = () => {
  return (
    <section id="offline-centers" className="pt-24 pb-48 bg-[var(--color-bg-base)] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Physical Classrooms</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight">
              Find Our <span className="text-gradient-accent">Offline Centers</span>
            </h2>
            <p className="text-[var(--color-secondary)] text-lg mt-4 max-w-xl font-medium">
              Experience the best-in-class infrastructure and traditional classroom mentorship at our physical branches across India.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-[#D16B3A] font-bold px-8 py-3 rounded-full hover:bg-[#D16B3A] border border-[#D16B3A] hover:text-[#2A2522] transition-colors duration-300 flex items-center gap-2 group">
            Book Campus Tour <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl overflow-hidden border ${center.isMain ? 'border-[#D16B3A] shadow-lg shadow-[#D16B3A]/10' : 'border-[var(--color-border)] shadow-sm'} bg-[var(--color-bg-card)] flex flex-col group relative`}
            >
              {center.isMain && (
                <div className="absolute top-4 right-4 bg-[#D16B3A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                  Head Office
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={center.image} 
                  alt={center.city} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-black text-[var(--color-primary)] leading-none">{center.city}</h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-lg font-bold text-[var(--color-primary)] mb-4">{center.name}</h4>
                
                <div className="space-y-4 mb-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D16B3A] mt-1 shrink-0" />
                    <p className="text-sm text-[var(--color-secondary)] font-medium leading-relaxed">{center.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#D16B3A] shrink-0" />
                    <p className="text-sm text-[var(--color-secondary)] font-medium">{center.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#D16B3A] shrink-0" />
                    <p className="text-sm text-[var(--color-secondary)] font-medium">{center.email}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#D16B3A] hover:underline group-hover:translate-x-2 transition-transform duration-300">
                    Get Directions <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfflineCenters;
