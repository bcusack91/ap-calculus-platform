export const satDataStatsPart1Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'ds1-intro',
      type: 'text' as const,
      content: `# Data Analysis & Statistics

**Part 1 of 7 — Mean, Median, Mode, Range**

### Mean (Average)

$$\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}$$

### Median

The middle value when data is ordered. For even number of values: average the two middle values.

$\\{3, 5, 7, 9, 11\\}$ → median = $7$

$\\{3, 5, 7, 9\\}$ → median = $(5 + 7)/2 = 6$

### Mode

Most frequent value. Can have none, one, or multiple modes.

### Range

Range $=$ max $-$ min

### SAT Favorites 🎯

**"Adding/removing a value"**: If the mean of 5 numbers is 20, their sum is 100. Add a 6th number = 38: new mean $= 138/6 = 23$.

**"Which measure changes?"**: Adding an outlier affects the mean much more than the median.`
    },
    {
      id: 'ds1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Central Tendency** 🎯',
      exercise: {
        questions: [
          {
            question: 'The mean of 4 numbers is 15. A fifth number 25 is added. What is the new mean?',
            options: ['$17$', '$20$', '$15$', '$16$'],
            correctAnswer: 0,
            explanation: 'Sum of 4 numbers = $4 \\times 15 = 60$. New sum $= 60 + 25 = 85$. New mean $= 85/5 = 17$.'
          },
          {
            question: 'Data set: $\\{2, 5, 7, 7, 9, 100\\}$. Which measure is most affected by the outlier 100?',
            options: ['Mean', 'Median', 'Mode', 'All equally'],
            correctAnswer: 0,
            explanation: 'The mean is pulled up by the outlier to $130/6 ≈ 21.7$, while the median is $(7 + 7)/2 = 7$ and mode is 7 — both unaffected.'
          },
          {
            question: 'The median of 9 numbers in order is 42 (the 5th number). If a new number 50 is added, the new median is:',
            options: ['$\\frac{42 + 46}{2}$ if the 6th number is 46', '$50$', '$42$', 'Cannot determine without more info'],
            correctAnswer: 3,
            explanation: 'With 10 numbers, the median is the average of the 5th and 6th values. We know the 5th is 42, but we need the 6th value to determine the new median.'
          }
        ]
      }
    },
    {
      id: 'ds1-text2',
      type: 'text' as const,
      content: `### Worked Example 1 — Finding a Missing Value

**The mean of 6 numbers is 12. Five of the numbers are 8, 10, 14, 15, 9. Find the 6th number.**

| Step | Work |
|------|------|
| Total from mean | $6 \\times 12 = 72$ |
| Sum of 5 known | $8 + 10 + 14 + 15 + 9 = 56$ |
| Missing value | $72 - 56 = 16$ |

### Worked Example 2 — Weighted Average

**A class of 20 students averages 75 on a test. A class of 30 students averages 85. What is the combined average?**

| Step | Work |
|------|------|
| Sum for class 1 | $20 \\times 75 = 1500$ |
| Sum for class 2 | $30 \\times 85 = 2550$ |
| Combined mean | $\\frac{1500 + 2550}{20 + 30} = \\frac{4050}{50} = 81$ |

**Note:** The combined average is NOT simply $(75 + 85)/2 = 80$. The larger class pulls the average closer to its mean.

### Median from a Frequency Table

| Score | Frequency |
|-------|-----------|
| 70 | 3 |
| 80 | 5 |
| 90 | 4 |
| 100 | 2 |

14 values total → median = average of 7th and 8th values. Count: positions 1–3 are 70, positions 4–8 are 80. Both 7th and 8th are 80, so median = **80**.`
    },
    {
      id: 'ds1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Mean & Median** 🎯',
      exercise: {
        questions: [
          {
            question: 'A student scores 82, 91, 78, and 85 on four tests. What score is needed on the 5th test for a mean of 85?',
            options: ['$89$', '$85$', '$90$', '$88$'],
            correctAnswer: 0,
            explanation: 'Need total $= 85 \\times 5 = 425$. Current sum $= 82+91+78+85 = 336$. Need $425 - 336 = 89$.'
          },
          {
            question: 'Data set: $\\{3, 7, 7, 10, 12, x\\}$ in order. If the median is 8.5, what is $x$?',
            options: ['$x = 10$ (median = $(7+10)/2 = 8.5$)', '$x = 8$', '$x = 9$', '$x = 17$'],
            correctAnswer: 0,
            explanation: '6 values → median = average of 3rd and 4th. The 3rd value is 7. We need $(7 + \\text{4th})/2 = 8.5$, so 4th value = 10. Since 10 is already there, $x = 10$ works.'
          },
          {
            question: 'Group A (10 people, mean 60) and Group B (40 people, mean 80). Combined mean?',
            options: ['$76$', '$70$', '$75$', '$80$'],
            correctAnswer: 0,
            explanation: '$\\frac{10(60) + 40(80)}{50} = \\frac{600 + 3200}{50} = \\frac{3800}{50} = 76$. Weighted toward the larger group.'
          }
        ]
      }
    },
    {
      id: 'ds1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mean vs. Median** 🔍\n\nWhich measure of center is more appropriate?',
      exercise: {
        dropdowns: [
          { label: 'Salaries at a company where the CEO makes \\$10M and everyone else makes ~\\$60K', options: ['Median (outlier skews mean)', 'Mean (more accurate)', 'Mode (most common)', 'Range'] },
          { label: 'Test scores that are evenly distributed between 60 and 100', options: ['Mean (no outliers, symmetric)', 'Median (always better)', 'Mode (most frequent)', 'Range'] },
          { label: 'Home prices in a neighborhood where one mansion sold for $5M', options: ['Median (outlier skews mean)', 'Mean (includes all data)', 'Mode (typical price)', 'Range'] },
          { label: '"Find the average score to determine the class grade"', options: ['Mean (average = mean)', 'Median (middle value)', 'Mode (most common)', 'Cannot determine'] }
        ],
        correctAnswers: ['Median (outlier skews mean)', 'Mean (no outliers, symmetric)', 'Median (outlier skews mean)', 'Mean (average = mean)'],
        hint1: 'When outliers exist, the mean gets pulled toward them.',
        hint2: 'Symmetric data with no outliers → mean and median are similar, but mean uses all data.',
        hint3: '"Average" on the SAT always means the mean unless stated otherwise.',
        explanation: 'Outliers (CEO salary, mansion) pull the mean away from the typical value — use median. Symmetric data → mean is fine. "Average" = mean by definition.'
      }
    },
    {
      id: 'ds1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Formula / Rule |
|---------|---------------|
| Mean | Sum ÷ Count |
| Median | Middle value (avg of two middles if even count) |
| Mode | Most frequent value |
| Range | Max − Min |
| Find missing value | Sum = Mean × Count, then subtract known values |
| Weighted average | $\\frac{n_1 \\cdot \\bar{x}_1 + n_2 \\cdot \\bar{x}_2}{n_1 + n_2}$ |
| Outlier effect | Mean shifts toward outlier; median barely moves |

- On the SAT, "average" always means **mean** unless otherwise specified
- The weighted average is always closer to the group with more data points`
    }
  ]
};
