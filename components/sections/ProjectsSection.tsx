import { FolderOpenIcon, FunnelIcon } from '@heroicons/react/24/outline'
import ProjectCard from '@/components/ui/ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'SupervisoryAgentSolar - Multi-Agent Renewable Energy Analytics Platform',
      description: 'Led development of intelligent agent orchestration system for solar plant performance monitoring. Architected supervisor-agent pattern managing 10+ specialized agents including RulCustomAgent, SyInverterAnalysisAgent, LossFactorAgent, and QnA Agent. Implemented PostgreSQL-based state checkpointing, streaming API with SSE for real-time updates, and multi-tenant AWS Cognito authentication. Integrated Redis caching reducing response times by 75%. Processing 500+ daily queries with 80% system uptime and 70% improvement in data retrieval accuracy.',
      image: true,
      technologies: ['FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'AWS Bedrock', 'AWS Cognito', 'Docker', 'Azure DevOps', 'SSE', 'Multi-Agent Systems'],
      liveUrl: undefined,
      githubUrl: 'https://github.com/Ahrvzihsahst/My_Projects',
      featured: true
    },
    {
      title: 'AutoGraphRagService - Knowledge Graph RAG for Solar Inverter Fault Analysis',
      description: 'Developed end-to-end knowledge graph ingestion and query system for solar inverter fault documentation. Implemented LLM-powered entity extraction using KGGen library for automatic identification of components, faults, and recommendations. Built AWS Neptune graph database with BYOKG-RAG multi-strategy retrieval (Agentic, Path, Graph Query retrievers). Designed fault diagnosis engine with iterative multi-strategy retrieval and S3 integration for bulk uploads. Automated fault knowledge extraction from 50MB+ documentation, reduced manual graph construction effort by 90%.',
      image: true,
      technologies: ['FastAPI', 'AWS Neptune', 'AWS GraphRAG Toolkit', 'KGGen', 'Gremlin', 'S3', 'OpenAI', 'AWS Bedrock', 'Graph Databases', 'Knowledge Graphs'],
      liveUrl: undefined,
      githubUrl: 'https://github.com/Ahrvzihsahst/My_Projects',
      featured: true
    },
    {
      title: 'AI Chatbot for Renewable Energy',
      description: 'Designed domain-specific chatbots handling 500+ wind-energy inquiries at GreenBridge.AI. Implemented using LangChain, LLMs, and integrated with Snowflake for real-time data processing.',
      image: true,
      technologies: ['Python', 'LangChain', 'LLMs', 'Snowflake', 'FastAPI', 'NLQ-to-SQL'],
      liveUrl: undefined,
      githubUrl: 'https://github.com/Ahrvzihsahst/My_Projects',
      featured: false
    },
    {
      title: 'FastAPI Data Pipeline Automation',
      description: 'Built RESTful FastAPI MVC services for automating wind-failure and solar-performance monitoring. Implemented MultiAgent orchestration and GraphRAG for 70% accuracy improvement.',
      image: true,
      technologies: ['FastAPI', 'Python', 'GraphRAG', 'MultiAgent', 'Docker', 'AWS EC2'],
      liveUrl: undefined,
      githubUrl: 'https://github.com/Ahrvzihsahst/My_Projects',
      featured: false
    },
    {
      title: 'ML Model Containerization',
      description: 'Containerized machine learning models using Docker and deployed on AWS EC2. Achieved 95% model accuracy with scikit-learn and TensorFlow, featuring automated CI/CD pipelines.',
      image: true,
      technologies: ['Docker', 'AWS EC2', 'scikit-learn', 'TensorFlow', 'CI/CD', 'Flask'],
      liveUrl: undefined,
      githubUrl: 'https://github.com/Ahrvzihsahst/My_Projects',
      featured: false
    },
    {
      title: 'Azure Functions Data Validation',
      description: 'Implemented Python-based Azure Functions for data quality validation, catching and resolving 98% of anomalies before downstream consumption. Enhanced data reliability and processing efficiency.',
      image: true,
      technologies: ['Azure Functions', 'Python', 'Data Validation', 'Quality Assurance', 'ETL'],
      liveUrl: undefined,
      githubUrl: 'https://github.com/Ahrvzihsahst/My_Projects',
      featured: false
    }
  ]

  const categories = ['All', 'AI/ML', 'Web Development', 'Data Science', 'Cloud']

  return (
    <div className="min-h-screen bg-bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Page Title */}
          <div className="font-mono text-lg text-accent-pink mb-4">
            <span>&lt;</span>
            <span>projects</span>
            <span>&gt;</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold font-mono text-white mb-6 leading-tight">
            Featured Projects
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-accent-green mb-8 leading-tight">
            & Technical{' '}
            <span className="text-white">Implementations</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-text-gray font-mono text-lg max-w-3xl mx-auto">
            // Showcasing AI-powered solutions, machine learning models, and scalable applications
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4 bg-card-dark border border-text-gray/20 rounded-2xl p-2">
            <FunnelIcon className="w-5 h-5 text-accent-green ml-4" />
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                  index === 0 
                    ? 'bg-accent-green text-black' 
                    : 'text-text-gray hover:text-white hover:bg-text-gray/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-white mb-8 flex items-center">
            <FolderOpenIcon className="w-6 h-6 text-accent-green mr-3" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image ? 'placeholder' : undefined}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-mono font-bold text-white mb-8">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image ? 'placeholder' : undefined}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={project.featured}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-card-dark border border-text-gray/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-4">
            Want to see more of my work?
          </h3>
          <p className="text-text-gray font-mono text-lg mb-8 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects and contributions. 
            I'm always working on something new and exciting!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Ahrvzihsahst/My_Projects" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent-green text-black px-8 py-4 rounded-lg font-mono font-bold hover:bg-opacity-80 transition-all duration-200 flex items-center justify-center"
            >
              View GitHub Profile
            </a>
            <a 
              href="#contact" 
              className="border border-accent-green text-accent-green px-8 py-4 rounded-lg font-mono font-bold hover:bg-accent-green hover:text-black transition-all duration-200"
            >
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Closing Tag */}
        <div className="text-center mt-16">
          <div className="font-mono text-lg text-accent-pink">
            <span>&lt;/</span>
            <span>projects</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  )
} 