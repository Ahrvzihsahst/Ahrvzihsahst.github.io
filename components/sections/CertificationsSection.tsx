'use client'

import { motion } from 'framer-motion'
import { TrophyIcon, ArrowTrendingUpIcon, FlagIcon, ClockIcon } from '@heroicons/react/24/outline'
import CertificationCard from '@/components/ui/CertificationCard'
import { certifications } from '@/lib/data/certifications'

export default function CertificationsSection() {
  const completedCount = certifications.filter(cert => cert.status === 'completed').length
  const inProgressCount = certifications.filter(cert => cert.status === 'in-progress').length
  const totalSkills = new Set(certifications.flatMap(cert => cert.skills)).size

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
            <TrophyIcon className="w-5 h-5" />
            <span>• Certifications</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-mono text-white leading-tight mb-6"
          >
            Professional Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-gray font-mono text-lg max-w-3xl mx-auto"
          >
            Continuous learning and professional development in AI, machine learning, and cloud technologies. 
            Validated expertise through industry-recognized certifications.
          </motion.p>
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-card-dark border border-text-gray/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="w-6 h-6 text-accent-green" />
            </div>
            <div className="text-2xl font-bold font-mono text-accent-green mb-2">{completedCount}</div>
            <div className="text-sm text-text-gray font-mono">Completed</div>
          </div>

          <div className="bg-card-dark border border-text-gray/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold font-mono text-yellow-500 mb-2">{inProgressCount}</div>
            <div className="text-sm text-text-gray font-mono">In Progress</div>
          </div>

          <div className="bg-card-dark border border-text-gray/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FlagIcon className="w-6 h-6 text-accent-green" />
            </div>
            <div className="text-2xl font-bold font-mono text-accent-green mb-2">{totalSkills}</div>
            <div className="text-sm text-text-gray font-mono">Skills Covered</div>
          </div>

          <div className="bg-card-dark border border-text-gray/20 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowTrendingUpIcon className="w-6 h-6 text-accent-green" />
            </div>
            <div className="text-2xl font-bold font-mono text-accent-green mb-2">2024</div>
            <div className="text-sm text-text-gray font-mono">Latest Year</div>
          </div>
        </motion.div>

        {/* Certifications by Category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-accent-green font-mono font-semibold">AI & Machine Learning</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications
              .filter(cert => 
                cert.skills.some(skill => 
                  ['AI', 'ML', 'Deep Learning', 'LangChain', 'TensorFlow', 'Neural Networks'].includes(skill)
                )
              )
              .map((cert, index) => (
                <CertificationCard key={cert.id} certification={cert} index={index} />
              ))}
          </div>
        </motion.div>

        {/* Cloud & DevOps Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-accent-green font-mono font-semibold">Cloud & DevOps</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications
              .filter(cert => 
                cert.skills.some(skill => 
                  ['AWS', 'Azure', 'Docker', 'DevOps', 'Cloud', 'Kubernetes'].includes(skill)
                )
              )
              .map((cert, index) => (
                <CertificationCard key={cert.id} certification={cert} index={index + 3} />
              ))}
          </div>
        </motion.div>

        {/* Development & Data Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
            <span className="text-accent-green font-mono font-semibold">Development & Data</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications
              .filter(cert => 
                cert.skills.some(skill => 
                  ['FastAPI', 'Python', 'Snowflake', 'Data Warehousing', 'API Development'].includes(skill)
                )
              )
              .map((cert, index) => (
                <CertificationCard key={cert.id} certification={cert} index={index + 6} />
              ))}
          </div>
        </motion.div>

        {/* Continuous Learning CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-card-dark border border-text-gray/20 rounded-lg p-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ArrowTrendingUpIcon className="w-6 h-6 text-accent-green" />
            <h3 className="text-2xl font-bold font-mono text-white">Continuous Learning</h3>
          </div>
          <p className="text-text-gray font-mono mb-6 max-w-2xl mx-auto">
            Staying current with the latest technologies and industry best practices. 
            Always exploring new certifications in AI, cloud computing, and software engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <span className="text-accent-green font-mono font-semibold">
              Next Target: Google Cloud Professional ML Engineer
            </span>
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