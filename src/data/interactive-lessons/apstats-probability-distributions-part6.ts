export const apStatsProbDistPart6Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Common AP Problem Types

1. **Find a probability** using z-scores and Table A
2. **Find a percentile** (inverse Normal)
3. **Compare values** from different distributions using z-scores
4. **Sampling distribution** questions about $\\bar{x}$ or $\\hat{p}$

---

### Comparing Across Distributions

Who performed better?
- Student A: scored 680 on SAT $(\\mu = 500, \\sigma = 100)$
- Student B: scored 28 on ACT $(\\mu = 21, \\sigma = 5)$

$$z_A = \\frac{680-500}{100} = 1.80 \\qquad z_B = \\frac{28-21}{5} = 1.40$$

Student A has a higher z-score, so Student A did relatively better.`
    },    {
      id: 'probdistributions-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To compare scores from different distributions, you should:',
            options: ['Compare the raw scores', 'Compare the z-scores', 'Compare the two means', 'Compare the two standard deviations'],
            correctAnswer: 1,
            explanation: 'Z-scores (or percentiles) standardize each value within its own distribution, putting both on the same scale. Raw scores ignore the different centers and spreads, and the means or SDs describe the groups, not the individuals.'
          },
          {
            question: 'The 90th percentile of $N(100, 15)$ is approximately:',
            options: ['$100 + 1.28(15) \\approx 119.2$', '$100 + 1.645(15) \\approx 124.7$', '$100 + 1.96(15) \\approx 129.4$', '$100 + 0.90(15) \\approx 113.5$'],
            correctAnswer: 0,
            explanation: '90th percentile: $z = 1.28$, so $x = 100 + 1.28(15) = 119.2$. 1.645 is the 95th percentile, 1.96 the 97.5th, and 0.90 is an area, not a z-score.'
          },
          {
            question: 'If $P(Z < z) = 0.025$, then $z \\approx$:',
            options: ['-1.96', '-1.645', '1.96', '1.645'],
            correctAnswer: 0,
            explanation: '2.5% in the left tail corresponds to $z = -1.96$. $-1.645$ leaves 5% in the left tail, and the positive values have most of the area to their left.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Comparing Distributions** 🧮

Math: $\\mu = 72, \\sigma = 10$. English: $\\mu = 80, \\sigma = 5$.
A student scores 87 in Math and 88 in English.

**1)** Z-score in Math?

**2)** Z-score in English?

**3)** In which class did the student do relatively better? (math/english)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.5', '1.6', 'english'],
        hint1: '$(87-72)/10$',
        hint2: '$(88-80)/5$',
        hint3: 'Compare z-scores',
        explanation: '1) $z = (87-72)/10 = 1.5$. 2) $z = (88-80)/5 = 1.6$. 3) English (higher z-score).'
      }
    }
  ]
};
