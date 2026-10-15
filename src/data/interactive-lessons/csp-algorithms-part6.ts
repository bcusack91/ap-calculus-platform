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
              "A filter that skips zeros and an accumulator for sum and count",
              "A loop that doubles each score and a binary search for zeros",
              "Two minimum trackers, one for scores and one for zeros",
              "A sort of the scores and a count of the largest values"
            ],
            correctAnswer: 0,
            explanation: "Skip zeros = filter. Sum + count = accumulator. Average = sum / count."
          },
          {
            question: "When dividing the running sum by the count, what edge case must you guard against?",
            options: [
              "The list having already been sorted in ascending order",
              "The count being 0, so no average can be computed",
              "The sum being negative while the count is positive",
              "The list containing a great many duplicate scores"
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

\`\`\`
PROCEDURE averageNonzero(scores)
{
    total ← 0
    count ← 0
    FOR EACH s IN scores
    {
        IF (s ≠ 0)
        {
            total ← total + s
            count ← count + 1
        }
    }
    IF (count = 0)
    {
        RETURN(0)
    }
    RETURN(total / count)
}
\`\`\`

**Test traces:**

| Input | total | count | Result |
|-------|-------|-------|--------|
| [80, 0, 90, 100] | 270 | 3 | 90 |
| [0, 0] | 0 | 0 | 0 (guard) |
| [50] | 50 | 1 | 50 |

## Worked Problem: Detecting a Pattern

Goal: return true if a list contains two consecutive equal elements.

\`\`\`
PROCEDURE hasRun(list)
{
    i ← 2
    REPEAT UNTIL (i > LENGTH(list))
    {
        IF (list[i] = list[i - 1])
        {
            RETURN(true)
        }
        i ← i + 1
    }
    RETURN(false)
}
\`\`\`

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
            question: "A procedure mode(list) returns the most common value. For each element, it loops over the whole list to count how many times that element appears, keeping the best count. For a list of 1,000 elements, about how many comparisons does it make?",
            options: [
              "2,000 comparisons, since there are two loops",
              "1,000 comparisons, since the list is traversed once",
              "1,000,000 comparisons, a reasonable number of steps",
              "1,000,000 comparisons, an unreasonable number of steps"
            ],
            correctAnswer: 2,
            explanation: "Each of the 1,000 elements is compared with all 1,000 elements: 1,000 × 1,000 = 1,000,000. That grows like $n^{2}$, which is polynomial, so it is still a reasonable running time."
          },
          {
            question: "A procedure should return true if at least one element of list is greater than every element of other. Which structure is most efficient and correct?",
            options: [
              "Find the maximum of other once, then compare each x in list to it.",
              "Use a nested loop comparing every element of list to every element of other.",
              "Sort both lists, then compare the first element of list with the first of other.",
              "Pick one random element of list and compare it to the maximum of other."
            ],
            correctAnswer: 0,
            explanation: "Finding the maximum of other once takes about m steps, and one pass over list takes about n more, so about n + m steps in all; comparing every pair takes about n × m."
          }
        ]
      }
    }
  ]
};
