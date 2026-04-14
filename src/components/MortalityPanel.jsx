import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, PieChart, Pie, Cell, Legend,
} from 'recharts';
import StatCard from './StatCard';
import {
  registeredDeaths, lifeExpectancy, ageStandardisedRate,
  causesOfDeath, excessDeaths, infantMortality, keyStats,
} from '../data/mortality';

const tooltipStyle = { background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 };
const labelStyle = { color: '#e8eaf0' };
const tickStyle = { fill: '#8b90a8', fontSize: 11 };

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

function deathsData() {
  return registeredDeaths.years.map((y, i) => ({ year: y, value: registeredDeaths.values[i] }));
}
function lifeExpData() {
  return lifeExpectancy.periods.map((p, i) => ({
    period: p,
    Male: lifeExpectancy.male[i],
    Female: lifeExpectancy.female[i],
  }));
}
function asmrData() {
  return ageStandardisedRate.years.map((y, i) => ({ year: y, value: ageStandardisedRate.values[i] }));
}
function causesData() {
  return causesOfDeath.categories.map((cat, i) => ({
    name: cat,
    value: causesOfDeath.values[i],
    fill: causesOfDeath.colors[i],
  }));
}
function excessData() {
  return excessDeaths.years.map((y, i) => ({ year: y, value: excessDeaths.values[i] }));
}
function infantData() {
  return infantMortality.years.map((y, i) => ({ year: y, value: infantMortality.values[i] }));
}

export default function MortalityPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Mortality</h2>
        <span className="source-badge">ONS Mortality Statistics · England & Wales · Latest: 2023</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Deaths Registered (thousands)</h3>
          <p className="chart-note">{registeredDeaths.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={deathsData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="k" domain={[490, 630]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}k`, 'Deaths']}
              />
              <Bar dataKey="value" fill="#a78bfa" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Excess Deaths vs 5-Year Average (thousands)</h3>
          <p className="chart-note">{excessDeaths.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={excessData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="k" />
              <ReferenceLine y={0} stroke="#2e3248" strokeWidth={2} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}k`, 'Excess deaths']}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}
                fill="#f87171"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Life Expectancy at Birth (years)</h3>
          <p className="chart-note">{lifeExpectancy.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={lifeExpData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="period" tick={tickStyle} />
              <YAxis tick={tickStyle} unit=" yrs" domain={[74, 85]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v} yrs`]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8b90a8' }} />
              <Line type="monotone" dataKey="Male" stroke="#4f7ef8" strokeWidth={2}
                dot={{ r: 4, fill: '#4f7ef8' }} />
              <Line type="monotone" dataKey="Female" stroke="#f472b6" strokeWidth={2}
                dot={{ r: 4, fill: '#f472b6' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Age-Standardised Mortality Rate (per 100,000)</h3>
          <p className="chart-note">{ageStandardisedRate.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={asmrData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} domain={[1050, 1250]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [v.toLocaleString(), 'Deaths per 100k']}
              />
              <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2}
                dot={{ r: 4, fill: '#fbbf24' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Leading Causes of Death — 2022 (thousands)</h3>
          <p className="chart-note">{causesOfDeath.source}</p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={causesData()} cx="50%" cy="50%" outerRadius={100}
                dataKey="value" labelLine={false} label={renderLabel}>
                {causesData().map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}k`]}
              />
              <Legend iconSize={10} wrapperStyle={{ fontSize: 11, color: '#8b90a8' }}
                formatter={value => <span style={{ color: '#8b90a8' }}>{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Infant Mortality Rate (per 1,000 live births)</h3>
          <p className="chart-note">{infantMortality.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={infantData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} domain={[3, 4.5]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [v, 'Deaths per 1,000 births']}
              />
              <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2}
                dot={{ r: 4, fill: '#34d399' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
