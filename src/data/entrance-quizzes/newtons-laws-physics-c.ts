/**
 * Entrance Quiz — AP Physics C: Mechanics, Newton's Laws
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Newton\'s First Law',
  'Newton\'s Second Law with Calculus',
  'Newton\'s Third Law',
  'Friction Forces',
  'Circular Motion',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcnl-ent-1a',
    question: 'A probe in deep space, far from any star or planet, fires its rocket for a while and then shuts it off. What does the probe do after shutoff?',
    options: [
      'Keeps moving at the speed it had when the engine stopped',
      'Gradually slows to a stop',
      'Keeps speeding up at a decreasing rate',
      'Stops once the engine shuts off',
    ],
    correctIndex: 0,
    explanation: 'With no net force, the first law says the velocity stays constant. Nothing is left to slow the probe down or to keep speeding it up.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcnl-ent-1b',
    question: 'An object moves at constant velocity while three forces act on it: $8$ N east, $6$ N north, and an unknown third force. What is the third force?',
    options: [
      '$14$ N, $37°$ south of west',
      '$10$ N, $37°$ south of west',
      '$10$ N, $37°$ north of east',
      '$10$ N, $53°$ south of west',
    ],
    correctIndex: 1,
    explanation: 'Constant velocity means the net force is zero, so the third force cancels the $10$ N resultant of the other two, which points $37°$ north of east. It must be $10$ N at $37°$ south of west.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcnl-ent-2a',
    question: 'A $2$ kg object starts from rest and feels a net force $F(t) = 12t - 3t^2$ N for $0 \\le t \\le 4$ s. What is its speed at $t = 4$ s?',
    options: ['$0$ m/s', '$6$ m/s', '$16$ m/s', '$8$ m/s'],
    correctIndex: 2,
    explanation: 'The change in momentum is $\\int_0^4 (12t - 3t^2)\\,dt = 96 - 64 = 32$ N$\\cdot$s, so $v = 32/2 = 16$ m/s. The force is zero at $4$ s, but the velocity it built up remains.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcnl-ent-2b',
    question: 'A $3$ kg cart has $v(0) = 1$ m/s and $x(0) = 0$. A net force $F(t) = 6t$ N acts on it. Where is it at $t = 3$ s?',
    options: ['$9$ m', '$30$ m', '$27$ m', '$12$ m'],
    correctIndex: 3,
    explanation: '$a = F/m = 2t$, so $v = 1 + t^2$ and $x = t + t^3/3$. At $3$ s, $x = 3 + 9 = 12$ m. Using $a = 6t$ (forgetting to divide by the mass) gives $30$ m.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcnl-ent-3a',
    question: 'Blocks A ($3$ kg) and B ($1$ kg) sit in contact on a frictionless floor. A $20$ N horizontal push on A moves both blocks together. How large is the force B exerts on A?',
    options: ['$5$ N', '$15$ N', '$20$ N', '$10$ N'],
    correctIndex: 0,
    explanation: 'Both blocks accelerate at $20/4 = 5$ m/s$^2$, so A must push B with $(1)(5) = 5$ N. By the third law, B pushes back on A with the same $5$ N.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcnl-ent-3b',
    question: 'A horse pulls a cart forward and the cart speeds up. Which statement about the forces between horse and cart is correct?',
    options: [
      'The horse pulls on the cart harder than the cart pulls back',
      'The cart pulls back on the horse just as hard',
      'The ground balances a larger backward pull from the cart',
      'The forces become equal only once the cart reaches constant speed',
    ],
    correctIndex: 1,
    explanation: 'The horse–cart forces are a third-law pair and are always equal in size. The cart speeds up because the horse\'s pull on it exceeds the friction on the cart, not because the pair is unbalanced.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcnl-ent-4a',
    question: 'A $4$ kg crate rests on a floor with $\\mu_s = 0.50$ and $\\mu_k = 0.30$. A worker pushes it horizontally with $15$ N. How large is the friction force on the crate? (Use $g = 10$ m/s$^2$.)',
    options: ['$20$ N', '$12$ N', '$15$ N', '$0$ N'],
    correctIndex: 2,
    explanation: 'The maximum static friction is $\\mu_s mg = 20$ N, more than the push, so the crate stays put. Static friction matches the push: $15$ N.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcnl-ent-4b',
    question: 'A $10$ kg block is pulled across a floor ($\\mu_k = 0.20$) by a $50$ N force directed $37°$ above the horizontal. What is its acceleration? (Use $g = 10$ m/s$^2$, $\\sin 37° = 0.6$, $\\cos 37° = 0.8$.)',
    options: ['$2.0$ m/s$^2$', '$4.0$ m/s$^2$', '$1.4$ m/s$^2$', '$2.6$ m/s$^2$'],
    correctIndex: 3,
    explanation: 'The pull lifts $30$ N, so $N = 100 - 30 = 70$ N and $f_k = 14$ N. Then $a = (40 - 14)/10 = 2.6$ m/s$^2$; taking $N = mg$ gives $2.0$ m/s$^2$.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcnl-ent-5a',
    question: 'A $0.50$ kg puck on a frictionless table is tied to a $0.80$ m string and moves in a horizontal circle. The string breaks at $40$ N of tension. What is the greatest speed the puck can have?',
    options: ['$8$ m/s', '$10$ m/s', '$64$ m/s', '$11$ m/s'],
    correctIndex: 0,
    explanation: 'Tension is the centripetal force: $T = mv^2/r$, so $v = \\sqrt{Tr/m} = \\sqrt{64} = 8$ m/s. Using the $1.6$ m diameter instead of the radius gives about $11$ m/s.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcnl-ent-5b',
    question: 'A ball on a string moves in a horizontal circle. If the period of revolution is halved while the radius stays the same, the tension becomes:',
    options: ['Twice as large', 'Four times as large', 'Half as large', 'A quarter as large'],
    correctIndex: 1,
    explanation: 'The tension is $m\\omega^2 r$ with $\\omega = 2\\pi/T$. Halving the period doubles $\\omega$, which multiplies the tension by $4$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcnl-ent-6a',
    question: 'A $2$ kg block and a $3$ kg block on a frictionless table are joined by a light string. A $20$ N horizontal force pulls the $3$ kg block, dragging the $2$ kg block behind it. What is the tension in the string?',
    options: ['$12$ N', '$20$ N', '$8$ N', '$10$ N'],
    correctIndex: 2,
    explanation: 'The system accelerates at $20/5 = 4$ m/s$^2$. The string is the only horizontal force on the $2$ kg block, so $T = (2)(4) = 8$ N.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcnl-ent-6b',
    question: 'A $4$ kg block on a frictionless $30°$ incline is tied by a string over a pulley at the top to a hanging $3$ kg mass. What is the acceleration of the blocks? (Use $g = 10$ m/s$^2$.)',
    options: ['$3.33$ m/s$^2$', '$7.14$ m/s$^2$', '$2.50$ m/s$^2$', '$1.43$ m/s$^2$'],
    correctIndex: 3,
    explanation: 'The hanging weight ($30$ N) pulls against the block\'s downhill component ($4 \\times 10 \\times \\sin 30° = 20$ N), and the whole $7$ kg accelerates: $a = 10/7 \\approx 1.43$ m/s$^2$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcnl-ent-7a',
    question: 'A $60$ kg person stands on a scale in an elevator that is moving upward but slowing down at $2$ m/s$^2$. What does the scale read? (Use $g = 10$ m/s$^2$.)',
    options: ['$720$ N', '$480$ N', '$600$ N', '$120$ N'],
    correctIndex: 1,
    explanation: 'Slowing while moving up means the acceleration points down, so $mg - N = ma$ and $N = 60(10 - 2) = 480$ N.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcnl-ent-7b',
    question: 'An Atwood machine has a $2$ kg mass and a $6$ kg mass hanging over a light, frictionless pulley. What is the tension in the string? (Use $g = 10$ m/s$^2$.)',
    options: ['$20$ N', '$60$ N', '$40$ N', '$30$ N'],
    correctIndex: 3,
    explanation: 'The acceleration is $(6 - 2)(10)/8 = 5$ m/s$^2$. For the $2$ kg mass, $T - 20 = 2(5)$, so $T = 30$ N, between the two weights.',
    partNumber: 7,
    partTitle: P[6],
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return P.map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
