
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, PenTool, Puzzle, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discover & Strategize",
    description: "We start by understanding your business goals and challenges to co-create a strategic roadmap.",
  },
  {
    icon: PenTool,
    title: "Design & Architect",
    description: "Our experts design a robust and scalable solution tailored to your specific needs.",
  },
  {
    icon: Puzzle,
    title: "Build & Integrate",
    description: "We develop and seamlessly integrate the solution into your existing technology ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Optimize & Evolve",
    description: "We provide ongoing support and optimization to ensure your solution delivers continuous value.",
  },
];

const OurApproach = () => {
  return (
    <section id="process" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            WE LOVE TO
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            DISCOVER,
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            EXPLORE,
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            MAKE
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            & CREATE.
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">AI Innovation Process:</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Over the last couple of years we've completed a number of AI projects, helping businesses drive innovation and create value. 
              From machine learning algorithms to natural language processing, our comprehensive approach ensures each solution is 
              tailored to your specific needs and delivers measurable results.
            </p>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Flowchart Style Process */}
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              
              {/* Left Side - Detailed Process Steps */}
              <div className="lg:col-span-2 space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step Container */}
                    <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-6">
                        {/* Step Number Circle */}
                        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {index + 1}
                        </div>
                        
                        {/* Step Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                            <step.icon className="w-8 h-8 text-primary flex-shrink-0" />
                          </div>
                          <p className="text-muted-foreground text-base leading-relaxed mb-4">{step.description}</p>
                          
                          {/* Additional Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-primary/5 rounded-lg p-4">
                              <h4 className="font-semibold text-primary mb-2">Key Activities</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {index === 0 && (
                                  <>
                                    <li>• Stakeholder interviews & workshops</li>
                                    <li>• Current system analysis</li>
                                    <li>• AI opportunity identification</li>
                                    <li>• Technical feasibility assessment</li>
                                  </>
                                )}
                                {index === 1 && (
                                  <>
                                    <li>• Architecture design & planning</li>
                                    <li>• Technology stack selection</li>
                                    <li>• Data pipeline development</li>
                                    <li>• MVP prototype creation</li>
                                  </>
                                )}
                                {index === 2 && (
                                  <>
                                    <li>• Agile development sprints</li>
                                    <li>• Continuous integration/deployment</li>
                                    <li>• Quality assurance testing</li>
                                    <li>• Performance optimization</li>
                                  </>
                                )}
                                {index === 3 && (
                                  <>
                                    <li>• Performance monitoring</li>
                                    <li>• User feedback integration</li>
                                    <li>• Continuous model improvement</li>
                                    <li>• Scalability enhancements</li>
                                  </>
                                )}
                              </ul>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-4">
                              <h4 className="font-semibold text-primary mb-2">Deliverables</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {index === 0 && (
                                  <>
                                    <li>• Strategy document</li>
                                    <li>• Technical requirements</li>
                                    <li>• Project roadmap</li>
                                    <li>• Budget & timeline</li>
                                  </>
                                )}
                                {index === 1 && (
                                  <>
                                    <li>• System architecture</li>
                                    <li>• Development plan</li>
                                    <li>• Working prototype</li>
                                    <li>• Technical documentation</li>
                                  </>
                                )}
                                {index === 2 && (
                                  <>
                                    <li>• Production-ready solution</li>
                                    <li>• User training materials</li>
                                    <li>• Deployment guide</li>
                                    <li>• Quality assurance reports</li>
                                  </>
                                )}
                                {index === 3 && (
                                  <>
                                    <li>• Performance analytics</li>
                                    <li>• Optimization recommendations</li>
                                    <li>• Maintenance schedule</li>
                                    <li>• Future enhancement plan</li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-10 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2"></div>
                    )}
                  </div>
                ))}
                
                {/* Success Metrics Section */}
                <div className="bg-gradient-to-r from-green-500/10 to-primary/10 rounded-2xl p-8 border-2 border-green-500/20 shadow-lg">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Project Success Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">95%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">40%</div>
                        <div className="text-sm text-muted-foreground">Average Efficiency Gain</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">6-8</div>
                        <div className="text-sm text-muted-foreground">Weeks to Deployment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Enhanced Visual Flowchart */}
              <div className="relative">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 shadow-xl sticky top-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-2">AI Transformation Journey</h3>
                    <p className="text-muted-foreground text-sm">From concept to continuous value</p>
                  </div>
                  
                  {/* Complex Flowchart Visualization */}
                  <div className="space-y-4">
                    {/* Start Node */}
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg border-2 border-green-400">
                        🚀 PROJECT START
                      </div>
                    </div>
                    
                    {/* Initial Assessment */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[18px] border-t-primary"></div>
                    </div>
                    
                    <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 text-center">
                      <div className="text-primary font-bold mb-2">Initial Assessment</div>
                      <div className="text-xs text-muted-foreground">Requirements gathering & feasibility analysis</div>
                    </div>
                    
                    {/* Decision Diamond */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-primary/60"></div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-yellow-100 border-2 border-yellow-400 transform rotate-45 w-16 h-16 flex items-center justify-center">
                        <div className="transform -rotate-45 text-xs font-bold text-yellow-800">GO?</div>
                      </div>
                    </div>
                    
                    {/* Process Flow */}
                    {steps.map((step, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-center">
                          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-primary/60"></div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl p-4 text-center shadow-md">
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <div className="text-primary font-bold text-sm">{step.title}</div>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            {index === 0 && "Analyze, strategize, and plan"}
                            {index === 1 && "Design, prototype, and validate"}
                            {index === 2 && "Build, test, and deploy"}
                            {index === 3 && "Monitor, optimize, and scale"}
                          </div>
                          <div className="flex justify-center">
                            <step.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        
                        {/* Quality Gate */}
                        {index < steps.length - 1 && (
                          <div className="flex justify-center">
                            <div className="bg-blue-100 border border-blue-300 rounded-full px-3 py-1 text-xs font-semibold text-blue-700">
                              Quality Gate {index + 1}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Final Quality Check */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-primary"></div>
                    </div>
                    
                    <div className="bg-orange-100 border-2 border-orange-400 rounded-xl p-3 text-center">
                      <div className="text-orange-800 font-bold text-sm">Final Validation</div>
                      <div className="text-xs text-orange-600">Performance testing & user acceptance</div>
                    </div>
                    
                    {/* Success Node */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[18px] border-t-green-500"></div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg border-2 border-green-400 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6" />
                        🎉 SUCCESS!
                      </div>
                    </div>
                    
                    {/* Continuous Loop */}
                    <div className="flex justify-center">
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-purple-500"></div>
                    </div>
                    
                    <div className="bg-purple-100 border-2 border-purple-400 rounded-xl p-3 text-center">
                      <div className="text-purple-800 font-bold text-sm">Continuous Improvement</div>
                      <div className="text-xs text-purple-600">Ongoing optimization & evolution</div>
                    </div>
                  </div>
                  
                  {/* Side Notes */}
                  <div className="mt-8 space-y-3">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-primary mb-2">Key Benefits</div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div>✓ Reduced implementation risk</div>
                        <div>✓ Faster time to market</div>
                        <div>✓ Measurable ROI</div>
                        <div>✓ Scalable solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
