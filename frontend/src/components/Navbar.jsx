import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSignInClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
      <div className="nav-left">
        <div className="logo">Worksphere<span>.</span></div>
        <div className="nav-links">
          {["Explore", "How it Works", "Pricing"].map(l => (
            <span key={l} className="nav-link">{l}</span>
          ))}
        </div>
      </div>
      <div className="nav-right">
        <span className="nav-link" onClick={onSignInClick}> Sign In</span>
        <button className="btn-primary sm" onClick={onSignInClick}>Join Free</button>
      </div>
    </nav>
  );
}