/**
 * Entrance Quiz — AP Physics C: E&M, Maxwell's Equations
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Maxwell\'s Equations Overview',
  'Gauss\'s Law for Magnetism and Closed Field Lines',
  'Faraday\'s Law as an Induced Electric Field',
  'Ampère\'s Law for Symmetric Currents and Maxwell\'s Addition',
  'Choosing Gaussian Surfaces and Amperian Loops',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcmx-ent-1a',
    question: 'Which two of the four field equations of electromagnetism together say that a changing magnetic field produces an electric field and a changing electric field produces a magnetic field?',
    options: [
      'Faraday\'s law and Ampère\'s law with Maxwell\'s addition',
      'Gauss\'s law and Gauss\'s law for magnetism',
      'Gauss\'s law and Faraday\'s law',
      'Ampère\'s law and Gauss\'s law for magnetism',
    ],
    correctIndex: 0,
    explanation: 'Faraday\'s law, $\\oint\\vec{E}\\cdot d\\vec{l} = -d\\Phi_B/dt$, ties a changing magnetic flux to a circulating $\\vec{E}$. Maxwell\'s addition to Ampère\'s law adds a changing electric field as a source of $\\vec{B}$. The two Gauss laws involve no time changes.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmx-ent-1b',
    question: 'A closed surface encloses charges of $+3.0$ nC and $-8.0$ nC. What is the net electric flux through it? ($\\epsilon_0 = 8.85 \\times 10^{-12}$ C$^2$/(N$\\cdot$m$^2$))',
    options: [
      '$+565$ N$\\cdot$m$^2$/C',
      '$-565$ N$\\cdot$m$^2$/C',
      '$+1243$ N$\\cdot$m$^2$/C',
      '$-904$ N$\\cdot$m$^2$/C',
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law gives $\\Phi_E = Q_{enc}/\\epsilon_0 = (-5.0 \\times 10^{-9})/(8.85 \\times 10^{-12}) \\approx -565$ N$\\cdot$m$^2$/C; the sign follows the net charge. Adding the magnitudes gives $+1243$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcmx-ent-2a',
    question: 'A closed cylinder sits in a nonuniform magnetic field. $4.0 \\times 10^{-4}$ Wb of flux leaves through one end cap and $1.5 \\times 10^{-4}$ Wb enters through the other. What is the flux through the curved side?',
    options: [
      '$2.5 \\times 10^{-4}$ Wb outward',
      '$5.5 \\times 10^{-4}$ Wb outward',
      '$2.5 \\times 10^{-4}$ Wb inward',
      '$0$ Wb, since $\\vec{B}$ runs along the side',
    ],
    correctIndex: 2,
    explanation: 'Gauss\'s law for magnetism requires zero net flux: $+4.0 - 1.5 + \\Phi_{side} = 0$ (in units of $10^{-4}$ Wb), so $\\Phi_{side} = -2.5 \\times 10^{-4}$ Wb, meaning $2.5 \\times 10^{-4}$ Wb enters through the side.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmx-ent-2b',
    question: 'A closed cube $0.10$ m on a side sits in a uniform $0.30$ T field that is perpendicular to two of its faces. What are the flux out through the face where the field exits, and the net flux through the cube?',
    options: [
      '$+3.0$ mWb and $+3.0$ mWb',
      '$+3.0$ mWb and $+6.0$ mWb',
      '$0$ and $0$',
      '$+3.0$ mWb and $0$',
    ],
    correctIndex: 3,
    explanation: 'The exit face has $BA = (0.30)(0.010) = 3.0 \\times 10^{-3}$ Wb outward. The entry face has the same amount inward and the four side faces have none, so the net flux is zero.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcmx-ent-3a',
    question: 'Inside a long solenoid of radius $0.040$ m, the magnetic field increases at $0.50$ T/s. What is the induced electric field $0.020$ m from the axis?',
    options: [
      '$5.0 \\times 10^{-3}$ V/m',
      '$1.0 \\times 10^{-2}$ V/m',
      '$2.0 \\times 10^{-2}$ V/m',
      '$0$ V/m',
    ],
    correctIndex: 0,
    explanation: 'On a circle of radius $r$ inside, $E(2\\pi r) = \\pi r^2\\,dB/dt$, so $E = \\frac{r}{2}\\frac{dB}{dt} = (0.010)(0.50) = 5.0 \\times 10^{-3}$ V/m. Dropping the factor of $\\frac{1}{2}$ gives $1.0 \\times 10^{-2}$ V/m.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmx-ent-3b',
    question: 'A ring of wire encircles a region where the magnetic field is increasing. Which statement about the induced electric field along the ring is correct?',
    options: [
      'The line integral around the ring is zero, as for any electric field',
      'Its line integral around the ring is nonzero, so no potential describes it',
      'It points radially outward from the region of changing flux',
      'Its value is zero wherever the magnetic field is zero',
    ],
    correctIndex: 1,
    explanation: 'Faraday\'s law gives $\\oint\\vec{E}\\cdot d\\vec{l} = -d\\Phi_B/dt \\neq 0$, so the field circulates around the ring and is non-conservative; no single-valued potential exists around the loop. It exists even where $B$ itself is zero.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcmx-ent-4a',
    question: 'A wide, flat conducting slab $2.0$ mm thick carries a uniform current density of $5.0 \\times 10^5$ A/m$^2$. What is the magnetic field just outside it? ($\\mu_0 = 4\\pi \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$1.3 \\times 10^{-3}$ T',
      '$3.1 \\times 10^{-4}$ T',
      '$6.3 \\times 10^{-4}$ T',
      '$1.0 \\times 10^{-4}$ T',
    ],
    correctIndex: 2,
    explanation: 'A rectangular Amperian loop straddling the slab has field on two sides: $2BL = \\mu_0JtL$, so $B = \\mu_0Jt/2 \\approx 6.3 \\times 10^{-4}$ T at any distance. Forgetting that both sides contribute gives $1.3 \\times 10^{-3}$ T.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmx-ent-4b',
    question: 'A long tube with inner radius $2.0$ mm and outer radius $4.0$ mm carries $12$ A spread uniformly through its metal. What is the magnetic field $3.0$ mm from the axis? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$8.0 \\times 10^{-4}$ T',
      '$4.5 \\times 10^{-4}$ T',
      '$0$ T',
      '$3.3 \\times 10^{-4}$ T',
    ],
    correctIndex: 3,
    explanation: 'The circle encloses the metal between $2.0$ and $3.0$ mm: $I_{enc} = 12(9 - 4)/(16 - 4) = 5.0$ A, so $B = (2 \\times 10^{-7})(5.0)/(0.0030) \\approx 3.3 \\times 10^{-4}$ T. Using all $12$ A gives $8.0 \\times 10^{-4}$ T.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcmx-ent-5a',
    question: 'A long solid cylinder carries current along its axis with a current density $J(r)$ that depends only on the distance from the axis. Which Amperian loop lets you find $B$ inside it?',
    options: [
      'A circle of radius $r$ centered on the axis',
      'A rectangle with one side inside',
      'A square drawn around the cylinder',
      'An ellipse tilted to the axis',
    ],
    correctIndex: 0,
    explanation: 'By cylindrical symmetry $\\vec{B}$ is tangent to such a circle with constant magnitude, so $\\oint\\vec{B}\\cdot d\\vec{l} = B(2\\pi r)$ and $I_{enc} = \\int_0^r J\\,2\\pi r\'\\,dr\'$. On the other paths $B$ varies, so it cannot be pulled out of the integral.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmx-ent-5b',
    question: 'Which of these fields can be found directly from Gauss\'s law with a well-chosen surface?',
    options: [
      'Field on the axis of a charged ring',
      'Field outside a charged sphere',
      'Field near the end of a finite charged rod',
      'Field at the center of a charged square',
    ],
    correctIndex: 1,
    explanation: 'Only the sphere has the spherical symmetry that makes $E$ constant over a concentric Gaussian surface. The ring, finite rod, and square need superposition or integration of $k\\,dq/r^2$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcmx-ent-6a',
    question: 'A long solenoid of radius $0.025$ m has $1500$ turns per meter, and its current is increasing at $20$ A/s. What is the induced electric field $0.050$ m from the axis, outside the windings? ($\\mu_0 = 4\\pi \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$9.4 \\times 10^{-4}$ V/m',
      '$0$ V/m',
      '$2.4 \\times 10^{-4}$ V/m',
      '$4.7 \\times 10^{-4}$ V/m',
    ],
    correctIndex: 2,
    explanation: 'Inside, $dB/dt = \\mu_0n\\,dI/dt \\approx 3.8 \\times 10^{-2}$ T/s. A circle outside encloses the flux $B\\pi R^2$, so $E = \\frac{R^2}{2r}\\frac{dB}{dt} \\approx 2.4 \\times 10^{-4}$ V/m. The field is not zero even though $B \\approx 0$ there.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmx-ent-6b',
    question: 'A long wire\'s current increases at $5.0$ A/s. A rectangular loop in the same plane has $0.20$ m sides parallel to the wire, at distances $0.020$ m and $0.060$ m from it. What emf is induced in the loop? ($\\mu_0/2\\pi = 2 \\times 10^{-7}$ T$\\cdot$m/A)',
    options: [
      '$4.4 \\times 10^{-8}$ V',
      '$2.0 \\times 10^{-7}$ V',
      '$6.0 \\times 10^{-7}$ V',
      '$2.2 \\times 10^{-7}$ V',
    ],
    correctIndex: 3,
    explanation: 'Ampère\'s law gives $B = \\mu_0I/(2\\pi r)$; integrating over the loop gives $\\Phi = \\frac{\\mu_0I\\ell}{2\\pi}\\ln 3$. Faraday\'s law then gives $|\\mathcal{E}| = (2 \\times 10^{-7})(0.20)(1.10)(5.0) \\approx 2.2 \\times 10^{-7}$ V. Leaving out $dI/dt$ gives $4.4 \\times 10^{-8}$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcmx-ent-7a',
    question: 'Which of these tasks calls for Faraday\'s law rather than Ampère\'s law?',
    options: [
      'Finding the emf in a coil as a magnet moves past it',
      'Finding $B$ inside a long solenoid',
      'Finding $B$ near a long straight wire',
      'Finding $B$ inside a thick wire',
    ],
    correctIndex: 0,
    explanation: 'An emf arises from a changing magnetic flux, which is Faraday\'s law. The other three ask for the magnetic field of a steady, symmetric current, which Ampère\'s law handles.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcmx-ent-7b',
    question: 'Which of these quantities is zero for every closed surface, whatever charges or currents are nearby?',
    options: [
      'Net electric flux through it',
      'Net magnetic flux',
      'Enclosed electric charge',
      'Circulation of the electric field',
    ],
    correctIndex: 1,
    explanation: 'Gauss\'s law for magnetism, $\\oint\\vec{B}\\cdot d\\vec{A} = 0$, holds for any closed surface because there are no magnetic monopoles. Net electric flux is zero only when no net charge is enclosed.',
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
