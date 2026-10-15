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
              "merge duplicate records using a unique ID, deciding how to combine fields.",
              "delete the spreadsheet entirely and ask for a fresh export from the source.",
              "keep every row, since duplicates do not change totals.",
              "sort the rows alphabetically, which removes duplicate entries automatically."
            ],
            correctAnswer: 0,
            explanation: "Deduplication is part of data cleaning."
          },
          {
            question: "A team finds that two students share the exact same name in different rows. The right way to distinguish them is ___",
            options: [
              "guess which row is which based on the order they appear in the file.",
              "use a unique ID column such as an enrollment number, not the name.",
              "silently delete one of the two rows so the duplicate apparent name disappears.",
              "add a middle initial to one name so the two rows look different."
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

1. Remove duplicate responses (the same email twice).
2. Check that each age is a valid number; drop or flag invalid entries like "fish".
3. Decide how to handle incomplete responses with missing ages (drop, fill in, or flag).
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

This "group, then combine" pattern turns raw rows into information.
      `
    },
    {
      id: "cspdata6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Making data uniform without changing their meaning is called _______ the data.

2) A survey answer that was left blank is an example of _______ data.

3) An age entered as "fish" is an example of _______ data.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["cleaning", "incomplete", "invalid"],
        hint1: "Tidying the data.",
        hint2: "Something is missing.",
        hint3: "The value cannot be right.",
        explanation: "Cleaning makes data uniform. Missing values are incomplete data. Impossible values are invalid data."
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
            options: ["showing the distribution of one numeric variable", "comparing totals across named categories", "showing how one variable changes over time", "showing each category's share of a whole"]
          },
          {
            label: "When you need to combine \"students\" and \"grades\" tables, you ___",
            options: ["combine on student ID", "combine on student name", "paste one file after the other", "sort both by grade"]
          },
          {
            label: "Documenting cleaning decisions matters because ___",
            options: ["it makes the analysis reproducible", "it removes the need to keep raw data", "it proves the cleaned data is unbiased", "it lets the analysis run on less hardware"]
          }
        ],
        correctAnswers: ["showing the distribution of one numeric variable", "combine on student ID", "it makes the analysis reproducible"],
        hint1: "One variable, distribution.",
        hint2: "Names can repeat; IDs cannot.",
        hint3: "Reproducibility.",
        explanation: "Histograms = distribution of one variable. Combine data sets on a unique shared ID. Documentation enables reproducibility."
      }
    },
    {
      id: "cspdata6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Match the chart to the question.
- Always document cleaning choices.
- Know the challenges: cleaning, incomplete data, invalid data, combining sources.
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
              "ignore the imbalance and report the raw aggregate, since sampling is close enough to uniform.",
              "weight the data or report the imbalance, since uneven sampling distorts results.",
              "silently delete the other schools' data so the dataset matches the dominant school.",
              "add more rows from the large school so its share is clearer in the totals."
            ],
            correctAnswer: 1,
            explanation: "Uneven samples distort conclusions; weighting or noting the imbalance is standard."
          },
          {
            question: "A health app combines step counts with sleep data and shares \"anonymized\" exports for research. A CSP-aligned concern is ___",
            options: [
              "stripping account names removes essentially all re-identification risk from the dataset.",
              "linked step and sleep patterns may single out specific individuals.",
              "sleep data is not personal information, so sharing it raises no concern.",
              "researchers cannot use exports that contain no names, so the data is useless."
            ],
            correctAnswer: 1,
            explanation: "Combining separate pieces of personal data can reveal who a person is, even without a name."
          }
        ]
      }
    }
  ]
};
