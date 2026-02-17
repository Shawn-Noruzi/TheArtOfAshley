"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Logo Animation Component ────────────────────────────────────────────────
function AALogo({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="logo-wrapper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.svg
        viewBox="0 0 240 160"
        width="240"
        height="160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative Persian-inspired ring */}
        <motion.circle
          cx="120"
          cy="80"
          r="72"
          stroke="#c9a84c"
          strokeWidth="0.6"
          strokeDasharray="452"
          strokeDashoffset="452"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        />
        <motion.circle
          cx="120"
          cy="80"
          r="68"
          stroke="#c9a84c"
          strokeWidth="0.3"
          opacity={0.4}
          strokeDasharray="426"
          strokeDashoffset="426"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
        />

        {/* Left A */}
        <motion.path
          d="M 60 118 L 88 42 L 116 118"
          stroke="#f5ede0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="200"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        />
        <motion.path
          d="M 68 96 L 108 96"
          stroke="#c9a84c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="50"
          strokeDashoffset="50"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
        />

        {/* Right A — mirrored, slightly overlapping */}
        <motion.path
          d="M 124 118 L 152 42 L 180 118"
          stroke="#f5ede0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="200"
          strokeDashoffset="200"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
        />
        <motion.path
          d="M 132 96 L 172 96"
          stroke="#c9a84c"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="50"
          strokeDashoffset="50"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
        />

        {/* Small ornamental diamond */}
        <motion.path
          d="M 120 66 L 124 72 L 120 78 L 116 72 Z"
          stroke="#c9a84c"
          strokeWidth="0.8"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.8 }}
          style={{ transformOrigin: "120px 72px" }}
        />
      </motion.svg>

      {/* Brand name beneath logo */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.6em" }}
        animate={{ opacity: 1, letterSpacing: "0.35em" }}
        transition={{ duration: 1, delay: 1.4 }}
        onAnimationComplete={onComplete}
        className="logo-title"
      >
        THE ART OF ASHLEY
      </motion.p>

      <motion.div
        className="logo-rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      />
    </motion.div>
  );
}

// ─── Artwork Card ─────────────────────────────────────────────────────────────
function ArtCard({
  src,
  title,
  desc,
  index,
}: {
  src: string;
  title: string;
  desc: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      className="art-card"
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.12 }}
    >
      <div className="art-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={title} className="art-img" />
      </div>
      <div className="art-info">
        <h3 className="art-title">{title}</h3>
        <p className="art-desc">{desc}</p>
      </div>
    </motion.article>
  );
}

// ─── Sample artwork data (replace src paths as images are added) ──────────────
const artworks = [
  { title: "Echoes of Persepolis", desc: "Acrylic on canvas, 2024", src: "/images/art-01.jpg" },
  { title: "Rumi's Garden", desc: "Mixed media, 2023", src: "/images/art-02.jpg" },
  { title: "Saffron Twilight", desc: "Watercolour, 2024", src: "/images/art-03.jpg" },
  { title: "Nastaliq Dreams", desc: "Ink & gold leaf, 2023", src: "/images/art-04.jpg" },
  { title: "The Pomegranate Wall", desc: "Oil on linen, 2022", src: "/images/art-05.jpg" },
  { title: "Desert Geometry", desc: "Digital print, 2024", src: "/images/art-06.jpg" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Intro overlay */}
      <AnimatePresence onExitComplete={() => setIntroDone(true)}>
        {showIntro && (
          <motion.div
            key="intro"
            className="intro-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <AALogo onComplete={() => {}} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main site */}
      <motion.div
        className="site"
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ── Nav ── */}
        <header className="nav">
          <div className="nav-logo">
            <svg viewBox="0 0 80 52" width="52" height="34" fill="none">
              <path d="M 6 44 L 20 8 L 34 44" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 11 30 L 29 30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 44 44 L 58 8 L 72 44" stroke="#f5ede0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 49 30 L 67 30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>TheArtOfAshley</span>
          </div>
          <nav className="nav-links">
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-bg-pattern" aria-hidden />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/elephant.png" alt="" aria-hidden className="hero-elephant" />
          <div className="hero-content">
            <motion.p
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Iranian Contemporary Art
            </motion.p>
            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 30 }}
              transition={{ delay: 0.5, duration: 0.9 }}
            >
              Where Ancient<br />Heritage Meets<br />Modern Expression
            </motion.h1>
            <motion.div
              className="hero-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: introDone ? 1 : 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            />
            <motion.a
              href="#gallery"
              className="hero-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: introDone ? 1 : 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Explore the Collection
            </motion.a>
          </div>
          <motion.div
            className="hero-scroll-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: introDone ? 1 : 0 }}
            transition={{ delay: 1.6 }}
          >
            <span>Scroll</span>
            <div className="scroll-bar" />
          </motion.div>
        </section>

        {/* ── Gallery ── */}
        <section id="gallery" className="gallery-section">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">The Collection</h2>
            <p className="section-sub">
              Original works rooted in Persian tradition — calligraphy, geometric form, and the poetry of colour.
            </p>
          </div>
          <div className="gallery-grid">
            {artworks.map((art, i) => (
              <ArtCard key={art.title} {...art} index={i} />
            ))}
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="about-section">
          <div className="about-ornament" aria-hidden>
            <svg viewBox="0 0 120 120" width="120" height="120" fill="none">
              <polygon points="60,4 116,32 116,88 60,116 4,88 4,32" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
              <polygon points="60,18 102,40 102,80 60,102 18,80 18,40" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
              <circle cx="60" cy="60" r="16" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />
            </svg>
          </div>
          <div className="about-content">
            <span className="section-label">Artist</span>
            <h2 className="section-title">Ashley's Vision</h2>
            <p>
              Drawing from the rich tapestry of Iranian artistic heritage — from the intricate tilework of Isfahan to the lyrical
              sweep of Persian calligraphy — Ashley creates works that breathe new life into ancient visual languages.
            </p>
            <p>
              Each piece is a conversation between worlds: the timeless geometry of Safavid architecture and the textures of
              contemporary life. Pomegranates, arabesque patterns, and fragments of Farsi poetry reappear as motifs that
              honour her roots while speaking to the present moment.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <span className="section-label">Reach Out</span>
            <h2 className="section-title">Commission & Enquiries</h2>
            <p className="contact-tagline">
              Interested in a custom piece or acquiring an existing work? Ashley would love to hear from you.
            </p>
            <a href="tel:6043394005" className="contact-phone">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.45 5.45l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              604 339 4005
            </a>
          </div>
          <div className="contact-pattern" aria-hidden />
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <div className="footer-logo">
            <svg viewBox="0 0 80 52" width="40" height="26" fill="none">
              <path d="M 6 44 L 20 8 L 34 44" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 11 30 L 29 30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 44 44 L 58 8 L 72 44" stroke="#f5ede0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 49 30 L 67 30" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p>© {new Date().getFullYear()} TheArtOfAshley · All rights reserved</p>
        </footer>
      </motion.div>

      {/* ── Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink:    #1a1208;
          --cream:  #f5ede0;
          --gold:   #c9a84c;
          --gold2:  #e8c76a;
          --rust:   #8b3a2a;
          --sage:   #4a5e4a;
          --mid:    #2d2115;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--ink);
          color: var(--cream);
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
        }

        /* ── Intro ── */
        .intro-screen {
          position: fixed; inset: 0; z-index: 9999;
          background: var(--ink);
          display: flex; align-items: center; justify-content: center;
        }
        .logo-wrapper {
          display: flex; flex-direction: column;
          align-items: center; gap: 20px;
        }
        .logo-title {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 200;
          font-size: 0.7rem;
          color: var(--cream);
          letter-spacing: 0.35em;
        }
        .logo-rule {
          width: 80px; height: 1px;
          background: var(--gold);
          transform-origin: left;
        }

        /* ── Nav ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 48px;
          background: linear-gradient(to bottom, rgba(26,18,8,0.95), transparent);
        }
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 200; font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--cream);
          text-decoration: none;
        }
        .nav-links { display: flex; gap: 36px; }
        .nav-links a {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300; font-size: 0.7rem;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(245,237,224,0.7);
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-links a:hover { color: var(--gold); }

        /* ── Hero ── */
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          padding: 0 10vw;
          overflow: hidden;
        }
        .hero-bg-pattern {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 70% 60% at 75% 50%, rgba(139,58,42,0.18), transparent),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.08), transparent);
        }
        .hero-bg-pattern::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(201,168,76,0.06)' stroke-width='0.5'%3E%3Cpolygon points='30,2 58,16 58,44 30,58 2,44 2,16'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 60px 60px;
        }
        .hero-elephant {
          position: absolute;
          right: 2%;
          top: 50%;
          transform: translateY(-50%);
          width: clamp(420px, 52%, 760px);
          height: auto;
          filter: grayscale(100%) brightness(0.55);
          opacity: 0.18;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: luminosity;
        }
        .hero-content { position: relative; z-index: 1; max-width: 600px; }
        .hero-eyebrow {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300; font-size: 0.7rem;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300; font-size: clamp(3rem, 6vw, 5.5rem);
          line-height: 1.1;
          color: var(--cream);
          margin-bottom: 32px;
        }
        .hero-rule {
          width: 80px; height: 1px;
          background: var(--gold);
          transform-origin: left;
          margin-bottom: 36px;
        }
        .hero-cta {
          display: inline-block;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300; font-size: 0.7rem;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--ink);
          background: var(--gold);
          padding: 14px 32px;
          text-decoration: none;
          transition: background 0.3s, color 0.3s;
        }
        .hero-cta:hover { background: var(--gold2); }
        .hero-scroll-hint {
          position: absolute; bottom: 40px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column;
          align-items: center; gap: 10px;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(245,237,224,0.4);
        }
        .scroll-bar {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }

        /* ── Section shared ── */
        .section-label {
          display: block;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300; font-size: 0.62rem;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300; font-size: clamp(2rem, 4vw, 3.4rem);
          color: var(--cream);
          margin-bottom: 20px;
        }

        /* ── Gallery ── */
        .gallery-section { padding: 100px 8vw; }
        .section-header {
          text-align: center; max-width: 560px;
          margin: 0 auto 72px;
        }
        .section-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.1rem;
          color: rgba(245,237,224,0.65);
          line-height: 1.7;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3px;
        }
        .art-card { position: relative; cursor: pointer; overflow: hidden; }
        .art-img-wrap { position: relative; aspect-ratio: 3/2; overflow: hidden; background: var(--mid); }
        .art-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .art-card:hover .art-img { transform: scale(1.04); }
        .art-info { padding: 18px 4px 28px; }
        .art-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400; font-size: 1.2rem;
          color: var(--cream); margin-bottom: 4px;
        }
        .art-desc {
          font-size: 0.65rem; letter-spacing: 0.12em;
          color: rgba(245,237,224,0.5);
          text-transform: uppercase;
        }

        /* ── About ── */
        .about-section {
          padding: 120px 10vw;
          display: grid; grid-template-columns: auto 1fr;
          gap: 60px; align-items: start;
          background: var(--mid);
          position: relative; overflow: hidden;
        }
        .about-ornament { flex-shrink: 0; padding-top: 8px; }
        .about-content p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; line-height: 1.9;
          color: rgba(245,237,224,0.8);
          margin-bottom: 20px;
        }

        /* ── Contact ── */
        .contact-section {
          padding: 120px 10vw;
          display: grid; grid-template-columns: 1fr auto;
          gap: 40px; align-items: center;
          position: relative; overflow: hidden;
        }
        .contact-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.1rem;
          color: rgba(245,237,224,0.65);
          margin-bottom: 36px;
          max-width: 480px;
        }
        .contact-phone {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 300; font-size: 1.3rem;
          letter-spacing: 0.12em;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.3);
          padding-bottom: 8px;
          transition: color 0.3s, border-color 0.3s;
        }
        .contact-phone:hover { color: var(--gold2); border-color: var(--gold2); }
        .contact-pattern {
          width: 180px; height: 180px; flex-shrink: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(201,168,76,0.2)' stroke-width='0.8'%3E%3Cpolygon points='90,6 174,48 174,132 90,174 6,132 6,48'/%3E%3Cpolygon points='90,22 158,58 158,122 90,158 22,122 22,58'/%3E%3Cpolygon points='90,38 142,68 142,112 90,142 38,112 38,68'/%3E%3Ccircle cx='90' cy='90' r='30'/%3E%3C/g%3E%3C/svg%3E");
        }

        /* ── Footer ── */
        .footer {
          padding: 40px 10vw;
          border-top: 1px solid rgba(201,168,76,0.15);
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.62rem; letter-spacing: 0.15em;
          color: rgba(245,237,224,0.35);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .nav { padding: 18px 24px; }
          .nav-links { display: none; }
          .hero { padding: 0 6vw; }
          .about-section { grid-template-columns: 1fr; }
          .about-ornament { display: none; }
          .contact-section { grid-template-columns: 1fr; }
          .contact-pattern { display: none; }
          .gallery-section { padding: 60px 4vw; }
          .gallery-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}