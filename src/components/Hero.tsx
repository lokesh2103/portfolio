import { HeroContent } from './hero/HeroContent';
import { HeroVisual } from './hero/HeroVisual';
import { Particles } from './hero/Particles';

export const Hero = () => (
  <section className="min-h-screen bg-gradient-to-b from-background to-background/95 relative overflow-hidden py-20 lg:py-0">
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
    <Particles />
    <div className="container mx-auto px-4 min-h-[95vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Mobile order: Content first, Visual second */}
        <div className="order-2 lg:order-1">
          <HeroContent />
        </div>
        <div className="order-1 lg:order-2">
          <HeroVisual />
        </div>
      </div>
    </div>
  </section>
);
