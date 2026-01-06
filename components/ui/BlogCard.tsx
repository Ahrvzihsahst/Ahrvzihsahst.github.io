'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'
import { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card-dark border border-text-gray/20 rounded-lg overflow-hidden hover:border-accent-green/50 transition-all duration-300 h-full flex flex-col group"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold font-mono text-white group-hover:text-accent-green transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>
        </div>

        {/* Meta Information */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-text-gray">
          <div className="flex items-center space-x-1">
            <CalendarIcon className="w-4 h-4" />
            <time>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              className="flex items-center space-x-1 bg-accent-green/10 text-accent-green text-xs px-2 py-1 rounded-md font-mono"
            >
              <TagIcon className="w-3 h-3" />
              <span>{tag}</span>
            </div>
          ))}
          {post.tags.length > 3 && (
            <div className="text-xs text-text-gray font-mono px-2 py-1">
              +{post.tags.length - 3} more
            </div>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-text-gray font-mono text-sm leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center space-x-2 text-accent-green hover:text-white transition-colors duration-300 font-mono font-semibold group/link"
        >
          <span>Read Article</span>
          <motion.span
            className="text-lg"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.article>
  )
} 