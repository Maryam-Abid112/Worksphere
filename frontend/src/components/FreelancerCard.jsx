import { useState } from "react";

const avatarColors = [
  ["#7c3aed", "#ede9fe"], ["#5b21b6", "#ddd6fe"], ["#a78bfa", "#4c1d95"],
  ["#6d28d9", "#f5f3ff"], ["#8b5cf6", "#ede9fe"], ["#7c3aed", "#c4b5fd"],
  ["#4c1d95", "#ddd6fe"], ["#7c3aed", "#ede9fe"], ["#6d28d9", "#f5f3ff"],
];

function StarRating({ rating }) {
  return (
    <span className="star-rating">
      {"★".repeat(Math.floor(rating))}
      <span className="star-empty">{"★".repeat(5 - Math.floor(rating))}</span>
      <span className="rating-number">{rating}</span>
    </span>
  );
}

export default function FreelancerCard({ f, delay }) {
  const [hovered, setHovered] = useState(false);
  const [bg, text] = avatarColors[(f.id - 1) % avatarColors.length];

  return (
    <div
      className={`freelancer-card ${hovered ? "hovered" : ""}`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`availability ${f.available ? "available" : "busy"}`}>
        {f.available ? "● Available" : "○ Busy"}
      </div>

      <div
        className="avatar"
        style={{ background: `linear-gradient(135deg, ${bg}, ${text})` }}
      >
        {f.avatar}
      </div>

      <div className="freelancer-name">{f.name}</div>
      <div className="freelancer-title">{f.title}</div>

      <div className="rating-section">
        <StarRating rating={f.rating} />
        <span className="reviews">({f.reviews} reviews)</span>
      </div>

      <div className="tags">
        {f.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="rate-projects">
        <span className="rate">{f.rate}</span>
        <span className="projects">{f.projects} projects</span>
      </div>

      <button className="hire-btn">{hovered ? "View Profile →" : "Hire Me"}</button>
    </div>
  );
}