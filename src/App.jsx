import { useState } from 'react';
import Header from './components/Header';
import OverviewPanel from './components/OverviewPanel';
import ImmigrationPanel from './components/ImmigrationPanel';
import CrimePanel from './components/CrimePanel';
import EconomyPanel from './components/EconomyPanel';
import NHSPanel from './components/NHSPanel';
import HousingPanel from './components/HousingPanel';
import MortalityPanel from './components/MortalityPanel';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="app">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="main">
        {activeTab === 'Overview' && <OverviewPanel onTabChange={setActiveTab} />}
        {activeTab === 'Immigration' && <ImmigrationPanel />}
        {activeTab === 'Crime' && <CrimePanel />}
        {activeTab === 'Economy' && <EconomyPanel />}
        {activeTab === 'NHS' && <NHSPanel />}
        {activeTab === 'Housing' && <HousingPanel />}
        {activeTab === 'Mortality' && <MortalityPanel />}
      </main>
      <footer className="footer">
        <p>
          Data sourced from{' '}
          <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer">ONS</a>{' '}
          and{' '}
          <a href="https://www.gov.uk/government/organisations/home-office" target="_blank" rel="noopener noreferrer">Home Office</a>.
          {' '}Figures are the latest available at time of publication. Always refer to original sources for the most current data.
        </p>
      </footer>
    </div>
  );
}
