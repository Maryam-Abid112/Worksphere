import Sidebar from "./Sidebar";

const PROJECTS = [
  {
    id: 1, title: "Node.js API + Auth System", client: "Notion Labs",
    budget: "$1,800", deadline: "May 18", progress: 65,
    status: "in-progress",
    tasks: ["Project setup & architecture", "User authentication (JWT)", "Core API endpoints", "Rate limiting & Redis", "Testing & documentation"],
    done: 3,
  },
  {
    id: 2, title: "Figma Design System", client: "Linear HQ",
    budget: "$1,050", deadline: "May 24", progress: 90,
    status: "submitted",
    tasks: ["Audit existing components", "Define token system", "Build core components", "Write documentation", "Present final handoff"],
    done: 5,
  },
  {
    id: 3, title: "GraphQL Schema Design", client: "Shopify Dev",
    budget: "$2,100", deadline: "Jun 12", progress: 20,
    status: "in-progress",
    tasks: ["Requirements gathering", "Schema design", "Resolver implementation", "DataLoader optimization", "Integration testing"],
    done: 1,
  },
  {
    id: 4, title: "Brand Identity Package", client: "Seed Studio",
    budget: "$1,600", deadline: "Jun 8", progress: 40,
    status: "in-progress",
    tasks: ["Discovery & research", "Concept development", "Refinement", "Final delivery"],
    done: 2,
  },
];

const STATUS = {
  "in-progress": { label: "In Progress", tagClass: "tag-blue" },
  "submitted":   { label: "Submitted",   tagClass: "tag-green" },
};

export default function ActiveProjectsPage({ navigate }) {
  return (
    <div className="app-shell">
      <Sidebar currentPage="projects" navigate={navigate} />

      <div className="main">
        <div className="topbar">
          <div className="topbar-title">Active Projects</div>
          <div className="topbar-right">
            <span style={{ fontSize: 12, color: "var(--text-dim)", fontFamily: "'JetBrains Mono',monospace" }}>{PROJECTS.length} ongoing</span>
          </div>
        </div>

        <div className="content">
          <div className="page-header">
            <div>
              <div className="page-heading">Projects</div>
              <div className="page-sub">Work in progress across all your active contracts</div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 14 }}>
            {PROJECTS.map(p => {
              const s = STATUS[p.status];
              return (
                <div key={p.id} className="project-card" onClick={() => navigate("workspace")}>
                  {/* Header */}
                  <div className="flex-between mb-3">
                    <span className={`tag ${s.tagClass}`}>{s.label}</span>
                    <span style={{ fontSize: 11, color: "var(--text-dim)", fontFamily: "'JetBrains Mono',monospace" }}>Due {p.deadline}</span>
                  </div>

                  <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, color: "var(--text)", marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 16 }}>{p.client}</div>

                  {/* Progress */}
                  <div className="flex-between mb-2">
                    <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Progress</span>
                    <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono',monospace", color: "var(--gold)", fontWeight: 700 }}>{p.progress}%</span>
                  </div>
                  <div className="progress-track" style={{ marginBottom: 16 }}>
                    <div className="progress-fill" style={{ width: `${p.progress}%` }} />
                  </div>

                  {/* Milestones */}
                  <div style={{ marginBottom: 16 }}>
                    {p.tasks.map((task, i) => (
                      <div key={i} className={`milestone ${i < p.done ? "milestone-done" : ""}`}>
                        <div className={`milestone-check ${i < p.done ? "done" : ""}`}>{i < p.done ? "✓" : ""}</div>
                        {task}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex-between" style={{ paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 17, color: "var(--gold)" }}>{p.budget}</div>
                    <button
                      className="btn btn-gold btn-sm"
                      onClick={e => { e.stopPropagation(); navigate("workspace"); }}
                    >
                      Open Workspace →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}