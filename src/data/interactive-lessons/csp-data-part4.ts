export const cspDataPart4Data = {
  topicSlug: "csp-data",
  sections: [
    {
      id: "cspdata4-intro",
      type: 'text' as const,
      content: `
# 📊 Data

**Part 4 of 7 — Connections & Interactions**

---

## Data Connects Across CSP

| Connection | Why |
|-----------|-----|
| Data ↔ Programs | Data are stored in variables and lists and passed to and from procedures. |
| Data ↔ Internet | Data flow over networks in packets. |
| Data ↔ Security | Data must be protected from unauthorized access. |
| Data ↔ Impact | Decisions about data collection affect privacy, fairness, and trust. |
      `
    },
    {
      id: "cspdata4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program stores 30 students' test scores so it can compute the class average. Which is the most appropriate way to store them?",
            options: [
              "In 30 separately named variables, one for each score",
              "In one list, so a single loop can process every score",
              "In the file's metadata, since the scores describe the file",
              "In one variable that is overwritten by each new score"
            ],
            correctAnswer: 1,
            explanation: "A list groups related values so a FOR EACH loop can process all of them, however many there are."
          },
          {
            question: "A medical study collects identifying data; a researcher loses a laptop with the dataset. The most accurate framing is ___",
            options: [
              "no concern, since the laptop will probably never be powered on again.",
              "a privacy and security incident that encryption and gathering less data would limit.",
              "a hardware concern only, since the data on the device is irrelevant to anyone else.",
              "an accuracy problem, since the study's results can no longer be checked or reproduced."
            ],
            correctAnswer: 1,
            explanation: "Lost device with sensitive data is a privacy/security incident."
          }
        ]
      }
    },
    {
      id: "cspdata4-content",
      type: 'text' as const,
      content: `
## Data in Programs

A list lets one loop handle any amount of data:

\`\`\`
total ← 0
FOR EACH s IN scores
{
    total ← total + s
}
average ← total / LENGTH(scores)
\`\`\`

The same code works for 5 scores or 5,000, which is why programs store related data in lists.

## Personal Data and Privacy

**Personally identifiable information (PII)** is information about an individual that identifies, links, relates, or describes them: a Social Security number, age, race, phone number, medical or financial information, biometric data.

| Risk | Example |
|------|---------|
| Combining data | Separate pieces such as location, cookies, and browsing history can be aggregated to create knowledge about one person. |
| Hard to delete | Once information is placed online, it is difficult to delete. |
| Misuse | PII can be used to stalk or steal the identity of a person or to plan other crimes. |
| Unintended use | An email can be forwarded and a post can be seen by a future employer. |

PII also has benefits: stored payment details simplify online purchases, and personal data can improve a user's online experience. Collecting only the data a program actually needs, and encrypting what it keeps, reduces the risk.
      `
    },
    {
      id: "cspdata4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Information that identifies, links, relates, or describes a person is abbreviated _______.

2) A program that processes 30 scores with one loop should store them in a _______.

3) Once information is placed online, it is difficult to _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["PII", "list", "delete"],
        hint1: "Personally identifiable information.",
        hint2: "An ordered collection of values.",
        hint3: "Removing it for good is hard.",
        explanation: "PII = personally identifiable information. Lists hold related values for loops. Online information is hard to delete."
      }
    },
    {
      id: "cspdata4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A student's phone number and home address are examples of ___",
            options: ["PII", "metadata", "lossy data", "redundancy"]
          },
          {
            label: "Combining a person's location history, cookies, and browsing history can ___",
            options: ["create knowledge about that person", "make that person fully anonymous", "remove the need for any encryption", "reveal only the device's model"]
          },
          {
            label: "Encrypting a stored data set mainly helps prevent ___",
            options: ["unauthorized access to the data", "the data from being backed up", "errors during data collection", "bias in the collected data"]
          }
        ],
        correctAnswers: ["PII", "create knowledge about that person", "unauthorized access to the data"],
        hint1: "It identifies a specific person.",
        hint2: "Disparate data can be aggregated.",
        hint3: "Encryption encodes data so others can't read it.",
        explanation: "Phone numbers and addresses are PII. Aggregated personal data reveal a lot about an individual. Encryption prevents unauthorized access."
      }
    },
    {
      id: "cspdata4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Data

- Related values belong in a list so one loop can process them.
- Know what counts as PII and why combining data raises privacy risk.
- Online information is hard to delete; collecting less data lowers the risk.
- Encryption protects stored or transmitted data from unauthorized access.
      `
    },
    {
      id: "cspdata4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A streaming service stores 10 years of every user's every click. The most CSP-aligned critique is ___",
            options: [
              "storage is cheap, so keeping click logs forever is fine.",
              "keeping behavioral data that long creates privacy and breach risk.",
              "encrypting the logs alone removes all of the risk.",
              "click logs are anonymous, so keeping them carries no risk."
            ],
            correctAnswer: 1,
            explanation: "Years of behavior can be combined to learn a great deal about each user, and the longer it is kept, the more there is to expose."
          },
          {
            question: "A school app stores each student's name, birth date, and home address. Which is the most accurate description of the risk?",
            options: [
              "The data carry no risk, since they are stored on a school server.",
              "This PII could be used to steal identities if the data were exposed.",
              "Only the birth dates are PII, so the other fields carry no real risk.",
              "The only risk is that the file may become too large to store easily."
            ],
            correctAnswer: 1,
            explanation: "Names, birth dates, and addresses are PII, which can be used to steal an identity or aid other crimes."
          }
        ]
      }
    }
  ]
};
