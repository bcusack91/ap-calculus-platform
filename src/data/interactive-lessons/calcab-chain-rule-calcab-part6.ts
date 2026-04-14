export const calcabChainRulePart6Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain6-intro',
      type: 'text' as const,
      content: `# 🔗 Problem-Solving Workshop

**Part 6 of 7 — Mixed Chain Rule Problems**

### Decision Framework

Every derivative problem begins with the same question: **What is the outermost operation?**

$$\\boxed{\\text{Identify outermost operation} \\to \\text{Apply rule} \\to \\text{Chain Rule for inner layers}}$$

| Outermost Operation | Primary Rule | Then Apply |
|:---:|:---:|:---:|
| Sum/difference | Sum Rule | Chain Rule to each term |
| Product $f \\cdot g$ | Product Rule | Chain Rule inside each factor |
| Quotient $f/g$ | Quotient Rule | Chain Rule inside each part |
| Composition $f(g(x))$ | Chain Rule directly | Continue peeling layers |

> **Key Strategy:** Work from the OUTSIDE IN. The outermost operation determines which rule to start with.`
    },
    {
      id: 'chain6-combined',
      type: 'text' as const,
      content: `### Combining Chain Rule with Other Rules

**Example 1: Product + Chain**

$$\\frac{d}{dx}[x^2 \\sin(3x)] = 2x\\sin(3x) + x^2 \\cdot \\cos(3x) \\cdot 3 = 2x\\sin(3x) + 3x^2\\cos(3x)$$

**Example 2: Quotient + Chain**

$$\\frac{d}{dx}\\left[\\frac{e^{2x}}{x+1}\\right] = \\frac{2e^{2x}(x+1) - e^{2x}}{(x+1)^2} = \\frac{e^{2x}(2x+1)}{(x+1)^2}$$

**Example 3: Chain on $\\ln$**

$$\\frac{d}{dx}[\\ln(\\cos x)] = \\frac{-\\sin x}{\\cos x} = -\\tan x$$

### Important: $\\frac{d}{dx}\\frac{\\sin x}{e^x}$ (Shortcut)

$$\\frac{d}{dx}\\left[\\frac{\\sin x}{e^x}\\right] = \\frac{d}{dx}[\\sin x \\cdot e^{-x}] = \\cos x \\cdot e^{-x} + \\sin x \\cdot (-e^{-x}) = \\frac{\\cos x - \\sin x}{e^x}$$

> **AP Tip:** Sometimes rewriting $\\frac{f(x)}{e^x}$ as $f(x) \\cdot e^{-x}$ and using Product Rule is easier than Quotient Rule.`
    },
    {
      id: 'chain6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Problems — Set 1** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[x^2 \\sin(3x)]$.',
            options: ['$2x\\sin(3x) + 3x^2\\cos(3x)$', '$2x\\cos(3x)$', '$6x^2\\cos(3x)$', '$2x\\sin(3x) + x^2\\cos(3x)$'],
            correctAnswer: 0,
            explanation: 'Product Rule + Chain Rule: $2x\\sin(3x) + x^2 \\cdot \\cos(3x) \\cdot 3 = 2x\\sin(3x) + 3x^2\\cos(3x)$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\ln(\\cos x)$.',
            options: ['$\\frac{1}{\\cos x}$', '$-\\tan x$', '$\\frac{-\\sin x}{\\cos x}$', 'Both B and C'],
            correctAnswer: 3,
            explanation: '$\\frac{d}{dx}\\ln(\\cos x) = \\frac{-\\sin x}{\\cos x} = -\\tan x$. B and C are the same.'
          },
          {
            question: 'Find $\\frac{d^2y}{dx^2}$ for $y = e^{-x}$.',
            options: ['$-e^{-x}$', '$e^{-x}$', '$e^x$', '$-e^x$'],
            correctAnswer: 1,
            explanation: '$y\' = -e^{-x}$. $y\'\' = -(-1)e^{-x} = e^{-x}$.'
          }
        ]
      }
    },
    {
      id: 'chain6-table',
      type: 'text' as const,
      content: `### Table-Based Chain Rule Problems

On the AP exam, you may be given a table of values and asked to compute a composite function's derivative.

> **Key Fact:** If $h(x) = f(g(x))$, then $h'(a) = f'(g(a)) \\cdot g'(a)$. You need: $g(a)$ from the table, then $f'$ at that value, then $g'(a)$.

| $x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$ |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 3 | $-2$ | 2 | 4 |
| 2 | 5 | 1 | 1 | $-3$ |
| 3 | $-1$ | 6 | 3 | 2 |

**Example:** Find $h'(1)$ where $h(x) = f(g(x))$.

$h'(1) = f'(g(1)) \\cdot g'(1) = f'(2) \\cdot 4 = 1 \\cdot 4 = 4$

**Example:** Find $k'(2)$ where $k(x) = g(f(x))$.

$k'(2) = g'(f(2)) \\cdot f'(2) = g'(5) \\cdot 1$

But $g'(5)$ is not in the table — **insufficient information!**

> **AP Tip:** Always check that the required values are in the table before computing. If $g(a)$ gives a value not in the table, you can't find $f'(g(a))$.`
    },
    {
      id: 'chain6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Table-Based & Mixed Problems** 🎯\n\nUse the table from the previous section.',
      exercise: {
        questions: [
          {
            question: 'Using the table above, if $h(x) = f(g(x))$, find $h\'(2)$.',
            options: ['$-6$', '$6$', '$-2$', '$3$'],
            correctAnswer: 1,
            explanation: '$h\'(2) = f\'(g(2)) \\cdot g\'(2) = f\'(1) \\cdot (-3) = (-2)(-3) = 6$.'
          },
          {
            question: 'Using the table, if $p(x) = [f(x)]^2$, find $p\'(1)$.',
            options: ['$-12$', '$12$', '$-6$', '$9$'],
            correctAnswer: 0,
            explanation: '$p\'(x) = 2f(x) \\cdot f\'(x)$. At $x=1$: $p\'(1) = 2(3)(-2) = -12$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[e^{\\sin x} \\cdot \\cos x]$ at $x = 0$.',
            options: ['$0$', '$1$', '$2$', '$e$'],
            correctAnswer: 1,
            explanation: 'Product Rule: $e^{\\sin x} \\cos x \\cdot \\cos x + e^{\\sin x}(-\\sin x) = e^{\\sin x}(\\cos^2 x - \\sin x)$. At $x=0$: $e^0(1-0) = 1$.'
          }
        ]
      }
    },
    {
      id: 'chain6-subtleties',
      type: 'text' as const,
      content: `### Subtle Distinctions

These look similar but have very different derivatives:

| Function | Derivative | Rule Used |
|:---:|:---:|:---:|
| $(5x)^3 = 125x^3$ | $375x^2$ | Chain Rule (or expand) |
| $5x^3$ | $15x^2$ | Constant Multiple |
| $5^x$ | $5^x \\ln 5$ | Exponential |
| $x^5$ | $5x^4$ | Power Rule |
| $5^3 = 125$ | $0$ | Constant |

> **Key Principle:** Know the difference between: constant exponent (Power Rule), constant base (Exponential Rule), both variable (Log Differentiation).

### FTC Part 1 + Chain Rule

$$\\boxed{\\frac{d}{dx}\\int_a^{g(x)} f(t)\\,dt = f(g(x)) \\cdot g'(x)}$$

**Example:** $\\frac{d}{dx}\\int_0^{x^2} \\sin(t)\\,dt = \\sin(x^2) \\cdot 2x = 2x\\sin(x^2)$`
    },
    {
      id: 'chain6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the correct derivative** 🔍\n\nMatch each function to its derivative.',
      exercise: {
        dropdowns: [
          {
            label: '$y = (5x)^3$',
            options: ['$375x^2$', '$15x^2$', '$75x^2$', '$5^x \\ln 5$'],
            correctAnswers: ['$375x^2$'],
            hints: ['$(5x)^3 = 125x^3$. Differentiate.'],
            explanation: '$(5x)^3 = 125x^3 \\Rightarrow 375x^2$.'
          },
          {
            label: '$y = 5x^3$',
            options: ['$375x^2$', '$15x^2$', '$75x^2$', '$5^x \\ln 5$'],
            correctAnswers: ['$15x^2$'],
            hints: ['Just a constant multiple of $x^3$.'],
            explanation: '$5 \\cdot 3x^2 = 15x^2$.'
          },
          {
            label: '$y = 5^x$',
            options: ['$375x^2$', '$15x^2$', '$5x^4$', '$5^x \\ln 5$'],
            correctAnswers: ['$5^x \\ln 5$'],
            hints: ['Exponential with constant base 5.'],
            explanation: '$\\frac{d}{dx}5^x = 5^x \\ln 5$.'
          },
          {
            label: '$y = x^5$',
            options: ['$5x^4$', '$x^4$', '$5^x \\ln 5$', '$15x^2$'],
            correctAnswers: ['$5x^4$'],
            hints: ['Standard Power Rule.'],
            explanation: '$\\frac{d}{dx}x^5 = 5x^4$.'
          }
        ]
      }
    },
    {
      id: 'chain6-input',
      type: 'input-box' as const,
      content: '**Table-based Chain Rule computation.** ✍️',
      exercise: {
        question: 'Using the table: $f(1)=3$, $f\'(1)=-2$, $g(1)=2$, $g\'(1)=4$, $f\'(2)=1$, $g\'(2)=-3$. If $h(x) = f(g(x))$, find $h\'(1)$.',
        correctAnswer: '4',
        acceptableAnswers: ['4', '4.0'],
        hints: [
          'Use the Chain Rule: $h\'(1) = f\'(g(1)) \\cdot g\'(1)$.',
          '$g(1) = 2$, so you need $f\'(2)$.',
          '$f\'(2) = 1$ and $g\'(1) = 4$. Multiply.'
        ],
        explanation: '$h\'(1) = f\'(g(1)) \\cdot g\'(1) = f\'(2) \\cdot 4 = 1 \\cdot 4 = 4$.'
      }
    },
    {
      id: 'chain6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

| Skill | Practiced |
|:---:|:---:|
| Product Rule + Chain Rule | $x^2\\sin(3x)$ |
| Quotient Rule + Chain Rule | $\\frac{e^{2x}}{x+1}$ |
| Chain on logarithms | $\\ln(\\cos x) = -\\tan x$ |
| Table-based derivatives | $h(x) = f(g(x))$ |
| FTC + Chain Rule | $\\frac{d}{dx}\\int_0^{g(x)} f(t)\\,dt$ |
| Subtle distinctions | $(5x)^3$ vs $5x^3$ vs $5^x$ |

> **Up Next:** Part 7 — Comprehensive Review & Final Assessment.`
    }
  ]
};
