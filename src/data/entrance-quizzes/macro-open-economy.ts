/**
 * Entrance Quiz — The Open Economy: Loanable Funds & Capital Flows (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'moe-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The U.S. government runs a much larger budget deficit while other countries\' policies stay the same. Which sequence follows in the open economy?',
    options: ['Real interest rate rises, the dollar appreciates, net exports decrease', 'Real interest rate falls, the dollar depreciates, net exports rise', 'Real interest rate rises, the dollar depreciates, net exports rise', 'Real interest rate rises, the dollar appreciates, net exports rise'],
    correctIndex: 0,
    explanation: 'Government borrowing raises the demand for loanable funds and the real interest rate. The higher relative rate draws in foreign capital, raising demand for dollars, and the stronger dollar lowers net exports.',
  },
  {
    id: 'moe-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The Federal Reserve carries out expansionary monetary policy, and interest rates fall. What happens to the dollar and to U.S. net exports?',
    options: ['The dollar appreciates and net exports decline', 'The dollar depreciates and net exports rise', 'The dollar depreciates and net exports decline', 'The dollar appreciates and net exports increase'],
    correctIndex: 1,
    explanation: 'Lower U.S. rates send financial capital abroad, so the demand for dollars falls and the dollar depreciates. U.S. goods become cheaper abroad, net exports rise, and the exchange rate reinforces the policy.',
  },
  {
    id: 'moe-ent-2a', partNumber: 2, partTitle: 'The Loanable Funds Market in Depth',
    question: 'A loanable funds market has these schedules (billions of dollars):\n\n| Real interest rate | Quantity supplied | Quantity demanded |\n|---|---|---|\n| 2% | 400 | 800 |\n| 3% | 500 | 700 |\n| 4% | 600 | 600 |\n| 5% | 700 | 500 |\n| 6% | 800 | 400 |\n\nA capital inflow raises the quantity supplied by \\$200 billion at every rate. What are the new equilibrium real interest rate and quantity of loanable funds?',
    options: ['5% and \\$700 billion', '4% and \\$800 billion', '3% and \\$700 billion', '3% and \\$500 billion'],
    correctIndex: 2,
    explanation: 'The new supply column is 600, 700, 800, 900 and 1,000, which matches the quantity demanded at 3 percent (\\$700 billion). An increase in supply lowers the real rate and raises the quantity lent.',
  },
  {
    id: 'moe-ent-2b', partNumber: 2, partTitle: 'The Loanable Funds Market in Depth',
    question: 'Which change shifts the supply of loanable funds in the United States to the left?',
    options: ['Businesses grow more optimistic about future profits', 'The government\'s budget moves into surplus', 'Congress introduces an investment tax credit', 'U.S. savers move their money into foreign bonds'],
    correctIndex: 3,
    explanation: 'Savers sending funds abroad is a capital outflow, which removes saving from the U.S. market and shifts supply left. Optimism and an investment tax credit shift demand right, and a surplus adds public saving.',
  },
  {
    id: 'moe-ent-3a', partNumber: 3, partTitle: 'Real Interest Rates and International Capital Flows',
    question: 'Country A has a nominal interest rate of 10 percent and expected inflation of 8 percent. Country B has a nominal rate of 6 percent and expected inflation of 1 percent. Where does financial capital tend to flow, and what happens to that country\'s currency?',
    options: ['Into B, and B\'s currency appreciates', 'Into A, and A\'s currency appreciates', 'Into B, and B\'s currency depreciates', 'Into A, and B\'s currency appreciates'],
    correctIndex: 0,
    explanation: 'Real rates are 10 − 8 = 2 percent in A and 6 − 1 = 5 percent in B, so capital flows to B despite its lower nominal rate. Investors need B\'s currency to buy its assets, so the currency appreciates.',
  },
  {
    id: 'moe-ent-3b', partNumber: 3, partTitle: 'Real Interest Rates and International Capital Flows',
    question: 'Japanese investors move funds into U.S. bonds because the U.S. real interest rate has risen relative to Japan\'s. What happens in Japan?',
    options: ['Japan\'s demand for loanable funds falls, and the yen depreciates', 'Japan\'s supply of loanable funds falls, and the yen depreciates', 'Japan\'s supply of loanable funds rises, and the yen appreciates', 'Japan\'s supply of loanable funds falls, and the yen appreciates'],
    correctIndex: 1,
    explanation: 'Japanese saving that leaves the country shifts Japan\'s supply of loanable funds left, pushing its real rate up somewhat. The investors sell yen to buy dollars, so the supply of yen rises and the yen depreciates.',
  },
  {
    id: 'moe-ent-4a', partNumber: 4, partTitle: 'Linked Graphs: Tracing Shocks Through Four Markets',
    question: 'The euro area\'s real interest rate rises relative to the U.S. rate, while U.S. policy is unchanged. What happens in the U.S. loanable funds market and to the dollar?',
    options: ['U.S. loanable funds demand rises, and the dollar appreciates', 'U.S. loanable funds supply rises, and the dollar depreciates', 'U.S. loanable funds supply falls, and the dollar depreciates', 'U.S. loanable funds supply falls, and the dollar appreciates'],
    correctIndex: 2,
    explanation: 'Funds flow out of the United States toward the higher euro-area return, so U.S. loanable funds supply shifts left. Americans sell dollars to buy euros, so the supply of dollars rises and the dollar depreciates.',
  },
  {
    id: 'moe-ent-4b', partNumber: 4, partTitle: 'Linked Graphs: Tracing Shocks Through Four Markets',
    question: 'U.S. households decide to save a larger share of their incomes. What happens to the quantity of U.S. investment, the dollar and U.S. net exports?',
    options: ['Investment rises, the dollar appreciates, net exports fall', 'Investment rises, the dollar depreciates, net exports fall', 'Investment falls, the dollar appreciates, net exports fall', 'Investment rises, the dollar depreciates, net exports rise'],
    correctIndex: 3,
    explanation: 'More saving shifts loanable funds supply right, lowering the real rate, so firms move along demand and invest more. The lower relative rate sends capital abroad, the dollar depreciates, and net exports rise.',
  },
  {
    id: 'moe-ent-5a', partNumber: 5, partTitle: 'Nuance and Misconceptions',
    question: 'Sudland\'s central bank cuts its nominal interest rate from 6 percent to 3 percent, and expected inflation stays at 2 percent. What is Sudland\'s real interest rate now, and what happens to its currency?',
    options: ['1 percent, and its currency depreciates', '3 percent, and its currency depreciates', '1 percent, and its currency appreciates', '5 percent, and its currency appreciates'],
    correctIndex: 0,
    explanation: 'The real rate is 3 − 2 = 1 percent, down from 4 percent, because expectations adjust slowly. The lower relative real rate causes a capital outflow, so Sudland\'s currency depreciates.',
  },
  {
    id: 'moe-ent-5b', partNumber: 5, partTitle: 'Nuance and Misconceptions',
    question: 'The U.S. dollar appreciates sharply against the euro. Which group gains from the change?',
    options: ['U.S. firms that export machinery to Europe', 'U.S. tourists who are traveling in Europe', 'U.S. firms that compete with European imports', 'European tourists who are visiting the U.S.'],
    correctIndex: 1,
    explanation: 'A stronger dollar buys more euros, so hotels and meals in Europe cost U.S. tourists fewer dollars. U.S. exporters and import-competing firms lose sales, and the U.S. becomes more expensive for European visitors.',
  },
  {
    id: 'moe-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'Country Q\'s currency is the quill. Its loanable funds market (billions of quills):\n\n| Real interest rate | Quantity supplied | Quantity demanded |\n|---|---|---|\n| 2% | 300 | 700 |\n| 3% | 400 | 600 |\n| 4% | 500 | 500 |\n| 5% | 600 | 400 |\n| 6% | 700 | 300 |\n\nGovernment borrowing raises the quantity demanded by 200 at every rate. What are the new real interest rate and quantity lent, and what happens to the quill?',
    options: ['6% and 700, with the quill appreciating', '5% and 600, with the quill depreciating', '5% and 600, with the quill appreciating', '4% and 700, with the quill appreciating'],
    correctIndex: 2,
    explanation: 'The new demand column is 900, 800, 700, 600 and 500, which equals supply at 5 percent with 600 lent. The higher real rate attracts foreign capital, raising demand for quills, so the quill appreciates.',
  },
  {
    id: 'moe-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'The United States has an inflationary gap, and the Federal Reserve, which operates with ample reserves, raises the interest rate on reserve balances. In the short run, what happens to the real interest rate and to net exports?',
    options: ['The real rate is unchanged, and net exports are unchanged', 'The real rate rises, and net exports rise, offsetting the policy', 'The real rate falls, and net exports rise, offsetting the policy', 'The real rate rises, and net exports fall, reinforcing the policy'],
    correctIndex: 3,
    explanation: 'Expected inflation adjusts slowly, so the higher nominal rate raises the real rate too. Capital flows in, the dollar appreciates and net exports fall, which pushes AD further left and strengthens the policy.',
  },
  {
    id: 'moe-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'The U.S. nominal interest rate is 5 percent with expected inflation of 1 percent. Mexico\'s nominal rate is 10 percent with expected inflation of 8 percent. How far apart are the two real rates, and which way does financial capital tend to flow?',
    options: ['2 points, with capital flowing into the U.S.', '5 points, with capital flowing into Mexico', '2 points, with capital flowing into Mexico', '4 points, with capital flowing into Mexico'],
    correctIndex: 0,
    explanation: 'The U.S. real rate is 5 − 1 = 4 percent and Mexico\'s is 10 − 8 = 2 percent, a gap of 2 points. Capital chases the higher real return, so it flows into the United States despite Mexico\'s higher nominal rate.',
  },
  {
    id: 'moe-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A country\'s government budget moves from balance into a large surplus. What happens in that country?',
    options: ['The real rate rises, the currency appreciates, net exports fall', 'The real rate falls, the currency depreciates, net exports rise', 'The real rate falls, the currency appreciates, net exports fall', 'The real rate rises, the currency depreciates, net exports rise'],
    correctIndex: 1,
    explanation: 'A surplus adds public saving, shifting loanable funds supply right and lowering the real rate. The lower relative rate sends capital abroad, so the currency depreciates and net exports rise.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'The Loanable Funds Market in Depth' },
    { partNumber: 3, partTitle: 'Real Interest Rates and International Capital Flows' },
    { partNumber: 4, partTitle: 'Linked Graphs: Tracing Shocks Through Four Markets' },
    { partNumber: 5, partTitle: 'Nuance and Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
