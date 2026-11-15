import { skills } from '../data'

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((group) => (
          <div key={group.group} className="skills__group">
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
