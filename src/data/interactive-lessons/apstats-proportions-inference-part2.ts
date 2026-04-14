export const apStatsPropInfPart2Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p2-intro',
      type: 'text' as const,
      content: `# 📏 Confidence Intervals for Proportions

**Part 2 of 7 — One-Sample Z Interval**

---

### Formula

$$\\\\hat{p} \\\\pm z^* \\\\sqrt{\\\\frac{\\\\hat{p}(1-\\\\hat{p})}{n}}$$

### Common Critical Values

| Confidence Level | $z^*$ |
|------------------|-------|
| 90% | 1.645 |
| 95% | 1.960 |
| 99% | 2.576 |

---

### Interpretation

“We are [C]% confident that the true proportion of [context] is between [lower] and [upper].”

### Example

$n = 400$, $\\\\hat{p} = 0.35$, 95% CI:

$$0.35 \\\\pm 1.96\\\\sqrt{\\\\frac{0.35 \\\\times 0.65}{400}} = 0.35 \\\\pm 0.0467$$

CI: $(0.303, 0.397)$`
    },    {
      id: 'propinference-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% confidence interval means:',
            options: ['95% of the data falls in the interval', '95% of samples would produce intervals containing the true $p$', 'There is a 95% chance $p$ is in this interval', 'The sample proportion is correct 95% of the time'],
            correctAnswer: 1,
            explanation: 'The confidence level refers to the method: 95% of similarly constructed intervals would capture $p$.'
          },
          {
            question: 'Increasing the confidence level:',
            options: ['Narrows the interval', 'Widens the interval', 'Has no effect on width', 'Changes the sample proportion'],
            correctAnswer: 1,
            explanation: 'Higher confidence requires a larger $z^*$, making the margin of error (and interval) wider.'
          },
          {
            question: 'The margin of error for a proportion is:',
            options: ['$z^* \\\\cdot \\\\hat{p}$', '$z^* \\\\sqrt{\\\\hat{p}(1-\\\\hat{p})/n}$', '$\\\\hat{p} - p$', '$1.96/\\\\sqrt{n}$'],
            correctAnswer: 1,
            explanation: 'The margin of error = $z^* \\\\times SE(\\\\hat{p})$.'
          }
        ]
      }
    },    {
      id: 'propinference-p2-input',
      type: 'input-boxes' as const,
      content: `
**Confidence Interval** 🧮

$n = 500$, $\\\\hat{p} = 0.40$, 95% CI.

**1)** $SE = \\\\sqrt{0.40 \\\\times 0.60 / 500}$ = ? (round to 4 decimal places)

**2)** Margin of error = $1.96 \\\\times SE$ = ? (round to 4 places)

**3)** Lower bound of CI? (round to 3 places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0219', '0.0429', '0.357'],
        hint1: '$\\\\sqrt{0.24/500} = \\\\sqrt{0.00048}$',
        hint2: '$1.96 \\\\times 0.0219$',
        hint3: '$0.40 - 0.0429$',
        explanation: '1) $\\\\sqrt{0.00048} \\\\approx 0.0219$. 2) $1.96 \\\\times 0.0219 \\\\approx 0.0429$. 3) $0.40 - 0.043 \\\\approx 0.357$.'
      }
    }
  ]
};
