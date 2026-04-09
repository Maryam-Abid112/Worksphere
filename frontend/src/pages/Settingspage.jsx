import { useState } from "react";
import Sidebar from "./Sidebar";

export default function SettingsPage({ navigate }) {
  const [email, setEmail] = useState("alex@alexjohnson.dev");
  const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" });
  const [toggles, setToggles] = useState({ jobMatches: true, proposals: true, messages: true, payments: true, newsletter: false });
  const [saved, setSaved] = useState("");

  const save = key => { setSaved(key); setTimeout(() => setSaved(""), 2500); };

  return (
    <div className="app-shell">
      <Sidebar currentPage="settings" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Settings</div>
        </div>

        <div className="content">
          <div className="page-header">
            <div>
              <div className="page-heading">Settings</div>
              <div className="page-sub">Manage your account, security, and preferences</div>
            </div>
          </div>

          <div style={{ maxWidth: 620, display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Email */}
            <div className="settings-section">
              <div className="settings-header">✉ Email Address</div>
              <div className="settings-body">
                {saved === "email" && (
                  <div style={{ background: "var(--green-dim)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "var(--green)" }}>
                    ✓ Email updated successfully
                  </div>
                )}
                <div className="input-group" style={{ marginBottom: 14 }}>
                  <label className="input-label">Email</label>
                  <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button className="btn btn-gold btn-sm" onClick={() => save("email")}>Save Email</button>
              </div>
            </div>

            {/* Password */}
            <div className="settings-section">
              <div className="settings-header">⚿ Change Password</div>
              <div className="settings-body">
                {saved === "password" && (
                  <div style={{ background: "var(--green-dim)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 13, color: "var(--green)" }}>
                    ✓ Password changed
                  </div>
                )}
                {[
                  { label: "Current Password", key: "current" },
                  { label: "New Password", key: "next" },
                  { label: "Confirm New Password", key: "confirm" },
                ].map(f => (
                  <div key={f.key} className="input-group">
                    <label className="input-label">{f.label}</label>
                    <input className="input" type="password" value={passwords[f.key]} onChange={e => setPasswords({ ...passwords, [f.key]: e.target.value })} />
                  </div>
                ))}
                <button className="btn btn-gold btn-sm" onClick={() => save("password")}>Update Password</button>
              </div>
            </div>

            {/* Notifications */}
            <div className="settings-section">
              <div className="settings-header">🔔 Notifications</div>
              <div className="settings-body">
                {[
                  { key: "jobMatches", label: "Job matches", desc: "Notify me when relevant jobs are posted" },
                  { key: "proposals", label: "Proposal updates", desc: "Accepted or rejected proposal alerts" },
                  { key: "messages", label: "New messages", desc: "Chat messages from clients" },
                  { key: "payments", label: "Payment received", desc: "Confirmation when a payment is processed" },
                  { key: "newsletter", label: "Weekly digest", desc: "Tips, platform updates, and freelancing advice" },
                ].map(n => (
                  <div key={n.key} className="toggle-row">
                    <div>
                      <div className="toggle-label">{n.label}</div>
                      <div className="toggle-desc">{n.desc}</div>
                    </div>
                    <button
                      className={`toggle ${toggles[n.key] ? "on" : ""}`}
                      onClick={() => setToggles({ ...toggles, [n.key]: !toggles[n.key] })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Danger zone */}
            <div className="settings-section" style={{ borderColor: "rgba(244,63,94,0.2)" }}>
              <div className="settings-header" style={{ color: "var(--red)", borderBottomColor: "rgba(244,63,94,0.15)" }}>⚠ Danger Zone</div>
              <div className="settings-body">
                <p style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 18, lineHeight: 1.6 }}>
                  These actions are permanent and cannot be undone. Proceed with caution.
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-ghost btn-sm" onClick={() => navigate("login")}>← Sign out</button>
                  <button className="btn btn-danger btn-sm">Delete Account</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}