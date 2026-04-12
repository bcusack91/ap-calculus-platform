export const apStatsPropInfPart1Data = {
  topicSlug: 'proportions-inference-apstats',
  sections: [
    {
      id: 'proportionsinference-p1-intro',
      type: 'text' as const,
      content: `# 📊 Inference for Proportions

**Part 1 of 7 — One-Proportion Z-Test**

---

### Hypothesis Test for a Population Proportion

**Hypotheses:**
- $H_0: p = p_0$ (null)
- $H_a: p \\\\neq p_0$ (or $< $ or $>$) (alternative)

**Test Statistic:**
$$z = \\\\frac{\\\\hat{p} - p_0}{\\\\sqrt{\\\\frac{p_0(1-p_0)}{n}}}$$

**Conditions:**
1. Random sample
2. Independence: $n \\\\leq 10\\\\%$ of population (10% condition)
3. Large Counts: $np_0 \\\\geq 10$ and $n(1-p_0) \\\\geq 10$

---

### Worked Example

Claim: 60% of students prefer online classes. Survey of 200 finds $\\\\hat{p} = 0.55$.

$z = \\\\frac{0.55 - 0.60}{\\\\sqrt{\\\\frac{0.60(0.40)}{200}}} = \\\\frac{-0.05}{0.0346} = -1.44$

$p\\\\text{-value} = 2P(Z < -1.44) = 2(0.0749) = 0.1498$

Since $0.1498 > 0.05$, fail to reject $H_0$.`
    },
    {
      id: 'proportionsinference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes one-proportion z-test?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: 'One-Proportion Z-Test is a core AP Statistics concept tested on the exam.'
          }
        ]
      }
    }
  ]
};
