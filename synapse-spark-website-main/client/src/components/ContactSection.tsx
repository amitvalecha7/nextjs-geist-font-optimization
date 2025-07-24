
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Let's Build Something Remarkable Together.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get in Touch</h3>
              <form className="space-y-3 sm:space-y-4">
                <Input placeholder="Name" className="text-sm sm:text-base" />
                <Input placeholder="Company" className="text-sm sm:text-base" />
                <Input type="email" placeholder="Email" className="text-sm sm:text-base" />
                <Input placeholder="Phone / WhatsApp" className="text-sm sm:text-base" />
                <Textarea placeholder="Your message" rows={5} className="text-sm sm:text-base" />
                <Button type="submit" className="w-full text-sm sm:text-base" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <Card className="p-6 flex flex-col justify-center">
            <CardContent className="p-0">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground">
                <a href="mailto:info@vitrontech.in" className="flex items-center gap-3 sm:gap-4 hover:text-primary transition-colors text-sm sm:text-base lg:text-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span>info@vitrontech.in</span>
                </a>
                <a href="tel:+917021248760" className="flex items-center gap-3 sm:gap-4 hover:text-primary transition-colors text-sm sm:text-base lg:text-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span>+91 702 124 8760</span>
                </a>
                <div className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <span>VitronTech HQ, Mumbai, Maharashtra, India</span>
                </div>
                <a href="#" className="flex items-center gap-3 sm:gap-4 hover:text-primary transition-colors text-sm sm:text-base lg:text-lg">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span>Follow us on LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
