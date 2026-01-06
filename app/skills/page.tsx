import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import SkillsSection from '@/components/sections/SkillsSection'

export const metadata: Metadata = {
  title: 'Skills - Biswajit Jena | AI Associate Software Engineer',
  description: 'Explore my technical skills including AI/ML, Python, FastAPI, LangChain, AWS, Docker, and modern web development technologies.',
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <SkillsSection />
    </main>
  )
} 