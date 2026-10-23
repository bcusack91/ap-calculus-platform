/**
 * AP Precalculus diagnostic v2, Unit 1: Polynomial and Rational Functions
 * (CED 1.1–1.14; Unit 4 is not assessed). Part A (no calculator) style
 * throughout except the items marked `calculator: true`, which are Part B
 * style context / data models whose arithmetic is still hand-doable.
 * Stimulus sets: the graph of a quartic (precalc-s101), a table of values at
 * equally spaced inputs (precalc-s102), the graph of a rational function with
 * a hole (precalc-s103) and an open-box volume model (precalc-s104).
 * Owner rules: no synthetic division, no Remainder Theorem drills, no
 * Descartes' / Rational Root, no calculus language.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures-unit-1'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "precalc-s101",
    title: "Graph of a polynomial function p",
    kind: "figure",
    content:
      "The figure shows the graph of a polynomial function $p$ on a grid from $-4$ to $5$ in $x$ and $-5$ to $5$ in $y$. " +
      "Read from left to right: the graph enters at the lower left, passes through $(-2, 0)$, reaches a high point near $(-1.2, 4.1)$, comes down to $(1, 0)$, goes back up to a smaller high point near $(2.4, 1.4)$, passes through $(3, 0)$ and exits at the lower right. " +
      "The $y$-intercept is $(0, 1.5)$. The three points on the $x$-axis are marked with dots.",
    svg: FIGURES["precalc-s101"],
  },
  {
    id: "precalc-s102",
    title: "Values of a function g at equally spaced inputs",
    kind: "table",
    content:
      "The table gives values of a function $g$ at six equally spaced inputs.\n\n" +
      "| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |\n" +
      "| --- | --- | --- | --- | --- | --- | --- |\n" +
      "| $g(x)$ | 3 | 7 | 13 | 21 | 31 | 43 |",
  },
  {
    id: "precalc-s103",
    title: "Graph of a rational function f",
    kind: "figure",
    content:
      "The figure shows the graph of a rational function $f$ on a grid from $-5$ to $7$ in $x$ and $-4$ to $6$ in $y$. " +
      "Dashed lines are drawn at $x = 2$ (vertical) and $y = 1$ (horizontal). The graph has two branches. " +
      "The left branch starts at the far left just above the dashed horizontal line, rises through an open circle at $\\left(-1, \\tfrac{4}{3}\\right)$ and through $\\left(0, \\tfrac{3}{2}\\right)$, and climbs off the top of the grid just left of the dashed vertical line. " +
      "The right branch enters from the bottom of the grid just right of the dashed vertical line, rises through $(3, 0)$ (marked with a dot), and then flattens out, staying just below the dashed horizontal line toward the far right.",
    svg: FIGURES["precalc-s103"],
  },
  {
    id: "precalc-s104",
    title: "Volume of an open box",
    kind: "passage",
    content:
      "A rectangular sheet of cardboard measures 20 centimeters by 30 centimeters. A square of side length $x$ centimeters is cut from each of the four corners, and the four flaps are folded up to form an open-top box. " +
      "The volume of the box, in cubic centimeters, is modeled by $V(x) = x(20 - 2x)(30 - 2x)$, which is equivalent to $V(x) = 4x^3 - 100x^2 + 600x$. " +
      "Selected values: $V(2) = 832$ and $V(4) = 1056$.",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- precalc-s101: graph of p ----
  // CED 1.5
  {
    id: "precalc-s101-q1",
    stimulusId: "precalc-s101",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "easy",
    stem: "Based on the graph, which statement about the real zeros of $p$ is correct?",
    options: [
      "Only $x = -2$ and $x = 3$ are zeros of even multiplicity.",
      "Only $x = 1$ is a zero of even multiplicity.",
      "All three real zeros of $p$ have odd multiplicity.",
      "All three real zeros of $p$ have even multiplicity.",
    ],
    correctIndex: 1,
    explanation:
      "The graph crosses the $x$-axis at $x = -2$ and at $x = 3$, which happens at zeros of odd multiplicity, and it touches the axis at $x = 1$ and turns back, which happens at a zero of even multiplicity. Calling the two crossings the even-multiplicity zeros reverses the roles of touching and crossing. Saying all three have odd multiplicity ignores the bounce at $x = 1$, and saying all three have even multiplicity ignores the two crossings.",
  },
  // CED 1.5–1.6
  {
    id: "precalc-s101-q2",
    stimulusId: "precalc-s101",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "medium",
    stem: "Which of the following could be an expression for $p(x)$?",
    options: [
      "$\\dfrac{1}{4}(x + 2)(x - 1)^2(x - 3)$",
      "$-\\dfrac{1}{4}(x + 2)(x - 1)(x - 3)$",
      "$-\\dfrac{1}{4}(x + 2)(x - 1)^2(x - 3)$",
      "$-\\dfrac{1}{4}(x + 2)^2(x - 1)(x - 3)$",
    ],
    correctIndex: 2,
    explanation:
      "The zeros $-2$ and $3$ are crossings (multiplicity 1) and $1$ is a bounce (multiplicity 2), so the factored form is $a(x + 2)(x - 1)^2(x - 3)$, degree 4. Both ends of the graph go down, so the leading coefficient is negative, and $p(0) = a(2)(1)(-3) = -6a = 1.5$ gives $a = -\\frac{1}{4}$. A positive $\\frac{1}{4}$ would make both ends rise. Leaving out the square on $(x - 1)$ gives a cubic that crosses at $x = 1$. Squaring $(x + 2)$ instead puts the bounce at $x = -2$.",
  },
  // CED 1.5, 1.10
  {
    id: "precalc-s101-q3",
    stimulusId: "precalc-s101",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "hard",
    stem: "Based on the graph, for which values of $x$ is $p(x) \\le 0$?",
    options: [
      "$x \\le -2$ or $x \\ge 3$",
      "$-2 \\le x \\le 3$",
      "$x \\le -2$, $x = 1$, or $x \\ge 3$",
      "$-2 \\le x \\le 1$ or $x \\ge 3$",
    ],
    correctIndex: 2,
    explanation:
      "The graph is on or below the $x$-axis to the left of $-2$ and to the right of $3$, and it also touches the axis at the single point $x = 1$, where $p(1) = 0$ satisfies $p(x) \\le 0$. Leaving out $x = 1$ answers the strict inequality $p(x) < 0$ instead. The interval $-2 \\le x \\le 3$ is where $p(x) \\ge 0$. The last option mixes a region where $p$ is positive with one where it is negative.",
  },

  // ---- precalc-s102: table of g ----
  // CED 1.1
  {
    id: "precalc-s102-q1",
    stimulusId: "precalc-s102",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "easy",
    stem: "What is the average rate of change of $g$ over the interval $[2, 5]$?",
    options: ["$10$", "$\\dfrac{43}{5}$", "$15$", "$\\dfrac{56}{5}$"],
    correctIndex: 0,
    explanation:
      "The average rate of change is $\\dfrac{g(5) - g(2)}{5 - 2} = \\dfrac{43 - 13}{3} = 10$. $\\dfrac{43}{5}$ divides an output by an input instead of comparing changes. $15$ divides the change in output, 30, by the left endpoint 2 instead of by the interval length 3. $\\dfrac{56}{5}$ adds the two outputs instead of subtracting them.",
  },
  // CED 1.3
  {
    id: "precalc-s102-q2",
    stimulusId: "precalc-s102",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "medium",
    stem: "Which statement about $g$ on the interval $0 \\le x \\le 5$ is supported by the table?",
    options: [
      "$g$ is increasing, and its rate of change is decreasing, so the graph of $g$ is concave down.",
      "$g$ is increasing at a constant rate, so the graph of $g$ is a line.",
      "$g$ is increasing, and its rate of change is increasing, so the graph of $g$ is concave up.",
      "$g$ is decreasing, and its rate of change is increasing, so the graph of $g$ is concave up.",
    ],
    correctIndex: 2,
    explanation:
      "The outputs rise, so $g$ is increasing, and the changes over each unit interval are $4, 6, 8, 10, 12$: the rate of change itself is increasing, which is what concave up means. A decreasing rate of change would show shrinking differences. A line would have the same difference every time. The outputs never go down, so $g$ is not decreasing.",
  },
  // CED 1.4
  {
    id: "precalc-s102-q3",
    stimulusId: "precalc-s102",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "hard",
    stem: "Which of the following best justifies modeling $g$ with a quadratic function?",
    options: [
      "Over consecutive intervals of length 1, the average rates of change are $4, 6, 8, 10, 12$, which increase by the constant amount 2.",
      "Over consecutive intervals of length 1, the average rates of change are $4, 6, 8, 10, 12$, which are all positive, so $g$ is increasing.",
      "The ratios of consecutive outputs decrease, so the growth of $g$ is slowing down over the interval.",
      "The outputs increase, and the increases $4, 6, 8, 10, 12$ are not constant, so the model cannot be linear.",
    ],
    correctIndex: 0,
    explanation:
      "A quadratic function is the one whose average rates of change over equal-length intervals change by a constant amount (constant second differences); here the differences $4, 6, 8, 10, 12$ grow by exactly 2 each time. Positive rates of change show only that $g$ is increasing, which linear and exponential models also do. Decreasing output ratios rule out an exponential model but do not single out a quadratic one. Rejecting a linear model does not by itself justify a quadratic one.",
  },

  // ---- precalc-s103: graph of f ----
  // CED 1.7
  {
    id: "precalc-s103-q1",
    stimulusId: "precalc-s103",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "easy",
    stem: "Based on the graph, what is $\\displaystyle\\lim_{x \\to \\infty} f(x)$?",
    options: ["$\\infty$", "$1$", "$\\dfrac{3}{2}$", "$-\\infty$"],
    correctIndex: 1,
    explanation:
      "As $x$ grows without bound, the graph levels off toward the dashed horizontal asymptote $y = 1$, so the limit is 1. $\\infty$ and $-\\infty$ describe what the graph does near the vertical asymptote $x = 2$, not its end behavior. $\\dfrac{3}{2}$ is the $y$-intercept, the output at $x = 0$.",
  },
  // CED 1.9
  {
    id: "precalc-s103-q2",
    stimulusId: "precalc-s103",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "Which of the following could be an expression for $f(x)$?",
    options: [
      "$\\dfrac{x - 3}{x - 2}$",
      "$\\dfrac{(x + 1)(x - 2)}{(x + 1)(x - 3)}$",
      "$\\dfrac{(x + 1)(x - 3)}{(x + 1)(x - 2)^2}$",
      "$\\dfrac{(x + 1)(x - 3)}{(x + 1)(x - 2)}$",
    ],
    correctIndex: 3,
    explanation:
      "The zero at $x = 3$ needs a factor $(x - 3)$ in the numerator, the vertical asymptote at $x = 2$ needs $(x - 2)$ in the denominator, and the hole at $x = -1$ needs $(x + 1)$ in both; equal degrees give the horizontal asymptote $y = \\frac{1}{1} = 1$. $\\frac{x - 3}{x - 2}$ has the right asymptotes and zero but no hole. Swapping the factors puts the zero at 2 and the asymptote at 3. Squaring $(x - 2)$ makes the horizontal asymptote $y = 0$.",
  },
  // CED 1.7, 1.9
  {
    id: "precalc-s103-q3",
    stimulusId: "precalc-s103",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "hard",
    stem: "Which statement describes the behavior of $f$ near $x = 2$?",
    options: [
      "$\\displaystyle\\lim_{x \\to 2^-} f(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to 2^+} f(x) = \\infty$",
      "$\\displaystyle\\lim_{x \\to 2^-} f(x) = \\infty$ and $\\displaystyle\\lim_{x \\to 2^+} f(x) = -\\infty$",
      "$\\displaystyle\\lim_{x \\to 2^-} f(x) = \\infty$ and $\\displaystyle\\lim_{x \\to 2^+} f(x) = \\infty$",
      "$f(2)$ is undefined, but $\\displaystyle\\lim_{x \\to 2} f(x) = 1$",
    ],
    correctIndex: 1,
    explanation:
      "Just to the left of the asymptote the graph shoots upward, so the left-hand limit is $\\infty$; just to the right it comes up from far below, so the right-hand limit is $-\\infty$. The first option reverses the two sides. Both sides going to $\\infty$ would require the graph to be above the axis on both sides of $x = 2$. A limit of 1 describes the end behavior, not what happens at the vertical asymptote.",
  },

  // ---- precalc-s104: open box ----
  // CED 1.13–1.14
  {
    id: "precalc-s104-q1",
    stimulusId: "precalc-s104",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "Which of the following is the domain of $V$ that makes sense in the context of the box?",
    options: ["$0 < x < 20$", "$0 \\le x \\le 10$", "$0 < x < 15$", "$0 < x < 10$"],
    correctIndex: 3,
    explanation:
      "Both $20 - 2x$ and $30 - 2x$ must be positive for the base to exist, which requires $x < 10$ and $x < 15$; the stricter condition is $x < 10$, and $x$ must be positive for there to be a box. At $x = 0$ or $x = 10$ the volume is 0, so the endpoints are excluded. $x < 15$ only uses the longer side, and $x < 20$ uses the full width of the sheet instead of its half.",
  },
  // CED 1.1, 1.14
  {
    id: "precalc-s104-q2",
    stimulusId: "precalc-s104",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "What is the average rate of change of the volume of the box with respect to $x$ over the interval $2 \\le x \\le 4$?",
    options: [
      "$112$ cubic centimeters per centimeter",
      "$224$ cubic centimeters per centimeter",
      "$944$ cubic centimeters per centimeter",
      "$56$ cubic centimeters per centimeter",
    ],
    correctIndex: 0,
    explanation:
      "The average rate of change is $\\dfrac{V(4) - V(2)}{4 - 2} = \\dfrac{1056 - 832}{2} = \\dfrac{224}{2} = 112$ cubic centimeters per centimeter. $224$ is the change in volume without dividing by the 2-centimeter change in $x$. $944$ is the average of the two volumes, not a rate. $56$ divides the change by 4, the right endpoint, instead of by the length of the interval.",
  },

  // ---- standalone: polynomial functions ----
  // CED 1.6
  {
    id: "precalc-u1-001",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "easy",
    stem: "Let $f(x) = -3x^5 + 2x^2 - 7$. Which of the following describes the end behavior of $f$?",
    options: [
      "$\\displaystyle\\lim_{x \\to -\\infty} f(x) = \\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = -\\infty$",
      "$\\displaystyle\\lim_{x \\to -\\infty} f(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$",
      "$\\displaystyle\\lim_{x \\to -\\infty} f(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = -\\infty$",
      "$\\displaystyle\\lim_{x \\to -\\infty} f(x) = \\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$",
    ],
    correctIndex: 0,
    explanation:
      "End behavior is set by the leading term $-3x^5$: odd degree, negative leading coefficient. For large positive $x$ the term is a large negative number, so $f(x) \\to -\\infty$; for large negative $x$, $x^5$ is negative and $-3x^5$ is positive, so $f(x) \\to \\infty$. The second option is the behavior of a positive odd-degree leading term, and the last two are the even-degree patterns.",
  },
  // CED 1.5
  {
    id: "precalc-u1-002",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "medium",
    stem: "Let $p(x) = (x + 2)^3(x - 1)^2(x - 4)$. Which statement about the graph of $p$ is true?",
    options: [
      "The graph crosses the $x$-axis at $x = -2$ and $x = 4$ and touches it without crossing at $x = 1$.",
      "The graph crosses the $x$-axis at $x = 1$ and $x = 4$ and touches it without crossing at $x = -2$.",
      "The graph crosses the $x$-axis at $x = -2$, $x = 1$ and $x = 4$.",
      "The graph touches the $x$-axis without crossing at $x = -2$ and $x = 1$ and crosses it at $x = 4$.",
    ],
    correctIndex: 0,
    explanation:
      "A zero of odd multiplicity is a crossing and a zero of even multiplicity is a touch. The multiplicities are 3 at $x = -2$ (crossing, with a flattened S shape), 2 at $x = 1$ (touch) and 1 at $x = 4$ (crossing). Treating multiplicity 3 as a touch gives the second and fourth options. Treating every zero as a crossing ignores the squared factor.",
  },
  // CED 1.5
  {
    id: "precalc-u1-003",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "medium",
    stem: "The graph of a polynomial function $q$ of degree 3 crosses the $x$-axis at $x = -1$, touches the $x$-axis without crossing at $x = 2$, and has $y$-intercept $(0, 4)$. Which of the following could be $q(x)$?",
    options: ["$2(x + 1)(x - 2)^2$", "$-2(x + 1)^2(x - 2)$", "$-(x + 1)(x - 2)^2$", "$(x + 1)(x - 2)^2$"],
    correctIndex: 3,
    explanation:
      "A crossing at $-1$ gives a factor $(x + 1)$ and a touch at $2$ gives $(x - 2)^2$, so $q(x) = a(x + 1)(x - 2)^2$ with degree $1 + 2 = 3$. Then $q(0) = a(1)(4) = 4a = 4$, so $a = 1$. The coefficient 2 gives a $y$-intercept of 8 and $-1$ gives $-4$. $-2(x + 1)^2(x - 2)$ also has $y$-intercept 4, but it puts the touch at $-1$ and the crossing at $2$, the reverse of the graph.",
  },
  // CED 1.5
  {
    id: "precalc-u1-004",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "easy",
    stem: "Let $f(x) = x^4 - 3x^2 + 1$. Which statement about the symmetry of the graph of $f$ is correct?",
    options: [
      "$f(-x) = -f(x)$ for all $x$, so the graph has point symmetry about the origin.",
      "$f(-x) = f(x)$ for all $x$, so the graph is symmetric about the $y$-axis.",
      "$f(-x) = f(x)$ for all $x$, so the graph is symmetric about the $x$-axis as well as the $y$-axis.",
      "$f(-x)$ equals neither $f(x)$ nor $-f(x)$, so the graph has no symmetry about the $y$-axis or the origin.",
    ],
    correctIndex: 1,
    explanation:
      "Replacing $x$ with $-x$ gives $(-x)^4 - 3(-x)^2 + 1 = x^4 - 3x^2 + 1 = f(x)$, because every power of $x$ is even. A function with $f(-x) = f(x)$ is even and its graph is symmetric about the $y$-axis. Symmetry about the origin needs $f(-x) = -f(x)$, which holds only for odd functions. No function's graph is symmetric about the $x$-axis, since that would give two outputs for one input. The identity $f(-x) = f(x)$ does hold, so the graph is not without symmetry.",
  },
  // CED 1.5
  {
    id: "precalc-u1-005",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "hard",
    stem: "A polynomial function $p$ of least possible degree has zeros at $x = 0$, at $x = -2$ with multiplicity 2, and at $x = 3$. If $p(1) = 9$, what is the leading coefficient of $p$?",
    options: ["$-\\dfrac{3}{2}$", "$\\dfrac{1}{2}$", "$-\\dfrac{1}{2}$", "$-2$"],
    correctIndex: 2,
    explanation:
      "With least degree, $p(x) = a\\,x(x + 2)^2(x - 3)$. Then $p(1) = a(1)(3)^2(-2) = -18a$, and $-18a = 9$ gives $a = -\\frac{1}{2}$. Forgetting to square $(x + 2)$ gives $p(1) = -6a$ and $a = -\\frac{3}{2}$. Dropping the sign of $(1 - 3)$ gives $a = \\frac{1}{2}$. The value $-2$ comes from reading $-18a = 9$ as $a = -18/9$.",
  },
  // CED 1.6
  {
    id: "precalc-u1-006",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "easy",
    stem: "For which of the following functions is $\\displaystyle\\lim_{x \\to -\\infty} f(x) = \\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = -\\infty$?",
    options: ["$f(x) = 2x^3 + x$", "$f(x) = -2x^4 + x$", "$f(x) = -2x^3 + x$", "$f(x) = 2x^4 - x$"],
    correctIndex: 2,
    explanation:
      "Rising on the left and falling on the right is the pattern of an odd-degree polynomial with a negative leading coefficient, so $f(x) = -2x^3 + x$. $2x^3 + x$ does the opposite (falls left, rises right). An even-degree polynomial has both ends going the same way: down for $-2x^4 + x$ and up for $2x^4 - x$.",
  },
  // CED 1.5
  {
    id: "precalc-u1-007",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "medium",
    stem: "A polynomial function $p$ has $p(1) = 0$ and $p(5) = 0$, and $p$ has no other zeros on the interval $1 \\le x \\le 5$. Which of the following must be true?",
    options: [
      "$p(x) > 0$ for all $x$ with $1 < x < 5$.",
      "$p$ has exactly one relative extremum for $1 < x < 5$.",
      "$p$ has degree 2.",
      "$p$ has at least one relative extremum for some $x$ with $1 < x < 5$.",
    ],
    correctIndex: 3,
    explanation:
      "Between two distinct real zeros a nonconstant polynomial must turn around at least once, so there is at least one relative maximum or minimum between $x = 1$ and $x = 5$. There could be more than one turn (the graph can wiggle without crossing the axis), so \"exactly one\" is not forced. The sign between the zeros could be negative instead of positive. Nothing restricts the degree to 2.",
  },
  // CED 1.5
  {
    id: "precalc-u1-008",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "medium",
    stem: "What are all the real zeros of $f(x) = x^4 - 10x^2 + 9$?",
    options: ["$x = 1$ and $x = 9$", "$x = \\pm 1$ and $x = \\pm 3$", "$x = \\pm 3$ only", "$x = \\pm\\sqrt{10}$"],
    correctIndex: 1,
    explanation:
      "Treat the expression as a quadratic in $x^2$: $x^4 - 10x^2 + 9 = (x^2 - 1)(x^2 - 9) = (x - 1)(x + 1)(x - 3)(x + 3)$, so the zeros are $\\pm 1$ and $\\pm 3$. Stopping at $x^2 = 1$ and $x^2 = 9$ gives the values $1$ and $9$ for $x^2$, not for $x$. Keeping only $\\pm 3$ drops half the zeros. $\\pm\\sqrt{10}$ comes from solving $x^2 = 10$, the middle coefficient.",
  },
  // CED 1.5
  {
    id: "precalc-u1-009",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "hard",
    stem: "A polynomial function $p$ has degree 4, and its only real zeros are $x = -3$ and $x = 1$, each of multiplicity 2. If $p(0) = -9$, which statement is true?",
    options: [
      "$p(x) \\le 0$ for every real number $x$, and $p(x) = 0$ only at $x = -3$ and $x = 1$.",
      "$p(x) \\ge 0$ for every real $x$, with $p(x) = 0$ only at $x = -3$ and $x = 1$.",
      "$p(x) > 0$ for $-3 < x < 1$, and $p(x) < 0$ for all other $x$ except the zeros.",
      "$p$ changes sign at $x = -3$ and at $x = 1$.",
    ],
    correctIndex: 0,
    explanation:
      "The degree and multiplicities force $p(x) = a(x + 3)^2(x - 1)^2$, and $p(0) = a(9)(1) = 9a = -9$ gives $a = -1$. Since both squared factors are nonnegative, $p(x) = -(x + 3)^2(x - 1)^2 \\le 0$ everywhere, with equality only at the two zeros. A positive $a$ would make $p \\ge 0$. Even multiplicity means the graph touches the axis and does not change sign, so $p$ is never positive on $(-3, 1)$ or anywhere else.",
  },
  // CED 1.5–1.6
  {
    id: "precalc-u1-010",
    unit: "unit-1",
    topicSlug: "polynomial-functions-precalc",
    difficulty: "medium",
    stem: "The graph of a polynomial function $f$ has exactly 4 relative extrema, and $\\displaystyle\\lim_{x \\to -\\infty} f(x) = \\displaystyle\\lim_{x \\to \\infty} f(x) = -\\infty$. What is the least possible degree of $f$?",
    options: ["$4$", "$5$", "$6$", "$8$"],
    correctIndex: 2,
    explanation:
      "A polynomial of degree $n$ has at most $n - 1$ relative extrema, so 4 extrema require degree at least 5. Both ends going to $-\\infty$ requires an even degree with a negative leading coefficient, so degree 5 is impossible and the least possible degree is 6. Degree 4 allows only 3 extrema. Degree 8 is possible but not the least.",
  },

  // ---- standalone: rational functions ----
  // CED 1.7
  {
    id: "precalc-u1-011",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "easy",
    stem: "Let $f(x) = \\dfrac{3x^2 - x + 4}{2x^2 + 5}$. What is $\\displaystyle\\lim_{x \\to \\infty} f(x)$?",
    options: ["$\\dfrac{3}{2}$", "$0$", "$3$", "The limit does not exist."],
    correctIndex: 0,
    explanation:
      "When the numerator and denominator have the same degree, the end behavior is the ratio of the leading coefficients, $\\frac{3}{2}$, because for large $x$ the function behaves like $\\frac{3x^2}{2x^2}$. A limit of 0 would need the denominator's degree to be larger. The value 3 is the leading coefficient of the numerator alone. The limit exists because the degrees are equal.",
  },
  // CED 1.9
  {
    id: "precalc-u1-012",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = \\dfrac{x^2 - 9}{x^2 - x - 6}$. Which statement about the graph of $f$ is true?",
    options: [
      "The graph has vertical asymptotes at $x = 3$ and $x = -2$.",
      "The graph has a hole at $\\left(3, \\dfrac{6}{5}\\right)$ and a vertical asymptote at $x = -2$.",
      "The graph has a hole at $x = -2$ and a vertical asymptote at $x = 3$.",
      "The graph has a hole at $(3, 0)$ and a vertical asymptote at $x = -2$.",
    ],
    correctIndex: 1,
    explanation:
      "Factor: $f(x) = \\dfrac{(x - 3)(x + 3)}{(x - 3)(x + 2)}$. The common factor $(x - 3)$ makes $x = 3$ a hole, located at the value of the reduced expression $\\dfrac{x + 3}{x + 2}$ at $x = 3$, which is $\\frac{6}{5}$. The factor $(x + 2)$ does not cancel, so $x = -2$ is a vertical asymptote. Two asymptotes ignores the cancellation; swapping the roles mixes up which factor cancels; a hole at height 0 confuses the hole with a zero.",
  },
  // CED 1.7, 1.11
  {
    id: "precalc-u1-013",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "The graph of $f(x) = \\dfrac{2x^2 + 3x - 1}{x + 2}$ has a slant asymptote. What is its equation?",
    options: ["$y = 2x + 7$", "$y = 2x - 1$", "$y = 2x$", "$y = 2x + 1$"],
    correctIndex: 1,
    explanation:
      "Dividing gives $2x^2 + 3x - 1 = (x + 2)(2x - 1) + 1$, so $f(x) = 2x - 1 + \\dfrac{1}{x + 2}$, and as $|x|$ grows the last term goes to 0: the slant asymptote is $y = 2x - 1$. $y = 2x$ keeps only the ratio of leading terms and loses the constant. $y = 2x + 1$ has the wrong sign on the constant. $y = 2x + 7$ comes from adding instead of subtracting during the division.",
  },
  // CED 1.12
  {
    id: "precalc-u1-014",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "What is the solution set of $\\dfrac{x - 4}{x + 1} > 0$?",
    options: ["$x < -1$ or $x > 4$", "$-1 < x < 4$", "$x \\le -1$ or $x \\ge 4$", "$x > 4$"],
    correctIndex: 0,
    explanation:
      "The quotient changes sign only at $x = 4$ (a zero) and $x = -1$ (undefined). Testing a value in each region: for $x < -1$ both factors are negative, so the quotient is positive; for $-1 < x < 4$ the signs differ, so it is negative; for $x > 4$ both are positive. The quotient is positive on $x < -1$ or $x > 4$. The middle interval is where it is negative. Closed endpoints are wrong because the inequality is strict and $x = -1$ is not in the domain. $x > 4$ alone misses the left region.",
  },
  // CED 1.10, 1.12
  {
    id: "precalc-u1-015",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "What is the solution set of $x^3 - 4x \\le 0$?",
    options: ["$x \\le 2$", "$0 \\le x \\le 2$ only", "$-2 \\le x \\le 2$", "$x \\le -2$ or $0 \\le x \\le 2$"],
    correctIndex: 3,
    explanation:
      "Factor: $x^3 - 4x = x(x - 2)(x + 2)$, with zeros $-2, 0, 2$. Sign analysis: for $x < -2$ the product is negative, for $-2 < x < 0$ it is positive, for $0 < x < 2$ it is negative, and for $x > 2$ it is positive. Including the zeros, the expression is $\\le 0$ on $x \\le -2$ or $0 \\le x \\le 2$. $0 \\le x \\le 2$ alone misses the unbounded region on the left. $-2 \\le x \\le 2$ and $x \\le 2$ ignore the sign changes at $x = -2$ and $x = 0$.",
  },
  // CED 1.7
  {
    id: "precalc-u1-016",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = \\dfrac{x + 1}{x - 2}$. What is $\\displaystyle\\lim_{x \\to 2^-} f(x)$?",
    options: ["$\\infty$", "$-\\infty$", "$3$", "$1$"],
    correctIndex: 1,
    explanation:
      "As $x$ approaches 2 from the left, the numerator approaches 3 (positive) while the denominator $x - 2$ is a small negative number, so the quotient is a large negative number: the limit is $-\\infty$. Approaching from the right would give $\\infty$. The value 3 is only the limit of the numerator. $1$ is the ratio of the leading coefficients, which describes the end behavior of $f$, not its behavior near the vertical asymptote.",
  },
  // CED 1.8–1.9
  {
    id: "precalc-u1-017",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "easy",
    stem: "What are the real zeros of $f(x) = \\dfrac{x^2 - 4}{x - 2}$?",
    options: ["$x = 2$ and $x = -2$", "$x = 2$ only", "$x = -2$ only", "$f$ has no real zeros."],
    correctIndex: 2,
    explanation:
      "Factoring gives $f(x) = \\dfrac{(x - 2)(x + 2)}{x - 2}$. A zero of a rational function is an input where the numerator is 0 and the function is defined; $x = -2$ qualifies, but $x = 2$ makes the denominator 0, so it is a hole in the graph, not a zero. Listing both ignores the domain; listing only 2 picks the excluded value; the function does have a zero.",
  },
  // CED 1.7–1.9
  {
    id: "precalc-u1-018",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "Which rational function has a horizontal asymptote at $y = 2$, a vertical asymptote at $x = -3$ only, and a zero at $x = 1$?",
    options: [
      "$f(x) = \\dfrac{2(x + 3)}{x - 1}$",
      "$f(x) = \\dfrac{x - 1}{2(x + 3)}$",
      "$f(x) = \\dfrac{2(x - 1)}{(x + 3)^2}$",
      "$f(x) = \\dfrac{2(x - 1)}{x + 3}$",
    ],
    correctIndex: 3,
    explanation:
      "A zero at 1 needs $(x - 1)$ in the numerator, an asymptote at $-3$ needs $(x + 3)$ in the denominator, and equal degrees with leading coefficients 2 and 1 give the horizontal asymptote $y = 2$. Swapping numerator and denominator moves the zero to $-3$ and the asymptote to 1. Putting the 2 in the denominator makes the horizontal asymptote $y = \\frac{1}{2}$. Squaring $(x + 3)$ makes the denominator's degree larger, so the horizontal asymptote becomes $y = 0$.",
  },
  // CED 1.7
  {
    id: "precalc-u1-019",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = \\dfrac{x^3 + 1}{x - 1}$. Which statement describes the end behavior of $f$?",
    options: [
      "$\\displaystyle\\lim_{x \\to -\\infty} f(x) = \\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$; the graph has no horizontal asymptote.",
      "$\\displaystyle\\lim_{x \\to -\\infty} f(x) = -\\infty$ and $\\displaystyle\\lim_{x \\to \\infty} f(x) = \\infty$; the graph has a slant asymptote.",
      "The graph has a horizontal asymptote at $y = 1$.",
      "The graph has a horizontal asymptote at $y = 0$.",
    ],
    correctIndex: 0,
    explanation:
      "For large $|x|$, $f(x)$ behaves like $\\dfrac{x^3}{x} = x^2$, which is large and positive in both directions, so both limits are $\\infty$ and there is no horizontal asymptote. A slant asymptote appears only when the numerator's degree exceeds the denominator's by exactly 1; here it exceeds by 2. A horizontal asymptote at $y = 1$ would need equal degrees, and $y = 0$ would need a larger degree in the denominator.",
  },
  // CED 1.9
  {
    id: "precalc-u1-020",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "hard",
    stem: "Let $f(x) = \\dfrac{(x + 3)(x - 4)^2}{(x + 3)^2(x - 4)}$. Which statement about the graph of $f$ is true?",
    options: [
      "The graph has a vertical asymptote at $x = 4$ and a hole at $x = -3$.",
      "The graph has a hole at $(4, 0)$ and a vertical asymptote at $x = -3$.",
      "The graph has a zero at $x = 4$ and a vertical asymptote at $x = -3$.",
      "The graph has holes at both $x = 4$ and $x = -3$.",
    ],
    correctIndex: 1,
    explanation:
      "Compare multiplicities. At $x = 4$ the numerator has the higher power (2 versus 1), so the factor cancels completely and leaves a hole; the reduced expression $\\dfrac{x - 4}{x + 3}$ equals 0 at $x = 4$, so the hole is at $(4, 0)$. At $x = -3$ the denominator has the higher power, so one factor of $(x + 3)$ survives below and the graph has a vertical asymptote. $x = 4$ is not a zero because $f(4)$ is undefined. Swapping the roles, or calling both holes, misreads the multiplicities.",
  },
  // CED 1.12
  {
    id: "precalc-u1-021",
    unit: "unit-1",
    topicSlug: "rational-functions-precalc",
    difficulty: "hard",
    stem: "What is the solution set of $\\dfrac{x^2 - 1}{x + 3} \\ge 0$?",
    options: ["$-3 < x \\le -1$ or $x \\ge 1$", "$-3 \\le x \\le -1$ or $x \\ge 1$", "$x \\le -3$ or $-1 \\le x \\le 1$", "$-1 \\le x \\le 1$"],
    correctIndex: 0,
    explanation:
      "The sign can change at $x = -1$ and $x = 1$ (zeros of the numerator) and at $x = -3$ (undefined). Testing each region: negative for $x < -3$, positive for $-3 < x < -1$, negative for $-1 < x < 1$, positive for $x > 1$. The zeros $-1$ and $1$ are included because of $\\ge$, but $x = -3$ is excluded because the expression is undefined there, giving $-3 < x \\le -1$ or $x \\ge 1$. Including $-3$ is the domain error. The other two options pick the regions where the expression is negative.",
  },

  // ---- standalone: rates of change ----
  // CED 1.1
  {
    id: "precalc-u1-022",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "easy",
    stem: "What is the average rate of change of $f(x) = x^3 - x$ over the interval $[-1, 2]$?",
    options: ["$\\dfrac{8}{3}$", "$\\dfrac{1}{2}$", "$2$", "$-2$"],
    correctIndex: 2,
    explanation:
      "$f(2) = 8 - 2 = 6$ and $f(-1) = -1 + 1 = 0$, so the average rate of change is $\\dfrac{6 - 0}{2 - (-1)} = \\dfrac{6}{3} = 2$. $\\dfrac{8}{3}$ comes from the sign slip $f(-1) = -1 - 1 = -2$. $\\dfrac{1}{2}$ is the reciprocal, dividing the change in input by the change in output. $-2$ subtracts the outputs in the opposite order from the inputs.",
  },
  // CED 1.1
  {
    id: "precalc-u1-023",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "medium",
    stem: "Let $f(x) = x^2 + 4x$. For $h \\ne 0$, what is the average rate of change of $f$ over the interval $[3, 3 + h]$?",
    options: ["$10$", "$h + 4$", "$6 + h$", "$10 + h$"],
    correctIndex: 3,
    explanation:
      "$f(3 + h) = (3 + h)^2 + 4(3 + h) = h^2 + 10h + 21$ and $f(3) = 21$, so $f(3 + h) - f(3) = h^2 + 10h$, and dividing by the interval length $h$ gives $10 + h$. The constant 10 alone drops the $h^2$ term. $6 + h$ is the result for $x^2$ without the $4x$ term. $h + 4$ keeps only the contribution of the $4x$ term and the $h^2$.",
  },
  // CED 1.3
  {
    id: "precalc-u1-024",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "easy",
    stem: "On the interval $2 < x < 6$, the graph of a function $g$ is decreasing and concave up. Which statement about the rate of change of $g$ on this interval is correct?",
    options: [
      "The rate of change is positive and increasing.",
      "The rate of change is negative and increasing.",
      "The rate of change is negative and decreasing.",
      "The rate of change is positive and decreasing.",
    ],
    correctIndex: 1,
    explanation:
      "Decreasing means the rate of change is negative. Concave up means the rate of change is increasing (the graph falls more and more slowly, flattening out). A positive rate would mean $g$ is increasing. A negative and decreasing rate would describe a decreasing, concave-down graph that falls faster and faster.",
  },
  // CED 1.1, 1.4
  {
    id: "precalc-u1-025",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "The temperature of a liquid, in degrees Celsius, is a function $T$ of time $t$ in hours. The average rate of change of $T$ over $[1, 3]$ is $4$ degrees per hour, and over $[3, 6]$ it is $-2$ degrees per hour. What is the average rate of change of $T$ over $[1, 6]$?",
    options: ["$1$ degree per hour", "$\\dfrac{14}{5}$ degrees per hour", "$2$ degrees per hour", "$\\dfrac{2}{5}$ degree per hour"],
    correctIndex: 3,
    explanation:
      "Over $[1, 3]$ the temperature changes by $4 \\cdot 2 = 8$ degrees, and over $[3, 6]$ by $-2 \\cdot 3 = -6$ degrees, so over $[1, 6]$ it changes by $8 - 6 = 2$ degrees in 5 hours: $\\frac{2}{5}$ degree per hour. Averaging the two rates, $\\frac{4 + (-2)}{2} = 1$, ignores the unequal interval lengths. $\\frac{14}{5}$ adds the sizes of the two changes instead of combining their signs. $2$ is the total change without dividing by the 5 hours.",
  },
  // CED 1.3–1.4
  {
    id: "precalc-u1-026",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "hard",
    stem: "A quadratic function $f$ has average rate of change $6$ over the interval $[0, 2]$ and average rate of change $10$ over the interval $[2, 4]$. What is the average rate of change of $f$ over the interval $[4, 6]$?",
    options: ["$12$", "$14$", "$16$", "$10$"],
    correctIndex: 1,
    explanation:
      "For a quadratic function, the average rates of change over consecutive intervals of equal length change by a constant amount. The rate went from 6 to 10, an increase of 4, so the next rate is $10 + 4 = 14$. Multiplying by the ratio $\\frac{10}{6}$ would be the rule for an exponential function and does not give 16 exactly anyway. 12 is the average of 6 and 10, not the next term. 10 assumes the rate stays constant, which is the rule for a linear function.",
  },
  // CED 1.2
  {
    id: "precalc-u1-027",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "The temperature of a cooling object is modeled by a linear function $T$ of time $t$ in minutes, with $T(2) = 70$ and $T(5) = 61$ degrees. According to the model, what is $T(9)$?",
    options: ["$55$ degrees", "$52$ degrees", "$46$ degrees", "$49$ degrees"],
    correctIndex: 3,
    explanation:
      "A linear function has a constant rate of change: $\\dfrac{61 - 70}{5 - 2} = -3$ degrees per minute. From $t = 5$ to $t = 9$ is 4 minutes, so $T(9) = 61 + 4(-3) = 49$. $55$ subtracts 3 per minute from $t = 2$ for only 5 minutes. $52$ subtracts the whole earlier drop of 9 again from 61. $46$ counts 5 minutes after $t = 5$ instead of 4.",
  },
  // CED 1.1, 1.3
  {
    id: "precalc-u1-028",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "The height of a ball, in meters, $t$ seconds after it is thrown is given by a function $h$ with $h(0) = 2$, $h(1) = 27$, $h(2) = 42$, and $h(3) = 47$. Which statement is supported by these values?",
    options: [
      "The average rate of change of $h$ over $[1, 3]$ is $10$ meters per second, and the height is increasing at a decreasing rate.",
      "The average rate of change of $h$ over $[1, 3]$ is $20$ meters per second, and the height is increasing at a decreasing rate.",
      "The average rate of change of $h$ over $[1, 3]$ is $10$ meters per second, and the height is increasing at an increasing rate.",
      "The average rate of change of $h$ over $[1, 3]$ is $45$ meters per second, and the height is increasing at a constant rate.",
    ],
    correctIndex: 0,
    explanation:
      "Over $[1, 3]$ the average rate of change is $\\dfrac{47 - 27}{3 - 1} = \\dfrac{20}{2} = 10$ meters per second. The one-second changes are $25, 15, 5$: still positive, so the height is increasing, but shrinking, so it increases at a decreasing rate. 20 is the change in height without dividing by 2 seconds. \"Increasing rate\" contradicts the shrinking differences. 45 is $h(3) - h(0)$ divided by nothing, and the rate is not constant.",
  },
  // CED 1.3–1.4
  {
    id: "precalc-u1-029",
    unit: "unit-1",
    topicSlug: "rates-of-change-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "The amount of water $Q$ in a tank, in gallons, is a function of time $x$ in hours. Its average rates of change over the intervals $[0, 2]$, $[2, 4]$, and $[4, 6]$ are $7$, $3$, and $-1$ gallons per hour, respectively. Which statement is best supported by this information?",
    options: [
      "The average rates of change change by a constant factor, so $Q$ could be modeled by an exponential function.",
      "The average rates of change decrease by a constant 4 over equal-length intervals, so $Q$ could be modeled by a quadratic function whose graph is concave down.",
      "The average rates of change increase by a constant 4 over equal-length intervals, so $Q$ could be modeled by a quadratic function whose graph is concave up.",
      "$Q$ is decreasing on $0 \\le x \\le 6$ because its average rates of change are decreasing.",
    ],
    correctIndex: 1,
    explanation:
      "The rates go $7 \\to 3 \\to -1$, dropping by exactly 4 each time. A constant change in the average rate of change over equal intervals is the signature of a quadratic model, and a decreasing rate of change means the graph is concave down. The rates are not multiplied by a fixed factor ($\\frac{3}{7} \\ne \\frac{-1}{3}$), so an exponential model is not supported. The rates decrease rather than increase. $Q$ itself is increasing while its rate is positive (the first two intervals); only the rate is decreasing throughout.",
  },

  // ---- standalone: transformations ----
  // CED 1.12
  {
    id: "precalc-u1-030",
    unit: "unit-1",
    topicSlug: "transformations-precalc",
    difficulty: "medium",
    stem: "The point $(4, 5)$ is on the graph of $f$. Which point must be on the graph of $g(x) = 3f(x + 2) - 4$?",
    options: ["$(2, 11)$", "$(6, 11)$", "$(2, 19)$", "$(2, 1)$"],
    correctIndex: 0,
    explanation:
      "$g(2) = 3f(4) - 4 = 3(5) - 4 = 11$, so $(2, 11)$ is on the graph: the input moves left 2 (from $x + 2 = 4$), and the output is multiplied by 3 and then shifted down 4. $(6, 11)$ moves the input right instead of left. $19$ adds 4 instead of subtracting it. $1$ subtracts 4 before multiplying by 3, the wrong order.",
  },
  // CED 1.12
  {
    id: "precalc-u1-031",
    unit: "unit-1",
    topicSlug: "transformations-precalc",
    difficulty: "easy",
    stem: "The graph of $f$ has $x$-intercepts at $x = -6$ and $x = 3$. What are the $x$-intercepts of the graph of $g(x) = f(3x)$?",
    options: ["$x = -18$ and $x = 9$", "$x = -6$ and $x = 3$, the same as for $f$", "$x = -12$ and $x = 6$", "$x = -2$ and $x = 1$"],
    correctIndex: 3,
    explanation:
      "$g(x) = 0$ when $f(3x) = 0$, that is, when $3x = -6$ or $3x = 3$, so $x = -2$ or $x = 1$. Multiplying the input by 3 compresses the graph horizontally by a factor of $\\frac{1}{3}$, so every $x$-intercept is divided by 3. Multiplying the intercepts by 3 stretches the graph instead. The intercepts do change, because the transformation is horizontal. $-12$ and $6$ use a dilation by a factor of 2, which does not appear in $g$.",
  },
  // CED 1.12
  {
    id: "precalc-u1-032",
    unit: "unit-1",
    topicSlug: "transformations-precalc",
    difficulty: "easy",
    stem: "The graph of $g$ is obtained from the graph of $y = x^3$ by a horizontal translation 2 units to the right, then a reflection across the $x$-axis, then a vertical translation 4 units up. Which is an expression for $g(x)$?",
    options: ["$-(x + 2)^3 + 4$", "$-(x - 2)^3 - 4$", "$(x - 2)^3 + 4$", "$-(x - 2)^3 + 4$"],
    correctIndex: 3,
    explanation:
      "A shift right 2 replaces $x$ with $x - 2$, giving $(x - 2)^3$; reflecting across the $x$-axis negates the output, giving $-(x - 2)^3$; shifting up 4 adds 4, giving $-(x - 2)^3 + 4$. Using $x + 2$ shifts left instead of right. Subtracting 4 shifts down. Omitting the negative sign skips the reflection.",
  },
  // CED 1.12
  {
    id: "precalc-u1-033",
    unit: "unit-1",
    topicSlug: "transformations-precalc",
    difficulty: "medium",
    stem: "The graph of $f$ has a vertical asymptote at $x = 1$ and a horizontal asymptote at $y = 0$. Let $g(x) = 2f(x + 3) - 5$. Which statement about the asymptotes of the graph of $g$ is correct?",
    options: [
      "The vertical asymptote is $x = -2$ and the horizontal asymptote is $y = -10$.",
      "The vertical asymptote is $x = 4$ and the horizontal asymptote is $y = -5$.",
      "The vertical asymptote is $x = -2$ and the horizontal asymptote is $y = -5$.",
      "The vertical asymptote is $x = -2$ and the horizontal asymptote is $y = 0$.",
    ],
    correctIndex: 2,
    explanation:
      "$g$ is undefined where $x + 3 = 1$, so the vertical asymptote moves 3 units left, to $x = -2$. As $|x|$ grows, $f(x + 3) \\to 0$, so $g(x) \\to 2(0) - 5 = -5$: the horizontal asymptote is $y = -5$. The vertical stretch by 2 does not move $y = 0$, so $y = -10$ is wrong. $x = 4$ shifts the wrong way. $y = 0$ ignores the vertical shift.",
  },
  // CED 1.12
  {
    id: "precalc-u1-034",
    unit: "unit-1",
    topicSlug: "transformations-precalc",
    difficulty: "hard",
    stem: "Let $g(x) = f(2x - 6)$. Which sequence of transformations applied to the graph of $f$ produces the graph of $g$?",
    options: [
      "A horizontal dilation by a factor of $\\dfrac{1}{2}$, then a horizontal translation 6 units to the right",
      "A horizontal translation 6 units to the right, then a horizontal dilation by a factor of $\\dfrac{1}{2}$",
      "A horizontal dilation by a factor of $\\dfrac{1}{2}$, then a horizontal translation 3 units to the left",
      "A horizontal dilation by a factor of $2$, then a horizontal translation 3 units to the right",
    ],
    correctIndex: 1,
    explanation:
      "Translating right 6 gives $f(x - 6)$; then replacing $x$ with $2x$ (a horizontal dilation by $\\frac{1}{2}$) gives $f(2x - 6)$, as required. Doing the dilation first and then shifting right 6 gives $f(2(x - 6)) = f(2x - 12)$. Shifting left 3 after the dilation gives $f(2(x + 3)) = f(2x + 6)$. A dilation by a factor of 2 would replace $x$ with $\\frac{x}{2}$. (Dilating by $\\frac{1}{2}$ and then shifting right 3 would also work, since $f(2(x - 3)) = f(2x - 6)$, but that sequence is not offered.)",
  },
  // CED 1.12
  {
    id: "precalc-u1-035",
    unit: "unit-1",
    topicSlug: "transformations-precalc",
    difficulty: "hard",
    stem: "The graph of $y = x^2$ is dilated horizontally by a factor of $\\dfrac{1}{2}$ to produce the graph of $g$. Which statement about the graph of $g$ is true?",
    options: [
      "It is the same as the graph of $y = 2x^2$, which is $y = x^2$ stretched vertically by a factor of $2$.",
      "It is the same as the graph of $y = x^2$ compressed vertically by a factor of $\\dfrac{1}{2}$.",
      "It is the same as the graph of $y = x^2$ stretched vertically by a factor of $4$.",
      "It is the same as the graph of $y = x^2$ compressed vertically by a factor of $\\dfrac{1}{4}$.",
    ],
    correctIndex: 2,
    explanation:
      "A horizontal dilation by $\\frac{1}{2}$ replaces $x$ with $2x$: $g(x) = (2x)^2 = 4x^2$, which is $y = x^2$ stretched vertically by a factor of 4. For this function the two descriptions produce identical graphs because squaring turns the factor 2 on the input into a factor 4 on the output. A vertical factor of 2 forgets to square the 2. A vertical compression would make the parabola wider, but a horizontal compression makes it narrower.",
  },

  // ---- standalone: function modeling ----
  // CED 1.14
  {
    id: "precalc-u1-036",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A data plan costs $\\$20$ per month for up to 2 gigabytes of data, plus $\\$8$ for each gigabyte used beyond 2 gigabytes. Which expression gives the monthly cost, in dollars, when $g$ gigabytes are used and $g > 2$?",
    options: ["$8g + 20$", "$8g + 18$", "$8g + 4$", "$8(g - 2)$"],
    correctIndex: 2,
    explanation:
      "The first 2 gigabytes cost 20 dollars, and each of the $g - 2$ gigabytes beyond that adds 8 dollars, so the cost is $20 + 8(g - 2) = 8g + 4$. $8g + 20$ charges the extra rate on all $g$ gigabytes. $8(g - 2)$ leaves out the 20-dollar base. $8g + 18$ comes from $20 + 8g - 2$, forgetting to multiply the 2 by 8 when distributing.",
  },
  // CED 1.13
  {
    id: "precalc-u1-037",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "medium",
    calculator: true,
    stem: "A data set has inputs $1, 2, 3, 4$ and corresponding outputs $3, 12, 27, 48$. Which type of function best models the data, and why?",
    options: [
      "Quadratic, because the second differences of the outputs are constant",
      "Exponential, because each output is a constant multiple of the previous output",
      "Linear, because the outputs increase for each unit increase in the input",
      "Quadratic, because the ratios of consecutive outputs are constant",
    ],
    correctIndex: 0,
    explanation:
      "The first differences are $9, 15, 21$ and the second differences are $6, 6$: constant second differences over equal input steps are the signature of a quadratic model (here $y = 3x^2$). The ratios $4, 2.25, 1.78$ are not constant, so the data are not exponential, and constant ratios would point to an exponential model, not a quadratic one. Increasing outputs do not make a model linear; a linear model needs constant first differences.",
  },
  // CED 1.14
  {
    id: "precalc-u1-038",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "easy",
    calculator: true,
    stem: "A rectangle has a perimeter of 100 meters. If one side has length $x$ meters, the area is modeled by $A(x) = x(50 - x)$. Which domain for $A$ makes sense in this context?",
    options: ["$0 < x < 100$", "$0 < x < 50$", "all real numbers $x$", "$0 \\le x \\le 50$"],
    correctIndex: 1,
    explanation:
      "Both side lengths, $x$ and $50 - x$, must be positive, so $0 < x < 50$. The value 100 is the whole perimeter, not a bound on one side. All real numbers is the domain of the formula, not of the rectangle: it allows negative side lengths. Including 0 and 50 would allow a rectangle with a side of length 0.",
  },
  // CED 1.13–1.14
  {
    id: "precalc-u1-039",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "A farmer uses 60 meters of fencing to enclose a rectangular pen against a long barn wall, so fencing is needed on only three sides. If $x$ is the length of each of the two sides perpendicular to the barn, the enclosed area is $A(x) = x(60 - 2x)$. Which statement is true?",
    options: [
      "$A$ is a quadratic function with zeros at $x = 0$ and $x = 60$, so the maximum area occurs at $x = 30$.",
      "$A$ is a quadratic function with zeros at $x = 0$ and $x = 30$, so the maximum area occurs at $x = 15$.",
      "$A$ is a quadratic function with zeros at $x = 0$ and $x = 30$, so the maximum area occurs at $x = 20$.",
      "$A$ increases for all $x > 0$, so there is no maximum area.",
    ],
    correctIndex: 1,
    explanation:
      "$A(x) = x(60 - 2x) = -2x^2 + 60x$ is a quadratic with zeros where $x = 0$ or $60 - 2x = 0$, that is, $x = 30$; its graph opens downward, so the maximum is at the vertex, midway between the zeros at $x = 15$. Reading the zero as $x = 60$ forgets the factor 2. $x = 20$ is not the midpoint of 0 and 30. A downward-opening parabola does not increase for all $x > 0$.",
  },
  // CED 1.14
  {
    id: "precalc-u1-040",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "easy",
    calculator: true,
    stem: "The concentration of a drug in the bloodstream, in milligrams per liter, $t$ hours after a dose is modeled by $C(t) = \\dfrac{12t}{t^2 + 4}$. Which statement describes the long-term behavior of the concentration according to the model?",
    options: [
      "The concentration approaches 3 milligrams per liter.",
      "The concentration approaches 12 milligrams per liter.",
      "The concentration increases without bound as $t$ increases.",
      "The concentration approaches 0 milligrams per liter.",
    ],
    correctIndex: 3,
    explanation:
      "The degree of the numerator (1) is less than the degree of the denominator (2), so $\\displaystyle\\lim_{t \\to \\infty} C(t) = 0$: the drug is eventually eliminated. 3 is the peak concentration, reached at $t = 2$, not the long-term value. 12 is the leading coefficient of the numerator alone. The concentration cannot grow without bound because the denominator grows faster.",
  },
  // CED 1.13–1.14
  {
    id: "precalc-u1-041",
    unit: "unit-1",
    topicSlug: "function-modeling-precalc",
    difficulty: "hard",
    calculator: true,
    stem: "A tank is draining. Its volume, in liters, is $500$ at $t = 0$ minutes, $440$ at $t = 1$, $380$ at $t = 2$, and $320$ at $t = 3$. Based on an appropriate model, which statement is correct?",
    options: [
      "$V(t) = 500 - 60t$ models the volume, so the tank is empty after $\\dfrac{25}{3}$ minutes.",
      "$V(t) = 500(0.88)^t$ models the volume, so the tank is never completely empty.",
      "$V(t) = 500 - 60t$ models the volume, so the tank is empty after $8$ minutes.",
      "$V(t) = 500 - 60t$ models the volume, so the tank is empty after $\\dfrac{25}{3}$ hours.",
    ],
    correctIndex: 0,
    explanation:
      "The volume drops by the same 60 liters every minute, so a linear model $V(t) = 500 - 60t$ fits. It reaches 0 when $60t = 500$, that is, $t = \\frac{500}{60} = \\frac{25}{3}$ minutes. The ratios $\\frac{440}{500} = 0.88$ and $\\frac{380}{440} \\approx 0.864$ are not equal, so an exponential model is not supported. $8$ minutes leaves 20 liters in the tank. The time $t$ is measured in minutes, so $\\dfrac{25}{3}$ hours uses the wrong unit.",
  },

  // ---- standalone: complex zeros and the Fundamental Theorem of Algebra ----
  // CED 1.5
  {
    id: "precalc-u1-042",
    unit: "unit-1",
    topicSlug: "fundamental-theorem-algebra",
    difficulty: "easy",
    stem: "A polynomial function $p$ with real coefficients has $2$ and $3i$ among its zeros. What is the least possible degree of $p$, and why?",
    options: [
      "2, because $2$ and $3i$ are the only zeros",
      "4, because $-3i$ and $-2$ must also be zeros",
      "3, because $-3i$ must also be a zero",
      "3, because $2 - 3i$ must also be a zero",
    ],
    correctIndex: 2,
    explanation:
      "Non-real zeros of a polynomial with real coefficients come in conjugate pairs, so $-3i$, the conjugate of $3i$, is also a zero and the least degree is 3. Degree 2 ignores the conjugate. The conjugate of a real zero is itself, so $-2$ is not forced, and degree 4 is not the least. $2 - 3i$ is the conjugate of $2 + 3i$, which is not one of the given zeros.",
  },
  // CED 1.5
  {
    id: "precalc-u1-043",
    unit: "unit-1",
    topicSlug: "fundamental-theorem-algebra",
    difficulty: "medium",
    stem: "A polynomial function of degree 4 with real coefficients has $2 + i$ as a zero. What is the greatest possible number of distinct real zeros of the polynomial?",
    options: ["$1$", "$2$", "$3$", "$4$"],
    correctIndex: 1,
    explanation:
      "Real coefficients force $2 - i$ to be a zero as well, so the two non-real zeros account for 2 of the 4 zeros (counting multiplicity). The remaining 2 zeros can be real and distinct, giving at most 2 distinct real zeros. Three would leave no room for the conjugate pair. Four would require no non-real zeros at all. One is possible but not the greatest.",
  },
  // CED 1.5
  {
    id: "precalc-u1-044",
    unit: "unit-1",
    topicSlug: "fundamental-theorem-algebra",
    difficulty: "hard",
    stem: "Which polynomial of least degree with real coefficients and leading coefficient 1 has zeros $2$ and $1 + i$?",
    options: ["$x^3 - 4x^2 + 6x - 4$", "$x^2 - 2x + 2$", "$x^3 - 2x - 4$", "$x^3 - 4x^2 + 6x + 4$"],
    correctIndex: 0,
    explanation:
      "The conjugate $1 - i$ must also be a zero. The pair gives the factor $(x - 1 - i)(x - 1 + i) = (x - 1)^2 + 1 = x^2 - 2x + 2$, and multiplying by $(x - 2)$ gives $x^3 - 2x^2 + 2x - 2x^2 + 4x - 4 = x^3 - 4x^2 + 6x - 4$. $x^2 - 2x + 2$ leaves out the real zero 2. $x^3 - 2x - 4$ comes from using $x^2 + 2x + 2$, the factor for $-1 \\pm i$. The last option has the wrong sign on the constant term, since $(-2)(2) = -4$.",
  },
  // CED 1.5
  {
    id: "precalc-u1-045",
    unit: "unit-1",
    topicSlug: "fundamental-theorem-algebra",
    difficulty: "medium",
    stem: "Let $p(x) = x^4 + 5x^2 + 4$. Which statement about the zeros of $p$ is true?",
    options: [
      "$p$ has 2 real zeros and 2 non-real zeros.",
      "$p$ has 4 real zeros.",
      "$p$ has 0 real zeros and 4 non-real zeros.",
      "$p$ has 2 real zeros and 0 non-real zeros.",
    ],
    correctIndex: 2,
    explanation:
      "$p(x) = (x^2 + 1)(x^2 + 4)$, and neither factor is 0 for a real $x$ because $x^2 + 1 \\ge 1$ and $x^2 + 4 \\ge 4$; in fact $p(x) \\ge 4 > 0$ for every real $x$, so the graph never meets the $x$-axis. A degree-4 polynomial has 4 zeros counting multiplicity, so all 4 are non-real: $\\pm i$ and $\\pm 2i$. The other options assign real zeros to a polynomial that is always positive, or give fewer than 4 zeros in total.",
  },

  // ---- standalone: polynomial division and equivalent forms ----
  // CED 1.11
  {
    id: "precalc-u1-046",
    unit: "unit-1",
    topicSlug: "polynomial-division-remainder-theorem",
    difficulty: "medium",
    stem: "Which expression is equivalent to $\\dfrac{x^2 + 3x + 5}{x + 1}$ for $x \\ne -1$?",
    options: ["$x + 2 - \\dfrac{3}{x + 1}$", "$x + 2$", "$x + 4 + \\dfrac{1}{x + 1}$", "$x + 2 + \\dfrac{3}{x + 1}$"],
    correctIndex: 3,
    explanation:
      "$(x + 1)(x + 2) = x^2 + 3x + 2$, which leaves a remainder of $5 - 2 = 3$, so $\\dfrac{x^2 + 3x + 5}{x + 1} = x + 2 + \\dfrac{3}{x + 1}$. Subtracting the remainder term has the wrong sign. $x + 2$ alone drops the remainder, so it is not equivalent. $x + 4$ comes from matching the constant term 5 by $(x + 1)(x + 4)$, which gives the wrong $x$ term.",
  },
  // CED 1.5, 1.11
  {
    id: "precalc-u1-047",
    unit: "unit-1",
    topicSlug: "polynomial-division-remainder-theorem",
    difficulty: "medium",
    stem: "Let $p(x) = x^3 - 7x + 6$. Since $p(1) = 0$, $(x - 1)$ is a factor of $p(x)$. Which of the following is the complete factorization of $p(x)$?",
    options: ["$(x - 1)(x - 2)(x + 3)$", "$(x - 1)(x + 2)(x - 3)$", "$(x + 1)(x - 2)(x + 3)$", "$(x - 1)(x^2 + x + 6)$"],
    correctIndex: 0,
    explanation:
      "Dividing $x^3 - 7x + 6$ by $x - 1$ gives the quotient $x^2 + x - 6$ with remainder 0, and $x^2 + x - 6 = (x + 3)(x - 2)$, so $p(x) = (x - 1)(x - 2)(x + 3)$; checking, the zeros $1, 2, -3$ all give $p = 0$. $(x + 2)(x - 3)$ expands to $x^2 - x - 6$, the wrong middle sign. $(x + 1)$ is not a factor because $p(-1) = 12$. $x^2 + x + 6$ has a sign error in its constant and does not factor.",
  },
  // CED 1.7, 1.11
  {
    id: "precalc-u1-048",
    unit: "unit-1",
    topicSlug: "polynomial-division-remainder-theorem",
    difficulty: "medium",
    stem: "Let $f(x) = \\dfrac{x^2 - x - 6}{x + 1}$. Using polynomial division, which equation gives the slant asymptote of the graph of $f$?",
    options: ["$y = x$", "$y = 1$", "$y = -2$", "$y = x - 2$"],
    correctIndex: 3,
    explanation:
      "$(x + 1)(x - 2) = x^2 - x - 2$, so $x^2 - x - 6 = (x + 1)(x - 2) - 4$ and $f(x) = x - 2 - \\dfrac{4}{x + 1}$. The remainder term goes to 0 as $|x|$ grows, leaving the slant asymptote $y = x - 2$. $y = x$ uses only the ratio of leading terms and drops the constant. $y = 1$ treats the ratio of leading coefficients as a horizontal asymptote, but the numerator's degree is larger, so there is none. $y = -2$ takes the constant of the quotient alone as a horizontal asymptote.",
  },
  // CED 1.11
  {
    id: "precalc-u1-049",
    unit: "unit-1",
    topicSlug: "polynomial-division-remainder-theorem",
    difficulty: "hard",
    stem: "When $p(x) = 2x^3 + ax^2 - 5x + 6$ is divided by $x - 2$, the quotient is $2x^2 + 3x + 1$ and the remainder is $r$. What is the value of $a$?",
    options: ["$3$", "$-1$", "$7$", "$1$"],
    correctIndex: 1,
    explanation:
      "Division means $p(x) = (x - 2)(2x^2 + 3x + 1) + r$. Expanding, $(x - 2)(2x^2 + 3x + 1) = 2x^3 + 3x^2 + x - 4x^2 - 6x - 2 = 2x^3 - x^2 - 5x - 2$, so the $x^2$ coefficient of $p$ is $a = -1$ (and the constants give $-2 + r = 6$, so $r = 8$). $3$ keeps only the $3x^2$ term and forgets the $-4x^2$ from $-2 \\cdot 2x^2$. $7$ adds the $4$ to $3$ instead of subtracting it. $1$ drops the sign of the result.",
  },
]
