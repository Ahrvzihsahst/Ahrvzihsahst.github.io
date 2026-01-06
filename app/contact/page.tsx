import type { Metadata} from 'next'
import Navbar from '@/components/layout/Navbar'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact - Biswajit Jena | Get in Touch for AI & ML Projects',
  description: 'Ready to collaborate on AI projects? Contact Biswajit Jena for machine learning, LLM applications, and software development opportunities.',
  keywords: ['Contact', 'AI Developer', 'Machine Learning Engineer', 'LLM Applications', 'Software Development', 'Collaboration', 'Freelance'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <ContactSection />
    </main>
  )
} 