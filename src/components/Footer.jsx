import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          <a href={profile.github}>GitHub</a> · <a href={profile.linkedin}>LinkedIn</a>
        </p>
      </div>
    </footer>
  )
}
