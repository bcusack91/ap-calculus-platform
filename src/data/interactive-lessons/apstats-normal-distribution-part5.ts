export const apStatsNormalDistPart5Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p5-intro',
      type: 'text' as const,
      content: `# ➕ Intervals, Percentiles and Comparing Relative Position

**Part 5 of 7 — Working with Areas in Both Directions**

---

### Setting Up the Inequality

| Statement | Area to the left of the cutoff |
|-----------|-------------------------------|
| Lowest $p$% are below $x_a$ | $p/100$ |
| Highest $p$% are above $x_b$ | $1 - p/100$ |
| Middle $p$% lie between $x_a$ and $x_b$ | Split the remaining area evenly: each tail gets $\\frac{1}{2}(100 - p)$% |

---

### Middle Intervals

**Example:** Battery life is $N(500, 40)$ hours. Find the middle 90%.

- Tails: 10% outside, so 5% in each tail.
- $z = \\pm 1.645$ (the 5th and 95th percentiles of $Z$).
- Interval: $500 \\pm 1.645(40) = 434.2$ to $565.8$ hours.

### The Highest $p$%

**Example:** Which battery life marks the top 15%?

- 85% of the area is to the left: $z \\approx 1.04$.
- $x = 500 + 1.04(40) = 541.6$ hours.

> 🔑 Always translate "top", "bottom", "middle" into the area to the LEFT before using a table or \`invNorm\`.`
    },
    {
      id: 'apstats-normaldistribution-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Intervals and Cutoffs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Heights are $N(170, 8)$ cm. Which interval contains the middle 80% of heights?',
            options: ['163.3 cm to 176.7 cm', '159.8 cm to 180.2 cm', '156.8 cm to 183.2 cm', '170.0 cm to 180.2 cm'],
            correctAnswer: 1,
            explanation: 'The middle 80% leaves 10% in each tail, so $z = \\pm 1.28$: $170 \\pm 1.28(8) = 159.8$ to $180.2$. Using $\\pm 0.84$ gives the middle 60%, $\\pm 1.645$ gives the middle 90%, and starting at the mean covers only 40%.'
          },
          {
            question: 'To find the cutoff for the highest 15% of a normal distribution, use the z-score whose area to the LEFT is:',
            options: ['0.15', '0.85', '0.075', '0.925'],
            correctAnswer: 1,
            explanation: 'If 15% lie above the cutoff, 85% lie below it, so look up an area of 0.85 ($z \\approx 1.04$). 0.15 gives the bottom 15%, and 0.075 and 0.925 split the 15% into two tails, which is only done for a middle interval.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p5-compare',
      type: 'text' as const,
      content: `### Comparing Relative Position

Percentiles (or z-scores) let you compare values from **different** normal distributions.

**Example:** Ana scores 82 on a test that is $N(74, 6)$. Ben scores 88 on a test that is $N(80, 10)$.

| Student | z-score | Percentile |
|---------|---------|------------|
| Ana | $(82 - 74)/6 \\approx 1.33$ | $P(Z < 1.33) \\approx 0.908$, about 91st |
| Ben | $(88 - 80)/10 = 0.80$ | $P(Z < 0.80) \\approx 0.788$, about 79th |

Ben's raw score is higher, but Ana did better **relative to her group**.

> ⚠️ When smaller is better (race times, golf scores), a more negative z-score is the better performance.`
    },
    {
      id: 'apstats-normaldistribution-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Relative Position** 📊
      `,
      exercise: {
        questions: [
          {
            question: 'Maya\'s 100 m time has $z = -1.2$ among sprinters (lower is better). Leo\'s long jump has $z = 1.0$ among jumpers (higher is better). Who did better relative to their event?',
            options: ['Leo, because his z-score is positive', 'Maya, because her time beat about 88% of the field', 'Leo, because 1.0 is greater than -1.2', 'Neither, since the events cannot be compared'],
            correctAnswer: 1,
            explanation: 'A time with $z = -1.2$ is faster than $P(Z > -1.2) \\approx 0.885$ of sprinters, while Leo beat $P(Z < 1.0) \\approx 0.841$ of jumpers. A positive z-score is not automatically better when lower values are better, and standardizing is exactly what makes different events comparable.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p5-input',
      type: 'input-boxes' as const,
      content: `
**Intervals and Percentiles** 🧮

Exam scores are $N(500, 100)$.

**1)** Lower cutoff of the middle 95% of scores? (use $z = 1.96$)

**2)** Score at the 30th percentile? (use $z = -0.52$, nearest whole number)

**3)** A student scores 650. At what percentile is that score? (nearest whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['304', '448', '93'],
        hint1: '$500 - 1.96(100)$',
        hint2: '$500 + (-0.52)(100)$',
        hint3: '$z = (650 - 500)/100 = 1.5$, and $P(Z < 1.5) = 0.9332$',
        explanation: '1) $500 - 196 = 304$. 2) $500 - 52 = 448$. 3) $z = 1.5$ and $P(Z < 1.5) = 0.9332$, so the score is at about the 93rd percentile.'
      }
    }
  ]
};
