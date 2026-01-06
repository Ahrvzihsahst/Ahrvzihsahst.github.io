import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { FaGithub } from 'react-icons/fa'
import TechTag from './TechTag'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl, 
  featured = false 
}: ProjectCardProps) {
  return (
    <div className={`bg-card-dark border rounded-2xl overflow-hidden hover:border-accent-green/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent-green/10 ${
      featured ? 'border-accent-green/30' : 'border-text-gray/20'
    }`}>
      {/* Project Image */}
      {image && (
        <div className="h-48 bg-gradient-to-br from-accent-green/20 to-accent-pink/20 flex items-center justify-center">
          <div className="text-accent-green text-4xl font-mono">
            {title.split(' ')[0]}
          </div>
        </div>
      )}
      
      {/* Project Content */}
      <div className="p-6">
        {/* Title & Links */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold font-mono text-white group-hover:text-accent-green transition-colors duration-300">
            {title}
          </h3>
          <div className="flex space-x-2 ml-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray hover:text-accent-green transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-gray hover:text-accent-green transition-colors duration-200"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-gray font-mono text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechTag key={index} tech={tech} color="#ff6b9d" />
          ))}
        </div>
      </div>
    </div>
  )
} 