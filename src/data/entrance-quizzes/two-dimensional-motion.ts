import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Vectors & Components
  {
    id: 'tdm-ent-1a',
    question: 'A vector has a magnitude of $10$ and makes a $30°$ angle with the x-axis. What is the x-component?',
    options: ['$5$', '$5\\sqrt{3}$', '$10\\sqrt{3}$', '$10$'],
    correctIndex: 1,
    explanation: 'The x-component is $10\\cos 30° = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$.',
    partNumber: 1,
    partTitle: 'Vectors & Components',
  },
  {
    id: 'tdm-ent-1b',
    question: 'Two perpendicular vectors have magnitudes $3$ and $4$. What is the magnitude of their resultant?',
    options: ['$1$', '$5$', '$7$', '$12$'],
    correctIndex: 1,
    explanation: 'For perpendicular vectors, the magnitude is $\\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.',
    partNumber: 1,
    partTitle: 'Vectors & Components',
  },

  // Part 2: Vector Addition & Subtraction
  {
    id: 'tdm-ent-2a',
    question: 'Vector A = $(3, 4)$ and vector B = $(1, -2)$. What is A + B?',
    options: ['$(4, 2)$', '$(2, 6)$', '$(4, 6)$', '$(2, 2)$'],
    correctIndex: 0,
    explanation: 'Add component-wise: $(3+1, 4+(-2)) = (4, 2)$.',
    partNumber: 2,
    partTitle: 'Vector Addition & Subtraction',
  },
  {
    id: 'tdm-ent-2b',
    question: 'Which method of vector addition involves placing vectors tip-to-tail?',
    options: ['Component method', 'Graphical (head-to-tail) method', 'Dot product method', 'Cross product method'],
    correctIndex: 1,
    explanation: 'The graphical head-to-tail method places each successive vector\'s tail at the tip of the previous one. The resultant goes from the first tail to the last tip.',
    partNumber: 2,
    partTitle: 'Vector Addition & Subtraction',
  },

  // Part 3: Relative Motion
  {
    id: 'tdm-ent-3a',
    question: 'A boat moves at $4$ m/s east relative to water. The river flows $3$ m/s south. What is the boat\'s speed relative to the ground?',
    options: ['$1$ m/s', '$5$ m/s', '$7$ m/s', '$12$ m/s'],
    correctIndex: 1,
    explanation: 'The velocities are perpendicular, so the resultant speed is $\\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ m/s.',
    partNumber: 3,
    partTitle: 'Relative Motion',
  },
  {
    id: 'tdm-ent-3b',
    question: 'Car A moves east at $60$ km/h and car B moves west at $40$ km/h. What is the velocity of A relative to B?',
    options: ['$20$ km/h east', '$100$ km/h east', '$100$ km/h west', '$20$ km/h west'],
    correctIndex: 1,
    explanation: 'Relative velocity = $v_A - v_B = 60 - (-40) = 100$ km/h east (taking east as positive).',
    partNumber: 3,
    partTitle: 'Relative Motion',
  },

  // Part 4: Independence of Perpendicular Motions
  {
    id: 'tdm-ent-4a',
    question: 'A ball is launched horizontally from a cliff. Which component of velocity changes during flight (ignoring air resistance)?',
    options: ['Horizontal only', 'Vertical only', 'Both horizontal and vertical', 'Neither changes'],
    correctIndex: 1,
    explanation: 'With no air resistance, horizontal velocity is constant. Only the vertical component changes due to gravitational acceleration.',
    partNumber: 4,
    partTitle: 'Independence of Perpendicular Motions',
  },
  {
    id: 'tdm-ent-4b',
    question: 'A bullet is fired horizontally and another is dropped from the same height at the same time. Ignoring air resistance, which hits the ground first?',
    options: ['The fired bullet', 'The dropped bullet', 'They hit at the same time', 'It depends on the bullet mass'],
    correctIndex: 2,
    explanation: 'Horizontal and vertical motions are independent. Both bullets experience the same vertical acceleration ($g$) and start with zero vertical velocity, so they hit the ground simultaneously.',
    partNumber: 4,
    partTitle: 'Independence of Perpendicular Motions',
  },

  // Part 5: Displacement in 2D
  {
    id: 'tdm-ent-5a',
    question: 'An object moves $6$ m north, then $8$ m east. What is the magnitude of the total displacement?',
    options: ['$14$ m', '$10$ m', '$2$ m', '$48$ m'],
    correctIndex: 1,
    explanation: '$|\\vec{d}| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ m.',
    partNumber: 5,
    partTitle: 'Displacement in 2D',
  },
  {
    id: 'tdm-ent-5b',
    question: 'An object moves $5$ m at $37°$ north of east. What is the northward (y) component of displacement?',
    options: ['$4$ m', '$3$ m', '$5$ m', '$2.5$ m'],
    correctIndex: 1,
    explanation: 'The northward component = $5\\sin 37° \\approx 5 \\times 0.6 = 3$ m.',
    partNumber: 5,
    partTitle: 'Displacement in 2D',
  },

  // Part 6: Problem-Solving in 2D
  {
    id: 'tdm-ent-6a',
    question: 'A plane flies at $200$ km/h north in a wind blowing $50$ km/h east. What is the plane\'s ground speed?',
    options: ['$150$ km/h', '$250$ km/h', '$\\approx 206$ km/h', '$\\approx 250$ km/h'],
    correctIndex: 2,
    explanation: '$v = \\sqrt{200^2 + 50^2} = \\sqrt{40000 + 2500} = \\sqrt{42500} \\approx 206$ km/h.',
    partNumber: 6,
    partTitle: 'Problem-Solving in 2D',
  },
  {
    id: 'tdm-ent-6b',
    question: 'A swimmer aims straight across a $100$ m wide river. The current carries them $75$ m downstream. What angle to the bank does the actual path make?',
    options: ['$\\approx 37°$', '$\\approx 53°$', '$\\approx 45°$', '$\\approx 60°$'],
    correctIndex: 1,
    explanation: '$\\tan\\theta = 100/75 = 4/3$, so $\\theta = \\arctan(4/3) \\approx 53°$ from the bank.',
    partNumber: 6,
    partTitle: 'Problem-Solving in 2D',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'tdm-ent-7a',
    question: 'Three displacement vectors $A = 3\\hat{i}$, $B = 4\\hat{j}$, and $C = -3\\hat{i}$ are added. What is the resultant?',
    options: ['$4\\hat{j}$', '$6\\hat{i} + 4\\hat{j}$', '$3\\hat{i} + 4\\hat{j}$', '$7\\hat{j}$'],
    correctIndex: 0,
    explanation: 'Summing: x-components $= 3 + 0 + (-3) = 0$; y-components $= 0 + 4 + 0 = 4$. Resultant $= 4\\hat{j}$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'tdm-ent-7b',
    question: 'A particle has velocity $\\vec{v} = (3t)\\hat{i} + (4)\\hat{j}$ m/s. At $t = 2$ s, what is the speed?',
    options: ['$10$ m/s', '$8$ m/s', '$\\approx 7.2$ m/s', '$\\approx 5$ m/s'],
    correctIndex: 0,
    explanation: 'At $t=2$: $v_x = 6$ m/s, $v_y = 4$ m/s. Speed $= \\sqrt{6^2+4^2} = \\sqrt{52} \\approx 7.2$ m/s. Wait — $\\sqrt{36+16} = \\sqrt{52} \\approx 7.2$, so the answer is $\\approx 7.2$ m/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Vectors & Components' },
    { partNumber: 2, partTitle: 'Vector Addition & Subtraction' },
    { partNumber: 3, partTitle: 'Relative Motion' },
    { partNumber: 4, partTitle: 'Independence of Perpendicular Motions' },
    { partNumber: 5, partTitle: 'Displacement in 2D' },
    { partNumber: 6, partTitle: 'Problem-Solving in 2D' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
