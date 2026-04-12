export const apStatsBinomGeomPart6Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### AP Free-Response Strategy

When the AP exam gives a binomial/geometric scenario:
1. **State** the distribution and parameters: “$X \\\\sim B(n, p)$” or “$X \\\\sim G(p)$”
2. **Verify** conditions (BINS for binomial)
3. **Calculate** using the formula or calculator
4. **Interpret** in context with proper probability language`
    },    {
      id: 'binomialgeometric-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In a binomial setting with $n = 15$ and $p = 0.6$, $P(X = 10)$ requires:',
            options: ['$\\\\binom{15}{10}(0.6)^{10}(0.4)^5$', '$(0.6)^{10}(0.4)^5$', '$\\\\binom{15}{10}(0.6)^{10}$', '$(0.4)^{14}(0.6)$'],
            correctAnswer: 0,
            explanation: 'Full binomial formula: $\\\\binom{n}{k}p^k(1-p)^{n-k}$.'
          },
          {
            question: 'A geometric random variable can theoretically take:',
            options: ['Only values 0 to $n$', 'Only values 1 to $n$', 'Any positive integer', 'Any nonnegative integer'],
            correctAnswer: 2,
            explanation: 'Geometric: $X = 1, 2, 3, \\\\ldots$ (no upper bound, starts at 1).'
          },
          {
            question: '$P(X > 5)$ for $G(p)$ equals:',
            options: ['$1 - [1 - (1-p)^5]$', '$(1-p)^5$', '$(1-p)^4 p$', '$1 - p^5$'],
            correctAnswer: 1,
            explanation: '$P(X > 5) = P(\\\\text{first 5 all fail}) = (1-p)^5$.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p6-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

10% of products are defective. A sample of 20 is inspected.

**1)** $P(\\\\text{exactly 2 defective}) = ?$ (round to 4 decimals)

**2)** Expected number defective?

**3)** If inspecting one at a time, expected items until first defect?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.2852', '2', '10'],
        hint1: '$\\\\binom{20}{2}(0.1)^2(0.9)^{18}$',
        hint2: '$np = 20(0.1)$',
        hint3: 'Geometric: $1/p = 1/0.1$',
        explanation: '1) $\\\\binom{20}{2}(0.1)^2(0.9)^{18} = 190(0.01)(0.1501) \\\\approx 0.2852$. 2) $20(0.1) = 2$. 3) $1/0.1 = 10$.'
      }
    }
  ]
};
