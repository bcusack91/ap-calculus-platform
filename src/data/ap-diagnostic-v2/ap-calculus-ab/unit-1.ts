/**
 * AP Calculus AB diagnostic v2, Unit 1: Limits and Continuity.
 * No calculator. Stimulus sets: a piecewise graph (calcab-s101), a table of
 * values near x = 3 (calcab-s102) and an IVT table (calcab-s103).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s101",
    title: "Graph of a piecewise-linear function f",
    kind: "figure",
    content:
      "The graph of the function $f$ on the closed interval $-4 \\le x \\le 5$ consists of line segments and two isolated points. " +
      "From $(-4, 1)$ a segment rises to an open circle at $(-2, 3)$. A filled point is at $(-2, -1)$, and from it a segment rises to an open circle at $(1, 2)$. " +
      "A filled point is at $(1, 4)$. From the open circle at $(1, 2)$ a segment falls to $(3, 0)$, and from $(3, 0)$ a segment rises to $(5, 2)$.",
    svg: FIGURES["calcab-s101"],
  },
  {
    id: "calcab-s102",
    title: "Values of f and g near x = 3",
    kind: "table",
    content:
      "The functions $f$ and $g$ are defined for all $x$ near 3. Selected values of $f(x)$ and $g(x)$ for $x$ close to 3 are shown in the table. The values continue the trend shown as $x$ gets closer to 3.\n\n" +
      "| $x$ | 2.9 | 2.99 | 2.999 | 3.001 | 3.01 | 3.1 |\n" +
      "| --- | --- | --- | --- | --- | --- | --- |\n" +
      "| $f(x)$ | 3.71 | 3.97 | 3.997 | 4.003 | 4.03 | 4.31 |\n" +
      "| $g(x)$ | −0.82 | −0.98 | −0.998 | 2.004 | 2.04 | 2.41 |",
  },
  {
    id: "calcab-s103",
    title: "A continuous function given by a table",
    kind: "table",
    content:
      "The function $f$ is continuous on the closed interval $0 \\le x \\le 8$. Selected values of $f$ are shown in the table. Nothing else is known about $f$.\n\n" +
      "| $x$ | 0 | 2 | 4 | 6 | 8 |\n" +
      "| --- | --- | --- | --- | --- | --- |\n" +
      "| $f(x)$ | 3 | −1 | 2 | 2 | −4 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s101: graph of f ----
  {
    id: "calcab-s101-q1",
    stimulusId: "calcab-s101",
    unit: "unit-1",
    topicSlug: "estimating-limits-graphs",
    difficulty: "easy",
    stem: "Based on the graph of $f$, what is $\\displaystyle\\lim_{x \\to -2^-} f(x)$?",
    options: ["$3$", "$-1$", "$1$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "As $x$ approaches $-2$ from the left, the graph follows the segment from $(-4, 1)$ up toward the open circle at $(-2, 3)$, so the left-hand limit is 3. The value $-1$ is $f(-2)$ and the right-hand limit, not the left-hand one. 1 is the value at the left endpoint $x = -4$. The two-sided limit at $-2$ does not exist, but the one-sided limit asked for does.",
  },
  {
    id: "calcab-s101-q2",
    stimulusId: "calcab-s101",
    unit: "unit-1",
    topicSlug: "types-of-discontinuity",
    difficulty: "medium",
    stem: "Which statement about $f$ at $x = 1$ is supported by the graph?",
    options: [
      "$\\lim_{x \\to 1} f(x) = 2 \\ne f(1)$, so the discontinuity is removable.",
      "$\\lim_{x \\to 1} f(x) = 4$ and $f(1) = 4$, so $f$ is continuous at $x = 1$.",
      "$\\lim_{x \\to 1} f(x)$ does not exist, so the discontinuity at $x = 1$ is a jump.",
      "$\\lim_{x \\to 1} f(x) = 2$ and $f(1) = 2$, so $f$ is continuous at $x = 1$.",
    ],
    correctIndex: 0,
    explanation:
      "From both sides the graph approaches the open circle at $(1, 2)$, so $\\lim_{x \\to 1} f(x) = 2$. The filled point shows $f(1) = 4 \\ne 2$, so the limit exists but differs from the function value: a removable discontinuity. Reading the isolated point as the limit gives 4; reading the open circle as the value gives $f(1) = 2$; and the one-sided limits agree, so it is not a jump.",
  },
  {
    id: "calcab-s101-q3",
    stimulusId: "calcab-s101",
    unit: "unit-1",
    topicSlug: "estimating-limits-graphs",
    difficulty: "hard",
    stem: "Based on the graph, what is $\\displaystyle\\lim_{x \\to 4} f(f(x))$?",
    options: ["$2$", "$4$", "$1$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "Near $x = 4$, $f(x) = x - 3$, so $f(x) \\to 1$ (from below when $x < 4$, from above when $x > 4$). As the input approaches 1 from either side, $f$ approaches 2 (the open circle), so $\\lim_{x \\to 4} f(f(x)) = 2$. The answer 4 is $f(f(4)) = f(1)$, which uses the isolated point instead of the limit. 1 is only the inner limit. The limit exists because both one-sided limits of the outer function at 1 equal 2.",
  },
  // ---- calcab-s102: table of f and g near 3 ----
  {
    id: "calcab-s102-q1",
    stimulusId: "calcab-s102",
    unit: "unit-1",
    topicSlug: "estimating-limits-tables",
    difficulty: "easy",
    stem: "Based on the table, which of the following is the best estimate of $\\displaystyle\\lim_{x \\to 3} f(x)$?",
    options: ["$4$", "$3.997$", "$3.71$", "$4.31$"],
    correctIndex: 0,
    explanation:
      "From the left the values of $f$ are 3.71, 3.97, 3.997 and from the right 4.31, 4.03, 4.003: both sides approach 4, so the limit is 4. 3.997 is only the closest tabulated value, not the value approached. 3.71 and 4.31 are the values at $x = 2.9$ and $x = 3.1$, the points farthest from 3.",
  },
  {
    id: "calcab-s102-q2",
    stimulusId: "calcab-s102",
    unit: "unit-1",
    topicSlug: "estimating-limits-tables",
    difficulty: "medium",
    stem: "Based on the table, which of the following is the best estimate of $\\displaystyle\\lim_{x \\to 3^+} \\left[f(x) + 2g(x)\\right]$?",
    options: ["$8$", "$2$", "$6$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "From the right, $f(x) \\to 4$ and $g(x) \\to 2$, so $f(x) + 2g(x) \\to 4 + 2(2) = 8$. Using the left-hand behavior of $g$ (toward $-1$) gives $4 - 2 = 2$. Dropping the factor 2 gives $4 + 2 = 6$. The two-sided limit of $g$ at 3 does not exist, but the right-hand limit asked for does.",
  },
  // ---- calcab-s103: IVT table ----
  {
    id: "calcab-s103-q1",
    stimulusId: "calcab-s103",
    unit: "unit-1",
    topicSlug: "continuity-introduction",
    difficulty: "medium",
    stem: "Based on the table, for which value of $k$ does the Intermediate Value Theorem guarantee a number $c$ with $4 < c < 8$ and $f(c) = k$?",
    options: ["$k = -1$", "$k = 3$", "$k = -5$", "$k = 2.5$"],
    correctIndex: 0,
    explanation:
      "$f$ is continuous on $[4, 8]$ with $f(4) = 2$ and $f(8) = -4$, so the IVT guarantees every value strictly between $-4$ and 2; $-1$ is one of them. $f(0) = 3$, but $x = 0$ is outside the interval, so 3 is not guaranteed there. $-5$ and $2.5$ lie outside $[-4, 2]$; $f$ might reach them, but nothing guarantees it.",
  },
  {
    id: "calcab-s103-q2",
    stimulusId: "calcab-s103",
    unit: "unit-1",
    topicSlug: "continuity-introduction",
    difficulty: "hard",
    stem: "What is the least number of zeros that $f$ must have on the interval $0 \\le x \\le 8$?",
    options: ["$3$", "$2$", "$1$", "$4$"],
    correctIndex: 0,
    explanation:
      "By the IVT, a continuous function has a zero on any subinterval where it changes sign. $f$ changes sign on $[0, 2]$ (3 to $-1$), $[2, 4]$ ($-1$ to 2) and $[6, 8]$ (2 to $-4$), so it has at least 3 zeros. On $[4, 6]$ both values are 2, so no zero is guaranteed there; counting it gives 4. Answering 2 or 1 misses one or more sign changes.",
  },
  // ---- standalone ----
  {
    id: "calcab-u1-002",
    unit: "unit-1",
    topicSlug: "direct-substitution-method",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\lim_{x \\to 2} \\frac{x^3 - 4x + 1}{x + 2}$?",
    options: ["$\\dfrac{1}{4}$", "$\\dfrac{17}{4}$", "$0$", "$-\\dfrac{1}{4}$"],
    correctIndex: 0,
    explanation:
      "The function is a rational function whose denominator is $4 \\ne 0$ at $x = 2$, so substitute: $\\frac{8 - 8 + 1}{2 + 2} = \\frac{1}{4}$. $\\frac{17}{4}$ comes from adding $4x$ instead of subtracting it, 0 from dropping the constant 1, and $-\\frac{1}{4}$ from a sign slip in the numerator.",
  },
  {
    id: "calcab-u1-003",
    unit: "unit-1",
    topicSlug: "factoring-method-limits",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to -1} \\frac{x^3 + 1}{x^2 - 1}$?",
    options: ["$-\\dfrac{3}{2}$", "$\\dfrac{3}{2}$", "$-3$", "$0$"],
    correctIndex: 0,
    explanation:
      "Substitution gives $0/0$. Factor: $\\frac{(x + 1)(x^2 - x + 1)}{(x + 1)(x - 1)} = \\frac{x^2 - x + 1}{x - 1}$ for $x \\ne -1$. At $x = -1$: $\\frac{1 + 1 + 1}{-2} = -\\frac{3}{2}$. $\\frac{3}{2}$ drops the sign of $x - 1 = -2$; $-3$ evaluates $x - 1$ as $-1$ instead of $-2$; 0 treats $0/0$ as 0.",
  },
  {
    id: "calcab-u1-004",
    unit: "unit-1",
    topicSlug: "rationalizing-technique-limits",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to 5} \\frac{x - 5}{\\sqrt{x + 4} - 3}$?",
    options: ["$6$", "$\\dfrac{1}{6}$", "$3$", "$0$"],
    correctIndex: 0,
    explanation:
      "Multiply by the conjugate: $\\frac{(x - 5)(\\sqrt{x + 4} + 3)}{(x + 4) - 9} = \\sqrt{x + 4} + 3$ for $x \\ne 5$, which approaches $3 + 3 = 6$. $\\frac{1}{6}$ is the limit of the reciprocal expression. 3 keeps only $\\sqrt{9}$ and drops the $+3$ from the conjugate. 0 treats $0/0$ as 0.",
  },
  {
    id: "calcab-u1-005",
    unit: "unit-1",
    topicSlug: "rationalizing-technique-limits",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x} - \\sqrt{1 - 2x}}{x}$?",
    options: ["$2$", "$1$", "$4$", "$0$"],
    correctIndex: 0,
    explanation:
      "Multiply by the conjugate $\\sqrt{1 + 2x} + \\sqrt{1 - 2x}$: the numerator becomes $(1 + 2x) - (1 - 2x) = 4x$, so the expression is $\\frac{4}{\\sqrt{1 + 2x} + \\sqrt{1 - 2x}} \\to \\frac{4}{2} = 2$. 4 forgets that the conjugate sum in the denominator approaches 2. 1 uses $2x$ instead of $4x$ for the numerator. 0 treats $0/0$ as 0.",
  },
  {
    id: "calcab-u1-006",
    unit: "unit-1",
    topicSlug: "limits-at-infinity",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{4x^2 - 3x}{2x^2 + 5}$?",
    options: ["$2$", "$4$", "$0$", "$\\infty$"],
    correctIndex: 0,
    explanation:
      "Numerator and denominator have the same degree, so the limit is the ratio of the leading coefficients: $\\frac{4}{2} = 2$. 4 ignores the denominator's coefficient. 0 and $\\infty$ are the answers for a smaller or larger numerator degree.",
  },
  {
    id: "calcab-u1-007",
    unit: "unit-1",
    topicSlug: "limits-at-infinity",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\lim_{x \\to -\\infty} \\frac{\\sqrt{9x^2 + 1}}{x + 4}$?",
    options: ["$-3$", "$3$", "$9$", "$0$"],
    correctIndex: 0,
    explanation:
      "For large $|x|$, $\\sqrt{9x^2 + 1} \\approx \\sqrt{9x^2} = 3|x|$, and $|x| = -x$ when $x < 0$. So the quotient behaves like $\\frac{-3x}{x} = -3$. 3 replaces $\\sqrt{x^2}$ with $x$ instead of $|x|$. 9 forgets the square root. 0 misjudges the degrees: $\\sqrt{9x^2}$ grows like $x$, the same as the denominator.",
  },
  {
    id: "calcab-u1-008",
    unit: "unit-1",
    topicSlug: "limits-at-infinity",
    difficulty: "hard",
    stem: "Which of the following lists every horizontal asymptote of the graph of $y = \\dfrac{2e^x + 3}{e^x - 1}$?",
    options: ["$y = 2$ and $y = -3$", "$y = 2$ only", "$y = 2$ and $y = 3$", "$y = -3$ only"],
    correctIndex: 0,
    explanation:
      "As $x \\to \\infty$, divide by $e^x$: $\\frac{2 + 3e^{-x}}{1 - e^{-x}} \\to 2$. As $x \\to -\\infty$, $e^x \\to 0$, so $y \\to \\frac{3}{-1} = -3$. An exponential function needs both ends checked; stopping at $x \\to \\infty$ gives $y = 2$ only. $y = 3$ drops the sign of the $-1$ in the denominator.",
  },
  {
    id: "calcab-u1-009",
    unit: "unit-1",
    topicSlug: "infinite-limits-vertical-asymptotes",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to -2^+} \\frac{x^2 - 1}{x^2 - 4}$?",
    options: ["$-\\infty$", "$\\infty$", "$1$", "$0$"],
    correctIndex: 0,
    explanation:
      "As $x \\to -2^+$ the numerator approaches $4 - 1 = 3$. The denominator $(x - 2)(x + 2)$ is a product of a factor near $-4$ and a small positive number, so it is a small negative number. A positive number divided by a small negative number decreases without bound: $-\\infty$. $\\infty$ is the left-hand limit. 1 is the limit as $x \\to \\pm\\infty$ (the horizontal asymptote), not at $x = -2$. 0 confuses a zero denominator with a zero quotient.",
  },
  {
    id: "calcab-u1-010",
    unit: "unit-1",
    topicSlug: "infinite-limits-vertical-asymptotes",
    difficulty: "hard",
    stem: "Which of the following gives every vertical asymptote of the graph of $f(x) = \\dfrac{x^2 + x - 6}{x^2 - 9}$?",
    options: ["$x = 3$ only", "$x = -3$ only", "$x = 3$ and $x = -3$", "$x = 2$ and $x = 3$"],
    correctIndex: 0,
    explanation:
      "Factor: $f(x) = \\frac{(x + 3)(x - 2)}{(x + 3)(x - 3)} = \\frac{x - 2}{x - 3}$ for $x \\ne -3$. At $x = -3$ the limit is $\\frac{-5}{-6} = \\frac{5}{6}$, so that is a hole (removable discontinuity), not an asymptote. Only $x = 3$ makes the reduced denominator zero with a nonzero numerator. Listing both zeros of the denominator ignores the common factor; $x = -3$ only keeps the canceled factor instead. $x = 2$ is a zero of $f$, not an asymptote.",
  },
  {
    id: "calcab-u1-011",
    unit: "unit-1",
    topicSlug: "continuity-introduction",
    difficulty: "medium",
    stem: "Let $f(x) = \\begin{cases} 3x - k, & x < 2 \\\\ kx + 1, & x \\ge 2 \\end{cases}$ where $k$ is a constant. For what value of $k$ is $f$ continuous at $x = 2$?",
    options: ["$k = \\dfrac{5}{3}$", "$k = 5$", "$k = -\\dfrac{5}{3}$", "$k = \\dfrac{7}{3}$"],
    correctIndex: 0,
    explanation:
      "Continuity at 2 needs the left-hand limit $6 - k$ to equal $f(2) = 2k + 1$: $6 - k = 2k + 1$, so $3k = 5$ and $k = \\frac{5}{3}$. $k = 5$ comes from $6 + k = 2k + 1$ (a sign slip). $-\\frac{5}{3}$ is a sign error in the final step, and $\\frac{7}{3}$ uses $2k - 1$ for the right-hand piece.",
  },
  {
    id: "calcab-u1-012",
    unit: "unit-1",
    topicSlug: "types-of-discontinuity",
    difficulty: "hard",
    stem: "For $x \\ne 3$, $f(x) = \\dfrac{x^2 + kx - 12}{x - 3}$, where $k$ is a constant. For one value of $k$, $\\displaystyle\\lim_{x \\to 3} f(x)$ exists. What is the value of that limit?",
    options: ["$7$", "$1$", "$4$", "$6$"],
    correctIndex: 0,
    explanation:
      "The limit can exist only if the numerator is 0 at $x = 3$: $9 + 3k - 12 = 0$, so $k = 1$. Then $\\frac{x^2 + x - 12}{x - 3} = \\frac{(x + 4)(x - 3)}{x - 3} = x + 4 \\to 7$. 1 is the value of $k$, not of the limit. 4 is the constant term of the reduced factor, and 6 is the derivative $2x$ of $x^2$ at 3.",
  },
  {
    id: "calcab-u1-013",
    unit: "unit-1",
    topicSlug: "limits-continuity-calcab",
    difficulty: "easy",
    stem: "Suppose $2x + 1 \\le f(x) \\le x^2 + 2$ for all real $x$. What is $\\displaystyle\\lim_{x \\to 1} f(x)$?",
    options: ["$3$", "$2$", "$1$", "It cannot be determined from the information given."],
    correctIndex: 0,
    explanation:
      "Both bounds approach 3 as $x \\to 1$: $2(1) + 1 = 3$ and $1 + 2 = 3$. By the squeeze theorem, $\\lim_{x \\to 1} f(x) = 3$. 2 and 1 come from evaluating only part of a bound. The limit can be determined because the two bounds share the same limit at $x = 1$.",
  },
  {
    id: "calcab-u1-014",
    unit: "unit-1",
    topicSlug: "limits-continuity-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{3x + \\sin x}{x}$?",
    options: ["$3$", "$4$", "$0$", "The limit does not exist because $\\sin x$ oscillates."],
    correctIndex: 0,
    explanation:
      "Write the quotient as $3 + \\frac{\\sin x}{x}$. Since $-\\frac{1}{x} \\le \\frac{\\sin x}{x} \\le \\frac{1}{x}$ for $x > 0$ and both bounds approach 0, the squeeze theorem gives $\\frac{\\sin x}{x} \\to 0$, so the limit is 3. 4 treats $\\frac{\\sin x}{x}$ as approaching 1 (that is its limit as $x \\to 0$). The oscillation is bounded and is divided by an unbounded $x$, so the limit exists.",
  },
  {
    id: "calcab-u1-015",
    unit: "unit-1",
    topicSlug: "limits-continuity-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to 0} \\frac{x^2 + \\sin(4x)}{3x}$?",
    options: ["$\\dfrac{4}{3}$", "$\\dfrac{1}{3}$", "$4$", "$1$"],
    correctIndex: 0,
    explanation:
      "Split the quotient: $\\frac{x^2}{3x} = \\frac{x}{3} \\to 0$, and $\\frac{\\sin 4x}{3x} = \\frac{4}{3} \\cdot \\frac{\\sin 4x}{4x} \\to \\frac{4}{3}$. The limit is $\\frac{4}{3}$. $\\frac{1}{3}$ treats $\\frac{\\sin 4x}{x}$ as approaching 1, ignoring the 4. 4 ignores the 3 in the denominator. 1 treats $\\frac{\\sin 4x}{3x}$ as approaching 1, ignoring both constants.",
  },
  {
    id: "calcab-u1-016",
    unit: "unit-1",
    topicSlug: "types-of-discontinuity",
    difficulty: "hard",
    stem: "Which of the following functions has a jump discontinuity at $x = 0$?",
    options: [
      "$f(x) = \\dfrac{x^2 - 2x}{|x|}$",
      "$f(x) = \\dfrac{x^2 - 2x}{x}$",
      "$f(x) = \\dfrac{x - 2}{x^2}$",
      "$f(x) = x^2 - 2x$",
    ],
    correctIndex: 0,
    explanation:
      "For $\\frac{x(x - 2)}{|x|}$: when $x > 0$ it equals $x - 2 \\to -2$, and when $x < 0$ it equals $-(x - 2) \\to 2$. The one-sided limits are finite and different, so the discontinuity is a jump. $\\frac{x^2 - 2x}{x} = x - 2$ for $x \\ne 0$ has a removable discontinuity. $\\frac{x - 2}{x^2}$ has an infinite discontinuity (vertical asymptote). $x^2 - 2x$ is a polynomial, continuous everywhere.",
  },
  {
    id: "calcab-u1-017",
    unit: "unit-1",
    topicSlug: "continuity-introduction",
    difficulty: "medium",
    stem: "Let $f(x) = x^3 - 4x + 1$. On which of the following intervals does the Intermediate Value Theorem guarantee that $f$ has a zero?",
    options: ["$[0, 1]$", "$[-2, -1]$", "$[2, 3]$", "$[-1, 0]$"],
    correctIndex: 0,
    explanation:
      "$f$ is a polynomial, so it is continuous, and the IVT applies wherever $f$ changes sign. $f(0) = 1$ and $f(1) = 1 - 4 + 1 = -2$, so there is a zero in $[0, 1]$. On the others there is no sign change: $f(-2) = 1$ and $f(-1) = 4$; $f(2) = 1$ and $f(3) = 16$; $f(-1) = 4$ and $f(0) = 1$.",
  },
  {
    id: "calcab-u1-018",
    unit: "unit-1",
    topicSlug: "limits-at-infinity",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\lim_{x \\to \\infty} \\left(\\sqrt{x^2 + 6x} - x\\right)$?",
    options: ["$3$", "$6$", "$0$", "$\\infty$"],
    correctIndex: 0,
    explanation:
      "Multiply by the conjugate: $\\frac{(x^2 + 6x) - x^2}{\\sqrt{x^2 + 6x} + x} = \\frac{6x}{\\sqrt{x^2 + 6x} + x}$. Divide by $x$: $\\frac{6}{\\sqrt{1 + 6/x} + 1} \\to \\frac{6}{2} = 3$. 6 forgets that the denominator approaches $2x$, not $x$. 0 assumes $\\sqrt{x^2 + 6x} \\approx x$ exactly, and $\\infty$ treats $\\infty - \\infty$ as $\\infty$.",
  },
  {
    id: "calcab-u1-019",
    unit: "unit-1",
    topicSlug: "types-of-discontinuity",
    difficulty: "easy",
    stem: "A function $f$ satisfies $\\displaystyle\\lim_{x \\to 4} f(x) = 7$ and $f(4) = 2$. Which statement about $f$ at $x = 4$ is true?",
    options: [
      "$f$ has a removable discontinuity at $x = 4$.",
      "$f$ has a jump discontinuity at $x = 4$.",
      "$f$ is continuous at $x = 4$.",
      "$f$ has a vertical asymptote at $x = 4$.",
    ],
    correctIndex: 0,
    explanation:
      "The two-sided limit exists (it is 7) but differs from the function value $f(4) = 2$, so $f$ is not continuous at 4, and redefining $f(4) = 7$ would remove the break: a removable discontinuity. A jump needs different one-sided limits, so the two-sided limit would not exist. Continuity needs the limit to equal $f(4)$. A vertical asymptote needs an infinite limit, not a finite one.",
  },
  {
    id: "calcab-u1-020",
    unit: "unit-1",
    topicSlug: "limits-at-infinity",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\lim_{x \\to \\infty} \\frac{e^x + x^5}{2e^x - \\ln x}$?",
    options: ["$\\dfrac{1}{2}$", "$\\infty$", "$0$", "$2$"],
    correctIndex: 0,
    explanation:
      "Exponential functions grow faster than any power of $x$, and powers faster than $\\ln x$. Divide numerator and denominator by $e^x$: $\\frac{1 + x^5/e^x}{2 - (\\ln x)/e^x} \\to \\frac{1 + 0}{2 - 0} = \\frac{1}{2}$. $\\infty$ lets $x^5$ dominate $e^x$. 0 lets the denominator dominate, and 2 inverts the ratio of the leading coefficients.",
  },
]
