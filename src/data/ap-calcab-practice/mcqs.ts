import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus AB — 42 MCQs across 8 units, matching the May 2027 exam's Section I.
 * Distribution mirrors the CED unit weighting:
 *   U1 Limits & Continuity                         (5)
 *   U2 Differentiation: Definition & Properties    (5)
 *   U3 Differentiation: Composite/Implicit/Inverse (4)
 *   U4 Contextual Apps of Differentiation          (5)
 *   U5 Analytical Apps of Differentiation          (7)
 *   U6 Integration & Accumulation                  (8)
 *   U7 Differential Equations                      (3)
 *   U8 Applications of Integration                 (5)
 *
 * Section I Part A (Q1–Q29): 29 questions, NO calculator, 62 minutes.
 * Section I Part B (Q30–Q42): 13 questions, graphing calculator, 38 minutes; every Part B item is
 * calculator-active. The runner splits the parts by position, so Part B items must stay in 30–42.
 * Revised 2026-10-16: items that repeated the exit pool, the v1/v2 diagnostic banks or the FRQ bank
 * by substance were replaced, and graph/table/context stimuli were added (Q2, Q12, Q18, Q24, Q28,
 * Q32, Q36–Q37 set, Q38, Q39, Q41).
 */

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29, 29 questions) ============== */

  /* ---- U1: Limits & Continuity (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: '$\\lim_{x \\to 0} \\dfrac{\\sin(5x)}{x} = $',
    options: ['$0$', '$1$', '$5$', '$\\dfrac{1}{5}$'],
    correctAnswer: 2,
    explanation: 'Rewrite as $5\\cdot\\frac{\\sin 5x}{5x}$ and use $\\lim_{u\\to0}\\frac{\\sin u}{u}=1$, so the limit is $5\\cdot 1=5$. Answering $1$ applies the special limit without adjusting for the $5x$ inside the sine, and $\\frac{1}{5}$ comes from multiplying by the reciprocal of the needed factor.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    stimulus: 'The graph of the function $f$ on the interval $-3 \\le x \\le 3$ consists of two line segments. One segment rises from $(-3, -1)$ to an open circle at $(1, 3)$. The other segment starts at the filled point $(1, 1)$ and falls to $(3, 0)$.',
    question: 'Which of the following statements about $f$ at $x = 1$ is true?',
    options: [
      '$\\lim_{x \\to 1} f(x) = 1$, so $f$ is continuous at $x = 1$.',
      '$\\lim_{x \\to 1^-} f(x) = f(1)$, and $\\lim_{x \\to 1} f(x) = 3$.',
      '$\\lim_{x \\to 1} f(x) = 3$, and $f(1) = 1$.',
      '$\\lim_{x \\to 1^+} f(x) = f(1)$, and $\\lim_{x \\to 1} f(x)$ does not exist.',
    ],
    correctAnswer: 3,
    explanation: 'From the left, $f(x) \\to 3$ (the open circle); from the right, $f(x) \\to 1 = f(1)$ (the filled point). The one-sided limits differ, so $\\lim_{x\\to1}f(x)$ does not exist, and $f$ is not continuous at $1$. Saying the limit is $3$ (or $1$) uses only one side, and $\\lim_{x\\to1^-}f(x) = 3 \\ne f(1)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: '$\\lim_{x\\to\\infty}\\dfrac{3x^3 - 4x + 1}{6x^3 + x^2 - 2}=$',
    options: ['$0$', '$\\dfrac{1}{2}$', '$2$', '$3$'],
    correctAnswer: 1,
    explanation: 'Numerator and denominator have the same degree, so the limit is the ratio of the leading coefficients, $\\frac{3}{6}=\\frac{1}{2}$. Answering $2$ inverts that ratio, and $0$ would only be correct if the denominator had the higher degree.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'By the Intermediate Value Theorem, the equation $x^3 + x - 1 = 0$ must have at least one solution on which interval?',
    options: ['$[-1, 0]$', '$[0, 1]$', '$[1, 2]$', '$[2, 3]$'],
    correctAnswer: 1,
    explanation: 'With $f(x)=x^3+x-1$, $f(0)=-1<0$ and $f(1)=1>0$; since $f$ is continuous and changes sign, a root lies in $[0,1]$. On $[-1,0]$ both endpoint values ($-3$ and $-1$) are negative, so the theorem guarantees nothing there.',
  },

  /* ---- U2: Differentiation: Definition & Basic Rules (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x)=x^4 - 2x^2 + 7$, then $f\'(x)=$',
    options: ['$4x^3 - 4x^2$', '$4x^3 - 4x + 7$', '$4x^3 - 2x + 7$', '$4x^3 - 4x$'],
    correctAnswer: 3,
    explanation: 'Apply the power rule term by term: $4x^3 - 4x$, and the constant $7$ differentiates to $0$. Keeping the $+7$ treats the constant as if it survived differentiation, and $-4x^2$ multiplies by the exponent without lowering it.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'The derivative of $f(x)=\\sin x \\cdot \\cos x$ is',
    options: ['$\\cos^2 x - \\sin^2 x$', '$\\sin^2 x - \\cos^2 x$', '$-\\sin x\\cos x$', '$2\\sin x\\cos x$'],
    correctAnswer: 0,
    explanation: 'By the product rule, $f\'(x)=\\cos x\\cdot\\cos x + \\sin x\\cdot(-\\sin x)=\\cos^2 x-\\sin^2 x$. The answer $-\\sin x\\cos x$ multiplies the two derivatives together, which is not the product rule.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = \\dfrac{3x - 1}{x^2 + 1}$, then $f\'(1) =$',
    options: ['$-\\dfrac{1}{2}$', '$\\dfrac{3}{2}$', '$\\dfrac{1}{2}$', '$1$'],
    correctAnswer: 2,
    explanation: 'The quotient rule gives $f\'(x) = \\frac{3(x^2 + 1) - (3x - 1)(2x)}{(x^2 + 1)^2}$, so $f\'(1) = \\frac{6 - 4}{4} = \\frac{1}{2}$. The value $-\\frac{1}{2}$ subtracts the terms in the wrong order, and $1$ forgets to square the denominator. The value $\\frac{3}{2}$ divides the derivatives, $\\frac{3}{2x}$ at $x = 1$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'What is $\\displaystyle\\lim_{h \\to 0} \\frac{e^{2(1 + h)} - e^2}{h}$?',
    options: ['$e^2$', '$0$', '$2e^2$', '$2e$'],
    correctAnswer: 2,
    explanation: 'This is the definition of the derivative of $f(x) = e^{2x}$ at $x = 1$, and $f\'(x) = 2e^{2x}$, so the limit is $2e^2$. The value $e^2$ forgets the chain-rule factor $2$, and $2e$ evaluates the derivative of $e^{2x}$ incorrectly as $2e^x$. The value $0$ treats the $\\frac{0}{0}$ form as $0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $g(x)=\\ln(x)$, then $g\'(e)=$',
    options: ['$0$', '$1$', '$\\dfrac{1}{e}$', '$e$'],
    correctAnswer: 2,
    explanation: 'Since $g\'(x)=\\frac{1}{x}$, $g\'(e)=\\frac{1}{e}$. The value $1$ is $g(e)=\\ln e$, the function value rather than the derivative.',
  },

  /* ---- U3: Composite, Implicit, Inverse Functions (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'If $y = \\sin(\\sqrt{x})$, then $\\dfrac{dy}{dx}=$',
    options: ['$\\cos(\\sqrt{x})$', '$\\dfrac{\\cos(\\sqrt{x})}{2\\sqrt{x}}$', '$\\dfrac{\\cos(\\sqrt{x})}{\\sqrt{x}}$', '$2\\sqrt{x}\\cos(\\sqrt{x})$'],
    correctAnswer: 1,
    explanation: 'By the chain rule, $\\frac{dy}{dx}=\\cos(\\sqrt x)\\cdot\\frac{d}{dx}\\sqrt x=\\cos(\\sqrt x)\\cdot\\frac{1}{2\\sqrt x}$. Leaving the answer as $\\cos(\\sqrt x)$ forgets to multiply by the derivative of the inner function.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'The point $(2, 2)$ lies on the curve $x^2y + y^2 = 12$. What is the slope of the line tangent to the curve at this point?',
    options: ['$-2$', '$-1$', '$1$', '$0$'],
    correctAnswer: 1,
    explanation: 'Differentiating implicitly, $2xy + x^2\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$. At $(2, 2)$: $8 + 4\\frac{dy}{dx} + 4\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -1$. The value $-2$ drops the $x^2\\frac{dy}{dx}$ term of the product rule, and $0$ drops the $2xy$ term instead. The value $1$ is a sign error in solving for $\\frac{dy}{dx}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    stimulus: 'The function $g$ is differentiable and increasing for all real numbers, so it has an inverse function. Selected values of $g$ and its derivative are given in the table.\n\n| $x$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| $g(x)$ | $-2$ | 1 | 3 | 8 |\n| $g\'(x)$ | 4 | 2 | 5 | 6 |',
    question: 'Let $h$ be the inverse function of $g$. What is the value of $h\'(3)$?',
    options: ['$5$', '$\\dfrac{1}{5}$', '$\\dfrac{1}{6}$', '$\\dfrac{1}{8}$'],
    correctAnswer: 1,
    explanation: 'Since $g(2) = 3$, $h(3) = 2$ and $h\'(3) = \\frac{1}{g\'(h(3))} = \\frac{1}{g\'(2)} = \\frac{1}{5}$. The value $\\frac{1}{6}$ is $\\frac{1}{g\'(3)}$, which evaluates $g\'$ at the output $3$ instead of the input $2$. The value $5$ is $g\'(2)$ without the reciprocal, and $\\frac{1}{8}$ is $\\frac{1}{g(3)}$.',
  },

  /* ---- U4: Contextual Apps of Differentiation (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'Using the line tangent to the graph of $y = \\tan x$ at $x = \\dfrac{\\pi}{4}$, what is the approximation of $\\tan\\left(\\dfrac{\\pi}{4} + 0.1\\right)$?',
    options: ['$0.8$', '$1.1$', '$1.01$', '$1.2$'],
    correctAnswer: 3,
    explanation: 'At $x = \\frac{\\pi}{4}$, $\\tan x = 1$ and $\\frac{d}{dx}\\tan x = \\sec^2 x = 2$, so the tangent line is $y = 1 + 2\\left(x - \\frac{\\pi}{4}\\right)$, which gives $1 + 2(0.1) = 1.2$. The value $1.1$ uses slope $1$, taking $\\sec^2\\frac{\\pi}{4}$ as $1$, and $0.8$ has the sign of the slope reversed. The value $1.01$ multiplies $0.1$ by $0.1$ instead of by the slope.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'What is $\\displaystyle\\lim_{x \\to 0} \\frac{\\ln(1 + 3x)}{x}$?',
    options: ['$3$', '$0$', '$1$', '$\\dfrac{1}{3}$'],
    correctAnswer: 0,
    explanation: 'The form is $\\frac{0}{0}$, so L\'Hospital\'s Rule gives $\\lim_{x\\to0}\\frac{3/(1 + 3x)}{1} = 3$. The value $1$ differentiates $\\ln(1 + 3x)$ as $\\frac{1}{1 + 3x}$, without the chain-rule factor $3$, and $\\frac{1}{3}$ divides by $3$ instead of multiplying. The value $0$ treats the $\\frac{0}{0}$ form as $0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle moves along the $x$-axis so that its position at time $t \\ge 0$ is $x(t) = 2t^3 - 15t^2 + 24t$. At time $t = 2$, the particle is',
    options: [
      'moving to the right and slowing down',
      'moving to the right and speeding up',
      'moving to the left and speeding up',
      'moving to the left and slowing down',
    ],
    correctAnswer: 2,
    explanation: '$v(t) = 6t^2 - 30t + 24 = 6(t - 1)(t - 4)$, so $v(2) = -12 < 0$ and the particle moves left. $a(t) = 12t - 30$, so $a(2) = -6 < 0$. Velocity and acceleration have the same sign, so the particle is speeding up. Slowing down would need opposite signs, and moving right would need $v(2) > 0$.',
  },

  /* ---- U5: Analytical Apps of Differentiation (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On what intervals is $f(x) = x^3 - 3x^2 - 9x + 5$ increasing?',
    options: ['$(-\\infty, -3) \\cup (1, \\infty)$', '$(-1, \\infty)$', '$(-\\infty, -1) \\cup (3, \\infty)$', '$(-1, 3)$'],
    correctAnswer: 2,
    explanation: '$f\'(x)=3x^2-6x-9=3(x-3)(x+1)$, which is positive for $x<-1$ and for $x>3$. Factoring as $3(x+3)(x-1)$ is a sign error that moves both critical points, and on $(-1,3)$ the derivative is negative, so $f$ decreases there.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On the closed interval $[-2, 3]$, the absolute maximum value of $f(x)=x^2 - 2x$ occurs at',
    options: ['$x = -2$', '$x = -2$ and $x = 3$', '$x = 3$', '$x = 1$'],
    correctAnswer: 0,
    explanation: 'The only critical point is $x=1$ with $f(1)=-1$; the endpoints give $f(-2)=8$ and $f(3)=3$, so the maximum is at $x=-2$. The critical point $x=1$ is where the absolute minimum occurs, not the maximum.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: 'The function $f$ is twice differentiable for all real numbers. Selected values of $f$ are given in the table.\n\n| $x$ | 0 | 3 | 5 | 8 |\n|---|---|---|---|---|\n| $f(x)$ | 2 | 8 | 4 | 10 |',
    question: 'Which of the following must be true?',
    options: [
      '$f(c) = 0$ for some $c$ with $0 < c < 8$.',
      '$f\'(c) = 0$ for some $c$ with $0 < c < 3$.',
      '$f\'(c) = 3$ for some $c$ with $5 < c < 8$.',
      '$f\'(c) = -2$ for some $c$ with $3 < c < 5$.',
    ],
    correctAnswer: 3,
    explanation: 'On $[3, 5]$ the average rate of change is $\\frac{4 - 8}{5 - 3} = -2$, and $f$ is differentiable, so the Mean Value Theorem guarantees $f\'(c) = -2$ for some $c$ in $(3, 5)$. On $(0, 3)$, $f$ could increase the whole time, so $f\'(c) = 0$ is not guaranteed there. Every table value is positive, so the Intermediate Value Theorem gives no zero. On $[5, 8]$ the average rate of change is $2$, not $3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'An open-top box is made from a 12-inch by 12-inch square of cardboard by cutting a square of side $x$ inches from each corner and folding up the sides. What is the greatest possible volume of the box, in cubic inches?',
    options: ['$108$', '$128$', '$100$', '$144$'],
    correctAnswer: 1,
    explanation: 'The volume is $V(x) = x(12 - 2x)^2$ for $0 < x < 6$, and $V\'(x) = (12 - 2x)(12 - 6x)$, which changes from positive to negative at $x = 2$. So the maximum is $V(2) = 2 \\cdot 8^2 = 128$. The values $108$ and $100$ come from $x = 3$ and $x = 1$, which are not critical points, and $144$ is the area of the original square.',
  },

  /* ---- U6: Integration & Accumulation (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int \\left(4x^3 - \\frac{6}{\\sqrt{x}}\\right)dx =$',
    options: ['$x^4 - 3\\sqrt{x} + C$', '$x^4 - 12\\sqrt{x} + C$', '$x^4 + 12\\sqrt{x} + C$', '$12x^2 + \\dfrac{3}{x\\sqrt{x}} + C$'],
    correctAnswer: 1,
    explanation: 'Write the integrand as $4x^3 - 6x^{-1/2}$. Then $\\int 4x^3\\,dx = x^4$ and $\\int -6x^{-1/2}\\,dx = -6\\cdot\\frac{x^{1/2}}{1/2} = -12\\sqrt x$. The choice with $-3\\sqrt x$ multiplies by $\\frac{1}{2}$ instead of dividing by it, and the choice with $12x^2$ differentiates instead of integrating. The choice with $+12\\sqrt x$ loses the minus sign.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int x^2\\left(x^3 - 2\\right)^5 dx =$',
    options: ['$\\dfrac{\\left(x^3 - 2\\right)^6}{3} + C$', '$\\dfrac{\\left(x^3 - 2\\right)^6}{6} + C$', '$\\dfrac{x^3\\left(x^3 - 2\\right)^6}{18} + C$', '$\\dfrac{\\left(x^3 - 2\\right)^6}{18} + C$'],
    correctAnswer: 3,
    explanation: 'Let $u = x^3 - 2$, so $du = 3x^2\\,dx$ and $x^2\\,dx = \\frac{1}{3}du$. The integral is $\\frac{1}{3}\\int u^5\\,du = \\frac{u^6}{18} + C$. Dividing by $6$ alone forgets the $\\frac{1}{3}$ from $du$, and dividing by $3$ alone forgets the $\\frac{1}{6}$ from the power rule. Keeping an extra $x^3$ factor treats $x^2$ as if it could not be absorbed into $du$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'If $g(x)=\\displaystyle\\int_2^x (t^2+1)\\,dt$, then $g\'(3)=$',
    options: ['$5$', '$10$', '$6$', '$9$'],
    correctAnswer: 1,
    explanation: 'By the Fundamental Theorem of Calculus, $g\'(x)=x^2+1$, so $g\'(3)=10$. The value $5$ evaluates the integrand at the lower limit $2$, which does not affect $g\'$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_{-2}^{2}(x^3 - 3x)\\,dx =$',
    options: ['$-8$', '$-4$', '$0$', '$-2$'],
    correctAnswer: 2,
    explanation: 'The integrand is odd, so its integral over the symmetric interval $[-2,2]$ is $0$; directly, $F(x)=\\frac{x^4}{4}-\\frac{3x^2}{2}$ gives $F(2)-F(-2)=-2-(-2)=0$. Answering $-4$ doubles the integral over $[0,2]$, which is valid only for even functions.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: 'A function $g$ is defined by $g(x) = \\int_0^x f(t)\\,dt$, where the graph of $f$ on $[0, 6]$ consists of two line segments: from $(0, 2)$ down to $(3, -1)$, then up to $(6, 2)$.',
    question: 'What is the value of $g(6)$?',
    options: ['$1$', '$3$', '$5$', '$-1$'],
    correctAnswer: 1,
    explanation: 'The graph crosses the axis at $t=2$ and $t=4$, giving triangles of area $2$ above $[0,2]$, $1$ below $[2,4]$, and $2$ above $[4,6]$; the net signed area is $2-1+2=3$. The value $5$ is the total unsigned area, which wrongly adds the region below the axis.',
  },

  /* ---- U7: Differential Equations (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'The general solution of $\\dfrac{dy}{dx} = xy$ is',
    options: ['$y = e^{x^2/2} + C$', '$y = Ce^{x^2/2}$', '$y = \\dfrac{x^2 y}{2} + C$', '$y = \\dfrac{x^2}{2} + C$'],
    correctAnswer: 1,
    explanation: 'Separate to get $\\frac{dy}{y}=x\\,dx$, so $\\ln|y|=\\frac{x^2}{2}+C$ and $y=Ce^{x^2/2}$. Writing $e^{x^2/2}+C$ adds the constant after exponentiating, when it actually becomes a multiplicative factor.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Which description matches the slope field for $\\dfrac{dy}{dx}=y$?',
    options: [
      'Slopes are 0 along both axes, positive in Quadrants I and III, negative in II and IV.',
      'Slopes are 0 along the line $y=x$, positive above it, negative below it.',
      'Slopes are 0 along the $y$-axis, positive to the right, negative to the left.',
      'Slopes are 0 along the $x$-axis, positive above it, negative below it.',
    ],
    correctAnswer: 3,
    explanation: 'Since $\\frac{dy}{dx}=y$ depends only on $y$, slopes are $0$ where $y=0$ (the $x$-axis), positive for $y>0$, and negative for $y<0$. Zero slopes along the $y$-axis would describe $\\frac{dy}{dx}=x$ instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'The amount $A$ of a chemical in a tank changes at a rate proportional to the square root of the amount present. Which differential equation models this situation, where $k$ is a constant?',
    options: ['$\\dfrac{dA}{dt} = kA^2$', '$\\dfrac{dA}{dt} = k\\sqrt{A}$', '$\\dfrac{dA}{dt} = \\sqrt{kt}$', '$\\dfrac{dA}{dt} = \\dfrac{k}{\\sqrt{A}}$'],
    correctAnswer: 1,
    explanation: '"Proportional to the square root of the amount" means the rate equals a constant times $\\sqrt A$: $\\frac{dA}{dt} = k\\sqrt A$. The choice $\\sqrt{kt}$ makes the rate depend on time instead of on the amount. The choice $kA^2$ uses the square instead of the square root, and $\\frac{k}{\\sqrt A}$ describes a rate inversely proportional to the square root.',
  },

  /* ---- U8: Applications of Integration (2) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'A particle moves along the $x$-axis. Its velocity $v(t)$, in meters per second, for $0 \\le t \\le 6$ seconds is given by a graph consisting of three line segments joining the points $(0, 4)$, $(2, 0)$, $(4, -2)$ and $(6, -2)$, in that order. At time $t = 0$ the particle is at $x = 3$.',
    question: 'What is the position of the particle at time $t = 6$?',
    options: ['$x = -2$', '$x = 1$', '$x = -3$', '$x = 13$'],
    correctAnswer: 1,
    explanation: 'The displacement is the signed area under the velocity graph: $+4$ on $[0, 2]$, $-2$ on $[2, 4]$ and $-4$ on $[4, 6]$, for a total of $-2$. So $x(6) = 3 + (-2) = 1$. The value $-3$ counts only the motion after $t = 2$, $13$ adds the total distance traveled, $10$, and $-2$ is the displacement without the starting position.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The volume of the solid with semicircular cross sections perpendicular to the $x$-axis whose diameters lie under $y=x$ from $x=0$ to $x=2$ is',
    options: ['$\\dfrac{8\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{4\\pi}{3}$', '$\\dfrac{\\pi}{3}$'],
    correctAnswer: 3,
    explanation: 'The diameter is $x$, so the radius is $\\frac{x}{2}$ and each cross section has area $\\frac{1}{2}\\pi\\left(\\frac{x}{2}\\right)^2=\\frac{\\pi x^2}{8}$; then $V=\\int_0^2\\frac{\\pi x^2}{8}\\,dx=\\frac{\\pi}{3}$. Using a full circle of radius $\\frac{x}{2}$ doubles this to $\\frac{2\\pi}{3}$.',
  },

  /* ============== PART B — GRAPHING CALCULATOR (Q30–Q42, 13 questions) ============== */

  /* mixed across units */
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Let $f(x) = \\begin{cases} e^x - k, & x < 1 \\\\ \\ln(x + 3), & x \\ge 1 \\end{cases}$, where $k$ is a constant. For what value of $k$ is $f$ continuous at $x = 1$?',
    options: ['$1.332$', '$4.105$', '$1.386$', '$-1.332$'],
    correctAnswer: 0,
    explanation: 'Continuity requires $\\lim_{x\\to1^-}(e^x - k) = f(1)$, that is, $e - k = \\ln 4$, so $k = e - \\ln 4 \\approx 2.718 - 1.386 = 1.332$. The value $4.105$ adds $\\ln 4$ to $e$, and $-1.332$ solves $\\ln 4 - k = e$, with the pieces swapped. The value $1.386$ is $\\ln 4$, the value of $f(1)$, rather than $k$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Let $f(x) = \\sin\\left(e^x\\right)$. What is the value of $f\'(1)$?',
    options: ['$2.718$', '$-0.912$', '$-2.478$', '$1.117$'],
    correctAnswer: 2,
    explanation: 'By the chain rule, $f\'(x) = \\cos\\left(e^x\\right)\\cdot e^x$, so $f\'(1) = e\\cos e \\approx 2.718(-0.912) \\approx -2.478$ (calculator in radian mode). The value $2.718$ keeps only the inner derivative $e^x$, and $-0.912$ is $\\cos e$ without the inner derivative $e^x$. The value $1.117$ is $e\\sin e$, which differentiates $\\sin$ as $\\sin$ instead of $\\cos$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'A particle moves along a line with velocity $v(t) = t^2 - 4\\sin t$ for $0 \\le t \\le 4$.',
    question: 'Using a calculator, at approximately what time is the speed of the particle greatest?',
    options: ['$t \\approx 0.50$', '$t \\approx 1.03$', '$t \\approx 1.93$', '$t \\approx 4.00$'],
    correctAnswer: 3,
    explanation: 'Speed is $|v(t)|$; it has an interior local maximum of about $|v(1.03)|\\approx 2.37$, but at the endpoint $v(4)=16-4\\sin 4\\approx 19.03$, which is far larger. Stopping at $t\\approx1.03$, where $a(t)=0$, ignores the endpoints of the interval.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'The second derivative of a function $f$ is $f\'\'(x) = x^2 - 3\\cos x$. On which interval is the graph of $f$ concave down?',
    options: ['$-1.131 < x < 1.131$', '$-\\dfrac{\\pi}{2} < x < \\dfrac{\\pi}{2}$', '$x < -1.131$ or $x > 1.131$', '$-\\sqrt{3} < x < \\sqrt{3}$'],
    correctAnswer: 0,
    explanation: 'The graph of $f$ is concave down where $f\'\'(x) < 0$. Graphing $y = x^2 - 3\\cos x$ shows zeros at $x \\approx \\pm1.131$ and negative values between them. The outer intervals are where $f$ is concave up. The interval $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$ is where $\\cos x > 0$, and $-\\sqrt3 < x < \\sqrt3$ solves $x^2 < 3$, treating $\\cos x$ as $1$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Use a calculator to evaluate $\\displaystyle\\int_0^2 e^{-x^2}\\,dx$ to three decimals.',
    options: ['$0.018$', '$0.747$', '$0.882$', '$1.764$'],
    correctAnswer: 2,
    explanation: 'Numerical integration gives $\\int_0^2 e^{-x^2}\\,dx\\approx 0.882$. The value $0.747$ is the integral over $[0,1]$ only, and $1.764$ is the integral over the symmetric interval $[-2,2]$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'A trapezoidal sum with $n=4$ equal subintervals approximating $\\int_1^5 \\ln x\\,dx$ gives',
    options: ['$\\approx 3.18$', '$\\approx 3.98$', '$\\approx 4.05$', '$\\approx 4.79$'],
    correctAnswer: 1,
    explanation: '$T_4=\\frac{1}{2}[\\ln 1 + 2\\ln 2 + 2\\ln 3 + 2\\ln 4 + \\ln 5]\\approx 3.98$. The value $4.05$ is the exact integral; because $\\ln x$ is concave down, the trapezoidal sum underestimates it.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Let $R$ be the region enclosed by the graphs of $y = \\ln x$ and $y = x - 2$. The graphs intersect at two points, and between them the graph of $y = \\ln x$ lies above the line.',
    question: 'What is the area of $R$?',
    options: ['$2.988$', '$1.949$', '$3.146$', '$1.303$'],
    correctAnswer: 1,
    explanation: 'Solve $\\ln x = x - 2$ with a calculator: $x = a \\approx 0.159$ and $x = b \\approx 3.146$. The area is $\\int_a^b\\left(\\ln x - (x - 2)\\right)dx \\approx 1.949$. The value $1.303$ starts the integral at $x = 1$, where $\\ln x = 0$, instead of at the intersection. The value $2.988$ is $b - a$, the width of the region, and $3.146$ is the right-hand intersection $b$, not an area.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Let $R$ be the region enclosed by the graphs of $y = \\ln x$ and $y = x - 2$. The graphs intersect at two points, and between them the graph of $y = \\ln x$ lies above the line.',
    question: 'What is the volume of the solid generated when $R$ is revolved about the horizontal line $y = -2$?',
    options: ['$4.853$', '$6.123$', '$6.988$', '$21.952$'],
    correctAnswer: 3,
    explanation: 'Washers have outer radius $\\ln x + 2$ and inner radius $(x - 2) + 2 = x$, so $V = \\pi\\int_a^b\\left[(\\ln x + 2)^2 - x^2\\right]dx \\approx 21.952$, with $a \\approx 0.159$ and $b \\approx 3.146$. The value $6.988$ leaves out $\\pi$. The value $4.853$ squares the difference of the radii instead of subtracting the squares, and $6.123$ forgets to square the radii at all, $\\pi\\int_a^b\\left[(\\ln x + 2) - x\\right]dx$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'The side length of a square, in centimeters, is $s(t) = 3 + \\ln\\left(1 + t^2\\right)$, where $t$ is measured in seconds.',
    question: 'At time $t = 2$ seconds, at what rate is the area of the square increasing?',
    options: ['$7.375$ square centimeters per second', '$3.688$ square centimeters per second', '$9.219$ square centimeters per second', '$0.800$ square centimeters per second'],
    correctAnswer: 0,
    explanation: 'With $A = s^2$, $\\frac{dA}{dt} = 2s\\frac{ds}{dt}$. At $t = 2$, $s = 3 + \\ln 5 \\approx 4.609$ and $\\frac{ds}{dt} = \\frac{2t}{1 + t^2} = 0.8$, so $\\frac{dA}{dt} \\approx 7.375$ cm² per second. The value $9.219$ is $2s$ without $\\frac{ds}{dt}$, and $0.800$ is $\\frac{ds}{dt}$ alone. The value $3.688$ is $s\\frac{ds}{dt}$, missing the factor $2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: 'The temperature inside a greenhouse, in degrees Fahrenheit, is modeled by $T(t) = 60 + 15\\sin\\left(\\dfrac{t}{3}\\right) - 0.5t$, where $t$ is the number of hours after 6:00 a.m. and $0 \\le t \\le 12$.',
    question: 'What is the greatest temperature inside the greenhouse during this time?',
    options: ['$60.000$°F', '$75.000$°F', '$72.719$°F', '$72.644$°F'],
    correctAnswer: 2,
    explanation: '$T\'(t) = 5\\cos\\left(\\frac{t}{3}\\right) - 0.5 = 0$ at $t \\approx 4.412$ on $[0, 12]$. The candidates are $T(0) = 60$, $T(4.412) \\approx 72.719$ and $T(12) \\approx 42.648$, so the maximum is about $72.719$°F. The value $72.644$ is $T\\left(\\frac{3\\pi}{2}\\right)$, where the sine term peaks but $T\'$ is not $0$. The value $75$ ignores the $-0.5t$ term, and $60$ is only the starting temperature.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Let $F(x) = \\displaystyle\\int_0^x (t - 2)\\sin t\\,dt$. At what value of $x$ in the closed interval $0 \\le x \\le 4$ does $F$ attain its absolute minimum?',
    options: ['$x = 2$', '$x = 0$', '$x = 4$', '$x = \\pi$'],
    correctAnswer: 2,
    explanation: '$F\'(x) = (x - 2)\\sin x$, which is negative on $(0, 2)$, positive on $(2, \\pi)$ and negative on $(\\pi, 4)$. So the minimum is at $x = 2$ or at the endpoint $x = 4$. A calculator gives $F(2) \\approx -1.091$ and $F(4) \\approx -1.450$, so the absolute minimum is at $x = 4$. The value $x = 2$ is only a relative minimum, $x = \\pi$ is a relative maximum, and $F(0) = 0$ is not the least value.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    stimulus: 'Water is leaking from a tank at the rate of $r(t) = 5e^{-0.1t}$ gallons per minute, where $t$ is measured in minutes.',
    question: 'To the nearest tenth of a gallon, how much water leaks out from $t = 0$ to $t = 10$ minutes?',
    options: ['$31.6$', '$18.4$', '$50.0$', '$34.2$'],
    correctAnswer: 0,
    explanation: 'The amount leaked is $\\int_0^{10}5e^{-0.1t}\\,dt=50(1-e^{-1})\\approx 31.6$ gallons. The value $50.0$ assumes the initial rate of $5$ gal/min holds for all $10$ minutes, ignoring the decay.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'The derivative of a function $f$ is $f\'(x) = e^{-x} - \\dfrac{x}{3}$. Which of the following describes $f$ at its only critical point?',
    options: [
      'No relative extremum, because $f\'\'$ does not change sign',
      'A relative minimum at $x \\approx 1.050$',
      'A point of inflection at $x \\approx 1.050$',
      'A relative maximum at $x \\approx 1.050$',
    ],
    correctAnswer: 3,
    explanation: 'A calculator gives the zero of $f\'$ at $x \\approx 1.050$. Since $f\'\'(x) = -e^{-x} - \\frac{1}{3} < 0$ for all $x$, the Second Derivative Test gives a relative maximum (equivalently, $f\'$ changes from positive to negative there). A relative minimum would need $f\'\' > 0$. An inflection point needs $f\'\'$ to change sign, and the sign of $f\'\'$ does not need to change for an extremum.',
  },
]
