/**
 * AP Physics 1 diagnostic v2 — Unit 7: Oscillations (CED 2024 topics
 * 7.1–7.4). Spring-mass and simple-pendulum periods only (7.2); no damping,
 * physical pendulums or springs in series/parallel. g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s023',
    title: 'Position of an oscillating block',
    kind: 'graph',
    content:
      'A block attached to a horizontal spring slides on a frictionless surface. A motion sensor records the block’s position x relative to the spring’s equilibrium position, with +x to the right. The graph shows x versus time for 1.2 s; the motion repeats this pattern.',
    chart: {
      title: 'Figure 8. Position of the block versus time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 's',
      yLabel: 'Position x',
      yUnit: 'cm',
      xValues: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
      yValues: [10, 7.1, 0, -7.1, -10, -7.1, 0, 7.1, 10, 7.1, 0, -7.1, -10],
      seriesLabel: 'Block',
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: position-time graph of an oscillator (phys1-s023) ---
  {
    id: 'phys1-s023-q1',
    stimulusId: 'phys1-s023',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'medium',
    stem: 'What are the amplitude and the period of the block’s motion?',
    options: [
      'Amplitude 10 cm, period 0.80 s',
      'Amplitude 20 cm, period 0.80 s',
      'Amplitude 10 cm, period 0.40 s',
      'Amplitude 20 cm, period 1.2 s',
    ],
    correctIndex: 0,
    explanation:
      'The amplitude is the maximum displacement from equilibrium, 10 cm (not the 20 cm peak-to-peak distance). The period is the time for one full cycle: the block is back at +10 cm, moving the same way, at t = 0.80 s. 0.40 s is only half a cycle (from +10 cm to −10 cm), and 1.2 s is the length of the recording, which covers one and a half cycles.',
  },
  {
    id: 'phys1-s023-q2',
    stimulusId: 'phys1-s023',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'hard',
    stem: 'Which statement describes the block at t = 0.40 s?',
    options: [
      'Its velocity is zero, and its acceleration points in the +x direction.',
      'Its velocity is zero, and its acceleration is also exactly zero at that time.',
      'Its velocity points in the −x direction, and its acceleration is zero there.',
      'Its velocity is zero, and its acceleration points along the −x direction.',
    ],
    correctIndex: 0,
    explanation:
      'At t = 0.40 s the block is at x = −10 cm, its maximum displacement in the −x direction. The x-t graph is flat there, so v = 0. The spring is stretched the most, and the restoring force (and acceleration, a = −kx/m) points back toward equilibrium, the +x direction, with its greatest magnitude. Zero velocity does not mean zero acceleration; the acceleration is zero only at x = 0; and it points opposite the displacement, not along it.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u7-001',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'easy',
    stem: 'An object moves back and forth about an equilibrium position. Which property of the net force on it guarantees that the motion is simple harmonic?',
    options: [
      'Its magnitude is proportional to the displacement, and it always points toward equilibrium.',
      'Its magnitude is constant, and it always points back toward the equilibrium position.',
      'Its magnitude is proportional to the object’s speed, and it points opposite the velocity.',
      'Its magnitude is proportional to the square of the displacement from equilibrium.',
    ],
    correctIndex: 0,
    explanation:
      'Simple harmonic motion is defined by a linear restoring force, F = −kx: proportional to the displacement and directed toward equilibrium. A constant-magnitude restoring force gives back-and-forth motion that is not sinusoidal (and its period depends on amplitude). A force opposite the velocity is a drag force, not a restoring force. A force ∝ x² is not linear, so the motion is not simple harmonic.',
  },
  {
    id: 'phys1-u7-002',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'medium',
    stem: 'A block on a spring oscillates with period T. The block is replaced with one of twice the mass, and the spring is replaced with one four times as stiff. What is the new period?',
    options: ['T/√2', 'T√2', 'T/2', '2T'],
    correctIndex: 0,
    explanation:
      'T = 2π√(m/k). The ratio m/k becomes (2m)/(4k) = ½(m/k), so T is multiplied by √½ = 1/√2. T√2 inverts the ratio; T/2 forgets the square root (m/k halves, so T halves); 2T assumes the period grows with stiffness.',
  },
  {
    id: 'phys1-u7-003',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'medium',
    stem: 'The string of a simple pendulum is made 21% longer, and nothing else changes. How does the period change?',
    options: [
      'It increases by about 10%, because the period depends on the square root of the length.',
      'It increases by 21%, because the period is proportional to the length.',
      'It increases by about 46%, because the period depends on the length squared.',
      'It does not change, because the period depends only on g.',
    ],
    correctIndex: 0,
    explanation:
      'T = 2π√(L/g), so the new period is √1.21 = 1.10 times the old one: about 10% longer. A 21% increase assumes T ∝ L; 46% assumes T ∝ L² (1.21² ≈ 1.46); and the period of a simple pendulum depends on both L and g.',
  },
  {
    id: 'phys1-u7-004',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'medium',
    stem: 'A cart attached to a spring oscillates on a horizontal, frictionless track with an amplitude of 0.10 m. Its maximum speed is 2.0 m/s. What is the period of the oscillation?',
    options: [
      '0.31 s',
      '0.050 s',
      '3.1 s',
      '20 s',
    ],
    correctIndex: 0,
    explanation:
      'For SHM, v_max = Aω, so ω = 2.0/0.10 = 20 rad/s and T = 2π/ω = 2π/20 ≈ 0.31 s. 0.050 s is A/v_max, which leaves out the 2π; 3.1 s divides 2π by v_max alone (2π/2.0), ignoring the amplitude; 20 s reports ω as if it were the period.',
  },
  {
    id: 'phys1-u7-005',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'medium',
    stem: 'Hanging a 0.30 kg block from a vertical spring stretches the spring 0.090 m at equilibrium. The block is then pulled down slightly and released. What is the period of its oscillation?',
    options: [
      '0.60 s',
      '0.095 s',
      '66 s',
      '0.19 s',
    ],
    correctIndex: 0,
    explanation:
      'At equilibrium kx = mg, so m/k = x/g = 0.090/10 = 0.0090 s². Then T = 2π√(m/k) = 2π√0.0090 ≈ 2π(0.095) ≈ 0.60 s. 0.095 s leaves out the 2π; 66 s inverts the ratio inside the root (2π√(g/x)); 0.19 s multiplies √(m/k) by 2 instead of 2π.',
  },
  {
    id: 'phys1-u7-007',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'hard',
    stem: 'A simple pendulum hangs from the ceiling of an elevator. How does its period while the elevator accelerates upward compare with its period while the elevator is at rest?',
    options: [
      'It is shorter, because the bob behaves as if it were in a stronger gravitational field.',
      'It is longer, because the upward acceleration works against the pendulum’s motion.',
      'It is the same, because the length of the pendulum has not changed.',
      'It is the same, because the period does not depend on the bob’s mass.',
    ],
    correctIndex: 0,
    explanation:
      'In an upward-accelerating frame the string must supply m(g + a) to support the bob at rest, so the bob behaves as if the gravitational field were g + a. With T = 2π√(L/g_eff), a larger g_eff gives a shorter period. The length is unchanged but g_eff is not; the mass indeed does not matter, but that is not the variable that changed.',
  },
  {
    id: 'phys1-u7-008',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'hard',
    stem: 'For an oscillating cart on a spring, a graph of the cart’s acceleration versus its displacement from equilibrium is a straight line through the origin with a slope of −25 s⁻². What is the period of the oscillation?',
    options: ['1.3 s', '0.20 s', '5.0 s', '0.25 s'],
    correctIndex: 0,
    explanation:
      'For SHM, a = −(k/m)x = −ω²x, so the slope is −ω² and ω = √25 = 5.0 rad/s. T = 2π/ω = 2π/5.0 ≈ 1.3 s. 0.20 s is 1/ω without the 2π; 5.0 s reports ω as the period; 0.25 s divides 2π by 25, skipping the square root.',
  },
  {
    id: 'phys1-u7-009',
    unit: 'unit-7',
    topicSlug: 'energy-in-shm',
    difficulty: 'hard',
    stem: 'A block on a horizontal spring oscillates with amplitude A and maximum speed v_max. Friction is negligible. At what distance from equilibrium is the block’s speed v_max/2?',
    options: ['0.87A', '0.50A', '0.71A', '0.25A'],
    correctIndex: 0,
    explanation:
      'At half the maximum speed the kinetic energy is (½)² = ¼ of the total, so the spring holds ¾ of it: ½kx² = ¾(½kA²), giving x = √(3/4)A ≈ 0.87A. 0.50A assumes speed falls linearly with distance; 0.71A is where the energy is split evenly (K = U); 0.25A uses ¼ of the amplitude instead of ¼ of the energy.',
  },
  {
    id: 'phys1-u7-010',
    unit: 'unit-7',
    topicSlug: 'energy-in-shm',
    difficulty: 'hard',
    stem: 'Block A (mass m) and block B (mass 4m) are attached to identical horizontal springs on a frictionless surface. Each is pulled out the same distance and released from rest. Which statement compares the two oscillations correctly?',
    options: [
      'The energies are equal, and A’s maximum speed is twice B’s.',
      'B has four times the energy, and the two maximum speeds are equal.',
      'The energies are equal, and A’s maximum speed is four times B’s.',
      'A has four times the energy, and A’s maximum speed is twice B’s.',
    ],
    correctIndex: 0,
    explanation:
      'The total energy is set by the spring and the amplitude, ½kA², which are the same for both. At equilibrium that energy is all kinetic: ½mv² is the same, so v ∝ 1/√m and A, with one-fourth the mass, moves √4 = 2 times as fast. Mass does not change the stored energy; and the speed ratio is the square root of the mass ratio, not the ratio itself.',
  },
]
