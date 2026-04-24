import { Link } from 'react-router-dom'

interface SectionsHeaderProps {
  title: string
  description?: string
  subtitle?: string
  subtext?: string
}

export default function SectionsHeader({ title, description, subtitle, subtext }: SectionsHeaderProps) {
  return (
    <div className="sections-header">
      <div className="sections-content">
        <h1 className="sections-title">{title}</h1>
        {description && <p className="sections-description">{description}</p>}
        {subtitle && <h2 className="sections-subtitle">{subtitle}</h2>}
        {subtext && <p className="sections-subtext">{subtext}</p>}
      </div>
    </div>
  )
}
