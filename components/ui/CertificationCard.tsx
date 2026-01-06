'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, TrophyIcon, CalendarIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Certification } from '@/types'

interface CertificationCardProps {
  certification: Certification
  index: number
}

export default function CertificationCard({ certification, index }: CertificationCardProps) {
  const getStatusIcon = () => {
    switch (certification.status) {
      case 'completed':
        return <CheckCircleIcon className="w-4 h-4 text-accent-green" />
      case 'in-progress':
        return <ClockIcon className="w-4 h-4 text-yellow-500" />
      default:
        return <CalendarIcon className="w-4 h-4 text-text-gray" />
    }
  }

  const getStatusColor = () => {
    switch (certification.status) {
      case 'completed':
        return 'text-accent-green'
      case 'in-progress':
        return 'text-yellow-500'
      default:
        return 'text-text-gray'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-card-dark border border-text-gray/20 rounded-lg overflow-hidden hover:border-accent-green/50 transition-all duration-300 group"
    >
      {/* Certificate Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-accent-green/10 to-accent-green/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {certification.verificationUrl && (
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-accent-green transition-colors duration-300 font-mono"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              <span>Verify Credential</span>
            </a>
          )}
        </div>
        
        {/* Certificate Icon */}
        <div className="w-24 h-24 bg-accent-green/20 rounded-full flex items-center justify-center">
          <TrophyIcon className="w-12 h-12 text-accent-green" />
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold font-mono text-white group-hover:text-accent-green transition-colors duration-300 line-clamp-2">
            {certification.title}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            {getStatusIcon()}
          </div>
        </div>

        {/* Issuer and Date */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-accent-green font-mono font-semibold text-sm">
            {certification.issuer}
          </p>
          <div className="flex items-center space-x-1">
            <CalendarIcon className="w-3 h-3 text-text-gray" />
            <span className="text-text-gray font-mono text-xs">{certification.date}</span>
          </div>
        </div>

        {/* Credential ID */}
        <div className="mb-4">
          <p className="text-text-gray font-mono text-xs">
            Credential ID: <span className="text-white">{certification.credential}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-text-gray font-mono text-sm leading-relaxed mb-4 line-clamp-3">
          {certification.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-accent-green/10 text-accent-green text-xs rounded-md font-mono"
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 4 && (
            <span className="text-xs text-text-gray font-mono px-2 py-1">
              +{certification.skills.length - 4} more
            </span>
          )}
        </div>

        {/* Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon()}
            <span className={`font-mono text-sm capitalize ${getStatusColor()}`}>
              {certification.status === 'in-progress' ? 'In Progress' : certification.status}
            </span>
          </div>
          
          {certification.verificationUrl && (
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-accent-green hover:text-white transition-colors duration-300 font-mono text-sm"
            >
              <span>Verify</span>
              <ArrowTopRightOnSquareIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 