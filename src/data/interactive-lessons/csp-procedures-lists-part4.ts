export const cspProceduresListsPart4Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl4-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 4 of 7 — Data Abstraction and Procedural Abstraction**

---

## Lists Are Data Abstractions

**Data abstraction** manages complexity by giving a collection of data one name, without referring to the details of how it is stored. Compare:

\`\`\`
score1 ← 88
score2 ← 92
score3 ← 75
\`\`\`

\`\`\`
scores ← [88, 92, 75]
\`\`\`

With the list, one loop processes every score, and adding a fourth score changes the data, not the code. Data abstractions make a program **easier to develop and maintain**. A list can also hold different types of elements.

## Assigning One List to Another

The reference sheet says **aList ← bList** assigns a **copy** of bList to aList. After the copy, changing one list does not change the other.
      `
    },
    {
      id: "csppl4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program stores 30 quiz scores in variables s1 through s30. What is the main benefit of replacing them with one list?",
            options: [
              "The scores no longer take up any memory once they are in a list.",
              "The program no longer needs conditionals or loops of any kind.",
              "One loop can process every score, and adding one needs no new code.",
              "Each score can be read later without using an index or a loop."
            ],
            correctAnswer: 2,
            explanation: "A list lets many related values be treated as a single value, so one traversal handles them all and the code does not change when the number of scores changes."
          },
          {
            question: "bList ← [20, 40, 60]\naList ← bList\nAPPEND(bList, 80)\nDISPLAY(LENGTH(aList))\n\nWhat is displayed?",
            options: [
              "4",
              "3",
              "80",
              "60"
            ],
            correctAnswer: 1,
            explanation: "aList ← bList assigns a copy of [20, 40, 60]. APPEND changes only bList, so aList still has 3 elements."
          }
        ]
      }
    },
    {
      id: "csppl4-content",
      type: 'text' as const,
      content: `
## Procedural Abstraction

**Procedural abstraction** names a process so it can be used knowing only **what** it does, not **how**.

- **Modularity:** a program is divided into separate subprograms, and the solution to a large problem is built from solutions to smaller subproblems.
- **Parameters generalize** a procedure, so it can be reused with a range of input values.
- **Internals can change** (to be faster or clearer) without telling callers, as long as what the procedure does stays the same.

\`\`\`
PROCEDURE countAbove(nums, cutoff)
{
    count ← 0
    FOR EACH n IN nums
    {
        IF (n > cutoff)
        {
            count ← count + 1
        }
    }
    RETURN(count)
}
\`\`\`

countAbove(scores, 90) and countAbove(temperatures, 30) reuse one procedure instead of two nearly identical ones.

## Testing a Procedure

Testing uses defined inputs with expected outputs. Good test inputs include values at or just beyond the extremes of the input data.

| Call | Expected result | What it tests |
|------|-----------------|---------------|
| countAbove([95, 80, 91], 90) | 2 | a typical case |
| countAbove([90, 90], 90) | 0 | values equal to the cutoff |
| countAbove([], 90) | 0 | an empty list |
      `
    },
    {
      id: "csppl4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Giving a collection of data one name, without referring to how it is stored, is called data _______.

2) Dividing a computer program into separate subprograms is called _______.

3) countAbove([12, 45, 30, 45], 30) returns _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["abstraction", "modularity", "2"],
        hint1: "The same word as in procedural abstraction.",
        hint2: "Built from modules.",
        hint3: "Strictly greater than 30.",
        explanation: "Lists are data abstractions. Subdividing a program into subprograms is modularity. Only the two 45s are greater than 30; 30 itself is not."
      }
    },
    {
      id: "csppl4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "The parameter cutoff lets countAbove be ___",
            options: ["reused with a range of values", "called without any arguments", "run without a loop", "stored inside a list"]
          },
          {
            label: "The test countAbove([90, 90], 90) is useful because 90 is ___",
            options: ["at the boundary of the condition", "the largest possible score", "a value that causes an error", "greater than the cutoff"]
          },
          {
            label: "If countAbove's loop is rewritten but every result stays the same, the code that calls it must ___",
            options: ["change nothing", "pass extra arguments", "rename the procedure", "copy the new loop"]
          }
        ],
        correctAnswers: ["reused with a range of values", "at the boundary of the condition", "change nothing"],
        hint1: "Parameters generalize procedures.",
        hint2: "Equal values sit right on the > test.",
        hint3: "Callers depend on what, not how.",
        explanation: "Parameters let one procedure handle many inputs. Values equal to the cutoff test the boundary of n > cutoff. Procedural abstraction lets the inside change without affecting callers."
      }
    },
    {
      id: "csppl4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Abstraction

- "Manages complexity" with a list → one name for many values, one loop instead of repeated code, no code change when the amount of data changes.
- "Manages complexity" with a procedure → reuse instead of duplication, parameters for generalization, readability, and one place to fix bugs.
- aList ← bList makes a copy.
- Pick test inputs that include typical values, boundary values, and an empty list.
      `
    },
    {
      id: "csppl4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program keeps its five high scores in variables top1, top2, top3, top4, and top5. Which change best uses data abstraction?",
            options: [
              "Rename the variables first, second, third, fourth, and fifth.",
              "Add a comment above the five variables explaining each one.",
              "Store the five scores in one list and traverse it with a loop.",
              "Store only the sum of the five scores in a single variable."
            ],
            correctAnswer: 2,
            explanation: "A list gives the scores one name and lets one loop process them; renaming or commenting keeps five separate variables, and a sum loses the individual scores."
          },
          {
            question: "A teammate rewrites the inside of countAbove to use an index loop instead of FOR EACH. It returns the same result for every input. What is the effect on the rest of the program?",
            options: [
              "Every call to countAbove must be rewritten to pass an index",
              "Nothing changes for the code that calls it",
              "Each caller must now pass the length of the list as well",
              "The lists passed in must first be converted to another type"
            ],
            correctAnswer: 1,
            explanation: "Procedural abstraction lets the internals change without affecting callers, as long as what the procedure does is preserved."
          }
        ]
      }
    }
  ]
};
