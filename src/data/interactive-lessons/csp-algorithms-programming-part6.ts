export const cspAlgorithmsProgrammingPart6Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap6-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 6 of 7 — Problem-Solving Workshop**

---

## Programming Workshop

End-to-end FRQ-style problems combining variables, conditionals, loops, lists, and procedures.
      `
    },
    {
      id: "cspap6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "You are asked to \"return the index of the first element in list that is greater than threshold, or -1 if none exists\". Which structure is correct?",
            options: [
              "Loop with early RETURN i on the first match; RETURN -1 after the loop completes with no match.",
              "Loop that overwrites a result variable on every iteration; RETURN that variable after the loop ends.",
              "Sort the list in ascending order, then return list[1] as the first element greater than threshold.",
              "Compute LENGTH(list) and divide by threshold to obtain the index of the first matching element."
            ],
            correctAnswer: 0,
            explanation: "First-match patterns demand early RETURN. The post-loop RETURN -1 handles \"none exists\"."
          },
          {
            question: "You need to compute the median of a list of test scores. Which two-step plan is most appropriate?",
            options: [
              "Sort the list, then return the middle element (or the average of the two middles for an even-length list).",
              "Return list[1] directly, since the first element of a sorted-by-entry list is treated as the median value.",
              "Sum every element of the list and divide the sum by the length to obtain the median test-score value.",
              "Return the most common (modal) value in the list, since the modal score serves as the median in practice."
            ],
            correctAnswer: 0,
            explanation: "Median = middle of sorted data. (Sum/length is mean, not median.)"
          }
        ]
      }
    },
    {
      id: "cspap6-content",
      type: 'text' as const,
      content: `
## Worked Problem 1: First Index Greater Than Threshold

    PROCEDURE firstGreater(list, threshold) {
      FOR i ← 1 TO LENGTH(list) {
        IF (list[i] > threshold) { RETURN i }
      }
      RETURN −1
    }

**Trace [10, 25, 18, 30] with threshold 20:**

| i | list[i] | > 20? | Action |
|---|---------|-------|--------|
| 1 | 10 | no | continue |
| 2 | 25 | yes | RETURN 2 |

## Worked Problem 2: Average Of Top-N

Goal: average the largest n values in list.

    PROCEDURE avgTopN(list, n) {
      sorted ← descendingSort(list)
      total ← 0
      FOR i ← 1 TO n { total ← total + sorted[i] }
      RETURN total / n
    }

**Edge cases to ask about on the exam:**

- What if n > LENGTH(list)? (Should clamp n.)
- What if n = 0? (Divide-by-zero — guard.)
- What if list contains non-numbers? (Type check.)

## Worked Problem 3: Detect Duplicates

    PROCEDURE hasDuplicate(list) {
      FOR i ← 1 TO LENGTH(list) − 1 {
        FOR j ← i + 1 TO LENGTH(list) {
          IF (list[i] = list[j]) { RETURN TRUE }
        }
      }
      RETURN FALSE
    }

**Efficiency note:** this is $O(n^{2})$. With a hash/dictionary it can become O(n) — a common AP exam upgrade question.
      `
    },
    {
      id: "cspap6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) For "first occurrence" problems, the loop body should _______ on first match.

2) For $O(n^{2})$ duplicate detection, an upgrade to O(n) uses a _______ to remember seen values.

3) When dividing by n, you must guard against n equal to _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["return", "dictionary", "0"],
        hint1: "Exit immediately.",
        hint2: "Hash map / set.",
        hint3: "Divide-by-this is undefined.",
        explanation: "Early return for first-match. Use a set/dictionary for O(n) duplicate detection. Always guard divisor."
      }
    },
    {
      id: "cspap6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "firstGreater on [10,25,18,30] with threshold = 30 returns ___",
            options: ["−1", "4", "0", "30"]
          },
          {
            label: "firstGreater on [10,25,18,30] with threshold = 5 returns ___",
            options: ["1", "4", "0", "−1"]
          },
          {
            label: "avgTopN([100, 50, 80, 90], 2) returns ___",
            options: ["95", "80", "50", "90"]
          }
        ],
        correctAnswers: ["−1", "1", "95"],
        hint1: "Strict >; 30 > 30 is false.",
        hint2: "First element already passes.",
        hint3: "(100 + 90) / 2.",
        explanation: "Strict comparisons exclude equality. The first match in [10,…] when threshold = 5 is index 1. Top 2 of {100,50,80,90} are 100 and 90."
      }
    },
    {
      id: "cspap6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: FRQ Problem-Solving

1. Read the problem twice; underline what is RETURNED.
2. Identify the **pattern** (first-match? for-all? accumulator? sort-then-pick?).
3. Sketch a 4-row trace table on the smallest example.
4. Write the procedure header first; the body fills in around RETURN.
5. Check at least one **edge case** before finalizing.
      `
    },
    {
      id: "cspap6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Procedure twoSum(list, target) should return TRUE if any two distinct elements sum to target. Which structure is most appropriate AND most efficient?",
            options: [
              "For each element x, check if (target − x) is in a set of already-seen values; record x in the set; return TRUE on hit.",
              "Sort the list in ascending order and then check whether each adjacent pair of elements sums to target.",
              "Use a triple-nested loop over every possible 3-tuple of list elements and check sums of every triple.",
              "Use a single loop that adds each pair of consecutive elements and returns TRUE on the first matching sum."
            ],
            correctAnswer: 0,
            explanation: "The hash-set approach is O(n) and correct for distinct-pair sum."
          },
          {
            question: "A procedure mostFrequent(list) returns the element that appears most often. The student writes a doubly-nested loop that for every element counts its occurrences, tracking the max. This is $O(n^{2})$. For n = 100,000 it times out. The most appropriate fix is to ___",
            options: [
              "replace the nested loop with a single pass that builds a frequency dictionary, then a single pass over the dictionary to find the max.",
              "switch to a faster computer with a higher clock speed and rerun the same doubly-nested loop on the larger input list.",
              "sort the list in ascending order and then guess the most frequent element from the sorted output of the data.",
              "remove half the data from the input list before the doubly-nested loop runs, then rerun on the reduced list."
            ],
            correctAnswer: 0,
            explanation: "Two linear passes (build map, scan map) is O(n) — the canonical algorithmic upgrade."
          }
        ]
      }
    }
  ]
};
