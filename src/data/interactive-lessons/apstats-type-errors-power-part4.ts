export const apStatsErrorsPart4Data = {
  topicSlug: 'type-errors-power-apstats',
  sections: [
    {
      id: 'typeerrorspower-p4-intro',
      type: 'text' as const,
      content: `# 🔧 Factors Affecting Power

**Part 4 of 7 — Detailed Analysis**

---

### Sample Size and Power

$$\\\\text{Power} \\\\propto \\\\sqrt{n}$$

Doubling the sample size increases power, but the relationship is not linear.

### Effect Size

The **effect size** measures the magnitude of the true difference:

$$d = \\\\frac{|\\\\mu_{\\\\text{true}} - \\\\mu_0|}{\\\\sigma}$$

| Effect Size | Cohen’s $d$ |
|-------------|-------------|
| Small | 0.2 |
| Medium | 0.5 |
| Large | 0.8 |

Larger effects are easier to detect → higher power.

---

### One-Tailed vs. Two-Tailed

A one-tailed test has more power than a two-tailed test at the same $\\\\alpha$, because all $\\\\alpha$ is concentrated in one tail.

$$\\\\text{Power}_{\\\\text{one-tail}} > \\\\text{Power}_{\\\\text{two-tail}}$$`
    },    {
      id: 'typeerrorspower-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Quadrupling the sample size roughly:',
            options: ['Quadruples power', 'Doubles the ability to detect effects', 'Has no effect on power', 'Halves the Type I error rate'],
            correctAnswer: 1,
            explanation: 'Power depends on $\\\\sqrt{n}$. Quadrupling $n$ doubles $\\\\sqrt{n}$, roughly doubling detection ability.'
          },
          {
            question: 'A Cohen’s $d$ of 0.8 indicates:',
            options: ['A small effect', 'A medium effect', 'A large effect', 'No effect'],
            correctAnswer: 2,
            explanation: 'Cohen: $d = 0.2$ small, $d = 0.5$ medium, $d = 0.8$ large.'
          },
          {
            question: 'Switching from a two-tailed to one-tailed test:',
            options: ['Decreases power', 'Increases power', 'Has no effect on power', 'Changes the sample size needed'],
            correctAnswer: 1,
            explanation: 'One-tailed concentrates $\\\\alpha$ in one direction, increasing power for that direction.'
          }
        ]
      }
    },    {
      id: 'typeerrorspower-p4-input',
      type: 'input-boxes' as const,
      content: `
**Power Analysis** 🧮

$H_0: \\\\mu = 100$. True $\\\\mu = 106$, $\\\\sigma = 15$.

**1)** Effect size $d = |106 - 100|/15 = ?$ (simplified)

**2)** Is this a small, medium, or large effect?

**3)** To increase power, should you increase or decrease $n$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.4', 'small', 'increase'],
        hint1: '$6/15$',
        hint2: 'Compare $d$ to Cohen’s benchmarks',
        hint3: 'More data = more power',
        explanation: '1) $d = 6/15 = 0.4$. 2) Between small (0.2) and medium (0.5) — small-to-medium. 3) Increase $n$.'
      }
    }
  ]
};
