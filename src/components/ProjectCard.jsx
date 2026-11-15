export default function ProjectCard({ title, description, stack, link }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="card__stack">
        {stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <a className="card__link" href={link}>View project</a>
    </article>
  )
}
