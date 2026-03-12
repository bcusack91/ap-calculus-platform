// Parametric Equations question bank for competitive mode

export interface ParametricQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ParametricQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'Given $x = 2t$ and $y = t + 1$, what is the rectangular equation?',
    options: ['$y = \\frac{x}{2} + 1$', '$y = 2x + 1$', '$y = x - 1$', '$y = \\frac{x+1}{2}$'],
    correctAnswer: 0,
    explanation: 'From $x = 2t$, we get $t = x/2$. Substituting: $y = x/2 + 1$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What parametric equations describe a circle of radius 3 centered at the origin?',
    options: ['$x = 3\\cos t,\\; y = 3\\sin t$', '$x = 3t,\\; y = 3t$', '$x = \\cos 3t,\\; y = \\sin 3t$', '$x = 3\\sin t,\\; y = 3\\cos t$'],
    correctAnswer: 0,
    explanation: 'A circle of radius $r$ centered at the origin is parametrized as $x = r\\cos t$, $y = r\\sin t$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'If $x = t^2$ and $y = t$, what is the rectangular equation?',
    options: ['$x = y^2$', '$y = x^2$', '$x = y + 2$', '$y = \\sqrt{x+1}$'],
    correctAnswer: 0,
    explanation: 'Since $y = t$, we have $t = y$, so $x = t^2 = y^2$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'For the parametric curve $x = t + 1$, $y = 2t - 3$, what is $y$ when $t = 2$?',
    options: ['$1$', '$3$', '$-1$', '$5$'],
    correctAnswer: 0,
    explanation: '$y = 2(2) - 3 = 4 - 3 = 1$.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What does the parameter $t$ typically represent in a parametric equation describing motion?',
    options: ['Time', 'Distance', 'Speed', 'Acceleration'],
    correctAnswer: 0,
    explanation: 'In motion applications, $t$ typically represents time.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Which direction is the parametric curve $x = \\cos t$, $y = \\sin t$ traced as $t$ increases from $0$ to $2\\pi$?',
    options: ['Counterclockwise', 'Clockwise', 'Left to right', 'Right to left'],
    correctAnswer: 0,
    explanation: 'Standard parametrization $x = \\cos t$, $y = \\sin t$ traces counterclockwise.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 7,
    question: 'Eliminate the parameter from $x = 3\\cos t$, $y = 3\\sin t$.',
    options: ['$x^2 + y^2 = 9$', '$x^2 + y^2 = 3$', '$x^2 - y^2 = 9$', '$y = x$'],
    correctAnswer: 0,
    explanation: 'Since $\\cos^2 t + \\sin^2 t = 1$, we get $(x/3)^2 + (y/3)^2 = 1$, i.e. $x^2 + y^2 = 9$.',
    difficulty: 'medium',
  },
  {
    id: 8,
    question: 'Given $x = e^t$ and $y = e^{2t}$, what is the rectangular equation?',
    options: ['$y = x^2$', '$y = 2x$', '$y = e^{x^2}$', '$y = \\ln x^2$'],
    correctAnswer: 0,
    explanation: 'Since $x = e^t$, we have $e^{2t} = (e^t)^2 = x^2$, so $y = x^2$ for $x > 0$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'For $x = 2 + 3t$, $y = 1 - t$, what is the slope of the line?',
    options: ['$-\\frac{1}{3}$', '$3$', '$-3$', '$\\frac{1}{3}$'],
    correctAnswer: 0,
    explanation: '$dy/dx = (dy/dt)/(dx/dt) = (-1)/3 = -1/3$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'The parametric equations $x = 2\\cos t$, $y = 5\\sin t$ describe which conic?',
    options: ['Ellipse', 'Circle', 'Parabola', 'Hyperbola'],
    correctAnswer: 0,
    explanation: '$(x/2)^2 + (y/5)^2 = \\cos^2 t + \\sin^2 t = 1$, which is an ellipse.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'For a parametric line through $(1, 4)$ with direction $\\langle 2, -3 \\rangle$, what are the parametric equations?',
    options: ['$x = 1 + 2t,\\; y = 4 - 3t$', '$x = 2 + t,\\; y = -3 + 4t$', '$x = 1 - 3t,\\; y = 4 + 2t$', '$x = 2t,\\; y = -3t + 4$'],
    correctAnswer: 0,
    explanation: 'Parametric line: $x = x_0 + at$, $y = y_0 + bt$ with point $(1,4)$ and direction $\\langle 2,-3\\rangle$.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'If $x = t^2 - 1$ and $y = t^3$, what is $dy/dx$ at $t = 1$?',
    options: ['$\\frac{3}{2}$', '$3$', '$2$', '$\\frac{2}{3}$'],
    correctAnswer: 0,
    explanation: '$dy/dx = (dy/dt)/(dx/dt) = 3t^2/(2t)$. At $t=1$: $3/2$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the period of the parametric curve $x = \\cos(2t)$, $y = \\sin(2t)$?',
    options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', '$4\\pi$'],
    correctAnswer: 0,
    explanation: 'The curve completes a full cycle when $2t = 2\\pi$, so $t = \\pi$.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Eliminate the parameter from $x = \\sec t$, $y = \\tan t$ for $-\\pi/2 < t < \\pi/2$.',
    options: ['$x^2 - y^2 = 1$', '$x^2 + y^2 = 1$', '$y = x - 1$', '$y^2 - x^2 = 1$'],
    correctAnswer: 0,
    explanation: 'Using $\\sec^2 t - \\tan^2 t = 1$, we get $x^2 - y^2 = 1$.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 15,
    question: 'For $x = a\\cos^3 t$, $y = a\\sin^3 t$ (an astroid), the rectangular form is:',
    options: ['$x^{2/3} + y^{2/3} = a^{2/3}$', '$x^2 + y^2 = a^2$', '$x^3 + y^3 = a^3$', '$\\sqrt{x} + \\sqrt{y} = \\sqrt{a}$'],
    correctAnswer: 0,
    explanation: '$x^{2/3} = a^{2/3}\\cos^2 t$ and $y^{2/3} = a^{2/3}\\sin^2 t$. Adding: $x^{2/3} + y^{2/3} = a^{2/3}$.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'For a cycloid $x = r(t - \\sin t)$, $y = r(1 - \\cos t)$, what is $dy/dx$ at $t = \\pi$?',
    options: ['$0$', '$1$', 'Undefined', '$-1$'],
    correctAnswer: 0,
    explanation: '$dx/dt = r(1 - \\cos t)$, $dy/dt = r\\sin t$. At $t = \\pi$: $dy/dx = \\sin\\pi/(1 - \\cos\\pi) = 0/2 = 0$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'The arc length of $x = \\cos t$, $y = \\sin t$ from $t = 0$ to $t = \\pi$ is:',
    options: ['$\\pi$', '$2\\pi$', '$1$', '$2$'],
    correctAnswer: 0,
    explanation: '$L = \\int_0^\\pi \\sqrt{\\sin^2 t + \\cos^2 t}\\,dt = \\int_0^\\pi 1\\,dt = \\pi$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'If $x = t^2$ and $y = t^3 - 3t$, at which value(s) of $t$ is there a horizontal tangent?',
    options: ['$t = \\pm 1$', '$t = 0$', '$t = 3$', '$t = \\pm\\sqrt{3}$'],
    correctAnswer: 0,
    explanation: 'Horizontal tangent when $dy/dt = 0$: $3t^2 - 3 = 0 \\Rightarrow t = \\pm 1$. Also need $dx/dt \\neq 0$, which holds.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'For the parametric curve $x = 2t + \\sin t$, $y = 2t + \\cos t$, what is $dy/dx$ at $t = 0$?',
    options: ['$\\frac{2}{3}$', '$1$', '$\\frac{3}{2}$', '$0$'],
    correctAnswer: 0,
    explanation: '$dx/dt = 2 + \\cos t$, $dy/dt = 2 - \\sin t$. At $t=0$: $dy/dx = (2-0)/(2+1) = 2/3$.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'For $x = a(t - \\sin t)$, $y = a(1 - \\cos t)$, the area under one arch ($0$ to $2\\pi$) is:',
    options: ['$3\\pi a^2$', '$\\pi a^2$', '$2\\pi a^2$', '$4\\pi a^2$'],
    correctAnswer: 0,
    explanation: '$A = \\int_0^{2\\pi} y\\,\\frac{dx}{dt}\\,dt = \\int_0^{2\\pi} a(1-\\cos t) \\cdot a(1-\\cos t)\\,dt = a^2\\int_0^{2\\pi}(1-\\cos t)^2\\,dt = 3\\pi a^2$.',
    difficulty: 'hard',
  },
]

export function getParametricQuestions(count: number = 10): ParametricQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, allQuestions.length))
}
