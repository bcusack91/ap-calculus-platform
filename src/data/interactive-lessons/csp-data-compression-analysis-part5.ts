export const cspDataCompressionAnalysisPart5Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca5-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 5 of 7 — Challenges of Processing Data**

---

## Every Data Set Has Problems

Data sets pose challenges **regardless of size**:

| Challenge | Example |
|-----------|---------|
| **Data need cleaning** | "NYC", "New York City", and "new york" all mean the same place. |
| **Incomplete data** | Some survey takers left the age field blank. |
| **Invalid data** | A high school roster lists a student's age as 150. |
| **Sources must be combined** | Grades are in one file and attendance in another. |

Data collected through **open fields** (free typing) are often not uniform: people abbreviate, spell, and capitalize differently. **Cleaning** makes the data uniform **without changing their meaning**, for example by replacing every equivalent spelling or abbreviation with the same word.

How well data can be processed also depends on the **capabilities of the users and their tools**.
      `
    },
    {
      id: "cspdca5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A survey's \"state\" field contains \"Calif.\", \"CA\", and \"california\". What should be done before counting responses by state?",
            options: [
              "Delete every response that is not spelled exactly \"California\".",
              "Clean the data by replacing each version with the same word.",
              "Count each spelling separately, since each was typed differently.",
              "Collect more responses so that the different spellings even out."
            ],
            correctAnswer: 1,
            explanation: "Cleaning makes the data uniform without changing meaning; deleting or splitting the responses would distort the counts."
          },
          {
            question: "Which is an example of invalid data, rather than incomplete data?",
            options: [
              "A blank phone number field in a school roster",
              "An age of 150 recorded in a high school roster",
              "Two spellings of the same street in an address list",
              "A class roster that is split across two separate files"
            ],
            correctAnswer: 1,
            explanation: "An impossible value is invalid. A blank field is incomplete, different spellings need cleaning, and split files must be combined."
          }
        ]
      }
    },
    {
      id: "cspdca5-content",
      type: 'text' as const,
      content: `
## Bias in Data

Problems of **bias** are often created by the **type or source** of data being collected. If a survey about public transit is posted only on a car-owners' forum, its results will be skewed no matter how many people answer.

> 🔑 Bias is **not** eliminated by simply collecting more data. More data from the same biased source is still biased.

## Size Matters

- The **size** of a data set affects how much information can be extracted from it. A survey of 10 people reveals far less than a survey of 10,000.
- **Large data sets are difficult to process with a single computer** and may require **parallel systems** (many processors or computers working at the same time).
- **Scalability**, a system's capacity to change in size and scale to meet new demands, is an important consideration: the computing capacity of a system affects how data sets can be processed and stored.

## Worked Example

A city collects 5 years of bike-share trips: 40 million rows.

1. **Clean**: station names were typed several ways; replace each with one standard name.
2. **Check validity**: remove trips that end before they start.
3. **Note incompleteness**: some trips lack an end station; decide how to treat them and say so.
4. **Scale**: the full analysis is split across several computers working in parallel.
      `
    },
    {
      id: "cspdca5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Making data uniform without changing their meaning is called _______ the data.

2) A survey field that was left blank is an example of _______ data.

3) A system's capacity to change in size and scale to meet new demands is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["cleaning", "incomplete", "scalability"],
        hint1: "Tidying up spellings and abbreviations.",
        hint2: "Something is missing.",
        hint3: "Can the system scale?",
        explanation: "Cleaning makes data uniform. A blank field is incomplete. Scalability is the ability to grow to meet demand."
      }
    },
    {
      id: "cspdca5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Collecting more data from the same biased source ___ the bias",
            options: ["does not remove", "removes", "reverses", "cuts in half"]
          },
          {
            label: "A data set too large for one computer to process in a reasonable time may require ___",
            options: ["parallel systems", "lossy compression", "less metadata", "fewer columns"]
          },
          {
            label: "Replacing \"Calif.\" and \"CA\" with \"California\" is an example of ___",
            options: ["cleaning data", "filtering data", "compressing data", "encrypting data"]
          }
        ],
        correctAnswers: ["does not remove", "parallel systems", "cleaning data"],
        hint1: "The source is still the problem.",
        hint2: "Many processors at once.",
        hint3: "Uniform without changing meaning.",
        explanation: "Bias comes from the type or source of data, so more of the same data keeps it. Large data sets may need parallel systems. Standardizing spellings is cleaning."
      }
    },
    {
      id: "cspdca5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Data Challenges

- Know the four challenges: data need cleaning, incomplete data, invalid data, combining sources.
- Cleaning = uniform without changing meaning.
- Bias comes from the type or source of data; more data does not fix it.
- Big data sets → parallel systems and scalability.
      `
    },
    {
      id: "cspdca5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A company builds a hiring tool from 20 years of records from a period when few women were hired. Engineers propose fixing any bias by adding 20 more years of the same kind of records. Which is the best evaluation?",
            options: [
              "Adding data always removes bias, so the plan will fix the tool.",
              "More data from the same biased source will not remove the bias.",
              "Bias only comes from the code, so the records do not matter.",
              "The plan works as long as the records are stored losslessly."
            ],
            correctAnswer: 1,
            explanation: "Bias is created by the type or source of the data and is not eliminated by collecting more of the same data."
          },
          {
            question: "A research team's data set grows from 1 GB to 50 TB, and analysis on one computer would take months. Which is the most appropriate approach?",
            options: [
              "Delete most of the rows so that one computer can finish sooner.",
              "Split the processing across many computers working in parallel.",
              "Store the data with lossy compression and analyze the result.",
              "Keep using one computer, since data size does not affect time."
            ],
            correctAnswer: 1,
            explanation: "Large data sets may require parallel systems; deleting rows or using lossy storage would lose information."
          }
        ]
      }
    }
  ]
};
