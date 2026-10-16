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

When the AP exam gives a binomial scenario:
1. **State** the distribution and parameters: “$X \\sim B(n, p)$” with $X$ defined in context
2. **Verify** conditions (BINS, plus the 10% condition when sampling without replacement)
3. **Calculate** using the formula or calculator (\`binompdf\` / \`binomcdf\`), showing the setup
4. **Interpret** in context with proper probability language

> 🔑 Calculator syntax alone does not earn credit: write $P(X \\leq 2)$ with $n$ and $p$ identified.`
    },    {
      id: 'binomialgeometric-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a binomial setting with $n = 15$ and $p = 0.6$, $P(X = 10)$ is:',
            options: ['$\\binom{15}{10}(0.6)^{10}(0.4)^5$', '$(0.6)^{10}(0.4)^5$', '$\\binom{15}{10}(0.6)^{10}$', '$\\binom{15}{10}(0.4)^{10}$'],
            correctAnswer: 0,
            explanation: 'The binomial formula is $\\binom{n}{k}p^k(1-p)^{n-k}$. Leaving out $\\binom{15}{10}$ counts only one ordering of the successes, leaving out $(0.4)^5$ ignores the failures, and $\\binom{15}{10}(0.4)^{10}$ uses the failure probability for the successes and drops the failure term.'
          },
          {
            question: 'For a binomial random variable with $n = 15$, the possible values of $X$ are:',
            options: ['Every whole number from 1 to 15', 'Whole numbers 0 through 15', 'Every positive whole number', 'Any value from 0 to 15, decimals included'],
            correctAnswer: 1,
            explanation: '$X$ counts successes in 15 trials, so it can be any whole number from 0 (no successes) to 15. It cannot exceed $n$, and it cannot take fractional values.'
          },
          {
            question: 'Each part fails with probability 0.1, independently. For 20 parts, $P(\\text{at least one fails}) =$',
            options: ['$0.9^{20}$', '$1 - 0.9^{20}$', '$20(0.1)(0.9)^{19}$', '$1 - 0.1^{20}$'],
            correctAnswer: 1,
            explanation: '$P(X \\geq 1) = 1 - P(X = 0) = 1 - 0.9^{20} \\approx 0.878$. $0.9^{20}$ is the probability that none fail, $20(0.1)(0.9)^{19}$ is exactly one failure, and $0.1^{20}$ is the chance that all 20 fail.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p6-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

10% of products are defective. A random sample of 20 is inspected.

**1)** $P(\\text{exactly 2 defective}) = ?$ (round to 4 decimals)

**2)** Expected number defective?

**3)** $P(\\text{at most 1 defective}) = ?$ (round to 4 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.2852', '2', '0.3917'],
        hint1: '$\\binom{20}{2}(0.1)^2(0.9)^{18}$',
        hint2: '$np = 20(0.1)$',
        hint3: '$P(0) + P(1) = 0.9^{20} + 20(0.1)(0.9)^{19}$',
        explanation: '1) $\\binom{20}{2}(0.1)^2(0.9)^{18} = 190(0.01)(0.1501) \\approx 0.2852$. 2) $20(0.1) = 2$. 3) $0.1216 + 0.2702 \\approx 0.3917$.'
      }
    }
  ]
};
