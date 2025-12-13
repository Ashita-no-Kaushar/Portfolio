
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@/app/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projectCategories = ['All', 'Machine Learning', 'NLP', 'Data Analysis'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my work in data science.</p>
        </div>

        <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="All" onValueChange={setActiveTab} className="w-full">
                 <div className="flex justify-center mb-8">
                   <TabsList className="inline-flex items-center gap-2 p-1 bg-secondary rounded-full h-auto border-none">
                      {projectCategories.map((category) => (
                          <TabsTrigger
                              key={category}
                              value={category}
                              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm data-[state=inactive]:text-muted-foreground hover:text-foreground"
                          >
                              {category}
                          </TabsTrigger>
                      ))}
                  </TabsList>
                </div>

                <TabsContent value={activeTab}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl">
                        <CardHeader>
                            <div className="aspect-[3/2] relative">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                                data-ai-hint={project.imageHint}
                                loading="lazy"
                                />
                            </div>
                            <CardTitle className="pt-4">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                            {project.methodologies.map((method) => (
                                <Badge key={method} variant="secondary">{method}</Badge>
                            ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex w-full justify-center gap-2 flex-wrap">
                                <Button asChild variant="outline" className="flex-1 min-w-[100px]">
                                    <Link href={project.githubUrl} target="_blank">
                                    <Github /> GitHub
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="flex-1 min-w-[100px]">
                                    <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink /> Live
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="flex-1 min-w-[100px]">
                                    <Link href={project.docsPath} prefetch={true}>
                                    <FileText /> Docs
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                        </Card>
                    ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
