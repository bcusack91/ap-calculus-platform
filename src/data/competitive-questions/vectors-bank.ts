// Vectors question bank for competitive mode

export interface VectorQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: VectorQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the magnitude of $\\vec{v} = \\langle 3, 4 \\rangle$?',
    options: ['$5$', '$7$', '$\\sqrt{7}$', '$12$'],
    correctAnswer: 0,
    explanation: '$|\\vec{v}| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'If $\\vec{u} = \\langle 1, 2 \\rangle$ and $\\vec{v} = \\langle 3, 4 \\rangle$, what is $\\vec{u} + \\vec{v}$?',
    options: ['$\\langle 4, 6 \\rangle$', '$\\langle 3, 8 \\rangle$', '$\\langle 2, 6 \\rangle$', '$\\langle 4, 8 \\rangle$'],
    correctAnswer: 0,
    explanation: '$\\vec{u} + \\vec{v} = \\langle 1+3, 2+4 \\rangle = \\langle 4, 6 \\rangle$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $3\\langle 2, -1 \\rangle$?',
    options: ['$\\langle 6, -3 \\rangle$', '$\\langle 5, 2 \\rangle$', '$\\langle 6, -1 \\rangle$', '$\\langle 2, -3 \\rangle$'],
    correctAnswer: 0,
    explanation: 'Scalar multiplication: $3\\langle 2, -1 \\rangle = \\langle 3(2), 3(-1) \\rangle = \\langle 6, -3 \\rangle$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which of these is a unit vector?',
    options: ['$\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle 1, 1 \\rangle$', '$\\langle 0, 2 \\rangle$'],
    correctAnswer: 0,
    explanation: '$\\sqrt{(3/5)^2 + (4/5)^2} = \\sqrt{9/25 + 16/25} = \\sqrt{25/25} = 1$. It has magnitude 1.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'If $\\vec{v} = \\langle 0, -5 \\rangle$, what is $|\\vec{v}|$?',
    options: ['$5$', '$-5$', '$0$', '$25$'],
    correctAnswer: 0,
    explanation: '$|\\vec{v}| = \\sqrt{0^2 + (-5)^2} = \\sqrt{25} = 5$. Magnitude is always non-negative.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'The zero vector $\\vec{0} = \\langle 0, 0 \\rangle$ has what magnitude?',
    options: ['$0$', '$1$', 'Undefined', '$\\sqrt{2}$'],
    correctAnswer: 0,
    explanation: '$|\\vec{0}| = \\sqrt{0^2 + 0^2} = 0$.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 7,
    question: 'What is $\\vec{u} \\cdot \\vec{v}$ if $\\vec{u} = \\langle 2, 3 \\rangle$ and $\\vec{v} = \\langle -1, 4 \\rangle$?',
    options: ['$10$', '$-10$', '$14$', '$5$'],
    correctAnswer: 0,
    explanation: '$\\vec{u} \\cdot \\vec{v} = (2)(-1) + (3)(4) = -2 + 12 = 10$.',
    difficulty: 'medium',
  },
  {
    id: 8,
    question: 'Two vectors are orthogonal when their dot product equals:',
    options: ['$0$', '$1$', '$-1$', 'Their magnitudes multiplied'],
    correctAnswer: 0,
    explanation: 'Orthogonal (perpendicular) vectors satisfy $\\vec{u} \\cdot \\vec{v} = 0$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'What is the unit vector in the direction of $\\langle 6, 8 \\rangle$?',
    options: ['$\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle$', '$\\langle \\frac{6}{8}, 1 \\rangle$', '$\\langle \\frac{1}{6}, \\frac{1}{8} \\rangle$', '$\\langle 3, 4 \\rangle$'],
    correctAnswer: 0,
    explanation: '$|\\vec{v}| = \\sqrt{36+64} = 10$. Unit vector $= \\langle 6/10, 8/10 \\rangle = \\langle 3/5, 4/5 \\rangle$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Find the angle between $\\vec{u} = \\langle 1, 0 \\rangle$ and $\\vec{v} = \\langle 0, 1 \\rangle$.',
    options: ['$90°$', '$0°$', '$45°$', '$180°$'],
    correctAnswer: 0,
    explanation: '$\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|} = \\frac{0}{1 \\cdot 1} = 0 \\Rightarrow \\theta = 90°$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'If a force vector is $\\vec{F} = \\langle 5, 12 \\rangle$ Newtons, what is the magnitude of the force?',
    options: ['$13$ N', '$17$ N', '$\\sqrt{17}$ N', '$7$ N'],
    correctAnswer: 0,
    explanation: '$|\\vec{F}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ N.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'The projection of $\\vec{u}$ onto $\\vec{v}$ is $\\text{proj}_{\\vec{v}}\\vec{u} = $?',
    options: ['$\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$', '$\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}|^2}\\vec{u}$', '$\\vec{u} \\cdot \\vec{v}$', '$\\frac{\\vec{u}}{|\\vec{v}|}$'],
    correctAnswer: 0,
    explanation: 'The vector projection formula is $\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is $\\vec{u} - \\vec{v}$ if $\\vec{u} = \\langle 5, -2 \\rangle$ and $\\vec{v} = \\langle 3, 1 \\rangle$?',
    options: ['$\\langle 2, -3 \\rangle$', '$\\langle 8, -1 \\rangle$', '$\\langle -2, 3 \\rangle$', '$\\langle 2, 3 \\rangle$'],
    correctAnswer: 0,
    explanation: '$\\vec{u} - \\vec{v} = \\langle 5-3, -2-1 \\rangle = \\langle 2, -3 \\rangle$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Express the vector from point $A(1, 3)$ to point $B(4, 7)$ in component form.',
    options: ['$\\langle 3, 4 \\rangle$', '$\\langle 4, 7 \\rangle$', '$\\langle 5, 10 \\rangle$', '$\\langle -3, -4 \\rangle$'],
    correctAnswer: 0,
    explanation: '$\\overrightarrow{AB} = \\langle 4-1, 7-3 \\rangle = \\langle 3, 4 \\rangle$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'Find the scalar projection of $\\vec{u} = \\langle 3, 4 \\rangle$ onto $\\vec{v} = \\langle 1, 0 \\rangle$.',
    options: ['$3$', '$4$', '$5$', '$7$'],
    correctAnswer: 0,
    explanation: 'Scalar projection $= \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|} = \\frac{3(1)+4(0)}{1} = 3$.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'If $\\vec{u} = \\langle 2, 1 \\rangle$ and $\\vec{v} = \\langle -1, 3 \\rangle$, find $\\text{proj}_{\\vec{v}}\\vec{u}$.',
    options: ['$\\langle -\\frac{1}{10}, \\frac{3}{10} \\rangle$', '$\\langle \\frac{1}{10}, -\\frac{3}{10} \\rangle$', '$\\langle -1, 3 \\rangle$', '$\\langle 2, 1 \\rangle$'],
    correctAnswer: 0,
    explanation: '$\\vec{u}\\cdot\\vec{v} = -2+3 = 1$. $|\\vec{v}|^2 = 1+9 = 10$. So $\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{1}{10}\\langle -1, 3 \\rangle = \\langle -1/10, 3/10 \\rangle$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'What is the work done by $\\vec{F} = \\langle 4, 3 \\rangle$ N over displacement $\\vec{d} = \\langle 5, 0 \\rangle$ m?',
    options: ['$20$ J', '$35$ J', '$12$ J', '$7$ J'],
    correctAnswer: 0,
    explanation: '$W = \\vec{F} \\cdot \\vec{d} = 4(5) + 3(0) = 20$ J.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Find the angle between $\\vec{u} = \\langle 1, 1 \\rangle$ and $\\vec{v} = \\langle 1, \\sqrt{3} \\rangle$.',
    options: ['$15°$', '$30°$', '$45°$', '$60°$'],
    correctAnswer: 0,
    explanation: '$\\cos\\theta = \\frac{1+\\sqrt{3}}{\\sqrt{2}\\cdot 2} = \\frac{1+\\sqrt{3}}{2\\sqrt{2}}$. This equals $\\cos 15°$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'If $|\\vec{u}| = 4$, $|\\vec{v}| = 3$, and the angle between them is $60°$, find $\\vec{u} \\cdot \\vec{v}$.',
    options: ['$6$', '$12$', '$6\\sqrt{3}$', '$12\\sqrt{3}$'],
    correctAnswer: 0,
    explanation: '$\\vec{u}\\cdot\\vec{v} = |\\vec{u}||\\vec{v}|\\cos\\theta = 4(3)\\cos 60° = 12(1/2) = 6$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Decompose $\\vec{F} = \\langle 10, 0 \\rangle$ into components parallel and perpendicular to $\\vec{v} = \\langle 3, 4 \\rangle$. What is the parallel component?',
    options: ['$\\langle \\frac{18}{5}, \\frac{24}{5} \\rangle$', '$\\langle 6, 8 \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle \\frac{6}{5}, \\frac{8}{5} \\rangle$'],
    correctAnswer: 0,
    explanation: '$\\text{proj}_{\\vec{v}}\\vec{F} = \\frac{\\vec{F}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v} = \\frac{30}{25}\\langle 3,4\\rangle = \\frac{6}{5}\\langle 3,4\\rangle = \\langle 18/5, 24/5\\rangle$.',
    difficulty: 'hard',
  },
]

export function getVectorQuestions(count: number = 10): VectorQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, allQuestions.length))
}
