export const cspProceduresListsPart2Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl2-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 2 of 7 — Key Processes**

---

## Procedures Bundle Reusable Logic

A **procedure** (a.k.a. function or method) is a named, reusable block of instructions. Define once, call many times.

    PROCEDURE greet(name)
      DISPLAY("Hello, " + name)

Calling **greet("Alex")** runs the body with name = "Alex".

| Concept | Meaning |
|---------|---------|
| **Parameter** | Variable in the procedure's definition. |
| **Argument** | Value passed in when calling. |
| **Return value** | What the procedure produces. |
| **Call** | The act of running the procedure. |
      `
    },
    {
      id: "csppl2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "In **greet(\"Alex\")**, \"Alex\" is the ___",
            options: [
              "parameter — the variable named in the procedure's definition",
              "argument — the value supplied at the call site of the procedure",
              "return value — what the procedure produces back to its caller",
              "definition — the syntactic header that names the procedure"
            ],
            correctAnswer: 1,
            explanation: "The value passed at the call site is the argument."
          },
          {
            question: "In **PROCEDURE greet(name)**, **name** is the ___",
            options: [
              "argument — the value supplied at the call site of the procedure",
              "parameter — the variable named in the procedure's definition",
              "return value — what the procedure produces back to its caller",
              "global variable — a value visible from every part of the program"
            ],
            correctAnswer: 1,
            explanation: "The variable in the definition is the parameter."
          }
        ]
      }
    },
    {
      id: "csppl2-content",
      type: 'text' as const,
      content: `
## Why Procedures Matter

| Benefit | Explanation |
|---------|-------------|
| **Reuse** | Write logic once, call from many places. |
| **Abstraction** | Caller doesn't need to know HOW it works. |
| **Testability** | Test the procedure in isolation. |
| **Readability** | A well-named procedure documents intent. |

## Lists Hold Many Values

A **list** is an ordered collection of values, accessed by index.

    grades ← [85, 92, 78, 90]
    grades[1] = 85   (in 1-indexed AP pseudocode)
    LENGTH(grades) = 4

Common list operations:

| Operation | Effect |
|-----------|--------|
| **APPEND(list, x)** | Add x at the end. |
| **INSERT(list, i, x)** | Insert x at index i. |
| **REMOVE(list, i)** | Remove element at index i. |
| **list[i]** | Read / write element i. |
| **LENGTH(list)** | Number of elements. |

## Mini-walkthrough

    PROCEDURE average(scores)
      total ← 0
      FOR EACH s IN scores:
        total ← total + s
      RETURN total / LENGTH(scores)

Now anywhere we need an average, we call **average(myList)**.
      `
    },
    {
      id: "csppl2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A named, reusable block of instructions is called a _______.

2) The variable in a procedure's definition that receives a value is called a _______.

3) In AP CSP pseudocode, the first element of a list is at index _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["procedure", "parameter", "1"],
        hint1: "Function-like.",
        hint2: "Definition-side.",
        hint3: "1-indexed.",
        explanation: "Procedure, parameter, 1-indexed lists."
      }
    },
    {
      id: "csppl2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "**APPEND(list, x)** ___",
            options: ["adds x to the end of list, increasing its length by 1", "removes x from list", "sorts list", "replaces list with x"]
          },
          {
            label: "A procedure with a RETURN value is meant to be ___",
            options: ["used as an expression whose value is the returned value", "called only as a statement", "never called", "called recursively only"]
          },
          {
            label: "Calling **LENGTH([4, 8, 15])** returns ___",
            options: ["3", "15", "27", "0"]
          }
        ],
        correctAnswers: ["adds x to the end of list, increasing its length by 1", "used as an expression whose value is the returned value", "3"],
        hint1: "Append = end.",
        hint2: "Returns are expressions.",
        hint3: "Count of elements.",
        explanation: "APPEND adds at end. RETURN procedures = expressions. LENGTH = element count."
      }
    },
    {
      id: "csppl2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Procedures & Lists

- Know the parameter / argument distinction.
- Be careful with 1-based indexing in AP pseudocode.
- LENGTH, APPEND, INSERT, REMOVE are the core list ops.
      `
    },
    {
      id: "csppl2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program calls **maxOf(grades)** in three different places. The most direct benefit of using a procedure is ___",
            options: [
              "no benefit — inlining the same code in three places would be equally maintainable.",
              "a single source of truth for \"find max\" — fix bugs once, change once, test once.",
              "compression of the program because the procedure header is shorter than the body.",
              "transport-layer speedups for whatever the program does after computing the max."
            ],
            correctAnswer: 1,
            explanation: "Procedures consolidate logic."
          },
          {
            question: "A list **prices** has 5 elements. After **APPEND(prices, 9.99)**, LENGTH(prices) is ___",
            options: [
              "4",
              "5",
              "6",
              "0"
            ],
            correctAnswer: 2,
            explanation: "APPEND adds one element."
          }
        ]
      }
    }
  ]
};
