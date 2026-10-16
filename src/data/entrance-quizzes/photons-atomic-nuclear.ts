/**
 * Entrance Quiz — Photons, Atoms & Nuclei (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Photons & Photoelectric Effect'
const P2 = 'Wave-Particle Duality'
const P3 = 'Bohr Model & Energy Levels'
const P4 = 'Atomic Transitions'
const P5 = 'Nuclear Physics'
const P6 = 'Radioactive Decay'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Photons & Photoelectric Effect
  {
    id: 'pan-ent-1a',
    question: 'Light of wavelength 400 nm shines on a metal with a work function of 2.3 eV. What are the maximum kinetic energy of the ejected electrons and the stopping voltage? Use $hc = 1240$ eV·nm.',
    options: [
      '0.80 eV and 0.80 V',
      '3.1 eV and 3.1 V',
      '5.4 eV and 5.4 V',
      '0.80 eV and 2.3 V',
    ],
    correctIndex: 0,
    explanation: 'Each photon carries $\\frac{1240}{400} = 3.1$ eV, so $KE_{\\max} = 3.1 - 2.3 = 0.80$ eV. The stopping voltage satisfies $eV_s = KE_{\\max}$, so it is 0.80 V. Adding the work function gives 5.4 eV.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pan-ent-1b',
    question: 'Very bright red light ejects no electrons from a metal, but dim violet light ejects some right away. What explains this?',
    options: [
      'Red light waves need more time to build up enough energy',
      'Bright light pushes the electrons back into the metal',
      'Violet light delivers more total energy every second',
      'Each red photon carries less than the work function',
    ],
    correctIndex: 3,
    explanation: 'Light delivers energy in photons of energy $hf$, and one photon frees one electron. Red photons are each below the work function no matter how many arrive, while each violet photon has enough. Waiting longer does not help, and the dim violet light actually delivers less total energy.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Wave-Particle Duality
  {
    id: 'pan-ent-2a',
    question: 'An electron and a proton move at the same speed. About how many times longer is the electron\'s de Broglie wavelength than the proton\'s?',
    options: ['1', 'About 43', 'About 1,800', 'About 1/1,800'],
    correctIndex: 2,
    explanation: 'With $\\lambda = \\frac{h}{mv}$ and equal speeds, the wavelength is inversely proportional to mass, so the ratio is $\\frac{m_p}{m_e} \\approx 1{,}800$. The square root of that ratio, about 43, would apply to equal kinetic energies.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pan-ent-2b',
    question: 'An electron ($m = 9.11 \\times 10^{-31}$ kg) starts from rest and is accelerated through 150 V. What is its de Broglie wavelength?',
    options: [
      '$1.4 \\times 10^{-10}$ m',
      '$1.0 \\times 10^{-10}$ m',
      '$2.3 \\times 10^{-12}$ m',
      '$5.0 \\times 10^{-11}$ m',
    ],
    correctIndex: 1,
    explanation: 'The electron gains $KE = (1.6 \\times 10^{-19})(150) = 2.4 \\times 10^{-17}$ J, so $p = \\sqrt{2mKE} = 6.6 \\times 10^{-24}$ kg·m/s and $\\lambda = \\frac{h}{p} \\approx 1.0 \\times 10^{-10}$ m. Leaving the 2 out of $\\sqrt{2mKE}$ gives $1.4 \\times 10^{-10}$ m, and using the proton mass gives $2.3 \\times 10^{-12}$ m.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Bohr Model & Energy Levels
  {
    id: 'pan-ent-3a',
    question: 'A hydrogen atom in its ground state absorbs a 12.1 eV photon. To which level does the electron rise, and how many different wavelengths can the atom then emit as it returns to the ground state? Use $E_n = -13.6/n^2$ eV.',
    options: [
      'Level 3; two different wavelengths',
      'Level 2; one wavelength only',
      'Level 3; three different wavelengths',
      'Level 4; six different wavelengths',
    ],
    correctIndex: 2,
    explanation: '$E_3 - E_1 = -1.51 - (-13.6) = 12.1$ eV, so the electron reaches $n = 3$. It can return by $3 \\to 1$, or by $3 \\to 2$ and then $2 \\to 1$, giving three distinct wavelengths.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pan-ent-3b',
    question: 'According to the Bohr model with de Broglie\'s idea, why are only certain electron orbits allowed in hydrogen?',
    options: [
      'Only orbits matching the radius of the nucleus are stable',
      'Each orbit must hold an equal share of the electron\'s charge',
      'Electrons must move at the speed of light to stay in orbit',
      'Its wave must fit whole wavelengths around the orbit',
    ],
    correctIndex: 3,
    explanation: 'An allowed orbit has a circumference of $n\\lambda$, so the electron\'s wave forms a standing wave; other orbits make the wave interfere destructively with itself. That restriction on orbits is what makes the energy levels discrete.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Atomic Transitions
  {
    id: 'pan-ent-4a',
    question: 'An atom has energy levels at $-10.0$, $-4.0$, $-2.5$ and $-1.0$ eV. Atoms excited to the $-1.0$ eV level emit light as they drop to lower levels. What is the longest wavelength emitted? Use $hc = 1240$ eV·nm.',
    options: ['827 nm', '138 nm', '413 nm', '1240 nm'],
    correctIndex: 0,
    explanation: 'The longest wavelength comes from the smallest energy drop, $-1.0 \\to -2.5$ eV: $\\Delta E = 1.5$ eV and $\\lambda = \\frac{1240}{1.5} = 827$ nm. The value 138 nm comes from the largest drop, 9.0 eV, and 1240 nm uses the level energy instead of a difference.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pan-ent-4b',
    question: 'White light from a hot source passes through cool hydrogen gas before reaching a spectrometer. What does the spectrum show?',
    options: [
      'Bright lines on a dark background',
      'Gaps at wavelengths that hydrogen never emits',
      'A smooth, continuous spectrum, since the gas is cool',
      'Dark lines at the same wavelengths as hydrogen\'s bright emission lines',
    ],
    correctIndex: 3,
    explanation: 'The cool gas absorbs only photons whose energies match its level differences, removing those wavelengths from the continuous spectrum. The same level differences produce its emission lines, so the dark absorption lines sit at the emission wavelengths.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Nuclear Physics
  {
    id: 'pan-ent-5a',
    question: 'In a fusion reaction, the products have 0.0186 u less total mass than the reactants. How much energy is released? Use $1 \\text{ u} = 931.5$ MeV/$c^2$.',
    options: ['0.0186 MeV', '34.7 MeV', '17.3 MeV', '8.66 MeV'],
    correctIndex: 2,
    explanation: 'The missing mass becomes energy: $E = \\Delta m\\,c^2 = (0.0186)(931.5 \\text{ MeV}) = 17.3$ MeV. Doubling or halving the mass difference gives the other values.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pan-ent-5b',
    question: 'Why do very large nuclei tend to be unstable?',
    options: [
      'Neutrons repel one another more strongly in large nuclei',
      'Large nuclei have no binding energy holding them together',
      'Each nucleon pair attracts less strongly as nucleons are added',
      'The strong force reaches only neighbors, but proton repulsion spans the whole nucleus',
    ],
    correctIndex: 3,
    explanation: 'The strong force attracts only neighboring nucleons, but every proton repels every other proton through the long-range electric force. In a large nucleus that repulsion adds up while the strong-force attraction does not keep pace. Neutrons are neutral and do not repel electrically.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Radioactive Decay
  {
    id: 'pan-ent-6a',
    question: 'A $^{238}_{92}\\text{U}$ nucleus undergoes one alpha decay followed by two beta-minus decays. What are the atomic number and mass number of the final nucleus?',
    options: [
      '$Z = 88$, $A = 234$',
      '$Z = 92$, $A = 234$',
      '$Z = 90$, $A = 234$',
      '$Z = 92$, $A = 238$',
    ],
    correctIndex: 1,
    explanation: 'Alpha decay lowers $Z$ by 2 and $A$ by 4, giving $Z = 90$, $A = 234$. Each beta-minus decay turns a neutron into a proton, raising $Z$ by 1 with $A$ unchanged, so the final nucleus has $Z = 92$, $A = 234$.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pan-ent-6b',
    question: 'The activity of a radioactive sample falls from 3200 Bq to 200 Bq in 36 hours. What is the half-life?',
    options: ['9.0 h', '18 h', '2.25 h', '12 h'],
    correctIndex: 0,
    explanation: 'The activity falls by a factor of 16, which is $2^4$, so 36 hours is four half-lives and $t_{1/2} = 9.0$ h. Dividing 36 h by 16 gives 2.25 h, which treats the decay as linear in the number of halvings.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'pan-ent-7a',
    question: 'A hydrogen atom drops from $n = 3$ to $n = 1$, and the emitted photon strikes a metal with a work function of 4.7 eV. What is the maximum kinetic energy of the ejected electron? Use $E_n = -13.6/n^2$ eV.',
    options: ['12.1 eV', '16.8 eV', '7.4 eV', 'No electron is ejected'],
    correctIndex: 2,
    explanation: 'The photon carries $E_3 - E_1 = 12.1$ eV, and the electron keeps what is left after the work function: $12.1 - 4.7 = 7.4$ eV. Adding the work function gives 16.8 eV.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'pan-ent-7b',
    question: 'Fusion of light nuclei and fission of a heavy nucleus both release energy. What do the two processes have in common?',
    options: [
      'In each, nucleons are destroyed and turned into energy',
      'In each, the products have less total mass',
      'In each, the products have more total mass than the reactants',
      'In each, electrons release energy as they change orbits',
    ],
    correctIndex: 1,
    explanation: 'Nucleon number and charge are conserved in both, but the products have less mass than the reactants, and that mass difference is released as energy, $E = \\Delta m\\,c^2$. No nucleons disappear, and the energy comes from the nucleus, not the electrons.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
