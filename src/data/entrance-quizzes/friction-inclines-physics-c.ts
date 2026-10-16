/**
 * Entrance Quiz — AP Physics C: Mechanics, Friction & Inclines
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Static vs Kinetic Friction',
  'Frictionless Inclines',
  'Inclines with Friction',
  'Velocity-Dependent Friction',
  'Systems on Inclines',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcfi-ent-1a',
    question: 'A $25$ kg crate sits on a floor with $\\mu_s = 0.50$ and $\\mu_k = 0.40$. A worker pushes horizontally with $150$ N. What is the crate\'s acceleration? (Use $g = 10$ m/s$^2$.)',
    options: ['$1.0$ m/s$^2$', '$0.0$ m/s$^2$', '$6.0$ m/s$^2$', '$2.0$ m/s$^2$'],
    correctIndex: 3,
    explanation: 'The push exceeds $\\mu_s mg = 125$ N, so the crate slides and kinetic friction ($100$ N) applies: $a = (150 - 100)/25 = 2.0$ m/s$^2$. Using the static maximum gives $1.0$ m/s$^2$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcfi-ent-1b',
    question: 'You may pull a $10$ kg block ($\\mu_s = 0.75$) at any angle above the horizontal. What is the smallest force that starts it sliding, and at what angle? (Use $g = 10$ m/s$^2$.)',
    options: [
      '$60$ N, pulling $37°$ above the horizontal',
      '$75$ N, pulling horizontally',
      '$63$ N, pulling $53°$ above horizontal',
      '$45$ N, pulling $37°$ above horizontal',
    ],
    correctIndex: 0,
    explanation: 'The required force is $F = \\mu_s mg/(\\cos\\theta + \\mu_s\\sin\\theta)$. Setting $dF/d\\theta = 0$ gives $\\tan\\theta = 0.75$, so $\\theta \\approx 37°$ and $F = 75/(0.8 + 0.45) = 60$ N.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcfi-ent-2a',
    question: 'A block is launched up a frictionless $30°$ ramp at $6.0$ m/s. How far along the ramp does it travel before stopping? (Use $g = 10$ m/s$^2$.)',
    options: ['$1.8$ m', '$3.6$ m', '$7.2$ m', '$2.1$ m'],
    correctIndex: 1,
    explanation: 'Along the ramp the deceleration is $g\\sin 30° = 5$ m/s$^2$, so $L = v_0^2/(2g\\sin\\theta) = 36/10 = 3.6$ m. The value $1.8$ m is the height gained, not the distance along the ramp.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcfi-ent-2b',
    question: 'A block is launched up a frictionless incline of angle $\\theta$, stops, and slides back down. Which describes its acceleration throughout the trip?',
    options: [
      'Larger going up than coming down',
      'Zero at the top, $g\\sin\\theta$ elsewhere',
      '$g\\sin\\theta$ directed down the slope, both up and down',
      '$g$ straight down at all times',
    ],
    correctIndex: 2,
    explanation: 'The only force along the incline is $mg\\sin\\theta$, pointing down the slope whether the block moves up, down, or is momentarily at rest. So the acceleration is a constant $g\\sin\\theta$ down the slope.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcfi-ent-3a',
    question: 'A block is launched up a $37°$ incline with $\\mu_k = 0.50$ at $10$ m/s. How far up the incline does it slide? (Use $g = 10$ m/s$^2$, $\\sin 37° = 0.6$, $\\cos 37° = 0.8$.)',
    options: ['$5.0$ m', '$8.3$ m', '$25.0$ m', '$10.0$ m'],
    correctIndex: 0,
    explanation: 'Going up, gravity and friction both point down the slope: $a = g(\\sin\\theta + \\mu_k\\cos\\theta) = 10$ m/s$^2$, so $d = 100/20 = 5.0$ m. Pointing friction up the slope gives $25.0$ m.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcfi-ent-3b',
    question: 'A block is given a push down a $20°$ incline where $\\mu_k = 0.50$. What happens after the push ends?',
    options: [
      'It slides at constant speed',
      'It speeds up as it slides down',
      'It speeds up, but less than without friction',
      'It slows down and stops',
    ],
    correctIndex: 3,
    explanation: 'Since $\\tan 20° \\approx 0.36$ is less than $\\mu_k$, kinetic friction ($\\mu_k mg\\cos\\theta$) exceeds the downhill pull ($mg\\sin\\theta$). The net force points up the slope, so the block decelerates to rest.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcfi-ent-4a',
    question: 'A $2.0$ kg block slides down a $30°$ incline against a resistive force $f = bv$ with $b = 4.0$ kg/s. What is its terminal speed? (Use $g = 10$ m/s$^2$.)',
    options: ['$5.0$ m/s', '$2.5$ m/s', '$4.3$ m/s', '$0.5$ m/s'],
    correctIndex: 1,
    explanation: 'At terminal speed the net force along the incline is zero: $mg\\sin\\theta = bv_T$, so $v_T = 10/4.0 = 2.5$ m/s. Using the full weight instead of its downhill component gives $5.0$ m/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcfi-ent-4b',
    question: 'A block starts from rest down a $30°$ incline against a resistive force $f = bv$. What is its acceleration one time constant ($t = m/b$) after release? (Use $g = 10$ m/s$^2$.)',
    options: ['$3.2$ m/s$^2$', '$5.0$ m/s$^2$', '$1.8$ m/s$^2$', '$0.0$ m/s$^2$'],
    correctIndex: 2,
    explanation: 'Differentiating $v = v_T(1 - e^{-bt/m})$ gives $a = g\\sin\\theta\\,e^{-bt/m}$. At $t = m/b$, $a = 5.0/e \\approx 1.8$ m/s$^2$; $3.2$ m/s$^2$ is the fraction of $5.0$ already lost.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcfi-ent-5a',
    question: 'A $5.0$ kg block on a $37°$ incline ($\\mu_k = 0.25$) is tied by a string over a pulley to a hanging $6.0$ kg mass, which descends. What is the acceleration? (Use $g = 10$ m/s$^2$, $\\sin 37° = 0.6$, $\\cos 37° = 0.8$.)',
    options: ['$2.73$ m/s$^2$', '$4.00$ m/s$^2$', '$3.64$ m/s$^2$', '$1.82$ m/s$^2$'],
    correctIndex: 3,
    explanation: 'The driving force is $60 - 30 - 0.25(40) = 20$ N, shared by $11$ kg: $a \\approx 1.82$ m/s$^2$. Leaving out friction gives $2.73$ m/s$^2$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcfi-ent-5b',
    question: 'Two blocks joined by a string are pulled up a frictionless incline by a force $F$ parallel to the slope, applied to the front block. If the incline is made steeper with the same $F$, the string tension:',
    options: ['Stays the same', 'Increases with the angle', 'Decreases with the angle', 'Becomes zero at $90°$'],
    correctIndex: 0,
    explanation: 'The system gives $a = F/(m_1 + m_2) - g\\sin\\theta$, and for the rear block $T - m_2 g\\sin\\theta = m_2 a$, so $T = m_2 F/(m_1 + m_2)$. The gravity terms cancel, leaving no dependence on the angle.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcfi-ent-6a',
    question: 'A $4.0$ kg block rests on a $30°$ incline ($\\mu_s = 0.40$), tied over a pulley to a hanging $3.0$ kg mass. Released from rest, what happens? (Use $g = 10$ m/s$^2$.)',
    options: [
      'It accelerates at $1.4$ m/s$^2$ with the hanging mass falling',
      'It stays at rest; static friction supplies $10$ N',
      'It moves at constant speed once given a small push',
      'It stays at rest; static friction supplies $13.9$ N',
    ],
    correctIndex: 1,
    explanation: 'The hanging weight ($30$ N) beats the downhill pull ($20$ N) by $10$ N, but static friction can supply up to $0.40(40)\\cos 30° \\approx 13.9$ N. So the system stays at rest and friction provides only the $10$ N needed.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcfi-ent-6b',
    question: 'A $1.0$ kg block starts from rest down a $30°$ incline against a resistive force $f = 2v$ (SI units). About how far does it slide in the first $2.0$ s? (Use $g = 10$ m/s$^2$.)',
    options: ['$5.0$ m', '$10.0$ m', '$3.8$ m', '$1.3$ m'],
    correctIndex: 2,
    explanation: 'Here $v_T = 2.5$ m/s and $\\tau = 0.5$ s. Integrating $v = v_T(1 - e^{-t/\\tau})$ gives $x = v_T[t - \\tau(1 - e^{-t/\\tau})] = 2.5(2 - 0.49) \\approx 3.8$ m, less than the $5.0$ m of moving at $v_T$ the whole time.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcfi-ent-7a',
    question: 'A $20$ kg box is pushed at constant velocity across a floor ($\\mu_k = 0.25$) by a force directed $37°$ below the horizontal. How large is the push? (Use $g = 10$ m/s$^2$, $\\sin 37° = 0.6$, $\\cos 37° = 0.8$.)',
    options: ['$76.9$ N', '$62.5$ N', '$50.0$ N', '$52.6$ N'],
    correctIndex: 0,
    explanation: 'The downward component raises the normal force: $N = 200 + 0.6F$. Balancing horizontally, $0.8F = 0.25(200 + 0.6F)$, so $0.65F = 50$ and $F \\approx 76.9$ N.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcfi-ent-7b',
    question: 'A car at $20$ m/s locks its brakes going down a hill with $\\sin\\theta = 0.28$ and $\\cos\\theta = 0.96$. If $\\mu_k = 0.50$, what is its stopping distance? (Use $g = 10$ m/s$^2$.)',
    options: ['$40$ m', '$26$ m', '$91$ m', '$100$ m'],
    correctIndex: 3,
    explanation: 'Down the hill, $a = g(\\mu_k\\cos\\theta - \\sin\\theta) = 10(0.48 - 0.28) = 2.0$ m/s$^2$ of deceleration, so $d = 400/4.0 = 100$ m. Ignoring the slope gives $40$ m.',
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
