export const apStatsHypothesisPart1Data = {
  topicSlug: 'hypothesis-testing-apstats',
  sections: [
    {
      id: 'apstats-hypothesis-testing-p1-intro',
      type: 'text' as const,
      content: `# 📐 Null & Alternative Hypotheses

**Part 1 of 7 — Setting Up the Test**

---

### What Is Hypothesis Testing?

Hypothesis testing is a formal procedure for using sample data to decide between two competing claims about a population parameter.

| Component | Symbol | Description |
|-----------|:------:|-------------|
| **Null hypothesis** | $H_0$ | No effect / no difference — the status quo |
| **Alternative hypothesis** | $H_a$ | There IS an effect / difference — the research claim |

> 🔑 **Key Idea:** We assume $H_0$ is true and look for evidence against it. We NEVER prove $H_0$ true — we either reject it or fail to reject it.

---

### Writing Hypotheses

Hypotheses are always about **population parameters** ($\\mu$, $p$), never about sample statistics ($\\bar{x}$, $\\hat{p}$).

**For means:**

| Type | $H_0$ | $H_a$ | When to Use |
|------|:------:|:------:|-------------|
| Two-tailed | $H_0: \\mu = \\mu_0$ | $H_a: \\mu \\neq \\mu_0$ | "Is there a difference?" |
| Right-tailed | $H_0: \\mu = \\mu_0$ | $H_a: \\mu > \\mu_0$ | "Is it greater than?" |
| Left-tailed | $H_0: \\mu = \\mu_0$ | $H_a: \\mu < \\mu_0$ | "Is it less than?" |

**For proportions:**

| Type | $H_0$ | $H_a$ |
|------|:------:|:------:|
| Two-tailed | $H_0: p = p_0$ | $H_a: p \\neq p_0$ |
| Right-tailed | $H_0: p = p_0$ | $H_a: p > p_0$ |
| Left-tailed | $H_0: p = p_0$ | $H_a: p < p_0$ |

> ⚠️ **Important:** $H_0$ always contains the **equals sign** ($=$). The alternative contains $\\neq$, $>$, or $<$.

---

### Worked Example

**Claim: "Students at this school score higher than the national average of 75."**

- Parameter: $\\mu$ = true mean score of students at this school
- $H_0: \\mu = 75$ (no difference from national average)
- $H_a: \\mu > 75$ (school average is higher)

This is a **right-tailed** test because the claim is "higher than."

---

### Significance Level ($\\alpha$)

Before testing, we choose a significance level $\\alpha$ (usually 0.05):

| $\\alpha$ | Meaning |
|:--------:|---------|
| 0.05 | Reject $H_0$ if the evidence would occur less than 5% of the time under $H_0$ |
| 0.01 | More stringent — only reject with very strong evidence |
| 0.10 | Less stringent — reject with moderate evidence |

> 🔑 **AP Tip:** Unless told otherwise, assume $\\alpha = 0.05$ on the AP exam.`
    },
    {
      id: 'apstats-hypothesis-testing-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Hypothesis Setup** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$H_0$ represents:',
            options: ['The research claim', 'No effect (status quo)', 'The test statistic', 'The sample mean'],
            correctAnswer: 1,
            explanation: 'The null hypothesis represents the status quo — nothing new is happening.'
          },
          {
            question: 'A researcher believes a diet reduces weight. The alternative hypothesis should be:',
            options: ['$H_a: \\mu = 0$', '$H_a: \\mu > 0$', '$H_a: \\mu < 0$', '$H_a: \\mu \\neq 0$'],
            correctAnswer: 2,
            explanation: 'If the diet reduces weight, the mean change is negative (weight goes down), so $H_a: \\mu < 0$.'
          },
          {
            question: 'Which hypothesis always contains the equals sign?',
            options: ['$H_a$', '$H_0$', 'Both', 'Neither'],
            correctAnswer: 1,
            explanation: '$H_0$ always uses $=$ (e.g., $H_0: \\mu = \\mu_0$). The alternative uses $\\neq$, $<$, or $>$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p1-input',
      type: 'input-boxes' as const,
      content: `
**Hypothesis Identification** 🧮

**For each claim, identify the null value ($\\mu_0$):**

**1)** Claim: $\\mu > 75$. $H_0: \\mu = $ ?

**2)** Claim: $\\mu < 50$. $H_0: \\mu = $ ?

**3)** Claim: $\\mu \\neq 100$. $H_0: \\mu = $ ?
      `,
      exercise: {
        inputs: [
          {
            label: 'Null value for claim 1',
            correctAnswer: '75',
            explanation: 'The null value is the boundary: $H_0: \\mu = 75$.'
          },
          {
            label: 'Null value for claim 2',
            correctAnswer: '50',
            explanation: 'The null value is the boundary: $H_0: \\mu = 50$.'
          },
          {
            label: 'Null value for claim 3',
            correctAnswer: '100',
            explanation: 'The null value is the boundary: $H_0: \\mu = 100$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Test Direction** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ht1-dd1',
            label: '$H_a: \\mu > 75$ is a ___ test',
            options: ['Left-tailed', 'Right-tailed', 'Two-tailed'],
            correctIndex: 1,
            explanation: '$>$ means we look in the right tail for evidence.'
          },
          {
            id: 'ht1-dd2',
            label: '$H_a: \\mu \\neq 100$ is a ___ test',
            options: ['Left-tailed', 'Right-tailed', 'Two-tailed'],
            correctIndex: 2,
            explanation: '$\\neq$ means evidence in either direction counts, so we check both tails.'
          },
          {
            id: 'ht1-dd3',
            label: 'We hope to ___ the null hypothesis',
            options: ['Accept', 'Reject', 'Prove', 'Ignore'],
            correctIndex: 1,
            explanation: 'We look for evidence to reject $H_0$. We never "accept" or "prove" $H_0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-hypothesis-testing-p1-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Null & Alternative Hypotheses** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Hypotheses are statements about:',
            options: ['Sample statistics', 'Population parameters', 'Individual data points', 'Graphs'],
            correctAnswer: 1,
            explanation: 'Hypotheses always involve population parameters ($\\mu$, $p$), not sample statistics.'
          },
          {
            question: '"A coin is fair" translates to:',
            options: ['$H_0: p = 0.5$', '$H_a: p = 0.5$', '$H_0: p > 0.5$', '$H_0: \\hat{p} = 0.5$'],
            correctAnswer: 0,
            explanation: '"Fair" is the status quo: $H_0: p = 0.5$. Note: we use $p$ (parameter), not $\\hat{p}$ (statistic).'
          },
          {
            question: 'A company claims their light bulbs last more than 1000 hours. The null hypothesis is:',
            options: ['$H_0: \\mu > 1000$', '$H_0: \\mu = 1000$', '$H_0: \\mu < 1000$', '$H_0: \\bar{x} = 1000$'],
            correctAnswer: 1,
            explanation: '$H_0$ always uses equals: $H_0: \\mu = 1000$. The claim ($\\mu > 1000$) goes in $H_a$.'
          },
          {
            question: 'If $\\alpha = 0.01$, we require ___ evidence to reject $H_0$ compared to $\\alpha = 0.05$.',
            options: ['Weaker', 'Stronger', 'The same', 'No'],
            correctAnswer: 1,
            explanation: 'Smaller $\\alpha$ = stricter threshold = need stronger evidence to reject.'
          },
          {
            question: 'Which is a valid alternative hypothesis?',
            options: ['$H_a: \\bar{x} > 50$', '$H_a: \\mu = 50$', '$H_a: \\mu > 50$', '$H_a: \\mu \\geq 50$'],
            correctAnswer: 2,
            explanation: '$H_a$ uses strict inequalities ($>$, $<$, $\\neq$) with population parameters.'
          },
          {
            question: '"Is the proportion different from 0.5?" calls for a:',
            options: ['Left-tailed test', 'Right-tailed test', 'Two-tailed test', 'No test needed'],
            correctAnswer: 2,
            explanation: '"Different from" = either direction = two-tailed: $H_a: p \\neq 0.5$.'
          },
          {
            question: 'The default significance level on the AP exam is:',
            options: ['0.01', '0.05', '0.10', '0.50'],
            correctAnswer: 1,
            explanation: 'Unless otherwise stated, use $\\alpha = 0.05$.'
          },
          {
            question: 'We can never:',
            options: ['Reject $H_0$', 'Fail to reject $H_0$', 'Prove $H_0$ is true', 'Calculate a test statistic'],
            correctAnswer: 2,
            explanation: 'Failing to reject $H_0$ does NOT prove it is true — we simply lack evidence against it.'
          },
          {
            question: 'A one-tailed test is more powerful than a two-tailed test because:',
            options: ['It uses a larger sample', 'All the rejection region is in one direction', 'It has a higher $\\alpha$', 'It uses the mean instead of the median'],
            correctAnswer: 1,
            explanation: 'A one-tailed test puts the entire rejection region in one tail, making it easier to reject in that specific direction.'
          },
          {
            question: 'Which claim goes in $H_a$?',
            options: ['The status quo', 'What we want to prove', 'The sample result', 'The null value'],
            correctAnswer: 1,
            explanation: 'The research claim (what we hope to find evidence for) goes in $H_a$.'
          }
        ]
      }
    }
  ]
};
