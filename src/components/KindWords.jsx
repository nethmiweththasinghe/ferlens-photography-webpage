import { useEffect, useRef, useState } from "react";
import { reviews } from "../data/reviews";

export default function KindWords() {
  const ref = useRef(null);
  const revRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) revRef.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );

    if (revRef.current) observer.observe(revRef.current);

    return () => observer.disconnect();
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section
      id="KindWords"
      style={{
        background: "var(--bg)",
        padding: "5rem 0",
      }}
    >
      <div ref={revRef} className="fade-in max-w-6xl mx-auto px-8">
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "0rem",
          }}
        >
          <p
            style={{
              fontFamily: "Jost",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            Testimonials
          </p>

          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "var(--text)",
              letterSpacing: "0.04em",
              marginBottom: "1rem",
            }}
          >
            Kind Words
          </h2>

          <div
            className="gold-line"
            style={{
              margin: "0 auto",
            }}
          />
        </div>

        {/* REVIEW CARD */}
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                position: i === current ? "relative" : "absolute",
                inset: 0,
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.6s ease",
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 items-center justify-items-center md:justify-items-start"
                style={{
                  minHeight: "320px",
                  alignItems: "center",
                }}
              >
                {/* LEFT — IMAGE */}
                <div
                  style={{
                    width: "clamp(220px, 70vw, 320px)",
                    height: "clamp(220px, 70vw, 320px)",
                    overflow: "hidden",
                    borderRadius: "50%",
                    flexShrink: 0,
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={r.image}
                    alt={r.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* RIGHT — TEXT */}
                <div style={{ textAlign: "left" }}>
                  {/* QUOTE */}
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "3rem",
                      color: "var(--accent)",
                      lineHeight: 1,
                      opacity: 0.3,
                      marginBottom: "1rem",
                    }}
                  >
                    "
                  </span>

                  {/* REVIEW TEXT */}
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                      fontWeight: 300,
                      color: "var(--text)",
                      lineHeight: 1.9,
                      fontStyle: "italic",
                      marginBottom: "2rem",
                    }}
                  >
                    {r.text}
                  </span>

                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: "3rem",
                      color: "var(--accent)",
                      lineHeight: 1,
                      opacity: 0.3,
                      marginBottom: "1rem",
                    }}
                  >
                    "
                  </span>
                  {/* DIVIDER */}
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "var(--accent)",
                      marginBottom: "1.5rem",
                    }}
                  />

                  {/* NAME */}
                  <p
                    style={{
                      fontFamily: "Jost",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      letterSpacing: "0.08em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {r.name}
                  </p>

                  {/* OCCASION */}
                  <p
                    style={{
                      fontFamily: "Jost",
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {r.occasion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            marginTop: "1.5rem",
          }}
        >
          {/* ARROWS + DOTS */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              style={{
                background: "none",
                border: "none",
                color: "var(--muted)",
                fontSize: "1.8rem",
                cursor: "pointer",
                transition: "color 0.2s",
                lineHeight: 1,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              ‹
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "2px",
                    background:
                      i === current ? "var(--accent)" : "var(--subtle)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                background: "none",
                border: "none",
                color: "var(--muted)",
                fontSize: "1.8rem",
                cursor: "pointer",
                transition: "color 0.2s",
                lineHeight: 1,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              ›
            </button>
          </div>

          {/* PAGE COUNT */}
          <p
            style={{
              fontFamily: "Jost",
              fontSize: "0.7rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
              marginTop: "0.8rem",
              textAlign: "center",
            }}
          >
            {current + 1} / {reviews.length}
          </p>
        </div>
      </div>
    </section>
  );
}
