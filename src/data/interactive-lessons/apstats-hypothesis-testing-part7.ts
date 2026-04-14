export const apStatsHypothesisPart7Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p7-intro',
      type: 'text' as const,
      content: `# 🏆 Review & Applications

**Part 7 of 7 — Complete Reference Guide**

---

### Formula Reference

| Formula | Expression | Purpose |
|---------|:----------:|---------|
| Standard Error | $SE = \\dfrac{s}{\\sqrt{n}}$ | Measures variability of $\\bar{x}$ |
| Test Statistic | $t = \\dfrac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}$ | Standardizes the distance from null |
| Degrees of Freedom | $df = n - 1$ | Determines the $t$-distribution shape |

---

### Hypothesis Test Decision Guide

| Question | Answer |
|----------|--------|
| "Is it greater than?" | Right-tailed: $H_a: \\mu > \\mu_0$ |
| "Is it less than?" | Left-tailed: $H_a: \\mu < \\mu_0$ |
| "Is it different from?" | Two-tailed: $H_a: \\mu \\neq \\mu_0$ |

---

### Decision Rule

$$\\text{If } P < \\alpha \\Rightarrow \\text{Reject } H_0 \\qquad \\text{If } P \\geq \\alpha \\Rightarrow \\text{Fail to reject } H_0$$

---

### Error Summary

| | $H_0$ True | $H_0$ False |
|---|:---:|:---:|
| **Reject $H_0$** | Type I ($\\alpha$) | ✅ Correct (Power = $1-\\beta$) |
| **Fail to reject $H_0$** | ✅ Correct | Type II ($\\beta$) |

---

### Conditions Checklist

| Condition | Check |
|-----------|-------|
| **Random** | SRS or randomized experiment |
| **Independent** | $n < 10\\%$ of population |
| **Normal/Large** | $n \\geq 30$ (CLT) or data approximately normal |

---

### AP Four-Step Process

1. **STATE** — Define parameter; write $H_0$ and $H_a$
2. **PLAN** — Name the test; check all three conditions
3. **DO** — Compute SE, $t$, $df$, P-value
4. **CONCLUDE** — Decision + evidence + context

---

### Power Factors

| To Increase Power | Do This |
|-------------------|---------|
| Increase $n$ | More data → smaller SE → easier to detect effects |
| Increase $\\alpha$ | More willing to reject (but more Type I risk) |
| Larger effect size | Bigger $|\\mu - \\mu_0|$ → easier to detect |
| Decrease $s$ | Less variability → more precise estimates |

---

### Common Mistakes on the AP Exam

| Mistake | Why It\'s Wrong |
|---------|----------------|
| "Accept $H_0$" | We can only "fail to reject" — never prove $H_0$ |
| Using $\\bar{x}$ in hypotheses | Hypotheses use $\\mu$ (parameter), not $\\bar{x}$ (statistic) |
| No context in conclusion | Must relate conclusion to the specific problem |
| Forgetting to check conditions | All three required for full credit |
| Confusing statistical and practical significance | Small P doesn\'t mean the effect matters in practice |`
    },
    {
      id: 'apstats-hypothesis-testing-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$P = 0.04$, $\\alpha = 0.05$. Decision:',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'Accept $H_0$', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$0.04 < 0.05$ → reject $H_0$.'
          },
          {
            question: 'Which type of error can be controlled directly by choosing $\\alpha$?',
            options: ['Type I', 'Type II', 'Both', 'Neither'],
            correctAnswer: 0,
            explanation: '$P(\\text{Type I}) = \\alpha$. We set $\\alpha$ before the test.'
          },
          {
            question: 'The conclusion of a hypothesis test should include:',
            options: ['Only the P-value', 'Only "reject" or "fail to reject"', 'Decision, evidence, and context', 'A proof that $H_0$ is true or false'],
            correctAnswer: 2,
            explanation: 'AP conclusions need: decision + evidence ($t$ and $P$) + real-world context.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p7-input',
      type: 'input-boxes' as const,
      content: `
**Quick Calculations** 🧮

**1)** $n = 30$. $df = $ ?

**2)** $s = 12$, $n = 36$. $SE = $ ?

**3)** $\\bar{x} = 48$, $\\mu_0 = 50$, $SE = 2$. $t = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'df',
            correctAnswer: '29',
            explanation: '$df = n - 1 = 30 - 1 = 29$.'
          },
          {
            label: 'SE',
            correctAnswer: '2',
            explanation: '$SE = 12/\\sqrt{36} = 12/6 = 2$.'
          },
          {
            label: 't',
            correctAnswer: '-1',
            explanation: '$t = (48 - 50)/2 = -2/2 = -1$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Key Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht7-dd1',
            label: 'Statistical significance means:',
            options: ['$P < \\alpha$', '$P > \\alpha$', '$t = 0$', 'The result is practically important'],
            correctIndex: 0,
            explanation: 'Statistically significant = $P < \\alpha$ = reject $H_0$.'
          },
          {
            id: 'ht7-dd2',
            label: 'Increasing $\\alpha$ makes it ___ to reject $H_0$:',
            options: ['Harder', 'Easier', 'Impossible', 'No effect'],
            correctIndex: 1,
            explanation: 'Larger $\\alpha$ = wider rejection region = easier to reject.'
          },
          {
            id: 'ht7-dd3',
            label: 'The $t$-distribution approaches the normal distribution as:',
            options: ['$\\alpha$ increases', '$n$ increases', '$s$ increases', '$\\bar{x}$ increases'],
            correctIndex: 1,
            explanation: 'More df (larger $n$) → $t$-distribution approaches the standard normal.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Hypothesis Testing Review** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$H_0$ always contains:',
            options: ['$>$', '$<$', '$=$', '$\\neq$'],
            correctAnswer: 2,
            explanation: 'The null hypothesis uses $=$ (e.g., $H_0: \\mu = \\mu_0$).'
          },
          {
            question: '$n = 41$, $\\bar{x} = 78$, $s = 10$, $\\mu_0 = 75$. The SE is:',
            options: ['$10/\\sqrt{40} \\approx 1.58$', '$10/\\sqrt{41} \\approx 1.56$', '$10/\\sqrt{42} \\approx 1.54$', '$10/41 \\approx 0.24$'],
            correctAnswer: 1,
            explanation: '$SE = s/\\sqrt{n} = 10/\\sqrt{41} \\approx 1.56$.'
          },
          {
            question: 'Using $SE \\approx 1.56$ above, $t \\approx$',
            options: ['$0.5$', '$1.0$', '$1.92$', '$3.0$'],
            correctAnswer: 2,
            explanation: '$t = (78-75)/1.56 = 3/1.56 \\approx 1.92$.'
          },
          {
            question: 'A right-tailed test with $t = 1.92$ and $df = 40$ gives $P \\approx 0.031$. At $\\alpha = 0.05$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Accept $H_a$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$P = 0.031 < 0.05 = \\alpha$ → reject $H_0$.'
          },
          {
            question: 'Power = 0.90 means:',
            options: ['90% chance of Type I error', '90% chance of correctly rejecting a false $H_0$', '10% chance of rejecting $H_0$', '90% significance level'],
            correctAnswer: 1,
            explanation: 'Power $= 1 - \\beta = 0.90$ = 90% chance of detecting a real effect.'
          },
          {
            question: 'Which increases power without increasing Type I error risk?',
            options: ['Increasing $\\alpha$', 'Increasing $n$', 'Decreasing $n$', 'Removing conditions'],
            correctAnswer: 1,
            explanation: 'Increasing $n$ reduces SE, increasing power without changing $\\alpha$.'
          },
          {
            question: 'A researcher finds $P = 0.0001$. Statistical significance guarantees:',
            options: ['The effect is large', 'Practical significance', 'Neither large effect nor practical significance', 'The null is wrong'],
            correctAnswer: 2,
            explanation: 'A tiny P-value can occur with a tiny (unimportant) effect and a large sample.'
          },
          {
            question: 'Which statement is correct?',
            options: ['$\\alpha + \\beta = 1$ always', '$\\alpha$ and $\\beta$ are independent', 'Decreasing $\\alpha$ increases $\\beta$ (for fixed $n$)', 'Type I and Type II errors can both occur in the same test'],
            correctAnswer: 2,
            explanation: 'With fixed $n$, stricter $\\alpha$ → harder to reject → higher $\\beta$.'
          },
          {
            question: 'For a two-tailed test, $H_a$ uses:',
            options: ['$>$', '$<$', '$\\neq$', '$=$'],
            correctAnswer: 2,
            explanation: 'Two-tailed: $H_a: \\mu \\neq \\mu_0$ — looking for a difference in either direction.'
          },
          {
            question: 'The most important thing to remember on the AP exam about hypothesis testing is:',
            options: ['Memorize the formula', 'Always state conclusions in context', 'Use $z$-tests', 'Skip checking conditions'],
            correctAnswer: 1,
            explanation: 'Context is crucial: define the parameter, check conditions, and conclude in the real-world setting.'
          }
        ]
      }
    }
  ]
};
