export const apStatsBinomGeomPart5Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p5-intro',
      type: 'text' as const,
      content: `# 🔄 Is It Binomial? Checking the Conditions

**Part 5 of 7 — Justifying a Binomial Model**

---

### Check Each Condition in Context

| Condition | What to say | How it fails |
|-----------|-------------|--------------|
| **Binary** | Define "success" for each trial | Counting a total that is not a success count (e.g. the sum of die faces) |
| **Independent** | Trials do not affect each other | Sampling without replacement from a small group |
| **Number** | $n$ is fixed in advance | "Keep going until..." |
| **Same $p$** | The success probability never changes | Conditions change from trial to trial |

---

### The 10% Condition

Sampling **without replacement** makes trials slightly dependent. If the sample is no more than 10% of the population ($n \\leq 0.10N$), the trials are close enough to independent to use a binomial model.

**Example:** Choosing 5 students from a class of 20 is 25% of the class, so the selections are NOT approximately independent and $X$ is not binomial. Choosing 50 adults from a city of 200,000 is fine.

> 🔑 On the AP exam, name the condition and tie it to the context: "There are $n = 15$ independent rolls, each roll is a 4 or not a 4, and $P(4) = 1/6$ on every roll."`
    },    {
      id: 'binomialgeometric-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which random variable is binomial?',
            options: ['The number of 4s in 15 rolls of a fair die', 'The number of rolls needed until a 4 appears', 'The total of the faces showing in 15 die rolls', 'The number of red cards when 30 cards are dealt from one deck'],
            correctAnswer: 0,
            explanation: 'Fifteen independent rolls, each a 4 or not, with $P(4) = 1/6$ every time, is binomial. Rolling until a 4 has no fixed $n$, the total of the faces is not a count of successes, and dealing 30 of 52 cards without replacement breaks independence.'
          },
          {
            question: 'A teacher randomly chooses 5 of her 20 students; 12 of the 20 own a calculator. Why is $X$ = number of calculator owners chosen NOT binomial?',
            options: ['There is no fixed number of selections', 'Each student has more than two outcomes', 'The sample is more than 10% of the class', '$p = 12/20$ is too large for a binomial'],
            correctAnswer: 2,
            explanation: 'Sampling 5 of 20 without replacement is 25% of the population, so each selection changes the chances for the next. The number of selections is fixed at 5, each student either owns a calculator or not, and a binomial model allows any $p$ between 0 and 1.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p5-bridge',
      type: 'text' as const,
      content: `### From Counts to Proportions

A binomial $X$ counts successes. Dividing by $n$ gives the **sample proportion** $\\hat{p} = X/n$, which you will use for inference in Unit 3.

| | Count $X$ | Proportion $\\hat{p} = X/n$ |
|---|---|---|
| Mean | $np$ | $p$ |
| SD | $\\sqrt{np(1-p)}$ | $\\sqrt{\\frac{p(1-p)}{n}}$ |

**Example:** $X \\sim B(200, 0.3)$ has $\\mu_X = 60$ and $\\sigma_X = \\sqrt{42} \\approx 6.48$. For $\\hat{p} = X/200$: mean $0.3$ and SD $6.48/200 \\approx 0.032$.`
    },    {
      id: 'binomialgeometric-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Counts vs. Proportions** 📐
      `,
      exercise: {
        questions: [
          {
            question: 'A survey of $n = 400$ randomly chosen voters counts $X$ supporters, where $p = 0.5$. What are the mean and SD of $\\hat{p} = X/400$?',
            options: ['Mean 200, SD 10', 'Mean 0.5, SD 0.025', 'Mean 0.5, SD 0.25', 'Mean 0.5, SD 0.000625'],
            correctAnswer: 1,
            explanation: '$\\mu_{\\hat{p}} = p = 0.5$ and $\\sigma_{\\hat{p}} = \\sqrt{0.5(0.5)/400} = 0.025$. Mean 200 and SD 10 describe the count $X$, 0.25 is $p(1-p)$ with no division by $n$, and 0.000625 is $p(1-p)/n$ without the square root.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p5-input',
      type: 'input-boxes' as const,
      content: `
**Checking and Computing** 🧮

In a large city, 18% of adults are left-handed. A random sample of 60 adults is taken; $X$ = number who are left-handed.

**1)** Mean of $X$?

**2)** Standard deviation of $X$? (round to 2 decimals)

**3)** Mean of the sample proportion $\\hat{p}$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10.8', '2.98', '0.18'],
        hint1: '$np = 60(0.18)$',
        hint2: '$\\sqrt{60(0.18)(0.82)} = \\sqrt{8.856}$',
        hint3: 'The mean of $\\hat{p}$ equals $p$.',
        explanation: '60 adults is far less than 10% of a large city, so a binomial model fits. 1) $60(0.18) = 10.8$. 2) $\\sqrt{8.856} \\approx 2.98$. 3) $\\mu_{\\hat{p}} = p = 0.18$.'
      }
    }
  ]
};
