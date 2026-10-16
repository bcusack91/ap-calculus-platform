/**
 * AP Physics 1 diagnostic v2: sample items (8, including one figure-based
 * stimulus set with an authored SVG diagram) that exercise the engine end to
 * end. Authors add unit files beside this one and register them in ./index.ts.
 * Uses g = 10 m/s², as the AP Physics 1 equation sheet allows.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s001',
    title: 'Two blocks pulled across a frictionless surface',
    kind: 'figure',
    content:
      'Block X (mass 2.0 kg) and block Y (mass 3.0 kg) rest on a horizontal, frictionless surface and are connected by a light, inextensible string. A constant horizontal force of 10 N pulls block Y to the right, as shown. Block X trails behind Y, on the left.',
    svg:
      '<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block X, a string, then block Y, with a 10 N force pulling Y to the right" fill="none" stroke="currentColor" stroke-width="2">' +
      '<defs><marker id="phys1-s001-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" stroke="none"/></marker></defs>' +
      '<line x1="10" y1="95" x2="410" y2="95"/>' +
      '<rect x="40" y="55" width="70" height="40"/>' +
      '<text x="75" y="80" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">X</text>' +
      '<text x="75" y="48" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">2.0 kg</text>' +
      '<line x1="110" y1="75" x2="200" y2="75"/>' +
      '<rect x="200" y="45" width="90" height="50"/>' +
      '<text x="245" y="76" text-anchor="middle" font-size="16" fill="currentColor" stroke="none">Y</text>' +
      '<text x="245" y="38" text-anchor="middle" font-size="12" fill="currentColor" stroke="none">3.0 kg</text>' +
      '<line x1="290" y1="70" x2="390" y2="70" marker-end="url(#phys1-s001-arrow)"/>' +
      '<text x="340" y="60" text-anchor="middle" font-size="13" fill="currentColor" stroke="none">F = 10 N</text>' +
      '</svg>',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'phys1-s001-q1',
    stimulusId: 'phys1-s001',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'easy',
    stem: 'What is the magnitude of the acceleration of block X?',
    options: ['2.0 m/s²', '3.3 m/s²', '5.0 m/s²', '1.0 m/s²'],
    correctIndex: 0,
    explanation:
      'The blocks move together, so treat them as one system: a = F/(m_X + m_Y) = 10 N / 5.0 kg = 2.0 m/s². 3.3 m/s² uses only Y’s mass (10/3.0), and 5.0 m/s² uses only X’s mass (10/2.0).',
  },
  {
    id: 'phys1-s001-q2',
    stimulusId: 'phys1-s001',
    unit: 'unit-2',
    topicSlug: 'newtons-first-second-laws',
    difficulty: 'medium',
    stem: 'What is the tension in the string?',
    options: ['4.0 N', '6.0 N', '10 N', '2.0 N'],
    correctIndex: 0,
    explanation:
      'The string is the only horizontal force on X, so T = m_X a = (2.0 kg)(2.0 m/s²) = 4.0 N. 6.0 N would be the net force on Y, and 10 N is the applied force, which acts on Y, not on the string.',
  },
  {
    id: 'phys1-s001-q3',
    stimulusId: 'phys1-s001',
    unit: 'unit-2',
    topicSlug: 'newtons-third-law',
    difficulty: 'hard',
    stem: 'The experiment is repeated with the same 10 N force applied to block X instead, so that Y now trails behind. How does the string tension compare with its value in the original setup?',
    options: [
      'It is greater, because the string must now accelerate the more massive block.',
      'It is the same, because the system’s total mass and acceleration are unchanged.',
      'It is smaller, because the force now acts directly on the less massive block.',
      'It is greater, because the net force on the two-block system is now larger.',
    ],
    correctIndex: 0,
    explanation:
      'The acceleration is still 2.0 m/s², but the string now pulls Y, so T = m_Y a = (3.0 kg)(2.0 m/s²) = 6.0 N, more than the original 4.0 N. The tension depends on which block the string must accelerate, not only on the system’s acceleration. The net force on the system is still 10 N.',
  },
  {
    id: 'phys1-u1-001',
    unit: 'unit-1',
    topicSlug: 'one-dimensional-motion',
    difficulty: 'easy',
    stem: 'A ball is thrown straight up and caught at the same height. Air resistance is negligible. Which statement describes the ball at the top of its path?',
    options: [
      'Its velocity is zero and its acceleration is 10 m/s² downward.',
      'Its velocity is zero and its acceleration is also exactly zero.',
      'Its velocity is 10 m/s downward and its acceleration is zero.',
      'Its velocity is zero and its acceleration is 10 m/s² upward.',
    ],
    correctIndex: 0,
    explanation:
      'At the top the ball momentarily stops, so its velocity is zero. Gravity still acts, so its acceleration is g = 10 m/s² downward throughout the flight, including at the top. If the acceleration were zero there, the ball would stay at the top.',
  },
  {
    id: 'phys1-u3-001',
    unit: 'unit-3',
    topicSlug: 'conservation-of-energy',
    difficulty: 'medium',
    stem: 'A 2.0 kg ball is released from rest 5.0 m above the ground. Air resistance is negligible. What is its speed just before it hits the ground?',
    options: ['10 m/s', '5.0 m/s', '50 m/s', '100 m/s'],
    correctIndex: 0,
    explanation:
      'mgh = ½mv², so v = √(2gh) = √(2 × 10 × 5.0) = 10 m/s. The mass cancels. 100 m/s is v², and 50 m/s is gh.',
  },
  {
    id: 'phys1-u4-001',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'medium',
    stem: 'A 2.0 kg cart moving at 3.0 m/s collides with a 1.0 kg cart at rest, and the carts stick together. What is their speed just after the collision?',
    options: ['2.0 m/s', '1.0 m/s', '1.5 m/s', '3.0 m/s'],
    correctIndex: 0,
    explanation:
      'Momentum is conserved: (2.0)(3.0) = (2.0 + 1.0)v, so v = 6.0/3.0 = 2.0 m/s. Kinetic energy is not conserved in a collision where the carts stick, so an energy calculation gives the wrong speed.',
  },
  {
    id: 'phys1-u7-001',
    unit: 'unit-7',
    topicSlug: 'introduction-to-shm',
    difficulty: 'easy',
    stem: 'A simple pendulum swings with small amplitude. Its string is replaced with one four times as long, and nothing else changes. What happens to the period?',
    options: [
      'The period becomes twice as long.',
      'The period becomes four times as long.',
      'The period becomes half as long.',
      'The period stays exactly the same.',
    ],
    correctIndex: 0,
    explanation:
      'T = 2π√(L/g), so the period is proportional to √L. Multiplying L by 4 multiplies T by √4 = 2. Neither the mass nor the small amplitude affects the period.',
  },
  {
    id: 'phys1-u8-001',
    unit: 'unit-8',
    topicSlug: 'fluids-buoyancy',
    difficulty: 'medium',
    stem: 'A solid block floats at rest in fresh water (density 1000 kg/m³) with 60% of its volume below the surface. What is the density of the block?',
    options: ['600 kg/m³', '400 kg/m³', '1000 kg/m³', '1600 kg/m³'],
    correctIndex: 0,
    explanation:
      'For a floating object the buoyant force equals the weight: ρ_water(0.60V)g = ρ_block V g, so ρ_block = 0.60 × 1000 = 600 kg/m³. 400 kg/m³ uses the fraction above the surface.',
  },
]
