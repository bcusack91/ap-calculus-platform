export const cspDataPart7Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata7-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Data

Core data concepts the AP exam tests.
      `
    },
    {
      id: "cspdata7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Data ABOUT data is called ___",
            options: [
              "scalar data, meaning a single value in one cell",
              "metadata, meaning information that describes other information",
              "compressed data, meaning a re-encoded version that fits in fewer bits",
              "lossy data, meaning a copy from which some original detail is missing"
            ],
            correctAnswer: 1,
            explanation: "Metadata = data about data."
          },
          {
            question: "A correlation between two variables ___",
            options: [
              "proves that the first variable directly causes changes in the second variable.",
              "does NOT necessarily prove one variable causes the other to change.",
              "is mathematically the same statistical concept as a causal relationship.",
              "can only exist when the two variables are measured in the same units."
            ],
            correctAnswer: 1,
            explanation: "Correlation ≠ causation."
          }
        ]
      }
    },
    {
      id: "cspdata7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Data | Computer-storable representation of information. |
| Metadata | Data about data. |
| Cleaning | Removing duplicates, fixing missing or invalid values. |
| Aggregation | Combining many values (sum, mean, count). |
| Filtering | Keeping rows that match a condition. |
| Combining sources | Merging data sets on a shared ID; often needed to draw a conclusion. |
| PII | Personally identifiable information: identifies, links, relates, or describes a person. |
| Bias | Created by the type or source of data; more data does not remove it. |
| Scalability | A system's capacity to grow to meet new demands. |

## Common Pitfalls

- Treating correlation as causation.
- Choosing the wrong chart type.
- Forgetting metadata is also data.
- Believing more data from the same source removes bias.
- Assuming that removing names makes combined personal data anonymous.
      `
    },
    {
      id: "cspdata7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Combining many values into one summary (sum, mean, count) is called _______.

2) Information that identifies or describes a specific person is abbreviated _______.

3) Making data uniform without changing their meaning is called _______ the data.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["aggregation", "PII", "cleaning"],
        hint1: "Roll-up.",
        hint2: "Personally identifiable information.",
        hint3: "Tidying the data.",
        explanation: "Aggregation = roll-up. PII identifies a person. Cleaning makes data uniform."
      }
    },
    {
      id: "cspdata7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "\"Garbage in, garbage out\" emphasizes ___",
            options: ["data quality before analysis", "larger datasets over smaller ones", "faster algorithms over accurate ones", "visualization before cleaning"]
          },
          {
            label: "A bar chart vs. line chart distinction matters because ___",
            options: ["the choice should match the question being asked", "bar charts are always more accurate than line charts", "line charts can only show one data series at a time", "the choice changes the underlying values in the data"]
          },
          {
            label: "Changing the date stored in a photo's metadata ___",
            options: ["does not change the photo itself", "also changes the photo's pixels", "deletes the photo from storage", "compresses the photo losslessly"]
          }
        ],
        correctAnswers: ["data quality before analysis", "the choice should match the question being asked", "does not change the photo itself"],
        hint1: "Quality matters.",
        hint2: "Question-driven.",
        hint3: "Metadata are separate from the primary data.",
        explanation: "Garbage in = garbage out. Charts should match questions. Edits to metadata leave the primary data unchanged."
      }
    },
    {
      id: "cspdata7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Data → information: filter, transform, combine, visualize.
- Match chart to question.
- Watch for correlation/causation traps.
- Privacy framing: PII, combining data, hard to delete once online; encryption prevents unauthorized access.
      `
    },
    {
      id: "cspdata7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A spreadsheet of student grades is shared via email attachment. The most CSP-aligned critique is ___",
            options: [
              "email attachments are inherently safe for any kind of educational data.",
              "sensitive data sent unencrypted with weak access controls risks unauthorized disclosure.",
              "the spreadsheet should simply be saved in a different file format before sending.",
              "the attachment should be printed and mailed instead, since paper cannot be copied."
            ],
            correctAnswer: 1,
            explanation: "Sensitive data needs access control + encryption-in-transit."
          },
          {
            question: "A research team plans to publish a dataset with ages and ZIP codes \"for transparency\". The most appropriate concern is ___",
            options: [
              "publishing aggregate ages and ZIP codes raises no meaningful re-identification risk.",
              "ages and ZIP codes can be linked with other data to identify people.",
              "the resulting dataset file will be too small for collaborators to download easily.",
              "the resulting dataset file will be too large for collaborators to host inexpensively."
            ],
            correctAnswer: 1,
            explanation: "Combining age and ZIP code with other public data can single out individuals, so publishing them raises privacy risk."
          }
        ]
      }
    }
  ]
};
