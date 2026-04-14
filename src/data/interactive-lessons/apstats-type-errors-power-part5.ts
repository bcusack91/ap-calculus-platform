export const apStatsErrorsPart5Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p5-intro',
      type: 'text' as const,
      content: `# 💡 Applications

**Part 5 of 7 — Real-World Power Analysis**

---

### Power Analysis in Study Design

Before collecting data, researchers should:
1. **Specify** the smallest effect worth detecting
2. **Choose** $\\\\alpha$ and desired power (often 0.80)
3. **Calculate** the required sample size

### Example

Want to detect a 5-point difference in test scores ($\\\\sigma = 20$).
With $\\\\alpha = 0.05$ and power = 0.80:

$$n \\\\approx \\\\left(\\\\frac{z_{\\\\alpha/2} + z_{\\\\beta}}{d}\\\\right)^2 = \\\\left(\\\\frac{1.96 + 0.84}{0.25}\\\\right)^2 \\\\approx 126 \\\\text{ per group}$$

---

### Consequences of Low Power

- Wasted resources on a study that likely won’t find anything
- Failure to detect important effects
- Non-significant results that are inconclusive (not evidence of no effect!)

> “Absence of evidence is not evidence of absence.”`
    },    {
      id: 'typeerrorspower-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Power analysis should be done:',
            options: ['After collecting data', 'Before designing the study', 'Only if the test is not significant', 'Never on the AP exam'],
            correctAnswer: 1,
            explanation: 'Power analysis is part of study planning to ensure adequate sample size.'
          },
          {
            question: 'A study with power = 0.30 that fails to reject $H_0$:',
            options: ['Proves $H_0$ is true', 'Provides weak evidence because the test had poor power', 'Means the effect definitely doesn’t exist', 'Should use a smaller $\\\\alpha$'],
            correctAnswer: 1,
            explanation: 'Low power means the study probably couldn’t detect the effect even if it existed.'
          },
          {
            question: 'To detect a smaller effect size, you need:',
            options: ['A smaller sample', 'A larger sample', 'A smaller $\\\\alpha$', 'Fewer measurements'],
            correctAnswer: 1,
            explanation: 'Smaller effects require more data to distinguish from random variation.'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p5-input',
      type: 'input-boxes' as const,
      content: `
**Power Application** 🧮

A researcher has power = 0.60 and doesn’t reject $H_0$.

**1)** How likely was the test to detect a real effect?

**2)** What is $\\\\beta$?

**3)** Should the researcher conclude the effect doesn’t exist? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60%', '0.40', 'no'],
        hint1: 'Power = probability of detecting truth',
        hint2: '$\\\\beta = 1 - \\\\text{Power}$',
        hint3: 'Absence of evidence is not...',
        explanation: '1) Only 60% likely. 2) $\\\\beta = 1 - 0.60 = 0.40$. 3) No — the test lacked adequate power to draw that conclusion.'
      }
    }
  ]
};
