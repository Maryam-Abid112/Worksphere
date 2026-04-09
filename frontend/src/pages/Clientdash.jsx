import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const PROJECTS = [
  { title: "Brand Identity System", freelancer: "Aisha Noor", avatar: "AN", color: "#7c3aed", status: "in-progress", progress: 68, budget: "$2,400", due: "Apr 18" },
  { title: "E-Commerce Platform", freelancer: "Marco Silva", avatar: "MS", color: "#3b82f6", status: "review", progress: 92, budget: "$5,800", due: "Apr 10" },
  { title: "Content Strategy Q2", freelancer: "Priya Mehta", avatar: "PM", color: "#ec4899", status: "in-progress", progress: 34, budget: "$1,200", due: "May 2" },
  { title: "Mobile App UX Audit", freelancer: "Jordan Lee", avatar: "JL", color: "#10b981", status: "pending", progress: 10, budget: "$900", due: "May 15" },
];

const STATUS_MAP = {
  "in-progress": ["In Progress", "status--progress"],
  review: ["In Review", "status--review"],
  pending: ["Pending", "status--pending"],
};

export default function Dashboard() {
  const [filter, setFilter] = React.useState("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.status === filter);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar__brand">
          <span className="brand-name">Worksphere</span>
        </div>

       <nav className="sidebar__nav">
  {[
    { name: "Dashboard", path: "/" },
    { name: "Home", path: "/ClientHome" },
    { name: "Projects", path: "/Project" },
    { name: "Freelancers", path: "/" },
    { name: "Messages", path: "/Messages" },
    { name: "Jobs", path: "/Jobs" },
    { name: "Settings", path: "/Settings" },
  ].map((item, i) => (
    <Link to={item.path} key={i} className="nav-link">
      <div className={`nav-item ${i === 0 ? "active" : ""}`}>
        <span className="nav-icon">◧</span>
        <span className="nav-label">{item.name}</span>
      </div>
    </Link>
  ))}
</nav>

        <div className="sidebar__footer">
          <div className="user-card">
            <div className="user-avatar">RK</div>
            <div className="user-info">
              <p className="user-name">Raza Khan</p>
              <p className="user-role">Client Pro</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <div>
            <h1 className="page-title">Dashboard</h1>
            <p className="page-sub">Monday, April 6 — 4 active projects</p>
          </div>
        </header>

        {/* Stats Row */}
<section className="stats-row">
  <div className="stat-card" style={{ "--c-accent": "#7c3aed", "--c-glow": "rgba(124,58,237,0.10)" }}>
    <div className="stat-card__top">
      <span className="stat-label">Active Projects</span>
      <div className="stat-icon">◧</div>
    </div>
    <div className="stat-value">4</div>
    <div className="stat-delta up">↑ +1 this month</div>
  </div>

  <div className="stat-card" style={{ "--c-accent": "#10b981", "--c-glow": "rgba(16,185,129,0.10)" }}>
    <div className="stat-card__top">
      <span className="stat-label">Total Spent</span>
      <div className="stat-icon" style={{ color: "#10b981", background: "rgba(16,185,129,0.10)" }}>◈</div>
    </div>
    <div className="stat-value">$10.3k</div>
    <div className="stat-delta up">↑ $2.4k this month</div>
  </div>

  <div className="stat-card" style={{ "--c-accent": "#3b82f6", "--c-glow": "rgba(59,130,246,0.10)" }}>
    <div className="stat-card__top">
      <span className="stat-label">Freelancers</span>
      <div className="stat-icon" style={{ color: "#3b82f6", background: "rgba(59,130,246,0.10)" }}>◉</div>
    </div>
    <div className="stat-value">7</div>
    <div className="stat-delta up">↑ 2 new hires</div>
  </div>

  <div className="stat-card" style={{ "--c-accent": "#ec4899", "--c-glow": "rgba(236,72,153,0.10)" }}>
    <div className="stat-card__top">
      <span className="stat-label">Pending Reviews</span>
      <div className="stat-icon" style={{ color: "#ec4899", background: "rgba(236,72,153,0.10)" }}>◆</div>
    </div>
    <div className="stat-value">2</div>
    <div className="stat-delta flag">◈ Action needed</div>
  </div>
</section>

{/* Quick Strip */}
<section className="quick-strip">
  <div className="quick-card">
    <div className="quick-icon" style={{ background: "rgba(124,58,237,0.10)" }}>💰</div>
    <div>
      <p className="quick-card__label">Next Invoice Due</p>
      <p className="quick-card__value">Apr 10</p>
      <p className="quick-card__sub">Marco Silva · $5,800</p>
    </div>
  </div>

  <div className="quick-card">
    <div className="quick-icon" style={{ background: "rgba(16,185,129,0.10)" }}>✦</div>
    <div>
      <p className="quick-card__label">Milestones This Week</p>
      <p className="quick-card__value">3</p>
      <p className="quick-card__sub">2 approved · 1 pending</p>
    </div>
  </div>

  <div className="quick-card">
    <div className="quick-icon" style={{ background: "rgba(236,72,153,0.10)" }}>✉</div>
    <div>
      <p className="quick-card__label">Unread Messages</p>
      <p className="quick-card__value">2</p>
      <p className="quick-card__sub">Aisha & Marco replied</p>
    </div>
  </div>
</section>

        {/* Projects Panel */}
        <section className="panel">
          <div className="panel__header">
            <h2 className="panel__title">Projects</h2>
            <div className="filter-tabs">
              {["all", "in-progress", "review", "pending"].map((f) => (
                <button
                  key={f}
                  className={`filter-tab ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="project-list">
            {filteredProjects.map((p, index) => {
              const [label, cls] = STATUS_MAP[p.status];
              return (
                <div key={index} className="project-card">
                  <div className="project-card__left">
                    <div
                      className="project-avatar"
                      style={{ color: p.color }}
                    >
                      {p.avatar}
                    </div>
                    <div>
                      <h3 className="project-title">{p.title}</h3>
                      <p className="project-freelancer">{p.freelancer}</p>
                    </div>
                  </div>

                  <div className="project-card__mid">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${p.progress}%`,
                          background: p.color,
                        }}
                      ></div>
                    </div>
                    <span className="progress-pct">{p.progress}%</span>
                  </div>

                  <div className="project-card__right">
                    <span className={`status-pill ${cls}`}>{label}</span>
                    <span className="project-budget">{p.budget}</span>
                    <span className="project-due">Due {p.due}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}