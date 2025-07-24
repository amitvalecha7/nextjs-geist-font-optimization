
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';
import { Link } from 'wouter';


const navLinks = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Enterprise", href: "/enterprise" },
  { title: "Technology", href: "/technology" },
  { title: "Process", href: "/process" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans text-base bg-background/80 backdrop-blur-sm border-b border-border/20 shadow-sm`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex items-center flex-1">
            <Link to="/" aria-label="Homepage" onClick={closeMenu}>
              <Logo />
            </Link>
          </div>
          
          <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium" aria-label="Home">
              <Home className="h-5 w-5" />
            </Link>
            {navLinks.map((link) => (
              <Link key={link.title} to={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end flex-1">
            <div className="flex items-center gap-3 lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-1">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2" aria-label="Home">
              <Home className="h-4 w-4" />
              Home
            </Link>
            {navLinks.map((link) => (
              <Link key={link.title} to={link.href} onClick={closeMenu} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                {link.title}
              </Link>
            ))}
             <div className="svg-button w-full mt-4">
              <svg viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mobile-btn-gradient">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="#3F5EFB"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="296" height="56" rx="28" stroke="url(#mobile-btn-gradient)" strokeWidth="2"/>
              </svg>
              <Link to="/contact" onClick={closeMenu}>Get a Free Consultation</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
