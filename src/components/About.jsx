import { useEffect, useRef } from 'react';
import aboutPhoto from "/photos/About.jpeg";

const services = [
  'Maternity', 'Gender Reveal',
  'Baby Shower', 'Newborn',
  'Birthday', 'Family Events',
  'Graduation', 'University Events',
  'Music Events', 'Product',
  'Wedding', 'Real Estate',
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{ background: 'var(--bg2)', padding: '6rem 0' }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left — photo */}
          <div style={{ position: 'relative', paddingTop: '1rem' }}>
            <div style={{ width: '100%', maxWidth: '280px', aspectRatio: '3/4', overflow: 'hidden' }}>
              <img src={aboutPhoto} alt="Pasindu Fernando" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <p style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.04em', lineHeight: 1.7 }}>Pasindu Fernando,</p>
              <p style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.04em', lineHeight: 1.7 }}>Professional Photographer</p>
            </div>
            {/* Accent lines */}
            <div style={{ width: '60%', height: '1px', background: 'var(--accent)', marginTop: '1.75rem' }} />
            <div style={{ position: 'absolute', top: '-1.5rem', right: '-1.5rem', width: '1px', height: '55%', background: 'var(--accent)' }} />
          </div>

          {/* Right — text */}
          <div style={{ paddingTop: '0.5rem' }}>
            <p style={{ fontFamily: 'Jost', fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.75rem' }}>
              About
            </p>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.12, letterSpacing: '0.02em', marginBottom: '1.5rem' }}>
              Capturing moments<br />
              <em>that last forever</em>
            </h2>
            <div style={{ width: '36px', height: '1px', background: 'var(--accent)', marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.95, marginBottom: '1rem' }}>
              Fernlens Photography specialises in creating timeless images that tell your unique story. From the intimate moments of a newborn session to the grandeur of a wedding day, every shoot is approached with the same passion and attention to detail.
            </p>
            <p style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Based in New Zealand, available for any type of shoots and events.
            </p>

            {/* Services */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem 1.5rem' }}>
              {services.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Jost', fontSize: '0.78rem', letterSpacing: '0.06em', color: 'var(--text2)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}