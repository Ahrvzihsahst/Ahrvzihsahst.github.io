import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import ExperienceSection from '@/components/sections/ExperienceSection'

export const metadata: Metadata = {
  title: 'Experience - Biswajit Jena | AI Associate Software Engineer',
  description: 'Explore my professional journey as an AI Associate Software Engineer at GreenBridge.AI, including my experience with LLMs, FastAPI, and renewable energy solutions.',
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <ExperienceSection />
    </main>
  )
} 