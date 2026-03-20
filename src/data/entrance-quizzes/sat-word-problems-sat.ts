/**
 * Entrance Quiz — SAT Word Problems (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Setting Up Equations ─────────────────
  {
    id: 'swp-ent-1a',
    question:
      'A parking garage charges $3.00 for the first hour and $1.50 for each additional hour. If a customer pays $10.50 total, which equation represents this situation, where h is the total number of hours parked?',
    options: [
      '3h + 1.50 = 10.50',
      '3 + 1.50(h − 1) = 10.50',
      '1.50h + 3 = 10.50',
      '3 + 1.50h = 10.50',
    ],
    correctIndex: 1,
    explanation:
      'The first hour costs $3.00, and each additional hour (h − 1 more hours) costs $1.50. The equation is 3 + 1.50(h − 1) = 10.50. Solving: 1.50(h − 1) = 7.50 → h − 1 = 5 → h = 6 hours.',
    partNumber: 1,
    partTitle: 'Setting Up Equations',
  },
  {
    id: 'swp-ent-1b',
    question:
      'A store sells small and large candles. Small candles cost $4 each and large candles cost $7 each. A customer buys a total of 10 candles and spends $55. Which system of equations represents this situation?',
    options: [
      's + l = 55 and 4s + 7l = 10',
      's + l = 10 and 4s + 7l = 55',
      's + l = 10 and 7s + 4l = 55',
      '4s + 7l = 10 and s + l = 55',
    ],
    correctIndex: 1,
    explanation:
      'Let s = number of small candles and l = number of large candles. The total number of candles is s + l = 10. The total cost is 4s + 7l = 55. Option B correctly represents both constraints.',
    partNumber: 1,
    partTitle: 'Setting Up Equations',
  },

  // ── Part 2: Rate Problems ─────────────────────────
  {
    id: 'swp-ent-2a',
    question:
      'Lena can paint a fence in 4 hours. Marcus can paint the same fence in 6 hours. Working together, how long will it take them to paint the fence?',
    options: [
      '2.4 hours',
      '5 hours',
      '3 hours',
      '2 hours',
    ],
    correctIndex: 0,
    explanation:
      'Combined rate = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 of the fence per hour. Time = 1 ÷ (5/12) = 12/5 = 2.4 hours. Working-together problems always use combined rates, not averaged times.',
    partNumber: 2,
    partTitle: 'Rate Problems',
  },
  {
    id: 'swp-ent-2b',
    question:
      'A train travels 240 miles at a constant speed. If the train had traveled 20 mph faster, the trip would have taken 1 hour less. What was the original speed of the train in miles per hour?',
    options: [
      '40 mph',
      '60 mph',
      '80 mph',
      '120 mph',
    ],
    correctIndex: 1,
    explanation:
      'Let r = original speed. Time at original speed: 240/r. Time at r + 20: 240/(r + 20). Setting up: 240/r − 240/(r + 20) = 1. Multiply through: 240(r + 20) − 240r = r(r + 20) → 4800 = r² + 20r → r² + 20r − 4800 = 0 → (r − 60)(r + 80) = 0 → r = 60 mph.',
    partNumber: 2,
    partTitle: 'Rate Problems',
  },

  // ── Part 3: Mixture Problems ──────────────────────
  {
    id: 'swp-ent-3a',
    question:
      'A chemist mixes a 20% saline solution with a 50% saline solution to produce 60 mL of a 30% saline solution. How many mL of the 20% solution does she use?',
    options: [
      '20 mL',
      '30 mL',
      '40 mL',
      '45 mL',
    ],
    correctIndex: 2,
    explanation:
      'Let x = mL of 20% solution; then (60 − x) = mL of 50% solution. Setting up: 0.20x + 0.50(60 − x) = 0.30(60) → 0.20x + 30 − 0.50x = 18 → −0.30x = −12 → x = 40 mL.',
    partNumber: 3,
    partTitle: 'Mixture Problems',
  },
  {
    id: 'swp-ent-3b',
    question:
      'A barista mixes coffee worth $8 per pound with coffee worth $12 per pound to make a 20-pound blend that sells for $9.50 per pound. How many pounds of the $8 coffee does she use?',
    options: [
      '5 pounds',
      '10 pounds',
      '12.5 pounds',
      '15 pounds',
    ],
    correctIndex: 2,
    explanation:
      'Let x = pounds of $8 coffee; (20 − x) = pounds of $12 coffee. 8x + 12(20 − x) = 9.50 × 20 → 8x + 240 − 12x = 190 → −4x = −50 → x = 12.5 pounds.',
    partNumber: 3,
    partTitle: 'Mixture Problems',
  },

  // ── Part 4: Geometry Word Problems ───────────────
  {
    id: 'swp-ent-4a',
    question:
      'A rectangular garden has a perimeter of 56 feet. The length is 4 feet more than twice the width. What is the area of the garden in square feet?',
    options: [
      '96 sq ft',
      '160 sq ft',
      '192 sq ft',
      '176 sq ft',
    ],
    correctIndex: 1,
    explanation:
      'Let w = width. Length l = 2w + 4. Perimeter: 2(l + w) = 56 → l + w = 28 → (2w + 4) + w = 28 → 3w = 24 → w = 8 ft. Then l = 2(8) + 4 = 20 ft. Area = 8 × 20 = 160 sq ft.',
    partNumber: 4,
    partTitle: 'Geometry Word Problems',
  },
  {
    id: 'swp-ent-4b',
    question:
      'A circular swimming pool has a diameter of 20 feet. A concrete deck surrounds the pool, extending 5 feet outward from the edge in all directions. What is the area of the deck alone (not including the pool)? Use π ≈ 3.14.',
    options: [
      '314 sq ft',
      '471 sq ft',
      '549.5 sq ft',
      '392.5 sq ft',
    ],
    correctIndex: 3,
    explanation:
      'Pool radius = 10 ft; outer radius = 10 + 5 = 15 ft. Outer circle area: 3.14 × 15² = 3.14 × 225 = 706.5 sq ft. Pool area: 3.14 × 10² = 314 sq ft. Deck area = 706.5 − 314 = 392.5 sq ft.',
    partNumber: 4,
    partTitle: 'Geometry Word Problems',
  },

  // ── Part 5: Multi-Step Problems ───────────────────
  {
    id: 'swp-ent-5a',
    question:
      'A store sells mugs for $6 each and plates for $9 each. Kenji buys some mugs and 4 plates, then uses a $5.00 off coupon. His final total is $61.00. How many mugs did Kenji buy?',
    options: [
      '4 mugs',
      '5 mugs',
      '6 mugs',
      '8 mugs',
    ],
    correctIndex: 1,
    explanation:
      'Add back the coupon: $61 + $5 = $66 (pre-coupon total). Cost of 4 plates: 4 × $9 = $36. Cost of mugs: $66 − $36 = $30. Number of mugs: $30 ÷ $6 = 5 mugs.',
    partNumber: 5,
    partTitle: 'Multi-Step Problems',
  },
  {
    id: 'swp-ent-5b',
    question:
      'A company\'s revenue increased by 20% in Year 1 and then decreased by 15% in Year 2. What was the net percentage change in revenue over the two years?',
    options: [
      '+5%',
      '+2%',
      '+8%',
      '+2.5%',
    ],
    correctIndex: 1,
    explanation:
      'Start with $100. After 20% increase: $100 × 1.20 = $120. After 15% decrease: $120 × 0.85 = $102. Net change = ($102 − $100)/$100 = 2%. The answer is +2%. Note: percentage changes are not simply additive—a 20% increase followed by a 15% decrease does not equal a 5% net increase.',
    partNumber: 5,
    partTitle: 'Multi-Step Problems',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'swp-ent-6a',
    question:
      'A 120-mile road trip is divided into two legs. The first leg is driven at 40 mph and the second at 60 mph. If the total trip takes exactly 2.5 hours, how long (in hours) is the first leg?',
    options: [
      '0.75 hours',
      '1.5 hours',
      '1 hour',
      '2 hours',
    ],
    correctIndex: 1,
    explanation:
      'Let t₁ = time for first leg (hours). Then t₂ = 2.5 − t₁. Distance: 40t₁ + 60(2.5 − t₁) = 120 → 40t₁ + 150 − 60t₁ = 120 → −20t₁ = −30 → t₁ = 1.5 hours.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'swp-ent-6b',
    question:
      'Three consecutive even integers have a sum of 78. What is the largest of the three integers?',
    options: [
      '24',
      '26',
      '28',
      '30',
    ],
    correctIndex: 2,
    explanation:
      'Let the integers be n, n+2, n+4. Sum: 3n + 6 = 78 → 3n = 72 → n = 24. The three integers are 24, 26, and 28. The largest is 28.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'swp-ent-7a',
    question:
      'An SAT word problem says: "A factory produces widgets at a rate of 200 per hour for the first 4 hours, then 150 per hour for the next 3 hours." What is the best first step to solve a question asking for total production?',
    options: [
      'Guess a reasonable total and check it.',
      'Calculate separately: (200 × 4) + (150 × 3), then add the results.',
      'Average 200 and 150, then multiply by 7 hours.',
      'Set up an algebraic equation with an unknown.',
    ],
    correctIndex: 1,
    explanation:
      'Because the rate changes at a specific point, the best strategy is to calculate each segment separately using rate × time, then add: (200 × 4) + (150 × 3) = 800 + 450 = 1,250 widgets. Averaging the rates would be incorrect when the time intervals differ.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'swp-ent-7b',
    question:
      'Which strategy is most useful when an SAT word problem contains extra information not needed to solve it?',
    options: [
      'Include all given numbers in your equation to be safe.',
      'Identify exactly what the question asks, then select only the information needed to answer it.',
      'Work backwards from the answer choices using all given values.',
      'Set up the largest possible equation to avoid missing any data.',
    ],
    correctIndex: 1,
    explanation:
      'The SAT frequently includes extra information to test whether students can identify what is relevant. The best strategy is to anchor on what the question asks, then select only the necessary data. Including all numbers often leads to incorrect equations.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Setting Up Equations' },
    { partNumber: 2, partTitle: 'Rate Problems' },
    { partNumber: 3, partTitle: 'Mixture Problems' },
    { partNumber: 4, partTitle: 'Geometry Word Problems' },
    { partNumber: 5, partTitle: 'Multi-Step Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
