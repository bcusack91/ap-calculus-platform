#!/usr/bin/env python3
"""Generate AP Calculus BC: Sequences, Infinite Series, Alternating Series, Convergence Tests."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# INFINITE SEQUENCES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcSequencesPart1Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq1-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 1 of 7 — Definition & Convergence**

### What Is a Sequence?

An ordered list of numbers: $a_1, a_2, a_3, \ldots$ or $\{a_n\}_{n=1}^{\infty}$

### Convergence

A sequence $\{a_n\}$ **converges** to $L$ if:

$$\lim_{n \to \infty} a_n = L$$

If no such $L$ exists, the sequence **diverges**.

### Examples

| Sequence | Limit | Converges? |
|----------|-------|-----------|
| $a_n = 1/n$ | $0$ | Yes |
| $a_n = (-1)^n$ | DNE | No |
| $a_n = (1 + 1/n)^n$ | $e$ | Yes |
| $a_n = n^2$ | $\infty$ | No |`
    },
    {
      id: 'seq1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Sequence Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $a_n = \\frac{3n+1}{2n-5}$ converge?',
            options: ['Yes, to $3/2$', 'Yes, to $0$', 'No', 'Yes, to $\\infty$'],
            correctAnswer: 0,
            explanation: '$\\lim_{n \\to \\infty} \\frac{3n+1}{2n-5} = \\frac{3}{2}$. Divide top and bottom by $n$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{n!}{n^n}$:',
            options: ['$0$', '$1$', '$\\infty$', '$1/e$'],
            correctAnswer: 0,
            explanation: '$n!/n^n = (1/n)(2/n)(3/n)\\cdots(n/n)$. Each factor $\\leq 1$ and the first factor $\\to 0$. The limit is $0$.'
          }
        ]
      }
    },
    {
      id: 'seq1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. A sequence is a function on the natural numbers
2. "Converges" means the limit exists and is finite`
    }
  ]
};
""",
2: r"""export const calcbcSequencesPart2Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq2-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 2 of 7 — Bounded & Monotonic Sequences**

### Monotone Convergence Theorem

If a sequence is **bounded** and **monotonic**, it converges.

- **Monotonic increasing**: $a_{n+1} \geq a_n$ for all $n$
- **Monotonic decreasing**: $a_{n+1} \leq a_n$ for all $n$
- **Bounded**: there exist $M, m$ such that $m \leq a_n \leq M$

### Squeeze Theorem for Sequences

If $b_n \leq a_n \leq c_n$ and $\lim b_n = \lim c_n = L$, then $\lim a_n = L$.`
    },
    {
      id: 'seq2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Bounded & Monotonic** 🎯',
      exercise: {
        questions: [
          {
            question: '$a_n = \\frac{\\sin n}{n}$ converges to:',
            options: ['$0$', '$1$', 'DNE', '$-1$'],
            correctAnswer: 0,
            explanation: '$-1/n \\leq \\sin n / n \\leq 1/n$. Both bounds $\\to 0$. By Squeeze Theorem, $\\lim a_n = 0$.'
          }
        ]
      }
    },
    {
      id: 'seq2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Bounded + Monotonic → Converges. Squeeze Theorem works for sequences too!`
    }
  ]
};
""",
3: r"""export const calcbcSequencesPart3Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq3-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 3 of 7 — Geometric & Recursive Sequences**

### Geometric Sequences

$a_n = a_1 \cdot r^{n-1}$

Converges to $0$ if $|r| < 1$, diverges if $|r| \geq 1$ (except $r = 1$, const).

### Recursive Sequences

Defined by a recurrence: $a_{n+1} = f(a_n)$

To find the limit $L$: set $L = f(L)$ and solve.`
    },
    {
      id: 'seq3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Geometric/Recursive** 🎯',
      exercise: {
        questions: [
          {
            question: '$a_1 = 2$, $a_{n+1} = \\sqrt{2 + a_n}$. If it converges, what is $L$?',
            options: ['$2$', '$\\sqrt{2}$', '$1 + \\sqrt{3}$', '$4$'],
            correctAnswer: 0,
            explanation: '$L = \\sqrt{2 + L}$. $L^2 = 2 + L$. $L^2 - L - 2 = 0$. $(L-2)(L+1) = 0$. $L = 2$ (positive).'
          }
        ]
      }
    },
    {
      id: 'seq3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
For recursive sequences: set $L = f(L)$ and solve for $L$.`
    }
  ]
};
""",
4: r"""export const calcbcSequencesPart4Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq4-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 4 of 7 — Growth Rate Hierarchy**

### Dominance Hierarchy ($n \to \infty$)

$$\ln n \ll n^p \ll a^n \ll n! \ll n^n$$

(for $p > 0$, $a > 1$)

This means: log grows **slowest**, then polynomial, exponential, factorial, $n^n$ grows **fastest**.

### Example

$\lim_{n \to \infty} \frac{n^{100}}{2^n} = 0$ because exponential beats any polynomial.`
    },
    {
      id: 'seq4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Growth Rates** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} \\frac{e^n}{n!}$:',
            options: ['$0$', '$\\infty$', '$1$', '$e$'],
            correctAnswer: 0,
            explanation: 'Factorial grows faster than exponential. $n!$ dominates $e^n$, so the limit is $0$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{\\ln n}{\\sqrt{n}}$:',
            options: ['$0$', '$\\infty$', '$1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\sqrt{n} = n^{1/2}$ (polynomial) dominates $\\ln n$. Limit is $0$.'
          }
        ]
      }
    },
    {
      id: 'seq4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
$\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n$`
    }
  ]
};
""",
5: r"""export const calcbcSequencesPart5Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq5-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 5 of 7 — Sequences vs. Series**

### Critical Distinction

- **Sequence**: the list $a_1, a_2, a_3, \ldots$ → does $a_n$ approach a limit?
- **Series**: the sum $\sum_{n=1}^{\infty} a_n$ → does the sum converge?

### Divergence Test Preview

If $\lim_{n \to \infty} a_n \neq 0$, then $\sum a_n$ **diverges**.

But $\lim a_n = 0$ does NOT guarantee convergence! ($\sum 1/n$ diverges.)`
    },
    {
      id: 'seq5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Sequences vs Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'The sequence $\\{1/n\\}$ converges. Does the series $\\sum 1/n$ converge?',
            options: ['No, the harmonic series diverges', 'Yes', 'Cannot determine', 'Only if $n > 2$'],
            correctAnswer: 0,
            explanation: 'The harmonic series $\\sum 1/n$ diverges even though $1/n \\to 0$.'
          }
        ]
      }
    },
    {
      id: 'seq5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Sequence convergence and series convergence are different questions!`
    }
  ]
};
""",
6: r"""export const calcbcSequencesPart6Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq6-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'seq6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} \\left(1 + \\frac{3}{n}\\right)^n$:',
            options: ['$e^3$', '$3$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'This is the form $\\lim(1 + k/n)^n = e^k$. Here $k = 3$, so the limit is $e^3$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} n^{1/n}$:',
            options: ['$1$', '$0$', '$e$', '$\\infty$'],
            correctAnswer: 0,
            explanation: 'Let $y = n^{1/n}$. $\\ln y = \\frac{\\ln n}{n} \\to 0$. So $y \\to e^0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'seq6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcSequencesPart7Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq7-intro',
      type: 'text' as const,
      content: `# Infinite Sequences — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'seq7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which sequence diverges?',
            options: ['$a_n = (-1)^n \\cdot n/(n+1)$', '$a_n = 1/n^2$', '$a_n = (0.99)^n$', '$a_n = 5/n$'],
            correctAnswer: 0,
            explanation: '$a_n$ oscillates between values approaching $\\pm 1$. No single limit exists.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{2^n}{n!}$:',
            options: ['$0$', '$\\infty$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: '$n!$ grows faster than $2^n$. Factorial dominates exponential, limit is $0$.'
          }
        ]
      }
    },
    {
      id: 'seq7-summary',
      type: 'text' as const,
      content: `### Infinite Sequences — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-infinite-sequences-calcbc-part{i}.ts', parts[i])

###############################################################################
# INFINITE SERIES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcSeriesPart1Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser1-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 1 of 7 — Partial Sums & Geometric Series**

### Partial Sums

$$S_n = \sum_{k=1}^n a_k = a_1 + a_2 + \cdots + a_n$$

$\sum_{n=1}^{\infty} a_n = L$ means $\lim_{n \to \infty} S_n = L$.

### Geometric Series

$$\sum_{n=0}^{\infty} ar^n = \frac{a}{1-r} \quad \text{if } |r| < 1$$

Diverges if $|r| \geq 1$.

### Example

$\sum_{n=0}^{\infty} \frac{3}{4^n} = \frac{3}{1 - 1/4} = 4$`
    },
    {
      id: 'ser1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Geometric Series** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{2}{3}\\right)^n = $',
            options: ['$2$', '$3$', '$2/3$', '$3/2$'],
            correctAnswer: 0,
            explanation: '$\\sum_{n=1}^{\\infty} (2/3)^n = \\frac{2/3}{1 - 2/3} = \\frac{2/3}{1/3} = 2$.'
          },
          {
            question: '$\\sum_{n=0}^{\\infty} (-1)^n \\cdot \\frac{1}{2^n} = $',
            options: ['$2/3$', '$1/2$', '$1$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'Geometric with $r = -1/2$: $\\frac{1}{1-(-1/2)} = \\frac{1}{3/2} = 2/3$.'
          }
        ]
      }
    },
    {
      id: 'ser1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Geometric: $\\frac{a}{1-r}$ when $|r| < 1$. First ratio, then answer!`
    }
  ]
};
""",
2: r"""export const calcbcSeriesPart2Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser2-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 2 of 7 — Telescoping Series & Divergence Test**

### Telescoping Series

$$\sum_{n=1}^{\infty}\left(\frac{1}{n} - \frac{1}{n+1}\right) = 1$$

Partial sum: $S_n = 1 - \frac{1}{n+1} \to 1$.

### $n$th Term Divergence Test

$$\text{If } \lim_{n \to \infty} a_n \neq 0 \text{, then } \sum a_n \text{ diverges}$$

**CAUTION**: If $\lim a_n = 0$, the test is INCONCLUSIVE.`
    },
    {
      id: 'ser2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Telescoping & Divergence Test** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$:',
            options: ['Diverges by divergence test', 'Converges to $1$', 'Converges to $0$', 'Need more tests'],
            correctAnswer: 0,
            explanation: '$\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\neq 0$. Diverges by the divergence test.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\left(\\frac{1}{n(n+1)}\\right) = $',
            options: ['$1$', '$1/2$', '$2$', 'Diverges'],
            correctAnswer: 0,
            explanation: 'Partial fractions: $\\frac{1}{n} - \\frac{1}{n+1}$. Telescopes to $1 - \\frac{1}{n+1} \\to 1$.'
          }
        ]
      }
    },
    {
      id: 'ser2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Telescoping: most terms cancel
2. Divergence test: $a_n \\not\\to 0$ → diverges`
    }
  ]
};
""",
3: r"""export const calcbcSeriesPart3Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser3-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 3 of 7 — Integral Test & $p$-Series**

### Integral Test

If $f$ is positive, continuous, decreasing for $x \geq 1$, and $a_n = f(n)$:

$$\sum_{n=1}^{\infty} a_n \text{ and } \int_1^{\infty} f(x)\,dx \text{ either both converge or both diverge}$$

### $p$-Series

$$\sum_{n=1}^{\infty} \frac{1}{n^p} \begin{cases} \text{converges} & p > 1 \\ \text{diverges} & p \leq 1 \end{cases}$$`
    },
    {
      id: 'ser3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Integral Test & $p$-Series** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^{3/2}}$ converge?',
            options: ['Yes, $p = 3/2 > 1$', 'No', 'Need integral test', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$p$-series with $p = 3/2 > 1$. Converges.'
          },
          {
            question: 'Does $\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}$ converge?',
            options: ['No, diverges', 'Yes', 'Need more info', '$p$-series'],
            correctAnswer: 0,
            explanation: 'Integral test: $\\int_2^{\\infty} \\frac{dx}{x\\ln x} = [\\ln(\\ln x)]_2^{\\infty} = \\infty$. Diverges.'
          }
        ]
      }
    },
    {
      id: 'ser3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
$p$-series: converges iff $p > 1$. Integral test connects series to improper integrals.`
    }
  ]
};
""",
4: r"""export const calcbcSeriesPart4Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser4-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 4 of 7 — Comparison Tests**

### Direct Comparison Test

For $0 \leq a_n \leq b_n$:
- $\sum b_n$ converges → $\sum a_n$ converges
- $\sum a_n$ diverges → $\sum b_n$ diverges

### Limit Comparison Test

If $\lim_{n \to \infty} \frac{a_n}{b_n} = c$ where $0 < c < \infty$:

$\sum a_n$ and $\sum b_n$ either both converge or both diverge.`
    },
    {
      id: 'ser4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Comparison Tests** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}$ converge?',
            options: ['Yes, by comparison with $1/n^2$', 'No', 'Need ratio test', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{n^2+1} < \\frac{1}{n^2}$ and $\\sum 1/n^2$ converges ($p = 2$). By direct comparison, converges.'
          },
          {
            question: 'Use limit comparison to determine if $\\sum \\frac{3n+1}{n^3-2}$ converges.',
            options: ['Converges (compare with $3/n^2$)', 'Diverges', 'Compare with $1/n$', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{(3n+1)/(n^3-2)}{1/n^2} = \\lim \\frac{n^2(3n+1)}{n^3-2} = 3$. Since $\\sum 1/n^2$ converges, so does our series.'
          }
        ]
      }
    },
    {
      id: 'ser4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Direct comparison needs inequality. Limit comparison just needs the ratio limit.`
    }
  ]
};
""",
5: r"""export const calcbcSeriesPart5Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser5-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 5 of 7 — Ratio & Root Tests**

### Ratio Test

$$L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|$$

- $L < 1$: converges absolutely
- $L > 1$ (or $\infty$): diverges
- $L = 1$: inconclusive

### Root Test

$$L = \lim_{n \to \infty} \sqrt[n]{|a_n|}$$

Same conclusions as ratio test.

**Best for**: factorials (ratio), $n$th powers (root).`
    },
    {
      id: 'ser5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Ratio & Root** 🎯',
      exercise: {
        questions: [
          {
            question: 'Test $\\sum \\frac{n!}{3^n}$ using the ratio test.',
            options: ['Diverges ($L = \\infty$)', 'Converges ($L < 1$)', 'Inconclusive', 'Converges ($L = 1/3$)'],
            correctAnswer: 0,
            explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{3^{n+1}} \\cdot \\frac{3^n}{n!} = \\frac{n+1}{3} \\to \\infty$. Diverges.'
          },
          {
            question: 'Test $\\sum \\left(\\frac{n}{2n+1}\\right)^n$ using the root test.',
            options: ['Converges ($L = 1/2$)', 'Diverges', 'Inconclusive', 'Converges ($L = 0$)'],
            correctAnswer: 0,
            explanation: '$\\sqrt[n]{|a_n|} = \\frac{n}{2n+1} \\to \\frac{1}{2} < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'ser5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Ratio test for factorials; root test for $n$th powers. Both inconclusive at $L = 1$.`
    }
  ]
};
""",
6: r"""export const calcbcSeriesPart6Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser6-intro',
      type: 'text' as const,
      content: `# Infinite Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'ser6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Series Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{2^n}{n^2}$:',
            options: ['Diverges (ratio test: $L = 2$)', 'Converges', 'Need comparison', 'Inconclusive'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\frac{2^{n+1}/(n+1)^2}{2^n/n^2} = 2 \\cdot \\frac{n^2}{(n+1)^2} \\to 2 > 1$. Diverges.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{1}{3^n + n}$:',
            options: ['Converges', 'Diverges', 'Inconclusive', 'Need integral test'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{3^n + n} < \\frac{1}{3^n}$ and $\\sum 1/3^n$ is a convergent geometric series. Converges by comparison.'
          }
        ]
      }
    },
    {
      id: 'ser6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcSeriesPart7Data = {
  topicSlug: 'infinite-series-calcbc',
  sections: [
    {
      id: 'ser7-intro',
      type: 'text' as const,
      content: `# Infinite Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'ser7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=0}^{\\infty} \\frac{5 \\cdot 2^n}{3^n} = $',
            options: ['$15$', '$10$', '$5/3$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$\\sum 5(2/3)^n = \\frac{5}{1 - 2/3} = \\frac{5}{1/3} = 15$.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n^2}{e^n}$:',
            options: ['Converges', 'Diverges', 'Inconclusive', 'Oscillates'],
            correctAnswer: 0,
            explanation: 'Ratio test: $\\frac{(n+1)^2/e^{n+1}}{n^2/e^n} = \\frac{(n+1)^2}{en^2} \\to 1/e < 1$. Converges.'
          }
        ]
      }
    },
    {
      id: 'ser7-summary',
      type: 'text' as const,
      content: `### Infinite Series — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-infinite-series-calcbc-part{i}.ts', parts[i])

###############################################################################
# ALTERNATING SERIES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcAlternatingPart1Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt1-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 1 of 7 — The Alternating Series Test**

### Alternating Series Test (Leibniz Test)

$\sum_{n=1}^{\infty} (-1)^{n+1} b_n$ converges if:

1. $b_n > 0$ (terms are positive)
2. $b_{n+1} \leq b_n$ (decreasing)
3. $\lim_{n \to \infty} b_n = 0$

### Examples

$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \cdots = \ln 2$

This is the **alternating harmonic series** — it converges!`
    },
    {
      id: 'alt1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Alternating Series Test** 🎯',
      exercise: {
        questions: [
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$ converge?',
            options: ['Yes, by AST', 'No', 'Need ratio test', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$b_n = 1/\\sqrt{n}$: positive ✓, decreasing ✓, limit $0$ ✓. Converges by AST.'
          },
          {
            question: 'Does $\\sum_{n=1}^{\\infty} \\frac{(-1)^n \\cdot n}{n+1}$ converge?',
            options: ['No, $b_n \\to 1 \\neq 0$', 'Yes by AST', 'Conditionally', 'Need more info'],
            correctAnswer: 0,
            explanation: '$b_n = n/(n+1) \\to 1 \\neq 0$. The terms do not go to zero. Diverges by the divergence test!'
          }
        ]
      }
    },
    {
      id: 'alt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
AST: decreasing positive terms going to zero → converges.`
    }
  ]
};
""",
2: r"""export const calcbcAlternatingPart2Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt2-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 2 of 7 — Error Bound**

### Alternating Series Error Bound

If $S = \sum_{n=1}^{\infty}(-1)^{n+1}b_n$ and $S_n$ is the $n$th partial sum:

$$|S - S_n| \leq b_{n+1}$$

The error is **at most** the absolute value of **the first omitted term**.

### Example

$S = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2}$. After 4 terms:

$S_4 = 1 - 1/4 + 1/9 - 1/16$

Error $\leq b_5 = 1/25 = 0.04$`
    },
    {
      id: 'alt2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Bound** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\sum \\frac{(-1)^{n+1}}{n!}$, how many terms ensure error $< 0.01$?',
            options: ['$4$ terms ($b_5 = 1/120 < 0.01$)', '$3$ terms', '$5$ terms', '$10$ terms'],
            correctAnswer: 0,
            explanation: '$b_5 = 1/5! = 1/120 \\approx 0.0083 < 0.01$. $b_4 = 1/4! = 1/24 \\approx 0.042 > 0.01$. Need 4 terms.'
          }
        ]
      }
    },
    {
      id: 'alt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Error $\\leq$ first omitted term. This is a very useful and simple bound!`
    }
  ]
};
""",
3: r"""export const calcbcAlternatingPart3Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt3-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 3 of 7 — Absolute vs Conditional Convergence**

### Absolute Convergence

$\sum a_n$ converges **absolutely** if $\sum |a_n|$ converges.

### Conditional Convergence

$\sum a_n$ converges **conditionally** if $\sum a_n$ converges but $\sum |a_n|$ diverges.

### Key Fact

Absolute convergence → convergence (but NOT vice versa!)

### Example

$\sum \frac{(-1)^{n+1}}{n}$: converges (AST) but $\sum 1/n$ diverges → **conditional convergence**

$\sum \frac{(-1)^n}{n^2}$: $\sum 1/n^2$ converges → **absolute convergence**`
    },
    {
      id: 'alt3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute vs Conditional** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum \\frac{(-1)^n}{n^{3/2}}$ converges:',
            options: ['Absolutely', 'Conditionally', 'Diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum 1/n^{3/2}$ converges ($p = 3/2 > 1$). So the alternating series converges absolutely.'
          },
          {
            question: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges:',
            options: ['Conditionally', 'Absolutely', 'Diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: converges. But $\\sum 1/\\sqrt{n}$ diverges ($p = 1/2 < 1$). Conditional convergence.'
          }
        ]
      }
    },
    {
      id: 'alt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Absolute: $\\sum |a_n|$ converges. Conditional: series converges but absolute version doesn't.`
    }
  ]
};
""",
4: r"""export const calcbcAlternatingPart4Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt4-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 4 of 7 — Approximation with Error Bound**

### AP Exam Application

"Approximate $\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!}$ to within $0.001$."

This is $\sin(1)$! Compute partial sums until the first omitted term $< 0.001$.

$n=0$: $1$
$n=1$: $1 - 1/6 = 5/6$
$n=2$: $5/6 + 1/120$

Check: $b_3 = 1/5040 \approx 0.0002 < 0.001$ ✓

So $S_2 = 5/6 + 1/120 = 101/120 \approx 0.8417$ approximates $\sin(1)$ within $0.001$.`
    },
    {
      id: 'alt4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'The series $\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!}$ equals $e^{-1}$. Using $S_3$, the error is at most:',
            options: ['$1/24$', '$1/6$', '$1/120$', '$1/4$'],
            correctAnswer: 0,
            explanation: '$S_3 = 1 - 1 + 1/2 - 1/6$. First omitted: $b_4 = 1/4! = 1/24$.'
          }
        ]
      }
    },
    {
      id: 'alt4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
On the AP exam: compute partial sums until the error bound is small enough.`
    }
  ]
};
""",
5: r"""export const calcbcAlternatingPart5Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt5-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 5 of 7 — Rearrangement Theorem**

### Riemann Rearrangement Theorem

A **conditionally** convergent series can be rearranged to converge to ANY number, or to diverge!

An **absolutely** convergent series gives the same sum regardless of rearrangement.

This is why absolute convergence is "stronger" than conditional convergence.`
    },
    {
      id: 'alt5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Rearrangement** 🎯',
      exercise: {
        questions: [
          {
            question: 'Can the alternating harmonic series be rearranged to sum to $42$?',
            options: ['Yes, it is conditionally convergent', 'No, it always sums to $\\ln 2$', 'Only if finitely many terms move', 'Need more info'],
            correctAnswer: 0,
            explanation: 'The alternating harmonic series is conditionally convergent, so by the Riemann Rearrangement Theorem, it can be rearranged to converge to any real number.'
          }
        ]
      }
    },
    {
      id: 'alt5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Conditional → rearrangement changes the sum. Absolute → sum is preserved.`
    }
  ]
};
""",
6: r"""export const calcbcAlternatingPart6Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt6-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'alt6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Classify: $\\sum \\frac{(-1)^n \\ln n}{n}$ (for $n \\geq 2$)',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: $\\ln n / n$ is eventually decreasing and $\\to 0$. Converges. But $\\sum \\ln n/n > \\sum 1/n$ (eventually), so $\\sum |a_n|$ diverges. Conditional.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{\\cos(n\\pi)}{n^3}$: this is alternating because $\\cos(n\\pi) = (-1)^n$. It converges:',
            options: ['Absolutely', 'Conditionally', 'Diverges', 'Not alternating'],
            correctAnswer: 0,
            explanation: '$\\sum |a_n| = \\sum 1/n^3$, converges ($p = 3$). Absolute convergence.'
          }
        ]
      }
    },
    {
      id: 'alt6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcAlternatingPart7Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt7-intro',
      type: 'text' as const,
      content: `# Alternating Series — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'alt7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{2n-1} = 1 - 1/3 + 1/5 - 1/7 + \\cdots$. This equals:',
            options: ['$\\pi/4$', '$\\ln 2$', '$\\pi/2$', '$1$'],
            correctAnswer: 0,
            explanation: 'This is the Leibniz formula: $\\arctan(1) = \\pi/4$.'
          },
          {
            question: 'Using $S_5$ of this series, the error is at most:',
            options: ['$1/11$', '$1/9$', '$1/13$', '$1/7$'],
            correctAnswer: 0,
            explanation: '$S_5 = 1 - 1/3 + 1/5 - 1/7 + 1/9$. First omitted: $b_6 = 1/11$.'
          }
        ]
      }
    },
    {
      id: 'alt7-summary',
      type: 'text' as const,
      content: `### Alternating Series — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-alternating-series-calcbc-part{i}.ts', parts[i])

###############################################################################
# CONVERGENCE TESTS SUMMARY (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcConvergencePart1Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv1-intro',
      type: 'text' as const,
      content: `# Convergence Tests Summary

**Part 1 of 7 — The Master Chart**

### All Tests at a Glance

| Test | Best For | Conclusion |
|------|----------|-----------|
| Divergence | Quick check | $a_n \not\to 0$ → diverges |
| Geometric | $ar^n$ | $|r|<1$: converges |
| $p$-series | $1/n^p$ | $p>1$: converges |
| Integral | Positive/decreasing | Matches improper integral |
| Comparison | Resembles known series | Bound above/below |
| Limit Comparison | Resembles known | Ratio → finite positive |
| Ratio | Factorials, $n$th powers | $L<1$: conv, $L>1$: div |
| Root | $(\cdot)^n$ | Same as ratio |
| AST | $(-1)^n b_n$ | Decreasing, $b_n \to 0$ |`
    },
    {
      id: 'conv1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Which Test?** 🎯',
      exercise: {
        questions: [
          {
            question: 'Best test for $\\sum \\frac{n!}{5^n}$?',
            options: ['Ratio test', 'Integral test', '$p$-series', 'AST'],
            correctAnswer: 0,
            explanation: 'Factorial in the numerator → use ratio test.'
          },
          {
            question: 'Best test for $\\sum \\frac{1}{n^2 + 3n}$?',
            options: ['Limit comparison with $1/n^2$', 'Ratio test', 'Root test', 'AST'],
            correctAnswer: 0,
            explanation: 'Resembles $1/n^2$. Limit comparison: $\\frac{n^2}{n^2+3n} \\to 1$. Both converge.'
          }
        ]
      }
    },
    {
      id: 'conv1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Always start with the divergence test, then choose the appropriate test.`
    }
  ]
};
""",
2: r"""export const calcbcConvergencePart2Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv2-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 2 of 7 — Decision Flowchart**

### Step-by-Step Strategy

1. Is $a_n \to 0$? If not → **diverges** ✅
2. Is it geometric ($ar^n$)? → Check $|r|$
3. Is it $p$-series ($1/n^p$)? → Check $p > 1$
4. Is it alternating? → AST
5. Has factorials or $n$th powers? → Ratio/Root test
6. Resembles known series? → Comparison/Limit Comparison
7. Can write $a_n = f(n)$ nicely? → Integral test`
    },
    {
      id: 'conv2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Flowchart Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'What test for $\\sum \\frac{(-1)^n}{n^2}$?',
            options: ['AST (or note absolute convergence since $\\sum 1/n^2$ converges)', 'Ratio test only', 'Root test', 'Integral test'],
            correctAnswer: 0,
            explanation: 'It is alternating, so AST works. Even better: $\\sum 1/n^2$ converges, so it converges absolutely.'
          }
        ]
      }
    },
    {
      id: 'conv2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Follow the flowchart: divergence test first, then identify the series type.`
    }
  ]
};
""",
3: r"""export const calcbcConvergencePart3Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv3-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 3 of 7 — Common Pitfalls**

### Mistakes to Avoid

1. **Divergence test ≠ convergence test**: $a_n \to 0$ does NOT prove convergence
2. **Ratio test $L = 1$**: INCONCLUSIVE (try another test!)
3. **Comparison wrong direction**: bigger than convergent → NOT helpful
4. **Forgetting to check AST conditions**: must verify decreasing AND $\to 0$`
    },
    {
      id: 'conv3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Pitfalls** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum 1/n$: $a_n \\to 0$, so it converges. What is wrong?',
            options: ['$a_n \\to 0$ does not prove convergence; harmonic series diverges', 'Nothing, it does converge', 'Need to check $a_n$ is decreasing', 'Should use root test'],
            correctAnswer: 0,
            explanation: 'The divergence test only works one way: $a_n \\not\\to 0$ implies divergence. $a_n \\to 0$ is necessary but not sufficient.'
          }
        ]
      }
    },
    {
      id: 'conv3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
The divergence test can only prove divergence, never convergence.`
    }
  ]
};
""",
4: r"""export const calcbcConvergencePart4Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv4-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 4 of 7 — Mixed Practice I**`
    },
    {
      id: 'conv4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Determine Convergence** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{3^n}{n \\cdot 4^n}$:',
            options: ['Converges (ratio: $L = 3/4$)', 'Diverges', 'Converges (integral test)', 'Inconclusive'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\frac{3^{n+1}/((n+1)4^{n+1})}{3^n/(n \\cdot 4^n)} = \\frac{3n}{4(n+1)} \\to 3/4 < 1$. Converges.'
          },
          {
            question: '$\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}$:',
            options: ['Converges (integral test)', 'Diverges', '$p$-series', 'Ratio test needed'],
            correctAnswer: 0,
            explanation: '$\\int_2^{\\infty} \\frac{dx}{x(\\ln x)^2} = [-1/\\ln x]_2^{\\infty} = 0 + 1/\\ln 2 < \\infty$. Converges.'
          }
        ]
      }
    },
    {
      id: 'conv4-summary',
      type: 'text' as const,
      content: `### Practice Complete!`
    }
  ]
};
""",
5: r"""export const calcbcConvergencePart5Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv5-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 5 of 7 — Mixed Practice II**`
    },
    {
      id: 'conv5-quiz1',
      type: 'multiple-choice' as const,
      content: '**More Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$:',
            options: ['Converges (ratio: $L = 1/2$)', 'Diverges', 'Converges to $2$', 'Inconclusive'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\frac{(n+1)/2^{n+1}}{n/2^n} = \\frac{n+1}{2n} \\to 1/2 < 1$. Converges. (Sum = $2$.)'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\sin(1/n)$:',
            options: ['Diverges (limit compare with $1/n$)', 'Converges', 'AST applies', 'Need ratio test'],
            correctAnswer: 0,
            explanation: '$\\lim \\frac{\\sin(1/n)}{1/n} = 1$ (since $\\sin x/x \\to 1$). $\\sum 1/n$ diverges, so $\\sum \\sin(1/n)$ diverges.'
          }
        ]
      }
    },
    {
      id: 'conv5-summary',
      type: 'text' as const,
      content: `### More Practice Done!`
    }
  ]
};
""",
6: r"""export const calcbcConvergencePart6Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv6-intro',
      type: 'text' as const,
      content: `# Convergence Tests

**Part 6 of 7 — AP Exam Strategies**

### Free Response Tips

1. **State the test** you're using ("By the Ratio Test...")
2. **Show the limit computation**
3. **State the conclusion** with the value of $L$
4. For absolute/conditional: test absolute first, then alternating if needed`
    },
    {
      id: 'conv6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Format Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'On an AP FRQ asking about $\\sum \\frac{(-1)^n}{n^{0.9}}$: classify convergence.',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: $1/n^{0.9}$ decreasing, $\\to 0$. Converges. But $\\sum 1/n^{0.9}$ diverges ($p < 1$). Conditionally convergent.'
          }
        ]
      }
    },
    {
      id: 'conv6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6
Always explain which test and show your work on the AP exam.`
    }
  ]
};
""",
7: r"""export const calcbcConvergencePart7Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conv7-intro',
      type: 'text' as const,
      content: `# Convergence Tests — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'conv7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which series converges?',
            options: ['$\\sum \\frac{1}{n^2+n}$', '$\\sum \\frac{1}{\\sqrt{n}}$', '$\\sum \\frac{n+1}{n}$', '$\\sum \\frac{1}{\\ln n}$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{n^2+n} = \\frac{1}{n(n+1)}$. Telescopes or compare with $1/n^2$. Converges. Others diverge.'
          },
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n^2+1}$:',
            options: ['Conditionally convergent', 'Absolutely convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: $b_n = n/(n^2+1)$ is eventually decreasing and $\\to 0$. Converges. $\\sum |a_n|$: compare $n/(n^2+1) \\sim 1/n$, diverges. Conditional.'
          }
        ]
      }
    },
    {
      id: 'conv7-summary',
      type: 'text' as const,
      content: `### Convergence Tests — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-convergence-tests-summary-calcbc-part{i}.ts', parts[i])

print("\nSequences (7), Series (7), Alternating (7), Convergence Tests (7) complete!")
print("Total files written: 28")
