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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When describing a distribution, SOCS stands for:',
            options: ['Sample, Outliers, Count, Slope', 'Shape, Outliers, Center, Spread', 'Skew, Order, Center, Size', 'Shape, Observations, Correlation, Scale'],
            correctAnswer: 1,
            explanation: 'SOCS: Shape, Outliers, Center, Spread, the four features to describe for any quantitative distribution, always in context. Count, slope and correlation describe other things (sample size and two-variable relationships), not the distribution of one variable.'
          },
          {
            question: 'Which graph is best for quantitative data?',
            options: ['A bar chart', 'A pie chart', 'A histogram', 'A mosaic plot'],
            correctAnswer: 2,
            explanation: 'Histograms display the distribution of a quantitative variable. Bar charts and pie charts display one categorical variable, and mosaic plots display the relationship between two categorical variables.'
          },
          {
            question: 'A distribution skewed right has:',
            options: ['A long tail to the left', 'A long tail toward larger values', 'Its peak at the right end', 'A mean less than its median'],
            correctAnswer: 1,
            explanation: 'Skew is named for the longer tail, so right-skewed means a long tail toward larger values; the peak is usually on the left. The long right tail pulls the mean ABOVE the median. Examples: income, home prices.'
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
