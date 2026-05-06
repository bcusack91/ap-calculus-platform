export const cspDataPart2Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata2-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 2 of 7 — Key Processes**

---

## What "Data" Means In Computing

Data is **information represented in a form a computer can store and process**. The same real-world fact (a temperature, a heartbeat, a customer review) becomes data only after it's been encoded into bits.

| Step | Example |
|------|---------|
| **Collect** | Sensor reads air temperature 22.4°C. |
| **Store** | Save as a 16-bit integer (×10) → 224. |
| **Process** | Average across 60 readings. |
| **Visualize / report** | Plot a chart, send an alert. |
      `
    },
    {
      id: "cspdata2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A spreadsheet of student grades stored on a school server is best described as ___",
            options: [
              "a hardware design that physically wires up the storage devices.",
              "a structured dataset of values that programs can process.",
              "an algorithm that the spreadsheet program executes on the user's data.",
              "a network protocol used for transferring rows between school servers."
            ],
            correctAnswer: 1,
            explanation: "A spreadsheet IS data — values organized in rows and columns."
          },
          {
            question: "Which step usually comes FIRST in the data pipeline?",
            options: [
              "Visualizing the results in a chart for the audience to interpret.",
              "Collecting raw data from a source such as a sensor or survey.",
              "Compressing the file so it fits within the available storage budget.",
              "Encrypting the data at rest so unauthorized users cannot read it."
            ],
            correctAnswer: 1,
            explanation: "You can't process data you haven't collected."
          }
        ]
      }
    },
    {
      id: "cspdata2-content",
      type: 'text' as const,
      content: `
## Data Has Structure

| Structure | Example |
|-----------|---------|
| **Scalar** | A single value: 7, "Alex". |
| **List / array** | Ordered values: [3, 1, 4, 1, 5]. |
| **Table** (rows × columns) | A spreadsheet. |
| **Tree** | A folder with subfolders. |
| **Graph** | A social network. |

Choosing the right structure makes algorithms simpler and faster.

## Metadata Is Data About Data

| Datum | Metadata |
|-------|----------|
| A photo | Date taken, GPS, camera model. |
| An email | Sender, recipient, subject, time. |
| A file | Size, owner, last-modified time. |

Metadata can be **as revealing** as the underlying data — sometimes more so.

## Cleaning And Validation

Real-world data is messy: typos, duplicates, missing values. Cleaning steps:

- **Remove duplicates**.
- **Handle missing values** (drop, fill with default, flag).
- **Validate ranges** (heart rate of 500 bpm is suspect).
- **Normalize formats** ("2026-05-06" vs "5/6/26").

A useful analysis depends on clean input. Garbage in → garbage out.
      `
    },
    {
      id: "cspdata2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Information represented in a form a computer can store is called _______.

2) Data ABOUT data (e.g., a photo's GPS coordinates) is called _______.

3) Removing typos, duplicates, and bad values from a dataset is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["data", "metadata", "cleaning"],
        hint1: "The whole topic.",
        hint2: "Meta + data.",
        hint3: "Quality step.",
        explanation: "Data = computer-storable info. Metadata = data about data. Cleaning preps data for use."
      }
    },
    {
      id: "cspdata2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A spreadsheet with rows = people and columns = attributes is a ___",
            options: ["table / structured dataset", "graph", "tree", "binary file"]
          },
          {
            label: "Heart rate of 500 bpm in a dataset is most likely ___",
            options: ["an outlier or data-quality issue", "a real reading", "a feature, not a bug", "an algorithm"]
          },
          {
            label: "Photo metadata that includes GPS coordinates ___",
            options: ["can identify where a person was, even if the photo is anonymized", "has no privacy implications", "cannot be removed", "replaces the photo"]
          }
        ],
        correctAnswers: ["table / structured dataset", "an outlier or data-quality issue", "can identify where a person was, even if the photo is anonymized"],
        hint1: "Rows × columns.",
        hint2: "Out-of-range value.",
        hint3: "Metadata leaks location.",
        explanation: "Tables are structured datasets. 500 bpm = outlier. GPS metadata leaks location."
      }
    },
    {
      id: "cspdata2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Data Basics

- "What kind of data is this?" — answer in terms of structure: scalar, list, table, tree, graph.
- "Garbage in, garbage out" — emphasize cleaning before analysis.
- Metadata can be as revealing as the data itself — mention this for privacy questions.
      `
    },
    {
      id: "cspdata2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A class collects screen-time data from 30 students. Five entries are blank. What's the most defensible analysis choice?",
            options: [
              "Silently treat each blank entry as a value of zero hours.",
              "Decide explicitly: drop those rows OR fill with the mean, and document the choice.",
              "Ignore the issue and run the analysis on whatever the spreadsheet returns.",
              "Discard the entire dataset and ask the class to fill out the survey again."
            ],
            correctAnswer: 1,
            explanation: "Missing-value handling must be deliberate and documented."
          },
          {
            question: "A fitness app shares \"anonymized\" exercise data including GPS routes. The most accurate privacy framing is ___",
            options: [
              "stripping names from a dataset is enough to make any later use safe.",
              "GPS routes can re-identify users by linking patterns back to home or work.",
              "no metadata is actually being collected by the fitness app in this scenario.",
              "transport-layer encryption automatically protects metadata once it has shipped."
            ],
            correctAnswer: 1,
            explanation: "GPS routes are powerful quasi-identifiers — anonymity is fragile."
          }
        ]
      }
    }
  ]
};
