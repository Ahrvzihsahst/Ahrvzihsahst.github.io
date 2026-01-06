import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import ProjectsSection from '@/components/sections/ProjectsSection'

export const metadata: Metadata = {
  title: 'Projects - Biswajit Jena | AI Associate Software Engineer',
  description: 'Explore my featured projects including AI-powered solutions, machine learning models, real-time computer vision systems, and data analytics applications.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <ProjectsSection />
    </main>
  )
} 