export const precalcSequencesPart3Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# ♾️ Infinite Geometric Series

**Part 3 of 7**

### When Does an Infinite Sum Converge?

For a geometric series with $|r| < 1$, the partial sums approach a finite limit:

$$S_\\infty = \\frac{a_1}{1-r} \\quad \\text{when } |r| < 1$$

If $|r| \\geq 1$, the series **diverges** (no finite sum).

### Why It Works

As $n \\to \\infty$ and $|r| < 1$, $r^n \\to 0$:

$$S_n = a_1 \\cdot \\frac{1-r^n}{1-r} \\to \\frac{a_1}{1-r}$$

### Example

$$1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = \\frac{1}{1-\\frac{1}{2}} = 2$$
      `
    },
    {
      id: 'p3-examples',
      type: 'text' as const,
      content: `
## 📝 Worked Examples

### Example 1: $\\sum_{n=0}^{\\infty} 3\\left(\\frac{2}{5}\\right)^n$

$a_1 = 3, r = \\frac{2}{5}$. Since $|r| < 1$:

$$S = \\frac{3}{1-\\frac{2}{5}} = \\frac{3}{\\frac{3}{5}} = 5$$

### Example 2: Repeating Decimal $0.\\overline{36}$

$0.363636\\ldots = 0.36 + 0.0036 + 0.000036 + \\cdots$

$a_1 = 0.36, r = 0.01$

$$S = \\frac{0.36}{1-0.01} = \\frac{0.36}{0.99} = \\frac{36}{99} = \\frac{4}{11}$$

### Example 3: Does $\\sum 5(1.1)^n$ converge?

$r = 1.1 > 1$ → **Diverges!** No finite sum.
      `
    },
    {
      id: 'p3-applications',
      type: 'text' as const,
      content: `
## 🌍 Applications

### Bouncing Ball Total Distance

Ball dropped from $h = 10$ m, rebounds to $\\frac{3}{5}$ of height each time.

Total distance = down + up + down + up + ...

$= 10 + 2 \\sum_{n=1}^{\\infty} 10\\left(\\frac{3}{5}\\right)^n = 10 + 2 \\cdot \\frac{10 \\cdot \\frac{3}{5}}{1-\\frac{3}{5}} = 10 + 2 \\cdot \\frac{6}{\\frac{2}{5}} = 10 + 30 = 40$ m

### Drug Dosage (Pharmacokinetics)

If 60% of a drug remains after each dose period and dose is 200 mg:

Long-term level = $\\frac{200}{1-0.6} = 500$ mg (steady state)
      `
    },
    {
      id: 'p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Infinite Series Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n$ equals:',
            options: ['$\\frac{1}{3}$', '$\\frac{3}{2}$', '$3$', 'Diverges'],
            correctAnswer: 1,
            explanation: '$a_1 = 1, r = 1/3$. $S = \\frac{1}{1-1/3} = \\frac{1}{2/3} = 3/2$.'
          },
          {
            question: 'Does $\\sum 2(-0.5)^n$ converge?',
            options: ['Yes, to $\\frac{4}{3}$', 'Yes, to $4$', 'No, it diverges', 'Yes, to $1$'],
            correctAnswer: 0,
            explanation: '$|r|=0.5<1$. $S=\\frac{2}{1-(-0.5)}=\\frac{2}{1.5}=\\frac{4}{3}$.'
          },
          {
            question: '$0.\\overline{9} = 0.999\\ldots$ equals:',
            options: ['Less than 1', 'Exactly 1', 'Undefined', 'Approximately 1'],
            correctAnswer: 1,
            explanation: '$\\frac{0.9}{1-0.1} = \\frac{0.9}{0.9} = 1$ exactly.'
          }
        ]
      }
    },
    {
      id: 'p3-input',
      type: 'input-boxes' as const,
      content: `
**Infinite Series Calculations** 🧮

**1)** $\\sum_{n=0}^{\\infty} 8\\left(\\frac{1}{4}\\right)^n$ = ?

**2)** $0.\\overline{7} = \\frac{?}{9}$. Enter the numerator.

**3)** $\\sum_{n=1}^{\\infty} \\frac{6}{10^n}$ = ? (Enter as a fraction like "2/3")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32/3', '7', '2/3'],
        hint1: '$a_1=8, r=1/4$. $S = 8/(1-1/4) = 8/(3/4) = 32/3$.',
        hint2: '$0.\\overline{7} = 7/9$.',
        hint3: '$a_1=6/10=0.6, r=1/10$. $S = 0.6/0.9 = 2/3$.',
        explanation: '1) $32/3$. 2) $7$. 3) $2/3$.'
      }
    },
    {
      id: 'p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Convergence Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A geometric series converges when:',
            options: ['$r > 0$', '$|r| < 1$', '$|r| > 1$', '$r = 1$'],
            correctAnswer: 1
          },
          {
            label: 'If $r = -0.8$, the partial sums:',
            options: ['Increase steadily', 'Oscillate but converge', 'Diverge to infinity'],
            correctAnswer: 1
          },
          {
            label: '$\\frac{a_1}{1-r}$ is valid only when:',
            options: ['$r > 0$', '$r < 0$', '$|r| < 1$', 'Always'],
            correctAnswer: 2
          },
          {
            label: 'A repeating decimal is always:',
            options: ['Irrational', 'Rational (fraction)', 'Transcendental'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['$|r| < 1$', 'Oscillate but converge', '$|r| < 1$', 'Rational (fraction)'],
        hint1: 'Convergence requires $|r| < 1$.',
        hint2: 'Negative $r$ causes alternating overshoot/undershoot.',
        hint3: 'The formula is only valid for convergent series.',
        explanation: 'Convergence: $|r|<1$. Negative $r$: oscillating convergence. Formula valid only for $|r|<1$. Repeating decimals = infinite geometric series = rational numbers.'
      }
    },
    {
      id: 'p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$12+6+3+1.5+\\cdots$ converges to:',
            options: ['$24$', '$22.5$', '$21$', 'Diverges'],
            correctAnswer: 0,
            explanation: '$a_1=12, r=1/2$. $S = 12/(1-1/2) = 24$.'
          },
          {
            question: 'Which series diverges?',
            options: ['$\\sum (0.99)^n$', '$\\sum (-0.5)^n$', '$\\sum (1.01)^n$', '$\\sum (0.01)^n$'],
            correctAnswer: 2,
            explanation: '$|1.01| > 1$, so $\\sum(1.01)^n$ diverges.'
          }
        ]
      }
    }
  ]
};
