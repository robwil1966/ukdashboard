// Source: ONS Crime in England and Wales (CSEW + Police Recorded Crime)
// Latest data: year ending March 2024

export const totalCrime = {
  label: 'Total Police Recorded Crime (millions, excl. fraud)',
  source: 'ONS Crime in England and Wales',
  years: ['2014/15', '2016/17', '2018/19', '2019/20', '2020/21', '2021/22', '2022/23', '2023/24'],
  values: [4.33, 5.17, 6.03, 6.18, 5.53, 6.29, 6.74, 6.07],
  note: '2020/21 figure reflects COVID-19 restrictions reducing some crime types',
};

export const crimeByType = {
  label: 'Crimes by Category, year ending March 2024 (thousands)',
  source: 'ONS Crime in England and Wales',
  categories: [
    'Violence against person',
    'Criminal damage & arson',
    'Theft offences',
    'Drug offences',
    'Public order',
    'Robbery',
    'Sexual offences',
    'Other',
  ],
  values: [2079, 854, 1672, 278, 574, 71, 174, 364],
  colors: ['#f87171', '#fbbf24', '#60a5fa', '#a78bfa', '#34d399', '#fb923c', '#f472b6', '#94a3b8'],
};

export const csewTrend = {
  label: 'Crime Survey for England & Wales – Estimated Victims (millions)',
  source: 'ONS CSEW (victim-based survey, excludes fraud & computer misuse)',
  years: ['2014/15', '2016/17', '2018/19', '2019/20', '2021/22', '2022/23', '2023/24'],
  values: [9.1, 8.5, 7.8, 7.3, 6.7, 6.3, 6.0],
  note: 'Long-term downward trend since mid-1990s peak of ~19 million',
};

export const keyStats = [
  { label: 'Police Recorded Crime (2023/24)', value: '6.07m', change: '-10%', up: false },
  { label: 'Violence against Person', value: '2.08m', change: '-4%', up: false },
  { label: 'Theft Offences', value: '1.67m', change: '+1%', up: true },
  { label: 'CSEW Estimated Victims', value: '6.0m', change: '-5%', up: false },
];
