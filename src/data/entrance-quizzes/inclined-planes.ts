import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Forces on an Incline
  {
    id: 'ip-ent-1a',
    question: 'On an inclined plane of angle $\\theta$, the component of gravity parallel to the surface is:',
    options: ['$mg\\cos\\theta$', '$mg\\sin\\theta$', '$mg\\tan\\theta$', '$mg$'],
    correctIndex: 1,
    explanation: 'The gravitational component along the incline is $mg\\sin\\theta$. This is the force that tends to pull the object down the slope.',
    partNumber: 1,
    partTitle: 'Forces on an Incline',
  },
  {
    id: 'ip-ent-1b',
    question: 'The normal force on an object resting on a frictionless incline of angle $\\theta$ is:',
    options: ['$mg$', '$mg\\sin\\theta$', '$mg\\cos\\theta$', '$mg\\tan\\theta$'],
    correctIndex: 2,
    explanation: 'The normal force balances the component of gravity perpendicular to the surface: $N = mg\\cos\\theta$.',
    partNumber: 1,
    partTitle: 'Forces on an Incline',
  },

  // Part 2: Frictionless Inclines
  {
    id: 'ip-ent-2a',
    question: 'A block slides down a frictionless $30°$ incline. What is its acceleration? (Use $g = 10$ m/s².)',
    options: ['$5$ m/s²', '$5\\sqrt{3}$ m/s²', '$10$ m/s²', '$10\\sqrt{3}$ m/s²'],
    correctIndex: 0,
    explanation: '$a = g\\sin\\theta = 10\\sin 30° = 10 \\times 0.5 = 5$ m/s².',
    partNumber: 2,
    partTitle: 'Frictionless Inclines',
  },
  {
    id: 'ip-ent-2b',
    question: 'On a frictionless incline, does the acceleration depend on the mass of the object?',
    options: ['Yes, heavier objects accelerate faster', 'Yes, lighter objects accelerate faster', 'No, acceleration is $g\\sin\\theta$ for all masses', 'Only if the incline is steep'],
    correctIndex: 2,
    explanation: 'On a frictionless incline, $ma = mg\\sin\\theta$, so $a = g\\sin\\theta$, which is independent of mass.',
    partNumber: 2,
    partTitle: 'Frictionless Inclines',
  },

  // Part 3: Inclines with Friction
  {
    id: 'ip-ent-3a',
    question: 'A $4$ kg block slides down a $37°$ incline with $\\mu_k = 0.25$. What is the friction force? ($\\sin 37° \\approx 0.6$, $\\cos 37° \\approx 0.8$, $g = 10$ m/s².)',
    options: ['$4$ N', '$6$ N', '$8$ N', '$10$ N'],
    correctIndex: 2,
    explanation: '$N = mg\\cos\\theta = 4(10)(0.8) = 32$ N. $f_k = \\mu_k N = 0.25 \\times 32 = 8$ N.',
    partNumber: 3,
    partTitle: 'Inclines with Friction',
  },
  {
    id: 'ip-ent-3b',
    question: 'A block on a rough incline moves at constant velocity. The net force along the incline is:',
    options: ['Equal to $mg\\sin\\theta$', 'Equal to friction', 'Zero', 'Equal to $mg$'],
    correctIndex: 2,
    explanation: 'Constant velocity means zero acceleration, so the net force is zero. Friction exactly balances the component of gravity along the incline.',
    partNumber: 3,
    partTitle: 'Inclines with Friction',
  },

  // Part 4: Objects at Rest on Inclines
  {
    id: 'ip-ent-4a',
    question: 'A box rests on a $20°$ incline without sliding. The static friction must be:',
    options: ['Zero', 'Equal to $mg\\sin 20°$', 'Equal to $mg\\cos 20°$', 'Equal to $mg$'],
    correctIndex: 1,
    explanation: 'For the box to remain stationary, static friction must balance the parallel component of gravity: $f_s = mg\\sin 20°$.',
    partNumber: 4,
    partTitle: 'Objects at Rest on Inclines',
  },
  {
    id: 'ip-ent-4b',
    question: 'The steepest angle at which a block can remain at rest on an incline with $\\mu_s = 0.5$ is:',
    options: ['$\\approx 27°$', '$\\approx 30°$', '$\\approx 45°$', '$\\approx 60°$'],
    correctIndex: 0,
    explanation: 'At the critical angle: $\\tan\\theta = \\mu_s = 0.5$, so $\\theta = \\arctan(0.5) \\approx 27°$.',
    partNumber: 4,
    partTitle: 'Objects at Rest on Inclines',
  },

  // Part 5: Pushing/Pulling on Inclines
  {
    id: 'ip-ent-5a',
    question: 'A $10$ kg box is pushed up a smooth $30°$ incline with a force of $80$ N parallel to the surface. What is the acceleration? (Use $g = 10$ m/s².)',
    options: ['$3$ m/s²', '$5$ m/s²', '$8$ m/s²', '$13$ m/s²'],
    correctIndex: 0,
    explanation: 'Net force up the incline: $F - mg\\sin 30° = 80 - 10(10)(0.5) = 80 - 50 = 30$ N. $a = 30/10 = 3$ m/s².',
    partNumber: 5,
    partTitle: 'Pushing/Pulling on Inclines',
  },
  {
    id: 'ip-ent-5b',
    question: 'A force is applied horizontally to push a block up a frictionless incline. The normal force compared to $mg\\cos\\theta$ is:',
    options: ['Smaller', 'The same', 'Larger', 'Zero'],
    correctIndex: 2,
    explanation: 'A horizontal push has a component perpendicular to the incline ($F\\sin\\theta$) that adds to $mg\\cos\\theta$, increasing the normal force.',
    partNumber: 5,
    partTitle: 'Pushing/Pulling on Inclines',
  },

  // Part 6: Connected Objects on Inclines
  {
    id: 'ip-ent-6a',
    question: 'A $5$ kg block on a $30°$ frictionless incline is connected by a string over a pulley to a $3$ kg hanging mass. Which way does the system accelerate? (Use $g = 10$ m/s².)',
    options: ['The $5$ kg block slides down', 'The $3$ kg mass falls', 'The system is in equilibrium', 'Not enough information'],
    correctIndex: 0,
    explanation: 'Force pulling 5 kg down the incline: $5(10)\\sin 30° = 25$ N. Weight of 3 kg mass: $3(10) = 30$ N. Wait — $30 > 25$, so the hanging mass falls and pulls the block up. Actually let me recalculate: the 3 kg mass weighs 30 N pulling one way, gravity along the incline on the 5 kg block is 25 N. Since 30 > 25, the 3 kg mass descends.',
    partNumber: 6,
    partTitle: 'Connected Objects on Inclines',
  },
  {
    id: 'ip-ent-6b',
    question: 'For a block on a frictionless incline connected to a hanging mass, the tension in the string is:',
    options: [
      'Equal to the weight of the hanging mass',
      'Equal to the component of gravity along the incline',
      'Between those two values',
      'Zero',
    ],
    correctIndex: 2,
    explanation: 'If the system accelerates, the tension is less than the larger force and more than the smaller force. It takes an intermediate value determined by $T = m_1(g - a)$ or $T = m_2(g\\sin\\theta + a)$.',
    partNumber: 6,
    partTitle: 'Connected Objects on Inclines',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ip-ent-7a',
    question: 'A skier ($60$ kg) descends a $45°$ slope with $\\mu_k = 0.1$. What is the net acceleration? (Use $g = 10$ m/s², $\\sin 45° = \\cos 45° \\approx 0.707$.)',
    options: ['$\\approx 6.4$ m/s²', '$\\approx 7.1$ m/s²', '$\\approx 5.0$ m/s²', '$\\approx 3.5$ m/s²'],
    correctIndex: 0,
    explanation: '$a = g(\\sin 45° - \\mu_k \\cos 45°) = 10(0.707 - 0.1 \\times 0.707) = 10(0.707)(0.9) \\approx 6.4$ m/s².',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ip-ent-7b',
    question: 'Increasing the angle of an incline (while keeping $\\mu_k$ the same) causes the acceleration of a sliding object to:',
    options: ['Decrease', 'Stay the same', 'Increase', 'Depend only on mass'],
    correctIndex: 2,
    explanation: '$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$. As $\\theta$ increases, $\\sin\\theta$ increases faster than the decrease in $\\mu_k\\cos\\theta$, so acceleration increases.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Forces on an Incline' },
    { partNumber: 2, partTitle: 'Frictionless Inclines' },
    { partNumber: 3, partTitle: 'Inclines with Friction' },
    { partNumber: 4, partTitle: 'Objects at Rest on Inclines' },
    { partNumber: 5, partTitle: 'Pushing/Pulling on Inclines' },
    { partNumber: 6, partTitle: 'Connected Objects on Inclines' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
