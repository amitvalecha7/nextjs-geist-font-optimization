
import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

interface ErrorPageProps {
  statusCode: number;
  title: string;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode,
  title,
  message = "Sorry, an unexpected error has occurred.",
}) => {
  return (
    <div className="bg-background text-foreground font-mono text-xl flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center p-4">
        <div>
          <h1 className="text-7xl md:text-9xl font-bold text-primary animate-glitch-hover">{statusCode}</h1>
          <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-foreground">{title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-2 max-w-2xl mx-auto">{message}</p>
          <div className="svg-button mt-8">
            <svg viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="error-btn-gradient">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="#3F5EFB"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="296" height="56" rx="28" stroke="url(#error-btn-gradient)" strokeWidth="2"/>
            </svg>
            <Link to="/">Return to Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
