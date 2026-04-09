import { useState } from "react";
import Sidebar from "./Sidebar";

const DATA = {
  pending: [
    { job: "Senior React Engineer", client: "Stripe Inc.", price: "$2,200", submitted: "Apr 6", proposals: 9 },
    { job: "Vue 3 SPA Frontend", client: "Craft CMS", price: "$1,350", submitted: "Apr 7", proposals: 4 },
    { job: "Brand Identity Package", client: "Seed Studio", price: "$1,500", submitted: "Apr 7", proposals: 6 },
  ],
  accepted: [
    { job: "Node.js API + Auth System", client: "Notion Labs", price: "$1,800", submitted: "Mar 20", proposals: 11 },
    { job: "Figma Design System", client: "Linear HQ", price: "$1,050", submitted: "Mar 14", proposals: 7 },
  ],
  rejected: [
    { job: "Stripe Payments Integration", client: "PaidFast", price: "$750", submitted: "Mar 10", proposals: 14 },
    { job: "Python Data Pipeline", client: "DataLabs AI", price: "$850", submitted: "Mar 3", proposals: 20 },
  ],
};

const STATUS_CONFIG = {
  pending:  { label: "Pending",  color: "var(--gold)",  bg: "var(--gold-glow)",  tagClass: "tag-gold" },
  accepted: { label: "Accepted", color: "var(--green)", bg: "var(--green-dim)",  tagClass: "tag-green" },
  rejected: { label: "Rejected", color: "var(--red)",   bg: "var(--red-dim)",    tagClass: "tag-red" },
};

export default function MyProposalsPage({ navigate }) {
  const [tab, setTab] = useState("pending");
  const sc = STATUS_CONFIG[tab];

  return (
    <div className="app-shell">
      <Sidebar currentPage="proposals" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">My Proposals</div>
          <div className="topbar-right">
            <button className="btn btn-gold btn-sm" onClick={() => navigate("browse")}>Find jobs →</button>
          </div>
        </div>

        <div className="content">
          <div className="page-header">
            <div>
              <div className="page-heading">Proposals</div>
              <div className="page-sub">Track every proposal you've sent</div>
            </div>
          </div>

          {/* Summary row */}
          <div className="stats-grid" style={{ marginBottom: 22 }}>
            {[
              { label: "Pending",  value: DATA.pending.length,  color: "var(--gold)",  acc: "var(--gold)" },
              { label: "Accepted", value: DATA.accepted.length, color: "var(--green)", acc: "var(--green)" },
              { label: "Rejected", value: DATA.rejected.length, color: "var(--red)",   acc: "var(--red)" },
              { label: "Total Sent", value: Object.values(DATA).flat().length, color: "var(--blue)", acc: "var(--blue)" },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div className="stat-card-accent" style={{ background: s.acc }} />
                <div className="stat-label">{s.label}</div>
                <div className="stat-value" style={{ color: s.color, fontSize: 36 }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            {/* Tabs */}
            <div className="tabs" style={{ padding: "0 22px", margin: 0 }}>
              {["pending", "accepted", "rejected"].map(t => (
                <button key={t} className={`tab-btn ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
                  {STATUS_CONFIG[t].label}
                  <span className="tab-pill">{DATA[t].length}</span>
                </button>
              ))}
            </div>

            {/* List */}
            <div style={{ padding: "8px 22px 22px" }}>
              {DATA[tab].length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">◈</div>
                  <div className="empty-text">No {sc.label.toLowerCase()} proposals</div>
                </div>
              ) : (
                DATA[tab].map((p, i) => (
                  <div key={i} className="proposal-row">
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="proposal-title">{p.job}</div>
                      <div className="proposal-meta">{p.client} · Submitted {p.submitted} · {p.proposals} total proposals</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0, flexWrap: "wrap" }}>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 16, color: "var(--gold)" }}>{p.price}</div>
                        <div style={{ fontSize: 11, color: "var(--text-dim)" }}>offered</div>
                      </div>
                      <span className={`tag ${sc.tagClass}`}>{sc.label}</span>
                      {tab === "accepted" && (
                        <button className="btn btn-gold btn-sm" onClick={() => navigate("workspace")}>Open →</button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}