export const actStatProbPart1Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p1-intro',
      type: 'text' as const,
      content: `
# 📊 Mean, Median, and Mode

**Part 1 of 7 — Measures of Center, Weighted Averages, and Outliers**

Statistics questions on the ACT Math test (45 questions in 50 minutes, 4 answer choices each) are usually short, but they reward students who know exactly which measure is being asked for and which shortcut fits. This part covers the three measures of center, the range, and the two ideas the ACT returns to most often: **working with sums** and **weighted (combined) averages**.

## The Four Basic Measures

| Measure | How to find it | Example: 4, 7, 7, 9, 13 |
|---------|----------------|--------------------------|
| **Mean** (average) | Add all values, divide by how many there are | $\\frac{40}{5} = 8$ |
| **Median** | Put the values in order; take the middle one | 7 (the 3rd of 5 values) |
| **Mode** | The value that appears most often | 7 |
| **Range** | Maximum minus minimum | $13 - 4 = 9$ |

**Median with an even count:** average the two middle values. For 3, 5, 8, 12, the median is $\\frac{5 + 8}{2} = 6.5$. Always **sort first** — averaging the two middle entries of an unsorted list is one of the most common wrong answers.

A data set can have **no mode** (every value appears once) or **more than one mode** (two values tie for most frequent).

## Think in Sums: Mean × Count = Total

The single most useful fact about the mean is

$$\\text{sum} = \\text{mean} \\times \\text{count}$$

Almost every "missing value" question becomes easy once you convert means into totals:

| Question type | Strategy |
|---------------|----------|
| Find the total from the mean | Multiply: mean 2.4 over 5 items means a total of 12 |
| Score needed to reach a target mean | (target mean × new count) − (current total) |
| Value removed from a list | (old total) − (new total) |
| Value added to a list | (new total) − (old total) |

**Example:** The mean of 6 numbers is 15, so their total is 90. If one number is removed and the mean of the remaining 5 is 13, their total is 65, so the removed number was $90 - 65 = 25$.

**The shortfall shortcut:** To raise a mean of 82 on 4 tests to 85 on 5 tests, the new score must be 85 **plus** 3 points for each of the 4 earlier tests: $85 + 4(3) = 97$.

## Weighted Averages and Combined Means

When groups of different sizes are combined, you **cannot** simply average the group means. Weight each mean by its group size:

$$\\text{combined mean} = \\frac{n_1 m_1 + n_2 m_2}{n_1 + n_2}$$

If 20 students average 75 and 30 students average 85, the combined mean is $\\frac{20(75) + 30(85)}{50} = \\frac{4050}{50} = 81$, not 80. The combined mean always lands **between** the two group means and **closer to the larger group**.

Percent weights work the same way. If homework is 20%, tests 50%, and the final 30% of a grade, then

$$\\text{grade} = 0.20(\\text{homework}) + 0.50(\\text{tests}) + 0.30(\\text{final})$$

Check that the weights add to 100% before you compute.

## How Outliers and Changes Affect Each Measure

| Change to the data | Mean | Median | Range |
|--------------------|------|--------|-------|
| One extreme value added or made more extreme | Pulled strongly toward it | Barely moves (or not at all) | Grows |
| Add the same number $c$ to every value | Increases by $c$ | Increases by $c$ | **Unchanged** |
| Multiply every value by $k$ (positive) | Multiplied by $k$ | Multiplied by $k$ | Multiplied by $k$ |

Because the median ignores how far the extreme values are from the center, it is called **resistant**. When a data set has an outlier or is strongly skewed (salaries, home prices, wait times), the **median** usually describes a "typical" value better than the mean. A quick test: if the mean is larger than most of the data values, an outlier is dragging it.
      `
    },
    {
      id: 'act-stat-p1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: The score needed for a target mean</b></summary>

**Question:** Leah's first 3 test scores have a mean of 78. What must she score on the 4th test for her 4-test mean to be 82?

**Solution:**
1. Current total: $3 \\times 78 = 234$.
2. Needed total: $4 \\times 82 = 328$.
3. Needed score: $328 - 234 = 94$.

**Check with the shortfall shortcut:** each of the 3 earlier tests is 4 points below 82, so the 4th test must be $82 + 3(4) = 94$. ✓

**ACT trap:** Answers like 86 or 90 make up the shortfall for only one or two of the earlier tests.
</details>

<details>
<summary><b>Example 2: Combining two groups</b></summary>

**Question:** A 10-person team has a mean time of 70 seconds on a drill. Five new members join, and the mean time for all 15 members becomes 74 seconds. What is the mean time of the 5 new members?

**Solution:**
1. Original total: $10 \\times 70 = 700$ seconds.
2. New total: $15 \\times 74 = 1110$ seconds.
3. New members' total: $1110 - 700 = 410$, so their mean is $\\frac{410}{5} = 82$ seconds. ✓

**Why not 78?** 78 is what you get if the two groups were the same size (74 is halfway between 70 and 78). The larger original group pulls the combined mean toward 70, so the new members must be farther above 74 to compensate.
</details>
      `
    },
    {
      id: 'act-stat-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Measures of Center** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `A player scored 12, 18, 9, 24, and 17 points in five games. What is the mean number of points per game?`,
            options: [`16`, `17`, `15`, `20`],
            correctAnswer: 0,
            explanation: `The total is $12 + 18 + 9 + 24 + 17 = 80$, and $80 \\div 5 = 16$. The value 17 is the median (the middle of 9, 12, 17, 18, 24), not the mean. The value 15 is the range, $24 - 9$, and 20 divides the total by 4 instead of by the 5 games.`
          },
          {
            question: `What is the median of the data set 31, 25, 40, 28, 36, 22, 33, 29?`,
            options: [`30.5`, `32`, `29`, `30`],
            correctAnswer: 3,
            explanation: `Sorted, the values are 22, 25, 28, 29, 31, 33, 36, 40. With 8 values, the median is the average of the 4th and 5th: $(29 + 31) \\div 2 = 30$. The value 30.5 is the mean ($244 \\div 8$), 32 averages the two middle entries of the unsorted list (28 and 36), and 29 is only one of the two middle values.`
          },
          {
            question: `Which statement about the data set 7, 3, 9, 3, 12, 5, 9, 3 is true?`,
            options: [
              `The modes are 3 and 9, and the range is 9`,
              `The mode is 3 and the range is 12`,
              `The mode is 3 and the range is 9`,
              `There is no mode, and the range is 9`
            ],
            correctAnswer: 2,
            explanation: `The value 3 appears three times, more than any other value, so the mode is 3 alone; 9 appears only twice, so it is not a second mode, and a set with a repeated value always has a mode. The range is maximum minus minimum, $12 - 3 = 9$; a range of 12 is the maximum alone.`
          },
          {
            question: `The data set 14, 15, 15, 16, 17, 18, 19 is changed by replacing 19 with 61. Which statement is true?`,
            options: [
              `The median increases by 6`,
              `The mean increases by 6`,
              `The mean increases by 42`,
              `The mean and median both increase by 6`
            ],
            correctAnswer: 1,
            explanation: `The total rises by $61 - 19 = 42$, spread over 7 values, so the mean rises by $42 \\div 7 = 6$. The median is still the 4th value in order, 16, because the replaced value stays at the top of the list; that rules out any option in which the median moves. An increase of 42 is the change in the total, not in the mean.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p1-input',
      type: 'input-boxes' as const,
      content: `
**Work with Totals** 🧮

1) The mean of 8 numbers is 12.5. What is the sum of the 8 numbers?

2) The mean of 5 numbers is 20. One number is removed, and the mean of the remaining 4 numbers is 18. What number was removed?

3) Section A has 12 students with a mean score of 80. Section B has 18 students with a mean score of 90. What is the mean score of all 30 students?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '28', '86'],
        hint1: 'Sum = mean × count.',
        hint2: 'Find the total before and after the removal, then subtract.',
        hint3: 'Weight each section mean by its number of students.',
        explanation: '1) $12.5 \\times 8 = 100$. 2) The totals are $5 \\times 20 = 100$ and $4 \\times 18 = 72$, so the removed number is $100 - 72 = 28$. 3) $\\frac{12(80) + 18(90)}{30} = \\frac{960 + 1620}{30} = \\frac{2580}{30} = 86$, closer to 90 because Section B is larger.'
      }
    },
    {
      id: 'act-stat-p1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Try each one in under a minute, converting means to totals wherever you can.

| # | Problem | Answer |
|---|---------|--------|
| 1 | The mean of 4 numbers is 9. Three of them are 5, 8, and 12. What is the fourth? | $36 - 25 = 11$ |
| 2 | Salaries (in thousands): 38, 41, 44, 46, 210. Which measure best describes a typical salary? | Median, 44 (the mean, 75.8, exceeds four of the five salaries) |
| 3 | A quiz average is 72. The teacher adds 4 points to every score. New mean and change in range? | Mean 76; range unchanged |

**ACT Tip:** If a question gives you a mean and asks about an individual value, your first move should almost always be to multiply and get a total.
      `
    },
    {
      id: 'act-stat-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Weighted Averages and Changes** 📋
      `,
      exercise: {
        questions: [
          {
            question: `Leah's first 3 test scores have a mean of 78. What score on her 4th test would make the mean of all 4 scores equal to 82?`,
            options: [`86`, `90`, `94`, `98`],
            correctAnswer: 2,
            explanation: `She needs a total of $4 \\times 82 = 328$ and has $3 \\times 78 = 234$, so she needs $328 - 234 = 94$. Equivalently, 82 plus 4 points for each of the 3 earlier tests. A score of 86 or 90 makes up the 4-point shortfall for only one or two of those tests, and 98 adds the 4 points four times, counting the new test as if it were also short.`
          },
          {
            question: `In a course, labs count for 25% of the grade, quizzes for 25%, and the final exam for 50%. Sam's averages are 92 on labs, 84 on quizzes, and 76 on the final. What is Sam's course grade?`,
            options: [`84`, `88`, `86`, `82`],
            correctAnswer: 3,
            explanation: `Multiply each score by its weight and add: $0.25(92) + 0.25(84) + 0.50(76) = 23 + 21 + 38 = 82$. The value 84 is the unweighted mean of the three scores, which ignores that the final counts double. The value 86 gives the 50% weight to labs instead of the final, and 88 averages labs and quizzes while leaving the final out entirely.`
          },
          {
            question: `A team of 10 members has a mean drill time of 70 seconds. After 5 new members join, the mean time for all 15 members is 74 seconds. What is the mean time of the 5 new members?`,
            options: [`78 seconds`, `82 seconds`, `74 seconds`, `86 seconds`],
            correctAnswer: 1,
            explanation: `The new total is $15 \\times 74 = 1110$ and the original total is $10 \\times 70 = 700$, so the new members contribute 410 seconds, a mean of $410 \\div 5 = 82$. A mean of 78 would only produce 74 overall if the two groups were the same size. A mean of 74 is the combined mean itself, and 86 would raise the combined mean to $(700 + 430) \\div 15 \\approx 75.3$.`
          },
          {
            question: `Each of 12 measurements was recorded 3 centimeters too low, so 3 cm is added to every measurement. How do the mean, median, and range change?`,
            options: [
              `Mean and median rise by 3; range is unchanged`,
              `Mean, median, and range all rise by 3 centimeters`,
              `Only the mean rises by 3; median and range stay the same`,
              `Mean rises by 3; median and range are unchanged`
            ],
            correctAnswer: 0,
            explanation: `Shifting every value by 3 shifts the center: the total rises by 36, so the mean rises by $36 \\div 12 = 3$, and the middle value moves up by 3 as well. The maximum and minimum both rise by 3, so their difference, the range, does not change. Any option in which the median stays put ignores that the middle values moved too.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Mean** = sum ÷ count; **median** = middle of the *sorted* list (average the two middle values for an even count); **mode** = most frequent; **range** = max − min.
- Turn means into totals: $\\text{sum} = \\text{mean} \\times \\text{count}$. Missing, removed, and needed values all come from comparing totals.
- **Combined means are weighted:** $\\frac{n_1 m_1 + n_2 m_2}{n_1 + n_2}$. The result sits closer to the larger group. Percent weights work the same way.
- An **outlier** pulls the mean but barely moves the median, so the median is the better "typical value" for skewed data.
- Adding $c$ to every value shifts the mean and median by $c$ and leaves the range alone; multiplying by $k$ scales all three.
      `
    }
  ]
};
