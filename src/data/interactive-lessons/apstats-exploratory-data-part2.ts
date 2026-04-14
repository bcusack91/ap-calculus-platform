export const apStatsEDAPart2Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p2-intro',
      type: 'text' as const,
      content: `# 📊 Graphical Displays

**Part 2 of 7 — Graphs for Quantitative Data**

---

### Histograms

- Bars represent frequency (or relative frequency) for intervals
- No gaps between bars (unlike bar charts)
- Show shape, center, spread, and outliers

### Stemplots (Stem-and-Leaf Plots)

- Each value is split into a “stem” and “leaf”
- Good for small datasets (preserves individual values)
- **Back-to-back stemplots** compare two groups

---

### Dotplots

- Each value represented by a dot above a number line
- Best for small datasets
- Easy to see clusters, gaps, and outliers

### Comparative Displays

To compare distributions, use:
- Side-by-side boxplots
- Back-to-back stemplots
- Overlapping or stacked histograms

> 🔑 Always compare shape, outliers, center, AND spread when comparing distributions.`
    },    {
      id: 'exploratorydata-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Histograms differ from bar charts because:',
            options: ['Histograms have gaps between bars', 'Histograms are for quantitative data with no gaps', 'Bar charts are always vertical', 'Histograms only show frequencies'],
            correctAnswer: 1,
            explanation: 'Histograms: no gaps, quantitative data. Bar charts: gaps, categorical data.'
          },
          {
            question: 'A back-to-back stemplot is used to:',
            options: ['Display one data set', 'Compare two distributions', 'Show time series data', 'Display categorical data'],
            correctAnswer: 1,
            explanation: 'Back-to-back stemplots share stems and have leaves going in opposite directions for two groups.'
          },
          {
            question: 'Which display preserves individual data values?',
            options: ['Histogram', 'Boxplot', 'Stemplot', 'Pie chart'],
            correctAnswer: 2,
            explanation: 'Stemplots show each individual value; histograms and boxplots group data into intervals or quartiles.'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p2-input',
      type: 'input-boxes' as const,
      content: `
**Graph Selection** 🧮

Choose the best graph type for each:

**1)** Comparing test score distributions of two classes (histogram/boxplot/stemplot)

**2)** Showing individual values of 20 measurements (histogram/dotplot/boxplot)

**3)** Displaying the distribution of 500 exam scores (histogram/dotplot/stemplot)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['boxplot', 'dotplot', 'histogram'],
        hint1: 'Side-by-side comparison',
        hint2: 'Small dataset, individual values',
        hint3: 'Large dataset needs binning',
        explanation: '1) Side-by-side boxplots for easy comparison. 2) Dotplot preserves individual values for small data. 3) Histogram handles large datasets well.'
      }
    }
  ]
};
