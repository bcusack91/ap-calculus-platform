/**
 * Entrance Quiz — Percents, Discounts and Interest (ASVAB Arithmetic Reasoning) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Percents on the AR Subtest
  {
    id: 'ar-percents-interest-ent-1a',
    question: 'A \\$90 helmet is on sale for 10% off. What is the sale price?',
    options: ['\\$9', '\\$99', '\\$81', '\\$80'],
    correctIndex: 2,
    explanation: '10% of 90 is 9 (move the decimal point), so the sale price is $90 - 9 = 81$, or \\$81. \\$9 is the discount, not the price you pay. \\$99 adds the discount, and \\$80 takes off \\$10 instead of 10%.',
    partNumber: 1,
    partTitle: 'Percents on the AR Subtest',
  },
  {
    id: 'ar-percents-interest-ent-1b',
    question: 'Which expression gives 30% of 70?',
    options: ['$70 \\div 0.30$', '$30 \\times 70$', '$70 \\div 30$', '$0.30 \\times 70$'],
    correctIndex: 3,
    explanation: '"Of" means multiply, and 30% as a decimal is 0.30, so 30% of 70 is $0.30 \\times 70 = 21$. Dividing by 0.30 finds the whole when 70 is the part, and $30 \\times 70$ forgets to turn the percent into a decimal.',
    partNumber: 1,
    partTitle: 'Percents on the AR Subtest',
  },
  // Part 2 — Percent of a Number and Mental-Math Shortcuts
  {
    id: 'ar-percents-interest-ent-2a',
    question: 'A team won 45 of the 60 games it played. What percent of its games did it win?',
    options: ['75%', '15%', '25%', '45%'],
    correctIndex: 0,
    explanation: 'Part ÷ whole: $\\frac{45}{60} = \\frac{3}{4} = 75\\%$. 25% is the share of games lost. 15% is the number of losses with a percent sign, and 45% just labels the wins as a percent.',
    partNumber: 2,
    partTitle: 'Percent of a Number and Mental-Math Shortcuts',
  },
  {
    id: 'ar-percents-interest-ent-2b',
    question: 'Eighteen recruits, which is 40% of a training class, earned an expert marksmanship badge. How many recruits are in the class?',
    options: ['7.2', '45', '720', '58'],
    correctIndex: 1,
    explanation: 'Find the whole: $18 = 0.40 \\times w$, so $w = 18 \\div 0.4 = 45$. Check: 10% of 45 is 4.5, and $4 \\times 4.5 = 18$. The answer 7.2 is 40% of 18, which takes the percent of the part. 720 multiplies 18 by 40, and 58 adds them.',
    partNumber: 2,
    partTitle: 'Percent of a Number and Mental-Math Shortcuts',
  },
  // Part 3 — Percent Change, Discounts and Depreciation
  {
    id: 'ar-percents-interest-ent-3a',
    question: 'The price of a phone case dropped from \\$50 to \\$40. By what percent did the price decrease?',
    options: ['25%', '10%', '20%', '80%'],
    correctIndex: 2,
    explanation: 'Change ÷ original: $\\frac{50 - 40}{50} = \\frac{10}{50} = 20\\%$. 25% divides the change by the new price (\\$40) instead of the original. 10% is the dollar change written as a percent, and 80% is the new price as a percent of the old one.',
    partNumber: 3,
    partTitle: 'Percent Change, Discounts and Depreciation',
  },
  {
    id: 'ar-percents-interest-ent-3b',
    question: 'A \\$40 duffel bag is marked down 15%. What is the sale price?',
    options: ['\\$34', '\\$6', '\\$46', '\\$25'],
    correctIndex: 0,
    explanation: '10% of 40 is 4 and 5% is 2, so the discount is \\$6 and the sale price is $40 - 6 = 34$, or \\$34. \\$6 is the discount itself. \\$46 adds the discount, and \\$25 subtracts 15 dollars instead of 15%.',
    partNumber: 3,
    partTitle: 'Percent Change, Discounts and Depreciation',
  },
  // Part 4 — Sales Tax, Tips and Commission
  {
    id: 'ar-percents-interest-ent-4a',
    question: 'A lunch bill is \\$28. How much is a 15% tip?',
    options: ['\\$2.80', '\\$32.20', '\\$1.40', '\\$4.20'],
    correctIndex: 3,
    explanation: '10% of 28 is 2.80 and 5% is half of that, 1.40, so the tip is $2.80 + 1.40 = 4.20$, or \\$4.20. \\$2.80 is only 10%, and \\$1.40 is only 5%. \\$32.20 is the bill plus the tip, but the question asks for the tip alone.',
    partNumber: 4,
    partTitle: 'Sales Tax, Tips and Commission',
  },
  {
    id: 'ar-percents-interest-ent-4b',
    question: 'A salesperson earns a 7% commission. She sold \\$2,000 worth of appliances this week. What is her commission?',
    options: ['\\$1,400', '\\$140', '\\$2,140', '\\$14'],
    correctIndex: 1,
    explanation: '1% of 2,000 is 20, so 7% is $7 \\times 20 = 140$, or \\$140. \\$1,400 uses 7% as 0.7, and \\$14 uses it as 0.007. \\$2,140 adds the commission to the sales, which answers a different question.',
    partNumber: 4,
    partTitle: 'Sales Tax, Tips and Commission',
  },
  // Part 5 — Simple Interest
  {
    id: 'ar-percents-interest-ent-5a',
    question: 'How much simple interest does \\$1,000 earn in 3 years at 4% per year?',
    options: ['\\$40', '\\$1,120', '\\$120', '\\$12,000'],
    correctIndex: 2,
    explanation: 'One year: 4% of 1,000 is 40. Three years: $40 \\times 3 = 120$, so \\$120. \\$40 is one year only. \\$1,120 is the balance, not the interest, and \\$12,000 uses the rate as 4 instead of 0.04.',
    partNumber: 5,
    partTitle: 'Simple Interest',
  },
  {
    id: 'ar-percents-interest-ent-5b',
    question: 'Ana borrows \\$2,000 at 3% simple interest for 6 months. How much does she owe in all at the end of the 6 months?',
    options: ['\\$2,030', '\\$2,360', '\\$30', '\\$2,060'],
    correctIndex: 0,
    explanation: 'One year: 3% of 2,000 is 60. Six months is half a year, so the interest is 30, and she owes $2{,}000 + 30 = 2{,}030$, or \\$2,030. \\$2,360 treats 6 months as 6 years, \\$2,060 charges a full year, and \\$30 is the interest alone.',
    partNumber: 5,
    partTitle: 'Simple Interest',
  },
  // Part 6 — Test Strategy and Common Traps
  {
    id: 'ar-percents-interest-ent-6a',
    question: 'A price is cut by 10%, and then the new price is cut by another 10%. What is the total percent decrease from the original price?',
    options: ['20%', '19%', '10%', '21%'],
    correctIndex: 1,
    explanation: 'Try a \\$100 price: after 10% off it is \\$90, and 10% of 90 is 9, so it ends at \\$81. That is \\$19 off \\$100, a 19% decrease. 20% adds the two percents, which is the trap. 10% ignores the second cut, and 21% is the result for two 10% increases.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  {
    id: 'ar-percents-interest-ent-6b',
    question: 'After a 20% discount, a floor lamp costs \\$52. What was the original price?',
    options: ['\\$62.40', '\\$72.00', '\\$65.00', '\\$41.60'],
    correctIndex: 2,
    explanation: 'The sale price is 80% of the original: $52 \\div 0.8 = 520 \\div 8 = 65$, so \\$65.00. Check: 20% of 65 is 13, and $65 - 13 = 52$. \\$62.40 adds 20% of \\$52 back on, but the discount was 20% of the original. \\$72.00 adds \\$20, and \\$41.60 takes another 20% off.',
    partNumber: 6,
    partTitle: 'Test Strategy and Common Traps',
  },
  // Part 7 — Mixed Mastery Set
  {
    id: 'ar-percents-interest-ent-7a',
    question: 'An office copier bought for \\$2,500 loses 20% of its value in its first year. What is it worth after one year?',
    options: ['\\$500', '\\$2,480', '\\$3,000', '\\$2,000'],
    correctIndex: 3,
    explanation: '20% is one fifth: $2{,}500 \\div 5 = 500$ lost, so it is worth $2{,}500 - 500 = 2{,}000$, or \\$2,000. \\$500 is the value lost, not what it is worth. \\$2,480 subtracts \\$20 instead of 20%, and \\$3,000 adds the loss.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
  {
    id: 'ar-percents-interest-ent-7b',
    question: 'A phone-store employee earns \\$300 a week plus 10% of her sales. She sold \\$1,800 this week. What is her pay for the week?',
    options: ['\\$180', '\\$480', '\\$2,100', '\\$318'],
    correctIndex: 1,
    explanation: 'Commission: 10% of 1,800 is 180. Pay: $300 + 180 = 480$, so \\$480. \\$180 is the commission without the base pay. \\$2,100 adds the whole sales amount, and \\$318 uses 1% instead of 10%.',
    partNumber: 7,
    partTitle: 'Mixed Mastery Set',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Percents on the AR Subtest' },
    { partNumber: 2, partTitle: 'Percent of a Number and Mental-Math Shortcuts' },
    { partNumber: 3, partTitle: 'Percent Change, Discounts and Depreciation' },
    { partNumber: 4, partTitle: 'Sales Tax, Tips and Commission' },
    { partNumber: 5, partTitle: 'Simple Interest' },
    { partNumber: 6, partTitle: 'Test Strategy and Common Traps' },
    { partNumber: 7, partTitle: 'Mixed Mastery Set' },
  ]
}
