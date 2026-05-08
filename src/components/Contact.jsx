import { useEffect, useRef } from 'react';

export default function Contact() {
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
    <section id="contact" style={{ background: 'var(--bg)', padding: '6rem 0' }}>
      <div ref={ref} className="fade-in max-w-2xl mx-auto px-8 text-center">
        <p style={{ fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'1rem' }}>
          Get In Touch
        </p>
        <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:'clamp(2.2rem, 5vw, 3.5rem)', fontWeight:300, color:'var(--text)', letterSpacing:'0.04em', marginBottom:'1.5rem' }}>
          Let's create something<br /><em>beautiful together</em>
        </h2>
        <div className="gold-line" style={{ margin:'0 auto 2.5rem' }} />
        <p style={{ color:'var(--muted)', fontFamily:'Jost', fontWeight:300, lineHeight:1.9, fontSize:'0.9rem', marginBottom:'3rem' }}>
          Whether you're planning a wedding, expecting a little one, celebrating a graduation, or need commercial photography — I'd love to hear from you.
        </p>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:hello@ferlens.com"
            style={{ fontFamily:'Jost', fontSize:'0.8rem', letterSpacing:'0.12em', color:'var(--text)', textDecoration:'none', borderBottom:'1px solid var(--accent)', paddingBottom:'2px', transition:'color 0.2s' }}
            onMouseEnter={e=>(e.currentTarget.style.color='var(--accent)')}
            onMouseLeave={e=>(e.currentTarget.style.color='var(--text)')}
          >
            hello@ferlens.com
          </a>
          <span style={{ color:'var(--subtle)' }}>·</span>
          <a
            href="https://instagram.com/ferlens"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily:'Jost', fontSize:'0.8rem', letterSpacing:'0.12em', color:'var(--text)', textDecoration:'none', borderBottom:'1px solid var(--accent)', paddingBottom:'2px', transition:'color 0.2s' }}
            onMouseEnter={e=>(e.currentTarget.style.color='var(--accent)')}
            onMouseLeave={e=>(e.currentTarget.style.color='var(--text)')}
          >
            @ferlens
          </a>
        </div>

        <a
          href="mailto:hello@ferlens.com"
          style={{ display:'inline-block', border:'1px solid var(--accent)', color:'var(--accent)', fontFamily:'Jost', fontSize:'0.75rem', letterSpacing:'0.22em', textTransform:'uppercase', padding:'14px 36px', textDecoration:'none', transition:'all 0.3s' }}
          onMouseEnter={e=>{ e.currentTarget.style.background='var(--accent)'; e.currentTarget.style.color='var(--bg)'; }}
          onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--accent)'; }}
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
