
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const AboutPage = () => {
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
        <main className="pt-32">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
