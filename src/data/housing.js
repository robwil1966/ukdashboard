// Source: ONS House Price Index, MHCLG Housing Supply Statistics, ONS Private Rental Prices
// Latest data: 2024

export const housePrices = {
  label: 'Average UK House Price (£thousands)',
  source: 'ONS UK House Price Index',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  values: [196, 209, 220, 228, 232, 239, 270, 290, 285, 292],
  note: '2021 spike driven by stamp duty holiday; 2023 slight correction as mortgage rates rose',
};

export const affordability = {
  label: 'House Price to Earnings Ratio',
  source: 'ONS Housing Affordability in England and Wales',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  values: [7.74, 7.93, 7.87, 7.83, 7.83, 7.69, 8.91, 9.05, 8.26],
  note: 'Ratio of median house price to median gross annual workplace earnings. Peak in 1990s was ~3.5x.',
};

export const newHomes = {
  label: 'New Homes Completed (England, thousands)',
  source: 'MHCLG Housing Supply: Net Additional Dwellings',
  target: 300,
  years: ['2018/19', '2019/20', '2020/21', '2021/22', '2022/23', '2023/24'],
  values: [169.5, 160.6, 137.9, 172.1, 160.1, 152.7],
  note: 'Government target is 300,000 new homes per year. No year has come close.',
};

export const rentalGrowth = {
  label: 'Private Rental Prices — Annual Change (%)',
  source: 'ONS Index of Private Housing Rental Prices',
  years: ['2019', '2020', '2021', '2022', '2023', '2024'],
  values: [1.5, 1.4, 2.0, 4.4, 8.9, 8.4],
  note: 'Rental inflation has surged since 2022, far exceeding the long-run average of ~2%',
};

export const tenure = {
  label: 'Housing Tenure in England (%)',
  source: 'MHCLG English Housing Survey',
  year: '2022/23',
  categories: ['Owner-occupied', 'Private rented', 'Social rented'],
  values: [65, 19, 16],
  colors: ['#4f7ef8', '#fbbf24', '#34d399'],
  note: 'Owner-occupation peaked at ~71% in 2003; private renting has doubled since then',
};

export const keyStats = [
  { label: 'Avg House Price (2024)', value: '£292k', change: '+2.5%', up: true },
  { label: 'Price-to-Earnings Ratio', value: '8.26x', change: '-0.79x', up: false },
  { label: 'New Homes Built (2023/24)', value: '152,700', change: '-4.6%', up: false },
  { label: 'Private Rent Growth (2024)', value: '8.4%', change: '-0.5pp', up: false },
];
