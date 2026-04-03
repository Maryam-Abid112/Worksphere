import { useState, useEffect } from "react";


/* ── Data ───────────────────────────────────────── */

const CATEGORIES = [
  { icon: "💻", label: "Programming & Tech" },
  { icon: "🎨", label: "Graphics & Design" },
  { icon: "📣", label: "Digital Marketing" },
  { icon: "✍️", label: "Writing & Translation" },
  { icon: "🎬", label: "Video & Animation" },
  { icon: "🤖", label: "AI Services" },
  { icon: "🎵", label: "Music & Audio" },
  { icon: "💼", label: "Business" },
  { icon: "📊", label: "Consulting" },
];

const POPULAR_SERVICES = [
  { label: "Vibe Coding",                    bg: "#1a1a2e", accent: "#7c3aed", emoji: "⚡" },
  { label: "Website Development",            bg: "#0f2027", accent: "#06b6d4", emoji: "🌐" },
  { label: "Video Editing",                  bg: "#1a0a2e", accent: "#ec4899", emoji: "🎬" },
  { label: "Software Development",           bg: "#0a1f0f", accent: "#10b981", emoji: "🛠️" },
  { label: "Book Publishing",                bg: "#1f1200", accent: "#f59e0b", emoji: "📚" },
  { label: "Architecture & Interior Design", bg: "#1a0a0a", accent: "#ef4444", emoji: "🏛️" },
];

const FREELANCERS = [
  { name: "Ayesha K.", role: "UI/UX Designer",  rate: "$45/hr", rating: 4.9, reviews: 312, avatar: "AK", color: "#7c3aed" },
  { name: "Raza M.",   role: "Full Stack Dev",   rate: "$65/hr", rating: 5.0, reviews: 218, avatar: "RM", color: "#06b6d4" },
  { name: "Sara L.",   role: "Content Writer",   rate: "$30/hr", rating: 4.8, reviews: 451, avatar: "SL", color: "#ec4899" },
  { name: "Ahmad T.",  role: "Video Editor",     rate: "$40/hr", rating: 4.9, reviews: 187, avatar: "AT", color: "#10b981" },
];

const STATS = [
  { value: "4M+",  label: "Freelancers"  },
  { value: "180+", label: "Countries"    },
  { value: "99%",  label: "Satisfaction" },
  { value: "50K+", label: "Skills"       },
];

const FOOTER_LINKS = {
  "For Clients":     ["How it Works", "Browse Talent", "Post a Job", "Enterprise", "Success Stories"],
  "For Freelancers": ["Find Work", "Create Profile", "Community", "Forum", "Resources"],
  "Company":         ["About Us", "Careers", "Press", "Partnerships", "Privacy Policy"],
  "Support":         ["Help Center", "Safety", "Community Standards", "Terms of Service", "Cookie Policy"],
};

const TESTIMONIALS = [
  { text: "Found an amazing developer within hours. The quality exceeded our expectations!", name: "Maria G.", company: "TechStartup", avatar: "MG", color: "#7c3aed" },
  { text: "Consistent, professional, and fast. This platform transformed how we hire talent.", name: "James P.", company: "DesignCo",   avatar: "JP", color: "#06b6d4" },
  { text: "From logo to full brand kit in 48 hours. Absolutely phenomenal experience.",       name: "Priya S.", company: "BrandHouse", avatar: "PS", color: "#ec4899" },
];

const TRUSTED_BRANDS = ["Meta", "Google", "Netflix", "Shopify", "Stripe", "Airbnb"];
const POPULAR_TAGS   = ["Logo Design", "WordPress", "React Dev", "Copywriting", "Video Ads"];
const SOCIAL_ICONS   = ["𝕏", "in", "f", "▶"];
const LEGAL_LINKS    = ["Privacy", "Terms", "Cookies", "Accessibility"];

/* ── Component ───────────────────────────────────── */

export default function FreelancerHome() {
  const [search,         setSearch]         = useState("");
  const [scrolled,       setScrolled]       = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>

      {/* ── Navbar ─────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
        <div className="nav-left">
          <div className="logo">Worksphere<span>.</span></div>
          <div className="nav-links">
            {["Explore", "How it Works", "Pricing"].map(l => (
              <span key={l} className="nav-link">{l}</span>
            ))}
          </div>
        </div>
        <div className="nav-right">
          <span className="nav-link">Sign In</span>
          <button className="btn-primary sm">Join Free</button>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="hero">
        <div className="hero-glow-top" />
        <div className="hero-glow-bottom" />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-text">✦ Trusted by 40,000+ businesses</span>
          </div>

          <h1 className="hero-title">
            Hire the world's best{" "}
            <span className="hero-title-accent">freelance</span>{" "}
            talent
          </h1>

          <p className="hero-subtitle">
            Connect with skilled professionals ready to bring your vision to life.
            Fast, reliable, and exceptional.
          </p>

          <div className="search-bar">
            <input
              className="search-input"
              placeholder="Search for any service..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="btn-primary">Search</button>
          </div>

          <div className="popular-tags">
            <span className="popular-label">Popular:</span>
            {POPULAR_TAGS.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Floating freelancer preview cards */}
        <div className="hero-floating-cards">
          {FREELANCERS.slice(0, 2).map(f => (
            <div key={f.name} className="hero-floating-card">
              <div className="avatar avatar-md" style={{ background: f.color }}>
                {f.avatar}
              </div>
              <div className="hero-floating-card-info">
                <div className="hero-floating-card-name">{f.name}</div>
                <div className="hero-floating-card-role">{f.role}</div>
              </div>
              <div className="hero-floating-card-meta">
                <div className="hero-floating-card-rating">★ {f.rating}</div>
                <div className="hero-floating-card-rate">{f.rate}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Trusted By ─────────────────────────────── */}
      <div className="trusted-strip">
        <span className="trusted-label">Trusted by:</span>
        {TRUSTED_BRANDS.map(b => (
          <span key={b} className="trusted-brand">{b}</span>
        ))}
      </div>

      {/* ── Categories ─────────────────────────────── */}
      <section className="section section-bg-light">
        <h2 className="section-title">Browse by category</h2>
        <p className="section-subtitle">Find exactly what you need across 300+ service categories</p>
        <div className="categories-grid">
          {CATEGORIES.map(c => (
            <div
              key={c.label}
              className={`cat-card ${activeCategory === c.label ? "active" : ""}`}
              onClick={() => setActiveCategory(c.label)}
            >
              <div className="cat-icon">{c.icon}</div>
              <div className="cat-label">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular Services ───────────────────────── */}
      <section className="section section-bg-white">
        <h2 className="section-title">Popular services</h2>
        <p className="section-subtitle">What everyone's working on right now</p>
        <div className="services-scroll">
          {POPULAR_SERVICES.map(s => (
            <div key={s.label} className="service-card" style={{ background: s.bg }}>
              <div className="service-emoji">{s.emoji}</div>
              <div className="service-label">{s.label}</div>
              <div className="service-accent-bar" style={{ background: s.accent }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────── */}
      <section className="section section-bg-dark">
        <div className="stats-grid">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Top Freelancers ────────────────────────── */}
      <section className="section section-bg-light">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Top-rated freelancers</h2>
            <p className="section-subtitle">Vetted professionals ready to start today</p>
          </div>
          <button className="btn-outline">Browse All Talent</button>
        </div>
        <div className="freelancers-grid">
          {FREELANCERS.map(f => (
            <div key={f.name} className="freelancer-card">
              <div className="freelancer-card-top">
                <div className="avatar avatar-lg" style={{ background: f.color }}>
                  {f.avatar}
                </div>
                <div>
                  <div className="freelancer-name">{f.name}</div>
                  <div className="freelancer-role">{f.role}</div>
                </div>
              </div>
              <div className="freelancer-card-bottom">
                <div>
                  <span className="freelancer-rating">★ {f.rating}</span>
                  <span className="freelancer-reviews">({f.reviews})</span>
                </div>
                <div className="freelancer-rate">{f.rate}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────── */}
      <section className="section section-bg-white">
        <h2 className="section-title">What clients say</h2>
        <p className="section-subtitle">Real experiences from real businesses</p>
        <div className="testimonials-row">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="avatar avatar-sm" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-company">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* ── Footer ─────────────────────────────────── */}
      <footer>
        <div className="footer-grid">

          {/* Brand column */}
          <div>
            <div className="footer-logo">Worksphere<span>.</span></div>
            <p className="footer-desc">
              The world's marketplace for freelance talent. Find the right person, right away.
            </p>
            <div className="footer-socials">
              {SOCIAL_ICONS.map(s => (
                <div key={s} className="footer-social-icon">{s}</div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <div className="footer-col-title">{section}</div>
              {links.map(link => (
                <a key={link} href="#" className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Worksphere Inc. All rights reserved.</span>
          <div className="footer-legal-links">
            {LEGAL_LINKS.map(l => (
              <a key={l} href="#" className="footer-legal-link">{l}</a>
            ))}
          </div>
          <div className="footer-locale">
            <span className="footer-locale-text">🌐 English</span>
            <span className="footer-locale-divider">|</span>
            <span className="footer-locale-text">$ USD</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
