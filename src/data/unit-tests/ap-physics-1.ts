/**
 * AP Physics 1 Unit Tests config (uses the shared unit-test engine).
 *
 * Units follow the 2024-25 AP Physics 1 CED (unchanged for May 2027). Items
 * come from the exit-quiz pool, the same pool the lessons' exit quizzes use.
 * Its domains follow the older course outline, so they are re-filed:
 *   - circular motion and gravitation are Unit 2 (Topics 2.6, 2.9), except
 *     orbital motion, Kepler's third law and escape speed (Topic 6.6);
 *   - the `rotation` domain splits between Unit 5 (torque, rotational
 *     kinematics, rotational inertia and Newton's second law for rotation)
 *     and Unit 6 (rotational energy, rolling, angular momentum and impulse).
 * AP_PHYSICS1_UNIT_SUPPLEMENT fills Units 5-7, where the pool is thin.
 */

import { apPhysics1QuestionPool } from '@/data/exit-quizzes/ap-physics-1'
import { AP_PHYSICS1_UNIT_SUPPLEMENT } from '@/data/unit-tests/ap-physics-1-supplement'
import { assignUnits, type CourseUnitTestConfig, type UnitAssignment, type UnitDef } from '@/lib/unit-tests/engine'

export const AP_PHYSICS1_UNIT_ASSIGNMENT: UnitAssignment = {
  domains: {
    'circular-motion-gravitation': 'dynamics',
    rotation: 'torque-rotation',
  },
  topics: {
    'angular-momentum': 'rotating-systems',
  },
  stems: {
    'Rotational KE is $\\frac{1}{2}I\\omega^2$. If $\\omega$ doubles': 'rotating-systems',
    'A solid disk and a hoop of the same mass and radius roll down an incline': 'rotating-systems',
    'Total KE of a rolling object': 'rotating-systems',
    'A ball of radius 0.05 m rolls without slipping': 'rotating-systems',
    'A tire of radius 0.30 m rolls without slipping': 'rotating-systems',
    'A solid disk ($M = 6$ kg, $R = 0.5$ m) free to turn about its central axis': 'torque-rotation',
    'A satellite orbits Earth at radius $r$. If moved to orbit at $2r$': 'rotating-systems',
    'Kepler\'s third law states': 'rotating-systems',
    'Orbital speed of a satellite': 'rotating-systems',
    'A geostationary satellite has a period of': 'rotating-systems',
    'Moon A orbits a planet at radius $r$': 'rotating-systems',
    'Planet P has the same radius as Earth but 4 times Earth\'s mass': 'rotating-systems',
    'Satellites X and Y circle the same planet': 'rotating-systems',
  },
}

export const AP_PHYSICS1_UNITS: UnitDef[] = [
  {
    id: 'kinematics',
    unitNumber: 1,
    name: 'Unit 1: Kinematics',
    shortName: 'Kinematics',
    description: 'Position, velocity, and acceleration; motion graphs; free fall; projectiles; and reference frames.',
    topicSlugs: ['one-dimensional-motion', 'motion-graphs', 'two-dimensional-motion', 'projectile-motion'],
    exam_weight: '10–15%',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚀',
  },
  {
    id: 'dynamics',
    unitNumber: 2,
    name: 'Unit 2: Force and Translational Dynamics',
    shortName: 'Forces',
    description: 'Free-body diagrams, Newton’s laws, friction, springs, gravitational force, and circular motion.',
    topicSlugs: ['newtons-first-second-laws', 'newtons-third-law', 'friction', 'inclined-planes', 'uniform-circular-motion', 'centripetal-force', 'universal-gravitation'],
    exam_weight: '18–23%',
    color: 'from-indigo-500 to-purple-500',
    icon: '🧲',
  },
  {
    id: 'energy',
    unitNumber: 3,
    name: 'Unit 3: Work, Energy, and Power',
    shortName: 'Energy',
    description: 'Work, kinetic and potential energy, conservation of energy, and power.',
    topicSlugs: ['work-and-kinetic-energy', 'gravitational-potential-energy', 'elastic-potential-energy', 'conservation-of-energy', 'power-physics'],
    exam_weight: '18–23%',
    color: 'from-emerald-500 to-teal-500',
    icon: '⚡',
  },
  {
    id: 'momentum',
    unitNumber: 4,
    name: 'Unit 4: Linear Momentum',
    shortName: 'Momentum',
    description: 'Impulse, the impulse-momentum theorem, conservation of momentum, and elastic and inelastic collisions.',
    topicSlugs: ['momentum-and-impulse', 'conservation-of-momentum', 'collisions'],
    exam_weight: '10–15%',
    color: 'from-amber-500 to-orange-500',
    icon: '💥',
  },
  {
    id: 'torque-rotation',
    unitNumber: 5,
    name: 'Unit 5: Torque and Rotational Dynamics',
    shortName: 'Torque',
    description: 'Rotational kinematics, torque, rotational inertia, rotational equilibrium, and Newton’s second law for rotation.',
    topicSlugs: ['rotational-kinematics', 'torque-and-equilibrium'],
    exam_weight: '10–15%',
    color: 'from-violet-500 to-fuchsia-500',
    icon: '🔧',
  },
  {
    id: 'rotating-systems',
    unitNumber: 6,
    name: 'Unit 6: Energy and Momentum of Rotating Systems',
    shortName: 'Rotating Systems',
    description: 'Rotational kinetic energy, rolling, angular momentum and angular impulse, and orbiting satellites.',
    topicSlugs: ['angular-momentum', 'rotational-kinematics', 'universal-gravitation'],
    exam_weight: '5–8%',
    color: 'from-fuchsia-500 to-pink-500',
    icon: '🔄',
  },
  {
    id: 'simple-harmonic-motion',
    unitNumber: 7,
    name: 'Unit 7: Oscillations',
    shortName: 'Oscillations',
    description: 'Springs and pendulums, period and frequency, graphs of SHM, and energy in oscillating systems.',
    topicSlugs: ['introduction-to-shm', 'energy-in-shm'],
    exam_weight: '5–8%',
    color: 'from-rose-500 to-pink-500',
    icon: '🌊',
  },
  {
    id: 'fluids',
    unitNumber: 8,
    name: 'Unit 8: Fluids',
    shortName: 'Fluids',
    description: 'Fluid pressure, Pascal’s principle, buoyancy, Archimedes, continuity, and Bernoulli.',
    topicSlugs: ['fluids-density-and-pressure', 'fluids-buoyancy', 'fluids-continuity', 'fluids-bernoulli'],
    exam_weight: '10–15%',
    color: 'from-cyan-500 to-blue-500',
    icon: '💧',
  },
]

/** Topic titles for the "review these topics" list on the results screen. */
const AP_PHYSICS1_TOPIC_LABELS: Record<string, string> = {
  'one-dimensional-motion': 'One-Dimensional Motion',
  'motion-graphs': 'Motion Graphs',
  'two-dimensional-motion': 'Two-Dimensional Motion',
  'projectile-motion': 'Projectile Motion',
  'newtons-first-second-laws': 'Newton’s First and Second Laws',
  'newtons-third-law': 'Newton’s Third Law and Applications',
  friction: 'Friction',
  'inclined-planes': 'Inclined Planes',
  'uniform-circular-motion': 'Uniform Circular Motion',
  'centripetal-force': 'Centripetal Force',
  'universal-gravitation': 'Newton’s Law of Universal Gravitation',
  'work-and-kinetic-energy': 'Work and Kinetic Energy',
  'gravitational-potential-energy': 'Gravitational Potential Energy',
  'elastic-potential-energy': 'Elastic Potential Energy and Springs',
  'power-physics': 'Power',
  'conservation-of-energy': 'Conservation of Energy',
  'momentum-and-impulse': 'Momentum and Impulse',
  'conservation-of-momentum': 'Conservation of Momentum',
  collisions: 'Collisions',
  'introduction-to-shm': 'Introduction to Simple Harmonic Motion',
  'energy-in-shm': 'Energy in Simple Harmonic Motion',
  'torque-and-equilibrium': 'Torque and Rotational Equilibrium',
  'rotational-kinematics': 'Rotational Kinematics',
  'angular-momentum': 'Rotational Dynamics and Angular Momentum',
  'fluids-density-and-pressure': 'Density and Pressure in Fluids',
  'fluids-buoyancy': 'Buoyancy and Archimedes’ Principle',
  'fluids-continuity': 'Continuity Equation and Flow Rate',
  'fluids-bernoulli': 'Bernoulli’s Equation',
}

export const AP_PHYSICS1_UNIT_TESTS_CONFIG: CourseUnitTestConfig = {
  courseSlug: 'ap-physics-1',
  courseHubHref: '/ap-physics-1',
  courseTitle: 'AP Physics 1',
  unitTestRoute: '/ap-physics1-unit-tests',
  units: AP_PHYSICS1_UNITS,
  pool: [...assignUnits(apPhysics1QuestionPool, AP_PHYSICS1_UNIT_ASSIGNMENT), ...AP_PHYSICS1_UNIT_SUPPLEMENT],
  slugLabels: AP_PHYSICS1_TOPIC_LABELS,
}
