import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Horizontal Launch
  {
    id: 'pm-ent-1a',
    question: 'A ball is launched horizontally at $15$ m/s from a $20$ m high cliff. What is the horizontal velocity just before impact? (Ignore air resistance.)',
    options: ['$0$ m/s', '$15$ m/s', '$20$ m/s', '$25$ m/s'],
    correctIndex: 1,
    explanation: 'Horizontal velocity is constant in projectile motion (no horizontal acceleration). It remains $15$ m/s throughout the flight.',
    partNumber: 1,
    partTitle: 'Horizontal Launch',
  },
  {
    id: 'pm-ent-1b',
    question: 'A ball rolls off a table $1.25$ m high. How long does it take to reach the floor? (Use $g = 10$ m/s².)',
    options: ['$0.25$ s', '$0.5$ s', '$1.0$ s', '$1.25$ s'],
    correctIndex: 1,
    explanation: 'Using $h = \\frac{1}{2}gt^2$: $1.25 = \\frac{1}{2}(10)t^2$, so $t^2 = 0.25$ and $t = 0.5$ s.',
    partNumber: 1,
    partTitle: 'Horizontal Launch',
  },

  // Part 2: Angled Launch – Components
  {
    id: 'pm-ent-2a',
    question: 'A projectile is launched at $20$ m/s at $60°$ above the horizontal. What is the initial vertical velocity component?',
    options: ['$10$ m/s', '$10\\sqrt{3}$ m/s', '$20$ m/s', '$20\\sqrt{3}$ m/s'],
    correctIndex: 1,
    explanation: '$v_{0y} = v_0 \\sin\\theta = 20\\sin 60° = 20 \\times \\frac{\\sqrt{3}}{2} = 10\\sqrt{3} \\approx 17.3$ m/s.',
    partNumber: 2,
    partTitle: 'Angled Launch – Components',
  },
  {
    id: 'pm-ent-2b',
    question: 'At the highest point of its trajectory, what is the vertical velocity of a projectile?',
    options: ['Equal to initial velocity', 'Equal to horizontal velocity', 'Zero', 'Maximum'],
    correctIndex: 2,
    explanation: 'At the peak, the projectile momentarily stops rising before descending. The vertical component of velocity is zero at this instant.',
    partNumber: 2,
    partTitle: 'Angled Launch – Components',
  },

  // Part 3: Time of Flight
  {
    id: 'pm-ent-3a',
    question: 'A ball is launched at $30$ m/s at $30°$ on level ground. How long is it in the air? (Use $g = 10$ m/s².)',
    options: ['$1$ s', '$1.5$ s', '$3$ s', '$6$ s'],
    correctIndex: 2,
    explanation: '$v_{0y} = 30\\sin 30° = 15$ m/s. Time to apex = $v_{0y}/g = 15/10 = 1.5$ s. Total time = $2 \\times 1.5 = 3$ s.',
    partNumber: 3,
    partTitle: 'Time of Flight',
  },
  {
    id: 'pm-ent-3b',
    question: 'Doubling the launch speed of a projectile (same angle, level ground) multiplies the time of flight by:',
    options: ['$\\sqrt{2}$', '$2$', '$4$', '$8$'],
    correctIndex: 1,
    explanation: 'Time of flight $T = 2v_0 \\sin\\theta / g$. Doubling $v_0$ doubles $T$.',
    partNumber: 3,
    partTitle: 'Time of Flight',
  },

  // Part 4: Maximum Height
  {
    id: 'pm-ent-4a',
    question: 'A projectile launched at $40$ m/s at $45°$ reaches what maximum height? (Use $g = 10$ m/s².)',
    options: ['$20$ m', '$40$ m', '$80$ m', '$160$ m'],
    correctIndex: 1,
    explanation: '$v_{0y} = 40\\sin 45° = 20\\sqrt{2}$ m/s. $H = v_{0y}^2/(2g) = (20\\sqrt{2})^2/20 = 800/20 = 40$ m.',
    partNumber: 4,
    partTitle: 'Maximum Height',
  },
  {
    id: 'pm-ent-4b',
    question: 'Two projectiles are launched at the same speed: one at $30°$ and one at $60°$. Which reaches a greater maximum height?',
    options: ['The $30°$ projectile', 'The $60°$ projectile', 'They reach the same height', 'It depends on the mass'],
    correctIndex: 1,
    explanation: 'Max height depends on $v_{0y} = v_0\\sin\\theta$. Since $\\sin 60° > \\sin 30°$, the $60°$ launch has a larger vertical component and reaches a greater height.',
    partNumber: 4,
    partTitle: 'Maximum Height',
  },

  // Part 5: Range
  {
    id: 'pm-ent-5a',
    question: 'Which launch angle gives the maximum range on level ground (no air resistance)?',
    options: ['$30°$', '$45°$', '$60°$', '$90°$'],
    correctIndex: 1,
    explanation: 'Range $R = v_0^2 \\sin 2\\theta / g$. This is maximized when $\\sin 2\\theta = 1$, i.e., $2\\theta = 90°$, so $\\theta = 45°$.',
    partNumber: 5,
    partTitle: 'Range',
  },
  {
    id: 'pm-ent-5b',
    question: 'Projectiles launched at $30°$ and $60°$ with the same speed on level ground have:',
    options: ['The same range', 'The same max height', 'The same time of flight', 'Nothing in common'],
    correctIndex: 0,
    explanation: 'Complementary angles ($30°$ and $60°$) give the same range because $\\sin 2(30°) = \\sin 60° = \\sin 2(60°) = \\sin 120° = \\sin 60°$.',
    partNumber: 5,
    partTitle: 'Range',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'pm-ent-6a',
    question: 'A projectile is launched at $50$ m/s at $37°$ ($\\sin 37° \\approx 0.6$, $\\cos 37° \\approx 0.8$). What is the range on level ground? (Use $g = 10$ m/s².)',
    options: ['$120$ m', '$200$ m', '$240$ m', '$300$ m'],
    correctIndex: 2,
    explanation: '$R = v_0^2 \\sin 2\\theta / g = 2500 \\sin 74° / 10$. Or use $R = v_{0x} \\times T = (50 \\times 0.8) \\times 2(50 \\times 0.6)/10 = 40 \\times 6 = 240$ m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pm-ent-6b',
    question: 'A ball is launched horizontally at $10$ m/s from a $45$ m high cliff. How far from the base does it land? (Use $g = 10$ m/s².)',
    options: ['$10$ m', '$20$ m', '$30$ m', '$45$ m'],
    correctIndex: 2,
    explanation: 'Time to fall: $45 = \\frac{1}{2}(10)t^2 \\Rightarrow t = 3$ s. Horizontal distance $= 10 \\times 3 = 30$ m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'pm-ent-7a',
    question: 'At what two points in a projectile\'s trajectory is the speed the same (launched and landing on level ground)?',
    options: [
      'At launch and at the peak',
      'At the peak and at landing',
      'At launch and at landing',
      'Speed is constant throughout',
    ],
    correctIndex: 2,
    explanation: 'By symmetry, the speed at launch equals the speed at landing (same height). The vertical component reverses direction but has the same magnitude.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'pm-ent-7b',
    question: 'A projectile is launched at $v_0$ at angle $\\theta$. If air resistance is now considered, compared to the ideal case the range will:',
    options: ['Increase', 'Decrease', 'Stay the same', 'Depend only on mass'],
    correctIndex: 1,
    explanation: 'Air resistance decelerates the projectile in both directions, reducing both the time of flight and horizontal distance, decreasing the range.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Horizontal Launch' },
    { partNumber: 2, partTitle: 'Angled Launch – Components' },
    { partNumber: 3, partTitle: 'Time of Flight' },
    { partNumber: 4, partTitle: 'Maximum Height' },
    { partNumber: 5, partTitle: 'Range' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
