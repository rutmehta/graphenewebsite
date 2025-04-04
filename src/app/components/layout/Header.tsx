"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/85 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 md:h-10 md:w-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-sm opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">G</div>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Graphene</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-white/90 hover:text-white font-medium transition">
              Features
            </Link>
            <Link href="/about" className="text-white/90 hover:text-white font-medium transition">
              About
            </Link>
            <Link href="/team" className="text-white/90 hover:text-white font-medium transition">
              Team
            </Link>
            <Link href="/#waitlist" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="flex md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/features" 
                className="text-white/90 hover:text-white font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/about" 
                className="text-white/90 hover:text-white font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/team" 
                className="text-white/90 hover:text-white font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/#waitlist" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-5 py-2 rounded-full w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
