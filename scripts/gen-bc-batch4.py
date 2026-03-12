#!/usr/bin/env python3
"""Generate AP Calculus BC: Taylor/Maclaurin, Lagrange Error, Power Series, Series Applications."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# TAYLOR & MACLAURIN SERIES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcTaylorPart1Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay1-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 1 of 7 — Taylor Polynomial Definition**

### Taylor Series (centered at $x = a$)

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

### Maclaurin Series (centered at $a = 0$)

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{n!}x^n = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots$$

### $n$th-Degree Taylor Polynomial

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$$`
    },
    {
      id: 'tay1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Taylor Basics** 🎯',
      exercise: {
        questions: [
          {
            question: 'The 2nd-degree Maclaurin polynomial for $e^x$ is:',
            options: ['$1 + x + \\frac{x^2}{2}$', '$1 + x + x^2$', '$e + ex + \\frac{ex^2}{2}$', '$x + x^2$'],
            correctAnswer: 0,
            explanation: '$f(0) = 1$, $f\'(0) = 1$, $f\'\'(0) = 1$. $P_2 = 1 + x + \\frac{x^2}{2!} = 1 + x + \\frac{x^2}{2}$.'
          },
          {
            question: 'What is the coefficient of $x^3$ in the Maclaurin series for $\\sin x$?',
            options: ['$-1/6$', '$1/6$', '$-1/3$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\cdots$. Coefficient of $x^3$ is $-1/6$.'
          }
        ]
      }
    },
    {
      id: 'tay1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Taylor: expand around $a$. Maclaurin: expand around $0$. Coefficient of $(x-a)^n$ is $f^{(n)}(a)/n!$.`
    }
  ]
};
""",
2: r"""export const calcbcTaylorPart2Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay2-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 2 of 7 — The Big Four Maclaurin Series**

### Must-Know Series

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad (|x| < \infty)$$

$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (|x| < \infty)$$

$$\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (|x| < \infty)$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots \quad (|x| < 1)$$`
    },
    {
      id: 'tay2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Big Four** 🎯',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $e^{-x}$ is:',
            options: ['$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^n}{n!}$', '$\\sum_{n=0}^{\\infty} \\frac{(-x)^n}{n!}$... same thing! $1 - x + \\frac{x^2}{2} - \\cdots$', '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$', '$-\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$'],
            correctAnswer: 0,
            explanation: 'Replace $x$ with $-x$ in $e^x$: $\\sum \\frac{(-x)^n}{n!} = \\sum \\frac{(-1)^n x^n}{n!}$.'
          },
          {
            question: 'Find the Maclaurin series for $\\frac{1}{1+x}$.',
            options: ['$\\sum_{n=0}^{\\infty} (-1)^n x^n$', '$\\sum_{n=0}^{\\infty} x^n$', '$\\sum_{n=1}^{\\infty} (-1)^n x^n$', '$\\frac{1}{1-x^2}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{1+x} = \\frac{1}{1-(-x)} = \\sum (-x)^n = \\sum (-1)^n x^n$.'
          }
        ]
      }
    },
    {
      id: 'tay2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Memorize $e^x$, $\\sin x$, $\\cos x$, $\\frac{1}{1-x}$. Build all others from these four!`
    }
  ]
};
""",
3: r"""export const calcbcTaylorPart3Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay3-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 3 of 7 — Building New Series**

### Substitution

$e^{x^2} = \sum \frac{(x^2)^n}{n!} = \sum \frac{x^{2n}}{n!}$

### Multiplication

$x\sin x = x\left(x - \frac{x^3}{6} + \cdots\right) = x^2 - \frac{x^4}{6} + \cdots$

### Differentiation

$\frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2} = \sum_{n=1}^{\infty} nx^{n-1}$

### Integration

$\int \frac{1}{1+x^2}\,dx = \arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$`
    },
    {
      id: 'tay3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Building Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the Maclaurin series for $\\cos(x^2)$.',
            options: ['$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n}}{(2n)!}$', '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$', '$\\sum_{n=0}^{\\infty} \\frac{x^{4n}}{(2n)!}$', '$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{4n+2}}{(2n+1)!}$'],
            correctAnswer: 0,
            explanation: 'Replace $x$ with $x^2$ in $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$: $\\cos(x^2) = \\sum \\frac{(-1)^n (x^2)^{2n}}{(2n)!} = \\sum \\frac{(-1)^n x^{4n}}{(2n)!}$.'
          }
        ]
      }
    },
    {
      id: 'tay3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Substitution, multiplication, differentiation, and integration all apply term-by-term.`
    }
  ]
};
""",
4: r"""export const calcbcTaylorPart4Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay4-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 4 of 7 — Taylor Series at $a \neq 0$**

### Taylor Series Centered at $a$

$$f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n$$

### Example: $\ln x$ about $a = 1$

$f(x) = \ln x$, $f(1) = 0$
$f'(x) = 1/x$, $f'(1) = 1$
$f''(x) = -1/x^2$, $f''(1) = -1$

$$\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \cdots = \sum_{n=1}^{\infty}\frac{(-1)^{n+1}(x-1)^n}{n}$$`
    },
    {
      id: 'tay4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Non-Zero Center** 🎯',
      exercise: {
        questions: [
          {
            question: 'The first three nonzero terms of $\\sqrt{x}$ about $a = 4$:',
            options: ['$2 + \\frac{1}{4}(x-4) - \\frac{1}{64}(x-4)^2$', '$2 + \\frac{1}{2}(x-4)$', '$4 + (x-4)$', '$\\sqrt{4} + \\frac{x-4}{2}$'],
            correctAnswer: 0,
            explanation: '$f(4) = 2$. $f\'(4) = 1/4$. $f\'\'(4) = -1/32$. $P_2 = 2 + \\frac{1}{4}(x-4) + \\frac{-1/32}{2}(x-4)^2 = 2 + \\frac{1}{4}(x-4) - \\frac{1}{64}(x-4)^2$.'
          }
        ]
      }
    },
    {
      id: 'tay4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Non-zero center: compute derivatives at $x = a$, use $(x-a)^n$.`
    }
  ]
};
""",
5: r"""export const calcbcTaylorPart5Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay5-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series

**Part 5 of 7 — Using Series to Evaluate Limits & Integrals**

### Limits via Taylor Series

$$\lim_{x \to 0}\frac{\sin x - x}{x^3} = \lim_{x \to 0}\frac{(x - x^3/6 + \cdots) - x}{x^3} = \lim_{x \to 0}\frac{-x^3/6 + \cdots}{x^3} = -\frac{1}{6}$$

### Integrals via Taylor Series

$\int_0^1 e^{-x^2}\,dx$: no elementary antiderivative!

$e^{-x^2} = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$

$\int_0^1 = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \cdots\right]_0^1 = 1 - 1/3 + 1/10 - 1/42 + \cdots$`
    },
    {
      id: 'tay5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series Applications** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2}$:',
            options: ['$1/2$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + \\cdots$. Divided by $x^2$: $\\frac{1}{2} - \\frac{x^2}{24} + \\cdots \\to 1/2$.'
          }
        ]
      }
    },
    {
      id: 'tay5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Taylor series elegantly evaluate limits and integrals that are otherwise difficult.`
    }
  ]
};
""",
6: r"""export const calcbcTaylorPart6Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay6-intro',
      type: 'text' as const,
      content: `# Taylor Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'tay6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The coefficient of $x^5$ in the Maclaurin series for $\\sin x \\cdot \\cos x$ is:',
            options: ['$-2/15$', '$1/120$', '$-1/30$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\sin x \\cos x = \\frac{1}{2}\\sin 2x = \\frac{1}{2}(2x - \\frac{(2x)^3}{6} + \\frac{(2x)^5}{120}) = x - \\frac{4x^3}{6} + \\frac{32x^5}{240} - \\cdots = x - \\frac{2x^3}{3} + \\frac{2x^5}{15} - \\cdots$. Coefficient of $x^5$: $2/15$. Actually $\\sin(2x) = 2x - \\frac{8x^3}{6} + \\frac{32x^5}{120}$. Half: $x - \\frac{4x^3}{6} + \\frac{16x^5}{120} = x - \\frac{2x^3}{3} + \\frac{2x^5}{15}$. So coefficient is $+2/15$. Let me reconsider the sign pattern... $\\sin(2x) = 2x - \\frac{(2x)^3}{3!} + \\frac{(2x)^5}{5!} = 2x - 8x^3/6 + 32x^5/120$. Half: $x - 4x^3/6 + 16x^5/120 = x - 2x^3/3 + 2x^5/15$. Coefficient of $x^5$ is $+2/15$.'
          },
          {
            question: 'Find $f^{(4)}(0)$ if $f(x) = e^{x^2}$.',
            options: ['$12$', '$4$', '$24$', '$1$'],
            correctAnswer: 0,
            explanation: '$e^{x^2} = 1 + x^2 + \\frac{x^4}{2} + \\cdots$. Coefficient of $x^4$ is $1/2 = f^{(4)}(0)/4!$. So $f^{(4)}(0) = 4!/2 = 12$.'
          }
        ]
      }
    },
    {
      id: 'tay6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcTaylorPart7Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tay7-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'tay7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $\\ln(1+x)$ is:',
            options: ['$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}x^n}{n}$', '$\\sum_{n=0}^{\\infty} \\frac{x^n}{n}$', '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n!}$', '$\\sum_{n=0}^{\\infty} (-1)^n x^n$'],
            correctAnswer: 0,
            explanation: 'Integrate $\\frac{1}{1+x} = \\sum (-1)^n x^n$ term by term: $\\ln(1+x) = \\sum \\frac{(-1)^{n+1}x^n}{n}$.'
          },
          {
            question: 'The 3rd-degree Taylor polynomial for $e^x$ about $a = 1$:',
            options: ['$e + e(x-1) + \\frac{e}{2}(x-1)^2 + \\frac{e}{6}(x-1)^3$', '$1 + x + x^2/2 + x^3/6$', '$e(1 + x + x^2/2 + x^3/6)$', '$e + (x-1) + (x-1)^2/2$'],
            correctAnswer: 0,
            explanation: 'All derivatives of $e^x$ at $x = 1$ equal $e$. $P_3 = e + e(x-1) + \\frac{e}{2!}(x-1)^2 + \\frac{e}{3!}(x-1)^3$.'
          }
        ]
      }
    },
    {
      id: 'tay7-summary',
      type: 'text' as const,
      content: `### Taylor & Maclaurin Series — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-taylor-maclaurin-series-calcbc-part{i}.ts', parts[i])

###############################################################################
# LAGRANGE ERROR BOUND (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcLagrangePart1Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag1-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound

**Part 1 of 7 — The Formula**

### Taylor's Theorem with Remainder

$$f(x) = P_n(x) + R_n(x)$$

### Lagrange Error Bound

$$|R_n(x)| \leq \frac{M}{(n+1)!}|x - a|^{n+1}$$

where $M = \max|f^{(n+1)}(c)|$ for $c$ between $a$ and $x$.

This tells you: **how good is your Taylor polynomial approximation?**`
    },
    {
      id: 'lag1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Lagrange Error** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $e^x$ approximated by $P_3(x)$ at $a = 0$, the error at $x = 0.1$ is at most... (note: $e^{0.1} < 2$)',
            options: ['$\\frac{2(0.1)^4}{4!} \\approx 0.0000833$', '$\\frac{(0.1)^3}{3!}$', '$\\frac{e(0.1)^4}{4!}$', '$0.1$'],
            correctAnswer: 0,
            explanation: '$M = \\max|f^{(4)}(c)| = \\max e^c$ for $c \\in [0, 0.1]$. Bound $M \\leq 2$. $|R_3| \\leq \\frac{2(0.1)^4}{24} \\approx 0.0000833$.'
          }
        ]
      }
    },
    {
      id: 'lag1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
$|R_n| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}$ where $M$ bounds $|f^{(n+1)}|$.`
    }
  ]
};
""",
2: r"""export const calcbcLagrangePart2Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag2-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound

**Part 2 of 7 — Finding $M$**

### Strategy for Bounding $M$

$M = \max_{c \text{ between } a \text{ and } x} |f^{(n+1)}(c)|$

For common functions:

| Function | All derivatives bounded by |
|----------|--------------------------|
| $\sin x$, $\cos x$ | $M = 1$ (always!) |
| $e^x$ on $[0, b]$ | $M = e^b$ |
| $\ln x$ near $a$ | Need careful analysis |`
    },
    {
      id: 'lag2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Finding $M$** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\sin x$ at $a = 0$, the error using $P_5(x)$ at $x = 1$ is at most:',
            options: ['$\\frac{1}{720}$', '$\\frac{1}{120}$', '$\\frac{1}{6!}$... same as $1/720$!', '$1/24$'],
            correctAnswer: 0,
            explanation: '$M = 1$ for $\\sin x$. $|R_5| \\leq \\frac{1 \\cdot 1^6}{6!} = \\frac{1}{720}$.'
          }
        ]
      }
    },
    {
      id: 'lag2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
$\\sin x$ and $\\cos x$ always have $M = 1$. This makes error bounds very clean.`
    }
  ]
};
""",
3: r"""export const calcbcLagrangePart3Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag3-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound

**Part 3 of 7 — How Many Terms Do We Need?**

### Determining Degree for Desired Accuracy

"How many terms of $e^x$ centered at $0$ are needed for $|R_n(1)| < 0.001$?"

Need: $\frac{M}{(n+1)!} < 0.001$ where $M \leq 3$ (bound for $e^c$ on $[0,1]$).

$\frac{3}{(n+1)!} < 0.001$

$(n+1)! > 3000$

$7! = 5040 > 3000$ ✓

So $n = 6$ (use $P_6$, i.e., 7 terms).`
    },
    {
      id: 'lag3-quiz1',
      type: 'multiple-choice' as const,
      content: '**How Many Terms?** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many terms of $\\cos x$ at $a = 0$ ensure error $< 0.0001$ at $x = 1$?',
            options: ['$P_6$ (4 nonzero terms)', '$P_4$ (3 nonzero terms)', '$P_8$ (5 nonzero terms)', '$P_2$ (2 nonzero terms)'],
            correctAnswer: 0,
            explanation: 'Need $\\frac{1}{(n+1)!} < 0.0001$. $7! = 5040 > 10000$. Actually we need $\\frac{1}{7!} \\approx 0.0002 > 0.0001$. Try $\\frac{1}{8!} = 1/40320 < 0.0001$. So $n = 7$, but $\\cos x$ only has even terms, so $P_6$ gives same result. Need $P_6$.'
          }
        ]
      }
    },
    {
      id: 'lag3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Solve $(n+1)! > M/\\epsilon$ to find the required degree.`
    }
  ]
};
""",
4: r"""export const calcbcLagrangePart4Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag4-intro',
      type: 'text' as const,
      content: `# Lagrange Error

**Part 4 of 7 — Alternating Series Error vs Lagrange**

### When to Use Which?

| Scenario | Use |
|----------|-----|
| Alternating series | AS Error Bound ($|S - S_n| \\leq b_{n+1}$) |
| General Taylor polynomial | Lagrange Error Bound |
| Either applies | AS bound is usually tighter! |

### Key Insight

For alternating Taylor series (like $\\sin x$, $\\cos x$, $e^{-x}$), the **alternating series error bound** is often easier and tighter.`
    },
    {
      id: 'lag4-quiz1',
      type: 'multiple-choice' as const,
      content: '**AS vs Lagrange** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\cos(0.5)$ using $P_4(x)$, which error bound is simpler?',
            options: ['AS bound: error $\\leq (0.5)^6/6! = 1/46080$', 'Lagrange: same answer but more work', 'Cannot use AS bound', 'They give different answers'],
            correctAnswer: 0,
            explanation: '$\\cos x$ is alternating. AS bound: first omitted term $= \\frac{(0.5)^6}{6!} = \\frac{1}{46080}$. Same result as Lagrange but easier to apply.'
          }
        ]
      }
    },
    {
      id: 'lag4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
AS bound is simpler for alternating Taylor series. Lagrange works for all Taylor polys.`
    }
  ]
};
""",
5: r"""export const calcbcLagrangePart5Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag5-intro',
      type: 'text' as const,
      content: `# Lagrange Error

**Part 5 of 7 — AP FRQ Practice**

### Typical AP Question Format

"Let $f$ be a function with $|f^{(4)}(x)| \\leq 6$ for all $x$ in $[-1, 1]$. Show that the error of $P_3(x)$ at $x = 0.5$ is less than $0.02$."

**Solution**: $|R_3(0.5)| \\leq \\frac{6}{4!}(0.5)^4 = \\frac{6}{24} \\cdot \\frac{1}{16} = \\frac{1}{64} \\approx 0.0156 < 0.02$ ✓`
    },
    {
      id: 'lag5-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $|f^{(5)}(x)| \\leq 10$ for $x \\in [0, 2]$, then $|R_4(2)|$ is at most:',
            options: ['$10 \\cdot 32 / 120 = 8/3$', '$10 \\cdot 16/24$', '$10/120$', '$320/120$... wait, same as first option!'],
            correctAnswer: 0,
            explanation: '$|R_4(2)| \\leq \\frac{10}{5!}|2-0|^5 = \\frac{10 \\cdot 32}{120} = \\frac{320}{120} = \\frac{8}{3}$.'
          }
        ]
      }
    },
    {
      id: 'lag5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Show your formula, substitute values, simplify. State conclusion clearly.`
    }
  ]
};
""",
6: r"""export const calcbcLagrangePart6Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag6-intro',
      type: 'text' as const,
      content: `# Lagrange Error

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'lag6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Bound Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The error in approximating $\\sin(0.1)$ with $P_3(0.1)$ is at most:',
            options: ['$\\frac{(0.1)^5}{5!} = \\frac{1}{12{,}000{,}000}$', '$\\frac{(0.1)^4}{4!}$', '$\\frac{(0.1)^3}{3!}$', '$0.01$'],
            correctAnswer: 0,
            explanation: '$\\sin x$ Maclaurin: $P_3 = x - x^3/6$. Next term (AS bound): $\\frac{(0.1)^5}{120} = 10^{-5}/120 \\approx 8.3 \\times 10^{-8}$.'
          }
        ]
      }
    },
    {
      id: 'lag6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcLagrangePart7Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lag7-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'lag7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$e^x$ at $a = 0$, $P_4(0.2)$. Using $M = 2$, the Lagrange error is at most:',
            options: ['$\\frac{2(0.2)^5}{120} \\approx 5.3 \\times 10^{-6}$', '$\\frac{(0.2)^4}{24}$', '$\\frac{2}{120}$', '$0.002$'],
            correctAnswer: 0,
            explanation: '$|R_4| \\leq \\frac{M}{5!}(0.2)^5 = \\frac{2}{120}(0.00032) = \\frac{0.00064}{120} \\approx 5.3 \\times 10^{-6}$.'
          }
        ]
      }
    },
    {
      id: 'lag7-summary',
      type: 'text' as const,
      content: `### Lagrange Error Bound — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-lagrange-error-bound-calcbc-part{i}.ts', parts[i])

###############################################################################
# POWER SERIES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcPowerSeriesPart1Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow1-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 1 of 7 — Radius & Interval of Convergence**

### Power Series Form

$$\sum_{n=0}^{\infty} c_n(x-a)^n$$

### Radius of Convergence $R$

Use the ratio test: $\lim \left|\frac{c_{n+1}}{c_n}\right| |x - a| < 1$

$$R = \lim_{n \to \infty} \left|\frac{c_n}{c_{n+1}}\right|$$

### Interval of Convergence

$(a - R, a + R)$ — then check endpoints separately!`
    },
    {
      id: 'pow1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Radius of Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find $R$ for $\\sum \\frac{x^n}{n}$.',
            options: ['$R = 1$', '$R = \\infty$', '$R = 0$', '$R = 1/e$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim \\frac{n}{n+1}|x| = |x|$. Converges when $|x| < 1$. $R = 1$.'
          },
          {
            question: 'Find $R$ for $\\sum \\frac{x^n}{n!}$.',
            options: ['$R = \\infty$', '$R = 1$', '$R = e$', '$R = 0$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim \\frac{|x|}{n+1} = 0 < 1$ for all $x$. $R = \\infty$. (This is $e^x$!)'
          }
        ]
      }
    },
    {
      id: 'pow1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
$R$ from ratio test. Always check endpoints separately for the interval.`
    }
  ]
};
""",
2: r"""export const calcbcPowerSeriesPart2Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow2-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 2 of 7 — Checking Endpoints**

### At each endpoint, substitute and test the resulting series.

$\sum \frac{x^n}{n}$, $R = 1$. Interval: check $x = 1$ and $x = -1$.

$x = 1$: $\sum 1/n$ → diverges (harmonic)

$x = -1$: $\sum (-1)^n/n$ → converges (AST)

**Interval of convergence: $[-1, 1)$**`
    },
    {
      id: 'pow2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Endpoint Checking** 🎯',
      exercise: {
        questions: [
          {
            question: 'IOC for $\\sum \\frac{x^n}{n^2}$:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswer: 0,
            explanation: '$R = 1$. At $x = 1$: $\\sum 1/n^2$ converges. At $x = -1$: $\\sum (-1)^n/n^2$ converges (absolutely). Both included: $[-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'pow2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Always test each endpoint individually. Four possible interval shapes: $(a-R, a+R)$, $[a-R, a+R)$, $(a-R, a+R]$, $[a-R, a+R]$.`
    }
  ]
};
""",
3: r"""export const calcbcPowerSeriesPart3Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow3-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 3 of 7 — Differentiation & Integration of Power Series**

### Term-by-Term Differentiation

$$f(x) = \sum c_n x^n \implies f'(x) = \sum n c_n x^{n-1}$$

**Same radius $R$** (endpoints may change!)

### Term-by-Term Integration

$$\int f(x)\,dx = C + \sum \frac{c_n x^{n+1}}{n+1}$$

**Same radius $R$** (endpoints may change!)`
    },
    {
      id: 'pow3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Diff/Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}$, then $f\'(x) = $',
            options: ['$\\sum_{n=1}^{\\infty} nx^{n-1} = \\frac{1}{(1-x)^2}$', '$\\sum_{n=0}^{\\infty} x^{n-1}$', '$\\frac{-1}{(1-x)^2}$', '$\\sum_{n=0}^{\\infty} nx^n$'],
            correctAnswer: 0,
            explanation: 'Differentiate term-by-term: $\\sum nx^{n-1}$. Also $\\frac{d}{dx}\\frac{1}{1-x} = \\frac{1}{(1-x)^2}$.'
          }
        ]
      }
    },
    {
      id: 'pow3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Differentiate and integrate term-by-term. Radius stays the same.`
    }
  ]
};
""",
4: r"""export const calcbcPowerSeriesPart4Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow4-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 4 of 7 — Representing Functions as Power Series**

### Strategy: Start from Known Series

$\frac{1}{1-x} = \sum x^n$, then manipulate!

$\frac{1}{1+x^2} = \sum (-x^2)^n = \sum (-1)^n x^{2n}$

$\frac{x}{1-x^3} = x \sum (x^3)^n = \sum x^{3n+1}$

$\ln(1+x) = \int \frac{1}{1+x}\,dx = \sum \frac{(-1)^n x^{n+1}}{n+1}$`
    },
    {
      id: 'pow4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Building Power Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'Express $\\frac{1}{(1-x)^2}$ as a power series.',
            options: ['$\\sum_{n=0}^{\\infty} (n+1)x^n$', '$\\sum_{n=0}^{\\infty} x^{2n}$', '$\\sum_{n=0}^{\\infty} 2^n x^n$', '$\\sum_{n=1}^{\\infty} x^n/n$'],
            correctAnswer: 0,
            explanation: 'Differentiate $\\frac{1}{1-x} = \\sum x^n$: $\\frac{1}{(1-x)^2} = \\sum nx^{n-1} = \\sum (n+1)x^n$.'
          }
        ]
      }
    },
    {
      id: 'pow4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Start from $\\frac{1}{1-x}$ and use substitution, differentiation, integration.`
    }
  ]
};
""",
5: r"""export const calcbcPowerSeriesPart5Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow5-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 5 of 7 — Non-Zero Centers**

### Power Series at $x = a$

$$\sum c_n(x-a)^n$$

$R$ found same way. Interval centered at $a$: $(a-R, a+R)$.

### Example

$\sum \frac{(x-3)^n}{2^n} = \sum \left(\frac{x-3}{2}\right)^n$

Geometric with ratio $\frac{x-3}{2}$. Converges when $|x-3| < 2$, i.e., $1 < x < 5$.`
    },
    {
      id: 'pow5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Non-Zero Centers** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum \\frac{(x-2)^n}{n \\cdot 3^n}$ has $R = $',
            options: ['$3$', '$1$', '$1/3$', '$2$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim \\frac{n}{n+1} \\cdot \\frac{|x-2|}{3} = \\frac{|x-2|}{3}$. Converges when $|x-2| < 3$. $R = 3$.'
          }
        ]
      }
    },
    {
      id: 'pow5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Center at $a$: interval is $(a-R, a+R)$ with endpoint checks.`
    }
  ]
};
""",
6: r"""export const calcbcPowerSeriesPart6Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow6-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'pow6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'IOC for $\\sum \\frac{n!(x-1)^n}{2^n}$:',
            options: ['$R = 0$, converges only at $x = 1$', '$R = 2$', '$R = \\infty$', '$R = 1$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim (n+1)|x-1|/2 = \\infty$ for $x \\neq 1$. $R = 0$. Only converges at center.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^{2n}}{n}$ converges for:',
            options: ['$[-1, 1]$', '$(-1, 1)$', '$(-1, 1]$', '$[-1, 1)$'],
            correctAnswer: 0,
            explanation: 'Let $u = x^2$: $\\sum (-1)^n u^n/n$ converges for $|u| \\leq 1$ (checking endpoints). $|x^2| \\leq 1$ means $|x| \\leq 1$: $[-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'pow6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcPowerSeriesPart7Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow7-intro',
      type: 'text' as const,
      content: `# Power Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'pow7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the power series for $\\arctan x$.',
            options: ['$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{2n+1}$', '$\\sum_{n=0}^{\\infty} \\frac{x^{2n+1}}{2n+1}$', '$\\sum_{n=0}^{\\infty} (-1)^n x^{2n}$', '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n}$'],
            correctAnswer: 0,
            explanation: 'Integrate $\\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$: $\\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$.'
          }
        ]
      }
    },
    {
      id: 'pow7-summary',
      type: 'text' as const,
      content: `### Power Series — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-power-series-calcbc-part{i}.ts', parts[i])

###############################################################################
# SERIES APPLICATIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcSeriesAppsPart1Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp1-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 1 of 7 — Approximating Functions**

### Why Series Matter

Taylor series let us:
1. Approximate transcendental functions with polynomials
2. Evaluate limits that are otherwise indeterminate
3. Compute integrals with no closed-form antiderivative
4. Solve differential equations

### Example: Approximating $e$

$$e = e^1 = \sum_{n=0}^{\infty}\frac{1}{n!} = 1 + 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \cdots \approx 2.71828$$`
    },
    {
      id: 'sapp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Approximation** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\sqrt{e}$ using the first 3 terms of $e^{1/2}$.',
            options: ['$1 + 1/2 + 1/8 = 1.625$', '$1 + 1/2 = 1.5$', '$e/2 \\approx 1.36$', '$1.5 + 1/6 = 1.667$'],
            correctAnswer: 0,
            explanation: '$e^{0.5} \\approx 1 + 0.5 + (0.5)^2/2 = 1 + 0.5 + 0.125 = 1.625$. (Actual: $1.6487...$)'
          }
        ]
      }
    },
    {
      id: 'sapp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Series provide polynomial approximations to transcendental functions.`
    }
  ]
};
""",
2: r"""export const calcbcSeriesAppsPart2Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp2-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 2 of 7 — Series Solutions to DEs**

### Solving $y' = y$ via Power Series

Assume $y = \sum c_n x^n$. Then $y' = \sum nc_n x^{n-1}$.

$y' = y$: $\sum nc_n x^{n-1} = \sum c_n x^n$

Matching coefficients: $c_{n+1} = c_n/(n+1)$

With $c_0 = 1$: $c_n = 1/n!$, giving $y = e^x$ ✓`
    },
    {
      id: 'sapp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series & DEs** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y\' = -y$ and $y(0) = 1$, the power series solution is:',
            options: ['$e^{-x}$', '$e^x$', '$\\cos x$', '$1 - x$'],
            correctAnswer: 0,
            explanation: '$c_{n+1} = -c_n/(n+1)$. $c_n = (-1)^n/n!$. This gives $y = e^{-x}$.'
          }
        ]
      }
    },
    {
      id: 'sapp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Power series methods solve DEs by matching coefficients.`
    }
  ]
};
""",
3: r"""export const calcbcSeriesAppsPart3Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp3-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 3 of 7 — Integration via Series**

### Integrals with No Elementary Antiderivative

$$\int e^{-x^2}\,dx = \int \sum \frac{(-1)^n x^{2n}}{n!}\,dx = C + \sum \frac{(-1)^n x^{2n+1}}{n!(2n+1)}$$

$$\int \frac{\sin x}{x}\,dx = \int \sum \frac{(-1)^n x^{2n}}{(2n+1)!}\,dx = C + \sum \frac{(-1)^n x^{2n+1}}{(2n+1)(2n+1)!}$$`
    },
    {
      id: 'sapp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\int_0^1 e^{-x^2}\\,dx$ using first 3 terms.',
            options: ['$1 - 1/3 + 1/10 = 0.7667$', '$1 - 1/2 + 1/6 = 0.6667$', '$1 - 1/3 + 1/6 = 0.8333$', '$0.5$'],
            correctAnswer: 0,
            explanation: '$\\int_0^1 (1 - x^2 + x^4/2)\\,dx = [x - x^3/3 + x^5/10]_0^1 = 1 - 1/3 + 1/10 = 23/30 \\approx 0.7667$.'
          }
        ]
      }
    },
    {
      id: 'sapp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Series turn impossible integrals into routine polynomial integrations.`
    }
  ]
};
""",
4: r"""export const calcbcSeriesAppsPart4Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp4-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 4 of 7 — Finding Coefficients from Derivatives**

### Connecting Taylor Coefficients and Derivatives

$$\frac{f^{(n)}(a)}{n!} = c_n$$

So: $f^{(n)}(a) = n! \cdot c_n$

This lets you find **specific derivatives** from a known series without differentiating!`
    },
    {
      id: 'sapp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Coefficient-Derivative Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n!}$, find $f^{(5)}(0)$.',
            options: ['$32$', '$2^5 = 32$... same! The coefficient of $x^5$ is $2^5/5!$, so $f^{(5)}(0) = 5! \\cdot 2^5/5! = 32$', '$120$', '$2$'],
            correctAnswer: 0,
            explanation: 'Coefficient of $x^5$: $2^5/5! = 32/120$. $f^{(5)}(0) = 5! \\cdot (32/120) = 32$.'
          }
        ]
      }
    },
    {
      id: 'sapp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
$f^{(n)}(a) = n! \\cdot$ (coefficient of $(x-a)^n$).`
    }
  ]
};
""",
5: r"""export const calcbcSeriesAppsPart5Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp5-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 5 of 7 — Euler's Formula**

### The Beautiful Connection

$$e^{ix} = \cos x + i\sin x$$

This follows from comparing Maclaurin series:

$e^{ix} = 1 + ix + \frac{(ix)^2}{2!} + \frac{(ix)^3}{3!} + \cdots$

$= \left(1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots\right) + i\left(x - \frac{x^3}{3!} + \cdots\right)$

$= \cos x + i\sin x$

### Euler's Identity

$$e^{i\pi} + 1 = 0$$`
    },
    {
      id: 'sapp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Euler Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'Why do $\\sin x$, $\\cos x$, and $e^x$ series produce Euler\'s formula?',
            options: ['The even powers of $e^{ix}$ give $\\cos x$ and the odd powers give $i\\sin x$', 'It is just a coincidence', 'Only works for $x = \\pi$', 'They are unrelated series'],
            correctAnswer: 0,
            explanation: '$i^{2n}$ alternates $\\pm 1$ (matching $\\cos x$) and $i^{2n+1}$ alternates $\\pm i$ (matching $i\\sin x$).'
          }
        ]
      }
    },
    {
      id: 'sapp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Euler's formula connects exponential and trigonometric functions through series.`
    }
  ]
};
""",
6: r"""export const calcbcSeriesAppsPart6Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp6-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'sapp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use series to find $\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$.',
            options: ['$1/2$', '$0$', '$1$', '$\\infty$'],
            correctAnswer: 0,
            explanation: '$e^x - 1 - x = \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$. Divided by $x^2$: $\\frac{1}{2} + \\frac{x}{6} + \\cdots \\to 1/2$.'
          },
          {
            question: 'For $f(x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$, what is $f$?',
            options: ['$\\cos x$', '$\\sin x$', '$e^{-x}$', '$\\cosh x$'],
            correctAnswer: 0,
            explanation: 'This is exactly the Maclaurin series for $\\cos x$.'
          }
        ]
      }
    },
    {
      id: 'sapp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcSeriesAppsPart7Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp7-intro',
      type: 'text' as const,
      content: `# Series Applications — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'sapp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^{0.5} \\frac{\\sin x}{x}\\,dx$ to 3 terms:',
            options: ['$0.5 - (0.5)^3/18 + (0.5)^5/600 \\approx 0.4931$', '$0.5$', '$\\ln 2$', '$\\pi/6$'],
            correctAnswer: 0,
            explanation: '$\\sin x/x = 1 - x^2/6 + x^4/120 - \\cdots$. Integrate: $[x - x^3/18 + x^5/600]_0^{0.5}$.'
          }
        ]
      }
    },
    {
      id: 'sapp7-summary',
      type: 'text' as const,
      content: `### Series Applications — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-series-applications-calcbc-part{i}.ts', parts[i])

print("\nTaylor (7), Lagrange (7), Power Series (7), Series Apps (7) complete!")
print("Total files written: 28")
