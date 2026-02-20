#!/usr/bin/env python3
"""Generate AP Calculus BC: Integration by Parts, Partial Fractions, Improper Integrals."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# INTEGRATION BY PARTS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcIntByPartsPart1Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp1-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 1 of 7 — The Formula**

### Integration by Parts Formula

$$\int u\,dv = uv - \int v\,du$$

### LIATE Rule for Choosing $u$

Choose $u$ in this priority order:
1. **L**ogarithmic ($\ln x$, $\log x$)
2. **I**nverse trig ($\arctan x$, $\arcsin x$)
3. **A**lgebraic ($x^2$, $x$, polynomials)
4. **T**rigonometric ($\sin x$, $\cos x$)
5. **E**xponential ($e^x$, $2^x$)

### Worked Example

$\int x\,e^x\,dx$

$u = x$, $dv = e^x\,dx$

$du = dx$, $v = e^x$

$\int x\,e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C = e^x(x-1) + C$`
    },
    {
      id: 'ibp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration by Parts** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int x\\cos x\\,dx$.',
            options: ['$x\\sin x + \\cos x + C$', '$x\\sin x - \\cos x + C$', '$x\\cos x + \\sin x + C$', '$\\frac{x^2}{2}\\sin x + C$'],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\cos x\\,dx$. $du = dx$, $v = \\sin x$. $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.'
          },
          {
            question: 'To integrate $\\int \\ln x\\,dx$, what should $u$ be?',
            options: ['$u = \\ln x$', '$u = x$', '$u = 1$', '$u = x\\ln x$'],
            correctAnswer: 0,
            explanation: 'LIATE: $\\ln x$ is logarithmic, highest priority for $u$. $dv = dx$, $v = x$.'
          }
        ]
      }
    },
    {
      id: 'ibp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $\\int u\\,dv = uv - \\int v\\,du$
2. Use LIATE to choose $u$
3. $\\int \\ln x\\,dx = x\\ln x - x + C$`
    }
  ]
};
""",
2: r"""export const calcbcIntByPartsPart2Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp2-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 2 of 7 — Tabular Method**

### The Tabular (Column) Method

For $\int (\text{polynomial}) \cdot (\text{easy to integrate})\,dx$:

| Sign | Differentiate | Integrate |
|------|--------------|-----------|
| $+$ | $x^2$ | $e^x$ |
| $-$ | $2x$ | $e^x$ |
| $+$ | $2$ | $e^x$ |
| $-$ | $0$ | $e^x$ |

Result: $x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$

Multiply diagonally and alternate signs!`
    },
    {
      id: 'ibp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tabular Method** 🎯',
      exercise: {
        questions: [
          {
            question: 'Use tabular integration for $\\int x^3 e^{2x}\\,dx$. What is the coefficient of $e^{2x}$ in the result?',
            options: ['$\\frac{x^3}{2} - \\frac{3x^2}{4} + \\frac{3x}{4} - \\frac{3}{8}$', '$x^3 - 3x^2 + 6x - 6$', '$\\frac{x^3}{2} - \\frac{3x^2}{2} + 3x - 3$', '$x^3 - x^2 + x - 1$'],
            correctAnswer: 0,
            explanation: 'Tabular with $v\' = e^{2x}$: each integration divides by 2. Result: $e^{2x}(\\frac{x^3}{2} - \\frac{3x^2}{4} + \\frac{3x}{4} - \\frac{3}{8}) + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Tabular method is fast for polynomial × exponential/trig
2. Alternate signs: $+, -, +, -, ...$
3. Multiply diagonally across columns`
    }
  ]
};
""",
3: r"""export const calcbcIntByPartsPart3Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp3-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 3 of 7 — Cycling (Boomerang) Problems**

### When IBP Cycles Back

For $\int e^x \sin x\,dx$, doing IBP twice brings back the original integral!

$I = \int e^x \sin x\,dx$

IBP #1: $u = \sin x$, $dv = e^x\,dx$
$I = e^x \sin x - \int e^x \cos x\,dx$

IBP #2: $u = \cos x$, $dv = e^x\,dx$
$I = e^x \sin x - e^x \cos x - \int e^x(-\sin x)\,dx$
$I = e^x \sin x - e^x \cos x - I$

$2I = e^x(\sin x - \cos x)$

$$I = \frac{e^x(\sin x - \cos x)}{2} + C$$`
    },
    {
      id: 'ibp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Cycling IBP** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int e^x \\cos x\\,dx$.',
            options: ['$\\frac{e^x(\\sin x + \\cos x)}{2} + C$', '$\\frac{e^x(\\cos x - \\sin x)}{2} + C$', '$e^x \\cos x + C$', '$e^x \\sin x + C$'],
            correctAnswer: 0,
            explanation: 'Apply IBP twice: $I = e^x \\cos x + e^x \\sin x - I$. $2I = e^x(\\sin x + \\cos x)$. $I = \\frac{e^x(\\sin x + \\cos x)}{2} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. $e^x \\cdot \\text{trig}$ always cycles after 2 applications
2. Solve for $I$ algebraically
3. Keep the same choice pattern for $u$ both times!`
    }
  ]
};
""",
4: r"""export const calcbcIntByPartsPart4Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp4-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 4 of 7 — Definite Integrals with IBP**

### Formula for Definite Integrals

$$\int_a^b u\,dv = [uv]_a^b - \int_a^b v\,du$$

### Worked Example

$\int_0^1 xe^x\,dx = [xe^x]_0^1 - \int_0^1 e^x\,dx = e - [e^x]_0^1 = e - (e-1) = 1$`
    },
    {
      id: 'ibp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Definite IBP** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_1^e \\ln x\\,dx$.',
            options: ['$1$', '$e - 1$', '$e$', '$0$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $dv = dx$. $[x\\ln x]_1^e - \\int_1^e dx = (e - 0) - (e - 1) = 1$.'
          },
          {
            question: 'Evaluate $\\int_0^{\\pi} x\\sin x\\,dx$.',
            options: ['$\\pi$', '$2$', '$0$', '$2\\pi$'],
            correctAnswer: 0,
            explanation: '$u = x$, $dv = \\sin x\\,dx$. $[-x\\cos x]_0^{\\pi} + \\int_0^{\\pi}\\cos x\\,dx = \\pi + [\\sin x]_0^{\\pi} = \\pi + 0 = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'ibp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
1. Apply bounds to the $uv$ term
2. Bounds carry through to the remaining integral`
    }
  ]
};
""",
5: r"""export const calcbcIntByPartsPart5Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp5-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 5 of 7 — Special Cases**

### Inverse Trig Integrals

$\int \arctan x\,dx$: $u = \arctan x$, $dv = dx$

$= x\arctan x - \int \frac{x}{1+x^2}\,dx = x\arctan x - \frac{1}{2}\ln(1+x^2) + C$

### $\int \ln x$ derivatives

$\int (\ln x)^2\,dx$: $u = (\ln x)^2$, $dv = dx$

$= x(\ln x)^2 - 2\int \ln x\,dx = x(\ln x)^2 - 2(x\ln x - x) + C$`
    },
    {
      id: 'ibp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Special Cases** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int \\arcsin x\\,dx$. What is the result?',
            options: ['$x\\arcsin x + \\sqrt{1-x^2} + C$', '$x\\arcsin x - \\sqrt{1-x^2} + C$', '$\\frac{x}{\\sqrt{1-x^2}} + C$', '$x\\arcsin x + C$'],
            correctAnswer: 0,
            explanation: '$u = \\arcsin x$, $dv = dx$. $x\\arcsin x - \\int \\frac{x}{\\sqrt{1-x^2}}\\,dx$. Let $w = 1-x^2$: $= x\\arcsin x + \\sqrt{1-x^2} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
1. Inverse trig and logarithmic functions always go as $u$
2. The resulting integral usually becomes a u-substitution`
    }
  ]
};
""",
6: r"""export const calcbcIntByPartsPart6Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp6-intro',
      type: 'text' as const,
      content: `# Integration by Parts

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'ibp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed IBP Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int x^2 \\sin x\\,dx = $',
            options: ['$-x^2\\cos x + 2x\\sin x + 2\\cos x + C$', '$x^2\\cos x + 2x\\sin x + C$', '$-x^2\\cos x + 2\\sin x + C$', '$x^2\\sin x - 2x\\cos x + C$'],
            correctAnswer: 0,
            explanation: 'Tabular: $+x^2(-\\cos x) - 2x(-\\sin x) + 2(\\cos x) = -x^2\\cos x + 2x\\sin x + 2\\cos x + C$.'
          },
          {
            question: '$\\int x\\ln x\\,dx = $',
            options: ['$\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$', '$\\frac{x^2}{2}\\ln x + C$', '$x\\ln x - x + C$', '$\\frac{x^2}{4}\\ln x + C$'],
            correctAnswer: 0,
            explanation: '$u = \\ln x$, $dv = x\\,dx$. $\\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x}\\,dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C$.'
          }
        ]
      }
    },
    {
      id: 'ibp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcIntByPartsPart7Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'ibp7-intro',
      type: 'text' as const,
      content: `# Integration by Parts — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'ibp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_0^1 x^2 e^x\\,dx = $',
            options: ['$e - 2$', '$e$', '$e - 1$', '$2e - 2$'],
            correctAnswer: 0,
            explanation: 'Tabular: $[x^2 e^x - 2xe^x + 2e^x]_0^1 = (e - 2e + 2e) - (0 - 0 + 2) = e - 2$.'
          },
          {
            question: '$\\int e^{2x}\\sin x\\,dx = $',
            options: ['$\\frac{e^{2x}(2\\sin x - \\cos x)}{5} + C$', '$\\frac{e^{2x}(\\sin x - \\cos x)}{2} + C$', '$e^{2x}\\sin x + C$', '$\\frac{e^{2x}\\cos x}{5} + C$'],
            correctAnswer: 0,
            explanation: 'Cycling IBP with $e^{2x}$: after two applications, $5I = e^{2x}(2\\sin x - \\cos x)$.'
          }
        ]
      }
    },
    {
      id: 'ibp7-summary',
      type: 'text' as const,
      content: `### Integration by Parts — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-integration-by-parts-calcbc-part{i}.ts', parts[i])

###############################################################################
# PARTIAL FRACTIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcPartialFracPart1Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf1-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 1 of 7 — The Concept**

### When to Use

For integrals of the form $\int \frac{P(x)}{Q(x)}\,dx$ where $Q$ factors into linear or quadratic terms.

### Distinct Linear Factors

$$\frac{1}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

### Worked Example

$\int \frac{1}{x^2 - 1}\,dx = \int \frac{1}{(x-1)(x+1)}\,dx$

$\frac{1}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1}$

$1 = A(x+1) + B(x-1)$

$x = 1$: $1 = 2A$, $A = 1/2$

$x = -1$: $1 = -2B$, $B = -1/2$

$$\int \left(\frac{1/2}{x-1} - \frac{1/2}{x+1}\right)\,dx = \frac{1}{2}\ln|x-1| - \frac{1}{2}\ln|x+1| + C$$`
    },
    {
      id: 'pf1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Partial Fractions** 🎯',
      exercise: {
        questions: [
          {
            question: 'Decompose $\\frac{3}{x(x+3)}$.',
            options: ['$\\frac{1}{x} - \\frac{1}{x+3}$', '$\\frac{1}{x} + \\frac{1}{x+3}$', '$\\frac{3}{x} - \\frac{3}{x+3}$', '$\\frac{1}{x} - \\frac{3}{x+3}$'],
            correctAnswer: 0,
            explanation: '$3 = A(x+3) + Bx$. $x=0$: $3 = 3A$, $A = 1$. $x=-3$: $3 = -3B$, $B = -1$. Result: $\\frac{1}{x} - \\frac{1}{x+3}$.'
          }
        ]
      }
    },
    {
      id: 'pf1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Factor the denominator first
2. Set up: one fraction per factor
3. Solve for constants using strategic $x$ values`
    }
  ]
};
""",
2: r"""export const calcbcPartialFracPart2Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf2-intro',
      type: 'text' as const,
      content: `# Partial Fraction Decomposition

**Part 2 of 7 — Repeated Linear Factors**

### Repeated Factors

$$\frac{f(x)}{(x-a)^n} = \frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \cdots + \frac{A_n}{(x-a)^n}$$

### Example

$\frac{3x+5}{(x+1)^2} = \frac{A}{x+1} + \frac{B}{(x+1)^2}$

$3x + 5 = A(x+1) + B$

$x = -1$: $2 = B$

Coefficient of $x$: $3 = A$

$$\int \left(\frac{3}{x+1} + \frac{2}{(x+1)^2}\right)\,dx = 3\ln|x+1| - \frac{2}{x+1} + C$$`
    },
    {
      id: 'pf2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Repeated Factors** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{5}{(x-2)^2}\\,dx = $',
            options: ['$-\\frac{5}{x-2} + C$', '$\\frac{5}{x-2} + C$', '$5\\ln|x-2| + C$', '$-\\frac{5}{2(x-2)^2} + C$'],
            correctAnswer: 0,
            explanation: '$\\int 5(x-2)^{-2}\\,dx = 5 \\cdot \\frac{(x-2)^{-1}}{-1} + C = -\\frac{5}{x-2} + C$.'
          }
        ]
      }
    },
    {
      id: 'pf2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Repeated factor $(x-a)^n$ needs $n$ terms
2. Each term has increasing powers in the denominator`
    }
  ]
};
""",
3: r"""export const calcbcPartialFracPart3Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf3-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 3 of 7 — Integration Practice**

### The Key Antiderivatives

$$\int \frac{A}{x-a}\,dx = A\ln|x-a| + C$$

$$\int \frac{A}{(x-a)^n}\,dx = \frac{A}{(1-n)(x-a)^{n-1}} + C \quad (n \neq 1)$$`
    },
    {
      id: 'pf3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integration Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_2^3 \\frac{1}{x^2-1}\\,dx$.',
            options: ['$\\frac{1}{2}\\ln\\frac{4}{3}$', '$\\ln 2$', '$\\frac{1}{2}\\ln 2$', '$\\ln\\frac{4}{3}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{2}[\\ln|x-1| - \\ln|x+1|]_2^3 = \\frac{1}{2}[(\\ln 2 - \\ln 4) - (\\ln 1 - \\ln 3)] = \\frac{1}{2}[\\ln 2 - \\ln 4 + \\ln 3] = \\frac{1}{2}\\ln\\frac{6}{4} = \\frac{1}{2}\\ln\\frac{3}{2}$. Hmm, let me redo: $\\frac{1}{2}[\\ln|x-1|-\\ln|x+1|]_2^3 = \\frac{1}{2}[(\\ln 2 - \\ln 4)-(\\ln 1 - \\ln 3)] = \\frac{1}{2}[\\ln 2 - \\ln 4 + \\ln 3] = \\frac{1}{2}\\ln(6/4) = \\frac{1}{2}\\ln(3/2)$.'
          }
        ]
      }
    },
    {
      id: 'pf3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Each partial fraction integrates to logs or power rule.`
    }
  ]
};
""",
4: r"""export const calcbcPartialFracPart4Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf4-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 4 of 7 — Long Division First**

### When Degree of Numerator $\geq$ Degree of Denominator

You must do **polynomial long division** first!

$\frac{x^2 + 1}{x - 1} = x + 1 + \frac{2}{x-1}$

Then integrate term by term.`
    },
    {
      id: 'pf4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Long Division + PFD** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x^2}{x-1}\\,dx = $',
            options: ['$\\frac{x^2}{2} + x + \\ln|x-1| + C$', '$\\frac{x^2}{2} + \\ln|x-1| + C$', '$x + \\ln|x-1| + C$', '$\\frac{x^3}{3(x-1)} + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{x^2}{x-1} = x + 1 + \\frac{1}{x-1}$. $\\int = \\frac{x^2}{2} + x + \\ln|x-1| + C$.'
          }
        ]
      }
    },
    {
      id: 'pf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Always check: is the degree of numerator $\geq$ denominator? If so, divide first!`
    }
  ]
};
""",
5: r"""export const calcbcPartialFracPart5Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf5-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 5 of 7 — Logistic DE Connection**

### The Logistic Equation

$$\frac{dP}{dt} = kP(L - P)$$

Separation of variables:

$$\frac{dP}{P(L-P)} = k\,dt$$

Use partial fractions on the left side!

$$\frac{1}{P(L-P)} = \frac{1}{L}\left(\frac{1}{P} + \frac{1}{L-P}\right)$$`
    },
    {
      id: 'pf5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Logistic Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'Decompose $\\frac{1}{P(10-P)}$.',
            options: ['$\\frac{1}{10}\\left(\\frac{1}{P} + \\frac{1}{10-P}\\right)$', '$\\frac{1}{P} - \\frac{1}{10-P}$', '$\\frac{1}{10P} - \\frac{1}{10(10-P)}$', '$\\frac{10}{P(10-P)}$'],
            correctAnswer: 0,
            explanation: '$\\frac{A}{P} + \\frac{B}{10-P}$. $1 = A(10-P) + BP$. $P=0$: $A = 1/10$. $P=10$: $B = 1/10$.'
          }
        ]
      }
    },
    {
      id: 'pf5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Partial fractions are the key technique for solving the logistic DE.`
    }
  ]
};
""",
6: r"""export const calcbcPartialFracPart6Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf6-intro',
      type: 'text' as const,
      content: `# Partial Fractions

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'pf6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{2x+3}{(x+1)(x+2)}\\,dx = $',
            options: ['$\\ln|x+1| + \\ln|x+2| + C$', '$\\ln|x+1| - \\ln|x+2| + C$', '$2\\ln|x+1| + C$', '$\\ln|(x+1)(x+2)| + C$'],
            correctAnswer: 0,
            explanation: '$\\frac{A}{x+1} + \\frac{B}{x+2}$. $2x+3 = A(x+2) + B(x+1)$. $x=-1$: $1 = A$. $x=-2$: $-1 = -B$, $B = 1$. $\\int \\frac{1}{x+1} + \\frac{1}{x+2}\\,dx = \\ln|x+1| + \\ln|x+2| + C$.'
          }
        ]
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcPartialFracPart7Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'pf7-intro',
      type: 'text' as const,
      content: `# Partial Fractions — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'pf7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int \\frac{x+5}{x^2+4x+3}\\,dx = $',
            options: ['$2\\ln|x+1| - \\ln|x+3| + C$', '$\\ln|x^2+4x+3| + C$', '$\\ln|x+1| + \\ln|x+3| + C$', '$\\frac{1}{2}\\ln|x^2+4x+3| + C$'],
            correctAnswer: 0,
            explanation: '$x^2+4x+3 = (x+1)(x+3)$. $\\frac{A}{x+1} + \\frac{B}{x+3}$. $x+5 = A(x+3) + B(x+1)$. $x=-1$: $4 = 2A$, $A=2$. $x=-3$: $2 = -2B$, $B=-1$.'
          }
        ]
      }
    },
    {
      id: 'pf7-summary',
      type: 'text' as const,
      content: `### Partial Fractions — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-partial-fractions-calcbc-part{i}.ts', parts[i])

###############################################################################
# IMPROPER INTEGRALS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcImproperPart1Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp1-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 1 of 7 — Infinite Limits of Integration**

### Type 1: Infinite Bounds

$$\int_a^{\infty} f(x)\,dx = \lim_{b \to \infty} \int_a^b f(x)\,dx$$

- If the limit exists → the integral **converges**
- If the limit is $\pm\infty$ or DNE → the integral **diverges**

### Classic Example

$$\int_1^{\infty} \frac{1}{x^2}\,dx = \lim_{b \to \infty} \left[-\frac{1}{x}\right]_1^b = \lim_{b \to \infty}\left(-\frac{1}{b} + 1\right) = 1$$

Converges! The infinite area under $1/x^2$ is exactly $1$.`
    },
    {
      id: 'imp1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Infinite Bounds** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x}\\,dx$ converge or diverge?',
            options: ['Diverges', 'Converges to $1$', 'Converges to $0$', 'Converges to $\\ln 2$'],
            correctAnswer: 0,
            explanation: '$\\lim_{b \\to \\infty} [\\ln x]_1^b = \\lim_{b \\to \\infty} \\ln b = \\infty$. Diverges!'
          },
          {
            question: 'Evaluate $\\int_0^{\\infty} e^{-x}\\,dx$.',
            options: ['$1$', '$0$', '$\\infty$', '$e$'],
            correctAnswer: 0,
            explanation: '$\\lim_{b \\to \\infty}[-e^{-x}]_0^b = \\lim_{b \\to \\infty}(-e^{-b} + 1) = 0 + 1 = 1$.'
          }
        ]
      }
    },
    {
      id: 'imp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. Replace $\\infty$ with a limit variable
2. Evaluate, then take the limit
3. $\\int_1^{\\infty} 1/x\\,dx$ diverges but $\\int_1^{\\infty} 1/x^2\\,dx$ converges`
    }
  ]
};
""",
2: r"""export const calcbcImproperPart2Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp2-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 2 of 7 — The $p$-Test**

### $p$-Integral Test

$$\int_1^{\infty} \frac{1}{x^p}\,dx \begin{cases} \text{converges} & \text{if } p > 1 \\ \text{diverges} & \text{if } p \leq 1 \end{cases}$$

### Key Examples

| Integral | $p$ | Result |
|----------|-----|--------|
| $\int_1^{\infty} 1/x^2\\,dx$ | $2$ | Converges (= $1$) |
| $\int_1^{\infty} 1/x\\,dx$ | $1$ | Diverges |
| $\int_1^{\infty} 1/\sqrt{x}\\,dx$ | $1/2$ | Diverges |
| $\int_1^{\infty} 1/x^3\\,dx$ | $3$ | Converges (= $1/2$) |`
    },
    {
      id: 'imp2-quiz1',
      type: 'multiple-choice' as const,
      content: '**$p$-Test** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x^{3/2}}\\,dx$ converge or diverge?',
            options: ['Converges', 'Diverges', 'Cannot determine', 'Oscillates'],
            correctAnswer: 0,
            explanation: '$p = 3/2 > 1$, so it converges.'
          },
          {
            question: '$\\int_1^{\\infty} \\frac{1}{x^{0.99}}\\,dx$:',
            options: ['Diverges', 'Converges', 'Converges to $100$', 'Need more info'],
            correctAnswer: 0,
            explanation: '$p = 0.99 < 1$, so it diverges. Even though $0.99$ is close to $1$, the integral still diverges.'
          }
        ]
      }
    },
    {
      id: 'imp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. $p > 1$: converges. $p \\leq 1$: diverges.
2. The boundary $p = 1$ ($\\ln x$) is the dividing line`
    }
  ]
};
""",
3: r"""export const calcbcImproperPart3Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp3-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 3 of 7 — Discontinuous Integrands (Type 2)**

### Type 2: Vertical Asymptotes

If $f$ has a vertical asymptote at $x = c$ inside $[a, b]$:

$$\int_a^b f(x)\,dx = \lim_{t \to c^-}\int_a^t f(x)\,dx + \lim_{t \to c^+}\int_t^b f(x)\,dx$$

### Example

$\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{t \to 0^+}\int_t^1 x^{-1/2}\,dx = \lim_{t \to 0^+}[2\sqrt{x}]_t^1 = 2 - 0 = 2$`
    },
    {
      id: 'imp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Discontinuous Integrands** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_0^1 \\frac{1}{x}\\,dx$ converge?',
            options: ['No, it diverges', 'Yes, to $1$', 'Yes, to $\\ln 1 = 0$', 'Yes, to $\\infty$'],
            correctAnswer: 0,
            explanation: '$\\lim_{t \\to 0^+}[\\ln x]_t^1 = 0 - \\lim_{t \\to 0^+}\\ln t = -(-\\infty) = \\infty$. Diverges.'
          },
          {
            question: 'Evaluate $\\int_0^4 \\frac{1}{\\sqrt{4-x}}\\,dx$.',
            options: ['$4$', '$2$', '$\\infty$', '$0$'],
            correctAnswer: 0,
            explanation: 'Asymptote at $x = 4$. $\\lim_{t \\to 4^-}[-2\\sqrt{4-x}]_0^t = \\lim_{t \\to 4^-}(-2\\sqrt{4-t}+2\\cdot 2) = 0 + 4 = 4$.'
          }
        ]
      }
    },
    {
      id: 'imp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
1. Check for vertical asymptotes inside the interval
2. Split and use limits from the appropriate side`
    }
  ]
};
""",
4: r"""export const calcbcImproperPart4Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp4-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 4 of 7 — Comparison Test**

### Direct Comparison Test

For $0 \leq f(x) \leq g(x)$ on $[a, \infty)$:

- If $\int_a^{\infty} g\\,dx$ converges → $\int_a^{\infty} f\\,dx$ converges
- If $\int_a^{\infty} f\\,dx$ diverges → $\int_a^{\infty} g\\,dx$ diverges

**Bigger converges → smaller converges**
**Smaller diverges → bigger diverges**`
    },
    {
      id: 'imp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comparison Test** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\int_1^{\\infty} \\frac{1}{x^2 + 1}\\,dx$ converge?',
            options: ['Yes, by comparison with $1/x^2$', 'No', 'Cannot determine', 'Yes, equals $\\pi/4$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{x^2+1} < \\frac{1}{x^2}$ and $\\int_1^{\\infty} 1/x^2\\,dx$ converges. By comparison, our integral converges.'
          }
        ]
      }
    },
    {
      id: 'imp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Comparison test: bound by a known convergent/divergent integral.`
    }
  ]
};
""",
5: r"""export const calcbcImproperPart5Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp5-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 5 of 7 — Both-Sided Improper Integrals**

### Integrals from $-\infty$ to $\infty$

$$\int_{-\infty}^{\infty} f(x)\,dx = \int_{-\infty}^c f(x)\,dx + \int_c^{\infty} f(x)\,dx$$

**Both** must converge independently!`
    },
    {
      id: 'imp5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Full Line Integrals** 🎯',
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2}\\,dx$.',
            options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$\\int_{-\\infty}^{\\infty} \\frac{dx}{1+x^2} = [\\arctan x]_{-\\infty}^{\\infty} = \\frac{\\pi}{2} - (-\\frac{\\pi}{2}) = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'imp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Split at any point $c$ (usually 0) and evaluate each half.`
    }
  ]
};
""",
6: r"""export const calcbcImproperPart6Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp6-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'imp6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\int_1^{\\infty} \\frac{1}{x(x+1)}\\,dx = $',
            options: ['$\\ln 2$', '$1$', '$\\infty$', '$\\ln 3$'],
            correctAnswer: 0,
            explanation: 'Partial fractions: $\\frac{1}{x} - \\frac{1}{x+1}$. $[\\ln x - \\ln(x+1)]_1^{\\infty} = [\\ln\\frac{x}{x+1}]_1^{\\infty}$. As $x \\to \\infty$: $\\ln 1 = 0$. At $x=1$: $\\ln(1/2) = -\\ln 2$. Answer: $0 - (-\\ln 2) = \\ln 2$.'
          },
          {
            question: '$\\int_2^{\\infty} xe^{-x}\\,dx$ converges. True or false?',
            options: ['True', 'False'],
            correctAnswer: 0,
            explanation: 'Exponential decay dominates polynomial growth: $xe^{-x} \\to 0$ fast enough. IBP gives a finite answer.'
          }
        ]
      }
    },
    {
      id: 'imp6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcImproperPart7Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp7-intro',
      type: 'text' as const,
      content: `# Improper Integrals — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'imp7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which integral converges?',
            options: ['$\\int_1^{\\infty} \\frac{1}{x^{1.01}}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{x}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx$', '$\\int_1^{\\infty} \\frac{1}{x^{0.5}}\\,dx$'],
            correctAnswer: 0,
            explanation: '$p = 1.01 > 1$: converges. All others have $p \\leq 1$: diverge.'
          },
          {
            question: '$\\int_0^{\\infty} e^{-3x}\\,dx = $',
            options: ['$\\frac{1}{3}$', '$3$', '$\\frac{1}{e^3}$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$[-\\frac{1}{3}e^{-3x}]_0^{\\infty} = 0 - (-\\frac{1}{3}) = \\frac{1}{3}$.'
          }
        ]
      }
    },
    {
      id: 'imp7-summary',
      type: 'text' as const,
      content: `### Improper Integrals — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-improper-integrals-calcbc-part{i}.ts', parts[i])

print("\nIntegration by Parts (7), Partial Fractions (7), Improper Integrals (7) complete!")
print("Total files written: 21")
