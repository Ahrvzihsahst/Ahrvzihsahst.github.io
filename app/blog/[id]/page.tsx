'use client'

import { use } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { CalendarIcon, ClockIcon, TagIcon, ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/layout/Navbar'
import { blogPosts } from '@/lib/data/blogPosts'

interface BlogDetailPageProps {
  params: Promise<{ id: string }>
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = use(params)
  const post = blogPosts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <main className="min-h-screen bg-bg-dark">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold font-mono text-white mb-4">
              Article Not Found
            </h1>
            <p className="text-text-gray font-mono mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-accent-green hover:text-white transition-colors duration-300 font-mono font-semibold"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-bg-dark">
      <Navbar />
      <article className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-accent-green hover:text-white transition-colors duration-300 font-mono"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold font-mono text-white mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 mb-6 text-text-gray"
          >
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <time className="font-mono text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4" />
              <span className="font-mono text-sm">{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShareIcon className="w-4 h-4" />
              <span className="font-mono text-sm">Share</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {post.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center space-x-1 bg-accent-green/10 text-accent-green text-sm px-3 py-1 rounded-md font-mono"
              >
                <TagIcon className="w-3 h-3" />
                <span>{tag}</span>
              </div>
            ))}
          </motion.div>
        </header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-green max-w-none"
        >
          <div className="blog-content font-mono text-text-gray leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-white mb-6 mt-8 font-mono">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-mono">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-white mb-3 mt-6 font-mono">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed text-text-gray font-mono">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 ml-6 space-y-2 text-text-gray font-mono">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 ml-6 space-y-2 text-text-gray font-mono list-decimal">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-text-gray font-mono">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-bold">{children}</strong>
                ),
                code: ({ children }) => (
                  <code className="bg-card-dark text-accent-green px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-card-dark border border-text-gray/20 rounded-lg p-4 overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-accent-green pl-4 my-6 text-text-gray italic">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-text-gray/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-text-gray font-mono">
                Written by <span className="text-white font-semibold">Biswajit Jena</span>
              </p>
              <p className="text-text-gray font-mono text-sm">
                AI Associate Software Engineer at GreenBridge.AI
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 bg-accent-green text-bg-dark px-6 py-3 rounded-md hover:bg-accent-green/80 transition-colors duration-300 font-mono font-semibold"
            >
              <span>Read More Articles</span>
            </Link>
          </div>
        </motion.footer>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-mono text-white mb-8">
            Related Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block bg-card-dark border border-text-gray/20 rounded-lg p-6 hover:border-accent-green/50 transition-all duration-300 group"
                >
                  <h4 className="text-lg font-bold font-mono text-white group-hover:text-accent-green transition-colors duration-300 mb-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-text-gray font-mono text-sm mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-gray font-mono">
                    <span>{relatedPost.readTime}</span>
                    <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
          </div>
        </motion.section>
      </article>
    </main>
  )
} 