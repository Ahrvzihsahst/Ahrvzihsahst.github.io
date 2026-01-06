import {
  GlobeAltIcon,
  CircleStackIcon,
  CodeBracketIcon,
  BoltIcon,
  ShoppingCartIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import ServiceCard from '@/components/ui/ServiceCard'

export default function ServicesSection() {
  const services = [
    {
      icon: <GlobeAltIcon className="w-full h-full" />,
      title: "Web & App Development",
      description: "Full-stack web applications and mobile apps using modern frameworks like React, Next.js, and Flutter. Focus on responsive design and optimal user experience."
    },
    {
      icon: <CircleStackIcon className="w-full h-full" />,
      title: "Database Management",
      description: "Design and optimize database systems including SQL and NoSQL solutions. Data modeling, performance tuning, and backup strategies for scalable applications."
    },
    {
      icon: <CodeBracketIcon className="w-full h-full" />,
      title: "API Development",
      description: "RESTful APIs and microservices using FastAPI, Node.js, and Python. Secure, well-documented APIs with proper authentication and rate limiting."
    },
    {
      icon: <BoltIcon className="w-full h-full" />,
      title: "Performance Optimization",
      description: "Application performance tuning, code optimization, and infrastructure scaling. Reducing load times and improving system efficiency for better user experience."
    },
    {
      icon: <ShoppingCartIcon className="w-full h-full" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics. Custom solutions tailored to business requirements."
    },
    {
      icon: <SparklesIcon className="w-full h-full" />,
      title: "Integrating AI",
      description: "AI-powered solutions using LLMs, LangChain, and machine learning models. Chatbots, recommendation systems, and intelligent automation for business processes."
    }
  ]

  return (
    <div className="min-h-screen bg-bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Page Title */}
          <div className="font-mono text-lg text-accent-pink mb-4">
            <span>&lt;</span>
            <span>services</span>
            <span>&gt;</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold font-mono text-white mb-6 leading-tight">
            Designing Solutions
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-accent-green mb-8 leading-tight">
            Customized to Meet Your{' '}
            <span className="text-white">Requirements</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-text-gray font-mono text-lg max-w-3xl mx-auto">
            // Leveraging cutting-edge technologies to deliver scalable, efficient, and innovative solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-card-dark border border-text-gray/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-text-gray font-mono text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. 
            I'm here to turn your vision into reality with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-accent-green text-black px-8 py-4 rounded-lg font-mono font-bold hover:bg-opacity-80 transition-all duration-200 flex items-center justify-center group"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a 
              href="#projects" 
              className="border border-accent-green text-accent-green px-8 py-4 rounded-lg font-mono font-bold hover:bg-accent-green hover:text-black transition-all duration-200"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Closing Tag */}
        <div className="text-center mt-16">
          <div className="font-mono text-lg text-accent-pink">
            <span>&lt;/</span>
            <span>services</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  )
} 