import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between">
      {/* Logo/Brand */}
      <div className="flex items-center space-x-2">
        <CodeBracketIcon className="w-6 h-6 text-accent-green" />
        <span className="text-xl font-bold font-mono">Biswajit.Dev</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-6">
        <a href="/" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          About Me
        </a>
        <a href="/services" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Services
        </a>
        <a href="/skills" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Skills
        </a>
        <a href="/projects" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Projects
        </a>
        <a href="/experience" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Experience
        </a>
        <a href="/blog" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Blog
        </a>
        <a href="#publications" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Publications
        </a>
        <a href="/certifications" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Certifications
        </a>
        <a href="/contact" className="text-text-gray hover:text-white transition-colors duration-200 text-sm">
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://github.com/Ahrvzihsahst/My_Projects" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-green transition-colors duration-200">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/biswajit-jena" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-green transition-colors duration-200">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-white hover:text-accent-green transition-colors duration-200">
          <FaTwitter className="w-5 h-5" />
        </a>
        <a href="#" className="text-white hover:text-accent-green transition-colors duration-200">
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>
    </nav>
  )
} 