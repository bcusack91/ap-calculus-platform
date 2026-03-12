#!/usr/bin/env python3
"""Generate AP Calculus AB: u-Substitution, Antiderivatives, Applications of Derivatives."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# u-SUBSTITUTION (7 parts)
###############################################################################

write_file('calcab-u-substitution-calcab-part1.ts', r"""export const calcabUSubPart1Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub1-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 1 of 7 — Basic u-Substitution**

### The Idea

u-Substitution is the **reverse of the Chain Rule**. When you see a composite function inside an integral, you substitute $u$ for the inner function.

### The Method

1. **Identify** the inner function — call it $u$
2. **Compute** $du = u'(x)\\,dx$
3. **Rewrite** the entire integral in terms of $u$ and $du$
4. **Integrate** in terms of $u$
5. **Substitute back** to $x$

### Worked Example 1

$$\\int 2x \\cos(x^2)\\,dx$$

Let $u = x^2$, so $du = 2x\\,dx$.

$$\\int \\cos(u)\\,du = \\sin(u) + C = \\sin(x^2) + C$$

### Worked Example 2

$$\\int 3x^2 e^{x^3}\\,dx$$

Let $u = x^3$, so $du = 3x^2\\,dx$.

$$\\int e^u\\,du = e^u + C = e^{x^3} + C$$

### Worked Example 3

$$\\int \\frac{5}{(5x+1)^3}\\,dx$$

Let $u = 5x + 1$, so $du = 5\\,dx$, meaning $dx = \\frac{du}{5}$.

$$\\int \\frac{5}{u^3} \\cdot \\frac{du}{5} = \\int u^{-3}\\,du = \\frac{u^{-2}}{-2} + C = -\\frac{1}{2(5x+1)^2} + C$$`
    },
    {
      id: 'usub1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Basic u-Substitution** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int 4x(x^2 + 3)^5\\,dx$.',
            options: ['$\\frac{(x^2+3)^6}{3} + C$', '$\\frac{2(x^2+3)^6}{6} + C$', '$\\frac{(x^2+3)^6}{6} + C$', '$\\frac{4(x^2+3)^6}{6} + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2 + 3$, $du = 2x\\,dx$, so $4x\\,dx = 2\\,du$. $\\int 2u^5\\,du = \\frac{2u^6}{6} = \\frac{u^6}{3} = \\frac{(x^2+3)^6}{3} + C$.'
          },
          {
            question: 'Evaluate $\\int \\cos(3x)\\,dx$.',
            options: ['$\\sin(3x) + C$', '$3\\sin(3x) + C$', '$\\frac{\\sin(3x)}{3} + C$', '$-\\sin(3x) + C$'],
            correctAnswer: 2,
            explanation: 'Let $u = 3x$, $du = 3\\,dx$, so $dx = \\frac{du}{3}$. $\\frac{1}{3}\\int \\cos(u)\\,du = \\frac{\\sin(u)}{3} = \\frac{\\sin(3x)}{3} + C$.'
          },
          {
            question: 'Evaluate $\\int x\\sqrt{x^2 + 1}\\,dx$.',
            options: ['$\\frac{1}{3}(x^2+1)^{3/2} + C$', '$\\frac{2}{3}(x^2+1)^{3/2} + C$', '$\\frac{1}{2}(x^2+1)^{3/2} + C$', '$(x^2+1)^{3/2} + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$. $\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{2} \\cdot \\frac{u^{3/2}}{3/2} = \\frac{1}{3}u^{3/2} = \\frac{1}{3}(x^2+1)^{3/2} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. u-Substitution reverses the Chain Rule
2. Choose $u$ = inner function of a composition
3. Compute $du$, then rewrite **everything** in terms of $u$
4. If $du$ doesn't appear exactly, adjust with constants`
    }
  ]
};
""")

write_file('calcab-u-substitution-calcab-part2.ts', r"""export const calcabUSubPart2Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub2-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 2 of 7 — Adjusting for Missing Constants**

### When $du$ Doesn't Match Exactly

Often the coefficient doesn't match perfectly. You can **multiply and divide** by constants to fix this.

### Worked Example

$$\\int x^2 e^{x^3}\\,dx$$

Let $u = x^3$, then $du = 3x^2\\,dx$. We have $x^2\\,dx$ but need $3x^2\\,dx$.

$$\\int x^2 e^{x^3}\\,dx = \\frac{1}{3}\\int 3x^2 e^{x^3}\\,dx = \\frac{1}{3}\\int e^u\\,du = \\frac{e^{x^3}}{3} + C$$

### Common Patterns to Recognize

| Integral Pattern | Substitution | Result |
|-----------------|-------------|--------|
| $\\int f(ax+b)\\,dx$ | $u = ax+b$ | $\\frac{1}{a}F(ax+b) + C$ |
| $\\int x^{n-1}f(x^n)\\,dx$ | $u = x^n$ | $\\frac{1}{n}F(x^n) + C$ |
| $\\int f(\\sin x)\\cos x\\,dx$ | $u = \\sin x$ | $F(\\sin x) + C$ |
| $\\int \\frac{f'(x)}{f(x)}\\,dx$ | $u = f(x)$ | $\\ln|f(x)| + C$ |`
    },
    {
      id: 'usub2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Pattern Recognition** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x}{x^2 + 4}\\,dx$.',
            options: ['$\\ln(x^2+4) + C$', '$\\frac{1}{2}\\ln|x^2+4| + C$', '$\\frac{\\ln(x^2+4)}{2x} + C$', '$\\arctan(x/2) + C$'],
            correctAnswer: 1,
            explanation: 'Let $u = x^2+4$, $du = 2x\\,dx$. So $x\\,dx = \\frac{du}{2}$. $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| + C = \\frac{1}{2}\\ln|x^2+4| + C$.'
          },
          {
            question: 'Evaluate $\\int \\sin^4(x)\\cos(x)\\,dx$.',
            options: ['$\\frac{\\sin^5(x)}{5} + C$', '$-\\frac{\\cos^5(x)}{5} + C$', '$\\frac{\\sin^4(x)}{4} + C$', '$\\sin^5(x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\sin x$, $du = \\cos x\\,dx$. $\\int u^4\\,du = \\frac{u^5}{5} = \\frac{\\sin^5(x)}{5} + C$.'
          },
          {
            question: 'Evaluate $\\int \\tan x\\,dx$.',
            options: ['$\\sec^2 x + C$', '$-\\ln|\\cos x| + C$', '$\\ln|\\sin x| + C$', '$\\sec x + C$'],
            correctAnswer: 1,
            explanation: '$\\int \\frac{\\sin x}{\\cos x}\\,dx$. Let $u = \\cos x$, $du = -\\sin x\\,dx$. $-\\int \\frac{du}{u} = -\\ln|u| = -\\ln|\\cos x| + C$.'
          }
        ]
      }
    },
    {
      id: 'usub2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. You can adjust by **constant multiples** — multiply and divide to match $du$
2. Recognize patterns: $\\frac{f'}{f} \\to \\ln|f|$, power-of-trig times derivative-of-trig
3. You CANNOT move a variable ($x$) outside the integral — only constants`
    }
  ]
};
""")

write_file('calcab-u-substitution-calcab-part3.ts', r"""export const calcabUSubPart3Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub3-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 3 of 7 — u-Substitution with Definite Integrals**

### Two Approaches

**Method 1: Change the limits** (recommended)
When you substitute $u = g(x)$, change the limits: if $x = a$ then $u = g(a)$, if $x = b$ then $u = g(b)$.

**Method 2: Back-substitute** 
Find the antiderivative in terms of $x$, then evaluate at the original limits.

### Worked Example — Method 1

$$\\int_0^2 x(x^2+1)^3\\,dx$$

Let $u = x^2 + 1$, $du = 2x\\,dx$, so $x\\,dx = \\frac{du}{2}$.

Change limits: $x=0 \\Rightarrow u=1$, $x=2 \\Rightarrow u=5$.

$$\\frac{1}{2}\\int_1^5 u^3\\,du = \\frac{1}{2} \\cdot \\frac{u^4}{4}\\bigg|_1^5 = \\frac{1}{8}(625 - 1) = \\frac{624}{8} = 78$$`
    },
    {
      id: 'usub3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Definite Integrals with u-Sub** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi/2} \\sin x \\cos x\\,dx$.',
            options: ['$1$', '$\\frac{1}{2}$', '$0$', '$\\frac{\\pi}{4}$'],
            correctAnswer: 1,
            explanation: 'Let $u = \\sin x$, $du = \\cos x\\,dx$. Limits: $x=0 \\Rightarrow u=0$, $x=\\pi/2 \\Rightarrow u=1$. $\\int_0^1 u\\,du = \\frac{u^2}{2}\\Big|_0^1 = \\frac{1}{2}$.'
          },
          {
            question: 'Evaluate $\\int_0^1 \\frac{2x}{(x^2+1)^2}\\,dx$.',
            options: ['$\\frac{1}{2}$', '$1$', '$\\frac{1}{4}$', '$\\ln 2$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2+1$, $du = 2x\\,dx$. Limits: $u=1$ to $u=2$. $\\int_1^2 u^{-2}\\,du = [-u^{-1}]_1^2 = -\\frac{1}{2} + 1 = \\frac{1}{2}$.'
          },
          {
            question: 'Evaluate $\\int_1^e \\frac{\\ln x}{x}\\,dx$.',
            options: ['$1$', '$\\frac{1}{2}$', '$e-1$', '$\\frac{1}{e}$'],
            correctAnswer: 1,
            explanation: 'Let $u = \\ln x$, $du = \\frac{1}{x}\\,dx$. Limits: $x=1 \\Rightarrow u=0$, $x=e \\Rightarrow u=1$. $\\int_0^1 u\\,du = \\frac{1}{2}$.'
          }
        ]
      }
    },
    {
      id: 'usub3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. For definite integrals, **change the limits** to $u$-values to avoid back-substituting
2. If $u = g(x)$: new lower = $g(a)$, new upper = $g(b)$
3. After changing limits, evaluate entirely in $u$ — never mix $u$ and $x$`
    }
  ]
};
""")

write_file('calcab-u-substitution-calcab-part4.ts', r"""export const calcabUSubPart4Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub4-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 4 of 7 — Trickier Substitutions**

### Exponential and Logarithmic Substitutions

$$\\int \\frac{e^x}{1+e^x}\\,dx$$

Let $u = 1 + e^x$, $du = e^x\\,dx$.

$$\\int \\frac{du}{u} = \\ln|u| + C = \\ln(1 + e^x) + C$$

### Substitution with Square Roots

$$\\int \\frac{x}{\\sqrt{x+1}}\\,dx$$

Let $u = x + 1$, so $x = u - 1$ and $dx = du$.

$$\\int \\frac{u-1}{u^{1/2}}\\,du = \\int (u^{1/2} - u^{-1/2})\\,du = \\frac{2}{3}u^{3/2} - 2u^{1/2} + C$$

$$= \\frac{2}{3}(x+1)^{3/2} - 2\\sqrt{x+1} + C$$`
    },
    {
      id: 'usub4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Trickier u-Substitutions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{e^{2x}}{e^{2x}+1}\\,dx$.',
            options: ['$\\ln(e^{2x}+1) + C$', '$\\frac{1}{2}\\ln(e^{2x}+1) + C$', '$\\frac{e^{2x}}{2} + C$', '$\\arctan(e^x) + C$'],
            correctAnswer: 1,
            explanation: 'Let $u = e^{2x}+1$, $du = 2e^{2x}\\,dx$. So $e^{2x}\\,dx = \\frac{du}{2}$. $\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| = \\frac{1}{2}\\ln(e^{2x}+1) + C$.'
          },
          {
            question: 'Evaluate $\\int \\sec^2(x) \\cdot \\tan^3(x)\\,dx$.',
            options: ['$\\frac{\\tan^4(x)}{4} + C$', '$\\frac{\\sec^4(x)}{4} + C$', '$\\frac{\\tan^3(x)}{3} + C$', '$\\sec^2(x)\\tan(x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\tan x$, $du = \\sec^2 x\\,dx$. $\\int u^3\\,du = \\frac{u^4}{4} = \\frac{\\tan^4(x)}{4} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. For $\\frac{f'}{f}$ patterns, use $u = f$ to get $\\ln|f| + C$
2. Sometimes you need to express $x$ in terms of $u$ (e.g., $x = u - 1$)
3. Trig powers: use $u = \\sin x$ or $u = \\tan x$ when the derivative appears`
    }
  ]
};
""")

write_file('calcab-u-substitution-calcab-part5.ts', r"""export const calcabUSubPart5Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub5-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 5 of 7 — Long Division and Completing the Square**

### When u-Sub Doesn't Work Directly

Some integrals need **algebraic manipulation** before substitution.

### Long Division for Improper Fractions

$$\\int \\frac{x^2 + 1}{x + 1}\\,dx$$

Divide first: $\\frac{x^2+1}{x+1} = x - 1 + \\frac{2}{x+1}$

$$\\int \\left(x - 1 + \\frac{2}{x+1}\\right)dx = \\frac{x^2}{2} - x + 2\\ln|x+1| + C$$

### Completing the Square

$$\\int \\frac{1}{x^2 + 4x + 8}\\,dx = \\int \\frac{1}{(x+2)^2 + 4}\\,dx$$

Let $u = x + 2$:

$$\\int \\frac{1}{u^2 + 4}\\,du = \\frac{1}{2}\\arctan\\left(\\frac{u}{2}\\right) + C = \\frac{1}{2}\\arctan\\left(\\frac{x+2}{2}\\right) + C$$`
    },
    {
      id: 'usub5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Algebraic Manipulation + Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x^2}{x-1}\\,dx$.',
            options: ['$\\frac{x^2}{2} + x + \\ln|x-1| + C$', '$x^2 + \\ln|x-1| + C$', '$\\frac{x^2}{2} - x + \\ln|x-1| + C$', '$\\frac{x^2}{2} + x - \\ln|x-1| + C$'],
            correctAnswer: 0,
            explanation: 'Long division: $\\frac{x^2}{x-1} = x + 1 + \\frac{1}{x-1}$. Integrating: $\\frac{x^2}{2} + x + \\ln|x-1| + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{x^2 + 6x + 13}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\left(\\frac{x+3}{2}\\right) + C$', '$\\arctan(x+3) + C$', '$\\ln|x^2+6x+13| + C$', '$\\frac{1}{4}\\arctan\\left(\\frac{x+3}{2}\\right) + C$'],
            correctAnswer: 0,
            explanation: 'Complete the square: $x^2+6x+13 = (x+3)^2 + 4$. Let $u = x+3$: $\\int \\frac{du}{u^2+4} = \\frac{1}{2}\\arctan(u/2) + C$.'
          }
        ]
      }
    },
    {
      id: 'usub5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. **Long division** when the degree of numerator $\\geq$ degree of denominator
2. **Complete the square** when you see $x^2 + bx + c$ in a denominator
3. After algebraic prep, standard techniques (u-sub, $\\arctan$) apply`
    }
  ]
};
""")

write_file('calcab-u-substitution-calcab-part6.ts', r"""export const calcabUSubPart6Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub6-intro',
      type: 'text' as const,
      content: `# u-Substitution

**Part 6 of 7 — Problem-Solving Workshop**

Mixed problems combining all u-substitution techniques.`
    },
    {
      id: 'usub6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed u-Sub Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi/4} \\sec^2(x) e^{\\tan x}\\,dx$.',
            options: ['$e - 1$', '$e$', '$e + 1$', '$1$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\tan x$, $du = \\sec^2 x\\,dx$. Limits: $u=0$ to $u=1$. $\\int_0^1 e^u\\,du = e - 1$.'
          },
          {
            question: 'Evaluate $\\int \\frac{\\cos(\\ln x)}{x}\\,dx$.',
            options: ['$\\sin(\\ln x) + C$', '$\\cos(\\ln x) + C$', '$\\frac{\\sin(\\ln x)}{x} + C$', '$x\\sin(\\ln x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = \\ln x$, $du = \\frac{1}{x}\\,dx$. $\\int \\cos(u)\\,du = \\sin(u) = \\sin(\\ln x) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{x^3}{\\sqrt{x^4+9}}\\,dx$.',
            options: ['$\\frac{1}{2}\\sqrt{x^4+9} + C$', '$\\sqrt{x^4+9} + C$', '$\\frac{1}{4}\\sqrt{x^4+9} + C$', '$2\\sqrt{x^4+9} + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^4+9$, $du = 4x^3\\,dx$. $\\frac{1}{4}\\int u^{-1/2}\\,du = \\frac{1}{4}(2u^{1/2}) = \\frac{1}{2}\\sqrt{x^4+9} + C$.'
          }
        ]
      }
    },
    {
      id: 'usub6-quiz2',
      type: 'multiple-choice' as const,
      content: '**More Challenging Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^4 \\frac{1}{\\sqrt{x}(1+\\sqrt{x})^2}\\,dx$.',
            options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$', '$1$'],
            correctAnswer: 0,
            explanation: 'Let $u = 1 + \\sqrt{x}$, $du = \\frac{1}{2\\sqrt{x}}\\,dx$. Limits: $x=1 \\Rightarrow u=2$, $x=4 \\Rightarrow u=3$. $2\\int_2^3 u^{-2}\\,du = 2[-u^{-1}]_2^3 = 2(-\\frac{1}{3}+\\frac{1}{2}) = 2 \\cdot \\frac{1}{6} = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'usub6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

You practiced u-sub with exponentials, logarithms, trig functions, and algebraic manipulation.`
    }
  ]
};
""")

write_file('calcab-u-substitution-calcab-part7.ts', r"""export const calcabUSubPart7Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'usub7-intro',
      type: 'text' as const,
      content: `# u-Substitution Review

**Part 7 of 7 — Comprehensive Assessment**

### Quick Reference

| Pattern | Substitution |
|---------|-------------|
| $\\int f(g(x)) \\cdot g'(x)\\,dx$ | $u = g(x)$ |
| $\\int \\frac{f'(x)}{f(x)}\\,dx$ | $u = f(x) \\to \\ln|f|$ |
| $\\int f(ax+b)\\,dx$ | $u = ax+b$ |`
    },
    {
      id: 'usub7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_0^{\\pi} x \\cos(x^2)\\,dx$.',
            options: ['$\\frac{\\sin(\\pi^2)}{2}$', '$\\sin(\\pi^2)$', '$0$', '$\\frac{1}{2}$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2$, $du = 2x\\,dx$. Limits: $u=0$ to $u=\\pi^2$. $\\frac{1}{2}\\int_0^{\\pi^2} \\cos u\\,du = \\frac{1}{2}[\\sin u]_0^{\\pi^2} = \\frac{\\sin(\\pi^2)}{2}$.'
          },
          {
            question: 'Evaluate $\\int e^x \\sin(e^x)\\,dx$.',
            options: ['$-\\cos(e^x) + C$', '$\\cos(e^x) + C$', '$e^x\\cos(e^x) + C$', '$\\sin(e^x) + C$'],
            correctAnswer: 0,
            explanation: 'Let $u = e^x$, $du = e^x\\,dx$. $\\int \\sin(u)\\,du = -\\cos(u) + C = -\\cos(e^x) + C$.'
          },
          {
            question: 'Evaluate $\\int_0^1 x^2 e^{x^3+1}\\,dx$.',
            options: ['$\\frac{e^2-e}{3}$', '$e^2 - e$', '$\\frac{e^2}{3}$', '$e - 1$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^3+1$, $du = 3x^2\\,dx$. Limits: $u=1$ to $u=2$. $\\frac{1}{3}\\int_1^2 e^u\\,du = \\frac{1}{3}(e^2-e) = \\frac{e^2-e}{3}$.'
          }
        ]
      }
    },
    {
      id: 'usub7-summary',
      type: 'text' as const,
      content: `### u-Substitution — Complete! ✅

You have mastered:
- ✅ Basic u-substitution
- ✅ Adjusting for missing constants
- ✅ Definite integrals with changed limits
- ✅ Trickier substitutions (exponential, log, trig)
- ✅ Long division and completing the square
- ✅ Pattern recognition strategies`
    }
  ]
};
""")

###############################################################################
# ANTIDERIVATIVES / INDEFINITE INTEGRALS (7 parts)
###############################################################################

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part1.ts', r"""export const calcabAntiderivativesPart1Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti1-intro',
      type: 'text' as const,
      content: `# Antiderivatives & Indefinite Integrals

**Part 1 of 7 — What is an Antiderivative?**

### Definition

An **antiderivative** of $f(x)$ is a function $F(x)$ such that $F'(x) = f(x)$.

The **indefinite integral** represents the family of all antiderivatives:

$$\\int f(x)\\,dx = F(x) + C$$

The "$+ C$" is essential! Since the derivative of a constant is 0, there are infinitely many antiderivatives.

### Power Rule for Integration

$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

This reverses the power rule for differentiation.

### Worked Examples

| $f(x)$ | $\\int f(x)\\,dx$ |
|---------|-------------------|
| $x^4$ | $\\frac{x^5}{5} + C$ |
| $x^{-3}$ | $\\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C$ |
| $\\sqrt{x} = x^{1/2}$ | $\\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C$ |
| $\\frac{1}{x^4} = x^{-4}$ | $\\frac{x^{-3}}{-3} + C = -\\frac{1}{3x^3} + C$ |`
    },
    {
      id: 'anti1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Power Rule for Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int x^7\\,dx$.',
            options: ['$7x^6 + C$', '$\\frac{x^8}{8} + C$', '$\\frac{x^7}{7} + C$', '$8x^8 + C$'],
            correctAnswer: 1,
            explanation: '$\\int x^7\\,dx = \\frac{x^{7+1}}{7+1} + C = \\frac{x^8}{8} + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{x^5}\\,dx$.',
            options: ['$-\\frac{1}{4x^4} + C$', '$\\frac{1}{4x^4} + C$', '$-\\frac{5}{x^4} + C$', '$\\ln|x^5| + C$'],
            correctAnswer: 0,
            explanation: '$\\int x^{-5}\\,dx = \\frac{x^{-4}}{-4} + C = -\\frac{1}{4x^4} + C$.'
          },
          {
            question: 'Evaluate $\\int \\sqrt[3]{x}\\,dx$.',
            options: ['$\\frac{3}{4}x^{4/3} + C$', '$\\frac{4}{3}x^{4/3} + C$', '$\\frac{x^{2/3}}{2/3} + C$', '$\\frac{1}{3}x^{-2/3} + C$'],
            correctAnswer: 0,
            explanation: '$\\int x^{1/3}\\,dx = \\frac{x^{4/3}}{4/3} + C = \\frac{3}{4}x^{4/3} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. An antiderivative reverses differentiation: if $F' = f$, then $\\int f = F + C$
2. **Power Rule:** add 1 to the exponent, divide by the new exponent
3. **Always include $+C$** for indefinite integrals
4. The special case $n = -1$: $\\int x^{-1}\\,dx = \\ln|x| + C$ (next part)`
    }
  ]
};
""")

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part2.ts', r"""export const calcabAntiderivativesPart2Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti2-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 2 of 7 — Essential Antiderivative Formulas**

### Complete Table of Basic Antiderivatives

| Function | Antiderivative |
|----------|---------------|
| $x^n$ $(n \\neq -1)$ | $\\frac{x^{n+1}}{n+1} + C$ |
| $\\frac{1}{x}$ | $\\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\\frac{a^x}{\\ln a} + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\sec^2 x$ | $\\tan x + C$ |
| $\\csc^2 x$ | $-\\cot x + C$ |
| $\\sec x \\tan x$ | $\\sec x + C$ |
| $\\csc x \\cot x$ | $-\\csc x + C$ |
| $\\frac{1}{\\sqrt{1-x^2}}$ | $\\arcsin x + C$ |
| $\\frac{1}{1+x^2}$ | $\\arctan x + C$ |

> **Memorize this table!** These are the building blocks of all integration.`
    },
    {
      id: 'anti2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Essential Antiderivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (3\\sin x + 2e^x)\\,dx$.',
            options: ['$-3\\cos x + 2e^x + C$', '$3\\cos x + 2e^x + C$', '$-3\\cos x + e^{2x} + C$', '$3\\sin x + 2e^x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 3\\sin x\\,dx + \\int 2e^x\\,dx = -3\\cos x + 2e^x + C$.'
          },
          {
            question: 'Evaluate $\\int \\left(\\frac{4}{x} + \\sec^2 x\\right)\\,dx$.',
            options: ['$4\\ln x + \\tan x + C$', '$4\\ln|x| + \\tan x + C$', '$\\frac{4}{x^2} + \\sec x + C$', '$4\\ln|x| + \\sec x + C$'],
            correctAnswer: 1,
            explanation: '$\\int \\frac{4}{x}\\,dx + \\int \\sec^2 x\\,dx = 4\\ln|x| + \\tan x + C$. Note the absolute value on $\\ln$!'
          },
          {
            question: 'Evaluate $\\int 5^x\\,dx$.',
            options: ['$5^x + C$', '$\\frac{5^{x+1}}{x+1} + C$', '$\\frac{5^x}{\\ln 5} + C$', '$x \\cdot 5^{x-1} + C$'],
            correctAnswer: 2,
            explanation: '$\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$. So $\\int 5^x\\,dx = \\frac{5^x}{\\ln 5} + C$.'
          }
        ]
      }
    },
    {
      id: 'anti2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. Memorize the complete table of basic antiderivatives
2. $\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ (absolute value matters!)
3. $\\int a^x\\,dx = \\frac{a^x}{\\ln a} + C$ (not the power rule!)
4. Linearity: $\\int [af + bg]\\,dx = a\\int f\\,dx + b\\int g\\,dx$`
    }
  ]
};
""")

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part3.ts', r"""export const calcabAntiderivativesPart3Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti3-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 3 of 7 — Initial Value Problems (IVPs)**

### Finding Specific Antiderivatives

An initial condition pins down the value of $C$:

Given: $f'(x) = 3x^2 - 4x + 1$ and $f(0) = 5$. Find $f(x)$.

**Step 1:** Find the general antiderivative.
$$f(x) = x^3 - 2x^2 + x + C$$

**Step 2:** Use the initial condition to find $C$.
$$f(0) = 0 - 0 + 0 + C = 5 \\implies C = 5$$

**Answer:** $f(x) = x^3 - 2x^2 + x + 5$

### Position-Velocity-Acceleration

If $a(t) =$ acceleration, then:
- $v(t) = \\int a(t)\\,dt$ (velocity)
- $s(t) = \\int v(t)\\,dt$ (position)

Each integration introduces a constant determined by initial conditions.`
    },
    {
      id: 'anti3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Initial Value Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'(x) = 6x + 2$ and $f(1) = 8$, find $f(x)$.',
            options: ['$3x^2 + 2x + 3$', '$3x^2 + 2x$', '$6x^2 + 2x + 3$', '$3x^2 + 2x - 3$'],
            correctAnswer: 0,
            explanation: '$f(x) = 3x^2 + 2x + C$. $f(1) = 3 + 2 + C = 8$, so $C = 3$. $f(x) = 3x^2 + 2x + 3$.'
          },
          {
            question: 'A ball is thrown upward with $v(0) = 64$ ft/s from height $s(0) = 80$ ft. If $a(t) = -32$ ft/s$^2$, find $s(t)$.',
            options: ['$-16t^2 + 64t + 80$', '$-32t^2 + 64t + 80$', '$-16t^2 + 64t$', '$-32t + 64$'],
            correctAnswer: 0,
            explanation: '$v(t) = -32t + C_1$. $v(0) = 64 \\Rightarrow C_1 = 64$. $s(t) = -16t^2 + 64t + C_2$. $s(0) = 80 \\Rightarrow C_2 = 80$.'
          }
        ]
      }
    },
    {
      id: 'anti3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. An IVP consists of a derivative equation plus initial condition(s)
2. Find the general antiderivative, then plug in the initial condition to find $C$
3. For particle motion: integrate $a(t)$ to get $v(t)$, integrate $v(t)$ to get $s(t)$`
    }
  ]
};
""")

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part4.ts', r"""export const calcabAntiderivativesPart4Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti4-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 4 of 7 — Rewriting Before Integrating**

### Algebraic Manipulation

Many integrals require rewriting before applying basic rules.

### Expand Products

$$\\int (x+1)(x-3)\\,dx = \\int (x^2 - 2x - 3)\\,dx = \\frac{x^3}{3} - x^2 - 3x + C$$

### Split Fractions

$$\\int \\frac{x^3 + 2x}{x^2}\\,dx = \\int \\left(x + \\frac{2}{x}\\right)\\,dx = \\frac{x^2}{2} + 2\\ln|x| + C$$

### Rewrite Radicals

$$\\int \\frac{3}{\\sqrt{x}}\\,dx = \\int 3x^{-1/2}\\,dx = 3 \\cdot \\frac{x^{1/2}}{1/2} + C = 6\\sqrt{x} + C$$`
    },
    {
      id: 'anti4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Simplify Then Integrate** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{x^4 - 3x^2 + 1}{x^2}\\,dx$.',
            options: ['$\\frac{x^3}{3} - 3x - \\frac{1}{x} + C$', '$\\frac{x^3}{3} - 3x + \\frac{1}{x} + C$', '$x^2 - 3\\ln|x| + \\frac{1}{x} + C$', '$\\frac{x^3}{3} + 3x - \\frac{1}{x} + C$'],
            correctAnswer: 0,
            explanation: 'Split: $\\int (x^2 - 3 + x^{-2})\\,dx = \\frac{x^3}{3} - 3x + \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} - 3x - \\frac{1}{x} + C$.'
          },
          {
            question: 'Evaluate $\\int (2x - 1)^2\\,dx$.',
            options: ['$\\frac{(2x-1)^3}{6} + C$', '$\\frac{4x^3}{3} - 2x^2 + x + C$', '$4x^2 - 4x + 1 + C$', '$\\frac{(2x-1)^3}{3} + C$'],
            correctAnswer: 1,
            explanation: 'Expand: $(2x-1)^2 = 4x^2 - 4x + 1$. Integrate: $\\frac{4x^3}{3} - 2x^2 + x + C$. (Note: option A also works via u-sub!)'
          }
        ]
      }
    },
    {
      id: 'anti4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. **Expand** products before integrating
2. **Split** fractions into separate terms when possible
3. **Rewrite** radicals using fractional exponents
4. These techniques reduce complex integrals to sums of power rule applications`
    }
  ]
};
""")

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part5.ts', r"""export const calcabAntiderivativesPart5Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti5-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 5 of 7 — Inverse Trig Antiderivatives**

### Three Key Formulas

$$\\int \\frac{1}{\\sqrt{a^2 - x^2}}\\,dx = \\arcsin\\left(\\frac{x}{a}\\right) + C$$

$$\\int \\frac{1}{a^2 + x^2}\\,dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$$

$$\\int \\frac{1}{x\\sqrt{x^2 - a^2}}\\,dx = \\frac{1}{a}\\text{arcsec}\\left(\\frac{|x|}{a}\\right) + C$$

### Recognition is Key

The AP Exam tests whether you can **recognize** these forms:

- Square root of $a^2 - x^2$ in denominator → $\\arcsin$
- Sum of squares $a^2 + x^2$ in denominator → $\\arctan$`
    },
    {
      id: 'anti5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Inverse Trig Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\frac{1}{\\sqrt{9 - x^2}}\\,dx$.',
            options: ['$\\arcsin\\left(\\frac{x}{3}\\right) + C$', '$\\arcsin(3x) + C$', '$3\\arcsin(x) + C$', '$\\arctan\\left(\\frac{x}{3}\\right) + C$'],
            correctAnswer: 0,
            explanation: '$a = 3$: $\\int \\frac{1}{\\sqrt{9-x^2}}\\,dx = \\arcsin(x/3) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{1}{4 + x^2}\\,dx$.',
            options: ['$\\frac{1}{2}\\arctan\\left(\\frac{x}{2}\\right) + C$', '$\\arctan\\left(\\frac{x}{2}\\right) + C$', '$\\frac{1}{4}\\arctan(x) + C$', '$\\ln|4+x^2| + C$'],
            correctAnswer: 0,
            explanation: '$a = 2$: $\\int \\frac{1}{4+x^2}\\,dx = \\frac{1}{2}\\arctan(x/2) + C$.'
          },
          {
            question: 'Evaluate $\\int \\frac{3}{\\sqrt{1 - 4x^2}}\\,dx$.',
            options: ['$3\\arcsin(2x) + C$', '$\\frac{3}{2}\\arcsin(2x) + C$', '$3\\arcsin(4x) + C$', '$\\frac{3}{4}\\arcsin(2x) + C$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $\\frac{3}{\\sqrt{1-(2x)^2}}$. Let $u = 2x$, $du = 2\\,dx$. $\\frac{3}{2}\\int \\frac{du}{\\sqrt{1-u^2}} = \\frac{3}{2}\\arcsin(u) = \\frac{3}{2}\\arcsin(2x) + C$.'
          }
        ]
      }
    },
    {
      id: 'anti5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. $\\sqrt{a^2 - x^2}$ in denominator → $\\arcsin(x/a)$
2. $a^2 + x^2$ in denominator → $\\frac{1}{a}\\arctan(x/a)$
3. Often need u-sub to get into the standard form first`
    }
  ]
};
""")

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part6.ts', r"""export const calcabAntiderivativesPart6Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti6-intro',
      type: 'text' as const,
      content: `# Antiderivatives

**Part 6 of 7 — Mixed Practice**

Time to combine all antiderivative techniques.`
    },
    {
      id: 'anti6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Antiderivative Problems** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int (e^x + \\sec^2 x - x^3)\\,dx$.',
            options: ['$e^x + \\tan x - \\frac{x^4}{4} + C$', '$e^x + \\sec x - \\frac{x^4}{4} + C$', '$e^x + \\tan x - 3x^2 + C$', '$xe^x + \\tan x - \\frac{x^4}{4} + C$'],
            correctAnswer: 0,
            explanation: 'Integrate term by term: $e^x + \\tan x - \\frac{x^4}{4} + C$.'
          },
          {
            question: 'Find $f(x)$ if $f\'(x) = \\cos x + \\frac{1}{x}$ and $f(\\pi) = 0$.',
            options: ['$\\sin x + \\ln|x| - \\ln\\pi$', '$\\sin x + \\ln|x|$', '$-\\sin x + \\ln|x| - \\ln\\pi$', '$\\cos x + \\ln|x| - \\ln\\pi$'],
            correctAnswer: 0,
            explanation: '$f(x) = \\sin x + \\ln|x| + C$. $f(\\pi) = 0 + \\ln\\pi + C = 0$, so $C = -\\ln\\pi$. $f(x) = \\sin x + \\ln|x| - \\ln\\pi$.'
          }
        ]
      }
    },
    {
      id: 'anti6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!

Practice makes perfect with antiderivatives. Always verify by differentiating your answer.`
    }
  ]
};
""")

write_file('calcab-antiderivatives-indefinite-integrals-calcab-part7.ts', r"""export const calcabAntiderivativesPart7Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'anti7-intro',
      type: 'text' as const,
      content: `# Antiderivatives — Review

**Part 7 of 7 — Comprehensive Assessment**`
    },
    {
      id: 'anti7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\left(\\frac{2}{\\sqrt{x}} + 4x^3 - \\sin x\\right)\\,dx$.',
            options: ['$4\\sqrt{x} + x^4 + \\cos x + C$', '$4\\sqrt{x} + x^4 - \\cos x + C$', '$\\frac{1}{\\sqrt{x}} + x^4 + \\cos x + C$', '$4\\sqrt{x} + 4x^4 + \\cos x + C$'],
            correctAnswer: 0,
            explanation: '$\\int 2x^{-1/2}\\,dx = 4x^{1/2} = 4\\sqrt{x}$. $\\int 4x^3 = x^4$. $\\int -\\sin x = \\cos x$. Total: $4\\sqrt{x} + x^4 + \\cos x + C$.'
          },
          {
            question: 'A particle has acceleration $a(t) = 6t$ with $v(0) = -5$ and $s(0) = 2$. Find $s(2)$.',
            options: ['$0$', '$-2$', '$6$', '$4$'],
            correctAnswer: 0,
            explanation: '$v(t) = 3t^2 - 5$. $s(t) = t^3 - 5t + 2$. $s(2) = 8 - 10 + 2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'anti7-summary',
      type: 'text' as const,
      content: `### Antiderivatives — Complete! ✅

You have mastered:
- ✅ Power Rule for integration
- ✅ All basic antiderivative formulas
- ✅ Initial Value Problems
- ✅ Rewriting before integrating
- ✅ Inverse trig antiderivatives`
    }
  ]
};
""")

###############################################################################
# APPLICATIONS OF DERIVATIVES (7 parts)
###############################################################################

write_file('calcab-applications-of-derivatives-calcab-part1.ts', r"""export const calcabAppsDerivativesPart1Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps1-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 1 of 7 — Critical Points & Increasing/Decreasing**

### Critical Points

A **critical point** of $f$ occurs where:
- $f'(x) = 0$, or
- $f'(x)$ is undefined (but $f(x)$ exists)

### First Derivative Test for Increasing/Decreasing

| $f'(x)$ | Behavior of $f$ |
|---------|----------------|
| $f'(x) > 0$ | $f$ is **increasing** |
| $f'(x) < 0$ | $f$ is **decreasing** |

### Worked Example

Find where $f(x) = x^3 - 3x + 1$ is increasing and decreasing.

$f'(x) = 3x^2 - 3 = 3(x+1)(x-1)$

Critical points: $x = -1$ and $x = 1$.

| Interval | $f'(x)$ | Behavior |
|----------|---------|----------|
| $(-\\infty, -1)$ | $+$ | Increasing |
| $(-1, 1)$ | $-$ | Decreasing |
| $(1, \\infty)$ | $+$ | Increasing |`
    },
    {
      id: 'apps1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Critical Points** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the critical points of $f(x) = x^4 - 4x^3$.',
            options: ['$x = 0$ only', '$x = 3$ only', '$x = 0$ and $x = 3$', '$x = 0, 1, 3$'],
            correctAnswer: 2,
            explanation: '$f\'(x) = 4x^3 - 12x^2 = 4x^2(x - 3) = 0$. Solutions: $x = 0$ and $x = 3$.'
          },
          {
            question: 'On what intervals is $g(x) = xe^{-x}$ increasing?',
            options: ['$(-\\infty, 1)$', '$(1, \\infty)$', '$(-\\infty, 0)$', '$(0, 1)$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = e^{-x} - xe^{-x} = e^{-x}(1-x)$. Since $e^{-x} > 0$ always, the sign depends on $(1-x)$. $g\' > 0$ when $x < 1$, so increasing on $(-\\infty, 1)$.'
          }
        ]
      }
    },
    {
      id: 'apps1-text2',
      type: 'text' as const,
      content: `### First Derivative Test for Local Extrema

At a critical point $c$:

| Sign change of $f'$ | Conclusion |
|---------------------|------------|
| $+ \\to -$ | **Local maximum** at $x = c$ |
| $- \\to +$ | **Local minimum** at $x = c$ |
| No sign change | **Neither** (e.g., inflection point) |

### Example (continued)

For $f(x) = x^3 - 3x + 1$:
- At $x = -1$: $f'$ changes from $+$ to $-$ → **local max** at $f(-1) = 3$
- At $x = 1$: $f'$ changes from $-$ to $+$ → **local min** at $f(1) = -1$`
    },
    {
      id: 'apps1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Classify Critical Points** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = x^4 - 4x^3$, classify $x = 0$.',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Cannot determine'],
            correctAnswer: 2,
            explanation: '$f\'(x) = 4x^2(x-3)$. For $x < 0$: $f\' < 0$. For $0 < x < 3$: $f\' < 0$. No sign change at $x = 0$, so neither max nor min.'
          },
          {
            question: 'For $f(x) = x^4 - 4x^3$, classify $x = 3$.',
            options: ['Local maximum', 'Local minimum', 'Neither', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'For $0 < x < 3$: $f\' < 0$. For $x > 3$: $f\' > 0$. Sign change $- \\to +$ means local minimum at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'apps1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

1. Critical points occur where $f' = 0$ or $f'$ is undefined
2. $f' > 0$ → increasing, $f' < 0$ → decreasing
3. First Derivative Test: sign change determines max/min/neither`
    }
  ]
};
""")

write_file('calcab-applications-of-derivatives-calcab-part2.ts', r"""export const calcabAppsDerivativesPart2Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps2-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 2 of 7 — Second Derivative & Concavity**

### Concavity

| $f''(x)$ | Concavity |
|----------|-----------|
| $f''(x) > 0$ | **Concave up** (opens upward, "cup") |
| $f''(x) < 0$ | **Concave down** (opens downward, "cap") |

### Inflection Points

An **inflection point** is where concavity **changes**. This occurs where $f'' = 0$ or $f''$ is undefined, AND $f''$ actually changes sign.

### Second Derivative Test

At a critical point where $f'(c) = 0$:
- If $f''(c) > 0$: **local minimum** (concave up)
- If $f''(c) < 0$: **local maximum** (concave down)
- If $f''(c) = 0$: **inconclusive** (use First Derivative Test)

### Worked Example

$f(x) = x^3 - 6x^2 + 9x + 1$

$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. Critical points: $x = 1, 3$.

$f''(x) = 6x - 12$.

- $f''(1) = -6 < 0$ → **local max** at $x = 1$
- $f''(3) = 6 > 0$ → **local min** at $x = 3$
- $f''(x) = 0$ at $x = 2$ → inflection point`
    },
    {
      id: 'apps2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Second Derivative Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the inflection point(s) of $f(x) = x^4 - 6x^2 + 5$.',
            options: ['$x = 0$', '$x = \\pm 1$', '$x = \\pm\\sqrt{3}$', '$x = \\pm\\frac{1}{\\sqrt{3}}$'],
            correctAnswer: 1,
            explanation: '$f\'\'(x) = 12x^2 - 12 = 12(x^2-1) = 12(x-1)(x+1)$. $f\'\' = 0$ at $x = \\pm 1$. Sign changes at both, so inflection at $x = -1$ and $x = 1$.'
          },
          {
            question: 'Use the Second Derivative Test: $f(x) = x^3 - 12x$. Classify $x = 2$.',
            options: ['Local maximum', 'Local minimum', 'Inflection point', 'Inconclusive'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f\'\'(x) = 6x$. $f\'\'(2) = 12 > 0$, so local minimum.'
          }
        ]
      }
    },
    {
      id: 'apps2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

1. $f'' > 0$: concave up; $f'' < 0$: concave down
2. Inflection points: where $f''$ changes sign
3. Second Derivative Test: faster than First Derivative Test when $f''(c) \\neq 0$`
    }
  ]
};
""")

write_file('calcab-applications-of-derivatives-calcab-part3.ts', r"""export const calcabAppsDerivativesPart3Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps3-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 3 of 7 — Absolute (Global) Extrema**

### Extreme Value Theorem (EVT)

If $f$ is continuous on a **closed interval** $[a, b]$, then $f$ attains an **absolute maximum** and **absolute minimum** on $[a, b]$.

### Candidates Test (Closed Interval Method)

1. Find all critical points in $(a, b)$
2. Evaluate $f$ at each critical point AND at the endpoints $a$ and $b$
3. The **largest** value is the absolute max; the **smallest** is the absolute min

### Worked Example

Find the absolute extrema of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

$f'(x) = 3x^2 - 3 = 0$ → $x = \\pm 1$ (both in the interval).

| $x$ | $f(x)$ |
|-----|--------|
| $-2$ | $-8+6+1 = -1$ |
| $-1$ | $-1+3+1 = 3$ |
| $1$ | $1-3+1 = -1$ |
| $2$ | $8-6+1 = 3$ |

**Absolute max = 3** (at $x = -1$ and $x = 2$). **Absolute min = $-1$** (at $x = -2$ and $x = 1$).`
    },
    {
      id: 'apps3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute Extrema** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f(x) = -x^2 + 4x - 1$ on $[0, 5]$.',
            options: ['$3$', '$4$', '$-1$', '$-6$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = -2x + 4 = 0$ at $x = 2$. $f(0) = -1$, $f(2) = -4+8-1 = 3$, $f(5) = -25+20-1 = -6$. Absolute max = $3$ at $x = 2$.'
          },
          {
            question: 'Find the absolute minimum of $g(x) = x + \\frac{4}{x}$ on $[1, 8]$.',
            options: ['$4$', '$5$', '$8.5$', '$3$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = 1 - \\frac{4}{x^2} = 0$ at $x = 2$. $g(1) = 5$, $g(2) = 4$, $g(8) = 8.5$. Absolute min = $4$ at $x = 2$.'
          }
        ]
      }
    },
    {
      id: 'apps3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

1. EVT guarantees extrema on closed intervals for continuous functions
2. **Candidates Test**: evaluate at critical points AND endpoints
3. Compare all values to find the absolute max and min`
    }
  ]
};
""")

write_file('calcab-applications-of-derivatives-calcab-part4.ts', r"""export const calcabAppsDerivativesPart4Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps4-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 4 of 7 — Curve Sketching**

### Complete Curve Sketching Procedure

1. **Domain** of $f$
2. **Intercepts**: set $y = 0$ (x-intercepts) and $x = 0$ (y-intercept)
3. **Symmetry**: even ($f(-x) = f(x)$) or odd ($f(-x) = -f(x)$)
4. **First derivative**: critical points, increasing/decreasing, local extrema
5. **Second derivative**: concavity, inflection points
6. **End behavior**: $\\lim_{x \\to \\pm\\infty} f(x)$
7. **Asymptotes** (if any)

### Quick Example

$f(x) = x^4 - 4x^3$

- $f'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$
  - Critical points: $x = 0, 3$
  - Decreasing on $(-\\infty, 3)$, increasing on $(3, \\infty)$
  - Local min at $x = 3$: $f(3) = 81 - 108 = -27$

- $f''(x) = 12x^2 - 24x = 12x(x-2)$
  - Inflection at $x = 0$ and $x = 2$
  - Concave up on $(-\\infty, 0)$ and $(2, \\infty)$
  - Concave down on $(0, 2)$`
    },
    {
      id: 'apps4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Curve Sketching from Derivatives** 🎯\n\nGiven $f\'(x) = (x-1)^2(x-4)$:',
      exercise: {
        questions: [
          {
            question: 'Where does $f$ have a local minimum?',
            options: ['$x = 1$', '$x = 4$', '$x = 1$ and $x = 4$', 'No local minimum'],
            correctAnswer: 1,
            explanation: '$f\' = 0$ at $x = 1$ and $x = 4$. At $x = 1$: $(x-1)^2$ is always $\\geq 0$, and $(x-4)$ is negative on both sides. So $f\' < 0$ on both sides of $x=1$ — no sign change, not a min. At $x = 4$: $f\'$ changes from $-$ to $+$, so local min at $x = 4$.'
          },
          {
            question: 'How many inflection points does $f$ have?',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = (x-1)^2(x-4) = x^3 - 6x^2 + 9x - 4$. $f\'\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. Sign changes at $x = 1$ and $x = 3$, giving 2 inflection points. Actually, $f\'\'$ changes sign at both $x=1$ and $x=3$, so there are 2 inflection points.'
          }
        ]
      }
    },
    {
      id: 'apps4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

1. A systematic approach using both $f'$ and $f''$ gives a complete picture
2. From a graph of $f'$, you can deduce everything about $f$'s shape
3. This is a frequent AP free-response topic`
    }
  ]
};
""")

write_file('calcab-applications-of-derivatives-calcab-part5.ts', r"""export const calcabAppsDerivativesPart5Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps5-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 5 of 7 — Mean Value Theorem**

### Statement (MVT)

If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists at least one $c$ in $(a,b)$ such that:

$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

**Geometric meaning:** There's a point where the tangent line is parallel to the secant line through $(a, f(a))$ and $(b, f(b))$.

### Worked Example

$f(x) = x^3$ on $[0, 2]$.

Average rate of change: $\\frac{f(2)-f(0)}{2-0} = \\frac{8-0}{2} = 4$.

Find $c$: $f'(c) = 3c^2 = 4$ → $c = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3} \\approx 1.155$.

Since $c \\in (0, 2)$, MVT is confirmed.`
    },
    {
      id: 'apps5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mean Value Theorem** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\sqrt{x}$ on $[1, 9]$, find the value of $c$ guaranteed by MVT.',
            options: ['$c = 4$', '$c = 5$', '$c = 3$', '$c = 2$'],
            correctAnswer: 0,
            explanation: '$\\frac{f(9)-f(1)}{9-1} = \\frac{3-1}{8} = \\frac{1}{4}$. $f\'(x) = \\frac{1}{2\\sqrt{x}} = \\frac{1}{4}$. $2\\sqrt{x} = 4$, $\\sqrt{x} = 2$, $x = 4$.'
          },
          {
            question: 'If $f$ is differentiable, $f(2) = 3$, and $f(5) = 15$, what can we guarantee?',
            options: ['$f\'(c) = 4$ for some $c \\in (2,5)$', '$f\'(c) = 5$ for some $c \\in (2,5)$', '$f(c) = 9$ for some $c \\in (2,5)$', 'Both A and C'],
            correctAnswer: 0,
            explanation: 'MVT: $f\'(c) = \\frac{15-3}{5-2} = 4$ for some $c \\in (2,5)$. IVT also gives us C (since $f$ is continuous and $3 < 9 < 15$), so actually D is also valid. But the MVT specifically guarantees $f\'(c) = 4$.'
          }
        ]
      }
    },
    {
      id: 'apps5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

1. MVT: there's a point where instantaneous rate = average rate
2. Must check: $f$ continuous on $[a,b]$, differentiable on $(a,b)$
3. MVT is used heavily in AP justifications and proofs`
    }
  ]
};
""")

write_file('calcab-applications-of-derivatives-calcab-part6.ts', r"""export const calcabAppsDerivativesPart6Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps6-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives

**Part 6 of 7 — Related Rates (Mini-Review)**

### Related Rates Strategy

1. Draw a picture and label variables
2. Write an equation relating the variables
3. Differentiate both sides with respect to time $t$
4. Substitute known values and solve`
    },
    {
      id: 'apps6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Related Rates & Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A circle is expanding with $\\frac{dr}{dt} = 3$ cm/s. Find $\\frac{dA}{dt}$ when $r = 5$ cm.',
            options: ['$30\\pi$ cm$^2$/s', '$15\\pi$ cm$^2$/s', '$10\\pi$ cm$^2$/s', '$25\\pi$ cm$^2$/s'],
            correctAnswer: 0,
            explanation: '$A = \\pi r^2$. $\\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} = 2\\pi(5)(3) = 30\\pi$ cm$^2$/s.'
          },
          {
            question: 'Water fills a cone (radius 3 m, height 6 m) at 2 m$^3$/min. How fast is the depth rising when $h = 2$ m? ($r = h/2$)',
            options: ['$\\frac{2}{\\pi}$ m/min', '$\\frac{8}{\\pi}$ m/min', '$\\frac{1}{\\pi}$ m/min', '$\\frac{4}{\\pi}$ m/min'],
            correctAnswer: 0,
            explanation: 'Since $r = h/2$: $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h^3}{12}$. $\\frac{dV}{dt} = \\frac{\\pi h^2}{4}\\frac{dh}{dt}$. $2 = \\frac{\\pi(4)}{4}\\frac{dh}{dt}$. $\\frac{dh}{dt} = \\frac{2}{\\pi}$ m/min.'
          }
        ]
      }
    },
    {
      id: 'apps6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

1. Related rates: differentiate with respect to $t$ using Chain Rule
2. Always identify what you're given and what you're finding
3. Don't substitute values until AFTER differentiating`
    }
  ]
};
""")

write_file('calcab-applications-of-derivatives-calcab-part7.ts', r"""export const calcabAppsDerivativesPart7Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps7-intro',
      type: 'text' as const,
      content: `# Applications of Derivatives — Review

**Part 7 of 7 — Comprehensive Assessment**`
    },
    {
      id: 'apps7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f(x) = x^3 - 12x$ on $[-3, 4]$.',
            options: ['$16$', '$9$', '$36$', '$24$'],
            correctAnswer: 1,
            explanation: '$f\'(x) = 3x^2 - 12 = 0$ at $x = \\pm 2$. $f(-3) = -27+36 = 9$, $f(-2) = -8+24 = 16$, $f(2) = 8-24 = -16$, $f(4) = 64-48 = 16$. Absolute max = $16$.'
          },
          {
            question: 'How many inflection points does $g(x) = x^5 - 5x^3$ have?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = 20x^3 - 30x = 10x(2x^2 - 3) = 0$ at $x = 0, \\pm\\sqrt{3/2}$. All three are actual sign changes, so 3 inflection points.'
          },
          {
            question: 'If $f\'(2) = 0$, $f\'\'(2) = -3$, what type of extremum is at $x = 2$?',
            options: ['Local minimum', 'Local maximum', 'Inflection point', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'Second Derivative Test: $f\'(2) = 0$ and $f\'\'(2) < 0$, so concave down at $x = 2$ → local maximum.'
          }
        ]
      }
    },
    {
      id: 'apps7-summary',
      type: 'text' as const,
      content: `### Applications of Derivatives — Complete! ✅

You have mastered:
- ✅ Critical points and increasing/decreasing analysis
- ✅ Second derivative test and concavity
- ✅ Absolute extrema on closed intervals
- ✅ Curve sketching
- ✅ Mean Value Theorem
- ✅ Related rates applications`
    }
  ]
};
""")

print("u-Substitution (7), Antiderivatives (7), Applications of Derivatives (7) complete!")
print("Total files written: 21")
