import { CpuChipIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline'

export default function WhatIDoSection() {
  const specializations = [
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: 'Multi-Agent Orchestration',
      description: 'Architecting supervisor-agent patterns using LangGraph state machines to manage 10+ specialized AI agents for renewable energy analytics. Implementing PostgreSQL-based checkpointing for reliable state management.',
      technologies: ['LangGraph', 'PostgreSQL', 'FastAPI', 'SSE']
    },
    {
      icon: <CircleStackIcon className="w-8 h-8" />,
      title: 'GraphRAG & Knowledge Graphs',
      description: 'Building end-to-end knowledge graph systems with AWS Neptune for solar inverter fault diagnosis. Automating entity extraction using KGGen and implementing multi-strategy retrieval with BYOKG-RAG.',
      technologies: ['AWS Neptune', 'GraphRAG', 'KGGen', 'Gremlin']
    },
    {
      icon: <CloudIcon className="w-8 h-8" />,
      title: 'Production LLM Applications',
      description: 'Developing production-ready multi-tenant SaaS platforms with AWS Cognito authentication, Redis caching, and dynamic LLM routing. Achieving 75% faster response times and 70% improved accuracy.',
      technologies: ['AWS Bedrock', 'Redis', 'OpenAI', 'Langfuse']
    }
  ]

  return (
    <div className="bg-bg-dark py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="font-mono text-lg text-accent-pink mb-4">
            • What I Do
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
            Specializing in{' '}
            <span className="text-accent-green">AI Systems</span>
          </h2>
          <p className="text-text-gray font-mono text-base max-w-3xl mx-auto">
            // Building intelligent multi-agent systems that transform renewable energy operations
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-card-dark border border-text-gray/20 rounded-2xl p-8 hover:border-accent-green/50 transition-all duration-300 group"
            >
              <div className="text-accent-green mb-4 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              <h3 className="text-xl font-bold font-mono text-white mb-4">
                {spec.title}
              </h3>
              <p className="text-text-gray font-mono text-sm leading-relaxed mb-6">
                {spec.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {spec.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent-green/10 border border-accent-green/30 rounded-full text-accent-green font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-12 bg-gradient-to-r from-accent-green/10 via-accent-pink/10 to-accent-orange/10 border border-accent-green/20 rounded-2xl p-8 text-center">
          <p className="text-white font-mono text-lg md:text-xl font-bold mb-2">
            "From automating solar inverter fault diagnosis to orchestrating 10+ AI agents"
          </p>
          <p className="text-text-gray font-mono text-sm">
            // Making AI work for real-world renewable energy challenges at GreenBridge.AI
          </p>
        </div>
      </div>
    </div>
  )
}
