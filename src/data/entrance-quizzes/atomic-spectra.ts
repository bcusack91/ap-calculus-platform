/**
 * Entrance Quiz — Atomic Spectra
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Light, Photons & Energy
 *  2 — Atomic Emission & Absorption Spectra
 *  3 — Why Spectra Have Lines
 *  4 — Energy-Level Diagrams & Spectral Regions
 *  5 — Beyond Hydrogen — Multi-Electron Atoms & PES
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Light, Photons & Energy
  {
    id: 'as-ent-1a',
    question: 'A photon has an energy of $3.31 \\times 10^{-19}$ J. What is its wavelength, and in which region of the spectrum does it fall? ($h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s)',
    options: [
      '601 nm, infrared',
      '601 nm, visible',
      '$1.67 \\times 10^{6}$ m, radio',
      '$6.01 \\times 10^{-7}$ nm, X-ray',
    ],
    correctIndex: 1,
    explanation: '$\\lambda = hc/E = (6.626 \\times 10^{-34})(3.00 \\times 10^{8}) / (3.31 \\times 10^{-19}) = 6.01 \\times 10^{-7}$ m = 601 nm, inside the 400–700 nm visible range. Inverting the formula gives the radio value, and leaving the result in meters but labeling it nm gives the X-ray value.',
    partNumber: 1,
    partTitle: 'Light, Photons & Energy',
  },
  {
    id: 'as-ent-1b',
    question: 'Photon A has three times the wavelength of photon B. How do the two photons compare?',
    options: [
      'A has one-third the energy and one-third the frequency of B',
      'A has three times the energy and three times the frequency of B',
      'A has one-third the energy but three times the frequency of B',
      'A and B have equal energies, since only their two colors differ',
    ],
    correctIndex: 0,
    explanation: 'Frequency is inversely proportional to wavelength ($\\nu = c/\\lambda$), and energy is proportional to frequency ($E = h\\nu$), so tripling the wavelength cuts both frequency and energy to one-third. Energy and frequency always change together, never in opposite directions.',
    partNumber: 1,
    partTitle: 'Light, Photons & Energy',
  },

  // Part 2: Atomic Emission & Absorption Spectra
  {
    id: 'as-ent-2a',
    question: 'A glowing tungsten filament and a low-pressure tube of electrically excited neon gas are each viewed through a prism. What is observed?',
    options: [
      'Bright lines from both sources, at different wavelengths',
      'A continuous rainbow from both of the two sources',
      'A continuous rainbow from the filament; bright lines from the neon',
      'Dark lines from the filament; bright lines from the neon gas',
    ],
    correctIndex: 2,
    explanation: 'A hot dense solid emits a continuous spectrum, while an excited low-pressure gas emits only the wavelengths matching its allowed energy gaps, which appear as bright lines. Dark lines require a cool gas in front of a continuous source.',
    partNumber: 2,
    partTitle: 'Atomic Emission & Absorption Spectra',
  },
  {
    id: 'as-ent-2b',
    question: 'An excited atom drops from a state at $-2.50 \\times 10^{-19}$ J to a state at $-6.40 \\times 10^{-19}$ J. What is the wavelength of the emitted photon? ($h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s)',
    options: ['223 nm', '795 nm', '311 nm', '510 nm'],
    correctIndex: 3,
    explanation: 'The photon carries the energy difference: $(-2.50) - (-6.40) = 3.90 \\times 10^{-19}$ J, so $\\lambda = hc/E = 5.10 \\times 10^{-7}$ m = 510 nm. Adding the magnitudes gives 223 nm, and using only one of the two energies gives 795 nm or 311 nm.',
    partNumber: 2,
    partTitle: 'Atomic Emission & Absorption Spectra',
  },

  // Part 3: Why Spectra Have Lines
  {
    id: 'as-ent-3a',
    question: 'Hydrogen\'s levels include $E_1 = -2.18 \\times 10^{-18}$ J, $E_2 = -5.45 \\times 10^{-19}$ J and $E_4 = -1.36 \\times 10^{-19}$ J. What is the minimum energy needed to ionize a hydrogen atom whose electron is in $n = 4$?',
    options: [
      '$1.36 \\times 10^{-19}$ J',
      '$2.04 \\times 10^{-18}$ J',
      '$2.18 \\times 10^{-18}$ J',
      '$4.09 \\times 10^{-19}$ J',
    ],
    correctIndex: 0,
    explanation: 'Ionization takes the electron from its level to $n = \\infty$, where $E = 0$, so the energy needed is $0 - (-1.36 \\times 10^{-19}) = 1.36 \\times 10^{-19}$ J. $2.18 \\times 10^{-18}$ J ionizes from the ground state, $2.04 \\times 10^{-18}$ J is the $1 \\to 4$ excitation, and $4.09 \\times 10^{-19}$ J is the gap between levels 2 and 4.',
    partNumber: 3,
    partTitle: 'Why Spectra Have Lines',
  },
  {
    id: 'as-ent-3b',
    question: 'Hydrogen\'s levels are $E_1 = -2.18 \\times 10^{-18}$ J, $E_2 = -5.45 \\times 10^{-19}$ J and $E_3 = -2.42 \\times 10^{-19}$ J. Which photon energy can a ground-state hydrogen atom absorb?',
    options: [
      '$3.03 \\times 10^{-19}$ J',
      '$1.94 \\times 10^{-18}$ J',
      '$1.00 \\times 10^{-18}$ J',
      '$5.45 \\times 10^{-19}$ J',
    ],
    correctIndex: 1,
    explanation: 'A ground-state atom absorbs only a photon that exactly matches a jump up from $n = 1$; $E_3 - E_1 = 1.94 \\times 10^{-18}$ J. $3.03 \\times 10^{-19}$ J is the $2 \\to 3$ gap, which does not start from the ground state, and the other two values match no allowed jump.',
    partNumber: 3,
    partTitle: 'Why Spectra Have Lines',
  },

  // Part 4: Energy-Level Diagrams & Spectral Regions
  {
    id: 'as-ent-4a',
    question: 'An atom has four levels: $-10.0$, $-6.0$, $-4.5$ and $-4.0$ (all $\\times 10^{-19}$ J) for levels 1 to 4. A cool gas of these atoms sits in front of a white-light source. How many absorption lines appear, and which has the shortest wavelength?',
    options: [
      '6 lines; $1 \\to 4$ is the shortest',
      '3 lines; $1 \\to 2$ is the shortest',
      '3 lines; $1 \\to 4$ is the shortest',
      '6 lines; $3 \\to 4$ is the shortest',
    ],
    correctIndex: 2,
    explanation: 'In a cool gas nearly every atom is in level 1, so only the $1 \\to 2$, $1 \\to 3$ and $1 \\to 4$ jumps are absorbed. The $1 \\to 4$ jump is the largest gap ($6.0 \\times 10^{-19}$ J), and the largest energy means the shortest wavelength; six lines counts every possible emission.',
    partNumber: 4,
    partTitle: 'Energy-Level Diagrams & Spectral Regions',
  },
  {
    id: 'as-ent-4b',
    question: 'Gaseous methane absorbs radiation with a wavelength of $7.7 \\times 10^{-6}$ m. What does this absorption do to the molecules?',
    options: [
      'It promotes the electrons to higher electronic levels',
      'It makes the molecules rotate faster, with no other change',
      'It breaks the C–H bonds and releases free hydrogen atoms',
      'It raises the molecules to higher vibrational levels',
    ],
    correctIndex: 3,
    explanation: '7700 nm is longer than visible light (700 nm) but far shorter than microwaves (about 1 mm and up), so it is infrared, which changes vibrational energy. Moving electrons needs visible or UV photons, and changing only rotation needs lower-energy microwaves.',
    partNumber: 4,
    partTitle: 'Energy-Level Diagrams & Spectral Regions',
  },

  // Part 5: Beyond Hydrogen — Multi-Electron Atoms & PES
  {
    id: 'as-ent-5a',
    question: 'In a multi-electron atom, how are the energies of the 3s, 3p and 3d subshells ordered?',
    options: [
      '3s < 3p < 3d, since 3s penetrates nearest the nucleus',
      '3s = 3p = 3d, since all three share the same n',
      '3d < 3p < 3s, since d holds the most electrons',
      '3p < 3s < 3d, since p orbitals are the most compact',
    ],
    correctIndex: 0,
    explanation: 'An s electron penetrates closer to the nucleus than p or d electrons of the same shell, so it feels a larger $Z_{eff}$ and lies lowest in energy: 3s < 3p < 3d. Equal energies within a shell hold only for one-electron hydrogen, and a subshell\'s capacity does not set its energy.',
    partNumber: 5,
    partTitle: 'Beyond Hydrogen — Multi-Electron Atoms & PES',
  },
  {
    id: 'as-ent-5b',
    question: 'The PES peak for sodium\'s 3s electron is at 0.50 MJ/mol, but sodium\'s yellow emission line ($3p \\to 3s$, 589 nm) corresponds to only about 0.20 MJ/mol. Why are these energies different?',
    options: [
      'The emission line comes from 1s electrons, not from 3s electrons',
      'PES values are per mole while emission values are per photon',
      'PES removes the electron fully, but emission spans two bound levels',
      'PES photons are absorbed and emitted photons are lost, so energies vary',
    ],
    correctIndex: 2,
    explanation: 'A PES binding energy is the energy to take the electron from its orbital all the way to $n = \\infty$, while an emission line is the smaller gap between two bound levels (3p and 3s). Both values here are already per mole, and the 589 nm line involves the 3s and 3p levels, not 1s.',
    partNumber: 5,
    partTitle: 'Beyond Hydrogen — Multi-Electron Atoms & PES',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'as-ent-6a',
    question: 'Hydrogen emits a line at 486 nm. Using $E_1 = -2.18 \\times 10^{-18}$, $E_2 = -5.45 \\times 10^{-19}$, $E_3 = -2.42 \\times 10^{-19}$, $E_4 = -1.36 \\times 10^{-19}$ and $E_5 = -8.72 \\times 10^{-20}$ J, which transition produces it? ($h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s)',
    options: ['$n = 3 \\to n = 2$', '$n = 4 \\to n = 2$', '$n = 4 \\to n = 1$', '$n = 5 \\to n = 3$'],
    correctIndex: 1,
    explanation: 'The photon energy is $hc/\\lambda = 4.09 \\times 10^{-19}$ J, and $E_2 + 4.09 \\times 10^{-19} = -1.36 \\times 10^{-19}$ J $= E_4$, so the electron fell from $n = 4$ to $n = 2$. The $3 \\to 2$ gap is $3.03 \\times 10^{-19}$ J (656 nm), and drops to $n = 1$ give ultraviolet photons.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'as-ent-6b',
    question: 'Breaking the bond in $Cl_2$ requires 242 kJ/mol. What is the longest wavelength of light whose photons can each break one Cl–Cl bond? ($h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s, $N_A = 6.022 \\times 10^{23}$)',
    options: [
      '$4.95 \\times 10^{5}$ nm',
      '$8.21 \\times 10^{-22}$ nm',
      '$4.95 \\times 10^{-7}$ nm',
      '495 nm',
    ],
    correctIndex: 3,
    explanation: 'Per bond: $242{,}000 \\text{ J} / 6.022 \\times 10^{23} = 4.02 \\times 10^{-19}$ J, so $\\lambda = hc/E = 4.95 \\times 10^{-7}$ m = 495 nm. Skipping the kJ-to-J step gives $4.95 \\times 10^{5}$ nm, skipping Avogadro\'s number gives $8.21 \\times 10^{-22}$ nm, and $4.95 \\times 10^{-7}$ nm leaves the meter value unconverted.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'as-ent-7a',
    question: 'A hydrogen electron moves from $n = 2$ ($E_2 = -5.45 \\times 10^{-19}$ J) to $n = 5$ ($E_5 = -8.72 \\times 10^{-20}$ J). Which description is correct? ($h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s)',
    options: [
      'It absorbs a 434 nm photon',
      'It absorbs a 365 nm photon',
      'It absorbs a 2280 nm photon',
      'It emits a 434 nm photon',
    ],
    correctIndex: 0,
    explanation: 'Moving up to a less negative level requires absorbing energy: $E_5 - E_2 = 4.58 \\times 10^{-19}$ J, so $\\lambda = hc/E = 434$ nm. Emission would be the reverse jump, and 365 nm and 2280 nm come from using only $E_2$ or only $E_5$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'as-ent-7b',
    question: 'Astronomers see dark lines at exactly hydrogen\'s characteristic wavelengths in the spectrum of a distant star. What can they conclude?',
    options: [
      'The star contains no hydrogen, so those wavelengths are missing',
      'Hot hydrogen in the star emits extra light at those wavelengths',
      'Hydrogen in the star\'s cooler outer layers absorbs those wavelengths',
      'The star emits a continuous spectrum that reveals nothing about it',
    ],
    correctIndex: 2,
    explanation: 'Dark lines are an absorption spectrum: cooler hydrogen atoms between the hot interior and the observer absorb photons that match their allowed energy gaps. Bright lines would mean emission, and the lines show that hydrogen is present, not absent.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Light, Photons & Energy' },
    { partNumber: 2, partTitle: 'Atomic Emission & Absorption Spectra' },
    { partNumber: 3, partTitle: 'Why Spectra Have Lines' },
    { partNumber: 4, partTitle: 'Energy-Level Diagrams & Spectral Regions' },
    { partNumber: 5, partTitle: 'Beyond Hydrogen — Multi-Electron Atoms & PES' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
