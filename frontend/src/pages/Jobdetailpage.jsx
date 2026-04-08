import Sidebar from "./Sidebar";

const JOB = {
  title: "Senior React Engineer",
  client: "Stripe Inc.",
  country: "🇺🇸 United States",
  category: "Frontend",
  budget: "$2,400",
  deadline: "May 12, 2026",
  posted: "3 days ago",
  proposals: 9,
  skills: ["React", "TypeScript", "CSS Modules", "Storybook", "Accessibility"],
  description: `We're building out our design system and need an experienced React engineer to help us create a robust, accessible, and well-documented component library.

You'll work closely with our design team who will provide Figma specs, and our core platform team who will consume these components across 3 products. The work involves building from scratch — not adapting an existing library.

Key responsibilities:
— Architect and build 30+ reusable UI components
— Write comprehensive Storybook stories and documentation  
— Ensure WCAG 2.1 AA accessibility compliance
— Set up visual regression testing with Chromatic
— Work async with our distributed team (EST timezone preferred)

This is a 6–8 week engagement. There may be follow-on work for the right candidate.`,
  client_info: {
    name: "Stripe Inc.",
    initials: "SI",
    member_since: "Jan 2023",
    spent: "$28,400",
    rating: 4.9,
    reviews: 34,
    hires: 12,
  },
};

export default function JobDetailsPage({ navigate }) {
  return (
    <div className="app-shell">
      <Sidebar currentPage="browse" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="flex gap-2" style={{ alignItems: "center" }}>
            <button className="link-btn" onClick={() => navigate("browse")}>← Browse</button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>Job Details</span>
          </div>
          <div className="topbar-right">
            <button className="btn btn-ghost btn-sm">♡ Save</button>
            <button className="btn btn-gold btn-sm" onClick={() => navigate("submit-proposal")}>Send Proposal →</button>
          </div>
        </div>

        <div className="content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 18, alignItems: "start" }}>

            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="card">
                <div className="job-category">{JOB.category}</div>
                <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 26, color: "var(--text)", letterSpacing: -0.5, lineHeight: 1.2, marginBottom: 8 }}>
                  {JOB.title}
                </h1>
                <div style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 20 }}>{JOB.client} · {JOB.country} · Posted {JOB.posted}</div>

                <div style={{ display: "flex", gap: 20, padding: "16px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", marginBottom: 22 }}>
                  {[
                    { label: "Budget", val: JOB.budget },
                    { label: "Deadline", val: JOB.deadline },
                    { label: "Proposals", val: JOB.proposals },
                  ].map(r => (
                    <div key={r.label}>
                      <div style={{ fontSize: 10, letterSpacing: 1, textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700, marginBottom: 4 }}>{r.label}</div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: r.label === "Budget" ? "var(--gold)" : "var(--text)" }}>{r.val}</div>
                    </div>
                  ))}
                </div>

                {JOB.description.split("\n\n").map((p, i) => (
                  <p key={i} style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 14 }}>{p}</p>
                ))}
              </div>

              <div className="card">
                <div className="card-title">Required Skills</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {JOB.skills.map(s => <span key={s} className="tag tag-gold">{s}</span>)}
                </div>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 74 }}>
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800, color: "var(--gold)", letterSpacing: -2, marginBottom: 4 }}>{JOB.budget}</div>
                <div style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 18 }}>Fixed price · Due {JOB.deadline}</div>
                <button className="btn btn-gold btn-full btn-lg" onClick={() => navigate("submit-proposal")}>Send Proposal →</button>
              </div>

              <div className="card">
                <div className="card-title">About the Client</div>
                <div className="flex gap-3 mb-4" style={{ alignItems: "center" }}>
                  <div className="avatar avatar-md">{JOB.client_info.initials}</div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{JOB.client_info.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-dim)" }}>{JOB.client_info.member_since}</div>
                  </div>
                </div>
                {[
                  { label: "Total spent", val: JOB.client_info.spent },
                  { label: "Freelancers hired", val: JOB.client_info.hires },
                  { label: "Rating", val: `${JOB.client_info.rating}★ (${JOB.client_info.reviews})` },
                ].map(r => (
                  <div key={r.label} className="flex-between" style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                    <span style={{ color: "var(--text-dim)" }}>{r.label}</span>
                    <span style={{ fontWeight: 600, color: "var(--text)" }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}