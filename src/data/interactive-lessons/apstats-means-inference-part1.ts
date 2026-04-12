export const apStatsMeansInfPart1Data = {
  topicSlug: 'means-inference-apstats',
  sections: [
    {
      id: 'meansinference-p1-intro',
      type: 'text' as const,
      content: `# 📊 Inference for Means

**Part 1 of 7 — One-Sample T-Test**

---

### When to Use a T-Test

Use a $t$-test when the population standard deviation $\\\\sigma$ is **unknown** (which is almost always the case in practice).

### Hypotheses
- $H_0: \\\\mu = \\\\mu_0$
- $H_a: \\\\mu \\\\neq \\\\mu_0$ (or $<$, $>$)

### Test Statistic

$$t = \\\\frac{\\\\bar{x} - \\\\mu_0}{s / \\\\sqrt{n}}$$

with $df = n - 1$

### Conditions
1. **Random** sample
2. **Independence**: $n \\\\leq 10\\\\%$ of population
3. **Normal/Large Sample**: $n \\\\geq 30$ OR population is approximately normal (check with graph)

---

### Worked Example

Claim: mean study time is 5 hours. Sample: $n = 36$, $\\\\bar{x} = 5.8$, $s = 2.4$.

$$t = \\\\frac{5.8 - 5.0}{2.4/\\\\sqrt{36}} = \\\\frac{0.8}{0.4} = 2.0 \\\\quad (df = 35)$$`
    },
    {
      id: 'meansinference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes one-sample t-test?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: 'One-Sample T-Test is a core AP Statistics concept tested on the exam.'
          }
        ]
      }
    }
  ]
};
