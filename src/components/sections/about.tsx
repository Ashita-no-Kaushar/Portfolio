
import Image from 'next/image';
import { aboutMe } from '@/app/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2">A passionate data scientist with a love for finding stories in data.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square relative w-full max-w-[250px] mx-auto">
                    <Image
                      src="/icon.svg"
                      alt="Kaushar Halani"
                      fill
                      className="object-contain rounded-full shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    {aboutMe.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
