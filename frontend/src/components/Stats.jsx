export default function Stats({ STATS }) {
  return (
    <section className="section section-bg-dark">
      <div className="stats-grid">
        {STATS.map(s => (
          <div key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}