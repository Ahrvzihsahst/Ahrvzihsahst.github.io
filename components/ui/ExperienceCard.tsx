interface ExperienceCardProps {
  company: string
  period: string
  logo: React.ReactNode
  isActive: boolean
  onClick: () => void
}

export default function ExperienceCard({ company, period, logo, isActive, onClick }: ExperienceCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`bg-card-dark border rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isActive 
          ? 'border-accent-green shadow-lg shadow-accent-green/20' 
          : 'border-text-gray/20 hover:border-accent-green/50'
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
          isActive ? 'bg-accent-green/20' : 'bg-text-gray/10'
        }`}>
          <div className={`w-6 h-6 transition-colors duration-300 ${
            isActive ? 'text-accent-green' : 'text-text-gray'
          }`}>
            {logo}
          </div>
        </div>

        {/* Company Info */}
        <div className="flex-1">
          <h3 className={`font-mono font-bold transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-text-gray'
          }`}>
            {company}
          </h3>
          <p className="text-text-gray font-mono text-sm">{period}</p>
        </div>
      </div>
    </div>
  )
} 