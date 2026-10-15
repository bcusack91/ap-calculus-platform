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
 * Section I Part B (Q30–Q42): 13 questions, graphing calculator allowed (some REQUIRE one), 38 minutes.
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
    question: 'Let $f(x)=\\begin{cases}x^2+1 & x<2\\\\ 4x-3 & x\\ge 2\\end{cases}$. Which statement is true at $x=2$?',
    options: [
      '$f$ is continuous at $x=2$.',
      '$f$ has a removable discontinuity at $x=2$.',
      '$f$ has a jump discontinuity at $x=2$.',
      '$f$ has an infinite discontinuity at $x=2$.',
    ],
    correctAnswer: 0,
    explanation: 'The left-hand limit is $2^2+1=5$, the right-hand limit is $4(2)-3=5$, and $f(2)=5$, so all three agree and $f$ is continuous at $x=2$. A jump discontinuity would require the two one-sided limits to differ, which they do not here.',
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
    options: ['$4x^3 - 4x$', '$4x^3 - 2x + 7$', '$4x^3 - 4x + 7$', '$4x^3 - 4x^2$'],
    correctAnswer: 0,
    explanation: 'Apply the power rule term by term: $4x^3 - 4x$, and the constant $7$ differentiates to $0$. Keeping the $+7$ treats the constant as if it survived differentiation, and $-4x^2$ multiplies by the exponent without lowering it.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'The derivative of $f(x)=\\sin x \\cdot \\cos x$ is',
    options: ['$\\cos^2 x - \\sin^2 x$', '$\\sin^2 x - \\cos^2 x$', '$2\\sin x\\cos x$', '$-\\sin x\\cos x$'],
    correctAnswer: 0,
    explanation: 'By the product rule, $f\'(x)=\\cos x\\cdot\\cos x + \\sin x\\cdot(-\\sin x)=\\cos^2 x-\\sin^2 x$. The answer $-\\sin x\\cos x$ multiplies the two derivatives together, which is not the product rule.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'If $f(x)=\\dfrac{e^x}{x}$, then $f\'(x)=$',
    options: [
      '$e^x$',
      '$\\dfrac{e^x(x-1)}{x^2}$',
      '$\\dfrac{e^x(1-x)}{x^2}$',
      '$\\dfrac{e^x \\cdot x - e^x}{x}$',
    ],
    correctAnswer: 1,
    explanation: 'The quotient rule gives $\\frac{e^x\\cdot x - e^x\\cdot 1}{x^2}=\\frac{e^x(x-1)}{x^2}$. The version with $(1-x)$ subtracts the terms in the wrong order, which flips the sign of the derivative.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-differentiation-definition',
    question: 'The expression $\\lim_{h\\to 0}\\dfrac{(2+h)^3 - 8}{h}$ equals which of the following?',
    options: ['$f\'(0)$ for $f(x)=x^3$', '$f\'(2)$ for $f(x)=x^3$', '$f\'(8)$ for $f(x)=x^3$', '$f(2)$ for $f(x)=x^3$'],
    correctAnswer: 1,
    explanation: 'This is $\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$ with $f(x)=x^3$ and $a=2$, since $f(2)=8$; it equals $f\'(2)=12$. Reading the $8$ as the input confuses the function value $f(2)$ with the point where the derivative is taken.',
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
    question: 'For the curve $x^2 + y^2 = 25$, the slope of the tangent line at the point $(3, 4)$ is',
    options: ['$\\dfrac{3}{4}$', '$-\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$-\\dfrac{4}{3}$'],
    correctAnswer: 1,
    explanation: 'Differentiating implicitly, $2x+2y\\,y\'=0$, so $y\'=-\\frac{x}{y}=-\\frac{3}{4}$ at $(3,4)$. The value $\\frac{4}{3}$ is the slope of the radius to that point, which is perpendicular to the tangent.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Let $f$ be a one-to-one differentiable function with $f(2)=5$ and $f\'(2)=3$. Then $(f^{-1})\'(5)=$',
    options: ['$2$', '$3$', '$\\dfrac{1}{3}$', '$5$'],
    correctAnswer: 2,
    explanation: 'Because $f(2)=5$, the inverse rule gives $(f^{-1})\'(5)=\\frac{1}{f\'(2)}=\\frac{1}{3}$. Answering $3$ uses the slope of $f$ itself instead of its reciprocal.',
  },

  /* ---- U4: Contextual Apps of Differentiation (3) ---- */
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'The linear approximation $L(x)$ of $f(x)=\\sqrt{x}$ at $x=4$ is',
    options: ['$L(x) = 2 + \\dfrac{1}{4}(x-4)$', '$L(x) = 2 + \\dfrac{1}{2}(x-4)$', '$L(x) = 4 + \\dfrac{1}{4}(x-4)$', '$L(x) = 2 + \\dfrac{1}{4}(x+4)$'],
    correctAnswer: 0,
    explanation: 'Here $f(4)=2$ and $f\'(x)=\\frac{1}{2\\sqrt x}$, so $f\'(4)=\\frac{1}{4}$ and $L(x)=2+\\frac{1}{4}(x-4)$. The slope $\\frac{1}{2}$ comes from forgetting the $\\sqrt{4}$ in the denominator of $f\'(4)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'Use L\'Hôpital\'s rule (if applicable) to find $\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^2}$.',
    options: ['$0$', '$\\dfrac{1}{2}$', '$1$', 'The limit does not exist'],
    correctAnswer: 1,
    explanation: 'The form is $\\frac{0}{0}$; one application gives $\\frac{\\sin x}{2x}$, still $\\frac{0}{0}$, and a second gives $\\frac{\\cos x}{2}\\to\\frac{1}{2}$. Stopping after the first step and treating $\\frac{\\sin x}{2x}$ as $0$ leads to the wrong value $0$.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle moving along the $x$-axis has velocity $v(t)=t^2-4t+3$. At $t=0.5$, the particle is',
    options: [
      'slowing down, because $v(0.5)$ and $a(0.5)$ have opposite signs',
      'speeding up, because $v(0.5)$ and $a(0.5)$ are both positive at that instant',
      'speeding up, because $v(0.5)>0$ means the particle is moving to the right',
      'changing direction, because $a(0.5)<0$ means the velocity is decreasing',
    ],
    correctAnswer: 0,
    explanation: '$v(0.5)=0.25-2+3=1.25>0$ and $a(t)=2t-4$ gives $a(0.5)=-3<0$; opposite signs mean the speed is decreasing. Moving to the right only tells the direction of motion, not whether the speed is increasing.',
  },

  /* ---- U5: Analytical Apps of Differentiation (4) ---- */
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On what intervals is $f(x) = x^3 - 3x^2 - 9x + 5$ increasing?',
    options: ['$(-\\infty, -1) \\cup (3, \\infty)$', '$(-1, 3)$', '$(-\\infty, -3) \\cup (1, \\infty)$', '$(-1, \\infty)$'],
    correctAnswer: 0,
    explanation: '$f\'(x)=3x^2-6x-9=3(x-3)(x+1)$, which is positive for $x<-1$ and for $x>3$. Factoring as $3(x+3)(x-1)$ is a sign error that moves both critical points, and on $(-1,3)$ the derivative is negative, so $f$ decreases there.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'On the closed interval $[-2, 3]$, the absolute maximum value of $f(x)=x^2 - 2x$ occurs at',
    options: ['$x = -2$', '$x = 1$', '$x = 3$', '$x = -2$ and $x = 3$'],
    correctAnswer: 0,
    explanation: 'The only critical point is $x=1$ with $f(1)=-1$; the endpoints give $f(-2)=8$ and $f(3)=3$, so the maximum is at $x=-2$. The critical point $x=1$ is where the absolute minimum occurs, not the maximum.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'By the Mean Value Theorem, there exists $c \\in (1, 4)$ such that $f\'(c)=\\dfrac{f(4)-f(1)}{3}$ for $f(x)=x^2$. Find $c$.',
    options: ['$c = 5$', '$c = 2$', '$c = 2.5$', '$c = 3$'],
    correctAnswer: 2,
    explanation: 'The average rate of change is $\\frac{16-1}{3}=5$, and $f\'(c)=2c=5$ gives $c=2.5$. Answering $c=5$ reports the slope itself rather than the input where the derivative takes that slope, and $5$ is not even in $(1,4)$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'A rectangle with one side on the $x$-axis is inscribed under the parabola $y = 9 - x^2$, with its upper corners on the parabola. The maximum area of such a rectangle is',
    options: ['$12\\sqrt{3}$', '$6\\sqrt{3}$', '$24$', '$18$'],
    correctAnswer: 0,
    explanation: 'With corners at $(\\pm x, 9-x^2)$, the area is $A=2x(9-x^2)=18x-2x^3$, and $A\'=18-6x^2=0$ gives $x=\\sqrt 3$, so $A=2\\sqrt3\\cdot 6=12\\sqrt3$. Using $x$ instead of $2x$ for the width gives $6\\sqrt3$, half the true area.',
  },

  /* ---- U6: Integration & Accumulation (5) ---- */
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle \\int (3x^2 + 4x - 1)\\,dx =$',
    options: ['$x^3 + 2x^2 - x + C$', '$x^3 + 4x^2 - x + C$', '$3x^3 + 4x^2 - x + C$', '$\\dfrac{x^3}{3} + 2x^2 - x + C$'],
    correctAnswer: 0,
    explanation: 'Integrate term by term: $\\int 3x^2\\,dx=x^3$, $\\int 4x\\,dx=2x^2$, and $\\int -1\\,dx=-x$. Writing $4x^2$ raises the power but forgets to divide by the new exponent $2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: '$\\displaystyle \\int 2x(x^2+1)^4\\,dx =$',
    options: ['$\\dfrac{(x^2+1)^5}{5} + C$', '$\\dfrac{(x^2+1)^5}{10} + C$', '$\\dfrac{x^2(x^2+1)^5}{5} + C$', '$\\dfrac{2x(x^2+1)^5}{5} + C$'],
    correctAnswer: 0,
    explanation: 'Let $u=x^2+1$, so $du=2x\\,dx$ and the integral becomes $\\int u^4\\,du=\\frac{u^5}{5}+C$. Dividing by $10$ divides by the $2$ from $du$ a second time, even though the $2x$ is already present in the integrand.',
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
    options: ['$0$', '$-2$', '$-4$', '$-8$'],
    correctAnswer: 0,
    explanation: 'The integrand is odd, so its integral over the symmetric interval $[-2,2]$ is $0$; directly, $F(x)=\\frac{x^4}{4}-\\frac{3x^2}{2}$ gives $F(2)-F(-2)=-2-(-2)=0$. Answering $-4$ doubles the integral over $[0,2]$, which is valid only for even functions.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    question: 'The average value of $f(x) = \\sin x$ on $[0, \\pi]$ is',
    options: ['$0$', '$\\dfrac{1}{\\pi}$', '$\\dfrac{2}{\\pi}$', '$2$'],
    correctAnswer: 2,
    explanation: 'Average value $=\\frac{1}{\\pi}\\int_0^{\\pi}\\sin x\\,dx=\\frac{1}{\\pi}[-\\cos x]_0^{\\pi}=\\frac{2}{\\pi}$. The value $2$ is the integral itself, before dividing by the interval length $\\pi$.',
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
      'Slopes are 0 along the $x$-axis, positive above it, negative below it.',
      'Slopes are 0 along the $y$-axis, positive to the right, negative to the left.',
      'Slopes are 0 along the line $y=x$, positive above it, negative below it.',
      'Slopes are 0 along both axes, positive in Quadrants I and III, negative in II and IV.',
    ],
    correctAnswer: 0,
    explanation: 'Since $\\frac{dy}{dx}=y$ depends only on $y$, slopes are $0$ where $y=0$ (the $x$-axis), positive for $y>0$, and negative for $y<0$. Zero slopes along the $y$-axis would describe $\\frac{dy}{dx}=x$ instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-differential-equations',
    question: 'A bacteria population grows according to $\\dfrac{dP}{dt}=0.4P$ with $P(0)=200$. The population at time $t$ is',
    options: ['$P(t)=200 + 0.4t$', '$P(t)=200e^{0.4t}$', '$P(t)=200(1.4)^t$', '$P(t)=80e^{0.4t}$'],
    correctAnswer: 1,
    explanation: 'A rate proportional to $P$ gives exponential growth $P(t)=P_0e^{kt}=200e^{0.4t}$. The form $200(1.4)^t$ treats $0.4$ as a discrete percent increase per unit time, which does not satisfy $\\frac{dP}{dt}=0.4P$.',
  },

  /* ---- U8: Applications of Integration (2) ---- */
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'A particle has velocity $v(t)=3t^2 - 6t$. The total displacement from $t=0$ to $t=3$ is',
    options: ['$0$', '$4$', '$8$', '$-4$'],
    correctAnswer: 0,
    explanation: 'Displacement is $\\int_0^3(3t^2-6t)\\,dt=[t^3-3t^2]_0^3=27-27=0$. The value $8$ is the total distance traveled, $\\int_0^3|v(t)|\\,dt$, which counts the backward motion on $(0,2)$ as positive.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The volume of the solid with semicircular cross sections perpendicular to the $x$-axis whose diameters lie under $y=x$ from $x=0$ to $x=2$ is',
    options: ['$\\dfrac{\\pi}{3}$', '$\\dfrac{2\\pi}{3}$', '$\\dfrac{4\\pi}{3}$', '$\\dfrac{8\\pi}{3}$'],
    correctAnswer: 0,
    explanation: 'The diameter is $x$, so the radius is $\\frac{x}{2}$ and each cross section has area $\\frac{1}{2}\\pi\\left(\\frac{x}{2}\\right)^2=\\frac{\\pi x^2}{8}$; then $V=\\int_0^2\\frac{\\pi x^2}{8}\\,dx=\\frac{\\pi}{3}$. Using a full circle of radius $\\frac{x}{2}$ doubles this to $\\frac{2\\pi}{3}$.',
  },

  /* ============== PART B — CALCULATOR ALLOWED (Q30–Q42, 13 questions) ============== */

  /* mixed across units */
  {
    type: 'mcq',
    topic: 'unit-1-limits-continuity',
    question: 'Find $\\lim_{x\\to 0}\\dfrac{e^x - 1 - x}{x^2}$.',
    options: ['$0$', '$0.5$', '$1$', 'The limit does not exist'],
    correctAnswer: 1,
    explanation: 'Applying L\'Hôpital\'s rule twice gives $\\lim\\frac{e^x-1}{2x}=\\lim\\frac{e^x}{2}=\\frac{1}{2}$. The $\\frac{0}{0}$ form is indeterminate, not a sign that the limit fails to exist.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-composite-implicit-inverse',
    question: 'Let $f(x)=\\sqrt{x^2+9}$. Use a calculator to find $f\'(4)$ to three decimals.',
    options: ['$0.100$', '$0.800$', '$1.600$', '$5.000$'],
    correctAnswer: 1,
    explanation: '$f\'(x)=\\frac{x}{\\sqrt{x^2+9}}$, so $f\'(4)=\\frac{4}{5}=0.800$. The value $0.100$ is $\\frac{1}{2\\sqrt{25}}$, which omits the inner derivative $2x$ from the chain rule.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    question: 'A particle moves along a line with velocity $v(t) = t^2 - 4\\sin t$ for $0 \\le t \\le 4$. Using a calculator, the speed of the particle is greatest at approximately',
    options: ['$t \\approx 0.50$', '$t \\approx 1.03$', '$t \\approx 1.93$', '$t \\approx 4.00$'],
    correctAnswer: 3,
    explanation: 'Speed is $|v(t)|$; it has an interior local maximum of about $|v(1.03)|\\approx 2.37$, but at the endpoint $v(4)=16-4\\sin 4\\approx 19.03$, which is far larger. Stopping at $t\\approx1.03$, where $a(t)=0$, ignores the endpoints of the interval.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'Let $f(x)= x^3 - 3x^2 + 2$. The graph of $f$ has a point of inflection at $x=$',
    options: ['$0$', '$1$', '$2$', '$3$'],
    correctAnswer: 1,
    explanation: '$f\'\'(x)=6x-6$ is zero at $x=1$ and changes sign there, so $(1,0)$ is an inflection point. The values $0$ and $2$ are the critical points, where $f\'(x)=3x^2-6x$ is zero.',
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
    question: 'The area of the region bounded by $y=\\sin x$ and $y=\\cos x$ on $[0, \\pi/4]$ is',
    options: ['$\\sqrt 2 - 1$', '$1 - \\dfrac{\\sqrt 2}{2}$', '$\\dfrac{\\sqrt 2}{2}$', '$1$'],
    correctAnswer: 0,
    explanation: 'On $[0,\\pi/4]$, $\\cos x\\ge\\sin x$, so $A=\\int_0^{\\pi/4}(\\cos x-\\sin x)\\,dx=[\\sin x+\\cos x]_0^{\\pi/4}=\\sqrt2-1$. The value $1$ comes from using $-\\cos x$ as the antiderivative of $-\\sin x$.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'The region bounded by $y=\\sqrt x$, $y=0$, and $x=4$ is revolved about the $y$-axis. The volume of the resulting solid is',
    options: ['$\\dfrac{128\\pi}{5}$', '$\\dfrac{32\\pi}{5}$', '$\\dfrac{64\\pi}{5}$', '$8\\pi$'],
    correctAnswer: 0,
    explanation: 'Using washers in $y$ from $0$ to $2$, the outer radius is $4$ and the inner radius is $x=y^2$, so $V=\\pi\\int_0^2(16-y^4)\\,dy=\\pi\\left(32-\\frac{32}{5}\\right)=\\frac{128\\pi}{5}$. The value $8\\pi$ is the volume when the same region is revolved about the $x$-axis instead.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-contextual-applications-differentiation',
    stimulus: 'A 13-foot ladder leans against a wall. The bottom of the ladder is being pulled away from the wall at 2 ft/s.',
    question: 'When the bottom is 5 feet from the wall, how fast is the top sliding down the wall (in ft/s)?',
    options: ['$\\dfrac{5}{6}$', '$\\dfrac{5}{12}$', '$\\dfrac{24}{5}$', '$\\dfrac{10}{13}$'],
    correctAnswer: 0,
    explanation: 'From $x^2+y^2=169$, $y=12$ when $x=5$, and $2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0$ gives $\\frac{dy}{dt}=-\\frac{5}{12}(2)=-\\frac{5}{6}$, so the top slides down at $\\frac{5}{6}$ ft/s. The value $\\frac{5}{12}$ omits the factor $\\frac{dx}{dt}=2$.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    stimulus: 'The table below gives values of a continuous, differentiable function $f$:\n\n| $x$ | 0 | 2 | 4 | 6 |\n|---|---|---|---|---|\n| $f(x)$ | 1 | 5 | 11 | 19 |',
    question: 'Estimate $f\'(4)$ using the symmetric difference quotient.',
    options: ['$3$', '$3.5$', '$4$', '$7$'],
    correctAnswer: 1,
    explanation: 'The symmetric difference quotient uses the points on either side: $\\frac{f(6)-f(2)}{6-2}=\\frac{14}{4}=3.5$. Dividing by $2$ instead of the full width $4$ gives $7$, and the one-sided quotients give $3$ and $4$.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-integration-accumulation',
    stimulus: 'A function $g$ is defined by $g(x) = \\int_0^x f(t)\\,dt$, where the graph of $f$ on $[0, 6]$ consists of two line segments: from $(0, 2)$ down to $(3, -1)$, then up to $(6, 2)$.',
    question: 'Find $g(6)$ using geometry.',
    options: ['$1$', '$3$', '$5$', '$-1$'],
    correctAnswer: 1,
    explanation: 'The graph crosses the axis at $t=2$ and $t=4$, giving triangles of area $2$ above $[0,2]$, $1$ below $[2,4]$, and $2$ above $[4,6]$; the net signed area is $2-1+2=3$. The value $5$ is the total unsigned area, which wrongly adds the region below the axis.',
  },
  {
    type: 'mcq',
    topic: 'unit-8-applications-integration',
    question: 'Water is leaking from a tank at the rate of $r(t) = 5e^{-0.1t}$ gal/min. The total amount that leaks out from $t=0$ to $t=10$ min, to the nearest tenth of a gallon, is',
    options: ['$31.6$', '$18.4$', '$34.2$', '$50.0$'],
    correctAnswer: 0,
    explanation: 'The amount leaked is $\\int_0^{10}5e^{-0.1t}\\,dt=50(1-e^{-1})\\approx 31.6$ gallons. The value $50.0$ assumes the initial rate of $5$ gal/min holds for all $10$ minutes, ignoring the decay.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-analytical-applications-differentiation',
    question: 'A twice-differentiable function $f$ has critical points at $x = 1, 3, 5$, with $f\'\'(1) > 0$, $f\'\'(3) = 0$, and $f\'\'(5) < 0$. What does the Second Derivative Test conclude?',
    options: [
      'Local minimum at $x=1$, no conclusion at $x=3$, local maximum at $x=5$.',
      'Local maximum at $x=1$, no conclusion at $x=3$, local minimum at $x=5$.',
      'Local minimum at $x=1$, inflection point at $x=3$, local maximum at $x=5$.',
      'Local maximum at $x=1$, inflection point at $x=3$, local minimum at $x=5$.',
    ],
    correctAnswer: 0,
    explanation: 'A positive second derivative at a critical point means concave up, a local minimum; a negative one means a local maximum. When $f\'\'=0$ the test gives no conclusion, and an inflection point would require $f\'\'$ to change sign, which this information does not show.',
  },
]
