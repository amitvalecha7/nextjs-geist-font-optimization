
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-32 animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">The Architects of Your Digital Transformation.</h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base lg:text-lg px-2 sm:px-4">
            VitronTech is a forward-thinking technology company at the forefront of the AI revolution. Headquartered in the bustling tech hub of Mumbai, we deliver modern IT, cloud, and AI solutions to a global clientele.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 max-w-6xl mx-auto px-2 sm:px-4">
          <Card className="bg-secondary border-primary/20 border p-4 sm:p-6 lg:p-8">
            <CardContent className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-foreground p-0">
              <p>
              Our mission is to demystify artificial intelligence and make its power accessible to every business. We are a team of passionate innovators, certified architects, and data scientists dedicated to building solutions with simplicity, security, and scale at their core. We don't just build technology; we build partnerships that drive success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
