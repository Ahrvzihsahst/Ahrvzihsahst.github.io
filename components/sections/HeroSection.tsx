import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { SiPython, SiFastapi, SiAmazon, SiLangchain, SiDocker, SiTensorflow } from 'react-icons/si'
import TechIcon from '@/components/ui/TechIcon'

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-card-dark rounded-3xl shadow-2xl p-8 md:p-12 max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-96 h-96 clip-polygon overflow-hidden bg-gradient-to-br from-accent-green to-accent-pink">
                <img
                  src="/profile.jpg"
                  alt="Biswajit Jena - AI Associate Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay Icon */}
              <div className="absolute bottom-4 right-4 bg-accent-green rounded-full p-2">
                <CodeBracketIcon className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>

          {/* Hero Text Section */}
          <div className="space-y-6">
            {/* Intro Line */}
            <div className="font-mono text-lg">
              <span className="text-accent-pink">&lt;</span>
              <span className="text-accent-pink">span</span>
              <span className="text-accent-pink">&gt;</span>
              <span className="text-text-gray"> Hey, I'm Biswajit </span>
              <span className="text-accent-pink">&lt;/</span>
              <span className="text-accent-pink">span</span>
              <span className="text-accent-pink">&gt;</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold font-mono leading-tight">
                <span className="text-accent-green">{'{AI Associate}'}</span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold font-mono leading-tight">
                Software Engineer
                <span className="text-accent-green animate-pulse">_</span>
              </h1>
            </div>

            {/* Location & Contact */}
            <div className="text-text-gray font-mono text-sm space-y-1">
              <p>📍 Hyderabad, Telangana, India</p>
              <p>📧 biswajit.jena211@gmail.com</p>
              <p>📱 +91 6371895195</p>
            </div>

            {/* Description */}
            <div className="text-text-gray font-mono text-sm md:text-base leading-relaxed space-y-2">
              <p>
                // AI Associate Software Engineer specializing in multi-agent orchestration systems
              </p>
              <p>
                // Expert in{' '}
                <span className="text-accent-red">LangGraph</span>,{' '}
                <span className="text-accent-orange">GraphRAG</span>,{' '}
                <span className="text-accent-red">FastAPI</span>, and{' '}
                <span className="text-accent-orange">AWS Neptune</span>
              </p>
              <p>
                // Building multi-tenant platforms managing 10+ specialized agents
              </p>
              <p>
                // Serving 500+ daily requests with 80% uptime at GreenBridge.AI
              </p>
              <p>
                // Reduced API response times from 8s to 2s with Redis caching
              </p>
            </div>

            {/* Tech Stack Icons - Grouped by Category */}
            <div className="pt-4">
              <p className="text-text-gray font-mono text-sm mb-4">// Tech Stack:</p>

              {/* AI/ML */}
              <div className="mb-3">
                <p className="text-text-gray font-mono text-xs mb-2">AI/ML:</p>
                <div className="flex items-center space-x-4 flex-wrap gap-y-2">
                  <TechIcon
                    name="LangChain"
                    color="#1C3C3C"
                    icon={<SiLangchain />}
                  />
                  <TechIcon
                    name="TensorFlow"
                    color="#FF6F00"
                    icon={<SiTensorflow />}
                  />
                </div>
              </div>

              {/* Backend */}
              <div className="mb-3">
                <p className="text-text-gray font-mono text-xs mb-2">Backend:</p>
                <div className="flex items-center space-x-4 flex-wrap gap-y-2">
                  <TechIcon
                    name="Python"
                    color="#3776AB"
                    icon={<SiPython />}
                  />
                  <TechIcon
                    name="FastAPI"
                    color="#009688"
                    icon={<SiFastapi />}
                  />
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <p className="text-text-gray font-mono text-xs mb-2">Cloud & DevOps:</p>
                <div className="flex items-center space-x-4 flex-wrap gap-y-2">
                  <TechIcon
                    name="AWS"
                    color="#FF9900"
                    icon={<SiAmazon />}
                  />
                  <TechIcon
                    name="Docker"
                    color="#2496ED"
                    icon={<SiDocker />}
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="https://ahrvzihsahst.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-green text-black px-6 py-3 rounded-lg font-mono font-bold hover:bg-opacity-80 transition-all duration-200 text-center"
              >
                View Portfolio
              </a>
              <a
                href="/contact"
                className="border border-accent-green text-accent-green px-6 py-3 rounded-lg font-mono font-bold hover:bg-accent-green hover:text-black transition-all duration-200 text-center"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-accent-pink text-accent-pink px-6 py-3 rounded-lg font-mono font-bold hover:bg-accent-pink hover:text-black transition-all duration-200 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-green via-accent-pink to-accent-orange"></div>
    </div>
  )
} 