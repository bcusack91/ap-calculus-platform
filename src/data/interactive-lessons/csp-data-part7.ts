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
              "scalar data, meaning a single value held in one cell of a spreadsheet",
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
              "is impossible to interpret unless the dataset is encrypted before analysis."
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
| Join | Combining datasets on a shared key. |
| Quasi-identifier | A field (or combination) that can identify an individual. |
| Data minimization | Collect only what you need. |
| Encryption at rest / in transit | Protect data on disk / on the network. |

## Common Pitfalls

- Treating correlation as causation.
- Choosing the wrong chart type.
- Forgetting metadata is also data.
- Indefinite retention without sunset clauses.
- Publishing "anonymized" data without auditing for re-identification.
      `
    },
    {
      id: "cspdata7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Combining many values into one summary (sum, mean, count) is called _______.

2) A field (or combination) that can identify a person is called a _______-identifier.

3) Collecting only the data actually needed is called data _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["aggregation", "quasi", "minimization"],
        hint1: "Roll-up.",
        hint2: "Almost-identifier.",
        hint3: "Less = safer.",
        explanation: "Aggregation = roll-up. Quasi-identifiers can re-identify. Data minimization = collect less."
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
            options: ["data quality before analysis", "compression", "TLS", "IPv6"]
          },
          {
            label: "A bar chart vs. line chart distinction matters because ___",
            options: ["the choice should match the question being asked", "they look the same", "one is encrypted", "one is faster on the wire"]
          },
          {
            label: "A \"right to be forgotten\" policy implements ___",
            options: ["data deletion at user request", "data duplication", "data encryption", "data aggregation"]
          }
        ],
        correctAnswers: ["data quality before analysis", "the choice should match the question being asked", "data deletion at user request"],
        hint1: "Quality matters.",
        hint2: "Question-driven.",
        hint3: "User control.",
        explanation: "Garbage in = garbage out. Charts should match questions. Right-to-be-forgotten = deletion."
      }
    },
    {
      id: "cspdata7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Know the data lifecycle: collect → process → store → share → archive → DELETE.
- Match chart to question.
- Watch for correlation/causation traps.
- Privacy framing: minimization + sunset + at-rest/in-transit encryption.
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
              "the school should switch its mail transport from TCP to UDP for performance."
            ],
            correctAnswer: 1,
            explanation: "Sensitive data needs access control + encryption-in-transit."
          },
          {
            question: "A research team plans to publish a dataset with ages and ZIP codes \"for transparency\". The most appropriate concern is ___",
            options: [
              "publishing aggregate ages and ZIP codes raises no meaningful re-identification risk.",
              "these quasi-identifiers can re-identify many people; aggregate or coarsen before publishing.",
              "the resulting dataset file will be too small for collaborators to download easily.",
              "the resulting dataset file will be too large for collaborators to host inexpensively."
            ],
            correctAnswer: 1,
            explanation: "Quasi-identifiers + public release = re-identification risk."
          }
        ]
      }
    }
  ]
};
