import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC — 45 MCQs across all 10 units.
 * Distribution mirrors CB exam weighting (BC adds Units 9 & 10 + extra integration techniques in U6):
 *   U1 Limits & Continuity                         (3)
 *   U2 Differentiation: Definition & Properties    (3)
 *   U3 Differentiation: Composite/Implicit/Inverse (4)
 *   U4 Contextual Apps of Differentiation          (4)
 *   U5 Analytical Apps of Differentiation          (5)
 *   U6 Integration & Accumulation                  (7)  [BC adds parts, partial fractions, improper]
 *   U7 Differential Equations                      (4)  [BC adds logistic + Euler]
 *   U8 Applications of Integration                 (4)  [BC adds arc length]
 *   U9 Parametric, Polar, Vector-Valued            (5)
 *   U10 Infinite Series & Sequences                (6)
 *
 * Section I Part A (Q1–Q30): NO calculator.
 * Section I Part B (Q31–Q45): graphing calculator allowed/required.
 */

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (30) ============== */

  /* ---- U1 (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: '$\\lim_{x \\to 0} \\dfrac{1 - \\cos(2x)}{x^2} =$',
    options: ['$0$', '$1$', '$2$', 'Does not exist'],
    correctAnswer: 2,
    explanation: 'L\'Hôpital twice: $\\frac{2\\sin 2x}{2x} \\to \\frac{4\\cos 2x}{2} = 2$. Or use $1-\\cos(2x)=2\\sin^2 x$: $\\frac{2\\sin^2 x}{x^2}\\to 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: '$\\lim_{x \\to \\infty} \\dfrac{\\ln x}{\\sqrt x} =$',
    options: ['$0$', '$1$', '$\\infty$', 'Does not exist'],
    correctAnswer: 0,
    explanation: 'L\'Hôpital: $\\frac{1/x}{1/(2\\sqrt x)} = \\frac{2}{\\sqrt x} \\to 0$. Polynomial growth dominates logarithmic.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'For what value of $k$ is $f(x)=\\begin{cases} kx + 1 & x \\le 2 \\\\ x^2 - 1 & x > 2 \\end{cases}$ continuous everywhere?',
    options: ['$k = 1$', '$k = 1.5$', '$k = 2$', '$k = 3$'],
    correctAnswer: 0,
    explanation: 'Continuity at $x=2$: $2k + 1 = 4 - 1 = 3 \\Rightarrow 2k = 2 \\Rightarrow k = 1$.',
  },

  /* ---- U2 (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = \\tan x$, then $f\'(\\pi/4) =$',
    options: ['$0$', '$1$', '$2$', '$\\sqrt 2$'],
    correctAnswer: 2,
    explanation: '$f\'(x) = \\sec^2 x$. $\\sec^2(\\pi/4) = (\\sqrt 2)^2 = 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'Which expression equals $\\dfrac{d}{dx}\\left[\\sqrt{x^2 + 5}\\right]$?',
    options: [
      '$\\dfrac{x}{\\sqrt{x^2+5}}$',
      '$\\dfrac{2x}{\\sqrt{x^2+5}}$',
      '$\\dfrac{1}{2\\sqrt{x^2+5}}$',
      '$\\dfrac{x}{2\\sqrt{x^2+5}}$',
    ],
    correctAnswer: 0,
    explanation: 'Chain: $\\frac{1}{2\\sqrt{x^2+5}} \\cdot 2x = \\frac{x}{\\sqrt{x^2+5}}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = x \\ln x$ and $g(x) = e^x$, then $\\dfrac{d}{dx}[f(g(x))]$ at $x = 0$ equals',
    options: ['$0$', '$1$', '$e$', 'Undefined'],
    correctAnswer: 1,
    explanation: '$f\'(u) = \\ln u + 1$, $g(0) = 1$, $g\'(0) = 1$. By chain: $f\'(g(0)) \\cdot g\'(0) = (\\ln 1 + 1)(1) = 1$.',
  },

  /* ---- U3 (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'For $\\sin(xy) = x$, $\\dfrac{dy}{dx} =$',
    options: [
      '$\\dfrac{1 - y\\cos(xy)}{x\\cos(xy)}$',
      '$\\dfrac{\\cos(xy)}{x}$',
      '$\\dfrac{1}{\\cos(xy)} - \\dfrac{y}{x}$',
      '$\\dfrac{y\\cos(xy) - 1}{x\\cos(xy)}$',
    ],
    correctAnswer: 0,
    explanation: 'Implicit: $\\cos(xy)(y + xy\') = 1 \\Rightarrow xy\'\\cos(xy) = 1 - y\\cos(xy) \\Rightarrow y\' = (1 - y\\cos(xy))/(x\\cos(xy))$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'If $y = \\arcsin(2x)$, then $\\dfrac{dy}{dx} =$',
    options: ['$\\dfrac{2}{\\sqrt{1-4x^2}}$', '$\\dfrac{1}{\\sqrt{1-4x^2}}$', '$\\dfrac{2}{\\sqrt{1-x^2}}$', '$\\dfrac{1}{\\sqrt{1-2x^2}}$'],
    correctAnswer: 0,
    explanation: '$\\frac{d}{dx}\\arcsin u = \\frac{u\'}{\\sqrt{1-u^2}}$ with $u = 2x$, $u\' = 2$: $\\frac{2}{\\sqrt{1-4x^2}}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Suppose $f$ and $g$ are differentiable with $f(2) = 3$, $f\'(2) = 4$, $g(2) = 1$, $g\'(2) = 5$. If $h(x) = f(x)/g(x)$, then $h\'(2) =$',
    options: ['$-11$', '$11$', '$-7$', '$7$'],
    correctAnswer: 0,
    explanation: '$h\'(x) = (f\'g - fg\')/g^2$. At $x=2$: $(4 \\cdot 1 - 3 \\cdot 5)/1 = (4-15) = -11$.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: '$\\dfrac{d}{dx}\\left[(\\sin x)^x\\right] =$',
    options: [
      '$x(\\sin x)^{x-1}\\cos x$',
      '$(\\sin x)^x[\\ln(\\sin x) + x\\cot x]$',
      '$(\\sin x)^x\\ln(\\sin x)$',
      '$x(\\sin x)^{x-1}$',
    ],
    correctAnswer: 1,
    explanation: 'Logarithmic differentiation: $\\ln y = x\\ln(\\sin x)$, $y\'/y = \\ln(\\sin x) + x \\cdot \\cos x/\\sin x$. So $y\' = (\\sin x)^x[\\ln(\\sin x) + x\\cot x]$.',
  },

  /* ---- U4 (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle has position $x(t) = t^3 - 9t^2 + 24t$. The particle changes direction at',
    options: ['$t = 2$ only', '$t = 4$ only', '$t = 2$ and $t = 4$', '$t = 3$ only'],
    correctAnswer: 2,
    explanation: '$v(t)=3t^2-18t+24=3(t-2)(t-4)$. Sign changes at $t=2$ and $t=4$ ⇒ direction changes both times.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: '$\\lim_{x \\to 0^+} x \\ln x =$',
    options: ['$-\\infty$', '$0$', '$1$', '$\\infty$'],
    correctAnswer: 1,
    explanation: 'Indeterminate $0 \\cdot (-\\infty)$. Rewrite as $\\frac{\\ln x}{1/x}$. L\'Hôpital: $\\frac{1/x}{-1/x^2} = -x \\to 0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'Given $f(x) = \\sqrt{1+x}$, the linear approximation to $f$ near $x=0$ gives $\\sqrt{1.06} \\approx$',
    options: ['$1.03$', '$1.06$', '$0.97$', '$1.005$'],
    correctAnswer: 0,
    explanation: '$L(x) = 1 + x/2$. $L(0.06) = 1.03$. (True value $\\approx 1.0296$.)',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A spherical snowball melts at a rate of 12 $cm^{3}/min$. When the radius is 5 cm, the rate at which the radius is changing is',
    options: ['$-\\dfrac{9}{25\\pi}$ cm/min', '$-\\dfrac{3}{25\\pi}$ cm/min', '$-\\dfrac{1}{25\\pi}$ cm/min', '$-12$ cm/min'],
    correctAnswer: 1,
    explanation: '$V=\\frac{4}{3}\\pi r^3 \\Rightarrow dV/dt = 4\\pi r^2 dr/dt$. $-12 = 4\\pi(25)(dr/dt) \\Rightarrow dr/dt = -12/(100\\pi) = -3/(25\\pi)$.',
  },

  /* ---- U5 (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On $[0, 2\\pi]$, $f(x) = x + 2\\cos x$ has critical points at',
    options: ['$x = \\pi/6, 5\\pi/6$', '$x = \\pi/3, 5\\pi/3$', '$x = \\pi/2, 3\\pi/2$', '$x = \\pi/2$ only'],
    correctAnswer: 0,
    explanation: '$f\'(x) = 1 - 2\\sin x = 0 \\Rightarrow \\sin x = 1/2 \\Rightarrow x = \\pi/6, 5\\pi/6$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Let $f(x) = e^{-x^2}$. The graph of $f$ has points of inflection at',
    options: ['$x = 0$', '$x = \\pm 1$', '$x = \\pm 1/\\sqrt 2$', '$x = \\pm \\sqrt 2$'],
    correctAnswer: 2,
    explanation: '$f\'(x) = -2x e^{-x^2}$, $f\'\'(x) = (-2 + 4x^2)e^{-x^2} = 0 \\Rightarrow 4x^2 = 2 \\Rightarrow x = \\pm 1/\\sqrt 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'A box with a square base and open top has volume 32 $ft^{3}$. The dimensions that minimize surface area are (base side, height) =',
    options: ['$(2, 8)$', '$(4, 2)$', '$(8, 0.5)$', '$(2\\sqrt 2, 4)$'],
    correctAnswer: 1,
    explanation: '$V = x^2 h = 32 \\Rightarrow h = 32/x^2$. $S = x^2 + 4xh = x^2 + 128/x$. $S\' = 2x - 128/x^2 = 0 \\Rightarrow x^3 = 64 \\Rightarrow x = 4$, $h = 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'If $f(1) = 2$, $f(5) = 10$, and $f$ is continuous on $[1, 5]$ and differentiable on $(1, 5)$, then by MVT there exists $c \\in (1, 5)$ with $f\'(c) =$',
    options: ['$2$', '$8$', '$10$', '$12$'],
    correctAnswer: 0,
    explanation: 'MVT: $f\'(c) = (f(5) - f(1))/(5-1) = 8/4 = 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'The graph of $f$ has $f\'(x) > 0$ and $f\'\'(x) > 0$ for all $x$. Then $f$ is',
    options: [
      'increasing and concave up',
      'increasing and concave down',
      'decreasing and concave up',
      'decreasing and concave down',
    ],
    correctAnswer: 0,
    explanation: '$f\'>0$ ⇒ increasing. $f\'\'>0$ ⇒ concave up.',
  },

  /* ---- U6 (7) - includes BC techniques ---- */
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int x e^x\\,dx =$',
    options: ['$xe^x + C$', '$xe^x - e^x + C$', '$x^2 e^x/2 + C$', '$e^x(x+1) + C$'],
    correctAnswer: 1,
    explanation: 'Integration by parts: $u=x$, $dv=e^x dx$. $\\int x e^x dx = xe^x - \\int e^x dx = xe^x - e^x + C$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int \\dfrac{2x+3}{x^2+x}\\,dx =$',
    options: [
      '$\\ln|x| + 2\\ln|x+1| + C$',
      '$\\ln(x^2+x) + C$',
      '$3\\ln|x| - \\ln|x+1| + C$',
      '$3\\ln|x| + 2\\ln|x+1| + C$',
    ],
    correctAnswer: 2,
    explanation: 'Partial fractions: $\\frac{2x+3}{x(x+1)} = \\frac{A}{x}+\\frac{B}{x+1}$. $2x+3 = A(x+1)+Bx$. $x=0$: $A=3$; $x=-1$: $1=-B \\Rightarrow B=-1$. Check: $3(x+1)-x=2x+3$ ✓. So integral $= 3\\ln|x| - \\ln|x+1|+C$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_1^{\\infty} \\dfrac{1}{x^2}\\,dx =$',
    options: ['$0$', '$1$', '$\\infty$ (diverges)', '$-1$'],
    correctAnswer: 1,
    explanation: '$\\lim_{b\\to\\infty}[-1/x]_1^b = \\lim(-1/b + 1) = 1$. Converges.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_0^1 \\dfrac{1}{\\sqrt x}\\,dx =$',
    options: ['$0$', '$1$', '$2$', 'Diverges'],
    correctAnswer: 2,
    explanation: 'Improper at 0. $\\lim_{a\\to 0^+}[2\\sqrt x]_a^1 = 2 - 0 = 2$. Converges to 2.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int x^2 \\ln x\\,dx =$',
    options: [
      '$\\dfrac{x^3 \\ln x}{3} - \\dfrac{x^3}{9} + C$',
      '$\\dfrac{x^3\\ln x}{3} + \\dfrac{x^3}{9} + C$',
      '$\\dfrac{x^3 \\ln x}{3} + C$',
      '$\\dfrac{x^3}{3\\ln x} + C$',
    ],
    correctAnswer: 0,
    explanation: 'Parts: $u=\\ln x$, $dv=x^2 dx$. $\\int = \\frac{x^3}{3}\\ln x - \\int \\frac{x^3}{3}\\cdot\\frac{1}{x}dx = \\frac{x^3 \\ln x}{3} - \\frac{x^3}{9} + C$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'If $g(x) = \\displaystyle\\int_1^{x^2}\\sin(t)\\,dt$, then $g\'(x) =$',
    options: ['$\\sin(x^2)$', '$2x\\sin(x^2)$', '$\\sin(x^2) - \\sin(1)$', '$2x\\sin(x^2) - \\sin(1)$'],
    correctAnswer: 1,
    explanation: 'FTC + chain rule: $g\'(x) = \\sin(x^2) \\cdot 2x$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_0^{\\pi/4} \\sec^2 x\\,dx =$',
    options: ['$0$', '$1$', '$\\sqrt 2$', '$2$'],
    correctAnswer: 1,
    explanation: '$\\tan x|_0^{\\pi/4} = 1 - 0 = 1$.',
  },

  /* ---- U7 (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'The general solution to $\\dfrac{dy}{dx} = 2xy^2$ is',
    options: ['$y = -1/(x^2 + C)$', '$y = x^2 + C$', '$y = e^{x^2} + C$', '$y = Cx^2$'],
    correctAnswer: 0,
    explanation: 'Separate: $dy/y^2 = 2x\\,dx \\Rightarrow -1/y = x^2 + C \\Rightarrow y = -1/(x^2+C)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'A population $P$ satisfies the logistic equation $\\dfrac{dP}{dt} = 0.05P(1 - P/200)$. The carrying capacity is',
    options: ['$0.05$', '$50$', '$100$', '$200$'],
    correctAnswer: 3,
    explanation: 'In logistic form $dP/dt = kP(1 - P/L)$, $L$ is the carrying capacity. Here $L = 200$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'For the logistic model $\\dfrac{dP}{dt} = 0.05P(1 - P/200)$, the population is growing fastest when $P =$',
    options: ['$50$', '$100$', '$150$', '$200$'],
    correctAnswer: 1,
    explanation: 'Maximum growth in logistic occurs at $P = L/2 = 100$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Which differential equation has slope field with horizontal tangent only along the line $y = x$?',
    options: ['$dy/dx = y - x$', '$dy/dx = x - y$', '$dy/dx = y + x$', '$dy/dx = xy$'],
    correctAnswer: 1,
    explanation: '$dy/dx = 0$ when $x - y = 0$, i.e., $y = x$. That matches the line of horizontal tangents.',
  },

  /* ---- U8 (4) — includes arc length ---- */
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The arc length of $y = (2/3)x^{3/2}$ from $x = 0$ to $x = 3$ is',
    options: ['$3$', '$14/3$', '$7$', '$\\dfrac{14\\sqrt 2}{3}$'],
    correctAnswer: 1,
    explanation: '$y\' = x^{1/2}$. $L = \\int_0^3 \\sqrt{1 + x}\\,dx = \\frac{2}{3}(1+x)^{3/2}|_0^3 = \\frac{2}{3}(8 - 1) = 14/3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The volume of the solid generated when the region bounded by $y = 1/x$, $y = 0$, $x = 1$, $x = 4$ is rotated about the $x$-axis is',
    options: ['$\\pi/4$', '$\\dfrac{3\\pi}{4}$', '$\\pi \\ln 4$', '$3\\pi$'],
    correctAnswer: 1,
    explanation: 'Disks: $V = \\pi\\int_1^4 (1/x)^2\\,dx = \\pi[-1/x]_1^4 = \\pi(-1/4 + 1) = 3\\pi/4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'A particle moves along the $x$-axis with velocity $v(t) = 4 - t^2$. The total distance traveled from $t = 0$ to $t = 3$ is',
    options: ['$23/3$', '$3$', '$5$', '$23$'],
    correctAnswer: 0,
    explanation: '$v > 0$ on $[0, 2]$, $v < 0$ on $[2, 3]$. Distance $= \\int_0^2 (4-t^2)dt + \\int_2^3 (t^2-4)dt = (8-8/3) + (9-12-(8/3 - 8)) = 16/3 + 7/3 = 23/3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The average value of $f(x) = e^x$ on $[0, \\ln 4]$ is',
    options: ['$\\dfrac{3}{\\ln 4}$', '$\\dfrac{4}{\\ln 4}$', '$\\dfrac{e^4 - 1}{\\ln 4}$', '$\\ln 4$'],
    correctAnswer: 0,
    explanation: '$\\bar f = \\frac{1}{\\ln 4}\\int_0^{\\ln 4} e^x\\,dx = \\frac{1}{\\ln 4}(4 - 1) = \\frac{3}{\\ln 4}$.',
  },

  /* ============== PART B — CALCULATOR (15) ============== */

  /* ---- U9: Parametric/Polar/Vector (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'For the parametric curve $x = t^2, y = t^3 - 3t$, $\\dfrac{dy}{dx}$ at $t = 2$ is',
    options: ['$9/4$', '$3/4$', '$3$', '$12$'],
    correctAnswer: 0,
    explanation: '$dy/dx = (dy/dt)/(dx/dt) = (3t^2 - 3)/(2t)$. At $t=2$: $(12-3)/4 = 9/4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'The speed of a particle with position $\\vec r(t) = \\langle \\cos t, \\sin t \\rangle$ at $t = \\pi/3$ is',
    options: ['$0$', '$1$', '$\\sqrt 2$', '$\\pi/3$'],
    correctAnswer: 1,
    explanation: '$\\vec r\'(t) = \\langle -\\sin t, \\cos t\\rangle$. Speed $= \\sqrt{\\sin^2 t + \\cos^2 t} = 1$ for all $t$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'The arc length of the parametric curve $x = t, y = t^{3/2}$ for $0 \\le t \\le 4$ is',
    options: [
      '$\\int_0^4 \\sqrt{1 + (3/2)t^{1/2}}\\,dt$',
      '$\\int_0^4 \\sqrt{1 + (9/4)t}\\,dt$',
      '$\\int_0^4 (1 + (9/4)t)\\,dt$',
      '$\\int_0^4 \\sqrt{(3/2)^2 t}\\,dt$',
    ],
    correctAnswer: 1,
    explanation: '$L = \\int \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt = \\int_0^4 \\sqrt{1 + ((3/2)t^{1/2})^2}\\,dt = \\int_0^4 \\sqrt{1 + (9/4)t}\\,dt$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'The area enclosed by one petal of the rose $r = 2\\sin(3\\theta)$ is',
    options: ['$\\pi/3$', '$\\pi/6$', '$2\\pi/3$', '$\\pi$'],
    correctAnswer: 0,
    explanation: 'One petal traced for $\\theta \\in [0, \\pi/3]$. $A = \\frac{1}{2}\\int_0^{\\pi/3} 4\\sin^2(3\\theta)\\,d\\theta = 2 \\cdot \\frac{1}{2}\\int_0^{\\pi/3}(1-\\cos 6\\theta)d\\theta = [\\theta - \\sin(6\\theta)/6]_0^{\\pi/3} = \\pi/3 - 0 = \\pi/3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'Convert the polar point $(r, \\theta) = (2, 5\\pi/6)$ to rectangular coordinates.',
    options: ['$(\\sqrt 3, 1)$', '$(-\\sqrt 3, 1)$', '$(-1, \\sqrt 3)$', '$(1, -\\sqrt 3)$'],
    correctAnswer: 1,
    explanation: '$x = 2\\cos(5\\pi/6) = 2(-\\sqrt 3/2) = -\\sqrt 3$. $y = 2\\sin(5\\pi/6) = 2(1/2) = 1$.',
  },

  /* ---- U10: Series (6) ---- */
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The series $\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2}$',
    options: [
      'converges by the $p$-series test ($p = 2 > 1$).',
      'diverges by the $p$-series test ($p = 2$).',
      'converges by the alternating series test.',
      'diverges by the divergence test.',
    ],
    correctAnswer: 0,
    explanation: '$p$-series with $p = 2 > 1$ converges (sum is $\\pi^2/6$, but BC just needs convergence).',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The geometric series $\\sum_{n=0}^{\\infty} (2/3)^n$ converges to',
    options: ['$2/3$', '$3/2$', '$3$', '$\\infty$'],
    correctAnswer: 2,
    explanation: '$|r| = 2/3 < 1$. Sum $= 1/(1-r) = 1/(1/3) = 3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'For what values of $x$ does $\\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}$ converge?',
    options: ['$|x| < 1$', '$|x| \\le 1$', '$x = 0$ only', 'All real $x$'],
    correctAnswer: 3,
    explanation: 'Ratio test: $\\lim |a_{n+1}/a_n| = \\lim |x|/(n+1) = 0 < 1$ for all $x$. Converges everywhere. (This is the Maclaurin series for $e^x$.)',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The Maclaurin series for $\\sin x$ begins',
    options: [
      '$1 - x^2/2 + x^4/24 - \\cdots$',
      '$x - x^3/6 + x^5/120 - \\cdots$',
      '$x + x^3/6 + x^5/120 + \\cdots$',
      '$1 + x + x^2/2 + \\cdots$',
    ],
    correctAnswer: 1,
    explanation: 'Standard Maclaurin: $\\sin x = x - x^3/3! + x^5/5! - \\cdots = x - x^3/6 + x^5/120 - \\cdots$.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The interval of convergence of $\\sum_{n=1}^{\\infty} \\dfrac{(x-2)^n}{n}$ is',
    options: ['$(1, 3)$', '$[1, 3)$', '$(1, 3]$', '$[1, 3]$'],
    correctAnswer: 1,
    explanation: 'Ratio: $|x-2| < 1 \\Rightarrow 1 < x < 3$. Endpoints: $x=1$ → $\\sum (-1)^n/n$ converges (alternating); $x=3$ → $\\sum 1/n$ diverges (harmonic). Interval is $[1, 3)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'Using the Maclaurin polynomial of degree 2 for $f(x) = e^x$, $e^{0.1} \\approx$',
    options: ['$1.0$', '$1.1$', '$1.105$', '$1.11$'],
    correctAnswer: 2,
    explanation: '$P_2(x) = 1 + x + x^2/2$. $P_2(0.1) = 1 + 0.1 + 0.005 = 1.105$.',
  },

  /* ---- mixed calculator-allowed (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Using a calculator, $\\displaystyle\\int_0^2 \\dfrac{\\sin x}{1 + x}\\,dx \\approx$',
    options: ['$0.40$', '$0.61$', '$0.84$', '$1.20$'],
    correctAnswer: 1,
    explanation: 'Numerical integration: $\\approx 0.610$.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Use Euler\'s method with $\\Delta x = 0.5$ to approximate $y(2)$ for $y\' = x + y$, $y(1) = 1$.',
    options: ['$2.5$', '$3.5$', '$3.75$', '$4.5$'],
    correctAnswer: 2,
    explanation: 'Step 1: $y_1 = 1 + 0.5(1 + 1) = 2$ at $x = 1.5$. Step 2: $y_2 = 2 + 0.5(1.5 + 2) = 2 + 1.75 = 3.75$ at $x = 2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'A particle has position $x(t) = \\cos(t^2)$, $y(t) = \\sin(t^2)$. Speed at $t = 1$ equals',
    options: ['$1$', '$2$', '$\\sqrt 2$', '$\\pi$'],
    correctAnswer: 1,
    explanation: '$x\'(t) = -2t\\sin(t^2)$, $y\'(t) = 2t\\cos(t^2)$. Speed $= \\sqrt{4t^2(\\sin^2 + \\cos^2)} = 2|t|$. At $t=1$: $2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The Lagrange error bound when approximating $\\sin(0.2)$ by the third-degree Maclaurin polynomial $P_3(x) = x - x^3/6$ satisfies $|R_3(0.2)| \\le$',
    options: ['$\\dfrac{(0.2)^4}{24}$', '$\\dfrac{(0.2)^4}{4!}$', '$\\dfrac{(0.2)^5}{120}$', 'Both A/B (equivalent)'],
    correctAnswer: 3,
    explanation: 'Lagrange: $|R_3(x)| \\le \\frac{M|x|^4}{4!}$ where $M = \\max|f^{(4)}|$. For $\\sin x$, $|f^{(4)}|=|\\sin x|\\le 1$. So bound $= (0.2)^4/24 = (0.2)^4/4!$. A and B are the same.',
  },
]
