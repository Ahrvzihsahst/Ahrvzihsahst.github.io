interface TechIconProps {
  name: string
  color: string
  icon: React.ReactNode
}

export default function TechIcon({ name, color, icon }: TechIconProps) {
  return (
    <div className="flex flex-col items-center space-y-1 group">
      <div 
        className="w-8 h-8 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ color }}
      >
        {icon}
      </div>
      <span className="text-xs text-text-gray">{name}</span>
    </div>
  )
} 