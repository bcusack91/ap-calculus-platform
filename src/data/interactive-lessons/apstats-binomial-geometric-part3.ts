export const apStatsBinomGeomPart3Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p3-intro',
      type: 'text' as const,
      content: `# 🎯 Binomial Mean and Standard Deviation in Context

**Part 3 of 7 — What $np$ and $\\sqrt{np(1-p)}$ Tell You**

---

### The Two Parameters

If $X \\sim B(n, p)$ counts successes in $n$ independent trials:

$$\\mu_X = np \\qquad \\sigma_X = \\sqrt{np(1-p)}$$

Both formulas are on the AP formula sheet. The work the exam rewards is **interpreting** them in context.

---

### Worked Example

A store finds that 35% of customers use a coupon. Let $X$ = the number of coupon users among 40 randomly selected customers.

- $\\mu_X = 40(0.35) = 14$ customers
- $\\sigma_X = \\sqrt{40(0.35)(0.65)} = \\sqrt{9.1} \\approx 3.02$ customers

**Interpreting the mean:** If we took many random samples of 40 customers, the average number of coupon users would be about 14.

**Interpreting the standard deviation:** The number of coupon users in a sample of 40 typically varies by about 3.02 customers from the mean of 14.

> ⚠️ Both values are **counts** of customers, not proportions or percents, so give them in units of the count.`
    },    {
      id: 'binomialgeometric-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A player makes 70% of free throws and takes 30 independent shots. What is the mean number of shots made?',
            options: ['21', '9', '0.7', '2.51'],
            correctAnswer: 0,
            explanation: '$\\mu = np = 30(0.7) = 21$. The value 9 is $n(1-p)$, the mean number of misses; 0.7 is the success probability for one shot; 2.51 is the standard deviation $\\sqrt{30(0.7)(0.3)}$.'
          },
          {
            question: 'In the coupon example, $\\sigma_X \\approx 3.02$. Which interpretation is correct?',
            options: ['About 3 of the 40 customers are expected to use a coupon', 'The count typically varies by about 3 users from 14', 'The percent using a coupon typically varies by about 3 points', 'Every sample of 40 has between 11 and 17 coupon users'],
            correctAnswer: 1,
            explanation: 'The standard deviation is a typical distance between the count $X$ and its mean of 14. It is not the expected count (that is 14), it is measured in customers rather than percentage points, and it describes typical variation, not a guaranteed range.'
          },
          {
            question: 'With $p$ held fixed, which change to the number of trials doubles $\\sigma_X$?',
            options: ['Doubling $n$', 'Multiplying $n$ by 4', 'Adding 2 to $n$', 'Halving $n$'],
            correctAnswer: 1,
            explanation: 'Because $\\sigma_X = \\sqrt{np(1-p)}$, multiplying $n$ by 4 multiplies $\\sigma_X$ by $\\sqrt{4} = 2$. Doubling $n$ only multiplies $\\sigma_X$ by $\\sqrt{2} \\approx 1.41$, and halving $n$ makes it smaller.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p3-context',
      type: 'text' as const,
      content: `### Is a Result Surprising?

The mean and standard deviation let you judge whether an observed count is unusual.

In the coupon example, suppose a sample of 40 customers has 22 coupon users:

$$\\frac{22 - 14}{3.02} \\approx 2.65$$

That count is about 2.65 standard deviations above the mean. A count that far above $np$ would be unusual if the coupon rate really were 35%, so it gives some evidence that the rate for these customers is higher than 35%.

| Statement | Units |
|-----------|-------|
| "The mean is 14" | customers |
| "The SD is 3.02" | customers |
| "22 is 2.65 SDs above the mean" | standard deviations |`
    },    {
      id: 'binomialgeometric-p3-input',
      type: 'input-boxes' as const,
      content: `
**Guessing on a Quiz** 🧮

A student guesses on all 20 questions of a multiple-choice quiz; each question has 4 choices. Let $X$ = the number correct.

**1)** Mean number correct?

**2)** Standard deviation of $X$? (round to 2 decimals)

**3)** How many standard deviations above the mean is a score of 10? (round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '1.94', '2.58'],
        hint1: '$np = 20(0.25)$',
        hint2: '$\\sqrt{20(0.25)(0.75)} = \\sqrt{3.75}$',
        hint3: '$(10 - 5)/1.936$',
        explanation: '1) $20(0.25) = 5$ correct. 2) $\\sqrt{3.75} \\approx 1.94$. 3) $(10 - 5)/1.936 \\approx 2.58$ standard deviations above the mean, an unusually high score for pure guessing.'
      }
    }
  ]
};
