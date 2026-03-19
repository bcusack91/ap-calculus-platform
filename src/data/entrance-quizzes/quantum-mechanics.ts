import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Photons & Wave-Particle Duality
  {
    id: 'qm-ent-1a',
    question: 'The energy of a photon is:',
    options: ['$E = mc^2$', '$E = hf$', '$E = \\frac{1}{2}mv^2$', '$E = pc^2$'],
    correctIndex: 1,
    explanation: '$E = hf = hc/\\lambda$, where $h$ is Planck\'s constant ($6.63 \\times 10^{-34}$ J·s).',
    partNumber: 1,
    partTitle: 'Photons & Wave-Particle Duality',
  },
  {
    id: 'qm-ent-1b',
    question: 'Wave-particle duality means:',
    options: ['Light is only a wave', 'Light is only a particle', 'Light exhibits both wave and particle properties', 'Waves and particles are the same'],
    correctIndex: 2,
    explanation: 'Light behaves as a wave (diffraction, interference) and as a particle (photoelectric effect). Both descriptions are needed.',
    partNumber: 1,
    partTitle: 'Photons & Wave-Particle Duality',
  },

  // Part 2: Photoelectric Effect
  {
    id: 'qm-ent-2a',
    question: 'In the photoelectric effect, electrons are ejected when:',
    options: ['Light intensity is high enough', 'Photon energy exceeds the work function ($hf \\geq \\phi$)', 'The wavelength is long enough', 'The temperature is high'],
    correctIndex: 1,
    explanation: 'Electrons are ejected only when $hf \\geq \\phi$ (work function). Below the threshold frequency, no electrons are emitted regardless of intensity.',
    partNumber: 2,
    partTitle: 'Photoelectric Effect',
  },
  {
    id: 'qm-ent-2b',
    question: 'The maximum kinetic energy of photoelectrons is given by:',
    options: ['$KE_{max} = hf$', '$KE_{max} = hf - \\phi$', '$KE_{max} = \\phi - hf$', '$KE_{max} = \\frac{1}{2}hf$'],
    correctIndex: 1,
    explanation: '$KE_{max} = hf - \\phi$. The photon energy minus the work function gives the maximum KE of ejected electrons.',
    partNumber: 2,
    partTitle: 'Photoelectric Effect',
  },

  // Part 3: de Broglie Wavelength
  {
    id: 'qm-ent-3a',
    question: 'The de Broglie wavelength of a particle is:',
    options: ['$\\lambda = h/E$', '$\\lambda = h/p$', '$\\lambda = p/h$', '$\\lambda = hv$'],
    correctIndex: 1,
    explanation: '$\\lambda = h/p = h/(mv)$. All matter has a wavelength, but it is only significant for very small particles.',
    partNumber: 3,
    partTitle: 'de Broglie Wavelength',
  },
  {
    id: 'qm-ent-3b',
    question: 'An electron is accelerated through $100$ V. Its de Broglie wavelength is approximately:',
    options: ['$0.12$ nm', '$1.2$ nm', '$12$ nm', '$0.012$ nm'],
    correctIndex: 0,
    explanation: '$KE = eV = 100$ eV. $p = \\sqrt{2mKE}$. $\\lambda = h/p \\approx 0.12$ nm, comparable to atomic spacings.',
    partNumber: 3,
    partTitle: 'de Broglie Wavelength',
  },

  // Part 4: Energy Levels & Spectra
  {
    id: 'qm-ent-4a',
    question: 'Electrons in atoms can only occupy:',
    options: ['Any energy level', 'Discrete (quantized) energy levels', 'The ground state only', 'Continuous energy bands'],
    correctIndex: 1,
    explanation: 'Atomic energy levels are quantized. Electrons can only exist at specific allowed energies.',
    partNumber: 4,
    partTitle: 'Energy Levels & Spectra',
  },
  {
    id: 'qm-ent-4b',
    question: 'When an electron transitions from a higher to a lower energy level, it:',
    options: ['Absorbs a photon', 'Emits a photon with $E = E_{higher} - E_{lower}$', 'Gains kinetic energy', 'Changes to a proton'],
    correctIndex: 1,
    explanation: 'The electron emits a photon with energy equal to the difference between the two levels: $hf = E_2 - E_1$.',
    partNumber: 4,
    partTitle: 'Energy Levels & Spectra',
  },

  // Part 5: Heisenberg Uncertainty Principle
  {
    id: 'qm-ent-5a',
    question: 'The Heisenberg uncertainty principle states:',
    options: [
      'We can know both position and momentum exactly',
      '$\\Delta x \\Delta p \\geq h/(4\\pi)$',
      'Measurements are always wrong',
      'Only applies to macroscopic objects',
    ],
    correctIndex: 1,
    explanation: '$\\Delta x \\Delta p \\geq \\hbar/2$. Precisely measuring position increases momentum uncertainty, and vice versa.',
    partNumber: 5,
    partTitle: 'Heisenberg Uncertainty Principle',
  },
  {
    id: 'qm-ent-5b',
    question: 'The uncertainty principle is significant for:',
    options: ['Baseballs', 'Cars', 'Electrons and subatomic particles', 'Planets'],
    correctIndex: 2,
    explanation: 'For macroscopic objects, $\\hbar$ is negligibly small. The principle only has measurable effects at the atomic and subatomic scale.',
    partNumber: 5,
    partTitle: 'Heisenberg Uncertainty Principle',
  },

  // Part 6: Photon Momentum
  {
    id: 'qm-ent-6a',
    question: 'The momentum of a photon is:',
    options: ['$p = mv$', '$p = h/\\lambda$', '$p = mc$', '$p = E/c^2$'],
    correctIndex: 1,
    explanation: 'Photons have zero rest mass but carry momentum: $p = h/\\lambda = E/c$.',
    partNumber: 6,
    partTitle: 'Photon Momentum',
  },
  {
    id: 'qm-ent-6b',
    question: 'The Compton effect demonstrates that photons:',
    options: ['Have no energy', 'Transfer momentum to electrons like particles', 'Are purely waves', 'Cannot interact with matter'],
    correctIndex: 1,
    explanation: 'In Compton scattering, a photon collides with an electron and transfers momentum, changing the photon\'s wavelength. This confirms photon particle behavior.',
    partNumber: 6,
    partTitle: 'Photon Momentum',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'qm-ent-7a',
    question: 'Increasing the intensity of light below the threshold frequency in the photoelectric effect:',
    options: ['Ejects more electrons', 'Ejects faster electrons', 'Still ejects no electrons', 'Doubles the electron energy'],
    correctIndex: 2,
    explanation: 'Below threshold frequency, no single photon has enough energy to eject an electron, regardless of how many photons there are (intensity).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'qm-ent-7b',
    question: 'If a photon and an electron have the same wavelength, which has more energy?',
    options: ['The electron', 'The photon', 'They have equal energy', 'Cannot be compared'],
    correctIndex: 1,
    explanation: 'Photon: $E = hc/\\lambda$. Electron: $E = p^2/(2m) = h^2/(2m\\lambda^2)$. For the same $\\lambda$, the photon has much more energy.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Photons & Wave-Particle Duality' },
    { partNumber: 2, partTitle: 'Photoelectric Effect' },
    { partNumber: 3, partTitle: 'de Broglie Wavelength' },
    { partNumber: 4, partTitle: 'Energy Levels & Spectra' },
    { partNumber: 5, partTitle: 'Heisenberg Uncertainty Principle' },
    { partNumber: 6, partTitle: 'Photon Momentum' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
