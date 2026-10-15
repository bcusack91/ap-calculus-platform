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

End-to-end problems that combine variables, conditionals, loops, lists, and procedures, written in exam reference sheet pseudocode.
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
              "Loop with an early RETURN(i) on the first match; RETURN(-1) after the loop completes with no match.",
              "Loop that overwrites a result variable on every iteration; RETURN that variable after the loop ends.",
              "Loop that counts the elements greater than threshold, then RETURN that count after the loop ends.",
              "Compute LENGTH(list) and divide by threshold to obtain the index of the first matching element."
            ],
            correctAnswer: 0,
            explanation: "First-match patterns need an early RETURN. The RETURN(-1) after the loop handles \"none exists\". A count tells how many match, not where the first one is."
          },
          {
            question: "A list of test scores is already sorted from lowest to highest and has an odd length. Which plan finds the median score?",
            options: [
              "Return scores[(LENGTH(scores) + 1) / 2].",
              "Use scores[1], the first element of the sorted list.",
              "Sum every element and divide the sum by LENGTH(scores).",
              "Find the value that appears most often in the list."
            ],
            correctAnswer: 0,
            explanation: "In a sorted list with an odd length, the median is the middle element. With 1-indexing, the middle of 5 elements is index (5 + 1) / 2 = 3. Sum divided by length is the mean, not the median."
          }
        ]
      }
    },
    {
      id: "cspap6-content",
      type: 'text' as const,
      content: `
## Worked Problem 1: First Index Greater Than Threshold

\`\`\`
PROCEDURE firstGreater(list, threshold)
{
    i ← 1
    REPEAT UNTIL (i > LENGTH(list))
    {
        IF (list[i] > threshold)
        {
            RETURN(i)
        }
        i ← i + 1
    }
    RETURN(-1)
}
\`\`\`

**Trace [10, 25, 18, 30] with threshold 20:**

| i | list[i] | > 20? | Action |
|---|---------|-------|--------|
| 1 | 10 | no | continue |
| 2 | 25 | yes | RETURN(2) |

## Worked Problem 2: Average of the Top n

Goal: the list is **already sorted from largest to smallest**; average its first n values.

\`\`\`
PROCEDURE avgTopN(sortedList, n)
{
    total ← 0
    i ← 1
    REPEAT n TIMES
    {
        total ← total + sortedList[i]
        i ← i + 1
    }
    RETURN(total / n)
}
\`\`\`

**Edge cases to ask about on the exam:**

- What if n > LENGTH(sortedList)? sortedList[i] would be outside the list, which is an error.
- What if n = 0? The loop runs zero times, and total / n divides by zero.

## Worked Problem 3: Detect Duplicates

\`\`\`
PROCEDURE hasDuplicate(list)
{
    i ← 1
    REPEAT UNTIL (i ≥ LENGTH(list))
    {
        j ← i + 1
        REPEAT UNTIL (j > LENGTH(list))
        {
            IF (list[i] = list[j])
            {
                RETURN(true)
            }
            j ← j + 1
        }
        i ← i + 1
    }
    RETURN(false)
}
\`\`\`

**Counting steps:** each element is compared with every element after it. For 4 elements that is 3 + 2 + 1 = 6 comparisons; for n elements it is about n × n ÷ 2. That grows like a square, which is still a **reasonable** (polynomial) amount of time.
      `
    },
    {
      id: "cspap6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) For "first occurrence" problems, the loop body should _______ on the first match.

2) In the worst case, how many times does hasDuplicate compare list[i] = list[j] for a list of 5 elements? _______

3) When dividing by n, you must guard against n equal to _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["return", "10", "0"],
        hint1: "Exit the procedure immediately.",
        hint2: "4 + 3 + 2 + 1.",
        hint3: "Dividing by this is undefined.",
        explanation: "An early RETURN handles first-match problems. With 5 elements, the first is compared with 4 others, the second with 3, and so on: 4 + 3 + 2 + 1 = 10. Always guard a divisor that could be 0."
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
            label: "firstGreater([10, 25, 18, 30], 30) returns ___",
            options: ["-1", "4", "0", "30"]
          },
          {
            label: "firstGreater([10, 25, 18, 30], 5) returns ___",
            options: ["1", "4", "0", "-1"]
          },
          {
            label: "avgTopN([100, 90, 80, 50], 2) returns ___",
            options: ["95", "80", "50", "90"]
          }
        ],
        correctAnswers: ["-1", "1", "95"],
        hint1: "Strict >; 30 > 30 is false.",
        hint2: "The first element already passes.",
        hint3: "(100 + 90) / 2.",
        explanation: "Strict comparisons exclude equality, so no element is greater than 30. The first element, 10, is already greater than 5, so index 1 is returned. The top two values are 100 and 90, which average to 95."
      }
    },
    {
      id: "cspap6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Problem-Solving

1. Read the problem twice; underline what is RETURNed.
2. Identify the **pattern** (first match? for-all? accumulator? every pair?).
3. Sketch a short trace table on the smallest example.
4. Write the procedure header first; the body fills in around RETURN.
5. Check at least one **edge case** (empty list, n = 0, no match) before finalizing.
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
            question: "Procedure twoSum(list, target) should return true if the values at any two different positions in list add up to target. Which approach is correct?",
            options: [
              "Compare each element only with the element right after it.",
              "Add up the whole list and compare that total with target.",
              "Check every pair of elements and stop at the first pair that works.",
              "Check whether the value target appears somewhere in the list."
            ],
            correctAnswer: 2,
            explanation: "The two values can be anywhere in the list, so every pair of positions must be checked (a nested loop like hasDuplicate). Checking only neighbors misses pairs that are far apart."
          },
          {
            question: "hasDuplicate is run on a list of 1,000 values that contains no duplicates. About how many comparisons does it make?",
            options: [
              "About 1,000",
              "About 2,000",
              "About 500,000",
              "About 10"
            ],
            correctAnswer: 2,
            explanation: "Each value is compared with every value after it: 999 + 998 + … + 1, which is about 1,000 × 1,000 ÷ 2 = 500,000. That square growth is still a reasonable (polynomial) running time."
          }
        ]
      }
    }
  ]
};
