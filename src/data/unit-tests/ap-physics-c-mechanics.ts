/**
 * AP Physics C: Mechanics Unit Tests config (uses the shared unit-test engine).
 *
 * Questions are sampled from the existing Mechanics exit-quiz pool — the same
 * pool that powers the diagnostic. The engine selects a unit's questions by
 * `domain === unit.id`, so AP_PHYSICS_C_MECH_UNIT_ASSIGNMENT below re-files the
 * pool onto the CED units. `topicSlugs` are restricted to canonical slugs that
 * resolve in the interactive-lesson registry so the review links always land
 * on a live lesson page.
 */

import { apPhysicsCMechQuestionPool } from '@/data/exit-quizzes/ap-physics-c-mechanics'
import { AP_PHYSICS_C_MECH_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-c-mechanics-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * Units follow the 2024-25 Physics C: Mechanics CED (seven units). The exit
 * pool lumps rotation and oscillation into one domain, so it is split:
 * torque, rotational inertia and rotational kinematics/dynamics are Unit 5;
 * rotational energy, rolling, angular momentum and orbits (Topic 6.6) are
 * Unit 6; SHM is Unit 7. AP_PHYSICS_C_MECH_UNIT_SUPPLEMENT fills Units 5-7,
 * where the pool is thin.
 */
export const AP_PHYSICS_C_MECH_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'physics-c-work-power': 'work-energy-power',
    'physics-c-rotational-kinematics-dynamics': 'rotational-dynamics',
    'physics-c-angular-momentum': 'rotating-systems',
    'physics-c-simple-harmonic-motion': 'oscillations',
  },
  stems: {
    'A solid sphere rolls without slipping down an incline': 'rotating-systems',
    'The rotational kinetic energy of a spinning object is': 'rotating-systems',
    'The condition for rolling without slipping is': 'rotating-systems',
    'A solid cylinder (I = ½M': 'rotating-systems',
    'A solid ball (I = $2MR^{2}/5$) rolls without slipping': 'rotating-systems',
    'A 0.50 kg puck slides at 4.0 m/s along a straight line': 'rotating-systems',
    'A force F = (3x̂ + 4ŷ) N acts on a particle': 'rotational-dynamics',
    'Satellite A orbits a planet in a circle of radius r': 'rotating-systems',
    'The escape speed from the surface of a small moon': 'rotating-systems',
    'A probe is released from rest at a distance 2R': 'work-energy-power',
    'Moon A orbits a planet at radius r with a period of 3.0 days': 'rotating-systems',
    'A comet\'s distance from the Sun ranges': 'rotating-systems',
    'A satellite on an elliptical orbit moves from its farthest point': 'rotating-systems',
    'A satellite in a circular orbit has kinetic energy': 'rotating-systems',
    'How much energy must be added to move a satellite': 'rotating-systems',
    'A moon orbits a planet in a circle of radius 2.0': 'rotating-systems',
    'Planet P has twice Earth\'s mass and half Earth\'s radius': 'rotating-systems',
    'A satellite moves in a circular orbit at speed v': 'rotating-systems',
  },
}

export const AP_PHYSICS_C_MECH_UNITS: UnitDef[] = [
  {
    id: 'kinematics',
    unitNumber: 1,
    name: 'Unit 1: Kinematics',
    shortName: 'Kinematics',
    description: 'Calculus-based 1D & 2D motion, projectiles, and variable acceleration.',
    topicSlugs: ['physics-c-position-velocity-acceleration', 'physics-c-variable-acceleration'],
    exam_weight: '10–15%',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
  },
  {
    id: 'newtons-laws',
    unitNumber: 2,
    name: 'Unit 2: Force and Translational Dynamics',
    shortName: "Newton's Laws",
    description: "Newton's laws with calculus, friction, drag, inclines, circular motion, and gravitational force.",
    topicSlugs: ['physics-c-newtons-laws-calculus', 'physics-c-friction-inclines', 'physics-c-circular-motion'],
    exam_weight: '20–25%',
    color: 'from-indigo-500 to-purple-500',
    icon: '🧲',
  },
  {
    id: 'work-energy-power',
    unitNumber: 3,
    name: 'Unit 3: Work, Energy, and Power',
    shortName: 'Work, Energy & Power',
    description: 'Work integrals, kinetic & potential energy, conservation, and power.',
    topicSlugs: ['physics-c-work-power', 'physics-c-conservative-forces'],
    exam_weight: '15–25%',
    color: 'from-emerald-500 to-teal-500',
    icon: '⚡',
  },
  {
    id: 'momentum',
    unitNumber: 4,
    name: 'Unit 4: Linear Momentum',
    shortName: 'Momentum',
    description: 'Impulse, momentum, collisions, and center of mass.',
    topicSlugs: ['physics-c-momentum-collisions', 'physics-c-center-of-mass'],
    exam_weight: '10–20%',
    color: 'from-amber-500 to-orange-500',
    icon: '💥',
  },
  {
    id: 'rotational-dynamics',
    unitNumber: 5,
    name: 'Unit 5: Torque and Rotational Dynamics',
    shortName: 'Rotational Dynamics',
    description: 'Rotational kinematics, torque, rotational inertia and the parallel-axis theorem, and Newton\u2019s second law for rotation.',
    topicSlugs: ['physics-c-rotational-kinematics-dynamics', 'physics-c-moment-of-inertia'],
    exam_weight: '10–15%',
    color: 'from-violet-500 to-fuchsia-500',
    icon: '🔧',
  },
  {
    id: 'rotating-systems',
    unitNumber: 6,
    name: 'Unit 6: Energy and Momentum of Rotating Systems',
    shortName: 'Rotating Systems',
    description: 'Rotational kinetic energy, rolling, angular momentum and angular impulse, and orbits.',
    topicSlugs: ['physics-c-angular-momentum', 'physics-c-universal-gravitation'],
    exam_weight: '10–15%',
    color: 'from-fuchsia-500 to-pink-500',
    icon: '🔄',
  },
  {
    id: 'oscillations',
    unitNumber: 7,
    name: 'Unit 7: Oscillations',
    shortName: 'Oscillations',
    description: 'Simple harmonic motion of springs and pendulums, its differential equation, and energy in SHM.',
    topicSlugs: ['physics-c-simple-harmonic-motion'],
    exam_weight: '10–15%',
    color: 'from-rose-500 to-pink-500',
    icon: '🌊',
  },
]

/** Readable labels for the canonical (resolving) Mechanics topic slugs. */
export const AP_PHYSICS_C_MECH_SLUG_LABELS: Record<string, string> = {
  'physics-c-position-velocity-acceleration': 'Position, Velocity & Acceleration',
  'physics-c-variable-acceleration': 'Variable Acceleration',
  'physics-c-newtons-laws-calculus': "Newton's Laws (Calculus)",
  'physics-c-friction-inclines': 'Friction & Inclines',
  'physics-c-circular-motion': 'Circular Motion',
  'physics-c-work-power': 'Work & Power',
  'physics-c-conservative-forces': 'Conservative Forces & PE',
  'physics-c-momentum-collisions': 'Momentum & Collisions',
  'physics-c-center-of-mass': 'Center of Mass',
  'physics-c-rotational-kinematics-dynamics': 'Rotational Dynamics',
  'physics-c-moment-of-inertia': 'Moment of Inertia',
  'physics-c-angular-momentum': 'Angular Momentum',
  'physics-c-simple-harmonic-motion': 'Simple Harmonic Motion',
  'physics-c-universal-gravitation': 'Universal Gravitation',
  'physics-c-1d-kinematics': 'One-Dimensional Kinematics',
  'physics-c-2d-kinematics': 'Two-Dimensional Kinematics',
  'physics-c-potential-energy-curves': 'Potential Energy Curves',
  'physics-c-variable-mass': 'Variable-Mass Systems',
}

export const AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-physics-c-mechanics',
  courseHubHref: '/ap-physics-c-mechanics',
  courseTitle: 'AP Physics C: Mechanics',
  unitTestRoute: '/ap-physics-c-mech-unit-tests',
  units: AP_PHYSICS_C_MECH_UNITS,
  pool: [...assignUnits(apPhysicsCMechQuestionPool, AP_PHYSICS_C_MECH_UNIT_ASSIGNMENT), ...AP_PHYSICS_C_MECH_UNIT_SUPPLEMENT],
  slugLabels: AP_PHYSICS_C_MECH_SLUG_LABELS,
}
