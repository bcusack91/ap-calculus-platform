export const apStatsComparingPart5Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p5-intro',
      type: 'text' as const,
      content: `# 📊 Power and Sample Size

**Part 5 of 7 — Detecting Real Differences**

---

### Topics in This Part

| Section |
|---------|
| ⚡ What Is Power? |
| 🎯 Type I and Type II Errors |
| 📐 Factors Affecting Power |
| 🧮 Sample Size Considerations |

> 🔑 **Key Concept:** Power is the probability of correctly rejecting $H_0$ when $H_0$ is actually false. Higher power = better ability to detect a real effect.

---

### Error Types

| | $H_0$ True | $H_0$ False |
|---|:---:|:---:|
| **Reject $H_0$** | Type I Error ($\\alpha$) | Correct! (**Power**) |
| **Fail to Reject** | Correct! | Type II Error ($\\beta$) |

$$\\text{Power} = 1 - \\beta = P(\\text{reject } H_0 \\mid H_0 \\text{ is false})$$

---

### Type I Error ($\\alpha$)
- Rejecting $H_0$ when it is true (false positive)
- Probability $= \\alpha$ (the significance level)
- Example: Concluding a drug works when it actually does not

### Type II Error ($\\beta$)
- Failing to reject $H_0$ when it is false (false negative)
- Probability = $\\beta$
- Example: Concluding a drug does not work when it actually does

---

### Factors That Increase Power

| Factor | Direction | Effect on Power |
|--------|:---------:|:---:|
| Sample size ($n$) | ↑ | Power ↑ |
| Significance level ($\\alpha$) | ↑ | Power ↑ |
| True effect size ($|\\mu_1 - \\mu_2|$) | ↑ | Power ↑ |
| Population variability ($\\sigma$) | ↓ | Power ↑ |

> ⚠️ **AP Tip:** You will NOT be asked to calculate power on the AP exam, but you MUST understand conceptually how each factor affects power.

---

### Intuition for Each Factor

**Larger $n$:** More data → smaller SE → easier to detect a difference
$$\\text{SE} = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}} \\quad \\text{→ larger } n \\text{ → smaller SE → larger } |t|$$

**Larger $\\alpha$:** Easier rejection threshold → more likely to reject (but more risk of Type I error)

**Larger effect:** A bigger real difference is easier to detect than a tiny one

**Smaller $\\sigma$:** Less noise → the signal (difference) stands out more clearly

---

### The Power-$\\alpha$ Tradeoff

$$\\alpha \\downarrow \\Rightarrow \\text{Power} \\downarrow \\Rightarrow \\beta \\uparrow$$

Decreasing $\\alpha$ (e.g., from 0.05 to 0.01) reduces Type I error but increases Type II error (reduces power). The only way to reduce BOTH errors simultaneously is to **increase sample size**.

---

### Sample Size Planning

Before collecting data, researchers choose $n$ to achieve desired power (typically 80% or higher):

1. Specify the smallest meaningful effect size
2. Estimate population variability ($\\sigma$)
3. Choose $\\alpha$ (usually 0.05)
4. Use a power table or software to find the required $n$

> 🔑 **Key Insight:** Larger samples are always better for power, but they cost more. Sample size planning balances statistical needs with practical constraints.`
    },
    {
      id: 'apstats-comparingpopulations-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Power Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Power is the probability of:',
            options: ['Making a Type I error', 'Failing to reject $H_0$', 'Correctly rejecting $H_0$ when it is false', 'Accepting $H_0$'],
            correctAnswer: 2,
            explanation: 'Power $= P(\\text{reject } H_0 \\mid H_0 \\text{ false}) = 1 - \\beta$.'
          },
          {
            question: 'Increasing the sample size:',
            options: ['Increases both Type I and Type II error', 'Decreases power', 'Increases power', 'Has no effect on power'],
            correctAnswer: 2,
            explanation: 'Larger $n$ → smaller SE → more likely to detect a real difference → higher power.'
          },
          {
            question: 'A Type II error occurs when:',
            options: ['We reject a true $H_0$', 'We fail to reject a false $H_0$', 'We correctly reject $H_0$', 'We correctly fail to reject $H_0$'],
            correctAnswer: 1,
            explanation: 'Type II error: $H_0$ is false but we fail to reject it — we miss the real effect.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p5-input',
      type: 'input-boxes' as const,
      content: `
**Error and Power Calculations** 🧮

**1)** If $\\beta = 0.15$, what is the power? (give as decimal)

**2)** If $\\alpha = 0.01$, what is the probability of a Type I error?

**3)** A test has power $= 0.80$. What is $\\beta$?
      `,
      exercise: {
        inputs: [
          {
            label: 'Power',
            correctAnswer: '0.85',
            explanation: 'Power $= 1 - \\beta = 1 - 0.15 = 0.85$.'
          },
          {
            label: 'P(Type I error)',
            correctAnswer: '0.01',
            explanation: '$P(\\text{Type I error}) = \\alpha = 0.01$.'
          },
          {
            label: 'Beta',
            correctAnswer: '0.20',
            explanation: '$\\beta = 1 - \\text{Power} = 1 - 0.80 = 0.20$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Power Factors** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'cp5-dd1',
            label: 'Changing $\\alpha$ from 0.05 to 0.01 (with everything else fixed) ___ power',
            options: ['increases', 'decreases', 'does not change'],
            correctIndex: 1,
            explanation: 'Smaller $\\alpha$ = stricter rejection threshold = harder to reject = lower power.'
          },
          {
            id: 'cp5-dd2',
            label: 'The true difference between $\\mu_1$ and $\\mu_2$ is very large. Power is ___',
            options: ['low', 'high'],
            correctIndex: 1,
            explanation: 'Large true effects are easier to detect, so power is high.'
          },
          {
            id: 'cp5-dd3',
            label: 'To reduce BOTH Type I and Type II error, you should ___',
            options: ['decrease $\\alpha$', 'increase $\\alpha$', 'increase sample size'],
            correctIndex: 2,
            explanation: 'Changing $\\alpha$ trades one error for the other. Only increasing $n$ reduces both.'
          },
          {
            id: 'cp5-dd4',
            label: 'High variability ($\\sigma$) in the population ___ power',
            options: ['increases', 'decreases', 'does not affect'],
            correctIndex: 1,
            explanation: 'More variability = more noise = harder to detect the signal = lower power.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Power & Sample Size** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$\\alpha = 0.05$ means:',
            options: ['5% chance of Type II error', '5% chance of rejecting $H_0$ when it is true', '5% power', '5% of the data is wrong'],
            correctAnswer: 1,
            explanation: '$\\alpha$ is the probability of a Type I error: rejecting a true $H_0$.'
          },
          {
            question: 'Power $= 0.90$ means:',
            options: ['90% chance of making an error', '90% chance of detecting a real effect', '90% of the data supports $H_0$', '90% confidence level'],
            correctAnswer: 1,
            explanation: 'Power = 0.90 means a 90% probability of correctly rejecting $H_0$ when it is false.'
          },
          {
            question: 'A researcher wants higher power but cannot increase $n$. She could:',
            options: ['Use a smaller $\\alpha$', 'Use a larger $\\alpha$', 'Look for a smaller effect', 'Nothing can help'],
            correctAnswer: 1,
            explanation: 'Larger $\\alpha$ increases power (at the cost of higher Type I error risk).'
          },
          {
            question: 'Which is NOT a consequence of low power?',
            options: ['More likely to miss real effects', 'Higher $\\beta$', 'More Type II errors', 'More Type I errors'],
            correctAnswer: 3,
            explanation: 'Low power means high $\\beta$ (more Type II errors). Type I errors depend on $\\alpha$, not power.'
          },
          {
            question: 'A drug trial fails to find a significant difference ($P = 0.12$). Which is most accurate?',
            options: ['The drug does not work', 'We lack convincing evidence the drug works — the study may have had insufficient power', 'The drug is harmful', '$\\beta = 0.12$'],
            correctAnswer: 1,
            explanation: 'Failing to reject $H_0$ could mean no effect OR insufficient power to detect a real effect.'
          },
          {
            question: 'Increasing $n$ from 25 to 100 (per group) will:',
            options: ['Quadruple the power', 'Approximately halve the SE', 'Have no effect', 'Double the $P$-value'],
            correctAnswer: 1,
            explanation: 'SE $\\propto 1/\\sqrt{n}$. Quadrupling $n$ halves SE, which substantially increases power.'
          },
          {
            question: 'Type I error is considered more serious in:',
            options: ['All situations', 'Medical trials where a false positive could lead to adopting an ineffective treatment', 'Quality control where missing defects is the main risk', 'Never'],
            correctAnswer: 1,
            explanation: 'In medicine, falsely claiming a treatment works (Type I) can harm patients. Context determines which error is more serious.'
          },
          {
            question: 'A test with power $= 0.50$ has a ___ chance of detecting a real effect.',
            options: ['High (95%)', 'Moderate (50%)', 'Low (5%)', 'Zero'],
            correctAnswer: 1,
            explanation: 'Power = 0.50 means only a 50/50 chance of detecting the effect — generally considered too low.'
          },
          {
            question: 'All else equal, detecting a difference of 10 units is ___ than detecting a difference of 2 units.',
            options: ['Harder', 'Easier', 'Equally difficult', 'Impossible'],
            correctAnswer: 1,
            explanation: 'Larger effects are easier to detect (higher power) than smaller effects.'
          },
          {
            question: 'On the AP exam, you are expected to:',
            options: ['Calculate power numerically', 'Understand how $n$, $\\alpha$, effect size, and $\\sigma$ affect power conceptually', 'Design studies with specified power', 'None of the above'],
            correctAnswer: 1,
            explanation: 'The AP exam asks conceptual reasoning about power: which factors increase it and why.'
          }
        ]
      }
    }
  ]
};
