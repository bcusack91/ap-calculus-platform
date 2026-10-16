/**
 * Entrance Quiz — Universal Gravitation — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Newton's Law of Gravitation
  {
    id: 'ug-ent-1a',
    question: 'Two asteroids attract each other with a gravitational force $F$. If the mass of one asteroid were tripled and the distance between their centers doubled, what would the force become?',
    options: [
      '$12F$',
      '$\\tfrac{3}{2}F$',
      '$\\tfrac{3}{4}F$',
      '$\\tfrac{4}{3}F$',
    ],
    correctIndex: 2,
    explanation: '$F \\propto m_1 m_2/r^2$: tripling one mass multiplies the force by 3, and doubling the distance divides it by $2^2 = 4$, giving $\\tfrac{3}{4}F$. Dividing by 2 instead of 4 gives $\\tfrac{3}{2}F$.',
    partNumber: 1,
    partTitle: 'Newton\'s Law of Gravitation',
  },
  {
    id: 'ug-ent-1b',
    question: 'Two 50 kg students stand with their centers 2.0 m apart. What is the gravitational force between them? Use $G = 6.67 \\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$.',
    options: [
      '$8.3 \\times 10^{-8}$ N',
      '$2.1 \\times 10^{-8}$ N',
      '$1.7 \\times 10^{-7}$ N',
      '$4.2 \\times 10^{-8}$ N',
    ],
    correctIndex: 3,
    explanation: '$F = Gm_1m_2/r^2 = (6.67 \\times 10^{-11})(50)(50)/(2.0)^2 = 4.2 \\times 10^{-8}$ N, far too small to notice. Forgetting to square the distance gives $8.3 \\times 10^{-8}$ N, and forgetting to divide by $r^2$ at all gives $1.7 \\times 10^{-7}$ N.',
    partNumber: 1,
    partTitle: 'Newton\'s Law of Gravitation',
  },
  // Part 2 — Gravitational Field Strength
  {
    id: 'ug-ent-2a',
    question: 'A planet has twice Earth\'s mass and three times Earth\'s radius. What is the gravitational field strength at its surface? Use $g = 10\\text{ m/s}^2$ on Earth.',
    options: [
      '$2.2\\text{ m/s}^2$',
      '$6.7\\text{ m/s}^2$',
      '$4.4\\text{ m/s}^2$',
      '$1.1\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: '$g = GM/R^2$, so the field is $2/3^2 = 2/9$ of Earth\'s: $10 \\times 2/9 = 2.2\\text{ m/s}^2$. Using $R$ instead of $R^2$ gives 6.7.',
    partNumber: 2,
    partTitle: 'Gravitational Field Strength',
  },
  {
    id: 'ug-ent-2b',
    question: 'An object weighs 720 N on Earth\'s surface. What does it weigh at a point 3 Earth radii from Earth\'s center?',
    options: [
      '240 N',
      '80 N',
      '45 N',
      '360 N',
    ],
    correctIndex: 1,
    explanation: 'The field falls off as $1/r^2$. At $r = 3R_E$ it is $1/9$ of the surface value, so the weight is $720/9 = 80$ N. Treating $3R_E$ as an altitude ($r = 4R_E$) gives 45 N.',
    partNumber: 2,
    partTitle: 'Gravitational Field Strength',
  },
  // Part 3 — Orbits & Satellite Motion
  {
    id: 'ug-ent-3a',
    question: 'A satellite in a circular orbit of radius $r$ around a planet moves at speed $v$. What would be the orbital speed of a satellite in a circular orbit of radius $9r$ around the same planet?',
    options: [
      '$v/9$',
      '$3v$',
      '$v/3$',
      '$v/\\sqrt{3}$',
    ],
    correctIndex: 2,
    explanation: 'Setting $GMm/r^2 = mv^2/r$ gives $v = \\sqrt{GM/r}$, so nine times the radius gives $1/\\sqrt{9} = 1/3$ the speed. Higher orbits are slower.',
    partNumber: 3,
    partTitle: 'Orbits & Satellite Motion',
  },
  {
    id: 'ug-ent-3b',
    question: 'A 100 kg satellite and a 1000 kg satellite orbit Earth in circular orbits of the same radius. How do their motions compare?',
    options: [
      'The heavier one moves slower, since it is harder to pull',
      'The heavier one moves faster and has a shorter period',
      'The lighter one moves faster and has a shorter period',
      'They have equal speeds and equal periods',
    ],
    correctIndex: 3,
    explanation: 'The satellite\'s mass cancels from $GMm/r^2 = mv^2/r$, so $v = \\sqrt{GM/r}$ and the period depend only on Earth\'s mass and the orbital radius.',
    partNumber: 3,
    partTitle: 'Orbits & Satellite Motion',
  },
  // Part 4 — Kepler's Third Law: $T^2 \propto r^3$
  {
    id: 'ug-ent-4a',
    question: 'A moon orbits a planet in 2.0 days at orbital radius $r$. A second moon orbits the same planet at radius $4r$. What is its period?',
    options: [
      '16 days',
      '8.0 days',
      '32 days',
      '4.0 days',
    ],
    correctIndex: 0,
    explanation: 'For orbits around the same body $T^2 \\propto r^3$, so $T \\propto r^{3/2}$: $4^{3/2} = 8$, and $8 \\times 2.0 = 16$ days. Scaling the period by 4 or 16 confuses the exponents.',
    partNumber: 4,
    partTitle: 'Kepler\'s Third Law: $T^2 \\propto r^3$',
  },
  {
    id: 'ug-ent-4b',
    question: 'Students plot $T^2$ versus $r^3$ for the moons of Jupiter and, separately, for the moons of Saturn. Both give straight lines through the origin, but Jupiter\'s line has the smaller slope. What does that show?',
    options: [
      'Jupiter\'s moons have greater masses',
      'Jupiter is more massive',
      'Jupiter has the larger planetary radius',
      'Jupiter has the smaller mass',
    ],
    correctIndex: 1,
    explanation: 'From $GMm/r^2 = 4\\pi^2 mr/T^2$, $T^2 = (4\\pi^2/GM)r^3$, so the slope is $4\\pi^2/(GM)$. A smaller slope means a larger central mass; the moons\' masses cancel.',
    partNumber: 4,
    partTitle: 'Kepler\'s Third Law: $T^2 \\propto r^3$',
  },
  // Part 5 — Satellite Problems & Orbital Velocity
  {
    id: 'ug-ent-5a',
    question: 'Escape speed from Earth\'s surface is 11.2 km/s. What is the escape speed from the surface of a planet with twice Earth\'s mass and twice Earth\'s radius?',
    options: [
      '15.8 km/s',
      '22.4 km/s',
      '11.2 km/s',
      '7.9 km/s',
    ],
    correctIndex: 2,
    explanation: '$v_{\\text{esc}} = \\sqrt{2GM/R}$, and doubling both $M$ and $R$ leaves $M/R$ unchanged, so the escape speed is the same 11.2 km/s.',
    partNumber: 5,
    partTitle: 'Satellite Problems & Orbital Velocity',
  },
  {
    id: 'ug-ent-5b',
    question: 'A satellite is moved from a lower circular orbit to a higher circular orbit around Earth. How do its orbital speed and the total mechanical energy of the satellite-Earth system change?',
    options: [
      'Its speed and the total energy both decrease',
      'Its speed and the total energy both increase',
      'Its speed increases but the total energy decreases',
      'Its speed decreases, but the total energy increases',
    ],
    correctIndex: 3,
    explanation: 'Orbital speed $\\sqrt{GM/r}$ falls as $r$ grows, but the total energy $-GMm/(2r)$ becomes less negative, which is an increase. Rockets must add energy even though the satellite ends up slower.',
    partNumber: 5,
    partTitle: 'Satellite Problems & Orbital Velocity',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'ug-ent-6a',
    question: 'A moon orbits a planet in a circle of radius $4.0 \\times 10^8$ m with a period of $2.0 \\times 10^6$ s. What is the planet\'s mass? Use $G = 6.67 \\times 10^{-11}\\ \\text{N}\\cdot\\text{m}^2/\\text{kg}^2$.',
    options: [
      '$9.5 \\times 10^{24}$ kg',
      '$1.9 \\times 10^{31}$ kg',
      '$2.4 \\times 10^{23}$ kg',
      '$2.4 \\times 10^{16}$ kg',
    ],
    correctIndex: 0,
    explanation: 'Gravity supplies the centripetal force, so $M = 4\\pi^2 r^3/(GT^2) = 39.5(6.4 \\times 10^{25})/[(6.67 \\times 10^{-11})(4.0 \\times 10^{12})] = 9.5 \\times 10^{24}$ kg. Leaving out $4\\pi^2$ gives $2.4 \\times 10^{23}$ kg.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ug-ent-6b',
    question: 'Satellite A orbits just above the surface of a planet of radius $R$. Satellite B orbits the same planet at an altitude of $R$ above the surface. What is the ratio of their periods, $T_B/T_A$?',
    options: [
      '$2$',
      '$2\\sqrt{2}$',
      '$4$',
      '$\\sqrt{2}$',
    ],
    correctIndex: 1,
    explanation: 'B\'s orbital radius is $2R$, measured from the planet\'s center. With $T \\propto r^{3/2}$, $T_B/T_A = 2^{3/2} = 2\\sqrt{2}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'ug-ent-7a',
    question: 'Astronauts aboard a space station orbiting 400 km above Earth float inside the cabin, even though Earth\'s gravitational field there is about 90% of its surface value. Why?',
    options: [
      'Station rotation creates an outward force canceling gravity',
      'Earth\'s gravity at that altitude is too weak to pull on them',
      'They and the station fall together, so the floor exerts no force',
      'Their high orbital speed cancels the pull of gravity',
    ],
    correctIndex: 2,
    explanation: 'Gravity is still strong there and supplies their centripetal acceleration. Because the astronauts and station accelerate identically, the floor exerts no normal force on them, so they feel weightless.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ug-ent-7b',
    question: 'A satellite completes one circular orbit around a planet every 4.0 h. If its orbital radius were four times as large, what would its period be?',
    options: [
      '16 h',
      '8.0 h',
      '64 h',
      '32 h',
    ],
    correctIndex: 3,
    explanation: '$T \\propto r^{3/2}$, and $4^{3/2} = 8$, so the new period is $8 \\times 4.0 = 32$ h. Scaling the period linearly with $r$ gives 16 h, and scaling it with $r^2$ gives 64 h.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Newton\'s Law of Gravitation' },
    { partNumber: 2, partTitle: 'Gravitational Field Strength' },
    { partNumber: 3, partTitle: 'Orbits & Satellite Motion' },
    { partNumber: 4, partTitle: 'Kepler\'s Third Law: $T^2 \\propto r^3$' },
    { partNumber: 5, partTitle: 'Satellite Problems & Orbital Velocity' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
