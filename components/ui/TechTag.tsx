interface TechTagProps {
  tech: string
  color?: string
}

export default function TechTag({ tech, color = "#00ff88" }: TechTagProps) {
  return (
    <span 
      className="px-3 py-1 rounded-full text-xs font-mono font-medium border transition-colors duration-200 hover:scale-105 transform"
      style={{ 
        borderColor: color,
        color: color,
        backgroundColor: `${color}10`
      }}
    >
      {tech}
    </span>
  )
} 