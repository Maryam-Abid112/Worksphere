export default function Hero({ search, setSearch, POPULAR_TAGS, FREELANCERS }) {
  return (
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
  );
}