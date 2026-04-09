import React, { useState } from "react";

const ALL_PROJECTS = [
  { title: "Brand Identity System", freelancer: "Aisha Noor", avatar: "AN", color: "#7c3aed", status: "in-progress", progress: 68, budget: "$2,400", due: "Apr 18", category: "Design" },
  { title: "E-Commerce Platform", freelancer: "Marco Silva", avatar: "MS", color: "#3b82f6", status: "review", progress: 92, budget: "$5,800", due: "Apr 10", category: "Development" },
  { title: "Content Strategy Q2", freelancer: "Priya Mehta", avatar: "PM", color: "#ec4899", status: "in-progress", progress: 34, budget: "$1,200", due: "May 2", category: "Content" },
  { title: "Mobile App UX Audit", freelancer: "Jordan Lee", avatar: "JL", color: "#10b981", status: "pending", progress: 10, budget: "$900", due: "May 15", category: "Design" },
  { title: "SEO Campaign Setup", freelancer: "Carlos V.", avatar: "CV", color: "#f59e0b", status: "completed", progress: 100, budget: "$650", due: "Mar 30", category: "Marketing" },
  { title: "API Integration Sprint", freelancer: "Dev Anand", avatar: "DA", color: "#06b6d4", status: "in-progress", progress: 55, budget: "$3,200", due: "Apr 25", category: "Development" },
];

const STATUS_STYLES = {
  "in-progress": { label: "In Progress", cls: "prj-pill--progress" },
  review: { label: "In Review", cls: "prj-pill--review" },
  pending: { label: "Pending", cls: "prj-pill--pending" },
  completed: { label: "Completed", cls: "prj-pill--done" },
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("list");

  const filtered = filter === "all" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.status === filter);

  return (
    <div className="prj-page">
      <div className="prj-header">
        <div>
          <h1 className="prj-title">Projects</h1>
          <p className="prj-sub">{ALL_PROJECTS.length} total · {ALL_PROJECTS.filter(p => p.status === "in-progress").length} active</p>
        </div>
        <button className="prj-new-btn">+ New Project</button>
      </div>

      <div className="prj-toolbar">
        <div className="prj-filters">
          {["all", "in-progress", "review", "pending", "completed"].map(f => (
            <button key={f} className={`prj-filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : STATUS_STYLES[f].label}
            </button>
          ))}
        </div>
        <div className="prj-view-toggle">
          <button className={`prj-view-btn ${view === "list" ? "active" : ""}`} onClick={() => setView("list")}>≡</button>
          <button className={`prj-view-btn ${view === "grid" ? "active" : ""}`} onClick={() => setView("grid")}>⊞</button>
        </div>
      </div>

      {view === "list" ? (
        <div className="prj-list">
          {filtered.map((p, i) => {
            const { label, cls } = STATUS_STYLES[p.status];
            return (
              <div className="prj-row" key={i}>
                <div className="prj-row__left">
                  <div className="prj-row__avatar" style={{ background: `${p.color}22`, color: p.color }}>{p.avatar}</div>
                  <div>
                    <p className="prj-row__name">{p.title}</p>
                    <p className="prj-row__freelancer">{p.freelancer} · {p.category}</p>
                  </div>
                </div>
                <div className="prj-row__progress">
                  <div className="prj-row__bar">
                    <div className="prj-row__fill" style={{ width: `${p.progress}%`, background: p.color }} />
                  </div>
                  <span className="prj-row__pct">{p.progress}%</span>
                </div>
                <div className="prj-row__right">
                  <span className={`prj-pill ${cls}`}>{label}</span>
                  <span className="prj-row__budget">{p.budget}</span>
                  <span className="prj-row__due">Due {p.due}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="prj-grid">
          {filtered.map((p, i) => {
            const { label, cls } = STATUS_STYLES[p.status];
            return (
              <div className="prj-card" key={i}>
                <div className="prj-card__top">
                  <div className="prj-card__avatar" style={{ background: `${p.color}22`, color: p.color }}>{p.avatar}</div>
                  <span className={`prj-pill ${cls}`}>{label}</span>
                </div>
                <p className="prj-card__title">{p.title}</p>
                <p className="prj-card__free">{p.freelancer}</p>
                <div className="prj-card__bar-wrap">
                  <div className="prj-card__bar">
                    <div className="prj-card__fill" style={{ width: `${p.progress}%`, background: p.color }} />
                  </div>
                  <span className="prj-card__pct">{p.progress}%</span>
                </div>
                <div className="prj-card__footer">
                  <span className="prj-card__budget">{p.budget}</span>
                  <span className="prj-card__due">Due {p.due}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
