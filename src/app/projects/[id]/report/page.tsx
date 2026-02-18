
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
import { Badge } from '@/components/ui/badge';

const reportChecklist: Record<number, string[]> = {
  1: [
    'Dataset overview: source, row count, and key data-quality issues.',
    'Feature engineering summary and rationale for selected features.',
    'Model comparison table (baseline vs tuned model) with precision/recall/F1.',
    'Business interpretation of predicted churn segments and action plan.',
  ],
  2: [
    'Text preprocessing strategy and token/cleaning decisions.',
    'Class distribution and evaluation metrics for each model version.',
    'Error analysis with representative false positives/false negatives.',
    'Dashboard interpretation guidelines for stakeholders.',
  ],
  3: [
    'Time-series decomposition and seasonality observations.',
    'Forecast model comparison with MAE/RMSE-style error metrics.',
    'Backtesting approach and reliability notes by time window.',
    'Operational recommendations for inventory/planning teams.',
  ],
};

const reportResultsByProject: Record<number, Array<{ title: string; finding: string; chartHint: string }>> = {
  1: [
    {
      title: 'Result 1 — Churn Risk Segmentation',
      finding: 'High-risk cohorts were isolated using probability thresholds, enabling targeted retention outreach and prioritization.',
      chartHint: 'risk segmentation chart',
    },
    {
      title: 'Result 2 — Model Evaluation Summary',
      finding: 'Compared baseline and tuned models using precision, recall, and F1 to select a business-reliable operating point.',
      chartHint: 'model comparison chart',
    },
    {
      title: 'Result 3 — Operational Impact View',
      finding: 'Translated model outputs into a practical campaign action plan for follow-up, timing, and customer priority.',
      chartHint: 'operations dashboard chart',
    },
  ],
  2: [
    {
      title: 'Result 1 — Sentiment Distribution',
      finding: 'Detected positive/neutral/negative trend shifts across categories to support brand monitoring decisions.',
      chartHint: 'sentiment distribution chart',
    },
    {
      title: 'Result 2 — NLP Model Performance',
      finding: 'Benchmarked text-classification variants and selected the most stable model across validation splits.',
      chartHint: 'nlp performance chart',
    },
    {
      title: 'Result 3 — Stakeholder Dashboard Outputs',
      finding: 'Produced dashboard-ready summaries that made trend interpretation fast for non-technical users.',
      chartHint: 'dashboard preview',
    },
  ],
  3: [
    {
      title: 'Result 1 — Demand Pattern Analysis',
      finding: 'Identified seasonality and short-cycle demand movement relevant for inventory planning.',
      chartHint: 'time series decomposition',
    },
    {
      title: 'Result 2 — Forecast Accuracy Comparison',
      finding: 'Compared forecasting methods using MAE/RMSE and selected the most reliable near-term estimator.',
      chartHint: 'forecast accuracy chart',
    },
    {
      title: 'Result 3 — Planning Recommendation',
      finding: 'Converted forecasts into planning-friendly scenarios for stock and replenishment decisions.',
      chartHint: 'planning scenario chart',
    },
  ],
};

export default function ProjectReportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  const checklist = reportChecklist[project.id] ?? [];
  const resultBlocks = reportResultsByProject[project.id] ?? [];

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
                A structured summary of data preparation, model evaluation, and implementation decisions.
              </p>
            </header>

            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-6 text-muted-foreground">
                  <div className="rounded-lg border bg-card/50 p-4">
                    <p className="mb-3 text-sm font-semibold text-foreground">Navigation</p>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline"><Link href="#summary">Summary</Link></Button>
                      <Button asChild size="sm" variant="outline"><Link href="#process">Process</Link></Button>
                      <Button asChild size="sm" variant="outline"><Link href="#results">Results</Link></Button>
                      <Button asChild size="sm" variant="outline"><Link href="#recommendation">Recommendation</Link></Button>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-card/50 p-4">
                    <p className="mb-3 text-sm font-semibold text-foreground">Project Metadata</p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide">Tool</p>
                        <p className="text-sm text-foreground">Python</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide">Project Type</p>
                        <p className="text-sm text-foreground">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide">Methods</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {project.methodologies.slice(0, 2).map((method) => (
                            <Badge key={method} variant="secondary">{method}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide">Repository</p>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground underline-offset-4 hover:underline">
                          Open Link
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden border">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} report image`}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>

                  <section id="summary" className="scroll-mt-24">
                    <h3 className="mb-2 text-xl font-bold font-headline text-foreground">
                      Summary
                    </h3>
                    <p>
                      This report documents the project goal, implementation approach, and practical outcomes in a recruiter-friendly format.
                    </p>
                  </section>

                  <section id="process" className="scroll-mt-24">
                    <h3 className="mb-2 text-xl font-bold font-headline text-foreground">
                      Process
                    </h3>
                    <ul className="list-disc space-y-2 pl-5">
                      {checklist.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section id="results" className="scroll-mt-24 space-y-6">
                    <h3 className="mb-2 text-xl font-bold font-headline text-foreground">
                      Results
                    </h3>
                    {resultBlocks.map((result, index) => (
                      <div key={result.title} className="rounded-lg border bg-card/40 p-4">
                        <h4 className="text-base font-semibold text-foreground">{result.title}</h4>
                        <p className="mt-2">{result.finding}</p>
                        <div className="aspect-video relative my-4 rounded-md overflow-hidden border">
                          <Image
                            src={`https://picsum.photos/seed/${project.id}-result-${index + 1}/900/500`}
                            alt={`${project.title} result ${index + 1} chart`}
                            fill
                            className="object-contain p-4"
                            data-ai-hint={result.chartHint}
                          />
                        </div>
                      </div>
                    ))}
                  </section>

                  <section id="recommendation" className="scroll-mt-24">
                    <h3 className="mb-2 text-xl font-bold font-headline text-foreground">
                      Recommendation
                    </h3>
                    <p>
                      Link this page to your repository README and experiment logs so recruiters can verify both implementation depth and reproducibility.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </main>
    </div>
  );
}
