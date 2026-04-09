import { useState } from "react";
import Sidebar from "./Sidebar";

const ALL_SKILLS = ["React", "Vue.js", "Node.js", "TypeScript", "Figma", "MongoDB", "Python", "GraphQL", "AWS", "Docker"];

export default function ProfilePage({ navigate }) {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    title: "Full-Stack Developer & UI/UX Designer",
    bio: "5+ years crafting high-performance web apps and pixel-precise interfaces. I work at the intersection of engineering and design — comfortable in the codebase and in Figma.",
    skills: ["React", "Node.js", "TypeScript", "Figma", "MongoDB"],
    experience: "5 years",
    rate: "$55",
    portfolio: "alexjohnson.dev",
    location: "Istanbul, TR",
    availability: "Full-time",
  });
  const [form, setForm] = useState({ ...profile });

  const reviews = [
    { name: "Sarah K.", project: "Brand Identity", rating: 5, text: "Exceptional work — delivered early with stunning quality. One of the best freelancers I've worked with.", date: "Mar 2026" },
    { name: "James T.", project: "React Dashboard", rating: 5, text: "Professional, fast, communicates well throughout. Will absolutely hire again.", date: "Feb 2026" },
    { name: "Ali R.", project: "Python Script", rating: 4, text: "Good results, needed minor revisions. Good communication overall.", date: "Jan 2026" },
  ];

  return (
    <div className="app-shell">
      <Sidebar currentPage="profile" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Profile</div>
          <div className="topbar-right">
            <button
              className={editing ? "btn btn-ghost btn-sm" : "btn btn-gold btn-sm"}
              onClick={() => { if (editing) { setProfile({ ...form }); } setEditing(!editing); }}
            >
              {editing ? "Save changes" : "✎ Edit profile"}
            </button>
            {editing && (
              <button className="btn btn-ghost btn-sm" onClick={() => { setForm({ ...profile }); setEditing(false); }}>Cancel</button>
            )}
          </div>
        </div>

        <div className="content">
          {!editing ? (
            /* ── VIEW MODE ── */
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 18, alignItems: "start" }}>
              {/* Left panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="card" style={{ textAlign: "center", padding: "28px 22px" }}>
                  <div className="avatar avatar-xl" style={{ margin: "0 auto 16px" }}>AJ</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "var(--text)", marginBottom: 4 }}>{profile.name}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14, lineHeight: 1.4 }}>{profile.title}</div>
                  <div className="flex-center gap-2 mb-3">
                    <span className="tag tag-gold">{profile.rate}/hr</span>
                    <span className="tag tag-default">{profile.availability}</span>
                  </div>
                  <div style={{ color: "var(--gold)", fontSize: 15, letterSpacing: 2 }}>★★★★★</div>
                  <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 3 }}>4.9 · 28 reviews</div>
                </div>

                <div className="card">
                  <div className="card-title">Details</div>
                  {[
                    { label: "Location", val: profile.location },
                    { label: "Experience", val: profile.experience },
                    { label: "Portfolio", val: profile.portfolio },
                    { label: "Availability", val: profile.availability },
                  ].map(r => (
                    <div key={r.label} className="flex-between" style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                      <span style={{ color: "var(--text-dim)" }}>{r.label}</span>
                      <span style={{ color: "var(--text)", fontWeight: 500 }}>{r.val}</span>
                    </div>
                  ))}
                </div>

                <div className="card">
                  <div className="card-title">Skills</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {profile.skills.map(s => <span key={s} className="tag tag-gold">{s}</span>)}
                  </div>
                </div>

                <div className="card">
                  <div className="card-title">Stats</div>
                  {[
                    { label: "Completed", val: "24 projects" },
                    { label: "On-time rate", val: "98%" },
                    { label: "Repeat clients", val: "12" },
                    { label: "Response time", val: "< 2 hrs" },
                  ].map(r => (
                    <div key={r.label} className="flex-between" style={{ padding: "8px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                      <span style={{ color: "var(--text-dim)" }}>{r.label}</span>
                      <span style={{ color: "var(--gold)", fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="card">
                  <div className="card-title">About</div>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75 }}>{profile.bio}</p>
                  {profile.portfolio && (
                    <div style={{ marginTop: 14, fontSize: 13, color: "var(--gold)", fontFamily: "'JetBrains Mono',monospace" }}>
                      ↗ {profile.portfolio}
                    </div>
                  )}
                </div>

                <div className="card">
                  <div className="card-title">Client Reviews</div>
                  {reviews.map((r, i) => (
                    <div key={i} className="review-card" style={{ margin: 0, marginBottom: i < reviews.length - 1 ? 12 : 0 }}>
                      <div className="flex-between mb-2">
                        <div className="flex gap-3" style={{ alignItems: "center" }}>
                          <div className="avatar avatar-sm">{r.name[0]}{r.name.split(" ")[1]?.[0]}</div>
                          <div>
                            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{r.name}</div>
                            <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{r.project}</div>
                          </div>
                        </div>
                        <span style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono',monospace" }}>{r.date}</span>
                      </div>
                      <div className="review-stars mb-2">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* ── EDIT MODE ── */
            <div style={{ maxWidth: 680 }}>
              <div className="page-header">
                <div>
                  <div className="page-heading">Edit Profile</div>
                  <div className="page-sub">Changes are saved when you click "Save changes"</div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-title">Identity</div>

                <div className="flex gap-4 mb-6" style={{ alignItems: "center" }}>
                  <div className="avatar avatar-xl">AJ</div>
                  <div>
                    <button className="btn btn-ghost btn-sm">Upload photo</button>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 6 }}>JPG, PNG · Max 2MB</div>
                  </div>
                </div>

                {[
                  { label: "Full Name", key: "name" },
                  { label: "Professional Title", key: "title" },
                  { label: "Hourly Rate (e.g. $55)", key: "rate" },
                  { label: "Location", key: "location" },
                  { label: "Portfolio URL", key: "portfolio" },
                ].map(f => (
                  <div key={f.key} className="input-group">
                    <label className="input-label">{f.label}</label>
                    <input className="input" value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                  </div>
                ))}

                <div className="input-group">
                  <label className="input-label">Bio</label>
                  <textarea className="input" rows={5} value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
                </div>

                <div className="input-group">
                  <label className="input-label">Availability</label>
                  <select className="input" value={form.availability} onChange={e => setForm({ ...form, availability: e.target.value })}>
                    {["Full-time", "Part-time", "Weekends only", "Not available"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="card">
                <div className="card-title">Skills</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {ALL_SKILLS.map(s => (
                    <button
                      key={s}
                      className={`tag ${form.skills.includes(s) ? "tag-gold" : "tag-default"}`}
                      style={{ cursor: "pointer", border: "none" }}
                      onClick={() => setForm({ ...form, skills: form.skills.includes(s) ? form.skills.filter(x => x !== s) : [...form.skills, s] })}
                    >
                      {form.skills.includes(s) ? "✓ " : "+ "}{s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}