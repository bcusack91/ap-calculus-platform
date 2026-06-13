/**
 * AP Physics C: Mechanics Unit Tests config (uses the shared unit-test engine).
 *
 * Questions are sampled from the existing Mechanics exit-quiz pool — the same
 * pool that powers the diagnostic — keyed by `domain`. Each unit's `id` matches
 * a pool `domain` so the engine can select that unit's questions. `topicSlugs`
 * are restricted to canonical slugs that resolve in the interactive-lesson
 * registry so the review links always land on a live lesson page.
 */

import { apPhysicsCMechQuestionPool } from '@/data/exit-quizzes/ap-physics-c-mechanics'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

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
    name: "Unit 2: Newton's Laws of Motion",
    shortName: "Newton's Laws",
    description: "Newton's laws with calculus, friction, inclines, and circular motion.",
    topicSlugs: ['physics-c-newtons-laws-calculus', 'physics-c-friction-inclines', 'physics-c-circular-motion'],
    exam_weight: '20–25%',
    color: 'from-indigo-500 to-purple-500',
    icon: '🧲',
  },
  {
    id: 'work-energy-power',
    unitNumber: 3,
    name: 'Unit 3: Work, Energy & Power',
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
    name: 'Unit 4: Systems of Particles & Linear Momentum',
    shortName: 'Momentum',
    description: 'Impulse, momentum, collisions, and center of mass.',
    topicSlugs: ['physics-c-momentum-collisions', 'physics-c-center-of-mass'],
    exam_weight: '10–20%',
    color: 'from-amber-500 to-orange-500',
    icon: '💥',
  },
  {
    id: 'rotation-oscillation',
    unitNumber: 5,
    name: 'Unit 5: Rotation & Oscillation',
    shortName: 'Rotation & Oscillation',
    description: 'Rotational kinematics & dynamics, moment of inertia, angular momentum, and SHM.',
    topicSlugs: [
      'physics-c-rotational-kinematics-dynamics',
      'physics-c-moment-of-inertia',
      'physics-c-angular-momentum',
      'physics-c-simple-harmonic-motion',
    ],
    exam_weight: '10–20%',
    color: 'from-violet-500 to-fuchsia-500',
    icon: '🔄',
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
}

export const AP_PHYSICS_C_MECH_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-physics-c-mechanics',
  courseHubHref: '/ap-physics-c-mechanics',
  courseTitle: 'AP Physics C: Mechanics',
  unitTestRoute: '/ap-physics-c-mech-unit-tests',
  units: AP_PHYSICS_C_MECH_UNITS,
  pool: apPhysicsCMechQuestionPool,
  slugLabels: AP_PHYSICS_C_MECH_SLUG_LABELS,
}
