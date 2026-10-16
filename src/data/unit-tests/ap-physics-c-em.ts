/**
 * AP Physics C: Electricity & Magnetism Unit Tests config (shared unit-test engine).
 *
 * Questions are sampled from the existing E&M exit-quiz pool — the same pool that
 * powers the diagnostic. Units follow the 2024-25 Physics C: E&M CED, numbered
 * 8-13 as the CED numbers them (Units 1-7 are Mechanics). The engine selects a
 * unit's questions by `domain === unit.id`, so AP_PHYSICS_C_EM_UNIT_ASSIGNMENT
 * re-files the pool: conductors in equilibrium join capacitors (Unit 10), and
 * the pool's single magnetism domain splits into magnetic fields (Unit 12) and
 * induction (Unit 13). AP_PHYSICS_C_EM_UNIT_SUPPLEMENT fills Units 9 and 12,
 * where the pool is thin. `topicSlugs` are restricted to canonical slugs that
 * resolve in the interactive-lesson registry so the review links always land
 * on a live lesson page.
 */

import { apPhysicsCEMQuestionPool } from '@/data/exit-quizzes/ap-physics-c-em'
import { AP_PHYSICS_C_EM_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-c-em-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

export const AP_PHYSICS_C_EM_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'physics-c-conductors-equilibrium': 'capacitors-dielectrics',
    'physics-c-faraday-induction': 'em-induction',
    'physics-c-inductance-rl-circuits': 'em-induction',
    'physics-c-maxwell-equations': 'em-induction',
  },
}

export const AP_PHYSICS_C_EM_UNITS: UnitDef[] = [
  {
    id: 'electrostatics',
    unitNumber: 8,
    name: "Unit 8: Electric Charges, Fields, and Gauss's Law",
    shortName: 'Charges & Fields',
    description: "Charge, Coulomb's law, superposition, electric fields of point and continuous charges, and Gauss's law.",
    topicSlugs: ['physics-c-electric-field-coulomb', 'physics-c-gauss-law'],
    exam_weight: '15–25%',
    color: 'from-blue-500 to-cyan-500',
    icon: '⚡',
  },
  {
    id: 'electric-potential',
    unitNumber: 9,
    name: 'Unit 9: Electric Potential',
    shortName: 'Electric Potential',
    description: 'Electric potential energy, electric potential of point and continuous charges, equipotentials, and the field-potential relation.',
    topicSlugs: ['physics-c-electric-potential'],
    exam_weight: '15–25%',
    color: 'from-indigo-500 to-purple-500',
    icon: '🔋',
  },
  {
    id: 'capacitors-dielectrics',
    unitNumber: 10,
    name: 'Unit 10: Conductors and Capacitors',
    shortName: 'Conductors & Capacitors',
    description: 'Conductors in electrostatic equilibrium, capacitance, dielectrics, stored energy, and energy density.',
    topicSlugs: ['physics-c-capacitors-dielectrics'],
    exam_weight: '10–20%',
    color: 'from-emerald-500 to-teal-500',
    icon: '🪫',
  },
  {
    id: 'circuits',
    unitNumber: 11,
    name: 'Unit 11: Electric Circuits',
    shortName: 'Circuits',
    description: 'Current, resistance, DC circuits, Kirchhoff’s rules, RC circuits, and power.',
    topicSlugs: ['physics-c-dc-circuits', 'physics-c-rc-circuits'],
    exam_weight: '15–25%',
    color: 'from-amber-500 to-orange-500',
    icon: '🔌',
  },
  {
    id: 'magnetism-em-induction',
    unitNumber: 12,
    name: 'Unit 12: Magnetic Fields and Electromagnetism',
    shortName: 'Magnetic Fields',
    description: "Magnetic forces on charges and currents, the Biot-Savart law, and Ampère's law.",
    topicSlugs: ['physics-c-magnetic-forces', 'physics-c-magnetic-field-sources'],
    exam_weight: '10–20%',
    color: 'from-violet-500 to-fuchsia-500',
    icon: '🧲',
  },
  {
    id: 'em-induction',
    unitNumber: 13,
    name: 'Unit 13: Electromagnetic Induction',
    shortName: 'Induction',
    description: "Magnetic flux, Faraday's and Lenz's laws, inductance, and RL and LC circuits.",
    topicSlugs: ['physics-c-faraday-lenz', 'physics-c-inductance-rl-circuits', 'physics-c-maxwell-equations'],
    exam_weight: '10–20%',
    color: 'from-purple-500 to-indigo-500',
    icon: '🌀',
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
  pool: [...assignUnits(apPhysicsCEMQuestionPool, AP_PHYSICS_C_EM_UNIT_ASSIGNMENT), ...AP_PHYSICS_C_EM_UNIT_SUPPLEMENT],
  slugLabels: AP_PHYSICS_C_EM_SLUG_LABELS,
}
