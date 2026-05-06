export const cspVariablesControlPart2Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc2-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 2 of 7 — Key Processes**

---

## Variables Are Named Containers For Values

A variable is a name bound to a value in memory. Programs use variables to **store, retrieve, and update** information as they run.

| Statement | Effect |
|-----------|--------|
| **score ← 0** | Create variable score, set to 0. |
| **score ← score + 10** | Read current score, add 10, store back. |
| **name ← "Alex"** | Bind a string to name. |

The arrow ← (or = in many languages) is **assignment**, not equality.
      `
    },
    {
      id: "cspvc2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "After **x ← 5** then **x ← x + 3**, what is x?",
            options: [
              "5",
              "8",
              "53",
              "undefined"
            ],
            correctAnswer: 1,
            explanation: "Read x (5), add 3, store back → 8."
          },
          {
            question: "What does **x ← y** do?",
            options: [
              "Tests whether x is currently equal to y and returns true or false.",
              "Copies y's value into x; y is left unchanged by the operation.",
              "Swaps x and y so each takes the value the other previously held.",
              "Deletes the variable x from memory and frees its storage slot."
            ],
            correctAnswer: 1,
            explanation: "Assignment is one-way: copy y into x."
          }
        ]
      }
    },
    {
      id: "cspvc2-content",
      type: 'text' as const,
      content: `
## Data Types A Variable Can Hold

| Type | Example |
|------|---------|
| Integer | 42, -7 |
| Floating-point | 3.14, -0.5 |
| Boolean | true, false |
| String | "hello" |
| List | [1, 2, 3] |

Some languages enforce types strictly (Java, Rust); others are flexible (Python, JavaScript). AP CSP pseudocode is flexible.

## Control Flow: Sequencing, Selection, Iteration

| Construct | Pattern |
|-----------|---------|
| **Sequencing** | Step 1, then step 2, then step 3. |
| **Selection** | IF condition THEN ... ELSE ... |
| **Iteration** | REPEAT n TIMES ... or REPEAT UNTIL condition ... |

Every algorithm in AP CSP can be expressed using just these three building blocks.

## Boolean Logic

Conditions evaluate to true or false. Combine with AND / OR / NOT.

| Expression | Truth |
|-----------|-------|
| **age ≥ 18** | true if age is at least 18 |
| **NOT (x = 0)** | true if x is not 0 |
| **(a > 0) AND (a < 100)** | true if a is in (0, 100) |
| **(role = "admin") OR (role = "owner")** | true if either |

## Short Walk-through

    total ← 0
    FOR EACH grade IN gradeList:
      total ← total + grade
    average ← total / LENGTH(gradeList)

This computes the average using sequencing + iteration + variables.
      `
    },
    {
      id: "cspvc2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A name bound to a value in memory is called a _______.

2) The three core control structures are sequencing, selection, and _______.

3) A condition that evaluates to true or false is called a _______ expression.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["variable", "iteration", "Boolean"],
        hint1: "Container.",
        hint2: "Loop concept.",
        hint3: "True/false.",
        explanation: "Variables, the three control structures, and Boolean logic are CSP fundamentals."
      }
    },
    {
      id: "cspvc2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "After **a ← 7**, **b ← a**, **a ← 3**, the value of b is ___",
            options: ["7", "3", "10", "undefined"]
          },
          {
            label: "The expression **(x > 0) AND (x < 10)** is true when ___",
            options: ["x is strictly between 0 and 10", "x is exactly 0", "x is exactly 10", "x is negative"]
          },
          {
            label: "A FOR EACH loop is most appropriate when ___",
            options: ["you want to do something with every item in a list", "you need to repeat exactly 5 times", "you need to wait for an event", "you need to call a procedure"]
          }
        ],
        correctAnswers: ["7", "x is strictly between 0 and 10", "you want to do something with every item in a list"],
        hint1: "Snapshot at assignment.",
        hint2: "AND requires both.",
        hint3: "List traversal.",
        explanation: "Assignment captures current value. AND needs both conditions. FOR EACH = list traversal."
      }
    },
    {
      id: "cspvc2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Variables & Control

- "What is x after these statements?" — trace step-by-step; assignment is left ← right.
- "Which loop fits?" — fixed count = REPEAT n TIMES; condition = REPEAT UNTIL; list = FOR EACH.
- "Compound condition" — AND requires both; OR requires either.
      `
    },
    {
      id: "cspvc2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program needs to print all even numbers from 1 to 100. The most appropriate construct is ___",
            options: [
              "no loop — just write 50 separate sequential print statements one per even number.",
              "iteration with selection inside (loop 1..100, IF n MOD 2 = 0 print n).",
              "recursion only, with each call deciding whether to print and recursing on n+1.",
              "no selection at all — just iterate 1..100 and print every value."
            ],
            correctAnswer: 1,
            explanation: "Iterate, then test each value with selection."
          },
          {
            question: "A program checks **(age ≥ 13) AND (parentConsent = true)**. For a 12-year-old with parent consent, the result is ___",
            options: [
              "true, since one of the two conditions is satisfied by the parent consent.",
              "false, since AND requires both conditions and the age check fails.",
              "undefined, since AND with one false operand cannot be evaluated.",
              "depends on the parent's mood at the moment the check is performed."
            ],
            correctAnswer: 1,
            explanation: "AND requires both; first condition fails → false."
          }
        ]
      }
    }
  ]
};
