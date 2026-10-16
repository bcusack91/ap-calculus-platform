/**
 * AP Physics 1 diagnostic v2 — Unit 4: Linear Momentum (CED 2024 topics
 * 4.1–4.4). No coefficient of restitution, no variable-mass thrust, and no
 * collision that needs simultaneous equations (4.3 boundary): every collision
 * item gives enough final data for one unknown. 2D items are semiquantitative.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s016',
    title: 'Force on a puck during a slap shot',
    kind: 'graph',
    content:
      'A 0.20 kg hockey puck is at rest on frictionless ice when a stick strikes it. A force sensor records the horizontal force of the stick on the puck during the 10 ms of contact (1 ms = 0.001 s). The force rises steadily to a peak of 600 N at 5 ms and then falls steadily back to zero at 10 ms.',
    chart: {
      title: 'Figure 5. Force of the stick on the puck versus time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'ms',
      yLabel: 'Force',
      yUnit: 'N',
      xValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      yValues: [0, 120, 240, 360, 480, 600, 480, 360, 240, 120, 0],
      seriesLabel: 'Force on puck',
    },
  },
  {
    id: 'phys1-s017',
    title: 'Collision trials with two carts',
    kind: 'table',
    content:
      'Students collide cart A with cart B, initially at rest, on a level track with negligible friction. Motion sensors record each cart’s velocity just before and just after the collision (positive is toward the right). Masses are in kilograms and velocities in meters per second.\n\n| Trial | Mass of A (kg) | Mass of B (kg) | A before (m/s) | A after (m/s) | B after (m/s) |\n|---|---|---|---|---|---|\n| 1 | 0.50 | 0.50 | +2.0 | 0 | +2.0 |\n| 2 | 0.50 | 0.50 | +2.0 | +1.0 | +1.0 |\n| 3 | 1.00 | 0.50 | +2.0 | +1.0 | +2.0 |\n| 4 | 0.50 | 1.00 | +2.0 | −0.40 | +1.6 |',
  },
  {
    id: 'phys1-s018',
    title: 'Velocities of two carts during a collision',
    kind: 'graph',
    content:
      'Cart A (1.0 kg) rolls toward cart B (3.0 kg), which is at rest, on a level track with negligible friction. The carts have magnetic bumpers, so they interact without touching. Motion sensors record both velocities (positive is toward the right); the interaction lasts from t = 0.20 s to t = 0.40 s. At t = 0.30 s both carts move at +0.50 m/s.',
    chart: {
      title: 'Figure 6. Velocity versus time for carts A and B',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 's',
      yLabel: 'Velocity',
      yUnit: 'm/s',
      xValues: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
      yValues: [2, 2, 2, 0.5, -1, -1, -1],
      seriesLabel: 'Cart A (1.0 kg)',
      comparisonSeries: [{ label: 'Cart B (3.0 kg)', yValues: [0, 0, 0, 0.5, 1, 1, 1] }],
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: force-time graph of a slap shot (phys1-s016) ---
  {
    id: 'phys1-s016-q1',
    stimulusId: 'phys1-s016',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'easy',
    stem: 'What is the magnitude of the impulse the stick delivers to the puck?',
    options: ['3.0 N·s', '6.0 N·s', '3000 N·s', '0.30 N·s'],
    correctIndex: 0,
    explanation:
      'Impulse is the area under the force-time graph: a triangle of base 0.010 s and height 600 N, so J = ½(0.010)(600) = 3.0 N·s. 6.0 N·s leaves out the ½ (a rectangle); 3000 N·s leaves the time in milliseconds (½ × 10 × 600); 0.30 N·s converts 10 ms to 0.0010 s instead of 0.010 s.',
  },
  {
    id: 'phys1-s016-q2',
    stimulusId: 'phys1-s016',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'What is the speed of the puck just after the stick loses contact with it?',
    options: ['15 m/s', '30 m/s', '0.60 m/s', '7.5 m/s'],
    correctIndex: 0,
    explanation:
      'The impulse equals the change in momentum: 3.0 N·s = (0.20 kg)v − 0, so v = 15 m/s. 30 m/s uses the rectangle area (6.0 N·s); 0.60 m/s multiplies the impulse by the mass instead of dividing; 7.5 m/s halves the impulse a second time.',
  },
  {
    id: 'phys1-s016-q3',
    stimulusId: 'phys1-s016',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'hard',
    stem: 'A second stick with a more flexible blade gives an identical puck the same final speed, but the contact lasts 20 ms instead of 10 ms. The force again rises and falls steadily. How does the force graph for the second stick compare with Figure 5?',
    options: [
      'Its peak is half as large, so that the area under the graph is unchanged.',
      'Its peak is the same, so that the area under it doubles.',
      'Its peak is twice as large, so that the force lasts as long as needed.',
      'Its peak is half as large, so that the area under it is also halved.',
    ],
    correctIndex: 0,
    explanation:
      'The same final speed means the same change in momentum, so the impulse (area) must stay 3.0 N·s. Doubling the time of a triangle with the same area halves its height: ½(0.020)(F_peak) = 3.0 gives F_peak = 300 N. Keeping the peak would double the impulse and the speed; a larger peak over a longer time would increase the impulse further; and halving the area would halve the final speed.',
  },
  // --- Set: collision trials table (phys1-s017) ---
  {
    id: 'phys1-s017-q1',
    stimulusId: 'phys1-s017',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'easy',
    stem: 'In which trial did the two carts most likely stick together?',
    options: ['Trial 2', 'Trial 1', 'Trial 3', 'Trial 4'],
    correctIndex: 0,
    explanation:
      'Carts that stick together move with one common velocity afterward. Only in trial 2 do A and B have the same final velocity (+1.0 m/s). In trial 1 A stops and B moves off; in trial 3 B moves faster than A; in trial 4 A bounces backward.',
  },
  {
    id: 'phys1-s017-q2',
    stimulusId: 'phys1-s017',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'medium',
    stem: 'Which trial is consistent with an elastic collision?',
    options: ['Trial 1', 'Trial 2', 'Trial 3', 'Trial 4'],
    correctIndex: 0,
    explanation:
      'An elastic collision conserves both momentum and kinetic energy. Trial 1: K before = ½(0.50)(2.0)² = 1.0 J and K after = ½(0.50)(2.0)² = 1.0 J, with momentum 1.0 kg·m/s before and after. Trial 2 keeps only 0.50 J (perfectly inelastic). Trial 3 has 2.0 J before and 0.50 + 1.0 = 1.5 J after (inelastic). Trial 4 does not even conserve momentum, and its kinetic energy after (0.04 + 1.28 = 1.32 J) exceeds the 1.0 J before.',
  },
  {
    id: 'phys1-s017-q3',
    stimulusId: 'phys1-s017',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'hard',
    stem: 'One trial’s data cannot be correct if the two carts form an isolated system. Which trial is it, and why?',
    options: [
      'Trial 4, because the carts’ total momentum after the collision is greater than before it',
      'Trial 3, because cart A cannot keep moving forward after it strikes a lighter cart',
      'Trial 1, because cart A cannot come to a complete stop when it strikes a cart at rest',
      'Trial 2, because kinetic energy cannot decrease when two carts collide on a track',
    ],
    correctIndex: 0,
    explanation:
      'For an isolated system, total momentum is the same before and after. Trial 4: before (0.50)(2.0) = 1.0 kg·m/s; after (0.50)(−0.40) + (1.00)(1.6) = −0.20 + 1.6 = 1.4 kg·m/s, an increase that requires an external impulse (or a measurement error). Trials 1–3 all conserve momentum (1.0, 1.0 and 2.0 kg·m/s). A heavier cart can keep moving forward, an equal-mass cart can stop, and kinetic energy often decreases in collisions.',
  },
  // --- Set: velocity-time graphs of two carts (phys1-s018) ---
  {
    id: 'phys1-s018-q1',
    stimulusId: 'phys1-s018',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'What is the magnitude of the average force that cart A exerts on cart B during the interaction?',
    options: ['15 N', '5.0 N', '0.60 N', '30 N'],
    correctIndex: 0,
    explanation:
      'Cart B’s momentum changes from 0 to (3.0 kg)(1.0 m/s) = 3.0 kg·m/s over 0.20 s, so F_avg = Δp/Δt = 3.0/0.20 = 15 N. (Cart A’s change, (1.0)(−1.0 − 2.0) = −3.0 kg·m/s, gives the same 15 N in the opposite direction, as the third law requires.) 5.0 N uses B’s velocity change without its mass; 0.60 N multiplies Δp by Δt; 30 N uses only 0.10 s of the interaction.',
  },
  {
    id: 'phys1-s018-q2',
    stimulusId: 'phys1-s018',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'medium',
    stem: 'Based on the graph, how should the collision be classified?',
    options: [
      'Elastic, because the carts’ total kinetic energy is 2.0 J both before and after',
      'Inelastic, because cart A reverses its direction and loses all of its forward momentum',
      'Perfectly inelastic, because both carts briefly share the same velocity of 0.50 m/s',
      'Elastic, because the carts’ total momentum is 2.0 kg·m/s both before and after it',
    ],
    correctIndex: 0,
    explanation:
      'Before: K = ½(1.0)(2.0)² = 2.0 J. After: ½(1.0)(1.0)² + ½(3.0)(1.0)² = 0.50 + 1.5 = 2.0 J. Kinetic energy is the same, so the collision is elastic. Momentum (2.0 kg·m/s before and after) is conserved in EVERY collision of an isolated system, so it cannot be the reason. A reversing cart does not signal energy loss, and sharing a velocity only for an instant mid-collision is not sticking together.',
  },
  {
    id: 'phys1-s018-q3',
    stimulusId: 'phys1-s018',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'hard',
    stem: 'At t = 0.30 s the total kinetic energy of the two carts is 0.50 J, less than the 2.0 J before the interaction. Which statement best accounts for the difference?',
    options: [
      'About 1.5 J is stored as potential energy in the magnetic interaction and is returned to the carts by t = 0.40 s.',
      'About 1.5 J is lost to thermal energy in the bumpers, which is why the carts slow down at t = 0.30 s.',
      'About 1.5 J has been handed to cart B, which carries the kinetic energy that cart A lost by that time.',
      'About 1.5 J is carried away by the track, which exerts a horizontal force on the carts during the interaction.',
    ],
    correctIndex: 0,
    explanation:
      'The total kinetic energy returns to 2.0 J after the interaction (previous question), so the missing 1.5 J cannot have been dissipated; it was stored temporarily as magnetic potential energy while the bumpers were closest and then given back. Thermal losses would not be recovered. Cart B cannot be holding it: at t = 0.30 s cart B has only ½(3.0)(0.50)² ≈ 0.38 J, and that is already counted in the 0.50 J total. Friction from the track is negligible.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u4-001',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'easy',
    stem: 'A 3000 kg truck moves at 10 m/s and a 1000 kg car moves at 35 m/s. What is the ratio of the car’s momentum to the truck’s momentum?',
    options: [
      '1.2',
      '0.86',
      '0.33',
      '3.5',
    ],
    correctIndex: 0,
    explanation:
      'p = mv: car (1000)(35) = 3.5 × 10⁴ kg·m/s; truck (3000)(10) = 3.0 × 10⁴ kg·m/s; the ratio is 3.5/3.0 ≈ 1.2, so the lighter car has the greater momentum. 0.86 inverts the ratio; 0.33 compares only the masses; 3.5 compares only the speeds.',
  },
  {
    id: 'phys1-u4-002',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'A tennis ball moving east is struck by a racket and leaves moving north at the same speed. What is the direction of the impulse that the racket exerts on the ball?',
    options: [
      'Northwest',
      'Northeast',
      'North',
      'East',
    ],
    correctIndex: 0,
    explanation:
      'Impulse equals the change in momentum, p_final − p_initial = (north) − (east) = (north) + (west), which points northwest with magnitude √2 mv. Northeast adds the two momenta instead of subtracting; north is the final momentum, not the change; east is the initial direction.',
  },
  {
    id: 'phys1-u4-003',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'easy',
    stem: 'Which change doubles the magnitude of a cart’s momentum?',
    options: [
      'Doubling its speed while keeping its mass',
      'Doubling its kinetic energy, keeping its mass',
      'Halving its mass and at the same time doubling its speed',
      'Doubling its mass and at the same time halving its speed',
    ],
    correctIndex: 0,
    explanation:
      'p = mv, so doubling v at fixed m doubles p. Doubling the kinetic energy at fixed mass multiplies v (and p) by only √2. Halving m while doubling v, or doubling m while halving v, leaves the product mv unchanged.',
  },
  {
    id: 'phys1-u4-004',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'easy',
    stem: 'A 2.0 kg particle is at x = 0 and a 6.0 kg particle is at x = 4.0 m. Where is the center of mass of the two-particle system?',
    options: ['x = 3.0 m', 'x = 2.0 m', 'x = 1.0 m', 'x = 4.0 m'],
    correctIndex: 0,
    explanation:
      'x_cm = (m₁x₁ + m₂x₂)/(m₁ + m₂) = (2.0 × 0 + 6.0 × 4.0)/8.0 = 3.0 m, closer to the heavier particle. 2.0 m is the midpoint, which ignores the masses; 1.0 m measures 3.0 m from the wrong end (or weights the positions inversely); 4.0 m places it at the heavier particle itself.',
  },
  {
    id: 'phys1-u4-005',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'medium',
    stem: 'Cart A (2.0 kg) moving at 3.0 m/s catches up with cart B (1.0 kg) moving at 1.0 m/s in the same direction on a level, frictionless track. The carts stick together. What is their speed just after the collision?',
    options: ['2.3 m/s', '2.0 m/s', '1.7 m/s', '4.0 m/s'],
    correctIndex: 0,
    explanation:
      'Momentum before: (2.0)(3.0) + (1.0)(1.0) = 7.0 kg·m/s. After, (3.0 kg)v = 7.0, so v ≈ 2.3 m/s. 2.0 m/s ignores B’s initial motion (6.0/3.0); 1.7 m/s treats B as moving the opposite way (5.0/3.0); 4.0 m/s simply adds the speeds.',
  },
  {
    id: 'phys1-u4-006',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'medium',
    stem: 'A 0.050 kg lump of clay moving horizontally at 12 m/s hits a 0.25 kg cart at rest on a level, frictionless track and sticks to it. What is the speed of the cart and clay just afterward?',
    options: ['2.0 m/s', '2.4 m/s', '12 m/s', '5.4 m/s'],
    correctIndex: 0,
    explanation:
      'Momentum is conserved: (0.050)(12) = (0.050 + 0.25)v, so v = 0.60/0.30 = 2.0 m/s. 2.4 m/s divides by the cart’s mass alone; 12 m/s assumes the clay keeps its speed; 5.4 m/s conserves kinetic energy (½(0.050)(144) = ½(0.30)v²), which does not hold when objects stick together.',
  },
  {
    id: 'phys1-u4-007',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'Two identical balls are thrown at the same speed at two identical boxes resting on frictionless ice. Ball 1 sticks to its box; ball 2 bounces straight back. Which box ends up moving faster?',
    options: [
      'The box hit by ball 2, because a bounce gives the ball a larger change in momentum.',
      'The box hit by ball 1, because the ball stays with it and adds its own momentum to the box.',
      'They move at the same speed, because the two balls have the same momentum before they hit.',
      'The box hit by ball 1, because a sticking collision transfers all of the ball’s kinetic energy.',
    ],
    correctIndex: 0,
    explanation:
      'Each box gains the momentum its ball loses. Ball 1 goes from mv to a small forward velocity; ball 2 goes from mv to a backward velocity, so its momentum change is larger, and by the third law the box it hits receives a larger impulse. Equal initial momenta do not mean equal changes. A sticking collision is the one that LOSES the most kinetic energy, and ball 1 keeps part of its momentum by moving on with the box, so box 1 receives less.',
  },
  {
    id: 'phys1-u4-008',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'A graph of a cart’s momentum versus time is a straight line rising from 2.0 kg·m/s at t = 0 to 8.0 kg·m/s at t = 3.0 s. What is the net force on the cart?',
    options: ['2.0 N', '2.7 N', '6.0 N', '0.50 N'],
    correctIndex: 0,
    explanation:
      'Net force is the rate of change of momentum, the slope of the p-t graph: (8.0 − 2.0)/3.0 = 2.0 N. 2.7 N uses the final momentum alone (8.0/3.0); 6.0 N is the change in momentum, not divided by the time; 0.50 N inverts the slope.',
  },
  {
    id: 'phys1-u4-009',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'A 2.0 kg cart moves at +3.0 m/s. A brief force then gives it an impulse of −10 N·s. What is the cart’s velocity afterward?',
    options: ['−2.0 m/s', '+8.0 m/s', '−5.0 m/s', '+3.0 m/s'],
    correctIndex: 0,
    explanation:
      'Final momentum = initial momentum + impulse = (2.0)(3.0) − 10 = −4.0 kg·m/s, so v = −4.0/2.0 = −2.0 m/s (the cart now moves the other way). +8.0 m/s adds the impulse’s size as if it were a velocity; −5.0 m/s divides the impulse by the mass and ignores the initial velocity; +3.0 m/s assumes a brief force cannot change the velocity.',
  },
  {
    id: 'phys1-u4-010',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'medium',
    stem: 'A firework shell follows a parabolic path. At the top of its path it bursts into many fragments that fly off in different directions. Air resistance is negligible. What path does the center of mass of the fragments follow until the first fragment lands?',
    options: [
      'It continues along the shell’s original parabolic path.',
      'It stops and then falls straight down from the burst point.',
      'It stays at the burst point, because the fragments move apart symmetrically.',
      'It moves straight horizontally, because the burst cancels gravity’s effect.',
    ],
    correctIndex: 0,
    explanation:
      'The burst forces are internal, so they cannot change the motion of the system’s center of mass. The only external force is still gravity on the total mass, so the center of mass keeps the same acceleration g and continues along the original parabola. Stopping, hovering or moving horizontally would each need an external force or a canceled gravity, and neither exists.',
  },
  {
    id: 'phys1-u4-011',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'hard',
    stem: 'A 3.0 kg object at rest on frictionless ice bursts into two pieces. A 1.0 kg piece slides east at 6.0 m/s. How much kinetic energy did the burst release?',
    options: ['27 J', '18 J', '9.0 J', '0 J'],
    correctIndex: 0,
    explanation:
      'Momentum stays zero: (1.0)(6.0) = (2.0)v, so the 2.0 kg piece slides west at 3.0 m/s. Kinetic energy released = ½(1.0)(6.0)² + ½(2.0)(3.0)² = 18 + 9.0 = 27 J. 18 J counts only the small piece; 9.0 J only the large one; 0 J confuses conservation of momentum (total zero) with conservation of kinetic energy.',
  },
  {
    id: 'phys1-u4-012',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'hard',
    stem: 'A 0.020 kg dart moving horizontally at 300 m/s embeds itself in a 2.98 kg block hanging at rest from long strings. The block and dart swing upward together. Air resistance is negligible. To what maximum height above its starting point does the block rise?',
    options: ['0.20 m', '30 m', '2.0 m', '0.40 m'],
    correctIndex: 0,
    explanation:
      'Two stages. The collision conserves momentum (not kinetic energy): (0.020)(300) = (3.0)V, so V = 2.0 m/s. The swing then conserves mechanical energy: h = V²/(2g) = 4.0/20 = 0.20 m. 30 m wrongly applies energy conservation to the collision itself (½(0.020)(300²) = 900 J = (3.0)(10)h); 2.0 m reports the speed as a height; 0.40 m drops the 2 in V²/(2g).',
  },
  {
    id: 'phys1-u4-013',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'hard',
    stem: 'A ball is dropped from rest and falls toward the ground. Which statement about momentum is correct while the ball falls?',
    options: [
      'The ball’s momentum is not conserved, but the momentum of the ball-Earth system is conserved.',
      'The ball’s momentum is conserved, because no force other than gravity acts on it.',
      'Neither the ball’s momentum nor the ball-Earth system’s momentum is conserved.',
      'The ball’s momentum is conserved, but the ball-Earth system’s momentum is not.',
    ],
    correctIndex: 0,
    explanation:
      'The ball alone feels an external force (Earth’s gravity), so its momentum grows downward. In the ball-Earth system, the gravitational forces are an internal third-law pair, so the total momentum stays zero: Earth gains an equal, opposite (immeasurably slow) upward momentum. Gravity is a force, so "no force other than gravity" is not "no force"; and with no external force on ball + Earth, that system’s momentum is conserved.',
  },
  {
    id: 'phys1-u4-014',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'hard',
    stem: 'A 1.0 kg cart and a 4.0 kg cart have momenta of equal magnitude. How does the kinetic energy of the 1.0 kg cart compare with that of the 4.0 kg cart?',
    options: [
      'It is four times as large, because that cart moves four times as fast.',
      'It is the same, because the two momenta are equal.',
      'It is one-fourth as large, because its mass is smaller.',
      'It is twice as large, because that cart moves twice as fast.',
    ],
    correctIndex: 0,
    explanation:
      'K = ½mv² = p²/(2m). With equal p, K is inversely proportional to mass, so the 1.0 kg cart has 4 times the kinetic energy (it moves 4 times as fast: K ∝ mv² = 1 × 16 versus 4 × 1). Equal momenta do not mean equal energies; the lighter cart has MORE energy, not less; and its speed is 4 times, not 2 times, the other’s.',
  },
  {
    id: 'phys1-u4-015',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'hard',
    stem: 'A 1.0 kg cart and a 2.0 kg cart are latched together with a compressed spring between them and roll east together at 1.0 m/s on a level, frictionless track. The latch is released; afterward the 1.0 kg cart is at rest. What is the velocity of the 2.0 kg cart?',
    options: ['1.5 m/s east', '0.50 m/s east', '1.0 m/s east', '3.0 m/s east'],
    correctIndex: 0,
    explanation:
      'The spring force is internal, so momentum is conserved: (3.0 kg)(1.0 m/s) = (1.0)(0) + (2.0)v, giving v = 1.5 m/s east. 0.50 m/s east counts only the 1.0 kg cart’s initial momentum ((1.0)(1.0) = 2.0v); 1.0 m/s east assumes the 2.0 kg cart’s speed is unchanged; 3.0 m/s east divides the total momentum by the wrong cart’s mass (3.0/1.0).',
  },
  {
    id: 'phys1-u4-016',
    unit: 'unit-4',
    topicSlug: 'collisions',
    difficulty: 'hard',
    stem: 'On frictionless ice, puck 1 slides east and strikes puck 2, which is at rest. After the collision puck 1 moves northeast. Which statement about puck 2’s velocity after the collision must be true?',
    options: [
      'It has a southward component, so the pucks’ total north-south momentum stays zero.',
      'It has a northward component, because puck 2 is pushed in the same direction as puck 1.',
      'It points due east, because puck 1 was moving due east just before the two pucks collided.',
      'It has a westward component, because puck 1 still moves partly east after the collision.',
    ],
    correctIndex: 0,
    explanation:
      'Momentum is conserved component by component. Before the collision the north-south momentum is zero; after it puck 1 has a northward component, so puck 2 must have an equal southward component. (Its east component is whatever puck 1 lost, so it is eastward, not westward.) A due-east velocity would leave a net northward momentum, and a northward component would make it larger still.',
  },
  {
    id: 'phys1-u4-017',
    unit: 'unit-4',
    topicSlug: 'conservation-of-momentum',
    difficulty: 'hard',
    stem: 'Cart A has twice the mass of cart B. The carts are held at rest with a compressed spring between them on a level, frictionless track and then released. After the spring has pushed them apart, which statement is correct?',
    options: [
      'Their momenta are equal in size, and B has twice the kinetic energy of A.',
      'Their kinetic energies are equal, and A has twice the momentum of B.',
      'Their momenta are equal in size, and they have equal kinetic energies.',
      'B has twice the momentum and twice the kinetic energy of A.',
    ],
    correctIndex: 0,
    explanation:
      'The system starts at rest and the spring force is internal, so the total momentum stays zero: the carts have equal and opposite momenta, and B moves twice as fast as A. With equal p, K = p²/(2m), so the lighter cart B has twice the kinetic energy (½(m)(2v)² = 2mv² versus ½(2m)v² = mv²). Equal energies or unequal momenta would violate momentum conservation.',
  },
  {
    id: 'phys1-u4-018',
    unit: 'unit-4',
    topicSlug: 'momentum-and-impulse',
    difficulty: 'medium',
    stem: 'A bowling ball and a tennis ball are rolling with momenta of equal magnitude. Each is brought to rest by a force. Which ball needs the larger impulse to stop it?',
    options: [
      'Neither; both need an impulse of the same size.',
      'The bowling ball, because it has much more mass.',
      'The tennis ball, because it is moving much faster.',
      'It depends on how long each stopping force acts.',
    ],
    correctIndex: 0,
    explanation:
      'The impulse needed equals the change in momentum, from p to 0, which is the same for both balls. The force and the time can vary (a short, large force or a long, small one), but their product, the impulse, is fixed by Δp. Mass or speed alone does not determine momentum change, and the stopping time changes the average force, not the impulse.',
  },
]
