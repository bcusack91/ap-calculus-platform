export const apStatsMeansInfPart2Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p2-intro',
      type: 'text' as const,
      content: `# 📏 Confidence Intervals for Means

**Part 2 of 7 — One-Sample t Interval**

---

### Formula

$$\\\\bar{x} \\\\pm t^* \\\\frac{s}{\\\\sqrt{n}}$$

where $t^*$ comes from the t-table with $df = n - 1$.

---

### Interpretation

“We are [C]% confident that the true mean [context] is between [lower] and [upper].”

### Example

$n = 20$, $\\\\bar{x} = 45.2$, $s = 6.8$, 95% CI.

$df = 19$, $t^* = 2.093$ (from table)

$$45.2 \\\\pm 2.093 \\\\times \\\\frac{6.8}{\\\\sqrt{20}} = 45.2 \\\\pm 3.18$$

CI: $(42.02, 48.38)$`
    },    {
      id: 'meansinference-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A t-interval uses $t^*$ instead of $z^*$ because:',
            options: ['$t^*$ is always larger', 'We estimate $\\\\sigma$ with $s$', 'The data must be Normal', 't-intervals are more accurate'],
            correctAnswer: 1,
            explanation: 'Using $s$ instead of $\\\\sigma$ adds uncertainty, accounted for by the t-distribution.'
          },
          {
            question: 'Increasing sample size makes a CI:',
            options: ['Wider', 'Narrower', 'Higher confidence', 'Lower confidence'],
            correctAnswer: 1,
            explanation: 'Larger $n$ decreases SE = $s/\\\\sqrt{n}$, making the interval narrower.'
          },
          {
            question: 'For $df = 10$ and 95% confidence, $t^*$ is approximately:',
            options: ['1.96', '2.228', '2.262', '1.812'],
            correctAnswer: 1,
            explanation: 'With $df = 10$, $t^* \\\\approx 2.228$ for 95% confidence (wider than $z^* = 1.96$).'
          }
        ]
      }
    },    {
      id: 'meansinference-p2-input',
      type: 'input-boxes' as const,
      content: `
**t-Interval** 🧮

$n = 36$, $\\\\bar{x} = 110$, $s = 12$, 95% CI ($t^* \\\\approx 2.030$ for $df = 35$).

**1)** $SE = s/\\\\sqrt{n} = ?$

**2)** Margin of error $= t^* \\\\times SE = ?$ (round to 1 place)

**3)** Lower bound of CI?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4.1', '105.9'],
        hint1: '$12/\\\\sqrt{36} = 12/6$',
        hint2: '$2.030 \\\\times 2$',
        hint3: '$110 - 4.1$',
        explanation: '1) $SE = 12/6 = 2$. 2) $ME = 2.030 \\\\times 2 = 4.06 \\\\approx 4.1$. 3) $110 - 4.1 = 105.9$.'
      }
    }
  ]
};
