// Source: ONS GDP, CPI, Labour Market Statistics; Bank of England
// Latest data: 2024

export const gdpGrowth = {
  label: 'GDP Annual Growth (%)',
  source: 'ONS National Accounts',
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  values: [1.6, -11.0, 8.7, 4.3, 0.3, 1.1],
  note: '2020 reflects COVID-19 lockdowns; largest annual fall since ONS records began',
};

export const inflation = {
  label: 'CPI Inflation — Annual Average (%)',
  source: 'ONS Consumer Price Indices',
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  values: [1.8, 0.9, 2.5, 9.1, 7.3, 2.5],
  target: 2.0,
  note: 'Bank of England inflation target is 2%',
};

export const unemployment = {
  label: 'Unemployment Rate (%)',
  source: 'ONS Labour Market Statistics',
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  values: [3.8, 4.5, 4.5, 3.7, 4.2, 4.4],
};

export const baseRate = {
  label: 'Bank of England Base Rate (%, end of year)',
  source: 'Bank of England',
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  values: [0.75, 0.1, 0.25, 3.5, 5.25, 4.75],
};

export const wageGrowth = {
  label: 'Average Weekly Earnings Growth (%, nominal)',
  source: 'ONS Labour Market Statistics',
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  nominal: [3.6, 1.2, 6.1, 6.5, 7.8, 5.6],
  real:    [1.8, 0.3, 3.6, -2.6, 0.5, 3.1],
  note: 'Real wages adjusted for CPI inflation',
};

export const keyStats = [
  { label: 'GDP Growth (2024)', value: '1.1%', change: '+0.8pp', up: true },
  { label: 'CPI Inflation (2024 avg)', value: '2.5%', change: '-4.8pp', up: false },
  { label: 'Unemployment Rate', value: '4.4%', change: '+0.2pp', up: true },
  { label: 'BoE Base Rate', value: '4.75%', change: '-0.5pp', up: false },
];
