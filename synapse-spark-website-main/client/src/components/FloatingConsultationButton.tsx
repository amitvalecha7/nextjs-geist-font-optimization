import React from 'react';
import { Link } from 'wouter';
import { MessageCircle } from 'lucide-react';

const FloatingConsultationButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="svg-button" style={{width: '200px', height: '60px'}}>
        <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="floating-btn-gradient">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="#3F5EFB"/>
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="196" height="56" rx="28" stroke="url(#floating-btn-gradient)"/>
        </svg>
        <Link to="/contact" className="flex items-center justify-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Free Consultation
        </Link>
      </div>
    </div>
  );
};

export default FloatingConsultationButton;