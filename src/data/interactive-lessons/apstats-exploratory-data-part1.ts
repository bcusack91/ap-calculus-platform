export const apStatsEDAPart1Data = {
  topicSlug: 'exploratory-data-apstats',
  sections: [
    {
      id: 'exploratorydata-p1-intro',
      type: 'text' as const,
      content: `# 🔍 Exploratory Data Analysis

**Part 1 of 7 — EDA Overview**

---

### What Is EDA?

Exploratory Data Analysis (EDA) is the process of using graphs and summary statistics to understand the key features of a dataset.

### The Four Features (SOCS)

When describing a distribution, always mention:

| Feature | What to Look For |
|---------|-----------------|
| **S**hape | Symmetric, skewed left, skewed right, bimodal, uniform |
| **O**utliers | Unusual values far from the pattern |
| **C**enter | Mean, median |
| **S**pread | Range, IQR, standard deviation |

---

### Types of Data

| Type | Examples |
|------|---------|
| **Categorical** | Gender, color, yes/no |
| **Quantitative** | Height, test scores, income |

### Graphs for Categorical vs. Quantitative

- Categorical: bar chart, pie chart
- Quantitative: histogram, stemplot, boxplot, dotplot`
    },    {
      id: 'exploratorydata-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'When describing a distribution, SOCS stands for:',
            options: ['Sum, Origin, Count, Slope', 'Shape, Outliers, Center, Spread', 'Standard deviation, Outliers, Correlation, Skewness', 'Sample, Observation, Category, Scale'],
            correctAnswer: 1,
            explanation: 'SOCS: Shape, Outliers, Center, Spread — the four features to describe in any distribution.'
          },
          {
            question: 'Which graph is best for quantitative data?',
            options: ['Bar chart', 'Pie chart', 'Histogram', 'None of these'],
            correctAnswer: 2,
            explanation: 'Histograms display the distribution of quantitative data. Bar charts are for categorical data.'
          },
          {
            question: 'A distribution skewed right has:',
            options: ['A long tail to the left', 'A long tail to the right', 'Equal tails', 'No tail'],
            correctAnswer: 1,
            explanation: 'Right-skewed = long right tail. Mean > median. Examples: income, home prices.'
          }
        ]
      }
    },    {
      id: 'exploratorydata-p1-input',
      type: 'input-boxes' as const,
      content: `
**Data Classification** 🧮

Classify each as categorical (C) or quantitative (Q):

**1)** Zip code

**2)** Temperature in degrees Fahrenheit

**3)** Number of siblings
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['C', 'Q', 'Q'],
        hint1: 'Although numeric, zip codes are labels',
        hint2: 'Measured on a continuous scale',
        hint3: 'Counted, but can be ordered/averaged',
        explanation: '1) C — zip codes are labels, not measurable quantities. 2) Q — temperature is measured numerically. 3) Q — number of siblings is a count.'
      }
    }
  ]
};
