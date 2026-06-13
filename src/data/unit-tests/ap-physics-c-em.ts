/**
 * AP Physics C: Electricity & Magnetism Unit Tests config (shared unit-test engine).
 *
 * Questions are sampled from the existing E&M exit-quiz pool — the same pool that
 * powers the diagnostic — keyed by `domain`. Each unit's `id` matches a pool
 * `domain` so the engine can select that unit's questions. `topicSlugs` are
 * restricted to canonical slugs that resolve in the interactive-lesson registry
 * so the review links always land on a live lesson page.
 */

import { apPhysicsCEMQuestionPool } from '@/data/exit-quizzes/ap-physics-c-em'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_PHYSICS_C_EM_UNITS: UnitDef[] = [
  {
    id: 'electrostatics',
    unitNumber: 1,
    name: 'Unit 1: Electrostatics',
    shortName: 'Electrostatics',
    description: "Coulomb's law, superposition, electric fields, and Gauss's law.",
    topicSlugs: ['physics-c-electric-field-coulomb', 'physics-c-gauss-law'],
    exam_weight: '26–34%',
    color: 'from-blue-500 to-cyan-500',
    icon: '⚡',
  },
  {
    id: 'electric-potential',
    unitNumber: 2,
    name: 'Unit 2: Electric Potential',
    shortName: 'Electric Potential',
    description: 'Electric potential, potential energy, and conductors in equilibrium.',
    topicSlugs: ['physics-c-electric-potential'],
    exam_weight: '14–17%',
    color: 'from-indigo-500 to-purple-500',
    icon: '🔋',
  },
  {
    id: 'capacitors-dielectrics',
    unitNumber: 3,
    name: 'Unit 3: Capacitors & Dielectrics',
    shortName: 'Capacitors',
    description: 'Capacitance, dielectrics, stored energy, and energy density.',
    topicSlugs: ['physics-c-capacitors-dielectrics'],
    exam_weight: '10–15%',
    color: 'from-emerald-500 to-teal-500',
    icon: '🪫',
  },
  {
    id: 'circuits',
    unitNumber: 4,
    name: 'Unit 4: Electric Circuits',
    shortName: 'Circuits',
    description: 'DC circuits, Kirchhoff’s rules, RC circuits, and power.',
    topicSlugs: ['physics-c-dc-circuits', 'physics-c-rc-circuits'],
    exam_weight: '17–23%',
    color: 'from-amber-500 to-orange-500',
    icon: '🔌',
  },
  {
    id: 'magnetism-em-induction',
    unitNumber: 5,
    name: 'Unit 5: Magnetism & Electromagnetic Induction',
    shortName: 'Magnetism & Induction',
    description: "Magnetic forces & fields, Ampère's law, Faraday's law, inductance, and Maxwell's equations.",
    topicSlugs: [
      'physics-c-magnetic-forces',
      'physics-c-magnetic-field-sources',
      'physics-c-faraday-lenz',
      'physics-c-inductance-rl-circuits',
      'physics-c-maxwell-equations',
    ],
    exam_weight: '17–23%',
    color: 'from-violet-500 to-fuchsia-500',
    icon: '🧲',
  },
]

/** Readable labels for the canonical (resolving) E&M topic slugs. */
export const AP_PHYSICS_C_EM_SLUG_LABELS: Record<string, string> = {
  'physics-c-electric-field-coulomb': "Coulomb's Law & Electric Fields",
  'physics-c-gauss-law': "Gauss's Law",
  'physics-c-electric-potential': 'Electric Potential',
  'physics-c-capacitors-dielectrics': 'Capacitors & Dielectrics',
  'physics-c-dc-circuits': 'DC Circuits',
  'physics-c-rc-circuits': 'RC Circuits',
  'physics-c-magnetic-forces': 'Magnetic Forces',
  'physics-c-magnetic-field-sources': 'Magnetic Field Sources',
  'physics-c-faraday-lenz': "Faraday's & Lenz's Law",
  'physics-c-inductance-rl-circuits': 'Inductance & RL Circuits',
  'physics-c-maxwell-equations': "Maxwell's Equations",
}

export const AP_PHYSICS_C_EM_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-physics-c-em',
  courseHubHref: '/ap-physics-c-em',
  courseTitle: 'AP Physics C: E&M',
  unitTestRoute: '/ap-physics-c-em-unit-tests',
  units: AP_PHYSICS_C_EM_UNITS,
  pool: apPhysicsCEMQuestionPool,
  slugLabels: AP_PHYSICS_C_EM_SLUG_LABELS,
}
