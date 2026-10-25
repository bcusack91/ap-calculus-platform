export const asvabArAveragesProbabilityPart2Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap2-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 2 of 7 — Finding the Average (Mean)**

### Add, Then Divide by How Many

The **average** (also called the **mean**) of a list of numbers is

$$\\text{average} = \\frac{\\text{sum of the values}}{\\text{number of values}}$$

**Example 1.** A part-time worker logged 7, 9, 8, 6 and 10 hours on five shifts. What was the average shift length?

**Step 1 — Add in a column.** $7 + 9 + 8 + 6 + 10 = 40$ hours.

**Step 2 — Count the values.** There are 5 shifts.

**Step 3 — Divide.** $40 \\div 5 = 8$ hours.

**Reasonableness:** the shifts run from 6 to 10 hours, and 8 is right in that range. ✓

> **Key Fact:** An average **always** lies between the smallest and largest values. If your answer is outside that range, you divided by the wrong count or made an addition slip.`
    },
    {
      id: 'arap2-balance',
      type: 'text' as const,
      content: `## The Balance Shortcut

Adding big numbers by hand is where slips happen. The **balance method** keeps the numbers small:

1. **Guess** a round number near the middle of the data.
2. Write how far each value is **above (+)** or **below (−)** the guess.
3. **Add** those differences, **divide** by the count, and adjust the guess.

**Example 2.** Test scores of 88, 92, 95 and 85. Guess 90.

| Score | 88 | 92 | 95 | 85 |
|:---:|:---:|:---:|:---:|:---:|
| Difference from 90 | −2 | +2 | +5 | −5 |

The differences add to $-2 + 2 + 5 - 5 = 0$. Nothing to adjust: the average is exactly **90**.

**Example 3.** A convoy's five fuel stops took 48, 52, 55, 49 and 51 gallons. Guess 50.

Differences: $-2, +2, +5, -1, +1$, which add to $+5$.

Spread over 5 stops: $+5 \\div 5 = +1$. The average is $50 + 1 = 51$ gallons.

**Check the long way:** $48 + 52 + 55 + 49 + 51 = 255$, and $255 \\div 5 = 51$. ✓

**Don't forget to divide the total difference.** Adding all $+5$ to the guess (getting 55) is a common slip.`
    },
    {
      id: 'arap2-sum',
      type: 'text' as const,
      content: `## Running It Backward: Sum = Average × Count

If you know the average and the count, you know the total:

$$\\text{sum} = \\text{average} \\times \\text{number of values}$$

**Example 4.** Eight supply boxes average 15 pounds each. Their total weight is $15 \\times 8 = 120$ pounds.

You will use this in almost every Part 3 problem, so it is worth memorizing now.`
    },
    {
      id: 'arap2-median',
      type: 'text' as const,
      content: `## Median and Mode

Two other "typical value" words can appear:

- **Median:** the middle value **after you put the list in order**. With an even number of values, there are two middle values, so average them.
- **Mode:** the value that appears **most often**.

**Example 5 — an odd count.** Five apartments rent for \\$700, \\$650, \\$720, \\$680 and \\$1,750 a month.

**Order first:** \\$650, \\$680, **\\$700**, \\$720, \\$1,750. The median is \\$700.

**The mean:** $700 + 650 + 720 + 680 + 1{,}750 = 4{,}500$, and $4{,}500 \\div 5 = 900$, so \\$900.

Four of the five rents are under \\$750, yet the mean is \\$900 because one very high rent pulls it up. When one value is far from the rest (an **outlier**), the **median** is the better "typical" value.

**Example 6 — an even count.** Find the median of 12, 15, 9 and 20.

**Order first:** 9, **12**, **15**, 20. The two middle values are 12 and 15:

$$\\frac{12 + 15}{2} = \\frac{27}{2} = 13.5$$

> **Key Fact:** Always **order the list** before finding a median. Picking the middle of the list as it is printed is one of the most common wrong answers.`
    },
    {
      id: 'arap2-mc',
      type: 'multiple-choice' as const,
      content: '**Find the typical value.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A delivery driver made 14, 18, 11 and 17 deliveries over four days. What was the average number of deliveries per day?',
            options: ['20', '60', '15', '7'],
            correctAnswer: 2,
            explanation: 'Sum: $14 + 18 + 11 + 17 = 60$. Divide by the 4 days: $60 \\div 4 = 15$, which sits between 11 and 18. 60 is the total, not the average, 20 divides by 3 instead of 4, and 7 is the range (the largest minus the smallest).'
          },
          {
            question: 'The ages of six people at a training session are 19, 24, 21, 30, 22 and 18. What is the median age?',
            options: ['25.5', '21.5', '24.0', '22.0'],
            correctAnswer: 1,
            explanation: 'Order first: 18, 19, 21, 22, 24, 30. The two middle values are 21 and 22, so the median is $\\frac{21 + 22}{2} = 21.5$. 25.5 averages the two middle numbers of the unordered list (21 and 30), 24.0 averages the smallest and largest, and 22.0 takes one middle value without averaging the pair.'
          },
          {
            question: 'Four inspection scores are 76, 83, 79 and 86. Using 80 as a starting guess, what is the average score?',
            options: ['84', '80', '108', '81'],
            correctAnswer: 3,
            explanation: 'Differences from 80: $-4, +3, -1, +6$, which add to $+4$. Spread over 4 scores: $+4 \\div 4 = +1$, so the average is 81. Check: $324 \\div 4 = 81$. 84 adds the whole $+4$ to the guess without dividing, 80 forgets the adjustment, and 108 divides the sum of 324 by 3.'
          }
        ]
      }
    },
    {
      id: 'arap2-input',
      type: 'input-boxes' as const,
      content: `**Work it out.** ✍️

**1)** A recruiter made 23, 31, 27, 19 and 30 phone calls on five days. What was the average number of calls per day? (number only)

**2)** Nine packages have an average weight of 14 pounds. What is their total weight? (number only, in pounds)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['26', '126'],
        hint1: 'For (1), add the five values, then divide by 5.',
        hint2: 'For (1), the sum is $23 + 31 + 27 + 19 + 30 = 130$. Or use the balance method with a guess of 25.',
        hint3: 'For (2), sum = average $\\times$ count.',
        explanation: '(1) $130 \\div 5 = 26$ calls. Balance check with a guess of 25: differences $-2, +6, +2, -6, +5$ add to $+5$, and $+5 \\div 5 = +1$, so 26. ✓ (2) $14 \\times 9 = 126$ pounds.'
      }
    },
    {
      id: 'arap2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Median, mode, or mean?** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The home prices on one street include a single mansion worth far more than the others. The better "typical" price is the:',
            options: ['mean', 'median', 'mode', 'range'],
            correctAnswer: 1
          },
          {
            label: 'The mode of 4, 9, 7, 9, 6 is:',
            options: ['7', '6', '9', '4'],
            correctAnswer: 2
          },
          {
            label: 'The median of 3, 12, 5, 8 is:',
            options: ['8.5', '6.5', '7.0', '5.0'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['median', '9', '6.5'],
        hint1: 'One huge value pulls the mean toward it, but it does not move the middle of the ordered list.',
        hint2: 'The mode is the value that appears most often.',
        hint3: 'Order 3, 12, 5, 8 before you look for the middle.',
        explanation: 'An outlier drags the mean up, so the median is the better typical price. In 4, 9, 7, 9, 6, the value 9 appears twice, so the mode is 9 (the mean is 7). Ordered, the last list is 3, 5, 8, 12, so the median is $\\frac{5 + 8}{2} = 6.5$; averaging the unordered middle pair (12 and 5) gives the trap answer 8.5, and 7.0 is the mean.'
      }
    },
    {
      id: 'arap2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Average (mean) = sum ÷ count.** Count the values carefully before you divide
- **Balance shortcut:** guess a round number, add the differences, divide by the count, adjust
- **Sum = average × count** works the formula backward
- **Median:** order the list first; with an even count, average the two middle values. **Mode:** most frequent value
- With one far-off value, the **median** is the better typical value
- An average always lies **between the smallest and largest** values

> **Up Next:** Part 3 — the score you need on the last test, adding or removing a value, and weighted averages.`
    }
  ]
};
