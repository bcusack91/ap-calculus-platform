/**
 * Entrance Quiz — AP Physics C: Mechanics, Circular Motion
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Uniform Circular Motion',
  'Centripetal Acceleration Derivation',
  'Banked Curves',
  'Vertical Circles',
  'Non-Uniform Circular Motion',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pccm-ent-1a',
    question: 'A car rounds a flat, unbanked curve of radius $45$ m. The coefficient of static friction between tires and road is $0.50$. What is the greatest speed at which it can take the curve without skidding? (Use $g = 10$ m/s$^2$.)',
    options: ['$15$ m/s', '$21$ m/s', '$11$ m/s', '$30$ m/s'],
    correctIndex: 0,
    explanation: 'Static friction supplies the centripetal force, so $mv^2/r \\le \\mu_s mg$ and $v_{\\max} = \\sqrt{\\mu_s g r} = \\sqrt{0.50(10)(45)} = 15$ m/s.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccm-ent-1b',
    question: 'A conical pendulum has a $0.50$ m string that makes a $60°$ angle with the vertical. What is the period of its circular motion? (Use $g = 10$ m/s$^2$.)',
    options: ['$1.40$ s', '$0.99$ s', '$1.99$ s', '$1.31$ s'],
    correctIndex: 1,
    explanation: 'With $T\\cos\\theta = mg$ and $T\\sin\\theta = m\\omega^2 L\\sin\\theta$, the period is $2\\pi\\sqrt{L\\cos\\theta/g} = 2\\pi\\sqrt{0.025} \\approx 0.99$ s. The value $1.40$ s is the simple-pendulum formula, which ignores the angle.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccm-ent-2a',
    question: 'A particle\'s position is $\\vec{r}(t) = 3\\cos(2t)\\,\\hat{x} + 3\\sin(2t)\\,\\hat{y}$ (meters, seconds). What is its acceleration $\\vec{a}(t)$?',
    options: [
      '$-6\\sin(2t)\\,\\hat{x} + 6\\cos(2t)\\,\\hat{y}$',
      '$12\\cos(2t)\\,\\hat{x} + 12\\sin(2t)\\,\\hat{y}$',
      '$-12\\cos(2t)\\,\\hat{x} - 12\\sin(2t)\\,\\hat{y}$',
      '$-6\\cos(2t)\\,\\hat{x} - 6\\sin(2t)\\,\\hat{y}$',
    ],
    correctIndex: 2,
    explanation: 'Differentiating twice brings down $(2)^2$ and a minus sign: $\\vec{a} = -4\\vec{r}$, magnitude $\\omega^2 r = 12$ m/s$^2$ pointing toward the center. The expression with $6\\sin$ and $6\\cos$ is the velocity.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccm-ent-2b',
    question: 'A point $0.50$ m from the axis of a rotor completes one revolution every $0.25$ s. What is its centripetal acceleration?',
    options: ['$79$ m/s$^2$', '$158$ m/s$^2$', '$50$ m/s$^2$', '$316$ m/s$^2$'],
    correctIndex: 3,
    explanation: '$a_c = 4\\pi^2 r/T^2 = 4\\pi^2(0.50)/(0.25)^2 \\approx 316$ m/s$^2$. Forgetting to square the period gives $79$ m/s$^2$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccm-ent-3a',
    question: 'An engineer wants cars at $20$ m/s to round an $80$ m radius curve with no friction needed. At what angle should the road be banked? (Use $g = 10$ m/s$^2$.)',
    options: ['$30.0°$', '$26.6°$', '$63.4°$', '$60.0°$'],
    correctIndex: 1,
    explanation: 'Dividing $N\\sin\\beta = mv^2/r$ by $N\\cos\\beta = mg$ gives $\\tan\\beta = v^2/(rg) = 400/800 = 0.5$, so $\\beta \\approx 26.6°$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccm-ent-3b',
    question: 'A car rounds a banked curve with friction, moving slower than the curve\'s design speed. Which way does static friction on the car point?',
    options: [
      'Up along the bank surface',
      'Down along the bank surface',
      'Horizontally toward the center of the curve',
      'There is no friction force at this speed',
    ],
    correctIndex: 0,
    explanation: 'Below the design speed, the horizontal component of the normal force is more than the centripetal force needed, so the car tends to slide down the bank. Friction opposes that tendency and points up the slope.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccm-ent-4a',
    question: 'A $50$ kg rider on a frictionless coaster starts from rest $30$ m above the bottom of a vertical loop of radius $10$ m. What normal force does the track exert on the rider at the top of the loop? (Use $g = 10$ m/s$^2$.)',
    options: ['$1000$ N', '$1500$ N', '$2500$ N', '$500$ N'],
    correctIndex: 3,
    explanation: 'At the top (height $20$ m), $v^2 = 2g(30 - 20) = 200$ m$^2$/s$^2$. Then $N + mg = mv^2/r = 1000$ N, so $N = 1000 - 500 = 500$ N.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccm-ent-4b',
    question: 'A $0.20$ kg ball on a $0.80$ m string moves in a vertical circle at $4.0$ m/s at the top. What is the string tension at the bottom? (Use $g = 10$ m/s$^2$.)',
    options: ['$12$ N', '$6$ N', '$14$ N', '$2$ N'],
    correctIndex: 2,
    explanation: 'Energy gives $v_{\\text{bot}}^2 = 16 + 4gr = 48$ m$^2$/s$^2$, so $T = mv^2/r + mg = 12 + 2 = 14$ N. Equivalently, the tension at the top is $2$ N and the difference is $6mg = 12$ N.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccm-ent-5a',
    question: 'A disk starts from rest with angular acceleration $4.0$ rad/s$^2$. What is the magnitude of the acceleration of a point $0.25$ m from the axis at $t = 1.0$ s?',
    options: ['$4.12$ m/s$^2$', '$5.00$ m/s$^2$', '$4.00$ m/s$^2$', '$1.00$ m/s$^2$'],
    correctIndex: 0,
    explanation: 'At $1.0$ s, $\\omega = 4.0$ rad/s, so $a_c = r\\omega^2 = 4.0$ m/s$^2$ and $a_t = r\\alpha = 1.0$ m/s$^2$. These are perpendicular, so $|\\vec{a}| = \\sqrt{17} \\approx 4.12$ m/s$^2$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccm-ent-5b',
    question: 'A car speeds up as it rounds a circular track. Which direction does the net force on the car point?',
    options: [
      'Straight toward the center of the track',
      'Between the inward radius and the forward tangent',
      'Along the velocity, tangent to the track',
      'Between inward radius and backward tangent',
    ],
    correctIndex: 1,
    explanation: 'The car needs a radial component $mv^2/r$ to turn and a forward tangential component to gain speed. The vector sum points inward and ahead of the radius.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccm-ent-6a',
    question: 'A $1000$ kg car crosses the top of a hill whose crest has a radius of $25$ m at $10$ m/s. What normal force does the road exert on the car? (Use $g = 10$ m/s$^2$.)',
    options: ['$14.0$ kN', '$4.0$ kN', '$10.0$ kN', '$6.0$ kN'],
    correctIndex: 3,
    explanation: 'At the crest the center is below the car, so $mg - N = mv^2/r$ and $N = 1000(10 - 100/25) = 6000$ N $= 6.0$ kN.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccm-ent-6b',
    question: 'In a rotor ride of radius $4.0$ m, the floor drops away and riders stay pinned to the wall by friction ($\\mu_s = 0.40$). What is the minimum angular speed? (Use $g = 10$ m/s$^2$.)',
    options: ['$1.0$ rad/s', '$6.3$ rad/s', '$2.5$ rad/s', '$1.6$ rad/s'],
    correctIndex: 2,
    explanation: 'The wall\'s normal force $N = m\\omega^2 R$ is centripetal, and friction $\\mu_s N$ must hold up $mg$. So $\\omega = \\sqrt{g/(\\mu_s R)} = \\sqrt{6.25} = 2.5$ rad/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccm-ent-7a',
    question: 'A $2.0$ kg ball on a $1.0$ m string is released from rest with the string horizontal. What is the tension when the ball swings through the lowest point? (Use $g = 10$ m/s$^2$.)',
    options: ['$40$ N', '$60$ N', '$20$ N', '$100$ N'],
    correctIndex: 1,
    explanation: 'Falling $1.0$ m gives $v^2 = 2gr = 20$ m$^2$/s$^2$, so $T = mg + mv^2/r = 20 + 40 = 60$ N, which is $3mg$.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pccm-ent-7b',
    question: 'Satellite A has a circular orbit of radius $r$ and period $T$. Satellite B orbits the same planet at radius $4r$. What is B\'s period?',
    options: ['$64T$', '$16T$', '$T/8$', '$8T$'],
    correctIndex: 3,
    explanation: 'Setting $GMm/r^2 = m(2\\pi/T)^2 r$ gives $T^2 \\propto r^3$. Quadrupling $r$ multiplies $T^2$ by $64$, so the period becomes $8T$; $64T$ forgets the square root.',
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
