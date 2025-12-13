
import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Project {
  id: number;
  title: string;
  description: string;
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
    title: 'Predictive Customer Churn Model',
    description: 'Developed a machine learning model to predict customer churn with 95% accuracy, enabling proactive retention strategies. This project involved extensive data cleaning, feature engineering, and model tuning.',
    methodologies: ['Logistic Regression', 'Random Forest', 'Data Visualization'],
    category: 'Machine Learning',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint ?? '',
    githubUrl: 'https://github.com/user/customer-churn-model',
    liveUrl: 'https://live-demo.example.com/churn-model',
    docsPath: '/projects/1',
  },
  {
    id: 2,
    title: 'Sentiment Analysis of Social Media',
    description: 'Built an NLP pipeline to analyze real-time social media data for brand sentiment tracking. The system processes thousands of posts per minute and provides a live dashboard of public opinion.',
    methodologies: ['NLP', 'Deep Learning', 'Tableau'],
    category: 'NLP',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint ?? '',
    githubUrl: 'https://github.com/user/sentiment-analysis',
    liveUrl: 'https://live-demo.example.com/sentiment-analysis',
    docsPath: '/projects/2',
  },
  {
    id: 3,
    title: 'Sales Forecasting Engine',
    description: 'Created a time-series forecasting model to predict product sales for the next quarter, improving inventory management and reducing stockouts by 20%.',
    methodologies: ['Time Series Analysis', 'ARIMA', 'Python'],
    category: 'Data Analysis',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint ?? '',
    githubUrl: 'https://github.com/user/sales-forecasting',
    liveUrl: 'https://live-demo.example.com/sales-forecasting',
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
    level: 'Beginner',
    icon: 'Code',
    description:
      'Learning to write clean, efficient code for data analysis and building projects.',
  },
  {
    name: 'Databases',
    level: 'Beginner',
    icon: 'Database',
    description:
      'Gaining experience with SQL and NoSQL database fundamentals and queries.',
  },
  {
    name: 'Cloud',
    level: 'Beginner',
    icon: 'Cloud',
    description:
      'Exploring cloud platforms and learning to deploy basic data infrastructure.',
  },
  {
    name: 'Machine Learning',
    level: 'Beginner',
    icon: 'BrainCircuit',
    description:
      'Studying machine learning algorithms and building foundational predictive models.',
  },
  {
    name: 'AI',
    level: 'Beginner',
    icon: 'Bot',
    description:
      'Learning AI concepts and exploring how to integrate AI-powered features.',
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
    level: 'Beginner',
    icon: 'MessageCircle',
    description: 'Learning to express technical ideas clearly to different audiences.',
  },
  {
    name: 'Teamwork',
    level: 'Beginner',
    icon: 'Users',
    description: 'Collaborating with peers on group projects and working toward shared goals.',
  },
  {
    name: 'Problem Solving',
    level: 'Beginner',
    icon: 'Lightbulb',
    description: 'Developing analytical thinking to break down problems and find solutions.',
  },
  {
    name: 'Leadership',
    level: 'Beginner',
    icon: 'Crown',
    description: 'Building leadership skills through team projects and taking initiative.',
  },
  {
    name: 'Adaptability',
    level: 'Beginner',
icon: 'GitBranch',
    description: 'Learning new technologies and adapting to different project requirements.',
  },
];


export const aboutMe = {
  description: "I'm Kaushar Halani, a data science enthusiast driven by the belief that data can transform decision-making and create better outcomes for the future. Every dataset tells a story, and I'm passionate about uncovering those insights.\n\nAs a Computer Science (Data Science) student at St. John College of Engineering and Management, I'm developing expertise in Python, machine learning, and data analytics. My goal is to build solutions that turn complex data into actionable insights for real-world challenges.\n\nI believe in continuous growth, both technically and personally—striving to become a better version of myself each day while maintaining integrity and kindness in everything I do.",
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
    role: 'Senior Data Scientist',
    company: 'Innovate Corp',
    period: '2020 - Present',
    description: 'Leading the development of AI-powered products. Responsible for mentoring junior scientists and driving the technical roadmap for the machine learning team.',
    responsibilities: [
      'Led a team of 5 data scientists in developing and deploying machine learning models.',
      'Designed and implemented data pipelines for real-time analytics.',
      'Collaborated with product managers to define project requirements.'
    ],
    achievements: [
      'Improved model accuracy by 15% through advanced feature engineering.',
      'Reduced data processing time by 40% by optimizing ETL jobs.',
      'Published 2 papers in top-tier data science conferences.'
    ]
  },
  {
    id: 2,
    role: 'Data Scientist',
    company: 'Data Insights Inc.',
    period: '2017 - 2020',
    description: 'Designed and implemented machine learning models for various clients in the retail and finance sectors. Specialized in customer segmentation and recommendation systems.',
    responsibilities: [
      'Developed customer segmentation models using clustering algorithms.',
      'Built and deployed recommendation engines for e-commerce clients.',
      'Performed A/B testing to evaluate model performance.'
    ],
    achievements: [
      'Increased customer engagement by 25% with personalized recommendations.',
      'Contributed to a 10% increase in revenue for a key retail client.',
    ]
  },
  {
    id: 3,
    role: 'Junior Data Analyst',
    company: 'Analytics Solutions',
    period: '2015 - 2017',
    description: 'Performed data analysis and created reports to support business decisions. Developed dashboards to visualize key performance indicators.',
    responsibilities: [
      'Cleaned and preprocessed large datasets.',
      'Created and maintained dashboards using Tableau.',
      'Assisted senior data scientists with ad-hoc analysis.'
    ],
    achievements: [
      'Automated a reporting process, saving 10 hours of manual work per week.',
      'Identified a key trend that led to a new marketing strategy.'
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
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
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
        { name: 'Google Scholar', url: 'https://scholar.google.com' },
        { name: 'ResearchGate', url: 'https://researchgate.net' },
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

