// Source: ONS Long-Term International Migration estimates & Home Office Immigration Statistics
// Latest data: year ending June 2024

export const netMigration = {
  label: 'UK Net Migration (thousands)',
  source: 'ONS Long-Term International Migration',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', 'Jun 2024'],
  values: [331, 273, 282, 270, 184, 95, 239, 606, 685, 728],
  note: '2020 figure reflects COVID-19 travel restrictions',
};

export const migrationByReason = {
  label: 'Arrivals by Main Reason (year ending Jun 2024, thousands)',
  source: 'ONS Long-Term International Migration',
  categories: ['Work', 'Study', 'Family', 'Asylum / Humanitarian', 'Other'],
  arrivals: [303, 371, 119, 84, 60],
};

export const visaGrants = {
  label: 'Main Visa Categories Granted (thousands)',
  source: 'Home Office Immigration Statistics',
  years: ['2019', '2020', '2021', '2022', '2023'],
  work: [239, 144, 210, 341, 298],
  study: [348, 231, 421, 486, 490],
  family: [87, 64, 79, 96, 101],
};

export const asylumApplications = {
  label: 'Asylum Applications (thousands)',
  source: 'Home Office Asylum and Resettlement Statistics',
  years: ['2019', '2020', '2021', '2022', '2023'],
  values: [35.7, 29.5, 48.5, 74.8, 84.4],
  pendingCases: 99_800, // cases awaiting initial decision, end 2023
};

export const keyStats = [
  { label: 'Net Migration (Jun 2024)', value: '728,000', change: '+6%', up: true },
  { label: 'Asylum Applications (2023)', value: '84,400', change: '+13%', up: true },
  { label: 'Visas Granted – Study (2023)', value: '490,000', change: '+1%', up: true },
  { label: 'Visas Granted – Work (2023)', value: '298,000', change: '-13%', up: false },
];
