
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, BrainCircuit, Server, Database } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture & Strategy",
    description: "We design, build, and manage robust, secure, and scalable cloud infrastructures on AWS, Azure, and GCP. From multi-cloud strategies to cloud-native development, we ensure your foundation is ready for modern AI.",
    keywords: ["Cloud Consulting", "Cloud Migration", "Infrastructure as Code", "FinOps"]
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Integration & Development",
    description: "Seamlessly integrate AI and machine learning into your operations. We develop custom AI models and integrate them with your systems to automate processes, gain insights, and optimize decision-making.",
    keywords: ["Custom AI Models", "MLOps", "AI-Powered Automation"]
  },
  {
    icon: Server,
    title: "DevOps & Automation",
    description: "Accelerate your innovation and enhance efficiency with our DevOps as a Service. We implement CI/CD pipelines, automated testing, and infrastructure automation for rapid, reliable software delivery.",
    keywords: ["CI/CD Pipeline", "Infrastructure Automation", "SRE"]
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Transform your raw data into a strategic asset. We build modern data platforms that enable advanced analytics, business intelligence, and the development of sophisticated AI models.",
    keywords: ["Data Warehousing", "ETL/ELT Pipelines", "Big Data Processing"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Expertise to Fuel Your Growth</h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">We offer a comprehensive suite of services designed to meet your unique technological needs.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-2 border-transparent flex flex-col">
              <CardHeader className="items-center text-center p-4 sm:p-6">
                <div className="p-3 sm:p-4 bg-secondary rounded-full">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">{service.description}</p>
                <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-1 sm:gap-2">
                  {service.keywords.map(keyword => (
                    <span key={keyword} className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-full">{keyword}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
