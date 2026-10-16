/**
 * AP Calculus AB diagnostic v2, Unit 5: Analytical Applications of
 * Differentiation. No calculator. Stimulus sets: the graph of f′ (calcab-s501),
 * a table of f, f′, f″ at critical points (calcab-s502) and a fencing
 * optimization (calcab-s503).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s501",
    title: "Graph of the derivative f′",
    kind: "figure",
    content:
      "The function $f$ is differentiable on the closed interval $-3 \\le x \\le 4$. The graph of its derivative $f'$, shown, consists of three line segments. " +
      "They join the points $(-3, -2)$, $(-1, 2)$, $(2, -1)$ and $(4, 3)$, in that order, so $f'$ crosses the $x$-axis at $x = -2$, $x = 1$ and $x = 2.5$.",
    svg: FIGURES["calcab-s501"],
  },
  {
    id: "calcab-s502",
    title: "Values of f, f′ and f″ at three points",
    kind: "table",
    content:
      "The function $f$ is twice differentiable for all real numbers. The table gives values of $f$, $f'$ and $f''$ at three values of $x$.\n\n" +
      "| $x$ | 1 | 3 | 5 |\n" +
      "| --- | --- | --- | --- |\n" +
      "| $f(x)$ | 4 | −2 | 6 |\n" +
      "| $f'(x)$ | 0 | 0 | 0 |\n" +
      "| $f''(x)$ | −3 | 5 | 0 |",
  },
  {
    id: "calcab-s503",
    title: "Fencing a pen beside a barn",
    kind: "passage",
    content:
      "A farmer has 120 meters of fencing to enclose a rectangular pen along the side of a long barn. The barn wall forms one side of the pen, so fencing is needed for the other three sides only. " +
      "Let $x$ be the length, in meters, of each of the two sides perpendicular to the barn, so the side parallel to the barn is $120 - 2x$ meters long, with $0 < x < 60$. The farmer wants the pen with the greatest possible area.",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s501: graph of f' ----
  {
    id: "calcab-s501-q1",
    stimulusId: "calcab-s501",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "easy",
    stem: "On which of the following intervals is $f$ increasing?",
    options: [
      "$-2 < x < 1$ and $2.5 < x < 4$",
      "$-3 < x < -1$ and $2 < x < 4$",
      "$-1 < x < 2$ only",
      "$-2 < x < 1$ only",
    ],
    correctIndex: 0,
    explanation:
      "$f$ is increasing where $f'(x) > 0$, that is, where the graph of $f'$ is above the $x$-axis: $-2 < x < 1$ and $2.5 < x < 4$. $-3 < x < -1$ and $2 < x < 4$ are where $f'$ is increasing (where $f$ is concave up). $-1 < x < 2$ is where $f'$ decreases. Stopping at $-2 < x < 1$ misses the last interval.",
  },
  {
    id: "calcab-s501-q2",
    stimulusId: "calcab-s501",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "medium",
    stem: "At which value of $x$ in the open interval $-3 < x < 4$ does $f$ have a relative maximum?",
    options: ["$x = 1$", "$x = -1$", "$x = 2.5$", "$x = -2$"],
    correctIndex: 0,
    explanation:
      "A relative maximum of $f$ occurs where $f'$ changes from positive to negative. That happens only at $x = 1$. At $x = -2$ and $x = 2.5$, $f'$ changes from negative to positive, so those are relative minima. $x = -1$ is where $f'$ itself has its maximum, which marks a point of inflection of $f$, not an extremum.",
  },
  {
    id: "calcab-s501-q3",
    stimulusId: "calcab-s501",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "hard",
    stem: "At which values of $x$ does the graph of $f$ have a point of inflection?",
    options: [
      "$x = -1$ and $x = 2$",
      "$x = -2$, $x = 1$ and $x = 2.5$",
      "$x = 1$ only",
      "$x = -1$ only",
    ],
    correctIndex: 0,
    explanation:
      "Points of inflection of $f$ are where $f''$ changes sign, that is, where $f'$ changes from increasing to decreasing or back. $f'$ increases on $(-3, -1)$, decreases on $(-1, 2)$ and increases on $(2, 4)$, so the inflection points are at $x = -1$ and $x = 2$. $x = -2$, $1$ and $2.5$ are the zeros of $f'$, where $f$ has extrema. Listing only $x = -1$ misses the change at $x = 2$.",
  },
  // ---- calcab-s502: table of f, f', f'' ----
  {
    id: "calcab-s502-q1",
    stimulusId: "calcab-s502",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "easy",
    stem: "Based on the table, what does the Second Derivative Test tell us about $f$ at $x = 1$?",
    options: [
      "$f$ has a relative maximum, since $f''(1) < 0$.",
      "$f$ has a relative minimum, since $f'(1) = 0$ and $f''(1) \\ne 0$.",
      "The graph of $f$ has a point of inflection, since $f''(1) \\ne 0$.",
      "The test gives no conclusion, since $f'(1) = 0$ at $x = 1$.",
    ],
    correctIndex: 0,
    explanation:
      "$f'(1) = 0$ and $f''(1) = -3 < 0$: the graph is concave down at a horizontal tangent, so $f$ has a relative maximum at $x = 1$. A relative minimum would need $f''(1) > 0$. An inflection point needs $f''$ to change sign, not just to be nonzero. The test is inconclusive only when $f''(1) = 0$.",
  },
  {
    id: "calcab-s502-q2",
    stimulusId: "calcab-s502",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "medium",
    stem: "Based only on the information in the table, what can be concluded about $f$ at $x = 5$?",
    options: [
      "No conclusion about an extremum or inflection can be drawn.",
      "The graph of $f$ has a point of inflection, because $f''(5) = 0$.",
      "$f$ has a relative minimum, because $f'(5) = 0$ and $f(5) > f(3)$.",
      "$f$ has a relative maximum, because $f(5) = 6$ is the largest value.",
    ],
    correctIndex: 0,
    explanation:
      "With $f'(5) = 0$ and $f''(5) = 0$, the Second Derivative Test is inconclusive, and the table gives no sign information for $f'$ or $f''$ near 5. $f$ could have a maximum ($6 - (x - 5)^4$), a minimum ($6 + (x - 5)^4$) or neither ($6 + (x - 5)^3$) there. $f''(5) = 0$ alone does not make an inflection point. Comparing $f(5)$ with values at other tabulated points says nothing about a relative extremum at 5.",
  },
  {
    id: "calcab-s502-q3",
    stimulusId: "calcab-s502",
    unit: "unit-5",
    topicSlug: "theorem-applications-calcab",
    difficulty: "hard",
    stem: "Based on the table, the Mean Value Theorem guarantees a number $c$ with $1 < c < 3$ such that $f'(c)$ equals which value?",
    options: ["$-3$", "$-6$", "$3$", "$1$"],
    correctIndex: 0,
    explanation:
      "$f$ is differentiable, so the MVT applies on $[1, 3]$: $f'(c) = \\frac{f(3) - f(1)}{3 - 1} = \\frac{-2 - 4}{2} = -3$. $-6$ forgets to divide by the length of the interval. 3 reverses the subtraction. 1 averages the second-derivative values, $\\frac{-3 + 5}{2}$, which is not what the MVT is about.",
  },
  // ---- calcab-s503: fencing optimization ----
  {
    id: "calcab-s503-q1",
    stimulusId: "calcab-s503",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "easy",
    stem: "Which function gives the area $A$ of the pen, in square meters, in terms of $x$?",
    options: [
      "$A(x) = x(120 - 2x)$",
      "$A(x) = x(120 - x)$",
      "$A(x) = x(60 - x)$",
      "$A(x) = 2x(120 - 2x)$",
    ],
    correctIndex: 0,
    explanation:
      "The pen is a rectangle with sides $x$ and $120 - 2x$, so $A(x) = x(120 - 2x)$. $x(120 - x)$ subtracts only one of the two perpendicular sides. $x(60 - x)$ fences all four sides ($2x + 2y = 120$). $2x(120 - 2x)$ multiplies by both perpendicular sides instead of using one length and one width.",
  },
  {
    id: "calcab-s503-q2",
    stimulusId: "calcab-s503",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "medium",
    stem: "What is the greatest possible area of the pen?",
    options: ["1,800 square meters", "3,600 square meters", "900 square meters", "1,600 square meters"],
    correctIndex: 0,
    explanation:
      "$A'(x) = 120 - 4x = 0$ at $x = 30$, and $A(30) = 30 \\cdot 60 = 1{,}800$ square meters. 3,600 maximizes $x(120 - x)$, which uses the wrong area function. 900 makes the pen a 30-by-30 square, leaving 30 m of fencing unused. 1,600 makes all three fenced sides 40 m, which is not the optimum.",
  },
  {
    id: "calcab-s503-q3",
    stimulusId: "calcab-s503",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "hard",
    stem: "Which of the following is a correct justification that $x = 30$ gives the greatest area on $0 < x < 60$?",
    options: [
      "$A'$ changes from positive to negative at $x = 30$, the only critical point in the interval.",
      "$A'(30) = 0$, and a zero of the derivative on an open interval always gives a maximum.",
      "$A(30) = 1{,}800$ is larger than both $A(20) = 1{,}600$ and $A(40) = 1{,}600$.",
      "$A$ is continuous, so the Extreme Value Theorem places the maximum at $x = 30$.",
    ],
    correctIndex: 0,
    explanation:
      "$A'(x) = 120 - 4x$ is positive to the left of 30 and negative to the right, and 30 is the only critical point, so $A$ increases up to $x = 30$ and decreases after: an absolute maximum on the interval. A zero of the derivative can be a minimum or neither. Comparing $A$ at two sample points cannot rule out larger values elsewhere. The Extreme Value Theorem needs a closed interval, and it never says where the maximum is.",
  },
  // ---- standalone ----
  {
    id: "calcab-u5-002",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "easy",
    stem: "What are the critical points of $f(x) = x^3 - 12x$?",
    options: ["$x = \\pm 2$", "$x = 2$ only", "$x = 0$ and $x = \\pm 2$", "$x = \\pm 2\\sqrt{3}$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$, which is 0 at $x = \\pm 2$ and is defined everywhere. $x = 2$ only forgets the negative square root. $x = 0$ is a zero of $f$, not of $f'$, and $\\pm 2\\sqrt{3}$ are the other zeros of $f$.",
  },
  {
    id: "calcab-u5-003",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "easy",
    stem: "The derivative of a function $f$ is $f'(x) = (x - 1)(x + 3)$. On which interval is $f$ decreasing?",
    options: ["$-3 < x < 1$", "$x < -3$ or $x > 1$", "$x > -3$ only", "$x < -3$ only"],
    correctIndex: 0,
    explanation:
      "$f$ decreases where $f'(x) < 0$. The product $(x - 1)(x + 3)$ is negative between its zeros, on $-3 < x < 1$. Outside that interval $f' > 0$ and $f$ increases. $x > -3$ only uses the sign of one factor, $x + 3$, and ignores $x - 1$. On $x < -3$ only, $f$ is increasing.",
  },
  {
    id: "calcab-u5-004",
    unit: "unit-5",
    topicSlug: "theorem-applications-calcab",
    difficulty: "easy",
    stem: "Let $f(x) = x^3$. What value of $c$ in the interval $0 < c < 3$ satisfies the conclusion of the Mean Value Theorem for $f$ on $[0, 3]$?",
    options: ["$c = \\sqrt{3}$", "$c = \\dfrac{3}{2}$", "$c = \\dfrac{3}{\\sqrt[3]{4}}$", "$c = \\sqrt[3]{9}$"],
    correctIndex: 0,
    explanation:
      "The slope of the secant line is $\\frac{27 - 0}{3 - 0} = 9$. Setting $f'(c) = 3c^2 = 9$ gives $c = \\sqrt{3}$, which lies in $(0, 3)$. $\\frac{3}{2}$ is the midpoint of the interval, which works only for quadratics. $\\frac{3}{\\sqrt[3]{4}}$ solves $c^3 = \\frac{27}{4}$, the average value of $f$ on $[0, 3]$ (the Mean Value Theorem for integrals). $\\sqrt[3]{9}$ solves $f(c) = 9$, setting the function, not its derivative, equal to the secant slope.",
  },
  {
    id: "calcab-u5-005",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "easy",
    stem: "On what interval is the graph of $f(x) = x^3 - 6x^2$ concave up?",
    options: ["$x > 2$", "$0 < x < 4$", "$x < 2$", "$x > 4$"],
    correctIndex: 0,
    explanation:
      "$f''(x) = 6x - 12 > 0$ when $x > 2$. $x < 2$ is where the graph is concave down. $0 < x < 4$ is where $f'(x) = 3x^2 - 12x < 0$, so $f$ is decreasing there; that is a statement about $f'$, not concavity. $x > 4$ is where $f$ is increasing.",
  },
  {
    id: "calcab-u5-006",
    unit: "unit-5",
    topicSlug: "theorem-applications-calcab",
    difficulty: "easy",
    stem: "A function $f$ is continuous on the closed interval $[2, 7]$. Nothing else is known about $f$. Which of the following must be true?",
    options: [
      "$f$ attains an absolute maximum on $[2, 7]$.",
      "$f$ has a relative maximum at some $c$ in $(2, 7)$.",
      "$f'(c) = 0$ for at least one number $c$ in $(2, 7)$.",
      "$f(c) = 0$ for at least one number $c$ in $(2, 7)$.",
    ],
    correctIndex: 0,
    explanation:
      "The Extreme Value Theorem says a function continuous on a closed interval attains an absolute maximum (and minimum) there. The maximum may occur at an endpoint, so no relative maximum inside $(2, 7)$ is guaranteed (think of an increasing function). A zero derivative needs differentiability and, for Rolle's Theorem, equal endpoint values. A zero of $f$ needs a sign change, which is not given.",
  },
  {
    id: "calcab-u5-007",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "easy",
    stem: "A function $f$ is differentiable, and $f'(x)$ changes from negative to positive at $x = 3$. What does the First Derivative Test conclude about $f$ at $x = 3$?",
    options: [
      "$f$ has a relative minimum there.",
      "$f$ has a relative maximum at $x = 3$.",
      "The graph of $f$ has a point of inflection at $x = 3$.",
      "$f$ has no relative extremum at $x = 3$.",
    ],
    correctIndex: 0,
    explanation:
      "$f$ decreases just before $x = 3$ and increases just after, so $f(3)$ is lower than nearby values: a relative minimum. A maximum needs $f'$ to change from positive to negative. A sign change of $f'$, not of $f''$, is what this describes, so it is not an inflection point.",
  },
  {
    id: "calcab-u5-008",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "easy",
    stem: "Two positive numbers have a sum of 20. What is the greatest possible value of their product?",
    options: ["$100$", "$96$", "$75$", "$99$"],
    correctIndex: 0,
    explanation:
      "With $x + y = 20$, the product is $P(x) = x(20 - x)$, and $P'(x) = 20 - 2x = 0$ at $x = 10$. $P'' = -2 < 0$, so $P(10) = 100$ is the maximum. 99 ($9 \\cdot 11$), 96 ($8 \\cdot 12$) and 75 ($5 \\cdot 15$) are products of other pairs with sum 20.",
  },
  {
    id: "calcab-u5-009",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "medium",
    stem: "The derivative of a function $f$ is $f'(x) = (x + 2)(x - 1)^2(x - 4)$. Which of the following describes the relative extrema of $f$?",
    options: [
      "A relative maximum at $x = -2$ and a relative minimum at $x = 4$",
      "A relative minimum at $x = -2$ and a relative maximum at $x = 4$",
      "Relative maxima at $x = -2$ and $x = 1$, and a relative minimum at $x = 4$",
      "A relative maximum at $x = 1$ and relative minima at $x = -2$ and $x = 4$",
    ],
    correctIndex: 0,
    explanation:
      "$(x - 1)^2 \\ge 0$, so the sign of $f'$ is the sign of $(x + 2)(x - 4)$: positive for $x < -2$, negative on $-2 < x < 4$ (except 0 at $x = 1$), positive for $x > 4$. So $f$ has a relative maximum at $-2$ and a relative minimum at $4$, and none at $x = 1$, where $f'$ does not change sign. Swapping max and min reverses the sign analysis. Counting $x = 1$ as an extremum treats every zero of $f'$ as an extremum.",
  },
  {
    id: "calcab-u5-010",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "medium",
    stem: "Let $f(x) = 2x^3 - 3x^2 - 12x$. On the closed interval $[-2, 3]$, what is the absolute minimum value of $f$?",
    options: ["$-20$", "$-4$", "$-9$", "$7$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = 6x^2 - 6x - 12 = 6(x - 2)(x + 1)$, so the critical points are $-1$ and $2$. Candidates: $f(-2) = -16 - 12 + 24 = -4$, $f(-1) = -2 - 3 + 12 = 7$, $f(2) = 16 - 12 - 24 = -20$, $f(3) = 54 - 27 - 36 = -9$. The minimum value is $-20$. $-4$ and $-9$ are the endpoint values, which a check of endpoints alone would compare. 7 is the absolute maximum value.",
  },
  {
    id: "calcab-u5-011",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "medium",
    stem: "The second derivative of a function $f$ is $f''(x) = x(x - 2)^2$. At which values of $x$ does the graph of $f$ have a point of inflection?",
    options: ["$x = 0$ only", "$x = 0$ and $x = 2$", "$x = 2$ only", "There are none."],
    correctIndex: 0,
    explanation:
      "Inflection points require $f''$ to change sign. $(x - 2)^2 \\ge 0$, so $f''$ has the sign of $x$: negative for $x < 0$ and positive for $x > 0$ (it is 0 at $x = 2$ but positive on both sides). Only $x = 0$ is an inflection point. Including $x = 2$ treats every zero of $f''$ as an inflection point.",
  },
  {
    id: "calcab-u5-012",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "medium",
    stem: "A function $f$ satisfies $f'(x) > 0$ and $f''(x) < 0$ for all $x$. Which of the following could be the values of $f(0)$, $f(1)$ and $f(2)$, in that order?",
    options: ["$1, \\; 3, \\; 4$", "$1, \\; 2, \\; 4$", "$4, \\; 3, \\; 1$", "$1, \\; 3, \\; 5$"],
    correctIndex: 0,
    explanation:
      "$f' > 0$ means the values increase. $f'' < 0$ means the graph is concave down, so the increases shrink over equal steps: $1, 3, 4$ rises by 2 and then by 1. $1, 2, 4$ has growing increases (concave up). $4, 3, 1$ is decreasing. $1, 3, 5$ has equal increases, consistent with a line, for which $f'' = 0$.",
  },
  {
    id: "calcab-u5-013",
    unit: "unit-5",
    topicSlug: "theorem-applications-calcab",
    difficulty: "medium",
    stem: "A function $f$ is differentiable for all $x$, with $f(2) = 5$ and $f(6) = -3$. Which statement must be true?",
    options: [
      "$f'(c) = -2$ for some $c$ with $2 < c < 6$.",
      "$f'(c) = 0$ for some number $c$ with $2 < c < 6$.",
      "$f'(x) = -2$ for every $x$ with $2 < x < 6$.",
      "$f'(c) = 2$ for some number $c$ with $2 < c < 6$.",
    ],
    correctIndex: 0,
    explanation:
      "$f$ is differentiable, hence continuous, so the MVT applies on $[2, 6]$: some $c$ has $f'(c) = \\frac{-3 - 5}{6 - 2} = -2$. A zero derivative is guaranteed by Rolle's Theorem only when $f(2) = f(6)$. The MVT guarantees the average slope at one point, not at every point. $+2$ reverses the subtraction.",
  },
  {
    id: "calcab-u5-014",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "medium",
    stem: "What is the $x$-coordinate of the point on the graph of $y = \\sqrt{x}$ that is closest to the point $(4, 0)$?",
    options: ["$\\dfrac{7}{2}$", "$4$", "$\\sqrt{7/2}$", "$2$"],
    correctIndex: 0,
    explanation:
      "Minimize the squared distance $D(x) = (x - 4)^2 + (\\sqrt{x})^2 = (x - 4)^2 + x$. $D'(x) = 2(x - 4) + 1 = 0$ at $x = \\frac{7}{2}$, and $D'' = 2 > 0$, so that is the minimum. $x = 4$ is directly above the point but not closest, since the curve slopes there. $\\sqrt{7/2}$ is the $y$-coordinate of the closest point, not its $x$-coordinate. 2 is the $y$-value at $x = 4$.",
  },
  {
    id: "calcab-u5-015",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "medium",
    stem: "What is the relative maximum value of $f(x) = xe^{-x}$?",
    options: ["$\\dfrac{1}{e}$", "$1$", "$e$", "$\\dfrac{2}{e^2}$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = e^{-x} - xe^{-x} = e^{-x}(1 - x)$, which changes from positive to negative at $x = 1$. The maximum value is $f(1) = \\frac{1}{e}$. 1 is the $x$-coordinate, not the value. $e$ uses $e^{x}$ instead of $e^{-x}$ when evaluating. $\\frac{2}{e^2}$ is $f(2)$, the value at the inflection point, where $f''(x) = e^{-x}(x - 2) = 0$.",
  },
  {
    id: "calcab-u5-016",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "medium",
    stem: "The derivative of a function $f$ is $f'(x) = 3x^2 - 6x$. On which interval is $f$ both decreasing and concave up?",
    options: ["$1 < x < 2$", "$0 < x < 1$", "$0 < x < 2$", "$x > 2$"],
    correctIndex: 0,
    explanation:
      "$f$ is decreasing where $f'(x) = 3x(x - 2) < 0$, on $0 < x < 2$. $f$ is concave up where $f''(x) = 6x - 6 > 0$, for $x > 1$. Both hold on $1 < x < 2$. On $0 < x < 1$, $f$ is decreasing but concave down. $0 < x < 2$ checks only the first condition, and on $x > 2$, $f$ is increasing.",
  },
  {
    id: "calcab-u5-017",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "hard",
    stem: "Let $f(x) = x^4 - 4x^3$. Which statement about the critical points of $f$ is true?",
    options: [
      "$f$ has a relative minimum at $x = 3$ and no relative extremum at $x = 0$.",
      "$f$ has a relative minimum at $x = 3$ and a relative maximum at $x = 0$.",
      "$f$ has a relative maximum at $x = 3$ and a relative minimum at $x = 0$.",
      "$f$ has relative minima at both $x = 0$ and $x = 3$.",
    ],
    correctIndex: 0,
    explanation:
      "$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$, so the critical points are 0 and 3. $f''(x) = 12x^2 - 24x$: $f''(3) = 36 > 0$, a relative minimum. $f''(0) = 0$, so that test is inconclusive at 0; the first derivative test settles it, since $4x^2(x - 3) < 0$ on both sides of 0. No sign change means no extremum at $x = 0$. The other choices assume an extremum at every critical point.",
  },
  {
    id: "calcab-u5-018",
    unit: "unit-5",
    topicSlug: "theorem-applications-calcab",
    difficulty: "hard",
    stem: "Which function satisfies all the hypotheses of Rolle's Theorem on the interval $[-1, 1]$?",
    options: [
      "$f(x) = x^4 - x^2$",
      "$f(x) = |x|$",
      "$f(x) = x^{2/3}$",
      "$f(x) = x^3$",
    ],
    correctIndex: 0,
    explanation:
      "Rolle's Theorem needs continuity on $[-1, 1]$, differentiability on $(-1, 1)$ and $f(-1) = f(1)$. $x^4 - x^2$ is a polynomial with $f(-1) = f(1) = 0$. $|x|$ and $x^{2/3}$ have equal endpoint values but are not differentiable at $x = 0$ (a corner and a cusp). $x^3$ is differentiable but $f(-1) = -1 \\ne 1 = f(1)$.",
  },
  {
    id: "calcab-u5-019",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "hard",
    stem: "What is the minimum value of $f(x) = x + \\dfrac{4}{x}$ on the interval $x > 0$?",
    options: ["$4$", "$2$", "$5$", "There is no minimum, because the interval is open."],
    correctIndex: 0,
    explanation:
      "$f'(x) = 1 - \\frac{4}{x^2} = 0$ at $x = 2$ (the only critical point for $x > 0$), with $f' < 0$ before and $f' > 0$ after, so $f(2) = 2 + 2 = 4$ is the absolute minimum. 2 is where it occurs, not the value. 5 is $f(1)$. An open interval does not rule out a minimum; the EVT only fails to guarantee one, and here $f$ has one.",
  },
  {
    id: "calcab-u5-020",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "hard",
    stem: "The function $f(x) = x^3 + ax^2 + bx$, where $a$ and $b$ are constants, has critical points at $x = -3$ and $x = 1$. What is the value of $a + b$?",
    options: ["$-6$", "$6$", "$-12$", "$3$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = 3x^2 + 2ax + b$ must equal $3(x + 3)(x - 1) = 3x^2 + 6x - 9$. So $2a = 6$, giving $a = 3$, and $b = -9$: $a + b = -6$. 6 comes from $3(x - 3)(x + 1)$, the roots with the wrong signs. $-12$ uses $b = -9$ and $a = -3$. 3 is $a$ alone.",
  },
  {
    id: "calcab-u5-021",
    unit: "unit-5",
    topicSlug: "optimization-calcab",
    difficulty: "hard",
    stem: "A closed cylindrical can must hold $16\\pi$ cubic inches. What height, in inches, minimizes the total surface area of the can?",
    options: ["$4$", "$2$", "$2\\sqrt[3]{2}$", "$8$"],
    correctIndex: 0,
    explanation:
      "From $\\pi r^2 h = 16\\pi$, $h = \\frac{16}{r^2}$. The surface area is $S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{32\\pi}{r}$. $S' = 4\\pi r - \\frac{32\\pi}{r^2} = 0$ gives $r^3 = 8$, $r = 2$, and then $h = \\frac{16}{4} = 4$. 2 is the radius. $2\\sqrt[3]{2}$ is the radius for an open-top can ($r^3 = 16$). 8 solves $r^3 = 8$ as $r = 8$.",
  },
  {
    id: "calcab-u5-022",
    unit: "unit-5",
    topicSlug: "second-derivative-test",
    difficulty: "hard",
    stem: "A function $f$ is twice differentiable with $f(2) = 3$, $f'(2) = 0$, and $f''(x) < 0$ for all $x$. Which statement must be true?",
    options: [
      "$f(x) \\le 3$ for every real number $x$",
      "$f$ has a relative minimum value at $x = 2$",
      "$f(x) > 3$ for at least one $x$ with $x < 2$",
      "$f'(x) < 0$ for every number $x$ with $x < 2$",
    ],
    correctIndex: 0,
    explanation:
      "$f'' < 0$ everywhere means $f'$ is decreasing. Since $f'(2) = 0$, $f' > 0$ for $x < 2$ and $f' < 0$ for $x > 2$: $f$ rises to $x = 2$ and falls after, so $f(2) = 3$ is the absolute maximum and $f(x) \\le 3$ everywhere. A concave-down horizontal tangent is a maximum, not a minimum. $f(x) > 3$ to the left contradicts that maximum, and $f' < 0$ for $x < 2$ has the sign reversed.",
  },
  {
    id: "calcab-u5-023",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "hard",
    stem: "The function $f$ is differentiable and $f'(x) > 0$ for all $x$. Let $g(x) = f\\left(x^2\\right)$. On which interval is $g$ increasing?",
    options: [
      "Only on the interval $x > 0$",
      "Only on the interval $x < 0$",
      "On the entire real line",
      "On no interval at all",
    ],
    correctIndex: 0,
    explanation:
      "By the chain rule, $g'(x) = 2x \\cdot f'(x^2)$. Since $f'(x^2) > 0$, the sign of $g'$ is the sign of $2x$: positive for $x > 0$. So $g$ increases for $x > 0$ and decreases for $x < 0$. Treating $g$ as increasing everywhere because $f$ is increasing forgets the inner derivative $2x$.",
  },
  {
    id: "calcab-u5-024",
    unit: "unit-5",
    topicSlug: "applications-of-derivatives-calcab",
    difficulty: "hard",
    stem: "What is the absolute minimum value of $f(x) = x - 2\\ln x$ on the closed interval $[1, e^2]$?",
    options: ["$2 - 2\\ln 2$", "$1$", "$e^2 - 4$", "$0$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = 1 - \\frac{2}{x} = 0$ at $x = 2$. Candidates: $f(1) = 1$, $f(2) = 2 - 2\\ln 2 \\approx 0.61$ (since $\\ln 2 < 0.7$), $f(e^2) = e^2 - 4 \\approx 3.39$. The minimum is $2 - 2\\ln 2$. 1 is the value at the left endpoint, which skips the critical point. $e^2 - 4$ is the absolute maximum. 0 is not a value of $f$ on the interval; it would require $x = 2\\ln x$.",
  },
]
