export const apStatsPropInfPart7Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'propinference-p7-intro',
      type: 'text' as const,
      content: `# 📝 Mixed Review

**Part 7 of 7 — Comprehensive Review**

---

### Quick Reference

| Procedure | SE Formula | When to Use |
|-----------|-----------|-------------|
| 1-prop CI | $\\\\sqrt{\\\\hat{p}(1-\\\\hat{p})/n}$ | Estimating $p$ |
| 1-prop test | $\\\\sqrt{p_0(1-p_0)/n}$ | Testing $H_0: p = p_0$ |
| 2-prop CI | $\\\\sqrt{\\\\frac{\\\\hat{p}_1(1-\\\\hat{p}_1)}{n_1} + \\\\frac{\\\\hat{p}_2(1-\\\\hat{p}_2)}{n_2}}$ | Estimating $p_1 - p_2$ |
| 2-prop test | $\\\\sqrt{\\\\hat{p}_c(1-\\\\hat{p}_c)(1/n_1 + 1/n_2)}$ | Testing $H_0: p_1 = p_2$ |

### AP Exam Tips

- Always state your hypotheses using the parameter $p$, not $\\\\hat{p}$
- Check all three conditions: Random, Normal, Independent
- Give a conclusion IN CONTEXT`
    },    {
      id: 'propinference-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The parameter of interest in a proportion inference problem is:',
            options: ['$\\\\hat{p}$ (sample proportion)', '$p$ (population proportion)', '$\\\\bar{x}$ (sample mean)', '$n$ (sample size)'],
            correctAnswer: 1,
            explanation: 'Inference is about the population parameter $p$. The sample proportion $\\\\hat{p}$ is the statistic.'
          },
          {
            question: '$\\\\hat{p} = 0.40$, $n = 250$, 99% CI. The critical value $z^*$ is:',
            options: ['1.645', '1.960', '2.326', '2.576'],
            correctAnswer: 3,
            explanation: '$99\\\\%$ confidence uses $z^* = 2.576$.'
          },
          {
            question: 'If a 95% CI for $p$ is $(0.42, 0.58)$, the margin of error is:',
            options: ['0.08', '0.16', '0.50', '0.42'],
            correctAnswer: 0,
            explanation: '$ME = (0.58 - 0.42)/2 = 0.16/2 = 0.08$.'
          }
        ]
      }
    },    {
      id: 'propinference-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$n = 800$, $\\\\hat{p} = 0.65$, 95% CI.

**1)** Margin of error $= 1.96 \\\\times \\\\sqrt{0.65 \\\\times 0.35/800} \\\\approx ?$ (round to 3 places)

**2)** Lower bound of CI?

**3)** Upper bound of CI?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.033', '0.617', '0.683'],
        hint1: '$\\\\sqrt{0.2275/800} \\\\approx 0.01686$, then $\\\\times 1.96$',
        hint2: '$0.65 - 0.033$',
        hint3: '$0.65 + 0.033$',
        explanation: '1) $1.96 \\\\times 0.01686 \\\\approx 0.033$. 2) $0.65 - 0.033 = 0.617$. 3) $0.65 + 0.033 = 0.683$.'
      }
    }
  ]
};
