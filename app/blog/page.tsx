import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import BlogSection from '@/components/sections/BlogSection'

export const metadata: Metadata = {
  title: 'Blog - Biswajit Jena | AI & ML Insights',
  description: 'Read insights about artificial intelligence, machine learning, LLMs, and software engineering from an AI Associate Software Engineer.',
  keywords: ['AI', 'Machine Learning', 'LLM', 'NLP', 'FastAPI', 'LangChain', 'GraphRAG', 'MLOps'],
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <BlogSection />
    </main>
  )
} 