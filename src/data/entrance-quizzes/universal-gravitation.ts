import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Newton's Law of Universal Gravitation
  {
    id: 'ug-ent-1a',
    question: 'Newton\'s law of universal gravitation states that the gravitational force between two masses is proportional to:',
    options: ['$m_1 + m_2$', '$m_1 m_2$', '$m_1 / m_2$', '$(m_1 m_2)^2$'],
    correctIndex: 1,
    explanation: '$F = Gm_1m_2/r^2$. The force is proportional to the product of the two masses.',
    partNumber: 1,
    partTitle: "Newton's Law of Universal Gravitation",
  },
  {
    id: 'ug-ent-1b',
    question: 'The gravitational force between two objects is inversely proportional to the ______ of the distance between their centers.',
    options: ['First power', 'Square', 'Cube', 'Square root'],
    correctIndex: 1,
    explanation: '$F \\propto 1/r^2$. This is the inverse-square law.',
    partNumber: 1,
    partTitle: "Newton's Law of Universal Gravitation",
  },

  // Part 2: The Gravitational Constant
  {
    id: 'ug-ent-2a',
    question: 'The value of $G$ (gravitational constant) is approximately:',
    options: ['$6.67 \\times 10^{-11}$ $N\\cdot m^{2}/kg^{2}$', '$9.8$ $m/s^{2}$', '$6.02 \\times 10^{23}$', '$3.0 \\times 10^8$ m/s'],
    correctIndex: 0,
    explanation: '$G \\approx 6.67 \\times 10^{-11}$ $N\\cdot m^{2}/kg^{2}$ is a universal constant that appears in Newton\'s law of gravitation.',
    partNumber: 2,
    partTitle: 'The Gravitational Constant',
  },
  {
    id: 'ug-ent-2b',
    question: 'The constant $g = 9.8$ $m/s^{2}$ near Earth\'s surface is related to $G$ by which expression?',
    options: ['$g = GM_E$', '$g = G/R_E^2$', '$g = GM_E/R_E^2$', '$g = GM_E R_E$'],
    correctIndex: 2,
    explanation: 'At Earth\'s surface, $mg = GMm/R_E^2$, so $g = GM_E/R_E^2$.',
    partNumber: 2,
    partTitle: 'The Gravitational Constant',
  },

  // Part 3: Inverse-Square Relationship
  {
    id: 'ug-ent-3a',
    question: 'If the distance between two objects triples, the gravitational force becomes:',
    options: ['$1/3$ of original', '$1/6$ of original', '$1/9$ of original', '$3$ times original'],
    correctIndex: 2,
    explanation: '$F \\propto 1/r^2$. Triple the distance: $F \\to F/3^2 = F/9$.',
    partNumber: 3,
    partTitle: 'Inverse-Square Relationship',
  },
  {
    id: 'ug-ent-3b',
    question: 'Two masses are separated by distance $d$. At what distance will the gravitational force be four times as strong?',
    options: ['$d/4$', '$d/2$', '$2d$', '$4d$'],
    correctIndex: 1,
    explanation: '$F \\propto 1/r^2$. For $F$ to quadruple, $r^2$ must decrease by factor 4, so $r = d/2$.',
    partNumber: 3,
    partTitle: 'Inverse-Square Relationship',
  },

  // Part 4: Gravitational Field
  {
    id: 'ug-ent-4a',
    question: 'The gravitational field strength at a point in space is defined as:',
    options: ['$F/m$', '$Fm$', '$F \\times d$', '$G/r$'],
    correctIndex: 0,
    explanation: 'Gravitational field $g = F/m$ — the gravitational force per unit mass at that location.',
    partNumber: 4,
    partTitle: 'Gravitational Field',
  },
  {
    id: 'ug-ent-4b',
    question: 'At what altitude above Earth (radius $R_E$) is the gravitational field strength $g/4$?',
    options: ['$R_E/2$', '$R_E$', '$2R_E$', '$4R_E$'],
    correctIndex: 1,
    explanation: '$g \\propto 1/r^2$. For $g/4$, we need $r^2 = 4R_E^2$, so $r = 2R_E$. The altitude above the surface is $2R_E - R_E = R_E$.',
    partNumber: 4,
    partTitle: 'Gravitational Field',
  },

  // Part 5: Orbital Motion
  {
    id: 'ug-ent-5a',
    question: 'For a satellite in circular orbit, the centripetal force is provided by:',
    options: ['Engine thrust', 'Gravity', 'Atmospheric drag', 'Tension'],
    correctIndex: 1,
    explanation: 'In orbit, gravity is the only force (assuming no drag), and it provides the centripetal force: $GMm/r^2 = mv^2/r$.',
    partNumber: 5,
    partTitle: 'Orbital Motion',
  },
  {
    id: 'ug-ent-5b',
    question: 'The orbital speed of a satellite at distance $r$ from Earth\'s center is:',
    options: ['$v = \\sqrt{GM/r}$', '$v = GM/r$', '$v = \\sqrt{GMr}$', '$v = GM/r^2$'],
    correctIndex: 0,
    explanation: 'Setting gravitational force equal to centripetal force: $GMm/r^2 = mv^2/r$. Solving: $v = \\sqrt{GM/r}$.',
    partNumber: 5,
    partTitle: 'Orbital Motion',
  },

  // Part 6: Kepler's Third Law
  {
    id: 'ug-ent-6a',
    question: 'Kepler\'s third law states that $T^2$ is proportional to:',
    options: ['$r$', '$r^2$', '$r^3$', '$r^4$'],
    correctIndex: 2,
    explanation: 'Kepler\'s third law: $T^2 \\propto r^3$, where $T$ is the orbital period and $r$ is the orbital radius.',
    partNumber: 6,
    partTitle: "Kepler's Third Law",
  },
  {
    id: 'ug-ent-6b',
    question: 'If a planet\'s orbital radius doubles, its period:',
    options: ['Doubles', 'Increases by $\\sqrt{2}$', 'Increases by $2\\sqrt{2}$', 'Quadruples'],
    correctIndex: 2,
    explanation: '$T \\propto r^{3/2}$. If $r \\to 2r$: $T \\to 2^{3/2}T = 2\\sqrt{2}\\,T \\approx 2.83\\,T$.',
    partNumber: 6,
    partTitle: "Kepler's Third Law",
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ug-ent-7a',
    question: 'Two planets have the same density. Planet B has twice the radius of planet A. The surface gravity of B compared to A is:',
    options: ['The same', 'Twice', 'Four times', 'Half'],
    correctIndex: 1,
    explanation: '$g = GM/R^2$ and $M = \\rho \\frac{4}{3}\\pi R^3$, so $g = \\frac{4}{3}\\pi G\\rho R$. Double $R$ gives double $g$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ug-ent-7b',
    question: 'The gravitational force between Earth and the Moon is $F$. If Earth\'s mass were halved and the distance were halved, the force would be:',
    options: ['$F/2$', '$F$', '$2F$', '$4F$'],
    correctIndex: 2,
    explanation: '$F\' = G(M/2)(m)/(r/2)^2 = G(Mm/2)/(r^2/4) = 4GMm/(2r^2) = 2GMm/r^2 = 2F$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Newton's Law of Universal Gravitation" },
    { partNumber: 2, partTitle: 'The Gravitational Constant' },
    { partNumber: 3, partTitle: 'Inverse-Square Relationship' },
    { partNumber: 4, partTitle: 'Gravitational Field' },
    { partNumber: 5, partTitle: 'Orbital Motion' },
    { partNumber: 6, partTitle: "Kepler's Third Law" },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
