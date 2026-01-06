'use client'

import { motion } from 'framer-motion'
import { BookOpenIcon, RssIcon } from '@heroicons/react/24/outline'
import BlogCard from '@/components/ui/BlogCard'
import { blogPosts } from '@/lib/data/blogPosts'

export default function BlogSection() {
  return (
    <div className="min-h-screen bg-bg-dark py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-lg text-accent-green mb-4 flex items-center justify-center space-x-2"
          >
            <BookOpenIcon className="w-5 h-5" />
            <span>• Blog</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-mono text-white leading-tight mb-6"
          >
            AI & ML Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-gray font-mono text-lg max-w-3xl mx-auto"
          >
            Exploring the latest in artificial intelligence, machine learning, and software engineering. 
            Sharing insights from building AI systems in production.
          </motion.p>
        </div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center space-x-8 mb-12"
        >
          <div className="text-center">
            <div className="text-2xl font-bold font-mono text-accent-green">{blogPosts.length}</div>
            <div className="text-sm text-text-gray font-mono">Articles</div>
          </div>
          <div className="w-px h-8 bg-text-gray/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold font-mono text-accent-green">4</div>
            <div className="text-sm text-text-gray font-mono">Topics</div>
          </div>
          <div className="w-px h-8 bg-text-gray/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold font-mono text-accent-green">31</div>
            <div className="text-sm text-text-gray font-mono">Min Read</div>
          </div>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-accent-green font-mono font-semibold">Featured Article</span>
          </div>
          <div className="grid lg:grid-cols-1 gap-8">
            <BlogCard post={blogPosts[0]} index={0} />
          </div>
        </motion.div>

        {/* All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-accent-green font-mono font-semibold">All Articles</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + 1} />
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center bg-card-dark border border-text-gray/20 rounded-lg p-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <RssIcon className="w-6 h-6 text-accent-green" />
            <h3 className="text-2xl font-bold font-mono text-white">Stay Updated</h3>
          </div>
          <p className="text-text-gray font-mono mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about AI, machine learning, and software engineering.
            No spam, just quality content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@domain.com"
              className="w-full px-4 py-2 bg-bg-dark border border-text-gray/20 rounded-md text-white font-mono focus:border-accent-green focus:outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-2 bg-accent-green text-bg-dark font-mono font-semibold rounded-md hover:bg-accent-green/80 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Brand Section */}
        <div className="text-center mt-20">
          <div className="font-mono text-2xl">
            <span className="text-accent-green">&lt;</span>
            <span className="text-accent-green">/</span>
            <span className="text-accent-green">&gt;</span>
            <span className="text-accent-green ml-2">Biswajit.Dev</span>
          </div>
        </div>
      </div>
    </div>
  )
} 