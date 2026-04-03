export default function Freelancers({ FREELANCERS }) {
  return (
     <section className="section section-bg-light">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Top-rated freelancers</h2>
            <p className="section-subtitle">Vetted professionals ready to start today</p>
          </div>
          <button className="btn-outline">Browse All Talent</button>
        </div>
        <div className="freelancers-grid">
          {FREELANCERS.map(f => (
            <div key={f.name} className="freelancer-card">
              <div className="freelancer-card-top">
                <div className="avatar avatar-lg" style={{ background: f.color }}>
                  {f.avatar}
                </div>
                <div>
                  <div className="freelancer-name">{f.name}</div>
                  <div className="freelancer-role">{f.role}</div>
                </div>
              </div>
              <div className="freelancer-card-bottom">
                <div>
                  <span className="freelancer-rating">★ {f.rating}</span>
                  <span className="freelancer-reviews">({f.reviews})</span>
                </div>
                <div className="freelancer-rate">{f.rate}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}