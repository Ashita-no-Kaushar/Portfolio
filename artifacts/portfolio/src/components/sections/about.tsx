
import { aboutMe, sectionMeta } from '@/app/lib/data';
import { siteConfig } from '@/config/site';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">{sectionMeta.about.title}</h2>
          <p className="text-lg text-muted-foreground mt-2">{sectionMeta.about.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-[250px] h-[250px] mx-auto relative">
                    <img
                      src={aboutMe.imageUrl}
                      alt={siteConfig.name}
                      width={250}
                      height={250}
                      className="object-cover rounded-full shadow-lg"
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
