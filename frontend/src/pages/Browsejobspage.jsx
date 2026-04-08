import { useState } from "react";
import Sidebar from "./Sidebar";

const JOBS = [
  { id: 1, title: "Senior React Engineer", client: "Stripe Inc.", budget: "$2,400", deadline: "May 12", category: "Frontend", skills: ["React", "TypeScript", "CSS"], desc: "Build a performant, accessible design system component library." },
  { id: 2, title: "Node.js API + Auth System", client: "Notion Labs", budget: "$1,800", deadline: "May 18", category: "Backend", skills: ["Node.js", "Redis", "JWT"], desc: "REST API with OAuth2, rate limiting, and Redis caching layer." },
  { id: 3, title: "Figma Design System", client: "Linear HQ", budget: "$1,100", deadline: "May 24", category: "Design", skills: ["Figma", "Tokens", "DS"], desc: "Create a scalable, documented component library in Figma." },
  { id: 4, title: "Python Data Pipeline", client: "DataLabs AI", budget: "$900", deadline: "Jun 1", category: "Data", skills: ["Python", "Pandas", "Airflow"], desc: "ETL pipeline for processing 10M+ daily data events." },
  { id: 5, title: "Vue 3 SPA Frontend", client: "Craft CMS", budget: "$1,400", deadline: "Jun 5", category: "Frontend", skills: ["Vue.js", "Pinia", "Vite"], desc: "Single-page app with Composition API and Pinia stores." },
  { id: 6, title: "Brand Identity Package", client: "Seed Studio", budget: "$1,600", deadline: "Jun 8", category: "Design", skills: ["Illustrator", "Branding", "Motion"], desc: "Logo, color system, typography, and motion guidelines." },
  { id: 7, title: "GraphQL API + Schema", client: "Shopify Dev", budget: "$2,100", deadline: "Jun 12", category: "Backend", skills: ["GraphQL", "Apollo", "Postgres"], desc: "Schema design, resolvers, and DataLoader optimization." },
  { id: 8, title: "Stripe Payments Integration", client: "PaidFast", budget: "$800", deadline: "Jun 15", category: "Backend", skills: ["Stripe", "Node.js", "Webhooks"], desc: "Checkout, subscriptions, and webhook event handling." },
];

const CATS = ["All", "Frontend", "Backend", "Design", "Data"];
const BUDGETS = [["all", "Any budget"], ["low", "< $900"], ["mid", "$900 – $1.5k"], ["high", "> $1.5k"]];

export default function BrowseJobsPage({ navigate }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [budget, setBudget] = useState("all");

  const filtered = JOBS.filter(j => {
    const q = search.toLowerCase();
    const matchQ = !q || j.title.toLowerCase().includes(q) || j.skills.some(s => s.toLowerCase().includes(q)) || j.client.toLowerCase().includes(q);
    const matchC = cat === "All" || j.category === cat;
    const n = parseInt(j.budget.replace(/\D/g, ""));
    const matchB = budget === "all" || (budget === "low" && n < 900) || (budget === "mid" && n >= 900 && n <= 1500) || (budget === "high" && n > 1500);
    return matchQ && matchC && matchB;
  });

  return (
    <div className="app-shell">
      <Sidebar currentPage="browse" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Browse Jobs</div>
          <div className="topbar-right">
            <span style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "'JetBrains Mono',monospace" }}>{filtered.length} results</span>
          </div>
        </div>

        <div className="content">
          <div className="page-header">
            <div>
              <div className="page-heading">Find Work</div>
              <div className="page-sub">Browse open projects matching your skills</div>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="card mb-6" style={{ marginBottom: 18 }}>
            <div className="flex gap-3 mb-4" style={{ alignItems: "center" }}>
              <div className="search-wrap">
                <span className="search-icon">⌕</span>
                <input
                  className="search-input"
                  placeholder="Search by title, skill, or client…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3" style={{ flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>Category</span>
              {CATS.map(c => <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
              <div style={{ width: 1, height: 18, background: "var(--border)", margin: "0 4px" }} />
              <span style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 700, letterSpacing: "0.8px", textTransform: "uppercase" }}>Budget</span>
              {BUDGETS.map(([val, label]) => <button key={val} className={`chip ${budget === val ? "active" : ""}`} onClick={() => setBudget(val)}>{label}</button>)}
            </div>
          </div>

          {/* Grid */}
          <div className="jobs-grid">
            {filtered.map(job => (
              <div key={job.id} className="job-card" onClick={() => navigate("job-details")}>
                <div className="job-category">{job.category}</div>
                <div className="job-title">{job.title}</div>
                <div className="job-client">{job.client}</div>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 12 }}>{job.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 4 }}>
                  {job.skills.map(s => <span key={s} className="tag tag-default">{s}</span>)}
                </div>
                <div className="job-footer">
                  <div className="job-budget">{job.budget}</div>
                  <div className="job-deadline">Due {job.deadline}</div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div style={{ gridColumn: "1/-1" }}>
                <div className="empty-state">
                  <div className="empty-icon">⌕</div>
                  <div className="empty-text">No jobs match your filters</div>
                  <button className="btn btn-ghost btn-sm" onClick={() => { setSearch(""); setCat("All"); setBudget("all"); }}>Clear filters</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}