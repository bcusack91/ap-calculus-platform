/**
 * Entrance Quiz — Aggregate Demand & Aggregate Supply (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mads-ent-1a', partNumber: 1, partTitle: 'The AD–AS Model & the Aggregate Demand Curve',
    question: 'The U.S. price level falls while price levels abroad stay the same. Through the net export effect, what happens?',
    options: ['U.S. exports fall and imports rise, so real GDP demanded falls', 'U.S. exports rise and imports fall, so real GDP demanded rises', 'U.S. exports rise and imports fall, so the AD curve shifts right', 'U.S. exports fall and imports rise, so the AD curve shifts left'],
    correctIndex: 1,
    explanation: 'A lower U.S. price level makes U.S. goods cheaper relative to foreign goods, so net exports and the quantity of real GDP demanded rise. Because the price level caused it, this is a movement along AD, not a shift.',
  },
  {
    id: 'mads-ent-1b', partNumber: 1, partTitle: 'The AD–AS Model & the Aggregate Demand Curve',
    question: 'At the current price level, an economy has consumption of \\$1,400 billion, investment of \\$300 billion, government purchases of \\$400 billion, transfer payments of \\$200 billion, exports of \\$250 billion and imports of \\$350 billion. What is the total quantity of real GDP demanded?',
    options: ['\\$2,200 billion', '\\$2,350 billion', '\\$2,700 billion', '\\$2,000 billion'],
    correctIndex: 3,
    explanation: 'Aggregate demand is C + I + G + NX = 1,400 + 300 + 400 + (250 − 350) = \\$2,000 billion. Transfer payments are not purchases of output, and imports are subtracted, not added.',
  },
  {
    id: 'mads-ent-2a', partNumber: 2, partTitle: 'Shifts in Aggregate Demand',
    question: 'Which of the following is a movement along the AD curve rather than a shift of it?',
    options: ['A higher price level raises interest rates and cuts investment', 'The central bank lowers interest rates and investment rises', 'Business optimism leads firms to buy more new equipment', 'A recession abroad cuts demand for the country\'s exports'],
    correctIndex: 0,
    explanation: 'When the price level itself sets off the change, the economy slides along a fixed AD curve. A central bank rate cut, business optimism and a foreign recession change spending at every price level, so they shift AD.',
  },
  {
    id: 'mads-ent-2b', partNumber: 2, partTitle: 'Shifts in Aggregate Demand',
    question: 'The U.S. dollar appreciates sharply against other currencies. What happens to U.S. aggregate demand?',
    options: ['AD shifts right as imports become cheaper', 'AD stays put as the economy moves along it', 'AD shifts left as net exports fall', 'AD shifts left as exports rise and imports fall'],
    correctIndex: 2,
    explanation: 'A stronger dollar makes U.S. goods more expensive abroad and imports cheaper, so exports fall, imports rise and net exports drop. Lower spending at every price level shifts AD left.',
  },
  {
    id: 'mads-ent-3a', partNumber: 3, partTitle: 'Short-Run & Long-Run Aggregate Supply',
    question: 'Workers and firms come to expect higher inflation next year, and nominal wages rise as a result. What happens to the aggregate supply curves?',
    options: ['SRAS shifts left and LRAS shifts left', 'SRAS shifts left and LRAS does not move', 'SRAS shifts right and LRAS does not move', 'SRAS does not move and LRAS shifts left'],
    correctIndex: 1,
    explanation: 'Higher nominal wages raise costs at every price level, shifting SRAS left. Expectations and wages do not change the economy\'s real capacity, so LRAS stays where it is.',
  },
  {
    id: 'mads-ent-3b', partNumber: 3, partTitle: 'Short-Run & Long-Run Aggregate Supply',
    question: 'Why is the long-run aggregate supply curve vertical?',
    options: ['Prices and wages stay sticky for good, so output cannot change', 'The price level cannot change at all in the long run', 'Firms in the long run produce whatever buyers demand', 'Once wages fully adjust, output depends on resources and technology'],
    correctIndex: 3,
    explanation: 'In the long run, wages and input prices catch up with the price level, so the short-run profit incentive disappears. Output then settles at potential, which is set by resources and technology, at any price level.',
  },
  {
    id: 'mads-ent-4a', partNumber: 4, partTitle: 'Equilibrium & Output Gaps',
    question: 'AD and SRAS cross at real GDP of \\$11.6 trillion, and potential output is \\$12.0 trillion. What is the output gap?',
    options: ['−\\$0.4 trillion, a recessionary gap', '\\$0.4 trillion, an inflationary gap', '−\\$0.4 trillion, an inflationary gap', '\\$23.6 trillion, a recessionary gap'],
    correctIndex: 0,
    explanation: 'The output gap is actual minus potential output: \\$11.6 − \\$12.0 = −\\$0.4 trillion. A negative gap means output is below potential, which is a recessionary gap.',
  },
  {
    id: 'mads-ent-4b', partNumber: 4, partTitle: 'Equilibrium & Output Gaps',
    question: 'On a correctly labeled AD-AS graph, the AD and SRAS curves cross to the right of the vertical LRAS line. Which describes the economy?',
    options: ['A recessionary gap, with unemployment above the natural rate', 'An inflationary gap, with unemployment above the natural rate', 'An inflationary gap, with unemployment below the natural rate', 'Long-run equilibrium, with unemployment at the natural rate'],
    correctIndex: 2,
    explanation: 'Equilibrium to the right of LRAS means output is above potential, an inflationary gap. Producing more than full-employment output takes extra workers, so unemployment is below the natural rate.',
  },
  {
    id: 'mads-ent-5a', partNumber: 5, partTitle: 'The Spending Multiplier & AD Shifts',
    question: 'The marginal propensity to save is 0.2. If government purchases rise by \\$30 billion, by how much does AD shift to the right?',
    options: ['\\$30 billion', '\\$6 billion', '\\$24 billion', '\\$150 billion'],
    correctIndex: 3,
    explanation: 'The multiplier is 1 ÷ MPS = 1 ÷ 0.2 = 5, so AD shifts by 5 × \\$30 billion = \\$150 billion. Each round of spending becomes someone\'s income, 80 percent of which is spent again.',
  },
  {
    id: 'mads-ent-5b', partNumber: 5, partTitle: 'The Spending Multiplier & AD Shifts',
    question: 'An economy has a recessionary gap of \\$300 billion, and the marginal propensity to consume is 0.75. What increase in government purchases would close the gap?',
    options: ['\\$300 billion', '\\$75 billion', '\\$225 billion', '\\$1,200 billion'],
    correctIndex: 1,
    explanation: 'The multiplier is 1 ÷ (1 − 0.75) = 4, so the required spending change is the gap divided by the multiplier: \\$300 ÷ 4 = \\$75 billion. Multiplying instead of dividing gives the \\$1,200 billion error.',
  },
  {
    id: 'mads-ent-6a', partNumber: 6, partTitle: 'Shocks, Self-Correction & Policy',
    question: 'Over a year, a country\'s price level rises while its real GDP falls and unemployment climbs. Which shock fits these data?',
    options: ['A leftward SRAS shift, such as from an oil supply cutoff', 'A leftward AD shift, such as from falling confidence', 'A rightward AD shift, such as from a tax cut', 'A rightward SRAS shift, such as from new technology'],
    correctIndex: 0,
    explanation: 'Prices rising while output falls is stagflation, the signature of a leftward SRAS shift. AD shifts move the price level and output in the same direction.',
  },
  {
    id: 'mads-ent-6b', partNumber: 6, partTitle: 'Shocks, Self-Correction & Policy',
    question: 'With no policy action, an economy in a recessionary gap eventually returns to potential output because',
    options: ['rising nominal wages shift SRAS to the left', 'rising consumer spending shifts AD to the right', 'falling nominal wages shift SRAS to the right', 'falling potential output shifts LRAS to the left'],
    correctIndex: 2,
    explanation: 'Unemployment above the natural rate puts downward pressure on nominal wages. Lower wages cut costs at every price level, so SRAS shifts right until output is back at potential.',
  },
  {
    id: 'mads-ent-7a', partNumber: 7, partTitle: 'Mixed Practice & Mastery Check',
    question: 'The marginal propensity to consume is 0.9. Equilibrium real GDP is \\$9.8 trillion and potential output is \\$10.0 trillion. What increase in government purchases would close the gap?',
    options: ['\\$200 billion', '\\$2 billion', '\\$180 billion', '\\$20 billion'],
    correctIndex: 3,
    explanation: 'The gap is \\$0.2 trillion, or \\$200 billion, and the multiplier is 1 ÷ (1 − 0.9) = 10. The required increase is \\$200 billion ÷ 10 = \\$20 billion.',
  },
  {
    id: 'mads-ent-7b', partNumber: 7, partTitle: 'Mixed Practice & Mastery Check',
    question: 'Over a year, a country\'s price level falls from 112 to 109 and real GDP falls from \\$15.2 trillion to \\$14.8 trillion, below its potential of \\$15.0 trillion. Which shock occurred, and what policy would close the gap?',
    options: ['A fall in AD, calling for expansionary policy', 'A fall in SRAS, calling for contractionary policy', 'A fall in AD, calling for contractionary policy', 'A rise in SRAS, calling for expansionary policy'],
    correctIndex: 0,
    explanation: 'The price level and real GDP fell together, the signature of an AD decrease, and output is now below potential. Expansionary policy shifts AD back to the right to close the recessionary gap.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The AD–AS Model & the Aggregate Demand Curve' },
    { partNumber: 2, partTitle: 'Shifts in Aggregate Demand' },
    { partNumber: 3, partTitle: 'Short-Run & Long-Run Aggregate Supply' },
    { partNumber: 4, partTitle: 'Equilibrium & Output Gaps' },
    { partNumber: 5, partTitle: 'The Spending Multiplier & AD Shifts' },
    { partNumber: 6, partTitle: 'Shocks, Self-Correction & Policy' },
    { partNumber: 7, partTitle: 'Mixed Practice & Mastery Check' },
  ]
}
