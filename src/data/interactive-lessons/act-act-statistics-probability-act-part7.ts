export const actStatProbPart7Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p7-intro',
      type: 'text' as const,
      content: `
# 🎯 Expected Value and Mixed Review

**Part 7 of 7 — Expected Value, Sampling, and Integrated ACT Problems**

This final part adds the last major idea in the unit — **expected value** — and a short look at how data are collected. Then it puts all seven parts together, because ACT statistics questions often chain two skills: find a missing value, then a median; count the groups, then a probability.

## Expected Value

The **expected value** of a random quantity is its long-run average: what you would get per trial, on average, over many repetitions.

$$E(X) = x_1 p_1 + x_2 p_2 + \\cdots + x_n p_n$$

Multiply each possible value by its probability, then add.

**From a probability distribution table:**

| Cars per household, $x$ | 0 | 1 | 2 | 3 |
|------------------------|---|---|---|---|
| Probability, $P(x)$ | 0.1 | 0.3 | 0.4 | 0.2 |

$$E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7$$

Things to notice:

- The probabilities in a distribution must **add to 1**. If one is missing, find it by subtraction before computing the expected value.
- The expected value does **not** have to be a possible outcome — no household has 1.7 cars.
- It is **not** the plain average of the values (1.5 here) and **not** the most likely value (2 here). It weights each value by how likely it is.

**Equally likely outcomes:** the expected value is just the mean of the outcomes. For a fair die, $E = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$.

## Games and Net Gain

For a game with a cost to play, find the expected winnings, then subtract the cost:

$$\\text{expected net gain} = E(\\text{winnings}) - \\text{cost}$$

A game costs 3 points to play and pays 10 points with probability $\\frac{1}{4}$ (nothing otherwise). Expected winnings: $10 \\cdot \\frac{1}{4} = 2.5$ points; expected net gain: $2.5 - 3 = -0.5$ points per play. A negative value means the player loses on average. A game is **fair** when the expected net gain is 0.

## Expected Counts

If each of $n$ independent trials succeeds with probability $p$, the expected number of successes is

$$n \\times p$$

With a 4% defect rate, a batch of 250 items is expected to contain $250 \\times 0.04 = 10$ defective items. A player who makes 80% of free throws is expected to make $15 \\times 0.8 = 12$ of 15 shots.

## Collecting Data: Random Samples

The ACT may ask which survey method gives the most reliable estimate for a population. The best answer is the one that gives **every member of the population an equal chance** of being chosen.

| Method | Problem |
|--------|---------|
| Random selection from a complete list (roster) | None — this is the goal |
| Surveying volunteers who respond to a post | Self-selected; people with strong opinions respond |
| Surveying the first people who arrive somewhere | Convenience sample; early arrivers may differ |
| Surveying one club or team | Not representative of the whole population |

A larger sample gives a more precise estimate only if it is also chosen randomly; a huge biased sample is still biased.

## Choosing the Tool: A Unit Map

| If the question says… | Use | Part |
|-----------------------|-----|------|
| mean, average, total | sum = mean × count | 1 |
| combined groups, weights | weighted average | 1 |
| typical value with an outlier | median | 1 |
| frequency table, histogram, box plot | read counts; median by position; IQR $= Q_3 - Q_1$ | 2 |
| how many ways | slots and multiply | 3 |
| order matters / roles | permutation | 5 |
| groups, committees | combination | 5 |
| not, neither, at least one | complement | 4 |
| or | add, subtract the overlap | 4 |
| and (independent / without replacement) | multiply (update counts if not replaced) | 4 |
| given, if, of those who | conditional: shrink the denominator | 6 |
| on average per trial, long run | expected value | 7 |

## Test-Day Habits for This Unit

1. **Sort before you find a median.** Every time.
2. **Convert means to totals** when a value is missing, added, removed, or replaced.
3. **Name the denominator** before dividing in any probability problem.
4. **Eliminate impossible probabilities** (below 0 or above 1) immediately.
5. **Check whether order matters** before choosing a counting rule.
6. **Use a quick estimate** to test your answer: a combined mean must lie between the group means; "at least one" must be at least as large as each single probability.
      `
    },
    {
      id: 'act-stat-p7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Expected value with a missing probability</b></summary>

**Question:** A random variable $X$ takes the values 1, 2, 3, and 4 with probabilities 0.2, 0.35, $p$, and 0.15. What is $E(X)$?

**Solution:**
1. Probabilities add to 1: $p = 1 - (0.2 + 0.35 + 0.15) = 0.3$.
2. $E(X) = 1(0.2) + 2(0.35) + 3(0.3) + 4(0.15) = 0.2 + 0.7 + 0.9 + 0.6 = 2.4$. ✓

**ACT trap:** Skipping the missing term gives 1.5, and averaging the values 1 through 4 gives 2.5 — neither uses all the probabilities.
</details>

<details>
<summary><b>Example 2: A two-step data problem</b></summary>

**Question:** The data set 5, 8, 13, $x$ has a mean of 10. What is the median of the data set?

**Solution:**
1. A mean of 10 for 4 values means a total of 40, so $x = 40 - (5 + 8 + 13) = 14$.
2. In order: 5, 8, 13, 14. The median is $\\frac{8 + 13}{2} = 10.5$. ✓

**ACT trap:** 10 is the mean and 14 is $x$; the question asks for a third quantity. Always reread what is asked after finishing step 1.
</details>
      `
    },
    {
      id: 'act-stat-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Expected Value** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The number of cars, $x$, owned by a randomly chosen household in a town has the distribution $P(0) = 0.1$, $P(1) = 0.3$, $P(2) = 0.4$, and $P(3) = 0.2$. What is the expected number of cars per household?`,
            options: [`1.7`, `1.5`, `2`, `0.25`],
            correctAnswer: 0,
            explanation: `Multiply each value by its probability and add: $0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7$. The value 1.5 averages 0, 1, 2, and 3 as if they were equally likely. The value 2 is the most likely number of cars, not the long-run average, and 0.25 is the average of the four probabilities.`
          },
          {
            question: `A random variable takes the values 1, 2, 3, and 4 with probabilities 0.2, 0.35, $p$, and 0.15, respectively. What is the expected value of the variable?`,
            options: [`2.5`, `1.5`, `2.4`, `2`],
            correctAnswer: 2,
            explanation: `The probabilities must add to 1, so $p = 0.3$, and the expected value is $0.2 + 0.7 + 0.9 + 0.6 = 2.4$. The value 1.5 leaves out the term $3p$ because $p$ was never found. The value 2.5 is the plain average of 1 through 4, and 2 is the single most likely value.`
          },
          {
            question: `A carnival game costs 3 points to play. A player wins 10 points with probability $\\frac{1}{4}$ and wins nothing otherwise. What is the player's expected net gain per game?`,
            options: [`$2.5$ points`, `$-0.5$ points`, `$7$ points`, `$0.5$ points`],
            correctAnswer: 1,
            explanation: `Expected winnings are $10 \\times \\frac{1}{4} = 2.5$ points, and subtracting the 3-point cost gives $-0.5$ points per game, an average loss. The value 2.5 forgets the cost of playing, and 7 is the net gain from a single win, which happens only a quarter of the time. A gain of 0.5 has the sign backward: the cost exceeds the expected winnings.`
          },
          {
            question: `A factory's defect rate is 4%. How many defective items are expected in a batch of 250 items?`,
            options: [`4`, `25`, `0.04`, `10`],
            correctAnswer: 3,
            explanation: `The expected count is $n \\times p = 250 \\times 0.04 = 10$. The value 4 is the percent itself rather than a count of items, and 0.04 is the probability for a single item. The value 25 is 10% of 250, which uses the wrong rate.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p7-input',
      type: 'input-boxes' as const,
      content: `
**Expected Values** 🧮

1) What is the expected value of one roll of a fair six-sided die?

2) A spinner has 4 equal sections labeled 2, 4, 6, and 12. What is the expected value of one spin?

3) A player makes 80% of her free throws. How many makes are expected in 15 attempts?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.5', '6', '12'],
        hint1: 'Equally likely outcomes: average 1 through 6.',
        hint2: 'Each section has probability $\\frac{1}{4}$.',
        hint3: 'Expected count $= n \\times p$.',
        explanation: '1) $\\frac{21}{6} = 3.5$. 2) $\\frac{2 + 4 + 6 + 12}{4} = \\frac{24}{4} = 6$. 3) $15 \\times 0.8 = 12$.'
      }
    },
    {
      id: 'act-stat-p7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Mixed Set

| # | Problem | Answer |
|---|---------|--------|
| 1 | For 4, 6, 6, 9, 15, what is the mean minus the median? | $8 - 6 = 2$ |
| 2 | 4 boys and 3 girls; 2 are chosen at random. P(both girls)? | $\\frac{3}{7} \\times \\frac{2}{6} = \\frac{1}{7}$ |
| 3 | A raffle sells 200 tickets; one ticket wins a prize worth 100 points. Expected value of one ticket? | $100 \\times \\frac{1}{200} = 0.5$ point |

**ACT Tip:** On multi-step questions, write the intermediate result (a total, a missing value, a count) next to the problem. The wrong answers are often exactly those intermediate numbers.
      `
    },
    {
      id: 'act-stat-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Integrated Review** 📋
      `,
      exercise: {
        questions: [
          {
            question: `For the data set 2, 5, 5, 8, 20, what is the mean minus the median?`,
            options: [`$-3$`, `12`, `18`, `3`],
            correctAnswer: 3,
            explanation: `The mean is $40 \\div 5 = 8$ and the median, the middle value, is 5, so the difference is 3. The value $-3$ subtracts in the wrong order (median minus mean). The value 12 is the maximum minus the mean, and 18 is the range.`
          },
          {
            question: `A 3-digit code is formed at random using the digits 1 through 9 with no digit repeated. What is the probability that all three digits are odd?`,
            options: [`$\\frac{125}{729}$`, `$\\frac{5}{42}$`, `$\\frac{5}{9}$`, `$\\frac{1}{3}$`],
            correctAnswer: 1,
            explanation: `There are $9 \\times 8 \\times 7 = 504$ codes, and with the 5 odd digits there are $5 \\times 4 \\times 3 = 60$ all-odd codes, so the probability is $\\frac{60}{504} = \\frac{5}{42}$. The value $\\frac{125}{729} = \\left(\\frac{5}{9}\\right)^3$ allows repeated digits. The value $\\frac{5}{9}$ is the chance for one digit, and $\\frac{1}{3}$ divides 3 digits by 9.`
          },
          {
            question: `The mean of 7 values is 20. One value, 34, is replaced by 13. What is the new mean?`,
            options: [`21`, `3`, `17`, `13`],
            correctAnswer: 2,
            explanation: `The original total is $7 \\times 20 = 140$. Replacing 34 with 13 lowers it by 21, to 119, and $119 \\div 7 = 17$. The value 21 is the drop in the total and 3 is the drop in the mean, not the new mean itself. The value 13 is the replacement value.`
          },
          {
            question: `A principal wants to estimate the average number of hours of sleep per night among all students at her school. Which survey method is most likely to give a representative estimate?`,
            options: [
              `Randomly select 80 students from the complete school roster`,
              `Survey the first 80 students who arrive in the morning`,
              `Survey 80 volunteers who answer an online post`,
              `Survey 80 students who are on varsity teams`
            ],
            correctAnswer: 0,
            explanation: `Random selection from the full roster gives every student the same chance of being chosen, so the sample should resemble the whole school. Early arrivers may keep different sleep schedules than other students. Volunteers choose themselves, and varsity athletes are a single group whose training schedules may affect their sleep.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Expected value:** $E(X) = \\sum x \\cdot P(x)$. Probabilities must add to 1; find any missing one first.
- Expected value is a long-run average — not the most likely value and not the plain average of the outcomes.
- **Games:** expected net gain = expected winnings − cost. Negative means a loss on average; zero means fair.
- **Expected count:** $n \\times p$.
- **Representative samples** come from random selection out of the whole population; volunteers, convenience samples, and single groups are biased.
- On integrated problems, write down each intermediate result — wrong answer choices are usually those numbers.
      `
    }
  ]
};
