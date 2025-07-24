
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans relative">
      {/* Flickering Grid Background */}
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={6}
          gridGap={8}
          flickerChance={0.8}
          color="rgb(59, 130, 246)"
          maxOpacity={0.5}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
