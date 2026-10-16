/**
 * AP Calculus AB diagnostic v2, Unit 7: Differential Equations. No calculator.
 * AB scope only (no Euler's method, no logistic models). Stimulus set: a
 * slope field (calcab-s701).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s701",
    title: "A slope field",
    kind: "figure",
    content:
      "The figure shows a slope field for a first-order differential equation, drawn at the 49 points $(x, y)$ with integer coordinates from $-3$ to $3$. " +
      "The segments are horizontal at the points on the line $y = x$, such as $(0, 0)$, $(1, 1)$ and $(-2, -2)$. At points below and to the right of that line the segments have positive slope, and above and to the left of it they have negative slope. " +
      "Every point on a line parallel to $y = x$ carries the same slope, and the slopes get steeper the farther the line is from $y = x$: for example, the slope is 1 at $(1, 0)$, 2 at $(2, 0)$ and $-1$ at $(0, 1)$.",
    svg: FIGURES["calcab-s701"],
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s701: slope field ----
  {
    id: "calcab-s701-q1",
    stimulusId: "calcab-s701",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "medium",
    stem: "Which differential equation could the slope field represent?",
    options: [
      "$\\dfrac{dy}{dx} = x - y$",
      "$\\dfrac{dy}{dx} = y - x$",
      "$\\dfrac{dy}{dx} = xy$",
      "$\\dfrac{dy}{dx} = x + y$",
    ],
    correctIndex: 0,
    explanation:
      "The slope is 0 exactly on $y = x$, positive below that line (where $x > y$) and negative above it, and equal on each parallel line: that is $\\frac{dy}{dx} = x - y$. Check: at $(1, 0)$ it gives 1 and at $(0, 1)$ it gives $-1$, as shown. $y - x$ has every sign reversed. $xy$ would be 0 along both axes, and $x + y$ would be 0 along $y = -x$.",
  },
  {
    id: "calcab-s701-q2",
    stimulusId: "calcab-s701",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "hard",
    stem: "Let $y = f(x)$ be the solution curve of this differential equation that passes through the point $(2, 2)$. Based on the slope field, what happens to $f$ at $x = 2$?",
    options: [
      "$f$ has a relative minimum at $x = 2$.",
      "$f$ has a relative maximum at $x = 2$.",
      "The graph of $f$ has a point of inflection at $x = 2$.",
      "$f$ is increasing at $x = 2$ with slope 2.",
    ],
    correctIndex: 0,
    explanation:
      "The slope at $(2, 2)$ is 0 because the point is on $y = x$. Just to the left of it (with $y$ near 2) the points lie above the line, where slopes are negative, and just to the right they lie below it, where slopes are positive. So $f$ decreases and then increases: a relative minimum. (Algebraically, $f'' = 1 - f' = 1 > 0$ there.) A maximum would need the sign change reversed. A horizontal tangent with a sign change is an extremum, not an inflection point, and the slope there is 0, not 2.",
  },
  // ---- standalone ----
  {
    id: "calcab-u7-002",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "easy",
    stem: "Which of the following functions is a solution of the differential equation $y'' + 9y = 0$?",
    options: ["$y = \\sin(3x)$", "$y = e^{3x}$", "$y = \\sin(9x)$", "$y = \\cos\\left(\\dfrac{x}{3}\\right)$"],
    correctIndex: 0,
    explanation:
      "For $y = \\sin 3x$, $y'' = -9\\sin 3x$, so $y'' + 9y = 0$. For $e^{3x}$, $y'' + 9y = 18e^{3x} \\ne 0$. For $\\sin 9x$, $y'' = -81\\sin 9x$, giving $-72\\sin 9x$. For $\\cos\\frac{x}{3}$, $y'' = -\\frac{1}{9}\\cos\\frac{x}{3}$, which does not cancel $9y$.",
  },
  {
    id: "calcab-u7-003",
    unit: "unit-7",
    topicSlug: "exponential-models-calcab",
    difficulty: "easy",
    stem: "The rate at which the population $P$ of a town changes is proportional to the population. Which differential equation models this, where $k$ is a constant?",
    options: [
      "$\\dfrac{dP}{dt} = kP$",
      "$\\dfrac{dP}{dt} = kP^2$",
      "$\\dfrac{dP}{dt} = P + k$",
      "$\\dfrac{dP}{dt} = \\dfrac{k}{P}$",
    ],
    correctIndex: 0,
    explanation:
      "\"The rate of change is proportional to $P$\" means $\\frac{dP}{dt} = kP$. $kP^2$ makes the rate proportional to the square of the population. $P + k$ adds a constant instead of multiplying. $\\frac{k}{P}$ makes the rate inversely proportional to $P$.",
  },
  {
    id: "calcab-u7-004",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "easy",
    stem: "For the differential equation $\\dfrac{dy}{dx} = \\dfrac{x^2}{y}$, what is the slope of the solution curve at the point $(2, -1)$?",
    options: ["$-4$", "$4$", "$-\\dfrac{1}{4}$", "$-2$"],
    correctIndex: 0,
    explanation:
      "Substitute $x = 2$ and $y = -1$: $\\frac{2^2}{-1} = -4$. 4 drops the sign of $y$. $-\\frac{1}{4}$ inverts the quotient, and $-2$ uses $x$ instead of $x^2$.",
  },
  {
    id: "calcab-u7-005",
    unit: "unit-7",
    topicSlug: "exponential-models-calcab",
    difficulty: "easy",
    stem: "A quantity $y$ satisfies $\\dfrac{dy}{dt} = 0.04y$ and $y(0) = 500$. Which expression gives $y(t)$?",
    options: ["$y = 500e^{0.04t}$", "$y = 500e^{4t}$", "$y = 500 + e^{0.04t}$", "$y = 500(1.04)^t$"],
    correctIndex: 0,
    explanation:
      "$\\frac{dy}{dt} = ky$ has solutions $y = y(0)e^{kt}$, here $500e^{0.04t}$. $500e^{4t}$ reads the 4% rate as $k = 4$. $500 + e^{0.04t}$ has $y(0) = 501$ and does not satisfy the equation. $500(1.04)^t$ grows 4% per unit time, which corresponds to $k = \\ln 1.04$, not $0.04$.",
  },
  {
    id: "calcab-u7-006",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "easy",
    stem: "Which of the following correctly separates the variables in $\\dfrac{dy}{dx} = \\dfrac{x}{y}$?",
    options: ["$y\\,dy = x\\,dx$", "$\\dfrac{dy}{y} = \\dfrac{dx}{x}$", "$\\dfrac{dy}{y} = x\\,dx$", "$dy = \\dfrac{x}{y}\\,dx$"],
    correctIndex: 0,
    explanation:
      "Multiply both sides by $y\\,dx$: $y\\,dy = x\\,dx$, with all $y$ on one side and all $x$ on the other. $\\frac{dy}{y} = \\frac{dx}{x}$ separates $\\frac{dy}{dx} = \\frac{y}{x}$, with $x$ and $y$ swapped. $\\frac{dy}{y} = x\\,dx$ divides by $y$ instead of multiplying. $dy = \\frac{x}{y}\\,dx$ still mixes $y$ into the $x$ side.",
  },
  {
    id: "calcab-u7-007",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "medium",
    stem: "What is the solution of $\\dfrac{dy}{dx} = 3x^2y$ with $y(0) = 2$?",
    options: ["$y = 2e^{x^3}$", "$y = e^{x^3} + 1$", "$y = 2e^{3x^3}$", "$y = e^{x^3 + 2}$"],
    correctIndex: 0,
    explanation:
      "Separate: $\\frac{dy}{y} = 3x^2\\,dx$, so $\\ln|y| = x^3 + C$ and $y = Ae^{x^3}$; $y(0) = 2$ gives $A = 2$. $e^{x^3} + 1$ adds the constant after exponentiating and does not satisfy the equation. $2e^{3x^3}$ integrates $3x^2$ as $3x^3$. $e^{x^3 + 2}$ puts the initial value in the exponent, giving $y(0) = e^2$.",
  },
  {
    id: "calcab-u7-008",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "medium",
    stem: "What is the solution of $\\dfrac{dy}{dx} = 1 + y^2$ with $y(0) = 1$?",
    options: [
      "$y = \\tan\\left(x + \\dfrac{\\pi}{4}\\right)$",
      "$y = \\tan(x + 1)$",
      "$y = \\arctan x + \\dfrac{\\pi}{4}$",
      "$y = x + \\dfrac{x^3}{3} + 1$",
    ],
    correctIndex: 0,
    explanation:
      "Separate: $\\frac{dy}{1 + y^2} = dx$, so $\\arctan y = x + C$. $y(0) = 1$ gives $C = \\arctan 1 = \\frac{\\pi}{4}$, so $y = \\tan\\left(x + \\frac{\\pi}{4}\\right)$. $\\tan(x + 1)$ uses $C = 1$, the initial $y$-value, instead of $C = \\arctan 1$; it gives $y(0) = \\tan 1 \\ne 1$. $\\arctan x + \\frac{\\pi}{4}$ solves $\\arctan y = x + C$ for $y$ incorrectly, applying arctan to $x$ instead of tan to both sides. $x + \\frac{x^3}{3} + 1$ integrates $1 + y^2$ as if $y$ were $x$.",
  },
  {
    id: "calcab-u7-009",
    unit: "unit-7",
    topicSlug: "exponential-models-calcab",
    difficulty: "medium",
    stem: "The amount of a radioactive substance satisfies $\\dfrac{dA}{dt} = kA$, and its half-life is 10 years. What is the value of $k$?",
    options: ["$-\\dfrac{\\ln 2}{10}$", "$\\dfrac{\\ln 2}{10}$", "$-\\dfrac{1}{20}$", "$-10\\ln 2$"],
    correctIndex: 0,
    explanation:
      "$A = A_0e^{kt}$ and $A(10) = \\frac{1}{2}A_0$ give $e^{10k} = \\frac{1}{2}$, so $k = \\frac{\\ln(1/2)}{10} = -\\frac{\\ln 2}{10}$. The positive value describes growth, not decay. $-\\frac{1}{20}$ assumes half of the substance is lost at a constant rate. $-10\\ln 2$ multiplies by the half-life instead of dividing.",
  },
  {
    id: "calcab-u7-010",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "medium",
    stem: "A cup of tea cools in a 20°C room according to $\\dfrac{dT}{dt} = -k(T - 20)$, where $k > 0$, and $T(0) = 90$. Which expression gives $T(t)$?",
    options: ["$T = 20 + 70e^{-kt}$", "$T = 90e^{-kt}$", "$T = 20 + 90e^{-kt}$", "$T = 70 + 20e^{-kt}$"],
    correctIndex: 0,
    explanation:
      "Separate: $\\frac{dT}{T - 20} = -k\\,dt$, so $T - 20 = Ce^{-kt}$. At $t = 0$, $C = 90 - 20 = 70$, so $T = 20 + 70e^{-kt}$. $90e^{-kt}$ cools toward 0°C instead of room temperature. $20 + 90e^{-kt}$ starts at 110°C. $70 + 20e^{-kt}$ swaps the constants and would level off at 70°C.",
  },
  {
    id: "calcab-u7-011",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "medium",
    stem: "What is the general solution of $\\dfrac{dy}{dx} = y\\cos x$?",
    options: ["$y = Ce^{\\sin x}$", "$y = e^{\\sin x} + C$", "$y = Ce^{\\cos x}$", "$y = C\\sin x$"],
    correctIndex: 0,
    explanation:
      "Separate: $\\frac{dy}{y} = \\cos x\\,dx$, so $\\ln|y| = \\sin x + C_1$ and $y = Ce^{\\sin x}$. $e^{\\sin x} + C$ adds the constant after exponentiating, which does not satisfy the equation. $Ce^{\\cos x}$ forgets to integrate $\\cos x$. $C\\sin x$ forgets the logarithm from $\\int \\frac{dy}{y}$.",
  },
  {
    id: "calcab-u7-012",
    unit: "unit-7",
    topicSlug: "exponential-models-calcab",
    difficulty: "medium",
    stem: "A bacteria population grows exponentially and doubles every 6 hours. How long does it take the population to grow from 1,000 to 8,000?",
    options: ["18 hours", "48 hours", "24 hours", "42 hours"],
    correctIndex: 0,
    explanation:
      "Growing from 1,000 to 8,000 is a factor of $8 = 2^3$: three doublings, $3 \\times 6 = 18$ hours. 48 hours multiplies the factor 8 by 6. 24 hours counts four doublings. 42 hours treats the growth as linear, adding 1,000 every 6 hours: $\\frac{7{,}000}{1{,}000} \\times 6$.",
  },
  {
    id: "calcab-u7-013",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "hard",
    stem: "What is the particular solution of $\\dfrac{dy}{dx} = xy^2$ with $y(1) = 1$?",
    options: [
      "$y = \\dfrac{2}{3 - x^2}$",
      "$y = \\dfrac{2}{x^2 + 1}$",
      "$y = \\dfrac{2}{x^2 - 3}$",
      "$y = -\\dfrac{2}{x^2}$",
    ],
    correctIndex: 0,
    explanation:
      "Separate: $y^{-2}\\,dy = x\\,dx$, so $-\\frac{1}{y} = \\frac{x^2}{2} + C$. At $(1, 1)$: $-1 = \\frac{1}{2} + C$, so $C = -\\frac{3}{2}$. Then $\\frac{1}{y} = \\frac{3 - x^2}{2}$ and $y = \\frac{2}{3 - x^2}$. $\\frac{2}{x^2 + 1}$ drops the minus sign of $\\int y^{-2}\\,dy$. $\\frac{2}{x^2 - 3}$ gives $y(1) = -1$. $-\\frac{2}{x^2}$ omits the constant of integration.",
  },
  {
    id: "calcab-u7-014",
    unit: "unit-7",
    topicSlug: "exponential-models-calcab",
    difficulty: "hard",
    stem: "A quantity $y$ satisfies $\\dfrac{dy}{dt} = ky$ for some constant $k$. If $y(0) = 200$ and $y(3) = 1{,}600$, what is $y(5)$?",
    options: ["$6{,}400$", "$3{,}200$", "$2{,}533$", "$12{,}800$"],
    correctIndex: 0,
    explanation:
      "$y = 200e^{kt}$ with $e^{3k} = 8$, so $e^{k} = 2$ and $y = 200 \\cdot 2^t$. Then $y(5) = 200 \\cdot 32 = 6{,}400$. 3,200 is $y(4)$. 2,533 extends the change linearly: $200 + 5 \\cdot \\frac{1{,}400}{3} \\approx 2{,}533$. 12,800 is $y(6)$.",
  },
  {
    id: "calcab-u7-015",
    unit: "unit-7",
    topicSlug: "differential-equations-calcab",
    difficulty: "hard",
    stem: "Let $y = f(x)$ be the solution of $\\dfrac{dy}{dx} = (y - 2)(x + 1)$ with $f(0) = 3$. Which statement describes the graph of $f$ at the point $(0, 3)$?",
    options: [
      "It is increasing and concave up.",
      "It is increasing and concave down.",
      "It is decreasing and concave up.",
      "It is decreasing and concave down.",
    ],
    correctIndex: 0,
    explanation:
      "At $(0, 3)$, $\\frac{dy}{dx} = (1)(1) = 1 > 0$: increasing. Differentiate implicitly: $\\frac{d^2y}{dx^2} = \\frac{dy}{dx}(x + 1) + (y - 2)$, which at $(0, 3)$ is $1 \\cdot 1 + 1 = 2 > 0$: concave up. The decreasing choices come from evaluating the factor as $2 - y = -1$. Concave down comes from a sign slip in the second derivative, such as differentiating $y - 2$ as $-\\frac{dy}{dx}$, which gives $-1 + 1 = 0$ or less.",
  },
]
