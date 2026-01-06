interface SkillIconProps {
  name: string
  icon: React.ReactNode
  color: string
  delay?: number
}

export default function SkillIcon({ name, icon, color, delay = 0 }: SkillIconProps) {
  return (
    <div 
      className="group cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="w-20 h-20 bg-card-dark border border-text-gray/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:border-accent-green/50 group-hover:shadow-lg group-hover:scale-110 group-hover:shadow-accent-green/20"
        style={{ 
          backgroundColor: `${color}15`,
        }}
      >
        <div 
          className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
          style={{ color }}
        >
          {icon}
        </div>
      </div>
      <p className="text-center text-xs font-mono text-text-gray mt-2 group-hover:text-white transition-colors duration-300">
        {name}
      </p>
    </div>
  )
} 