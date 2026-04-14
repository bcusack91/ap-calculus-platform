export const apStatsComparingPart3Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p3-intro',
      type: 'text' as const,
      content: `# 📊 Paired T-Test

**Part 3 of 7 — When Data Come in Pairs**

---

### Topics in This Part

| Section |
|---------|
| 🔗 Paired vs. Two-Sample Designs |
| 📐 The Paired $t$-Test Procedure |
| ✅ Conditions for Paired Data |
| 📝 Worked Example |

> 🔑 **Key Concept:** A paired $t$-test is a one-sample $t$-test performed on the *differences* within each pair.

---

### When to Use a Paired Test

Use a paired $t$-test when:
- The **same subjects** are measured twice (before/after)
- Subjects are **matched** in pairs (e.g., twins, partners)
- Each observation in one group has a natural **partner** in the other

Use a two-sample $t$-test when:
- The two groups are **independent** (different subjects, no pairing)

---

### The Procedure

**Step 1:** Compute the differences: $d_i = x_{1i} - x_{2i}$ for each pair

**Step 2:** Treat the differences as a single sample and perform a one-sample $t$-test:

$$\\boxed{t = \\frac{\\bar{d} - 0}{s_d / \\sqrt{n}}}$$

where:
- $\\bar{d}$ = mean of the differences
- $s_d$ = standard deviation of the differences
- $n$ = number of pairs
- df $= n - 1$

---

### Hypotheses

$$H_0: \\mu_d = 0 \\quad (\\text{no difference, on average})$$
$$H_a: \\mu_d \\neq 0 \\quad (\\text{or } > 0 \\text{ or } < 0)$$

> ⚠️ **AP Tip:** Define $d$ clearly: "$d$ = After $-$ Before" or "$d$ = Treatment $-$ Control." The direction matters for one-sided tests.

---

### Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Pairs are randomly selected or treatments randomly assigned |
| **Independent** | Individual *pairs* are independent of each other (10% condition on pairs) |
| **Normal** | The *differences* ($d$) are approximately Normal (check histogram/QQ plot of $d$) |

---

### Worked Example

**Study:** Does a tutoring program improve SAT scores?
12 students take the SAT, receive tutoring, then retake it.

| Student | Before | After | $d$ = After $-$ Before |
|---------|--------|-------|:---:|
| 1 | 520 | 560 | $40$ |
| 2 | 480 | 510 | $30$ |
| 3 | 550 | 540 | $-10$ |
| ... | ... | ... | ... |
| Summary | | | $\\bar{d} = 28.5$, $s_d = 22.3$ |

**Step 1 — Hypotheses:**
$H_0: \\mu_d = 0$ (tutoring has no effect on mean SAT scores)
$H_a: \\mu_d > 0$ (tutoring increases mean SAT scores)
where $d$ = After $-$ Before

**Step 2 — Conditions:**
- Random: Students randomly selected ✓
- Independent: 12 students < 10% of all SAT takers ✓
- Normal: Histogram of differences shows no strong skew ✓

**Step 3 — Test statistic:**
$$t = \\frac{28.5 - 0}{22.3/\\sqrt{12}} = \\frac{28.5}{6.436} = 4.43$$
df $= 12 - 1 = 11$

**Step 4 — Conclusion:**
$P < 0.001$ (one-sided). Since $P < 0.001 < 0.05$, we reject $H_0$. There is convincing evidence that the tutoring program increases mean SAT scores.

---

### Paired vs. Two-Sample: Why It Matters

| Feature | Two-Sample | Paired |
|---------|:---:|:---:|
| Data structure | Two independent groups | Pairs of related observations |
| Parameter | $\\mu_1 - \\mu_2$ | $\\mu_d$ |
| Advantage | Simpler design | Controls for variability between subjects |
| df | Complex (Welch) | $n_{\\text{pairs}} - 1$ |

> 🔑 **Key Insight:** Pairing reduces variability by eliminating subject-to-subject differences, making it easier to detect a treatment effect.`
    },
    {
      id: 'apstats-comparingpopulations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Paired $t$-Test Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A paired $t$-test is appropriate when:',
            options: ['Two independent groups are compared', 'The same subjects are measured twice', 'Sample sizes are equal', 'The populations have equal variances'],
            correctAnswer: 1,
            explanation: 'Paired data arise when the same subjects are measured under two conditions (before/after, two treatments, etc.).'
          },
          {
            question: 'In a paired $t$-test, the test statistic uses:',
            options: ['$\\bar{x}_1$ and $\\bar{x}_2$ separately', '$\\bar{d}$ and $s_d$ (mean and SD of differences)', '$s_1$ and $s_2$', '$\\sigma_1$ and $\\sigma_2$'],
            correctAnswer: 1,
            explanation: 'We compute differences $d_i$ first, then apply a one-sample $t$-test to those differences.'
          },
          {
            question: 'The degrees of freedom for a paired $t$-test with 20 pairs is:',
            options: ['$20$', '$19$', '$38$', '$39$'],
            correctAnswer: 1,
            explanation: 'df $= n - 1 = 20 - 1 = 19$, where $n$ is the number of pairs.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Computing the Paired $t$** 🧮

$n = 16$ pairs, $\\bar{d} = 5.0$, $s_d = 8.0$

**1)** SE of $\\bar{d}$ $= s_d / \\sqrt{n} =$

**2)** $t = \\bar{d} / \\text{SE} =$

**3)** df $=$
      `,
      exercise: {
        inputs: [
          {
            label: 'SE of d-bar',
            correctAnswer: '2',
            explanation: '$\\text{SE} = s_d/\\sqrt{n} = 8/\\sqrt{16} = 8/4 = 2$.'
          },
          {
            label: 't-statistic',
            correctAnswer: '2.5',
            explanation: '$t = 5.0/2 = 2.5$.'
          },
          {
            label: 'Degrees of freedom',
            correctAnswer: '15',
            explanation: 'df $= n - 1 = 16 - 1 = 15$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Paired or Two-Sample?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'cp3-dd1',
            label: 'Blood pressure measured before and after medication for the same patients → ___',
            options: ['Two-sample $t$-test', 'Paired $t$-test'],
            correctIndex: 1,
            explanation: 'Same patients measured twice → paired data.'
          },
          {
            id: 'cp3-dd2',
            label: '30 men and 30 women compare mean heights → ___',
            options: ['Two-sample $t$-test', 'Paired $t$-test'],
            correctIndex: 0,
            explanation: 'Different people in each group, no pairing → two independent samples.'
          },
          {
            id: 'cp3-dd3',
            label: 'Twins separated at birth: one raised in city, one in country. Compare IQ → ___',
            options: ['Two-sample $t$-test', 'Paired $t$-test'],
            correctIndex: 1,
            explanation: 'Twins are naturally paired — each twin in one group has a partner in the other.'
          },
          {
            id: 'cp3-dd4',
            label: 'The Normal condition for a paired test checks the distribution of ___',
            options: ['the raw $x$-values', 'the differences $d$', 'the sample means', 'the population'],
            correctIndex: 1,
            explanation: 'For a paired $t$-test, check Normality of the differences $d_i$, not the raw data.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Paired $t$-Test** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A paired $t$-test with $n = 10$ pairs has df $=$',
            options: ['$10$', '$9$', '$18$', '$19$'],
            correctAnswer: 1,
            explanation: 'df $= n - 1 = 10 - 1 = 9$.'
          },
          {
            question: 'If $\\bar{d} = 0$ and $s_d > 0$, the $t$-statistic equals:',
            options: ['$1$', '$0$', '$s_d$', 'Undefined'],
            correctAnswer: 1,
            explanation: '$t = \\bar{d}/\\text{SE} = 0/\\text{SE} = 0$. No evidence of a difference.'
          },
          {
            question: 'A researcher defines $d$ = Before $-$ After. Positive $\\bar{d}$ means:',
            options: ['After scores are higher', 'Before scores are higher', 'No change', 'The test is invalid'],
            correctAnswer: 1,
            explanation: 'If $d$ = Before $-$ After and $\\bar{d} > 0$, then Before scores were higher on average.'
          },
          {
            question: 'Why is pairing beneficial?',
            options: ['It increases sample size', 'It eliminates subject-to-subject variability', 'It requires fewer conditions', 'It guarantees significance'],
            correctAnswer: 1,
            explanation: 'By looking at differences within the same subject, we remove between-subject variability.'
          },
          {
            question: '25 students take a pre-test and post-test. The appropriate procedure is:',
            options: ['Two-sample $t$-test', 'Paired $t$-test', 'Chi-square test', '$z$-test'],
            correctAnswer: 1,
            explanation: 'Same students measured twice → paired design. Use a paired $t$-test on the differences.'
          },
          {
            question: 'The histogram of differences shows extreme right skew with $n = 8$. You should:',
            options: ['Proceed — the $t$-test is always valid', 'Note the Normal condition may not be met with small $n$ and skewed differences', 'Use a two-sample test instead', 'Remove the skew'],
            correctAnswer: 1,
            explanation: 'With small $n$, the $t$-test requires approximately Normal differences. Skewness is a concern.'
          },
          {
            question: '$\\bar{d} = -3.2$, $s_d = 4.8$, $n = 25$. The SE is:',
            options: ['$0.96$', '$4.8$', '$0.192$', '$3.2$'],
            correctAnswer: 0,
            explanation: '$\\text{SE} = s_d/\\sqrt{n} = 4.8/\\sqrt{25} = 4.8/5 = 0.96$.'
          },
          {
            question: 'Using a two-sample $t$-test on paired data:',
            options: ['Is more powerful', 'Ignores the pairing and may miss a real difference', 'Is required on the AP exam', 'Gives the same result'],
            correctAnswer: 1,
            explanation: 'Ignoring the pairing adds unnecessary variability, reducing power to detect a real difference.'
          },
          {
            question: 'A 95% CI for $\\mu_d$ is $(1.2, 5.8)$. Since 0 is NOT in the interval:',
            options: ['The difference is not significant', 'We reject $H_0: \\mu_d = 0$ at $\\alpha = 0.05$', 'We accept $H_0$', 'More data is needed'],
            correctAnswer: 1,
            explanation: '0 is outside the CI, consistent with rejecting $H_0$ at the corresponding significance level.'
          },
          {
            question: 'The null hypothesis $H_0: \\mu_d = 0$ states:',
            options: ['All differences are 0', 'The mean difference in the population is 0', 'The sample mean is 0', 'The SD of differences is 0'],
            correctAnswer: 1,
            explanation: '$H_0: \\mu_d = 0$ means the true average difference is 0 — no systematic effect.'
          }
        ]
      }
    }
  ]
};
