/**
 * Entrance Quiz — AD-AS Model (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'madas-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'When the price level rises, households and firms need more money for their purchases, which pushes up interest rates and reduces borrowing for investment. On an AD-AS graph, this is',
    options: ['a leftward shift of AD caused by lower investment', 'a movement along AD caused by the wealth effect', 'a movement along AD caused by the interest rate effect', 'a leftward shift of AD caused by higher interest rates'],
    correctIndex: 2,
    explanation: 'The chain starts with a change in the price level, so it is a movement along AD, and it runs through interest rates, which makes it the interest rate effect. AD shifts only when spending changes at every price level.',
  },
  {
    id: 'madas-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which event shifts a country\'s aggregate demand curve to the right?',
    options: ['Incomes rise abroad and foreigners buy more of its exports', 'The price level falls and households buy more output', 'Oil prices fall and firms\' production costs drop', 'Its currency appreciates against other currencies'],
    correctIndex: 0,
    explanation: 'Higher foreign incomes raise net exports at every price level, shifting AD right. A lower price level is a movement along AD, cheaper oil shifts SRAS, and an appreciation lowers net exports.',
  },
  {
    id: 'madas-ent-2a', partNumber: 2, partTitle: 'SRAS and LRAS in Depth',
    question: 'Which event shifts both the SRAS curve and the LRAS curve to the right?',
    options: ['A one-year subsidy paid to all manufacturers', 'A temporary drop in the world price of oil', 'A 3 percent rise in the overall price level', 'A lasting rise in the education of the workforce'],
    correctIndex: 3,
    explanation: 'More human capital raises potential output for good, so LRAS shifts right, and it lowers costs, so SRAS shifts right too. The subsidy and the oil price drop are temporary cost changes that move only SRAS, and the price level moves the economy along SRAS.',
  },
  {
    id: 'madas-ent-2b', partNumber: 2, partTitle: 'SRAS and LRAS in Depth',
    question: 'A firm sells each widget for \\$50. Its labor cost is fixed at \\$30 per widget by a one-year contract, and its other input costs are \\$12 per widget, also fixed for now. If the price level and the widget price rise 10 percent, by what percent does profit per widget rise in the short run?',
    options: ['10.0 percent', '62.5 percent', '38.5 percent', '0.0 percent'],
    correctIndex: 1,
    explanation: 'The price rises to \\$55 while costs stay at \\$42, so profit per widget rises from \\$8 to \\$13, an increase of 62.5 percent. That jump in profit is why firms produce more as the price level rises along SRAS; 0 percent would apply only once costs fully adjust.',
  },
  {
    id: 'madas-ent-3a', partNumber: 3, partTitle: 'Short-Run Shocks: Four Cases Worked',
    question: 'Starting from long-run equilibrium, the government cuts personal income taxes in the same year that a drought raises food and input prices across the economy. What are the short-run effects?',
    options: ['The price level rises and real GDP is indeterminate', 'The price level is indeterminate and real GDP rises', 'The price level rises and real GDP falls', 'The price level falls and real GDP is indeterminate'],
    correctIndex: 0,
    explanation: 'The tax cut shifts AD right and the drought shifts SRAS left; both raise the price level. AD pushes real GDP up while SRAS pushes it down, so without sizes the output effect is indeterminate.',
  },
  {
    id: 'madas-ent-3b', partNumber: 3, partTitle: 'Short-Run Shocks: Four Cases Worked',
    question: 'Starting from long-run equilibrium, a stock market crash sharply reduces household wealth. What are the short-run effects on the price level, real GDP and unemployment?',
    options: ['A higher price level, lower real GDP, higher unemployment', 'A lower price level, higher real GDP, lower unemployment', 'A lower price level, lower real GDP, higher unemployment', 'A higher price level, higher real GDP, lower unemployment'],
    correctIndex: 2,
    explanation: 'Lower wealth at every price level cuts consumption, so AD shifts left. An AD decrease lowers the price level and real GDP together, and less output means more unemployment.',
  },
  {
    id: 'madas-ent-4a', partNumber: 4, partTitle: 'Reading AD-AS Graphs and Data',
    question: 'An economy\'s full-employment output is \\$940 billion.\n\n| Price level | Real GDP demanded (\\$ billions) | Real GDP supplied (\\$ billions) |\n|---|---|---|\n| 104 | 980 | 820 |\n| 108 | 940 | 860 |\n| 112 | 900 | 900 |\n| 116 | 860 | 940 |\n| 120 | 820 | 980 |\n\nGovernment purchases then raise real GDP demanded by \\$80 billion at every price level. What are the new equilibrium price level and real GDP?',
    options: ['112 and \\$980 billion', '116 and \\$940 billion', '120 and \\$980 billion', '108 and \\$940 billion'],
    correctIndex: 1,
    explanation: 'The new demand column reads 940 at a price level of 116, where supply is also 940, so the gap closes at 116 and \\$940 billion. Output rises by only \\$40 billion, half the shift, because the upward-sloping SRAS turns part of the extra demand into a higher price level.',
  },
  {
    id: 'madas-ent-4b', partNumber: 4, partTitle: 'Reading AD-AS Graphs and Data',
    question: 'Over a year, a country\'s price level falls from 130 to 127, real GDP rises from \\$20.0 trillion to \\$20.4 trillion, and unemployment falls from 5.2 percent to 4.7 percent. Which shift most likely caused these changes?',
    options: ['An increase in AD', 'A decrease in SRAS', 'A decrease in AD', 'An increase in SRAS'],
    correctIndex: 3,
    explanation: 'The price level and real GDP moved in opposite directions, which points to a supply shift, and a lower price level with more output means SRAS increased. An AD shift would move the price level and output together.',
  },
  {
    id: 'madas-ent-5a', partNumber: 5, partTitle: 'Long-Run Self-Adjustment and Common Misconceptions',
    question: 'An economy is in an inflationary gap, and policymakers take no action. Which sequence describes the long-run adjustment?',
    options: ['Wages rise, SRAS shifts left, the price level rises', 'Wages rise, AD shifts left, the price level falls', 'Wages fall, SRAS shifts right, the price level falls', 'Wages rise, LRAS shifts left, real output falls'],
    correctIndex: 0,
    explanation: 'With unemployment below the natural rate, workers win higher nominal wages, which raise costs and shift SRAS left until output returns to potential at a higher price level. Self-adjustment works through SRAS, not AD or LRAS.',
  },
  {
    id: 'madas-ent-5b', partNumber: 5, partTitle: 'Long-Run Self-Adjustment and Common Misconceptions',
    question: 'An economy is in a recessionary gap. Under Path A, policymakers do nothing; under Path B, the government raises its purchases just enough to close the gap. How do the long-run outcomes compare?',
    options: ['Same output, with a higher price level under Path A', 'Same output, with an equal price level under both paths', 'Same output, with a lower price level under Path A', 'Higher output and a higher price level under Path B'],
    correctIndex: 2,
    explanation: 'Both paths end at full-employment output. Under Path A, falling wages shift SRAS right and lower the price level; under Path B, AD shifts right and raises it.',
  },
  {
    id: 'madas-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An economy is in long-run equilibrium when a hurricane raises fuel and parts prices sharply for a year, without permanently reducing its productive capacity. What are the short-run effects on unemployment and on LRAS?',
    options: ['Unemployment rises and LRAS shifts leftward', 'Unemployment rises and LRAS shifts rightward', 'Unemployment falls and LRAS does not change', 'Unemployment rises and LRAS is unchanged'],
    correctIndex: 3,
    explanation: 'Higher input prices shift SRAS left, so real GDP falls and firms lay off workers. Because the shock is temporary and capacity is intact, full-employment output and LRAS do not change.',
  },
  {
    id: 'madas-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An economy\'s full-employment output is \\$5.0 trillion. After exports drop, short-run equilibrium real GDP is \\$4.6 trillion at a price level of 120. What is the output gap as a percent of full-employment output, and what is long-run real GDP with no policy action?',
    options: ['8 percent and \\$4.6 trillion', '8 percent and \\$5.0 trillion', '9 percent and \\$5.0 trillion', '5 percent and \\$5.0 trillion'],
    correctIndex: 1,
    explanation: 'The gap is \\$5.0 − \\$4.6 = \\$0.4 trillion, and 0.4 ÷ 5.0 = 8 percent of full-employment output. With no policy, falling wages shift SRAS right until output returns to \\$5.0 trillion.',
  },
  {
    id: 'madas-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'An economy starts in long-run equilibrium. A major trading partner booms and buys far more of its exports. With no policy response, what is the long-run outcome?',
    options: ['Output stays above potential at a higher price level', 'Output returns to potential at the original price level', 'Output returns to potential at a higher price level', 'Output returns to potential at a reduced price level'],
    correctIndex: 2,
    explanation: 'Higher net exports shift AD right, creating an inflationary gap. Rising wages then shift SRAS left until output is back at potential, leaving only a higher price level.',
  },
  {
    id: 'madas-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'An economy\'s full-employment output is \\$8.0 trillion, and AD and SRAS currently cross at real GDP of \\$8.4 trillion. Which statement describes the labor market and the coming wage adjustment if there is no policy action?',
    options: ['With unemployment below the natural rate, wages will rise', 'With unemployment above the natural rate, wages will fall', 'With unemployment below the natural rate, wages will fall', 'With unemployment above the natural rate, wages will rise'],
    correctIndex: 0,
    explanation: 'Output above full employment means an inflationary gap, so unemployment is below the natural rate. Firms compete for scarce workers, nominal wages rise, and SRAS shifts left.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'SRAS and LRAS in Depth' },
    { partNumber: 3, partTitle: 'Short-Run Shocks: Four Cases Worked' },
    { partNumber: 4, partTitle: 'Reading AD-AS Graphs and Data' },
    { partNumber: 5, partTitle: 'Long-Run Self-Adjustment and Common Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
