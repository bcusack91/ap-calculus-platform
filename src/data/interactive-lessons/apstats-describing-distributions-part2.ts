export const apStatsDistributionsPart2Data = {
  topicSlug: 'describing-distributions-apstats',
  sections: [
    {
      id: 'apstats-describing-distributions-p2-intro',
      type: 'text' as const,
      content: `# 📊 Histograms & Dotplots

**Part 2 of 7 — Displaying Quantitative Data**

---

### Types of Graphs for Quantitative Data

| Graph | Description | Best For |
|-------|-------------|----------|
| **Histogram** | Bars show frequency of data in intervals (bins) | Large data sets |
| **Dotplot** | Dots stacked above a number line | Small data sets; seeing individual values |
| **Stemplot** | Stems (leading digits) with leaves (trailing digits) | Moderate data sets; preserving exact values |

---

### Histograms

A histogram divides values into equal-width **bins** and shows the frequency (count) or relative frequency (proportion) of each bin.

**Key Features:**
- Bars touch (no gaps between adjacent bins)
- x-axis: quantitative variable (bins)
- y-axis: frequency or relative frequency
- Bin width affects appearance — too few bins hide detail, too many create noise

| Bin Width | Effect |
|-----------|--------|
| Too wide (few bins) | Hides patterns in the data |
| Too narrow (many bins) | Creates too much noise |
| Just right | Reveals the overall shape clearly |

---

### Dotplots

Each data value is represented by a dot above a number line. Dots stack when values repeat.

**Example:**
Data: 1, 2, 2, 3, 3, 3, 4, 4, 5

| Value | 1 | 2 | 3 | 4 | 5 |
|-------|:-:|:-:|:-:|:-:|:-:|
| Dots | • | •• | ••• | •• | • |

- Shape: symmetric
- Center: 3
- Spread: range = 4
- No obvious outliers

---

### Stemplots (Stem-and-Leaf Plots)

| Component | Role |
|-----------|------|
| **Stem** | Leading digit(s) |
| **Leaf** | Trailing digit |
| **Key** | Tells how to read the values (e.g., 3|5 = 35) |

**Example:** Ages: 21, 23, 25, 31, 34, 38, 42, 45

| Stem | Leaves |
|:----:|--------|
| 2 | 1 3 5 |
| 3 | 1 4 8 |
| 4 | 2 5 |

Key: 2|1 = 21 years

> **Back-to-back stemplots** compare two groups using the same stems.

---

### Reading Graphs — What to Look For

| Feature | What to Check |
|---------|---------------|
| **Shape** | Symmetric? Skewed? Unimodal? Bimodal? |
| **Center** | Where is the "middle" of the data? |
| **Spread** | How spread out are the values? |
| **Outliers** | Any values far from the rest? |
| **Gaps/Clusters** | Are there groups of data with gaps between them? |

> 🔑 **AP Tip:** When comparing two distributions, use comparative language: "Distribution A is more spread out than Distribution B" rather than describing each separately.`
    },
    {
      id: 'apstats-describing-distributions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Graph Interpretation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a histogram, the bars represent:',
            options: ['Individual data values', 'Counts of values in each bin', 'The mean value within each interval', 'Categories of a variable'],
            correctAnswer: 1,
            explanation: 'Each bar shows how many data values (or what proportion) fall within that interval, or bin. Histograms do not show individual values or bin means, and categories belong on a bar chart.'
          },
          {
            question: 'A dotplot is most useful when:',
            options: ['There are thousands of values', 'The data set is small and values matter', 'The variable is categorical', 'Only the mean needs to be reported'],
            correctAnswer: 1,
            explanation: 'Dotplots work best for small quantitative data sets where you want to see each individual value. With thousands of values the dots pile up, categorical data need a bar chart, and a single mean needs no graph.'
          },
          {
            question: 'In a stemplot, the entry 4|7 (with key: 4|7 = 47) represents:',
            options: ['4.7', '47', '74', '4 and 7'],
            correctAnswer: 1,
            explanation: 'The stem is the leading digit (4) and the leaf is the trailing digit (7), and the key confirms 4|7 = 47, not 4.7. Always read the key, because the same plot could use a key like 4|7 = 4.7.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Dotplot Reading** 🧮

**Dotplot frequencies: Value 1→1 dot, 2→3 dots, 3→4 dots, 4→2 dots, 5→1 dot**

**1)** Total number of data points?

**2)** Which value occurs most often?

**3)** What is the range?
      `,
      exercise: {
        inputs: [
          {
            label: 'Total',
            correctAnswer: '11',
            explanation: '1 + 3 + 4 + 2 + 1 = 11 data points.'
          },
          {
            label: 'Most frequent value',
            correctAnswer: '3',
            explanation: 'Value 3 has the highest frequency (4 dots).'
          },
          {
            label: 'Range',
            correctAnswer: '4',
            explanation: 'Range = max − min = 5 − 1 = 4.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graph Features** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'dd2-p2-1',
            label: 'Histogram bars should ___ for continuous data',
            options: ['Have gaps between them', 'Touch each other', 'Overlap', 'Be sorted by height'],
            correctIndex: 1,
            explanation: 'For continuous data, histogram bars touch because the bins cover consecutive intervals with no gaps.'
          },
          {
            id: 'dd2-p2-2',
            label: 'Gaps in a dotplot may suggest:',
            options: ['A normal distribution', 'Separate clusters in the data', 'Very little variation', 'A uniform distribution'],
            correctIndex: 1,
            explanation: 'Gaps separate clusters, which can indicate distinct subgroups within the data (or an outlier sitting apart from the rest). Normal and uniform shapes have no gaps.'
          },
          {
            id: 'dd2-p2-3',
            label: 'A back-to-back stemplot is used to:',
            options: ['Display one data set more clearly', 'Compare two distributions', 'Calculate the mean', 'Show values over time'],
            correctIndex: 1,
            explanation: 'Back-to-back stemplots share stems, with leaves for each group extending in opposite directions.'
          }
        ]
      }
    },
    {
      id: 'apstats-describing-distributions-p2-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Histograms & Dotplots** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which graph preserves the exact data values?',
            options: ['Histogram', 'Stemplot', 'Box plot', 'Bar chart'],
            correctAnswer: 1,
            explanation: 'Stemplots (and dotplots) preserve exact values. Histograms group data into bins, losing individual values.'
          },
          {
            question: 'Using too many bins in a histogram will:',
            options: ['Make the overall shape much clearer', 'Look jagged and hide the pattern', 'Merge the values into too few groups', 'Change both the mean and the median'],
            correctAnswer: 1,
            explanation: 'Too many narrow bins create a jagged, noisy appearance that obscures the overall shape. Too FEW bins is what merges values and hides detail, and bin width changes the picture, not the data or their mean and median.'
          },
          {
            question: 'A histogram with bars getting shorter from left to right is:',
            options: ['Left-skewed', 'Right-skewed', 'Symmetric', 'Uniform'],
            correctAnswer: 1,
            explanation: 'Most data are on the left with a tail extending toward larger values, so the distribution is right-skewed. Skew is named for the tail, not for where the tall bars are.'
          },
          {
            question: 'An outlier in a dotplot appears as:',
            options: ['A dot far from the main cluster', 'A tall stack of dots at one end of the plot', 'A gap between two clusters', 'A dot at the median'],
            correctAnswer: 0,
            explanation: 'Outliers are values far from the rest of the data, so they appear as isolated dots. A tall stack is a common value, a gap between two clusters separates groups rather than marking one unusual value, and the median is a typical value.'
          },
          {
            question: 'The relative frequency histogram shows:',
            options: ['Counts in each bin', 'Proportions in each bin', 'Running totals of counts', 'The mean of each bin'],
            correctAnswer: 1,
            explanation: 'Relative frequency = count ÷ total, shown as a proportion or percent. Plain counts make an ordinary frequency histogram, and running totals or bin means are not what the bars show.'
          },
          {
            question: 'In the stemplot 5|2 3 7 (key: 5|2 = 52), the values are:',
            options: ['5.2, 5.3, 5.7', '52, 53, 57', '25, 35, 75', '5, 2, 3, 7'],
            correctAnswer: 1,
            explanation: 'Stem 5 with leaves 2, 3, 7 gives 52, 53, 57, as the key 5|2 = 52 shows. Reading leaves before stems gives 25, 35, 75, and the decimals would need a key like 5|2 = 5.2.'
          },
          {
            question: 'A bimodal histogram has:',
            options: ['One peak', 'Two peaks', 'No peaks', 'A flat top'],
            correctAnswer: 1,
            explanation: 'Bimodal means two prominent peaks, often suggesting two subgroups in the data. One peak is unimodal, and a flat top with no clear peak is approximately uniform.'
          },
          {
            question: 'When comparing distributions using graphs, you should:',
            options: ['Describe each graph in its own separate paragraph', 'Use phrases like "more spread out than"', 'Compare only the centers of the two graphs', 'Compare center and spread but ignore shape'],
            correctAnswer: 1,
            explanation: 'AP rubrics require explicit comparisons using comparative language, across shape, center, spread and unusual features. Two separate descriptions never make the comparison, and leaving out shape or spread is incomplete.'
          },
          {
            question: 'A dotplot showing 15 dots at value 5 and 1 dot at value 50 suggests:',
            options: ['A roughly uniform distribution', 'A possible outlier at 50', 'A roughly normal distribution', 'An error in how the graph was drawn'],
            correctAnswer: 1,
            explanation: 'The value 50 is far from the cluster at 5, making it a likely outlier. The heights are far from equal (not uniform), a single spike is not bell-shaped, and an unusual value is not evidence that the graph is wrong.'
          },
          {
            question: 'Which is true about histograms vs. bar charts?',
            options: ['Both are used only for categorical data', 'Histograms show quantitative data, bar charts categorical', 'Bar charts must have bars that touch', 'Histograms must have gaps between bars'],
            correctAnswer: 1,
            explanation: 'Histograms display quantitative (numerical) data; bar charts display categorical data. Histogram bars touch because the bins are consecutive intervals; bar chart bars are separated by gaps.'
          }
        ]
      }
    }
  ]
};
