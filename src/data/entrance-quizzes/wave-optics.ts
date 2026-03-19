import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Interference
  {
    id: 'wo-ent-1a',
    question: 'Constructive interference occurs when the path difference between two waves is:',
    options: ['$(n + \\frac{1}{2})\\lambda$', '$n\\lambda$ ($n = 0, 1, 2, \\ldots$)', '$\\lambda/4$', 'Any value'],
    correctIndex: 1,
    explanation: 'Constructive interference: path difference = $n\\lambda$ (integer multiples of wavelength). Waves arrive in phase.',
    partNumber: 1,
    partTitle: 'Interference',
  },
  {
    id: 'wo-ent-1b',
    question: 'Destructive interference occurs when the path difference is:',
    options: ['$n\\lambda$', '$(n + \\frac{1}{2})\\lambda$', '$2n\\lambda$', 'Zero'],
    correctIndex: 1,
    explanation: 'Destructive interference: path difference = $(n + \\frac{1}{2})\\lambda$. Waves arrive $180°$ out of phase and cancel.',
    partNumber: 1,
    partTitle: 'Interference',
  },

  // Part 2: Double-Slit Experiment
  {
    id: 'wo-ent-2a',
    question: "In Young's double-slit experiment, bright fringes occur where:",
    options: ['$d\\sin\\theta = (n+\\frac{1}{2})\\lambda$', '$d\\sin\\theta = n\\lambda$', '$d\\cos\\theta = n\\lambda$', '$d = n\\lambda$'],
    correctIndex: 1,
    explanation: 'Bright fringes (maxima): $d\\sin\\theta = n\\lambda$, where $d$ is the slit separation and $n$ is the order.',
    partNumber: 2,
    partTitle: 'Double-Slit Experiment',
  },
  {
    id: 'wo-ent-2b',
    question: 'If the wavelength of light is increased in a double-slit experiment, the fringe spacing:',
    options: ['Decreases', 'Increases', 'Stays the same', 'Fringes disappear'],
    correctIndex: 1,
    explanation: 'Fringe spacing $\\Delta y = \\lambda L/d$. Increasing $\\lambda$ increases the spacing between bright fringes.',
    partNumber: 2,
    partTitle: 'Double-Slit Experiment',
  },

  // Part 3: Single-Slit Diffraction
  {
    id: 'wo-ent-3a',
    question: 'In single-slit diffraction, the first minimum occurs at:',
    options: ['$a\\sin\\theta = \\lambda$', '$a\\sin\\theta = \\lambda/2$', '$a\\sin\\theta = 2\\lambda$', '$a\\cos\\theta = \\lambda$'],
    correctIndex: 0,
    explanation: 'First minimum: $a\\sin\\theta = \\lambda$, where $a$ is the slit width. General minima: $a\\sin\\theta = m\\lambda$ ($m = \\pm 1, \\pm 2, \\ldots$).',
    partNumber: 3,
    partTitle: 'Single-Slit Diffraction',
  },
  {
    id: 'wo-ent-3b',
    question: 'Decreasing the slit width in a single-slit experiment causes the central maximum to:',
    options: ['Narrow', 'Widen', 'Disappear', 'Stay the same'],
    correctIndex: 1,
    explanation: 'Narrower slit → more diffraction → wider central maximum. Diffraction increases when the slit is comparable to $\\lambda$.',
    partNumber: 3,
    partTitle: 'Single-Slit Diffraction',
  },

  // Part 4: Diffraction Gratings
  {
    id: 'wo-ent-4a',
    question: 'A diffraction grating produces maxima at:',
    options: ['$d\\sin\\theta = n\\lambda$', '$d\\sin\\theta = (n+\\frac{1}{2})\\lambda$', '$Nd\\sin\\theta = \\lambda$', '$d\\cos\\theta = n\\lambda$'],
    correctIndex: 0,
    explanation: 'Same condition as double slit: $d\\sin\\theta = n\\lambda$, but with many slits the maxima are much sharper.',
    partNumber: 4,
    partTitle: 'Diffraction Gratings',
  },
  {
    id: 'wo-ent-4b',
    question: 'Compared to a double-slit, a diffraction grating produces:',
    options: ['Broader maxima', 'Sharper and brighter maxima', 'Fewer maxima', 'No difference'],
    correctIndex: 1,
    explanation: 'More slits produce sharper peaks because constructive interference from many slits is more precisely defined.',
    partNumber: 4,
    partTitle: 'Diffraction Gratings',
  },

  // Part 5: Thin-Film Interference
  {
    id: 'wo-ent-5a',
    question: 'A phase change of $180°$ occurs when light reflects off a medium with:',
    options: ['Lower index of refraction', 'Higher index of refraction', 'Same index of refraction', 'No reflection occurs'],
    correctIndex: 1,
    explanation: 'Light reflecting off a medium with higher $n$ undergoes a $180°$ ($\\pi$) phase shift. Reflection from lower $n$ has no phase shift.',
    partNumber: 5,
    partTitle: 'Thin-Film Interference',
  },
  {
    id: 'wo-ent-5b',
    question: 'For constructive interference in a thin film (with one phase shift), the minimum film thickness is:',
    options: ['$t = \\lambda/(2n)$', '$t = \\lambda/n$', '$t = \\lambda/(4n)$', '$t = n\\lambda$'],
    correctIndex: 0,
    explanation: 'With one phase shift: constructive interference requires $2nt = m\\lambda$. Minimum ($m=1$): $t = \\lambda/(2n)$.',
    partNumber: 5,
    partTitle: 'Thin-Film Interference',
  },

  // Part 6: Polarization
  {
    id: 'wo-ent-6a',
    question: 'Polarization demonstrates that light is a:',
    options: ['Longitudinal wave', 'Transverse wave', 'Compression wave', 'Standing wave'],
    correctIndex: 1,
    explanation: 'Only transverse waves can be polarized. Polarization restricts the oscillation direction, proving light is transverse.',
    partNumber: 6,
    partTitle: 'Polarization',
  },
  {
    id: 'wo-ent-6b',
    question: "Malus's law gives the intensity of polarized light through a polarizer at angle $\\theta$ as:",
    options: ['$I = I_0 \\sin\\theta$', '$I = I_0 \\cos\\theta$', '$I = I_0 \\cos^2\\theta$', '$I = I_0 \\sin^2\\theta$'],
    correctIndex: 2,
    explanation: "$I = I_0 \\cos^2\\theta$ (Malus's law). At $\\theta = 90°$, no light passes through.",
    partNumber: 6,
    partTitle: 'Polarization',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'wo-ent-7a',
    question: 'Which phenomenon cannot be explained by the ray model of light but requires the wave model?',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Straight-line propagation'],
    correctIndex: 2,
    explanation: 'Diffraction (bending around obstacles) requires wave optics. Ray optics handles reflection, refraction, and image formation.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'wo-ent-7b',
    question: 'White light passes through a diffraction grating. The first-order spectrum appears with:',
    options: ['Red closest to center, violet farthest', 'Violet closest to center, red farthest', 'All colors at the same angle', 'No spectrum is produced'],
    correctIndex: 1,
    explanation: '$d\\sin\\theta = \\lambda$. Red has the longest $\\lambda$, so it diffracts at the largest angle. Violet (shortest $\\lambda$) is closest to center.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Interference' },
    { partNumber: 2, partTitle: 'Double-Slit Experiment' },
    { partNumber: 3, partTitle: 'Single-Slit Diffraction' },
    { partNumber: 4, partTitle: 'Diffraction Gratings' },
    { partNumber: 5, partTitle: 'Thin-Film Interference' },
    { partNumber: 6, partTitle: 'Polarization' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
