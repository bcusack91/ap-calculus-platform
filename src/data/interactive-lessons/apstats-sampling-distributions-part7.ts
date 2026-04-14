export const apStatsSamplingDistPart7Data = {
  topicSlug: 'sampling-distributions-apstats',
  sections: [
    {
      id: 'apstats-samplingdistributions-p7-intro',
      type: 'text' as const,
      content: `# 🎓 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Complete Summary

| Concept | Key Formula | When to Use |
|---------|------------|-------------|
| Sampling dist. of $\\bar{x}$ | $\\mu_{\\bar{x}} = \\mu$, $\\sigma_{\\bar{x}} = \\sigma/\\sqrt{n}$ | Quantitative data |
| Sampling dist. of $\\hat{p}$ | $\\mu_{\\hat{p}} = p$, $\\sigma_{\\hat{p}} = \\sqrt{p(1-p)/n}$ | Categorical data |
| CLT | $\\bar{X} \\sim N(\\mu, \\sigma/\\sqrt{n})$ for large $n$ | $n \\geq 30$ (or population normal) |
| Normal approx. for $\\hat{p}$ | $\\hat{p} \\approx N(p, \\sqrt{p(1-p)/n})$ | $np \\geq 10$ and $n(1-p) \\geq 10$ |
| Standard error (means) | $SE = s/\\sqrt{n}$ | When $\\sigma$ is unknown |
| Standard error (proportions) | $SE = \\sqrt{\\hat{p}(1-\\hat{p})/n}$ | When $p$ is unknown |

---

### Three Conditions for Inference

| Condition | For Means | For Proportions |
|-----------|-----------|----------------|
| **Random** | Random sample or random assignment | Same |
| **10%** | $n < 0.10N$ | Same |
| **Normal** | $n \\geq 30$ or population normal | $np \\geq 10$ and $n(1-p) \\geq 10$ |

> 🔑 **AP Tip:** This entire topic is foundational — confidence intervals and hypothesis tests (the core of AP Stats) all rely on sampling distributions. Master this, and the rest follows.`
    },
    {
      id: 'apstats-samplingdistributions-p7-comparison',
      type: 'text' as const,
      content: `## 📊 Means vs. Proportions: Side-by-Side

| Feature | $\\bar{x}$ | $\\hat{p}$ |
|---------|-----------|-----------|
| **Data type** | Quantitative | Categorical |
| **Parameter** | $\\mu$ | $p$ |
| **Center** | $\\mu$ | $p$ |
| **Spread** | $\\sigma/\\sqrt{n}$ | $\\sqrt{p(1-p)/n}$ |
| **Normal condition** | $n \\geq 30$ or normal population | $np \\geq 10$, $n(1-p) \\geq 10$ |
| **SE uses** | $s/\\sqrt{n}$ | $\\sqrt{\\hat{p}(1-\\hat{p})/n}$ |
| **Distribution for tests** | $t$-distribution ($\\sigma$ unknown) | $z$-distribution |

> ⚠️ **Warning:** A common AP exam trap is using the wrong formula — applying the proportions SE when the problem involves means, or vice versa. Always identify the data type first.

---

### Key Relationships to Remember

1. **Larger $n$** → smaller SE → narrower sampling distribution → more precision
2. **To halve SE**: quadruple $n$
3. **SE measures precision**, not accuracy — a biased method has small SE but wrong center
4. **Unbiased**: $E(\\bar{x}) = \\mu$ and $E(\\hat{p}) = p$ — both estimators are unbiased
5. **The 10% condition** matters most for small populations — for large populations (states, countries), it is automatically satisfied`
    },
    {
      id: 'apstats-samplingdistributions-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statistic has a sampling distribution that requires $np \\geq 10$ and $n(1-p) \\geq 10$?',
            options: ['$\\bar{x}$', '$\\hat{p}$', '$s$', '$\\sigma$'],
            correctAnswer: 1,
            explanation: 'The Large Counts condition ($np \\geq 10$ and $n(1-p) \\geq 10$) applies specifically to the sampling distribution of $\\hat{p}$.'
          },
          {
            question: 'Both $\\bar{x}$ and $\\hat{p}$ are:',
            options: ['Parameters', 'Unbiased estimators', 'Always normally distributed', 'Constants'],
            correctAnswer: 1,
            explanation: 'Both are unbiased estimators: $E(\\bar{x}) = \\mu$ and $E(\\hat{p}) = p$. They are statistics (not parameters) and are only approximately normal when conditions are met.'
          },
          {
            question: 'A sample of $n = 10$ is drawn from a heavily right-skewed population. The sampling distribution of $\\bar{x}$ is:',
            options: ['Exactly normal', 'Approximately normal by CLT', 'Likely right-skewed', 'Uniform'],
            correctAnswer: 2,
            explanation: 'With $n = 10$ (small) and a heavily skewed population, the CLT does not apply. The sampling distribution will still be skewed.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

**1)** Population: $\\mu = 80$, $\\sigma = 12$, $n = 144$. Find $\\sigma_{\\bar{x}}$.

**2)** Population: $p = 0.35$, $n = 500$. Find $\\sigma_{\\hat{p}}$ (round to 4 decimal places).

**3)** To reduce $\\sigma_{\\bar{x}}$ from $4$ to $1$, you must multiply $n$ by what factor?
      `,
      exercise: {
        inputs: [
          {
            label: 'SD of x-bar',
            correctAnswer: '1',
            explanation: '$\\sigma_{\\bar{x}} = 12/\\sqrt{144} = 12/12 = 1$.'
          },
          {
            label: 'SD of p-hat',
            correctAnswer: '0.0213',
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.35 \\times 0.65/500} = \\sqrt{0.2275/500} = \\sqrt{0.000455} \\approx 0.0213$.'
          },
          {
            label: 'Factor for n',
            correctAnswer: '16',
            explanation: 'To reduce SE by a factor of 4 ($4 \\to 1$), you must multiply $n$ by $4^2 = 16$, since $SE \\propto 1/\\sqrt{n}$.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Quick Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'sd7-dd1',
            label: '"Average test scores of 50 randomly selected students" → use the sampling distribution of ___',
            options: ['$\\bar{x}$', '$\\hat{p}$'],
            correctIndex: 0,
            explanation: 'Test scores are quantitative, so we use the sampling distribution of the sample mean $\\bar{x}$.'
          },
          {
            id: 'sd7-dd2',
            label: '"Proportion of 200 voters who support a candidate" → use the sampling distribution of ___',
            options: ['$\\bar{x}$', '$\\hat{p}$'],
            correctIndex: 1,
            explanation: 'Support/not support is categorical, so we use the sampling distribution of the sample proportion $\\hat{p}$.'
          },
          {
            id: 'sd7-dd3',
            label: '"The distribution is approximately normal because $n = 50 \\geq 30$" is the ___ condition',
            options: ['Random', '10%', 'Normal/Large Sample'],
            correctIndex: 2,
            explanation: 'Citing $n \\geq 30$ and the CLT is the Normal/Large Sample condition check.'
          },
          {
            id: 'sd7-dd4',
            label: 'The quantity $\\sigma/\\sqrt{n}$ is called the ___',
            options: ['standard deviation', 'standard error', 'margin of error', 'confidence level'],
            correctIndex: 1,
            explanation: '$\\sigma/\\sqrt{n}$ is the standard error (or standard deviation of the sampling distribution) of $\\bar{x}$.'
          }
        ]
      }
    },
    {
      id: 'apstats-samplingdistributions-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Sampling Distributions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The Central Limit Theorem is important because it:',
            options: ['Proves all populations are normal', 'Allows us to use normal-based inference even for non-normal populations', 'Eliminates the need for random sampling', 'Works only for proportions'],
            correctAnswer: 1,
            explanation: 'The CLT says the sampling distribution of $\\bar{x}$ is approximately normal for large $n$, regardless of population shape. This enables $z$ and $t$ inference procedures.'
          },
          {
            question: 'SAT scores: $\\mu = 1060$, $\\sigma = 200$. For $n = 100$, find $P(\\bar{x} > 1080)$.',
            options: ['$0.4602$', '$0.3085$', '$0.1587$', '$0.0228$'],
            correctAnswer: 2,
            explanation: '$SE = 200/10 = 20$. $z = (1080-1060)/20 = 1.0$. $P(Z > 1) = 0.1587$.'
          },
          {
            question: '55% of a population prefers candidate A ($p = 0.55$). In a poll of 600, $P(\\hat{p} < 0.50)$ is closest to:',
            options: ['$0.0062$', '$0.0228$', '$0.1587$', '$0.3085$'],
            correctAnswer: 0,
            explanation: '$\\sigma_{\\hat{p}} = \\sqrt{0.55 \\times 0.45/600} = \\sqrt{0.000413} = 0.02031$. $z = (0.50-0.55)/0.02031 = -2.46$. $P(Z < -2.46) \\approx 0.0069$. Closest to $0.0062$.'
          },
          {
            question: 'A researcher wants $SE_{\\bar{x}} \\leq 2$ with $\\sigma = 30$. Minimum $n$ is:',
            options: ['$15$', '$30$', '$225$', '$900$'],
            correctAnswer: 2,
            explanation: '$2 \\geq 30/\\sqrt{n} \\implies \\sqrt{n} \\geq 15 \\implies n \\geq 225$.'
          },
          {
            question: 'Which is an example of sampling variability?',
            options: ['Different random samples give different values of $\\bar{x}$', 'A survey question is poorly worded', 'The sample is not randomly selected', 'The population standard deviation changes over time'],
            correctAnswer: 0,
            explanation: 'Sampling variability is the natural variation in a statistic from one random sample to the next. Different samples yield different $\\bar{x}$ values— this is normal and expected.'
          },
          {
            question: 'For $p = 0.80$ and $n = 50$: is the normal approximation for $\\hat{p}$ valid?',
            options: ['Yes: $np = 40 \\geq 10$ and $n(1-p) = 10 \\geq 10$', 'No: $n(1-p) = 10$ is borderline', 'No: $np$ is too large', 'Yes: $n \\geq 30$'],
            correctAnswer: 0,
            explanation: '$np = 50(0.80) = 40 \\geq 10$ ✓ and $n(1-p) = 50(0.20) = 10 \\geq 10$ ✓ (exactly meets the threshold). The normal approximation is valid.'
          },
          {
            question: 'A biased sampling method with a large sample size will:',
            options: ['Become unbiased as $n$ increases', 'Have small SE but estimates that miss the true parameter', 'Always give the correct answer', 'Fail the Normal condition'],
            correctAnswer: 1,
            explanation: 'Bias is a systematic error that does not decrease with sample size. A large biased sample produces precise but inaccurate estimates (small SE, wrong center).'
          },
          {
            question: 'The standard error of $\\hat{p}$ is largest when $p$ is:',
            options: ['Close to 0', '0.5', 'Close to 1', 'It does not depend on $p$'],
            correctAnswer: 1,
            explanation: '$p(1-p)$ is maximized at $p = 0.5$ (where $p(1-p) = 0.25$). Values of $p$ near 0 or 1 give smaller products and thus smaller SE.'
          },
          {
            question: 'If you know the population is perfectly normal, the CLT is:',
            options: ['Still required for $n < 30$', 'Not needed — the sampling distribution is exactly normal for any $n$', 'Only valid if $n \\geq 30$', 'Irrelevant because parameters are known'],
            correctAnswer: 1,
            explanation: 'When the population is normal, $\\bar{x}$ follows an exact normal distribution for ANY sample size. The CLT is needed only for non-normal populations.'
          },
          {
            question: 'On the AP exam, the best way to describe a sampling distribution is:',
            options: ['Just give the formula', 'State the shape, center, and spread with justification', 'Draw a picture', 'State the sample size'],
            correctAnswer: 1,
            explanation: 'AP rubrics award points for describing Shape (and why — CLT, population normal, etc.), Center ($\\mu$ or $p$), and Spread ($\\sigma/\\sqrt{n}$ or $\\sqrt{p(1-p)/n}$).'
          }
        ]
      }
    }
  ]
};
