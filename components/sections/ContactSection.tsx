'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PaperAirplaneIcon, MapPinIcon, PhoneIcon, ArrowDownTrayIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FormData, ValidationErrors, validateForm, handleFormSubmit } from '@/lib/utils/formUtils'

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const { isValid, errors: validationErrors } = validateForm(formData)
    if (!isValid) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    await handleFormSubmit(
      formData,
      () => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      },
      (error) => {
        setSubmitStatus('error')
        setErrors({ message: error })
      }
    )

    setIsSubmitting(false)
  }

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
            <EnvelopeIcon className="w-5 h-5" />
            <span>• Contact</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-mono text-white leading-tight mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-text-gray font-mono text-lg max-w-3xl mx-auto"
          >
            Ready to bring your AI vision to life? Let's collaborate and build something amazing together.
            I'm always excited to work on innovative projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card-dark border border-text-gray/20 rounded-lg p-8"
          >
            <div className="flex items-center space-x-2 mb-6">
              <PaperAirplaneIcon className="w-5 h-5 text-accent-green" />
              <h2 className="text-2xl font-bold font-mono text-white">Send a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium font-mono text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border font-mono ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-text-gray/30 focus:ring-accent-green/50'
                  } bg-bg-dark text-white focus:ring-2 focus:border-transparent transition-all duration-300`}
                  placeholder="Your full name"
                  required
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 font-mono flex items-center space-x-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium font-mono text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border font-mono ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-text-gray/30 focus:ring-accent-green/50'
                  } bg-bg-dark text-white focus:ring-2 focus:border-transparent transition-all duration-300`}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 font-mono flex items-center space-x-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium font-mono text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border font-mono resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-text-gray/30 focus:ring-accent-green/50'
                  } bg-bg-dark text-white focus:ring-2 focus:border-transparent transition-all duration-300`}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  required
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 font-mono flex items-center space-x-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-mono font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-text-gray/20 text-text-gray cursor-not-allowed'
                    : 'bg-accent-green text-bg-dark hover:bg-accent-green/90 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-text-gray border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-accent-green/10 border border-accent-green/30 rounded-lg"
                >
                  <p className="text-accent-green font-mono text-center flex items-center justify-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                >
                  <p className="text-red-500 font-mono text-center flex items-center justify-center space-x-2">
                    <ExclamationCircleIcon className="w-5 h-5" />
                    <span>Failed to send message. Please try again.</span>
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-card-dark border border-text-gray/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold font-mono text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <a
                  href="mailto:biswajit.jena211@gmail.com"
                  className="flex items-center space-x-4 text-text-gray hover:text-accent-green transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center group-hover:bg-accent-green/30 transition-colors duration-300">
                    <EnvelopeIcon className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-text-gray">Email</p>
                    <p className="font-mono text-white">biswajit.jena211@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-text-gray">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-text-gray">Location</p>
                    <p className="font-mono text-white">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-text-gray">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-accent-green" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-text-gray">Phone</p>
                    <p className="font-mono text-white">+91 6371895195</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card-dark border border-text-gray/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold font-mono text-white mb-6">Connect with Me</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Ahrvzihsahst/My_Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-text-gray/20 rounded-lg hover:border-accent-green/50 hover:bg-accent-green/5 transition-all duration-300 group"
                >
                  <FaGithub className="w-5 h-5 text-text-gray group-hover:text-accent-green transition-colors duration-300" />
                  <span className="font-mono text-sm text-white">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/biswajit-jena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 border border-text-gray/20 rounded-lg hover:border-accent-green/50 hover:bg-accent-green/5 transition-all duration-300 group"
                >
                  <FaLinkedin className="w-5 h-5 text-text-gray group-hover:text-accent-green transition-colors duration-300" />
                  <span className="font-mono text-sm text-white">LinkedIn</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 border border-text-gray/20 rounded-lg hover:border-accent-green/50 hover:bg-accent-green/5 transition-all duration-300 group"
                >
                  <FaTwitter className="w-5 h-5 text-text-gray group-hover:text-accent-green transition-colors duration-300" />
                  <span className="font-mono text-sm text-white">Twitter</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-3 p-4 border border-text-gray/20 rounded-lg hover:border-accent-green/50 hover:bg-accent-green/5 transition-all duration-300 group"
                >
                  <FaInstagram className="w-5 h-5 text-text-gray group-hover:text-accent-green transition-colors duration-300" />
                  <span className="font-mono text-sm text-white">Instagram</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-card-dark border border-text-gray/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold font-mono text-white mb-6">Resume</h2>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center space-x-3 text-accent-green hover:text-white transition-colors duration-300 font-mono group"
              >
                <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center group-hover:bg-accent-green/30 transition-colors duration-300">
                  <ArrowDownTrayIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Download Resume</p>
                  <p className="text-sm text-text-gray">PDF • Updated Nov 2024</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

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