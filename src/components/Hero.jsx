import { useState, useEffect } from 'react';
import { heroImages } from '../data/photos';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={img}
            alt={`Hero ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 100%)' }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p
          className="mb-4 tracking-[0.3em] uppercase text-xs"
          style={{ color: 'var(--accent)', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
        >
          Photography & Visual Storytelling
        </p>
        <h1
          className="mb-6"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 300,
            color: '#f5f0e8',
            lineHeight: 1,
            letterSpacing: '0.08em',
          }}
        >
          FERNLENS
        </h1>
        <div className="gold-line mb-6" style={{ margin: '0 auto 1.5rem' }} />
        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.85)',
            fontStyle: 'italic',
            letterSpacing: '0.05em',
          }}
        >
          Wedding · Portrait · Commercial
        </p>

        {/* CTA */}
        <a
          href="#portfolio"
          className="mt-10 inline-flex items-center gap-3 px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300"
          style={{
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontFamily: 'Jost, sans-serif',
            letterSpacing: '0.2em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#0a0908';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          View Portfolio
        </a>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '24px' : '6px',
              height: '2px',
              background: i === current ? 'var(--accent)' : 'rgba(245,240,232,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
