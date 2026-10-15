export const cspVariablesControlPart3Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc3-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 3 of 7 — Patterns & Examples**

---

## Common Control-Flow Patterns

| Pattern | Skeleton (reference sheet pseudocode) |
|---------|---------|
| **Counter** | count ← 0, then in the loop: IF (condition) { count ← count + 1 } |
| **Accumulator** | total ← 0, then in the loop: total ← total + x |
| **Search** | found ← false, then in the loop: IF (x = target) { found ← true } |
| **Filter** | result ← [], then in the loop: IF (condition) { APPEND(result, x) } |
| **Max / min** | best ← list[1], then in the loop: IF (x > best) { best ← x } |
      `
    },
    {
      id: "cspvc3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which pattern is **total ← total + grade** part of?",
            options: [
              "Counter — adding exactly one each iteration.",
              "Accumulator — building up a running sum from each value.",
              "Search — walking the list looking for a target value.",
              "Filter — selecting matching values into a new list."
            ],
            correctAnswer: 1,
            explanation: "Building up a sum is the accumulator pattern."
          },
          {
            question: "Which pattern produces a NEW list of items meeting a condition?",
            options: [
              "Search — walking the list to find any single matching item.",
              "Counter — tallying how many items meet a condition.",
              "Filter — keeping only the matching items in a separate list.",
              "Accumulator — collapsing a list into a single summary value."
            ],
            correctAnswer: 2,
            explanation: "Filter selects items into a new list."
          }
        ]
      }
    },
    {
      id: "cspvc3-content",
      type: 'text' as const,
      content: `
## Selection Patterns

| Pattern | When |
|---------|------|
| **IF** | Do something only when a condition is true. |
| **IF / ELSE** | Two branches. |
| **IF nested inside ELSE** | Several ranked conditions, checked in order. |
| **Guard** | RETURN early on an edge case. |

## Iteration Patterns

| Pattern | Use |
|---------|-----|
| **REPEAT n TIMES** | Known number of iterations. |
| **REPEAT UNTIL (condition)** | Stop when a condition becomes true. |
| **FOR EACH item IN list** | Process each item. |
| **Nested loop** | Process every pair of items. |

## Mini-walkthrough: Find Maximum

\`\`\`
best ← scoreList[1]
FOR EACH score IN scoreList
{
    IF (score > best)
    {
        best ← score
    }
}
\`\`\`

Initialize, then update on each item — the canonical pattern for "best so far".
      `
    },
    {
      id: "cspvc3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The pattern **total ← total + x** inside a loop is called the _______ pattern.

2) A pattern that produces a NEW list of items meeting a condition is called _______.

3) A pattern that finds the largest value in a list is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["accumulator", "filter", "maximum"],
        hint1: "Build up a sum.",
        hint2: "Subset.",
        hint3: "\"Best so far\".",
        explanation: "Accumulator, filter, max — three of the most common loop patterns."
      }
    },
    {
      id: "cspvc3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A procedure that compares every element of a list with every other element uses ___",
            options: ["nested loops", "a single loop", "an IF statement", "a REPEAT UNTIL loop"]
          },
          {
            label: "An IF placed inside the ELSE block of another IF is most appropriate when ___",
            options: ["multiple ranked conditions partition the cases", "every condition must be checked independently", "the same block must run a fixed number of times", "there is only one condition with no alternative"]
          },
          {
            label: "A \"guard clause\" pattern handles ___",
            options: ["edge cases early so the main logic stays clean", "the main computation before any input checks", "every list element inside a nested loop", "errors only after the main logic finishes"]
          }
        ],
        correctAnswers: ["nested loops", "multiple ranked conditions partition the cases", "edge cases early so the main logic stays clean"],
        hint1: "Pairs need one loop inside another.",
        hint2: "Multi-way branching.",
        hint3: "Early exit.",
        explanation: "Nested loops visit pairs. An IF nested in an ELSE checks ranked conditions in order. Guards handle edge cases first."
      }
    },
    {
      id: "cspvc3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Patterns

- Recognize the loop pattern from the body: total ← total + x → accumulator; APPEND(result, x) inside an IF → filter; IF (x > best) { best ← x } → max.
- Match the selection structure to the number of branches; ranked choices use an IF nested inside an ELSE.
- Nested loops handle pairs of elements.
      `
    },
    {
      id: "cspvc3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program counts how many items in a list are negative. The right pattern is ___",
            options: [
              "a conditional counter that adds 1 for each element below 0",
              "no loop, since the count can be read from any one element",
              "sorting the list, then reporting the position of its first element",
              "an accumulator that adds every element's value to a running total"
            ],
            correctAnswer: 0,
            explanation: "Counting is a conditional counter (an accumulator that adds 1): count ← 0, then FOR EACH x IN list, IF (x < 0) { count ← count + 1 }. Adding each x would total the values instead of counting them."
          },
          {
            question: "A program finds the longest string in a list. The right pattern is ___",
            options: [
              "a best-so-far tracker that compares each string's LENGTH to the current best",
              "no loop — the longest string can be inferred from the first element directly.",
              "random selection of one element and returning it as the longest candidate.",
              "a counter that tallies how many strings are longer than the first one"
            ],
            correctAnswer: 0,
            explanation: "\"Best so far\" pattern, comparing by length."
          }
        ]
      }
    }
  ]
};
