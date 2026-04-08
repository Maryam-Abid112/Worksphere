import { useState } from "react";
import Sidebar from "./Sidebar";

export default function SubmitProposalPage({ navigate }) {
  const [form, setForm] = useState({ message: "", price: "", days: "" });
  const [done, setDone] = useState(false);

  if (done) return (
    <div className="app-shell">
      <Sidebar currentPage="browse" navigate={navigate} />
      <div className="main">
        <div className="topbar"><div className="topbar-title">Proposal Sent</div></div>
        <div className="content" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "70vh" }}>
          <div className="card" style={{ maxWidth: 440, textAlign: "center", padding: "48px 36px" }}>
            <div style={{ fontSize: 52, marginBottom: 18 }}>✦</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 8, color: "var(--text)" }}>Proposal sent.</div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
              The client at Stripe Inc. will be notified and will review your proposal. You'll get an email update on their decision.
            </p>
            <div className="flex gap-2" style={{ justifyContent: "center" }}>
              <button className="btn btn-gold" onClick={() => navigate("proposals")}>My Proposals →</button>
              <button className="btn btn-ghost" onClick={() => navigate("browse")}>Browse more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-shell">
      <Sidebar currentPage="browse" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="flex gap-2" style={{ alignItems: "center" }}>
            <button className="link-btn" onClick={() => navigate("job-details")}>← Job Details</button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>Submit Proposal</span>
          </div>
        </div>

        <div className="content">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 18, alignItems: "start" }}>
            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="card">
                <div style={{ padding: "4px 0 20px", borderBottom: "1px solid var(--border)", marginBottom: 24 }}>
                  <div style={{ fontSize: 11, color: "var(--text-dim)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>Applying to</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: "var(--text)" }}>Senior React Engineer</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 3 }}>Stripe Inc. · $2,400 budget</div>
                </div>

                <div className="input-group">
                  <label className="input-label">Cover Letter</label>
                  <textarea
                    className="input"
                    rows={9}
                    placeholder="Explain why you're the right fit. Be specific — mention your React experience, your approach to design systems, and what makes you stand out from the 8 others who've already applied."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                  <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 5, textAlign: "right", fontFamily: "'JetBrains Mono',monospace" }}>
                    {form.message.length} / 2000
                  </div>
                </div>

                <div className="grid-2">
                  <div className="input-group">
                    <label className="input-label">Your Price (USD)</label>
                    <div style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-dim)", fontFamily: "'JetBrains Mono',monospace" }}>$</span>
                      <input
                        className="input"
                        type="number"
                        placeholder="2200"
                        value={form.price}
                        onChange={e => setForm({ ...form, price: e.target.value })}
                        style={{ paddingLeft: 28 }}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Delivery (days)</label>
                    <input
                      className="input"
                      type="number"
                      placeholder="42"
                      value={form.days}
                      onChange={e => setForm({ ...form, days: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  className="btn btn-gold btn-lg btn-full"
                  style={{ marginTop: 8 }}
                  onClick={() => { if (form.message && form.price && form.days) setDone(true); }}
                >
                  Submit Proposal →
                </button>
              </div>
            </div>

            {/* Tips sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 74 }}>
              <div className="card" style={{ borderColor: "rgba(240,180,41,0.2)" }}>
                <div className="card-title" style={{ color: "var(--gold)" }}>Writing tips</div>
                {[
                  ["Be specific", "Reference the Figma specs and Storybook requirements mentioned in the job."],
                  ["Show past work", "Link to a component library or design system you've built."],
                  ["Price fairly", "The budget is $2,400 — don't go too far below or above."],
                  ["Stay concise", "Under 300 words usually performs better than walls of text."],
                ].map(([title, tip]) => (
                  <div key={title} style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--gold)", marginBottom: 3 }}>✦ {title}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>{tip}</div>
                  </div>
                ))}
              </div>

              <div className="card">
                <div className="card-title">Competition</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 28, fontWeight: 800, color: "var(--text)", letterSpacing: -1 }}>9</div>
                <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 3 }}>proposals already submitted</div>
                <div className="divider" />
                <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>Most were under $2,000. A detailed, confident proposal at the right price stands out.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}