/**
 * AP Precalculus — Exit Quiz / Unit Test Question Pool
 *
 * Mirrors the AP Chemistry / AP Physics structure used by
 * `src/lib/unit-tests/engine.ts` and the per-course UnitTestsClient.
 *
 * Pool covers all 4 CED-aligned domains:
 *   1. polynomial-rational
 *   2. exp-log
 *   3. trig-polar
 *   4. params-vectors-matrices
 *
 * Each question carries a `domain` (matches UnitDef.id) and a `topicSlug`
 * (matches the lesson topic slug used by the lesson router).
 */

export interface APPrecalcQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  domain: string
  topicSlug: string
  formSet: 'A' | 'B' | 'both'
}

export const apPrecalcQuestionPool: APPrecalcQuestion[] = [
  // ════════════════════════════════════════════════════════════════════
  // Domain: polynomial-rational  (Unit 1)
  // ════════════════════════════════════════════════════════════════════

  // — polynomial-functions-precalc —
  { question: 'What is the end behavior of $f(x) = -3x^4 + 2x^2 - 5$ as $x \\to \\pm\\infty$?', options: ['$f(x) \\to +\\infty$ on both ends', '$f(x) \\to -\\infty$ on both ends', '$f(x) \\to +\\infty$ on the left, $-\\infty$ on the right', '$f(x) \\to -\\infty$ on the left, $+\\infty$ on the right'], correctAnswer: 1, explanation: 'The leading term is $-3x^4$. Even degree with negative leading coefficient gives $f(x)\\to-\\infty$ as $x\\to\\pm\\infty$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc', formSet: 'A' },
  { question: 'A polynomial of degree 5 with real coefficients can have at most how many real zeros?', options: ['3', '4', '5', '6'], correctAnswer: 2, explanation: 'A polynomial of degree $n$ has at most $n$ real zeros (Fundamental Theorem of Algebra).', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc', formSet: 'A' },
  { question: 'If $f(x) = (x-2)^3(x+1)$, what happens to the graph at $x=2$?', options: ['Crosses the x-axis transversally', 'Touches and turns (bounce)', 'Crosses with an inflection-style flattening', 'Has a vertical asymptote'], correctAnswer: 2, explanation: 'Odd multiplicity ≥ 3 gives a flattened crossing (S-shape) at the zero.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc', formSet: 'B' },
  { question: 'What is the average rate of change of $f(x)=x^3$ on $[1,3]$?', options: ['9', '13', '26', '8'], correctAnswer: 1, explanation: '$\\frac{f(3)-f(1)}{3-1} = \\frac{27-1}{2} = 13$.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc', formSet: 'A' },
  { question: 'A cubic polynomial has zeros at $x=-1$ (multiplicity 2) and $x=3$. Which of the following could be its expanded leading behavior?', options: ['$x^3 + x^2 - 5x - 3$', '$x^3 - x^2 - 5x - 3$', '$x^3 - x^2 + 5x + 3$', '$x^3 + x^2 + 5x + 3$'], correctAnswer: 1, explanation: '$(x+1)^2(x-3) = (x^2+2x+1)(x-3) = x^3 - x^2 - 5x - 3$.', difficulty: 'hard', domain: 'polynomial-rational', topicSlug: 'polynomial-functions-precalc', formSet: 'B' },

  // — rational-functions-precalc —
  { question: 'Find all vertical asymptotes of $f(x) = \\dfrac{x+1}{x^2 - 4}$.', options: ['$x=2$ only', '$x=-2$ only', '$x=\\pm 2$', '$x=-1$'], correctAnswer: 2, explanation: 'Set $x^2-4=0\\Rightarrow x=\\pm 2$. Numerator is non-zero at both, so both are vertical asymptotes.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'A' },
  { question: 'What is the horizontal asymptote of $f(x)=\\dfrac{3x^2+1}{2x^2-x+5}$?', options: ['$y = 0$', '$y = 3/2$', '$y = 2/3$', 'No horizontal asymptote'], correctAnswer: 1, explanation: 'Same degree numerator/denominator ⇒ HA is the ratio of leading coefficients $= 3/2$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'A' },
  { question: '$f(x) = \\dfrac{(x-1)(x+3)}{(x-1)(x-2)}$ has what feature at $x=1$?', options: ['Vertical asymptote', 'Removable discontinuity (hole)', 'Horizontal asymptote', 'x-intercept'], correctAnswer: 1, explanation: 'A common factor $(x-1)$ in numerator and denominator produces a hole at $x=1$.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'B' },
  { question: 'Which rational function has a slant (oblique) asymptote?', options: ['$\\dfrac{2x+1}{x-3}$', '$\\dfrac{x^2+1}{x+1}$', '$\\dfrac{1}{x^2+1}$', '$\\dfrac{x^2}{x^2+1}$'], correctAnswer: 1, explanation: 'Numerator degree exactly one greater than denominator degree gives a slant asymptote.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'A' },
  { question: 'Solve $\\dfrac{x-1}{x+2} \\ge 0$.', options: ['$x \\le -2$ or $x \\ge 1$', '$-2 < x \\le 1$', '$x < -2$ or $x \\ge 1$', '$x \\ge 1$'], correctAnswer: 2, explanation: 'Sign chart: zeros at $x=1$, undefined at $x=-2$. Expression is $\\ge 0$ on $x<-2$ and $x\\ge 1$. Cannot include $x=-2$.', difficulty: 'hard', domain: 'polynomial-rational', topicSlug: 'rational-functions-precalc', formSet: 'B' },

  // — function-composition-inverses-precalc —
  { question: 'If $f(x)=2x+3$ and $g(x)=x^2$, find $(f\\circ g)(x)$.', options: ['$2x^2+3$', '$(2x+3)^2$', '$2x^3+3x^2$', '$2x^2+6x+9$'], correctAnswer: 0, explanation: '$(f\\circ g)(x)=f(g(x))=2(x^2)+3=2x^2+3$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'function-composition-inverses-precalc', formSet: 'A' },
  { question: 'Find the inverse of $f(x) = \\dfrac{x-4}{3}$.', options: ['$f^{-1}(x) = 3x+4$', '$f^{-1}(x) = 3x-4$', '$f^{-1}(x) = \\dfrac{x+4}{3}$', '$f^{-1}(x) = \\dfrac{3}{x-4}$'], correctAnswer: 0, explanation: 'Swap and solve: $x=\\dfrac{y-4}{3}\\Rightarrow y=3x+4$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'function-composition-inverses-precalc', formSet: 'A' },
  { question: 'Which function does NOT have an inverse function on its full domain?', options: ['$f(x)=x^3$', '$f(x)=x^2$', '$f(x)=e^x$', '$f(x)=2x+1$'], correctAnswer: 1, explanation: '$x^2$ is not one-to-one on $\\mathbb{R}$ (fails horizontal line test). The others are one-to-one.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'function-composition-inverses-precalc', formSet: 'B' },
  { question: 'If $f$ and $f^{-1}$ are inverse functions and $f(2)=7$, what is $f^{-1}(7)$?', options: ['$2$', '$1/7$', '$1/2$', '$7$'], correctAnswer: 0, explanation: 'By definition of inverse, $f(a)=b\\iff f^{-1}(b)=a$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'function-composition-inverses-precalc', formSet: 'A' },

  // — transformations-precalc —
  { question: 'How does the graph of $g(x) = f(x-3)+2$ relate to $f(x)$?', options: ['Shift right 3, up 2', 'Shift left 3, up 2', 'Shift right 3, down 2', 'Shift left 3, down 2'], correctAnswer: 0, explanation: 'Inside subtract = shift right (input compensates), outside add = shift up.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'transformations-precalc', formSet: 'A' },
  { question: 'The graph of $g(x)=-2f(x)$ compared to $f(x)$ is:', options: ['Reflected over the x-axis and stretched vertically by 2', 'Reflected over the y-axis and compressed horizontally by 2', 'Shifted down 2 units', 'Reflected over the x-axis only'], correctAnswer: 0, explanation: 'Negative coefficient flips over x-axis; $|2|>1$ stretches vertically by factor 2.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'transformations-precalc', formSet: 'B' },
  { question: 'Which function results from horizontally compressing $f(x)$ by a factor of $1/3$?', options: ['$f(3x)$', '$f(x/3)$', '$3f(x)$', '$f(x)/3$'], correctAnswer: 0, explanation: 'Replacing $x$ with $bx$ where $b>1$ gives a horizontal compression by factor $1/b$.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'transformations-precalc', formSet: 'A' },

  // — sequences-series-precalc (Unit 2 boundary, but algebra-of-functions; placed here per CED treatment) —
  { question: 'Given the arithmetic sequence $a_n = 4 + 3(n-1)$, what is $a_{20}$?', options: ['$60$', '$61$', '$63$', '$64$'], correctAnswer: 1, explanation: '$a_{20}=4+3(19)=4+57=61$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'sequences-series-precalc', formSet: 'A' },
  { question: 'For the geometric sequence $2, 6, 18, 54, \\ldots$, what is the explicit formula?', options: ['$a_n = 2 \\cdot 3^{n-1}$', '$a_n = 3 \\cdot 2^{n-1}$', '$a_n = 2 + 3(n-1)$', '$a_n = 6^{n-1}$'], correctAnswer: 0, explanation: 'First term 2, common ratio 3, so $a_n = 2\\cdot 3^{n-1}$.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'sequences-series-precalc', formSet: 'A' },
  { question: 'A polynomial function and a sequence both produce $1, 5, 12, 22, 35, 51, \\ldots$. The 2nd differences are constant (7). What degree polynomial models this?', options: ['Linear', 'Quadratic', 'Cubic', 'Quartic'], correctAnswer: 1, explanation: 'Constant second differences ⇒ quadratic model.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'sequences-series-precalc', formSet: 'B' },

  // — systems-of-equations-precalc —
  { question: 'Solve the system: $y = x^2$ and $y = x + 6$.', options: ['$(2,4)$ and $(-3,9)$', '$(3,9)$ and $(-2,4)$', '$(1,1)$ and $(6,6)$', '$(0,0)$ only'], correctAnswer: 1, explanation: 'Set $x^2 = x+6 \\Rightarrow x^2 - x - 6 = 0 \\Rightarrow (x-3)(x+2)=0$. Solutions $(3,9)$ and $(-2,4)$.', difficulty: 'medium', domain: 'polynomial-rational', topicSlug: 'systems-of-equations-precalc', formSet: 'A' },
  { question: 'How many real solutions does the system $y=x^2+1$ and $y=-x^2-1$ have?', options: ['0', '1', '2', 'Infinite'], correctAnswer: 0, explanation: '$x^2+1 = -x^2-1 \\Rightarrow 2x^2 = -2$, no real solution.', difficulty: 'easy', domain: 'polynomial-rational', topicSlug: 'systems-of-equations-precalc', formSet: 'B' },

  // ════════════════════════════════════════════════════════════════════
  // Domain: exp-log  (Unit 2)
  // ════════════════════════════════════════════════════════════════════

  // — exponential-functions-precalc —
  { question: 'A bacterial culture doubles every 3 hours. Starting with 500 cells, which function gives the population $P$ after $t$ hours?', options: ['$P=500(2)^{t}$', '$P=500(2)^{t/3}$', '$P=500(3)^{t/2}$', '$P=500 + 2t$'], correctAnswer: 1, explanation: 'Each 3 hours multiplies by 2, so the exponent is $t/3$.', difficulty: 'easy', domain: 'exp-log', topicSlug: 'exponential-functions-precalc', formSet: 'A' },
  { question: 'For exponential decay $f(t)=A_0 e^{-kt}$ with $k>0$, the half-life equals:', options: ['$\\ln(2)/k$', '$k/\\ln(2)$', '$2/k$', '$k/2$'], correctAnswer: 0, explanation: 'Set $A_0 e^{-kt}=A_0/2$, so $e^{-kt}=1/2 \\Rightarrow t=\\ln(2)/k$.', difficulty: 'medium', domain: 'exp-log', topicSlug: 'exponential-functions-precalc', formSet: 'A' },
  { question: 'The graph of $f(x) = 2 \\cdot 3^x$ has horizontal asymptote:', options: ['$y=2$', '$y=3$', '$y=0$', '$x=0$'], correctAnswer: 2, explanation: 'Standard exponential $a\\cdot b^x$ (with $b>0$) has HA at $y=0$ on the side where the function decays.', difficulty: 'easy', domain: 'exp-log', topicSlug: 'exponential-functions-precalc', formSet: 'B' },
  { question: 'Compounded continuously, $\\$1000$ at 5% per year is worth how much after 10 years? Use $A=Pe^{rt}$.', options: ['$\\$1500$', '$\\$1648.72$', '$\\$1628.89$', '$\\$1051.27$'], correctAnswer: 1, explanation: '$A=1000\\cdot e^{0.5} \\approx 1000(1.6487) = \\$1648.72$.', difficulty: 'medium', domain: 'exp-log', topicSlug: 'exponential-functions-precalc', formSet: 'A' },
  { question: 'Which feature distinguishes exponential functions from polynomial functions of high degree?', options: ['Exponential growth eventually exceeds any polynomial growth', 'Polynomials always grow faster', 'They cannot intersect', 'Exponentials have horizontal asymptotes only when negative'], correctAnswer: 0, explanation: 'For sufficiently large $x$, $b^x$ ($b>1$) outgrows any fixed polynomial $x^n$.', difficulty: 'medium', domain: 'exp-log', topicSlug: 'exponential-functions-precalc', formSet: 'B' },

  // — logarithmic-functions-precalc —
  { question: 'Evaluate $\\log_2(64)$.', options: ['$5$', '$6$', '$7$', '$8$'], correctAnswer: 1, explanation: '$2^6 = 64$.', difficulty: 'easy', domain: 'exp-log', topicSlug: 'logarithmic-functions-precalc', formSet: 'A' },
  { question: 'Which equation is equivalent to $\\log_b(M) - \\log_b(N) = K$?', options: ['$\\log_b(MN)=K$', '$\\log_b(M/N)=K$', '$\\log_b(M-N)=K$', '$\\log_b(K) = M/N$'], correctAnswer: 1, explanation: 'Quotient rule: $\\log_b M - \\log_b N = \\log_b(M/N)$.', difficulty: 'easy', domain: 'exp-log', topicSlug: 'logarithmic-functions-precalc', formSet: 'A' },
  { question: 'Solve $\\log_3(x) + \\log_3(x-2) = 1$.', options: ['$x=3$', '$x=-1$ and $x=3$', '$x=1$', '$x=5$'], correctAnswer: 0, explanation: '$\\log_3[x(x-2)]=1 \\Rightarrow x^2-2x=3 \\Rightarrow (x-3)(x+1)=0$. Reject $x=-1$ (domain). $x=3$.', difficulty: 'medium', domain: 'exp-log', topicSlug: 'logarithmic-functions-precalc', formSet: 'B' },
  { question: 'Use change-of-base to evaluate $\\log_5(20)$ to two decimals.', options: ['$1.86$', '$2.30$', '$1.30$', '$0.70$'], correctAnswer: 0, explanation: '$\\log_5(20) = \\ln 20 / \\ln 5 \\approx 2.9957/1.6094 \\approx 1.86$.', difficulty: 'medium', domain: 'exp-log', topicSlug: 'logarithmic-functions-precalc', formSet: 'A' },
  { question: 'The graph of $y = \\log_b(x)$ for $b>1$ has which feature?', options: ['Vertical asymptote at $x=0$', 'Horizontal asymptote at $y=0$', 'Increases then decreases', 'Defined for all real $x$'], correctAnswer: 0, explanation: 'Log functions have a vertical asymptote at $x=0$ and domain $x>0$.', difficulty: 'easy', domain: 'exp-log', topicSlug: 'logarithmic-functions-precalc', formSet: 'B' },
  { question: 'If $\\log_b(x) = 4$ and $\\log_b(y) = 2$, then $\\log_b(x^2 y)$ equals:', options: ['$10$', '$8$', '$12$', '$6$'], correctAnswer: 0, explanation: '$\\log_b(x^2 y) = 2\\log_b x + \\log_b y = 2(4)+2 = 10$.', difficulty: 'medium', domain: 'exp-log', topicSlug: 'logarithmic-functions-precalc', formSet: 'A' },

  // ════════════════════════════════════════════════════════════════════
  // Domain: trig-polar  (Unit 3)
  // ════════════════════════════════════════════════════════════════════

  // — trigonometric-functions-precalc —
  { question: 'In standard position, the angle $\\theta = 5\\pi/6$ has reference angle:', options: ['$\\pi/6$', '$\\pi/3$', '$\\pi/4$', '$2\\pi/3$'], correctAnswer: 0, explanation: '$5\\pi/6$ is in Q2; reference angle is $\\pi - 5\\pi/6 = \\pi/6$.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'trigonometric-functions-precalc', formSet: 'A' },
  { question: 'The exact value of $\\cos(7\\pi/6)$ is:', options: ['$-\\sqrt{3}/2$', '$\\sqrt{3}/2$', '$-1/2$', '$1/2$'], correctAnswer: 0, explanation: '$7\\pi/6$ is in Q3; reference angle $\\pi/6$. Cosine is negative in Q3, so $\\cos(7\\pi/6) = -\\sqrt{3}/2$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'trigonometric-functions-precalc', formSet: 'A' },
  { question: 'A sinusoid $y = 3\\sin(2x - \\pi) + 1$ has period:', options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', '$4\\pi$'], correctAnswer: 0, explanation: 'Period $= 2\\pi/|B| = 2\\pi/2 = \\pi$.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'trigonometric-functions-precalc', formSet: 'B' },
  { question: 'For $y = -2\\cos(\\pi x) + 3$, the amplitude and midline are:', options: ['Amplitude 2, midline $y=3$', 'Amplitude $-2$, midline $y=3$', 'Amplitude 2, midline $y=-3$', 'Amplitude 3, midline $y=2$'], correctAnswer: 0, explanation: 'Amplitude is $|A| = 2$. Midline is $y = D = 3$. Negative sign reflects but does not change amplitude.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'trigonometric-functions-precalc', formSet: 'A' },
  { question: 'Where do all vertical asymptotes of $y = \\tan(x)$ occur?', options: ['$x = n\\pi$ for integer $n$', '$x = \\pi/2 + n\\pi$ for integer $n$', '$x = 2\\pi n$', 'Tan has no vertical asymptotes'], correctAnswer: 1, explanation: '$\\tan x = \\sin x / \\cos x$; undefined when $\\cos x = 0$, i.e. $x=\\pi/2 + n\\pi$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'trigonometric-functions-precalc', formSet: 'B' },
  { question: 'A Ferris wheel of radius 20 m, center 22 m above ground, completes one rotation per 60 s. Which models height after $t$ seconds, starting at the bottom?', options: ['$h(t) = 22 - 20\\cos(2\\pi t/60)$', '$h(t) = 22 + 20\\sin(t)$', '$h(t) = 20\\sin(2\\pi t/60) + 22$', '$h(t) = 22 + 20\\cos(60t)$'], correctAnswer: 0, explanation: 'Starts at minimum so use $-\\cos$ shifted; period 60 ⇒ $B = 2\\pi/60$; midline 22; amplitude 20.', difficulty: 'hard', domain: 'trig-polar', topicSlug: 'trigonometric-functions-precalc', formSet: 'A' },

  // — trigonometric-identities-precalc —
  { question: 'Which is a Pythagorean identity?', options: ['$\\sin^2 x - \\cos^2 x = 1$', '$\\sin^2 x + \\cos^2 x = 1$', '$\\tan^2 x + \\sec^2 x = 1$', '$\\cot^2 x + \\csc^2 x = 1$'], correctAnswer: 1, explanation: 'Standard Pythagorean identity from the unit circle.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'trigonometric-identities-precalc', formSet: 'A' },
  { question: 'Simplify $\\dfrac{1-\\cos^2 x}{\\sin x}$ for $\\sin x \\ne 0$.', options: ['$\\sin x$', '$\\cos x$', '$\\tan x$', '$1$'], correctAnswer: 0, explanation: '$1-\\cos^2 x = \\sin^2 x$, so the expression $=\\sin^2 x / \\sin x = \\sin x$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'trigonometric-identities-precalc', formSet: 'A' },
  { question: 'Use a sum identity: $\\sin(75°)$ equals:', options: ['$\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$', '$\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}$', '$\\dfrac{\\sqrt{2}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$'], correctAnswer: 0, explanation: '$\\sin(45°+30°) = \\sin 45°\\cos 30° + \\cos 45°\\sin 30° = \\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{\\sqrt{3}}{2}+\\dfrac{\\sqrt{2}}{2}\\cdot\\dfrac{1}{2}=\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}$.', difficulty: 'hard', domain: 'trig-polar', topicSlug: 'trigonometric-identities-precalc', formSet: 'B' },
  { question: 'Apply the double-angle formula: $\\cos(2x)$ equals all of the following EXCEPT:', options: ['$\\cos^2 x - \\sin^2 x$', '$1 - 2\\sin^2 x$', '$2\\cos^2 x - 1$', '$2\\sin x \\cos x$'], correctAnswer: 3, explanation: '$2\\sin x\\cos x = \\sin(2x)$, not $\\cos(2x)$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'trigonometric-identities-precalc', formSet: 'A' },
  { question: 'Solve $2\\sin^2 x = 1$ on $[0, 2\\pi)$.', options: ['$\\pi/4, 3\\pi/4, 5\\pi/4, 7\\pi/4$', '$\\pi/3, 2\\pi/3$', '$\\pi/6, 5\\pi/6$', '$\\pi/2, 3\\pi/2$'], correctAnswer: 0, explanation: '$\\sin x = \\pm \\sqrt{2}/2$. Solutions in $[0,2\\pi)$ are $\\pi/4, 3\\pi/4, 5\\pi/4, 7\\pi/4$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'trigonometric-identities-precalc', formSet: 'B' },

  // — inverse-trig-functions-precalc —
  { question: 'What is the range of $y = \\arcsin(x)$?', options: ['$[0, \\pi]$', '$[-\\pi/2, \\pi/2]$', '$(-\\infty, \\infty)$', '$(-\\pi, \\pi)$'], correctAnswer: 1, explanation: 'Standard restricted range for arcsine.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'inverse-trig-functions-precalc', formSet: 'A' },
  { question: 'Evaluate $\\arctan(-1)$.', options: ['$-\\pi/4$', '$3\\pi/4$', '$\\pi/4$', '$-3\\pi/4$'], correctAnswer: 0, explanation: '$\\arctan$ has range $(-\\pi/2, \\pi/2)$ and $\\tan(-\\pi/4) = -1$.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'inverse-trig-functions-precalc', formSet: 'A' },
  { question: 'Simplify $\\sin(\\arccos(x))$ for $-1\\le x\\le 1$.', options: ['$\\sqrt{1-x^2}$', '$x$', '$\\sqrt{1+x^2}$', '$1-x^2$'], correctAnswer: 0, explanation: 'If $\\theta=\\arccos(x)$ then $\\cos\\theta=x$. With $\\theta\\in[0,\\pi]$, $\\sin\\theta\\ge 0$, giving $\\sqrt{1-x^2}$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'inverse-trig-functions-precalc', formSet: 'B' },
  { question: 'Why does arcsine have a restricted domain of $[-1,1]$?', options: ['Sine outputs values only in $[-1,1]$', 'Sine is undefined outside $[-1,1]$', 'Inverses cannot be defined for periodic functions', 'Convention only'], correctAnswer: 0, explanation: 'For $\\sin^{-1}$ to be a function, its domain is the range of sine, which is $[-1,1]$.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'inverse-trig-functions-precalc', formSet: 'A' },

  // — law-of-sines-cosines-precalc —
  { question: 'In $\\triangle ABC$, $a=10, A=40°, B=60°$. Find $b$ using the Law of Sines.', options: ['$b \\approx 13.5$', '$b \\approx 7.7$', '$b \\approx 8.6$', '$b \\approx 11.3$'], correctAnswer: 0, explanation: '$\\dfrac{b}{\\sin 60°} = \\dfrac{10}{\\sin 40°}\\Rightarrow b = \\dfrac{10\\sin 60°}{\\sin 40°} \\approx \\dfrac{8.66}{0.643} \\approx 13.5$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'law-of-sines-cosines-precalc', formSet: 'A' },
  { question: 'In $\\triangle ABC$, $a=7, b=9, C=110°$. Find $c$ using the Law of Cosines.', options: ['$c \\approx 13.2$', '$c \\approx 16.0$', '$c \\approx 11.3$', '$c \\approx 9.4$'], correctAnswer: 0, explanation: '$c^2 = 49 + 81 - 2(7)(9)\\cos 110° = 130 - 126(-0.342) \\approx 130 + 43.1 = 173.1$, so $c\\approx 13.2$.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'law-of-sines-cosines-precalc', formSet: 'B' },
  { question: 'The Law of Sines is most directly used when you know:', options: ['Three sides (SSS)', 'Two sides and the included angle (SAS)', 'Two angles and any side (AAS or ASA)', 'Only one angle and one side'], correctAnswer: 2, explanation: 'Law of sines requires a known angle paired with its opposite side; AAS/ASA satisfy this.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'law-of-sines-cosines-precalc', formSet: 'A' },
  { question: 'The ambiguous case (SSA) of the Law of Sines may yield:', options: ['Always one triangle', 'Zero, one, or two triangles', 'Always two triangles', 'Only when the angle is obtuse'], correctAnswer: 1, explanation: 'SSA can produce no, one, or two valid triangles depending on the side relationships.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'law-of-sines-cosines-precalc', formSet: 'B' },

  // — polar-coordinates-precalc —
  { question: 'Convert the rectangular point $(0, -4)$ to polar.', options: ['$(4, \\pi)$', '$(4, 3\\pi/2)$', '$(-4, \\pi/2)$', '$(4, \\pi/2)$'], correctAnswer: 1, explanation: '$r = 4$, point lies on negative $y$-axis, so $\\theta = 3\\pi/2$ (or $-\\pi/2$).', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'polar-coordinates-precalc', formSet: 'A' },
  { question: 'Convert the polar point $(2, \\pi/3)$ to rectangular.', options: ['$(1, \\sqrt{3})$', '$(\\sqrt{3}, 1)$', '$(2, 0)$', '$(\\sqrt{3}, \\sqrt{3})$'], correctAnswer: 0, explanation: '$x = 2\\cos(\\pi/3) = 1$, $y = 2\\sin(\\pi/3) = \\sqrt{3}$.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'polar-coordinates-precalc', formSet: 'A' },
  { question: 'The polar equation $r = 4\\sin\\theta$ represents:', options: ['A circle through the origin with center $(0,2)$ and radius 2', 'A line', 'A cardioid', 'A spiral'], correctAnswer: 0, explanation: 'Multiplying by $r$: $r^2 = 4r\\sin\\theta\\Rightarrow x^2+y^2 = 4y \\Rightarrow x^2+(y-2)^2 = 4$. Circle, center $(0,2)$, radius 2.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'polar-coordinates-precalc', formSet: 'B' },
  { question: 'Which polar equation produces a cardioid?', options: ['$r = 1 + \\cos\\theta$', '$r = 2$', '$r = \\theta$', '$r = \\sin(2\\theta)$'], correctAnswer: 0, explanation: '$r = a(1\\pm\\cos\\theta)$ or $r = a(1\\pm\\sin\\theta)$ are cardioids.', difficulty: 'medium', domain: 'trig-polar', topicSlug: 'polar-coordinates-precalc', formSet: 'A' },

  // — conic-sections-precalc (placed in trig-polar domain because CED introduces conics in polar/parametric form in Unit 3-4 boundary) —
  { question: 'The equation $9x^2 + 4y^2 = 36$ describes a:', options: ['Circle of radius 6', 'Vertical ellipse', 'Hyperbola', 'Parabola'], correctAnswer: 1, explanation: 'Divide by 36: $x^2/4 + y^2/9 = 1$. Larger denominator under $y^2$ ⇒ vertical ellipse.', difficulty: 'easy', domain: 'trig-polar', topicSlug: 'conic-sections-precalc', formSet: 'A' },
  { question: 'The vertices of the hyperbola $\\dfrac{(x-1)^2}{16} - \\dfrac{(y+2)^2}{9} = 1$ are:', options: ['$(5, -2)$ and $(-3, -2)$', '$(1, 1)$ and $(1, -5)$', '$(1, 2)$ and $(1, -6)$', '$(4, -2)$ and $(-2, -2)$'], correctAnswer: 0, explanation: 'Center $(1,-2)$, $a^2=16\\Rightarrow a=4$, horizontal transverse axis. Vertices $(1\\pm4, -2) = (5,-2), (-3,-2)$.', difficulty: 'hard', domain: 'trig-polar', topicSlug: 'conic-sections-precalc', formSet: 'B' },

  // ════════════════════════════════════════════════════════════════════
  // Domain: params-vectors-matrices  (Unit 4)
  // ════════════════════════════════════════════════════════════════════

  // — parametric-equations-precalc —
  { question: 'Eliminate the parameter for $x = t+1, y = t^2$. The Cartesian equation is:', options: ['$y = (x-1)^2$', '$y = x^2 - 1$', '$y = x^2 + 1$', '$y = (x+1)^2$'], correctAnswer: 0, explanation: '$t = x-1$, so $y = (x-1)^2$.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'parametric-equations-precalc', formSet: 'A' },
  { question: 'A particle has $x(t)=2\\cos t,~y(t)=2\\sin t$. Its trajectory is:', options: ['A line through the origin', 'A circle of radius 2 centered at the origin', 'A parabola', 'An ellipse with semi-axes 1 and 2'], correctAnswer: 1, explanation: '$x^2 + y^2 = 4\\cos^2 t + 4\\sin^2 t = 4$. Circle radius 2.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'parametric-equations-precalc', formSet: 'A' },
  { question: 'For parametric equations $x = 3t, y = t^2 - 1$, what is the value of $y$ when $x = 6$?', options: ['$3$', '$1$', '$5$', '$8$'], correctAnswer: 0, explanation: '$x=6\\Rightarrow t=2 \\Rightarrow y = 4-1 = 3$.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'parametric-equations-precalc', formSet: 'B' },
  { question: 'Why are parametric equations useful in modeling motion?', options: ['They reveal the path but lose direction', 'They describe both position and the direction/speed of traversal as $t$ varies', 'They eliminate the need for trigonometry', 'They can only describe linear motion'], correctAnswer: 1, explanation: 'Parametric form preserves orientation and timing, which Cartesian form usually loses.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'parametric-equations-precalc', formSet: 'A' },

  // — vectors-two-dimensions-precalc —
  { question: 'Given $\\vec{u} = \\langle 3, -4\\rangle$, find $\\|\\vec{u}\\|$.', options: ['$5$', '$7$', '$1$', '$25$'], correctAnswer: 0, explanation: '$\\sqrt{3^2+(-4)^2} = \\sqrt{25} = 5$.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'vectors-two-dimensions-precalc', formSet: 'A' },
  { question: 'For $\\vec{u}=\\langle 2,1\\rangle, \\vec{v}=\\langle -1, 4\\rangle$, the dot product $\\vec{u}\\cdot\\vec{v}$ equals:', options: ['$2$', '$-2$', '$5$', '$6$'], correctAnswer: 0, explanation: '$(2)(-1) + (1)(4) = -2+4 = 2$.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'vectors-two-dimensions-precalc', formSet: 'A' },
  { question: 'Two nonzero vectors are perpendicular iff their dot product is:', options: ['$1$', '$0$', 'Equal to the product of magnitudes', 'Negative'], correctAnswer: 1, explanation: '$\\vec{u}\\cdot\\vec{v} = \\|u\\|\\|v\\|\\cos\\theta$; perpendicular ⇒ $\\theta=90°$ ⇒ $\\cos\\theta = 0$.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'vectors-two-dimensions-precalc', formSet: 'B' },
  { question: 'A unit vector in the direction of $\\langle 6, 8\\rangle$ is:', options: ['$\\langle 6, 8\\rangle$', '$\\langle 0.6, 0.8\\rangle$', '$\\langle 1, 1\\rangle$', '$\\langle 3, 4\\rangle$'], correctAnswer: 1, explanation: 'Magnitude is 10. Divide each component: $\\langle 6/10, 8/10\\rangle = \\langle 0.6, 0.8\\rangle$.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'vectors-two-dimensions-precalc', formSet: 'A' },

  // — matrices-precalc —
  { question: 'Compute $\\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix}$.', options: ['$\\begin{pmatrix}17\\\\39\\end{pmatrix}$', '$\\begin{pmatrix}11\\\\27\\end{pmatrix}$', '$\\begin{pmatrix}5\\\\18\\end{pmatrix}$', '$\\begin{pmatrix}17\\\\27\\end{pmatrix}$'], correctAnswer: 0, explanation: 'Row 1: $1(5)+2(6)=17$. Row 2: $3(5)+4(6) = 39$.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'matrices-precalc', formSet: 'A' },
  { question: 'The determinant of $\\begin{pmatrix}2 & 5\\\\1 & 3\\end{pmatrix}$ equals:', options: ['$11$', '$1$', '$6$', '$-1$'], correctAnswer: 1, explanation: '$\\det = ad-bc = 2(3) - 5(1) = 1$.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'matrices-precalc', formSet: 'A' },
  { question: 'A 2×2 matrix is invertible if and only if:', options: ['Its trace is nonzero', 'Its determinant is nonzero', 'It is symmetric', 'All entries are positive'], correctAnswer: 1, explanation: 'Invertibility ⇔ nonzero determinant.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'matrices-precalc', formSet: 'B' },
  { question: 'A linear transformation represented by $\\begin{pmatrix}0 & -1\\\\1 & 0\\end{pmatrix}$ corresponds to:', options: ['Reflection over the x-axis', 'Rotation by $90°$ counterclockwise', 'Scaling by 2', 'Shear in the x direction'], correctAnswer: 1, explanation: 'This standard matrix sends $(1,0)\\to(0,1)$ and $(0,1)\\to(-1,0)$, i.e. a $90°$ CCW rotation.', difficulty: 'hard', domain: 'params-vectors-matrices', topicSlug: 'matrices-precalc', formSet: 'A' },

  // — limits-introduction-precalc —
  { question: 'Estimate $\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}$.', options: ['$0$', '$2$', '$4$', 'Does not exist'], correctAnswer: 2, explanation: 'Factor: $\\dfrac{(x-2)(x+2)}{x-2} = x+2$ for $x\\ne 2$. Limit $= 4$.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'limits-introduction-precalc', formSet: 'A' },
  { question: 'For $f(x)=\\begin{cases} x+1, & x<0 \\\\ x-1, & x\\ge 0\\end{cases}$, $\\lim_{x\\to 0} f(x)$ is:', options: ['$1$', '$-1$', '$0$', 'Does not exist'], correctAnswer: 3, explanation: 'Left limit $= 1$, right limit $= -1$. Two-sided limit DNE.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'limits-introduction-precalc', formSet: 'B' },

  // — continuity-precalc —
  { question: 'A function $f$ is continuous at $x=a$ when:', options: ['$f(a)$ is defined', '$\\lim_{x\\to a} f(x)$ exists', '$\\lim_{x\\to a} f(x) = f(a)$', '$f$ is differentiable at $a$'], correctAnswer: 2, explanation: 'Continuity requires all three: $f(a)$ defined, limit exists, and they are equal.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'continuity-precalc', formSet: 'A' },
  { question: 'Which function is discontinuous at $x = 0$?', options: ['$f(x) = x^2$', '$f(x) = |x|$', '$f(x) = 1/x$', '$f(x) = \\sin(x)$'], correctAnswer: 2, explanation: '$1/x$ is undefined at $x=0$ (vertical asymptote).', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'continuity-precalc', formSet: 'A' },

  // — rates-of-change-precalc —
  { question: 'The average rate of change of $f(x)=x^2$ from $x=2$ to $x=2+h$ is:', options: ['$4 + h$', '$h$', '$2h$', '$4 - h$'], correctAnswer: 0, explanation: '$\\dfrac{(2+h)^2 - 4}{h} = \\dfrac{4h+h^2}{h} = 4+h$.', difficulty: 'medium', domain: 'params-vectors-matrices', topicSlug: 'rates-of-change-precalc', formSet: 'A' },
  { question: 'The instantaneous rate of change of a function at a point is best understood as:', options: ['Slope of the secant line', 'Slope of the tangent line at that point', 'Average of all secant slopes', 'Always equal to zero'], correctAnswer: 1, explanation: 'Instantaneous rate of change = slope of the tangent line, the limit of secant slopes.', difficulty: 'easy', domain: 'params-vectors-matrices', topicSlug: 'rates-of-change-precalc', formSet: 'B' },
]

/**
 * Convenience generator used by the per-topic exit-quiz UX (mirrors other courses).
 */
export function generateExitQuiz(count = 10, topicSlug?: string) {
  let pool = apPrecalcQuestionPool
  if (topicSlug) {
    const filtered = pool.filter((q) => q.topicSlug === topicSlug)
    pool = filtered.length > 0 ? filtered : pool
  }
  return [...pool]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((q, i) => ({
      id: `${q.topicSlug}-q${i}`,
      question: q.question,
      options: q.options,
      correctIndex: q.correctAnswer,
      explanation: q.explanation,
      category: q.domain,
      topicSlug: q.topicSlug,
    }))
}
