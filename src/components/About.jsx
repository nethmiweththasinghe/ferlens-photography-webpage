import { useEffect, useRef } from 'react';

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
      <div ref={ref} className="fade-in max-w-5xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — image placeholder */}
          <div className="relative">
            <div style={{ width:'100%', aspectRatio:'3/4', background:'var(--surface)', border:'1px solid var(--subtle)', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'0.75rem' }}>
              {/* Replace this div with: <img src="/photos/photographer.jpg" className="w-full h-full object-cover" /> */}
              <p style={{ color:'var(--subtle)', fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase' }}>Your Photo Here</p>
              <p style={{ color:'var(--subtle)', fontFamily:'Jost', fontSize:'0.65rem', letterSpacing:'0.1em' }}>/public/photos/photographer.jpg</p>
            </div>
            {/* Gold accent line */}
            <div style={{ position:'absolute', bottom:'-1rem', left:'-1rem', width:'60%', height:'1px', background:'var(--accent)' }} />
            <div style={{ position:'absolute', top:'-1rem', right:'-1rem', width:'1px', height:'60%', background:'var(--accent)' }} />
          </div>

          {/* Right — text */}
          <div>
            <p style={{ fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'1.5rem' }}>
              About
            </p>
            <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:'clamp(2rem, 4vw, 3rem)', fontWeight:300, color:'var(--text)', letterSpacing:'0.04em', lineHeight:1.1, marginBottom:'2rem' }}>
              Capturing moments<br />
              <em style={{ fontStyle:'italic' }}>that last forever</em>
            </h2>
            <div style={{ width:'40px', height:'1px', background:'var(--accent)', marginBottom:'2rem' }} />
            <p style={{ color:'var(--text2)', fontFamily:'Jost', fontWeight:300, lineHeight:1.9, fontSize:'0.95rem', marginBottom:'1.5rem' }}>
              Fernlens Photography specialises in creating timeless images that tell your unique story. From the intimate moments of a newborn session to the grandeur of a wedding day, every shoot is approached with the same passion and attention to detail.
            </p>
            <p style={{ color:'var(--muted)', fontFamily:'Jost', fontWeight:300, lineHeight:1.9, fontSize:'0.9rem', marginBottom:'2.5rem' }}>
              Based in New Zealand, available worldwide for destination shoots and events.
            </p>

            {/* Services list */}
            <div className="grid grid-cols-2 gap-3">
              {['Maternity', 'Newborn', 'Birthday', 'Family Events', 'Graduation', 'University Events', 'Music Events', 'Product'].map(s => (
                <div key={s} className="flex items-center gap-2">
                  <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--accent)', flexShrink:0 }} />
                  <span style={{ fontFamily:'Jost', fontSize:'0.8rem', letterSpacing:'0.08em', color:'var(--text2)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
