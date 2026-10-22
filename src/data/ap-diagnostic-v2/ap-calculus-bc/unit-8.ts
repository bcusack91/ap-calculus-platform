/**
 * AP Calculus BC diagnostic v2, Unit 8 (BC-only topic 8.13): arc length of the
 * graph of y = f(x) (and x = g(y)). No calculator, so every length that is
 * evaluated has a perfect-square or polynomial integrand. Parametric arc length
 * is Unit 9. The AB part of Unit 8 comes from the AB v2 bank.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = []

export const ITEMS: ApDiagV2Item[] = [
  {
    id: "calcbc-u8-001",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "easy",
    stem: "Which of the following gives the length of the graph of $y = e^{2x}$ from $x = 0$ to $x = 1$?",
    options: [
      "$\\displaystyle\\int_0^1 \\sqrt{1 + 4e^{4x}}\\,dx$",
      "$\\displaystyle\\int_0^1 \\sqrt{1 + 2e^{2x}}\\,dx$",
      "$\\displaystyle\\int_0^1 \\sqrt{1 + e^{4x}}\\,dx$",
      "$\\displaystyle\\int_0^1 \\left(1 + 4e^{4x}\\right)dx$",
    ],
    correctIndex: 0,
    explanation:
      "Arc length is $\\int_a^b \\sqrt{1 + \\left(y'\\right)^2}\\,dx$. Here $y' = 2e^{2x}$, so $\\left(y'\\right)^2 = 4e^{4x}$. $\\sqrt{1 + 2e^{2x}}$ uses $y'$ without squaring it. $\\sqrt{1 + e^{4x}}$ squares $y$ instead of $y'$, which loses the chain-rule factor 2. $\\int\\left(1 + 4e^{4x}\\right)dx$ leaves out the square root.",
  },
  {
    id: "calcbc-u8-002",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "medium",
    stem: "What is the length of the graph of $y = \\dfrac{2}{3}(x - 1)^{3/2}$ from $x = 1$ to $x = 4$?",
    options: ["$\\dfrac{14}{3}$", "$2\\sqrt{3}$", "$7$", "$\\dfrac{7}{3}$"],
    correctIndex: 0,
    explanation:
      "$y' = (x - 1)^{1/2}$, so $1 + \\left(y'\\right)^2 = 1 + (x - 1) = x$ and the length is $\\int_1^4 \\sqrt{x}\\,dx = \\frac{2}{3}\\big[x^{3/2}\\big]_1^4 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$. $2\\sqrt{3}$ drops the 1 under the root: $\\int_1^4\\sqrt{x - 1}\\,dx = \\frac{2}{3}(3)^{3/2}$. 7 drops the factor $\\frac{2}{3}$ from the antiderivative of $\\sqrt{x}$. $\\frac{7}{3}$ loses the factor 2 in $\\frac{2}{3}$.",
  },
  {
    id: "calcbc-u8-003",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "hard",
    stem: "What is the length of the graph of $y = \\dfrac{x^3}{6} + \\dfrac{1}{2x}$ from $x = 1$ to $x = 2$?",
    options: ["$\\dfrac{17}{12}$", "$\\dfrac{11}{12}$", "$\\dfrac{7}{6}$", "$\\dfrac{13}{12}$"],
    correctIndex: 0,
    explanation:
      "$y' = \\frac{x^2}{2} - \\frac{1}{2x^2}$, so $1 + \\left(y'\\right)^2 = \\frac{x^4}{4} + \\frac{1}{2} + \\frac{1}{4x^4} = \\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)^2$. The length is $\\int_1^2\\left(\\frac{x^2}{2} + \\frac{1}{2x^2}\\right)dx = \\left[\\frac{x^3}{6} - \\frac{1}{2x}\\right]_1^2 = \\left(\\frac{4}{3} - \\frac{1}{4}\\right) - \\left(\\frac{1}{6} - \\frac{1}{2}\\right) = \\frac{17}{12}$. $\\frac{11}{12}$ integrates $y'$ itself, which gives $y(2) - y(1)$, the vertical change. $\\frac{7}{6}$ keeps only $\\int_1^2 \\frac{x^2}{2}\\,dx$. $\\frac{13}{12}$ evaluates the antiderivative only at the upper limit.",
  },
  {
    id: "calcbc-u8-004",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "medium",
    stem: "The curve $x = \\dfrac{y^2}{2}$ runs from the point $(0, 0)$ to the point $(2, 2)$. Which of the following gives its length?",
    options: [
      "$\\displaystyle\\int_0^2 \\sqrt{1 + y^2}\\,dy$",
      "$\\displaystyle\\int_0^2 \\sqrt{1 + \\dfrac{y^4}{4}}\\,dy$",
      "$\\displaystyle\\int_0^2 \\sqrt{1 + y}\\,dy$",
      "$\\displaystyle\\int_0^2 \\left(1 + y^2\\right)dy$",
    ],
    correctIndex: 0,
    explanation:
      "For a curve $x = g(y)$ the length is $\\int_c^d \\sqrt{1 + \\left(g'(y)\\right)^2}\\,dy$. Here $g'(y) = y$, giving $\\int_0^2\\sqrt{1 + y^2}\\,dy$. $\\sqrt{1 + \\frac{y^4}{4}}$ squares $x$ instead of $\\frac{dx}{dy}$. $\\sqrt{1 + y}$ forgets to square the derivative. $\\int\\left(1 + y^2\\right)dy$ leaves out the square root.",
  },
  {
    id: "calcbc-u8-005",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "medium",
    stem: "For $0 \\le x < \\dfrac{\\pi}{2}$, let $s(x)$ be the arc length of the graph of $y = \\ln(\\cos t)$ for $0 \\le t \\le x$. What is the value of $s'\\left(\\dfrac{\\pi}{3}\\right)$?",
    options: ["$2$", "$\\sqrt{3}$", "$4$", "$\\dfrac{1}{2}$"],
    correctIndex: 0,
    explanation:
      "$s(x) = \\int_0^x \\sqrt{1 + \\left(y'(t)\\right)^2}\\,dt$, so by the Fundamental Theorem of Calculus $s'(x) = \\sqrt{1 + \\left(y'(x)\\right)^2}$. Here $y' = -\\tan x$ and $\\sqrt{1 + \\tan^2 x} = \\sec x$, which is positive on this interval, so $s'\\left(\\frac{\\pi}{3}\\right) = \\sec\\frac{\\pi}{3} = 2$. $\\sqrt{3}$ is $\\left|y'\\left(\\frac{\\pi}{3}\\right)\\right|$, the slope alone. 4 is $\\sec^2\\frac{\\pi}{3}$, the value without the square root. $\\frac{1}{2}$ is $\\cos\\frac{\\pi}{3}$, the reciprocal of the answer.",
  },
  {
    id: "calcbc-u8-006",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "easy",
    stem: "The graph of a differentiable function $f$ has length 5 for $1 \\le x \\le 4$. Which of the following graphs must also have length 5?",
    options: [
      "$y = f(x) - 7$ for $1 \\le x \\le 4$",
      "$y = 2f(x)$ for $1 \\le x \\le 4$",
      "$y = f(x)$ for $0 \\le x \\le 3$",
      "$y = f(2x)$ for $1 \\le x \\le 4$",
    ],
    correctIndex: 0,
    explanation:
      "The length is $\\int_1^4 \\sqrt{1 + \\left(f'(x)\\right)^2}\\,dx = 5$. For $y = f(x) - 7$ the derivative is still $f'(x)$, so the integral, and the length, are unchanged: a vertical shift moves the curve without stretching it. $2f(x)$ has derivative $2f'(x)$, which changes the integrand. $0 \\le x \\le 3$ is a different piece of the graph of $f$. $f(2x)$ for $1 \\le x \\le 4$ traces the graph of $f$ from $x = 2$ to $x = 8$, compressed horizontally.",
  },
  {
    id: "calcbc-u8-007",
    unit: "unit-8",
    topicSlug: "arc-length-surface-area-calcbc",
    difficulty: "hard",
    stem: "What is the length of the graph of $y = \\dfrac{x^2}{4} - \\dfrac{\\ln x}{2}$ from $x = 1$ to $x = e$?",
    options: ["$\\dfrac{e^2 + 1}{4}$", "$\\dfrac{e^2 - 3}{4}$", "$\\dfrac{e^2 - 1}{4}$", "$\\dfrac{e^2 + 3}{4}$"],
    correctIndex: 0,
    explanation:
      "$y' = \\frac{x}{2} - \\frac{1}{2x}$, so $1 + \\left(y'\\right)^2 = \\frac{x^2}{4} + \\frac{1}{2} + \\frac{1}{4x^2} = \\left(\\frac{x}{2} + \\frac{1}{2x}\\right)^2$. The length is $\\int_1^e\\left(\\frac{x}{2} + \\frac{1}{2x}\\right)dx = \\left[\\frac{x^2}{4} + \\frac{\\ln x}{2}\\right]_1^e = \\frac{e^2}{4} + \\frac{1}{2} - \\frac{1}{4} = \\frac{e^2 + 1}{4}$. $\\frac{e^2 - 3}{4}$ integrates $y'$, which gives the vertical change $y(e) - y(1)$. $\\frac{e^2 - 1}{4}$ keeps only $\\int_1^e \\frac{x}{2}\\,dx$. $\\frac{e^2 + 3}{4}$ adds the value at $x = 1$ instead of subtracting it.",
  },
]
