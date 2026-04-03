import { useState } from "react";

export default function Categories({ CATEGORIES }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="section section-bg-light">
      <h2 className="section-title">Browse by category</h2>
      <p className="section-subtitle">
        Find exactly what you need across 300+ service categories
      </p>

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
  );
}