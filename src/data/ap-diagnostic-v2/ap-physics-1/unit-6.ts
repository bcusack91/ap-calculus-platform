/**
 * AP Physics 1 diagnostic v2 — Unit 6: Energy and Momentum of Rotating
 * Systems (CED 2024 topics 6.1–6.6). Angular momentum is handled as clockwise
 * / counterclockwise magnitudes only (6.3 boundary: no vector direction); no
 * gyroscopes or precession; rolling is without slipping (6.5 boundary).
 * g = 10 m/s².
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'phys1-s022',
    title: 'Torques applied to a spinning wheel',
    kind: 'table',
    content:
      'A wheel with rotational inertia 0.50 kg·m² about its axle spins on a frictionless axle at 4.0 rad/s at t = 0. A motor then applies the constant torques listed for each time interval. A positive torque acts in the direction the wheel is already turning; a negative torque opposes it.\n\n| Time interval (s) | Torque on the wheel (N·m) |\n|---|---|\n| 0 to 3.0 | +2.0 |\n| 3.0 to 5.0 | 0 |\n| 5.0 to 7.0 | −1.0 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // --- Set: torques on a spinning wheel (phys1-s022) ---
  {
    id: 'phys1-s022-q1',
    stimulusId: 'phys1-s022',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'medium',
    stem: 'What is the angular velocity of the wheel at t = 3.0 s?',
    options: ['16 rad/s', '12 rad/s', '10 rad/s', '7.0 rad/s'],
    correctIndex: 0,
    explanation:
      'The angular impulse τΔt = (2.0)(3.0) = 6.0 kg·m²/s adds to the initial angular momentum Iω = (0.50)(4.0) = 2.0 kg·m²/s, giving L = 8.0 kg·m²/s and ω = 8.0/0.50 = 16 rad/s. 12 rad/s leaves out the initial spin; 10 rad/s adds τΔt directly to ω without dividing by I; 7.0 rad/s multiplies the angular impulse by I instead of dividing.',
  },
  {
    id: 'phys1-s022-q2',
    stimulusId: 'phys1-s022',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'hard',
    stem: 'What is the angular velocity of the wheel at t = 7.0 s?',
    options: ['12 rad/s', '16 rad/s', '14 rad/s', '20 rad/s'],
    correctIndex: 0,
    explanation:
      'From 3.0 to 5.0 s there is no torque, so L stays 8.0 kg·m²/s. From 5.0 to 7.0 s the angular impulse is (−1.0)(2.0) = −2.0 kg·m²/s, so L = 6.0 kg·m²/s and ω = 6.0/0.50 = 12 rad/s. 16 rad/s ignores the opposing torque; 14 rad/s subtracts the angular impulse straight from ω without dividing by I; 20 rad/s adds the opposing torque’s effect, a sign error.',
  },
  // --- Standalone items ---
  {
    id: 'phys1-u6-001',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'easy',
    stem: 'A grinding wheel has rotational inertia 0.50 kg·m² about its axle and spins at 4.0 rad/s. What is its rotational kinetic energy?',
    options: ['4.0 J', '8.0 J', '2.0 J', '1.0 J'],
    correctIndex: 0,
    explanation:
      'K_rot = ½Iω² = ½(0.50)(4.0)² = 4.0 J. 8.0 J drops the ½; 2.0 J forgets to square ω, giving the angular momentum Iω in the wrong unit; 1.0 J is ½Iω.',
  },
  {
    id: 'phys1-u6-002',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'medium',
    stem: 'A motor exerts a constant 3.0 N·m torque on a wheel while the wheel turns through 2.0 revolutions. How much work does the motor do on the wheel?',
    options: ['38 J', '6.0 J', '19 J', '75 J'],
    correctIndex: 0,
    explanation:
      'Work by a torque is W = τΔθ with Δθ in radians: 2.0 rev = 4π rad ≈ 12.6 rad, so W = (3.0)(12.6) ≈ 38 J. 6.0 J multiplies by the number of revolutions without converting to radians; 19 J uses one revolution; 75 J doubles the angle (8π rad).',
  },
  {
    id: 'phys1-u6-003',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'medium',
    stem: 'A wheel with rotational inertia 0.25 kg·m² is at rest on a frictionless axle. A constant torque of 0.50 N·m acts on it for 4.0 s. What is its angular velocity afterward?',
    options: ['8.0 rad/s', '2.0 rad/s', '0.50 rad/s', '0.13 rad/s'],
    correctIndex: 0,
    explanation:
      'The angular impulse τΔt = (0.50)(4.0) = 2.0 kg·m²/s equals the change in angular momentum, so Iω = 2.0 and ω = 2.0/0.25 = 8.0 rad/s. 2.0 rad/s reports the angular impulse as ω (forgetting I); 0.50 rad/s multiplies by I; 0.13 rad/s inverts the ratio (I divided by τΔt).',
  },
  {
    id: 'phys1-u6-004',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'medium',
    stem: 'A comet moves in a long elliptical orbit around the Sun. The only significant force on it is the Sun’s gravity. Where in its orbit is the comet’s speed greatest, and why?',
    options: [
      'Closest to the Sun, because its angular momentum about the Sun is conserved.',
      'Farthest from the Sun, because a larger radius there carries more angular momentum.',
      'Closest to the Sun, because the Sun’s gravity does no work on the comet in its orbit.',
      'Its speed is the same everywhere, because gravity is always perpendicular to its velocity.',
    ],
    correctIndex: 0,
    explanation:
      'Gravity points toward the Sun, so it exerts no torque about the Sun and the comet’s angular momentum mvr⊥ is constant. Where r is smallest, v must be largest. (Energy agrees: the system’s gravitational potential energy is lowest there.) A larger radius requires a SMALLER speed for the same L. Gravity does do work on the comet in an ellipse (the force is not perpendicular to the velocity except at the closest and farthest points), which is also why the speed is not constant.',
  },
  {
    id: 'phys1-u6-006',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'medium',
    stem: 'A satellite moves in a circular orbit around a planet. Which statement correctly describes the satellite during one orbit?',
    options: [
      'Its kinetic energy and angular momentum stay constant, but its linear momentum does not.',
      'Its kinetic energy, its angular momentum and its linear momentum all stay constant.',
      'Its angular momentum changes, because the gravitational force on it is never zero.',
      'Its kinetic energy changes, because gravity keeps pulling on it throughout the orbit.',
    ],
    correctIndex: 0,
    explanation:
      'In a circular orbit gravity is always perpendicular to the velocity, so it does no work (constant speed and kinetic energy) and, pointing at the center, exerts no torque about it (constant angular momentum). The velocity’s direction keeps changing, so linear momentum does not stay constant. A nonzero force can still exert zero torque, and a force can act without doing work.',
  },
  {
    id: 'phys1-u6-007',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'hard',
    stem: 'A solid sphere (rotational inertia (2/5)MR²) is released from rest and rolls without slipping down a ramp, descending a vertical height of 0.70 m. What is the speed of its center at the bottom? (Use g = 10 m/s².)',
    options: ['3.2 m/s', '3.7 m/s', '2.6 m/s', '2.4 m/s'],
    correctIndex: 0,
    explanation:
      'Energy: mgh = ½mv² + ½Iω² with ω = v/R and I = (2/5)mR², so mgh = (½ + ⅕)mv² = 0.7mv². v² = gh/0.7 = (10)(0.70)/0.70 = 10, so v ≈ 3.2 m/s. 3.7 m/s is √(2gh), a frictionless slide with no rotation; 2.6 m/s is √(gh), as if the energy split evenly between translation and rotation; 2.4 m/s drops the ½ in the translational kinetic energy ((1 + ⅕)v² = gh).',
  },
  {
    id: 'phys1-u6-008',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'hard',
    stem: 'A puck slides at constant velocity in a straight line across frictionless ice, passing point P at a closest distance d. How does the puck’s angular momentum about P change as the puck approaches and then moves away from P?',
    options: [
      'It stays constant the whole time.',
      'It is zero, since the puck does not rotate.',
      'It is largest at the closest approach.',
      'It is smallest at the closest approach.',
    ],
    correctIndex: 0,
    explanation:
      'Angular momentum about a point is L = mvr⊥, where r⊥ is the perpendicular distance from P to the line of motion. For straight-line motion r⊥ = d at every instant, so L = mvd is constant, as it must be: no force acts, so there is no torque about P. A particle does not need to rotate to have angular momentum about a point, and the changing distance from P does not matter, because only the perpendicular distance enters.',
  },
  {
    id: 'phys1-u6-009',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'hard',
    stem: 'A satellite is moved from a circular orbit of radius r to a larger circular orbit of radius 2r around the same planet. Which statement correctly compares the satellite-planet system in the larger orbit with the smaller one?',
    options: [
      'The satellite’s kinetic energy is smaller, and the system’s total energy is greater (less negative).',
      'The satellite’s kinetic energy is greater, because it travels a longer path in each orbit.',
      'The satellite’s kinetic energy is smaller, and the system’s total energy is also smaller.',
      'The satellite’s kinetic energy and the system’s total energy are both unchanged.',
    ],
    correctIndex: 0,
    explanation:
      'For a circular orbit v² = GM/r, so K = GMm/(2r) halves when r doubles. The potential energy U = −GMm/r rises (becomes less negative) by more, so E = K + U = −GMm/(2r) increases toward zero: energy had to be added to move the satellite out. A longer path does not mean a greater speed (the larger orbit is slower), and the energies do change.',
  },
  {
    id: 'phys1-u6-010',
    unit: 'unit-6',
    topicSlug: 'angular-momentum',
    difficulty: 'hard',
    stem: 'A hoop and a solid disk have equal masses and equal radii and can turn about fixed axles through their centers. Starting from rest, each is spun up by the same constant torque for the same time. Which statement is correct afterward?',
    options: [
      'They have equal angular momenta, and the disk has more kinetic energy.',
      'They have equal angular momenta and equal kinetic energies, since the torques match.',
      'The hoop has more angular momentum and more kinetic energy, as its mass is farther out.',
      'The disk has more angular momentum, because it reaches a higher angular velocity.',
    ],
    correctIndex: 0,
    explanation:
      'Equal torques for equal times give equal angular impulses, so ΔL = τΔt is the same for both. Kinetic energy is K = L²/(2I): with equal L, the disk’s smaller I (½MR² versus MR²) gives it twice the kinetic energy (it spins twice as fast and turns through more angle, so the same torque does more work on it). The disk’s higher ω is exactly offset by its smaller I in L = Iω, and the hoop’s larger I means LESS kinetic energy for the same L.',
  },
]
