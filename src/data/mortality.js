// Source: ONS Mortality Statistics, ONS Life Expectancy, ONS Causes of Death
// England & Wales unless stated

export const registeredDeaths = {
  label: 'Deaths Registered (England & Wales, thousands)',
  source: 'ONS Mortality Statistics',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  values: [529.7, 525.0, 533.3, 541.6, 530.8, 608.0, 586.8, 577.2, 574.3],
  note: '2020 spike reflects COVID-19 pandemic deaths',
};

export const lifeExpectancy = {
  label: 'Life Expectancy at Birth (UK, years)',
  source: 'ONS National Life Tables',
  periods: ['2000–02', '2005–07', '2010–12', '2015–17', '2018–20', '2020–22'],
  male:   [75.4, 77.0, 78.6, 79.2, 79.0, 79.3],
  female: [80.2, 81.3, 82.6, 83.0, 82.9, 83.0],
  note: 'Life expectancy improvements have slowed markedly since 2011 compared to preceding decades',
};

export const ageStandardisedRate = {
  label: 'Age-Standardised Mortality Rate (deaths per 100,000)',
  source: 'ONS Deaths Registered Summary Tables',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  values: [1115, 1110, 1124, 1109, 1091, 1209, 1173, 1157, 1110],
  note: 'Standardised to remove effect of ageing population. 2020 peak = COVID-19.',
};

export const causesOfDeath = {
  label: 'Leading Causes of Death — England & Wales (2022, thousands)',
  source: 'ONS Deaths Registered by Cause',
  categories: [
    'Cancer (all)',
    'Dementia / Alzheimer\'s',
    'Ischaemic heart disease',
    'COVID-19',
    'Stroke / cerebrovascular',
    'Chronic respiratory',
    'Other',
  ],
  values: [166, 70, 64, 36, 32, 28, 181],
  colors: ['#f87171', '#a78bfa', '#fb923c', '#60a5fa', '#fbbf24', '#34d399', '#94a3b8'],
};

export const excessDeaths = {
  label: 'Excess Deaths vs 5-Year Average (England & Wales, thousands)',
  source: 'ONS Excess Mortality',
  years: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  values: [3.2, 10.8, -0.5, 77.2, 56.0, 46.4, 43.3],
  note: 'Positive = more deaths than expected. 2020–23 excess driven by COVID-19 and its downstream effects.',
};

export const infantMortality = {
  label: 'Infant Mortality Rate (deaths per 1,000 live births, England & Wales)',
  source: 'ONS Child Mortality Statistics',
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  values: [3.9, 3.8, 3.9, 3.9, 3.7, 3.6, 3.7, 3.7],
  note: 'UK infant mortality has fallen substantially over decades but progress has stalled since 2018',
};

export const keyStats = [
  { label: 'Deaths Registered (2023)', value: '574,300', change: '-0.5%', up: false },
  { label: 'Life Expectancy — Male', value: '79.3 yrs', change: '+0.3yr', up: true },
  { label: 'Life Expectancy — Female', value: '83.0 yrs', change: '+0.1yr', up: true },
  { label: 'Excess Deaths (2023)', value: '43,300', change: '-6.7%', up: false },
];
