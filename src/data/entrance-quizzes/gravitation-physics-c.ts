/**
 * Entrance Quiz — AP Physics C: Mechanics, Gravitation
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Universal Gravitation',
  'Gravitational PE & Orbits',
  'Kepler\'s Third Law and Elliptical Orbits',
  'The Shell Theorem and Gravity Inside a Sphere',
  'Satellite Energy',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcgr-ent-1a',
    question: 'Earth has $81$ times the Moon\'s mass, and their centers are a distance $D$ apart. How far from Earth\'s center, along the line between them, is the net gravitational field zero?',
    options: ['$0.90D$', '$0.50D$', '$0.99D$', '$0.10D$'],
    correctIndex: 0,
    explanation: 'Setting $\\frac{81M}{x^2} = \\frac{M}{(D - x)^2}$ gives $\\frac{9}{x} = \\frac{1}{D - x}$, so $x = 0.90D$. Using $81/82$ instead of the square root gives $0.99D$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcgr-ent-1b',
    question: 'A planet has the same average density as Earth but three times Earth\'s radius. What is the gravitational field at its surface, in terms of Earth\'s $g_E$?',
    options: ['$27g_E$', '$3g_E$', '$g_E/3$', '$g_E/9$'],
    correctIndex: 1,
    explanation: '$g = GM/R^2$ with $M = \\rho\\frac{4}{3}\\pi R^3$, so $g \\propto \\rho R$. Tripling $R$ at the same density triples $g$. The value $27g_E$ scales the mass but forgets the $1/R^2$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcgr-ent-2a',
    question: 'How much work is needed to move a $100$ kg probe from rest at Earth\'s surface to rest at a distance $2R$ from Earth\'s center? (Use $g = 9.8$ m/s$^2$, $R = 6.37 \\times 10^6$ m.)',
    options: [
      '$6.2 \\times 10^9$ J',
      '$1.6 \\times 10^9$ J',
      '$3.1 \\times 10^9$ J',
      '$1.2 \\times 10^{10}$ J',
    ],
    correctIndex: 2,
    explanation: '$W = \\Delta U = GMm\\left(\\frac{1}{R} - \\frac{1}{2R}\\right) = \\frac{GMm}{2R} = \\frac{mgR}{2} \\approx 3.1 \\times 10^9$ J. Using $mgh$ with $h = R$ treats $g$ as constant and gives $6.2 \\times 10^9$ J.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcgr-ent-2b',
    question: 'A probe sits at height $h$ above the surface of an airless planet of mass $M$ and radius $R$. What launch speed lets it just escape the planet?',
    options: [
      '$\\sqrt{\\frac{2GM}{R}}$',
      '$\\sqrt{\\frac{GM}{R + h}}$',
      '$\\sqrt{2gh}$',
      '$\\sqrt{\\frac{2GM}{R + h}}$',
    ],
    correctIndex: 3,
    explanation: 'Escape means $E = \\frac{1}{2}mv^2 - \\frac{GMm}{R + h} = 0$, so $v = \\sqrt{2GM/(R + h)}$, measured from the planet\'s center. The expression without the $2$ is the circular-orbit speed there.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcgr-ent-3a',
    question: 'A planet orbits a star with $9$ times the Sun\'s mass in a circular orbit of radius $9$ AU. What is its orbital period?',
    options: ['$9$ years', '$27$ years', '$81$ years', '$243$ years'],
    correctIndex: 0,
    explanation: '$T^2 = \\frac{4\\pi^2 r^3}{GM}$, so in solar units $T^2 = r^3/M = 729/9 = 81$ and $T = 9$ years. Ignoring the star\'s larger mass gives $27$ years.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcgr-ent-3b',
    question: 'A satellite\'s distance from a planet\'s center ranges from $1.0 \\times 10^7$ m to $2.0 \\times 10^7$ m. At closest approach its speed is $7.0$ km/s. What is its speed at the farthest point?',
    options: ['$7.0$ km/s', '$3.5$ km/s', '$1.8$ km/s', '$4.9$ km/s'],
    correctIndex: 1,
    explanation: 'Gravity exerts no torque about the planet, and $\\vec{v} \\perp \\vec{r}$ at both extremes, so $r_1v_1 = r_2v_2$ and $v_2 = 7.0/2 = 3.5$ km/s. Dividing by $2^2$ gives $1.8$ km/s.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcgr-ent-4a',
    question: 'Treat Earth as a uniform solid sphere with surface field $9.8$ m/s$^2$. What is the gravitational field one third of the way from the center to the surface?',
    options: ['$88$ m/s$^2$', '$0$ m/s$^2$', '$3.3$ m/s$^2$', '$29$ m/s$^2$'],
    correctIndex: 2,
    explanation: 'Only the mass inside radius $r$ pulls, and it scales as $r^3$, so $g = (GM/R^3)\\,r \\propto r$ and $g(R/3) = 9.8/3 \\approx 3.3$ m/s$^2$. Using the outside formula $GM/r^2$ gives $88$ m/s$^2$.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcgr-ent-4b',
    question: 'An object dropped into a frictionless tunnel through the center of a uniform planet oscillates in SHM. A second planet has the same density as Earth but half its radius. How does the oscillation period there compare with Earth\'s?',
    options: [
      'Half as long as Earth\'s',
      '$\\sqrt{2}$ times shorter than Earth\'s',
      'Twice as long as Earth\'s',
      'The same as Earth\'s',
    ],
    correctIndex: 3,
    explanation: 'Inside, $F = -(GMm/R^3)\\,r$ with $M/R^3 \\propto \\rho$, so $\\omega = \\sqrt{GM/R^3} = \\sqrt{\\frac{4}{3}\\pi G\\rho}$. The period depends only on density, so it is unchanged.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcgr-ent-5a',
    question: 'How much energy must be added to move a $500$ kg satellite from a circular orbit of radius $2R$ to one of radius $4R$, where $R$ is Earth\'s radius? (Use $g = 9.8$ m/s$^2$, $R = 6.37 \\times 10^6$ m.)',
    options: [
      '$3.9 \\times 10^9$ J',
      '$7.8 \\times 10^9$ J',
      '$-3.9 \\times 10^9$ J',
      '$1.6 \\times 10^{10}$ J',
    ],
    correctIndex: 0,
    explanation: 'With $E = -\\frac{GMm}{2r}$, $\\Delta E = \\frac{GMm}{2}\\left(\\frac{1}{2R} - \\frac{1}{4R}\\right) = \\frac{mgR}{8} \\approx 3.9 \\times 10^9$ J. The value $7.8 \\times 10^9$ J is the change in potential energy alone, ignoring the kinetic energy given back.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcgr-ent-5b',
    question: 'A satellite in a low circular orbit feels slight atmospheric drag and slowly spirals inward through nearly circular orbits. What happens to its speed?',
    options: [
      'It slows down, since drag removes energy',
      'It speeds up, since its total energy falls and $K = -E$',
      'Its speed stays constant',
      'It slows down, since gravity weakens',
    ],
    correctIndex: 1,
    explanation: 'For a circular orbit $E = -\\frac{GMm}{2r}$ and $K = \\frac{GMm}{2r} = -E$. Drag lowers $E$ (more negative), so $r$ shrinks and $K$ grows: gravity does more positive work than drag removes.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcgr-ent-6a',
    question: 'A projectile is launched straight up from Earth\'s surface at $8.0$ km/s. Ignoring air resistance, how far from Earth\'s center does it get? (Use $g = 9.8$ m/s$^2$, $R = 6.37 \\times 10^6$ m.)',
    options: ['$1.51R$', '$4.10R$', '$2.05R$', '$1.26R$'],
    correctIndex: 2,
    explanation: 'Energy conservation: $\\frac{1}{2}v^2 - \\frac{GM}{R} = -\\frac{GM}{r}$, with $GM = gR^2$. This gives $R/r = 1 - v^2/(2gR) \\approx 0.487$, so $r \\approx 2.05R$. Using $h = v^2/(2g)$ with constant $g$ gives $1.51R$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcgr-ent-6b',
    question: 'A moon orbits a planet in a circle of radius $4.0 \\times 10^8$ m with period $2.4 \\times 10^6$ s. What is the planet\'s mass? (Use $G = 6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$.)',
    options: [
      '$3.3 \\times 10^{24}$ kg',
      '$1.6 \\times 10^{16}$ kg',
      '$1.0 \\times 10^{24}$ kg',
      '$6.6 \\times 10^{24}$ kg',
    ],
    correctIndex: 3,
    explanation: '$M = \\frac{4\\pi^2 r^3}{GT^2} = \\frac{39.5(6.4 \\times 10^{25})}{(6.67 \\times 10^{-11})(5.76 \\times 10^{12})} \\approx 6.6 \\times 10^{24}$ kg. Using $r^2$ instead of $r^3$ gives $1.6 \\times 10^{16}$ kg.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcgr-ent-7a',
    question: 'A satellite is in a circular orbit where the gravitational field is $2.45$ m/s$^2$, one quarter of the surface value. What is its orbital speed? (Use $R = 6.37 \\times 10^6$ m.)',
    options: ['$7.9$ km/s', '$5.6$ km/s', '$4.0$ km/s', '$2.8$ km/s'],
    correctIndex: 1,
    explanation: 'A quarter of the surface field means $r = 2R$. For a circular orbit $v^2/r = g_{\\text{local}}$, so $v = \\sqrt{(2.45)(1.27 \\times 10^7)} \\approx 5.6$ km/s. Using $r = R$ in that product gives $4.0$ km/s.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcgr-ent-7b',
    question: 'Which change would lengthen the period of a satellite in a circular orbit?',
    options: [
      'Raising it to a larger radius',
      'Doubling the satellite\'s mass at the same radius',
      'Lowering it while keeping its mass the same',
      'Moving it to a planet of greater mass at the same radius',
    ],
    correctIndex: 0,
    explanation: '$T^2 = 4\\pi^2 r^3/(GM)$ depends on the orbit radius and the central mass, not the satellite\'s mass. A larger $r$ lengthens the period, while a larger $M$ shortens it.',
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
