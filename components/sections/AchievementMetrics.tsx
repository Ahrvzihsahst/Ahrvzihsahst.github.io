import { ChartBarIcon, BoltIcon, CpuChipIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

export default function AchievementMetrics() {
  const metrics = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      value: '90%',
      label: 'Reduction in manual knowledge graph construction',
      color: 'accent-green'
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      value: '75%',
      label: 'Faster response times with Redis caching',
      color: 'accent-pink'
    },
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      value: '10+',
      label: 'Specialized agents orchestrated',
      color: 'accent-orange'
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
      value: '70%',
      label: 'Improvement in data retrieval accuracy',
      color: 'accent-green'
    }
  ]

  return (
    <div className="bg-bg-dark py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="font-mono text-lg text-accent-green mb-4">
            • Impact & Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            Driving Results Through{' '}
            <span className="text-accent-green">Innovation</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card-dark border border-text-gray/20 rounded-2xl p-6 hover:border-accent-green/50 transition-all duration-300 group"
            >
              <div className={`text-${metric.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>
              <div className={`text-4xl font-bold font-mono text-${metric.color} mb-2`}>
                {metric.value}
              </div>
              <p className="text-text-gray font-mono text-sm leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
