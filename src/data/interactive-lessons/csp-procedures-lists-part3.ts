export const cspProceduresListsPart3Data = {
  topicSlug: "csp-procedures-lists",
  sections: [
    {
      id: "csppl3-intro",
      type: 'text' as const,
      content: `
# 📋 Procedures & Lists

**Part 3 of 7 — List Traversal Algorithms**

---

## Complete and Partial Traversals

**Traversing** a list means using iteration to access its elements. A **complete traversal** accesses every element; a **partial traversal** accesses only some of them, for example by RETURNing at the first match.

| Traversal | Code shape |
|-----------|-----------|
| Complete, by value | FOR EACH item IN aList { … } |
| Complete, by index | i ← 1, then REPEAT UNTIL (i > LENGTH(aList)) { … i ← i + 1 } |
| Partial | The same loop, with an early RETURN or a smaller stopping index |

FOR EACH assigns item the value of each element in order, from the first element to the last.
      `
    },
    {
      id: "csppl3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure checks the elements of [4, 0, 7, 9] in order and RETURNs as soon as it finds the value 0. This is an example of ___",
            options: [
              "a complete traversal, since the loop is able to visit every element",
              "a partial traversal, since only some of the elements are accessed",
              "a binary search, since the loop ends before the last element",
              "a parallel traversal, since two values are compared at once"
            ],
            correctAnswer: 1,
            explanation: "The loop stops after the second element, so only part of the list is accessed. Binary search needs sorted data and starts in the middle."
          },
          {
            question: "Which description matches a linear (sequential) search?",
            options: [
              "Start in the middle of sorted data and discard half each step",
              "Add every element and divide by the number of elements",
              "Compare each element with the largest value found so far",
              "Check each element in order until the target is found or none remain"
            ],
            correctAnswer: 3,
            explanation: "A linear search checks each element in order until it finds the value or has checked them all. Halving sorted data is binary search; the other two compute an average and a maximum."
          }
        ]
      }
    },
    {
      id: "csppl3-content",
      type: 'text' as const,
      content: `
## Existing List Algorithms

Knowing these existing algorithms helps you build new ones.

### Sum and Average

\`\`\`
PROCEDURE average(nums)
{
    total ← 0
    FOR EACH n IN nums
    {
        total ← total + n
    }
    RETURN(total / LENGTH(nums))
}
\`\`\`

### Minimum

\`\`\`
PROCEDURE minimum(nums)
{
    smallest ← nums[1]
    FOR EACH n IN nums
    {
        IF (n < smallest)
        {
            smallest ← n
        }
    }
    RETURN(smallest)
}
\`\`\`

### Keeping Only Some Elements

\`\`\`
PROCEDURE evensOnly(nums)
{
    result ← []
    FOR EACH n IN nums
    {
        IF (n MOD 2 = 0)
        {
            APPEND(result, n)
        }
    }
    RETURN(result)
}
\`\`\`

To build a new list from **every** element, APPEND without an IF: APPEND(doubled, n * 2).

### Linear Search

\`\`\`
PROCEDURE indexOf(aList, target)
{
    i ← 1
    REPEAT UNTIL (i > LENGTH(aList))
    {
        IF (aList[i] = target)
        {
            RETURN(i)
        }
        i ← i + 1
    }
    RETURN(-1)
}
\`\`\`

Traversing two lists at the same time with one shared index is not on the exam; exam questions traverse one list at a time.
      `
    },
    {
      id: "csppl3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) minimum([7, 3, 9, 3]) returns _______.

2) evensOnly([5, 8, 2, 7]) returns a list of length _______.

3) indexOf(["a", "b", "c"], "c") returns _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3", "2", "3"],
        hint1: "Track the smallest value seen so far.",
        hint2: "Which of 5, 8, 2, 7 are even?",
        hint3: "AP lists start at index 1.",
        explanation: "The smallest value is 3. Only 8 and 2 are even, so the new list has 2 elements. \"c\" is the third element, so its index is 3."
      }
    },
    {
      id: "csppl3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A traversal that RETURNs at the first match is a ___ traversal",
            options: ["partial", "complete", "parallel", "binary"]
          },
          {
            label: "In evensOnly, APPEND runs once for each element that ___",
            options: ["passes the IF test", "is the smallest so far", "is at an odd index", "is the first element"]
          },
          {
            label: "indexOf([4, 6, 8], 5) returns ___",
            options: ["-1", "0", "2", "3"]
          }
        ],
        correctAnswers: ["partial", "passes the IF test", "-1"],
        hint1: "It may stop before the end.",
        hint2: "APPEND is inside the IF.",
        hint3: "5 is not in the list.",
        explanation: "Stopping early makes a traversal partial. APPEND inside the IF adds only matching elements. When the target is missing, the loop finishes and RETURN(-1) runs."
      }
    },
    {
      id: "csppl3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: List Traversals

- Name the algorithm from its shape: running total → sum/average; best-so-far → min/max; APPEND inside IF → keep some elements; early RETURN of an index → linear search.
- Start a min/max tracker from list[1], not from 0, so a list of all negative (or all large) values still works.
- FOR EACH gives values, not indexes; use an index loop when the position matters.
- Check the empty list: FOR EACH runs zero times, and LENGTH(list) is 0.
      `
    },
    {
      id: "csppl3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "nums ← [3, 8, 1, 6]\nresult ← []\nFOR EACH n IN nums\n{\n    IF (n > 2)\n    {\n        APPEND(result, n * 10)\n    }\n}\nDISPLAY(LENGTH(result))\n\nWhat is displayed?",
            options: [
              "4",
              "3",
              "1",
              "30"
            ],
            correctAnswer: 1,
            explanation: "3, 8, and 6 are greater than 2, so three values (30, 80, 60) are appended. The 1 is skipped."
          },
          {
            question: "A student writes minimum but starts with smallest ← 0 instead of smallest ← nums[1]. For which list does the procedure return a wrong answer?",
            options: [
              "[-2, 4, 1]",
              "[0, 3, 8]",
              "[5, 9, 7]",
              "[-5, -1, -9]"
            ],
            correctAnswer: 2,
            explanation: "No element of [5, 9, 7] is less than 0, so smallest stays 0, which is not in the list. Lists that contain 0 or a negative value still give the right minimum."
          }
        ]
      }
    }
  ]
};
