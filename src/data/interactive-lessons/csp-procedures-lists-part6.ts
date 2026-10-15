export const cspProceduresListsPart6Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl6-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 6 of 7 — Problem-Solving Workshop**

---

## Procedures & Lists Workshop

End-to-end problems that combine procedures, parameters, and list traversals, written in exam reference sheet pseudocode.
      `
    },
    {
      id: "csppl6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "PROCEDURE add(a, b)\n{\n    RETURN(a + b)\n}\n\nWhat does add(2, 3) return?",
            options: [
              "2",
              "5",
              "23",
              "undefined"
            ],
            correctAnswer: 1,
            explanation: "a is assigned 2 and b is assigned 3, so the procedure returns 2 + 3 = 5."
          },
          {
            question: "After **APPEND(list, x)**, how does LENGTH(list) compare with its original value?",
            options: [
              "It decreases by 1.",
              "It increases by 1.",
              "It stays the same.",
              "It doubles."
            ],
            correctAnswer: 1,
            explanation: "APPEND adds one element to the end of the list."
          }
        ]
      }
    },
    {
      id: "csppl6-content",
      type: 'text' as const,
      content: `
## Worked: Top k From a Sorted List

The list is **already sorted from highest to lowest**. Return a new list holding its first k values.

\`\`\`
PROCEDURE topK(sortedScores, k)
{
    result ← []
    i ← 1
    REPEAT k TIMES
    {
        APPEND(result, sortedScores[i])
        i ← i + 1
    }
    RETURN(result)
}
\`\`\`

If k > LENGTH(sortedScores), sortedScores[i] goes out of range and the program stops with an error. A guard at the top fixes this: IF (k > LENGTH(sortedScores)) { k ← LENGTH(sortedScores) }.

## Worked: Several Steps in One Traversal

Sum the squares of the even numbers in nums:

\`\`\`
total ← 0
FOR EACH n IN nums
{
    IF (n MOD 2 = 0)
    {
        total ← total + n * n
    }
}
\`\`\`

The IF picks the even values, and the accumulator adds each square.

## Worked: Procedures Calling Procedures

\`\`\`
PROCEDURE topAverage(sortedScores, k)
{
    best ← topK(sortedScores, k)
    RETURN(average(best))
}
\`\`\`

Here average(nums) is the sum-and-divide procedure from Part 3. For topAverage([98, 91, 85, 70], 2), topK returns [98, 91], and average returns 94.5. Each procedure solves one subproblem, and the results are combined.
      `
    },
    {
      id: "csppl6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) topK([90, 80, 70, 60], 3) returns a list of length _______.

2) After the even-squares loop runs with nums ← [1, 2, 3, 4], total is _______.

3) topAverage([88, 84, 79, 60], 2) returns _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3", "20", "86"],
        hint1: "One APPEND per repetition.",
        hint2: "Only 2 and 4 are even.",
        hint3: "Average the first two values.",
        explanation: "REPEAT 3 TIMES appends 3 values. The even values 2 and 4 give 4 + 16 = 20. The top two values, 88 and 84, average to 86."
      }
    },
    {
      id: "csppl6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Without the guard, topK([50, 40], 3) ___",
            options: ["produces an error", "returns [50, 40]", "returns [50, 40, 0]", "returns an empty list"]
          },
          {
            label: "Inside topAverage, the procedure whose call is completed first is ___",
            options: ["topK", "average", "DISPLAY", "APPEND"]
          },
          {
            label: "A list returned by one procedure can be passed directly as ___",
            options: ["an argument to another procedure", "the name of a parameter", "the number of loop repetitions", "an index into another list"]
          }
        ],
        correctAnswers: ["produces an error", "topK", "an argument to another procedure"],
        hint1: "The third repetition reads index 3 of a 2-element list.",
        hint2: "best must have a value before average can use it.",
        hint3: "Return values can feed other calls.",
        explanation: "Reading index 3 of a 2-element list is an error. topK runs first so its result can be stored in best and passed to average. A returned list can be an argument to another procedure."
      }
    },
    {
      id: "csppl6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Trace the innermost or earliest call first, then pass its result outward.
- Count APPENDs to find the length of a returned list.
- Check every index a loop can reach; a value above LENGTH(list) is an error.
- Combining a filter and an accumulator in one FOR EACH loop is a common exam pattern.
      `
    },
    {
      id: "csppl6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure calls average(nums) once for each of the n elements of nums, and average itself loops over all n elements. For n = 1,000, about how many times does the body of average's loop run in total?",
            options: [
              "About 1,000",
              "About 2,000",
              "About 1,000,000",
              "About 1,000,000,000"
            ],
            correctAnswer: 2,
            explanation: "1,000 calls each run 1,000 loop passes: 1,000 × 1,000 = 1,000,000. That square growth is polynomial, so it is still reasonable, but calling average once and saving the result would need only about 1,000 passes."
          },
          {
            question: "A team needs the average of the top 10 scores in a list of 1,000 scores that is already sorted from highest to lowest. The most reasonable approach is to ___",
            options: [
              "copy the code of both procedures directly into the place that needs the result.",
              "call the existing topK and average procedures, one after the other.",
              "average all 1,000 scores and then scale the result up by a fixed bonus.",
              "write one new procedure with no parameters that only works for 10 scores."
            ],
            correctAnswer: 1,
            explanation: "Composing existing, tested procedures reuses code: topK returns the top 10 scores, and average averages them."
          }
        ]
      }
    }
  ]
};
