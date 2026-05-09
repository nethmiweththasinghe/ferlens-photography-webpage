import { useState, useEffect } from "react";
import logo from "../../public/photos/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoHeight =
    width < 640
      ? "30px" // mobile
      : width < 1024
        ? "50px" // tablet
        : "60px"; // desktop

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500 ${
          scrolled ? "nav-blur border-b" : ""
        }`}
        style={{ borderColor: "var(--subtle)" }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="Fernlens Photography"
            style={{
              height: logoHeight,
              width: "auto",
              objectFit: "contain",
              filter:
                scrolled && theme === "light"
                  ? "drop-shadow(0px 1px 4px rgba(0,0,0,0.15))"
                  : "invert(1) drop-shadow(0px 1px 8px rgba(0,0,0,0.6))",
              mixBlendMode:
                scrolled && theme === "light" ? "multiply" : "screen",
              transition: "filter 0.3s ease, height 0.3s ease",
            }}
          />
        </a>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: scrolled ? "var(--muted)" : "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontFamily: "Jost, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = scrolled
                    ? "var(--muted)"
                    : "rgba(255,255,255,0.75)")
                }
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
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "var(--muted)" : "rgba(255,255,255,0.85)",
              fontSize: "1rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = scrolled
                ? "var(--muted)"
                : "rgba(255,255,255,0.85)")
            }
          >
            {theme === "dark" ? "☀" : "☽"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--accent)",
              fontSize: "1.2rem",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu md:hidden">
          {/* Close button — top right */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--accent)",
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          <img
            src={logo}
            alt="Fernlens"
            style={{
              height: "100px",
              width: "auto",
              filter: theme === "dark" ? "invert(1)" : "none",
              mixBlendMode: theme === "dark" ? "screen" : "multiply",
            }}
          />

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontFamily: "Jost, sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
