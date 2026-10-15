export const cspDataCompressionAnalysisPart6Data = {
  topicSlug: "csp-data-compression-analysis",
  sections: [
    {
      id: "cspdca6-intro",
      type: 'text' as const,
      content: `
# 🗜️ Data Compression & Analysis

**Part 6 of 7 — Problem-Solving Workshop: Using Programs With Data**

---

## Four Ways Programs Extract Information

| Process | Example |
|---------|---------|
| **Transform** every element | Double every number in a list; add a parent's email to every student record. |
| **Filter** the data set | Keep only the positive numbers; keep only students who signed up for band. |
| **Combine or compare** | Add up a list of numbers; find the student with the highest GPA. |
| **Visualize** | Show the data as a chart, graph, or other visual. |

Tools such as **spreadsheets**, **search tools**, and **data filtering systems** help people organize data, find information efficiently, and recognize patterns. Programs are used **iteratively and interactively**: you run a program, look at the result, adjust, and run it again.

A filter in AP pseudocode:

\`\`\`
scores ← [72, 95, 88, 60, 91]
high ← []
FOR EACH s IN scores
{
    IF (s ≥ 90)
    {
        APPEND(high, s)
    }
}
DISPLAY(high)
\`\`\`
      `
    },
    {
      id: "cspdca6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "What does the filter program above display?",
            options: [
              "[95, 88, 91]",
              "[95, 91]",
              "[72, 60]",
              "[91, 95]"
            ],
            correctAnswer: 1,
            explanation: "Only 95 and 91 are at least 90, and APPEND adds them in the order the loop reaches them."
          },
          {
            question: "A teacher wants a new list in which every quiz score is increased by 5. Which process is this?",
            options: [
              "filtering by one condition",
              "transforming each element",
              "combining two data sources",
              "cleaning the abbreviations"
            ],
            correctAnswer: 1,
            explanation: "Changing every element of a data set in the same way is a transformation."
          }
        ]
      }
    },
    {
      id: "cspdca6-content",
      type: 'text' as const,
      content: `
## Worked: Transform

\`\`\`
prices ← [4, 10, 7]
doubled ← []
FOR EACH p IN prices
{
    APPEND(doubled, p * 2)
}
\`\`\`

After the loop, doubled is [8, 20, 14].

## Worked: Combine or Compare

Find the highest GPA in a list (lists on the AP exam start at index 1):

\`\`\`
best ← gpas[1]
FOR EACH g IN gpas
{
    IF (g > best)
    {
        best ← g
    }
}
DISPLAY(best)
\`\`\`

## Worked: Patterns Emerge

Combining data sources, **clustering** data (grouping similar items, such as customers with similar buying habits), and **classifying** data (sorting items into categories) are all parts of using programs to gain insight. Patterns often appear only **after** the data are transformed, for example after converting raw timestamps into "hour of the day" and counting trips per hour.
      `
    },
    {
      id: "cspdca6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Keeping only the elements of a data set that meet a condition is called _______.

2) After the transform code runs on [4, 10, 7], the second element of doubled is _______.

3) After the filter program at the top of this part runs, LENGTH(high) is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["filtering", "20", "2"],
        hint1: "Like a coffee filter, it lets only some things through.",
        hint2: "10 × 2.",
        hint3: "Count the scores that are at least 90.",
        explanation: "Filtering keeps matching elements. doubled = [8, 20, 14], so its second element is 20. high = [95, 91] has length 2."
      }
    },
    {
      id: "cspdca6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Finding the student with the highest GPA is an example of ___",
            options: ["combining or comparing data", "transforming every element", "filtering the data set", "cleaning the data set"]
          },
          {
            label: "A spreadsheet that sorts and charts sales by month mainly helps users ___",
            options: ["find trends in the information", "compress the data losslessly", "remove bias from the data", "encrypt the sales records"]
          },
          {
            label: "Grouping customers with similar buying habits is called ___ the data",
            options: ["clustering", "cleaning", "compressing", "encrypting"]
          }
        ],
        correctAnswers: ["combining or comparing data", "find trends in the information", "clustering"],
        hint1: "One answer comes from comparing every element.",
        hint2: "Spreadsheets organize and reveal trends.",
        hint3: "Similar items end up in the same cluster.",
        explanation: "Finding a maximum compares elements. Spreadsheets help organize and find trends. Grouping similar items is clustering."
      }
    },
    {
      id: "cspdca6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Programs and Data

- Name the process: transform, filter, combine/compare, or visualize.
- A filter = FOR EACH + IF + APPEND into a new list. A transform = FOR EACH + APPEND of a changed value.
- Trace code carefully: lists start at index 1, and APPEND adds to the end.
- Programs are used iteratively and interactively; insight comes from running, inspecting, and adjusting.
      `
    },
    {
      id: "cspdca6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**

Use this program for the first question.

\`\`\`
temps ← [50, 68, 75, 59]
warm ← 0
FOR EACH t IN temps
{
    IF (t > 60)
    {
        warm ← warm + 1
    }
}
DISPLAY(warm)
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: "What does the program display?",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            correctAnswer: 1,
            explanation: "Only 68 and 75 are greater than 60, so warm is increased twice."
          },
          {
            question: "A researcher runs a program on a data set, notices an odd pattern in the output, changes the filter condition, and runs it again. This best illustrates that ___",
            options: [
              "a program must be correct on its first run to be useful",
              "programs are used iteratively and interactively to gain insight",
              "filtering a data set always removes any bias it contains",
              "data must be compressed before a program can process them"
            ],
            correctAnswer: 1,
            explanation: "Processing data is an iterative, interactive process: each run can suggest the next question to ask."
          }
        ]
      }
    }
  ]
};
