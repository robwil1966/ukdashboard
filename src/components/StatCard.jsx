export default function StatCard({ label, value, change, up }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {change && (
        <div className={`stat-change ${up ? 'up' : 'down'}`}>
          {up ? '▲' : '▼'} {change} vs prior year
        </div>
      )}
    </div>
  );
}
