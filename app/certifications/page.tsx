import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import CertificationsSection from '@/components/sections/CertificationsSection'

export const metadata: Metadata = {
  title: 'Certifications - Biswajit Jena | Professional AI & ML Credentials',
  description: 'Professional certifications in AI, machine learning, cloud computing, and software engineering. AWS, Azure, LangChain, TensorFlow, and more.',
  keywords: ['Certifications', 'AWS', 'Azure', 'LangChain', 'TensorFlow', 'Docker', 'FastAPI', 'AI Certifications', 'ML Certifications'],
}

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <CertificationsSection />
    </main>
  )
} 