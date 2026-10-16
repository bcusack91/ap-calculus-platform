export const apStatsComparingPart2Data = {
  topicSlug: 'comparing-populations-apstats',
  sections: [
    {
      id: 'apstats-comparingpopulations-p2-intro',
      type: 'text' as const,
      content: `# 📊 Two-Sample T-Test for Means

**Part 2 of 7 — Comparing Two Independent Groups**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Hypotheses for $\\mu_1 - \\mu_2$ |
| 📐 The Two-Sample $t$-Statistic |
| ✅ Conditions |
| 📝 Worked Example |

> 🔑 **Key Concept:** The two-sample $t$-test compares means from two independent groups. The key question: "Is the difference in sample means large enough to conclude the population means differ?"

---

### The Setup

Two independent random samples:
- Group 1: $n_1$ observations, sample mean $\\bar{x}_1$, sample SD $s_1$
- Group 2: $n_2$ observations, sample mean $\\bar{x}_2$, sample SD $s_2$

---

### Hypotheses

$$H_0: \\mu_1 - \\mu_2 = 0 \\quad (\\text{or equivalently, } \\mu_1 = \\mu_2)$$
$$H_a: \\mu_1 - \\mu_2 \\neq 0 \\quad (\\text{or } > 0 \\text{ or } < 0)$$

---

### Test Statistic

$$\\boxed{t = \\frac{(\\bar{x}_1 - \\bar{x}_2) - 0}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}}$$

**Degrees of freedom:** Use the technology value (it lies between the smaller of $n_1 - 1$ and $n_2 - 1$ and $n_1 + n_2 - 2$) or the conservative value $\\text{df} = \\min(n_1 - 1, n_2 - 1)$. The SE is never pooled: each sample keeps its own $s$.

> ⚠️ **AP Tip:** The AP formula sheet provides this formula. On the AP exam, use the conservative df or the calculator df — both are acceptable.

---

### Conditions

| Condition | Check |
|-----------|-------|
| **Random** | Both samples are random (or randomly assigned in an experiment) |
| **Independent** | The two groups are independent of each other |
| **Normal/Large Sample** | For each group: the population is approximately Normal, OR $n \\geq 30$, OR (if $n < 30$) the sample data are free from strong skewness and outliers |
| **10% Rule** | $n_1 < 10\\%$ of population 1 AND $n_2 < 10\\%$ of population 2 |

---

### Worked Example

**Study:** Does a new teaching method improve test scores?
- Method A (traditional): $n_1 = 35$, $\\bar{x}_1 = 74.2$, $s_1 = 8.5$
- Method B (new): $n_2 = 38$, $\\bar{x}_2 = 79.6$, $s_2 = 7.9$

**Step 1 — Hypotheses:**
$H_0: \\mu_B - \\mu_A = 0$ (no difference in mean scores)
$H_a: \\mu_B - \\mu_A > 0$ (new method produces higher mean scores)

**Step 2 — Conditions:**
- Random: Students randomly assigned to methods ✓
- Independent: Two separate groups ✓
- Normal: $n_1 = 35 \\geq 30$ and $n_2 = 38 \\geq 30$ ✓
- 10%: Each group is less than 10% of all students ✓

**Step 3 — Test statistic:**
$$t = \\frac{79.6 - 74.2}{\\sqrt{\\frac{7.9^2}{38} + \\frac{8.5^2}{35}}} = \\frac{5.4}{\\sqrt{1.642 + 2.064}} = \\frac{5.4}{\\sqrt{3.706}} = \\frac{5.4}{1.925} = 2.805$$

df $= \\min(34, 37) = 34$ (conservative) or use calculator df

**Step 4 — Conclusion:**
$P \\approx 0.004$ (one-sided). Since $P = 0.004 < 0.05 = \\alpha$, we reject $H_0$. There is convincing evidence that the new teaching method produces higher mean test scores than the traditional method.`
    },
    {
      id: 'apstats-comparingpopulations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Two-Sample $t$-Test Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The two-sample $t$-test requires:',
            options: ['Equal sample sizes in the two groups', 'Equal population standard deviations', 'Independent random samples or groups', 'Known values of $\\sigma_1$ and $\\sigma_2$'],
            correctAnswer: 2,
            explanation: 'The two-sample $t$-test requires independent random samples (or randomly assigned groups). Equal sizes, equal SDs and known $\\sigma$ values are NOT required; each sample uses its own $s$.'
          },
          {
            question: 'The denominator of the two-sample $t$-statistic estimates:',
            options: ['The value of $\\bar{x}_1 - \\bar{x}_2$ itself', 'The standard error of $\\bar{x}_1 - \\bar{x}_2$', 'The standard deviation of each population', 'The total number of observations'],
            correctAnswer: 1,
            explanation: 'The denominator $\\sqrt{s_1^2/n_1 + s_2^2/n_2}$ is the standard error of the difference in sample means.'
          },
          {
            question: 'Using df $= \\min(n_1 - 1, n_2 - 1)$ is called the ___ approach.',
            options: ['Exact', 'Conservative', 'Liberal', 'Pooled'],
            correctAnswer: 1,
            explanation: 'The conservative approach uses the smaller df, which gives a larger $P$-value (harder to reject $H_0$).'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Computing the $t$-Statistic** 🧮

Group 1: $\\bar{x}_1 = 50$, $s_1 = 10$, $n_1 = 25$
Group 2: $\\bar{x}_2 = 44$, $s_2 = 12$, $n_2 = 30$

**1)** $\\bar{x}_1 - \\bar{x}_2 =$

**2)** $s_1^2/n_1 + s_2^2/n_2 =$ (compute to one decimal)

**3)** Conservative df $= \\min(n_1-1, n_2-1) =$
      `,
      exercise: {
        inputs: [
          {
            label: 'Difference in means',
            correctAnswer: '6',
            explanation: '$\\bar{x}_1 - \\bar{x}_2 = 50 - 44 = 6$.'
          },
          {
            label: 'Variance sum',
            correctAnswer: '8.8',
            explanation: '$10^2/25 + 12^2/30 = 100/25 + 144/30 = 4 + 4.8 = 8.8$.'
          },
          {
            label: 'Conservative df',
            correctAnswer: '24',
            explanation: '$\\min(25-1, 30-1) = \\min(24, 29) = 24$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Decisions and Interpretations** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'cp2-dd1',
            label: '$t = 3.1$, df $= 40$, two-sided $P = 0.003$. At $\\alpha = 0.05$ we ___',
            options: ['fail to reject $H_0$', 'reject $H_0$', 'accept $H_0$', 'prove $H_a$'],
            correctIndex: 1,
            explanation: '$P = 0.003 < 0.05$, so we reject $H_0$: convincing evidence of a difference. A test never accepts $H_0$ or proves $H_a$.'
          },
          {
            id: 'cp2-dd2',
            label: 'If the two groups come from the same study and each person is in both groups, you need a ___',
            options: ['two-sample $t$-test', 'paired $t$-test', 'two-proportion $z$-test', 'chi-square test'],
            correctIndex: 1,
            explanation: 'If the same individuals are measured twice, the data are paired, not independent, so analyze the differences with a paired $t$ procedure.'
          },
          {
            id: 'cp2-dd3',
            label: '$n_1 = 12$ and $n_2 = 15$, both distributions look roughly symmetric. The Normal condition is ___',
            options: ['satisfied, since $n_1 + n_2 \\geq 27$', 'reasonable, since neither sample is strongly skewed', 'violated, since both samples are under 30', 'not needed for a $t$ procedure'],
            correctIndex: 1,
            explanation: 'With samples under 30, the condition holds if each sample is free from strong skewness and outliers, and roughly symmetric data meet that. Adding the sample sizes does not help, and small samples are not automatically disqualified.'
          },
          {
            id: 'cp2-dd4',
            label: 'A two-sided $P = 0.08$. For a one-sided $H_a$ in the correct direction, $P =$',
            options: ['$0.08$', '$0.04$', '$0.16$', '$0.92$'],
            correctIndex: 1,
            explanation: 'One-sided $P$ in the direction of the data $= 0.08/2 = 0.04$.'
          }
        ]
      }
    },
    {
      id: 'apstats-comparingpopulations-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Two-Sample $t$-Test** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$H_0: \\mu_1 - \\mu_2 = 0$ is equivalent to:',
            options: ['$\\mu_1 > \\mu_2$', '$\\mu_1 = \\mu_2$', '$\\mu_1 < \\mu_2$', '$\\mu_1 \\neq \\mu_2$'],
            correctAnswer: 1,
            explanation: '$\\mu_1 - \\mu_2 = 0$ means $\\mu_1 = \\mu_2$ — no difference in population means.'
          },
          {
            question: 'The SE of $\\bar{x}_1 - \\bar{x}_2$ is:',
            options: ['$\\sqrt{s_1/n_1 + s_2/n_2}$', '$\\sqrt{s_1^2/n_1 + s_2^2/n_2}$', '$s_1^2/n_1 + s_2^2/n_2$', '$\\sqrt{s_1^2 + s_2^2}/(n_1 + n_2)$'],
            correctAnswer: 1,
            explanation: 'SE $= \\sqrt{s_1^2/n_1 + s_2^2/n_2}$ (formula sheet). Without the square root you have a variance; using $s$ instead of $s^2$ or dividing by the total sample size gives the wrong spread.'
          },
          {
            question: 'For the two-sample $t$-test on the AP exam, the standard error:',
            options: ['Pools $s_1$ and $s_2$ into a single estimate', 'Uses $s_1$ and $s_2$ separately, without pooling', 'Uses the population SDs $\\sigma_1$ and $\\sigma_2$', 'Uses only the larger of $s_1$ and $s_2$'],
            correctAnswer: 1,
            explanation: 'The AP two-sample $t$ procedures use the unpooled SE $\\sqrt{s_1^2/n_1 + s_2^2/n_2}$, with each sample keeping its own SD. Population SDs are unknown, and using only one SD ignores the other sample.'
          },
          {
            question: 'With very large samples ($n_1 = 500, n_2 = 600$), the $t$-distribution is approximately:',
            options: ['Uniform', 'Standard normal', 'Chi-square', 'Right-skewed'],
            correctAnswer: 1,
            explanation: 'With large df, the $t$-distribution is almost indistinguishable from the standard normal distribution.'
          },
          {
            question: 'Two-sided $P = 0.047$. At $\\alpha = 0.05$:',
            options: ['Fail to reject $H_0$', 'Reject $H_0$', 'Inconclusive', 'Need to recalculate'],
            correctAnswer: 1,
            explanation: '$P = 0.047 < 0.05$, so we reject $H_0$.'
          },
          {
            question: 'A study randomly assigns 50 patients to Drug A and 50 to Drug B. This is:',
            options: ['An observational study, so no causal claim is possible', 'An experiment, so a significant result supports causation', 'A matched-pairs design, so the differences are analyzed', 'A census, since every patient is included'],
            correctAnswer: 1,
            explanation: 'Random assignment of treatments makes this an experiment, so a significant difference supports a cause-and-effect conclusion. The groups are separate (not matched pairs), and 100 patients are not a whole population.'
          },
          {
            question: 'If the 10% condition is violated:',
            options: ['The test is still fully valid', 'Independence is in doubt', 'The null hypothesis must be changed', 'A $z$-test must be used instead'],
            correctAnswer: 1,
            explanation: 'The 10% condition protects independence when sampling without replacement. If the sample is a large share of the population, the observations are not close enough to independent for the SE formula to be trusted.'
          },
          {
            question: 'The two-sample $t$-test assumes:',
            options: ['The populations have the same mean', 'The populations have the same variance', 'The two samples are independent', 'Both samples have the same size'],
            correctAnswer: 2,
            explanation: 'The two samples must be independent (no pairing or matching).'
          },
          {
            question: 'A large $|t|$ value indicates:',
            options: ['A big gap relative to the SE', 'Both sample sizes are very large', 'The population means are equal', 'The data come from matched pairs'],
            correctAnswer: 0,
            explanation: 'A large $|t|$ means the observed difference is many SEs away from 0, which is strong evidence against $H_0$. Large samples alone do not make $|t|$ large, and equal means would give a small $|t|$.'
          },
          {
            question: '"There is convincing evidence that mean math scores differ between schools A and B" is an appropriate conclusion when:',
            options: ['$P > \\alpha$, with context', '$P < \\alpha$ and context is included', 'The sample means are equal', 'Only one of the schools was sampled'],
            correctAnswer: 1,
            explanation: 'Reject $H_0$ when $P < \\alpha$ and state the conclusion in the context of the problem.'
          }
        ]
      }
    }
  ]
};
