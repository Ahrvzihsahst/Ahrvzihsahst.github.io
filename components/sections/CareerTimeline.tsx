import { BriefcaseIcon } from '@heroicons/react/24/outline'

export default function CareerTimeline() {
  const timeline = [
    {
      period: 'Jan 2024',
      role: 'Data Science Intern',
      company: 'NareshIt',
      type: 'start'
    },
    {
      period: 'Apr 2024',
      role: 'AI Engineer Intern',
      company: 'GreenBridge.AI',
      type: 'middle'
    },
    {
      period: 'Jul 2024 - Present',
      role: 'AI Associate Software Engineer',
      company: 'GreenBridge.AI',
      type: 'current'
    }
  ]

  return (
    <div className="bg-card-dark py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BriefcaseIcon className="w-6 h-6 text-accent-green" />
            <div className="font-mono text-lg text-accent-green">
              • Career Journey
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            From Intern to{' '}
            <span className="text-accent-green">AI Engineer</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-green via-accent-pink to-accent-orange"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div
                    className={`bg-bg-dark border ${
                      item.type === 'current'
                        ? 'border-accent-green'
                        : 'border-text-gray/20'
                    } rounded-2xl p-6 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="font-mono text-sm text-accent-green mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold font-mono text-white mb-1">
                      {item.role}
                    </h3>
                    <p className="text-text-gray font-mono text-sm">
                      {item.company}
                    </p>
                    {item.type === 'current' && (
                      <div className="inline-block mt-3 px-3 py-1 bg-accent-green/10 border border-accent-green rounded-full">
                        <span className="text-accent-green font-mono text-xs font-bold">
                          Current Position
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      item.type === 'current'
                        ? 'bg-accent-green animate-pulse'
                        : 'bg-accent-pink'
                    } border-4 border-card-dark z-10`}
                  ></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlight */}
        <div className="mt-12 text-center">
          <p className="text-text-gray font-mono text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            // Progressed from foundational data science work to architecting production-grade
            multi-agent AI systems serving <span className="text-accent-green">500+ daily queries</span> in
            renewable energy analytics
          </p>
        </div>
      </div>
    </div>
  )
}
