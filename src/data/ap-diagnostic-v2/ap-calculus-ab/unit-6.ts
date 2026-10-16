/**
 * AP Calculus AB diagnostic v2, Unit 6: Integration and Accumulation of
 * Change. No calculator. Stimulus sets: the graph of f with
 * g(x) = ∫₀ˣ f(t) dt (calcab-s601) and a nonuniform table of a leak rate
 * (calcab-s602).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'
import { FIGURES } from './figures'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s601",
    title: "Graph of f and its accumulation function g",
    kind: "figure",
    content:
      "The graph of the continuous function $f$ on the closed interval $-2 \\le x \\le 6$ is shown. It consists of a line segment from $(-2, 2)$ to $(0, 0)$, " +
      "the lower half of the circle of radius 2 centered at $(2, 0)$ (from $(0, 0)$ down to $(2, -2)$ and back up to $(4, 0)$), and a line segment from $(4, 0)$ to $(6, 3)$. " +
      "Let $g(x) = \\displaystyle\\int_0^x f(t)\\,dt$ for $-2 \\le x \\le 6$.",
    svg: FIGURES["calcab-s601"],
  },
  {
    id: "calcab-s602",
    title: "Rate of an oil leak",
    kind: "table",
    content:
      "Oil leaks from a tank at a rate of $R(t)$ liters per hour, where $t$ is measured in hours and $R$ is a differentiable, decreasing function. Selected values of $R(t)$ are shown in the table. The time intervals are not all the same length.\n\n" +
      "| $t$ (hours) | 0 | 1 | 3 | 4 | 7 |\n" +
      "| --- | --- | --- | --- | --- | --- |\n" +
      "| $R(t)$ (liters per hour) | 18 | 15 | 9 | 8 | 4 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s601: graph of f, g = accumulation ----
  {
    id: "calcab-s601-q1",
    stimulusId: "calcab-s601",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "easy",
    stem: "What is the value of $g(4)$?",
    options: ["$-2\\pi$", "$2\\pi$", "$4\\pi$", "$-\\pi$"],
    correctIndex: 0,
    explanation:
      "$g(4) = \\int_0^4 f(t)\\,dt$ is the signed area from 0 to 4: a half disk of radius 2 below the axis, $-\\frac{1}{2}\\pi(2)^2 = -2\\pi$. $2\\pi$ forgets that area below the axis counts as negative. $4\\pi$ uses the area of the whole circle and also drops the sign. $-\\pi$ is $g(2)$, only a quarter of the circle.",
  },
  {
    id: "calcab-s601-q2",
    stimulusId: "calcab-s601",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "medium",
    stem: "On which interval is $g$ decreasing?",
    options: ["$0 < x < 4$", "$-2 < x < 0$", "$2 < x < 6$", "$0 < x < 2$"],
    correctIndex: 0,
    explanation:
      "By the Fundamental Theorem of Calculus, $g'(x) = f(x)$, so $g$ decreases where $f < 0$: on $0 < x < 4$. On $-2 < x < 0$, $f > 0$, so $g$ increases. $2 < x < 6$ is where $f$ itself is increasing, which describes the concavity of $g$, not its direction. $0 < x < 2$ is where $f$ decreases; $g$ keeps decreasing until $x = 4$.",
  },
  {
    id: "calcab-s601-q3",
    stimulusId: "calcab-s601",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "hard",
    stem: "What is the absolute minimum value of $g$ on the closed interval $-2 \\le x \\le 6$?",
    options: ["$-2\\pi$", "$-2$", "$3 - 2\\pi$", "$-\\pi$"],
    correctIndex: 0,
    explanation:
      "Candidates are the endpoints and where $g' = f$ changes sign. $g(-2) = -\\int_{-2}^0 f = -2$ (the triangle has area 2). $g$ decreases on $(0, 4)$ and increases on $(4, 6)$, so $g(4) = -2\\pi \\approx -6.28$ is a minimum. $g(6) = -2\\pi + 3 \\approx -3.28$. The smallest is $-2\\pi$. $-2$ is the left-endpoint value and $3 - 2\\pi$ the right-endpoint value; both are larger than $g(4)$. $-\\pi$ is $g(2)$, where $f$ has its minimum, not $g$.",
  },
  // ---- calcab-s602: leak-rate table ----
  {
    id: "calcab-s602-q1",
    stimulusId: "calcab-s602",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "easy",
    stem: "Using a left Riemann sum with the four subintervals indicated by the table, what is the approximation of $\\displaystyle\\int_0^7 R(t)\\,dt$?",
    options: ["$81$ liters", "$53$ liters", "$67$ liters", "$50$ liters"],
    correctIndex: 0,
    explanation:
      "The widths are 1, 2, 1 and 3 hours. The left sum is $1(18) + 2(15) + 1(9) + 3(8) = 18 + 30 + 9 + 24 = 81$ liters. 53 is the right sum, $1(15) + 2(9) + 1(8) + 3(4)$. 67 is the trapezoidal sum. 50 adds the left values without multiplying by the unequal widths.",
  },
  {
    id: "calcab-s602-q2",
    stimulusId: "calcab-s602",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "medium",
    stem: "Using a trapezoidal sum with the four subintervals indicated by the table, what is the approximation of the total amount of oil that leaks out from $t = 0$ to $t = 7$?",
    options: ["$67$ liters", "$134$ liters", "$54$ liters", "$77$ liters"],
    correctIndex: 0,
    explanation:
      "Trapezoids: $1 \\cdot \\frac{18 + 15}{2} + 2 \\cdot \\frac{15 + 9}{2} + 1 \\cdot \\frac{9 + 8}{2} + 3 \\cdot \\frac{8 + 4}{2} = 16.5 + 24 + 8.5 + 18 = 67$ liters. 134 forgets the $\\frac{1}{2}$. 54 adds the five table values without any widths. 77 treats $[0, 7]$ as one trapezoid, $7 \\cdot \\frac{18 + 4}{2}$, ignoring the interior data.",
  },
  {
    id: "calcab-s602-q3",
    stimulusId: "calcab-s602",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "hard",
    stem: "Which statement about the left Riemann sum approximation of $\\displaystyle\\int_0^7 R(t)\\,dt$ is true?",
    options: [
      "It is an overestimate, because $R$ is decreasing.",
      "It is an underestimate, because $R$ is decreasing.",
      "It is an overestimate, because $R$ is always positive.",
      "It cannot be judged, because the widths are unequal.",
    ],
    correctIndex: 0,
    explanation:
      "On each subinterval a decreasing function is largest at its left endpoint, so every left rectangle is at least as tall as the graph: the left sum overestimates. An underestimate would come from a right sum. Positivity of $R$ makes the integral positive but says nothing about the error. Unequal widths do not matter; monotonicity on each subinterval is what decides it.",
  },
  // ---- standalone ----
  {
    id: "calcab-u6-002",
    unit: "unit-6",
    topicSlug: "antiderivatives-indefinite-integrals-calcab",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int \\left(6x^2 - 4x + 3\\right)dx$?",
    options: [
      "$2x^3 - 2x^2 + 3x + C$",
      "$12x - 4 + C$",
      "$6x^3 - 4x^2 + 3x + C$",
      "$2x^3 - 4x^2 + 3x + C$",
    ],
    correctIndex: 0,
    explanation:
      "Integrate term by term with the power rule: $\\frac{6x^3}{3} - \\frac{4x^2}{2} + 3x + C = 2x^3 - 2x^2 + 3x + C$. $12x - 4 + C$ differentiates instead of integrating. $6x^3 - 4x^2 + 3x$ raises the powers without dividing by the new exponents. $2x^3 - 4x^2 + 3x$ divides only the first term.",
  },
  {
    id: "calcab-u6-003",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int_1^8 x^{-2/3}\\,dx$?",
    options: ["$3$", "$\\dfrac{93}{5}$", "$6$", "$3\\sqrt[3]{7}$"],
    correctIndex: 0,
    explanation:
      "An antiderivative of $x^{-2/3}$ is $3x^{1/3}$, so the integral is $3\\sqrt[3]{8} - 3\\sqrt[3]{1} = 6 - 3 = 3$. $\\frac{93}{5}$ integrates $x^{2/3}$ instead: $\\frac{3}{5}(32 - 1)$. 6 evaluates the antiderivative at the upper limit only, forgetting to subtract $3\\sqrt[3]{1} = 3$. $3\\sqrt[3]{7}$ subtracts the limits inside the cube root, $3\\sqrt[3]{8 - 1}$.",
  },
  {
    id: "calcab-u6-004",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "easy",
    stem: "What is $\\dfrac{d}{dx}\\displaystyle\\int_2^x \\sqrt{t^3 + 1}\\,dt$?",
    options: [
      "$\\sqrt{x^3 + 1}$",
      "$\\sqrt{x^3 + 1} - 3$",
      "$\\dfrac{3x^2}{2\\sqrt{x^3 + 1}}$",
      "$3x^2\\sqrt{x^3 + 1}$",
    ],
    correctIndex: 0,
    explanation:
      "By the Fundamental Theorem of Calculus, $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ for continuous $f$, so the derivative is $\\sqrt{x^3 + 1}$. Subtracting $\\sqrt{2^3 + 1} = 3$ mixes in the evaluation step; the constant lower limit contributes nothing to the derivative. $\\frac{3x^2}{2\\sqrt{x^3 + 1}}$ differentiates the integrand. $3x^2\\sqrt{x^3 + 1}$ applies a chain-rule factor that only an upper limit $u(x) \\ne x$ would need.",
  },
  {
    id: "calcab-u6-005",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "easy",
    stem: "If $\\displaystyle\\int_1^5 f(x)\\,dx = 8$ and $\\displaystyle\\int_1^3 f(x)\\,dx = 3$, what is $\\displaystyle\\int_3^5 f(x)\\,dx$?",
    options: ["$5$", "$11$", "$-5$", "$\\dfrac{8}{3}$"],
    correctIndex: 0,
    explanation:
      "Integrals over adjacent intervals add: $\\int_1^3 f + \\int_3^5 f = \\int_1^5 f$, so $\\int_3^5 f = 8 - 3 = 5$. 11 adds the two given integrals. $-5$ is $\\int_5^3 f$, with the limits reversed. $\\frac{8}{3}$ divides instead of subtracting.",
  },
  {
    id: "calcab-u6-006",
    unit: "unit-6",
    topicSlug: "u-substitution-calcab",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int 2x\\left(x^2 + 1\\right)^4 dx$?",
    options: [
      "$\\dfrac{\\left(x^2 + 1\\right)^5}{5} + C$",
      "$\\dfrac{\\left(x^2 + 1\\right)^5}{10} + C$",
      "$\\dfrac{x^2\\left(x^2 + 1\\right)^5}{5} + C$",
      "$\\dfrac{2\\left(x^2 + 1\\right)^5}{5} + C$",
    ],
    correctIndex: 0,
    explanation:
      "Let $u = x^2 + 1$, so $du = 2x\\,dx$ and the integral is $\\int u^4\\,du = \\frac{u^5}{5} + C = \\frac{(x^2 + 1)^5}{5} + C$. Dividing by 2 again for the $2x$, which $du$ has already absorbed, gives $\\frac{(x^2 + 1)^5}{10}$. Integrating $2x$ separately and multiplying gives the $x^2$ version, and keeping the 2 after it was absorbed into $du$ gives $\\frac{2(x^2 + 1)^5}{5}$.",
  },
  {
    id: "calcab-u6-007",
    unit: "unit-6",
    topicSlug: "antiderivatives-indefinite-integrals-calcab",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int 6\\sin(2x)\\,dx$?",
    options: ["$-3\\cos(2x) + C$", "$3\\cos(2x) + C$", "$-12\\cos(2x) + C$", "$-6\\cos(2x) + C$"],
    correctIndex: 0,
    explanation:
      "Since $\\frac{d}{dx}\\cos(2x) = -2\\sin(2x)$, an antiderivative of $6\\sin(2x)$ is $-3\\cos(2x)$. $3\\cos(2x)$ has the wrong sign. $-12\\cos(2x)$ multiplies by the inner factor 2 instead of dividing. $-6\\cos(2x)$ ignores the inner factor 2.",
  },
  {
    id: "calcab-u6-008",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int_0^{\\pi/3} \\sin x\\,dx$?",
    options: ["$\\dfrac{1}{2}$", "$-\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$\\dfrac{\\pi}{3}$"],
    correctIndex: 0,
    explanation:
      "An antiderivative of $\\sin x$ is $-\\cos x$: $-\\cos\\frac{\\pi}{3} + \\cos 0 = -\\frac{1}{2} + 1 = \\frac{1}{2}$. $-\\frac{1}{2}$ uses $\\cos x$ as the antiderivative. $\\frac{\\sqrt{3}}{2}$ evaluates $\\sin$ itself at the limits, $\\sin\\frac{\\pi}{3} - \\sin 0$. $\\frac{\\pi}{3}$ is the length of the interval.",
  },
  {
    id: "calcab-u6-009",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "easy",
    stem: "Cars pass a checkpoint at a rate of $C(t)$ cars per hour, where $t$ is the number of hours after noon. Which of the following is the best interpretation of $\\displaystyle\\int_2^5 C(t)\\,dt$?",
    options: [
      "The total number of cars that pass the checkpoint from 2 p.m. to 5 p.m.",
      "The rate, in cars per hour, at which cars pass at 5 p.m. minus the rate at 2 p.m.",
      "The average number of cars per hour that pass the checkpoint from 2 p.m. to 5 p.m.",
      "The rate at which the number of cars passing per hour is changing between 2 p.m. and 5 p.m.",
    ],
    correctIndex: 0,
    explanation:
      "Integrating a rate over a time interval gives the total accumulated over that interval: the number of cars that pass between $t = 2$ and $t = 5$. The difference of rates is $C(5) - C(2)$. The average rate is $\\frac{1}{3}\\int_2^5 C(t)\\,dt$. A rate of change of the rate would be $C'(t)$.",
  },
  {
    id: "calcab-u6-010",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "medium",
    stem: "Which of the following definite integrals is equal to $\\displaystyle\\lim_{n \\to \\infty} \\sum_{k=1}^{n} \\frac{3}{n}\\left(1 + \\frac{3k}{n}\\right)^2$?",
    options: [
      "$\\displaystyle\\int_1^4 x^2\\,dx$",
      "$\\displaystyle\\int_1^4 3x^2\\,dx$",
      "$\\displaystyle\\int_1^4 (1 + x)^2\\,dx$",
      "$\\displaystyle 3\\int_0^1 (1 + x)^2\\,dx$",
    ],
    correctIndex: 0,
    explanation:
      "This is a right Riemann sum with $\\Delta x = \\frac{3}{n}$ and sample points $x_k = 1 + \\frac{3k}{n}$, which run from just above 1 up to 4. The function is $x^2$, so the limit is $\\int_1^4 x^2\\,dx$. $\\int_1^4 3x^2$ keeps the width factor 3 inside the integral, where $dx$ already accounts for it. $\\int_1^4 (1 + x)^2$ counts the 1 twice. $3\\int_0^1 (1 + x)^2$ drops the 3 inside the parentheses.",
  },
  {
    id: "calcab-u6-011",
    unit: "unit-6",
    topicSlug: "u-substitution-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int_0^2 \\frac{x}{x^2 + 1}\\,dx$?",
    options: ["$\\dfrac{1}{2}\\ln 5$", "$\\ln 5$", "$2\\ln 5$", "$\\ln 3$"],
    correctIndex: 0,
    explanation:
      "With $u = x^2 + 1$, $du = 2x\\,dx$, and $u$ runs from 1 to 5: $\\frac{1}{2}\\int_1^5 \\frac{du}{u} = \\frac{1}{2}(\\ln 5 - \\ln 1) = \\frac{1}{2}\\ln 5$. $\\ln 5$ forgets the factor $\\frac{1}{2}$. $2\\ln 5$ multiplies by 2 instead of dividing. $\\ln 3$ both drops the $\\frac{1}{2}$ and uses the upper limit $2 + 1$ instead of $2^2 + 1$.",
  },
  {
    id: "calcab-u6-012",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "medium",
    stem: "What is $\\dfrac{d}{dx}\\displaystyle\\int_1^{x^3} \\sqrt{1 + t}\\,dt$?",
    options: [
      "$3x^2\\sqrt{1 + x^3}$",
      "$\\sqrt{1 + x^3}$",
      "$\\dfrac{3x^2}{2\\sqrt{1 + x^3}}$",
      "$\\sqrt{1 + x^3} - \\sqrt{2}$",
    ],
    correctIndex: 0,
    explanation:
      "By the FTC and the chain rule, $\\frac{d}{dx}\\int_1^{u(x)} f(t)\\,dt = f(u(x))\\,u'(x) = \\sqrt{1 + x^3} \\cdot 3x^2$. $\\sqrt{1 + x^3}$ forgets the factor $u'(x) = 3x^2$. $\\frac{3x^2}{2\\sqrt{1 + x^3}}$ differentiates $\\sqrt{1 + x^3}$ instead of evaluating the integrand. Subtracting $\\sqrt{2}$ mixes in the value of the integrand at the constant lower limit, which contributes nothing to the derivative.",
  },
  {
    id: "calcab-u6-013",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "medium",
    stem: "If $\\displaystyle\\int_1^5 f(x)\\,dx = 8$ and $\\displaystyle\\int_1^3 f(x)\\,dx = 3$, what is $\\displaystyle\\int_3^5 \\left(2f(x) + 1\\right)dx$?",
    options: ["$12$", "$11$", "$10$", "$22$"],
    correctIndex: 0,
    explanation:
      "$\\int_3^5 f = 8 - 3 = 5$, so $\\int_3^5 (2f(x) + 1)\\,dx = 2(5) + \\int_3^5 1\\,dx = 10 + 2 = 12$. 11 integrates the constant 1 as 1 instead of as the interval length 2. 10 drops the constant term. 22 uses $\\int_1^5 f + \\int_1^3 f = 11$ for $\\int_3^5 f$.",
  },
  {
    id: "calcab-u6-014",
    unit: "unit-6",
    topicSlug: "antiderivatives-indefinite-integrals-calcab",
    difficulty: "medium",
    stem: "The derivative of a function $f$ is $f'(x) = 6x - 2$, and $f(1) = 4$. What is $f(2)$?",
    options: ["$11$", "$8$", "$12$", "$10$"],
    correctIndex: 0,
    explanation:
      "$f(x) = 3x^2 - 2x + C$, and $f(1) = 3 - 2 + C = 4$ gives $C = 3$. Then $f(2) = 12 - 4 + 3 = 11$. 8 leaves out the constant ($C = 0$). 12 uses $C = 4$, treating the condition as $f(0) = 4$. 10 is $f'(2)$, the derivative instead of the function.",
  },
  {
    id: "calcab-u6-015",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "medium",
    stem: "Let $g(x) = \\displaystyle\\int_1^x \\left(t^2 - 4\\right)dt$. At which value of $x$ does $g$ have a relative minimum?",
    options: ["$x = 2$", "$x = -2$", "$x = 1$", "$x = 0$"],
    correctIndex: 0,
    explanation:
      "$g'(x) = x^2 - 4$, which is 0 at $x = \\pm 2$. $g'$ changes from negative to positive at $x = 2$ (relative minimum) and from positive to negative at $x = -2$ (relative maximum). $x = 1$ is the lower limit, where $g = 0$, not an extremum. $x = 0$ is where $g'' = 2x$ is 0.",
  },
  {
    id: "calcab-u6-016",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int_{-1}^{2} |x|\\,dx$?",
    options: ["$\\dfrac{5}{2}$", "$\\dfrac{3}{2}$", "$3$", "$\\dfrac{1}{2}$"],
    correctIndex: 0,
    explanation:
      "Split at 0: $\\int_{-1}^0 (-x)\\,dx + \\int_0^2 x\\,dx = \\frac{1}{2} + 2 = \\frac{5}{2}$ (two triangles). $\\frac{3}{2}$ integrates $x$ instead of $|x|$, letting the left triangle count as negative. 3 is the length of the interval. $\\frac{1}{2}$ keeps only the left triangle.",
  },
  {
    id: "calcab-u6-017",
    unit: "unit-6",
    topicSlug: "u-substitution-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int \\sin x \\cos^4 x\\,dx$?",
    options: [
      "$-\\dfrac{\\cos^5 x}{5} + C$",
      "$\\dfrac{\\cos^5 x}{5} + C$",
      "$-\\dfrac{\\sin^2 x\\cos^5 x}{10} + C$",
      "$-4\\cos^3 x \\sin^2 x + C$",
    ],
    correctIndex: 0,
    explanation:
      "Let $u = \\cos x$, so $du = -\\sin x\\,dx$: $\\int \\sin x\\cos^4 x\\,dx = -\\int u^4\\,du = -\\frac{u^5}{5} + C$. $\\frac{\\cos^5 x}{5}$ loses the sign from $du = -\\sin x\\,dx$. Integrating each factor separately and multiplying gives the $\\sin^2 x\\cos^5 x$ form, which is not an antiderivative. $-4\\cos^3 x\\sin^2 x$ differentiates $\\cos^4 x$ instead of integrating.",
  },
  {
    id: "calcab-u6-018",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int_0^1 \\left(e^x + 2x\\right)dx$?",
    options: ["$e$", "$e + 1$", "$e - 1$", "$e + 2$"],
    correctIndex: 0,
    explanation:
      "An antiderivative is $e^x + x^2$, so the integral is $(e + 1) - (1 + 0) = e$. $e + 1$ forgets to subtract the value $e^0 = 1$ at the lower limit. $e - 1$ drops the $x^2$ term. $e + 2$ integrates $2x$ as $2$ and also skips the lower limit.",
  },
  {
    id: "calcab-u6-019",
    unit: "unit-6",
    topicSlug: "antiderivatives-indefinite-integrals-calcab",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_{-1}^{0} \\frac{1}{x^2 + 2x + 2}\\,dx$?",
    options: ["$\\dfrac{\\pi}{4}$", "$\\ln 2$", "$\\dfrac{\\pi}{2}$", "$\\arctan 2$"],
    correctIndex: 0,
    explanation:
      "Complete the square: $x^2 + 2x + 2 = (x + 1)^2 + 1$. An antiderivative is $\\arctan(x + 1)$, so the integral is $\\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}$. $\\ln 2$ treats the integrand as $\\frac{u'}{u}$, which would need the numerator $2x + 2$. $\\frac{\\pi}{2}$ doubles the arctangent value. $\\arctan 2$ uses $\\arctan(x + 2)$, completing the square incorrectly.",
  },
  {
    id: "calcab-u6-020",
    unit: "unit-6",
    topicSlug: "antiderivatives-indefinite-integrals-calcab",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int \\frac{2x + 3}{x + 1}\\,dx$?",
    options: [
      "$2x + \\ln|x + 1| + C$",
      "$2x + 3\\ln|x + 1| + C$",
      "$x^2 + \\ln|x + 1| + C$",
      "$\\left(x^2 + 3x\\right)\\ln|x + 1| + C$",
    ],
    correctIndex: 0,
    explanation:
      "Divide: $\\frac{2x + 3}{x + 1} = 2 + \\frac{1}{x + 1}$, since $2(x + 1) = 2x + 2$ leaves remainder 1. Integrating gives $2x + \\ln|x + 1| + C$. $3\\ln|x + 1|$ uses the original constant 3 as the remainder. $x^2 + \\ln|x + 1|$ integrates the quotient 2 as if it were $2x$. Integrating numerator and denominator separately and multiplying gives the last form, which is not an antiderivative.",
  },
  {
    id: "calcab-u6-021",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "hard",
    stem: "Let $F(x) = \\displaystyle\\int_1^{3x} \\ln t\\,dt$ for $x > 0$. What is $F'(1)$?",
    options: ["$3\\ln 3$", "$\\dfrac{\\ln 3}{3}$", "$\\dfrac{1}{3}$", "$3\\ln 3 - 2$"],
    correctIndex: 0,
    explanation:
      "By the FTC with the chain rule, $F'(x) = \\ln(3x) \\cdot 3$, so $F'(1) = 3\\ln 3$. $\\frac{\\ln 3}{3}$ divides by the derivative of the upper limit instead of multiplying. $\\frac{1}{3}$ differentiates the integrand, $\\frac{1}{t}$ at $t = 3$. $3\\ln 3 - 2$ is $F(1) = [t\\ln t - t]_1^3$, the value of $F$ rather than its derivative.",
  },
  {
    id: "calcab-u6-022",
    unit: "unit-6",
    topicSlug: "u-substitution-calcab",
    difficulty: "hard",
    stem: "If $\\displaystyle\\int_1^3 f(x)\\,dx = 6$, what is $\\displaystyle\\int_0^1 f(2x + 1)\\,dx$?",
    options: ["$3$", "$12$", "$6$", "$\\dfrac{3}{2}$"],
    correctIndex: 0,
    explanation:
      "Let $u = 2x + 1$, so $dx = \\frac{du}{2}$; when $x = 0$, $u = 1$, and when $x = 1$, $u = 3$. The integral is $\\frac{1}{2}\\int_1^3 f(u)\\,du = 3$. 12 multiplies by 2 instead of dividing. 6 ignores the change of variable. $\\frac{3}{2}$ divides by 2 twice.",
  },
  {
    id: "calcab-u6-023",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_{-2}^{2} \\left(x^3\\cos x + 3\\right)dx$?",
    options: ["$12$", "$0$", "$6$", "$24$"],
    correctIndex: 0,
    explanation:
      "$x^3\\cos x$ is odd ($(-x)^3\\cos(-x) = -x^3\\cos x$), so its integral over $[-2, 2]$ is 0. The constant contributes $3 \\cdot 4 = 12$. 0 treats the whole integrand as odd. 6 integrates the constant over $[0, 2]$ only. 24 doubles the constant's contribution, as if the even-function rule applied twice.",
  },
  {
    id: "calcab-u6-024",
    unit: "unit-6",
    topicSlug: "u-substitution-calcab",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int x\\sqrt{x - 1}\\,dx$?",
    options: [
      "$\\dfrac{2}{5}(x - 1)^{5/2} + \\dfrac{2}{3}(x - 1)^{3/2} + C$",
      "$\\dfrac{2}{5}x^{5/2} + \\dfrac{2}{3}x^{3/2} + C$",
      "$\\dfrac{x^2}{3}(x - 1)^{3/2} + C$",
      "$\\dfrac{2}{5}(x - 1)^{5/2} + C$",
    ],
    correctIndex: 0,
    explanation:
      "Let $u = x - 1$, so $x = u + 1$: $\\int (u + 1)u^{1/2}\\,du = \\int (u^{3/2} + u^{1/2})\\,du = \\frac{2}{5}u^{5/2} + \\frac{2}{3}u^{3/2} + C$. $\\frac{2}{5}x^{5/2} + \\frac{2}{3}x^{3/2}$ forgets to back-substitute $u = x - 1$ at the end. Multiplying separate antiderivatives gives the $\\frac{x^2}{3}$ form. Dropping the $+1$ when rewriting $x$ loses the $(x - 1)^{3/2}$ term.",
  },
  {
    id: "calcab-u6-025",
    unit: "unit-6",
    topicSlug: "definite-integrals-calcab",
    difficulty: "hard",
    stem: "Let $f(x) = \\begin{cases} 2x, & x < 1 \\\\ 3 - x^2, & x \\ge 1 \\end{cases}$. What is $\\displaystyle\\int_0^2 f(x)\\,dx$?",
    options: ["$\\dfrac{5}{3}$", "$\\dfrac{2}{3}$", "$\\dfrac{10}{3}$", "$\\dfrac{13}{3}$"],
    correctIndex: 0,
    explanation:
      "Split at 1: $\\int_0^1 2x\\,dx = 1$, and $\\int_1^2 (3 - x^2)\\,dx = \\left(6 - \\frac{8}{3}\\right) - \\left(3 - \\frac{1}{3}\\right) = \\frac{2}{3}$. Total $\\frac{5}{3}$. $\\frac{2}{3}$ is the second piece alone. $\\frac{10}{3}$ is $\\int_0^2 (3 - x^2)\\,dx$, using one formula for the whole interval. $\\frac{13}{3}$ evaluates the second antiderivative only at the upper limit: $1 + \\left(6 - \\frac{8}{3}\\right)$.",
  },
  {
    id: "calcab-u6-026",
    unit: "unit-6",
    topicSlug: "accumulation-functions-calcab",
    difficulty: "hard",
    stem: "Let $F(x) = \\displaystyle\\int_x^{x^2} \\frac{1}{t}\\,dt$ for $x > 1$. What is $F'(2)$?",
    options: ["$\\dfrac{1}{2}$", "$-\\dfrac{1}{4}$", "$1$", "$\\ln 2$"],
    correctIndex: 0,
    explanation:
      "With a variable lower and upper limit, $F'(x) = \\frac{1}{x^2} \\cdot 2x - \\frac{1}{x} = \\frac{2}{x} - \\frac{1}{x} = \\frac{1}{x}$, so $F'(2) = \\frac{1}{2}$. $-\\frac{1}{4}$ forgets the chain-rule factor $2x$ on the upper limit: $\\frac{1}{4} - \\frac{1}{2}$. 1 ignores the lower limit's contribution. $\\ln 2$ is $F(2) = \\ln 4 - \\ln 2$, the value rather than the derivative.",
  },
]
