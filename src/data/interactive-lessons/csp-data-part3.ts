export const cspDataPart3Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata3-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 3 of 7 — Patterns & Examples**

---

## Patterns Of Data Use

| Pattern | Example |
|---------|---------|
| **Lookup** | Find a record by ID. |
| **Aggregation** | Sum, mean, count over a group. |
| **Filtering** | Keep only rows that match a condition. |
| **Sorting** | Order by a field. |
| **Combining** | Merge two related datasets. |
| **Visualization** | Bar charts, line graphs, maps. |
      `
    },
    {
      id: "cspdata3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school registrar wants the number of students per grade. This is most directly an example of ___",
            options: [
              "encryption, since student records must be protected first",
              "aggregation, since records are counted by a shared attribute",
              "compression, since the record file is reduced to a summary",
              "filtering, since only students in one grade are kept"
            ],
            correctAnswer: 1,
            explanation: "Counting by group = aggregation."
          },
          {
            question: "A scatter plot is most useful for ___",
            options: [
              "showing two variables' relationship across many records.",
              "showing how one total splits into parts of a whole.",
              "showing one variable's change over equally spaced times.",
              "showing how often values fall into equal-width bins."
            ],
            correctAnswer: 0,
            explanation: "Scatter plots reveal correlations between two numeric variables."
          }
        ]
      }
    },
    {
      id: "cspdata3-content",
      type: 'text' as const,
      content: `
## Visualization Choices

| Question | Best chart |
|----------|-----------|
| How does X change over time? | Line chart. |
| How does each category compare? | Bar chart. |
| What's the distribution of values? | Histogram. |
| What's the relationship between X and Y? | Scatter plot. |
| What share does each part take? | Pie / donut chart (sparingly). |

Bad chart choice can mislead — exam answers reward picking the chart that matches the question.

## Combining Two Datasets

You have a list of (student ID, name) and a list of (student ID, grade). To produce (name, grade), you **combine** the two on the shared ID. The result has both pieces of information per student.

Often a single source does not contain the data needed to draw a conclusion, so combining sources is powerful. It is also a privacy risk: combining separate pieces of personal data (location, browsing history, purchases) can create knowledge about an individual.

## Insights vs. Causation

A correlation in data ≠ causation. Ice-cream sales and drowning correlate (both peak in summer); ice cream doesn't cause drowning. AP-aligned answer: data shows patterns; explaining WHY requires more than the data.
      `
    },
    {
      id: "cspdata3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A chart that best shows two variables' relationship is a _______ plot.

2) Keeping only the rows that match a condition is called _______.

3) A correlation in data does not necessarily mean _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["scatter", "filtering", "causation"],
        hint1: "Dots, two axes.",
        hint2: "Like a coffee filter.",
        hint3: "Cause vs correlation.",
        explanation: "Scatter plots show pair relationships. Filtering keeps matching rows. Correlation ≠ causation."
      }
    },
    {
      id: "cspdata3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A line chart is best for ___",
            options: ["change over time", "comparing 3 categories", "a single value", "parts of a whole"]
          },
          {
            label: "A bar chart is best for ___",
            options: ["comparing categories", "change over time at high resolution", "showing causation", "plotting two numeric variables"]
          },
          {
            label: "Linking \"anonymous\" medical records to public voter lists by ZIP code, birth date, and gender demonstrates ___",
            options: ["identifying people by combining data", "anonymizing data by removing names", "cleaning data by removing duplicates", "protecting data by encrypting fields"]
          }
        ],
        correctAnswers: ["change over time", "comparing categories", "identifying people by combining data"],
        hint1: "Time series.",
        hint2: "Bars compare.",
        hint3: "Disparate data can be aggregated.",
        explanation: "Lines = trends. Bars = categories. Combining separate pieces of personal data can identify an individual."
      }
    },
    {
      id: "cspdata3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Patterns Of Data Use

- Match chart to question: line/time, bar/category, scatter/relationship, histogram/distribution.
- Combining data sources is powerful — and the seed of many privacy concerns.
- Correlation ≠ causation. Always.
      `
    },
    {
      id: "cspdata3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school year-over-year enrollment dataset is best displayed as ___",
            options: [
              "a pie chart showing the share each grade level took in the most recent year.",
              "a line chart showing each year's total enrollment over time.",
              "a histogram of enrollment counts grouped into uniform-width buckets.",
              "a scatter plot whose x-axis is student name and y-axis is grade level."
            ],
            correctAnswer: 1,
            explanation: "Time-series → line chart."
          },
          {
            question: "An analyst notices that students who attend tutoring score higher on the SAT and concludes \"tutoring causes higher scores.\" The strongest critique is ___",
            options: [
              "the analysis is sound and the causal claim is well supported by the data.",
              "motivated or high-achieving learners may be likelier to seek extra help, a confounder.",
              "the sample is too large for any conclusion to be drawn from it confidently.",
              "the scores should have been averaged before comparing the two groups."
            ],
            correctAnswer: 1,
            explanation: "Confounders threaten causal claims from observational data."
          }
        ]
      }
    }
  ]
};
