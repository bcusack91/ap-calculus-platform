import { apPhysics2QuestionPool } from '@/data/exit-quizzes/ap-physics-2'
import type { CourseUnitTestConfig, UnitDef } from '@/lib/unit-tests/engine'

export const AP_PHYSICS2_UNITS: UnitDef[] = [
  { id: 'fluids', unitNumber: 1, name: 'Unit 1: Fluids', shortName: 'Fluids', description: 'Fluid pressure, buoyancy, continuity, and Bernoulli\u2019s equation.', topicSlugs: ['fluids'], exam_weight: '10–12%', color: 'from-cyan-500 to-blue-500', icon: '💧' },
  { id: 'thermodynamics', unitNumber: 2, name: 'Unit 2: Thermodynamics', shortName: 'Thermodynamics', description: 'Heat, gas laws, kinetic theory, the first & second laws, and engines.', topicSlugs: ['thermodynamics'], exam_weight: '12–18%', color: 'from-orange-500 to-red-500', icon: '🔥' },
  { id: 'electricity', unitNumber: 3, name: 'Unit 3–4: Electric Force, Field & Potential', shortName: 'Electricity', description: 'Coulomb\u2019s law, electric fields, potential, and capacitors.', topicSlugs: ['electricity'], exam_weight: '18–22%', color: 'from-amber-500 to-yellow-500', icon: '⚡' },
  { id: 'circuits', unitNumber: 4, name: 'Unit 5: Circuits', shortName: 'Circuits', description: 'Ohm\u2019s law, series & parallel circuits, Kirchhoff\u2019s rules, and RC circuits.', topicSlugs: ['circuits'], exam_weight: '10–14%', color: 'from-emerald-500 to-teal-500', icon: '🔌' },
  { id: 'magnetism', unitNumber: 5, name: 'Unit 6: Magnetism & EM Induction', shortName: 'Magnetism', description: 'Magnetic fields, forces on charges, induced EMF, and Lenz\u2019s law.', topicSlugs: ['magnetism'], exam_weight: '10–14%', color: 'from-purple-500 to-fuchsia-500', icon: '🧲' },
  { id: 'optics', unitNumber: 6, name: 'Unit 7: Geometric & Physical Optics', shortName: 'Optics', description: 'Reflection, refraction, lenses & mirrors, interference, and diffraction.', topicSlugs: ['optics'], exam_weight: '12–14%', color: 'from-pink-500 to-rose-500', icon: '🔭' },
  { id: 'modern-physics', unitNumber: 7, name: 'Unit 8: Modern Physics', shortName: 'Modern Physics', description: 'Photoelectric effect, atomic models, nuclear physics, and mass-energy equivalence.', topicSlugs: ['modern-physics'], exam_weight: '14–18%', color: 'from-violet-500 to-indigo-500', icon: '🌌' },
]

export const AP_PHYSICS2_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-physics-2',
  courseHubHref: '/ap-physics-2',
  courseTitle: 'AP Physics 2',
  unitTestRoute: '/ap-physics2-unit-tests',
  units: AP_PHYSICS2_UNITS,
  pool: apPhysics2QuestionPool,
}
