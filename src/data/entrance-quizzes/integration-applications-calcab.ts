/**
 * Entrance Quiz — Integration Applications — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Average Value of a Function
  {
    id: 'ia-ent-1a',
    question: 'What is the average value of $f(x) = 4x^3$ on the interval $[0, 2]$?',
    options: ['$16$', '$8$', '$4$', '$32$'],
    correctIndex: 1,
    explanation: 'Average value $= \\frac{1}{2}\\int_0^2 4x^3\\,dx = \\frac{1}{2}\\left[x^4\\right]_0^2 = \\frac{16}{2} = 8$. The integral alone is $16$, $4$ is the midpoint value $f(1)$, and $32$ is $f(2)$.',
    partNumber: 1,
    partTitle: 'Average Value of a Function',
  },
  {
    id: 'ia-ent-1b',
    question: 'A continuous function has $f(1) = 3$, $f(5) = 11$, and $\\int_1^5 f(x)\\,dx = 24$. What is the average value of $f$ on $[1, 5]$?',
    options: ['$2$', '$7$', '$24$', '$6$'],
    correctIndex: 3,
    explanation: 'Average value $= \\frac{1}{5 - 1}\\int_1^5 f(x)\\,dx = \\frac{24}{4} = 6$. $2$ is the average rate of change $\\frac{11 - 3}{4}$, $7$ averages only the endpoint values, and $24$ forgets to divide by the length of the interval.',
    partNumber: 1,
    partTitle: 'Average Value of a Function',
  },

  // Part 2 — Position, Velocity, and Displacement
  {
    id: 'ia-ent-2a',
    question: 'A particle moves along a line with velocity $v(t) = 4t - t^2$, and $x(0) = 1$. What is $x(3)$?',
    options: ['$9$', '$10$', '$4$', '$19$'],
    correctIndex: 1,
    explanation: '$x(3) = 1 + \\int_0^3 (4t - t^2)\\,dt = 1 + \\left[2t^2 - \\frac{t^3}{3}\\right]_0^3 = 1 + (18 - 9) = 10$. $9$ is the displacement alone, $4$ adds the velocity $v(3) = 3$ instead of integrating, and $19$ drops the $-\\frac{t^3}{3}$ term.',
    partNumber: 2,
    partTitle: 'Position, Velocity, and Displacement',
  },
  {
    id: 'ia-ent-2b',
    question: 'A particle has acceleration $a(t) = 2t + 1$ and velocity $v(0) = -4$. What is $v(2)$?',
    options: ['$6$', '$-4$', '$2$', '$5$'],
    correctIndex: 2,
    explanation: '$v(2) = v(0) + \\int_0^2 (2t + 1)\\,dt = -4 + (4 + 2) = 2$. $6$ is the change in velocity alone, $-4$ ignores the acceleration, and $5$ is $a(2)$.',
    partNumber: 2,
    partTitle: 'Position, Velocity, and Displacement',
  },

  // Part 3 — Total Distance and Speed
  {
    id: 'ia-ent-3a',
    question: 'A particle moves with velocity $v(t) = t - 1$ for $0 \\le t \\le 3$. What is the total distance it travels?',
    options: ['$\\frac{3}{2}$', '$\\frac{5}{2}$', '$2$', '$\\frac{1}{2}$'],
    correctIndex: 1,
    explanation: '$v$ changes sign at $t = 1$. $\\int_0^1 (t - 1)\\,dt = -\\frac{1}{2}$ and $\\int_1^3 (t - 1)\\,dt = 2$, so the distance is $\\frac{1}{2} + 2 = \\frac{5}{2}$. The displacement is $\\frac{3}{2}$; $2$ and $\\frac{1}{2}$ are the two legs alone.',
    partNumber: 3,
    partTitle: 'Total Distance and Speed',
  },
  {
    id: 'ia-ent-3b',
    question: 'A velocity graph has area $7$ above the $t$-axis on $[0, 4]$ and area $3$ below it on $[4, 6]$. What are the displacement and the total distance on $[0, 6]$?',
    options: ['Displacement $10$, distance $4$', 'Displacement $4$, distance $10$', 'Displacement $4$, distance $4$', 'Displacement $10$, distance $10$'],
    correctIndex: 1,
    explanation: 'Displacement uses signed area, $7 - 3 = 4$; total distance counts every piece as positive, $7 + 3 = 10$.',
    partNumber: 3,
    partTitle: 'Total Distance and Speed',
  },

  // Part 4 — Accumulation in Applied Contexts
  {
    id: 'ia-ent-4a',
    question: '$W(t)$ is the rate, in gallons per hour, at which water flows into a pool, with $t$ in hours. What does $\\int_1^3 W(t)\\,dt = 50$ mean?',
    options: [
      '50 gallons flowed into the pool from hour 1 to hour 3',
      'The pool held 50 gallons of water at hour 3',
      'Water flowed in at 50 gallons per hour at hour 3',
      'Water flowed in at an average of 50 gallons per hour',
    ],
    correctIndex: 0,
    explanation: 'The integral of a flow rate is the amount that flowed in over the interval: $50$ gallons between $t = 1$ and $t = 3$. It is not the amount in the pool, not a rate at one instant, and the average rate would be $\\frac{50}{2} = 25$ gallons per hour.',
    partNumber: 4,
    partTitle: 'Accumulation in Applied Contexts',
  },
  {
    id: 'ia-ent-4b',
    question: 'A tank holds $40$ liters at $t = 0$. For $0 \\le t \\le 8$ minutes, water enters at $10$ liters per minute and leaves at $2t$ liters per minute. What is the maximum amount of water in the tank?',
    options: ['$56$', '$40$', '$65$', '$90$'],
    correctIndex: 2,
    explanation: 'The net rate $10 - 2t$ changes from positive to negative at $t = 5$. Candidates: $A(0) = 40$, $A(5) = 40 + 50 - 25 = 65$, $A(8) = 40 + 80 - 64 = 56$. The maximum is $65$ liters. $90 = 40 + 50$ counts the water that entered by $t = 5$ but not the water that left.',
    partNumber: 4,
    partTitle: 'Accumulation in Applied Contexts',
  },

  // Part 5 — Rate Problems & Net Change
  {
    id: 'ia-ent-5a',
    question: 'A tank holds $120$ liters at $t = 0$. Water enters at $12$ liters per minute and drains at $3\\sqrt{t}$ liters per minute, with $t$ in minutes. How many liters are in the tank at $t = 4$?',
    options: ['$168$', '$104$', '$184$', '$152$'],
    correctIndex: 3,
    explanation: 'Amount $= 120 + \\int_0^4 (12 - 3\\sqrt{t})\\,dt = 120 + 48 - 2t^{3/2}\\big|_0^4 = 120 + 48 - 16 = 152$. Ignoring the drain gives $168$, and adding the drained water gives $184$.',
    partNumber: 5,
    partTitle: 'Rate Problems & Net Change',
  },
  {
    id: 'ia-ent-5b',
    question: 'A wildfire has burned $A(t)$ acres after $t$ hours, so $A\'(t)$ is in acres per hour. What does $\\int_1^4 A\'(t)\\,dt = 90$ mean?',
    options: [
      'By hour 4, the fire had burned 90 acres in total',
      '90 acres burned from hour 1 to hour 4',
      'The fire averaged 90 acres per hour over that span',
      'At hour 4, the fire was spreading at 90 acres per hour',
    ],
    correctIndex: 1,
    explanation: 'The integral of a rate is the net change: $A(4) - A(1) = 90$, so 90 more acres burned between hour 1 and hour 4. It is not the running total since $t = 0$, and the average rate on that interval would be $90/3 = 30$ acres per hour.',
    partNumber: 5,
    partTitle: 'Rate Problems & Net Change',
  },

  // Part 6 — Practice Workshop
  {
    id: 'ia-ent-6a',
    question: 'A particle has velocity $v(t) = 3t^2 - 6t$ for $0 \\le t \\le 4$. What is its average velocity on that interval?',
    options: ['$16$', '$4$', '$6$', '$24$'],
    correctIndex: 1,
    explanation: 'Average velocity $= \\frac{1}{4}\\int_0^4 (3t^2 - 6t)\\,dt = \\frac{1}{4}\\left[t^3 - 3t^2\\right]_0^4 = \\frac{16}{4} = 4$. $16$ forgets to divide, $6$ is the average acceleration $\\frac{v(4) - v(0)}{4}$, and $24$ is $v(4)$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'ia-ent-6b',
    question: 'Snow falls at $S(t) = 2t$ inches per hour and melts at a constant $1$ inch per hour. There are $3$ inches of snow at $t = 0$. How many inches of snow are there at $t = 4$?',
    options: ['$19$', '$12$', '$7$', '$15$'],
    correctIndex: 3,
    explanation: 'Amount $= 3 + \\int_0^4 (2t - 1)\\,dt = 3 + (16 - 4) = 15$. $19$ ignores the melting, $12$ leaves out the 3 inches at the start, and $7$ uses the snowfall rate at $t = 4$ instead of integrating it.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'ia-ent-7a',
    question: 'What is the average value of $f(x) = 3x^2 - 2x$ on the interval $[1, 3]$?',
    options: ['$18$', '$9$', '$10$', '$8$'],
    correctIndex: 1,
    explanation: 'Average value $= \\frac{1}{3 - 1}\\int_1^3 (3x^2 - 2x)\\,dx = \\frac{1}{2}\\left[x^3 - x^2\\right]_1^3 = \\frac{18}{2} = 9$. Forgetting to divide gives $18$, the average rate of change $\\frac{f(3) - f(1)}{2}$ is $10$, and $f(2) = 8$ is just the midpoint value.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'ia-ent-7b',
    question: 'A particle moves with velocity $v(t) = t^2 - 4$ for $0 \\le t \\le 5$. Which expression gives the total distance it travels?',
    options: [
      '$\\int_0^5 (t^2 - 4)\\,dt$',
      '$-\\int_0^2 (t^2 - 4)\\,dt + \\int_2^5 (t^2 - 4)\\,dt$',
      '$\\int_0^2 (t^2 - 4)\\,dt + \\int_2^5 (t^2 - 4)\\,dt$',
      '$\\left\\lvert\\int_0^5 (t^2 - 4)\\,dt\\right\\rvert$',
    ],
    correctIndex: 1,
    explanation: '$v < 0$ on $(0, 2)$ and $v > 0$ on $(2, 5)$, so the first piece must be made positive: distance $= -\\int_0^2 v\\,dt + \\int_2^5 v\\,dt$. The other expressions give the displacement or its absolute value, which are smaller because the particle turns around at $t = 2$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Average Value of a Function' },
    { partNumber: 2, partTitle: 'Position, Velocity, and Displacement' },
    { partNumber: 3, partTitle: 'Total Distance and Speed' },
    { partNumber: 4, partTitle: 'Accumulation in Applied Contexts' },
    { partNumber: 5, partTitle: 'Rate Problems & Net Change' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
