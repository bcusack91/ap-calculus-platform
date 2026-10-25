export const asvabArAveragesProbabilityPart3Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap3-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 3 of 7 — Missing Values and Weighted Averages**

### The Score You Need on the Last Test

This is one of the most common average questions on AR. The trick is to think in **totals**, not averages:

$$\\text{needed score} = (\\text{target average} \\times \\text{total count}) - (\\text{sum so far})$$

**Example 1.** A recruit's first four practice tests average 82. What score does she need on the fifth test to raise her average to 85?

**Step 1 — Target total.** To average 85 over 5 tests she needs $85 \\times 5 = 425$ points.

**Step 2 — Points so far.** Four tests averaging 82: $82 \\times 4 = 328$ points.

**Step 3 — Subtract.** $425 - 328 = 97$.

**Balance check:** each of the 4 tests is 3 points short of 85, so she is $4 \\times 3 = 12$ points short in all. The fifth test must make up the 12: $85 + 12 = 97$. ✓

**Reasonableness:** 97 is possible on a 100-point test, and it is above 85, as it must be to pull the average up.

**Example 2.** Scores so far are 78, 84 and 90. What score on the fourth test gives an average of 85?

Target total: $85 \\times 4 = 340$. So far: $78 + 84 + 90 = 252$. Needed: $340 - 252 = 88$.

> **Key Fact:** The needed score is **not** "the target plus a little." Every earlier test that fell short adds to what the last test must make up.`
    },
    {
      id: 'arap3-change',
      type: 'text' as const,
      content: `## Adding or Removing One Value

Again, work with totals, and **change the count**.

**Example 3 — removing a value.** The average of 6 numbers is 20. One number, 35, is removed. What is the average of the other 5?

Total before: $20 \\times 6 = 120$. Total after: $120 - 35 = 85$. New average: $85 \\div 5 = 17$.

**Reasonableness:** 35 was above the average, so removing it should pull the average **down**. 17 is lower than 20. ✓

**Example 4 — adding a value.** A crew of 5 has an average age of 30. A 24-year-old joins. What is the new average age?

Total before: $30 \\times 5 = 150$. Total after: $150 + 24 = 174$. New average: $174 \\div 6 = 29$.

**The trap:** dividing by the **old** count (5 instead of 6 here, or 6 instead of 5 in Example 3).`
    },
    {
      id: 'arap3-weighted',
      type: 'text' as const,
      content: `## Weighted Averages: Don't Average the Averages

When two groups of **different sizes** combine, the bigger group pulls harder.

**Example 5.** Twenty recruits average 80 on a test, and thirty recruits average 90. What is the average for all 50?

**Step 1 — Total for each group.** $20 \\times 80 = 1{,}600$ and $30 \\times 90 = 2{,}700$.

**Step 2 — Combine.** $1{,}600 + 2{,}700 = 4{,}300$ points for $20 + 30 = 50$ recruits.

**Step 3 — Divide.** $4{,}300 \\div 50 = 86$.

The answer is **86, not 85.** Averaging 80 and 90 gives 85, which would only be right if the groups were the same size. Here there are more recruits at 90, so the combined average lands closer to 90.

**Shortcut:** the averages differ by 10 points, and the 90-group is $\\frac{30}{50} = \\frac{3}{5}$ of everyone. Move $\\frac{3}{5}$ of the way from 80 toward 90: $80 + 6 = 86$.

> **Key Fact:** The combined average is always between the two group averages and **closer to the bigger group**. If the groups are different sizes, the simple midpoint is wrong.`
    },
    {
      id: 'arap3-table',
      type: 'text' as const,
      content: `## Averages From a Frequency Table

Sometimes the data come as a table of values and how many times each occurred.

**Example 6.** Ten recruits did pull-ups:

| Pull-ups | Number of recruits |
|:---:|:---:|
| 5 | 2 |
| 6 | 3 |
| 8 | 4 |
| 10 | 1 |

**Step 1 — Multiply each value by its count.** $5 \\times 2 = 10$, $6 \\times 3 = 18$, $8 \\times 4 = 32$, $10 \\times 1 = 10$.

**Step 2 — Add for the total.** $10 + 18 + 32 + 10 = 70$ pull-ups.

**Step 3 — Divide by the number of people,** $2 + 3 + 4 + 1 = 10$: $70 \\div 10 = 7$.

**The traps:** averaging just the four values in the left column ($29 \\div 4 = 7.25$) ignores how many recruits did each; dividing 70 by 4 (the number of rows) gives 17.5, which is bigger than any value in the table.`
    },
    {
      id: 'arap3-mc',
      type: 'multiple-choice' as const,
      content: '**Totals first.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A student scored 72, 80 and 85 on three quizzes. What score does he need on the fourth quiz to have an average of 80?',
            options: ['81', '320', '83', '80'],
            correctAnswer: 2,
            explanation: 'Target total: $80 \\times 4 = 320$. So far: $72 + 80 + 85 = 237$. Needed: $320 - 237 = 83$. 81 adds only 1 point to the target because his current average (79) is 1 point short, forgetting that all three quizzes are short. 320 is the target total, not the score, and 80 assumes the last score just has to equal the target.'
          },
          {
            question: 'A company has 12 drivers who average 40 hours of work a week and 8 office staff who average 30 hours. What is the average for all 20 employees?',
            options: ['35', '36', '34', '70'],
            correctAnswer: 1,
            explanation: 'Totals: $12 \\times 40 = 480$ and $8 \\times 30 = 240$, so $720 \\div 20 = 36$ hours. 35 averages the two averages even though the groups differ in size, 34 attaches each average to the wrong group, and 70 adds the averages.'
          },
          {
            question: 'Five crates have an average weight of 20 pounds. One crate weighing 40 pounds is removed. What is the average weight of the remaining crates?',
            options: ['15', '12', '28', '20'],
            correctAnswer: 0,
            explanation: 'Total: $20 \\times 5 = 100$ pounds. After removing 40: $100 - 40 = 60$ pounds for 4 crates, so $60 \\div 4 = 15$. 12 divides by the old count of 5, 28 adds the crate instead of removing it, and 20 assumes the average does not change, even though a crate above the average was removed.'
          }
        ]
      }
    },
    {
      id: 'arap3-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️

**1)** A manager records how many shifts each employee worked this week:

| Shifts worked | Number of employees |
|:---:|:---:|
| 3 | 4 |
| 4 | 5 |
| 5 | 8 |
| 6 | 3 |

What is the average number of shifts per employee? (number only)

**2)** A salesperson's sales averaged \\$300 a day for 5 days. How much must she sell on the sixth day to average \\$320 a day for all 6 days? (number only, in dollars)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['4.5', '420'],
        hint1: 'For (1), multiply each number of shifts by how many employees worked it, then add.',
        hint2: 'For (1), divide the total shifts by the number of employees ($4 + 5 + 8 + 3$), not by the number of rows.',
        hint3: 'For (2), the target total is $320 \\times 6$; the total so far is $300 \\times 5$.',
        explanation: '(1) $3 \\times 4 + 4 \\times 5 + 5 \\times 8 + 6 \\times 3 = 12 + 20 + 40 + 18 = 90$ shifts for 20 employees, so $90 \\div 20 = 4.5$. (2) Target: $320 \\times 6 = 1{,}920$. So far: $300 \\times 5 = 1{,}500$. Needed: $1{,}920 - 1{,}500 = 420$, so \\$420.'
      }
    },
    {
      id: 'arap3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Needed score = target average × total count − sum so far.** Think in totals
- **Adding or removing a value:** change the total, then divide by the **new** count
- **Weighted average:** find each group's total, add, divide by everyone. **Don't average the averages**
- The combined average lands **closer to the bigger group**
- **Frequency table:** multiply each value by its count, add, divide by the number of people (not the number of rows)

> **Up Next:** Part 4 — counting outcomes: combos, codes, arrangements and pairs.`
    }
  ]
};
