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
| **Joining** | Combine two related datasets. |
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
              "encrypting student records before any other process can read them",
              "aggregation — counting records grouped by a shared attribute",
              "compressing the underlying student-record file to save disk space",
              "routing each student record to the correct downstream system"
            ],
            correctAnswer: 1,
            explanation: "Counting by group = aggregation."
          },
          {
            question: "A scatter plot is most useful for ___",
            options: [
              "showing two variables' relationship across many records.",
              "compressing data so a long file consumes less disk space.",
              "routing packets between two endpoints across the network.",
              "encrypting messages so only the intended recipient can read them."
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

## Joining Two Datasets

You have a list of student IDs and a list of (ID, grade). To produce a joined view (name, grade), you **join** on ID. The result has both pieces of information per student.

Joins enable powerful analysis (linking voter rolls + medical records + purchase history) — and powerful re-identification.

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

2) Combining two datasets on a shared key (e.g., student ID) is called a _______.

3) A correlation in data does not necessarily mean _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["scatter", "join", "causation"],
        hint1: "Dots, two axes.",
        hint2: "SQL term.",
        hint3: "Cause vs correlation.",
        explanation: "Scatter plots show pair relationships. Joins combine datasets. Correlation ≠ causation."
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
            options: ["change over time", "comparing 3 categories", "a single value", "compressing data"]
          },
          {
            label: "A bar chart is best for ___",
            options: ["comparing categories", "change over time at high resolution", "showing causation", "encrypting data"]
          },
          {
            label: "Linking medical records to voter rolls on (ZIP, birth date, gender) demonstrates ___",
            options: ["re-identification via quasi-identifiers", "random matching", "compression", "TLS"]
          }
        ],
        correctAnswers: ["change over time", "comparing categories", "re-identification via quasi-identifiers"],
        hint1: "Time series.",
        hint2: "Bars compare.",
        hint3: "Linkage attack.",
        explanation: "Lines = trends. Bars = categories. Linkage on quasi-IDs = re-identification."
      }
    },
    {
      id: "cspdata3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Patterns Of Data Use

- Match chart to question: line/time, bar/category, scatter/relationship, histogram/distribution.
- Joins are powerful — and the seed of many privacy concerns.
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
              "a histogram of grade levels grouped into uniform-width buckets.",
              "a scatter plot whose x-axis is student name and y-axis is grade level."
            ],
            correctAnswer: 1,
            explanation: "Time-series → line chart."
          },
          {
            question: "An analyst notices that students who attend tutoring score higher on the SAT and concludes \"tutoring causes higher scores.\" The strongest critique is ___",
            options: [
              "the analysis is sound and the causal claim is well supported by the data.",
              "students who choose tutoring may differ in motivation or prior achievement — confounders.",
              "the sample is too large for any conclusion to be drawn from it confidently.",
              "the analysis ignored the network protocol used to transmit the SAT scores."
            ],
            correctAnswer: 1,
            explanation: "Confounders threaten causal claims from observational data."
          }
        ]
      }
    }
  ]
};
