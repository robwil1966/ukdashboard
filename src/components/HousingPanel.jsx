import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, PieChart, Pie, Cell, Legend,
} from 'recharts';
import StatCard from './StatCard';
import { housePrices, affordability, newHomes, rentalGrowth, tenure, keyStats } from '../data/housing';

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

function priceData() {
  return housePrices.years.map((y, i) => ({ year: y, value: housePrices.values[i] }));
}
function affordData() {
  return affordability.years.map((y, i) => ({ year: y, value: affordability.values[i] }));
}
function newHomesData() {
  return newHomes.years.map((y, i) => ({ year: y, value: newHomes.values[i] }));
}
function rentalData() {
  return rentalGrowth.years.map((y, i) => ({ year: y, value: rentalGrowth.values[i] }));
}
function tenureData() {
  return tenure.categories.map((cat, i) => ({ name: cat, value: tenure.values[i], fill: tenure.colors[i] }));
}

export default function HousingPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Housing</h2>
        <span className="source-badge">ONS · MHCLG · Latest: 2024</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>Average UK House Price (£k)</h3>
          <p className="chart-note">{housePrices.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={priceData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="k" domain={[150, 320]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`£${v}k`, 'Avg price']}
              />
              <Line type="monotone" dataKey="value" stroke="#4f7ef8" strokeWidth={2}
                dot={{ r: 4, fill: '#4f7ef8' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>House Price to Earnings Ratio</h3>
          <p className="chart-note">{affordability.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={affordData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="x" domain={[6, 10]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}x`, 'Price/earnings']}
              />
              <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2}
                dot={{ r: 4, fill: '#fbbf24' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>New Homes Completed — England (thousands)</h3>
          <p className="chart-note">{newHomes.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={newHomesData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="k" domain={[0, 320]} />
              <ReferenceLine y={newHomes.target} stroke="#f87171" strokeDasharray="4 4"
                label={{ value: '300k target', fill: '#f87171', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}k`, 'Completions']}
              />
              <Bar dataKey="value" fill="#34d399" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Private Rental Price Growth (% per year)</h3>
          <p className="chart-note">{rentalGrowth.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={rentalData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" />
              <ReferenceLine y={2} stroke="#34d399" strokeDasharray="4 4"
                label={{ value: '~2% long-run avg', fill: '#34d399', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'Rental growth']}
              />
              <Bar dataKey="value" fill="#fb923c" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-card--wide">
          <h3>Housing Tenure — England ({tenure.year})</h3>
          <p className="chart-note">{tenure.note}</p>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={tenureData()} cx="50%" cy="50%" outerRadius={95}
                dataKey="value" labelLine={false} label={renderLabel}>
                {tenureData().map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`]}
              />
              <Legend iconSize={10} wrapperStyle={{ fontSize: 12, color: '#8b90a8' }}
                formatter={value => <span style={{ color: '#8b90a8' }}>{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
