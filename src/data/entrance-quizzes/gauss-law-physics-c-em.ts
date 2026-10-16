/**
 * Entrance Quiz — AP Physics C: E&M, Gauss's Law
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Electric Flux',
  'Gauss\'s Law Statement',
  'Spherical Symmetry',
  'Cylindrical Symmetry',
  'Planar Symmetry',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcgl-ent-1a',
    question: 'A uniform $300$ N/C electric field passes through a flat $0.40$ m$^2$ surface. The field makes a $30°$ angle with the plane of the surface. What is the flux through it?',
    options: ['$60$ N$\\cdot$m$^2$/C', '$104$ N$\\cdot$m$^2$/C', '$120$ N$\\cdot$m$^2$/C', '$0$ N$\\cdot$m$^2$/C'],
    correctIndex: 0,
    explanation: 'Flux uses the angle with the normal, which is $90° - 30° = 60°$: $\\Phi = EA\\cos 60° = 300(0.40)(0.5) = 60$ N$\\cdot$m$^2$/C. Using $\\cos 30°$ gives $104$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcgl-ent-1b',
    question: 'A closed cube $0.20$ m on a side sits in a uniform $500$ N/C field along $+x$, with two faces perpendicular to the field. What are the net flux through the cube and the flux through the face where the field exits (both in N$\\cdot$m$^2$/C)?',
    options: ['$+20$ and $+20$', '$0$ and $+20$', '$+40$ and $+20$', '$+120$ and $+20$'],
    correctIndex: 1,
    explanation: 'The exit face has $\\Phi = EA = 500(0.040) = +20$ N$\\cdot$m$^2$/C, the entry face $-20$, and the four side faces zero. The net flux is zero, as it must be with no charge inside.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcgl-ent-2a',
    question: 'A closed surface encloses charges of $+6.0$ nC and $-2.0$ nC; a $+4.0$ nC charge sits just outside it. What is the net electric flux through the surface? ($\\epsilon_0 = 8.85 \\times 10^{-12}$ C$^2$/(N$\\cdot$m$^2$))',
    options: ['$904$ N$\\cdot$m$^2$/C', '$678$ N$\\cdot$m$^2$/C', '$452$ N$\\cdot$m$^2$/C', '$1356$ N$\\cdot$m$^2$/C'],
    correctIndex: 2,
    explanation: 'Only enclosed charge counts: $Q_{enc} = +4.0$ nC, so $\\Phi = Q_{enc}/\\epsilon_0 \\approx 452$ N$\\cdot$m$^2$/C. Including the outside charge gives $904$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcgl-ent-2b',
    question: 'A point charge sits off-center inside a closed, irregularly shaped surface. Compared with the flux through a sphere centered on the charge, the net flux through the irregular surface:',
    options: [
      'Is larger, since part of the surface is closer to the charge',
      'Is smaller, since part of the surface is farther away',
      'Cannot be found because $E$ varies over the surface',
      'Is the same',
    ],
    correctIndex: 3,
    explanation: 'Gauss\'s law says the net flux through any closed surface is $Q_{enc}/\\epsilon_0$, whatever its shape or the charge\'s position inside. The varying field only makes $E$ hard to extract, not the flux.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcgl-ent-3a',
    question: 'An insulating sphere of radius $R$ carries charge spread uniformly through its volume. What is the ratio of the field magnitude at $r = R/2$ to that at $r = 2R$?',
    options: ['$2$', '$\\frac{1}{2}$', '$16$', '$\\frac{1}{8}$'],
    correctIndex: 0,
    explanation: 'Inside, $E = kQr/R^3$, so $E(R/2) = kQ/(2R^2)$. Outside, $E(2R) = kQ/(4R^2)$. The ratio is $2$. Using $1/r^2$ at both points gives $16$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcgl-ent-3b',
    question: 'A point charge $+q$ sits at the center of a neutral, thick conducting spherical shell. At equilibrium, what charge is on the shell\'s inner and outer surfaces?',
    options: [
      '$0$ inner, $0$ outer',
      '$-q$ inner, $+q$ outer',
      '$+q$ inner, $-q$ outer',
      '$0$ inner, $+q$ outer',
    ],
    correctIndex: 1,
    explanation: 'The field inside the metal is zero, so a Gaussian sphere within the metal must enclose zero net charge: the inner surface carries $-q$. The shell is neutral, so $+q$ appears on the outer surface.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcgl-ent-4a',
    question: 'A very long straight wire carries a uniform charge of $2.0$ μC/m. What is the field magnitude $0.30$ m from the wire? (Use $k = 9.0 \\times 10^9$ N$\\cdot$m$^2$/C$^2$.)',
    options: [
      '$6.0 \\times 10^4$ N/C',
      '$2.0 \\times 10^5$ N/C',
      '$1.2 \\times 10^5$ N/C',
      '$4.0 \\times 10^5$ N/C',
    ],
    correctIndex: 2,
    explanation: 'A coaxial Gaussian cylinder gives $E(2\\pi rL) = \\lambda L/\\epsilon_0$, so $E = 2k\\lambda/r = 2(9.0 \\times 10^9)(2.0 \\times 10^{-6})/0.30 = 1.2 \\times 10^5$ N/C. Leaving out the $2$ gives $6.0 \\times 10^4$.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcgl-ent-4b',
    question: 'A very long solid cylinder of radius $R$ has uniform volume charge density $\\rho$. What is the field magnitude inside it, at distance $r < R$ from the axis?',
    options: [
      '$\\frac{\\rho r}{\\epsilon_0}$',
      '$0$',
      '$\\frac{\\rho}{2\\epsilon_0}$',
      '$\\frac{\\rho r}{2\\epsilon_0}$',
    ],
    correctIndex: 3,
    explanation: 'A coaxial Gaussian cylinder of radius $r$ and length $L$ encloses $\\rho\\pi r^2L$, so $E(2\\pi rL) = \\rho\\pi r^2L/\\epsilon_0$ and $E = \\rho r/(2\\epsilon_0)$. Zero field applies inside a conductor, not a charged insulator.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcgl-ent-5a',
    question: 'Two large parallel sheets each carry the same positive surface charge density $\\sigma$. What is the electric field between the sheets and outside them?',
    options: [
      'Zero between; $\\sigma/\\epsilon_0$ outside',
      '$\\sigma/\\epsilon_0$ between; zero outside',
      '$\\sigma/(2\\epsilon_0)$ everywhere',
      '$\\sigma/\\epsilon_0$ everywhere',
    ],
    correctIndex: 0,
    explanation: 'Each sheet makes $\\sigma/(2\\epsilon_0)$ pointing away from itself. Between like sheets the two fields point opposite ways and cancel; outside they point the same way and add to $\\sigma/\\epsilon_0$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcgl-ent-5b',
    question: 'A large, thin insulating sheet carries a uniform surface charge density of $8.85 \\times 10^{-9}$ C/m$^2$. What is the field magnitude $5$ cm from the sheet? ($\\epsilon_0 = 8.85 \\times 10^{-12}$ C$^2$/(N$\\cdot$m$^2$))',
    options: ['$1000$ N/C', '$500$ N/C', '$250$ N/C', '$2000$ N/C'],
    correctIndex: 1,
    explanation: 'A pillbox through the sheet gives $E = \\sigma/(2\\epsilon_0) = 500$ N/C, the same at any distance. The value $1000$ N/C is $\\sigma/\\epsilon_0$, which applies just outside a conductor\'s surface.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcgl-ent-6a',
    question: 'A sphere of radius $R$ has charge density $\\rho(r) = br$ that grows with distance from the center. What fraction of its total charge lies within $r = R/2$?',
    options: ['$\\frac{1}{8}$', '$\\frac{1}{4}$', '$\\frac{1}{16}$', '$\\frac{1}{2}$'],
    correctIndex: 2,
    explanation: '$Q_{enc} = \\int_0^r br\'(4\\pi r\'^2)\\,dr\' = \\pi br^4$, so the fraction is $(1/2)^4 = 1/16$. The value $\\frac{1}{8}$ assumes a uniform density.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcgl-ent-6b',
    question: 'For the same sphere with $\\rho(r) = br$, what is the field magnitude at a radius $r$ inside it?',
    options: [
      '$\\frac{br^2}{3\\epsilon_0}$',
      '$\\frac{br}{4\\epsilon_0}$',
      '$\\frac{bR^4}{4\\epsilon_0 r^2}$',
      '$\\frac{br^2}{4\\epsilon_0}$',
    ],
    correctIndex: 3,
    explanation: 'With $Q_{enc} = \\pi br^4$, Gauss\'s law gives $E(4\\pi r^2) = \\pi br^4/\\epsilon_0$, so $E = br^2/(4\\epsilon_0)$. Plugging $\\rho = br$ into the uniform-sphere result $\\rho r/(3\\epsilon_0)$ gives the wrong factor of $3$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcgl-ent-7a',
    question: 'A coaxial cable has a central wire with charge $+\\lambda$ per unit length and a thin outer cylindrical shell with $-\\lambda$ per unit length. What is the field at a distance $r$ outside the shell?',
    options: [
      '$\\frac{2k\\lambda}{r}$',
      '$0$',
      '$\\frac{4k\\lambda}{r}$',
      '$\\frac{k\\lambda}{r}$',
    ],
    correctIndex: 1,
    explanation: 'A Gaussian cylinder outside the shell encloses $+\\lambda L - \\lambda L = 0$, and by symmetry the field must be radial and uniform over it, so $E = 0$. Between the conductors it is $2k\\lambda/r$.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcgl-ent-7b',
    question: 'An insulating sphere of radius $R$ has uniform volume charge. At which two distances from the center is the field magnitude half its maximum value?',
    options: [
      '$R/2$ and $\\sqrt{2}\\,R$',
      '$R/2$ and $2R$',
      '$R/\\sqrt{2}$ and $2R$',
      '$R/4$ and $2R$',
    ],
    correctIndex: 0,
    explanation: 'The maximum is at the surface. Inside, $E \\propto r$, so half occurs at $R/2$; outside, $E \\propto 1/r^2$, so half occurs at $\\sqrt{2}\\,R$.',
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
