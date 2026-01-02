
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, User } from 'lucide-react';
// import { SyntheticBackground } from '@/components/ui/synthetic-background';

const Hero = () => {
  return (
    <section id="home" className="relative h-dvh flex items-center justify-center text-center pt-16 md:pt-20">
      {/* Electric Blue Shader Background - Uncomment to enable */}
      {/* <SyntheticBackground /> */}
      
      {/* The main container for your hero content */}
      <div className="container z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Kaushar Halani
            </h1>
            <h2 className="text-2xl md:text-3xl font-body text-primary">
              Turning Complex Data into Clear Decisions
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="animate-button-pulse">
              <Link href="/resume" prefetch={true}>
                <Download />
                Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="animate-button-pulse">
                <Link href="/profile" prefetch={true}>
                  <>
                    <User />
                    Profile
                  </>
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

