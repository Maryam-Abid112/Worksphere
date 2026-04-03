export default function Footer({ FOOTER_LINKS, SOCIAL_ICONS, LEGAL_LINKS }) {
  return (
    <footer>
      <div className="footer-grid">

        {/* Brand column */}
        <div>
          <div className="footer-logo">Worksphere<span>.</span></div>
          <p className="footer-desc">
            The world's marketplace for freelance talent. Find the right person, right away.
          </p>

          <div className="footer-socials">
            {SOCIAL_ICONS.map(s => (
              <div key={s} className="footer-social-icon">{s}</div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <div className="footer-col-title">{section}</div>
            {links.map(link => (
              <a key={link} href="#" className="footer-link">{link}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 Worksphere Inc. All rights reserved.
        </span>

        <div className="footer-legal-links">
          {LEGAL_LINKS.map(l => (
            <a key={l} href="#" className="footer-legal-link">{l}</a>
          ))}
        </div>

        <div className="footer-locale">
          <span className="footer-locale-text">🌐 English</span>
          <span className="footer-locale-divider">|</span>
          <span className="footer-locale-text">$ USD</span>
        </div>
      </div>
    </footer>
  );
}