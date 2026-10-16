/**
 * AP Calculus AB diagnostic v2, Unit 3: Differentiation: Composite, Implicit,
 * and Inverse Functions. No calculator. Stimulus set: a table of f, f′, g, g′
 * for the chain rule and the derivative of an inverse (calcab-s301).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: "calcab-s301",
    title: "Values of f, f′, g and g′ for composition",
    kind: "table",
    content:
      "The functions $f$ and $g$ are differentiable for all real numbers, and $f$ is increasing, so $f$ has an inverse function $f^{-1}$. The table gives values of the functions and their derivatives at selected values of $x$.\n\n" +
      "| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |\n" +
      "| --- | --- | --- | --- | --- |\n" +
      "| 1 | 2 | 3 | 3 | −1 |\n" +
      "| 2 | 5 | 4 | 1 | 2 |\n" +
      "| 3 | 7 | 1 | 2 | 5 |",
  },
]

export const ITEMS: ApDiagV2Item[] = [
  // ---- calcab-s301 ----
  {
    id: "calcab-s301-q1",
    stimulusId: "calcab-s301",
    unit: "unit-3",
    topicSlug: "chain-rule-calcab",
    difficulty: "medium",
    stem: "Let $h(x) = f(g(x))$. Based on the table, what is $h'(2)$?",
    options: ["$6$", "$8$", "$3$", "$4$"],
    correctIndex: 0,
    explanation:
      "By the chain rule, $h'(2) = f'(g(2)) \\cdot g'(2) = f'(1) \\cdot 2 = 3 \\cdot 2 = 6$. 8 evaluates $f'$ at 2 instead of at $g(2)$: $f'(2)g'(2) = 4 \\cdot 2$. 3 forgets to multiply by the inner derivative $g'(2)$. 4 is $f'(g'(2)) = f'(2)$, composing with the derivative instead of the function.",
  },
  {
    id: "calcab-s301-q2",
    stimulusId: "calcab-s301",
    unit: "unit-3",
    topicSlug: "inverse-functions-derivatives-calcab",
    difficulty: "hard",
    stem: "Based on the table, what is the value of $\\left(f^{-1}\\right)'(2)$?",
    options: ["$\\dfrac{1}{3}$", "$\\dfrac{1}{4}$", "$3$", "$\\dfrac{1}{5}$"],
    correctIndex: 0,
    explanation:
      "$f(1) = 2$, so $f^{-1}(2) = 1$, and $\\left(f^{-1}\\right)'(2) = \\frac{1}{f'(f^{-1}(2))} = \\frac{1}{f'(1)} = \\frac{1}{3}$. $\\frac{1}{4}$ evaluates $f'$ at 2 instead of at $f^{-1}(2)$. 3 forgets the reciprocal. $\\frac{1}{5}$ takes the reciprocal of $f(2)$, a function value rather than a derivative.",
  },
  // ---- standalone ----
  {
    id: "calcab-u3-002",
    unit: "unit-3",
    topicSlug: "chain-rule-calcab",
    difficulty: "easy",
    stem: "If $y = \\left(3x^2 + 1\\right)^5$, what is $\\dfrac{dy}{dx}$?",
    options: [
      "$30x\\left(3x^2 + 1\\right)^4$",
      "$5\\left(3x^2 + 1\\right)^4$",
      "$6x\\left(3x^2 + 1\\right)^4$",
      "$6x\\left(3x^2 + 1\\right)^5$",
    ],
    correctIndex: 0,
    explanation:
      "Chain rule: $5(3x^2 + 1)^4 \\cdot 6x = 30x(3x^2 + 1)^4$. $5(3x^2 + 1)^4$ omits the inner derivative $6x$. $6x(3x^2 + 1)^4$ drops the outer factor 5. $6x(3x^2 + 1)^5$ multiplies by the inner derivative but skips the power rule entirely.",
  },
  {
    id: "calcab-u3-003",
    unit: "unit-3",
    topicSlug: "chain-rule-calcab",
    difficulty: "easy",
    stem: "What is $\\dfrac{d}{dx}\\left[\\ln\\left(5x^2 + 2\\right)\\right]$?",
    options: [
      "$\\dfrac{10x}{5x^2 + 2}$",
      "$\\dfrac{1}{5x^2 + 2}$",
      "$\\dfrac{10x}{\\left(5x^2 + 2\\right)^2}$",
      "$\\dfrac{10}{5x^2 + 2}$",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{d}{dx} \\ln u = \\frac{u'}{u}$, so the derivative is $\\frac{10x}{5x^2 + 2}$. $\\frac{1}{5x^2 + 2}$ omits the inner derivative. $\\frac{10x}{(5x^2 + 2)^2}$ squares the denominator, as if differentiating a quotient, and $\\frac{10}{5x^2 + 2}$ differentiates $5x^2$ as 10.",
  },
  {
    id: "calcab-u3-004",
    unit: "unit-3",
    topicSlug: "implicit-differentiation",
    difficulty: "easy",
    stem: "If $xy = 6$, what is $\\dfrac{dy}{dx}$ in terms of $x$ and $y$?",
    options: ["$-\\dfrac{y}{x}$", "$\\dfrac{x}{y}$", "$\\dfrac{y}{x}$", "$\\dfrac{6}{x}$"],
    correctIndex: 0,
    explanation:
      "Differentiate both sides with the product rule: $y + x\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{y}{x}$. $\\frac{x}{y}$ treats the equation like a hyperbola $y^2 - x^2 = c$. $\\frac{y}{x}$ drops the sign. $\\frac{6}{x}$ is $y$ itself, not its derivative.",
  },
  {
    id: "calcab-u3-005",
    unit: "unit-3",
    topicSlug: "inverse-functions-derivatives-calcab",
    difficulty: "easy",
    stem: "What is $\\dfrac{d}{dx}\\left[\\arctan(2x)\\right]$?",
    options: [
      "$\\dfrac{2}{1 + 4x^2}$",
      "$\\dfrac{1}{2(1 + 4x^2)}$",
      "$\\dfrac{2}{(1 + 2x)^2}$",
      "$\\dfrac{2}{\\sqrt{1 - 4x^2}}$",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{d}{dx} \\arctan u = \\frac{u'}{1 + u^2}$ with $u = 2x$: $\\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$. $\\frac{1}{2(1 + 4x^2)}$ divides by the inner derivative instead of multiplying. $(1 + 2x)^2$ squares the whole denominator instead of $2x$. $\\frac{2}{\\sqrt{1 - 4x^2}}$ is the derivative of $\\arcsin(2x)$.",
  },
  {
    id: "calcab-u3-006",
    unit: "unit-3",
    topicSlug: "chain-rule-calcab",
    difficulty: "easy",
    stem: "If $y = \\cos^3 x$, what is $\\dfrac{dy}{dx}$?",
    options: ["$-3\\cos^2 x \\sin x$", "$3\\cos^2 x \\sin x$", "$-3\\sin^2 x$", "$-\\sin^3 x$"],
    correctIndex: 0,
    explanation:
      "$y = (\\cos x)^3$, so $y' = 3(\\cos x)^2 \\cdot (-\\sin x) = -3\\cos^2 x \\sin x$. Dropping the negative from the derivative of cosine gives $3\\cos^2 x \\sin x$. $-3\\sin^2 x$ and $-\\sin^3 x$ differentiate the cosine without applying the power rule to the outer cube.",
  },
  {
    id: "calcab-u3-007",
    unit: "unit-3",
    topicSlug: "implicit-differentiation",
    difficulty: "medium",
    stem: "For the curve defined by $x^2 + 3y^2 = 21$, what is the value of $\\dfrac{dy}{dx}$ at the point $(3, 2)$?",
    options: ["$-\\dfrac{1}{2}$", "$-2$", "$\\dfrac{1}{2}$", "$-\\dfrac{3}{2}$"],
    correctIndex: 0,
    explanation:
      "Differentiate implicitly: $2x + 6y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{3y} = -\\frac{3}{6} = -\\frac{1}{2}$. $-2$ is the reciprocal (the value of $\\frac{dx}{dy}$). $\\frac{1}{2}$ drops the sign. $-\\frac{3}{2}$ forgets the coefficient 3 on $y^2$, giving $-\\frac{x}{y}$.",
  },
  {
    id: "calcab-u3-008",
    unit: "unit-3",
    topicSlug: "inverse-functions-derivatives-calcab",
    difficulty: "medium",
    stem: "Let $f(x) = x^3 + 2x + 1$, and let $g$ be the inverse function of $f$. What is $g'(4)$?",
    options: ["$\\dfrac{1}{5}$", "$\\dfrac{1}{50}$", "$5$", "$\\dfrac{1}{14}$"],
    correctIndex: 0,
    explanation:
      "Solve $f(x) = 4$: $x^3 + 2x + 1 = 4$ at $x = 1$, so $g(4) = 1$. $f'(x) = 3x^2 + 2$, so $g'(4) = \\frac{1}{f'(1)} = \\frac{1}{5}$. $\\frac{1}{50}$ evaluates $f'$ at 4. 5 forgets the reciprocal. $\\frac{1}{14}$ evaluates $f'$ at 2, a wrong value of $g(4)$.",
  },
  {
    id: "calcab-u3-009",
    unit: "unit-3",
    topicSlug: "chain-rule-calcab",
    difficulty: "medium",
    stem: "If $y = \\sin^2(3x)$, what is $\\dfrac{dy}{dx}$?",
    options: [
      "$6\\sin(3x)\\cos(3x)$",
      "$2\\sin(3x)\\cos(3x)$",
      "$-6\\sin(3x)\\cos(3x)$",
      "$6\\cos(3x)$",
    ],
    correctIndex: 0,
    explanation:
      "Three layers: square, sine, $3x$. $y' = 2\\sin(3x) \\cdot \\cos(3x) \\cdot 3 = 6\\sin(3x)\\cos(3x)$. $2\\sin(3x)\\cos(3x)$ forgets the innermost derivative 3. The negative sign belongs to the derivative of cosine, not sine. $6\\cos(3x)$ skips the outer power rule.",
  },
  {
    id: "calcab-u3-010",
    unit: "unit-3",
    topicSlug: "inverse-functions-derivatives-calcab",
    difficulty: "medium",
    stem: "What is $\\dfrac{d}{dx}\\left[\\arcsin\\left(\\dfrac{x}{2}\\right)\\right]$ for $-2 < x < 2$?",
    options: [
      "$\\dfrac{1}{\\sqrt{4 - x^2}}$",
      "$\\dfrac{1}{2\\sqrt{4 - x^2}}$",
      "$\\dfrac{2}{\\sqrt{1 - x^2/4}}$",
      "$\\dfrac{1}{\\sqrt{1 - x^2/4}}$",
    ],
    correctIndex: 0,
    explanation:
      "$\\frac{d}{dx} \\arcsin u = \\frac{u'}{\\sqrt{1 - u^2}}$ with $u = \\frac{x}{2}$: $\\frac{1/2}{\\sqrt{1 - x^2/4}} = \\frac{1/2}{\\frac{1}{2}\\sqrt{4 - x^2}} = \\frac{1}{\\sqrt{4 - x^2}}$. $\\frac{1}{2\\sqrt{4 - x^2}}$ keeps the factor $\\frac{1}{2}$ but forgets that the root also contributes $\\frac{1}{2}$. $\\frac{2}{\\sqrt{1 - x^2/4}}$ multiplies by 2 instead of $\\frac{1}{2}$. $\\frac{1}{\\sqrt{1 - x^2/4}}$ leaves out the inner derivative $\\frac{1}{2}$.",
  },
  {
    id: "calcab-u3-011",
    unit: "unit-3",
    topicSlug: "implicit-differentiation",
    difficulty: "hard",
    stem: "If $y^2 - 2x = 3$, what is $\\dfrac{d^2y}{dx^2}$ in terms of $y$?",
    options: ["$-\\dfrac{1}{y^3}$", "$\\dfrac{1}{y^3}$", "$\\dfrac{1}{y^2}$", "$\\dfrac{1}{y}$"],
    correctIndex: 0,
    explanation:
      "First derivative: $2y\\frac{dy}{dx} - 2 = 0$, so $\\frac{dy}{dx} = \\frac{1}{y}$. Differentiate again: $\\frac{d^2y}{dx^2} = -\\frac{1}{y^2} \\cdot \\frac{dy}{dx} = -\\frac{1}{y^2} \\cdot \\frac{1}{y} = -\\frac{1}{y^3}$. $\\frac{1}{y^2}$ forgets the chain-rule factor $\\frac{dy}{dx}$ and the sign. $\\frac{1}{y^3}$ drops only the sign, and $\\frac{1}{y}$ is the first derivative.",
  },
  {
    id: "calcab-u3-012",
    unit: "unit-3",
    topicSlug: "inverse-functions-derivatives-calcab",
    difficulty: "hard",
    stem: "Let $f(x) = x^5 + x + 2$, and let $f^{-1}$ be its inverse function. Which of the following is an equation of the line tangent to the graph of $y = f^{-1}(x)$ at $x = 4$?",
    options: [
      "$y = 1 + \\dfrac{1}{6}(x - 4)$",
      "$y = 4 + \\dfrac{1}{6}(x - 1)$",
      "$y = 1 + 6(x - 4)$",
      "$y = 4 + 6(x - 1)$",
    ],
    correctIndex: 0,
    explanation:
      "$f(1) = 1 + 1 + 2 = 4$, so the point on $y = f^{-1}(x)$ is $(4, 1)$. $f'(x) = 5x^4 + 1$, so the slope is $\\frac{1}{f'(1)} = \\frac{1}{6}$. The tangent line is $y = 1 + \\frac{1}{6}(x - 4)$. $y = 4 + \\frac{1}{6}(x - 1)$ uses the point on $f$ instead of on $f^{-1}$. The equations with slope 6 forget the reciprocal; $y = 4 + 6(x - 1)$ is the tangent to $f$ itself.",
  },
  {
    id: "calcab-u3-013",
    unit: "unit-3",
    topicSlug: "implicit-differentiation",
    difficulty: "hard",
    stem: "At which points on the curve $x^2 + xy + y^2 = 12$ is the tangent line horizontal?",
    options: [
      "$(2, -4)$ and $(-2, 4)$",
      "$(-4, 2)$ and $(4, -2)$",
      "$(2, 4)$ and $(-2, -4)$",
      "$(0, 2\\sqrt{3})$ and $(0, -2\\sqrt{3})$",
    ],
    correctIndex: 0,
    explanation:
      "Differentiate: $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{2x + y}{x + 2y}$. A horizontal tangent needs $2x + y = 0$, so $y = -2x$. Substituting: $x^2 - 2x^2 + 4x^2 = 3x^2 = 12$, so $x = \\pm 2$, giving $(2, -4)$ and $(-2, 4)$. $(-4, 2)$ and $(4, -2)$ make the denominator zero: those tangents are vertical. $(2, 4)$ and $(-2, -4)$ are not on the curve ($4 + 8 + 16 \\ne 12$). The points with $x = 0$ have slope $-\\frac{1}{2}$.",
  },
  {
    id: "calcab-u3-014",
    unit: "unit-3",
    topicSlug: "chain-rule-calcab",
    difficulty: "hard",
    stem: "If $f(x) = e^{\\sin(2x)}$, what is $f'\\left(\\dfrac{\\pi}{2}\\right)$?",
    options: ["$-2$", "$2$", "$-1$", "$-2e$"],
    correctIndex: 0,
    explanation:
      "$f'(x) = e^{\\sin 2x} \\cdot \\cos(2x) \\cdot 2$. At $x = \\frac{\\pi}{2}$: $\\sin \\pi = 0$ and $\\cos \\pi = -1$, so $f' = e^0 \\cdot (-1) \\cdot 2 = -2$. 2 uses $\\cos \\pi = 1$. $-1$ forgets the inner factor 2. $-2e$ evaluates $e^{\\sin 2x}$ as $e^1$.",
  },
]
