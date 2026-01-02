
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
                <h2 className="text-2xl font-bold font-headline mb-4">Project Overview</h2>
                <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
                    <Image 
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                    />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold font-headline mb-4">Theory and Approach</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p>
                    This is where the detailed theory behind the project would be explained. For example, in the case of the <strong>{project.title}</strong>, we started by gathering extensive customer data, including transaction history, demographics, and support interactions. 
                  </p>
                  <p>
                    The core of the project was the application of several machine learning algorithms. We experimented with Logistic Regression as a baseline and moved to more complex models like Random Forest and Gradient Boosting to capture non-linear relationships in the data. Feature engineering was a critical step, where we created new variables such as customer tenure, average purchase value, and frequency of support tickets.
                  </p>
                  <p>
                    Model performance was evaluated using metrics like AUC-ROC, precision, and recall to ensure that we were not only accurately predicting churn but also minimizing false positives.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold font-headline mb-4">Architecture</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                    <p>
                        The architecture for this project was designed to be scalable and maintainable. It consisted of a data ingestion pipeline, a processing and feature engineering stage, a model training environment, and a deployment API.
                    </p>
                    <div className="aspect-video relative my-8 rounded-lg overflow-hidden border">
                         <Image 
                            src="https://picsum.photos/seed/arch-diagram/800/450"
                            alt="Architecture Diagram"
                            fill
                            className="object-contain p-4"
                            data-ai-hint="architecture diagram"
                        />
                    </div>
                    <p>
                        Data was sourced from multiple databases and APIs, consolidated in a data lake, and then processed using Apache Spark. Models were trained in a distributed environment and versioned using MLflow. The final model was exposed via a REST API, allowing other services to get predictions in real-time. This setup ensured that the system could handle a large volume of data and provide predictions with low latency.
                    </p>
                </div>
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
