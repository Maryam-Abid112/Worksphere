const NAV = [
  { section: "Overview" },
  { icon: "▦", label: "Dashboard", page: "dashboard" },
  { section: "Work" },
  { icon: "⌕", label: "Browse Jobs", page: "browse" },
  { icon: "◈", label: "My Proposals", page: "proposals", badge: 3 },
  { icon: "◉", label: "Active Projects", page: "projects" },
  { icon: "⬡", label: "Workspace", page: "workspace" },
  { section: "You" },
  { icon: "◎", label: "Profile", page: "profile" },
  { icon: "★", label: "Reviews", page: "reviews" },
  { icon: "◈", label: "Earnings", page: "earnings" },
  { icon: "⚙", label: "Settings", page: "settings" },
];

export default function Sidebar({ currentPage, navigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">WorkSphere<span>/</span></div>
      </div>

      <div className="sidebar-user">
        <div className="sidebar-avatar">AJ</div>
        <div>
          <div className="sidebar-user-name">Alex Johnson</div>
          <div className="sidebar-user-status">● Available</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map((item, i) => {
          if (item.section) return (
            <div key={i} className="sidebar-section-label">{item.section}</div>
          );
          return (
            <button
              key={item.page}
              className={`nav-item ${currentPage === item.page ? "active" : ""}`}
              onClick={() => navigate(item.page)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <button className="btn btn-ghost btn-sm btn-full" onClick={() => navigate("login")}>
          ← Sign out
        </button>
      </div>
    </aside>
  );
}