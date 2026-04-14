import StatCard from './StatCard';
import { keyStats as immigrationStats } from '../data/immigration';
import { keyStats as crimeStats } from '../data/crime';
import { keyStats as economyStats } from '../data/economy';
import { keyStats as nhsStats } from '../data/nhs';
import { keyStats as housingStats } from '../data/housing';
import { keyStats as mortalityStats } from '../data/mortality';
import { keyStats as demographicsStats } from '../data/demographics';

const sections = [
  { title: 'Economy', stats: economyStats, tab: 'Economy' },
  { title: 'Immigration', stats: immigrationStats, tab: 'Immigration' },
  { title: 'Crime', stats: crimeStats, tab: 'Crime' },
  { title: 'NHS', stats: nhsStats, tab: 'NHS' },
  { title: 'Housing', stats: housingStats, tab: 'Housing' },
  { title: 'Mortality', stats: mortalityStats, tab: 'Mortality' },
  { title: 'Demographics', stats: demographicsStats, tab: 'Demographics' },
];

export default function OverviewPanel({ onTabChange }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Overview</h2>
        <span className="source-badge">ONS · Home Office · NHS England · BoE · Latest available data</span>
      </div>

      <p className="overview-intro">
        Key statistics drawn from official UK government sources. Use the tabs above to explore
        detailed charts for each topic.
      </p>

      {sections.map(({ title, stats, tab }) => (
        <div key={title}>
          <div className="overview-section-header">
            <h3 className="section-heading">{title}</h3>
            <button className="action-btn action-btn--small" onClick={() => onTabChange(tab)}>
              Explore →
            </button>
          </div>
          <div className="stat-grid">
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
