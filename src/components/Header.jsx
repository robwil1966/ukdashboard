export default function Header({ activeTab, onTabChange }) {
  const tabs = ['Overview', 'Immigration', 'Crime', 'Economy', 'NHS', 'Housing', 'Mortality', 'Demographics'];

  return (
    <header className="header">
      <div className="header-brand">
        <span className="flag">🇬🇧</span>
        <div>
          <h1>UK Dashboard</h1>
          <p>Key statistics for public debate</p>
        </div>
      </div>
      <nav className="header-nav">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn${activeTab === tab ? ' active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}
