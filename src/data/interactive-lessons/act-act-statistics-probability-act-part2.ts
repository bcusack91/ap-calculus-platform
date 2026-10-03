export const actStatProbPart2Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p2-intro',
      type: 'text' as const,
      content: `
# 📈 Data Displays and Spread

**Part 2 of 7 — Frequency Tables, Histograms, Box Plots, Range, and IQR**

The ACT rarely hands you a plain list of numbers. More often the data arrive in a **display** — a frequency table, a histogram, a dot plot, a stem-and-leaf plot, or a box plot — and you must read the display correctly before any formula helps. This part teaches you to pull the mean, median, and spread out of each display.

## Frequency Tables: Every Row Is Repeated Data

A frequency table lists each value once with **how many times** it occurs.

| Number of pets | 0 | 1 | 2 | 3 | 4 |
|----------------|---|---|---|---|---|
| Number of students | 6 | 9 | 7 | 2 | 1 |

- **Count:** add the frequencies: $6 + 9 + 7 + 2 + 1 = 25$ students.
- **Mean:** multiply each value by its frequency, add, then divide by the count: $\\frac{0(6) + 1(9) + 2(7) + 3(2) + 4(1)}{25} = \\frac{33}{25} = 1.32$.
- **Median:** find its **position** first. With 25 values, the median is the 13th. Count up the frequencies (a running total): students 1–6 have 0 pets, students 7–15 have 1 pet, so the 13th student has **1 pet**.
- **Mode:** the value with the largest frequency (here, 1).

**Trap:** the median is a *data value* (1 pet), never its position (13) and never the middle frequency. Likewise, the mean is not the average of the frequencies.

## Histograms and Dot Plots

A **histogram** groups values into intervals (bins), and each bar's height is the number of values in that bin. You can find how many values fall in a range and **which bin contains the median**, but you usually cannot find exact values, the exact mean, or the exact median. A **dot plot** shows every value as a dot, so it works like a frequency table.

## Stem-and-Leaf Plots

Each value is split into a stem (leading digits) and a leaf (last digit). A row "Stem 5: leaves 0, 3, 3, 7" means the values 50, 53, 53, and 57. Read every leaf as a separate data value; the plot is already sorted, which makes the median easy.

## Measures of Spread

| Measure | Definition | What it ignores |
|---------|------------|-----------------|
| **Range** | max − min | Everything except the two extremes |
| **Interquartile range (IQR)** | $Q_3 - Q_1$ | The lowest 25% and highest 25% of the data |
| **Standard deviation** | Typical distance of values from the mean | — (uses every value) |

**Finding quartiles:** sort the data and find the median. $Q_1$ is the median of the **lower half** and $Q_3$ is the median of the **upper half**. With an odd number of values, leave the overall median out of both halves.

For 3, 5, 7, 8, 10, **12**, 13, 15, 18, 20, 24: median = 12, $Q_1$ = median of 3, 5, 7, 8, 10 = 7, $Q_3$ = median of 13, 15, 18, 20, 24 = 18, so IQR $= 18 - 7 = 11$ and range $= 24 - 3 = 21$.

**Standard deviation on the ACT** is almost always conceptual: you will be asked which data set has the larger standard deviation, not to compute it. Values bunched tightly around the mean → small standard deviation; values spread far from the mean → large standard deviation. Two data sets can have the same mean and very different spreads.

## Box Plots (Five-Number Summary)

A box plot shows **minimum, $Q_1$, median, $Q_3$, maximum**. The box runs from $Q_1$ to $Q_3$, with a line at the median; the whiskers reach the min and max.

| Region | Share of the data |
|--------|-------------------|
| Below $Q_1$ | about 25% |
| Between $Q_1$ and the median | about 25% |
| Between $Q_1$ and $Q_3$ (the box) | about 50% |
| Above $Q_1$ | about 75% |

A longer box or whisker means the values in that region are more **spread out**, not that it contains more values. A box plot hides the mean entirely.

## How Changes Affect Spread

| Change | Range, IQR, standard deviation |
|--------|-------------------------------|
| Add $c$ to every value | **Unchanged** (the whole set slides over) |
| Multiply every value by $k$ (positive) | All multiplied by $k$ |
| Add a new value beyond the current max or min | Range grows; IQR and median may shift slightly |
      `
    },
    {
      id: 'act-stat-p2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Mean and median from a frequency table</b></summary>

**Question:** Twenty students took a 10-point quiz.

| Score | 6 | 7 | 8 | 9 | 10 |
|-------|---|---|---|---|----|
| Students | 2 | 5 | 8 | 4 | 1 |

Find the median and the mean.

**Solution:**
1. Count: $2 + 5 + 8 + 4 + 1 = 20$, so the median is the average of the 10th and 11th scores.
2. Running totals: scores of 6 fill positions 1–2, 7s fill 3–7, 8s fill 8–15. Both the 10th and 11th scores are 8, so the **median is 8**.
3. Mean: $\\frac{6(2) + 7(5) + 8(8) + 9(4) + 10(1)}{20} = \\frac{12 + 35 + 64 + 36 + 10}{20} = \\frac{157}{20} = 7.85$. ✓

**ACT trap:** 10.5 is the median's *position* $\\left(\\frac{20 + 1}{2}\\right)$, not its value.
</details>

<details>
<summary><b>Example 2: Reading a box plot described in words</b></summary>

**Question:** A box plot of commute times (minutes) has minimum 8, $Q_1$ = 15, median 22, $Q_3$ = 34, and maximum 50. Find the range and IQR, and describe what fraction of commutes take at least 15 minutes.

**Solution:**
1. Range $= 50 - 8 = 42$ minutes.
2. IQR $= 34 - 15 = 19$ minutes.
3. $Q_1 = 15$ marks the 25th percentile, so **about 75%** of commutes take at least 15 minutes. ✓

**Note:** The right part of the box (22 to 34) is longer than the left (15 to 22), so the upper-middle commutes are more spread out — but each part still holds about 25% of the data.
</details>
      `
    },
    {
      id: 'act-stat-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Reading Displays** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Twenty students took a 10-point quiz. The table shows how many students earned each score.

| Score | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|
| Students | 2 | 5 | 8 | 4 | 1 |

What is the median score?`,
            options: [`7.85`, `8`, `10`, `10.5`],
            correctAnswer: 1,
            explanation: `With 20 scores the median averages the 10th and 11th. Counting up, positions 8 through 15 are all scores of 8, so the median is 8. The value 7.85 is the mean, $157 \\div 20$. The value 10.5 is the median's position, and 10 is the 10th position or the top score, not the middle score.`
          },
          {
            question: `A survey of 20 students recorded their number of siblings.

| Siblings | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Students | 4 | 7 | 6 | 3 |

What is the mean number of siblings?`,
            options: [`1`, `5`, `7`, `1.4`],
            correctAnswer: 3,
            explanation: `Multiply each value by its frequency: $0(4) + 1(7) + 2(6) + 3(3) = 28$, then divide by the 20 students to get 1.4. The value 1 is the median and the mode (the 10th and 11th students both have 1 sibling), not the mean. The value 5 is the mean of the frequencies ($20 \\div 4$), and 7 is the largest frequency.`
          },
          {
            question: `A box plot of commute times, in minutes, has minimum 8, first quartile 15, median 22, third quartile 34, and maximum 50. Which statement is true?`,
            options: [
              `The IQR is 19 minutes`,
              `The range is 34 minutes`,
              `About half of the commutes are under 15 minutes`,
              `The median is 29 minutes`
            ],
            correctAnswer: 0,
            explanation: `The IQR is $Q_3 - Q_1 = 34 - 15 = 19$. The range is $50 - 8 = 42$, not 34, which is just $Q_3$. Only about 25% of commutes fall below $Q_1 = 15$. The median is given directly as 22; 29 is the midpoint of the minimum and maximum, which a box plot does not use.`
          },
          {
            question: `What is the interquartile range of the data set 2, 4, 5, 7, 9, 11, 14, 16, 20?`,
            options: [`9`, `15`, `10.5`, `18`],
            correctAnswer: 2,
            explanation: `The median is the 5th value, 9. Leaving it out, $Q_1$ is the median of 2, 4, 5, 7, which is 4.5, and $Q_3$ is the median of 11, 14, 16, 20, which is 15, so the IQR is $15 - 4.5 = 10.5$. Including the median in both halves gives quartiles of 5 and 14 and an IQR of 9. The value 15 is $Q_3$ alone, and 18 is the range.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p2-input',
      type: 'input-boxes' as const,
      content: `
**Read the Display** 🧮

A histogram of 25 test scores has these bars: 0–9: 3 values; 10–19: 7 values; 20–29: 9 values; 30–39: 5 values; 40–49: 1 value.

1) How many scores are 20 or greater?

2) What percent of the scores are less than 20? (Enter a number only.)

3) A stem-and-leaf plot shows: Stem 4: leaves 2, 5, 8; Stem 5: leaves 0, 3, 3, 7; Stem 6: leaves 1, 4. What is the median of these values?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '40', '53'],
        hint1: 'Add the bars for 20–29, 30–39, and 40–49.',
        hint2: 'Scores under 20 fill the first two bars; divide by the total of 25.',
        hint3: 'The values are 42, 45, 48, 50, 53, 53, 57, 61, 64.',
        explanation: '1) $9 + 5 + 1 = 15$. 2) $3 + 7 = 10$ scores are under 20, and $\\frac{10}{25} = 40\\%$. 3) The 9 values in order are 42, 45, 48, 50, 53, 53, 57, 61, 64, so the median is the 5th value, 53.'
      }
    },
    {
      id: 'act-stat-p2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

| # | Problem | Answer |
|---|---------|--------|
| 1 | A dot plot shows hours of sleep: 6 (3 dots), 7 (5 dots), 8 (6 dots), 9 (1 dot). Median? | 15 values, so the 8th: **7 hours** |
| 2 | Set P: 40, 45, 50, 55, 60. Set Q: 20, 35, 50, 65, 80. Which has the larger standard deviation? | **Q** — same mean (50), values farther from it |
| 3 | A box plot has $Q_1$ = 62 and $Q_3$ = 80. Every value is multiplied by 1.5. New IQR? | $18 \\times 1.5 = 27$ |

**ACT Tip:** Before you compute anything from a display, say out loud what each number in it means: a value, or how many times a value occurs.
      `
    },
    {
      id: 'act-stat-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Spread and Comparison** 📋
      `,
      exercise: {
        questions: [
          {
            question: `Set A is 48, 49, 50, 51, 52 and Set B is 30, 40, 50, 60, 70. Which statement is true?`,
            options: [
              `Same mean; Set B has the larger standard deviation`,
              `Same mean; A has the larger standard deviation`,
              `Same standard deviation; B has the larger mean`,
              `Different means and the same range`
            ],
            correctAnswer: 0,
            explanation: `Both sets have a mean of 50 (each is symmetric around 50). The values in B sit 10 or 20 away from the mean, while those in A sit only 1 or 2 away, so B is far more spread out and has the larger standard deviation. The ranges are 4 and 40, so they are not equal, and the means are not different.`
          },
          {
            question: `A data set has a range of 15 and an interquartile range of 6. Every value in the set is multiplied by 2. What are the new range and interquartile range?`,
            options: [
              `Range 15, IQR 6`,
              `Range 17, IQR 8`,
              `Range 30, IQR 12`,
              `Range 30, IQR 6`
            ],
            correctAnswer: 2,
            explanation: `Doubling every value doubles every distance between values, including max minus min and $Q_3 - Q_1$, so both measures double to 30 and 12. Leaving both unchanged is what happens when a constant is added, not multiplied. Adding 2 to each measure confuses multiplying the data with shifting the measures, and doubling only the range ignores that the quartiles scale too.`
          },
          {
            question: `A histogram shows the weekly reading hours of 30 students: 0 to under 2 hours, 4 students; 2 to under 4 hours, 12 students; 4 to under 6 hours, 8 students; 6 to under 8 hours, 6 students. Which interval contains the median?`,
            options: [
              `0 to under 2 hours`,
              `2 to under 4 hours`,
              `4 to under 6 hours`,
              `6 to under 8 hours`
            ],
            correctAnswer: 1,
            explanation: `With 30 students the median averages the 15th and 16th values. The first bar covers positions 1 to 4 and the second covers 5 to 16, so both middle values fall in the 2-to-4-hour bin. The 4-to-6-hour bin is the middle interval on the axis, but the median depends on where the 15th and 16th students fall, not on the middle of the scale.`
          },
          {
            question: `Box plots summarize two classes' test scores. Class X: minimum 55, Q1 68, median 75, Q3 80, maximum 96. Class Y: minimum 60, Q1 70, median 78, Q3 84, maximum 90. Which statement must be true?`,
            options: [
              `Class X has the higher median`,
              `Class Y has the larger range`,
              `Class X has the larger IQR`,
              `At least 75% of Class Y scored 70 or higher`
            ],
            correctAnswer: 3,
            explanation: `For Class Y, $Q_1 = 70$, so about 75% of the scores are at or above 70. Class Y has the higher median (78 versus 75). Class X has the larger range ($96 - 55 = 41$ versus $90 - 60 = 30$), and Class X has the smaller IQR ($80 - 68 = 12$ versus $84 - 70 = 14$).`
          }
        ]
      }
    },
    {
      id: 'act-stat-p2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- In a **frequency table**, each value counts as many times as its frequency: mean $= \\frac{\\sum(\\text{value} \\times \\text{frequency})}{\\text{total frequency}}$.
- Find the **median's position** with running totals, then report the *value* at that position — never the position itself.
- A **histogram** tells you which bin holds the median, not its exact value; a **stem-and-leaf** plot lists every value in order.
- **Quartiles:** $Q_1$ and $Q_3$ are the medians of the lower and upper halves (leave out the overall median for an odd count). IQR $= Q_3 - Q_1$ covers the middle 50%.
- **Box plot:** min, $Q_1$, median, $Q_3$, max; each section holds about 25% of the data.
- **Standard deviation** measures spread around the mean — compare it by eye. Adding a constant leaves all spread measures unchanged; multiplying by $k$ scales them by $k$.
      `
    }
  ]
};
