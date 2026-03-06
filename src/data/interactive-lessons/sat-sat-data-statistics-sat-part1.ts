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
      id: 'ds1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Mean: sum ÷ count. Use "sum = mean × count" to find missing totals
- Median: middle value (or average of two middles)
- Outliers affect the mean much more than the median
- For "add a value" problems: recalculate sum, then divide by new count`
    }
  ]
};
