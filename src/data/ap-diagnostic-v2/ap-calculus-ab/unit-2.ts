/**
 * AP Calculus AB diagnostic v2, Unit 2: Differentiation: Definition and
 * Fundamental Properties. No calculator. Stimulus sets: a piecewise-linear
 * graph (calcab-s201) and a table of f, f′, g, g′ (calcab-s202).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s201",
    title: "Graph of a piecewise-linear function f",
    kind: "figure",
    content:
      "The graph of the continuous function $f$ on the closed interval $-3 \\le x \\le 5$ consists of four line segments. " +
      "They join the points $(-3, 0)$, $(-1, 4)$, $(2, 1)$, $(4, 1)$ and $(5, 3)$, in that order.",
    svg: FIGURES["calcab-s201"],
  },
  {
    id: "calcab-s202",
    title: "Values of f, f′, g and g′",
    kind: "table",
    content:
      "The functions $f$ and $g$ are differentiable for all real numbers. The table gives values of the functions and their derivatives at selected values of $x$.\n\n" +
      "| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n" +
      "| --- | --- | --- | --- | --- |\n" +
      "| 1 | 3 | −2 | 4 | 1 |\n" +
      "| 2 | −1 | 5 | 2 | 3 |\n" +
      "| 3 | 2 | 4 | −3 | 2 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s201: graph of f ----
  {
    id: "calcab-s201-q1",
    stimulusId: "calcab-s201",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "easy",
    stem: "Based on the graph, what is the value of $f'(0)$?",
    options: ["$-1$", "$3$", "$1$", "$-3$"],
    correctIndex: 0,
    explanation:
      "On $-1 < x < 2$ the graph is the segment from $(-1, 4)$ to $(2, 1)$, whose slope is $\\frac{1 - 4}{2 - (-1)} = -1$, so $f'(0) = -1$. 3 is $f(0)$, the height of the graph rather than its slope. 1 drops the sign of the slope, and $-3$ is the change in $y$ without dividing by the change in $x$.",
  },
  {
    id: "calcab-s201-q2",
    stimulusId: "calcab-s201",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "medium",
    stem: "At how many values of $x$ in the open interval $-3 < x < 5$ is $f$ not differentiable?",
    options: ["Three", "Two", "One", "None"],
    correctIndex: 0,
    explanation:
      "A continuous piecewise-linear function fails to be differentiable where the slope changes abruptly (a corner). The slope changes at $x = -1$ (2 to $-1$), at $x = 2$ ($-1$ to 0) and at $x = 4$ (0 to 2): three corners. Answering two usually skips the corner at $x = 2$, where the graph flattens out. Answering none confuses continuity, which holds everywhere here, with differentiability.",
  },
  {
    id: "calcab-s201-q3",
    stimulusId: "calcab-s201",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "hard",
    stem: "Let $h(x) = \\dfrac{f(x)}{x}$. What is $h'(1)$?",
    options: ["$-3$", "$3$", "$1$", "$2$"],
    correctIndex: 0,
    explanation:
      "From the graph, $f(1) = 2$ and $f'(1) = -1$. By the quotient rule, $h'(1) = \\frac{1 \\cdot f'(1) - f(1) \\cdot 1}{1^2} = -1 - 2 = -3$. Reversing the numerator gives 3. Adding the terms, as in the product rule, gives $-1 + 2 = 1$. 2 is $h(1) = \\frac{f(1)}{1}$, the value of $h$ rather than its derivative.",
  },
  // ---- calcab-s202: table of f, f', g, g' ----
  {
    id: "calcab-s202-q1",
    stimulusId: "calcab-s202",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "easy",
    stem: "Let $p(x) = 4f(x) - x^3$. Based on the table, what is $p'(1)$?",
    options: ["$-11$", "$-5$", "$9$", "$-8$"],
    correctIndex: 0,
    explanation:
      "$p'(x) = 4f'(x) - 3x^2$, so $p'(1) = 4(-2) - 3 = -11$. $-5$ adds the $3x^2$ term instead of subtracting it. 9 uses $f(1) = 3$ instead of $f'(1)$: $12 - 3$. $-8$ forgets to differentiate $x^3$.",
  },
  {
    id: "calcab-s202-q2",
    stimulusId: "calcab-s202",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "medium",
    stem: "Let $h(x) = f(x)\\,g(x)$. Based on the table, what is $h'(2)$?",
    options: ["$7$", "$15$", "$13$", "$-7$"],
    correctIndex: 0,
    explanation:
      "By the product rule, $h'(2) = f'(2)g(2) + f(2)g'(2) = 5(2) + (-1)(3) = 10 - 3 = 7$. 15 multiplies the derivatives, $f'(2)g'(2)$. 13 drops the sign of $f(2) = -1$. $-7$ subtracts the terms, mixing in the quotient rule.",
  },
  {
    id: "calcab-s202-q3",
    stimulusId: "calcab-s202",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "hard",
    stem: "Let $k(x) = \\dfrac{f(x)}{g(x)}$. Based on the table, what is $k'(3)$?",
    options: ["$-\\dfrac{16}{9}$", "$\\dfrac{16}{9}$", "$-\\dfrac{8}{9}$", "$2$"],
    correctIndex: 0,
    explanation:
      "By the quotient rule, $k'(3) = \\frac{f'(3)g(3) - f(3)g'(3)}{[g(3)]^2} = \\frac{4(-3) - 2(2)}{9} = \\frac{-16}{9}$. Reversing the numerator gives $\\frac{16}{9}$. Adding the two products gives $\\frac{-12 + 4}{9} = -\\frac{8}{9}$. Dividing the derivatives, $\\frac{f'(3)}{g'(3)} = \\frac{4}{2}$, gives 2.",
  },
  // ---- standalone ----
  {
    id: "calcab-u2-002",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{h \\to 0} \\frac{(2 + h)^4 - 16}{h}$?",
    options: ["$32$", "$16$", "$8$", "$0$"],
    correctIndex: 0,
    explanation:
      "The limit is the definition of $f'(2)$ for $f(x) = x^4$, since $f(2) = 16$. $f'(x) = 4x^3$, so $f'(2) = 4 \\cdot 8 = 32$. 16 is $f(2)$, and 8 is $2^3$ without the factor 4. 0 comes from substituting $h = 0$ in the numerator only.",
  },
  {
    id: "calcab-u2-003",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "easy",
    stem: "If $y = 6\\sqrt{x} - \\dfrac{4}{x^2}$, what is $\\dfrac{dy}{dx}$?",
    options: [
      "$\\dfrac{3}{\\sqrt{x}} + \\dfrac{8}{x^3}$",
      "$\\dfrac{3}{\\sqrt{x}} - \\dfrac{8}{x^3}$",
      "$\\dfrac{6}{\\sqrt{x}} + \\dfrac{8}{x^3}$",
      "$\\dfrac{3}{\\sqrt{x}} + \\dfrac{8}{x}$",
    ],
    correctIndex: 0,
    explanation:
      "Write $y = 6x^{1/2} - 4x^{-2}$. Then $\\frac{dy}{dx} = 3x^{-1/2} + 8x^{-3} = \\frac{3}{\\sqrt{x}} + \\frac{8}{x^3}$. Losing the sign of the negative exponent gives $-\\frac{8}{x^3}$. $\\frac{6}{\\sqrt{x}}$ forgets the factor $\\frac{1}{2}$. $\\frac{8}{x}$ lowers the exponent the wrong way (to $-1$ instead of $-3$).",
  },
  {
    id: "calcab-u2-004",
    unit: "unit-2",
    topicSlug: "derivatives-of-exponential-functions",
    difficulty: "easy",
    stem: "If $f(x) = 5e^x - 3\\ln x$, what is $f'(1)$?",
    options: ["$5e - 3$", "$5e + 3$", "$5e$", "$5 - 3e$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = 5e^x - \\frac{3}{x}$, so $f'(1) = 5e - 3$. $5e + 3$ has the wrong sign on the derivative of $\\ln x$. $5e$ treats $\\ln x$ as a constant. $5 - 3e$ swaps where $e$ appears.",
  },
  {
    id: "calcab-u2-005",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "medium",
    stem: "If $f(x) = x^2 \\sin x$, what is $f'(\\pi)$?",
    options: ["$-\\pi^2$", "$\\pi^2$", "$-2\\pi$", "$0$"],
    correctIndex: 0,
    explanation:
      "By the product rule, $f'(x) = 2x\\sin x + x^2\\cos x$. At $x = \\pi$: $2\\pi(0) + \\pi^2(-1) = -\\pi^2$. $\\pi^2$ uses $\\cos \\pi = 1$. $-2\\pi$ multiplies the derivatives, $2x \\cos x$. 0 keeps only the first term.",
  },
  {
    id: "calcab-u2-006",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "hard",
    stem: "If $f(x) = \\dfrac{\\sin x}{1 + \\cos x}$, which of the following is equivalent to $f'(x)$?",
    options: [
      "$\\dfrac{1}{1 + \\cos x}$",
      "$\\dfrac{-1}{1 + \\cos x}$",
      "$\\dfrac{\\cos x + \\cos 2x}{(1 + \\cos x)^2}$",
      "$-\\cot x$",
    ],
    correctIndex: 0,
    explanation:
      "Quotient rule: $f'(x) = \\frac{\\cos x(1 + \\cos x) - \\sin x(-\\sin x)}{(1 + \\cos x)^2} = \\frac{\\cos x + \\cos^2 x + \\sin^2 x}{(1 + \\cos x)^2} = \\frac{1 + \\cos x}{(1 + \\cos x)^2} = \\frac{1}{1 + \\cos x}$. Reversing the numerator gives $\\frac{-1}{1 + \\cos x}$. Subtracting $\\sin^2 x$ instead of adding it gives $\\cos x + \\cos^2 x - \\sin^2 x = \\cos x + \\cos 2x$. $-\\cot x$ divides the derivative of the top by the derivative of the bottom.",
  },
  {
    id: "calcab-u2-007",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "medium",
    stem: "Let $f(x) = \\begin{cases} x^2 - 3x, & x \\le 1 \\\\ -x - 1, & x > 1 \\end{cases}$. Which statement about $f$ at $x = 1$ is true?",
    options: [
      "$f$ is differentiable at $x = 1$, and $f'(1) = -1$.",
      "$f$ is continuous at $x = 1$ but not differentiable there.",
      "$f$ is not continuous at $x = 1$, so it is not differentiable there.",
      "$f$ is differentiable at $x = 1$, with $f'(1) = f(1) = -2$.",
    ],
    correctIndex: 0,
    explanation:
      "Both pieces equal $-2$ at $x = 1$, so $f$ is continuous there. The left piece has slope $2x - 3 = -1$ at $x = 1$ and the right piece has slope $-1$, so the one-sided derivatives agree and $f'(1) = -1$. A piecewise definition does not by itself create a corner. $f'(1) = -2$ confuses the function value with the slope.",
  },
  {
    id: "calcab-u2-008",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "hard",
    stem: "Let $f(x) = \\begin{cases} ax^3, & x \\le 1 \\\\ bx + 2, & x > 1 \\end{cases}$, where $a$ and $b$ are constants. If $f$ is differentiable at $x = 1$, what is the value of $b$?",
    options: ["$b = -3$", "$b = -1$", "$b = 3$", "$b = 1$"],
    correctIndex: 0,
    explanation:
      "Continuity at 1: $a = b + 2$. Matching slopes at 1: $3a = b$. Substituting, $a = 3a + 2$, so $a = -1$ and $b = 3a = -3$. $-1$ is the value of $a$. $3$ and $1$ come from sign slips, such as writing $a + 2 = b$ for the continuity condition.",
  },
  {
    id: "calcab-u2-009",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "medium",
    stem: "What is the average rate of change of $f(x) = x^3 - 2x$ on the interval $[1, 3]$?",
    options: ["$11$", "$10$", "$22$", "$12$"],
    correctIndex: 0,
    explanation:
      "Average rate of change $= \\frac{f(3) - f(1)}{3 - 1} = \\frac{21 - (-1)}{2} = 11$. 10 is the instantaneous rate $f'(2) = 3(4) - 2$ at the midpoint. 22 forgets to divide by the length of the interval. 12 averages the derivative values: $\\frac{f'(3) - f'(1)}{2} = \\frac{25 - 1}{2}$.",
  },
  {
    id: "calcab-u2-010",
    unit: "unit-2",
    topicSlug: "derivatives-of-exponential-functions",
    difficulty: "medium",
    stem: "If $f(x) = 4 \\cdot 3^x$, what is $f'(2)$?",
    options: ["$36 \\ln 3$", "$24$", "$36$", "$9 \\ln 3$"],
    correctIndex: 0,
    explanation:
      "$\\frac{d}{dx} 3^x = 3^x \\ln 3$, so $f'(x) = 4 \\cdot 3^x \\ln 3$ and $f'(2) = 36 \\ln 3$. 24 applies the power rule to an exponential, $4 \\cdot x \\cdot 3^{x - 1}$. 36 leaves out the factor $\\ln 3$. $9 \\ln 3$ forgets the constant factor 4.",
  },
  {
    id: "calcab-u2-011",
    unit: "unit-2",
    topicSlug: "derivatives-of-exponential-functions",
    difficulty: "medium",
    stem: "If $f(x) = \\dfrac{e^x}{x}$, what is $f'(1)$?",
    options: ["$0$", "$e$", "$2e$", "$-e$"],
    correctIndex: 0,
    explanation:
      "Quotient rule: $f'(x) = \\frac{x e^x - e^x \\cdot 1}{x^2} = \\frac{e^x(x - 1)}{x^2}$, so $f'(1) = 0$. $e$ divides the derivatives, $\\frac{e^x}{1}$. $2e$ adds the terms of the numerator. $-e$ keeps only the second term of the numerator.",
  },
  {
    id: "calcab-u2-012",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "medium",
    stem: "At which values of $x$ is the line tangent to the graph of $y = x^3 - 3x^2$ parallel to the line $y = 9x + 4$?",
    options: ["$x = -1$ and $x = 3$", "$x = 1$ and $x = -3$", "$x = 3$ only", "$x = 0$ and $x = 2$"],
    correctIndex: 0,
    explanation:
      "Parallel lines have equal slopes, so solve $y' = 3x^2 - 6x = 9$: $x^2 - 2x - 3 = 0$, $(x - 3)(x + 1) = 0$, $x = 3$ or $x = -1$. $x = 1$ and $x = -3$ come from factoring with the signs reversed. Keeping only $x = 3$ drops a root. $x = 0$ and $x = 2$ are where the tangent is horizontal.",
  },
  {
    id: "calcab-u2-013",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "hard",
    stem: "Let $f(x) = |x^2 - 4|$. What is $f'(1)$?",
    options: ["$-2$", "$2$", "$-3$", "$f'(1)$ does not exist."],
    correctIndex: 0,
    explanation:
      "For $-2 < x < 2$, $x^2 - 4 < 0$, so $f(x) = 4 - x^2$ there and $f'(x) = -2x$, giving $f'(1) = -2$. 2 ignores the absolute value. $-3$ is the value of $x^2 - 4$ at $x = 1$, not a slope. The corners of $f$ are at $x = \\pm 2$; at $x = 1$ the graph is smooth, so $f'(1)$ exists.",
  },
  {
    id: "calcab-u2-014",
    unit: "unit-2",
    topicSlug: "definition-of-derivative-calcab",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\lim_{x \\to \\pi} \\frac{\\cos x + 1}{x - \\pi}$?",
    options: ["$0$", "$-1$", "$1$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "Since $\\cos \\pi = -1$, the expression is $\\frac{\\cos x - \\cos \\pi}{x - \\pi}$, the definition of the derivative of $\\cos x$ at $x = \\pi$. That derivative is $-\\sin \\pi = 0$. $-1$ evaluates $\\cos \\pi$ instead of the derivative, and 1 uses $-\\cos \\pi$. The $0/0$ form does not mean the limit fails to exist; it is a difference quotient with limit 0.",
  },
  {
    id: "calcab-u2-015",
    unit: "unit-2",
    topicSlug: "derivatives-of-exponential-functions",
    difficulty: "hard",
    stem: "The line tangent to the graph of $y = e^x$ at $x = a$ passes through the origin. What is the value of $a$?",
    options: ["$1$", "$0$", "$e$", "$-1$"],
    correctIndex: 0,
    explanation:
      "The tangent line at $x = a$ is $y - e^a = e^a(x - a)$. Passing through $(0, 0)$ requires $-e^a = -a e^a$, and since $e^a > 0$, $a = 1$. At $a = 0$ the tangent is $y = x + 1$, which misses the origin. $e$ is the $y$-value of the point of tangency, and $-1$ is a sign slip in solving.",
  },
  {
    id: "calcab-u2-016",
    unit: "unit-2",
    topicSlug: "basic-differentiation-rules-calcab",
    difficulty: "medium",
    stem: "If $y = (x^2 + 3)(2x - 1)$, what is the value of $\\dfrac{dy}{dx}$ at $x = 1$?",
    options: ["$10$", "$4$", "$2$", "$8$"],
    correctIndex: 0,
    explanation:
      "Product rule: $\\frac{dy}{dx} = 2x(2x - 1) + (x^2 + 3)(2)$. At $x = 1$: $2(1) + 4(2) = 10$. 4 multiplies the derivatives, $2x \\cdot 2$. 2 keeps only the first term of the product rule and 8 only the second.",
  },
]
