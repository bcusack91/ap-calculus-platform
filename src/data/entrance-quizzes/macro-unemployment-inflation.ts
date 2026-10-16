/**
 * Entrance Quiz — Unemployment & Inflation (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mui-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which worker is cyclically unemployed?',
    options: ['A graduate who turned down two offers to keep looking for a better fit', 'A carpenter laid off because home building fell during a recession', 'A typesetter whose skills are no longer needed after printing went digital', 'A lifeguard who is out of work now because the summer season has ended'],
    correctIndex: 1,
    explanation: 'Cyclical unemployment comes from too little aggregate demand in a downturn, as with the laid-off carpenter. The graduate is frictionally unemployed, the typesetter is structurally unemployed, and the lifeguard is seasonally unemployed.',
  },
  {
    id: 'mui-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Inflation unexpectedly jumps from 2 percent to 6 percent. Which of these is most likely to gain?',
    options: ['A family repaying a fixed-rate mortgage', 'A bank that made fixed-rate car loans', 'A retiree living on a fixed pension', 'A saver holding cash at home in a safe'],
    correctIndex: 0,
    explanation: 'The family repays a fixed number of dollars that are now worth less than expected, so its real debt shrinks. The bank, the retiree and the saver all hold fixed nominal amounts that lose purchasing power.',
  },
  {
    id: 'mui-ent-2a', partNumber: 2, partTitle: 'Measuring the Labor Market',
    question: 'A country has 171 million employed people, 9 million unemployed people and 120 million working-age people not in the labor force. What are its unemployment rate and labor force participation rate?',
    options: ['3.0% and 60.0%', '5.3% and 60.0%', '5.0% and 60.0%', '5.0% and 57.0%'],
    correctIndex: 2,
    explanation: 'The labor force is 171 + 9 = 180 million, so the unemployment rate is 9 ÷ 180 = 5.0%. The working-age population is 180 + 120 = 300 million, so participation is 180 ÷ 300 = 60.0%.',
  },
  {
    id: 'mui-ent-2b', partNumber: 2, partTitle: 'Measuring the Labor Market',
    question: 'In that same country (171 million employed, 9 million unemployed), 4 million of the unemployed give up and stop searching for work, and no one finds a job. What happens?',
    options: ['The unemployment rate falls and participation falls', 'The unemployment rate rises and participation falls', 'The unemployment rate is unchanged and participation falls', 'The unemployment rate falls and participation is unchanged'],
    correctIndex: 0,
    explanation: 'The 4 million leave the labor force, so the rate becomes 5 ÷ 176 ≈ 2.8%, down from 5.0%. The labor force shrinks while the working-age population does not, so participation falls too.',
  },
  {
    id: 'mui-ent-3a', partNumber: 3, partTitle: 'Natural Rate, Full Employment & Cyclical Unemployment',
    question: 'A country\'s labor force is 120 million. Among the unemployed, 2.4 million are frictionally unemployed, 3.6 million are structurally unemployed and 3.0 million are cyclically unemployed. What are the natural rate and the actual rate of unemployment?',
    options: ['4.5% and 7.5%', '2.0% and 7.5%', '5.0% and 2.5%', '5.0% and 7.5%'],
    correctIndex: 3,
    explanation: 'The natural rate counts frictional plus structural unemployment: 6.0 ÷ 120 = 5.0%. The actual rate counts all 9.0 million: 9.0 ÷ 120 = 7.5%, leaving 2.5 points of cyclical unemployment.',
  },
  {
    id: 'mui-ent-3b', partNumber: 3, partTitle: 'Natural Rate, Full Employment & Cyclical Unemployment',
    question: 'Which change would lower an economy\'s natural rate of unemployment?',
    options: ['Unemployment benefits are extended from 26 weeks to 52 weeks', 'A new app matches job seekers with open positions much faster', 'A recession leads firms to lay off thousands of workers', 'A larger share of the labor force is under the age of 25'],
    correctIndex: 1,
    explanation: 'Faster matching shortens job searches, which cuts frictional unemployment and the natural rate. Longer benefits and a younger labor force raise frictional unemployment, and recession layoffs are cyclical, which leaves the natural rate unchanged.',
  },
  {
    id: 'mui-ent-4a', partNumber: 4, partTitle: 'Price Indices: Building and Using the CPI',
    question: 'A market basket holds 10 burgers, 4 shirts and 2 concert tickets. In the base year these cost \\$5, \\$20 and \\$15 each; in Year 2 they cost \\$6, \\$23 and \\$16 each. What is the CPI in Year 2?',
    options: ['115.0', '87.0', '113.9', '124.0'],
    correctIndex: 0,
    explanation: 'The basket costs \\$50 + \\$80 + \\$30 = \\$160 in the base year and \\$60 + \\$92 + \\$32 = \\$184 in Year 2, so the CPI is (184 ÷ 160) × 100 = 115.0. Averaging the three price changes ignores the basket quantities.',
  },
  {
    id: 'mui-ent-4b', partNumber: 4, partTitle: 'Price Indices: Building and Using the CPI',
    question: 'From one year to the next, the CPI rises from 120 to 126 and a worker\'s hourly wage rises from \\$24.00 to \\$24.60. What happened to the worker\'s real wage?',
    options: ['It rose by about 2.5 percent', 'It fell by about 3.5 percent', 'It fell by about 2.4 percent', 'It fell by about 6.0 percent'],
    correctIndex: 2,
    explanation: 'In base-year dollars the wage goes from \\$24.00 ÷ 1.20 = \\$20.00 to \\$24.60 ÷ 1.26 ≈ \\$19.52, a fall of about 2.4 percent. Prices rose 5 percent while the nominal wage rose only 2.5 percent.',
  },
  {
    id: 'mui-ent-5a', partNumber: 5, partTitle: 'Costs of Inflation & Real Interest Rates',
    question: 'A bank lends money for one year at an 8 percent nominal rate, and both sides expect 3 percent inflation. Actual inflation turns out to be 6 percent. What real rate does the bank earn, and who gains from the surprise?',
    options: ['5 percent, and neither one gains', '2 percent, and the lender gains', '11 percent, and the lender gains', '2 percent, and the borrower gains'],
    correctIndex: 3,
    explanation: 'The realized real rate is 8 − 6 = 2 percent, below the 5 percent both sides planned. The borrower gains because the loan is repaid with dollars worth less than expected.',
  },
  {
    id: 'mui-ent-5b', partNumber: 5, partTitle: 'Costs of Inflation & Real Interest Rates',
    question: 'Inflation has held steady at 8 percent for years, and every loan and wage contract fully builds it in. Which cost of inflation still arises?',
    options: ['Lenders lose purchasing power on their fixed-rate loans', 'Restaurants pay to reprint their menus more often', 'Borrowers repay with dollars worth less than planned', 'Workers find their pay rising more slowly than prices'],
    correctIndex: 1,
    explanation: 'Menu costs occur even when inflation is expected, because prices still have to be changed. The other three are redistributions that happen only when inflation differs from what contracts assumed.',
  },
  {
    id: 'mui-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'The CPI was 160 in 2024 and 168 in 2025. A worker\'s salary rose from \\$40,000 in 2024 to \\$41,000 in 2025. What is the 2025 salary measured in 2024 dollars?',
    options: ['\\$43,050', '\\$40,000', '\\$39,048', '\\$24,405'],
    correctIndex: 2,
    explanation: 'Divide by the ratio of the two CPI values: \\$41,000 ÷ (168 ÷ 160) = \\$41,000 ÷ 1.05 ≈ \\$39,048. Her real salary fell, because her 2.5 percent raise was smaller than 5 percent inflation.',
  },
  {
    id: 'mui-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A country has 152 million employed and 8 million unemployed people, and its natural rate of unemployment is 4.5 percent. Which conclusion and policy response fit the data?',
    options: ['Output is above potential, so the Fed could raise the rate it pays on reserves', 'Output is below potential, so the Fed could raise the rate it pays on reserves', 'Output equals potential, so the Fed needs no change in the rate it pays on reserves', 'Output is below potential, so the Fed could lower the rate it pays on reserves'],
    correctIndex: 3,
    explanation: 'The unemployment rate is 8 ÷ 160 = 5.0 percent, above the 4.5 percent natural rate, so cyclical unemployment exists and output is below potential. Lowering the interest rate on reserve balances lowers interest rates and raises aggregate demand.',
  },
  {
    id: 'mui-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'The CPI rises from 150 to 156 over a year, and a savings account pays a 3 percent nominal interest rate. What real return does the saver earn?',
    options: ['−1 percent', '1 percent', '−3 percent', '7 percent'],
    correctIndex: 0,
    explanation: 'Inflation is (156 − 150) ÷ 150 = 4 percent, so the real return is 3 − 4 = −1 percent. Treating the 6-point rise as 6 percent inflation gives the −3 percent error.',
  },
  {
    id: 'mui-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A country has 190 million employed and 10 million unemployed people. Then 2 million of the unemployed take part-time jobs, although they would prefer full-time work. What is the new unemployment rate?',
    options: ['5.0%', '4.1%', '4.0%', '6.0%'],
    correctIndex: 2,
    explanation: 'Anyone who did paid work counts as employed, even if underemployed, so unemployment falls to 8 million while the labor force stays at 200 million. The rate is 8 ÷ 200 = 4.0%.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Measuring the Labor Market' },
    { partNumber: 3, partTitle: 'Natural Rate, Full Employment & Cyclical Unemployment' },
    { partNumber: 4, partTitle: 'Price Indices: Building and Using the CPI' },
    { partNumber: 5, partTitle: 'Costs of Inflation & Real Interest Rates' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
