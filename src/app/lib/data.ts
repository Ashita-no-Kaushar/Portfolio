
import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Project {
  id: number;
  title: string;
  description: string;
  problemStatement: string;
  outcomeSummary: string;
  impactMetrics: string[];
  methodologies: string[];
  category: 'Machine Learning' | 'NLP' | 'Data Analysis';
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
  liveUrl: string;
  docsPath: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Customer Churn Prediction Pipeline',
    description: 'Built an end-to-end churn prediction workflow using supervised learning, feature engineering, and model comparison. The project focuses on clear business interpretation and actionable retention insights rather than only model score optimization.',
    problemStatement: 'Retention teams lacked a reliable way to prioritize at-risk customers early enough for intervention.',
    outcomeSummary: 'Delivered a risk-scoring workflow with interpretable outputs that can guide retention campaigns and follow-up planning.',
    impactMetrics: ['AUC-focused model comparison', 'Risk-tier segmentation output', 'Reusable training + inference workflow'],
    methodologies: ['Logistic Regression', 'Random Forest', 'Feature Engineering', 'Model Evaluation'],
    category: 'Machine Learning',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint ?? '',
    githubUrl: 'https://github.com/your-username/customer-churn-pipeline',
    liveUrl: 'https://your-demo-url.com/churn-pipeline',
    docsPath: '/projects/1',
  },
  {
    id: 2,
    title: 'Social Sentiment Intelligence Dashboard',
    description: 'Created an NLP workflow to classify sentiment from social text and visualize trends in an interactive dashboard. The project demonstrates text preprocessing, vectorization, model experimentation, and practical reporting for brand monitoring use cases.',
    problemStatement: 'Teams needed a quick way to track sentiment trends from high-volume unstructured social text.',
    outcomeSummary: 'Built a sentiment pipeline plus dashboard-ready outputs to surface trend shifts and category-level signals.',
    impactMetrics: ['End-to-end NLP preprocessing', 'Classifier benchmarking workflow', 'Dashboard-friendly sentiment summaries'],
    methodologies: ['NLP', 'Text Preprocessing', 'Classification', 'Dashboarding'],
    category: 'NLP',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint ?? '',
    githubUrl: 'https://github.com/your-username/sentiment-intelligence-dashboard',
    liveUrl: 'https://your-demo-url.com/sentiment-dashboard',
    docsPath: '/projects/2',
  },
  {
    id: 3,
    title: 'Retail Sales Forecasting Studio',
    description: 'Designed a time-series forecasting project to estimate near-term sales trends and support inventory planning decisions. Includes baseline comparisons, error analysis, and visualization for non-technical stakeholders.',
    problemStatement: 'Planning teams required better short-term demand estimates to reduce stock mismatches.',
    outcomeSummary: 'Produced a forecasting workflow with baseline comparison and business-readable scenario outputs for planning decisions.',
    impactMetrics: ['Time-series baseline benchmarking', 'Error-analysis-led model selection', 'Scenario views for stakeholders'],
    methodologies: ['Time Series Analysis', 'ARIMA', 'Feature-based Forecasting', 'Python'],
    category: 'Data Analysis',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint ?? '',
    githubUrl: 'https://github.com/your-username/retail-sales-forecasting',
    liveUrl: 'https://your-demo-url.com/sales-forecasting',
    docsPath: '/projects/3',
  },
];

export type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner';

export interface SkillCategory {
  name: string;
  level: SkillLevel;
  icon: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    level: 'Intermediate',
    icon: 'Code',
    description:
      'Builds maintainable Python and TypeScript solutions for data workflows, dashboards, and portfolio-grade applications.',
  },
  {
    name: 'Databases',
    level: 'Intermediate',
    icon: 'Database',
    description:
      'Comfortable with SQL fundamentals, schema design, and querying structured datasets for analytics use cases.',
  },
  {
    name: 'Cloud',
    level: 'Beginner',
    icon: 'Cloud',
    description:
      'Exploring deployment workflows and managed services for hosting ML demos and data apps.',
  },
  {
    name: 'Machine Learning',
    level: 'Intermediate',
    icon: 'BrainCircuit',
    description:
      'Builds supervised learning pipelines with robust preprocessing, feature engineering, and evaluation practices.',
  },
  {
    name: 'AI',
    level: 'Intermediate',
    icon: 'Bot',
    description:
      'Applies practical AI/NLP patterns in project prototypes, focusing on explainability and usability.',
  },
];

export const tools: string[] = [
    'Python', 'R', 'Java', 'SQL', 'TypeScript',
    'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'TensorFlow', 'PyTorch', 'Tableau', 'Airflow',
    'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
    'MySQL', 'PostgreSQL', 'MongoDB',
    'Generative AI', 'Large Language Models'
];


export interface SoftSkill {
  name: string;
  level: SkillLevel;
  icon: string;
  description: string;
}

export const softSkills: SoftSkill[] = [
  {
    name: 'Communication',
    level: 'Intermediate',
    icon: 'MessageCircle',
    description: 'Explains technical decisions clearly to both technical peers and non-technical stakeholders.',
  },
  {
    name: 'Teamwork',
    level: 'Intermediate',
    icon: 'Users',
    description: 'Collaborates effectively in group projects with shared ownership and structured delivery.',
  },
  {
    name: 'Problem Solving',
    level: 'Intermediate',
    icon: 'Puzzle',
    description: 'Breaks complex problems into practical steps and iterates quickly with measurable outputs.',
  },
  {
    name: 'Leadership',
    level: 'Intermediate',
    icon: 'Crown',
    description: 'Takes initiative in project planning, ownership, and delivery follow-through.',
  },
  {
    name: 'Adaptability',
    level: 'Intermediate',
    icon: 'RefreshCw',
    description: 'Learns new tools quickly and adapts project direction based on feedback and constraints.',
  },
];

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Language {
  name: string;
  level: CEFRLevel;
  icon: string;
  description: string;
}

export const languages: Language[] = [
  {
    name: 'English',
    level: 'B2',
    icon: 'Globe',
    description: 'Professional working proficiency in speaking, reading, and writing.',
  },
  {
    name: 'Hindi',
    level: 'C1',
    icon: 'MessageCircle',
    description: 'Full professional fluency in speaking, reading, and writing.',
  },
  {
    name: 'Gujarati',
    level: 'C1',
    icon: 'MessageSquare',
    description: 'Native or near-native communication in everyday and professional settings.',
  },
];


export const aboutMe = {
  description: "I'm Kaushar Halani, a Computer Science (Data Science) student focused on solving practical business problems with clean analysis, dashboards, and actionable reporting. I enjoy turning raw, messy datasets into structured insights that support better decisions.\n\nMy current career target is Data Analyst, where I can strengthen real-world analytics execution and stakeholder communication. Over time, I'm building toward Data Engineer and Data Scientist roles by deepening my skills in data pipelines, modeling, and production-ready ML workflows.\n\nI'm actively looking for internships and entry-level opportunities where I can contribute with discipline, ownership, and continuous learning.",
  imageUrl: PlaceHolderImages.find(p => p.id === 'about-me')?.imageUrl ?? 'https://picsum.photos/seed/104/400/400',
  imageHint: PlaceHolderImages.find(p => p.id === 'about-me')?.imageHint ?? 'portrait headshot',
};

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Data Science Project Lead (Academic)',
    company: 'St. John College of Engineering and Management',
    period: '2024 - Present',
    description: 'Led end-to-end student project execution from problem framing to final presentation, with emphasis on reproducible workflows and practical model evaluation.',
    responsibilities: [
      'Defined project scope, dataset strategy, and measurable success criteria for ML/NLP assignments.',
      'Implemented data preprocessing, feature engineering, and baseline-to-advanced model comparisons.',
      'Prepared technical documentation and demo walkthroughs for faculty and peers.'
    ],
    achievements: [
      'Delivered multiple portfolio-ready projects with clear methodology and reproducible outputs.',
      'Improved project clarity by standardizing notebooks, metrics tracking, and result reporting.',
      'Built confidence in presenting technical outcomes to mixed audiences.'
    ]
  },
  {
    id: 2,
    role: 'Freelance Data & Automation Contributor',
    company: 'Independent',
    period: '2023 - Present',
    description: 'Worked on small-scope freelance and peer projects focused on data cleaning, exploratory analysis, and dashboard-ready outputs.',
    responsibilities: [
      'Converted raw datasets into analysis-ready formats and reusable feature tables.',
      'Built lightweight scripts for recurring reporting and visualization workflows.',
      'Collaborated with requesters to define practical deliverables and timelines.'
    ],
    achievements: [
      'Delivered cleaner and faster analysis handoffs with better documentation quality.',
      'Improved consistency of outputs using reusable notebooks and templates.',
    ]
  },
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  details: {
    highlights: string[];
    coursework: string[];
  };
}

export const education: Education[] = [
  {
    id: 3,
    degree: 'B.E. in Computer Science Engineering (Data Science)',
    institution: 'St. John College of Engineering and Management',
    period: '2022 - 2027',
    description: 'Pursuing a comprehensive degree focused on the intersection of computer science and data science, covering core engineering principles, advanced algorithms, and practical data analysis techniques.',
    details: {
      highlights: [
        'Currently pursuing degree with a focus on data science specialization (CSE-DS).',
        'Actively participating in coding clubs and data science workshops.'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Database Management Systems',
        'Big Data Analytics',
      ],
    },
  },
];

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/your-linkedin-handle',
  github: 'https://github.com/your-github-handle',
  twitter: 'https://twitter.com/your-twitter-handle',
};

export const profileLinks = [
    {
      category: 'Social Media',
      icon: 'Users',
      links: [
        { name: 'LinkedIn', url: socialLinks.linkedin },
        { name: 'GitHub', url: socialLinks.github },
        { name: 'Twitter', url: 'https://twitter.com' },
      ],
    },
    {
      category: 'Research',
      icon: 'BookUser',
      links: [
        { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=your-id' },
        { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/your-name' },
      ],
    },
    {
      category: 'Coding Profiles',
      icon: 'Code',
      links: [
        { name: 'HackerRank', url: 'https://hackerrank.com' },
        { name: 'LeetCode', url: 'https://leetcode.com' },
      ],
    },
  ];

