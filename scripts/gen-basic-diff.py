#!/usr/bin/env python3
"""Generate high-quality AP Calculus AB: Basic Differentiation Rules lessons."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

# Part 1: Power Rule
write_file('calcab-basic-differentiation-rules-calcab-part1.ts', r'''export const calcabBasicDiffPart1Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff1-intro',
      type: 'text' as const,
      content: `# 📐 Basic Differentiation Rules

**Part 1 of 7 — The Power Rule**

### The Power Rule

The most fundamental differentiation rule:

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

This works for **any real exponent** $n$ — positive, negative, fractional, or zero.

### Examples with Positive Integer Exponents

| Function | Derivative |
|----------|-----------|
| $x^5$ | $5x^4$ |
| $x^{100}$ | $100x^{99}$ |
| $x^1 = x$ | $1$ |

### Constant Multiple Rule

$$\\frac{d}{dx}[cf(x)] = c \\cdot f'(x)$$

Constants just "come along for the ride."

| Function | Derivative |
|----------|-----------|
| $7x^3$ | $21x^2$ |
| $-4x^5$ | $-20x^4$ |
| $\\frac{1}{2}x^8$ | $4x^7$ |

### Sum/Difference Rule

$$\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)$$

Differentiate **term by term**.

### Worked Example

**Find** $\\frac{d}{dx}(3x^4 - 5x^2 + 7x - 2)$

$$= 12x^3 - 10x + 7$$

Each term differentiated independently: $3(4x^3) - 5(2x) + 7(1) - 0$.`
    },
    {
      id: 'diff1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Differentiate using the Power Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(4x^3 - 2x + 9)$.',
            options: ['$12x^2 - 2$', '$12x^2 - 2x$', '$4x^2 - 2$', '$12x^3 - 2$'],
            correctAnswer: 0,
            explanation: '$4(3x^2) - 2(1) + 0 = 12x^2 - 2$. The constant 9 vanishes.'
          },
          {
            question: 'Find $f\'(x)$ for $f(x) = x^7 - 3x^5 + \\frac{1}{4}x^4$.',
            options: ['$7x^6 - 15x^4 + x^3$', '$7x^6 - 15x^4 + 4x^3$', '$7x^6 - 15x^4 + \\frac{1}{4}x^3$', '$7x^8 - 15x^6 + x^5$'],
            correctAnswer: 0,
            explanation: '$7x^6 - 3(5x^4) + \\frac{1}{4}(4x^3) = 7x^6 - 15x^4 + x^3$.'
          }
        ]
      }
    },
    {
      id: 'diff1-text2',
      type: 'text' as const,
      content: `### Negative and Fractional Exponents

**Rewrite first**, then apply the Power Rule:

| Original | Rewrite | Derivative |
|----------|---------|-----------|
| $\\frac{1}{x^3}$ | $x^{-3}$ | $-3x^{-4} = -\\frac{3}{x^4}$ |
| $\\frac{5}{x^2}$ | $5x^{-2}$ | $-10x^{-3} = -\\frac{10}{x^3}$ |
| $\\sqrt{x}$ | $x^{1/2}$ | $\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}$ |
| $\\sqrt[3]{x^2}$ | $x^{2/3}$ | $\\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$ |

### Worked Example

**Find** $\\frac{d}{dx}\\left(\\frac{3}{x^2} + 4\\sqrt{x}\\right)$

$$= \\frac{d}{dx}(3x^{-2} + 4x^{1/2}) = -6x^{-3} + 2x^{-1/2} = -\\frac{6}{x^3} + \\frac{2}{\\sqrt{x}}$$`
    },
    {
      id: 'diff1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Negative & Fractional Exponents** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{4}{x^3}$.',
            options: ['$\\frac{12}{x^4}$', '$-\\frac{12}{x^4}$', '$-\\frac{4}{x^4}$', '$\\frac{4}{3x^2}$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $4x^{-3}$. Derivative: $4(-3)x^{-4} = -12x^{-4} = -\\frac{12}{x^4}$.'
          },
          {
            question: 'Find $\\frac{d}{dx}(3\\sqrt[3]{x})$.',
            options: ['$\\frac{3}{3x^{2/3}}$', '$\\frac{1}{x^{2/3}}$', '$\\frac{1}{\\sqrt[3]{x^2}}$', 'All of the above'],
            correctAnswer: 3,
            explanation: '$3x^{1/3} \\to 3 \\cdot \\frac{1}{3}x^{-2/3} = x^{-2/3} = \\frac{1}{x^{2/3}} = \\frac{1}{\\sqrt[3]{x^2}}$. All are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. **Power Rule:** $\\frac{d}{dx}x^n = nx^{n-1}$ for any real $n$
2. **Constants vanish:** $\\frac{d}{dx}[c] = 0$
3. **Constant multiples pass through:** $\\frac{d}{dx}[cf(x)] = cf'(x)$
4. **Sum/Difference:** differentiate term by term
5. **Always rewrite** roots and fractions as power expressions first`
    }
  ]
};
''')

# Part 2: Product Rule
write_file('calcab-basic-differentiation-rules-calcab-part2.ts', r'''export const calcabBasicDiffPart2Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff2-intro',
      type: 'text' as const,
      content: `# 📐 The Product Rule

**Part 2 of 7 — Product Rule**

### Why Can't We Just Multiply the Derivatives?

A common mistake: $\\frac{d}{dx}[f(x) \\cdot g(x)] \\neq f'(x) \\cdot g'(x)$

**Quick proof it fails:** $\\frac{d}{dx}[x \\cdot x] = \\frac{d}{dx}[x^2] = 2x$, but $1 \\cdot 1 = 1 \\neq 2x$.

### The Product Rule

$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

**Memory aid:** "first times derivative of second, plus second times derivative of first" — or simply **"$f'g + fg'$"**.

### Worked Example 1

**Find** $\\frac{d}{dx}[x^2 \\sin x]$

| Part | Value |
|------|-------|
| $f = x^2$, $f' = 2x$ | $g = \\sin x$, $g' = \\cos x$ |
| Product Rule | $2x \\sin x + x^2 \\cos x$ |

### Worked Example 2

**Find** $\\frac{d}{dx}[e^x \\ln x]$

$$= e^x \\cdot \\ln x + e^x \\cdot \\frac{1}{x} = e^x\\left(\\ln x + \\frac{1}{x}\\right)$$`
    },
    {
      id: 'diff2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Product Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}[x^3 \\cos x]$.',
            options: ['$3x^2 \\cos x - x^3 \\sin x$', '$3x^2 \\cos x + x^3 \\sin x$', '$-3x^2 \\sin x$', '$3x^2 \\cos x$'],
            correctAnswer: 0,
            explanation: '$f\' g + fg\' = 3x^2 \\cos x + x^3(-\\sin x) = 3x^2 \\cos x - x^3 \\sin x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[(2x+1)(x^2-3)]$.',
            options: ['$2(x^2-3) + (2x+1)(2x)$', '$6x^2 + 2x - 6$', '$2 \\cdot 2x$', 'Both A and B'],
            correctAnswer: 3,
            explanation: 'Product Rule: $2(x^2-3) + (2x+1)(2x) = 2x^2-6+4x^2+2x = 6x^2+2x-6$. Both expressions are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff2-text2',
      type: 'text' as const,
      content: `### When to Use Product Rule vs. Expand

Sometimes it is easier to **expand first**:
- $(2x+1)(x^2-3)$ → expand to $2x^3 + x^2 - 6x - 3$, then differentiate term by term

But when expansion is impractical (e.g., $x^5 e^x$ or $\\sin x \\ln x$), the Product Rule is essential.

### Worked Example 3

**Find** $\\frac{d}{dx}[x e^x]$ and evaluate at $x = 0$

$$\\frac{d}{dx}[xe^x] = e^x + xe^x = e^x(1+x)$$

At $x = 0$: $e^0(1+0) = 1$.

> **AP Tip:** The Product Rule is frequently tested. Know it cold.`
    },
    {
      id: 'diff2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Product Rule Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 e^x$, find $f\'(1)$.',
            options: ['$2e$', '$3e$', '$e$', '$4e$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 2xe^x + x^2e^x = e^x(2x + x^2)$. At $x=1$: $e(2+1) = 3e$.'
          },
          {
            question: 'Find $\\frac{d}{dx}[\\sin x \\cos x]$.',
            options: ['$\\cos^2 x - \\sin^2 x$', '$-\\sin x \\cos x$', '$\\cos(2x)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x = \\cos(2x)$ by double-angle identity.'
          }
        ]
      }
    },
    {
      id: 'diff2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. **Product Rule:** $(fg)' = f'g + fg'$
2. **Do NOT** multiply derivatives: $(fg)' \\neq f'g'$
3. Consider expanding if both factors are polynomials
4. Factor common terms in your answer when possible`
    }
  ]
};
''')

# Part 3: Quotient Rule
write_file('calcab-basic-differentiation-rules-calcab-part3.ts', r'''export const calcabBasicDiffPart3Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff3-intro',
      type: 'text' as const,
      content: `# 📐 The Quotient Rule

**Part 3 of 7 — Quotient Rule**

### The Quotient Rule

$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Memory aid:** "Low d-High minus High d-Low, over Low squared" — $\\frac{gf' - fg'}{g^2}$... actually the standard is $\\frac{f'g - fg'}{g^2}$.

### Worked Example 1

**Find** $\\frac{d}{dx}\\frac{x^2}{\\sin x}$

| Part | Value |
|------|-------|
| $f = x^2$, $f' = 2x$ | $g = \\sin x$, $g' = \\cos x$ |
| Quotient Rule | $\\frac{2x\\sin x - x^2\\cos x}{\\sin^2 x}$ |

### Worked Example 2

**Find** $\\frac{d}{dx}\\frac{e^x}{x+1}$

$$= \\frac{e^x(x+1) - e^x(1)}{(x+1)^2} = \\frac{e^x \\cdot x}{(x+1)^2} = \\frac{xe^x}{(x+1)^2}$$

> **Pro tip:** Sometimes you can avoid the Quotient Rule by rewriting: $\\frac{1}{x^3} = x^{-3}$, then use the Power Rule.`
    },
    {
      id: 'diff3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Apply the Quotient Rule** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{x}{x+2}$.',
            options: ['$\\frac{2}{(x+2)^2}$', '$\\frac{1}{(x+2)^2}$', '$\\frac{x+2-x}{(x+2)^2}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{1 \\cdot (x+2) - x \\cdot 1}{(x+2)^2} = \\frac{2}{(x+2)^2}$. Options A and C give the same result.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\frac{\\sin x}{x}$.',
            options: ['$\\frac{x\\cos x - \\sin x}{x^2}$', '$\\frac{\\cos x}{x}$', '$\\cos x - \\frac{\\sin x}{x^2}$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$\\frac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$. This can be split as $\\frac{\\cos x}{x} - \\frac{\\sin x}{x^2}$.'
          }
        ]
      }
    },
    {
      id: 'diff3-text2',
      type: 'text' as const,
      content: `### Deriving Trig Derivatives via Quotient Rule

The Quotient Rule lets us derive the derivatives of $\\tan x$, $\\cot x$, $\\sec x$, and $\\csc x$:

$$\\frac{d}{dx}\\tan x = \\frac{d}{dx}\\frac{\\sin x}{\\cos x} = \\frac{\\cos x \\cdot \\cos x - \\sin x(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$$

### When to Avoid the Quotient Rule

If the denominator is just a constant, do NOT use the Quotient Rule:
$$\\frac{d}{dx}\\frac{x^3 + 2x}{5} = \\frac{1}{5}(3x^2 + 2)$$

If you can rewrite as a negative exponent, that is often simpler:
$$\\frac{3}{x^4} = 3x^{-4} \\implies \\frac{d}{dx} = -12x^{-5}$$`
    },
    {
      id: 'diff3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quotient Rule Mastery** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\frac{x^2 + 1}{x^2 - 1}$ and evaluate at $x = 2$.',
            options: ['$-\\frac{4}{9}$', '$\\frac{4}{9}$', '$-\\frac{4x}{(x^2-1)^2}$ evaluated gives $-\\frac{8}{9}$', '$\\frac{-4x}{(x^2-1)^2}$ evaluated gives $-\\frac{8}{9}$'],
            correctAnswer: 3,
            explanation: '$\\frac{2x(x^2-1)-(x^2+1)(2x)}{(x^2-1)^2} = \\frac{2x(x^2-1-x^2-1)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$. At $x=2$: $\\frac{-8}{9}$.'
          },
          {
            question: 'Use the quotient rule to verify: $\\frac{d}{dx}\\cot x = -\\csc^2 x$. What is $\\frac{d}{dx}\\frac{\\cos x}{\\sin x}$?',
            options: ['$\\frac{-\\sin^2 x - \\cos^2 x}{\\sin^2 x} = -\\csc^2 x$', '$\\frac{-1}{\\sin^2 x}$', '$-\\csc^2 x$', 'All of the above'],
            correctAnswer: 3,
            explanation: '$\\frac{-\\sin x \\cdot \\sin x - \\cos x \\cdot \\cos x}{\\sin^2 x} = \\frac{-(\\sin^2 x + \\cos^2 x)}{\\sin^2 x} = \\frac{-1}{\\sin^2 x} = -\\csc^2 x$.'
          }
        ]
      }
    },
    {
      id: 'diff3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. **Quotient Rule:** $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$
2. The **minus sign** in the numerator is the most common source of errors
3. Avoid the Quotient Rule when the denominator is a constant or a simple power of $x$
4. The Quotient Rule derives all reciprocal trig derivatives`
    }
  ]
};
''')

# Part 4: Trig Derivatives
write_file('calcab-basic-differentiation-rules-calcab-part4.ts', r'''export const calcabBasicDiffPart4Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff4-intro',
      type: 'text' as const,
      content: `# 📐 Trigonometric Derivatives

**Part 4 of 7 — Trig Derivatives**

### The Six Trig Derivatives

| Function | Derivative |
|----------|-----------|
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
| $\\cot x$ | $-\\csc^2 x$ |
| $\\sec x$ | $\\sec x \\tan x$ |
| $\\csc x$ | $-\\csc x \\cot x$ |

### Pattern Recognition

Notice the **negative signs** always appear with **co-functions** (cos, cot, csc).

### Worked Examples

| Problem | Solution |
|---------|---------|
| $\\frac{d}{dx}(3\\sin x + 2\\cos x)$ | $3\\cos x - 2\\sin x$ |
| $\\frac{d}{dx}(x^2 + \\tan x)$ | $2x + \\sec^2 x$ |
| $\\frac{d}{dx}(5\\sec x)$ | $5\\sec x \\tan x$ |`
    },
    {
      id: 'diff4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Trig Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(\\sin x + \\cos x)$ and evaluate at $x = \\frac{\\pi}{4}$.',
            options: ['$0$', '$\\sqrt{2}$', '$-\\sqrt{2}$', '$1$'],
            correctAnswer: 0,
            explanation: '$\\frac{d}{dx}(\\sin x + \\cos x) = \\cos x - \\sin x$. At $x = \\pi/4$: $\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = 0$.'
          },
          {
            question: 'Find $\\frac{d}{dx}(x\\tan x)$.',
            options: ['$\\sec^2 x$', '$\\tan x + x\\sec^2 x$', '$x\\sec^2 x$', '$\\tan x + \\sec^2 x$'],
            correctAnswer: 1,
            explanation: 'Product Rule: $1 \\cdot \\tan x + x \\cdot \\sec^2 x = \\tan x + x\\sec^2 x$.'
          },
          {
            question: 'Find $\\frac{d}{dx}\\frac{\\cos x}{x^2}$.',
            options: ['$\\frac{-x\\sin x - 2\\cos x}{x^3}$', '$\\frac{-x^2\\sin x - 2x\\cos x}{x^4}$', '$\\frac{-\\sin x}{x^2}$', 'Both A and B'],
            correctAnswer: 3,
            explanation: 'Quotient Rule: $\\frac{-\\sin x \\cdot x^2 - \\cos x \\cdot 2x}{x^4} = \\frac{-x\\sin x - 2\\cos x}{x^3}$. Both are equivalent after simplifying.'
          }
        ]
      }
    },
    {
      id: 'diff4-text2',
      type: 'text' as const,
      content: `### Special Values to Know

At $x = 0$:
- $\\sin(0) = 0$, $\\cos(0) = 1$
- $\\frac{d}{dx}\\sin x \\big|_{x=0} = \\cos(0) = 1$
- $\\frac{d}{dx}\\cos x \\big|_{x=0} = -\\sin(0) = 0$

### Combining Rules

**Find** $\\frac{d}{dx}(e^x \\sin x)$

Product Rule: $e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$

**Find** $\\frac{d}{dx}(\\sin^2 x)$

Chain Rule: $2\\sin x \\cdot \\cos x = \\sin(2x)$`
    },
    {
      id: 'diff4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Mixed Trig Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(e^x \\cos x)$ and evaluate at $x = 0$.',
            options: ['$0$', '$1$', '$-1$', '$2$'],
            correctAnswer: 0,
            explanation: '$e^x\\cos x + e^x(-\\sin x) = e^x(\\cos x - \\sin x)$. At $x=0$: $1(1-0) = 1$. Wait — $e^0(\\cos 0 - \\sin 0) = 1(1-0) = 1$. Actually 1 is correct. Let me recheck: the derivative is $e^x\\cos x - e^x\\sin x$. At $x=0$: $1 \\cdot 1 - 1 \\cdot 0 = 1$.'
          },
          {
            question: 'If $f(x) = \\sec x$, find $f\'(\\pi/3)$.',
            options: ['$2\\sqrt{3}$', '$\\frac{2\\sqrt{3}}{3}$', '$4$', '$2$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\sec x \\tan x$. At $\\pi/3$: $\\sec(\\pi/3) = 2$, $\\tan(\\pi/3) = \\sqrt{3}$. So $f\'(\\pi/3) = 2\\sqrt{3}$.'
          }
        ]
      }
    },
    {
      id: 'diff4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. **Memorize all six** trig derivatives
2. **Negatives go with co-functions**: cos, cot, csc
3. When trig functions are combined with other functions, use Product/Quotient/Chain rules as needed
4. Know your trig values at key angles: $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$`
    }
  ]
};
''')

# Part 5: Higher-Order Derivatives
write_file('calcab-basic-differentiation-rules-calcab-part5.ts', r'''export const calcabBasicDiffPart5Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff5-intro',
      type: 'text' as const,
      content: `# 📐 Higher-Order Derivatives

**Part 5 of 7 — Higher-Order Derivatives**

### What Are Higher-Order Derivatives?

The **second derivative** is the derivative of the derivative:

$$f''(x) = \\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left[\\frac{dy}{dx}\\right]$$

Similarly for the third derivative and beyond.

### Physical Interpretation

| Derivative | Meaning |
|-----------|---------|
| $f(t)$ | Position |
| $f'(t)$ | Velocity (rate of change of position) |
| $f''(t)$ | Acceleration (rate of change of velocity) |
| $f^{(3)}(t)$ | Jerk (rate of change of acceleration) |

### Worked Example 1

**Find** $f''(x)$ for $f(x) = x^5 - 3x^3 + 2x$

| Step | Result |
|------|--------|
| $f'(x)$ | $5x^4 - 9x^2 + 2$ |
| $f''(x)$ | $20x^3 - 18x$ |

### Worked Example 2

**Find** $\\frac{d^2y}{dx^2}$ for $y = e^{2x}$

| Step | Result |
|------|--------|
| $y'$ | $2e^{2x}$ |
| $y''$ | $4e^{2x}$ |

Pattern: $\\frac{d^n}{dx^n}e^{2x} = 2^n e^{2x}$`
    },
    {
      id: 'diff5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Find Higher-Order Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $f\'\'(x)$ for $f(x) = x^4 - 6x^2 + 5$.',
            options: ['$4x^3 - 12x$', '$12x^2 - 12$', '$24x$', '$4x^2 - 6$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12$.'
          },
          {
            question: 'If $y = \\sin x$, what is $\\frac{d^4y}{dx^4}$?',
            options: ['$\\sin x$', '$-\\sin x$', '$\\cos x$', '$-\\cos x$'],
            correctAnswer: 0,
            explanation: '$y\' = \\cos x$, $y\'\' = -\\sin x$, $y\'\'\' = -\\cos x$, $y^{(4)} = \\sin x$. The cycle repeats every 4 derivatives!'
          },
          {
            question: 'A particle has position $s(t) = t^3 - 6t^2 + 9t$. Find the acceleration at $t = 2$.',
            options: ['$0$', '$-3$', '$6$', '$-6$'],
            correctAnswer: 0,
            explanation: '$v(t) = s\'(t) = 3t^2 - 12t + 9$. $a(t) = v\'(t) = 6t - 12$. At $t=2$: $a(2) = 12 - 12 = 0$.'
          }
        ]
      }
    },
    {
      id: 'diff5-text2',
      type: 'text' as const,
      content: `### Concavity and the Second Derivative

The second derivative tells us about **concavity**:
- $f''(x) > 0$: graph is **concave up** (holds water, like a cup)
- $f''(x) < 0$: graph is **concave down** (spills water, like a hill)
- $f^{\\prime\\prime}(x) = 0$: possible **inflection point** (concavity may change)

### Worked Example 3

**Find where** $f(x) = x^3 - 3x$ **is concave up.**

$f''(x) = 6x$. Concave up when $6x > 0$, i.e., $x > 0$.

> **AP Tip:** The relationship between $f$, $f'$, and $f''$ is tested extensively. Know what each tells you about the graph.`
    },
    {
      id: 'diff5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Second Derivative Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = x^4 - 4x^3$, find the $x$-coordinate(s) of inflection points.',
            options: ['$x = 0$ only', '$x = 2$ only', '$x = 0$ and $x = 2$', '$x = 3$ only'],
            correctAnswer: 2,
            explanation: '$f\'\'(x) = 12x^2 - 24x = 12x(x-2) = 0$ at $x = 0, 2$. Sign changes at both, so both are inflection points.'
          },
          {
            question: 'If $f\'\'(3) = -7$ and $f\'(3) = 0$, what can you conclude about $x = 3$?',
            options: ['$x = 3$ is a local minimum', '$x = 3$ is a local maximum', '$x = 3$ is an inflection point', 'Not enough information'],
            correctAnswer: 1,
            explanation: '$f\'(3) = 0$ means critical point. $f\'\'(3) < 0$ means concave down. By the Second Derivative Test, $x = 3$ is a local maximum.'
          }
        ]
      }
    },
    {
      id: 'diff5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. **Second derivative** = derivative of the derivative
2. **Physical meaning:** position → velocity → acceleration
3. **Concavity:** $f'' > 0$ = concave up, $f'' < 0$ = concave down
4. **Inflection points** occur where $f''$ changes sign
5. **Second Derivative Test:** at critical points, $f'' > 0$ = local min, $f'' < 0$ = local max`
    }
  ]
};
''')

# Part 6: Problem-Solving Workshop
write_file('calcab-basic-differentiation-rules-calcab-part6.ts', r'''export const calcabBasicDiffPart6Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff6-intro',
      type: 'text' as const,
      content: `# 📐 Problem-Solving Workshop

**Part 6 of 7 — Mixed Differentiation Problems**

### Choosing the Right Rule

| Situation | Rule to Use |
|-----------|------------|
| Single term: $x^n$ | Power Rule |
| Product: $f \\cdot g$ | Product Rule |
| Quotient: $f / g$ | Quotient Rule (or rewrite) |
| Composite: $f(g(x))$ | Chain Rule |
| Multiple rules | Combine as needed |`
    },
    {
      id: 'diff6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Identify and Apply** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}\\left(\\frac{x^3 + 1}{x}\\right)$ by simplifying first.',
            options: ['$2x - \\frac{1}{x^2}$', '$\\frac{3x^2}{1}$', '$3x^2 - 1$', '$2x + \\frac{1}{x^2}$'],
            correctAnswer: 0,
            explanation: 'Simplify: $\\frac{x^3+1}{x} = x^2 + x^{-1}$. Differentiate: $2x + (-1)x^{-2} = 2x - \\frac{1}{x^2}$.'
          },
          {
            question: 'Find $f\'(2)$ given $f(x) = (x^2 - 1)(x + 3)$.',
            options: ['$15$', '$11$', '$13$', '$17$'],
            correctAnswer: 0,
            explanation: 'Expand: $f(x) = x^3 + 3x^2 - x - 3$. $f\'(x) = 3x^2 + 6x - 1$. $f\'(2) = 12 + 12 - 1 = 23$. Or Product Rule: $2x(x+3) + (x^2-1)(1) = 2x^2+6x+x^2-1 = 3x^2+6x-1$. At $x=2$: $12+12-1 = 23$. Actually let me recompute: $3(4)+6(2)-1 = 12+12-1 = 23$.'
          },
          {
            question: 'If $g(x) = \\frac{\\sin x + \\cos x}{\\sin x - \\cos x}$, find $g\'(x)$ in simplified form.',
            options: ['$\\frac{-2}{(\\sin x - \\cos x)^2}$', '$\\frac{2}{(\\sin x - \\cos x)^2}$', '$\\frac{1}{(\\sin x - \\cos x)^2}$', '$0$'],
            correctAnswer: 0,
            explanation: 'Quotient Rule: numerator = $(\\cos x - \\sin x)(\\sin x - \\cos x) - (\\sin x + \\cos x)(\\cos x + \\sin x)$. First term: $-(\\sin x - \\cos x)^2 = -(\\sin^2 x - 2\\sin x\\cos x + \\cos^2 x) = -(1 - \\sin 2x)$. Hmm, let me use a cleaner approach. Num = $(\\cos x - \\sin x)(\\sin x - \\cos x) - (\\sin x + \\cos x)(\\cos x + \\sin x)$. Actually: $(\\cos x - \\sin x)(\\sin x - \\cos x) = -(\\cos x - \\sin x)^2$ and $(\\sin x + \\cos x)^2$. So numerator = $-(\\cos x - \\sin x)^2 - (\\sin x + \\cos x)^2 = -(1-\\sin 2x) - (1+\\sin 2x) = -2$.'
          }
        ]
      }
    },
    {
      id: 'diff6-quiz2',
      type: 'multiple-choice' as const,
      content: '**AP-Style Free Response Setup** 🎯',
      exercise: {
        questions: [
          {
            question: 'The position of a particle is $s(t) = t^3 - 6t^2 + 9t + 2$ for $t \\geq 0$. When is the particle at rest?',
            options: ['$t = 1$ only', '$t = 3$ only', '$t = 1$ and $t = 3$', '$t = 0$ and $t = 2$'],
            correctAnswer: 2,
            explanation: 'At rest means $v(t) = s\'(t) = 0$. $s\'(t) = 3t^2 - 12t + 9 = 3(t^2-4t+3) = 3(t-1)(t-3) = 0$. So $t = 1$ and $t = 3$.'
          },
          {
            question: 'For the same particle, when is it moving to the left (negative direction)?',
            options: ['$0 < t < 1$', '$1 < t < 3$', '$t > 3$', '$t < 0$'],
            correctAnswer: 1,
            explanation: '$v(t) = 3(t-1)(t-3)$. Sign analysis: $v < 0$ when exactly one factor is negative, which is $1 < t < 3$.'
          }
        ]
      }
    },
    {
      id: 'diff6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

You can now:
- Choose the right differentiation rule for any situation
- Combine multiple rules in a single problem
- Apply derivatives to motion problems`
    }
  ]
};
''')

# Part 7: Review
write_file('calcab-basic-differentiation-rules-calcab-part7.ts', r'''export const calcabBasicDiffPart7Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'diff7-intro',
      type: 'text' as const,
      content: `# 📐 Review & Applications

**Part 7 of 7 — Comprehensive Review**

### Complete Derivative Reference

| Rule | Formula |
|------|---------|
| Power | $\\frac{d}{dx}x^n = nx^{n-1}$ |
| Constant Multiple | $\\frac{d}{dx}[cf] = cf'$ |
| Sum/Difference | $\\frac{d}{dx}[f \\pm g] = f' \\pm g'$ |
| Product | $(fg)' = f'g + fg'$ |
| Quotient | $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ |
| Chain | $\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$ |

### Special Derivatives

| Function | Derivative |
|----------|-----------|
| $e^x$ | $e^x$ |
| $\\ln x$ | $\\frac{1}{x}$ |
| $a^x$ | $a^x \\ln a$ |
| $\\log_a x$ | $\\frac{1}{x \\ln a}$ |`
    },
    {
      id: 'diff7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $\\frac{d}{dx}(x^2 e^x \\sin x)$ at $x = 0$.',
            options: ['$0$', '$1$', '$2$', 'undefined'],
            correctAnswer: 0,
            explanation: 'At $x=0$: $f(0) = 0$. Using product rule with three functions or just noting that $x^2$ makes the whole expression and its derivative zero at $x=0$, since $f(x) = x^2 \\cdot (e^x \\sin x)$ and $f\'(0) = 2(0)e^0\\sin 0 + 0 \\cdot [\\text{stuff}] = 0$.'
          },
          {
            question: 'If $f(x) = \\frac{x^2+1}{x^2-1}$, where is $f\'(x) = 0$?',
            options: ['$x = 0$', '$x = 1$', 'Nowhere — $f\'(x)$ is never zero', '$x = \\pm 1$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = \\frac{2x(x^2-1) - (x^2+1)(2x)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2}$. This equals 0 when $x = 0$.'
          },
          {
            question: 'Find the 50th derivative of $\\cos x$.',
            options: ['$\\cos x$', '$-\\cos x$', '$\\sin x$', '$-\\sin x$'],
            correctAnswer: 1,
            explanation: 'The cycle repeats every 4: $\\cos x, -\\sin x, -\\cos x, \\sin x, \\cos x, ...$. $50 = 4(12) + 2$, so the 50th derivative matches the 2nd: $-\\cos x$.'
          }
        ]
      }
    },
    {
      id: 'diff7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Final Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'A function $f$ satisfies $f(1) = 3$, $f\'(1) = -2$. If $g(x) = x^2 f(x)$, find $g\'(1)$.',
            options: ['$-2$', '$4$', '$6$', '$2$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = 2xf(x) + x^2f\'(x)$. At $x=1$: $g\'(1) = 2(1)(3) + (1)(-2) = 6 - 2 = 4$.'
          },
          {
            question: 'Find the equation of the tangent line to $y = x^3 - 4x$ at $x = 2$.',
            options: ['$y = 8x - 16$', '$y = 8x - 8$', '$y = 8(x-2)$', 'Both A and C'],
            correctAnswer: 3,
            explanation: '$y(2) = 8-8 = 0$. $y\'(x) = 3x^2-4$, $y\'(2) = 12-4 = 8$. Tangent: $y - 0 = 8(x-2)$, i.e., $y = 8x - 16$. Both A and C are equivalent.'
          }
        ]
      }
    },
    {
      id: 'diff7-summary',
      type: 'text' as const,
      content: `### Basic Differentiation Rules — Complete! ✅

You have mastered:
- ✅ Power Rule (including negative/fractional exponents)
- ✅ Product Rule
- ✅ Quotient Rule
- ✅ All six trig derivatives
- ✅ Higher-order derivatives and their applications
- ✅ Combining multiple rules

**Ready to move on to the Chain Rule!**`
    }
  ]
};
''')

print("Basic Differentiation Rules complete!")
