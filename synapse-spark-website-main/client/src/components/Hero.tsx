import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, BrainCircuit, Server } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Empowering Your Future with AI.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Type each character every 100ms
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Blink cursor every 500ms
    
    return () => clearInterval(cursorTimer);
  }, []);

  return <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-32">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Typewriter Animation Section */}
        <div className="mb-16 flex justify-center">
          <div className="search-box-container">
            <div className="search-box">
              <span className="typewriter-container">
                {displayText}
                <span className={`typewriter-cursor ${showCursor ? 'visible' : 'invisible'}`}>_</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Description Section */}
        <div className="mb-16">
          <div className="relative max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center px-4 py-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/20 shadow-lg">
              We build and integrate cutting-edge AI and cloud technologies to solve your most complex business challenges.
            </p>
          </div>
        </div>
        
        {/* Buttons Section */}
        <div className="relative mb-16 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/services">Discover Our Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/enterprise">Enterprise Solutions →</Link>
            </Button>
          </div>
        </div>
        
        {/* Quick Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-background/80 backdrop-blur-sm border-border/20">
            <CardContent className="p-6 text-center">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-sm text-muted-foreground">Scalable cloud infrastructure and migration services</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/80 backdrop-blur-sm border-border/20">
            <CardContent className="p-6 text-center">
              <BrainCircuit className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Development</h3>
              <p className="text-sm text-muted-foreground">Custom AI models and machine learning solutions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/80 backdrop-blur-sm border-border/20">
            <CardContent className="p-6 text-center">
              <Server className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Support</h3>
              <p className="text-sm text-muted-foreground">24/7 technical support and maintenance</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>;
};
export default Hero;