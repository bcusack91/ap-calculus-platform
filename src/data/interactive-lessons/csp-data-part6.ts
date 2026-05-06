export const cspDataPart6Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata6-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 6 of 7 — Problem-Solving Workshop**

---

## Data Workshop

Apply data vocabulary to AP-style scenarios.
      `
    },
    {
      id: "cspdata6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A spreadsheet has 1000 rows. 50 are duplicates. The right first step is ___",
            options: [
              "merge duplicates by primary key, deciding how to combine fields.",
              "delete the spreadsheet entirely and ask for a fresh export from the source.",
              "compress the spreadsheet so duplicate rows take up less disk space overall.",
              "encrypt the spreadsheet so the duplicate rows can no longer be read directly."
            ],
            correctAnswer: 0,
            explanation: "Deduplication is part of data cleaning."
          },
          {
            question: "A team finds that two students share the exact same name in different rows. The right way to distinguish them is ___",
            options: [
              "guess which row is which based on the order they appear in the file.",
              "use a unique ID column (such as student ID), not the name field.",
              "silently delete one of the two rows so the duplicate apparent name disappears.",
              "encrypt the name field so the records appear different to downstream code."
            ],
            correctAnswer: 1,
            explanation: "Unique IDs are the standard way to distinguish records."
          }
        ]
      }
    },
    {
      id: "cspdata6-content",
      type: 'text' as const,
      content: `
## Worked: Cleaning A Survey

100 responses, but:

- 5 entries are blank for "age".
- 2 entries say "fish" for "age".
- 8 emails appear twice.

Steps:

1. Dedupe on email.
2. Coerce age to integer; drop or flag invalid.
3. Decide how to handle missing ages (drop / impute / flag).
4. Document each choice in a notes file.

## Worked: Choosing A Chart

| Question | Chart |
|----------|-------|
| How did sales trend in 2025? | Line. |
| Which product sold most? | Bar. |
| What's the age distribution of customers? | Histogram. |
| Do age and spending correlate? | Scatter. |

## Worked: Aggregation

To find average grade per period:

1. Group by class period.
2. Sum grades within each group.
3. Count students within each group.
4. Divide.

This is the standard "group by + aggregate" pattern of data analysis.
      `
    },
    {
      id: "cspdata6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Removing exact-duplicate rows from a dataset is called _______.

2) Replacing missing values with a calculated estimate is called _______.

3) A "group by + aggregate" pattern is the basis of most _______ analyses.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["deduplication", "imputation", "data"],
        hint1: "No duplicates.",
        hint2: "Filling gaps.",
        hint3: "Common analysis pattern.",
        explanation: "Deduplication, imputation, and group-by aggregation are core data techniques."
      }
    },
    {
      id: "cspdata6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A histogram is best for ___",
            options: ["showing the distribution of one numeric variable", "comparing categorical sales", "time-series trends", "pie share"]
          },
          {
            label: "When you need to combine \"students\" and \"grades\" tables, you ___",
            options: ["join on student ID", "concatenate file contents", "compress both", "encrypt both"]
          },
          {
            label: "Documenting cleaning decisions matters because ___",
            options: ["it makes the analysis reproducible", "it makes files smaller", "it encrypts data", "it routes packets faster"]
          }
        ],
        correctAnswers: ["showing the distribution of one numeric variable", "join on student ID", "it makes the analysis reproducible"],
        hint1: "One variable, distribution.",
        hint2: "Join key.",
        hint3: "Reproducibility.",
        explanation: "Histograms = distribution of one variable. Joins use shared keys. Documentation enables reproducibility."
      }
    },
    {
      id: "cspdata6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Match the chart to the question.
- Always document cleaning choices.
- "Group by then aggregate" is the most common analysis pattern.
- Use IDs, not names, to distinguish records.
      `
    },
    {
      id: "cspdata6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team analyzes survey data and discovers responses from one school count 10x compared to others. The most appropriate response is ___",
            options: [
              "ignore the imbalance and report the raw aggregate as if sampling were uniform.",
              "either weight the responses or note the imbalance — uneven sampling distorts conclusions.",
              "silently delete the other schools' data so the dataset matches the dominant school.",
              "encrypt the survey responses so the imbalance cannot be measured downstream."
            ],
            correctAnswer: 1,
            explanation: "Uneven samples distort conclusions; weighting or noting the imbalance is standard."
          },
          {
            question: "A health app combines step counts with sleep data and shares \"anonymized\" exports for research. A CSP-aligned concern is ___",
            options: [
              "stripping account names removes essentially all re-identification risk from the dataset.",
              "the combined behavioral pattern (steps + sleep) may uniquely identify individuals.",
              "the app is now using too little memory because the export reduced what it stored.",
              "the app should switch from TCP to UDP for transmitting the export to researchers."
            ],
            correctAnswer: 1,
            explanation: "Combined behavioral patterns are powerful quasi-identifiers."
          }
        ]
      }
    }
  ]
};
