/**
 * AP Calculus BC diagnostic v2, Unit 6 (BC-only topics 6.11–6.13): integration
 * by parts, partial fractions with linear nonrepeating factors, and improper
 * integrals. No calculator. The AB part of Unit 6 comes from the AB v2 bank.
 * Stimulus set: a table of f, f′ and f″ used for integration by parts
 * (calcbc-s601).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcbc-s601",
    title: "Values of f and its derivatives",
    kind: "table",
    content:
      "The function $f$ is twice differentiable for all real numbers. Selected values of $f$, its derivative $f'$ and its second derivative $f''$ are given in the table. It is also known that $\\displaystyle\\int_0^4 f(x)\\,dx = 12$.\n\n" +
      "| $x$ | 0 | 1 | 2 | 4 |\n" +
      "| --- | --- | --- | --- | --- |\n" +
      "| $f(x)$ | 3 | 5 | 4 | $-1$ |\n" +
      "| $f'(x)$ | 4 | 1 | $-2$ | $-3$ |\n" +
      "| $f''(x)$ | $-2$ | $-3$ | $-1$ | 2 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcbc-s601: integration by parts from a table ----
  {
    id: "calcbc-s601-q1",
    stimulusId: "calcbc-s601",
    unit: "unit-6",
    topicSlug: "integration-by-parts-calcbc",
    difficulty: "medium",
    stem: "What is the value of $\\displaystyle\\int_0^4 x\\,f'(x)\\,dx$?",
    options: ["$-16$", "$8$", "$-4$", "$-8$"],
    correctIndex: 0,
    explanation:
      "Integrate by parts with $u = x$ and $dv = f'(x)\\,dx$, so $du = dx$ and $v = f(x)$: $\\int_0^4 x f'(x)\\,dx = \\big[x f(x)\\big]_0^4 - \\int_0^4 f(x)\\,dx = 4(-1) - 0 - 12 = -16$. $8$ adds the integral instead of subtracting it ($uv + \\int v\\,du$). $-4$ stops after the boundary term $\\big[x f(x)\\big]_0^4$. $-8$ uses $f'$ as $v$: $\\big[x f'(x)\\big]_0^4 - \\int_0^4 f'(x)\\,dx = -12 - (-4)$.",
  },
  {
    id: "calcbc-s601-q2",
    stimulusId: "calcbc-s601",
    unit: "unit-6",
    topicSlug: "integration-by-parts-calcbc",
    difficulty: "hard",
    stem: "What is the value of $\\displaystyle\\int_0^2 x\\,f''(x)\\,dx$?",
    options: ["$-5$", "$-3$", "$-4$", "$4$"],
    correctIndex: 0,
    explanation:
      "With $u = x$ and $dv = f''(x)\\,dx$, $v = f'(x)$: $\\int_0^2 x f''(x)\\,dx = \\big[x f'(x)\\big]_0^2 - \\int_0^2 f'(x)\\,dx = 2(-2) - 0 - \\big(f(2) - f(0)\\big) = -4 - (4 - 3) = -5$. $-3$ adds $f(2) - f(0)$ instead of subtracting it. $-4$ keeps only the boundary term. $4$ takes $v = f''$: $\\big[x f''(x)\\big]_0^2 - \\big(f'(2) - f'(0)\\big) = -2 - (-6)$.",
  },
  // ---- standalone: integration by parts ----
  {
    id: "calcbc-u6-001",
    unit: "unit-6",
    topicSlug: "integration-by-parts-calcbc",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int (2x + 1)e^x\\,dx$?",
    options: ["$(2x - 1)e^x + C$", "$(2x + 1)e^x + C$", "$(2x + 3)e^x + C$", "$(x^2 + x)e^x + C$"],
    correctIndex: 0,
    explanation:
      "Let $u = 2x + 1$ and $dv = e^x\\,dx$, so $du = 2\\,dx$ and $v = e^x$: $\\int (2x+1)e^x\\,dx = (2x+1)e^x - \\int 2e^x\\,dx = (2x + 1)e^x - 2e^x + C = (2x - 1)e^x + C$. Check: the derivative is $2e^x + (2x - 1)e^x = (2x + 1)e^x$. $(2x + 1)e^x + C$ forgets the $-\\int v\\,du$ term. $(2x + 3)e^x + C$ adds that term instead of subtracting it. $(x^2 + x)e^x + C$ integrates the factor $2x + 1$ and keeps $e^x$, as if the integral of a product were a product of integrals.",
  },
  {
    id: "calcbc-u6-002",
    unit: "unit-6",
    topicSlug: "integration-by-parts-calcbc",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int_0^{\\pi/4} x\\sec^2 x\\,dx$?",
    options: ["$\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\ln 2$", "$\\dfrac{\\pi}{4} + \\dfrac{1}{2}\\ln 2$", "$\\dfrac{\\pi}{4}$", "$\\dfrac{\\pi}{4} - \\ln 2$"],
    correctIndex: 0,
    explanation:
      "Use $u = x$ and $dv = \\sec^2 x\\,dx$, so $v = \\tan x$: $\\int_0^{\\pi/4} x\\sec^2 x\\,dx = \\big[x\\tan x\\big]_0^{\\pi/4} - \\int_0^{\\pi/4}\\tan x\\,dx = \\frac{\\pi}{4} - \\big[-\\ln(\\cos x)\\big]_0^{\\pi/4} = \\frac{\\pi}{4} + \\ln\\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4} - \\frac{1}{2}\\ln 2$. $+\\frac{1}{2}\\ln 2$ is a sign slip in $\\int\\tan x\\,dx = -\\ln|\\cos x| + C$. $\\frac{\\pi}{4}$ drops the $-\\int v\\,du$ term. $\\frac{\\pi}{4} - \\ln 2$ evaluates $\\ln\\frac{\\sqrt{2}}{2}$ as $-\\ln 2$ instead of $-\\frac{1}{2}\\ln 2$.",
  },
  {
    id: "calcbc-u6-003",
    unit: "unit-6",
    topicSlug: "integration-by-parts-calcbc",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_1^e (\\ln x)^2\\,dx$?",
    options: ["$e - 2$", "$e$", "$e + 2$", "$-e$"],
    correctIndex: 0,
    explanation:
      "Use parts with $u = (\\ln x)^2$ and $dv = dx$: $du = \\frac{2\\ln x}{x}\\,dx$ and $v = x$, so $\\int_1^e (\\ln x)^2\\,dx = \\big[x(\\ln x)^2\\big]_1^e - 2\\int_1^e \\ln x\\,dx$. Parts again: $\\int_1^e \\ln x\\,dx = \\big[x\\ln x - x\\big]_1^e = 0 - (-1) = 1$. The total is $e - 2(1) = e - 2$. $e$ stops after the boundary term. $e + 2$ adds the second integral instead of subtracting it. $-e$ uses $x\\ln x$ (without $-x$) as the antiderivative of $\\ln x$, so the second integral becomes $e$ and the total $e - 2e$.",
  },
  {
    id: "calcbc-u6-004",
    unit: "unit-6",
    topicSlug: "integration-by-parts-calcbc",
    difficulty: "medium",
    stem: "For a differentiable function $g$, integration by parts gives $\\displaystyle\\int g(x)\\,e^x\\,dx = g(x)\\,e^x - \\int x^2 e^x\\,dx$. Which of the following could be $g(x)$?",
    options: ["$\\dfrac{x^3}{3}$", "$x^2$", "$2x$", "$x^3$"],
    correctIndex: 0,
    explanation:
      "With $u = g(x)$ and $dv = e^x\\,dx$, parts gives $\\int g(x)e^x\\,dx = g(x)e^x - \\int g'(x)e^x\\,dx$, so $g'(x) = x^2$ and $g(x) = \\frac{x^3}{3}$ (plus any constant). $x^2$ is $g'$, not $g$. $2x$ is the derivative of $x^2$, a second slip in the same direction. $x^3$ has derivative $3x^2$, which would leave $3x^2e^x$ in the new integral.",
  },
  // ---- standalone: partial fractions ----
  {
    id: "calcbc-u6-005",
    unit: "unit-6",
    topicSlug: "partial-fractions-calcbc",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int \\frac{4}{x^2 - 4x + 3}\\,dx$?",
    options: [
      "$2\\ln\\left|\\dfrac{x - 3}{x - 1}\\right| + C$",
      "$2\\ln\\left|\\dfrac{x - 1}{x - 3}\\right| + C$",
      "$4\\ln\\left|(x - 1)(x - 3)\\right| + C$",
      "$\\dfrac{1}{2}\\ln\\left|\\dfrac{x - 3}{x - 1}\\right| + C$",
    ],
    correctIndex: 0,
    explanation:
      "Factor: $x^2 - 4x + 3 = (x - 1)(x - 3)$. Write $\\frac{4}{(x - 1)(x - 3)} = \\frac{A}{x - 1} + \\frac{B}{x - 3}$: at $x = 1$, $A = \\frac{4}{-2} = -2$; at $x = 3$, $B = \\frac{4}{2} = 2$. The integral is $-2\\ln|x - 1| + 2\\ln|x - 3| + C = 2\\ln\\left|\\frac{x - 3}{x - 1}\\right| + C$. The reciprocal inside the logarithm swaps the signs of $A$ and $B$. $4\\ln|(x - 1)(x - 3)|$ treats the integrand as $\\frac{u'}{u}$, but the numerator 4 is not the derivative $2x - 4$. The factor $\\frac{1}{2}$ decomposes $\\frac{1}{(x - 1)(x - 3)}$, forgetting the numerator 4.",
  },
  {
    id: "calcbc-u6-006",
    unit: "unit-6",
    topicSlug: "partial-fractions-calcbc",
    difficulty: "easy",
    stem: "Which of the following is the partial fraction decomposition of $\\dfrac{5x - 4}{(x - 2)(x + 1)}$?",
    options: [
      "$\\dfrac{2}{x - 2} + \\dfrac{3}{x + 1}$",
      "$\\dfrac{3}{x - 2} + \\dfrac{2}{x + 1}$",
      "$\\dfrac{2}{x - 2} - \\dfrac{3}{x + 1}$",
      "$\\dfrac{6}{x - 2} - \\dfrac{9}{x + 1}$",
    ],
    correctIndex: 0,
    explanation:
      "Set $5x - 4 = A(x + 1) + B(x - 2)$. At $x = 2$: $6 = 3A$, so $A = 2$. At $x = -1$: $-9 = -3B$, so $B = 3$. Check: $2(x + 1) + 3(x - 2) = 5x - 4$. Swapping 2 and 3 pairs each constant with the wrong factor. $-\\frac{3}{x + 1}$ drops the sign when dividing $-9$ by $-3$. $\\frac{6}{x - 2} - \\frac{9}{x + 1}$ uses the values of the numerator, $6$ and $-9$, without dividing by $x + 1 = 3$ and $x - 2 = -3$.",
  },
  {
    id: "calcbc-u6-007",
    unit: "unit-6",
    topicSlug: "partial-fractions-calcbc",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_1^3 \\frac{6}{x^2 + 3x}\\,dx$?",
    options: ["$\\ln 4$", "$2\\ln\\dfrac{9}{2}$", "$-\\ln 4$", "$6\\ln\\dfrac{9}{2}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{6}{x(x + 3)} = \\frac{2}{x} - \\frac{2}{x + 3}$ ($A = \\frac{6}{3} = 2$ at $x = 0$; $B = \\frac{6}{-3} = -2$ at $x = -3$). Then $\\int_1^3 = 2\\big[\\ln x - \\ln(x + 3)\\big]_1^3 = 2\\big[(\\ln 3 - \\ln 6) - (0 - \\ln 4)\\big] = 2\\ln\\frac{3\\cdot 4}{6} = 2\\ln 2 = \\ln 4$. $2\\ln\\frac{9}{2}$ gets the sign of $B$ wrong, integrating $\\frac{2}{x} + \\frac{2}{x + 3}$ to $2\\big[\\ln x + \\ln(x + 3)\\big]_1^3 = 2(\\ln 18 - \\ln 4)$. $-\\ln 4$ reverses the signs of both $A$ and $B$. $6\\ln\\frac{9}{2}$ integrates $\\frac{6}{u}$ with $u = x^2 + 3x$ as if the numerator were $u'$: $6(\\ln 18 - \\ln 4)$.",
  },
  // ---- standalone: improper integrals ----
  {
    id: "calcbc-u6-008",
    unit: "unit-6",
    topicSlug: "improper-integrals-calcbc",
    difficulty: "easy",
    stem: "What is $\\displaystyle\\int_1^{\\infty} \\frac{6}{x^3}\\,dx$?",
    options: ["$3$", "$-3$", "$\\dfrac{3}{2}$", "The integral diverges."],
    correctIndex: 0,
    explanation:
      "$\\int_1^b 6x^{-3}\\,dx = \\big[-3x^{-2}\\big]_1^b = 3 - \\frac{3}{b^2}$, which approaches 3 as $b \\to \\infty$. $-3$ subtracts in the wrong order, lower limit minus upper. $\\frac{3}{2}$ lowers the power instead of raising it, $6\\cdot\\frac{x^{-4}}{-4}$, giving $\\frac{6}{4}$. The integral converges because the power $p = 3$ is greater than 1.",
  },
  {
    id: "calcbc-u6-009",
    unit: "unit-6",
    topicSlug: "improper-integrals-calcbc",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int_0^{8} \\frac{1}{\\sqrt[3]{x}}\\,dx$?",
    options: ["$6$", "$24$", "$\\dfrac{3}{2}$", "The integral diverges."],
    correctIndex: 0,
    explanation:
      "The integrand is unbounded at $x = 0$, so take a limit: $\\int_a^8 x^{-1/3}\\,dx = \\big[\\frac{3}{2}x^{2/3}\\big]_a^8 = \\frac{3}{2}(4) - \\frac{3}{2}a^{2/3}$, which approaches 6 as $a \\to 0^+$. It converges because the power $\\frac{1}{3}$ is less than 1. $24$ evaluates $8^{2/3}$ as 16. $\\frac{3}{2}$ drops the factor $8^{2/3} = 4$. An unbounded integrand does not by itself make an integral diverge.",
  },
  {
    id: "calcbc-u6-010",
    unit: "unit-6",
    topicSlug: "improper-integrals-calcbc",
    difficulty: "medium",
    stem: "What is $\\displaystyle\\int_0^{\\infty} \\frac{1}{x^2 + 9}\\,dx$?",
    options: ["$\\dfrac{\\pi}{6}$", "$\\dfrac{\\pi}{2}$", "$\\dfrac{\\pi}{18}$", "$\\dfrac{\\pi}{3}$"],
    correctIndex: 0,
    explanation:
      "$\\int\\frac{dx}{x^2 + 9} = \\frac{1}{3}\\arctan\\frac{x}{3} + C$, so the integral is $\\lim_{b\\to\\infty}\\frac{1}{3}\\arctan\\frac{b}{3} - 0 = \\frac{1}{3}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{6}$. $\\frac{\\pi}{2}$ forgets the factor $\\frac{1}{3}$. $\\frac{\\pi}{18}$ uses $\\frac{1}{9}$ instead of $\\frac{1}{3}$. $\\frac{\\pi}{3}$ takes the limit of $\\arctan$ as $\\pi$ instead of $\\frac{\\pi}{2}$.",
  },
  {
    id: "calcbc-u6-011",
    unit: "unit-6",
    topicSlug: "improper-integrals-calcbc",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_{-1}^{2} \\frac{1}{x^2}\\,dx$?",
    options: ["The integral diverges.", "$-\\dfrac{3}{2}$", "$\\dfrac{3}{2}$", "$\\dfrac{1}{2}$"],
    correctIndex: 0,
    explanation:
      "$\\frac{1}{x^2}$ is unbounded at $x = 0$, inside the interval, so split: $\\int_{-1}^2 = \\int_{-1}^0 + \\int_0^2$. Then $\\int_0^2 x^{-2}\\,dx = \\lim_{a\\to 0^+}\\big[-\\frac{1}{x}\\big]_a^2 = \\lim_{a\\to 0^+}\\left(\\frac{1}{a} - \\frac{1}{2}\\right) = \\infty$, so the whole integral diverges. $-\\frac{3}{2}$ applies the antiderivative straight across the asymptote, $-\\frac{1}{2} - 1$; a negative value for a positive integrand is the warning sign. $\\frac{3}{2}$ is that same invalid value with the sign dropped. $\\frac{1}{2}$ also evaluates $-\\frac{1}{x}$ at $x = -1$ as $-1$ instead of $1$.",
  },
  {
    id: "calcbc-u6-012",
    unit: "unit-6",
    topicSlug: "improper-integrals-calcbc",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_0^{\\infty} x e^{-3x}\\,dx$?",
    options: ["$\\dfrac{1}{9}$", "$\\dfrac{1}{3}$", "$-\\dfrac{1}{9}$", "The integral diverges."],
    correctIndex: 0,
    explanation:
      "Parts with $u = x$ and $dv = e^{-3x}\\,dx$, so $v = -\\frac{1}{3}e^{-3x}$: $\\int_0^b x e^{-3x}\\,dx = \\big[-\\frac{x}{3}e^{-3x}\\big]_0^b + \\frac{1}{3}\\int_0^b e^{-3x}\\,dx = -\\frac{b}{3}e^{-3b} + \\frac{1}{9}\\left(1 - e^{-3b}\\right)$. As $b \\to \\infty$, $b e^{-3b} \\to 0$ and $e^{-3b} \\to 0$, so the value is $\\frac{1}{9}$. $\\frac{1}{3}$ keeps only one factor of $\\frac{1}{3}$. $-\\frac{1}{9}$ is a sign slip in $v$. The exponential decay beats the factor $x$, so the integral converges.",
  },
  {
    id: "calcbc-u6-013",
    unit: "unit-6",
    topicSlug: "improper-integrals-calcbc",
    difficulty: "hard",
    stem: "What is $\\displaystyle\\int_2^{\\infty} \\frac{3}{x^2 + x - 2}\\,dx$?",
    options: ["$\\ln 4$", "$-\\ln 4$", "$3\\ln 4$", "The integral diverges."],
    correctIndex: 0,
    explanation:
      "$x^2 + x - 2 = (x - 1)(x + 2)$ and $\\frac{3}{(x - 1)(x + 2)} = \\frac{1}{x - 1} - \\frac{1}{x + 2}$ ($A = \\frac{3}{3}$ at $x = 1$, $B = \\frac{3}{-3}$ at $x = -2$). So $\\int_2^b = \\big[\\ln\\frac{x - 1}{x + 2}\\big]_2^b = \\ln\\frac{b - 1}{b + 2} - \\ln\\frac{1}{4}$, which approaches $0 + \\ln 4$. $-\\ln 4$ reverses the order of evaluation. $3\\ln 4$ multiplies by the numerator 3 again after it was already absorbed into $A = 1$ and $B = -1$. Each piece $\\int_2^\\infty \\frac{dx}{x - 1}$ diverges on its own, but their difference converges.",
  },
]
