/**
 * Entrance Quiz — Money & Banking (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mmb-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'During a period of very high inflation, workers rush to spend each paycheck on the day they receive it. Which function of money is failing most?',
    options: ['Store of value', 'Medium of exchange', 'Unit of account', 'Means of borrowing'],
    correctIndex: 0,
    explanation: 'Money held for even a few days loses purchasing power, so it no longer works as a store of value. Workers still use it to buy things, so it remains a medium of exchange.',
  },
  {
    id: 'mmb-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The required reserve ratio is 10 percent, and banks lend all excess reserves. A family deposits \\$2,000 of cash it had kept at home. What is the maximum change in the money supply?',
    options: ['\\$20,000', '\\$2,000', '\\$18,000', '\\$1,800'],
    correctIndex: 2,
    explanation: 'The bank keeps \\$200 and has \\$1,800 of excess reserves, which can support \\$1,800 × 10 = \\$18,000 of new loans. The cash was already money, so the deposit itself adds nothing; only the loans are new money.',
  },
  {
    id: 'mmb-ent-2a', partNumber: 2, partTitle: 'Financial Assets: Money, Bonds and Stocks',
    question: 'An investor owns a bond that will pay \\$1,060 one year from now. It was priced at \\$1,000 when market interest rates were 6 percent. If market rates on similar bonds rise to 8 percent, what happens to the bond\'s price?',
    options: ['It rises to about \\$1,019', 'It falls to about \\$981', 'It stays at \\$1,000', 'It falls to about \\$975'],
    correctIndex: 1,
    explanation: 'A buyer will now pay only the amount that earns 8 percent: \\$1,060 ÷ 1.08 ≈ \\$981. Bond prices and interest rates move in opposite directions because the bond\'s payment is fixed.',
  },
  {
    id: 'mmb-ent-2b', partNumber: 2, partTitle: 'Financial Assets: Money, Bonds and Stocks',
    question: 'Nominal interest rates on bonds rise sharply. How do households change the way they hold their wealth?',
    options: ['They hold more money, since cash now earns a higher return', 'They hold more money, since bond prices rise with interest rates', 'They hold less money, since money becomes less liquid', 'They hold less money, since holding it costs more forgone interest'],
    correctIndex: 3,
    explanation: 'The nominal interest rate is the opportunity cost of holding money, which earns little or nothing. When rates rise, holding cash gives up more interest, so households shift toward bonds.',
  },
  {
    id: 'mmb-ent-3a', partNumber: 3, partTitle: 'What Counts as Money',
    question: 'Which transaction raises M1 but leaves M2 unchanged?',
    options: ['Cashing in a \\$2,000 CD and putting it into checking', 'Depositing \\$2,000 of cash into a checking account', 'Moving \\$2,000 from checking into a one-year CD', 'Charging a \\$2,000 purchase on a credit card'],
    correctIndex: 0,
    explanation: 'A small CD is in M2 but not M1, so moving it into checking adds to M1, while M2, which contains both, is unchanged. A cash deposit stays within M1, moving into a CD lowers M1, and a credit card purchase creates a loan, not money.',
  },
  {
    id: 'mmb-ent-3b', partNumber: 3, partTitle: 'What Counts as Money',
    question: 'Maya has \\$50 in her wallet, \\$900 in a checking account, a \\$3,000 one-year CD, \\$10,000 of stock and a credit card with a \\$5,000 limit. How much of her holdings count in M1 and in M2?',
    options: ['M1 \\$950 and M2 \\$3,000', 'M1 \\$5,950 and M2 \\$8,950', 'M1 \\$950 and M2 \\$3,950', 'M1 \\$3,950 and M2 \\$13,950'],
    correctIndex: 2,
    explanation: 'M1 counts currency and checking deposits, \\$950. M2 adds the small CD, for \\$3,950. Stock is a financial asset that is not a means of payment, and a credit card limit is a way to borrow.',
  },
  {
    id: 'mmb-ent-4a', partNumber: 4, partTitle: 'Bank Balance Sheets (T-Accounts)',
    question: 'A bank has demand deposits of \\$500,000 and reserves of \\$80,000, and the required reserve ratio is 10 percent. A customer then deposits \\$10,000 of cash. What is the largest new loan this bank can now make?',
    options: ['\\$40,000', '\\$39,000', '\\$390,000', '\\$30,000'],
    correctIndex: 1,
    explanation: 'Reserves become \\$90,000 and deposits \\$510,000, so required reserves are \\$51,000 and excess reserves are \\$39,000. A single bank can lend only its excess reserves; \\$390,000 applies the multiplier, which only the whole system can do.',
  },
  {
    id: 'mmb-ent-4b', partNumber: 4, partTitle: 'Bank Balance Sheets (T-Accounts)',
    question: 'The Federal Reserve buys \\$20,000 of government bonds directly from a commercial bank. How does the bank\'s T-account change?',
    options: ['Deposits rise and loans fall, with reserves unchanged', 'Reserves and deposits both rise by the same amount', 'Loans rise and securities fall, with reserves unchanged', 'Securities fall and reserves rise, with deposits unchanged'],
    correctIndex: 3,
    explanation: 'The bank swaps one asset for another: it gives up \\$20,000 of bonds and receives \\$20,000 of reserves. No customer deposit is created, so all \\$20,000 becomes excess reserves.',
  },
  {
    id: 'mmb-ent-5a', partNumber: 5, partTitle: 'Money Creation by the Banking System',
    question: 'The required reserve ratio is 20 percent, and banks lend all excess reserves. The Fed buys \\$200 million of bonds from the public, and the sellers deposit the payments. What are the maximum changes in loans and in the money supply?',
    options: ['\\$800 million and \\$1,000 million', '\\$1,000 million and \\$1,000 million', '\\$800 million and \\$800 million', '\\$160 million and \\$200 million'],
    correctIndex: 0,
    explanation: 'The deposits create \\$160 million of excess reserves, which support \\$160 × 5 = \\$800 million of loans. The \\$200 million deposit is itself new money, so the money supply can rise by \\$1,000 million.',
  },
  {
    id: 'mmb-ent-5b', partNumber: 5, partTitle: 'Money Creation by the Banking System',
    question: 'Which situation makes the actual expansion of the money supply smaller than the simple money multiplier predicts?',
    options: ['Banks lend all of their excess reserves at every round', 'The Fed lowers the required reserve ratio for banks', 'Borrowers keep part of their loans as cash', 'Every loan is redeposited in full in another bank'],
    correctIndex: 2,
    explanation: 'Cash held outside banks is not redeposited, so it cannot support further lending. The simple multiplier assumes full lending and full redeposit, and a lower reserve ratio would make the multiplier larger.',
  },
  {
    id: 'mmb-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A bank has reserves of \\$120,000 and demand deposits of \\$800,000, and the required reserve ratio is 10 percent. What is the most this bank can lend, and what is the maximum resulting change in the money supply across the banking system?',
    options: ['\\$120,000 and \\$1,200,000', '\\$40,000 and \\$400,000', '\\$40,000 and \\$440,000', '\\$400,000 and \\$400,000'],
    correctIndex: 1,
    explanation: 'Required reserves are 0.10 × \\$800,000 = \\$80,000, so excess reserves are \\$40,000, the most this bank can lend. Across the system that lending can grow to \\$40,000 × 10 = \\$400,000.',
  },
  {
    id: 'mmb-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'The Federal Reserve operates with ample reserves and wants interest rates throughout the economy to fall. What should it do with its main tool?',
    options: ['Raise the interest rate paid on reserve balances', 'Sell government bonds to commercial banks', 'Raise the required reserve ratio to 10 percent', 'Lower the interest rate paid on reserve balances'],
    correctIndex: 3,
    explanation: 'Under ample reserves, the Fed\'s main tool is the interest rate on reserve balances; lowering it pulls the federal funds rate and other rates down. Selling bonds and raising the reserve requirement are contractionary.',
  },
  {
    id: 'mmb-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'The required reserve ratio is 20 percent, and banks lend all excess reserves. A shop owner deposits \\$6,000 of cash that had been kept in a safe. What are the maximum changes in demand deposits and in the money supply?',
    options: ['\\$30,000 and \\$24,000', '\\$24,000 and \\$24,000', '\\$30,000 and \\$30,000', '\\$24,000 and \\$30,000'],
    correctIndex: 0,
    explanation: 'Deposits can grow to \\$6,000 × 5 = \\$30,000, counting the original deposit. The cash was already money, so the money supply rises only by the new loans: \\$4,800 of excess reserves × 5 = \\$24,000.',
  },
  {
    id: 'mmb-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which statement about money and banking is correct?',
    options: ['A credit card balance is counted as part of the M1 money supply', 'A single bank can lend its excess reserves times the multiplier', 'Rising interest rates lower the price of bonds already held', 'Depositing cash in checking raises M1 by the amount deposited'],
    correctIndex: 2,
    explanation: 'An existing bond pays a fixed amount, so when rates rise its price must fall to offer buyers the new rate. Credit cards are loans, a single bank lends only its excess reserves, and a cash deposit leaves M1 unchanged.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Financial Assets: Money, Bonds and Stocks' },
    { partNumber: 3, partTitle: 'What Counts as Money' },
    { partNumber: 4, partTitle: 'Bank Balance Sheets (T-Accounts)' },
    { partNumber: 5, partTitle: 'Money Creation by the Banking System' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
