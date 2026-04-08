import Sidebar from "./Sidebar";

const recentJobs = [
  { id: 1, title: "Senior React Engineer", client: "Stripe Inc.", budget: "$2,400", deadline: "May 12", category: "Frontend", skills: ["React", "TypeScript"] },
  { id: 2, title: "Node.js API + Auth System", client: "Notion Labs", budget: "$1,800", deadline: "May 18", category: "Backend", skills: ["Node.js", "Redis"] },
  { id: 3, title: "Figma Design System", client: "Linear HQ", budget: "$1,100", deadline: "May 24", category: "Design", skills: ["Figma", "Tokens"] },
];

const activity = [
  { dot: "green", text: "Proposal accepted by StartupX", time: "2h ago" },
  { dot: "gold", text: "New message from Sarah K.", time: "5h ago" },
  { dot: "blue", text: "Payment of $1,200 received", time: "Yesterday" },
  { dot: "red", text: "Proposal rejected by ShopNow", time: "2d ago" },
  { dot: "gold", text: "New job match: Vue.js Frontend", time: "2d ago" },
];

export default function Dashboard({ navigate }) {
  return (
    <div className="app-shell">
      <Sidebar currentPage="dashboard" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Dashboard</div>
          <div className="topbar-right">
            <button className="topbar-btn">🔔</button>
            <button className="topbar-btn">?</button>
            <div className="avatar avatar-sm" style={{ background: "var(--gold-glow)", border: "1px solid rgba(240,180,41,0.3)" }}>AJ</div>
          </div>
        </div>

        <div className="content">
          {/* Header */}
          <div className="page-header">
            <div>
              <div className="page-heading">Good morning, Alex.</div>
              <div className="page-sub">Wednesday, April 8 — here's what's happening today.</div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-ghost" onClick={() => navigate("proposals")}>My Proposals</button>
              <button className="btn btn-gold" onClick={() => navigate("browse")}>Browse Jobs →</button>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {[
              { label: "Active Projects", value: "4", sub: "2 due this week", icon: "◉", color: "#f0b429" },
              { label: "Proposals Sent", value: "12", sub: "3 awaiting response", icon: "◈", color: "#60a5fa" },
              { label: "Total Earned", value: "$3.2k", sub: "This month", icon: "$", color: "#22c55e" },
              { label: "Avg. Rating", value: "4.9", sub: "From 28 reviews", icon: "★", color: "#f59e0b" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-card-accent" style={{ background: s.color }} />
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Two-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 16 }}>
            {/* Jobs Column */}
            <div>
              <div className="flex-between mb-4">
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>
                  Latest Job Matches
                </div>
                <button className="link-gold" onClick={() => navigate("browse")}>View all →</button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {recentJobs.map((job) => (
                  <div
                    key={job.id}
                    className="job-card"
                    onClick={() => navigate("job-details")}
                    style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px" }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="job-category">{job.category}</div>
                      <div className="job-title" style={{ fontSize: 15, marginBottom: 6 }}>{job.title}</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {job.skills.map(s => <span key={s} className="tag tag-default">{s}</span>)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div className="job-budget" style={{ fontSize: 15 }}>{job.budget}</div>
                      <div className="job-deadline">⏱ {job.deadline}</div>
                    </div>
                    <div style={{ color: "var(--text-dim)", fontSize: 18 }}>›</div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="card mt-6" style={{ marginTop: 16 }}>
                <div className="card-title">Quick Actions</div>
                <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                  <button className="btn btn-gold" onClick={() => navigate("browse")}>⌕ Browse Jobs</button>
                  <button className="btn btn-ghost" onClick={() => navigate("proposals")}>◈ View Proposals</button>
                  <button className="btn btn-ghost" onClick={() => navigate("profile")}>◎ Edit Profile</button>
                  <button className="btn btn-ghost" onClick={() => navigate("earnings")}>$ Earnings</button>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 16 }}>
                Activity
              </div>
              <div className="card" style={{ padding: 0 }}>
                <div style={{ padding: "4px 20px" }}>
                  {activity.map((a, i) => (
                    <div key={i} className="activity-item">
                      <div className={`activity-dot ${a.dot}`} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.4 }}>{a.text}</div>
                        <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2, fontFamily: "'JetBrains Mono',monospace" }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Earnings preview */}
              <div className="card" style={{ marginTop: 14 }}>
                <div className="card-title">This Month</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, color: "var(--gold)", letterSpacing: -2, lineHeight: 1 }}>
                  $1,780
                </div>
                <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 6 }}>+24% vs last month</div>
                <div className="progress-track" style={{ marginTop: 14 }}>
                  <div className="progress-fill" style={{ width: "62%" }} />
                </div>
                <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 4 }}>62% of monthly goal ($2,880)</div>
                <button className="link-gold" style={{ marginTop: 12 }} onClick={() => navigate("earnings")}>View earnings →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}