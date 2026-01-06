'use client'
import { useState } from 'react'
import { CalendarIcon, MapPinIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { FaLeaf, FaFlask } from 'react-icons/fa'
import ExperienceCard from '@/components/ui/ExperienceCard'
import TechTag from '@/components/ui/TechTag'
import { ExperienceData } from '@/types'

export default function ExperienceSection() {
  const experiences: ExperienceData[] = [
    {
      id: 'greenbridge-ai',
      company: 'GreenBridge.AI',
      role: 'AI Associate Software Engineer',
      period: 'July 2024 - Present',
      location: 'Hyderabad, India',
      type: 'work',
      achievements: [
        'Architected multi-agent orchestration system using LangGraph state machines with PostgreSQL checkpointing, managing 10+ specialized agents (RUL analysis, Specific Yield, Loss Factor, QnA) for renewable energy performance analytics',
        'Built GraphRAG-powered knowledge graph system for solar inverter fault analysis, automating entity extraction from unstructured documentation using KGGen library and AWS Neptune for graph storage with BYOKG-RAG multi-strategy retrieval',
        'Implemented streaming REST APIs with Server-Sent Events (SSE) delivering real-time progress updates, reducing user wait time perception by 60% and enabling human-in-the-loop interrupts for dynamic data collection',
        'Built multi-tenant SaaS architecture with AWS Cognito authentication, supporting tenant isolation and both user + M2M token flows, serving 500+ daily requests across multiple facilities',
        'Optimized system performance with Redis caching layer and urllib3 connection pooling, achieving 70% cache hit rate and reducing API response times from 8s to 2s',
        'Developed async Python backend using FastAPI with full async/await patterns, PostgreSQL async operations (psycopg), and dynamic LLM routing (OpenAI/AWS Bedrock) for cost optimization',
        'Engineered conversation memory management with 25-message cap and state persistence, enabling context-aware multi-turn interactions while preventing memory bloat',
        'Integrated Langfuse observability for LLM tracing and monitoring, tracking 1000+ agent executions daily with detailed performance metrics',
        'Implemented Docker containerization with Azure DevOps CI/CD pipelines, achieving 80% uptime, zero-downtime deployments to AWS EC2, and automated rollback mechanisms',
        'Designed custom exception handling framework and standardized error responses across 12+ agents, improving debugging efficiency by 40%'
      ],
      technologies: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'AWS Cognito', 'AWS Neptune', 'AWS Bedrock', 'Docker', 'Azure DevOps', 'KGGen', 'Langfuse', 'SSE', 'GraphRAG'],
      logo: <FaLeaf className="w-full h-full" />
    },
    {
      id: 'greenbridge-intern',
      company: 'GreenBridge.AI',
      role: 'AI Engineer Intern',
      period: 'April 2024 - July 2024',
      location: 'Hyderabad, India',
      type: 'internship',
      achievements: [
        'Designed domain-specific chatbots handling 500+ wind-energy inquiries, reducing response times by 40%',
        'Extended chatbot capabilities with Llama 3.1 for NLQ-to-SQL translation against a Snowflake backend',
        'Implemented Python-based Azure Functions to validate data quality rules, catching and resolving 98% of anomalies before downstream consumption',
        'Developed comprehensive testing frameworks for AI model validation and performance monitoring'
      ],
      technologies: ['Python', 'LLM', 'Web Scraping', 'OCR', 'Snowflake', 'Azure Functions', 'AWS Bedrock', 'Llama models'],
      logo: <FaLeaf className="w-full h-full" />
    },
    {
      id: 'nareshit',
      company: 'NareshIt',
      role: 'Data Science Intern',
      period: 'January 2024 - April 2024',
      location: 'Hyderabad, India',
      type: 'internship',
      achievements: [
        'Automated Python data cleaning with pandas, NumPy, and SQL to process 1M+ records, reducing processing time by 30%',
        'Built and containerized ML models using scikit-learn and TensorFlow achieving 95% accuracy',
        'Developed Flask-based UI using JavaScript, HTML, and CSS; deployed and hosted on AWS EC2',
        'Implemented comprehensive data analysis workflows and visualization dashboards'
      ],
      technologies: ['Python', 'AWS', 'Flask', 'Machine Learning', 'Data Analysis', 'Hugging Face', 'pandas', 'NumPy', 'SQL'],
      logo: <FaFlask className="w-full h-full" />
    }
  ]

  const education = [
    {
      period: '2018 - 2022',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'PMEC, Ganjam, Odisha',
      type: 'BTech'
    },
    {
      period: '2016 - 2018',
      degree: 'Associate Degree in Science',
      institution: 'Talanagar College, Balasore',
      type: 'Associate'
    },
    {
      period: '2016',
      degree: 'High School (PCM-CS)',
      institution: 'GSREM, Bhubaneswar',
      type: 'High School'
    }
  ]

  const [activeExperience, setActiveExperience] = useState(experiences[0])

  return (
    <div className="min-h-screen bg-bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="font-mono text-lg text-accent-green mb-4">
            • Experience
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-mono text-white mb-6 leading-tight">
            <span className="text-accent-green">3+</span> years of passion{' '}
            <span className="text-text-gray">for</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-text-gray leading-tight">
            programming techniques
          </h2>
        </div>

        {/* Experience Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Company Timeline */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono font-bold text-white mb-6">Work Experience</h3>
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.id}
                company={exp.company}
                period={exp.period}
                logo={exp.logo}
                isActive={activeExperience.id === exp.id}
                onClick={() => setActiveExperience(exp)}
              />
            ))}
          </div>

          {/* Right Column - Job Details */}
          <div className="bg-card-dark border border-text-gray/20 rounded-3xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-mono font-bold text-accent-green mb-2">
                {activeExperience.role}
              </h3>
              <div className="flex items-center space-x-4 text-text-gray font-mono text-sm">
                <div className="flex items-center space-x-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{activeExperience.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{activeExperience.location}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <ul className="space-y-3">
                {activeExperience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-gray font-mono text-sm leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <p className="text-white font-mono text-sm mb-3">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {activeExperience.technologies.map((tech, index) => (
                  <TechTag key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <AcademicCapIcon className="w-6 h-6 text-accent-green" />
            <h3 className="text-2xl font-mono font-bold text-white">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-card-dark border border-text-gray/20 rounded-2xl p-6">
                <div className="mb-4">
                  <div className="text-accent-green font-mono font-bold mb-2">
                    {edu.period}
                  </div>
                  <h4 className="text-white font-mono font-bold mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-text-gray font-mono text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 