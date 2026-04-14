// Source: DWP Households Below Average Income (HBAI), DWP Stat Xplore,
// Trussell Trust, ONS. UK/England & Wales unless stated.

export const relativePovertRate = {
  label: 'People in Relative Poverty — After Housing Costs (%, UK)',
  source: 'DWP Households Below Average Income',
  years: ['2018/19', '2019/20', '2020/21', '2021/22', '2022/23'],
  overall:   [22, 22, 22, 22, 22],
  children:  [30, 31, 31, 29, 30],
  pensioners:[18, 18, 19, 16, 16],
  working:   [15, 15, 14, 14, 15],
  note: 'Relative poverty = below 60% of median household income after housing costs',
};

export const absolutePoverty = {
  label: 'People in Absolute Poverty — After Housing Costs (millions, UK)',
  source: 'DWP Households Below Average Income',
  years: ['2018/19', '2019/20', '2020/21', '2021/22', '2022/23'],
  values: [13.9, 13.7, 13.4, 12.0, 14.4],
  note: 'Absolute poverty measures against a fixed 2010/11 living standard. 2021/22 dip reflects COVID support payments; 2022/23 rise driven by cost-of-living crisis.',
};

export const childPoverty = {
  label: 'Children in Relative Poverty — After Housing Costs (millions, UK)',
  source: 'DWP Households Below Average Income',
  years: ['2015/16', '2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22', '2022/23'],
  values: [3.9, 4.0, 4.1, 4.2, 4.3, 4.3, 3.9, 4.3],
  note: '2021/22 dip driven by the £20/week Universal Credit uplift and furlough scheme. Both ended in 2022.',
};

export const ucClaimants = {
  label: 'Universal Credit Claimants (millions)',
  source: 'DWP Stat Xplore',
  months: ['Feb 2020', 'May 2020', 'Feb 2021', 'Aug 2021', 'Feb 2022', 'Aug 2022', 'Feb 2023', 'Aug 2023', 'Feb 2024'],
  values: [2.9, 5.5, 5.9, 5.8, 5.8, 5.9, 6.0, 6.1, 6.3],
  note: 'Sharp May 2020 spike reflects COVID-19 furlough scheme ending and job losses.',
};

export const foodBanks = {
  label: 'Food Bank Parcels Distributed (Trussell Trust network, millions)',
  source: 'Trussell Trust End of Year Stats',
  years: ['2017/18', '2018/19', '2019/20', '2020/21', '2021/22', '2022/23', '2023/24'],
  values: [1.33, 1.60, 1.90, 2.54, 2.17, 3.03, 3.12],
  note: 'Trussell Trust covers ~60% of UK food banks. Total UK usage is significantly higher. 2022/23 record driven by cost-of-living crisis.',
};

export const inWorkPoverty = {
  label: 'In-Work Poverty — Share of Working-Age Adults in Poverty Who Are in Employment (%)',
  source: 'DWP Households Below Average Income',
  years: ['2010/11', '2013/14', '2016/17', '2019/20', '2021/22', '2022/23'],
  values: [39, 41, 46, 51, 50, 52],
  note: 'Over half of working-age adults in poverty now live in a household where at least one adult works.',
};

export const benefitsByType = {
  label: 'Key Benefit Claimant Counts (millions, latest available)',
  source: 'DWP Stat Xplore, 2024',
  categories: ['Universal Credit', 'Housing Benefit', 'Child Benefit (families)', 'Pension Credit', 'Personal Independence Payment'],
  values: [6.3, 4.6, 7.3, 1.4, 3.3],
  colors: ['#4f7ef8', '#34d399', '#fbbf24', '#a78bfa', '#f87171'],
};

export const keyStats = [
  { label: 'People in Relative Poverty', value: '14.3m', change: '+2%', up: true },
  { label: 'Children in Poverty', value: '4.3m', change: '+10%', up: true },
  { label: 'Universal Credit Claimants', value: '6.3m', change: '+5%', up: true },
  { label: 'Food Bank Parcels (2023/24)', value: '3.12m', change: '+3%', up: true },
];
