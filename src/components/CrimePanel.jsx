import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie,
} from 'recharts';
import StatCard from './StatCard';
import { totalCrime, crimeByType, csewTrend, keyStats } from '../data/crime';

function totalData() {
  return totalCrime.years.map((y, i) => ({ year: y, value: totalCrime.values[i] }));
}

function typeData() {
  return crimeByType.categories.map((cat, i) => ({
    name: cat,
    value: crimeByType.values[i],
    fill: crimeByType.colors[i],
  }));
}

function csewData() {
  return csewTrend.years.map((y, i) => ({ year: y, value: csewTrend.values[i] }));
}

const RADIAN = Math.PI / 180;
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.05) return null;
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function CrimePanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Crime</h2>
        <span className="source-badge">ONS Crime in England & Wales · Latest: Mar 2024</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Total Police Recorded Crime (millions)</h3>
          <p className="chart-note">{totalCrime.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={totalData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={{ fill: '#8b90a8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#8b90a8', fontSize: 11 }} domain={[4, 8]} />
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v}m`, 'Recorded crimes']}
              />
              <Line type="monotone" dataKey="value" stroke="#f87171" strokeWidth={2} dot={{ r: 4, fill: '#f87171' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Crime by Type (year ending Mar 2024)</h3>
          <p className="chart-note">{crimeByType.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={typeData()}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                labelLine={false}
                label={renderLabel}
              >
                {typeData().map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v.toLocaleString()}`, 'Offences']}
              />
              <Legend
                iconSize={10}
                wrapperStyle={{ fontSize: 11, color: '#8b90a8' }}
                formatter={value => <span style={{ color: '#8b90a8' }}>{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-card--wide">
          <h3>Crime Survey for England & Wales — Estimated Victims (millions)</h3>
          <p className="chart-note">{csewTrend.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={csewData()} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={{ fill: '#8b90a8', fontSize: 11 }} />
              <YAxis tick={{ fill: '#8b90a8', fontSize: 11 }} domain={[5, 11]} unit="m" />
              <Tooltip
                contentStyle={{ background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 }}
                labelStyle={{ color: '#e8eaf0' }}
                formatter={v => [`${v}m`, 'Estimated victims']}
              />
              <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} dot={{ r: 4, fill: '#34d399' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
