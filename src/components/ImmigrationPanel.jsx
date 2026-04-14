import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Cell,
} from 'recharts';
import StatCard from './StatCard';
import { netMigration, migrationByReason, visaGrants, asylumApplications, keyStats } from '../data/immigration';

const COLORS = ['#4f7ef8', '#34d399', '#fbbf24', '#f87171', '#a78bfa'];

function netMigrationData() {
  return netMigration.years.map((y, i) => ({ year: y, value: netMigration.values[i] }));
}

function reasonData() {
  return migrationByReason.categories.map((cat, i) => ({
    name: cat,
    arrivals: migrationByReason.arrivals[i],
  }));
}

function visaData() {
  return visaGrants.years.map((y, i) => ({
    year: y,
    Work: visaGrants.work[i],
    Study: visaGrants.study[i],
    Family: visaGrants.family[i],
  }));
}

function asylumData() {
  return asylumApplications.years.map((y, i) => ({
    year: y,
    applications: asylumApplications.values[i],
  }));
}

export default function ImmigrationPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Immigration</h2>
        <span className="source-badge">ONS · Home Office · Latest: Jun 2024</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Net Migration (thousands)</h3>
          <p className="chart-note">{netMigration.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={netMigrationData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={{ fill: '#8b90a8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#8b90a8', fontSize: 11 }} unit="k" />
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v}k`, 'Net migration']}
              />
              <Line type="monotone" dataKey="value" stroke="#4f7ef8" strokeWidth={2} dot={{ r: 4, fill: '#4f7ef8' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Arrivals by Reason (year ending Jun 2024, thousands)</h3>
          <p className="chart-note">{migrationByReason.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={reasonData()} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#8b90a8', fontSize: 11 }} unit="k" />
              <YAxis dataKey="name" type="category" tick={{ fill: '#8b90a8', fontSize: 11 }} width={130} />
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v}k`, 'Arrivals']}
              />
              <Bar dataKey="arrivals" radius={[0, 4, 4, 0]}>
                {reasonData().map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Visa Grants by Category (thousands)</h3>
          <p className="chart-note">{visaGrants.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={visaData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={{ fill: '#8b90a8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#8b90a8', fontSize: 11 }} unit="k" />
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v}k`]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8b90a8' }} />
              <Bar dataKey="Work" fill="#4f7ef8" stackId="a" />
              <Bar dataKey="Study" fill="#34d399" stackId="a" />
              <Bar dataKey="Family" fill="#fbbf24" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Asylum Applications (thousands)</h3>
          <p className="chart-note">{asylumApplications.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={asylumData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={{ fill: '#8b90a8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#8b90a8', fontSize: 11 }} unit="k" />
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v}k`, 'Applications']}
              />
              <Bar dataKey="applications" fill="#f87171" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
