/**
 * Entrance Quiz — Monetary Policy (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mmp-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'In the limited-reserves model, which set of Federal Reserve actions would all push interest rates down?',
    options: ['The Fed buys bonds, cuts the discount rate and cuts the reserve ratio', 'The Fed sells bonds, cuts the discount rate and raises the reserve ratio', 'The Fed buys bonds, raises the discount rate and cuts the reserve ratio', 'The Fed sells bonds, raises the discount rate and raises the reserve ratio'],
    correctIndex: 0,
    explanation: 'Buying bonds adds reserves, a lower discount rate makes borrowing reserves cheaper, and a lower reserve ratio frees reserves for lending. All three expand the money supply and lower interest rates.',
  },
  {
    id: 'mmp-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The Fed lowers interest rates in January, but business investment and output barely respond until the following autumn. Which limitation of monetary policy does this show?',
    options: ['A recognition lag in spotting the recession', 'An adjustment lag in spending', 'A legislative lag in passing the policy', 'A stagflation dilemma for the central bank'],
    correctIndex: 1,
    explanation: 'Once rates change, firms and households take months to revise investment plans and big purchases, so AD responds gradually. The recognition lag comes before the decision, and legislative lags affect fiscal policy, not the Fed.',
  },
  {
    id: 'mmp-ent-2a', partNumber: 2, partTitle: 'The Money Market Graph',
    question: 'In the money market, the money supply curve is vertical. Real GDP rises, and the Fed takes no action. What happens?',
    options: ['The nominal rate rises and the quantity of money rises', 'The nominal rate falls and the quantity of money rises', 'The nominal rate rises and the quantity of money is unchanged', 'The nominal rate stays put and the quantity of money rises'],
    correctIndex: 2,
    explanation: 'More transactions shift money demand right. With the money supply fixed, people sell bonds to get money, bond prices fall and the nominal interest rate rises until the existing quantity is willingly held.',
  },
  {
    id: 'mmp-ent-2b', partNumber: 2, partTitle: 'The Money Market Graph',
    question: 'New mobile payment apps let people pay instantly from savings accounts, so they keep smaller checking balances for purchases. With no Fed action, what happens in the money market?',
    options: ['Money supply shifts left and the interest rate rises', 'Money demand shifts right and the interest rate rises', 'Money demand shifts left and the interest rate rises', 'Money demand shifts left and the interest rate falls'],
    correctIndex: 3,
    explanation: 'Better payment technology lets people make the same purchases while holding less money, so money demand shifts left. With a fixed money supply, the equilibrium nominal interest rate falls.',
  },
  {
    id: 'mmp-ent-3a', partNumber: 3, partTitle: 'Monetary Policy Chains, Worked',
    question: 'Real GDP is above full-employment output, inflation is 5 percent, and the banking system has ample reserves. Which policy chain should the Fed follow?',
    options: ['Raise the rate paid on reserves, so borrowing costs rise and AD shifts left', 'Raise the rate paid on reserves, so saving rises and LRAS shifts left', 'Lower the rate paid on reserves, so costs fall and AD shifts left', 'Raise the federal funds rate as a tool, so AD shifts left'],
    correctIndex: 0,
    explanation: 'Raising the interest rate on reserve balances pushes up the federal funds rate and other rates, which cuts investment and interest-sensitive consumption and shifts AD left. The federal funds rate is the target, not the tool, and monetary policy shifts AD, not LRAS.',
  },
  {
    id: 'mmp-ent-3b', partNumber: 3, partTitle: 'Monetary Policy Chains, Worked',
    question: 'The federal funds rate is 4.30 percent, and expected inflation is 2.0 percent. The Fed cuts its target range and the interest rate on reserve balances by 0.50 percentage point, and the federal funds rate falls by the same amount. What is the new real federal funds rate?',
    options: ['3.80%', '1.80%', '2.30%', '5.80%'],
    correctIndex: 1,
    explanation: 'The nominal rate falls to 4.30 − 0.50 = 3.80 percent. With expected inflation unchanged in the short run, the real rate is 3.80 − 2.0 = 1.80 percent.',
  },
  {
    id: 'mmp-ent-4a', partNumber: 4, partTitle: 'Reading Money Market and AD-AS Data',
    question: 'The money supply is \\$300 billion.\n\n| Nominal interest rate | Quantity of money demanded (\\$ billions) |\n|---|---|\n| 8% | 200 |\n| 7% | 250 |\n| 6% | 300 |\n| 5% | 350 |\n| 4% | 400 |\n\nIf the interest rate were 7 percent, what would be happening in the money market?',
    options: ['An excess demand for money of \\$50 billion, so people sell bonds', 'An excess supply of money of \\$50 billion, so people sell bonds', 'An excess supply of money of \\$50 billion, so people buy bonds', 'An excess demand for money of \\$250 billion, so people buy bonds'],
    correctIndex: 2,
    explanation: 'At 7 percent people want to hold only \\$250 billion while \\$300 billion exists, an excess supply of \\$50 billion. They use the extra money to buy bonds, which raises bond prices and pushes the rate down toward 6 percent.',
  },
  {
    id: 'mmp-ent-4b', partNumber: 4, partTitle: 'Reading Money Market and AD-AS Data',
    question: 'Using the money demand schedule above (8% → 200, 7% → 250, 6% → 300, 5% → 350, 4% → 400, in \\$ billions), the Fed raises the money supply from \\$300 billion to \\$400 billion. Expected inflation is 2 percent, and planned investment at each real interest rate is:\n\n| Real interest rate | Planned investment (\\$ billions) |\n|---|---|\n| 5% | 180 |\n| 4% | 220 |\n| 3% | 260 |\n| 2% | 300 |\n| 1% | 340 |\n\nBy how much does planned investment rise?',
    options: ['\\$40 billion', '\\$120 billion', '\\$100 billion', '\\$80 billion'],
    correctIndex: 3,
    explanation: 'The nominal rate falls from 6 percent to 4 percent, so the real rate falls from 4 percent to 2 percent. Planned investment rises from \\$220 billion to \\$300 billion, an increase of \\$80 billion.',
  },
  {
    id: 'mmp-ent-5a', partNumber: 5, partTitle: 'Money Growth, Inflation and the Long Run',
    question: 'Velocity is constant, real GDP grows 3 percent a year at full employment, and the money supply grows 7 percent a year. According to the quantity theory of money, what is the approximate inflation rate?',
    options: ['4 percent', '10 percent', '7 percent', '21 percent'],
    correctIndex: 0,
    explanation: 'In growth rates, %ΔM + %ΔV ≈ %ΔP + %ΔY, so 7 + 0 ≈ inflation + 3, giving inflation of about 4 percent. Money growth beyond real output growth shows up as rising prices.',
  },
  {
    id: 'mmp-ent-5b', partNumber: 5, partTitle: 'Money Growth, Inflation and the Long Run',
    question: 'An economy is at full employment when the Fed carries out a large expansionary policy. What is the long-run result?',
    options: ['Real GDP stays above potential and interest rates stay lower', 'Real GDP returns to potential and the price level is higher', 'Real GDP returns to potential and the price level is unchanged', 'Real GDP stays above potential and the price level is higher'],
    correctIndex: 1,
    explanation: 'Output rises above potential at first, but unemployment below the natural rate pushes wages up and SRAS shifts left. In the long run real GDP returns to potential and only the price level stays higher, because money is neutral.',
  },
  {
    id: 'mmp-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A central bank in a limited-reserves system buys \\$30 million of government bonds from commercial banks. The required reserve ratio is 10 percent, and banks keep no excess reserves. What is the maximum change in the money supply, and what happens to bond prices?',
    options: ['\\$300 million, and bond prices fall', '\\$270 million, and bond prices rise', '\\$300 million, and bond prices rise', '\\$30 million, and bond prices rise'],
    correctIndex: 2,
    explanation: 'A purchase from banks adds \\$30 million of excess reserves, which can support \\$30 million × 10 = \\$300 million of new money. The Fed\'s buying raises bond prices, which is the same as lowering interest rates.',
  },
  {
    id: 'mmp-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An economy has an inflationary gap. Compare the long-run price level if the central bank does nothing with the price level if it raises the interest rate on reserve balances. The long-run price level is',
    options: ['lower when the bank does nothing, because wages shift SRAS right', 'the same either way, because output returns to potential in both cases', 'higher if the bank acts, because higher rates raise firms\' costs', 'higher when the bank does nothing, because rising wages shift SRAS left'],
    correctIndex: 3,
    explanation: 'Without action, the gap closes as rising nominal wages shift SRAS left, which pushes the price level up further. Raising rates instead shifts AD left, closing the gap at a lower price level.',
  },
  {
    id: 'mmp-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'An economy\'s money supply is \\$5 trillion and its nominal GDP is \\$20 trillion. If the money supply rises to \\$5.5 trillion while velocity and real GDP stay constant, what are velocity and the rise in the price level?',
    options: ['4 and 10 percent', '4 and 2 percent', '0.25 and 10 percent', '4 and 0.5 percent'],
    correctIndex: 0,
    explanation: 'Velocity is nominal GDP ÷ M = 20 ÷ 5 = 4. With V and Y fixed, a 10 percent rise in M raises nominal GDP to \\$22 trillion, all of it through a 10 percent rise in the price level.',
  },
  {
    id: 'mmp-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which pair of actions would each raise interest rates, one under ample reserves and one under limited reserves?',
    options: ['Lowering the rate on reserve balances, or selling bonds', 'Raising the rate on reserve balances, or buying bonds', 'Raising the rate on reserve balances, or selling bonds', 'Raising the reserve ratio, or lowering the discount rate'],
    correctIndex: 2,
    explanation: 'Under ample reserves the Fed raises rates by raising the interest rate on reserve balances; under limited reserves, selling bonds drains reserves and raises rates. Buying bonds and lowering the discount rate push rates down.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Money Market Graph' },
    { partNumber: 3, partTitle: 'Monetary Policy Chains, Worked' },
    { partNumber: 4, partTitle: 'Reading Money Market and AD-AS Data' },
    { partNumber: 5, partTitle: 'Money Growth, Inflation and the Long Run' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
