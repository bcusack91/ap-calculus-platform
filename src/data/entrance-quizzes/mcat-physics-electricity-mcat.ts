/**
 * Entrance Quiz — Physics Electricity & Magnetism (MCAT)
 * 16 questions · 7 parts (3 / 3 / 2 / 2 / 2 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Electrostatics'
const P2 = 'Circuits (HIGH YIELD)'
const P3 = 'Magnetism'
const P4 = 'Optics: Reflection & Refraction'
const P5 = 'Lenses & Mirrors'
const P6 = 'Electromagnetic Spectrum & Light'
const P7 = 'Atomic & Nuclear Physics'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Electrostatics
  { id: 'mpe-ent-1a', question: "Coulomb's law says the electrostatic force between two point charges is:", options: ['Proportional to $q_1q_2$ and to $1/r$', 'Proportional to $q_1q_2$ and to $1/r^2$', 'Proportional to $q_1 + q_2$ and to $1/r^2$', 'Proportional to $q_1q_2$ and independent of $r$'], correctIndex: 1, explanation: '$F = kq_1q_2/r^2$: the force scales with the product of the charges and falls off as the inverse square of the distance, the same form as gravity. The $1/r$ dependence belongs to electric potential and potential energy, not to force.', partNumber: 1, partTitle: P1 },
  { id: 'mpe-ent-1b', question: 'The direction of the electric field at a point is defined as the direction of the force on:', options: ['A negative test charge placed there', 'A neutral particle placed there', 'A positive test charge placed there', 'Any moving charge, positive or negative'], correctIndex: 2, explanation: 'The field is the force per unit positive charge, $\\vec{E} = \\vec{F}/q$, so it points the way a positive test charge would be pushed: away from positive charges and toward negative ones. A negative charge feels a force opposite to the field, and a neutral particle feels none.', partNumber: 1, partTitle: P1 },
  { id: 'mpe-ent-1c', question: 'The electric potential energy of a positive charge decreases when the charge moves:', options: ['From high to low potential', 'From low to high potential', 'Along an equipotential surface', 'Against the electric field'], correctIndex: 0, explanation: '$\\Delta U = q\\Delta V$, so for a positive $q$ a drop in potential means a drop in potential energy, which is why positive charges move from high to low $V$ on their own. Moving along an equipotential leaves $U$ unchanged, and moving against the field means moving to higher potential, which raises $U$.', partNumber: 1, partTitle: P1 },

  // Part 2 — Circuits
  { id: 'mpe-ent-2a', question: 'A 12 V battery is connected across a single 4 Ω resistor. The power dissipated is:', options: ['3 W', '12 W', '48 W', '36 W'], correctIndex: 3, explanation: '$P = V^2/R = 144/4 = 36$ W (equivalently $I = 3$ A and $P = IV = 36$ W). The 3 W answer mistakes the current for the power, and 48 W multiplies the voltage by the resistance.', partNumber: 2, partTitle: P2 },
  { id: 'mpe-ent-2b', question: 'Capacitors of $2\\;\\mu\\text{F}$ and $4\\;\\mu\\text{F}$ are connected in series. The equivalent capacitance is:', options: ['$6\\;\\mu\\text{F}$', '$\\tfrac{4}{3}\\;\\mu\\text{F}$', '$2\\;\\mu\\text{F}$', '$8\\;\\mu\\text{F}$'], correctIndex: 1, explanation: 'Capacitors combine opposite to resistors: in series, $1/C_{eq} = 1/2 + 1/4 = 3/4$, so $C_{eq} = \\tfrac{4}{3} \\approx 1.3\\;\\mu\\text{F}$, smaller than either capacitor. $6\\;\\mu\\text{F}$ is the parallel combination.', partNumber: 2, partTitle: P2 },
  { id: 'mpe-ent-2c', question: 'A current of 5 A flows into a junction that splits into two branches. One branch carries 2 A. The other branch carries:', options: ['7 A', '5 A', '2 A', '3 A'], correctIndex: 3, explanation: "Kirchhoff's junction rule is charge conservation: current in equals current out, so the second branch carries $5 - 2 = 3$ A. The 7 A answer adds the currents instead of splitting them, and 5 A would leave the 2 A branch unaccounted for.", partNumber: 2, partTitle: P2 },

  // Part 3 — Magnetism
  { id: 'mpe-ent-3a', question: 'A proton moves to the right through a uniform magnetic field that points out of the page. The magnetic force on it points:', options: ['Out of the page', 'Into the page', 'Down the page', 'Up the page'], correctIndex: 2, explanation: '$\\vec{F} = q\\vec{v} \\times \\vec{B}$. With $\\vec{v}$ to the right and $\\vec{B}$ out of the page, $\\hat{x} \\times \\hat{z} = -\\hat{y}$, so the force on a positive charge points down the page. The force is always perpendicular to both $\\vec{v}$ and $\\vec{B}$, which rules out into or out of the page; an electron moving the same way would be pushed up the page.', partNumber: 3, partTitle: P3 },
  { id: 'mpe-ent-3b', question: 'A charged particle moves in a circle perpendicular to a uniform magnetic field. If its speed doubles, the radius of its path:', options: ['Doubles', 'Halves', 'Stays the same', 'Quadruples'], correctIndex: 0, explanation: 'Setting $qvB = mv^2/r$ gives $r = mv/(qB)$, so the radius is proportional to speed: doubling $v$ doubles $r$. The magnetic force does grow with $v$, but the centripetal force needed grows with $v^2$, so the path widens.', partNumber: 3, partTitle: P3 },

  // Part 4 — Optics: Reflection & Refraction
  { id: 'mpe-ent-4a', question: 'For the law of reflection, the angles of incidence and reflection are both measured from the:', options: ['Normal to the surface', 'Surface of the mirror', 'Incoming ray direction', 'Horizontal axis'], correctIndex: 0, explanation: "$\\theta_i = \\theta_r$, with both angles measured from the normal, the line perpendicular to the surface where the ray strikes. Every optics angle (reflection, Snell's law, the critical angle) is measured from the normal, not from the surface.", partNumber: 4, partTitle: P4 },
  { id: 'mpe-ent-4b', question: 'Light of a single color passes from air into water. Its wavelength in the water is:', options: ['Longer, as its speed drops', 'Shorter, as its speed drops', 'Shorter, as its frequency rises', 'Unchanged, as frequency is fixed'], correctIndex: 1, explanation: 'Frequency is set by the source and stays the same across a boundary, while the speed drops to $v = c/n$. Since $v = f\\lambda$, the wavelength shrinks by the same factor: $\\lambda_{water} = \\lambda_{air}/n$. The frequency does not rise, and a fixed frequency is exactly why the wavelength has to change.', partNumber: 4, partTitle: P4 },

  // Part 5 — Lenses & Mirrors
  { id: 'mpe-ent-5a', question: 'An object is 20 cm in front of a concave mirror with $f = 10$ cm. The image is:', options: ['Virtual, upright and enlarged', 'Real, upright and reduced', 'Real, inverted and the same size', 'Virtual, inverted and the same size'], correctIndex: 2, explanation: '$1/d_i = 1/f - 1/d_o = 1/10 - 1/20 = 1/20$, so $d_i = +20$ cm (a real image) and $m = -d_i/d_o = -1$: inverted and the same size. An object at $2f$ always images at $2f$. A virtual, upright image forms only when the object sits inside the focal length.', partNumber: 5, partTitle: P5 },
  { id: 'mpe-ent-5b', question: 'Which optical element has a positive focal length?', options: ['A convex mirror', 'A concave lens', 'A plane mirror', 'A concave mirror'], correctIndex: 3, explanation: 'Converging elements, a concave mirror or a convex lens, have $f > 0$. Diverging elements, a convex mirror or a concave lens, have $f < 0$ and always form virtual, upright, reduced images. A plane mirror has no focal point (its focal length is infinite).', partNumber: 5, partTitle: P5 },

  // Part 6 — Electromagnetic Spectrum & Light
  { id: 'mpe-ent-6a', question: 'Which list orders these kinds of radiation from lowest to highest frequency?', options: ['Infrared, microwave, X-ray, ultraviolet', 'X-ray, ultraviolet, infrared, microwave', 'Microwave, infrared, ultraviolet, X-ray', 'Ultraviolet, X-ray, microwave, infrared'], correctIndex: 2, explanation: 'In order of increasing frequency (and decreasing wavelength) the spectrum runs radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Higher frequency also means more energy per photon ($E = hf$), so an X-ray photon carries more energy than an ultraviolet one.', partNumber: 6, partTitle: P6 },
  { id: 'mpe-ent-6b', question: 'In a double-slit experiment, bright fringes appear where the path difference from the two slits equals:', options: ['A whole number of wavelengths', 'An odd number of half-wavelengths', 'Exactly the slit separation', 'Zero, and only at the center'], correctIndex: 0, explanation: 'Waves that arrive in phase interfere constructively, which requires a path difference of a whole number of wavelengths: $d\\sin\\theta = n\\lambda$. Odd half-wavelengths put the waves out of phase and give dark fringes. The central maximum ($n = 0$) is only one of many bright fringes.', partNumber: 6, partTitle: P6 },

  // Part 7 — Atomic & Nuclear Physics
  { id: 'mpe-ent-7a', question: 'A nucleus emits a gamma ray. How do its mass number $A$ and atomic number $Z$ change?', options: ['$A$ drops by 4; $Z$ drops by 2', '$A$ is unchanged; $Z$ rises by 1', '$A$ is unchanged; $Z$ drops by 1', 'Neither $A$ nor $Z$ changes'], correctIndex: 3, explanation: 'A gamma ray is a high-energy photon released as a nucleus drops from an excited state, so it carries away energy but no nucleons or charge. Losing 4 and 2 is alpha decay, $Z$ rising by 1 is beta-minus decay, and $Z$ dropping by 1 is beta-plus decay.', partNumber: 7, partTitle: P7 },
  { id: 'mpe-ent-7b', question: 'In the Bohr model of hydrogen, $E_n = -13.6/n^2$ eV. What is the energy of the $n = 3$ level?', options: ['$-4.5$ eV', '$-1.5$ eV', '$-0.38$ eV', '$-13.6$ eV'], correctIndex: 1, explanation: '$E_3 = -13.6/3^2 = -13.6/9 \\approx -1.5$ eV. Dividing by 3 instead of 9 gives $-4.5$ eV, and $-13.6$ eV is the ground state ($n = 1$). The levels become less negative, and closer together, as $n$ rises.', partNumber: 7, partTitle: P7 },
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
