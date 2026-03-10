import React from 'react';
import { BookOpen, MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
 return (
 <footer id="contact" className="bg-[var(--color-bg-base)] pt-24 pb-12 relative overflow-hidden">
 {/* Decorative top border */}
 <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-bg-card)]"></div>

 <div className="container mx-auto px-6 lg:px-12">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
 
 {/* Brand Col */}
 <div className="col-span-1 md:col-span-2 lg:col-span-1">
 <div className="flex items-center gap-2 text-2xl font-extrabold text-[var(--color-primary)] mb-6">
 <BookOpen className="w-8 h-8 text-[var(--color-accent)]" />
 <span>SRIRAM's <span className="text-gradient-accent">IAS</span></span>
 </div>
 <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-8 font-medium">
 India's premier institute for UPSC Civil Services Examination preparation. We don't just teach; we mentor the future leaders of our nation.
 </p>
 <div className="flex items-center gap-4">
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all duration-300">
 <Youtube className="w-5 h-5" />
 </a>
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all duration-300">
 <Instagram className="w-5 h-5" />
 </a>
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all duration-300">
 <Twitter className="w-5 h-5" />
 </a>
 <a href="#" className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center text-gray-300 hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all duration-300">
 <Linkedin className="w-5 h-5" />
 </a>
 </div>
 </div>

 {/* Useful Links */}
 <div>
 <h4 className="text-[var(--color-primary)] font-bold text-lg mb-6 uppercase tracking-wider text-sm">Courses</h4>
 <ul className="space-y-4">
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full"></span> UPSC Foundation</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full"></span> GS Prelims Crash Course</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full"></span> Optional Subjects</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full"></span> Test Series 2024-25</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-accent)] rounded-full"></span> Mains Daily Writing</a></li>
 </ul>
 </div>

 {/* Resources */}
 <div>
 <h4 className="text-[var(--color-primary)] font-bold text-lg mb-6 uppercase tracking-wider text-sm">Resources</h4>
 <ul className="space-y-4">
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Daily Current Affairs</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Monthly Magazines</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Topper's Copies</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Syllabus & Strategy</a></li>
 <li><a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Free Live Classes</a></li>
 </ul>
 </div>

 {/* Contact Details */}
 <div>
 <h4 className="text-[var(--color-primary)] font-bold text-lg mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
 <ul className="space-y-6">
 <li className="flex items-start gap-4">
 <div className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
 <MapPin className="w-5 h-5" />
 </div>
 <div>
 <h5 className="text-[var(--color-primary)] text-sm font-bold mb-1">Head Office</h5>
 <p className="text-[var(--color-secondary)] text-sm leading-relaxed">12, Old Rajinder Nagar, New Delhi - 110060, India</p>
 </div>
 </li>
 <li className="flex items-start gap-4">
 <div className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
 <Phone className="w-5 h-5" />
 </div>
 <div>
 <h5 className="text-[var(--color-primary)] text-sm font-bold mb-1">Call Us</h5>
 <p className="text-[var(--color-secondary)] text-sm leading-relaxed">+91 98765 43210 <br/> Toll Free: 1800 123 4567</p>
 </div>
 </li>
 <li className="flex items-start gap-4">
 <div className="w-10 h-10 bg-[var(--color-bg-card)]/5 rounded-full flex items-center justify-center flex-shrink-0 text-[var(--color-primary)]">
 <Mail className="w-5 h-5" />
 </div>
 <div>
 <h5 className="text-[var(--color-primary)] text-sm font-bold mb-1">Email Support</h5>
 <p className="text-[var(--color-secondary)] text-sm leading-relaxed">support@sriramsias.com <br/> info@sriramsias.com</p>
 </div>
 </li>
 </ul>
 </div>

 </div>

 {/* Bottom copyright */}
 <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-[var(--color-secondary)] text-sm font-medium">
 &copy; {new Date().getFullYear()} SRIRAM's IAS Institute. All rights reserved.
 </p>
 <div className="flex items-center gap-6">
 <a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Privacy Policy</a>
 <a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Terms of Service</a>
 <a href="#" className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium">Refund Policy</a>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;
