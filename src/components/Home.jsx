import { useState, useEffect } from "react";
import { heroImages } from "../data/photos";

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
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
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.75) 100%),
            radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)
          `,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <div className="gold-line" style={{ margin: "0 auto 2rem" }} />

        {/* Tagline */}
        <p
          className="mb-4 tracking-[0.3em] uppercase text-xs"
          style={{
            color: "#ffdba2",
            fontFamily: "Jost, sans-serif",
            fontWeight: 400,
            textShadow: "0 1px 12px rgba(141, 141, 141, 0.9)",
          }}
        >
          Capturing moments that last forever
        </p>

        {/* Category label */}
        <h1
          className="mb-6"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(3.5rem, 1vw, 8rem)",
            fontWeight: 300,
            color: "#f5f0e8",
            lineHeight: 1,
            letterSpacing: "0.08em",
            textShadow:
              "0 2px 30px rgba(133, 133, 133, 0.8), 0 0 60px rgba(0,0,0,0.5)",
          }}
        >
          {heroImages[current].category}
        </h1>

        {/* CTA */}
        <a
          href="#portfolio"
          className="mt-10 inline-flex items-center gap-3 px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300"
          style={{
            border: "1px solid var(--accent)",
            color: "#ffdba2",
            textDecoration: "none",
            fontFamily: "Jost, sans-serif",
            letterSpacing: "0.2em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "#0a0908";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ffdba2";
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
              width: i === current ? "24px" : "6px",
              height: "2px",
              background:
                i === current ? "var(--accent)" : "rgba(245,240,232,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
