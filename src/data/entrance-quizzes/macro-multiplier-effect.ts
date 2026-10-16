/**
 * Entrance Quiz — The Multiplier Effect (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mmult-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The marginal propensity to consume is 0.75. The government raises taxes by \\$40 billion. What is the maximum effect on real GDP?',
    options: ['A decrease of \\$120 billion', 'A decrease of \\$160 billion', 'An increase of \\$120 billion', 'A decrease of \\$30 billion'],
    correctIndex: 0,
    explanation: 'The tax multiplier is MPC ÷ MPS = 0.75 ÷ 0.25 = 3, and taxes move real GDP in the opposite direction, so GDP falls by up to 3 × \\$40 billion = \\$120 billion. Using the spending multiplier of 4 gives the \\$160 billion error.',
  },
  {
    id: 'mmult-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Why is the tax multiplier smaller in size than the spending multiplier for the same MPC?',
    options: ['Tax cuts take longer to pass than new spending bills', 'Taxes lower the MPC, which in turn shrinks every round', 'Households save part of a tax cut before spending', 'Government purchases are financed without borrowing'],
    correctIndex: 2,
    explanation: 'A government purchase is spent in full in the first round, but households spend only the MPC share of a tax cut and save the rest. The chain therefore starts one round later, so the tax multiplier is exactly 1 smaller.',
  },
  {
    id: 'mmult-ent-2a', partNumber: 2, partTitle: 'Consumption, Saving and the MPC',
    question: 'A household\'s disposable income rises from \\$50,000 to \\$58,000, and its consumption rises from \\$45,000 to \\$51,000. What is its marginal propensity to consume?',
    options: ['0.90', '0.75', '0.88', '0.25'],
    correctIndex: 1,
    explanation: 'The MPC uses changes: ΔC ÷ ΔYd = \\$6,000 ÷ \\$8,000 = 0.75. The 0.90 and 0.88 figures divide total consumption by total income, and 0.25 is the MPS.',
  },
  {
    id: 'mmult-ent-2b', partNumber: 2, partTitle: 'Consumption, Saving and the MPC',
    question: 'Which event shifts the consumption schedule upward rather than moving households along it?',
    options: ['Disposable income rises as workers get raises', 'Household debt climbs relative to income', 'Consumer confidence falls as a downturn begins', 'Stock prices rise and household wealth increases'],
    correctIndex: 3,
    explanation: 'Higher wealth raises consumption at every income level, an increase in autonomous consumption. A rise in disposable income is a movement along the schedule, and more debt or lower confidence shifts it down.',
  },
  {
    id: 'mmult-ent-3a', partNumber: 3, partTitle: 'How the Multiplier Works, Round by Round',
    question: 'Firms increase investment spending by \\$20 billion, and the MPC is 0.6. When every round of spending has played out, what is the total increase in real GDP, and how much of it is new consumption?',
    options: ['\\$50 billion, of which \\$30 billion is consumption', '\\$50 billion, of which \\$20 billion is consumption', '\\$33 billion, of which \\$13 billion is consumption', '\\$32 billion, of which \\$12 billion is consumption'],
    correctIndex: 0,
    explanation: 'The multiplier is 1 ÷ 0.4 = 2.5, so real GDP rises by \\$50 billion. The first \\$20 billion is the investment itself; the remaining \\$30 billion is induced consumption (0.6 × \\$50 billion).',
  },
  {
    id: 'mmult-ent-3b', partNumber: 3, partTitle: 'How the Multiplier Works, Round by Round',
    question: 'The MPC is 0.8, and the government raises transfer payments by \\$8 billion. What is the maximum increase in real GDP?',
    options: ['\\$40 billion', '\\$8 billion', '\\$32 billion', '\\$10 billion'],
    correctIndex: 2,
    explanation: 'Transfers raise disposable income, and only 0.8 × \\$8 billion = \\$6.4 billion is spent in the first round. The transfer multiplier is MPC ÷ MPS = 4, so real GDP rises by up to \\$32 billion, not the \\$40 billion a purchase would cause.',
  },
  {
    id: 'mmult-ent-4a', partNumber: 4, partTitle: 'Policy Calculations: Gaps, Taxes and the Balanced-Budget Multiplier',
    question: 'Real GDP is \\$2,080 billion, full-employment output is \\$2,000 billion, and the MPC is 0.8. Which tax change is the minimum that could close the gap?',
    options: ['Raise taxes by \\$16 billion', 'Raise taxes by \\$20 billion', 'Cut taxes by \\$20 billion', 'Raise taxes by \\$80 billion'],
    correctIndex: 1,
    explanation: 'The \\$80 billion inflationary gap calls for contractionary policy. The tax multiplier is 0.8 ÷ 0.2 = 4, so taxes must rise by \\$80 ÷ 4 = \\$20 billion; \\$16 billion is the required cut in purchases.',
  },
  {
    id: 'mmult-ent-4b', partNumber: 4, partTitle: 'Policy Calculations: Gaps, Taxes and the Balanced-Budget Multiplier',
    question: 'The MPC is 0.75. The government cuts its purchases by \\$10 billion and raises transfer payments by \\$10 billion, leaving the budget balance unchanged. What is the maximum change in real GDP?',
    options: ['−\\$40 billion', '+\\$30 billion', '\\$0', '−\\$10 billion'],
    correctIndex: 3,
    explanation: 'The cut in purchases lowers real GDP by 4 × \\$10 billion = \\$40 billion, and the transfers raise it by 3 × \\$10 billion = \\$30 billion, for a net change of −\\$10 billion. Part of each transfer dollar is saved, so the swap is contractionary.',
  },
  {
    id: 'mmult-ent-5a', partNumber: 5, partTitle: 'Multipliers in the AD-AS Model and Common Misconceptions',
    question: 'The MPC is 0.75, and government purchases rise by \\$15 billion. Before the change, the economy\'s schedules are:\n\n| Price level | Real GDP demanded (\\$ billions) | Real GDP supplied (\\$ billions) |\n|---|---|---|\n| 100 | 800 | 800 |\n| 104 | 780 | 840 |\n| 108 | 760 | 880 |\n| 112 | 740 | 920 |\n\nHow far does AD shift, and how much does equilibrium real GDP rise?',
    options: ['\\$60 billion and \\$60 billion', '\\$15 billion and \\$40 billion', '\\$60 billion and \\$40 billion', '\\$40 billion and \\$40 billion'],
    correctIndex: 2,
    explanation: 'The multiplier of 4 shifts AD right by \\$60 billion, so demand at a price level of 104 becomes 840, which matches supply. Real GDP rises from 800 to 840, only \\$40 billion, because the higher price level absorbs part of the shift.',
  },
  {
    id: 'mmult-ent-5b', partNumber: 5, partTitle: 'Multipliers in the AD-AS Model and Common Misconceptions',
    question: 'In which situation would an increase in government purchases raise real GDP by close to the full multiplier amount?',
    options: ['A deep recession with many idle workers and machines', 'An economy operating well beyond full employment', 'An economy at full employment with a steep SRAS', 'An economy in which the price level rises quickly'],
    correctIndex: 0,
    explanation: 'With many idle resources, SRAS is nearly flat, so the price level barely moves and almost all of the AD shift becomes extra output. Near or beyond full employment, more of the shift shows up as a higher price level.',
  },
  {
    id: 'mmult-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A \\$12 billion fall in investment reduces real GDP by a maximum of \\$48 billion. What are the MPC and the maximum change in consumption spending?',
    options: ['0.75 and −\\$48 billion', '0.25 and −\\$36 billion', '0.80 and −\\$36 billion', '0.75 and −\\$36 billion'],
    correctIndex: 3,
    explanation: 'The multiplier is 48 ÷ 12 = 4, so the MPS is 0.25 and the MPC is 0.75. Of the \\$48 billion fall, \\$12 billion is the investment itself and \\$36 billion is lost consumption.',
  },
  {
    id: 'mmult-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'The MPC is 0.8. A drop in business confidence cuts investment by \\$10 billion. What is the minimum increase in transfer payments that would fully offset the resulting fall in real GDP?',
    options: ['\\$10.0 billion', '\\$12.5 billion', '\\$50.0 billion', '\\$62.5 billion'],
    correctIndex: 1,
    explanation: 'Real GDP falls by up to 5 × \\$10 billion = \\$50 billion. Transfers use the multiplier MPC ÷ MPS = 4, so the government needs \\$50 ÷ 4 = \\$12.5 billion in new transfers.',
  },
  {
    id: 'mmult-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Full-employment output is \\$4,000 billion, and real GDP is \\$3,880 billion. When disposable income rose from \\$3,000 billion to \\$3,250 billion, consumption rose from \\$2,600 billion to \\$2,800 billion. What is the minimum tax cut that could close the gap?',
    options: ['\\$24 billion', '\\$120 billion', '\\$30 billion', '\\$40 billion'],
    correctIndex: 2,
    explanation: 'The MPC is 200 ÷ 250 = 0.8, so the tax multiplier is 0.8 ÷ 0.2 = 4. The \\$120 billion gap requires a tax cut of \\$120 ÷ 4 = \\$30 billion; \\$24 billion is the required rise in purchases.',
  },
  {
    id: 'mmult-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'The MPC is 0.9. The government raises its purchases by \\$25 billion and pays for them with a \\$25 billion tax increase. What is the maximum change in real GDP?',
    options: ['+\\$25 billion', '+\\$250 billion', '+\\$475 billion', '−\\$225 billion'],
    correctIndex: 0,
    explanation: 'The purchases raise real GDP by 10 × \\$25 billion = \\$250 billion and the tax increase lowers it by 9 × \\$25 billion = \\$225 billion. The net change of \\$25 billion reflects the balanced-budget multiplier of 1.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Consumption, Saving and the MPC' },
    { partNumber: 3, partTitle: 'How the Multiplier Works, Round by Round' },
    { partNumber: 4, partTitle: 'Policy Calculations: Gaps, Taxes and the Balanced-Budget Multiplier' },
    { partNumber: 5, partTitle: 'Multipliers in the AD-AS Model and Common Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
