/**
 * Entrance Quiz — Atomic Spectra & Nuclear Chemistry (MCAT)
 * 8 questions · 3 parts (3 / 3 / 2)
 * Part titles match the interactive lesson's "Part N of 3" lines.
 * Created when this topic was split off mcat-general-chemistry-atomic-structure-mcat
 * (Nov 2026); the PES item came over from that topic's old Part 3.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Emission Spectra, Photoelectron Spectroscopy & the Bohr Model'
const P2 = 'Nuclear Chemistry: Radioactive Decay & Half-Life'
const P3 = 'Mixed MCAT Review: Passage-Style Practice'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Emission Spectra, PES & the Bohr Model
  { id: 'mgsn-ent-1a', question: 'In a photoelectron spectrum, the position of a peak along the energy axis tells you:', options: ['How many electrons occupy that subshell in the atom', "The binding energy of that subshell's electrons", 'The atomic mass of the element in the sample', 'The spin state of the electrons in that subshell'], correctIndex: 1, explanation: 'PES plots each peak by binding energy, the energy needed to remove an electron from that subshell ($KE = h\\nu - BE$), so position shows how tightly those electrons are held. The height or area of the peak, not its position, counts the electrons, and neither mass nor spin is read from the spectrum.', partNumber: 1, partTitle: P1 },
  { id: 'mgsn-ent-1b', question: 'Light of one frequency ejects electrons from a metal. If the intensity is doubled at the same frequency, the ejected electrons:', options: ['Double in number, with the same maximum speed', 'Stay equal in number but leave twice as fast', 'Double in number and also leave twice as fast', 'Stop leaving, since the work function rises'], correctIndex: 0, explanation: 'Each photon frees at most one electron, and its energy $hf$ depends only on frequency, so $KE_{\\max} = hf - \\Phi$ is unchanged. Brighter light delivers more photons per second, so more electrons leave. A higher frequency, not a higher intensity, would make them faster, and the work function is a fixed property of the metal.', partNumber: 1, partTitle: P1 },
  { id: 'mgsn-ent-1c', question: 'In the Bohr model of hydrogen, which transition emits the photon with the longest wavelength?', options: ['$n = 2 \\to n = 1$', '$n = 4 \\to n = 1$', '$n = 4 \\to n = 3$', '$n = 3 \\to n = 2$'], correctIndex: 2, explanation: 'Wavelength is inversely proportional to photon energy ($E = hc/\\lambda$), so the longest wavelength comes from the smallest energy gap. Levels crowd together at high $n$: $4 \\to 3$ releases about $0.66$ eV, less than $3 \\to 2$ (about $1.9$ eV) and far less than the drops to $n = 1$ (about $10.2$ and $12.8$ eV), which are ultraviolet.', partNumber: 1, partTitle: P1 },

  // Part 2 — Nuclear Chemistry: Radioactive Decay & Half-Life
  { id: 'mgsn-ent-2a', question: 'In alpha decay, how do the mass number $A$ and atomic number $Z$ of the nucleus change?', options: ['$A$ falls by 2 and $Z$ falls by 4', '$A$ is unchanged and $Z$ falls by 2', '$A$ falls by 4 and $Z$ is unchanged', '$A$ falls by 4 and $Z$ falls by 2'], correctIndex: 3, explanation: 'An alpha particle is a helium-4 nucleus, $^4_2\\text{He}$: two protons and two neutrons leave, so $A$ drops by 4 and $Z$ by 2 (uranium-238 becomes thorium-234). The decays that leave $A$ unchanged are the beta modes, electron capture and gamma emission, which shift $Z$ by at most 1.', partNumber: 2, partTitle: P2 },
  { id: 'mgsn-ent-2b', question: 'A tracer has a half-life of 2.0 hours. How long does it take for its activity to fall to 1/16 of the starting value?', options: ['4.0 hours', '8.0 hours', '16 hours', '32 hours'], correctIndex: 1, explanation: '$1/16 = (1/2)^4$, so four half-lives must pass: $4 \\times 2.0 = 8.0$ hours. Four hours is only two half-lives (1/4 left), 16 hours is eight half-lives (1/256 left), and 32 hours multiplies 16 by the half-life. Each half-life halves what is left.', partNumber: 2, partTitle: P2 },
  { id: 'mgsn-ent-2c', question: 'Radiocarbon dating measures how much $^{14}\\text{C}$ is left in a sample of wood or bone. From what moment does the method count?', options: ['The first exposure of the sample to air and sunlight', 'The formation of its carbon atoms inside a star', 'The death of the organism, ending its carbon intake', 'The burial of the sample under layers of sediment'], correctIndex: 2, explanation: 'While alive, an organism keeps taking in carbon, so its $^{14}\\text{C}/^{12}\\text{C}$ ratio matches the atmosphere. At death the intake stops and the $^{14}\\text{C}$ ($t_{1/2} = 5{,}730$ years) decays with nothing to replace it, so the fraction left counts the half-lives since death. Burial, air exposure and the origin of the atoms do not reset the ratio.', partNumber: 2, partTitle: P2 },

  // Part 3 — Mixed MCAT Review
  { id: 'mgsn-ent-3a', question: 'In hydrogen, how does the photon emitted in the $n = 2 \\to n = 1$ transition compare with the one emitted in $n = 3 \\to n = 2$?', options: ['More energy and a shorter wavelength', 'More energy and a longer wavelength', 'Less energy and a shorter wavelength', 'The same energy, as both drop one level'], correctIndex: 0, explanation: 'Levels crowd together as $n$ grows, so $2 \\to 1$ (about $10.2$ eV, ultraviolet Lyman) is a much bigger drop than $3 \\to 2$ (about $1.9$ eV, visible Balmer). Since $E = hc/\\lambda$, more energy means a shorter wavelength. Dropping one level does not fix the energy; the gap depends on which two levels are involved.', partNumber: 3, partTitle: P3 },
  { id: 'mgsn-ent-3b', question: 'A nucleus decays by electron capture, and X-rays are detected soon after. What produces the X-rays?', options: ['The emitted neutrino colliding with nearby atoms', 'The nucleus shedding its excess energy as it settles', 'A positron and an electron annihilating each other', 'Outer electrons dropping into the vacant inner shell'], correctIndex: 3, explanation: 'Electron capture pulls an inner electron into the nucleus, leaving a hole in a low-energy shell. Outer electrons drop into it, and these large downward jumps emit X-ray photons, the same emission physics as a Bohr transition. Energy shed by the nucleus itself comes out as gamma rays, neutrinos barely interact with matter, and electron capture makes no positron.', partNumber: 3, partTitle: P3 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
  ]
}
