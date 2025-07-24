import React, { useRef } from 'react';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { Brain, Database, Cloud, Zap, Shield, BarChart3 } from 'lucide-react';

const AnimatedIconHub = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const icon4Ref = useRef<HTMLDivElement>(null);
  const icon5Ref = useRef<HTMLDivElement>(null);
  const icon6Ref = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center mt-16 mb-16"
    >
      {/* Center Icon - AI Hub */}
      <div 
        ref={centerRef}
        className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20"
      >
        <Brain className="w-8 h-8 text-primary" />
      </div>

      {/* Surrounding Icons */}
      <div 
        ref={icon1Ref}
        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
        style={{ top: '20%', left: '20%' }}
      >
        <Database className="w-6 h-6 text-blue-500" />
      </div>

      <div 
        ref={icon2Ref}
        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
        style={{ top: '20%', right: '20%' }}
      >
        <Cloud className="w-6 h-6 text-indigo-500" />
      </div>

      <div 
        ref={icon3Ref}
        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
        style={{ left: '10%', top: '50%' }}
      >
        <Zap className="w-6 h-6 text-yellow-500" />
      </div>

      <div 
        ref={icon4Ref}
        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
        style={{ right: '10%', top: '50%' }}
      >
        <Shield className="w-6 h-6 text-green-500" />
      </div>

      <div 
        ref={icon5Ref}
        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
        style={{ bottom: '20%', left: '20%' }}
      >
        <BarChart3 className="w-6 h-6 text-purple-500" />
      </div>

      <div 
        ref={icon6Ref}
        className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200"
        style={{ bottom: '20%', right: '20%' }}
      >
        <Brain className="w-6 h-6 text-pink-500" />
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={icon1Ref}
        gradientStartColor="#0ebac5"
        gradientStopColor="#3F5EFB"
        duration={3}
        delay={0}
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={icon2Ref}
        gradientStartColor="#3F5EFB"
        gradientStopColor="#0ebac5"
        duration={3.5}
        delay={0.5}
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={icon3Ref}
        gradientStartColor="#ffaa40"
        gradientStopColor="#9c40ff"
        duration={4}
        delay={1}
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={icon4Ref}
        gradientStartColor="#9c40ff"
        gradientStopColor="#ffaa40"
        duration={3.2}
        delay={1.5}
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={icon5Ref}
        gradientStartColor="#0ebac5"
        gradientStopColor="#ffaa40"
        duration={3.8}
        delay={2}
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={icon6Ref}
        gradientStartColor="#3F5EFB"
        gradientStopColor="#9c40ff"
        duration={4.2}
        delay={2.5}
      />
    </div>
  );
};

export default AnimatedIconHub;