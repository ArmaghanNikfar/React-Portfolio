import { useState } from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

const filters = ['All', 'AI', 'Web']

export default function Projects() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))

  return (
    <section className="section container" id="projects">
      <h2>Projects</h2>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter ${active === f ? 'filter--active' : ''}`}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}
