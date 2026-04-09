import React, { useState } from "react";

const THREADS = [
  { id: 1, name: "Aisha Noor", avatar: "AN", color: "#7c3aed", lastMsg: "Just sent over the revised logo files!", time: "2h ago", unread: 2, project: "Brand Identity System" },
  { id: 2, name: "Marco Silva", avatar: "MS", color: "#3b82f6", lastMsg: "The API integration is done, can you review?", time: "4h ago", unread: 1, project: "E-Commerce Platform" },
  { id: 3, name: "Priya Mehta", avatar: "PM", color: "#ec4899", lastMsg: "I'll have the content calendar ready by Friday.", time: "Yesterday", unread: 0, project: "Content Strategy Q2" },
  { id: 4, name: "Jordan Lee", avatar: "JL", color: "#10b981", lastMsg: "Starting the UX audit next Monday.", time: "2 days ago", unread: 0, project: "Mobile App UX Audit" },
];

const MOCK_MESSAGES = {
  1: [
    { from: "them", text: "Hey! I just finished the first round of logo concepts.", time: "10:20 AM" },
    { from: "me", text: "Looking great so far, love the direction!", time: "10:35 AM" },
    { from: "them", text: "Just sent over the revised logo files!", time: "12:10 PM" },
  ],
  2: [
    { from: "them", text: "Hi Raza, I've completed the backend scaffolding.", time: "9:00 AM" },
    { from: "me", text: "Perfect, what's next on the roadmap?", time: "9:15 AM" },
    { from: "them", text: "The API integration is done, can you review?", time: "11:30 AM" },
  ],
  3: [
    { from: "them", text: "Starting the keyword research phase now.", time: "Mon 3PM" },
    { from: "me", text: "Great! Let me know if you need anything.", time: "Mon 4PM" },
    { from: "them", text: "I'll have the content calendar ready by Friday.", time: "Tue 11AM" },
  ],
  4: [
    { from: "them", text: "All good on my end, just scheduling.", time: "Apr 5" },
    { from: "them", text: "Starting the UX audit next Monday.", time: "Apr 6" },
  ],
};

export default function Messages() {
  const [activeId, setActiveId] = useState(1);
  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState(MOCK_MESSAGES);

  const active = THREADS.find(t => t.id === activeId);
  const msgs = conversations[activeId] || [];

  const sendMsg = () => {
    if (!input.trim()) return;
    setConversations(prev => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), { from: "me", text: input, time: "Just now" }]
    }));
    setInput("");
  };

  return (
    <div className="msg-page">
      {/* Thread List */}
      <aside className="msg-sidebar">
        <div className="msg-sidebar__header">
          <h2 className="msg-sidebar__title">Messages</h2>
          <span className="msg-sidebar__badge">3</span>
        </div>
        <div className="msg-thread-list">
          {THREADS.map(t => (
            <div
              key={t.id}
              className={`msg-thread ${activeId === t.id ? "active" : ""}`}
              onClick={() => setActiveId(t.id)}
            >
              <div className="msg-thread__avatar" style={{ background: t.color }}>{t.avatar}</div>
              <div className="msg-thread__info">
                <div className="msg-thread__top">
                  <span className="msg-thread__name">{t.name}</span>
                  <span className="msg-thread__time">{t.time}</span>
                </div>
                <p className="msg-thread__preview">{t.lastMsg}</p>
              </div>
              {t.unread > 0 && <span className="msg-thread__unread">{t.unread}</span>}
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Area */}
      <div className="msg-chat">
        <div className="msg-chat__header">
          <div className="msg-chat__avatar" style={{ background: active.color }}>{active.avatar}</div>
          <div>
            <p className="msg-chat__name">{active.name}</p>
            <p className="msg-chat__project">{active.project}</p>
          </div>
        </div>

        <div className="msg-chat__body">
          {msgs.map((m, i) => (
            <div key={i} className={`msg-bubble-wrap ${m.from === "me" ? "mine" : "theirs"}`}>
              <div className={`msg-bubble ${m.from === "me" ? "msg-bubble--me" : "msg-bubble--them"}`}>
                {m.text}
              </div>
              <span className="msg-bubble__time">{m.time}</span>
            </div>
          ))}
        </div>

        <div className="msg-chat__input-row">
          <input
            className="msg-chat__input"
            placeholder="Type a message…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMsg()}
          />
          <button className="msg-chat__send-btn" onClick={sendMsg}>Send ↑</button>
        </div>
      </div>
    </div>
  );
}
