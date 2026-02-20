#!/usr/bin/env python3
"""Generate AP Calculus AB: Linearization, Inverse Functions, Exponential Models, Theorem Applications."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# LINEARIZATION & DIFFERENTIALS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabLinearizationPart1Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin1-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 1 of 7 — The Tangent Line Approximation**

### Local Linearization

Near a point $x = a$, we can approximate $f(x)$ with its tangent line:

$$L(x) = f(a) + f'(a)(x - a)$$

This is also called the **linear approximation** or **tangent line approximation**.

### Why It Works

If $f$ is differentiable at $a$, then for $x$ **near** $a$:
$$f(x) \approx L(x) = f(a) + f'(a)(x - a)$$

### Worked Example

Approximate $\sqrt{4.1}$ using linearization.

Let $f(x) = \sqrt{x}$, $a = 4$.

$f(4) = 2$, $f'(x) = \frac{1}{2\sqrt{x}}$, $f'(4) = \frac{1}{4}$

$L(x) = 2 + \frac{1}{4}(x - 4)$

$L(4.1) = 2 + \frac{1}{4}(0.1) = 2.025$

Actual: $\sqrt{4.1} \approx 2.02485...$  Very close!`
    },
    {
      id: 'lin1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Linearization** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use linearization of $f(x) = x^3$ at $a = 2$ to approximate $f(2.01)$.',
            options: ['$8.12$', '$8.06$', '$8.24$', '$8.01$'],
            correctAnswer: 0,
            explanation: '$f(2) = 8$, $f\'(x) = 3x^2$, $f\'(2) = 12$. $L(2.01) = 8 + 12(0.01) = 8.12$.'
          },
          {
            question: 'Use linearization to approximate $\sin(0.1)$ (near $a = 0$).',
            options: ['$0.1$', '$0$', '$1$', '$0.01$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0$, $f\'(x) = \cos x$, $f\'(0) = 1$. $L(0.1) = 0 + 1(0.1) = 0.1$. (Actual: $0.0998...$)'
          }
        ]
      }
    },
    {
      id: 'lin1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $L(x) = f(a) + f'(a)(x-a)$ is the linearization
2. Works best when $x$ is close to $a$
3. This is simply the tangent line used as an approximation`
    }
  ]
};
""",
2: r"""export const calcabLinearizationPart2Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin2-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 2 of 7 — Differentials**

### The Differential $dy$

$$dy = f'(x)\,dx$$

$dx$ is a small change in $x$, $dy$ is the corresponding estimated change in $y$.

### Differentials vs Actual Change

- $\Delta y = f(x + \Delta x) - f(x)$ — exact change
- $dy = f'(x) \cdot dx$ — estimated change (using tangent line)

For small $dx$: $\Delta y \approx dy$`
    },
    {
      id: 'lin2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differentials** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y = x^4$ and $x = 1$, $dx = 0.02$, find $dy$.',
            options: ['$0.08$', '$0.04$', '$0.02$', '$0.16$'],
            correctAnswer: 0,
            explanation: '$dy = 4x^3 \cdot dx = 4(1)^3(0.02) = 0.08$.'
          },
          {
            question: 'A cube has side $s = 5$ cm measured with error $ds = \pm 0.1$ cm. Estimate the error in volume $V = s^3$.',
            options: ['$\pm 7.5$ cm$^3$', '$\pm 0.3$ cm$^3$', '$\pm 15$ cm$^3$', '$\pm 0.001$ cm$^3$'],
            correctAnswer: 0,
            explanation: '$dV = 3s^2 \cdot ds = 3(25)(0.1) = 7.5$ cm$^3$.'
          }
        ]
      }
    },
    {
      id: 'lin2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. $dy = f'(x)\,dx$
2. Differentials estimate the change in output for a small change in input
3. Error propagation uses differentials`
    }
  ]
};
""",
3: r"""export const calcabLinearizationPart3Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin3-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 3 of 7 — Over/Underestimates**

### Concavity Determines the Error

| Concavity | Tangent line is... | Linear approx is... |
|-----------|-------------------|---------------------|
| Concave up ($f'' > 0$) | Below the curve | Underestimate |
| Concave down ($f'' < 0$) | Above the curve | Overestimate |

This is a common AP exam question!`
    },
    {
      id: 'lin3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Over or Under?** 🎯',
      exercise: {
        questions: [
          {
            question: 'The linearization of $f(x) = e^x$ at $a = 0$ gives $L(x) = 1 + x$. Is $L(0.5)$ an overestimate or underestimate?',
            options: ['Underestimate', 'Overestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = e^x > 0$ everywhere, so $f$ is concave up. The tangent line lies below the curve → underestimate.'
          },
          {
            question: 'The linearization of $f(x) = \ln x$ at $a = 1$ gives $L(x) = x - 1$. Is $L(1.5)$ an overestimate or underestimate?',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$f\'\'(x) = -1/x^2 < 0$, so $f$ is concave down. The tangent line lies above the curve → overestimate. $L(1.5) = 0.5 > \ln(1.5) \approx 0.405$.'
          }
        ]
      }
    },
    {
      id: 'lin3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Concave up → tangent line below → underestimate
2. Concave down → tangent line above → overestimate`
    }
  ]
};
""",
4: r"""export const calcabLinearizationPart4Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin4-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 4 of 7 — Percentage Error**

### Relative and Percentage Error

$$\text{Relative error} = \frac{dy}{y} = \frac{f'(x)\,dx}{f(x)}$$

$$\text{Percentage error} = \frac{dy}{y} \times 100\%$$`
    },
    {
      id: 'lin4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Estimation** 🎯',
      exercise: {
        questions: [
          {
            question: 'A sphere has radius $r = 10$ cm with error $dr = \pm 0.05$ cm. Estimate the percentage error in the volume.',
            options: ['$\pm 1.5\%$', '$\pm 0.5\%$', '$\pm 3\%$', '$\pm 0.15\%$'],
            correctAnswer: 0,
            explanation: '$V = \\frac{4}{3}\\pi r^3$. $\\frac{dV}{V} = \\frac{4\\pi r^2\\,dr}{\\frac{4}{3}\\pi r^3} = \\frac{3\\,dr}{r} = \\frac{3(0.05)}{10} = 0.015 = 1.5\\%$.'
          }
        ]
      }
    },
    {
      id: 'lin4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Relative error = $dy/y$
2. For $V = \\frac{4}{3}\\pi r^3$: percentage error in $V$ = $3 \\times$ percentage error in $r$`
    }
  ]
};
""",
5: r"""export const calcabLinearizationPart5Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin5-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 5 of 7 — Linearization with Tables**

### Using a Table of Values

When given a table of $f(a)$ and $f'(a)$, you can write the linearization immediately:

$$L(x) = f(a) + f'(a)(x - a)$$`
    },
    {
      id: 'lin5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table-Based Linearization** 🎯\n\nGiven: $f(3) = 7$ and $f\'(3) = -2$.',
      exercise: {
        questions: [
          {
            question: 'Write the linearization at $a = 3$ and approximate $f(3.1)$.',
            options: ['$6.8$', '$7.2$', '$7$', '$6.98$'],
            correctAnswer: 0,
            explanation: '$L(x) = 7 + (-2)(x-3) = 7 - 2(x-3)$. $L(3.1) = 7 - 2(0.1) = 6.8$.'
          },
          {
            question: 'Using the same linearization, approximate $f(2.9)$.',
            options: ['$7.2$', '$6.8$', '$7.1$', '$6.9$'],
            correctAnswer: 0,
            explanation: '$L(2.9) = 7 - 2(-0.1) = 7 + 0.2 = 7.2$.'
          }
        ]
      }
    },
    {
      id: 'lin5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Table problems give you $f(a)$ and $f'(a)$ directly
2. Just plug into $L(x) = f(a) + f'(a)(x-a)$`
    }
  ]
};
""",
6: r"""export const calcabLinearizationPart6Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin6-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'lin6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use the linearization of $f(x) = \\sqrt[3]{x}$ at $a = 8$ to approximate $\\sqrt[3]{8.1}$.',
            options: ['$2.00833$', '$2.025$', '$2.1$', '$2.01$'],
            correctAnswer: 0,
            explanation: '$f(8) = 2$, $f\'(x) = \\frac{1}{3}x^{-2/3}$, $f\'(8) = \\frac{1}{3} \\cdot \\frac{1}{4} = \\frac{1}{12}$. $L(8.1) = 2 + \\frac{1}{12}(0.1) = 2.00833...$'
          },
          {
            question: 'If $y = \\tan x$ and $x = \\pi/4$, $dx = 0.01$, find $dy$.',
            options: ['$0.02$', '$0.01$', '$0.04$', '$0.005$'],
            correctAnswer: 0,
            explanation: '$dy = \\sec^2(x)\\,dx = \\sec^2(\\pi/4) \\cdot 0.01 = 2(0.01) = 0.02$.'
          }
        ]
      }
    },
    {
      id: 'lin6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabLinearizationPart7Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'lin7-intro',
      type: 'text' as const,
      content: `# Linearization & Differentials — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'lin7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $e^{0.1}$ using linearization at $a = 0$.',
            options: ['$1.1$', '$1.01$', '$0.1$', '$e$'],
            correctAnswer: 0,
            explanation: '$f(0) = 1$, $f\'(0) = 1$. $L(0.1) = 1 + 1(0.1) = 1.1$. (Actual: $1.10517...$)'
          }
        ]
      }
    },
    {
      id: 'lin7-summary',
      type: 'text' as const,
      content: `### Linearization & Differentials — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcab-linearization-differentials-calcab-part{i}.ts', parts[i])

###############################################################################
# INVERSE FUNCTIONS & DERIVATIVES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabInverseFunctionsPart1Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv1-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 1 of 7 — Derivative of an Inverse Function**

### The Key Formula

If $f$ and $g$ are inverses ($g = f^{-1}$), then:

$$(f^{-1})'(a) = \frac{1}{f'(f^{-1}(a))}$$

Or equivalently: if $f(b) = a$, then $(f^{-1})'(a) = \frac{1}{f'(b)}$.

### Why It Works

If $f(g(x)) = x$, differentiate both sides:

$f'(g(x)) \cdot g'(x) = 1$

$g'(x) = \frac{1}{f'(g(x))}$

### Worked Example

$f(x) = x^3 + x$. Find $(f^{-1})'(2)$.

We need $f(b) = 2$: $b^3 + b = 2 \implies b = 1$.

$(f^{-1})'(2) = \frac{1}{f'(1)} = \frac{1}{3(1)^2 + 1} = \frac{1}{4}$`
    },
    {
      id: 'inv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Function Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + \\cos x$ and $f(0) = 1$, find $(f^{-1})\'(1)$.',
            options: ['$\\frac{1}{2}$', '$1$', '$2$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0 + 1 = 1$, so $f^{-1}(1) = 0$. $f\'(x) = 2 - \\sin x$. $f\'(0) = 2$. $(f^{-1})\'(1) = \\frac{1}{f\'(0)} = \\frac{1}{2}$.'
          },
          {
            question: 'If $f(3) = 7$ and $f\'(3) = 5$, find $(f^{-1})\'(7)$.',
            options: ['$\\frac{1}{5}$', '$5$', '$\\frac{1}{7}$', '$\\frac{1}{3}$'],
            correctAnswer: 0,
            explanation: '$f(3) = 7$ means $f^{-1}(7) = 3$. $(f^{-1})\'(7) = \\frac{1}{f\'(3)} = \\frac{1}{5}$.'
          }
        ]
      }
    },
    {
      id: 'inv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $(f^{-1})'(a) = \\frac{1}{f'(f^{-1}(a))}$
2. First find the $x$-value where $f(x) = a$
3. Then take the reciprocal of $f'$ at that point`
    }
  ]
};
""",
2: r"""export const calcabInverseFunctionsPart2Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv2-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 2 of 7 — Inverse Trigonometric Derivatives**

### Essential Formulas

$$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}}$$

$$\frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}$$

$$\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2}$$

### With Chain Rule

$$\frac{d}{dx}[\arctan(g(x))] = \frac{g'(x)}{1+(g(x))^2}$$`
    },
    {
      id: 'inv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[\\arctan(3x)]$.',
            options: ['$\\frac{3}{1+9x^2}$', '$\\frac{1}{1+9x^2}$', '$\\frac{3}{1+3x^2}$', '$\\frac{1}{\\sqrt{1-9x^2}}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\arctan(3x)] = \\frac{3}{1+(3x)^2} = \\frac{3}{1+9x^2}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\arcsin(x^2)]$.',
            options: ['$\\frac{2x}{\\sqrt{1-x^4}}$', '$\\frac{1}{\\sqrt{1-x^4}}$', '$\\frac{2x}{\\sqrt{1-x^2}}$', '$\\frac{x}{\\sqrt{1-x^4}}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\arcsin(x^2)] = \\frac{2x}{\\sqrt{1-(x^2)^2}} = \\frac{2x}{\\sqrt{1-x^4}}$.'
          }
        ]
      }
    },
    {
      id: 'inv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Memorize the three inverse trig derivatives
2. Always apply chain rule with composite functions`
    }
  ]
};
""",
3: r"""export const calcabInverseFunctionsPart3Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv3-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 3 of 7 — $e^x$ and $\\ln x$ Review**

### Essential Derivatives

$$\\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$

$$\\frac{d}{dx}[a^x] = a^x \\ln a \\qquad \\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$$

### Logarithmic Differentiation

For complex products/quotients, take $\\ln$ of both sides first.

**Example:** $y = \\frac{x^2 \\sqrt{x+1}}{(x-3)^4}$

$\\ln y = 2\\ln x + \\frac{1}{2}\\ln(x+1) - 4\\ln(x-3)$

$\\frac{y'}{y} = \\frac{2}{x} + \\frac{1}{2(x+1)} - \\frac{4}{x-3}$`
    },
    {
      id: 'inv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential & Log Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[e^{\\sin x}]$.',
            options: ['$e^{\\sin x} \\cos x$', '$e^{\\sin x}$', '$e^{\\cos x}$', '$\\cos x \\cdot e^x$'],
            correctAnswer: 0,
            explanation: 'Chain rule: $e^{\\sin x} \\cdot \\cos x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\ln(x^2 + 1)]$.',
            options: ['$\\frac{2x}{x^2+1}$', '$\\frac{1}{x^2+1}$', '$\\frac{2x}{x}$', '$\\frac{1}{2x}$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}[\\ln(x^2+1)] = \\frac{2x}{x^2+1}$.'
          }
        ]
      }
    },
    {
      id: 'inv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. $e^x$ and $\\ln x$ are inverses with simple derivatives
2. Always apply chain rule with composite functions`
    }
  ]
};
""",
4: r"""export const calcabInverseFunctionsPart4Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv4-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 4 of 7 — Table-Based Inverse Problems**

### The AP Pattern

Given a table of $f$ and $f'$ values, find $(f^{-1})'$ at a point.

| $x$ | $f(x)$ | $f'(x)$ |
|-----|---------|----------|
| 1 | 4 | 3 |
| 2 | 7 | 5 |
| 4 | 10 | 2 |

To find $(f^{-1})'(7)$:

1. $f(2) = 7$, so $f^{-1}(7) = 2$
2. $(f^{-1})'(7) = \\frac{1}{f'(2)} = \\frac{1}{5}$`
    },
    {
      id: 'inv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table Problems** 🎯\n\nUsing the table: $f(1) = 4$, $f\'(1) = 3$, $f(2) = 7$, $f\'(2) = 5$, $f(4) = 10$, $f\'(4) = 2$.',
      exercise: {
        questions: [
          {
            question: 'Find $(f^{-1})\'(4)$.',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{4}$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(1) = 4$, so $f^{-1}(4) = 1$. $(f^{-1})\'(4) = \\frac{1}{f\'(1)} = \\frac{1}{3}$.'
          },
          {
            question: 'Find $(f^{-1})\'(10)$.',
            options: ['$\\frac{1}{2}$', '$2$', '$\\frac{1}{10}$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(4) = 10$, so $f^{-1}(10) = 4$. $(f^{-1})\'(10) = \\frac{1}{f\'(4)} = \\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'inv4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. find the $x$ where $f(x) = $ the target value
2. Take reciprocal of $f'$ at that $x$`
    }
  ]
};
""",
5: r"""export const calcabInverseFunctionsPart5Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv5-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 5 of 7 — Integrals Leading to Inverse Trig**

### Key Antiderivatives

$$\\int \\frac{1}{\\sqrt{1-x^2}}\\,dx = \\arcsin x + C$$

$$\\int \\frac{1}{1+x^2}\\,dx = \\arctan x + C$$

### General Forms

$$\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,dx = \\arcsin\\frac{x}{a} + C$$

$$\\int \\frac{1}{a^2+x^2}\\,dx = \\frac{1}{a}\\arctan\\frac{x}{a} + C$$`
    },
    {
      id: 'inv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^1 \\frac{1}{1+x^2}\\,dx$.',
            options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$1$', '$\\arctan 1$'],
            correctAnswer: 0,
            explanation: '$[\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4} - 0 = \\frac{\\pi}{4}$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{4+x^2}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\frac{x}{2} + C$', '$\\arctan\\frac{x}{2} + C$', '$\\frac{1}{4}\\arctan\\frac{x}{4} + C$', '$\\arctan 2x + C$'],
            correctAnswer: 0,
            explanation: '$\\int \\frac{dx}{4+x^2} = \\frac{1}{2}\\arctan\\frac{x}{2} + C$ using the formula with $a = 2$.'
          }
        ]
      }
    },
    {
      id: 'inv5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Recognize when an integral leads to $\\arcsin$ or $\\arctan$
2. Use the general forms with parameter $a$`
    }
  ]
};
""",
6: r"""export const calcabInverseFunctionsPart6Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv6-intro',
      type: 'text' as const,
      content: `# Inverse Functions & Their Derivatives

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'inv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $g(x) = x^5 + x^3 + x$, find $(g^{-1})\'(3)$.',
            options: ['$\\frac{1}{9}$', '$\\frac{1}{3}$', '$9$', '$3$'],
            correctAnswer: 0,
            explanation: '$g(1) = 1+1+1 = 3$, so $g^{-1}(3) = 1$. $g\'(x) = 5x^4+3x^2+1$, $g\'(1) = 9$. $(g^{-1})\'(3) = \\frac{1}{9}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[x \\cdot \\arctan x]$.',
            options: ['$\\arctan x + \\frac{x}{1+x^2}$', '$\\frac{x}{1+x^2}$', '$\\arctan x$', '$\\frac{1}{1+x^2}$'],
            correctAnswer: 0,
            explanation: 'Product rule: $\\arctan x + x \\cdot \\frac{1}{1+x^2}$.'
          }
        ]
      }
    },
    {
      id: 'inv6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabInverseFunctionsPart7Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inv7-intro',
      type: 'text' as const,
      content: `# Inverse Functions — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'inv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(2) = 5$, $f\'(2) = 3$, $f(5) = 8$, $f\'(5) = 7$, find $(f^{-1})\'(5)$.',
            options: ['$\\frac{1}{3}$', '$\\frac{1}{7}$', '$3$', '$7$'],
            correctAnswer: 0,
            explanation: '$f(2) = 5$ means $f^{-1}(5) = 2$. $(f^{-1})\'(5) = \\frac{1}{f\'(2)} = \\frac{1}{3}$.'
          },
          {
            question: 'Evaluate $\\int_0^{1/2} \\frac{dx}{\\sqrt{1-x^2}}$.',
            options: ['$\\frac{\\pi}{6}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: '$[\\arcsin x]_0^{1/2} = \\arcsin(1/2) - 0 = \\frac{\\pi}{6}$.'
          }
        ]
      }
    },
    {
      id: 'inv7-summary',
      type: 'text' as const,
      content: `### Inverse Functions — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcab-inverse-functions-derivatives-calcab-part{i}.ts', parts[i])

###############################################################################
# EXPONENTIAL MODELS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabExpModelsPart1Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp1-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 1 of 7 — Exponential Growth and Decay**

### The Differential Equation

$$\frac{dy}{dt} = ky \implies y = y_0 e^{kt}$$

- $k > 0$: **exponential growth**
- $k < 0$: **exponential decay**

### Worked Example

A bacteria culture starts with 500 and grows to 1500 in 2 hours.

$1500 = 500e^{2k}$

$3 = e^{2k}$

$k = \frac{\ln 3}{2} \approx 0.549$

Population at time $t$: $P(t) = 500e^{0.549t}$`
    },
    {
      id: 'exp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Growth** 🎯',
      exercise: {
        questions: [
          {
            question: 'A population of 200 grows to 800 in 6 hours. Find the growth constant $k$.',
            options: ['$\\frac{\\ln 4}{6}$', '$\\frac{\\ln 2}{6}$', '$\\frac{4}{6}$', '$\\frac{\\ln 800}{6}$'],
            correctAnswer: 0,
            explanation: '$800 = 200e^{6k}$. $4 = e^{6k}$. $k = \\frac{\\ln 4}{6}$.'
          },
          {
            question: 'A radioactive substance decays from 100 g to 75 g in 10 years. Find its half-life.',
            options: ['$\\frac{10\\ln 2}{\\ln(4/3)}$', '$\\frac{10}{\\ln 2}$', '$20$ years', '$5\\ln 2$ years'],
            correctAnswer: 0,
            explanation: '$75 = 100e^{10k}$. $k = \\frac{\\ln(3/4)}{10} = -\\frac{\\ln(4/3)}{10}$. Half-life $= \\frac{\\ln 2}{|k|} = \\frac{10\\ln 2}{\\ln(4/3)}$.'
          }
        ]
      }
    },
    {
      id: 'exp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $\\frac{dy}{dt} = ky$ always has solution $y = y_0 e^{kt}$
2. Use two data points to find $k$`
    }
  ]
};
""",
2: r"""export const calcabExpModelsPart2Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp2-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 2 of 7 — Newton's Law of Cooling**

### The Model

$$\frac{dT}{dt} = k(T - T_s)$$

where $T_s$ is the surrounding temperature.

**Solution:** $T(t) = T_s + (T_0 - T_s)e^{kt}$ where $k < 0$.

### Worked Example

A cup of coffee at $200°F$ is placed in a $70°F$ room. After 10 min it's $150°F$.

$150 = 70 + 130e^{10k}$

$80 = 130e^{10k}$

$e^{10k} = \\frac{8}{13}$

$T(t) = 70 + 130\\left(\\frac{8}{13}\\right)^{t/10}$`
    },
    {
      id: 'exp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Newton\'s Cooling** 🎯',
      exercise: {
        questions: [
          {
            question: 'A body at $98°F$ is found in a $65°F$ room. After 1 hour it\'s $90°F$. What was the temperature 2 hours after death?',
            options: ['$83.1°F$', '$85°F$', '$80°F$', '$77°F$'],
            correctAnswer: 0,
            explanation: '$90 = 65 + 33e^{k}$. $e^k = 25/33$. After 2 hrs: $T = 65 + 33(25/33)^2 = 65 + 33 \\cdot 625/1089 \\approx 65 + 18.94 = 83.1°F$.'
          }
        ]
      }
    },
    {
      id: 'exp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Newton's Cooling: rate proportional to temperature difference
2. Temperature approaches surroundings exponentially`
    }
  ]
};
""",
3: r"""export const calcabExpModelsPart3Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp3-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 3 of 7 — Compound Interest & Continuous Growth**

### Compound Interest

$$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$$

### Continuous Compounding

$$A = Pe^{rt}$$

### Connection

As $n \\to \\infty$: $P(1 + r/n)^{nt} \\to Pe^{rt}$`
    },
    {
      id: 'exp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Compound Interest** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\$1000$ invested at $5\\%$ compounded continuously. How long to double?',
            options: ['$\\frac{\\ln 2}{0.05} \\approx 13.86$ years', '$20$ years', '$10$ years', '$\\frac{2}{0.05} = 40$ years'],
            correctAnswer: 0,
            explanation: '$2000 = 1000e^{0.05t}$. $2 = e^{0.05t}$. $t = \\frac{\\ln 2}{0.05} \\approx 13.86$ years.'
          }
        ]
      }
    },
    {
      id: 'exp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Continuous compounding: $A = Pe^{rt}$
2. Doubling time = $\\frac{\\ln 2}{r}$`
    }
  ]
};
""",
4: r"""export const calcabExpModelsPart4Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp4-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 4 of 7 — Derivatives and Integrals of Exponentials**

### Key Rules

$$\\frac{d}{dx}[e^{kx}] = ke^{kx} \\qquad \\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C$$

$$\\frac{d}{dx}[a^x] = a^x \\ln a \\qquad \\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$$`
    },
    {
      id: 'exp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Exponential Calculus** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^1 3e^{2x}\\,dx$.',
            options: ['$\\frac{3}{2}(e^2 - 1)$', '$3(e^2 - 1)$', '$\\frac{3}{2}e^2$', '$3e^2$'],
            correctAnswer: 0,
            explanation: '$3 \\cdot \\frac{1}{2}[e^{2x}]_0^1 = \\frac{3}{2}(e^2 - 1)$.'
          },
          {
            question: 'Find $\\int 2^x\\,dx$.',
            options: ['$\\frac{2^x}{\\ln 2} + C$', '$2^x \\ln 2 + C$', '$\\frac{2^{x+1}}{x+1} + C$', '$2^x + C$'],
            correctAnswer: 0,
            explanation: '$\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. So $\\int 2^x\\,dx = \\frac{2^x}{\\ln 2} + C$.'
          }
        ]
      }
    },
    {
      id: 'exp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. $\\int e^{kx}\\,dx = \\frac{1}{k}e^{kx} + C$
2. $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$`
    }
  ]
};
""",
5: r"""export const calcabExpModelsPart5Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp5-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 5 of 7 — Logistic Growth Preview**

### The Logistic Model

$$\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$$

where $L$ is the **carrying capacity**.

### Key Features

- Grows exponentially when $P \\ll L$
- Fastest growth at $P = L/2$ (inflection point)
- Solution approaches $L$ as $t \\to \\infty$`
    },
    {
      id: 'exp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Growth** 🎯\n\n$\\frac{dP}{dt} = 0.5P(1 - P/1000)$',
      exercise: {
        questions: [
          {
            question: 'What is the carrying capacity?',
            options: ['$1000$', '$500$', '$0.5$', '$2000$'],
            correctAnswer: 0,
            explanation: 'The carrying capacity $L = 1000$ appears in the factor $(1 - P/L)$.'
          },
          {
            question: 'At what population is growth fastest?',
            options: ['$P = 500$', '$P = 1000$', '$P = 250$', '$P = 0$'],
            correctAnswer: 0,
            explanation: 'Maximum growth rate at $P = L/2 = 500$.'
          }
        ]
      }
    },
    {
      id: 'exp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Logistic growth has a carrying capacity
2. Fastest growth at half the carrying capacity`
    }
  ]
};
""",
6: r"""export const calcabExpModelsPart6Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp6-intro',
      type: 'text' as const,
      content: `# Exponential Models

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'exp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the half-life of a substance is 5 years, what fraction remains after 15 years?',
            options: ['$1/8$', '$1/4$', '$1/3$', '$1/16$'],
            correctAnswer: 0,
            explanation: '15 years = 3 half-lives. $(1/2)^3 = 1/8$.'
          },
          {
            question: 'A population triples every 4 hours. How long until it is 81 times its original size?',
            options: ['$16$ hours', '$12$ hours', '$8$ hours', '$20$ hours'],
            correctAnswer: 0,
            explanation: '$81 = 3^4$. So we need 4 tripling periods = $4 \\times 4 = 16$ hours.'
          }
        ]
      }
    },
    {
      id: 'exp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabExpModelsPart7Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'exp7-intro',
      type: 'text' as const,
      content: `# Exponential Models — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'exp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Carbon-14 has a half-life of 5730 years. A sample has 25% of its original C-14. How old is it?',
            options: ['$11460$ years', '$5730$ years', '$17190$ years', '$2865$ years'],
            correctAnswer: 0,
            explanation: '25% = $(1/2)^2$, so 2 half-lives = $2 \\times 5730 = 11460$ years.'
          }
        ]
      }
    },
    {
      id: 'exp7-summary',
      type: 'text' as const,
      content: `### Exponential Models — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcab-exponential-models-calcab-part{i}.ts', parts[i])

###############################################################################
# THEOREM APPLICATIONS — MVT, IVT, EVT (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcabTheoremsPart1Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm1-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 1 of 7 — The Intermediate Value Theorem (IVT)**

### Statement

If $f$ is **continuous** on $[a, b]$ and $N$ is between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ such that $f(c) = N$.

### What It Means

A continuous function takes on every value between $f(a)$ and $f(b)$.

### AP Usage

"Since $f$ is continuous on $[a, b]$, $f(a) = 2$, and $f(b) = 7$, by the IVT there exists $c \in (a, b)$ such that $f(c) = 5$."

### Important: IVT Does NOT Tell You

- Where $c$ is
- How many such $c$ values exist
- Only that at least one exists`
    },
    {
      id: 'thm1-quiz1',
      type: 'multiple-choice' as const,
      content: '**IVT** 🎯',
      exercise: {
        questions: [
          {
            question: '$f$ is continuous on $[0, 4]$, $f(0) = -3$, $f(4) = 5$. Which must be true?',
            options: ['$f(c) = 0$ for some $c$ in $(0, 4)$', '$f(c) = 0$ for exactly one $c$', '$f$ has a max of 5', '$f\'(c) = 0$ for some $c$'],
            correctAnswer: 0,
            explanation: 'Since $0$ is between $-3$ and $5$, IVT guarantees $f(c) = 0$ for some $c \\in (0, 4)$.'
          },
          {
            question: 'Which hypothesis is needed for IVT?',
            options: ['Continuity on $[a,b]$', 'Differentiability on $(a,b)$', '$f$ is increasing', '$f\' > 0$'],
            correctAnswer: 0,
            explanation: 'IVT requires only continuity on the closed interval.'
          }
        ]
      }
    },
    {
      id: 'thm1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. IVT requires continuity
2. Guarantees existence of a value, not location
3. Always cite continuity when using IVT on the AP exam`
    }
  ]
};
""",
2: r"""export const calcabTheoremsPart2Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm2-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 2 of 7 — The Mean Value Theorem (MVT)**

### Statement

If $f$ is **continuous** on $[a, b]$ and **differentiable** on $(a, b)$, then there exists $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

### Geometric Meaning

There's a point where the tangent line is parallel to the secant line.

### Worked Example

$f(x) = x^2$ on $[1, 3]$.

Average rate: $\frac{9-1}{3-1} = 4$.

$f'(c) = 2c = 4 \implies c = 2$.

The tangent at $x = 2$ is parallel to the secant from $(1,1)$ to $(3,9)$.`
    },
    {
      id: 'thm2-quiz1',
      type: 'multiple-choice' as const,
      content: '**MVT** 🎯',
      exercise: {
        questions: [
          {
            question: '$f(x) = x^3 - 3x$ on $[0, 2]$. Find the value of $c$ guaranteed by MVT.',
            options: ['$c = \\frac{2}{\\sqrt{3}}$', '$c = 1$', '$c = \\sqrt{2}$', '$c = \\frac{2}{3}$'],
            correctAnswer: 0,
            explanation: 'Average rate: $\\frac{(8-6) - 0}{2} = 1$. $f\'(c) = 3c^2 - 3 = 1$. $c^2 = 4/3$. $c = \\frac{2}{\\sqrt{3}}$.'
          },
          {
            question: 'MVT requires which two conditions?',
            options: ['Continuous on $[a,b]$ AND differentiable on $(a,b)$', 'Continuous on $[a,b]$ only', 'Differentiable on $[a,b]$ only', '$f\'$ is continuous'],
            correctAnswer: 0,
            explanation: 'MVT needs both continuity on $[a,b]$ and differentiability on $(a,b)$.'
          }
        ]
      }
    },
    {
      id: 'thm2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. MVT: instantaneous rate = average rate at some point
2. Requires continuity AND differentiability
3. On the AP exam, always verify both conditions`
    }
  ]
};
""",
3: r"""export const calcabTheoremsPart3Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm3-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 3 of 7 — The Extreme Value Theorem (EVT)**

### Statement

If $f$ is **continuous** on $[a, b]$, then $f$ attains an **absolute maximum** and **absolute minimum** on $[a, b]$.

### Finding Absolute Extrema (Closed Interval Method)

1. Find all critical points in $(a, b)$ where $f' = 0$ or $f'$ DNE
2. Evaluate $f$ at critical points AND at endpoints
3. Largest value = absolute max, smallest = absolute min`
    },
    {
      id: 'thm3-quiz1',
      type: 'multiple-choice' as const,
      content: '**EVT & Closed Interval Method** 🎯\n\n$f(x) = x^3 - 3x + 1$ on $[-2, 2]$.',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f$ on $[-2, 2]$.',
            options: ['$3$', '$1$', '$7$', '$-1$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2 - 3 = 0$ at $x = \\pm 1$. $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$. Max is $3$.'
          },
          {
            question: 'Find the absolute minimum of $f$ on $[-2, 2]$.',
            options: ['$-1$', '$0$', '$-3$', '$1$'],
            correctAnswer: 0,
            explanation: 'From the values: $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$. Min is $-1$.'
          }
        ]
      }
    },
    {
      id: 'thm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. EVT guarantees max and min exist on closed intervals
2. Check critical points AND endpoints
3. Only requires continuity`
    }
  ]
};
""",
4: r"""export const calcabTheoremsPart4Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm4-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 4 of 7 — Rolle's Theorem & MVT Applications**

### Rolle's Theorem (Special Case of MVT)

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c \in (a, b)$ such that $f'(c) = 0$.

### MVT for Speed

If a car travels 120 miles in 2 hours, then at some moment the speedometer reads exactly 60 mph.

This is MVT applied: average speed = instantaneous speed at some point!`
    },
    {
      id: 'thm4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rolle\'s Theorem & MVT Apps** 🎯',
      exercise: {
        questions: [
          {
            question: '$f(0) = 3$ and $f(4) = 3$, $f$ is continuous on $[0,4]$ and differentiable on $(0,4)$. What can we conclude?',
            options: ['$f\'(c) = 0$ for some $c \\in (0, 4)$', '$f$ is constant', '$f$ has a max at $c$', '$f\'(c) = 3$'],
            correctAnswer: 0,
            explanation: 'By Rolle\'s Theorem: $f(0) = f(4) = 3$, so $f\'(c) = 0$ for some $c \\in (0, 4)$.'
          }
        ]
      }
    },
    {
      id: 'thm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Rolle's Theorem: same endpoints → horizontal tangent somewhere
2. MVT has real-world applications (speed, rates)`
    }
  ]
};
""",
5: r"""export const calcabTheoremsPart5Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm5-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 5 of 7 — FTC and When to Use Each Theorem**

### Theorem Selection Guide

| Scenario | Theorem |
|----------|---------|
| Show $f(c) = N$ for some $c$ | IVT |
| Show $f'(c) = m$ for some $c$ | MVT |
| Show absolute max/min exist | EVT |
| Show $f'(c) = 0$ for some $c$ | Rolle's (or MVT) |
| Find derivative of $\int_a^x f$ | FTC Part 1 |
| Evaluate $\int_a^b f$ | FTC Part 2 |`
    },
    {
      id: 'thm5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Which Theorem?** 🎯',
      exercise: {
        questions: [
          {
            question: '"$f$ is continuous, $f(2) = -1$, $f(5) = 4$. Show there exists $c$ where $f(c) = 2$." Which theorem?',
            options: ['IVT', 'MVT', 'EVT', 'Rolle\'s'],
            correctAnswer: 0,
            explanation: 'We need to show $f(c) = N$ for some value — this is IVT.'
          },
          {
            question: '"$f$ is differentiable, $f(1) = 3$, $f(5) = 11$. Show $f\'(c) = 2$ for some $c$." Which theorem?',
            options: ['MVT', 'IVT', 'EVT', 'FTC'],
            correctAnswer: 0,
            explanation: 'Average rate = $(11-3)/(5-1) = 2$. MVT guarantees $f\'(c) = 2$ for some $c \\in (1, 5)$.'
          }
        ]
      }
    },
    {
      id: 'thm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. IVT: proving function values exist
2. MVT: proving derivative values exist
3. EVT: proving extrema exist`
    }
  ]
};
""",
6: r"""export const calcabTheoremsPart6Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm6-intro',
      type: 'text' as const,
      content: `# Theorem Applications

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'thm6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Theorem Practice** 🎯\n\nA table: $f(0) = 1$, $f(2) = 5$, $f(5) = 3$, $f(7) = 8$. $f$ is continuous and differentiable.',
      exercise: {
        questions: [
          {
            question: 'Can we guarantee $f(c) = 4$ for some $c \\in (0, 7)$?',
            options: ['Yes, by IVT on $[0, 2]$', 'No', 'Yes, by MVT', 'Only if $f$ is differentiable'],
            correctAnswer: 0,
            explanation: '$f(0) = 1 < 4 < 5 = f(2)$. By IVT, $f(c) = 4$ for some $c \\in (0, 2) \\subset (0, 7)$.'
          },
          {
            question: 'Can we guarantee $f\'(c) = 1$ for some $c \\in (0, 7)$?',
            options: ['Yes, by MVT on $[0, 7]$', 'No', 'Yes, by IVT', 'Only on $[0, 2]$'],
            correctAnswer: 0,
            explanation: 'Average rate on $[0, 7]$: $\\frac{8-1}{7} = 1$. MVT gives $f\'(c) = 1$ for some $c \\in (0, 7)$.'
          }
        ]
      }
    },
    {
      id: 'thm6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcabTheoremsPart7Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'thm7-intro',
      type: 'text' as const,
      content: `# Theorem Applications — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'thm7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car\'s odometer reads 100 mi at 1:00 PM and 280 mi at 4:00 PM. What can we conclude?',
            options: ['The car went exactly 60 mph at some moment', 'The car averaged 60 mph', 'Both A and B', 'Only B'],
            correctAnswer: 2,
            explanation: 'Average speed = 180/3 = 60 mph. By MVT (assuming speed is continuous), the speedometer read exactly 60 mph at some moment AND the average was 60 mph.'
          },
          {
            question: 'If $f$ is continuous on $[1, 6]$, which is guaranteed?',
            options: ['$f$ has an absolute maximum on $[1, 6]$', '$f\'(c) = 0$ for some $c$', '$f$ is differentiable on $(1, 6)$', '$f$ is bounded above by $f(6)$'],
            correctAnswer: 0,
            explanation: 'EVT: continuous on a closed interval → absolute max and min exist.'
          }
        ]
      }
    },
    {
      id: 'thm7-summary',
      type: 'text' as const,
      content: `### Theorem Applications — Complete! ✅

You have mastered:
- ✅ Intermediate Value Theorem (IVT)
- ✅ Mean Value Theorem (MVT)
- ✅ Extreme Value Theorem (EVT)
- ✅ Rolle's Theorem
- ✅ Choosing the right theorem`
    }
  ]
};
""",
    }
    write_file(f'calcab-theorem-applications-calcab-part{i}.ts', parts[i])

print("\nLinearization (7), Inverse Functions (7), Exponential Models (7), Theorems (7) complete!")
print("Total files written: 28")
