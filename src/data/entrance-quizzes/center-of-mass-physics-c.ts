/**
 * Entrance Quiz — AP Physics C: Mechanics, Center of Mass
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'COM Definition (Discrete)',
  'COM (Continuous Bodies)',
  'COM Velocity & Momentum',
  'COM Reference Frame',
  'COM Under External Forces',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pccom-ent-1a',
    question: 'Three particles lie in the $xy$-plane: $1$ kg at $(0, 0)$, $2$ kg at $(3, 0)$ m, and $3$ kg at $(0, 4)$ m. Where is their center of mass?',
    options: ['$(1, 1.3)$ m', '$(1, 2)$ m', '$(2, 1)$ m', '$(2, 4)$ m'],
    correctIndex: 1,
    explanation: '$x_{cm} = [2(3)]/6 = 1$ m and $y_{cm} = [3(4)]/6 = 2$ m. The point $(1, 1.3)$ m is the plain average of the positions, which ignores the masses.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccom-ent-1b',
    question: 'A uniform square plate $6$ cm on a side has a $2$ cm $\\times$ $2$ cm square hole cut out, centered $2$ cm to the right of the plate\'s center. Where is the center of mass of what remains?',
    options: [
      '$0.25$ cm right of center',
      '$0.22$ cm left of center',
      '$1.0$ cm left of center',
      '$0.25$ cm left of center',
    ],
    correctIndex: 3,
    explanation: 'Treat the hole as negative mass: it is $4/36 = 1/9$ of the full plate. Then $x_{cm} = [0 - (1/9)(2)]/(8/9) = -0.25$ cm, so the center of mass shifts away from the hole. Dividing by the full mass instead gives $0.22$ cm.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pccom-ent-2a',
    question: 'A rod lies along the $x$-axis from $0$ to $L$ with linear density $\\lambda(x) = \\lambda_0(1 + 2x/L)$. Where is its center of mass?',
    options: ['$x = 7L/12$', '$x = 2L/3$', '$x = L/2$', '$x = 5L/9$'],
    correctIndex: 0,
    explanation: '$M = \\int_0^L \\lambda\\,dx = 2\\lambda_0 L$ and $\\int_0^L x\\lambda\\,dx = \\lambda_0(L^2/2 + 2L^2/3) = 7\\lambda_0 L^2/6$. Dividing gives $x_{cm} = 7L/12$, a bit past the middle toward the denser end.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccom-ent-2b',
    question: 'A thin uniform wire is bent into a quarter circle of radius $R$ centered on the origin, running from the positive $x$-axis to the positive $y$-axis. What is the $x$-coordinate of its center of mass?',
    options: ['$\\frac{4R}{3\\pi}$', '$\\frac{R}{\\sqrt{2}}$', '$\\frac{2R}{\\pi}$', '$\\frac{\\pi R}{4}$'],
    correctIndex: 2,
    explanation: 'With $dm = \\lambda R\\,d\\theta$ and $x = R\\cos\\theta$, $x_{cm} = \\frac{1}{\\lambda R\\pi/2}\\int_0^{\\pi/2} R\\cos\\theta\\,\\lambda R\\,d\\theta = 2R/\\pi$. The value $R/\\sqrt{2}$ is the midpoint of the arc itself; the center of mass lies inside the curve.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pccom-ent-3a',
    question: 'An $8$ kg projectile moving horizontally at $15$ m/s breaks into two pieces. A $3$ kg piece moves backward at $5$ m/s. What is the velocity of the $5$ kg piece?',
    options: ['$21$ m/s forward', '$24$ m/s forward', '$15$ m/s forward', '$27$ m/s forward'],
    correctIndex: 3,
    explanation: 'Momentum is conserved: $8(15) = 3(-5) + 5v$, so $v = 135/5 = 27$ m/s forward. Treating the backward piece as moving forward gives $21$ m/s.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccom-ent-3b',
    question: 'A bomb at rest explodes into two fragments of unequal mass. Which statement about the fragments is correct?',
    options: [
      'The lighter fragment moves faster',
      'Both fragments have equal kinetic energies',
      'The heavier fragment carries more momentum',
      'Both fragments move at the same speed',
    ],
    correctIndex: 0,
    explanation: 'The total momentum stays zero, so the fragments have equal and opposite momenta: $m_1v_1 = m_2v_2$. The lighter one moves faster and, since $K = p^2/(2m)$, carries more kinetic energy.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pccom-ent-4a',
    question: 'A $3$ kg cart moving at $4$ m/s heads toward a $1$ kg cart at rest. What is the most kinetic energy the collision could possibly convert to other forms?',
    options: ['$18$ J', '$6$ J', '$24$ J', '$12$ J'],
    correctIndex: 1,
    explanation: 'Here $v_{cm} = 3$ m/s, and momentum conservation locks in $K_{cm} = \\frac{1}{2}(4)(3)^2 = 18$ J. Only the internal energy, $24 - 18 = 6$ J, can be lost, and all of it is lost if the carts stick.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccom-ent-4b',
    question: 'A $1$ kg ball moving at $9$ m/s hits a $2$ kg ball at rest in a head-on elastic collision. Working in the center-of-mass frame, find the $1$ kg ball\'s final velocity in the lab frame.',
    options: ['$3$ m/s', '$0$ m/s', '$-3$ m/s', '$6$ m/s'],
    correctIndex: 2,
    explanation: '$v_{cm} = 9/3 = 3$ m/s, so in that frame the $1$ kg ball moves at $+6$ m/s and reverses to $-6$ m/s. Back in the lab, $v = -6 + 3 = -3$ m/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pccom-ent-5a',
    question: 'A shell would land $120$ m from its launch point. At the top of its path it splits into a piece with $1/3$ of the mass, which drops straight down from rest, and a piece with $2/3$ of the mass. Ignoring air resistance, where does the heavier piece land?',
    options: ['$150$ m', '$180$ m', '$120$ m', '$240$ m'],
    correctIndex: 0,
    explanation: 'Both pieces land together, and their center of mass still lands at $120$ m. The light piece lands at $60$ m, so $\\frac{1}{3}(60) + \\frac{2}{3}x = 120$ gives $x = 150$ m. The value $180$ m applies only to equal halves.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccom-ent-5b',
    question: 'In an Atwood machine with unequal masses on a light, frictionless pulley, how does the center of mass of the two hanging masses accelerate?',
    options: [
      'Downward at exactly $g$',
      'Not at all',
      'Upward, since the pulley pulls up',
      'Downward, with magnitude less than $g$',
    ],
    correctIndex: 3,
    explanation: 'The external forces are the total weight and the upward pull $2T$ from the pulley, with $2T < (m_1 + m_2)g$. The net external force is downward but smaller than the weight, so $a_{cm} = (m_1 - m_2)^2 g/(m_1 + m_2)^2$, downward and less than $g$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pccom-ent-6a',
    question: 'A $4$ kg ball moving at $5$ m/s hits a $1$ kg ball at rest in a head-on elastic collision. How fast does the $1$ kg ball move afterward?',
    options: ['$5$ m/s', '$8$ m/s', '$4$ m/s', '$20$ m/s'],
    correctIndex: 1,
    explanation: 'The center of mass moves at $20/5 = 4$ m/s. In that frame the $1$ kg ball approaches at $-4$ m/s and rebounds at $+4$ m/s, so in the lab it moves at $8$ m/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccom-ent-6b',
    question: 'A rod lies from $x = 0$ to $x = L$ with linear density $\\lambda(x) = \\lambda_0(2 - x/L)$. Where is its center of mass?',
    options: ['$x = 5L/9$', '$x = 2L/3$', '$x = 4L/9$', '$x = L/2$'],
    correctIndex: 2,
    explanation: '$M = \\lambda_0(2L - L/2) = \\frac{3}{2}\\lambda_0 L$ and $\\int_0^L x\\lambda\\,dx = \\lambda_0(L^2 - L^2/3) = \\frac{2}{3}\\lambda_0 L^2$, so $x_{cm} = 4L/9$, shifted toward the denser end at $x = 0$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pccom-ent-7a',
    question: 'A $50$ kg person walks $4.0$ m from one end of a $30$ kg canoe to the other, on calm water with no drag. How far does the person move relative to the water?',
    options: ['$1.5$ m', '$2.5$ m', '$4.0$ m', '$6.7$ m'],
    correctIndex: 0,
    explanation: 'The center of mass stays fixed, so the canoe slides back $50(4.0)/80 = 2.5$ m. The person therefore moves $4.0 - 2.5 = 1.5$ m relative to the water.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pccom-ent-7b',
    question: 'A $2$ kg cart moving at $+3$ m/s and a $4$ kg cart moving at $-3$ m/s collide and stick. What is their velocity afterward?',
    options: ['$1$ m/s', '$0$ m/s', '$3$ m/s', '$-1$ m/s'],
    correctIndex: 3,
    explanation: 'The common velocity is the center-of-mass velocity: $(2(3) + 4(-3))/6 = -1$ m/s. The momenta do not cancel because the masses differ.',
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
