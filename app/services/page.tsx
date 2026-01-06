import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import ServicesSection from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Services - Biswajit Jena | AI Associate Software Engineer',
  description: 'Discover the comprehensive services I offer including AI integration, web development, API development, database management, and performance optimization.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <ServicesSection />
    </main>
  )
} 