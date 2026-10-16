/**
 * Entrance Quiz — Elasticity (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mel-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The price of good B rises 10 percent, and the quantity demanded of good A falls 5 percent. What is the cross-price elasticity, and how are the goods related?',
    options: ['−0.5, so they are complements', '0.5, so they are substitutes', '−2.0, so they are complements', '−0.5, so A is an inferior good'],
    correctIndex: 0,
    explanation: 'Cross-price elasticity is −5% ÷ 10% = −0.5, and its sign is kept. A negative value means a higher price for B lowers demand for A, so the goods are complements.',
  },
  {
    id: 'mel-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which of the following most likely has the most price-elastic demand?',
    options: ['Insulin for a person with diabetes', 'One brand of bottled water', 'Gasoline over the coming week', 'Salt bought for home cooking'],
    correctIndex: 1,
    explanation: 'A single brand in a narrowly defined market has many close substitutes, so buyers switch easily when its price rises. Insulin is a necessity with no substitute, gasoline is hard to replace in the short run, and salt takes a tiny share of the budget.',
  },
  {
    id: 'mel-ent-2a', partNumber: 2, partTitle: 'Calculating Price Elasticity of Demand',
    question: 'Using the midpoint method, the price of a scarf rises from \\$6 to \\$10, and quantity demanded falls from 140 to 60. What is the price elasticity of demand?',
    options: ['0.6, so demand is inelastic', '0.9, so demand is inelastic', '1.6, so demand is elastic', '1.0, so demand is unit elastic'],
    correctIndex: 2,
    explanation: 'Quantity changes by −80 ÷ 100 = −80 percent and price by 4 ÷ 8 = 50 percent, so PED = 80 ÷ 50 = 1.6, which is elastic. The 0.9 figure comes from using starting values instead of midpoints, and 0.6 flips the ratio.',
  },
  {
    id: 'mel-ent-2b', partNumber: 2, partTitle: 'Calculating Price Elasticity of Demand',
    question: 'Demand for a product is $Q_d = 120 - 8P$. At which of these prices is demand inelastic?',
    options: ['\\$10.00', '\\$7.50', '\\$12.50', '\\$5.00'],
    correctIndex: 3,
    explanation: 'The price intercept is \\$15, so the midpoint of the straight line is at \\$7.50, where demand is unit elastic. Prices below the midpoint, such as \\$5.00, lie in the inelastic range; higher prices are elastic.',
  },
  {
    id: 'mel-ent-3a', partNumber: 3, partTitle: 'Elasticity and Total Revenue',
    question: 'A food truck faces demand $Q_d = 300 - 15P$. At what price is total revenue as large as possible, and what is that revenue?',
    options: ['\\$10, earning \\$1,500', '\\$8, earning \\$1,440', '\\$6, earning \\$1,260', '\\$5, earning \\$1,125'],
    correctIndex: 0,
    explanation: 'The price intercept is \\$20, so the unit-elastic midpoint is at \\$10, where 150 meals sell for \\$1,500. Moving the price either way from the midpoint lowers total revenue.',
  },
  {
    id: 'mel-ent-3b', partNumber: 3, partTitle: 'Elasticity and Total Revenue',
    question: 'Demand for wheat is price inelastic. Ideal weather produces a bumper harvest that shifts the supply of wheat to the right. What happens to farmers\' total revenue?',
    options: ['It rises, since farmers sell more bushels than before', 'It falls, since price drops more in percentage terms', 'It rises, since the lower price draws many more buyers', 'It stays the same, since only the supply curve has moved'],
    correctIndex: 1,
    explanation: 'With inelastic demand, the percentage fall in price is larger than the percentage rise in quantity sold. Price and total revenue move in the same direction, so revenue falls.',
  },
  {
    id: 'mel-ent-4a', partNumber: 4, partTitle: 'Price Elasticity of Supply',
    question: 'A supply curve is $Q_s = -40 + 20P$. What is the price elasticity of supply at a price of \\$6?',
    options: ['0.7', '1.0', '1.5', '3.0'],
    correctIndex: 2,
    explanation: 'At \\$6, quantity supplied is 80. PES = (ΔQ ÷ ΔP) × (P ÷ Q) = 20 × 6 ÷ 80 = 1.5, which fits the rule that a straight supply line meeting the price axis is elastic everywhere.',
  },
  {
    id: 'mel-ent-4b', partNumber: 4, partTitle: 'Price Elasticity of Supply',
    question: 'A health trend raises demand for avocados, and new trees take years to bear fruit. Compared with the effect this season, what happens once new orchards are producing?',
    options: ['A big price rise and a smaller quantity rise', 'The same price rise and the same quantity rise', 'A price below its level before the trend', 'A smaller price rise and a larger quantity rise'],
    correctIndex: 3,
    explanation: 'Supply is far more elastic in the long run, once growers can plant and harvest new trees. The same demand increase then shows up mostly as more output and only a small rise in price.',
  },
  {
    id: 'mel-ent-5a', partNumber: 5, partTitle: 'Cross-Price and Income Elasticity with Data',
    question: 'Average income rises 4 percent. The quantity demanded of good X rises 10 percent, and the quantity demanded of good Y falls 2 percent. How should the goods be classified?',
    options: ['X is a luxury and Y is inferior', 'X is a necessity and Y is inferior', 'X is a luxury and Y is a necessity', 'X is inferior and Y is a necessity'],
    correctIndex: 0,
    explanation: 'X has an income elasticity of 10 ÷ 4 = 2.5, above 1, so it is a normal good and a luxury. Y has an income elasticity of −2 ÷ 4 = −0.5, and a negative value means an inferior good.',
  },
  {
    id: 'mel-ent-5b', partNumber: 5, partTitle: 'Cross-Price and Income Elasticity with Data',
    question: 'The cross-price elasticity of hot dog buns with respect to the price of hot dogs is −0.6. If the price of hot dogs falls 10 percent, what happens to the quantity of buns demanded?',
    options: ['It falls 6 percent', 'It rises 6 percent', 'It rises 16.7 percent', 'It falls 16.7 percent'],
    correctIndex: 1,
    explanation: 'The change is −0.6 × (−10%) = +6 percent: cheaper hot dogs mean more hot dog meals and more buns. Dividing by the elasticity instead of multiplying gives the 16.7 percent error.',
  },
  {
    id: 'mel-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A bakery raises the price of a loaf from \\$5.00 to \\$6.00, and daily sales fall from 400 to 360 loaves. How does total revenue change, and what does that show about demand?',
    options: ['Up \\$160, so demand is elastic', 'Down \\$40, so demand is elastic', 'Up \\$160, so demand is inelastic', 'Down \\$160, so demand is inelastic'],
    correctIndex: 2,
    explanation: 'Revenue rises from \\$2,000 to \\$2,160, an increase of \\$160. Price and revenue moved in the same direction because quantity fell 10 percent while price rose 20 percent, so demand is inelastic (PED = 0.5).',
  },
  {
    id: 'mel-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'An arena has exactly 3,000 seats for Saturday\'s game, and demand for tickets is $Q_d = 9{,}000 - 60P$. What ticket price exactly sells out the arena, and is demand elastic, inelastic or unit elastic at that price?',
    options: ['\\$100, where demand is inelastic', '\\$75, where demand is unit elastic', '\\$150, where demand is elastic', '\\$100, where demand is elastic'],
    correctIndex: 3,
    explanation: 'Setting 3,000 = 9,000 − 60P gives P = \\$100. The demand line runs from \\$150 to 9,000 tickets, so its midpoint is \\$75; \\$100 lies above the midpoint, in the elastic range.',
  },
  {
    id: 'mel-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'The price of gasoline rises 20 percent. Purchases of large SUVs fall 10 percent, and bus ridership rises 6 percent. How are SUVs and bus rides related to gasoline?',
    options: ['Complements for SUVs, substitutes for bus rides', 'Substitutes for SUVs, complements for buses', 'Substitutes for both SUVs and bus rides', 'Inferior goods for SUVs, normal for buses'],
    correctIndex: 0,
    explanation: 'The cross-price elasticity for SUVs is −10 ÷ 20 = −0.5, so SUVs are complements of gasoline; for buses it is +6 ÷ 20 = +0.3, so bus rides are substitutes. Normal and inferior come from income elasticity, not cross-price elasticity.',
  },
  {
    id: 'mel-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which statement about elasticity is correct?',
    options: ['A flat-looking straight demand line is elastic at every price', 'A straight supply line through the origin is unit elastic', 'Supply gets less elastic as producers have more time to adjust', 'A positive cross-price elasticity means the goods are complements'],
    correctIndex: 1,
    explanation: 'Along a straight supply line from the origin, the percentage changes in price and quantity are always equal, so PES is 1 at every point. Every straight demand line has an elastic and an inelastic range, supply grows more elastic with time, and a positive cross-price elasticity means substitutes.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Calculating Price Elasticity of Demand' },
    { partNumber: 3, partTitle: 'Elasticity and Total Revenue' },
    { partNumber: 4, partTitle: 'Price Elasticity of Supply' },
    { partNumber: 5, partTitle: 'Cross-Price and Income Elasticity with Data' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
