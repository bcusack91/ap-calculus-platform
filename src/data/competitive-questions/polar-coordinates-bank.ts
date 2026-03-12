// Polar Coordinates question bank for competitive mode

export interface PolarQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: PolarQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'Convert the polar point $(4, 0)$ to rectangular coordinates.',
    options: ['$(4, 0)$', '$(0, 4)$', '$(0, 0)$', '$(4, 4)$'],
    correctAnswer: 0,
    explanation: '$x = 4\\cos 0 = 4$, $y = 4\\sin 0 = 0$. So the rectangular point is $(4, 0)$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Convert the polar point $(2, \\pi/2)$ to rectangular coordinates.',
    options: ['$(0, 2)$', '$(2, 0)$', '$(\\sqrt{2}, \\sqrt{2})$', '$(2, 2)$'],
    correctAnswer: 0,
    explanation: '$x = 2\\cos(\\pi/2) = 0$, $y = 2\\sin(\\pi/2) = 2$. So the point is $(0, 2)$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the relationship between rectangular $(x,y)$ and polar $(r,\\theta)$?',
    options: ['$x = r\\cos\\theta,\\; y = r\\sin\\theta$', '$r = x\\cos\\theta,\\; \\theta = y\\sin\\theta$', '$x = r\\sin\\theta,\\; y = r\\cos\\theta$', '$r = x + y,\\; \\theta = x - y$'],
    correctAnswer: 0,
    explanation: 'The standard conversion is $x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'The polar graph $r = 3$ is a:',
    options: ['Circle of radius 3', 'Line through the origin', 'Spiral', 'Parabola'],
    correctAnswer: 0,
    explanation: '$r = 3$ means all points at distance 3 from the origin, which is a circle of radius 3.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Convert the rectangular point $(0, -3)$ to polar coordinates.',
    options: ['$(3, 3\\pi/2)$', '$(3, \\pi/2)$', '$(-3, \\pi/2)$', '$(3, \\pi)$'],
    correctAnswer: 0,
    explanation: '$r = \\sqrt{0^2 + (-3)^2} = 3$. The point is on the negative $y$-axis, so $\\theta = 3\\pi/2$.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'The polar equation $\\theta = \\pi/4$ represents a:',
    options: ['Line through the origin at $45°$', 'Circle', 'Spiral', 'Cardioid'],
    correctAnswer: 0,
    explanation: '$\\theta = \\pi/4$ is all points at angle $45°$ from the positive $x$-axis — a ray/line through the origin.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 7,
    question: 'Convert $x^2 + y^2 = 9$ to polar form.',
    options: ['$r = 3$', '$r = 9$', '$r^2 = 3$', '$r = 3\\cos\\theta$'],
    correctAnswer: 0,
    explanation: 'Since $x^2 + y^2 = r^2$, we get $r^2 = 9$, so $r = 3$.',
    difficulty: 'medium',
  },
  {
    id: 8,
    question: 'The polar equation $r = 2\\cos\\theta$ represents what shape?',
    options: ['Circle', 'Cardioid', 'Limaçon', 'Rose curve'],
    correctAnswer: 0,
    explanation: 'Multiply both sides by $r$: $r^2 = 2r\\cos\\theta \\Rightarrow x^2+y^2 = 2x \\Rightarrow (x-1)^2+y^2=1$. A circle.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'How many petals does the rose curve $r = \\sin(3\\theta)$ have?',
    options: ['$3$', '$6$', '$9$', '$1$'],
    correctAnswer: 0,
    explanation: 'For $r = \\sin(n\\theta)$ with $n$ odd, the rose has $n$ petals. So $n = 3$ gives $3$ petals.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'The cardioid $r = 1 + \\cos\\theta$ passes through the origin when $\\theta =$?',
    options: ['$\\pi$', '$0$', '$\\pi/2$', '$3\\pi/2$'],
    correctAnswer: 0,
    explanation: '$r = 1 + \\cos\\pi = 1 + (-1) = 0$. The curve passes through the origin at $\\theta = \\pi$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Convert the rectangular equation $y = x$ to polar form.',
    options: ['$\\theta = \\pi/4$', '$r = 1$', '$r = \\cos\\theta$', '$r = \\sin\\theta$'],
    correctAnswer: 0,
    explanation: '$y = x \\Rightarrow r\\sin\\theta = r\\cos\\theta \\Rightarrow \\tan\\theta = 1 \\Rightarrow \\theta = \\pi/4$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'How many petals does $r = \\cos(4\\theta)$ have?',
    options: ['$8$', '$4$', '$16$', '$2$'],
    correctAnswer: 0,
    explanation: 'For $r = \\cos(n\\theta)$ with $n$ even, the rose has $2n$ petals. So $2(4) = 8$ petals.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'The limaçon $r = 2 + 3\\cos\\theta$ has what feature?',
    options: ['Inner loop', 'Cardioid shape', 'Dimple only', 'Convex shape'],
    correctAnswer: 0,
    explanation: 'When $|b/a| > 1$ (here $3/2 > 1$), the limaçon $r = a + b\\cos\\theta$ has an inner loop.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Convert $r = 4\\sin\\theta$ to rectangular form.',
    options: ['$x^2 + (y-2)^2 = 4$', '$x^2 + y^2 = 4$', '$(x-2)^2 + y^2 = 4$', '$y = 4x$'],
    correctAnswer: 0,
    explanation: 'Multiply by $r$: $r^2 = 4r\\sin\\theta \\Rightarrow x^2+y^2 = 4y \\Rightarrow x^2 + (y-2)^2 = 4$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'Find the area enclosed by one petal of $r = \\cos(2\\theta)$.',
    options: ['$\\frac{\\pi}{8}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
    correctAnswer: 0,
    explanation: 'One petal spans $-\\pi/4$ to $\\pi/4$. $A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\cos^2(2\\theta)\\,d\\theta = \\pi/8$.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'The spiral $r = e^{\\theta}$ is called a:',
    options: ['Logarithmic spiral', 'Archimedean spiral', 'Fermat spiral', 'Hyperbolic spiral'],
    correctAnswer: 0,
    explanation: '$r = e^{\\theta}$ (equivalently $\\theta = \\ln r$) is a logarithmic (equiangular) spiral.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'Find the area inside $r = 2$ and outside $r = 2\\cos\\theta$.',
    options: ['$\\pi + 2$', '$\\pi$', '$2\\pi$', '$4 - \\pi$'],
    correctAnswer: 0,
    explanation: 'The area is $\\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2}[(2)^2 - (2\\cos\\theta)^2]\\,d\\theta + \\frac{1}{2}\\int_{\\pi/2}^{3\\pi/2}4\\,d\\theta$. After evaluation this yields $\\pi + 2$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Find the slope of the tangent to $r = 1 + \\sin\\theta$ at $\\theta = \\pi/2$.',
    options: ['$0$', '$1$', 'Undefined', '$-1$'],
    correctAnswer: 0,
    explanation: 'Using $dy/dx = (r\'\\sin\\theta + r\\cos\\theta)/(r\'\\cos\\theta - r\\sin\\theta)$; at $\\theta=\\pi/2$: $r=2$, $r\'=0$. Numerator $= 0 + 0 = 0$. So slope $= 0$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Which polar equation represents a lemniscate?',
    options: ['$r^2 = a^2\\cos(2\\theta)$', '$r = a\\cos(2\\theta)$', '$r = a + b\\cos\\theta$', '$r = a\\theta$'],
    correctAnswer: 0,
    explanation: 'The lemniscate (figure-eight) has the equation $r^2 = a^2\\cos(2\\theta)$ or $r^2 = a^2\\sin(2\\theta)$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Express the complex number $-1 + i$ in polar form $r(\\cos\\theta + i\\sin\\theta)$.',
    options: ['$\\sqrt{2}(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4})$', '$\\sqrt{2}(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4})$', '$2(\\cos\\frac{3\\pi}{4} + i\\sin\\frac{3\\pi}{4})$', '$\\sqrt{2}(\\cos\\frac{5\\pi}{4} + i\\sin\\frac{5\\pi}{4})$'],
    correctAnswer: 0,
    explanation: '$r = \\sqrt{1+1} = \\sqrt{2}$. The point $(-1, 1)$ is in Q2, so $\\theta = \\pi - \\pi/4 = 3\\pi/4$.',
    difficulty: 'hard',
  },
]

export function getPolarQuestions(count: number = 10): PolarQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, allQuestions.length))
}
