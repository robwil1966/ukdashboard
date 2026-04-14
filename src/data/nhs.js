// Source: NHS England Statistics
// Latest data: year ending March 2024

export const aAndE = {
  label: 'A&E — % Patients Seen Within 4 Hours',
  source: 'NHS England A&E Attendances and Emergency Admissions',
  target: 95,
  years: ['2018/19', '2019/20', '2020/21', '2021/22', '2022/23', '2023/24'],
  values: [88.0, 86.0, 87.9, 76.7, 70.8, 73.3],
  note: 'NHS target is 95%. Performance has fallen significantly since 2019.',
};

export const electiveWaiting = {
  label: 'Elective Care Waiting List (millions)',
  source: 'NHS England Referral to Treatment Statistics',
  months: ['Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Sep 2024'],
  values: [4.4, 4.5, 6.1, 7.2, 7.6, 7.57],
  note: 'List grew sharply during COVID as elective procedures were suspended',
};

export const waitOver18Weeks = {
  label: '% Waiting Over 18 Weeks for Elective Treatment',
  source: 'NHS England Referral to Treatment Statistics',
  target: 8, // target: no more than 8% waiting over 18 weeks
  years: ['2019/20', '2020/21', '2021/22', '2022/23', '2023/24'],
  values: [14.6, 23.4, 36.0, 37.9, 35.2],
  note: 'NHS standard: no more than 8% of patients should wait over 18 weeks',
};

export const ambulance = {
  label: 'Ambulance Category 1 Mean Response Time (mins:secs)',
  source: 'NHS England Ambulance Quality Indicators',
  target: '00:07',
  years: ['2021/22', '2022/23', '2023/24'],
  valuesLabel: ['8:41', '9:04', '8:24'],
  valuesNum: [8.68, 9.07, 8.40],
  note: 'Category 1 = immediately life-threatening calls. Target is 7 minutes mean.',
};

export const staffVacancies = {
  label: 'NHS Vacancy Rate (%)',
  source: 'NHS England Workforce Statistics',
  years: ['2019/20', '2020/21', '2021/22', '2022/23', '2023/24'],
  values: [8.0, 7.5, 9.7, 9.9, 8.2],
};

export const keyStats = [
  { label: 'A&E 4-Hour Target Met (2023/24)', value: '73.3%', change: '+2.5pp', up: true },
  { label: 'Elective Waiting List', value: '7.57m', change: '-0.3%', up: false },
  { label: 'Waiting Over 18 Weeks', value: '35.2%', change: '-2.7pp', up: false },
  { label: 'Cat 1 Ambulance Response', value: '8:24', change: '-0:40', up: false },
];
