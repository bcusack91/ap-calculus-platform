/**
 * Entrance Quiz — The Phillips Curve (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mpc-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'An economy is in long-run equilibrium when the government sharply increases its purchases. How does this appear on the Phillips curve graph in the short run?',
    options: ['A movement up and to the left along the SRPC', 'A rightward shift of the whole SRPC', 'A movement down and to the right along the SRPC', 'A leftward shift of the LRPC'],
    correctIndex: 0,
    explanation: 'Higher purchases shift AD right, which raises inflation and lowers unemployment along the existing SRPC. AD changes move the economy along the SRPC; they do not shift it.',
  },
  {
    id: 'mpc-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A sudden, temporary jump in oil prices raises production costs across the economy. What happens on the Phillips curve graph?',
    options: ['The SRPC shifts left, so inflation and unemployment both fall', 'The SRPC shifts right, so inflation and unemployment both rise', 'The SRPC stays put, and the economy moves up and to the left', 'The LRPC shifts right, so only unemployment rises'],
    correctIndex: 1,
    explanation: 'A negative supply shock shifts SRAS left, which appears as a rightward shift of the SRPC: inflation and unemployment rise together, which is stagflation. The LRPC moves only when the natural rate changes.',
  },
  {
    id: 'mpc-ent-2a', partNumber: 2, partTitle: 'Linking the Phillips Curve to AD-AS',
    question: 'Cheaper energy shifts the SRAS curve to the right on the AD-AS graph. What is the matching change on the Phillips curve graph?',
    options: ['A rightward SRPC shift', 'A slide down along the SRPC', 'A leftward SRPC shift', 'A leftward shift of the LRPC'],
    correctIndex: 2,
    explanation: 'An SRAS increase lowers the price level and raises output, so inflation and unemployment both fall. That is a leftward (downward) shift of the SRPC; horizontal directions on the two graphs are opposite.',
  },
  {
    id: 'mpc-ent-2b', partNumber: 2, partTitle: 'Linking the Phillips Curve to AD-AS',
    question: 'Which event would shift the long-run Phillips curve to the left?',
    options: ['More physical capital raises full-employment output', 'Workers come to expect a lower rate of inflation', 'The central bank lowers interest rates sharply', 'Better job-matching technology shortens job searches'],
    correctIndex: 3,
    explanation: 'Faster job matching cuts frictional unemployment, lowering the natural rate, so the LRPC shifts left. More capital raises output without necessarily changing the natural rate, expectations shift the SRPC, and a rate cut moves the economy along the SRPC.',
  },
  {
    id: 'mpc-ent-3a', partNumber: 3, partTitle: 'Expectations and Long-Run Adjustment, Worked Cases',
    question: 'An economy\'s natural rate of unemployment is 4 percent, and people expect 3 percent inflation. Expansionary policy moves it along its SRPC to 2.5 percent unemployment and 5 percent inflation. With no further policy, people come to expect 5 percent inflation. Where does the economy end up?',
    options: ['4% unemployment and 5% inflation', '2.5% unemployment and 5% inflation', '4% unemployment and 3% inflation', '2.5% unemployment and 7% inflation'],
    correctIndex: 0,
    explanation: 'After a period of 5 percent inflation, people expect 5 percent, so the SRPC shifts up until it crosses the LRPC at 5 percent. Unemployment returns to the 4 percent natural rate, and the only lasting effect is higher inflation.',
  },
  {
    id: 'mpc-ent-3b', partNumber: 3, partTitle: 'Expectations and Long-Run Adjustment, Worked Cases',
    question: 'An economy\'s natural rate of unemployment is 5 percent, and people expect 7 percent inflation. Contractionary policy moves it along its SRPC to 7.5 percent unemployment and 4 percent inflation. What is cyclical unemployment at that point, and where is the new long-run equilibrium after expectations adjust?',
    options: ['7.5 points, then 5% unemployment and 4% inflation', '2.5 points, then 5% unemployment and 4% inflation', '2.5 points, then 7.5% unemployment and 4% inflation', '2.5 points, then 5% unemployment and 7% inflation'],
    correctIndex: 1,
    explanation: 'Cyclical unemployment is 7.5 − 5 = 2.5 points. As expected inflation falls to 4 percent, the SRPC shifts down and the economy returns to the natural rate at 4 percent inflation, a disinflation paid for by a temporary recession.',
  },
  {
    id: 'mpc-ent-4a', partNumber: 4, partTitle: 'Reading and Drawing Phillips Curve Graphs',
    question: 'An economy\'s natural rate of unemployment is 6 percent. Its SRPC1 gives these points (unemployment, inflation): (4%, 7.0%), (5%, 5.5%), (6%, 4.0%), (7%, 2.5%), (8%, 1.0%). This year the economy has 7 percent unemployment and 5.5 percent inflation. What happened?',
    options: ['A movement along SRPC1, with 4.0% expected inflation', 'An upward SRPC shift of 3 points, with 5.5% expected inflation', 'An upward SRPC shift of 3 points, with 7.0% expected inflation', 'A rightward LRPC shift, with 4.0% expected inflation'],
    correctIndex: 2,
    explanation: 'SRPC1 predicts 2.5 percent inflation at 7 percent unemployment, so 5.5 percent means the curve shifted up 3 points. The new curve crosses the LRPC at 4.0 + 3 = 7.0 percent, the new expected inflation rate.',
  },
  {
    id: 'mpc-ent-4b', partNumber: 4, partTitle: 'Reading and Drawing Phillips Curve Graphs',
    question: 'An economy starts at point A, where SRPC1 crosses the LRPC. Aggregate demand falls, and later expected inflation adjusts fully. Where is the new long-run point, C, relative to A?',
    options: ['Down and to the right of A, on SRPC1', 'Directly above point A, on the LRPC', 'Up and to the right of A, on a new SRPC', 'Directly below A, on the LRPC'],
    correctIndex: 3,
    explanation: 'The fall in AD first moves the economy down SRPC1, then lower expected inflation shifts the SRPC down. In the long run unemployment is back at the natural rate with lower inflation, directly below A on the LRPC.',
  },
  {
    id: 'mpc-ent-5a', partNumber: 5, partTitle: 'Nuance and Common Misconceptions',
    question: 'An economy\'s natural rate of unemployment is 5 percent. After an oil shock, it is on its SRPC at 7 percent unemployment and 6 percent inflation. Which output gap does it have?',
    options: ['A recessionary gap, because the point lies right of the LRPC', 'An inflationary gap, because the inflation rate is above expectations', 'An inflationary gap, because the inflation rate is high', 'No gap, because the economy is still on an SRPC'],
    correctIndex: 0,
    explanation: 'The gap depends on unemployment relative to the natural rate, not on how high inflation is. At 7 percent unemployment the point lies right of the LRPC, a recessionary gap, even though inflation is high.',
  },
  {
    id: 'mpc-ent-5b', partNumber: 5, partTitle: 'Nuance and Common Misconceptions',
    question: 'A price index is 120 in Year 1, 126 in Year 2 and 128.5 in Year 3. How should the change from Year 2 to Year 3 be described?',
    options: ['Deflation, because the inflation rate fell', 'Disinflation, because the rate fell but stayed positive', 'Stagflation, because inflation slowed sharply', 'Inflation, because the rate of increase rose'],
    correctIndex: 1,
    explanation: 'Inflation falls from 5 percent to about 2 percent, but prices still rise, from 126 to 128.5. A falling but positive inflation rate is disinflation; deflation would require the index itself to fall.',
  },
  {
    id: 'mpc-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An economy\'s natural rate of unemployment is 6 percent and expected inflation is 2 percent; it starts in long-run equilibrium. Along its SRPC, each 1-point fall in unemployment raises inflation by 1.5 points. Policy pushes unemployment to 5 percent, expectations then adjust fully, and policy pushes unemployment to 5 percent again on the new SRPC. What is inflation now?',
    options: ['3.5%', '2.0%', '5.0%', '6.5%'],
    correctIndex: 2,
    explanation: 'The first push gives 2 + 1.5 = 3.5 percent inflation. Once people expect 3.5 percent, the new SRPC crosses the LRPC at 3.5 percent, and the second push to 5 percent unemployment gives 3.5 + 1.5 = 5.0 percent.',
  },
  {
    id: 'mpc-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A temporary energy price spike has shifted an economy\'s SRPC to the right. The central bank, which operates with ample reserves, raises the interest rate on reserve balances to reduce inflation. What happens in the short run?',
    options: ['Inflation and unemployment both fall as the SRPC shifts back', 'Inflation and unemployment both fall along the original SRPC', 'The LRPC shifts left and unemployment returns to its old level', 'Inflation falls and unemployment rises further, along the new SRPC'],
    correctIndex: 3,
    explanation: 'Higher interest rates reduce investment and shift AD left, which moves the economy down along the SRPC that the shock already shifted. Inflation falls, but unemployment rises even more.',
  },
  {
    id: 'mpc-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Real GDP grows 3 percent a year and velocity is stable. The central bank raises money growth from 5 percent to 9 percent a year and keeps it there. What is the long-run outcome?',
    options: ['Inflation of about 6 percent, with unemployment at the natural rate', 'Inflation of about 9 percent, with unemployment at the natural rate', 'Inflation of about 6 percent, with unemployment below the natural rate', 'Inflation of about 2 percent, with unemployment below the natural rate'],
    correctIndex: 0,
    explanation: 'With stable velocity, inflation ≈ money growth − real growth = 9 − 3 = 6 percent. Money is neutral in the long run, so the economy moves up the vertical LRPC and unemployment stays at the natural rate.',
  },
  {
    id: 'mpc-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Over a year, an economy\'s inflation rate rises from 3 percent to 5 percent while its unemployment rate rises from 5 percent to 6.5 percent. Which explanation fits?',
    options: ['AD shifted right, so the economy moved up the SRPC', 'SRAS shifted left, so the SRPC shifted right', 'AD shifted left, so the economy moved down the SRPC', 'LRAS shifted right, so the LRPC shifted to the left'],
    correctIndex: 1,
    explanation: 'Inflation and unemployment moved in the same direction, which means the SRPC shifted rather than the economy moving along it. A rightward SRPC shift matches a leftward SRAS shift, such as a supply shock or higher expected inflation.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Linking the Phillips Curve to AD-AS' },
    { partNumber: 3, partTitle: 'Expectations and Long-Run Adjustment, Worked Cases' },
    { partNumber: 4, partTitle: 'Reading and Drawing Phillips Curve Graphs' },
    { partNumber: 5, partTitle: 'Nuance and Common Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
