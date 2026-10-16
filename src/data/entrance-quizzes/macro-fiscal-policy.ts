/**
 * Entrance Quiz — Fiscal Policy (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mfp-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which of the following is an automatic stabilizer at work?',
    options: ['Unemployment benefit payments rise as layoffs spread', 'Congress passes a highway bill to create jobs', 'The Fed lowers interest rates as unemployment rises', 'The president signs a one-time tax rebate into law'],
    correctIndex: 0,
    explanation: 'Unemployment insurance pays out more on its own as people lose jobs, with no new law. A highway bill and a tax rebate are discretionary fiscal policy, and a rate cut is monetary policy.',
  },
  {
    id: 'mfp-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Near full employment, the government pays for a large increase in its purchases by borrowing. Which effect partly offsets the boost to aggregate demand?',
    options: ['Lower real interest rates raise private saving', 'Higher real interest rates reduce private investment', 'Higher tax rates reduce household consumption', 'A lower price level reduces the money supply'],
    correctIndex: 1,
    explanation: 'Government borrowing raises the demand for loanable funds, which pushes up the real interest rate. Higher rates discourage private investment, so the net rightward shift of AD is smaller.',
  },
  {
    id: 'mfp-ent-2a', partNumber: 2, partTitle: 'Discretionary Fiscal Policy in the AD-AS Model',
    question: 'Through which link does a cut in personal taxes raise aggregate demand?',
    options: ['Government purchases rise, so the G component grows', 'Interest rates fall, so firms invest more in equipment', 'Disposable income rises, so people spend more', 'Business costs fall, so the SRAS curve shifts right'],
    correctIndex: 2,
    explanation: 'A personal tax cut leaves households with more disposable income, and they spend part of it, so consumption and AD rise. A tax cut changes revenue, not government purchases.',
  },
  {
    id: 'mfp-ent-2b', partNumber: 2, partTitle: 'Discretionary Fiscal Policy in the AD-AS Model',
    question: 'An economy is in long-run equilibrium at full-employment output of \\$1,000 billion and a price level of 110. Higher government purchases move it to \\$1,040 billion and a price level of 116 in the short run. What happens in the long run?',
    options: ['Output of \\$1,040 billion at a price level of 116', 'Output of \\$1,000 billion at a price level of 110', 'Output of \\$1,040 billion at a price level above 116', 'Output of \\$1,000 billion at a price level above 116'],
    correctIndex: 3,
    explanation: 'With output above potential, nominal wages and input prices rise and SRAS shifts left until output returns to \\$1,000 billion. The price level ends higher still, so the only lasting effect is inflation.',
  },
  {
    id: 'mfp-ent-3a', partNumber: 3, partTitle: 'Worked Cases and Policy Lags',
    question: 'A jump in world oil prices pushes an economy\'s real GDP below full employment and raises its price level. If the government responds with expansionary fiscal policy, what happens?',
    options: ['Real GDP rises toward full employment, but the price level rises further', 'Real GDP and the price level both return to their starting levels', 'Real GDP falls further, but the price level falls back toward its start', 'Real GDP rises toward full employment, and the price level falls back'],
    correctIndex: 0,
    explanation: 'Fiscal policy shifts AD. Shifting AD right restores output but pushes the price level up even more, so no single AD shift can fix both problems a supply shock creates.',
  },
  {
    id: 'mfp-ent-3b', partNumber: 3, partTitle: 'Worked Cases and Policy Lags',
    question: 'A recession begins in February. Data confirm it 5 months later, Congress takes 4 more months to pass a spending bill, and the money starts flowing 4 months after that. The recession ends on its own 9 months after it began. When does the spending start, and what is the risk?',
    options: ['9 months in, as the recession ends, so it works as planned', '13 months in, with recovery under way, so it may overheat the economy', '13 months in, during the recession, so it shortens the downturn', '5 months in, as the data arrive, so it shortens the downturn'],
    correctIndex: 1,
    explanation: 'The lags add to 5 + 4 + 4 = 13 months, four months after the recovery began. Stimulus that arrives then adds demand to an economy that no longer needs it, making the policy pro-cyclical.',
  },
  {
    id: 'mfp-ent-4a', partNumber: 4, partTitle: 'Automatic Stabilizers and Budget Data',
    question: 'In Year 1 a government collects \\$1,500 billion in taxes, buys \\$1,050 billion of goods and services and pays \\$520 billion in transfers. In Year 2, a recession year, taxes fall to \\$1,380 billion and transfers rise to \\$600 billion, while purchases stay the same. What is the budget balance in each year?',
    options: ['+\\$450 billion and +\\$330 billion', '−\\$70 billion and −\\$190 billion', '−\\$70 billion and −\\$270 billion', '+\\$70 billion and +\\$270 billion'],
    correctIndex: 2,
    explanation: 'Year 1: 1,500 − (1,050 + 520) = −\\$70 billion. Year 2: 1,380 − (1,050 + 600) = −\\$270 billion. The larger deficit comes entirely from automatic stabilizers, since purchases did not change.',
  },
  {
    id: 'mfp-ent-4b', partNumber: 4, partTitle: 'Automatic Stabilizers and Budget Data',
    question: 'A drop in investment cuts national income by \\$200 billion. As a result, income tax payments fall by \\$40 billion and unemployment benefits rise by \\$10 billion. If the MPC is 0.8, by how much does consumption fall in the first round?',
    options: ['\\$160 billion', '\\$150 billion', '\\$200 billion', '\\$120 billion'],
    correctIndex: 3,
    explanation: 'Disposable income falls by only \\$200 − \\$40 − \\$10 = \\$150 billion, so consumption falls by 0.8 × \\$150 = \\$120 billion instead of \\$160 billion. That smaller drop is how stabilizers dampen the multiplier.',
  },
  {
    id: 'mfp-ent-5a', partNumber: 5, partTitle: 'Policy Mix, Nuance and Misconceptions',
    question: 'Congress raises income taxes to cut the deficit while the Federal Reserve lowers interest rates. What are the combined short-run effects?',
    options: ['Interest rates fall, and real GDP is indeterminate', 'Interest rates rise, while real GDP is indeterminate', 'Interest rates are indeterminate, and real GDP falls', 'Interest rates fall, and real GDP falls for certain'],
    correctIndex: 0,
    explanation: 'Less government borrowing and the Fed\'s action both push interest rates down, so rates fall for certain. The tax increase shifts AD left while lower rates shift it right, so the effect on real GDP is indeterminate.',
  },
  {
    id: 'mfp-ent-5b', partNumber: 5, partTitle: 'Policy Mix, Nuance and Misconceptions',
    question: 'A state must balance its budget every year. A recession turns its balanced budget into a \\$60 billion deficit. What is the effect of obeying the rule?',
    options: ['Automatic stabilizers grow stronger and shorten the slump', 'Required tax increases or spending cuts deepen the slump', 'Interest rates fall, so that new investment ends the slump', 'The deficit adds to the debt, which ends the slump faster'],
    correctIndex: 1,
    explanation: 'Closing the deficit means raising taxes or cutting spending in the middle of a recession, which is contractionary and shifts AD further left. A strict annual balanced-budget rule cancels the automatic stabilizers.',
  },
  {
    id: 'mfp-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'This year a government collects \\$900 billion in taxes, makes \\$700 billion of purchases and pays \\$280 billion in transfers. Next year the economy recovers: tax revenue rises by \\$40 billion and transfers fall by \\$15 billion, with purchases unchanged. What are the budget balances this year and next year?',
    options: ['−\\$80 billion and −\\$40 billion', '+\\$200 billion and +\\$240 billion', '−\\$80 billion and −\\$25 billion', '−\\$80 billion and −\\$135 billion'],
    correctIndex: 2,
    explanation: 'This year: 900 − (700 + 280) = −\\$80 billion. Next year: 940 − (700 + 265) = −\\$25 billion; both the revenue gain and the fall in transfers shrink the deficit.',
  },
  {
    id: 'mfp-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An economy is producing above full-employment output with rising inflation. Congress cuts personal income taxes, and the central bank responds with contractionary monetary policy. How does the tax cut affect the gap, and what happens to interest rates with both policies in place?',
    options: ['It narrows the gap, and interest rates rise for certain', 'It widens the gap, and interest rates are indeterminate', 'It closes the gap, and interest rates are indeterminate', 'It widens the gap, and interest rates rise for certain'],
    correctIndex: 3,
    explanation: 'The tax cut raises consumption and shifts AD right, widening the inflationary gap. More government borrowing and the central bank\'s action both push interest rates up, so rates rise for certain.',
  },
  {
    id: 'mfp-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A government starts the year with a national debt of \\$6,000 billion. During the year it collects \\$1,400 billion in taxes, makes \\$1,100 billion of purchases and pays \\$420 billion in transfers. The economy is at full employment. What is the debt at year end, and what is the long-run effect on real GDP of the year\'s purchases?',
    options: ['\\$6,120 billion, with no long-run change in real GDP', '\\$5,880 billion, with no long-run change in real GDP', '\\$6,120 billion, with a long-run rise in real GDP', '\\$6,300 billion, with no long-run change in real GDP'],
    correctIndex: 0,
    explanation: 'The balance is 1,400 − (1,100 + 420) = −\\$120 billion, so the debt grows to \\$6,120 billion. At full employment, demand-side spending raises only the price level in the long run.',
  },
  {
    id: 'mfp-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'An economy has a recessionary gap. Which fiscal package fits, and what does it do to the budget?',
    options: ['Cut taxes and raise transfers, moving the budget toward surplus', 'Cut taxes and raise transfers, moving the budget toward deficit', 'Cut taxes and lower interest rates, moving the budget toward deficit', 'Raise taxes and cut transfers, moving the budget toward surplus'],
    correctIndex: 1,
    explanation: 'Lower taxes and higher transfers raise disposable income and AD, and both widen the deficit. Lowering interest rates is monetary policy, not a fiscal tool.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Discretionary Fiscal Policy in the AD-AS Model' },
    { partNumber: 3, partTitle: 'Worked Cases and Policy Lags' },
    { partNumber: 4, partTitle: 'Automatic Stabilizers and Budget Data' },
    { partNumber: 5, partTitle: 'Policy Mix, Nuance and Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
