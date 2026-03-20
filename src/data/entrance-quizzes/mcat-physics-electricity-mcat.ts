/**
 * Entrance Quiz — Physics Electricity & Magnetism (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mpe-ent-1a', question: "Coulomb's Law states that the electrostatic force between two charges is:", options: ['Proportional to the product of the charges and inversely proportional to their distance', 'Proportional to the product of the charges and inversely proportional to the square of their distance', 'Proportional to the sum of the charges', 'Independent of distance'], correctIndex: 1, explanation: "$F = k\\frac{q_1 q_2}{r^2}$ (Coulomb's Law). The force follows an inverse-square law with distance, similar to gravity.", partNumber: 1, partTitle: 'Electric Forces' },
  { id: 'mpe-ent-1b', question: 'Two identical positive charges separated by distance r repel each other with force F. If the distance is halved, the new force is:', options: ['F/4', 'F/2', '2F', '4F'], correctIndex: 3, explanation: '$F \\propto 1/r^2$. Halving r: $F_{new} = k q^2/(r/2)^2 = 4kq^2/r^2 = 4F$.', partNumber: 1, partTitle: 'Electric Forces' },
  { id: 'mpe-ent-2a', question: 'The electric field direction at a point in space is defined as:', options: ['The direction a negative test charge would move', 'The direction a positive test charge would move', 'Perpendicular to the line connecting charges', 'From negative to positive charges'], correctIndex: 1, explanation: 'Electric field is defined as the force per unit positive charge: $\\vec{E} = \\vec{F}/q_0$, pointing in the direction a positive test charge would accelerate.', partNumber: 2, partTitle: 'Electric Fields' },
  { id: 'mpe-ent-2b', question: 'Electric potential energy decreases when a positive charge moves:', options: ['From low to high potential', 'From high to low potential', 'Opposite to the electric field direction', 'Perpendicular to the field'], correctIndex: 1, explanation: 'A positive charge naturally moves from high to low electric potential (like a ball rolling downhill), decreasing its potential energy and increasing kinetic energy.', partNumber: 2, partTitle: 'Electric Fields' },
  { id: 'mpe-ent-3a', question: "Ohm's Law relates voltage (V), current (I), and resistance (R) as:", options: ['$V = I/R$', '$V = IR$', '$I = VR$', '$R = IV$'], correctIndex: 1, explanation: "$V = IR$ (Ohm's Law). Voltage (potential difference) equals current times resistance. This holds for ohmic conductors at constant temperature.", partNumber: 3, partTitle: 'DC Circuits' },
  { id: 'mpe-ent-3b', question: 'Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel. The equivalent resistance is:', options: ['11 Ω', '1 Ω', '5 Ω', '0.5 Ω'], correctIndex: 1, explanation: '$1/R_{eq} = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1$, so $R_{eq} = 1$ Ω. Parallel connections always decrease resistance.', partNumber: 3, partTitle: 'DC Circuits' },
  { id: 'mpe-ent-4a', question: 'A magnetic force acts on a moving charge. The force is zero when the velocity is:', options: ['Maximum', 'Parallel (or antiparallel) to the magnetic field', 'Perpendicular to the magnetic field', 'Greater than the speed of light'], correctIndex: 1, explanation: '$\\vec{F} = q\\vec{v} \\times \\vec{B}$. The cross product is zero when v and B are parallel (sin 0° = 0), so no magnetic force acts.', partNumber: 4, partTitle: 'Magnetism' },
  { id: 'mpe-ent-4b', question: 'A proton moving to the right in a magnetic field directed out of the page experiences a force directed:', options: ['Out of the page', 'Into the page', 'Downward', 'Upward'], correctIndex: 3, explanation: 'Using right-hand rule: fingers point right (v), curl out of page (B), thumb points upward. $\\vec{F} = q\\vec{v} \\times \\vec{B}$ is upward for a positive charge.', partNumber: 4, partTitle: 'Magnetism' },
  { id: 'mpe-ent-5a', question: 'The law of reflection states that the angle of incidence equals the angle of reflection, both measured from the:', options: ['Surface of the mirror', 'Normal (perpendicular) to the reflecting surface', 'Horizontal axis', 'Angle of refraction'], correctIndex: 1, explanation: '$\\theta_i = \\theta_r$, measured from the normal (perpendicular) to the surface. This applies to both mirrors and smooth surfaces.', partNumber: 5, partTitle: 'Optics Basics' },
  { id: 'mpe-ent-5b', question: "Snell's Law ($n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$) describes refraction. When light passes from water (n=1.33) to air (n=1.00), it bends:", options: ['Toward the normal', 'Away from the normal', 'At the same angle', 'It undergoes total internal reflection always'], correctIndex: 1, explanation: 'Going from a denser medium (higher n) to a less dense medium (lower n), light bends away from the normal (angle increases).', partNumber: 5, partTitle: 'Optics Basics' },
  { id: 'mpe-ent-6a', question: 'A circuit has a 12 V battery and a single 4 Ω resistor. The power dissipated is:', options: ['3 W', '12 W', '36 W', '48 W'], correctIndex: 2, explanation: 'Current: $I = V/R = 12/4 = 3$ A. Power: $P = I^2R = (3)^2(4) = 36$ W. Or: $P = V^2/R = 144/4 = 36$ W.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mpe-ent-6b', question: 'Two capacitors ($C_1 = 2\\mu F$, $C_2 = 4\\mu F$) are connected in series. The equivalent capacitance is:', options: ['6 μF', '4/3 μF', '2 μF', '8 μF'], correctIndex: 1, explanation: '$1/C_{eq} = 1/2 + 1/4 = 2/4 + 1/4 = 3/4$, so $C_{eq} = 4/3 \\approx 1.33$ μF. Series capacitors have smaller equivalent capacitance.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mpe-ent-7a', question: 'The power of a lens is measured in diopters (D), where 1 D = 1/f (f in meters). A lens with focal length 25 cm has power:', options: ['0.25 D', '2.5 D', '4.0 D', '25 D'], correctIndex: 2, explanation: 'Power = 1/f = 1/0.25 m = 4.0 D. Converging lenses have positive power; diverging lenses have negative power.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mpe-ent-7b', question: 'Faraday\'s Law states that an EMF is induced in a conductor when there is a changing:', options: ['Electric field intensity', 'Magnetic flux through the conductor', 'Current in an adjacent conductor only', 'Resistance of the conductor'], correctIndex: 1, explanation: "Faraday's Law: $\\mathcal{E} = -d\\Phi_B/dt$. A changing magnetic flux (due to changing B field or changing area) induces an EMF. This is the basis for electric generators.", partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Electric Forces' },
    { partNumber: 2, partTitle: 'Electric Fields' },
    { partNumber: 3, partTitle: 'DC Circuits' },
    { partNumber: 4, partTitle: 'Magnetism' },
    { partNumber: 5, partTitle: 'Optics Basics' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
