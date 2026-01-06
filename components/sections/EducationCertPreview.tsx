import { AcademicCapIcon, ShieldCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function EducationCertPreview() {
  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'PMEC, Ganjam, Odisha',
    period: '2018 - 2022'
  }

  const certifications = [
    {
      title: 'Google Advanced Data Analytics',
      issuer: 'Google (Coursera)',
      year: '2024'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford & deeplearning.ai',
      year: '2023'
    },
    {
      title: 'Data Science & AI Certificate',
      issuer: 'IBM',
      year: '2023'
    },
    {
      title: 'Python Nano Degree',
      issuer: 'Udacity',
      year: '2023'
    },
    {
      title: 'Google Data Analytics',
      issuer: 'Google (Coursera)',
      year: '2023'
    }
  ]

  return (
    <div className="bg-card-dark py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <AcademicCapIcon className="w-8 h-8 text-accent-green" />
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-white">
                Education
              </h2>
            </div>

            <div className="bg-bg-dark border border-text-gray/20 rounded-2xl p-8">
              <div className="text-accent-green font-mono text-sm font-bold mb-3">
                {education.period}
              </div>
              <h3 className="text-xl font-bold font-mono text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-text-gray font-mono text-sm mb-6">
                {education.institution}
              </p>

              <div className="border-t border-text-gray/20 pt-4">
                <p className="text-text-gray font-mono text-sm leading-relaxed">
                  // Built strong foundation in computer science fundamentals, algorithms,
                  and software engineering principles
                </p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <ShieldCheckIcon className="w-8 h-8 text-accent-pink" />
              <h2 className="text-2xl md:text-3xl font-bold font-mono text-white">
                Certifications
              </h2>
            </div>

            <div className="bg-bg-dark border border-text-gray/20 rounded-2xl p-8">
              <div className="space-y-4 mb-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between space-x-3 pb-4 border-b border-text-gray/10 last:border-0"
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-mono text-sm font-bold mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-text-gray font-mono text-xs">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-accent-green font-mono text-xs font-bold">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/certifications"
                className="flex items-center justify-center space-x-2 text-accent-pink font-mono text-sm font-bold hover:text-white transition-colors duration-200"
              >
                <span>View All Certifications</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-bg-dark border border-text-gray/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-mono text-accent-green mb-2">
              BTech
            </div>
            <p className="text-text-gray font-mono text-xs">
              Computer Science
            </p>
          </div>
          <div className="bg-bg-dark border border-text-gray/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-mono text-accent-pink mb-2">
              5
            </div>
            <p className="text-text-gray font-mono text-xs">
              Professional Certs
            </p>
          </div>
          <div className="bg-bg-dark border border-text-gray/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-mono text-accent-orange mb-2">
              3+
            </div>
            <p className="text-text-gray font-mono text-xs">
              Years Experience
            </p>
          </div>
          <div className="bg-bg-dark border border-text-gray/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-mono text-accent-green mb-2">
              60+
            </div>
            <p className="text-text-gray font-mono text-xs">
              Technical Skills
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
