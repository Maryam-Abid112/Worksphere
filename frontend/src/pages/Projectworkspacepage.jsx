import { useState, useRef } from "react";
import Sidebar from "./Sidebar";

const INIT_MSGS = [
  { from: "client", text: "Hey — excited to kick this off. Did you get the Figma file I shared?", time: "Apr 5, 10:02" },
  { from: "me",     text: "Got it, thanks! Reviewing the token structure now. Looks like there are ~40 components in scope — I'll have a breakdown doc to you by end of today.", time: "Apr 5, 10:28" },
  { from: "client", text: "Perfect. One thing — can we align the spacing scale to 4px base instead of 8px? Our mobile team requested that.", time: "Apr 5, 2:15" },
  { from: "me",     text: "Absolutely. 4px base is actually more granular — better for dense UI. I'll reflect that in the token file and Storybook stories.", time: "Apr 5, 3:01" },
  { from: "client", text: "Great. When's the first milestone delivery?", time: "Apr 7, 9:45" },
];

const INIT_FILES = [
  { name: "design-system-v1.fig", size: "4.2 MB", by: "client", icon: "🎨", time: "Apr 5" },
  { name: "api-docs.md", size: "22 KB", by: "me", icon: "📝", time: "Apr 6" },
  { name: "token-schema.json", size: "8 KB", by: "me", icon: "{ }", time: "Apr 6" },
];

export default function ProjectWorkspacePage({ navigate }) {
  const [msgs, setMsgs] = useState(INIT_MSGS);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState(INIT_FILES);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef();

  const send = () => {
    if (!input.trim()) return;
    setMsgs([...msgs, { from: "me", text: input.trim(), time: "Just now" }]);
    setInput("");
  };

  const uploadFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFiles([...files, { name: f.name, size: `${(f.size / 1024).toFixed(0)} KB`, by: "me", icon: "📁", time: "Now" }]);
  };

  return (
    <div className="app-shell">
      <Sidebar currentPage="workspace" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="flex gap-2" style={{ alignItems: "center" }}>
            <button className="link-btn" onClick={() => navigate("projects")}>← Projects</button>
            <span style={{ color: "var(--text-dim)" }}>/</span>
            <span style={{ fontSize: 14, fontFamily: "'Syne',sans-serif", fontWeight: 700, color: "var(--text)" }}>Node.js API + Auth System</span>
          </div>
          <div className="topbar-right">
            {submitted ? (
              <span className="tag tag-green">✓ Work Submitted</span>
            ) : (
              <button className="btn btn-gold btn-sm" onClick={() => setSubmitted(true)}>Submit Work ↑</button>
            )}
          </div>
        </div>

        {submitted && (
          <div style={{ background: "var(--green-dim)", borderBottom: "1px solid rgba(34,197,94,0.2)", padding: "11px 32px", fontSize: 13, color: "var(--green)" }}>
            ✦ Your work has been submitted. Notion Labs will review and respond within 48 hours.
          </div>
        )}

        <div style={{ display: "flex", flex: 1, height: "calc(100vh - 58px)", overflow: "hidden" }}>
          {/* Chat — main panel */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderRight: "1px solid var(--border)", minWidth: 0 }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 10 }}>
              <div className="avatar avatar-sm">NL</div>
              <div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, color: "var(--text)" }}>Notion Labs</div>
                <div style={{ fontSize: 11, color: "var(--green)" }}>● Online</div>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-area">
              {msgs.map((m, i) => (
                <div key={i} className={`chat-bubble-wrap ${m.from === "me" ? "mine" : ""}`}>
                  {m.from !== "me" && <div className="avatar avatar-sm">NL</div>}
                  <div>
                    <div className={`chat-bubble ${m.from === "me" ? "mine" : "theirs"}`}>{m.text}</div>
                    <div className="chat-time">{m.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: "14px 18px", borderTop: "1px solid var(--border)", display: "flex", gap: 10 }}>
              <input
                className="input"
                style={{ margin: 0 }}
                placeholder="Message Notion Labs…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
              />
              <button className="btn btn-gold" onClick={send}>Send</button>
            </div>
          </div>

          {/* Right panel */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Project Details */}
            <div style={{ padding: "18px 20px", borderBottom: "1px solid var(--border)" }}>
              <div className="card-title">Project</div>
              {[
                { label: "Budget", val: "$1,800" },
                { label: "Deadline", val: "May 18" },
                { label: "Progress", val: "65%" },
                { label: "Status", val: "In Progress" },
              ].map(r => (
                <div key={r.label} className="flex-between" style={{ padding: "7px 0", borderBottom: "1px solid var(--border)", fontSize: 13 }}>
                  <span style={{ color: "var(--text-dim)" }}>{r.label}</span>
                  <span style={{ color: r.label === "Progress" ? "var(--gold)" : "var(--text)", fontWeight: 600, fontFamily: r.label === "Progress" ? "'JetBrains Mono',monospace" : "inherit" }}>{r.val}</span>
                </div>
              ))}
              <div className="progress-track" style={{ marginTop: 14 }}>
                <div className="progress-fill" style={{ width: "65%" }} />
              </div>
            </div>

            {/* Files */}
            <div style={{ flex: 1, padding: "18px 20px", overflowY: "auto" }}>
              <div className="flex-between mb-3">
                <div className="card-title" style={{ margin: 0 }}>Files</div>
                <button className="btn btn-ghost btn-sm" onClick={() => fileRef.current.click()}>+ Upload</button>
                <input ref={fileRef} type="file" style={{ display: "none" }} onChange={uploadFile} />
              </div>

              {files.map((f, i) => (
                <div key={i} className="file-item">
                  <div className="file-icon">{f.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 2, fontFamily: "'JetBrains Mono',monospace" }}>{f.size} · {f.by === "me" ? "You" : "Client"} · {f.time}</div>
                  </div>
                  <button className="link-gold" style={{ fontSize: 16 }}>↓</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}