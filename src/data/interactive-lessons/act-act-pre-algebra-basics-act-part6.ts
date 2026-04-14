export const actPreAlgebraPart6Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-pa6-intro',
      type: 'text' as const,
      content: `
# 📊 Basic Statistics

**Part 6 of 7 — Mean, Median, Mode, Range & Reading Charts**

The ACT loves simple data-analysis questions. Know these four measures:

| Measure | Definition | Example for $\\{2, 3, 3, 7, 10\\}$ |
|---------|-----------|------|
| **Mean** | Sum ÷ count | $\\frac{2+3+3+7+10}{5} = 5$ |
| **Median** | Middle value (sorted) | $3$ |
| **Mode** | Most frequent value | $3$ |
| **Range** | Max − Min | $10 - 2 = 8$ |

> For an **even** number of data points, the median is the average of the two middle values.
      `
    },
    {
      id: 'act-pa6-examples',
      type: 'text' as const,
      content: `
## Worked Examples

**Example 1 — Mean:** Test scores: $78, 85, 92, 88, 97$. Find the mean.

$$\\text{Mean} = \\frac{78 + 85 + 92 + 88 + 97}{5} = \\frac{440}{5} = 88$$

**Example 2 — Median (even count):** Data: $4, 7, 9, 12$. Find the median.

$$\\text{Median} = \\frac{7 + 9}{2} = 8$$

**Example 3 — Missing-value problem:** The mean of five numbers is $20$. Four of them are $15, 18, 22, 25$. Find the fifth.

$$\\text{Sum} = 5 \\times 20 = 100$$
$$\\text{Known sum} = 15 + 18 + 22 + 25 = 80$$
$$\\text{Fifth number} = 100 - 80 = 20$$

**ACT Tip:** "Find the missing value given the mean" is a classic ACT question pattern.
      `
    },
    {
      id: 'act-pa6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Statistics Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the median of $\\{12, 5, 8, 3, 15, 9\\}$?',
            options: ['$8$', '$8.5$', '$9$', '$10.5$'],
            correctAnswer: 1,
            explanation: 'Sorted: $3, 5, 8, 9, 12, 15$. Middle two are $8$ and $9$. Median $= \\frac{8+9}{2} = 8.5$.'
          },
          {
            question: 'The data set $\\{4, 4, 5, 7, 7, 7, 9\\}$ has mode …',
            options: ['$4$', '$5$', '$7$', '$4$ and $7$'],
            correctAnswer: 2,
            explanation: '$7$ appears three times, more than any other value.'
          }
        ]
      }
    },
    {
      id: 'act-pa6-charts',
      type: 'text' as const,
      content: `
## Reading Charts & Tables

On the ACT, you may see bar graphs, pie charts, tables, or line graphs. The math is usually straightforward — the challenge is extracting the right numbers.

**Strategy:**
1. Read the title and axis labels first.
2. Identify what the question asks.
3. Pull the numbers and compute.

**Example 4 — Table:** A store sold the following units:

| Day | Mon | Tue | Wed | Thu | Fri |
|-----|-----|-----|-----|-----|-----|
| Units | 30 | 45 | 25 | 50 | 40 |

Average daily sales $= \\frac{30 + 45 + 25 + 50 + 40}{5} = \\frac{190}{5} = 38$ units.

Best day: Thursday ($50$ units).  
Range: $50 - 25 = 25$ units.
      `
    },
    {
      id: 'act-pa6-input1',
      type: 'input-boxes' as const,
      content: `
**Statistics Practice** 🧮

1) Find the mean of $\\{10, 14, 18, 22, 26\\}$.

2) The mean of 4 numbers is $15$. Three of them are $12, 16, 20$. What is the fourth?

3) Find the range of $\\{3, 8, 1, 15, 7\\}$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '12', '14'],
        hint1: 'Add all five values and divide by 5.',
        hint2: 'Total $= 4 \\times 15 = 60$. Subtract the known three.',
        hint3: 'Range $= \\text{Max} - \\text{Min}$.',
        explanation: 'Mean $= \\frac{10+14+18+22+26}{5} = \\frac{90}{5} = 18$. Fourth $= 60 - (12+16+20) = 60 - 48 = 12$. Range $= 15 - 1 = 14$.'
      }
    },
    {
      id: 'act-pa6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a data set has an even number of values, the median is the ______ of the two middle values.',
            options: ['sum', 'product', 'average', 'difference']
          },
          {
            label: 'A data set can have ______ mode(s).',
            options: ['exactly one', 'zero, one, or more than one', 'only two', 'at most one']
          },
          {
            label: 'Adding a very large outlier to a data set most affects the …',
            options: ['mode', 'median', 'mean', 'range only']
          }
        ],
        correctAnswers: ['average', 'zero, one, or more than one', 'mean'],
        hint1: 'Average the two middle values.',
        hint2: 'If no value repeats, there is no mode. Multiple values can tie.',
        hint3: 'The mean uses every value in its calculation.',
        explanation: 'Even-count median: average the two middle values. A set can have 0, 1, or multiple modes. The mean is most affected by outliers.'
      }
    },
    {
      id: 'act-pa6-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The mean of $6$ test scores is $82$. After adding a $7$th score, the mean rises to $84$. What is the $7$th score?',
            options: ['$86$', '$90$', '$94$', '$96$'],
            correctAnswer: 3,
            explanation: 'Original sum $= 6 \\times 82 = 492$. New sum $= 7 \\times 84 = 588$. Seventh score $= 588 - 492 = 96$.'
          },
          {
            question: 'A set of 5 numbers has a mode of 8, a median of 8, and a mean of 10. Which could be the set?',
            options: ['$\\{6, 8, 8, 10, 18\\}$', '$\\{8, 8, 8, 8, 18\\}$', '$\\{4, 8, 8, 12, 18\\}$', '$\\{2, 8, 8, 14, 18\\}$'],
            correctAnswer: 2,
            explanation: 'Check: $4+8+8+12+18 = 50$ and $50 \\div 5 = 10$ ✓. Median (3rd value) $= 8$ ✓. Mode $= 8$ ✓.'
          }
        ]
      }
    }
  ]
};
