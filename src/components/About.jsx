import { profile } from '../data'

export default function About() {
  return (
    <section className="section container" id="about">
      <h2>About me</h2>
      <div className="about">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
