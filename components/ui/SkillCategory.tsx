interface SkillCategoryProps {
  title: string
  skills: string[]
  icon?: React.ReactNode
}

export default function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="mb-8 group">
      <div className="flex items-center space-x-2 mb-4">
        {icon && (
          <div className="text-accent-green">
            {icon}
          </div>
        )}
        <h3 className="text-accent-green font-mono font-bold text-lg group-hover:text-white transition-colors duration-300">
          {title}:
        </h3>
      </div>
      <p className="text-text-gray font-mono text-sm leading-relaxed pl-6">
        {skills.join(', ')}
      </p>
    </div>
  )
} 