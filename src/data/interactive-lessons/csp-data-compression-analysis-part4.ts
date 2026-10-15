export const cspDataCompressionAnalysisPart4Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca4-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 4 of 7 — Extracting Information and Metadata**

---

## From Data to Information

**Information** is the collection of facts and patterns extracted from data. Data give us chances to identify trends, make connections, and address problems.

Two cautions the AP exam returns to again and again:

| Idea | What it means |
|------|---------------|
| **Correlation is not causation** | Processed data may show that two variables change together. That does not prove one causes the other; more research is needed to understand the relationship. |
| **One source is often not enough** | A single data source may not contain everything needed to draw a conclusion. Combining data from several sources is often necessary. |
      `
    },
    {
      id: "cspdca4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A data set shows that students who eat breakfast tend to have higher test scores. Which conclusion is best supported by the data alone?",
            options: [
              "Eating breakfast causes students to earn higher test scores.",
              "The two are correlated, but a cause has not been shown.",
              "Earning higher test scores causes students to eat breakfast.",
              "The data must contain errors, since the two are not related."
            ],
            correctAnswer: 1,
            explanation: "The data show a correlation. A correlation does not establish which variable, if either, causes the other."
          },
          {
            question: "A city wants to know whether a new bus route reduced traffic downtown. The bus ridership data alone cannot answer this. What would help most?",
            options: [
              "Collecting the same ridership data again over a longer time.",
              "Combining ridership data with traffic counts from that period.",
              "Deleting days with low ridership so the traffic trend is clearer.",
              "Replacing the ridership data with the data file's metadata."
            ],
            correctAnswer: 1,
            explanation: "A single source rarely holds everything needed; combining ridership with traffic data lets the city look for the relationship it cares about."
          }
        ]
      }
    },
    {
      id: "cspdca4-content",
      type: 'text' as const,
      content: `
## Metadata: Data About Data

**Metadata** are data that describe other data. If the data is an image, the metadata might include the date it was created, the location, or the file size.

| Data | Metadata |
|------|----------|
| A photo | Date taken, location, file size |
| A song | Artist, album, length |
| A document | Author, date last edited, number of pages |

What metadata do:

- **Find, organize, and manage information.** Searching a photo library by date or sorting songs by artist uses metadata.
- **Add useful context**, which increases the effective use of the data.
- **Give data structure**, so large collections can be organized.

> 🔑 Changing or deleting metadata does **not** change the primary data. Editing a photo's date tag leaves every pixel exactly as it was.

## Worked Example

A teacher has 2,000 class photos. She adds a tag for the event (field trip, science fair, graduation) to each photo's metadata. Now a search for "science fair" pulls up the right photos in seconds, and none of the images themselves were changed.
      `
    },
    {
      id: "cspdca4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Data that describe other data, such as a photo's file size, are called _______.

2) When two variables change together, the relationship is called a _______.

3) The facts and patterns extracted from data are called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["metadata", "correlation", "information"],
        hint1: "\"Meta\" means about.",
        hint2: "Not necessarily causation.",
        hint3: "What data become after processing.",
        explanation: "Metadata describe data. Variables that change together are correlated. Information is what we extract from data."
      }
    },
    {
      id: "cspdca4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Changing the date stored in a photo's metadata ___ the photo's pixels",
            options: ["does not change", "also changes", "permanently erases", "compresses"]
          },
          {
            label: "Sorting a music library by artist name relies on ___",
            options: ["the songs' metadata", "the songs' audio samples", "lossy compression", "a higher sample rate"]
          },
          {
            label: "Finding that two variables are correlated shows that ___",
            options: ["they change together, but a cause is not shown", "the first variable causes changes in the second", "the data set must contain a mistake somewhere", "both variables are measured in the same units"]
          }
        ],
        correctAnswers: ["does not change", "the songs' metadata", "they change together, but a cause is not shown"],
        hint1: "Metadata and primary data are separate.",
        hint2: "Artist name describes the song.",
        hint3: "Correlation is not causation.",
        explanation: "Edits to metadata leave the primary data alone. Artist names are metadata used to organize data. Correlation shows variables change together, not why."
      }
    },
    {
      id: "cspdca4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Information and Metadata

- "Does this prove X causes Y?" → No; a correlation needs more research to explain.
- "Why combine data sets?" → a single source often lacks what is needed for a conclusion.
- Metadata = data about data. They help find, organize, and manage data.
- Changing metadata does not change the primary data.
      `
    },
    {
      id: "cspdca4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A school's data show that absences rise in weeks with more rainy days. The principal concludes that rain causes absences. Which is the best critique?",
            options: [
              "The data prove that rain causes absences, so no critique is needed.",
              "A correlation alone does not show that rain is the actual cause.",
              "Attendance records are metadata, so they cannot show any kind of trend.",
              "Rainfall is analog data, so it cannot be compared with attendance."
            ],
            correctAnswer: 1,
            explanation: "The data show the two change together; more research (for example, about illness season or transportation) is needed before claiming a cause."
          },
          {
            question: "A photographer adds a keyword such as \"beach\" or \"wedding\" to each photo's metadata. What is the most likely benefit?",
            options: [
              "Each photo's image quality improves because the tag adds detail.",
              "Photos become easier to find and organize by searching the tags.",
              "Each photo file shrinks because the tag replaces some pixel data.",
              "The original image can no longer be edited by anyone else."
            ],
            correctAnswer: 1,
            explanation: "Metadata are used for finding, organizing, and managing information; adding them does not change the image itself."
          }
        ]
      }
    }
  ]
};
