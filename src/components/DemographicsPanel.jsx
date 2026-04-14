import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Legend, Cell,
} from 'recharts';
import StatCard from './StatCard';
import {
  population, populationGrowth, fertilityRate, births,
  ageStructure, dependencyRatio, ethnicGroups, keyStats,
} from '../data/demographics';

const tooltipStyle = { background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 };
const labelStyle = { color: '#e8eaf0' };
const tickStyle = { fill: '#8b90a8', fontSize: 11 };

function popData() {
  return population.years.map((y, i) => ({ year: y, value: population.values[i] }));
}
function growthData() {
  return populationGrowth.years.map((y, i) => ({
    year: y,
    'Natural change': populationGrowth.naturalChange[i],
    'Net migration': populationGrowth.netMigration[i],
  }));
}
function fertilityData() {
  return fertilityRate.years.map((y, i) => ({ year: y, value: fertilityRate.values[i] }));
}
function birthsData() {
  return births.years.map((y, i) => ({ year: y, value: births.values[i] }));
}
function ageData() {
  return ageStructure.groups.map((g, i) => ({ group: g, value: ageStructure.values[i] }));
}
function depData() {
  return dependencyRatio.years.map((y, i) => ({ year: y, value: dependencyRatio.values[i] }));
}
function ethnicData() {
  return ethnicGroups.categories.map((cat, i) => ({
    name: cat,
    '2011': ethnicGroups.values2011[i],
    '2021': ethnicGroups.values2021[i],
  }));
}

export default function DemographicsPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Demographics</h2>
        <span className="source-badge">ONS Population Estimates · Census 2021 · Latest: 2023</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>UK Population (millions)</h3>
          <p className="chart-note">{population.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={popData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="m" domain={[64, 70]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'Population']}
              />
              <Line type="monotone" dataKey="value" stroke="#4f7ef8" strokeWidth={2}
                dot={{ r: 4, fill: '#4f7ef8' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Components of Population Growth (thousands)</h3>
          <p className="chart-note">{populationGrowth.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={growthData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="k" />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}k`]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8b90a8' }} />
              <Bar dataKey="Natural change" fill="#34d399" stackId="a" />
              <Bar dataKey="Net migration" fill="#4f7ef8" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Total Fertility Rate (children per woman)</h3>
          <p className="chart-note">{fertilityRate.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={fertilityData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} domain={[1.3, 2.2]} />
              <ReferenceLine y={fertilityRate.replacement} stroke="#f87171" strokeDasharray="4 4"
                label={{ value: '2.1 replacement', fill: '#f87171', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [v, 'Fertility rate']}
              />
              <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2}
                dot={{ r: 4, fill: '#fbbf24' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Live Births — England & Wales (thousands)</h3>
          <p className="chart-note">{births.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={birthsData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="k" domain={[550, 730]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}k`, 'Live births']}
              />
              <Bar dataKey="value" fill="#f472b6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Population by Age Group — UK 2023 (millions)</h3>
          <p className="chart-note">{ageStructure.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={ageData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="group" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="m" />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'Population']}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {ageData().map((_, i) => (
                  <Cell key={i} fill={ageStructure.colors[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Old-Age Dependency Ratio (65+ per 100 aged 16–64)</h3>
          <p className="chart-note">{dependencyRatio.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={depData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} domain={[22, 34]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [v, 'Dependency ratio']}
              />
              <Line type="monotone" dataKey="value" stroke="#a78bfa" strokeWidth={2}
                dot={{ r: 4, fill: '#a78bfa' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-card--wide">
          <h3>Ethnic Group — England & Wales: Census 2011 vs 2021 (%)</h3>
          <p className="chart-note">{ethnicGroups.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={ethnicData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" horizontal={false} />
              <XAxis type="number" tick={tickStyle} unit="%" domain={[0, 90]} />
              <YAxis dataKey="name" type="category" tick={tickStyle} width={160} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8b90a8' }} />
              <Bar dataKey="2011" fill="#4f7ef8" radius={[0, 4, 4, 0]} />
              <Bar dataKey="2021" fill="#34d399" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
