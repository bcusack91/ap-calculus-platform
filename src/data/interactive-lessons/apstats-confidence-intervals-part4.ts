export const apStatsConfIntPart4Data = {
  topicSlug: 'confidence-intervals-apstats',
  sections: [
    {
      id: 'apstats-confidenceintervals-p4-intro',
      type: 'text' as const,
      content: `# 📊 Choosing Sample Size

**Part 4 of 7 — Planning Your Study**

---

### Topics in This Part

| Section |
|---------|
| 📐 Margin of Error Review |
| 🧮 Sample Size Formula for Proportions |
| 🧮 Sample Size Formula for Means |
| 📝 Rounding Rules |

> 🔑 **Key Concept:** Before collecting data, researchers choose a sample size that will produce a margin of error small enough to be useful. This is called "planning for a desired margin of error."

---

### Margin of Error Review

Recall the margin of error for each type of interval:

| Interval | Margin of Error |
|----------|----------------|
| One-proportion $z$-interval | $ME = z^* \\sqrt{\\dfrac{\\hat{p}(1 - \\hat{p})}{n}}$ |
| One-sample $t$-interval | $ME = t^* \\cdot \\dfrac{s}{\\sqrt{n}}$ |

The idea: **set ME equal to your desired margin of error, then solve for $n$.**

---

### Sample Size for Proportions

Starting from $ME = z^* \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}$, solve for $n$:

$$\\boxed{n = \\left(\\frac{z^*}{ME}\\right)^2 \\hat{p}(1 - \\hat{p})}$$

**What if you don't know $\\hat{p}$?**  Use $\\hat{p} = 0.5$ — this maximizes $\\hat{p}(1-\\hat{p}) = 0.25$ and gives the **most conservative** (largest) sample size.

### Worked Example — Proportions

**Problem:** A pollster wants a 95% CI for the proportion of voters who support a candidate, with a margin of error of no more than 3%. What sample size is needed?

$$n = \\left(\\frac{1.96}{0.03}\\right)^2 \\times 0.5(0.5) = (65.33)^2 \\times 0.25 = 4268.44 \\times 0.25 = 1067.1$$

$$\\boxed{n = 1068}$$

> ⚠️ **Always round UP** to the next whole number. Rounding down gives a margin of error that exceeds your target.

---

### Sample Size for Means

Starting from $ME = z^* \\cdot \\dfrac{\\sigma}{\\sqrt{n}}$ (using $z^*$ as an approximation when planning):

$$\\boxed{n = \\left(\\frac{z^* \\cdot \\sigma}{ME}\\right)^2}$$

You need a preliminary estimate of $\\sigma$ — use a pilot study, similar past data, or range/4 as a rough estimate.

### Worked Example — Means

**Problem:** Estimate the mean waiting time at a clinic to within 2 minutes (95% confidence). A pilot study found $s \\approx 8$ minutes.

$$n = \\left(\\frac{1.96 \\times 8}{2}\\right)^2 = \\left(\\frac{15.68}{2}\\right)^2 = (7.84)^2 = 61.47$$

$$\\boxed{n = 62}$$`
    },
    {
      id: 'apstats-confidenceintervals-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sample Size Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When planning sample size for a proportion and $\\hat{p}$ is unknown, you should use:',
            options: ['$\\hat{p} = 0$', '$\\hat{p} = 1$', '$\\hat{p} = 0.5$', 'Any value — it does not matter'],
            correctAnswer: 2,
            explanation: '$\\hat{p} = 0.5$ maximizes $\\hat{p}(1-\\hat{p})$, giving the largest (most conservative) required sample size.'
          },
          {
            question: 'After computing $n = 384.2$, the required sample size is:',
            options: ['$384$', '$385$', '$384.2$', '$380$'],
            correctAnswer: 1,
            explanation: 'Always round UP. Using $n = 384$ would give a slightly larger margin of error than desired.'
          },
          {
            question: 'To cut the margin of error in half, you must multiply the sample size by:',
            options: ['$2$', '$4$', '$\\sqrt{2}$', '$0.5$'],
            correctAnswer: 1,
            explanation: 'Since $ME \\propto 1/\\sqrt{n}$, halving ME requires $n$ to be multiplied by $2^2 = 4$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p4-input',
      type: 'input-boxes' as const,
      content: `
**Sample Size Calculations** 🧮

**1)** A researcher wants a 95% CI for a proportion with ME $\\leq$ 0.04. Use $\\hat{p} = 0.5$, $z^* = 1.96$. What minimum $n$ is needed?

**2)** A scientist wants a 99% CI for the mean weight of a species to within 5 grams. Past data: $\\sigma \\approx 20$ g, $z^* = 2.576$. What minimum $n$ is needed?

**3)** If a survey originally required $n = 400$ for ME = 5%, what $n$ is needed for ME = 2.5%?
      `,
      exercise: {
        inputs: [
          {
            label: 'n for proportion',
            correctAnswer: '601',
            explanation: '$n = (1.96/0.04)^2 \\times 0.25 = 49^2 \\times 0.25 = 2401 \\times 0.25 = 600.25$. Round up: $n = 601$.'
          },
          {
            label: 'n for mean',
            correctAnswer: '107',
            explanation: '$n = (2.576 \\times 20 / 5)^2 = (51.52/5)^2 = (10.304)^2 = 106.17$. Round up: $n = 107$.'
          },
          {
            label: 'n for halved ME',
            correctAnswer: '1600',
            explanation: 'Halving the ME requires multiplying $n$ by $4$: $400 \\times 4 = 1600$.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sample Size Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ci4-dd1',
            label: 'Increasing confidence level from 95% to 99% will ___ the required sample size',
            options: ['increase', 'decrease', 'not change'],
            correctIndex: 0,
            explanation: 'Higher confidence requires a larger $z^*$, which increases the required $n$ for the same ME.'
          },
          {
            id: 'ci4-dd2',
            label: 'Using $\\hat{p} = 0.5$ instead of $\\hat{p} = 0.3$ will ___ the required $n$',
            options: ['increase', 'decrease', 'not change'],
            correctIndex: 0,
            explanation: '$\\hat{p}(1-\\hat{p})$ is maximized at $\\hat{p} = 0.5$ (gives 0.25), while $0.3(0.7) = 0.21$. Using 0.5 gives a larger, more conservative $n$.'
          },
          {
            id: 'ci4-dd3',
            label: 'After computing $n = 96.01$, you should report $n = ___$',
            options: ['96', '97', '96.01', '100'],
            correctIndex: 1,
            explanation: 'Always round up to the next whole number to ensure the ME does not exceed the target.'
          },
          {
            id: 'ci4-dd4',
            label: 'The sample size formula for means requires an estimate of ___',
            options: ['$\\mu$', '$\\sigma$', '$\\hat{p}$', '$\\bar{x}$'],
            correctIndex: 1,
            explanation: 'The formula $n = (z^* \\sigma / ME)^2$ requires a preliminary estimate of $\\sigma$, the population SD.'
          }
        ]
      }
    },
    {
      id: 'apstats-confidenceintervals-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Choosing Sample Size** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 95% CI for a proportion with ME $= 0.05$ and $\\hat{p} = 0.5$ requires $n =$',
            options: ['$385$', '$384$', '$400$', '$196$'],
            correctAnswer: 0,
            explanation: '$n = (1.96/0.05)^2 \\times 0.25 = (39.2)^2 \\times 0.25 = 1536.64 \\times 0.25 = 384.16$. Round up: $n = 385$.'
          },
          {
            question: 'Why is $\\hat{p} = 0.5$ called "conservative"?',
            options: ['It gives the smallest sample', 'It maximizes $\\hat{p}(1-\\hat{p})$, giving the largest needed $n$', 'It is politically neutral', 'It doubles the margin of error'],
            correctAnswer: 1,
            explanation: '$\\hat{p}(1-\\hat{p})$ achieves its maximum at $\\hat{p} = 0.5$, yielding the largest required $n$ and thus the widest (safest) interval.'
          },
          {
            question: 'To reduce ME from 4% to 2%, how does $n$ change?',
            options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
            correctAnswer: 2,
            explanation: 'Halving ME requires $n$ to increase by a factor of $4$, since $ME \\propto 1/\\sqrt{n}$.'
          },
          {
            question: 'A pilot study adds cost but is important because:',
            options: ['It eliminates the need for the main study', 'It provides an estimate of $\\sigma$ needed for the sample size formula', 'It determines the exact population parameter', 'It reduces the confidence level needed'],
            correctAnswer: 1,
            explanation: 'The sample size formula for means requires $\\sigma$. A pilot study gives a preliminary estimate $s$ to use in planning.'
          },
          {
            question: 'A student computes $n = 271.8$ and rounds down to $n = 271$. This is:',
            options: ['Correct — round to nearest', 'Incorrect — the ME will slightly exceed the target', 'Correct — always round down', 'Incorrect — should use $n = 300$'],
            correctAnswer: 1,
            explanation: 'Rounding down gives a slightly smaller sample, and thus a slightly larger ME than desired. Always round up.'
          },
          {
            question: 'Which increases the required $n$ the most?',
            options: ['Increasing confidence from 90% to 95%', 'Increasing confidence from 95% to 99%', 'Decreasing ME from 5% to 4%', 'Decreasing ME from 5% to 2.5%'],
            correctAnswer: 3,
            explanation: 'Halving the ME quadruples $n$. The confidence jumps only increase $n$ by factors of about 1.5 and 1.7 respectively.'
          },
          {
            question: 'For a 90% CI ($z^* = 1.645$) with ME $= 0.03$ and $\\hat{p} = 0.5$, $n$ is approximately:',
            options: ['$752$', '$751$', '$1068$', '$600$'],
            correctAnswer: 0,
            explanation: '$n = (1.645/0.03)^2 \\times 0.25 = (54.833)^2 \\times 0.25 = 3006.7 \\times 0.25 = 751.67$. Round up: $n = 752$.'
          },
          {
            question: 'If $\\hat{p} = 0.8$, then $\\hat{p}(1-\\hat{p}) =$',
            options: ['$0.25$', '$0.16$', '$0.20$', '$0.80$'],
            correctAnswer: 1,
            explanation: '$0.8 \\times 0.2 = 0.16$. This is less than $0.25$ (from $\\hat{p} = 0.5$), so the required $n$ is smaller.'
          },
          {
            question: 'A 95% CI for a mean with $\\sigma = 15$, ME $= 3$ requires $n =$',
            options: ['$97$', '$96$', '$100$', '$98$'],
            correctAnswer: 0,
            explanation: '$n = (1.96 \\times 15/3)^2 = (9.8)^2 = 96.04$. Round up: $n = 97$.'
          },
          {
            question: 'The key takeaway from sample size planning is:',
            options: ['Larger samples are always better, regardless of cost', 'You can determine the exact $n$ needed before collecting data', 'Budget, precision, and confidence level must be balanced', 'Use $n = 30$ for everything'],
            correctAnswer: 2,
            explanation: 'Sample size planning involves trade-offs: higher confidence and smaller ME require more data, which costs more time and money.'
          }
        ]
      }
    }
  ]
};
