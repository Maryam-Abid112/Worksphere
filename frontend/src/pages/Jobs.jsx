import React, { useState } from "react";

const MY_JOBS = [
  { title: "UI Designer for SaaS Dashboard", status: "open", applicants: 14, posted: "Apr 5", budget: "$2,000–$4,000", category: "Design" },
  { title: "React Developer — 3-Month Contract", status: "open", applicants: 28, posted: "Apr 2", budget: "$8,000–$12,000", category: "Development" },
  { title: "Social Media Manager", status: "closed", applicants: 9, posted: "Mar 20", budget: "$600/mo", category: "Marketing" },
];

const APPLICANTS = [
  { name: "Sofia Reyes", avatar: "SR", color: "#ec4899", role: "Motion Designer", rate: "$85/hr", match: 96 },
  { name: "Jordan Lee", avatar: "JL", color: "#10b981", role: "UX Researcher", rate: "$90/hr", match: 88 },
  { name: "Dev Anand", avatar: "DA", color: "#06b6d4", role: "Backend Eng", rate: "$110/hr", match: 79 },
];

export default function Jobs() {
  const [tab, setTab] = useState("posted");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <div>
          <h1 className="jobs-title">Jobs</h1>
          <p className="jobs-sub">Manage your posted jobs and applicants</p>
        </div>
        <button className="jobs-post-btn" onClick={() => setShowForm(!showForm)}>+ Post a Job</button>
      </div>

      {showForm && (
        <div className="jobs-form-card">
          <h3 className="jobs-form-title">New Job Posting</h3>
          <div className="jobs-form-grid">
            <div className="jobs-form-field">
              <label className="jobs-form-label">Job Title</label>
              <input className="jobs-form-input" placeholder="e.g. React Developer" />
            </div>
            <div className="jobs-form-field">
              <label className="jobs-form-label">Category</label>
              <select className="jobs-form-input">
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>Content</option>
              </select>
            </div>
            <div className="jobs-form-field">
              <label className="jobs-form-label">Budget Range</label>
              <input className="jobs-form-input" placeholder="e.g. $2,000 – $5,000" />
            </div>
            <div className="jobs-form-field">
              <label className="jobs-form-label">Duration</label>
              <input className="jobs-form-input" placeholder="e.g. 1 month" />
            </div>
            <div className="jobs-form-field jobs-form-field--full">
              <label className="jobs-form-label">Description</label>
              <textarea className="jobs-form-textarea" rows={3} placeholder="Describe the project requirements…" />
            </div>
          </div>
          <div className="jobs-form-actions">
            <button className="jobs-form-submit">Post Job</button>
            <button className="jobs-form-cancel" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="jobs-tabs">
        {["posted", "applicants"].map(t => (
          <button key={t} className={`jobs-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
            {t === "posted" ? "My Posted Jobs" : "Top Applicants"}
          </button>
        ))}
      </div>

      {tab === "posted" ? (
        <div className="jobs-list">
          {MY_JOBS.map((j, i) => (
            <div className="jobs-row" key={i}>
              <div className="jobs-row__left">
                <div className="jobs-row__cat-badge">{j.category}</div>
                <div>
                  <p className="jobs-row__title">{j.title}</p>
                  <p className="jobs-row__meta">Posted {j.posted} · {j.applicants} applicants</p>
                </div>
              </div>
              <div className="jobs-row__right">
                <span className="jobs-row__budget">{j.budget}</span>
                <span className={`jobs-row__status ${j.status === "open" ? "jobs-status--open" : "jobs-status--closed"}`}>
                  {j.status === "open" ? "Open" : "Closed"}
                </span>
                <button className="jobs-row__action-btn">Manage</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="jobs-applicants">
          <p className="jobs-applicants__context">Showing top matches for: <strong>UI Designer for SaaS Dashboard</strong></p>
          {APPLICANTS.map((a, i) => (
            <div className="jobs-applicant-row" key={i}>
              <div className="jobs-app-avatar" style={{ background: a.color }}>{a.avatar}</div>
              <div className="jobs-app-info">
                <p className="jobs-app-name">{a.name}</p>
                <p className="jobs-app-role">{a.role}</p>
              </div>
              <div className="jobs-app-match">
                <div className="jobs-app-match-bar">
                  <div className="jobs-app-match-fill" style={{ width: `${a.match}%` }} />
                </div>
                <span className="jobs-app-match-pct">{a.match}% match</span>
              </div>
              <span className="jobs-app-rate">{a.rate}</span>
              <button className="jobs-app-hire-btn">Hire</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
