/**
 * MCAT Physics: Electricity & Optics Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'Two point charges of +2 μC and -4 μC are separated by 0.3 m. Is the force attractive or repulsive, and what is its magnitude? (k = $9 \\times 10^{9}$ $N\\cdot m^{2}/C^{2}$)',
    options: ['Attractive, 0.8 N', 'Repulsive, 0.8 N', 'Attractive, 2.4 N', 'Repulsive, 2.4 N'],
    correctAnswer: 0,
    explanation: 'Opposite charges attract. F = k|$q_{1}q_{2}$|/$r^{2}$ = $9\\times 10^{9}$ × $(2\\times 10^{-6})(4\\times 10^{-6})/(0.3)^{2}$ = $9\\times 10^{9}$ × $8\\times 10^{-12}/0.09$ = 0.8 N.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  },
  {
    question: 'Three resistors of 6 Ω each are connected in parallel. What is the total resistance?',
    options: ['18 Ω', '6 Ω', '3 Ω', '2 Ω'],
    correctAnswer: 3,
    explanation: '1/R_total = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. So R_total = 2 Ω. For n identical resistors R in parallel, R_total = R/n.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-circuits-mcat',
  },
  {
    question: 'A concave mirror has a focal length of 10 cm. An object is placed 15 cm from the mirror. Where is the image formed?',
    options: ['30 cm (real)', '6 cm (virtual)', '30 cm (virtual)', '6 cm (real)'],
    correctAnswer: 0,
    explanation: '1/f = 1/do + 1/di → 1/10 = 1/15 + 1/di → 1/di = 1/10 - 1/15 = 1/30 → di = 30 cm. Positive di means the image is real.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
  {
    question: 'What is the energy stored in a 10 μF capacitor charged to 100 V?',
    options: ['0.005 J', '0.05 J', '0.5 J', '5 J'],
    correctAnswer: 1,
    explanation: 'U = $\\tfrac{1}{2} CV^{2}$ = ½ × $10\\times 10^{-6}$ × $(100)^{2}$ = ½ × $10^{-5}$ × $10^{4}$ = 0.05 J.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  },
  {
    question: 'A light ray passes from air (n=1) into glass (n=1.5) at an angle of incidence of 45°. What is the angle of refraction?',
    options: ['30°', '28.1°', '60°', '19.5°'],
    correctAnswer: 1,
    explanation: 'Snell\'s law: $n_{1}\\sin \\theta_{1}$ = $n_{2}\\sin \\theta_{2}$. 1×sin45° = $1.5\\times \\sin \\theta_{2}$. $\\sin \\theta_{2}$ = 0.707/1.5 = 0.471. $\\theta_{2}$ = arcsin(0.471) ≈ 28.1°.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
  {
    question: 'In a series circuit with a 12 V battery and three 4 Ω resistors, what is the current?',
    options: ['1 A', '3 A', '9 A', '0.33 A'],
    correctAnswer: 0,
    explanation: 'In series: R_total = 4 + 4 + 4 = 12 Ω. I = V/R = 12/12 = 1 A.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-circuits-mcat',
  },
  {
    question: 'The electric field between two parallel plates separated by 2 cm with a potential difference of 200 V is:',
    options: ['100 V/m', '400 V/m', '4000 V/m', '10000 V/m'],
    correctAnswer: 3,
    explanation: 'E = V/d = 200/(0.02) = 10,000 V/m. The electric field between parallel plates is uniform.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-electrostatics-mcat',
  },
  {
    question: 'Total internal reflection occurs when:',
    options: ['Light travels from a less dense to a more dense medium', 'The angle of incidence equals the critical angle or exceeds it, going from a denser to less dense medium', 'The angle of incidence is zero', 'Light passes through a converging lens'],
    correctAnswer: 1,
    explanation: 'Total internal reflection occurs when light travels from a higher to lower refractive index medium and the angle of incidence exceeds the critical angle (sin θc = $n_{2}/n_{1}$).',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
  {
    question: 'A current-carrying wire in a magnetic field experiences a force. The direction of this force is determined by:',
    options: ['Lenz\'s law', 'The right-hand rule (F = IL × B)', 'Ohm\'s law', 'Snell\'s law'],
    correctAnswer: 1,
    explanation: 'The force on a current-carrying wire in a magnetic field is F = IL × B. The direction is found using the right-hand rule: point fingers in the direction of current (I), curl toward B, and the thumb points in the direction of force.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-magnetism-mcat',
  },
  {
    question: 'The power dissipated by a 100 Ω resistor carrying 0.5 A of current is:',
    options: ['25 W', '50 W', '200 W', '12.5 W'],
    correctAnswer: 0,
    explanation: 'P = $I^{2}R$ = $(0.5)^{2}$ × 100 = 0.25 × 100 = 25 W.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-circuits-mcat',
  },
  {
    question: 'A converging lens with focal length 20 cm is used to view an object placed 10 cm from the lens. The image is:',
    options: ['Real, inverted, magnified', 'Virtual, upright, magnified', 'Real, inverted, diminished', 'Virtual, upright, diminished'],
    correctAnswer: 1,
    explanation: '1/f = 1/do + 1/di → 1/20 = 1/10 + 1/di → 1/di = 1/20 - 1/10 = -1/20 → di = -20 cm. Negative di means virtual. M = -di/do = -(-20)/10 = +2 (upright, magnified).',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
  {
    question: 'Which type of electromagnetic radiation has the highest energy per photon?',
    options: ['Radio waves', 'Infrared', 'Visible light', 'Gamma rays'],
    correctAnswer: 3,
    explanation: 'E = hf = hc/λ. Gamma rays have the highest frequency (shortest wavelength), so they carry the most energy per photon.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
  {
    question: 'Kirchhoff\'s junction rule is based on conservation of:',
    options: ['Energy', 'Charge', 'Momentum', 'Mass'],
    correctAnswer: 1,
    explanation: 'Kirchhoff\'s junction (current) rule states that the total current entering a junction equals the total current leaving it, based on conservation of charge.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-circuits-mcat',
  },
  {
    question: 'A photon of wavelength 500 nm has what energy? (h = $6.63 \\times 10^{-34}$ J·s, c = $3 \\times 10^{8}$ m/s)',
    options: ['$3.98 \\times 10^{-19}$ J', '$3.98 \\times 10^{-25}$ J', '$1.33 \\times 10^{-18}$ J', '$6.63 \\times 10^{-19}$ J'],
    correctAnswer: 0,
    explanation: 'E = hc/λ = $(6.63\\times 10^{-34})(3\\times 10^{8})/(500\\times 10^{-9})$ = $1.989\\times 10^{-25}/5\\times 10^{-7}$ = $3.98\\times 10^{-19}$ J.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
  {
    question: 'In an electrochemical cell, which statement is always true for a spontaneous galvanic reaction?',
    options: ['E°cell is negative', 'Electrons flow from cathode to anode', 'Oxidation occurs at the anode and E°cell is positive', 'Reduction occurs at the anode'],
    correctAnswer: 2,
    explanation: 'For a spontaneous galvanic cell, oxidation occurs at the anode, reduction at the cathode, electrons flow anode to cathode, and E°cell must be positive.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-physics-electricity-electrochemistry-mcat',
  },
  {
    question: 'A 12 V battery with internal resistance 1.0 Ω is connected to an external 5.0 Ω resistor. What is the terminal voltage?',
    options: ['10 V', '11 V', '12 V', '13 V'],
    correctAnswer: 0,
    explanation: 'Current I = E/(R+r) = 12/6 = 2 A. Terminal voltage V = E − Ir = 12 − 2(1) = 10 V (also IRload = 2×5 = 10 V).',
    difficulty: 'hard',
    subtopicSlug: 'mcat-physics-electricity-circuits-mcat',
  },
  {
    question: 'An electron enters a uniform magnetic field perpendicular to its velocity. Which path does it follow?',
    options: ['Straight line', 'Parabola', 'Circle', 'Hyperbola'],
    correctAnswer: 2,
    explanation: 'Magnetic force qvB is always perpendicular to velocity, providing centripetal force and producing circular motion at constant speed.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-physics-electricity-magnetism-mcat',
  },
  {
    question: 'An object is placed 30 cm in front of a converging lens with focal length 15 cm. Image distance is:',
    options: ['7.5 cm', '15 cm', '30 cm', '∞'],
    correctAnswer: 2,
    explanation: 'Lens equation: 1/f = 1/do + 1/di => 1/15 = 1/30 + 1/di => 1/di = 1/30 => di = 30 cm.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-physics-electricity-optics-mcat',
  },
]

const PHYSICS_ELECTRICITY_SUBTOPICS = new Set([
  'mcat-physics-electricity-electrostatics-mcat',
  'mcat-physics-electricity-circuits-mcat',
  'mcat-physics-electricity-magnetism-mcat',
  'mcat-physics-electricity-optics-mcat',
  'mcat-physics-electricity-electrochemistry-mcat',
])

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1 — exit quizzes were ~18 questions; the bank holds 30-40 per subtopic).
const fullPool = [...questionPool, ...authoredFor(['mcat-physics-electricity-', 'mcat-physics-atomic-nuclear-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const filteredPool = PHYSICS_ELECTRICITY_SUBTOPICS.has(topicSlug ?? '')
    ? fullPool.filter((q) => q.subtopicSlug === topicSlug)
    : fullPool
  const sourcePool = filteredPool.length > 0 ? filteredPool : fullPool
  const shuffled = [...sourcePool].sort(() => Math.random() - 0.5)

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `physics-electricity-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    difficulty: q.difficulty,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-physics-electricity',
  }))
}
