export const cspAlgorithmsPart6Data = {
  topicSlug: "csp-algorithms",
  sections: [
    {
      id: "cspalg6-intro",
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 6 of 7 — Problem-Solving Workshop**

---

## Algorithms Workshop

Walk through end-to-end problems that combine sequence, selection, iteration, lists, and procedures — exactly the style of CED FRQs.
      `
    },
    {
      id: "cspalg6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "You need to compute the average of a list of test scores, ignoring zeros. Which two patterns must you combine?",
            options: [
              "Filter (skip zeros) and accumulator (sum + count).",
              "Map and binary search.",
              "Two min trackers.",
              "Sort and count."
            ],
            correctAnswer: 0,
            explanation: "Skip zeros = filter. Sum + count = accumulator. Average = sum / count."
          },
          {
            question: "When dividing the running sum by the count, what edge case must you guard against?",
            options: [
              "The list being sorted.",
              "The count being 0 (avoid divide-by-zero).",
              "The sum being negative.",
              "The list having duplicates."
            ],
            correctAnswer: 1,
            explanation: "If every score was zero (or the list was empty), count = 0 and division explodes. Always guard with IF count > 0."
          }
        ]
      }
    },
    {
      id: "cspalg6-content",
      type: 'text' as const,
      content: `
## Worked Problem: Average Skipping Zeros

    PROCEDURE averageNonzero(scores) {
      total ← 0
      count ← 0
      FOR EACH s IN scores {
        IF (s ≠ 0) { total ← total + s; count ← count + 1 }
      }
      IF (count = 0) { RETURN 0 }
      RETURN total / count
    }

**Test traces:**

| Input | total | count | Result |
|-------|-------|-------|--------|
| [80, 0, 90, 100] | 270 | 3 | 90 |
| [0, 0] | 0 | 0 | 0 (guard) |
| [50] | 50 | 1 | 50 |

## Worked Problem: Detecting a Pattern

Goal: return TRUE if a list contains two consecutive equal elements.

    PROCEDURE hasRun(list) {
      FOR i ← 2 TO LENGTH(list) {
        IF (list[i] = list[i − 1]) { RETURN TRUE }
      }
      RETURN FALSE
    }

**Why start at 2?** list[i − 1] would be list[0] when i = 1, which doesn’t exist in 1-indexed pseudocode.
      `
    },
    {
      id: "cspalg6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When dividing two integers, you must guard against the divisor being _______.

2) When indexing list[i − 1] in a loop, the loop should start at _______ to avoid an out-of-range index in 1-indexed pseudocode.

3) A procedure that returns a Boolean usually starts with the verb _______ or "has".
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0", "2", "is"],
        hint1: "Division by this is undefined.",
        hint2: "The smallest i such that i − 1 ≥ 1.",
        hint3: "A common naming convention.",
        explanation: "Always check denominator ≠ 0. Pair-comparison loops start at 2 with 1-indexed lists. Naming Boolean procedures is.../has... makes call sites readable."
      }
    },
    {
      id: "cspalg6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "In RETURN total / count, the most common bug is when ___",
            options: ["count is 0", "total is 0", "list is sorted", "list is short"]
          },
          {
            label: "A loop comparing list[i] to list[i+1] should iterate i from 1 to ___",
            options: ["LENGTH(list) − 1", "LENGTH(list)", "LENGTH(list) + 1", "0"]
          },
          {
            label: "To return early from the first match in a procedure, use ___",
            options: ["RETURN", "DISPLAY", "CONTINUE", "BREAK"]
          }
        ],
        correctAnswers: ["count is 0", "LENGTH(list) − 1", "RETURN"],
        hint1: "Divide-by-zero.",
        hint2: "list[i+1] must be valid.",
        hint3: "AP pseudocode RETURN immediately exits the procedure.",
        explanation: "Guard count > 0. Pair loops must end one early. RETURN exits the procedure (and the loop) immediately."
      }
    },
    {
      id: "cspalg6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: FRQ-Style Tracing

- Build a **trace table** with one column per variable and one row per iteration before answering anything.
- Identify the **pattern** (accumulator? counter? min/max?) before chasing line-by-line logic.
- Always check **edge cases**: empty list, single element, all-the-same, all-zeros, negatives.
- For procedures that return a value, note whether RETURN exits early — this changes the trace.
      `
    },
    {
      id: "cspalg6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A function mode(list) returns the most common value. A student writes a doubly-nested loop that for each element counts how many times it appears, tracking the best count. For n = 100,000 inputs the program is far too slow. Which change is most appropriate?",
            options: [
              "Replace the nested loops with a single loop that uses a frequency map / dictionary keyed by element value.",
              "Add explanatory comments throughout the inner loop describing the comparison logic in clearer English.",
              "Switch the entire program to a different programming language with the same nested-loop structure preserved.",
              "Run the same nested-loop code on more powerful server hardware with faster CPU clock speeds and more RAM."
            ],
            correctAnswer: 0,
            explanation: "Algorithmic fix: O(n²) → O(n) by counting frequencies in one pass."
          },
          {
            question: "A procedure should return TRUE if at least one element of list is greater than every element of other. Which structure is most efficient and correct?",
            options: [
              "Compute max(other) once, then a single loop over list checking x > maxOther.",
              "Nested loop comparing every list element to every other element.",
              "Sort both lists, then compare.",
              "Pick a random element and compare."
            ],
            correctAnswer: 0,
            explanation: "Precomputing the max once is O(n + m); nested comparison is O(n·m)."
          }
        ]
      }
    }
  ]
};
