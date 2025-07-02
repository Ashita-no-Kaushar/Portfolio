import { useState, useEffect } from 'react';

export interface ResumeLinks {
  preview: string;
  download: string;
}

export interface RoleData {
  title: string;
  description: string;
  textResume: ResumeLinks;
  videoResume: ResumeLinks;
}

export interface ResumeData {
  [key: string]: RoleData;
}

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        // Use fallback data directly since JSON file is removed
        setResumeData({
          dataAnalyst: {
            title: "Data Analyst",
            description: "Focused on statistical analysis, data visualization, and business intelligence",
            textResume: {
              preview: "#",
              download: "#"
            },
            videoResume: {
              preview: "#",
              download: "#"
            }
          },
          dataScientist: {
            title: "Data Scientist",
            description: "Specializing in machine learning, predictive modeling, and advanced analytics",
            textResume: {
              preview: "#",
              download: "#"
            },
            videoResume: {
              preview: "#",
              download: "#"
            }
          },
          dataEngineer: {
            title: "Data Engineer",
            description: "Expert in data pipelines, infrastructure, and big data technologies",
            textResume: {
              preview: "#",
              download: "#"
            },
            videoResume: {
              preview: "#",
              download: "#"
            }
          }
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadResumeData();
  }, []);

  return { resumeData, loading, error };
};