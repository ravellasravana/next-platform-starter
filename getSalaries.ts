// functions/getSalaries.ts

import { Handler } from '@netlify/functions';

const salariesData = [
  { year: 2020, totalJobs: 100, averageSalary: 120000 },
  { year: 2021, totalJobs: 150, averageSalary: 130000 },
  { year: 2022, totalJobs: 200, averageSalary: 140000 },
  { year: 2023, totalJobs: 250, averageSalary: 150000 },
  { year: 2024, totalJobs: 300, averageSalary: 160000 },
];

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(salariesData),
  };
};

export { handler };
