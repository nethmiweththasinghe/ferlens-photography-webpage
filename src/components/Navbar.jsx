import { useState, useEffect } from 'react';

const links = [
  { href: '#home',       label: 'Home' },
  { href: '#portfolio',  label: 'Portfolio' },
  { href: '#about',      label: 'About' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500 ${
          scrolled ? 'nav-blur border-b' : ''
        }`}
        style={{ borderColor: 'var(--subtle)' }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--text)', letterSpacing: '0.12em', textDecoration: 'none' }}
        >
          FERLENS
        </a>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ color: 'var(--muted)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 400, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.target.style.color = 'var(--muted)')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: '1rem', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {theme === 'dark' ? '○' : '●'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', fontSize: '1.2rem' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden">
          <a
            href="#home"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', color: 'var(--accent)', letterSpacing: '0.12em', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            FERLENS
          </a>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--muted)', textDecoration: 'none', fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
