interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-card-dark border border-text-gray/20 rounded-2xl p-6 hover:border-accent-green/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent-green/10">
      {/* Icon */}
      <div className="w-16 h-16 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-green/20 transition-colors duration-300">
        <div className="w-8 h-8 text-accent-green">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold font-mono text-white mb-3 group-hover:text-accent-green transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-gray font-mono text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
} 