export const satDataStatsPart1Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds1-intro',
      type: 'text' as const,
      content: `
# 📊 Data & Statistics — SAT Foundations

**Part 1 of 7 — Mean, Median, Mode**

About **10–15% of the SAT Math section** involves data analysis and statistics. These are often "easy to medium" difficulty — but careless errors are common.

The **three measures of central tendency** describe the "center" of a data set:

| Measure | Definition | When to Use |
|---------|-----------|-------------|
| **Mean** | Sum of all values ÷ number of values | Data is symmetric, no outliers |
| **Median** | Middle value when sorted | Data is skewed or has outliers |
| **Mode** | Most frequently occurring value | Categorical data |

**Key formula:** $$\\text{Mean} = \\frac{\\sum x_i}{n} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$$

**The most useful rearrangement:** $\\text{Sum} = \\text{Mean} \\times n$. If you know any two of \\{sum, mean, count\\}, you can find the third.
      `
    },
    {
      id: 'sat-ds1-check1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The ages of 5 students are: 14, 15, 15, 16, 20. Which measure of central tendency is MOST affected by the outlier (20)?',
            options: [
              'Mean',
              'Median',
              'Mode',
              'All are equally affected'
            ],
            correctAnswer: 0,
            explanation: 'The mean is $(14+15+15+16+20)/5 = 16$. Without the outlier, the mean of the first four is $15$. The median (15) and mode (15) are barely affected. **Outliers pull the mean toward them.**'
          }
        ]
      }
    },
    {
      id: 'sat-ds1-reverse',
      type: 'text' as const,
      content: `
**Reverse Mean Problems — The SAT's Favorite**

The SAT loves giving you the mean and asking for a missing value. Use: $\\text{Sum} = \\text{Mean} \\times n$

**Example:** The average of 5 test scores is 82. Four scores are 78, 85, 90, and 74. What is the fifth?

**Step 1:** Total sum = $82 \\times 5 = 410$

**Step 2:** Known sum = $78 + 85 + 90 + 74 = 327$

**Step 3:** Missing = $410 - 327 = 83$

---

**Another common type:** "If a 6th score of 96 is added, what is the new mean?"

New sum = $410 + 96 = 506$. New mean = $506 \\div 6 \\approx 84.3$.

**SAT Tip:** When a value is added or removed, the mean changes. Track the **sum** — it's always easier than re-averaging.
      `
    },
    {
      id: 'sat-ds1-practice1',
      type: 'input-boxes' as const,
      content: `
**Solve each problem.** 🧮

1) Find the mean of: 12, 18, 24, 30, 16

2) The mean of 6 numbers is 15. Five are 10, 12, 18, 20, 14. What is the sixth?

3) A student's scores are 88, 92, 76, 84. What score on the 5th test gives an average of exactly 85?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '16', '85'],
        hint1: 'Add all five and divide by 5: $(12+18+24+30+16) \\div 5$.',
        hint2: 'Total sum = $15 \\times 6 = 90$. Known sum = $10+12+18+20+14 = 74$. Missing = ?',
        hint3: 'Needed total = $85 \\times 5 = 425$. Current sum = $88+92+76+84 = 340$. Need $425-340$.',
        explanation: '1) $100/5 = 20$. 2) $90 - 74 = 16$. 3) $425 - 340 = 85$.'
      }
    },
    {
      id: 'sat-ds1-median',
      type: 'text' as const,
      content: `
**Finding the Median**

**Step 1:** Sort the data from least to greatest.

**Step 2:** Find the middle value:
- **Odd count:** Median = the middle number. Position = $\\frac{n+1}{2}$
- **Even count:** Median = average of the two middle numbers

**Example (odd):** Data: 7, 2, 9, 4, 5 → Sorted: 2, 4, **5**, 7, 9 → Median = 5

**Example (even):** Data: 3, 8, 1, 6 → Sorted: 1, 3, 6, 8 → Median = $\\frac{3+6}{2} = 4.5$

---

**SAT Trap:** The data is NOT sorted! Students who skip sorting pick the wrong middle value. Always sort first.
      `
    },
    {
      id: 'sat-ds1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each scenario to the best measure of center.** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Salaries at a company where the CEO earns $10M',
            options: ['Mean', 'Median', 'Mode']
          },
          {
            label: 'Typical shoe size sold at a store',
            options: ['Mean', 'Median', 'Mode']
          },
          {
            label: 'Average test score when data is symmetric',
            options: ['Mean', 'Median', 'Mode']
          }
        ],
        correctAnswers: ['Median', 'Mode', 'Mean'],
        hint1: 'The CEO salary is an extreme outlier that would inflate the mean.',
        hint2: 'Shoe sizes are categorical — which size is purchased most often?',
        hint3: 'When data is symmetric and has no outliers, mean and median are similar, but mean uses all the data.',
        explanation: 'Use median when outliers exist (CEO salary skews the mean). Use mode for categorical data (most common shoe size). Use mean when data is symmetric.'
      }
    },
    {
      id: 'sat-ds1-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A data set has values: 3, 7, 7, 9, 12, 15. If the value 15 is removed, how does the median change?',
            options: [
              'Decreases from 8 to 7',
              'Stays the same at 8',
              'Decreases from 8 to 7.5',
              'Increases from 8 to 9'
            ],
            correctAnswer: 0,
            explanation: 'Original (6 values): median = $(7+9)/2 = 8$. After removing 15 (5 values): sorted = 3, 7, **7**, 9, 12 → median = 7. Decreased from 8 to 7.'
          },
          {
            question: 'The mean of a data set is 25 and the median is 22. A new value of 100 is added. Which is true?',
            options: [
              'Both mean and median increase significantly',
              'The mean increases significantly; the median barely changes',
              'The median increases significantly; the mean barely changes',
              'Neither changes'
            ],
            correctAnswer: 1,
            explanation: 'Adding 100 adds to the sum, dramatically increasing the mean. The median shifts by at most one position — it barely changes. The median is **resistant to outliers**.'
          }
        ]
      }
    }
  ]
}
