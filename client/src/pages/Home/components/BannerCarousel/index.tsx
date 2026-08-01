import "./style.css";
import { BANNERS } from "../../../../fakeDB";
import { useCallback, useEffect, useRef, useState } from "react";

export default function BannerCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    timerRef.current = setInterval(
      () => setActive((a) => (a + 1) % BANNERS.length),
      4000,
    );
  }, []);

  const go = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActive(i);
    start();
  };

  useEffect(() => {
    start();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [start]);

  return (
    <section className="banner-container">
      {BANNERS.map((b, i) => (
        <div
          key={b.id}
          className={`banner-slide ${i === active ? "active" : ""}`}
        >
          <div className="banner-bg" style={{ background: b.bg }} />
          <img src={b.image} alt={b.title} className="banner-image" />
          <div
            className={`banner-content ${b.align === "right" ? "align-right" : ""}`}
          >
            <span className="banner-tag">Oferta Especial</span>
            <h2 className="banner-title">{b.title}</h2>
            <p className="banner-subtitle">{b.subtitle}</p>
            <button className="banner-button">{b.cta} →</button>
          </div>
        </div>
      ))}

      <button
        onClick={() => go((active - 1 + BANNERS.length) % BANNERS.length)}
        className="banner-control prev"
        aria-label="Slide anterior"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={() => go((active + 1) % BANNERS.length)}
        className="banner-control next"
        aria-label="Próximo slide"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="dots">
        {BANNERS.map((_, i) => (
          <button 
            key={i}
            onClick={() => go(i)} 
            className={`dot-item ${i === active ? "active":""}`}
            ></button>
        ))}
      </div>
    </section>
  );
}
