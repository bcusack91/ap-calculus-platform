/**
 * Entrance Quiz — International Trade & Finance (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mitf-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'U.S. inflation runs well above inflation in its trading partners for several years. What happens to the dollar in the foreign exchange market?',
    options: ['The dollar depreciates, since U.S. goods become relatively costly', 'The dollar appreciates, since prices of U.S. assets rise', 'The dollar appreciates, since foreigners need more dollars per good', 'The dollar is unchanged, since inflation affects only domestic prices'],
    correctIndex: 0,
    explanation: 'Higher relative U.S. prices make U.S. goods less attractive abroad and foreign goods more attractive at home. Demand for dollars falls and supply rises, so the dollar depreciates.',
  },
  {
    id: 'mitf-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A country runs a current account deficit of \\$120 billion. What is its capital and financial account balance, and what does it mean?',
    options: ['−\\$120 billion, as it buys more foreign assets than foreigners buy of its assets', '+\\$120 billion, as foreigners buy more of its assets than it buys abroad', '+\\$120 billion, as its residents buy more foreign assets than foreigners buy', '\\$0, since the capital and financial account does not record any trade flows'],
    correctIndex: 1,
    explanation: 'The two accounts sum to zero, so a \\$120 billion current account deficit comes with a \\$120 billion capital and financial account surplus. Foreigners use the dollars they earn to buy more of the country\'s assets than its residents buy abroad.',
  },
  {
    id: 'mitf-ent-2a', partNumber: 2, partTitle: 'Balance of Payments Accounts in Depth',
    question: 'Which transaction is a credit in the U.S. current account?',
    options: ['A U.S. firm pays interest to a Canadian bondholder', 'A Saudi investor buys an office tower in New York', 'A Brazilian student pays U.S. college tuition', 'A U.S. tourist pays the bill for a hotel room in Rome'],
    correctIndex: 2,
    explanation: 'Tuition paid by a foreign student is a U.S. export of services, so money flows in through the current account. Interest paid abroad and a tourist\'s hotel bill are current account debits, and the office tower purchase is a capital and financial account credit.',
  },
  {
    id: 'mitf-ent-2b', partNumber: 2, partTitle: 'Balance of Payments Accounts in Depth',
    question: 'A country\'s transactions for a year, in billions of dollars:\n\n| Item | Amount |\n|---|---|\n| Exports of goods | 300 |\n| Imports of goods | 380 |\n| Exports of services | 120 |\n| Imports of services | 60 |\n| Investment income received | 50 |\n| Investment income paid | 70 |\n| Net transfers | −10 |\n| Residents\' purchases of foreign assets | 100 |\n\nWhat is the current account balance, and how much of the country\'s assets did foreigners buy?',
    options: ['−\\$50 billion and \\$50 billion', '−\\$20 billion and \\$120 billion', '+\\$50 billion and \\$50 billion', '−\\$50 billion and \\$150 billion'],
    correctIndex: 3,
    explanation: 'Trade in goods and services is −80 + 60 = −20, net investment income is −20 and transfers are −10, so the current account is −\\$50 billion. The capital and financial account must be +\\$50 billion = inflows − 100, so foreigners bought \\$150 billion.',
  },
  {
    id: 'mitf-ent-3a', partNumber: 3, partTitle: 'Exchange Rates and Conversion Math',
    question: 'The exchange rate moves from 80 yen per dollar to 100 yen per dollar. By what percent did the dollar appreciate, and what does a 40,000-yen Japanese camera now cost in dollars?',
    options: ['25 percent and \\$400', '20 percent and \\$400', '25 percent and \\$500', '20 percent and \\$500'],
    correctIndex: 0,
    explanation: 'The price of a dollar rose from 80 to 100 yen, (100 − 80) ÷ 80 = 25 percent. The camera costs 40,000 ÷ 100 = \\$400, down from \\$500 at the old rate.',
  },
  {
    id: 'mitf-ent-3b', partNumber: 3, partTitle: 'Exchange Rates and Conversion Math',
    question: 'The exchange rate quote moves from \\$1.20 per pound to \\$1.35 per pound. Which statement is correct?',
    options: ['12.5 percent appreciation of the dollar', '12.5 percent appreciation of the pound', '12.5 percent depreciation of the pound', '15.0 percent appreciation of the dollar'],
    correctIndex: 1,
    explanation: 'The quote is the price of a pound in dollars, and it rose by (1.35 − 1.20) ÷ 1.20 = 12.5 percent, so the pound appreciated. A pound now costs more dollars, which means the dollar depreciated.',
  },
  {
    id: 'mitf-ent-4a', partNumber: 4, partTitle: 'The Foreign Exchange Market Graph',
    question: 'The market for U.S. dollars against the euro (quantities in billions of dollars):\n\n| Euros per dollar | Quantity demanded | Quantity supplied |\n|---|---|---|\n| 0.80 | 100 | 60 |\n| 0.85 | 90 | 70 |\n| 0.90 | 80 | 80 |\n| 0.95 | 70 | 90 |\n| 1.00 | 60 | 100 |\n\nEuropeans develop a stronger taste for U.S. goods, raising the quantity of dollars demanded by \\$20 billion at every rate. What is the new equilibrium?',
    options: ['0.85 euro per dollar, with \\$90 billion traded', '0.95 euro per dollar, with \\$100 billion traded', '0.95 euro per dollar, with \\$90 billion traded', '0.90 euro per dollar, with \\$100 billion traded'],
    correctIndex: 2,
    explanation: 'The new demand column is 120, 110, 100, 90 and 80, which equals supply at 0.95 euro per dollar, where \\$90 billion is traded. The rise in demand appreciates the dollar from 0.90 to 0.95 euro.',
  },
  {
    id: 'mitf-ent-4b', partNumber: 4, partTitle: 'The Foreign Exchange Market Graph',
    question: 'Americans begin buying many more Japanese cars. What happens in the foreign exchange market for yen?',
    options: ['The supply of yen rises, and the yen depreciates', 'Demand for dollars rises, and the dollar appreciates', 'Demand for yen falls, and so the yen depreciates', 'Demand for yen rises, and the yen appreciates'],
    correctIndex: 3,
    explanation: 'Americans need yen to pay for the cars, so demand for yen rises and the yen appreciates. In the mirror market they supply more dollars, so the dollar depreciates against the yen.',
  },
  {
    id: 'mitf-ent-5a', partNumber: 5, partTitle: 'Forex Shifters and Net Exports',
    question: 'U.S. incomes rise quickly while European incomes stay flat, and U.S. real interest rates do not change. Through the import channel, what happens in the market for dollars?',
    options: ['Supply of dollars rises, and the dollar depreciates', 'Demand for dollars rises, and the dollar appreciates', 'Supply of dollars falls, and the dollar appreciates', 'Supply of dollars rises, and the dollar appreciates'],
    correctIndex: 0,
    explanation: 'Richer Americans buy more of everything, including European goods, so they supply more dollars to get euros. A rise in the supply of dollars depreciates the dollar.',
  },
  {
    id: 'mitf-ent-5b', partNumber: 5, partTitle: 'Forex Shifters and Net Exports',
    question: 'The exchange rate falls from 0.90 euro per dollar to 0.75 euro per dollar. What happens to the euro price of a \\$40,000 U.S. machine, and to U.S. net exports?',
    options: ['It rises to €53,333, and U.S. net exports fall', 'It falls to €30,000, and U.S. net exports rise', 'It falls to €30,000, and U.S. net exports fall', 'It stays at €36,000, and U.S. net exports rise'],
    correctIndex: 1,
    explanation: 'The machine costs 40,000 × 0.75 = €30,000, down from €36,000, so U.S. exports rise; European goods now cost more dollars, so imports fall. Net exports rise and U.S. AD shifts right.',
  },
  {
    id: 'mitf-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A Mexican company builds a factory in Texas. How is this recorded in the U.S. balance of payments, and what happens to the dollar?',
    options: ['A debit in the capital and financial account, and the dollar depreciates', 'A credit in the current account, and the dollar appreciates', 'A credit in the capital and financial account, and the dollar appreciates', 'A debit in the current account, and the dollar appreciates'],
    correctIndex: 2,
    explanation: 'Buying a real asset in the United States is foreign direct investment, a capital inflow and a credit in the capital and financial account. The company needs dollars to build it, so demand for dollars rises and the dollar appreciates.',
  },
  {
    id: 'mitf-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A country has exports of goods and services of \\$220 billion, imports of goods and services of \\$260 billion, net investment income of \\$15 billion and net transfers of −\\$5 billion. Its residents bought \\$70 billion of foreign assets. How many dollars\' worth of its assets did foreigners buy?',
    options: ['\\$30 billion', '\\$40 billion', '\\$70 billion', '\\$100 billion'],
    correctIndex: 3,
    explanation: 'The current account is −40 + 15 − 5 = −\\$30 billion, so the capital and financial account is +\\$30 billion. Inflows minus the \\$70 billion of outflows must equal 30, so foreigners bought \\$100 billion.',
  },
  {
    id: 'mitf-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'The exchange rate moves from 0.80 pound per dollar to 0.70 pound per dollar. By what percent did the dollar depreciate, and what does a £42 British book now cost in dollars?',
    options: ['12.5 percent, and \\$60.00', '14.3 percent, and \\$60.00', '12.5 percent, and \\$52.50', '12.5 percent, and \\$29.40'],
    correctIndex: 0,
    explanation: 'The price of a dollar fell from 0.80 to 0.70 pound, (0.80 − 0.70) ÷ 0.80 = 12.5 percent. The book costs 42 ÷ 0.70 = \\$60.00; 14.3 percent is the pound\'s appreciation, measured on a different base.',
  },
  {
    id: 'mitf-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'South Korea\'s real interest rate rises relative to the U.S. rate. Which chain follows for the United States?',
    options: ['Korean investors buy U.S. bonds, the dollar appreciates, U.S. net exports fall', 'U.S. investors buy Korean bonds, the dollar depreciates, U.S. net exports rise', 'U.S. investors buy Korean bonds, the dollar appreciates, U.S. net exports fall', 'Korean investors buy U.S. bonds, the dollar depreciates, U.S. net exports rise'],
    correctIndex: 1,
    explanation: 'U.S. savers chase the higher Korean return, a capital outflow recorded as a U.S. debit. They supply dollars to get won, so the dollar depreciates, U.S. goods get cheaper for Koreans, and U.S. net exports rise.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Balance of Payments Accounts in Depth' },
    { partNumber: 3, partTitle: 'Exchange Rates and Conversion Math' },
    { partNumber: 4, partTitle: 'The Foreign Exchange Market Graph' },
    { partNumber: 5, partTitle: 'Forex Shifters and Net Exports' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
