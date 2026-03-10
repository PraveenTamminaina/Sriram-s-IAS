import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark } from 'lucide-react';

const Header = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navLinks = ['Home', 'Courses', 'Free Content', 'Current Affairs', 'Results', 'Faculty'];

 return (
 <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent'}`}>
 <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
 {/* Logo */}
 <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-[var(--color-primary)] hover:opacity-80 transition-opacity cursor-pointer">
 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D16B3A] to-[#f2bfa4] flex items-center justify-center shadow-lg shadow-[#D16B3A]/20">
 <Landmark className="w-5 h-5 text-[#2A2522]" />
 </div>
 SRIRAM's IAS
 </div>

 {/* Desktop Nav */}
 <nav className="hidden lg:flex items-center gap-8">
 {navLinks.map((link) => (
 <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-medium text-sm transition-colors duration-200">
 {link}
 </a>
 ))}
 </nav>

 {/* Action Buttons */}
 <div className="hidden lg:flex items-center gap-4">
 <button className="text-[var(--color-secondary)] font-medium text-sm px-4 py-2 hover:text-[var(--color-primary)] transition-colors">Log in</button>
 <button className="btn-primary px-4 py-2 rounded-md font-medium text-sm">Sign Up</button>
 </div>

 {/* Mobile Menu Toggle */}
 <button className="lg:hidden text-[var(--color-primary)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
 {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
 </button>
 </div>

 {/* Mobile Nav */}
 {isMobileMenuOpen && (
 <div className="lg:hidden absolute top-full left-0 w-full bg-[#000] border-b border-[var(--color-border)] py-4 px-6 flex flex-col gap-4">
 {navLinks.map((link) => (
 <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[var(--color-secondary)] font-medium text-sm hover:text-[var(--color-primary)]" onClick={() => setIsMobileMenuOpen(false)}>
 {link}
 </a>
 ))}
 <div className="flex flex-col gap-3 mt-4 border-t border-[var(--color-border)] pt-4">
 <button className="text-[var(--color-secondary)] font-medium text-sm text-left">Log in</button>
 <button className="btn-primary w-full p-2 rounded-md text-center font-medium text-sm">Sign Up</button>
 </div>
 </div>
 )}
 </header>
 );
};
export default Header;
