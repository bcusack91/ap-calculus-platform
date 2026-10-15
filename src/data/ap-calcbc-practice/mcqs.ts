import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Calculus BC — 42 MCQs across all 10 units, matching the May 2027 exam's Section I.
 * Distribution mirrors the CED unit weighting (BC adds Units 9 & 10 + extra integration techniques in U6):
 *   U1 Limits & Continuity                         (3)
 *   U2 Differentiation: Definition & Properties    (3)
 *   U3 Differentiation: Composite/Implicit/Inverse (2)
 *   U4 Contextual Apps of Differentiation          (3)
 *   U5 Analytical Apps of Differentiation          (4)
 *   U6 Integration & Accumulation                  (8)  [BC adds parts, partial fractions, improper]
 *   U7 Differential Equations                      (3)  [BC adds Euler's method]
 *   U8 Applications of Integration                 (3)  [BC adds arc length]
 *   U9 Parametric, Polar, Vector-Valued            (5)
 *   U10 Infinite Sequences & Series                (8)
 *
 * Section I Part A (Q1–Q29): 29 questions, NO calculator, 62 minutes.
 * Section I Part B (Q30–Q42): 13 questions, graphing calculator allowed (some REQUIRE one), 38 minutes.
 */

export const MCQS: MCQItem[] = [
  /* ============== PART A — NO CALCULATOR (Q1–Q29, 29 questions) ============== */

  /* ---- U1 (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: '$\\lim_{x \\to 0} \\dfrac{1 - \\cos(2x)}{x^2} =$',
    options: ['$0$', '$\\dfrac{1}{2}$', '$2$', '$4$'],
    correctAnswer: 2,
    explanation: 'Since $1-\\cos(2x)=2\\sin^2 x$, the expression is $2\\left(\\frac{\\sin x}{x}\\right)^2\\to 2$; two applications of L\'Hôpital\'s rule give the same result. The value $\\frac{1}{2}$ uses $\\lim\\frac{1-\\cos u}{u^2}=\\frac{1}{2}$ without accounting for $u=2x$, which multiplies the limit by $4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: '$\\lim_{x \\to \\infty} \\dfrac{\\ln x}{\\sqrt x} =$',
    options: ['$0$', '$\\dfrac{1}{2}$', '$2$', '$\\infty$'],
    correctAnswer: 0,
    explanation: 'L\'Hôpital\'s rule gives $\\frac{1/x}{1/(2\\sqrt x)}=\\frac{2}{\\sqrt x}\\to 0$, so $\\sqrt x$ grows faster than $\\ln x$. Answering $\\infty$ assumes that because both numerator and denominator grow without bound, the quotient must too.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'For what value of $k$ is $f(x)=\\begin{cases} kx + 1 & x \\le 2 \\\\ x^2 - 1 & x > 2 \\end{cases}$ continuous everywhere?',
    options: ['$k = 1$', '$k = \\dfrac{3}{2}$', '$k = 2$', '$k = 3$'],
    correctAnswer: 0,
    explanation: 'Both pieces are polynomials, so only $x=2$ matters: $2k+1=2^2-1=3$ gives $k=1$. Setting $2k=3$ and getting $k=\\frac{3}{2}$ drops the $+1$ from the left-hand piece.',
  },

  /* ---- U2 (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = \\tan x$, then $f\'(\\pi/4) =$',
    options: ['$1$', '$2$', '$\\sqrt 2$', '$\\dfrac{1}{2}$'],
    correctAnswer: 1,
    explanation: '$f\'(x)=\\sec^2 x$, and $\\sec(\\pi/4)=\\sqrt 2$, so $f\'(\\pi/4)=2$. The value $1$ is $\\tan(\\pi/4)$, the function value rather than the derivative.',
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
    explanation: 'By the chain rule, $\\frac{1}{2\\sqrt{x^2+5}}\\cdot 2x=\\frac{x}{\\sqrt{x^2+5}}$. Keeping the $2x$ without the $\\frac{1}{2}$ from the power rule gives the expression with $2x$ on top, which is twice the derivative.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x) = x \\ln x$ and $g(x) = e^x$, then $\\dfrac{d}{dx}[f(g(x))]$ at $x = 0$ equals',
    options: ['$0$', '$1$', '$e$', '$2$'],
    correctAnswer: 1,
    explanation: 'Here $f\'(u)=\\ln u+1$, $g(0)=1$, and $g\'(0)=1$, so the chain rule gives $f\'(g(0))\\,g\'(0)=(\\ln 1+1)(1)=1$. The value $2$ comes from evaluating $f\'$ at $e$ instead of at $g(0)=1$.',
  },

  /* ---- U3 (2) ---- */
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
    explanation: 'Differentiating implicitly, $\\cos(xy)(y+xy\')=1$, so $xy\'\\cos(xy)=1-y\\cos(xy)$ and $y\'=\\frac{1-y\\cos(xy)}{x\\cos(xy)}$. The version with $y\\cos(xy)-1$ on top has the sign reversed from moving the term to the wrong side.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'If $y = \\arcsin(2x)$, then $\\dfrac{dy}{dx} =$',
    options: ['$\\dfrac{2}{\\sqrt{1-4x^2}}$', '$\\dfrac{1}{\\sqrt{1-4x^2}}$', '$\\dfrac{2}{\\sqrt{1-x^2}}$', '$\\dfrac{1}{\\sqrt{1-2x^2}}$'],
    correctAnswer: 0,
    explanation: 'With $u=2x$, $\\frac{d}{dx}\\arcsin u=\\frac{u\'}{\\sqrt{1-u^2}}=\\frac{2}{\\sqrt{1-4x^2}}$. Dropping the chain factor $u\'=2$ leaves $\\frac{1}{\\sqrt{1-4x^2}}$, which is only half the derivative.',
  },

  /* ---- U4 (2) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle has position $x(t) = t^3 - 9t^2 + 24t$ for $t \\ge 0$. The particle changes direction at',
    options: ['$t = 2$ only', '$t = 4$ only', '$t = 2$ and $t = 4$', '$t = 3$ only'],
    correctAnswer: 2,
    explanation: '$v(t)=3t^2-18t+24=3(t-2)(t-4)$ changes sign at both $t=2$ and $t=4$, so the particle reverses direction at each. The time $t=3$ is where the acceleration $a(t)=6t-18$ is zero, which does not mark a change in direction.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: '$\\lim_{x \\to 0^+} x \\ln x =$',
    options: ['$-\\infty$', '$0$', '$-\\dfrac{1}{e}$', '$\\infty$'],
    correctAnswer: 1,
    explanation: 'Rewrite the $0\\cdot(-\\infty)$ form as $\\frac{\\ln x}{1/x}$; L\'Hôpital\'s rule gives $\\frac{1/x}{-1/x^2}=-x\\to 0$. The value $-\\frac{1}{e}$ is the minimum of $x\\ln x$ (at $x=\\frac{1}{e}$), not its limit as $x\\to 0^+$.',
  },

  /* ---- U5 (2) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On $[0, 2\\pi]$, $f(x) = x + 2\\cos x$ has critical points at',
    options: ['$x = \\pi/6, 5\\pi/6$', '$x = \\pi/3, 5\\pi/3$', '$x = \\pi/2, 3\\pi/2$', '$x = 7\\pi/6, 11\\pi/6$'],
    correctAnswer: 0,
    explanation: '$f\'(x)=1-2\\sin x=0$ gives $\\sin x=\\frac{1}{2}$, so $x=\\pi/6$ and $5\\pi/6$. The angles $7\\pi/6$ and $11\\pi/6$ solve $\\sin x=-\\frac{1}{2}$, which results from a sign error in differentiating $\\cos x$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Let $f(x) = e^{-x^2}$. The graph of $f$ has points of inflection at',
    options: ['$x = 0$', '$x = \\pm 1$', '$x = \\pm 1/\\sqrt 2$', '$x = \\pm \\sqrt 2$'],
    correctAnswer: 2,
    explanation: '$f\'(x)=-2xe^{-x^2}$ and $f\'\'(x)=(4x^2-2)e^{-x^2}$, which changes sign where $4x^2=2$, so $x=\\pm\\frac{1}{\\sqrt 2}$. The point $x=0$ is where $f\'=0$, a maximum rather than an inflection point.',
  },

  /* ---- U6 (7) - includes BC techniques ---- */
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int x e^x\\,dx =$',
    options: ['$e^x - xe^x + C$', '$xe^x - e^x + C$', '$\\dfrac{x^2 e^x}{2} + C$', '$e^x(x+1) + C$'],
    correctAnswer: 1,
    explanation: 'Integration by parts with $u=x$ and $dv=e^x\\,dx$ gives $xe^x-\\int e^x\\,dx=xe^x-e^x+C$. The form $e^x(x+1)+C$ adds the second term instead of subtracting it; differentiating it gives $xe^x+2e^x$, not $xe^x$, and $e^x-xe^x$ reverses the parts formula.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int \\dfrac{2x+3}{x^2+x}\\,dx =$',
    options: [
      '$3\\ln|x| - 2\\ln|x+1| + C$',
      '$\\ln|x^2+x| + C$',
      '$3\\ln|x| - \\ln|x+1| + C$',
      '$3\\ln|x| + 2\\ln|x+1| + C$',
    ],
    correctAnswer: 2,
    explanation: 'Write $\\frac{2x+3}{x(x+1)}=\\frac{A}{x}+\\frac{B}{x+1}$; then $2x+3=A(x+1)+Bx$ gives $A=3$ and $B=-1$, so the integral is $3\\ln|x|-\\ln|x+1|+C$. The answer $\\ln|x^2+x|$ would require the numerator to be $2x+1$, the derivative of the denominator.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_1^{\\infty} \\dfrac{1}{x^2}\\,dx =$',
    options: ['$1$', '$\\dfrac{1}{2}$', '$\\dfrac{1}{3}$', 'The integral diverges'],
    correctAnswer: 0,
    explanation: '$\\lim_{b\\to\\infty}\\left[-\\frac{1}{x}\\right]_1^b=\\lim_{b\\to\\infty}\\left(1-\\frac{1}{b}\\right)=1$, so the integral converges. The value $\\frac{1}{3}$ comes from raising the power to $x^{-3}$ instead of $x^{-1}$, and the integral does not diverge, because $\\frac{1}{x^2}$ shrinks fast enough as $x\\to\\infty$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_0^1 \\dfrac{1}{\\sqrt x}\\,dx =$',
    options: ['$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$2$', 'The integral diverges'],
    correctAnswer: 2,
    explanation: 'The integral is improper at $0$: $\\lim_{a\\to0^+}[2\\sqrt x]_a^1=2-0=2$, so it converges. The integrand is unbounded near $0$, but that alone does not make the integral diverge, since $x^{-1/2}$ has power less than $1$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int x^2 \\ln x\\,dx =$',
    options: [
      '$\\dfrac{x^3 \\ln x}{3} - \\dfrac{x^3}{9} + C$',
      '$\\dfrac{x^3 \\ln x}{3} + \\dfrac{x^3}{9} + C$',
      '$\\dfrac{x^3 \\ln x}{3} - \\dfrac{x^3}{3} + C$',
      '$\\dfrac{x^3}{3 \\ln x} + C$',
    ],
    correctAnswer: 0,
    explanation: 'With $u=\\ln x$ and $dv=x^2\\,dx$, parts gives $\\frac{x^3}{3}\\ln x-\\int\\frac{x^3}{3}\\cdot\\frac{1}{x}\\,dx=\\frac{x^3\\ln x}{3}-\\frac{x^3}{9}+C$. The $-\\frac{x^3}{3}$ version forgets to integrate $\\frac{x^2}{3}$, which divides by another $3$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'If $g(x) = \\displaystyle\\int_1^{x^2}\\sin(t)\\,dt$, then $g\'(x) =$',
    options: ['$2x\\sin(x^2)$', '$\\sin(x^2)$', '$\\sin(x^2) - \\sin(1)$', '$2x\\sin(x^2) - \\sin(1)$'],
    correctAnswer: 0,
    explanation: 'By the Fundamental Theorem with the chain rule, $g\'(x)=\\sin(x^2)\\cdot\\frac{d}{dx}(x^2)=2x\\sin(x^2)$; the constant lower limit contributes nothing. The answer $\\sin(x^2)$ forgets to multiply by the derivative of the upper limit $x^2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle\\int_0^{\\pi/4} \\sec^2 x\\,dx =$',
    options: ['$1$', '$\\sqrt 2$', '$\\sqrt 2 - 1$', '$\\dfrac{2\\sqrt 2 - 1}{3}$'],
    correctAnswer: 0,
    explanation: 'Since $\\frac{d}{dx}\\tan x=\\sec^2 x$, the integral is $\\tan(\\pi/4)-\\tan 0=1$. The value $\\frac{2\\sqrt2-1}{3}$ applies the power rule to $\\sec^2 x$ as if it were $u^2$ with $du=dx$.',
  },

  /* ---- U7 (2) ---- */
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'The general solution to $\\dfrac{dy}{dx} = 2xy^2$ is',
    options: ['$y = -\\dfrac{1}{x^2 + C}$', '$y = \\dfrac{1}{x^2 + C}$', '$y = C - \\dfrac{1}{x^2}$', '$y = Ce^{x^2}$'],
    correctAnswer: 0,
    explanation: 'Separating gives $\\frac{dy}{y^2}=2x\\,dx$, so $-\\frac{1}{y}=x^2+C$ and $y=-\\frac{1}{x^2+C}$. Dropping the negative sign from $\\int y^{-2}\\,dy=-y^{-1}$ gives the positive version, which does not satisfy the equation.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Which differential equation has a slope field with horizontal segments exactly along the line $y = x$ and positive slopes at every point below that line?',
    options: ['$\\dfrac{dy}{dx} = y - x$', '$\\dfrac{dy}{dx} = x - y$', '$\\dfrac{dy}{dx} = y + x$', '$\\dfrac{dy}{dx} = xy$'],
    correctAnswer: 1,
    explanation: 'For $\\frac{dy}{dx}=x-y$, slopes are $0$ where $y=x$ and positive where $y<x$, which is below the line. The equation $\\frac{dy}{dx}=y-x$ also has horizontal segments along $y=x$, but its slopes are negative below the line.',
  },

  /* ---- U8 (1) — arc length ---- */
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The arc length of $y = \\frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$ is',
    options: ['$\\dfrac{14}{3}$', '$7$', '$\\sqrt{21}$', '$2\\sqrt 3$'],
    correctAnswer: 0,
    explanation: 'Since $y\'=x^{1/2}$, $L=\\int_0^3\\sqrt{1+x}\\,dx=\\frac{2}{3}(1+x)^{3/2}\\Big|_0^3=\\frac{2}{3}(8-1)=\\frac{14}{3}$. The value $\\sqrt{21}$ is the straight-line distance between the endpoints, which is always shorter than the curve.',
  },

  /* ---- U9 (2) ---- */
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'For the parametric curve $x = t^2, y = t^3 - 3t$, $\\dfrac{dy}{dx}$ at $t = 2$ is',
    options: ['$\\dfrac{9}{4}$', '$9$', '$12$', '$4$'],
    correctAnswer: 0,
    explanation: '$\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{3t^2-3}{2t}$, which is $\\frac{9}{4}$ at $t=2$. The value $9$ is $\\frac{dy}{dt}$ alone, without dividing by $\\frac{dx}{dt}=4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'The speed of a particle with position $\\vec r(t) = \\langle \\cos t, \\sin t \\rangle$ at $t = \\pi/3$ is',
    options: ['$1$', '$\\dfrac{\\sqrt 3}{2}$', '$\\dfrac{1 + \\sqrt 3}{2}$', '$\\sqrt 2$'],
    correctAnswer: 0,
    explanation: 'The velocity is $\\langle -\\sin t,\\cos t\\rangle$, so the speed is $\\sqrt{\\sin^2 t+\\cos^2 t}=1$ at every $t$. Adding the absolute values of the components, $\\frac{\\sqrt3}{2}+\\frac{1}{2}$, is not how the magnitude of a vector is computed.',
  },

  /* ---- U10 (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'Which statement about the series $\\sum_{n=1}^{\\infty} \\dfrac{1}{n^2}$ is true?',
    options: [
      'It converges, because it is a $p$-series with $p = 2 > 1$.',
      'It converges, because its terms $\\dfrac{1}{n^2}$ approach $0$ as $n \\to \\infty$.',
      'It diverges, because it behaves like the harmonic series $\\sum \\dfrac{1}{n}$.',
      'It diverges, because each partial sum is larger than the one before it.',
    ],
    correctAnswer: 0,
    explanation: 'A $p$-series $\\sum\\frac{1}{n^p}$ converges exactly when $p>1$, and here $p=2$. Terms approaching $0$ is necessary but not sufficient for convergence (the harmonic series is the counterexample), so that reasoning is invalid even though its conclusion happens to be right.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The geometric series $\\sum_{n=0}^{\\infty} \\left(\\dfrac{2}{3}\\right)^n$ converges to',
    options: ['$3$', '$\\dfrac{3}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{3}$'],
    correctAnswer: 0,
    explanation: 'With first term $1$ and ratio $r=\\frac{2}{3}$, the sum is $\\frac{1}{1-r}=\\frac{1}{1/3}=3$. The value $\\frac{1}{3}$ is $1-r$, the denominator, rather than the sum.',
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
    explanation: 'The series is $\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots=x-\\frac{x^3}{6}+\\frac{x^5}{120}-\\cdots$, odd powers with alternating signs. The series starting with $1$ and even powers is the one for $\\cos x$.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The interval of convergence of $\\sum_{n=1}^{\\infty} \\dfrac{(x-2)^n}{n}$ is',
    options: ['$(1, 3)$', '$[1, 3)$', '$(1, 3]$', '$[1, 3]$'],
    correctAnswer: 1,
    explanation: 'The ratio test gives $|x-2|<1$, so $1<x<3$. At $x=1$ the series is $\\sum\\frac{(-1)^n}{n}$, which converges by the alternating series test, while at $x=3$ it is the divergent harmonic series, so the interval is $[1,3)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'Which of the following series converges conditionally?',
    options: [
      '$\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{n}$',
      '$\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{n^2}$',
      '$\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n}{2^n}$',
      '$\\sum_{n=1}^{\\infty} \\dfrac{(-1)^n n}{n+1}$',
    ],
    correctAnswer: 0,
    explanation: 'The alternating harmonic series converges by the alternating series test, but its absolute values form the divergent harmonic series, so the convergence is conditional. The series with $n^2$ in the denominator converges absolutely, since $\\sum\\frac{1}{n^2}$ converges.',
  },

  /* ============== PART B — CALCULATOR ALLOWED (Q30–Q42, 13 questions) ============== */

  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A spherical snowball melts so that its volume decreases at 12 cubic centimeters per minute. When the radius is 5 cm, the rate at which the radius is changing, in cm/min, is',
    options: ['$-\\dfrac{3}{25\\pi}$', '$\\dfrac{3}{25\\pi}$', '$-\\dfrac{3}{5\\pi}$', '$-\\dfrac{3}{125\\pi}$'],
    correctAnswer: 0,
    explanation: 'From $V=\\frac{4}{3}\\pi r^3$, $\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}$, so $-12=4\\pi(25)\\frac{dr}{dt}$ and $\\frac{dr}{dt}=-\\frac{3}{25\\pi}$. The positive value ignores that a melting snowball has a decreasing volume, so $\\frac{dV}{dt}$ must be negative.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'A box with a square base and open top has volume 32 cubic feet. The dimensions that minimize its surface area are (base side, height) =',
    options: ['$(\\sqrt[3]{32}, \\sqrt[3]{32})$', '$(4, 2)$', '$(8, 0.5)$', '$(2\\sqrt 2, 4)$'],
    correctAnswer: 1,
    explanation: 'With $h=\\frac{32}{x^2}$, the surface area is $S=x^2+4xh=x^2+\\frac{128}{x}$, and $S\'=2x-\\frac{128}{x^2}=0$ gives $x=4$, $h=2$. The dimensions $(2\\sqrt2,4)$ also hold $32$ cubic feet but have surface area about $53.3$ square feet, more than the $48$ at $(4,2)$; a cube is optimal only for a closed box.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'If $f(1) = 2$, $f(5) = 10$, and $f$ is continuous on $[1, 5]$ and differentiable on $(1, 5)$, then by the Mean Value Theorem there exists $c \\in (1, 5)$ with $f\'(c) =$',
    options: ['$2$', '$\\dfrac{5}{2}$', '$\\dfrac{8}{5}$', '$\\dfrac{12}{5}$'],
    correctAnswer: 0,
    explanation: 'The theorem guarantees $f\'(c)=\\frac{f(5)-f(1)}{5-1}=\\frac{8}{4}=2$. Dividing by $5$ instead of the interval length $4$ gives $\\frac{8}{5}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'Using a calculator, $\\displaystyle\\int_0^2 \\dfrac{\\sin x}{1 + x}\\,dx \\approx$',
    options: ['$0.28$', '$0.47$', '$0.67$', '$1.42$'],
    correctAnswer: 2,
    explanation: 'Numerical integration gives $\\int_0^2\\frac{\\sin x}{1+x}\\,dx\\approx 0.671$. The value $0.28$ is the integral over $[0,1]$ only, and $1.42$ is $\\int_0^2\\sin x\\,dx$ without the denominator.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'Use Euler\'s method with two steps of size $\\Delta x = 0.5$ to approximate $y(2)$ for $y\' = x + y$, $y(1) = 1$.',
    options: ['$2$', '$3$', '$3.25$', '$3.75$'],
    correctAnswer: 3,
    explanation: 'First step: $y(1.5)\\approx 1+0.5(1+1)=2$. Second step: $y(2)\\approx 2+0.5(1.5+2)=3.75$; reusing the starting slope $2$ for the second step gives $3$ instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The volume of the solid generated when the region bounded by $y = 1/x$, $y = 0$, $x = 1$, $x = 4$ is rotated about the $x$-axis is',
    options: ['$\\dfrac{3\\pi}{4}$', '$\\pi \\ln 4$', '$\\dfrac{3}{4}$', '$2\\pi \\ln 4$'],
    correctAnswer: 0,
    explanation: 'Using disks, $V=\\pi\\int_1^4\\frac{1}{x^2}\\,dx=\\pi\\left[-\\frac{1}{x}\\right]_1^4=\\frac{3\\pi}{4}$. The value $\\pi\\ln 4$ integrates the radius $\\frac{1}{x}$ without squaring it.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'A particle moves along the $x$-axis with velocity $v(t) = 4 - t^2$. The total distance traveled from $t = 0$ to $t = 3$ is',
    options: ['$\\dfrac{23}{3}$', '$3$', '$\\dfrac{16}{3}$', '$\\dfrac{7}{3}$'],
    correctAnswer: 0,
    explanation: 'Velocity is positive on $[0,2)$ and negative on $(2,3]$, so the distance is $\\int_0^2(4-t^2)\\,dt+\\int_2^3(t^2-4)\\,dt=\\frac{16}{3}+\\frac{7}{3}=\\frac{23}{3}$. The value $3$ is the displacement $\\int_0^3 v(t)\\,dt$, where the backward motion cancels part of the forward motion.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'Using a calculator, the arc length of the parametric curve $x = t$, $y = t^{3/2}$ for $0 \\le t \\le 4$ is approximately',
    options: ['$6.87$', '$8.94$', '$9.07$', '$22.00$'],
    correctAnswer: 2,
    explanation: '$L=\\int_0^4\\sqrt{1+\\left(\\frac{3}{2}t^{1/2}\\right)^2}\\,dt=\\int_0^4\\sqrt{1+\\frac{9}{4}t}\\,dt\\approx 9.07$. The value $8.94$ is the straight-line distance from $(0,0)$ to $(4,8)$, which must be shorter than the curve.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'The area enclosed by one petal of the rose $r = 2\\sin(3\\theta)$ is',
    options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{2}{3}$', '$\\pi$'],
    correctAnswer: 0,
    explanation: 'One petal is traced for $0\\le\\theta\\le\\frac{\\pi}{3}$, so $A=\\frac{1}{2}\\int_0^{\\pi/3}4\\sin^2(3\\theta)\\,d\\theta=\\int_0^{\\pi/3}(1-\\cos 6\\theta)\\,d\\theta=\\frac{\\pi}{3}$. Omitting the $\\frac{1}{2}$ in the polar area formula doubles this to $\\frac{2\\pi}{3}$.',
  },
  {
    type: 'mcq',
    topic: 'unit-9-parametric-polar-vector',
    question: 'A particle has position $x(t) = \\cos(t^2)$, $y(t) = \\sin(t^2)$. Its speed at $t = 1$ is',
    options: ['$1$', '$2$', '$\\sqrt 2$', '$4$'],
    correctAnswer: 1,
    explanation: '$x\'(t)=-2t\\sin(t^2)$ and $y\'(t)=2t\\cos(t^2)$, so the speed is $\\sqrt{4t^2}=2|t|$, which is $2$ at $t=1$. The value $1$ forgets the chain-rule factor $2t$, and $4$ is the squared speed.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'Using the Maclaurin polynomial of degree 2 for $f(x) = e^x$, $e^{0.1} \\approx$',
    options: ['$1.105$', '$1.1$', '$1.11$', '$1.01$'],
    correctAnswer: 0,
    explanation: '$P_2(x)=1+x+\\frac{x^2}{2}$, so $P_2(0.1)=1+0.1+0.005=1.105$. The value $1.11$ omits the $2!$ in the denominator of the quadratic term.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'The third-degree Maclaurin polynomial $P_3(x) = x - \\dfrac{x^3}{6}$ is used to approximate $\\sin(0.2)$. Treating $P_3$ as a degree-3 polynomial and using $1$ as the bound on $|f^{(4)}(x)|$, the Lagrange error bound for this approximation is',
    options: ['$\\dfrac{(0.2)^4}{4!}$', '$\\dfrac{(0.2)^3}{3!}$', '$(0.2)^4$', '$\\dfrac{(0.2)^4}{3!}$'],
    correctAnswer: 0,
    explanation: 'For a degree-$n$ polynomial the Lagrange bound is $\\frac{M|x|^{n+1}}{(n+1)!}$, so with $n=3$ and $M=1$ it is $\\frac{(0.2)^4}{4!}$. The expression $\\frac{(0.2)^3}{3!}$ uses the degree of the polynomial instead of the next power, and $(0.2)^4$ leaves out the factorial.',
  },
  {
    type: 'mcq',
    topic: 'unit-10-infinite-series',
    question: 'For what values of $x$ does $\\sum_{n=0}^{\\infty} \\dfrac{x^n}{n!}$ converge?',
    options: ['$|x| < 1$', '$|x| \\le 1$', '$x = 0$ only', '$-\\infty < x < \\infty$'],
    correctAnswer: 3,
    explanation: 'The ratio test gives $\\lim_{n\\to\\infty}\\frac{|x|}{n+1}=0<1$ for every $x$, so the series (the Maclaurin series for $e^x$) converges everywhere. The interval $|x|<1$ is the answer for the geometric series $\\sum x^n$, which lacks the factorial.',
  },
]
