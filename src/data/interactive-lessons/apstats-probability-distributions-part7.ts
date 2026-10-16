export const apStatsProbDistPart7Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas

| Formula | Purpose |
|---------|---------|
| $z = (x - \\mu)/\\sigma$ | Standardize a value |
| $x = \\mu + z\\sigma$ | Unstandardize (find value from z) |
| $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$ | Standard error of the mean |
| $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$ | Standard error of a proportion |

### Checklist

- [ ] Normal distribution: bell-shaped, symmetric, $\\mu$ and $\\sigma$
- [ ] 68-95-99.7 Rule
- [ ] Z-scores and Table A
- [ ] Sampling distributions of $\\bar{x}$ and $\\hat{p}$
- [ ] Checking normality with graphs and the 68-95-99.7 rule
- [ ] Central Limit Theorem`
    },    {
      id: 'probdistributions-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about z-scores is FALSE?',
            options: ['A full set of z-scores has mean 0', 'A full set of z-scores has SD 1', 'Z-scores can only be positive', 'Z-scores have no units'],
            correctAnswer: 2,
            explanation: 'Z-scores can be negative (below the mean), zero (at the mean) or positive (above). Standardizing a whole data set does give mean 0 and SD 1, and dividing by $\\sigma$ cancels the units.'
          },
          {
            question: 'As sample size increases, $\\sigma_{\\bar{x}}$:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Approaches $\\mu$'],
            correctAnswer: 1,
            explanation: '$\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$: as $n$ increases the denominator grows, so $\\sigma_{\\bar{x}}$ decreases. It does not approach $\\mu$; it approaches 0.'
          },
          {
            question: 'If $X \\sim N(50, 8)$ and $n = 16$, then $\\bar{x} \\sim$:',
            options: ['$N(50, 8)$', '$N(50, 2)$', '$N(50, 0.5)$', '$N(3.125, 2)$'],
            correctAnswer: 1,
            explanation: '$\\bar{x} \\sim N(50, 8/\\sqrt{16}) = N(50, 2)$. $N(50, 8)$ forgets to divide by $\\sqrt{n}$, $N(50, 0.5)$ divides by $n$, and the mean of $\\bar{x}$ stays at 50.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$X \\sim N(200, 25)$. A sample of $n = 100$ is taken.

**1)** $\\sigma_{\\bar{x}} = ?$

**2)** $P(\\bar{x} > 205)$: first find $z = ?$

**3)** Using Table A, $P(Z > 2) \\approx ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '2', '0.0228'],
        hint1: '$25/\\sqrt{100}$',
        hint2: '$(205-200)/2.5$',
        hint3: '$1 - P(Z < 2) = 1 - 0.9772$',
        explanation: '1) $25/\\sqrt{100} = 2.5$. 2) $z = (205-200)/2.5 = 2.0$. 3) $P(Z > 2) = 1 - 0.9772 = 0.0228$.'
      }
    }
  ]
};
