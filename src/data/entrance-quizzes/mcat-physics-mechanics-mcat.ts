/**
 * Entrance Quiz — Physics Mechanics (MCAT)
 * 15 questions · 7 parts (2 / 2 / 2 / 2 / 3 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Kinematics'
const P2 = "Newton's Laws & Forces"
const P3 = 'Work, Energy & Power'
const P4 = 'Momentum & Collisions'
const P5 = 'Fluids (ULTRA HIGH YIELD)'
const P6 = 'Torque, Equilibrium & Simple Machines'
const P7 = 'Waves & Sound'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Kinematics
  { id: 'mpm-ent-1a', question: 'A ball is thrown horizontally off a cliff. Ignoring air resistance, its motion has:', options: ['Constant velocity both horizontally and vertically', 'Constant horizontal velocity, growing downward speed', 'Slowing horizontal velocity, constant vertical speed', 'Constant speed along its whole curved path'], correctIndex: 1, explanation: 'With no air resistance nothing acts horizontally, so the horizontal velocity stays constant, while gravity accelerates the ball downward at $g$, so its vertical speed grows. The two components are independent, and the overall speed increases rather than staying constant.', partNumber: 1, partTitle: P1 },
  { id: 'mpm-ent-1b', question: "At the highest point of a projectile's flight (no air resistance), which statement is true?", options: ['Vertical velocity is zero; acceleration is $g$ down', 'Velocity and acceleration are both zero there', 'Horizontal velocity is zero; acceleration is zero', 'Acceleration reverses and starts to point up'], correctIndex: 0, explanation: 'At the peak the vertical velocity passes through zero, but the horizontal velocity is unchanged and gravity still pulls down at $g$ the whole time. Zero acceleration at the top is the classic trap: with no acceleration there, the vertical velocity would stay zero and the projectile would never fall back.', partNumber: 1, partTitle: P1 },

  // Part 2 — Newton's Laws & Forces
  { id: 'mpm-ent-2a', question: "By Newton's third law, when object A pushes on object B, object B pushes on A with a force that is:", options: ['Larger, and in the same direction', 'Equal in size and opposite in direction', 'Smaller, and in the opposite direction', 'Zero if object B stays at rest'], correctIndex: 1, explanation: "Third-law forces come in equal and opposite pairs that act on different objects, so they never cancel each other. The pair exists whether or not either object moves; whether B accelerates depends only on the net force acting on B.", partNumber: 2, partTitle: P2 },
  { id: 'mpm-ent-2b', question: 'For a box on a rough floor, how does the maximum static friction compare with the kinetic friction once the box slides?', options: ['Kinetic friction is larger', 'They are always exactly equal', 'The static maximum is larger', 'It depends only on the speed'], correctIndex: 2, explanation: 'Static friction adjusts to match the applied force up to a maximum of $\\mu_s N$, while kinetic friction is a fixed $\\mu_k N$. Because $\\mu_s > \\mu_k$, it takes more force to start the box moving than to keep it sliding. Kinetic friction is roughly independent of speed.', partNumber: 2, partTitle: P2 },

  // Part 3 — Work, Energy & Power
  { id: 'mpm-ent-3a', question: 'The work-energy theorem states that the net work done on an object equals its change in:', options: ['Potential energy', 'Momentum', 'Total mechanical energy', 'Kinetic energy'], correctIndex: 3, explanation: '$W_{net} = \\Delta KE = \\tfrac{1}{2}mv_f^2 - \\tfrac{1}{2}mv_i^2$. Work by a single conservative force equals the negative of the change in potential energy, impulse (not work) changes momentum, and mechanical energy changes only through work by nonconservative forces such as friction.', partNumber: 3, partTitle: P3 },
  { id: 'mpm-ent-3b', question: 'A box slides across a horizontal floor. How much work does the normal force do on it?', options: ['Zero, as it acts at 90° to the motion', 'Positive, since it holds the box up', 'Negative, since it opposes the weight', 'Equal to $mgd$ over a distance $d$'], correctIndex: 0, explanation: '$W = Fd\\cos\\theta$, and the normal force points straight up while the displacement is horizontal, so $\\theta = 90°$ and $\\cos 90° = 0$. A force does work only through its component along the displacement; $mgd$ pairs a vertical force with a horizontal distance.', partNumber: 3, partTitle: P3 },

  // Part 4 — Momentum & Collisions
  { id: 'mpm-ent-4a', question: 'The impulse delivered to an object, $J = F\\Delta t$, equals its change in:', options: ['Kinetic energy', 'Velocity squared', 'Linear momentum', 'Potential energy'], correctIndex: 2, explanation: 'The impulse-momentum theorem gives $J = F\\Delta t = \\Delta p$. The same $\\Delta p$ can come from a large force over a short time or a small force over a long time, which is why padding and airbags lengthen $\\Delta t$ to lower the force. A change in kinetic energy is set by work ($Fd$), not by $F\\Delta t$.', partNumber: 4, partTitle: P4 },
  { id: 'mpm-ent-4b', question: 'Two carts collide and stick together, with no external horizontal forces. Compared with just before the collision, afterward the system has:', options: ['The same momentum and less kinetic energy', 'Less momentum and the same kinetic energy', 'The same momentum and kinetic energy', 'Less momentum and less kinetic energy'], correctIndex: 0, explanation: 'Momentum is conserved in every collision without external forces. When objects stick together (perfectly inelastic), the largest possible share of kinetic energy is lost to heat and deformation. Only an elastic collision conserves kinetic energy as well.', partNumber: 4, partTitle: P4 },

  // Part 5 — Fluids
  { id: 'mpm-ent-5a', question: 'An object floats at rest on water. The weight of the water it displaces is:', options: ['Less than its own weight', 'Equal to its own weight', 'Greater than its own weight', 'Zero, since it is not submerged'], correctIndex: 1, explanation: "A floating object is in equilibrium, so the buoyant force balances its weight, and by Archimedes' principle the buoyant force equals the weight of the displaced fluid. A floating object is partly submerged, so it does displace water: it sinks just deep enough for that water to weigh as much as it does.", partNumber: 5, partTitle: P5 },
  { id: 'mpm-ent-5b', question: 'Blood flows from a vessel of radius $r$ into a vessel of radius $r/2$. Treating blood as incompressible, its speed in the narrower vessel is:', options: ['Halved', 'Doubled', 'Quadrupled', 'Unchanged'], correctIndex: 2, explanation: 'Continuity requires $A_1v_1 = A_2v_2$, and area scales with $r^2$, so halving the radius cuts the area to one quarter and the speed must rise by a factor of 4. A doubling would apply if the area, not the radius, were halved.', partNumber: 5, partTitle: P5 },
  { id: 'mpm-ent-5c', question: 'A diver is 10 m below the surface of a lake ($\\rho = 1000$ kg/m$^3$, $g = 10$ m/s$^2$, $P_{atm} \\approx 1.0 \\times 10^5$ Pa). The absolute pressure on the diver is about:', options: ['$1.0 \\times 10^4$ Pa', '$1.0 \\times 10^5$ Pa', '$1.1 \\times 10^5$ Pa', '$2.0 \\times 10^5$ Pa'], correctIndex: 3, explanation: '$P = P_0 + \\rho g h = 1.0 \\times 10^5 + (1000)(10)(10) = 2.0 \\times 10^5$ Pa, about 2 atm. The gauge pressure alone is $1.0 \\times 10^5$ Pa; $1.0 \\times 10^4$ Pa drops a factor of 10, and $1.1 \\times 10^5$ Pa adds that error to the surface pressure.', partNumber: 5, partTitle: P5 },

  // Part 6 — Torque, Equilibrium & Simple Machines
  { id: 'mpm-ent-6a', question: 'An object is in static equilibrium. Which conditions must both hold?', options: ['Net force and net torque both zero', 'Net force zero; net torque any value', 'Net torque zero; net force any value', 'Net force equal to its weight'], correctIndex: 0, explanation: 'Static equilibrium needs translational equilibrium ($\\sum F = 0$) and rotational equilibrium ($\\sum \\tau = 0$). Zero net force alone still lets the object start spinning, and zero net torque alone still lets it accelerate. Weight is one of the forces that must balance, not the net force.', partNumber: 6, partTitle: P6 },
  { id: 'mpm-ent-6b', question: 'A 20 N force is applied 0.50 m from a pivot, at 30° to the lever arm. The torque is:', options: ['10 N·m', '8.7 N·m', '5.0 N·m', '40 N·m'], correctIndex: 2, explanation: '$\\tau = rF\\sin\\theta = (0.50)(20)\\sin 30° = (0.50)(20)(0.5) = 5.0$ N·m. Using $\\cos 30°$ gives 8.7 N·m, 10 N·m is the torque only if the force were perpendicular to the lever arm (where torque is greatest), and 40 N·m divides instead of multiplying.', partNumber: 6, partTitle: P6 },

  // Part 7 — Waves & Sound
  { id: 'mpm-ent-7a', question: 'An ambulance siren moves away from a stationary listener. Compared with the emitted frequency, the listener hears:', options: ['A higher frequency', 'A lower frequency', 'The same frequency', 'A higher speed of sound'], correctIndex: 1, explanation: 'As the source recedes, each wavefront is emitted from farther away, so the wavelength reaching the listener is stretched and the observed frequency drops (lower pitch). An approaching source gives a higher frequency. The speed of sound is set by the air, not by the motion of the source.', partNumber: 7, partTitle: P7 },
  { id: 'mpm-ent-7b', question: 'A pipe is open at one end and closed at the other. Which harmonics can it support?', options: ['All whole-number harmonics', 'Only the even harmonics', 'Only the fundamental', 'Only the odd harmonics'], correctIndex: 3, explanation: 'The closed end must be a displacement node and the open end an antinode, so the pipe holds odd multiples of a quarter wavelength: $\\lambda_n = 4L/n$ with $n = 1, 3, 5, \\ldots$ A string fixed at both ends supports every whole-number harmonic.', partNumber: 7, partTitle: P7 },
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
