/**
 * MCAT Physics: Electricity & Optics Exit Quiz
 */

import type { ExitQuizQuestion } from './mcat-general-chemistry'

const questionPool: ExitQuizQuestion[] = [
  {
    question: 'Two point charges of +2 μC and -4 μC are separated by 0.3 m. Is the force attractive or repulsive, and what is its magnitude? (k = 9 × 10⁹ N·m²/C²)',
    options: ['Attractive, 0.8 N', 'Repulsive, 0.8 N', 'Attractive, 2.4 N', 'Repulsive, 2.4 N'],
    correctAnswer: 0,
    explanation: 'Opposite charges attract. F = k|q₁q₂|/r² = 9×10⁹ × (2×10⁻⁶)(4×10⁻⁶)/(0.3)² = 9×10⁹ × 8×10⁻¹²/0.09 = 0.8 N.',
    difficulty: 'medium',
  },
  {
    question: 'Three resistors of 6 Ω each are connected in parallel. What is the total resistance?',
    options: ['18 Ω', '6 Ω', '3 Ω', '2 Ω'],
    correctAnswer: 3,
    explanation: '1/R_total = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. So R_total = 2 Ω. For n identical resistors R in parallel, R_total = R/n.',
    difficulty: 'easy',
  },
  {
    question: 'A concave mirror has a focal length of 10 cm. An object is placed 15 cm from the mirror. Where is the image formed?',
    options: ['30 cm (real)', '6 cm (virtual)', '30 cm (virtual)', '6 cm (real)'],
    correctAnswer: 0,
    explanation: '1/f = 1/do + 1/di → 1/10 = 1/15 + 1/di → 1/di = 1/10 - 1/15 = 1/30 → di = 30 cm. Positive di means the image is real.',
    difficulty: 'medium',
  },
  {
    question: 'What is the energy stored in a 10 μF capacitor charged to 100 V?',
    options: ['0.005 J', '0.05 J', '0.5 J', '5 J'],
    correctAnswer: 1,
    explanation: 'U = ½CV² = ½ × 10×10⁻⁶ × (100)² = ½ × 10⁻⁵ × 10⁴ = 0.05 J.',
    difficulty: 'medium',
  },
  {
    question: 'A light ray passes from air (n=1) into glass (n=1.5) at an angle of incidence of 45°. What is the angle of refraction?',
    options: ['30°', '28.1°', '60°', '19.5°'],
    correctAnswer: 1,
    explanation: 'Snell\'s law: n₁sinθ₁ = n₂sinθ₂. 1×sin45° = 1.5×sinθ₂. sinθ₂ = 0.707/1.5 = 0.471. θ₂ = arcsin(0.471) ≈ 28.1°.',
    difficulty: 'medium',
  },
  {
    question: 'In a series circuit with a 12 V battery and three 4 Ω resistors, what is the current?',
    options: ['1 A', '3 A', '9 A', '0.33 A'],
    correctAnswer: 0,
    explanation: 'In series: R_total = 4 + 4 + 4 = 12 Ω. I = V/R = 12/12 = 1 A.',
    difficulty: 'easy',
  },
  {
    question: 'The electric field between two parallel plates separated by 2 cm with a potential difference of 200 V is:',
    options: ['100 V/m', '400 V/m', '4000 V/m', '10000 V/m'],
    correctAnswer: 3,
    explanation: 'E = V/d = 200/(0.02) = 10,000 V/m. The electric field between parallel plates is uniform.',
    difficulty: 'easy',
  },
  {
    question: 'Total internal reflection occurs when:',
    options: ['Light travels from a less dense to a more dense medium', 'The angle of incidence equals the critical angle or exceeds it, going from a denser to less dense medium', 'The angle of incidence is zero', 'Light passes through a converging lens'],
    correctAnswer: 1,
    explanation: 'Total internal reflection occurs when light travels from a higher to lower refractive index medium and the angle of incidence exceeds the critical angle (sin θc = n₂/n₁).',
    difficulty: 'medium',
  },
  {
    question: 'A current-carrying wire in a magnetic field experiences a force. The direction of this force is determined by:',
    options: ['Lenz\'s law', 'The right-hand rule (F = IL × B)', 'Ohm\'s law', 'Snell\'s law'],
    correctAnswer: 1,
    explanation: 'The force on a current-carrying wire in a magnetic field is F = IL × B. The direction is found using the right-hand rule: point fingers in the direction of current (I), curl toward B, and the thumb points in the direction of force.',
    difficulty: 'easy',
  },
  {
    question: 'The power dissipated by a 100 Ω resistor carrying 0.5 A of current is:',
    options: ['25 W', '50 W', '200 W', '12.5 W'],
    correctAnswer: 0,
    explanation: 'P = I²R = (0.5)² × 100 = 0.25 × 100 = 25 W.',
    difficulty: 'easy',
  },
  {
    question: 'A converging lens with focal length 20 cm is used to view an object placed 10 cm from the lens. The image is:',
    options: ['Real, inverted, magnified', 'Virtual, upright, magnified', 'Real, inverted, diminished', 'Virtual, upright, diminished'],
    correctAnswer: 1,
    explanation: '1/f = 1/do + 1/di → 1/20 = 1/10 + 1/di → 1/di = 1/20 - 1/10 = -1/20 → di = -20 cm. Negative di means virtual. M = -di/do = -(-20)/10 = +2 (upright, magnified).',
    difficulty: 'medium',
  },
  {
    question: 'Which type of electromagnetic radiation has the highest energy per photon?',
    options: ['Radio waves', 'Infrared', 'Visible light', 'Gamma rays'],
    correctAnswer: 3,
    explanation: 'E = hf = hc/λ. Gamma rays have the highest frequency (shortest wavelength), so they carry the most energy per photon.',
    difficulty: 'easy',
  },
  {
    question: 'Kirchhoff\'s junction rule is based on conservation of:',
    options: ['Energy', 'Charge', 'Momentum', 'Mass'],
    correctAnswer: 1,
    explanation: 'Kirchhoff\'s junction (current) rule states that the total current entering a junction equals the total current leaving it, based on conservation of charge.',
    difficulty: 'easy',
  },
  {
    question: 'A photon of wavelength 500 nm has what energy? (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)',
    options: ['3.98 × 10⁻¹⁹ J', '3.98 × 10⁻²⁵ J', '1.33 × 10⁻¹⁸ J', '6.63 × 10⁻¹⁹ J'],
    correctAnswer: 0,
    explanation: 'E = hc/λ = (6.63×10⁻³⁴)(3×10⁸)/(500×10⁻⁹) = 1.989×10⁻²⁵/5×10⁻⁷ = 3.98×10⁻¹⁹ J.',
    difficulty: 'medium',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
