import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Reflection
  {
    id: 'go-ent-1a',
    question: 'The law of reflection states:',
    options: ['Angle of incidence > angle of reflection', 'Angle of incidence = angle of reflection', 'Angle of incidence + angle of reflection = 90°', 'Light always reflects at 45°'],
    correctIndex: 1,
    explanation: 'The angle of incidence equals the angle of reflection, both measured from the normal to the surface.',
    partNumber: 1,
    partTitle: 'Reflection',
  },
  {
    id: 'go-ent-1b',
    question: 'An image formed by a plane mirror is:',
    options: ['Real and inverted', 'Virtual, upright, and same size', 'Real and magnified', 'Virtual and inverted'],
    correctIndex: 1,
    explanation: 'A plane mirror produces a virtual, upright image that is the same size as the object and located as far behind the mirror as the object is in front.',
    partNumber: 1,
    partTitle: 'Reflection',
  },

  // Part 2: Refraction & Snell's Law
  {
    id: 'go-ent-2a',
    question: "Snell's law is:",
    options: ['$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$', '$n_1 \\cos\\theta_1 = n_2 \\cos\\theta_2$', '$n_1/\\sin\\theta_1 = n_2/\\sin\\theta_2$', '$\\sin\\theta_1 = \\sin\\theta_2$'],
    correctIndex: 0,
    explanation: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Snell's law relates angles and indices of refraction at an interface.",
    partNumber: 2,
    partTitle: "Refraction & Snell's Law",
  },
  {
    id: 'go-ent-2b',
    question: 'Light passes from air ($n=1$) into glass ($n=1.5$) at $30°$ incidence. The refraction angle is approximately:',
    options: ['$45°$', '$19.5°$', '$30°$', '$48.6°$'],
    correctIndex: 1,
    explanation: '$\\sin\\theta_2 = n_1 \\sin\\theta_1 / n_2 = 1 \\times \\sin 30° / 1.5 = 0.333$. $\\theta_2 \\approx 19.5°$.',
    partNumber: 2,
    partTitle: "Refraction & Snell's Law",
  },

  // Part 3: Total Internal Reflection
  {
    id: 'go-ent-3a',
    question: 'Total internal reflection occurs when light travels from:',
    options: ['A less dense to a denser medium', 'A denser to a less dense medium at an angle exceeding the critical angle', 'Any angle', 'Only at 90°'],
    correctIndex: 1,
    explanation: 'TIR occurs when light in a denser medium (higher $n$) hits the interface at an angle greater than the critical angle.',
    partNumber: 3,
    partTitle: 'Total Internal Reflection',
  },
  {
    id: 'go-ent-3b',
    question: 'The critical angle for a glass-air interface ($n_{glass} = 1.5$) is:',
    options: ['$30°$', '$41.8°$', '$48.6°$', '$90°$'],
    correctIndex: 1,
    explanation: '$\\sin\\theta_c = n_2/n_1 = 1/1.5 = 0.667$. $\\theta_c \\approx 41.8°$.',
    partNumber: 3,
    partTitle: 'Total Internal Reflection',
  },

  // Part 4: Mirrors (Concave & Convex)
  {
    id: 'go-ent-4a',
    question: 'The mirror equation is:',
    options: ['$1/f = 1/d_o + 1/d_i$', '$f = d_o + d_i$', '$f = d_o d_i$', '$1/f = 1/d_o - 1/d_i$'],
    correctIndex: 0,
    explanation: '$1/f = 1/d_o + 1/d_i$. This applies to both mirrors and thin lenses.',
    partNumber: 4,
    partTitle: 'Curved Mirrors',
  },
  {
    id: 'go-ent-4b',
    question: 'A concave mirror with $f = 10$ cm has an object at $d_o = 20$ cm. The image distance is:',
    options: ['$20$ cm', '$10$ cm', '$5$ cm', '$40$ cm'],
    correctIndex: 0,
    explanation: '$1/d_i = 1/f - 1/d_o = 1/10 - 1/20 = 1/20$. $d_i = 20$ cm (real, inverted, same size).',
    partNumber: 4,
    partTitle: 'Curved Mirrors',
  },

  // Part 5: Thin Lenses
  {
    id: 'go-ent-5a',
    question: 'A converging (convex) lens has a:',
    options: ['Negative focal length', 'Positive focal length', 'Infinite focal length', 'Zero focal length'],
    correctIndex: 1,
    explanation: 'Converging lenses have positive focal lengths. Diverging (concave) lenses have negative focal lengths.',
    partNumber: 5,
    partTitle: 'Thin Lenses',
  },
  {
    id: 'go-ent-5b',
    question: 'An object placed inside the focal length of a converging lens produces:',
    options: ['A real, inverted image', 'A virtual, upright, magnified image', 'No image', 'A real, upright image'],
    correctIndex: 1,
    explanation: 'When $d_o < f$, the lens cannot converge the rays. The image is virtual, upright, and magnified (like a magnifying glass).',
    partNumber: 5,
    partTitle: 'Thin Lenses',
  },

  // Part 6: Magnification
  {
    id: 'go-ent-6a',
    question: 'The magnification of a mirror or lens is:',
    options: ['$m = d_o/d_i$', '$m = -d_i/d_o$', '$m = f/d_o$', '$m = d_i + d_o$'],
    correctIndex: 1,
    explanation: '$m = -d_i/d_o = h_i/h_o$. Negative $m$ means inverted. $|m| > 1$ means magnified.',
    partNumber: 6,
    partTitle: 'Magnification',
  },
  {
    id: 'go-ent-6b',
    question: 'An object is $30$ cm from a lens and the image forms at $-15$ cm (virtual). The magnification is:',
    options: ['$-0.5$', '$0.5$', '$2$', '$-2$'],
    correctIndex: 1,
    explanation: '$m = -d_i/d_o = -(-15)/30 = 0.5$. The image is upright and half the size.',
    partNumber: 6,
    partTitle: 'Magnification',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'go-ent-7a',
    question: 'Which type of image can be projected on a screen?',
    options: ['Virtual', 'Real', 'Both', 'Neither'],
    correctIndex: 1,
    explanation: 'Only real images (where light rays actually converge) can be projected on a screen. Virtual images cannot.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'go-ent-7b',
    question: 'The index of refraction of a medium is $n = c/v$. As light enters a denser medium:',
    options: ['Speed increases, wavelength increases', 'Speed decreases, wavelength decreases', 'Speed decreases, frequency decreases', 'Speed increases, wavelength decreases'],
    correctIndex: 1,
    explanation: 'In a denser medium ($n$ larger): $v = c/n$ decreases. Since frequency stays the same, $\\lambda = v/f$ also decreases.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reflection' },
    { partNumber: 2, partTitle: "Refraction & Snell's Law" },
    { partNumber: 3, partTitle: 'Total Internal Reflection' },
    { partNumber: 4, partTitle: 'Curved Mirrors' },
    { partNumber: 5, partTitle: 'Thin Lenses' },
    { partNumber: 6, partTitle: 'Magnification' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
