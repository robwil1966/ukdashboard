import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, Cell,
} from 'recharts';
import StatCard from './StatCard';
import {
  relativePovertRate, absolutePoverty, childPoverty,
  ucClaimants, foodBanks, inWorkPoverty, benefitsByType, keyStats,
} from '../data/poverty';

const tooltipStyle = { background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 };
const labelStyle = { color: '#e8eaf0' };
const tickStyle = { fill: '#8b90a8', fontSize: 11 };

function relativePovData() {
  return relativePovertRate.years.map((y, i) => ({
    year: y,
    Overall: relativePovertRate.overall[i],
    Children: relativePovertRate.children[i],
    Pensioners: relativePovertRate.pensioners[i],
    'In work': relativePovertRate.working[i],
  }));
}
function absoluteData() {
  return absolutePoverty.years.map((y, i) => ({ year: y, value: absolutePoverty.values[i] }));
}
function childPovData() {
  return childPoverty.years.map((y, i) => ({ year: y, value: childPoverty.values[i] }));
}
function ucData() {
  return ucClaimants.months.map((m, i) => ({ month: m, value: ucClaimants.values[i] }));
}
function foodBankData() {
  return foodBanks.years.map((y, i) => ({ year: y, value: foodBanks.values[i] }));
}
function inWorkData() {
  return inWorkPoverty.years.map((y, i) => ({ year: y, value: inWorkPoverty.values[i] }));
}
function benefitsData() {
  return benefitsByType.categories.map((cat, i) => ({
    name: cat, value: benefitsByType.values[i], fill: benefitsByType.colors[i],
  }));
}

export default function PovertyPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>Poverty &amp; Welfare</h2>
        <span className="source-badge">DWP HBAI · Trussell Trust · DWP Stat Xplore · Latest: 2023/24</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card chart-card--wide">
          <h3>Relative Poverty Rates by Group — After Housing Costs (%)</h3>
          <p className="chart-note">{relativePovertRate.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={relativePovData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" domain={[10, 35]} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle} formatter={v => [`${v}%`]} />
              <Legend wrapperStyle={{ fontSize: 12, color: '#8b90a8' }} />
              <Line type="monotone" dataKey="Overall" stroke="#4f7ef8" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Children" stroke="#f87171" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Pensioners" stroke="#a78bfa" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="In work" stroke="#34d399" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Absolute Poverty — After Housing Costs (millions)</h3>
          <p className="chart-note">{absolutePoverty.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={absoluteData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="m" domain={[11, 16]} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'In absolute poverty']} />
              <Bar dataKey="value" fill="#fb923c" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Children in Relative Poverty (millions)</h3>
          <p className="chart-note">{childPoverty.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={childPovData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="m" domain={[3.5, 4.6]} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'Children in poverty']} />
              <Bar dataKey="value" fill="#f87171" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Universal Credit Claimants (millions)</h3>
          <p className="chart-note">{ucClaimants.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={ucData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="month" tick={tickStyle} interval={1} />
              <YAxis tick={tickStyle} unit="m" domain={[2, 7]} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'UC claimants']} />
              <Line type="monotone" dataKey="value" stroke="#4f7ef8" strokeWidth={2}
                dot={{ r: 4, fill: '#4f7ef8' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Trussell Trust Food Bank Parcels (millions)</h3>
          <p className="chart-note">{foodBanks.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={foodBankData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="m" />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'Parcels']} />
              <Bar dataKey="value" fill="#fbbf24" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>In-Work Poverty — % of Working-Age Poor Who Are Employed</h3>
          <p className="chart-note">{inWorkPoverty.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={inWorkData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" domain={[35, 60]} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'In-work poverty share']} />
              <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2}
                dot={{ r: 4, fill: '#34d399' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-card--wide">
          <h3>Key Benefit Claimant Counts (millions, 2024)</h3>
          <p className="chart-note">{benefitsByType.source}</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={benefitsData()} layout="vertical"
              margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" horizontal={false} />
              <XAxis type="number" tick={tickStyle} unit="m" />
              <YAxis dataKey="name" type="category" tick={tickStyle} width={200} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={labelStyle}
                formatter={v => [`${v}m`]} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {benefitsData().map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
