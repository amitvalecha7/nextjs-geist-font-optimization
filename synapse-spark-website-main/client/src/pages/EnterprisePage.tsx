
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  Building2, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Brain, 
  Network, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Lock,
  Rocket
} from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: Building2,
    title: "Enterprise-Grade Infrastructure",
    description: "Scalable, secure, and compliant AI infrastructure designed for large organizations with complex requirements."
  },
  {
    icon: Shield,
    title: "Advanced Security & Compliance",
    description: "SOC 2, GDPR, and industry-specific compliance with enterprise-grade security protocols and data governance."
  },
  {
    icon: Users,
    title: "Dedicated Success Team",
    description: "Assigned customer success managers, technical architects, and 24/7 support for seamless implementation."
  },
  {
    icon: Network,
    title: "Custom AI Model Development",
    description: "Proprietary AI models tailored to your specific industry, use cases, and business objectives."
  }
];

const useCases = [
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast market trends, customer behavior, and operational metrics with advanced ML models.",
    benefits: ["30% improvement in forecasting accuracy", "Reduced operational costs", "Data-driven decision making"]
  },
  {
    icon: Brain,
    title: "Intelligent Document Processing",
    description: "Automate document analysis, extraction, and processing across your organization.",
    benefits: ["90% reduction in manual processing", "Improved accuracy", "Faster turnaround times"]
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline complex workflows with AI-powered automation and intelligent routing.",
    benefits: ["50% faster processing times", "Reduced human error", "Scalable operations"]
  },
  {
    icon: Target,
    title: "Customer Intelligence",
    description: "Deep customer insights and personalization at scale across all touchpoints.",
    benefits: ["25% increase in customer satisfaction", "Higher retention rates", "Personalized experiences"]
  }
];

const stats = [
  { number: "500+", label: "Enterprise Clients" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "50M+", label: "Data Points Processed Daily" },
  { number: "24/7", label: "Global Support" }
];

const EnterprisePage = () => {
  return (
    <div className="bg-background text-foreground font-sans relative">
      {/* Flickering Grid Background */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="hsl(var(--primary))"
          maxOpacity={0.1}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-32">
          <div className="absolute inset-0 z-0 bg-background">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.1),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,hsl(var(--primary)/0.05)_50%,transparent_70%)] animate-pulse"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 animate-fade-in-up">
            <h1 className="typewriter-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tight text-foreground mb-6 mx-auto">
              Enterprise AI Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 px-4">
              Transform your organization with enterprise-grade AI infrastructure, custom models, and dedicated support that scales with your business.
            </p>

          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Enterprise Scale</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our enterprise platform delivers the security, scalability, and support that large organizations require.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <Card key={index} className="bg-secondary border-border">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how leading enterprises are transforming their operations with our AI solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <useCase.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-lg">{useCase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-foreground">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Security & Compliance First</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Built with enterprise security standards from the ground up, ensuring your data and operations remain protected.
                </p>
                <div className="space-y-4">
                  {[
                    "SOC 2 Type II Certified",
                    "GDPR & CCPA Compliant",
                    "End-to-end Encryption",
                    "Role-based Access Control",
                    "Audit Trails & Monitoring",
                    "Data Residency Options"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center">
                    <Lock className="h-32 w-32 text-primary" />
                  </div>
                  <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join hundreds of leading enterprises that trust VitronTech to power their AI transformation.
              </p>

            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default EnterprisePage;
