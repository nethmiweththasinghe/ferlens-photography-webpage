import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { photos, categories } from "../data/photos";

const PAGE_SIZE = 6;

// Spinner component
function Spinner() {
  return (
    <div style={{
      position: "absolute", inset: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--surface)",
    }}>
      <div style={{
        width: "24px", height: "24px",
        border: "1.5px solid var(--subtle)",
        borderTopColor: "var(--accent)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
    </div>
  );
}

function PhotoCard({ photo, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="photo-item break-inside-avoid mb-4 cursor-pointer"
      onClick={onClick}
      style={{ position: "relative", background: "var(--surface)" }}
    >
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: "200px",
        }}>
          <div style={{
            width: "22px", height: "22px",
            border: "1.5px solid var(--subtle)",
            borderTopColor: "var(--accent)",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }} />
        </div>
      )}

      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="w-full block"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
          minHeight: loaded ? 0 : "200px",
        }}
      />

      {loaded && (
        <div className="photo-overlay">
          <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <p style={{ color: "rgba(245,240,232,0.9)", fontFamily: "Jost", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {photo.category}
            </p>
            <p style={{ color: "rgba(245,240,232,0.55)", fontFamily: '"Cormorant Garamond", serif', fontSize: "0.85rem", fontStyle: "italic" }}>
              {photo.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function Lightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(245,240,232,0.6)", fontSize: "3rem", cursor: "pointer", lineHeight: 1, transition: "color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
      >‹</button>

      <img
        src={photo.src.replace("w=800", "w=1400")}
        alt={photo.alt}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "90vw", maxHeight: "88vh", objectFit: "contain", boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}
      />

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(245,240,232,0.6)", fontSize: "3rem", cursor: "pointer", lineHeight: 1, transition: "color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
      >›</button>

      <button
        onClick={onClose}
        style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "rgba(245,240,232,0.6)", fontSize: "1.5rem", cursor: "pointer", transition: "color 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.6)")}
      >✕</button>

      <p style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "rgba(245,240,232,0.45)", fontFamily: "Jost", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
        {photo.alt} · {photo.category}
      </p>
    </div>
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount]     = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex]   = useState(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const ref       = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const updateScrollBtns = useCallback(() => {
    const el = filterRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = filterRef.current;
    if (!el) return;
    updateScrollBtns();
    el.addEventListener("scroll", updateScrollBtns);
    window.addEventListener("resize", updateScrollBtns);
    return () => {
      el.removeEventListener("scroll", updateScrollBtns);
      window.removeEventListener("resize", updateScrollBtns);
    };
  }, [updateScrollBtns]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setTimeout(updateScrollBtns, 50);
  }, [activeCategory, updateScrollBtns]);

  const scrollFilter = (dir) => {
    filterRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  const filtered = useMemo(() => {
    if (activeCategory === "All") return shuffle(photos);
    return photos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visible   = filtered.slice(0, visibleCount);
  const hasMore   = visibleCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  const openLightbox  = (photo) => setLightboxIndex(visible.findIndex((p) => p.id === photo.id));
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto     = () => setLightboxIndex((i) => (i - 1 + visible.length) % visible.length);
  const nextPhoto     = () => setLightboxIndex((i) => (i + 1) % visible.length);

  const arrowBtn = (show) => ({
    flexShrink: 0,
    background: "none",
    border: "none",
    color: "var(--muted)",
    cursor: show ? "pointer" : "default",
    fontSize: "1.4rem",
    lineHeight: 1,
    padding: "0 4px",
    transition: "color 0.2s, opacity 0.2s",
    opacity: show ? 1 : 0,
    pointerEvents: show ? "auto" : "none",
  });

  return (
    <section id="portfolio" style={{ background: "var(--bg)", padding: "6rem 0" }}>
      <div ref={ref} className="fade-in max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p style={{ fontFamily: "Jost", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "1rem" }}>
            Selected Work
          </p>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "var(--text)", letterSpacing: "0.05em", marginBottom: "1.5rem" }}>
            Portfolio
          </h2>
          <div className="gold-line" />
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-12">
          <button
            onClick={() => scrollFilter(-1)}
            style={arrowBtn(canScrollLeft)}
            onMouseEnter={(e) => { if (canScrollLeft) e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { if (canScrollLeft) e.currentTarget.style.color = "var(--muted)"; }}
          >‹</button>

          <div
            ref={filterRef}
            className="flex gap-3 pb-1 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", flex: 1 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  flexShrink: 0,
                  background: activeCategory === cat ? "var(--accent)" : "transparent",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "var(--accent)" : "var(--subtle)",
                  color: activeCategory === cat ? "var(--bg)" : "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "Jost",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  borderRadius: "2px",
                  transition: "all 0.25s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "var(--subtle)";
                    e.currentTarget.style.color = "var(--muted)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollFilter(1)}
            style={arrowBtn(canScrollRight)}
            onMouseEnter={(e) => { if (canScrollRight) e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { if (canScrollRight) e.currentTarget.style.color = "var(--muted)"; }}
          >›</button>
        </div>

        {/* Count */}
        <p style={{ fontFamily: "Jost", fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: "2rem", textTransform: "uppercase" }}>
          Showing {visible.length} of {filtered.length}{" "}
          {filtered.length === 1 ? "image" : "images"}
          {activeCategory !== "All" ? ` · ${activeCategory}` : ""}
        </p>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {visible.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => openLightbox(photo)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1.5rem", color: "var(--muted)", fontStyle: "italic" }}>
              No photos in this category yet.
            </p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-16">
            <p style={{ fontFamily: "Jost", fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              {remaining} more {remaining === 1 ? "image" : "images"} in{" "}
              {activeCategory === "All" ? "this collection" : activeCategory}
            </p>
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              style={{ background: "transparent", border: "1px solid var(--accent)", color: "var(--accent)", fontFamily: "Jost", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "14px 40px", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
            >
              Load More
            </button>
          </div>
        )}

        {/* All loaded */}
        {!hasMore && filtered.length > PAGE_SIZE && (
          <div className="text-center mt-16">
            <div className="gold-line" style={{ margin: "0 auto 1rem" }} />
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: "1rem", color: "var(--muted)", fontStyle: "italic" }}>
              All {filtered.length} images loaded
            </p>
          </div>
        )}

      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photo={visible[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}