import Sidebar from "./Sidebar";

const REVIEWS = [
  { name: "Sarah K.", project: "Brand Identity Pack", rating: 5, text: "Alex delivered exceptional work, way beyond what I expected. Clean, modern execution with outstanding attention to detail. One of the best freelancers I've worked with — period.", date: "Mar 2026", budget: "$950" },
  { name: "James T.", project: "React Dashboard", rating: 5, text: "Very professional, communicates clearly throughout. The code quality is production-grade — well-structured, documented, and easy to hand off to our team.", date: "Feb 2026", budget: "$1,800" },
  { name: "Ali R.", project: "Python Script", rating: 4, text: "Good work overall. A few revision cycles were needed but the final result is solid. Responsive to feedback and easy to work with.", date: "Jan 2026", budget: "$400" },
  { name: "Maria L.", project: "Mobile App UI", rating: 5, text: "Stunning designs delivered ahead of schedule. Really understood our vision without much direction. The Figma handoff was impeccable.", date: "Dec 2025", budget: "$580" },
  { name: "Tom H.", project: "API Integration", rating: 4, text: "Solid developer, clearly knows his tools. A couple of async communication delays but the end result was exactly what we needed.", date: "Nov 2025", budget: "$700" },
];

const initials = name => name.split(" ").map(w => w[0]).join("");

export default function ReviewsPage({ navigate }) {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  const fiveStars = REVIEWS.filter(r => r.rating === 5).length;

  return (
    <div className="app-shell">
      <Sidebar currentPage="reviews" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Reviews & Ratings</div>
        </div>

        <div className="content">
          <div className="page-header">
            <div>
              <div className="page-heading">Reviews</div>
              <div className="page-sub">What your clients say about working with you</div>
            </div>
          </div>

          {/* Big stats bar */}
          <div className="card mb-6" style={{ marginBottom: 20, padding: "28px 32px" }}>
            <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 64, fontWeight: 800, color: "var(--gold)", letterSpacing: -4, lineHeight: 1 }}>{avg}</div>
                <div style={{ color: "var(--gold)", fontSize: 20, letterSpacing: 3, marginTop: 4 }}>{"★".repeat(Math.round(parseFloat(avg)))}</div>
                <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>{REVIEWS.length} total reviews</div>
              </div>

              <div style={{ flex: 1, minWidth: 200 }}>
                {[5, 4, 3, 2, 1].map(n => {
                  const count = REVIEWS.filter(r => r.rating === n).length;
                  const pct = Math.round((count / REVIEWS.length) * 100);
                  return (
                    <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                      <span style={{ fontSize: 11, color: "var(--text-dim)", width: 14, fontFamily: "'JetBrains Mono',monospace" }}>{n}</span>
                      <span style={{ color: "var(--gold)", fontSize: 11 }}>★</span>
                      <div style={{ flex: 1, height: 4, background: "var(--surface2)", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${pct}%`, background: "var(--gold)", borderRadius: 99 }} />
                      </div>
                      <span style={{ fontSize: 11, color: "var(--text-dim)", width: 28, textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>{count}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", gap: 24 }}>
                {[
                  { label: "5-Star Reviews", val: fiveStars },
                  { label: "Satisfaction", val: "98%" },
                  { label: "Repeat Clients", val: "12" },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, color: "var(--text)", letterSpacing: -1 }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <div className="flex-between mb-3">
                  <div className="flex gap-3" style={{ alignItems: "center" }}>
                    <div className="avatar avatar-md">{initials(r.name)}</div>
                    <div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: "var(--text)" }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text-dim)" }}>{r.project} · {r.budget}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="review-stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 3, fontFamily: "'JetBrains Mono',monospace" }}>{r.date}</div>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}