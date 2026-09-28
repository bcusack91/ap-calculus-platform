/**
 * Entrance Quiz — Ratios, Proportions & Percentages (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'srp-ent-1a', question: 'In a class of 30 students, the ratio of boys to girls is 2:3. How many girls are in the class?', options: ['12', '15', '18', '20'], correctIndex: 2, explanation: 'Total parts $= 2 + 3 = 5$, so each part is $30/5 = 6$ students. Girls $= 3 \\times 6 = 18$. (12 is the number of boys.)', partNumber: 1, partTitle: 'Ratios and Rates' },
  { id: 'srp-ent-1b', question: 'A car travels 150 miles in 3 hours. At the same rate, how many miles will it travel in 5 hours?', options: ['200', '225', '250', '275'], correctIndex: 2, explanation: 'Unit rate $= 150/3 = 50$ miles per hour, so in 5 hours the car travels $50 \\times 5 = 250$ miles.', partNumber: 1, partTitle: 'Ratios and Rates' },
  { id: 'srp-ent-2a', question: '18 is what percent of 72?', options: ['4%', '18%', '25%', '40%'], correctIndex: 2, explanation: 'Part over whole: $18/72 = 0.25 = 25\\%$. (4 is $72/18$, the ratio flipped.)', partNumber: 2, partTitle: 'Percentages' },
  { id: 'srp-ent-2b', question: 'A store marks up an item by 40% and then puts it on a 20% off sale. What is the net percent change from the original price?', options: ['12% increase', '20% increase', '12% decrease', '8% increase'], correctIndex: 0, explanation: 'Use multipliers: $1.40 \\times 0.80 = 1.12$, a 12% increase. Successive percents multiply; they do not simply add to $40 - 20 = 20$.', partNumber: 2, partTitle: 'Percentages' },
  { id: 'srp-ent-3a', question: 'If $y$ varies directly with $x$, and $y = 21$ when $x = 6$, what is $y$ when $x = 10$?', options: ['12.6', '25', '35', '42'], correctIndex: 2, explanation: 'Direct variation: $k = y/x = 21/6 = 3.5$, so $y = 3.5(10) = 35$. (12.6 treats the relation as inverse; 25 adds 4 to both values.)', partNumber: 3, partTitle: 'Direct and Inverse Variation' },
  { id: 'srp-ent-3b', question: 'Five identical pumps can drain a pool in 12 hours. At the same rate per pump, how many hours would 3 pumps take?', options: ['7.2', '14', '20', '36'], correctIndex: 2, explanation: 'Time varies inversely with the number of pumps: $5 \\times 12 = 60$ pump-hours, so $60/3 = 20$ hours. (7.2 treats it as direct variation.)', partNumber: 3, partTitle: 'Direct and Inverse Variation' },
  { id: 'srp-ent-4a', question: 'If 1 kilogram is about 2.2 pounds, approximately how many pounds is 15 kilograms?', options: ['6.8 lb', '17.2 lb', '30 lb', '33 lb'], correctIndex: 3, explanation: 'Multiply by the conversion factor: $15 \\times 2.2 = 33$ pounds. (6.8 divides instead of multiplying.)', partNumber: 4, partTitle: 'Unit Conversions' },
  { id: 'srp-ent-4b', question: 'An object moves at 30 meters per second. What is this speed in kilometers per hour? (1 kilometer = 1,000 meters)', options: ['8.3', '18', '108', '1,800'], correctIndex: 2, explanation: '$30 \\,\\tfrac{\\text{m}}{\\text{s}} \\times 3{,}600 \\,\\tfrac{\\text{s}}{\\text{h}} = 108{,}000$ m/h, and $108{,}000/1{,}000 = 108$ km/h.', partNumber: 4, partTitle: 'Unit Conversions' },
  { id: 'srp-ent-5a', question: 'A map uses a scale of 1 inch = 25 miles. Two cities are 3.6 inches apart on the map. What is the actual distance between them?', options: ['75 miles', '80 miles', '90 miles', '100 miles'], correctIndex: 2, explanation: 'Multiply map distance by the scale: $3.6 \\times 25 = 90$ miles.', partNumber: 5, partTitle: 'Scale Factors and Similar Figures' },
  { id: 'srp-ent-5b', question: 'Two similar triangles have corresponding sides of length 4 and 10. The smaller triangle has an area of 12 square units. What is the area of the larger triangle?', options: ['30', '48', '75', '187.5'], correctIndex: 2, explanation: 'Scale factor $k = 10/4 = 2.5$. Areas scale by $k^2 = 6.25$, so the larger area is $12 \\times 6.25 = 75$. (30 scales area by $k$ instead of $k^2$.)', partNumber: 5, partTitle: 'Scale Factors and Similar Figures' },
  { id: 'srp-ent-6a', question: 'How many liters of pure water must be added to 6 liters of a 40% acid solution to dilute it to a 30% acid solution?', options: ['1.8', '2', '4', '8'], correctIndex: 1, explanation: 'The acid stays at $0.40(6) = 2.4$ liters. Set $2.4 = 0.30(6 + x)$, so $6 + x = 8$ and $x = 2$. (8 is the new total volume, not the water added.)', partNumber: 6, partTitle: 'Mixture and Work Problems' },
  { id: 'srp-ent-6b', question: 'Pipe A can fill a tank in 3 hours, and pipe B can fill it in 6 hours. Working together at these rates, how many hours will the two pipes take to fill the tank?', options: ['1.5', '2', '4.5', '9'], correctIndex: 1, explanation: 'Add the rates: $\\tfrac{1}{3} + \\tfrac{1}{6} = \\tfrac{1}{2}$ tank per hour, so the tank fills in 2 hours. (4.5 averages the times; together must be faster than either pipe alone.)', partNumber: 6, partTitle: 'Mixture and Work Problems' },
  { id: 'srp-ent-7a', question: 'If $\\dfrac{a}{b} = \\dfrac{3}{5}$ and $a + b = 40$, what is the value of $b$?', options: ['15', '20', '25', '30'], correctIndex: 2, explanation: 'Let $a = 3k$ and $b = 5k$. Then $8k = 40$, so $k = 5$ and $b = 5(5) = 25$. (15 is the value of $a$.)', partNumber: 7, partTitle: 'Review & SAT Mixed Practice' },
  { id: 'srp-ent-7b', question: 'A shirt priced at \\$40 is discounted 25%, and then an 8% sales tax is applied to the sale price. What is the final cost?', options: ['\\$30.00', '\\$32.40', '\\$33.20', '\\$43.20'], correctIndex: 1, explanation: 'Sale price: $40 \\times 0.75 = 30$. With tax: $30 \\times 1.08 = 32.40$, so the cost is \\$32.40. (\\$33.20 nets the percents to a 17% discount, which is not how successive changes work.)', partNumber: 7, partTitle: 'Review & SAT Mixed Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Ratios and Rates' },
    { partNumber: 2, partTitle: 'Percentages' },
    { partNumber: 3, partTitle: 'Direct and Inverse Variation' },
    { partNumber: 4, partTitle: 'Unit Conversions' },
    { partNumber: 5, partTitle: 'Scale Factors and Similar Figures' },
    { partNumber: 6, partTitle: 'Mixture and Work Problems' },
    { partNumber: 7, partTitle: 'Review & SAT Mixed Practice' },
  ]
}
