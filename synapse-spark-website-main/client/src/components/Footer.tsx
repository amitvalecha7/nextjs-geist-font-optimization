import React from 'react';
import Logo from './Logo';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'wouter';

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:info@vitrontech.in", icon: Mail, label: "Email" },
    { href: "tel:+917021248760", icon: Phone, label: "Phone" },
  ];

  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-lg">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <p className="mb-6">Intelligent Connections. Infinite Possibilities.</p>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(link => (
             <a key={link.label} href={link.href} aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors hover:glow-effect">
               <link.icon />
             </a>
          ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Vitrontech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
