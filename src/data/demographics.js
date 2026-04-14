// Source: ONS Population Estimates, ONS Census 2021, ONS Birth Statistics
// UK unless stated; England & Wales for Census/birth data

export const population = {
  label: 'UK Population (millions)',
  source: 'ONS Mid-Year Population Estimates',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  values: [65.1, 65.6, 66.0, 66.4, 66.8, 67.1, 67.0, 67.6, 68.3],
  note: '2021 slight dip reflects COVID-related emigration and reduced immigration',
};

export const populationGrowth = {
  label: 'Components of UK Population Change (thousands)',
  source: 'ONS Population Estimates — Components of Change',
  years: ['2019', '2020', '2021', '2022', '2023'],
  naturalChange: [102, 15, 82, 61, 21],
  netMigration:  [184, 95, 239, 606, 685],
  note: 'Natural change = births minus deaths. Net migration now dominates population growth.',
};

export const fertilityRate = {
  label: 'Total Fertility Rate (average children per woman)',
  source: 'ONS Birth Summary Tables — England & Wales',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  values: [1.82, 1.81, 1.76, 1.70, 1.65, 1.58, 1.61, 1.49],
  replacement: 2.1,
  note: 'Replacement fertility is 2.1. England & Wales rate hit a record low in 2022.',
};

export const births = {
  label: 'Live Births — England & Wales (thousands)',
  source: 'ONS Birth Summary Tables',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  values: [697.9, 696.3, 679.1, 657.1, 640.4, 613.9, 624.8, 605.5, 591.1],
  note: 'Births have fallen consistently since 2012 peak of 729,674',
};

export const ageStructure = {
  label: 'UK Population by Age Group (2023, millions)',
  source: 'ONS Mid-Year Population Estimates 2023',
  groups: ['0–15', '16–24', '25–34', '35–44', '45–54', '55–64', '65–74', '75–84', '85+'],
  values:  [11.9,    7.7,    8.9,    8.6,    8.8,    7.7,    6.2,    4.1,   1.7],
  colors: ['#4f7ef8','#60a5fa','#34d399','#a3e635','#fbbf24','#fb923c','#f87171','#f472b6','#a78bfa'],
};

export const dependencyRatio = {
  label: 'Old-Age Dependency Ratio (people 65+ per 100 aged 16–64)',
  source: 'ONS Population Estimates',
  years: ['2000', '2005', '2010', '2015', '2020', '2023'],
  values: [24.0, 24.9, 25.6, 27.8, 29.8, 30.4],
  note: 'A rising ratio means fewer workers supporting each pensioner. Projected to reach ~40 by 2050.',
};

export const ethnicGroups = {
  label: 'Ethnic Group — England & Wales, Census 2021 (%)',
  source: 'ONS Census 2021',
  categories: ['White', 'Asian / Asian British', 'Black / Black British', 'Mixed', 'Other'],
  values2011: [86.0, 7.5, 3.3, 2.2, 1.0],
  values2021: [81.7, 9.3, 4.2, 2.9, 1.6],
  colors: ['#4f7ef8', '#fbbf24', '#f87171', '#34d399', '#a78bfa'],
};

export const keyStats = [
  { label: 'UK Population (2023)', value: '68.3m', change: '+1.0%', up: true },
  { label: 'Total Fertility Rate (2022)', value: '1.49', change: '-0.12', up: false },
  { label: 'Live Births (2023)', value: '591,100', change: '-2.4%', up: false },
  { label: 'Dependency Ratio (2023)', value: '30.4', change: '+0.6', up: true },
];
