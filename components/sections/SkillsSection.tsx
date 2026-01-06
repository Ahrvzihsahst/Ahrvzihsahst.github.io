import { SparklesIcon, CloudIcon, CircleStackIcon, CommandLineIcon, WrenchScrewdriverIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import {
  SiPython,
  SiFastapi,
  SiAmazon,
  SiDocker,
  SiReact,
  SiTensorflow,
  SiPostgresql,
  SiNodedotjs,
  SiGit,
  SiLangchain,
  SiMongodb
} from 'react-icons/si'
import SkillIcon from '@/components/ui/SkillIcon'
import SkillCategory from '@/components/ui/SkillCategory'

export default function SkillsSection() {
  // Technology icons with your actual skills
  const technologies = [
    {
      name: 'Python',
      color: '#3776AB',
      icon: <SiPython className="w-full h-full" />
    },
    {
      name: 'FastAPI',
      color: '#009688',
      icon: <SiFastapi className="w-full h-full" />
    },
    {
      name: 'AWS',
      color: '#FF9900',
      icon: <SiAmazon className="w-full h-full" />
    },
    {
      name: 'Docker',
      color: '#2496ED',
      icon: <SiDocker className="w-full h-full" />
    },
    {
      name: 'React',
      color: '#61DAFB',
      icon: <SiReact className="w-full h-full" />
    },
    {
      name: 'TensorFlow',
      color: '#FF6F00',
      icon: <SiTensorflow className="w-full h-full" />
    },
    {
      name: 'PostgreSQL',
      color: '#336791',
      icon: <SiPostgresql className="w-full h-full" />
    },
    {
      name: 'Node.js',
      color: '#339933',
      icon: <SiNodedotjs className="w-full h-full" />
    },
    {
      name: 'Git',
      color: '#F05032',
      icon: <SiGit className="w-full h-full" />
    },
    {
      name: 'LangChain',
      color: '#1C3C3C',
      icon: <SiLangchain className="w-full h-full" />
    },
    {
      name: 'Azure',
      color: '#0078D4',
      icon: <CloudIcon className="w-full h-full" />
    },
    {
      name: 'MongoDB',
      color: '#47A248',
      icon: <SiMongodb className="w-full h-full" />
    }
  ]

  // Skill categories based on your resume
  const skillCategories = [
    {
      title: '• AI/ML & LLM',
      skills: ['LangChain', 'LangGraph (state machines, checkpointing)', 'Multi-agent orchestration', 'Prompt engineering', 'Dynamic LLM routing', 'GraphRAG', 'Knowledge Graph extraction (KGGen)', 'AWS GraphRAG Toolkit (BYOKG-RAG)', 'Entity linking', 'Agentic retrieval', 'Multi-hop reasoning', 'Triplet extraction', 'OpenAI GPT-4', 'AWS Bedrock (Claude)', 'Langfuse observability', 'TensorFlow', 'scikit-learn', 'Hugging Face'],
      icon: <SparklesIcon className="w-5 h-5" />
    },
    {
      title: '• Backend & APIs',
      skills: ['FastAPI (async/await, streaming SSE)', 'PostgreSQL (async psycopg)', 'Redis caching', 'RESTful API design', 'Multi-tenant architecture', 'Connection pooling (urllib3)', 'MVC Architecture', 'Human-in-the-loop patterns', 'Event-driven architecture (SSE)'],
      icon: <CommandLineIcon className="w-5 h-5" />
    },
    {
      title: '• State Management & Databases',
      skills: ['PostgreSQL (sync & async)', 'State persistence & checkpointing', 'Redis caching strategies', 'Conversation memory management', 'AWS Neptune (graph database)', 'Gremlin queries', 'Graph traversal', 'Knowledge Graph construction', 'Entity-relationship mapping', 'Snowflake', 'SQL'],
      icon: <CircleStackIcon className="w-5 h-5" />
    },
    {
      title: '• Cloud & Infrastructure',
      skills: ['AWS EC2', 'AWS Cognito', 'AWS Bedrock', 'AWS Neptune', 'S3 bulk loading', 'Azure Functions', 'Azure DevOps', 'CI/CD pipelines', 'Docker containerization', 'Zero-downtime deployments', 'boto3 SDK', 'Gremlin Python client'],
      icon: <CloudIcon className="w-5 h-5" />
    },
    {
      title: '• Architecture & Design Patterns',
      skills: ['Singleton pattern', 'Supervisor orchestration pattern', 'GraphRAG architecture', 'REST APIs', 'Microservices', 'Multi-tenant SaaS', 'Streaming APIs'],
      icon: <PaintBrushIcon className="w-5 h-5" />
    },
    {
      title: '• Programming & Tools',
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'Git', 'Azure DevOps', 'Llama models', 'Web Scraping', 'OCR', 'Pandas', 'NumPy', 'Data pipeline automation'],
      icon: <WrenchScrewdriverIcon className="w-5 h-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="font-mono text-lg text-accent-green mb-4">
            • Skills
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-mono text-white leading-tight">
            My Skills
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Technology Icons */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              {technologies.map((tech, index) => (
                <SkillIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
              />
            ))}
          </div>
        </div>

        {/* Brand Section */}
        <div className="text-center mt-20">
          <div className="font-mono text-2xl">
            <span className="text-accent-green">&lt;</span>
            <span className="text-accent-green">/</span>
            <span className="text-accent-green">&gt;</span>
            <span className="text-accent-green ml-2">Biswajit.Dev</span>
          </div>
        </div>
      </div>
    </div>
  )
} 