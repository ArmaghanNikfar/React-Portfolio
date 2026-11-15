import { navLinks, profile } from '../data'

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">{profile.name.split(' ')[0]}</a>
        <nav className="navbar__links" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>{link.label}</a>
          ))}
        </nav>
        <button
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </div>
    </header>
  )
}
