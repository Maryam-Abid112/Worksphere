import React, { useState } from "react";

const SECTIONS = ["Profile", "Notifications", "Billing", "Security"];

export default function Settings() {
  const [activeSection, setActiveSection] = useState("Profile");
  const [notifs, setNotifs] = useState({ messages: true, milestones: true, invoices: false, digest: true });

  return (
    <div className="sett-page">
      <div className="sett-header">
        <h1 className="sett-title">Settings</h1>
        <p className="sett-sub">Manage your account preferences</p>
      </div>

      <div className="sett-layout">
        {/* Sidebar Nav */}
        <nav className="sett-nav">
          {SECTIONS.map(s => (
            <button key={s} className={`sett-nav-item ${activeSection === s ? "active" : ""}`} onClick={() => setActiveSection(s)}>
              {s}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="sett-content">
          {activeSection === "Profile" && (
            <div className="sett-section">
              <h2 className="sett-section-title">Profile Information</h2>
              <div className="sett-avatar-row">
                <div className="sett-avatar">RK</div>
                <div>
                  <p className="sett-avatar-name">Raza Khan</p>
                  <p className="sett-avatar-role">Client Pro · Lahore, PK</p>
                  <button className="sett-upload-btn">Change Photo</button>
                </div>
              </div>
              <div className="sett-form-grid">
                {[
                  { label: "Full Name", val: "Raza Khan" },
                  { label: "Email", val: "raza@worksphere.io" },
                  { label: "Company", val: "Worksphere Labs" },
                  { label: "Location", val: "Lahore, Pakistan" },
                  { label: "Website", val: "worksphere.io" },
                  { label: "Timezone", val: "PKT (UTC+5)" },
                ].map(f => (
                  <div className="sett-field" key={f.label}>
                    <label className="sett-label">{f.label}</label>
                    <input className="sett-input" defaultValue={f.val} />
                  </div>
                ))}
                <div className="sett-field sett-field--full">
                  <label className="sett-label">Bio</label>
                  <textarea className="sett-textarea" rows={3} defaultValue="Building products with great freelancers worldwide." />
                </div>
              </div>
              <button className="sett-save-btn">Save Changes</button>
            </div>
          )}

          {activeSection === "Notifications" && (
            <div className="sett-section">
              <h2 className="sett-section-title">Notification Preferences</h2>
              {[
                { key: "messages", label: "New Messages", sub: "Get notified when a freelancer sends you a message" },
                { key: "milestones", label: "Milestone Updates", sub: "When a milestone is submitted or approved" },
                { key: "invoices", label: "Invoice Alerts", sub: "Reminders for upcoming and overdue invoices" },
                { key: "digest", label: "Weekly Digest", sub: "A summary of all project activity every Monday" },
              ].map(n => (
                <div className="sett-notif-row" key={n.key}>
                  <div>
                    <p className="sett-notif-label">{n.label}</p>
                    <p className="sett-notif-sub">{n.sub}</p>
                  </div>
                  <div
                    className={`sett-toggle ${notifs[n.key] ? "on" : "off"}`}
                    onClick={() => setNotifs(p => ({ ...p, [n.key]: !p[n.key] }))}
                  >
                    <div className="sett-toggle-thumb" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "Billing" && (
            <div className="sett-section">
              <h2 className="sett-section-title">Billing & Plan</h2>
              <div className="sett-plan-card">
                <div className="sett-plan-badge">Current Plan</div>
                <p className="sett-plan-name">Client Pro</p>
                <p className="sett-plan-price">$29<span>/month</span></p>
                <ul className="sett-plan-features">
                  <li>✦ Unlimited active projects</li>
                  <li>✦ Priority talent matching</li>
                  <li>✦ Escrow & milestone payments</li>
                  <li>✦ Dedicated support</li>
                </ul>
                <button className="sett-upgrade-btn">Upgrade to Business</button>
              </div>
              <div className="sett-billing-history">
                <h3 className="sett-billing-history-title">Payment History</h3>
                {[
                  { date: "Apr 1, 2025", amount: "$29.00", status: "Paid" },
                  { date: "Mar 1, 2025", amount: "$29.00", status: "Paid" },
                  { date: "Feb 1, 2025", amount: "$29.00", status: "Paid" },
                ].map((b, i) => (
                  <div className="sett-bill-row" key={i}>
                    <span className="sett-bill-date">{b.date}</span>
                    <span className="sett-bill-amt">{b.amount}</span>
                    <span className="sett-bill-status">{b.status}</span>
                    <button className="sett-bill-dl">Download</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "Security" && (
            <div className="sett-section">
              <h2 className="sett-section-title">Security</h2>
              <div className="sett-form-grid">
                <div className="sett-field sett-field--full">
                  <label className="sett-label">Current Password</label>
                  <input className="sett-input" type="password" placeholder="••••••••" />
                </div>
                <div className="sett-field">
                  <label className="sett-label">New Password</label>
                  <input className="sett-input" type="password" placeholder="••••••••" />
                </div>
                <div className="sett-field">
                  <label className="sett-label">Confirm Password</label>
                  <input className="sett-input" type="password" placeholder="••••••••" />
                </div>
              </div>
              <button className="sett-save-btn">Update Password</button>

              <div className="sett-danger-zone">
                <h3 className="sett-danger-title">Danger Zone</h3>
                <p className="sett-danger-desc">Permanently delete your account and all associated data.</p>
                <button className="sett-delete-btn">Delete Account</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

