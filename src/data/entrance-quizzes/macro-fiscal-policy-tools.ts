/**
 * Entrance Quiz — Fiscal Policy Tools (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mfpt-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The MPC is 0.75. Which raises aggregate demand more, a \\$50 billion increase in government purchases or a \\$50 billion tax cut, and by how much more?',
    options: ['The spending increase, by \\$50 billion', 'The tax cut, by \\$50 billion', 'Neither; both raise AD by \\$200 billion', 'The spending increase, by \\$150 billion'],
    correctIndex: 0,
    explanation: 'The purchases shift AD by 4 × \\$50 = \\$200 billion, while the tax cut shifts it by 3 × \\$50 = \\$150 billion, because households save part of the cut. The difference is \\$50 billion.',
  },
  {
    id: 'mfpt-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which fiscal policy shifts AD to the right in the short run and also shifts LRAS to the right in the long run?',
    options: ['A one-time tax rebate mailed to every household', 'A tax credit for firms that buy new equipment', 'A permanent increase in unemployment benefit payments', 'A rise in government purchases of office supplies'],
    correctIndex: 1,
    explanation: 'The credit raises investment now, shifting AD right, and the new equipment adds to the capital stock, raising potential output later. A rebate, larger transfers and office supplies raise spending but build no capacity.',
  },
  {
    id: 'mfpt-ent-2a', partNumber: 2, partTitle: 'Budgets, Deficits and the National Debt',
    question: 'A government starts Year 1 with a national debt of \\$3,000 billion. Its tax revenue and spending (billions of dollars) are:\n\n| Year | Tax revenue | Spending |\n|---|---|---|\n| 1 | 1,200 | 1,350 |\n| 2 | 1,300 | 1,380 |\n| 3 | 1,420 | 1,380 |\n\nWhat is the national debt at the end of Year 3?',
    options: ['\\$3,270 billion', '\\$2,810 billion', '\\$3,190 billion', '\\$3,230 billion'],
    correctIndex: 2,
    explanation: 'The deficits of \\$150 billion and \\$80 billion add to the debt, and the Year 3 surplus of \\$40 billion pays some down: 3,000 + 150 + 80 − 40 = \\$3,190 billion. The smaller deficit in Year 2 still raised the debt.',
  },
  {
    id: 'mfpt-ent-2b', partNumber: 2, partTitle: 'Budgets, Deficits and the National Debt',
    question: 'A government\'s debt of \\$3,000 billion carries an average interest rate of 2 percent. Three years later the debt is \\$3,600 billion and the average rate is 3 percent. How much have annual interest payments risen?',
    options: ['\\$12 billion, a 20 percent rise', '\\$48 billion, a 50 percent rise', '\\$108 billion, a 180 percent rise', '\\$48 billion, an 80 percent rise'],
    correctIndex: 3,
    explanation: 'Payments rise from 0.02 × 3,000 = \\$60 billion to 0.03 × 3,600 = \\$108 billion, an increase of \\$48 billion. Relative to the starting \\$60 billion, that is 48 ÷ 60 = 80 percent, because both the debt and the rate rose.',
  },
  {
    id: 'mfpt-ent-3a', partNumber: 3, partTitle: 'Crowding Out on the Loanable Funds Graph',
    question: 'A loanable funds market clears at a real interest rate of 3 percent with \\$1,000 billion saved and invested. The government then borrows \\$200 billion, and the market clears at 4 percent with \\$1,120 billion saved. How much private investment is crowded out?',
    options: ['\\$80 billion', '\\$120 billion', '\\$200 billion', '\\$920 billion'],
    correctIndex: 0,
    explanation: 'Total borrowing equals the \\$1,120 billion saved; the government takes \\$200 billion, leaving \\$920 billion for private investment, down from \\$1,000 billion. The \\$80 billion drop is the crowding out; the other \\$120 billion came from new saving.',
  },
  {
    id: 'mfpt-ent-3b', partNumber: 3, partTitle: 'Crowding Out on the Loanable Funds Graph',
    question: 'Using the standard AP representation, how does a government budget deficit appear on the loanable funds graph?',
    options: ['Supply shifts right, lowering the real rate and raising the quantity', 'Demand shifts right, raising both the real rate and the quantity', 'Demand shifts right, raising the real rate and lowering the quantity', 'Demand shifts left, lowering both the real rate and the total quantity'],
    correctIndex: 1,
    explanation: 'Government borrowing adds to the demand for loanable funds, so demand shifts right along the upward-sloping supply curve. The real interest rate rises, and the total quantity borrowed rises because it now includes the government\'s borrowing.',
  },
  {
    id: 'mfpt-ent-4a', partNumber: 4, partTitle: 'Loanable Funds and Debt Calculations',
    question: 'A loanable funds market has these schedules (billions of dollars):\n\n| Real interest rate | Saving | Private investment demand |\n|---|---|---|\n| 3% | 400 | 800 |\n| 4% | 500 | 700 |\n| 5% | 600 | 600 |\n| 6% | 700 | 500 |\n| 7% | 800 | 400 |\n\nIf the government borrows \\$200 billion, what are the new real interest rate and the amount of private investment crowded out?',
    options: ['7% and \\$200 billion', '6% and \\$200 billion', '6% and \\$100 billion', '5% and \\$100 billion'],
    correctIndex: 2,
    explanation: 'Adding \\$200 billion to demand at every rate, total demand equals saving at 6 percent (500 + 200 = 700). Private investment falls from \\$600 billion to \\$500 billion, so \\$100 billion is crowded out.',
  },
  {
    id: 'mfpt-ent-4b', partNumber: 4, partTitle: 'Loanable Funds and Debt Calculations',
    question: 'A country has a national debt of \\$10,000 billion and nominal GDP of \\$16,000 billion. This year it runs a \\$700 billion deficit, and nominal GDP grows 8 percent. What is the new debt-to-GDP ratio?',
    options: ['About 66.9 percent, so the ratio rises', 'About 62.5 percent, so the ratio is unchanged', 'About 57.9 percent, so the ratio falls', 'About 61.9 percent, so the ratio falls'],
    correctIndex: 3,
    explanation: 'Debt becomes \\$10,700 billion and GDP becomes \\$17,280 billion, so the ratio is 10,700 ÷ 17,280 ≈ 61.9 percent, down from 62.5 percent. GDP grew faster in percentage terms than the debt, so the ratio fell despite the deficit.',
  },
  {
    id: 'mfpt-ent-5a', partNumber: 5, partTitle: 'Supply-Side Fiscal Policy and Long-Run Growth',
    question: 'One government spends \\$40 billion a year on worker training; another mails households a \\$40 billion tax rebate each year. Both start at full employment. How do their long-run effects on potential output compare?',
    options: ['Training raises potential output; the rebate leaves it unchanged', 'Both raise potential output by the same amount each year', 'The rebate raises potential output; training does not', 'Neither shifts AD in the short run; both raise potential output'],
    correctIndex: 0,
    explanation: 'Training adds human capital, so LRAS shifts right and potential output rises. A rebate raises spending in the short run but builds no capacity, so in the long run it raises only the price level.',
  },
  {
    id: 'mfpt-ent-5b', partNumber: 5, partTitle: 'Supply-Side Fiscal Policy and Long-Run Growth',
    question: 'A government borrows \\$100 billion to build highways, and the higher real interest rate cuts private investment by \\$40 billion. Potential output grows faster than it would without the program only if',
    options: ['the government\'s spending exceeds the investment it crowds out', 'the highways add more capacity than the lost private capital would', 'the real interest rate rises by more than markets expected', 'the deficit is financed by having the Treasury print money'],
    correctIndex: 1,
    explanation: 'The new public capital raises capacity while the crowded-out private capital would have raised it too, so what matters is which adds more. The size of the spending alone does not decide the long-run effect.',
  },
  {
    id: 'mfpt-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A government begins the year with a national debt of \\$6,000 billion. It collects \\$2,000 billion in taxes, makes \\$1,200 billion of purchases, pays \\$700 billion in transfers and pays \\$180 billion of interest on the debt. What are the budget balance and the debt at year end?',
    options: ['+\\$100 billion and \\$5,900 billion', '−\\$80 billion and \\$5,920 billion', '−\\$80 billion and \\$6,080 billion', '−\\$260 billion and \\$6,260 billion'],
    correctIndex: 2,
    explanation: 'Spending includes interest: 1,200 + 700 + 180 = \\$2,080 billion, so the balance is 2,000 − 2,080 = −\\$80 billion. The deficit adds to the debt, which ends at \\$6,080 billion.',
  },
  {
    id: 'mfpt-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An economy at full employment with a balanced budget increases its purchases of military equipment and pays for them by borrowing. What happens to the growth rate of potential output?',
    options: ['It rises, because military purchases add to aggregate demand', 'It is unchanged, because crowding out lasts only in the short run', 'It rises, because borrowing adds to the supply of loanable funds', 'It falls, because higher real rates shrink private capital formation'],
    correctIndex: 3,
    explanation: 'Government borrowing raises the real interest rate, which reduces private investment, so the capital stock and potential output grow more slowly. Military equipment adds demand but not productive capacity.',
  },
  {
    id: 'mfpt-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A government starts the year with a debt of \\$10,000 billion at an average interest rate of 3 percent. Its tax revenue is \\$2,900 billion, and its purchases plus transfers total \\$2,850 billion; interest on the debt is also spending. What is the debt at the end of the year?',
    options: ['\\$10,250 billion', '\\$9,950 billion', '\\$9,750 billion', '\\$10,300 billion'],
    correctIndex: 0,
    explanation: 'Interest is 0.03 × 10,000 = \\$300 billion, so spending is \\$3,150 billion and the deficit is \\$250 billion. The debt rises to \\$10,250 billion; leaving out interest wrongly shows a \\$50 billion surplus.',
  },
  {
    id: 'mfpt-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A government runs budget surpluses for several years and uses them to pay down its debt. What is the long-run effect in the loanable funds market?',
    options: ['Higher real interest rates and less private investment', 'Lower real interest rates and more private investment', 'A larger money supply and a higher rate of price inflation', 'No change in rates, since the debt is a stock, not a flow'],
    correctIndex: 1,
    explanation: 'Less government borrowing lowers the demand for loanable funds, so the real interest rate falls. Lower rates encourage private investment, which adds to the capital stock over time.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Budgets, Deficits and the National Debt' },
    { partNumber: 3, partTitle: 'Crowding Out on the Loanable Funds Graph' },
    { partNumber: 4, partTitle: 'Loanable Funds and Debt Calculations' },
    { partNumber: 5, partTitle: 'Supply-Side Fiscal Policy and Long-Run Growth' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
