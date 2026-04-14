export const apStatsMeansInfPart3Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p3-intro',
      type: 'text' as const,
      content: `# ⚖️ Hypothesis Tests for Means

**Part 3 of 7 — One-Sample t Test**

---

### Test Statistic

$$t = \\\\frac{\\\\bar{x} - \\\\mu_0}{s/\\\\sqrt{n}}$$

### Steps (4-Step Process)

1. **State:** $H_0: \\\\mu = \\\\mu_0$ vs. $H_a: \\\\mu \\\\neq \\\\mu_0$ (or $<$ or $>$)
2. **Plan:** Check Random, Normal, Independent conditions
3. **Do:** Calculate $t$ and find p-value using $t$-table with $df = n-1$
4. **Conclude:** Compare p-value to $\\\\alpha$, interpret in context

---

### Example

$H_0: \\\\mu = 100$, $H_a: \\\\mu > 100$. $n = 16$, $\\\\bar{x} = 106$, $s = 12$.

$$t = \\\\frac{106 - 100}{12/\\\\sqrt{16}} = \\\\frac{6}{3} = 2.0$$

$df = 15$. From the t-table, $P(t > 2.0) \\\\approx 0.032$.

Since $0.032 < 0.05$, reject $H_0$.`
    },    {
      id: 'meansinference-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In a one-sample t-test, the test statistic uses:',
            options: ['$\\\\sigma$ (population SD)', '$s$ (sample SD)', '$\\\\mu$ (population mean)', '$\\\\bar{x}$ (sample mean) only'],
            correctAnswer: 1,
            explanation: 'The t-test uses $s$ because $\\\\sigma$ is unknown.'
          },
          {
            question: '$t = -2.5$ with $df = 20$ in a two-tailed test. The p-value is:',
            options: ['Between 0.01 and 0.02', 'Between 0.02 and 0.04', 'Between 0.05 and 0.10', 'Less than 0.01'],
            correctAnswer: 1,
            explanation: 'For $df = 20$, $|t| = 2.5$: one-tail p ≈ 0.011, two-tail p ≈ 0.022.'
          },
          {
            question: '“Fail to reject $H_0$” means:',
            options: ['$H_0$ is true', 'There is insufficient evidence against $H_0$', '$H_a$ is false', 'The test failed'],
            correctAnswer: 1,
            explanation: 'We don’t prove $H_0$ true; we simply don’t have enough evidence to reject it.'
          }
        ]
      }
    },    {
      id: 'meansinference-p3-input',
      type: 'input-boxes' as const,
      content: `
**t-Test** 🧮

$H_0: \\\\mu = 50$, $H_a: \\\\mu \\\\neq 50$. $n = 25$, $\\\\bar{x} = 53$, $s = 5$.

**1)** $SE = ?$

**2)** $t = ?$

**3)** $df = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1', '3', '24'],
        hint1: '$5/\\\\sqrt{25}$',
        hint2: '$(53-50)/1$',
        hint3: '$n - 1$',
        explanation: '1) $SE = 5/5 = 1$. 2) $t = 3/1 = 3.0$. 3) $df = 24$.'
      }
    }
  ]
};
