import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Legend,
} from 'recharts';
import StatCard from './StatCard';
import { aAndE, electiveWaiting, waitOver18Weeks, ambulance, staffVacancies, keyStats } from '../data/nhs';

const tooltipStyle = { background: '#1a1d27', border: '1px solid #2e3248', borderRadius: 6 };
const labelStyle = { color: '#e8eaf0' };
const tickStyle = { fill: '#8b90a8', fontSize: 11 };

function aeData() {
  return aAndE.years.map((y, i) => ({ year: y, value: aAndE.values[i] }));
}
function electiveData() {
  return electiveWaiting.months.map((m, i) => ({ month: m, value: electiveWaiting.values[i] }));
}
function wait18Data() {
  return waitOver18Weeks.years.map((y, i) => ({ year: y, value: waitOver18Weeks.values[i] }));
}
function ambulanceData() {
  return ambulance.years.map((y, i) => ({ year: y, value: ambulance.valuesNum[i], label: ambulance.valuesLabel[i] }));
}
function vacancyData() {
  return staffVacancies.years.map((y, i) => ({ year: y, value: staffVacancies.values[i] }));
}

export default function NHSPanel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h2>NHS</h2>
        <span className="source-badge">NHS England · Latest: 2023/24</span>
      </div>

      <div className="stat-grid">
        {keyStats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3>A&E — % Seen Within 4 Hours</h3>
          <p className="chart-note">{aAndE.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={aeData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" domain={[60, 100]} />
              <ReferenceLine y={aAndE.target} stroke="#34d399" strokeDasharray="4 4"
                label={{ value: '95% target', fill: '#34d399', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'Seen within 4hrs']}
              />
              <Line type="monotone" dataKey="value" stroke="#f87171" strokeWidth={2}
                dot={{ r: 4, fill: '#f87171' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Elective Waiting List (millions)</h3>
          <p className="chart-note">{electiveWaiting.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={electiveData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="month" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="m" domain={[4, 8]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}m`, 'Waiting']}
              />
              <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2}
                dot={{ r: 4, fill: '#fbbf24' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>% Waiting Over 18 Weeks for Elective Treatment</h3>
          <p className="chart-note">{waitOver18Weeks.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={wait18Data()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" />
              <ReferenceLine y={waitOver18Weeks.target} stroke="#34d399" strokeDasharray="4 4"
                label={{ value: '8% standard', fill: '#34d399', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'Waiting >18wks']}
              />
              <Bar dataKey="value" fill="#fb923c" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Category 1 Ambulance Mean Response Time (mins)</h3>
          <p className="chart-note">{ambulance.note}</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={ambulanceData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit=" min" domain={[6, 10]} />
              <ReferenceLine y={7} stroke="#34d399" strokeDasharray="4 4"
                label={{ value: '7 min target', fill: '#34d399', fontSize: 11, position: 'insideTopRight' }} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={(v, _, props) => [props.payload.label, 'Mean response']}
              />
              <Bar dataKey="value" fill="#a78bfa" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card chart-card--wide">
          <h3>NHS Vacancy Rate (%)</h3>
          <p className="chart-note">{staffVacancies.source}</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={vacancyData()} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2e3248" />
              <XAxis dataKey="year" tick={tickStyle} />
              <YAxis tick={tickStyle} unit="%" domain={[6, 12]} />
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={labelStyle}
                formatter={v => [`${v}%`, 'Vacancy rate']}
              />
              <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={2}
                dot={{ r: 4, fill: '#60a5fa' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
