export const calcbcRatioRootPart4Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p4-intro',
      type: 'text' as const,
      content: `# 🔄 Absolute vs Conditional Convergence

**Part 4 of 7 — Types of Convergence**

---

### Definitions

| Type | Condition |
|------|-----------|
| **Absolutely convergent** | $\\\\sum |a_n|$ converges |
| **Conditionally convergent** | $\\\\sum a_n$ converges but $\\\\sum |a_n|$ diverges |
| **Divergent** | $\\\\sum a_n$ does not converge |

> 🔑 Absolute convergence implies convergence, but not vice versa.

---

### Classic Example

$$\\\\sum_{n=1}^{\\\\infty} \\\\frac{(-1)^{n+1}}{n} = 1 - \\\\frac{1}{2} + \\\\frac{1}{3} - \\\\frac{1}{4} + \\\\cdots$$

- The alternating series $\\\\sum (-1)^{n+1}/n$ **converges** (AST)
- But $\\\\sum 1/n$ (harmonic series) **diverges**
- Therefore: **conditionally convergent**

### Rearrangement Theorem

If a series is **conditionally convergent**, its terms can be rearranged to converge to ANY real number (or even diverge). This is the Riemann Rearrangement Theorem.`
    },    {
      id: 'ratioroottests-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\sum (-1)^n/n^2$ is:',
            options: ['Absolutely convergent', 'Conditionally convergent', 'Divergent', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\\\sum 1/n^2$ converges (p-series, $p = 2 > 1$), so the original converges absolutely.'
          },
          {
            question: 'A series is conditionally convergent when:',
            options: ['$\\\\sum |a_n|$ converges', '$\\\\sum a_n$ converges but $\\\\sum |a_n|$ diverges', '$\\\\sum a_n$ diverges', 'Both $\\\\sum a_n$ and $\\\\sum |a_n|$ diverge'],
            correctAnswer: 1,
            explanation: 'Conditional: converges with signs but not without them.'
          },
          {
            question: 'Absolute convergence implies:',
            options: ['Conditional convergence', 'Divergence', 'Convergence', 'Nothing'],
            correctAnswer: 2,
            explanation: 'If $\\\\sum |a_n|$ converges, then $\\\\sum a_n$ converges. (But not the other way around.)'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p4-input',
      type: 'input-boxes' as const,
      content: `
**Classification** 🧮

Classify each series as absolutely convergent (A), conditionally convergent (C), or divergent (D):

**1)** $\\\\sum (-1)^n/n^3$

**2)** $\\\\sum (-1)^n/n$

**3)** $\\\\sum (-1)^n$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['A', 'C', 'D'],
        hint1: '$\\\\sum 1/n^3$ converges (p-series, $p=3$)',
        hint2: '$\\\\sum 1/n$ diverges but alternating series converges',
        hint3: '$\\\\lim (-1)^n \\\\neq 0$',
        explanation: '1) A — $\\\\sum 1/n^3$ converges. 2) C — AST converges but harmonic diverges. 3) D — terms don’t approach 0.'
      }
    }
  ]
};
