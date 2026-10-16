export const apStatsHypothesisPart3Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p3-intro',
      type: 'text' as const,
      content: `# 🔢 P-Values

**Part 3 of 7 — How Surprising Is the Evidence?**

---

### What Is a P-Value?

The **P-value** is the probability of obtaining a test statistic as extreme as (or more extreme than) the one observed, **assuming $H_0$ is true**.

> 🔑 **Plain English:** "If nothing special is happening ($H_0$ is true), how likely is it that we\'d see data this extreme just by chance?"

---

### Decision Rule

| Comparison | Decision | Conclusion |
|:----------:|:--------:|------------|
| $P < \\alpha$ | **Reject $H_0$** | Result is **statistically significant** |
| $P \\geq \\alpha$ | **Fail to reject $H_0$** | Result is NOT statistically significant |

> ⚠️ **Never say "accept $H_0$."** We either reject or fail to reject.

---

### Interpreting P-Values

| P-value Range | Strength of Evidence Against $H_0$ |
|:-------------:|-------------------------------------|
| $P > 0.10$ | Weak or no evidence |
| $0.05 < P \\leq 0.10$ | Moderate evidence |
| $0.01 < P \\leq 0.05$ | Strong evidence |
| $P \\leq 0.01$ | Very strong evidence |

---

### One-Tailed vs Two-Tailed P-Values

| Test Type | P-value Calculation |
|-----------|-------------------|
| Right-tailed ($H_a: \\mu > \\mu_0$) | $P = P(t \\geq t_{obs})$ |
| Left-tailed ($H_a: \\mu < \\mu_0$) | $P = P(t \\leq t_{obs})$ |
| Two-tailed ($H_a: \\mu \\neq \\mu_0$) | $P = 2 \\cdot P(t \\geq |t_{obs}|)$ |

> 🔑 **Two-tailed tests double the one-tail probability** because evidence in either direction counts.

---

### Worked Example

**$\\bar{x} = 520$, $\\mu_0 = 500$, $SE = 10$, $\\alpha = 0.05$, right-tailed test.**

**Step 1 — Test statistic:**
$$t = \\frac{520 - 500}{10} = 2.0$$

**Step 2 — P-value (using calculator):**
$$P = \\text{tcdf}(2.0, 10^{99}, 35) \\approx 0.027$$

**Step 3 — Decision:**
$$0.027 < 0.05 \\Rightarrow \\text{Reject } H_0$$

**Step 4 — Conclusion in context:**
"There is convincing evidence ($t = 2.0$, $P = 0.027$) that the true mean SAT math score at this school is greater than 500."

---

### Writing AP Conclusions

Always include four elements:

1. **Decision** — Reject or fail to reject $H_0$
2. **Evidence** — Cite $t$-statistic and P-value
3. **Context** — Refer to the specific problem
4. **Direction** — "Greater than," "less than," or "different from"

> 🔑 **AP Tip:** "Fail to reject" does NOT mean the null is proven true — only that we lack sufficient evidence.`
    },
    {
      id: 'apstats-hypothesis-testing-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**P-Value Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $P = 0.03$ and $\\alpha = 0.05$, the decision is:',
            options: ['Accept $H_0$', 'Reject $H_0$', 'Fail to reject $H_0$', 'Rerun the test'],
            correctAnswer: 1,
            explanation: '$P = 0.03 < \\alpha = 0.05$, so we reject $H_0$.'
          },
          {
            question: 'A P-value of 0.45 means:',
            options: ['Strong evidence against the null', 'A 45% chance that $H_0$ is true', 'A 45% chance of data this extreme if $H_0$ holds', 'A 45% chance that the result is a mistake'],
            correctAnswer: 2,
            explanation: 'The p-value is the probability of results at least this extreme, computed assuming $H_0$ is true. It is not the probability that $H_0$ is true, and 0.45 is weak, not strong, evidence against $H_0$.'
          },
          {
            question: 'A two-tailed P-value is ___ the one-tailed P-value for the same $t$-statistic.',
            options: ['Half', 'Equal to', 'Double', 'Unrelated to'],
            correctAnswer: 2,
            explanation: 'Two-tailed P doubles the one-tail probability since evidence in either direction counts.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p3-input',
      type: 'input-boxes' as const,
      content: `
**P-Value Decisions** 🧮

**1)** The most common significance level $\\alpha$ is:

**2)** $P = 0.03$ vs $P = 0.08$: which is more significant? (enter the P-value)

**3)** $P = 0.12$, $\\alpha = 0.05$. Do we reject? (enter "yes" or "no")
      `,
      exercise: {
        inputs: [
          {
            label: 'Common alpha',
            correctAnswer: '0.05',
            explanation: '$\\alpha = 0.05$ is the standard significance level unless otherwise stated.'
          },
          {
            label: 'More significant P-value',
            correctAnswer: '0.03',
            explanation: 'Smaller P-values indicate stronger evidence against $H_0$.'
          },
          {
            label: 'Reject?',
            correctAnswer: 'no',
            explanation: '$P = 0.12 > \\alpha = 0.05$, so we fail to reject $H_0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**P-Value Interpretation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht3-dd1',
            label: 'If $P < \\alpha$, the result is called:',
            options: ['Practically significant', 'Statistically significant', 'Practically important', 'Not significant'],
            correctIndex: 1,
            explanation: '$P < \\alpha$ means the result is statistically significant — unlikely under $H_0$.'
          },
          {
            id: 'ht3-dd2',
            label: 'A P-value of 0.002 provides ___ evidence against $H_0$',
            options: ['No real', 'Weak', 'Only moderate', 'Very strong'],
            correctIndex: 3,
            explanation: '$P \\leq 0.01$ = very strong evidence against $H_0$.'
          },
          {
            id: 'ht3-dd3',
            label: '"Fail to reject $H_0$" means:',
            options: ['$H_0$ has been proven to be true', 'Weak evidence against $H_0$', 'The experiment was a complete failure', '$H_a$ has been shown to be impossible'],
            correctIndex: 1,
            explanation: 'Failing to reject means the evidence against $H_0$ was not strong enough. It does not prove $H_0$, rule out $H_a$, or mean the study failed.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — P-Values** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The P-value is computed assuming:',
            options: ['$H_a$ is true', '$H_0$ is true', 'Both hypotheses are true', 'Neither hypothesis is true'],
            correctAnswer: 1,
            explanation: 'We compute P under the assumption that $H_0$ is true.'
          },
          {
            question: '$P = 0.04$, $\\alpha = 0.05$. Conclusion:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Accept $H_a$', 'Increase $\\alpha$'],
            correctAnswer: 1,
            explanation: '$0.04 < 0.05$ → reject $H_0$ at the 5% level.'
          },
          {
            question: '$P = 0.07$, $\\alpha = 0.05$. Conclusion:',
            options: ['Reject $H_0$', 'Accept $H_0$', 'Fail to reject $H_0$', 'Reject $H_0$ at 0.10'],
            correctAnswer: 2,
            explanation: '$0.07 > 0.05$, so we fail to reject $H_0$. We never accept $H_0$, and the decision must use the stated $\\alpha = 0.05$, not a level chosen afterward.'
          },
          {
            question: 'A two-tailed test with $t = 2.5$ and $df = 20$ gives a one-tail area of 0.011. The P-value is:',
            options: ['0.005', '0.011', '0.022', '0.044'],
            correctAnswer: 2,
            explanation: 'Two-tailed: $P = 2 \\times 0.011 = 0.022$.'
          },
          {
            question: 'Which P-value gives the strongest evidence against $H_0$?',
            options: ['0.250', '0.100', '0.050', '0.003'],
            correctAnswer: 3,
            explanation: 'Smaller P-values = stronger evidence. $0.003$ is the smallest.'
          },
          {
            question: '"Statistically significant" means:',
            options: ['The result is large', 'The result is important in practice', '$P < \\alpha$', '$P$ is greater than $\\alpha$'],
            correctAnswer: 2,
            explanation: 'Statistical significance means $P < \\alpha$ — the result is unlikely under $H_0$.'
          },
          {
            question: 'Statistical significance does NOT guarantee:',
            options: ['A p-value below $\\alpha$', 'Rejection of $H_0$', 'Practical importance', 'A result unlikely under $H_0$'],
            correctAnswer: 2,
            explanation: 'A statistically significant result may involve a tiny, meaningless effect. Practical significance is separate.'
          },
          {
            question: 'If $\\alpha = 0.01$, we reject $H_0$ when:',
            options: ['$P < 0.05$', '$P < 0.01$', '$P > 0.01$', '$P = 0.01$'],
            correctAnswer: 1,
            explanation: 'Reject when $P < \\alpha = 0.01$.'
          },
          {
            question: 'An AP-style conclusion should include:',
            options: ['The decision alone', 'Decision, P-value and context', 'The P-value alone', 'The context alone'],
            correctAnswer: 1,
            explanation: 'Include the decision, evidence (t and P), and the real-world context of the problem.'
          },
          {
            question: 'A researcher obtains $P = 0.06$ at $\\alpha = 0.05$. The best statement is:',
            options: ['The data show that $H_0$ must be true', 'The data prove that $H_a$ is correct', 'Not enough evidence to reject $H_0$', 'The experiment must have been flawed'],
            correctAnswer: 2,
            explanation: '$P = 0.06 > 0.05$: fail to reject $H_0$ at the 5% level. That does NOT prove $H_0$ or $H_a$; it means the evidence was not convincing.'
          }
        ]
      }
    }
  ]
};
