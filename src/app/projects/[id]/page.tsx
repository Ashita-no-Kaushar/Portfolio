
'use client';
import { use } from 'react';
import { projects } from '@/app/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id.toString() === id);

  const datasetSizeByProject: Record<number, string> = {
    1: '5 MB (tabular customer records)',
    2: '8 MB (social text samples)',
    3: '6 MB (historical sales time-series)',
  };

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-start mb-8">
              <Button asChild variant="outline">
                  <Link href="/#projects">
                      <ArrowLeft className="mr-2" />
                      Back to Projects
                  </Link>
              </Button>
          </div>
          <article className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">{project.title}</h1>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {project.methodologies.map((method) => (
                    <Badge key={method} variant="secondary">{method}</Badge>
                  ))}
                </div>
            </header>

            <Card>
              <CardContent className="p-6 md:p-8">

              <section className="mb-12">
                <h2 className="text-2xl font-bold font-headline mb-4">Project Snapshot</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Tooling</p>
                    <p className="mt-1 text-sm text-foreground">Python, Notebook workflow, model evaluation</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Project Type</p>
                    <p className="mt-1 text-sm text-foreground">{project.category}</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Dataset</p>
                    <p className="mt-1 text-sm text-foreground">{datasetSizeByProject[project.id] ?? 'Custom business dataset'}</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Links</p>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">Repository</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold font-headline mb-4">Case Study Overview</h2>
                <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden w-full">
                    <Image 
                        src={project.imageUrl}
                        alt={project.title}
                        width={1200}
                        height={675}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority
                        className="object-cover w-full h-full"
                        data-ai-hint={project.imageHint}
                    />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                <p className="mt-4 text-base text-muted-foreground">
                  <span className="font-semibold text-foreground">Problem:</span> {project.problemStatement}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold font-headline mb-4">Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The implementation followed a practical workflow: data preparation, feature and model experimentation,
                  evaluation against business-oriented criteria, and clear delivery artifacts for stakeholder use.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold font-headline mb-4">Outcome</h2>
                <div className="aspect-video relative my-8 rounded-lg overflow-hidden border">
                  <Image
                    src="https://picsum.photos/seed/arch-diagram/800/450"
                    alt="Architecture Diagram"
                    fill
                    className="object-contain p-4"
                    data-ai-hint="architecture diagram"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.outcomeSummary}</p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {project.impactMetrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-headline mb-4 text-center">Project Detailed Report</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground text-center">
                  <p>
                    For a deeper dive into the project's performance, accuracy metrics, and the underlying theory, you can view the detailed report.
                  </p>
                  <div className="mt-6">
                    <Button asChild size="lg" className="animate-button-pulse transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                      <Link href={`/projects/${project.id}/report`}>
                        <BookOpen className="mr-2" />
                        View Detailed Report
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
              </CardContent>
            </Card>

          </article>
        </div>
      </main>
    </div>
  );
}
