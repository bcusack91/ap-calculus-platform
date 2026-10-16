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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Histograms differ from bar charts because histograms:',
            options: ['Have gaps between their bars', 'Display quantitative data', 'Must always be drawn vertically', 'Show counts but never proportions'],
            correctAnswer: 1,
            explanation: 'A histogram shows a quantitative variable split into ordered bins, so adjacent bars touch; a bar chart shows categories, with gaps between bars. Either graph can be drawn horizontally, and a histogram can show relative frequencies (proportions).'
          },
          {
            question: 'A back-to-back stemplot is used to:',
            options: ['Display a single data set', 'Compare two distributions', 'Show data collected over time', 'Display a categorical variable'],
            correctAnswer: 1,
            explanation: 'Back-to-back stemplots share one column of stems, with each group\'s leaves going out in opposite directions, so two quantitative distributions can be compared. A single stemplot is enough for one data set, and stemplots do not show time order or categories.'
          },
          {
            question: 'Which display preserves individual data values?',
            options: ['Histogram', 'Boxplot', 'Stemplot', 'Pie chart'],
            correctAnswer: 2,
            explanation: 'Stemplots show each individual value; histograms group data into bins, boxplots show only the five-number summary (and outliers), and pie charts are for categorical data.'
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
