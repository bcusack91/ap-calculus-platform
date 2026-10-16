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
2. **Choose** $\\alpha$ and desired power (often 0.80)
3. **Choose** a sample size large enough to give that power

### Example

A school wants to know whether a new reading program raises mean test scores by at least 5 points. Scores vary a lot from student to student ($\\sigma \\approx 20$), so a 5-point gain is small compared with the spread. A study of 15 students per group would have low power: even if the program works, the test would probably fail to reject $H_0$. Planning a much larger study raises the power to an acceptable level (often 0.80). Statistical software finds the exact sample size; the AP exam asks only for the reasoning.

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Power analysis should be done:',
            options: ['After the data are collected', 'During study planning', 'Only if the test is not significant', 'Only when the result is significant'],
            correctAnswer: 1,
            explanation: 'Power is considered while planning a study, so the sample is large enough to detect the effect that matters. Thinking about power only after a result does not change the data already collected.'
          },
          {
            question: 'A study with power = 0.30 that fails to reject $H_0$:',
            options: ['Proves that $H_0$ is true', 'Says little about whether an effect exists', 'Shows the effect does not exist', 'Should be rerun with a smaller $\\alpha$'],
            correctAnswer: 1,
            explanation: 'With power 0.30, the study would usually miss a real effect, so failing to reject says little. It never proves $H_0$, and a smaller $\\alpha$ would lower power further.'
          },
          {
            question: 'To detect a smaller effect size, you need:',
            options: ['A smaller sample', 'A larger sample', 'A smaller $\\alpha$', 'Fewer measurements'],
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

**2)** What is $\\beta$?

**3)** Should the researcher conclude the effect doesn’t exist? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['60%', '0.40', 'no'],
        hint1: 'Power = probability of detecting truth',
        hint2: '$\\beta = 1 - \\text{Power}$',
        hint3: 'Absence of evidence is not...',
        explanation: '1) Only 60% likely. 2) $\\beta = 1 - 0.60 = 0.40$. 3) No — the test lacked adequate power to draw that conclusion.'
      }
    }
  ]
};
