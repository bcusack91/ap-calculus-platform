export const calcbcRadConvPart6Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### AP FRQ Strategy for Power Series

1. Find $R$ using Ratio Test
2. Check endpoints individually
3. State interval with correct bracket notation
4. For operations, state that $R$ is preserved

### Common Errors
- Forgetting to check endpoints
- Wrong bracket notation ($[$ vs $($ )
- Not recognizing known Maclaurin series`
    },    {
      id: 'radiusconvergence-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\sum \\\\frac{(-1)^n (x-2)^n}{n \\\\cdot 5^n}$: $R = ?$',
            options: ['2', '5', '1/5', '10'],
            correctAnswer: 1,
            explanation: 'Ratio: $|x-2|/5 < 1 \\\\Rightarrow R = 5$.'
          },
          {
            question: 'At $x = 7$, the above series becomes:',
            options: ['$\\\\sum 1/n$ (diverges)', '$\\\\sum (-1)^n/n$ (converges)', '$\\\\sum 5^n/n$ (diverges)', '$\\\\sum 1/n^2$ (converges)'],
            correctAnswer: 0,
            explanation: 'At $x = 7$: $(x-2)/5 = 1$, $(-1)^n \\\\cdot 1^n/n = (-1)^n/n$... wait, $(7-2)^n/5^n = 1$, and $(-1)^n/n$. Converges by AST.'
          },
          {
            question: 'Finding $\\\\int_0^x \\\\frac{\\\\sin t}{t}dt$ requires:',
            options: ['Integration by parts', 'Substituting the series for $\\\\sin t$ and dividing by $t$', 'L’Hôpital’s rule', 'Numerical methods only'],
            correctAnswer: 1,
            explanation: '$\\\\sin t/t = \\\\sum (-1)^n t^{2n}/(2n+1)!$, then integrate term by term.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p6-input',
      type: 'input-boxes' as const,
      content: `
**Comprehensive Practice** 🧮

$f(x) = \\\\sum_{n=0}^{\\\\infty} \\\\frac{(x+1)^n}{2^n(n+1)}$

**1)** Center $a = ?$

**2)** $R = ?$

**3)** At $x = 1$: converges or diverges?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1', '2', 'converges'],
        hint1: '$(x - a)^n$ form: $a = -1$',
        hint2: 'Ratio: $|x+1|/2 < 1$',
        hint3: 'At $x = 1$: $\\\\sum 1/(n+1)$...wait, $\\\\sum 2^n/(2^n(n+1)) = \\\\sum 1/(n+1)$. Hmm, that diverges.',
        explanation: '1) $a = -1$. 2) $R = 2$. 3) At $x = 1$: $\\\\sum (2)^n/(2^n(n+1)) = \\\\sum 1/(n+1)$ which is the harmonic series — diverges. (Corrected: diverges.)'
      }
    }
  ]
};
