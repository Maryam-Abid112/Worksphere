import Sidebar from "./Sidebar";

const PAYMENTS = [
  { project: "Node.js API + Auth System", client: "Notion Labs", amount: 1800, date: "Apr 2", status: "paid" },
  { project: "Figma Design System", client: "Linear HQ", amount: 1050, date: "Mar 28", status: "paid" },
  { project: "React Dashboard", client: "TechCorp", amount: 800, date: "Mar 14", status: "paid" },
  { project: "Python Data Script", client: "DataLabs AI", amount: 400, date: "Feb 28", status: "paid" },
  { project: "Mobile App UI", client: "Appify", amount: 580, date: "Feb 12", status: "paid" },
  { project: "Brand Identity Package", client: "Seed Studio", amount: 950, date: "—", status: "pending" },
  { project: "Stripe Payments Integration", client: "PaidFast", amount: 800, date: "—", status: "pending" },
];

const MONTHS = [
  { month: "Jan", amount: 780 },
  { month: "Feb", amount: 1600 },
  { month: "Mar", amount: 2650 },
  { month: "Apr", amount: 1800 },
];
const maxBar = Math.max(...MONTHS.map(m => m.amount));

export default function EarningsPage({ navigate }) {
  const paid = PAYMENTS.filter(p => p.status === "paid").reduce((s, p) => s + p.amount, 0);
  const pending = PAYMENTS.filter(p => p.status === "pending").reduce((s, p) => s + p.amount, 0);

  return (
    <div className="app-shell">
      <Sidebar currentPage="earnings" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Earnings</div>
        </div>

        <div className="content">
          <div className="page-header">
            <div>
              <div className="page-heading">Earnings</div>
              <div className="page-sub">Your payment history and balance overview</div>
            </div>
          </div>

          {/* Big number */}
          <div className="card mb-6" style={{ marginBottom: 16, padding: "32px" }}>
            <div style={{ display: "flex", gap: 48, flexWrap: "wrap", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 8 }}>Total Earned</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 60, fontWeight: 800, color: "var(--gold)", letterSpacing: -3, lineHeight: 1 }}>
                  ${paid.toLocaleString()}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-dim)", marginTop: 8 }}>
                  +<span style={{ color: "var(--green)" }}>${pending.toLocaleString()}</span> pending
                </div>
              </div>

              {/* Mini bar chart */}
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 14 }}>Monthly trend</div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-end", height: 80 }}>
                  {MONTHS.map(m => (
                    <div key={m.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                      <div style={{ fontSize: 10, color: "var(--text-dim)", fontFamily: "'JetBrains Mono',monospace" }}>${(m.amount / 1000).toFixed(1)}k</div>
                      <div style={{ width: "100%", background: "var(--surface2)", borderRadius: "4px 4px 0 0", height: 64, display: "flex", alignItems: "flex-end" }}>
                        <div style={{
                          width: "100%",
                          background: `linear-gradient(to top, var(--gold-dim), var(--gold))`,
                          borderRadius: "4px 4px 0 0",
                          height: `${(m.amount / maxBar) * 100}%`,
                          transition: "height 0.6s ease",
                        }} />
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{m.month}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "This Month", val: "$1,800", color: "var(--text)" },
                  { label: "Pending", val: `$${pending.toLocaleString()}`, color: "var(--gold)" },
                  { label: "Projects Paid", val: PAYMENTS.filter(p => p.status === "paid").length, color: "var(--green)" },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 10, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--text-dim)", fontWeight: 700, marginBottom: 3 }}>{s.label}</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800, color: s.color, letterSpacing: -0.5 }}>{s.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border)" }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Transaction History</div>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {PAYMENTS.map((p, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{p.project}</td>
                    <td style={{ color: "var(--text-muted)" }}>{p.client}</td>
                    <td style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "var(--gold)" }}>${p.amount.toLocaleString()}</td>
                    <td style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "var(--text-dim)" }}>{p.date}</td>
                    <td>
                      <span className={`tag ${p.status === "paid" ? "tag-green" : "tag-gold"}`}>
                        {p.status === "paid" ? "✓ Paid" : "⏳ Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}