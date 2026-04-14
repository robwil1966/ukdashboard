import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Legend,
} from 'recharts';
import StatCard from './StatCard';
import { gdpGrowth, inflation, unemployment, baseRate, wageGrowth, keyStats } from '../data/economy';

function gdpData() {
  return gdpGrowth.years.map((y, i) => ({ year: y, value: gdpGrowth.values[i] }));
}
function cpiData() {
  return inflation.years.map((y, i) => ({ year: y, value: inflation.values[i] }));
}
function unemploymentData() {
  return unemployment.years.map((y, i) => ({ year: y, value: unemployment.values[i] }));
}
function baseRateData() {
  return baseRate.years.map((y, i) => ({ year: y, value: baseRate.values[i] }));
}
function wageData() {
  return wageGrowth.years.map((y, i) => ({
    year: y,
    Nominal: wageGrowth.nominal[i],
    Real: wageGrowth.real[i],
  }));
}

const tooltipStyle = { background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 };
const labelStyle = { color: '#e8eaf0' };
const tickStyle = { fill: '#8b90a8', fontSize: 11 };

export default function EconomyPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Economy</h2>
        <span className="source-badge">ONS · Bank of England · Latest: 2024</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>GDP Annual Growth (%)</h3>
          <p className="chart-note">{gdpGrowth.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={gdpData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" />
              <ReferenceLine y={0} stroke="#2e3248" strokeWidth={2} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'GDP growth']}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}
                fill="#4f7ef8"
                label={false}
              >
                {gdpData().map((entry, i) => (
                  <rect key={i} fill={entry.value < 0 ? '#f87171' : '#4f7ef8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>CPI Inflation — Annual Average (%)</h3>
          <p className="chart-note">{inflation.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={cpiData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" />
              <ReferenceLine y={inflation.target} stroke="#34d399" strokeDasharray="4 4"
                label={{ value: '2% target', fill: '#34d399', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'CPI inflation']}
              />
              <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2}
                dot={{ r: 4, fill: '#fbbf24' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Unemployment Rate (%)</h3>
          <p className="chart-note">{unemployment.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={unemploymentData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" domain={[2, 6]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'Unemployment']}
              />
              <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2}
                dot={{ r: 4, fill: '#34d399' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Bank of England Base Rate (%)</h3>
          <p className="chart-note">{baseRate.source}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={baseRateData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'Base rate']}
              />
              <Line type="monotone" dataKey="value" stroke="#a78bfa" strokeWidth={2}
                dot={{ r: 4, fill: '#a78bfa' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-card--wide">
          <h3>Average Weekly Earnings Growth (%) — Nominal vs Real</h3>
          <p className="chart-note">{wageGrowth.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={wageData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" />
              <ReferenceLine y={0} stroke="#2e3248" strokeWidth={2} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8b90a8' }} />
              <Bar dataKey="Nominal" fill="#4f7ef8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Real" fill="#34d399" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
