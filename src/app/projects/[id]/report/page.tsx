
'use client';

import { use } from 'react';
import { projects } from '@/app/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

export default function ProjectReportPage({ params }: { params: { id: string } }) {
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
              <Link href={`/projects/${id}`}>
                <ArrowLeft className="mr-2" />
                Back to Project
              </Link>
            </Button>
          </div>

          <article className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">
                {project.title} - Detailed Report
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                An in-depth look at the model's accuracy, performance, and the
                theories applied.
              </p>
            </header>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="prose prose-invert max-w-none mt-4 text-muted-foreground">
                  <h3 className="text-xl font-bold font-headline">
                    Model Accuracy
                  </h3>
                  <p>
                    The final model achieved an accuracy of{' '}
                    <strong>95%</strong> on the test dataset. The precision was
                    96%, and the recall was 94%, indicating a strong balance
                    between identifying true positives and avoiding false
                    positives.
                  </p>
                  <div className="aspect-video relative my-6 rounded-lg overflow-hidden border">
                    <Image
                      src="https://picsum.photos/seed/accuracy-chart/800/450"
                      alt="Model Accuracy Chart"
                      fill
                      className="object-contain p-4"
                      data-ai-hint="accuracy chart"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-headline">
                    Theoretical Background
                  </h3>
                  <p>
                    The project primarily leveraged a{' '}
                    <strong>Random Forest</strong> classifier. This ensemble
                    method was chosen for its robustness against overfitting
                    and its ability to handle a large number of features. It
                    works by constructing a multitude of decision trees at
                    training time and outputting the class that is the mode of
                    the classes of the individual trees.
                  </p>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </main>
    </div>
  );
}
