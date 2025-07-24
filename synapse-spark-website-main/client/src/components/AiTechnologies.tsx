import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, ScanEye, LineChart, ToyBrick, Network } from 'lucide-react';

const technologies = [
  { icon: Bot, name: "Natural Language Processing (NLP)", description: "For chatbots, sentiment analysis, and text summarization." },
  { icon: ScanEye, name: "Computer Vision", description: "For image recognition, object detection, and video analysis." },
  { icon: LineChart, name: "Predictive Analytics", description: "To forecast trends, predict customer behavior, and optimize outcomes." },
  { icon: ToyBrick, name: "Generative AI", description: "For content creation, code generation, and creating novel designs." },
  { icon: Network, name: "Machine Learning Operations (MLOps)", description: "For deploying, monitoring, and maintaining ML models in production." }
];

const AiTechnologies = () => {
  return (
    <section id="ai-technologies" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-secondary animate-fade-in-up px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Leveraging the Full Spectrum of AI</h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground">We harness a wide array of AI technologies to build tailored solutions that deliver tangible results.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className="bg-secondary border-none p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <tech.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{tech.name}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1">{tech.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTechnologies;