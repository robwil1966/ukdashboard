import StatCard from './StatCard';
import { keyStats as immigrationStats } from '../data/immigration';
import { keyStats as crimeStats } from '../data/crime';

const overviewCards = [
  ...immigrationStats.map(s => ({ ...s, section: 'Immigration' })),
  ...crimeStats.map(s => ({ ...s, section: 'Crime' })),
];

export default function OverviewPanel({ onTabChange }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Overview</h2>
        <span className="source-badge">ONS · Home Office · Latest available data</span>
      </div>

      <p className="overview-intro">
        Key statistics drawn from official UK government sources. Use the tabs above to explore
        detailed charts for each topic.
      </p>

      <h3 className="section-heading">Immigration</h3>
      <div className="stat-grid">
        {immigrationStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <h3 className="section-heading">Crime</h3>
      <div className="stat-grid">
        {crimeStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="overview-actions">
        <button className="action-btn" onClick={() => onTabChange('Immigration')}>
          Explore Immigration →
        </button>
        <button className="action-btn" onClick={() => onTabChange('Crime')}>
          Explore Crime →
        </button>
      </div>
    </div>
  );
}
