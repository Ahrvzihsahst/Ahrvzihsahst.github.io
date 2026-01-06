import { Certification } from '@/types'

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: '2024',
    credential: 'GADA-2024',
    description: 'Comprehensive professional certificate covering advanced data analytics, statistical analysis, predictive modeling, and data visualization using Python and industry-standard tools.',
    skills: ['Data Analytics', 'Python', 'Statistical Analysis', 'Predictive Modeling', 'Data Visualization', 'Machine Learning'],
    image: '/certifications/google-analytics.jpg',
    status: 'completed',
    verificationUrl: 'https://www.coursera.org/professional-certificates/google-advanced-data-analytics'
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & deeplearning.ai',
    date: '2023',
    credential: 'ML-SPEC-2023',
    description: 'Comprehensive specialization covering supervised learning, unsupervised learning, neural networks, and best practices for building ML systems taught by Andrew Ng.',
    skills: ['Machine Learning', 'Neural Networks', 'Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'TensorFlow'],
    image: '/certifications/ml-specialization.jpg',
    status: 'completed',
    verificationUrl: 'https://www.coursera.org/specializations/machine-learning-introduction'
  },
  {
    id: 3,
    title: 'Data Science & AI Professional Certificate',
    issuer: 'IBM (Coursera)',
    date: '2023',
    credential: 'DSAI-2023',
    description: 'Professional certificate covering data science methodologies, AI fundamentals, machine learning algorithms, and practical applications in Python.',
    skills: ['Data Science', 'AI', 'Python', 'Machine Learning', 'Data Analysis', 'SQL', 'Pandas', 'NumPy'],
    image: '/certifications/ibm-ai.jpg',
    status: 'completed',
    verificationUrl: 'https://www.coursera.org/professional-certificates/ibm-data-science'
  },
  {
    id: 4,
    title: 'Python Nano Degree',
    issuer: 'Udacity',
    date: '2023',
    credential: 'PY-ND-2023',
    description: 'Comprehensive nanodegree program covering advanced Python programming, data structures, algorithms, and building production-ready applications.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Testing', 'Software Development'],
    image: '/certifications/python-nano.jpg',
    status: 'completed',
    verificationUrl: 'https://www.udacity.com/course/programming-for-data-science-nanodegree--nd104'
  },
  {
    id: 5,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: '2023',
    credential: 'GDA-2023',
    description: 'Professional certificate covering data cleaning, analysis, and visualization using spreadsheets, SQL, R programming, and Tableau for data-driven decision making.',
    skills: ['Data Analytics', 'SQL', 'Data Visualization', 'Tableau', 'R Programming', 'Data Cleaning', 'Business Intelligence'],
    image: '/certifications/google-data.jpg',
    status: 'completed',
    verificationUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics'
  }
] 