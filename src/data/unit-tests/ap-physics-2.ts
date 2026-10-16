import { apPhysics2QuestionPool } from '@/data/exit-quizzes/ap-physics-2'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

/**
 * The 7 units of the 2024-25 AP Physics 2 CED, numbered 9-15 as the CED
 * numbers them (Units 1-8 are Physics 1). Re-filing from the exit pool:
 *   - DC and RC circuit items in the `electricity` domain go to Unit 11;
 *   - geometric optics (reflection, refraction, lenses, mirrors) is Unit 13,
 *     while wave optics (interference, diffraction) joins waves and sound in
 *     Unit 14.
 */
export const AP_PHYSICS2_UNIT_ASSIGNMENT: UnitAssignment = {
  topics: {
    'dc-circuits': 'circuits',
    'rc-circuits': 'circuits',
    capacitance: 'electricity',
    'wave-optics': 'waves-sound',
    'interference-diffraction': 'waves-sound',
  },
}

export const AP_PHYSICS2_UNITS: UnitDef[] = [
  { id: 'thermodynamics', unitNumber: 9, name: 'Unit 9: Thermodynamics', shortName: 'Thermodynamics', description: 'Kinetic theory, ideal gases, heat transfer, internal energy, the first and second laws, and entropy.', topicSlugs: ['temperature-thermal-expansion', 'heat-specific-heat', 'laws-of-thermodynamics'], exam_weight: '15–18%', color: 'from-orange-500 to-red-500', icon: '🔥' },
  { id: 'electricity', unitNumber: 10, name: 'Unit 10: Electric Force, Field, and Potential', shortName: 'Electric Fields', description: 'Charge, Coulomb’s law, electric fields, electric potential and potential energy, and capacitors.', topicSlugs: ['electric-charge-coulombs-law', 'electric-fields-potential'], exam_weight: '15–18%', color: 'from-amber-500 to-yellow-500', icon: '⚡' },
  { id: 'circuits', unitNumber: 11, name: 'Unit 11: Electric Circuits', shortName: 'Circuits', description: 'Current, resistance, Ohm’s law, power, series and parallel circuits, Kirchhoff’s rules, and RC circuits.', topicSlugs: ['current-resistance-ohms-law', 'series-parallel-circuits', 'kirchhoffs-laws'], exam_weight: '15–18%', color: 'from-emerald-500 to-teal-500', icon: '🔌' },
  { id: 'magnetism', unitNumber: 12, name: 'Unit 12: Magnetism and Electromagnetism', shortName: 'Magnetism', description: 'Magnetic fields and forces on charges and currents, fields of currents, induced EMF, and Lenz’s law.', topicSlugs: ['magnetic-fields-forces', 'electromagnetic-induction'], exam_weight: '12–15%', color: 'from-purple-500 to-fuchsia-500', icon: '🧲' },
  { id: 'optics', unitNumber: 13, name: 'Unit 13: Geometric Optics', shortName: 'Geometric Optics', description: 'Reflection, refraction, Snell’s law, total internal reflection, and images formed by mirrors and lenses.', topicSlugs: ['reflection-refraction', 'lenses'], exam_weight: '12–15%', color: 'from-pink-500 to-rose-500', icon: '🔭' },
  { id: 'waves-sound', unitNumber: 14, name: 'Unit 14: Waves, Sound, and Physical Optics', shortName: 'Waves & Sound', description: 'Wave properties, sound, standing waves, the Doppler effect, interference, and diffraction.', topicSlugs: ['wave-properties', 'sound-waves', 'standing-waves', 'interference-diffraction'], exam_weight: '12–15%', color: 'from-sky-500 to-blue-500', icon: '🔊' },
  { id: 'modern-physics', unitNumber: 15, name: 'Unit 15: Modern Physics', shortName: 'Modern Physics', description: 'Photons and the photoelectric effect, atomic energy levels, wave-particle duality, and nuclear physics.', topicSlugs: ['photons-atomic-nuclear'], exam_weight: '12–15%', color: 'from-violet-500 to-indigo-500', icon: '⚛️' },
]

export const AP_PHYSICS2_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-physics-2',
  courseHubHref: '/ap-physics-2',
  courseTitle: 'AP Physics 2',
  unitTestRoute: '/ap-physics2-unit-tests',
  units: AP_PHYSICS2_UNITS,
  pool: assignUnits(apPhysics2QuestionPool, AP_PHYSICS2_UNIT_ASSIGNMENT),
}
