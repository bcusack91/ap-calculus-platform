export const calcabDefiniteIntegralsPart4Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int4-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals

**Part 4 of 7 — FTC Part 1**

### The Fundamental Theorem — Part 1

$$\\boxed{\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)}$$

**In words:** Differentiation undoes integration. If you integrate $f$ and then differentiate, you get $f$ back.

### With the Chain Rule

If the upper limit is a function $g(x)$:

$$\\boxed{\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)}$$

### All Variations at a Glance

| Situation | Formula | Key Step |
|:---:|:---:|:---:|
| Upper limit = $x$ | $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ | Direct application |
| Upper limit = $g(x)$ | $f(g(x)) \\cdot g'(x)$ | Chain Rule |
| Lower limit = $x$ | $\\frac{d}{dx}\\int_x^b f(t)\\,dt = -f(x)$ | Reverse limits first |
| Both limits are functions | $f(g(x))g'(x) - f(h(x))h'(x)$ | Split into two |

> **AP Tip:** FTC Part 1 with the Chain Rule is tested **almost every year** on the AP Exam. Master this!`
    },
    {
      id: 'int4-worked',
      type: 'text' as const,
      content: `### Worked Examples

**Example 1:** $\\frac{d}{dx}\\int_2^x t^3\\,dt = x^3$ ✓ (direct)

**Example 2:** $\\frac{d}{dx}\\int_0^{x^2} \\sin(t)\\,dt$

$g(x) = x^2$, $g'(x) = 2x$: $\\sin(x^2) \\cdot 2x = 2x\\sin(x^2)$

**Example 3:** $\\frac{d}{dx}\\int_x^5 e^{t^2}\\,dt$

Reverse: $= -\\frac{d}{dx}\\int_5^x e^{t^2}\\,dt = -e^{x^2}$

**Example 4 (Both limits):** $\\frac{d}{dx}\\int_{2x}^{x^3} \\cos(t)\\,dt$

Split: $\\int_0^{x^3} \\cos t\\,dt - \\int_0^{2x} \\cos t\\,dt$

$= \\cos(x^3) \\cdot 3x^2 - \\cos(2x) \\cdot 2 = 3x^2\\cos(x^3) - 2\\cos(2x)$`
    },
    {
      id: 'int4-quiz1',
      type: 'multiple-choice' as const,
      content: '**FTC Part 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\int_1^x \\sqrt{t^2 + 4}\\,dt$.',
            options: ['$\\sqrt{x^2 + 4}$', '$\\frac{x}{\\sqrt{x^2+4}}$', '$\\frac{2x}{\\sqrt{x^2+4}}$', '$\\sqrt{x + 4}$'],
            correctAnswer: 0,
            explanation: 'Direct FTC Part 1: substitute $x$ for $t$. Answer: $\\sqrt{x^2 + 4}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_0^{3x} \\cos(t)\\,dt$.',
            options: ['$\\cos(3x)$', '$3\\cos(3x)$', '$-\\sin(3x)$', '$3\\sin(3x)$'],
            correctAnswer: 1,
            explanation: 'Chain Rule: $\\cos(3x) \\cdot 3 = 3\\cos(3x)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\int_{x}^{0} t^4\\,dt$.',
            options: ['$x^4$', '$-x^4$', '$0$', '$4x^3$'],
            correctAnswer: 1,
            explanation: '$\\int_x^0 = -\\int_0^x$. So $-\\frac{d}{dx}\\int_0^x t^4\\,dt = -x^4$.'
          }
        ]
      }
    },
    {
      id: 'int4-accum',
      type: 'text' as const,
      content: `### Accumulation Functions

$F(x) = \\int_a^x f(t)\\,dt$ is an **accumulation function**: it measures how much $f$ has "accumulated" from $a$ to $x$.

### Connecting $f$ and $F$

| About $f$ | About $F = \\int_a^x f\\,dt$ |
|:---:|:---:|
| $f(x) > 0$ | $F$ is increasing |
| $f(x) < 0$ | $F$ is decreasing |
| $f$ changes sign $+$ to $-$ | $F$ has a local **maximum** |
| $f$ changes sign $-$ to $+$ | $F$ has a local **minimum** |
| $f$ is increasing | $F$ is concave up ($F'' = f' > 0$) |
| $f$ is decreasing | $F$ is concave down ($F'' = f' < 0$) |
| $f$ has a local max/min | $F$ has an inflection point |

$$\\boxed{F(a) = \\int_a^a f(t)\\,dt = 0 \\qquad \\text{(always starts at 0)}}$$

> **Key Concept:** If they give you the graph of $f'$, you can determine the behavior of $f$ using this same table (since $f = \\int f'\\,dt$). This is one of the most common AP graph-analysis questions.`
    },
    {
      id: 'int4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Accumulation Functions** 🎯\n\nLet $F(x) = \\int_0^x f(t)\\,dt$ where $f$ is continuous.',
      exercise: {
        questions: [
          {
            question: 'If $f(3) = 5$, what is $F\'(3)$?',
            options: ['$5$', '$0$', '$3$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'FTC Part 1: $F\'(x) = f(x)$, so $F\'(3) = f(3) = 5$.'
          },
          {
            question: 'If $f$ changes from positive to negative at $x = 4$, what happens to $F$ at $x = 4$?',
            options: ['$F$ has a local minimum', '$F$ has a local maximum', '$F$ has an inflection point', '$F = 0$'],
            correctAnswer: 1,
            explanation: '$F\' = f$ changes from positive to negative → $F$ goes from increasing to decreasing → local maximum.'
          },
          {
            question: 'If $f$ has a local maximum at $x = 2$, what happens to $F$ at $x = 2$?',
            options: ['$F$ has a local max', '$F$ has a local min', '$F$ has an inflection point', '$F$ is undefined'],
            correctAnswer: 2,
            explanation: '$F\'\' = f\'$. At a local max of $f$, $f\'$ changes sign (+ to −), so $F\'\'$ changes sign → inflection point of $F$.'
          }
        ]
      }
    },
    {
      id: 'int4-dropdown',
      type: 'dropdown-select' as const,
      content: '**FTC Part 1 — Match the derivative.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$\\frac{d}{dx}\\int_1^{x^2} e^t\\,dt$ equals:',
            options: ['$e^{x^2}$', '$2xe^{x^2}$', '$e^{2x}$', '$2xe^x$'],
            correctAnswers: ['$2xe^{x^2}$'],
            hints: ['Chain Rule: $f(g(x)) \\cdot g\'(x)$ where $g(x) = x^2$.'],
            explanation: '$e^{(x^2)} \\cdot 2x = 2xe^{x^2}$.'
          },
          {
            label: '$\\frac{d}{dx}\\int_x^{10} \\ln(t)\\,dt$ equals:',
            options: ['$\\ln(x)$', '$-\\ln(x)$', '$\\ln(10)$', '$1/x$'],
            correctAnswers: ['$-\\ln(x)$'],
            hints: ['Variable in lower limit → reverse limits first (negative sign).'],
            explanation: '$= -\\frac{d}{dx}\\int_{10}^x \\ln(t)\\,dt = -\\ln(x)$.'
          },
          {
            label: '$\\frac{d}{dx}\\int_0^{\\sin x} t^3\\,dt$ equals:',
            options: ['$\\sin^3 x$', '$\\sin^3(x) \\cdot \\cos x$', '$3\\sin^2(x)\\cos(x)$', '$\\cos(x) \\cdot x^3$'],
            correctAnswers: ['$\\sin^3(x) \\cdot \\cos x$'],
            hints: ['$g(x) = \\sin x$, $g\'(x) = \\cos x$. Apply $f(g(x)) \\cdot g\'(x)$.'],
            explanation: '$(\\sin x)^3 \\cdot \\cos x = \\sin^3(x) \\cos(x)$.'
          }
        ]
      }
    },
    {
      id: 'int4-input',
      type: 'input-box' as const,
      content: '**Compute a specific value.** ✍️',
      exercise: {
        question: 'Let $F(x) = \\int_0^x (3t^2 - 6t)\\,dt$. Find $F(4)$.\n\n(Enter a whole number.)',
        correctAnswer: '16',
        acceptableAnswers: ['16', '16.0'],
        hints: [
          'Use FTC Part 2 to evaluate: find the antiderivative of $3t^2 - 6t$.',
          'Antiderivative: $t^3 - 3t^2$.',
          '$F(4) = [t^3 - 3t^2]_0^4 = (64 - 48) - 0$.'
        ],
        explanation: '$F(4) = \\int_0^4 (3t^2 - 6t)\\,dt = [t^3 - 3t^2]_0^4 = (64 - 48) - 0 = 16$.'
      }
    },
    {
      id: 'int4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Concept | Formula |
|:---:|:---:|
| FTC Part 1 (basic) | $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ |
| FTC Part 1 (chain) | $\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)$ |
| Variable in lower limit | Reverse limits → negative sign |
| $F(a) = 0$ | Accumulation starts at 0 |
| $f > 0 \\Rightarrow F$ increasing | $f < 0 \\Rightarrow F$ decreasing |

> **Up Next:** Part 5 — FTC Part 2 & Net Change.`
    }
  ]
};
