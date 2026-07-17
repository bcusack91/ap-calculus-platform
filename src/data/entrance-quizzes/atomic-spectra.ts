/** Entrance Quiz — Atomic Spectra — 14 questions (2 per part) */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Light, Photons & Energy
  { id: 'as-ent-1a', question: 'Which equation correctly relates a photon\'s energy to its wavelength?', options: ['$E = mc^2$', '$E = hc/\\lambda$', '$E = \\tfrac{1}{2}mv^2$', '$E = h/\\lambda$'], correctIndex: 1, explanation: 'A photon\'s energy is $E = h\\nu = hc/\\lambda$, where $h$ = Planck\'s constant and $c$ = speed of light.', partNumber: 1, partTitle: 'Light, Photons & Energy' },
  { id: 'as-ent-1b', question: 'A photon of red light (700 nm) and a photon of violet light (400 nm) — which has more energy?', options: ['Red, because longer wavelength', 'Violet, because shorter wavelength means higher frequency', 'They have the same energy (both are visible)', 'Cannot be determined without intensity'], correctIndex: 1, explanation: 'Energy is inversely proportional to wavelength: $E = hc/\\lambda$. Shorter $\\lambda$ → higher $\\nu$ → higher $E$.', partNumber: 1, partTitle: 'Light, Photons & Energy' },

  // Part 2 — Atomic Emission & Absorption Spectra
  { id: 'as-ent-2a', question: 'An emission line spectrum is produced when:', options: ['White light passes through a cool gas', 'Excited electrons relax to lower energy levels and emit photons', 'A solid is heated until it glows red', 'Electrons are stripped from a neutral atom'], correctIndex: 1, explanation: 'Bright emission lines result when electrons fall from higher to lower quantized levels, releasing photons of specific energies.', partNumber: 2, partTitle: 'Atomic Emission & Absorption Spectra' },
  { id: 'as-ent-2b', question: 'In an absorption spectrum, the dark lines correspond to:', options: ['Wavelengths the gas emits', 'Wavelengths the gas absorbs to promote electrons to higher levels', 'Wavelengths blocked by the detector', 'Wavelengths outside the visible range'], correctIndex: 1, explanation: 'Cool gas absorbs photons whose energies match allowed electronic transitions, producing dark lines on a continuous background.', partNumber: 2, partTitle: 'Atomic Emission & Absorption Spectra' },

  // Part 3 — Bohr Model & Quantized Levels
  { id: 'as-ent-3a', question: 'In the Bohr model, electron energies in hydrogen are given by $E_n = -2.18 \\times 10^{-18}/n^2$ J. The energy of the $n=2$ level is:', options: ['$-2.18 \\times 10^{-18}$ J', '$-5.45 \\times 10^{-19}$ J', '$-1.09 \\times 10^{-18}$ J', '$+5.45 \\times 10^{-19}$ J'], correctIndex: 1, explanation: '$E_2 = -2.18 \\times 10^{-18}/4 = -5.45 \\times 10^{-19}$ J. The negative sign indicates a bound electron.', partNumber: 3, partTitle: 'The Bohr Model & Quantized Levels' },
  { id: 'as-ent-3b', question: 'Why does the Bohr model predict line spectra rather than continuous spectra?', options: ['Electrons can only exist in specific quantized energy levels, so only certain transitions are possible', 'Atoms are too small to emit a continuous range', 'Photons are quantized but electrons are not', 'The nucleus blocks most wavelengths'], correctIndex: 0, explanation: 'Quantized energy levels mean only discrete energy gaps exist, so photons of only specific energies (and wavelengths) are emitted or absorbed.', partNumber: 3, partTitle: 'The Bohr Model & Quantized Levels' },

  // Part 4 — Hydrogen Spectrum & Rydberg Formula
  { id: 'as-ent-4a', question: 'The Balmer series of hydrogen corresponds to electronic transitions ending at:', options: ['$n_f = 1$ (ultraviolet)', '$n_f = 2$ (visible)', '$n_f = 3$ (infrared)', '$n_f = \\infty$ (ionization)'], correctIndex: 1, explanation: 'Balmer lines end at $n_f = 2$ and fall in the visible region (Hα 656 nm, Hβ 486 nm, Hγ 434 nm, Hδ 410 nm).', partNumber: 4, partTitle: 'The Hydrogen Spectrum & Rydberg Formula' },
  { id: 'as-ent-4b', question: 'Using the Rydberg formula $1/\\lambda = R_H (1/n_f^2 - 1/n_i^2)$ with $R_H = 1.097 \\times 10^7$ $m^{-1}$, the wavelength for $n=3 \\to n=2$ in hydrogen is approximately:', options: ['97 nm', '434 nm', '656 nm', '1875 nm'], correctIndex: 2, explanation: '$1/\\lambda = (1.097 \\times 10^7)(1/4 - 1/9) = 1.524 \\times 10^6$ $m^{-1}$, so $\\lambda \\approx 656$ nm — the red Hα line.', partNumber: 4, partTitle: 'The Hydrogen Spectrum & Rydberg Formula' },

  // Part 5 — Beyond Hydrogen, PES
  { id: 'as-ent-5a', question: 'In photoelectron spectroscopy (PES), the binding energy of an ejected electron is calculated as:', options: ['$BE = h\\nu + KE$', '$BE = h\\nu - KE$', '$BE = KE - h\\nu$', '$BE = h\\nu \\times KE$'], correctIndex: 1, explanation: 'Conservation of energy: photon energy = binding energy + kinetic energy of ejected electron, so $BE = h\\nu - KE$.', partNumber: 5, partTitle: 'Beyond Hydrogen — Multi-Electron Atoms & PES' },
  { id: 'as-ent-5b', question: 'In a PES spectrum, the height of a peak represents:', options: ['The energy of the orbital', 'The number of electrons in that subshell', 'The radius of the orbital', 'The atomic number'], correctIndex: 1, explanation: 'Peak height (intensity) is proportional to the number of electrons in that subshell; peak position gives the binding energy.', partNumber: 5, partTitle: 'Beyond Hydrogen — Multi-Electron Atoms & PES' },

  // Part 6 — Problem-Solving Workshop
  { id: 'as-ent-6a', question: 'A hydrogen atom transitions from $n=4$ to $n=2$. Using $E_n = -2.18 \\times 10^{-18}/n^2$ J, the photon energy emitted is:', options: ['$2.04 \\times 10^{-19}$ J', '$4.09 \\times 10^{-19}$ J', '$5.45 \\times 10^{-19}$ J', '$1.64 \\times 10^{-18}$ J'], correctIndex: 1, explanation: '$\\Delta E = -2.18 \\times 10^{-18}(1/16 - 1/4) = -2.18 \\times 10^{-18}(-0.1875) = 4.09 \\times 10^{-19}$ J emitted.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'as-ent-6b', question: 'A photon with wavelength 121.6 nm corresponds to which transition in hydrogen?', options: ['$n=2 \\to n=1$ (Lyman α, UV)', '$n=3 \\to n=2$ (Balmer α, visible)', '$n=4 \\to n=3$ (Paschen α, IR)', '$n=\\infty \\to n=1$ (ionization limit)'], correctIndex: 0, explanation: '121.6 nm is the Lyman α line — the $n=2 \\to n=1$ transition in the ultraviolet.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7 — Synthesis & AP Review
  { id: 'as-ent-7a', question: 'A PES spectrum of an unknown element shows peaks at the following binding energies (MJ/mol): 11.5, 1.09, 0.578. The total electron count from peak heights is 11. Which element is this?', options: ['Lithium (Z=3)', 'Sodium (Z=11)', 'Magnesium (Z=12)', 'Aluminum (Z=13)'], correctIndex: 1, explanation: 'Three peaks (1s, 2s, 2p shells visible) and 11 total electrons identifies sodium ($1s^2\\,2s^2\\,2p^6\\,3s^1$). The 0.578 peak is the 3s valence electron.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'as-ent-7b', question: 'Which statement about effective nuclear charge ($Z_\\text{eff}$) and PES binding energies is correct?', options: ['Higher $Z_\\text{eff}$ means lower binding energy', 'Core electrons experience greater $Z_\\text{eff}$ than valence electrons in the same atom', 'All electrons in the same atom have the same binding energy', '$Z_\\text{eff}$ is always equal to $Z$'], correctIndex: 1, explanation: 'Core electrons feel nearly the full nuclear charge (little shielding), while valence electrons are shielded by inner electrons → core electrons have much higher binding energies.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Light, Photons & Energy' },
    { partNumber: 2, partTitle: 'Atomic Emission & Absorption Spectra' },
    { partNumber: 3, partTitle: 'The Bohr Model & Quantized Levels' },
    { partNumber: 4, partTitle: 'The Hydrogen Spectrum & Rydberg Formula' },
    { partNumber: 5, partTitle: 'Beyond Hydrogen — Multi-Electron Atoms & PES' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
