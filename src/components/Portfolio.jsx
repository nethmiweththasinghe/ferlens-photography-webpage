import { useState, useEffect, useRef } from 'react';
import { photos, categories } from '../data/photos';

function Lightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{ position:'absolute', left:'1.5rem', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', color:'rgba(245,240,232,0.6)', fontSize:'3rem', cursor:'pointer', lineHeight:1, transition:'color 0.2s' }} onMouseEnter={e=>(e.currentTarget.style.color='#f5f0e8')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(245,240,232,0.6)')}>‹</button>
      <img src={photo.src.replace('w=800','w=1400')} alt={photo.alt} onClick={e=>e.stopPropagation()} style={{ maxWidth:'90vw', maxHeight:'88vh', objectFit:'contain', boxShadow:'0 0 60px rgba(0,0,0,0.8)' }} />
      <button onClick={e => { e.stopPropagation(); onNext(); }} style={{ position:'absolute', right:'1.5rem', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', color:'rgba(245,240,232,0.6)', fontSize:'3rem', cursor:'pointer', lineHeight:1, transition:'color 0.2s' }} onMouseEnter={e=>(e.currentTarget.style.color='#f5f0e8')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(245,240,232,0.6)')}>›</button>
      <button onClick={onClose} style={{ position:'absolute', top:'1.5rem', right:'1.5rem', background:'none', border:'none', color:'rgba(245,240,232,0.6)', fontSize:'1.5rem', cursor:'pointer', transition:'color 0.2s' }} onMouseEnter={e=>(e.currentTarget.style.color='#f5f0e8')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(245,240,232,0.6)')}>✕</button>
      <p style={{ position:'absolute', bottom:'1.5rem', left:'50%', transform:'translateX(-50%)', color:'rgba(245,240,232,0.45)', fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', whiteSpace:'nowrap' }}>{photo.alt} · {photo.category}</p>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex]   = useState(null);
  const ref     = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  const openLightbox  = (photo) => setLightboxIndex(filtered.findIndex(p => p.id === photo.id));
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto     = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const nextPhoto     = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <section id="portfolio" style={{ background: 'var(--bg)', padding: '6rem 0' }}>
      <div ref={ref} className="fade-in max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p style={{ fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'1rem' }}>
            Selected Work
          </p>
          <h2 style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:'clamp(2.5rem, 5vw, 4rem)', fontWeight:300, color:'var(--text)', letterSpacing:'0.05em', marginBottom:'1.5rem' }}>
            Portfolio
          </h2>
          <div className="gold-line" />
        </div>

        {/* Scrollable filter bar */}
        <div
          ref={filterRef}
          className="flex gap-3 mb-12 pb-3 overflow-x-auto"
          style={{ scrollbarWidth:'none', msOverflowStyle:'none' }}
        >
          <style>{`.filter-bar::-webkit-scrollbar { display: none; }`}</style>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                flexShrink: 0,
                background: activeCategory === cat ? 'var(--accent)' : 'transparent',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--accent)' : 'var(--subtle)',
                color: activeCategory === cat ? 'var(--bg)' : 'var(--muted)',
                cursor: 'pointer',
                fontFamily: 'Jost',
                fontSize: '0.7rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: '2px',
                transition: 'all 0.25s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }
              }}
              onMouseLeave={e => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = 'var(--subtle)';
                  e.currentTarget.style.color = 'var(--muted)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p style={{ fontFamily:'Jost', fontSize:'0.7rem', letterSpacing:'0.12em', color:'var(--muted)', marginBottom:'2rem', textTransform:'uppercase' }}>
          {filtered.length} {filtered.length === 1 ? 'image' : 'images'}
          {activeCategory !== 'All' ? ` · ${activeCategory}` : ''}
        </p>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="photo-item break-inside-avoid mb-4 cursor-pointer"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full block"
                loading="lazy"
              />
              <div className="photo-overlay">
                <div style={{ position:'absolute', bottom:'1rem', left:'1rem', right:'1rem', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                  <p style={{ color:'rgba(245,240,232,0.9)', fontFamily:'Jost', fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase' }}>
                    {photo.category}
                  </p>
                  <p style={{ color:'rgba(245,240,232,0.55)', fontFamily:'"Cormorant Garamond", serif', fontSize:'0.85rem', fontStyle:'italic' }}>
                    {photo.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p style={{ fontFamily:'"Cormorant Garamond", serif', fontSize:'1.5rem', color:'var(--muted)', fontStyle:'italic' }}>
              No photos in this category yet.
            </p>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photo={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  );
}
