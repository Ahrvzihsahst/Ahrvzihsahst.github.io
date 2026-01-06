/**
 * Core type definitions for the portfolio application
 */

// Blog related types
export interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  readTime: string
}

// Certification related types
export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  credential: string
  description: string
  skills: string[]
  image: string
  status: 'completed' | 'in-progress' | 'planned'
  verificationUrl?: string
}

// Experience related types
export interface ExperienceData {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: 'work' | 'internship'
  achievements: string[]
  technologies: string[]
  logo: React.ReactNode
}

// Project related types
export interface Project {
  title: string
  description: string
  image?: boolean | string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

// Service related types
export interface Service {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
}
