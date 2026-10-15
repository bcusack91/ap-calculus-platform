export const cspAlgorithmsProgrammingPart7Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap7-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Algorithms & Programming

Cheat sheet of the patterns most likely to appear on exam day.
      `
    },
    {
      id: "cspap7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure parameter named n receives a copy of the caller's argument. Modifying n inside the procedure ___",
            options: [
              "changes the caller's variable as well.",
              "does not affect the caller.",
              "causes an error when the procedure ends.",
              "requires a RETURN to take effect."
            ],
            correctAnswer: 1,
            explanation: "In AP pseudocode, a parameter holds a copy of the argument's value; the caller's variable is unaffected."
          },
          {
            question: "A procedure receives an empty list. After its FOR EACH loop, the accumulator total, which started at 0, equals ___",
            options: [
              "its initial value, 0",
              "1",
              "undefined",
              "the length of a typical list"
            ],
            correctAnswer: 0,
            explanation: "FOR EACH on an empty list runs the body zero times, so the initial value is kept."
          }
        ]
      }
    },
    {
      id: "cspap7-content",
      type: 'text' as const,
      content: `
## Patterns To Recognize Instantly

| Goal | Pattern shape |
|------|---------------|
| First match | Loop with an early RETURN; a default RETURN after the loop. |
| For-all | Loop with an early RETURN(false); RETURN(true) after. |
| Exists | Loop with an early RETURN(true); RETURN(false) after. |
| Count / Sum | Start at 0, add inside the loop. |
| Min / Max | Start from list[1], compare each element. |
| Keep some elements | Start with result ← [], then APPEND(result, x) inside an IF. |
| Every pair | Nested loops; the inner loop starts one past the outer index. |

## Common Bugs

- **Off-by-one** (stopping at LENGTH(list) − 1 instead of LENGTH(list), or a pair loop reading past the end).
- **Strict vs. non-strict** (> vs ≥) — always re-read the problem statement.
- **Overwriting the first match** — missing early RETURN.
- **Empty input not handled** — guard before dividing.
- **Expecting a parameter change to reach the caller** — it will not.

## Efficiency Quick Hits

- Count the steps as the input grows: one pass over n items takes about n steps; checking every pair takes about n × n ÷ 2.
- Both of those are polynomial, so both run in **reasonable** time. Trying every possible subset or ordering is exponential or factorial: **unreasonable** for large n.
- When two procedures give the same result, prefer the one that needs fewer steps.
      `
    },
    {
      id: "cspap7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Modifying a parameter inside a procedure does NOT affect the _______.

2) A nested loop that compares each of 10 elements with every element after it makes _______ comparisons.

3) For first-match patterns, you should _______ as soon as the match is found.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["caller", "45", "return"],
        hint1: "Parameters hold copies of the arguments.",
        hint2: "9 + 8 + 7 + … + 1.",
        hint3: "Don't keep iterating.",
        explanation: "Parameters are local copies. 9 + 8 + … + 1 = 45 pair comparisons. An early RETURN gives correctness AND saves steps."
      }
    },
    {
      id: "cspap7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Checking whether an UNSORTED list contains a target requires ___",
            options: ["checking elements one by one (linear search)", "binary search on the list as it is", "looking only at the first and last elements", "comparing every pair of elements"]
          },
          {
            label: "A procedure that sets a Boolean flag every iteration but has no early RETURN is usually ___",
            options: ["vulnerable to being overwritten by later iterations", "guaranteed to stop at the first matching element", "faster because it skips the RETURN statement", "equivalent to an early-RETURN version in all cases"]
          },
          {
            label: "In a pair-comparison loop over a list of LENGTH n, the outer index should stop after ___",
            options: ["n − 1", "n", "n + 1", "0"]
          }
        ],
        correctAnswers: ["checking elements one by one (linear search)", "vulnerable to being overwritten by later iterations", "n − 1"],
        hint1: "Binary search needs sorted data.",
        hint2: "No early RETURN means later iterations decide.",
        hint3: "The inner loop starts at the outer index + 1.",
        explanation: "Without sorted data, only a linear search works. Without an early RETURN, the last iteration decides. Pair loops end the outer index one short so the inner index stays in range."
      }
    },
    {
      id: "cspap7-strategy",
      type: 'text' as const,
      content: `
## Final Programming Tips

- Always **trace** with a small example before answering loop questions.
- "Same output, fewer steps" → choose the one whose step count grows more slowly.
- "Easier maintenance / single fix point" → extract a procedure.
- "Affects users by group at scale" → think Big Idea 5.
- Use a tested library procedure, with its documentation, instead of rewriting a well-solved task.
- Code you did not write (including AI-generated code) must be acknowledged, and you remain responsible for checking it.
      `
    },
    {
      id: "cspap7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program has a procedure formatPhoneNumber(s) duplicated in 14 places, each copy with slightly different rules for different regions. Which change is most appropriate?",
            options: [
              "Add explanatory comments to all 14 copies without changing any of the code.",
              "Write one tested version with a parameter for the differences and call it everywhere.",
              "Delete 13 of the copies and keep one, whatever the differences between them.",
              "Rename each copy so that the 14 versions are easier to tell apart."
            ],
            correctAnswer: 1,
            explanation: "One procedure with a parameter keeps the regional differences while giving a single place to fix bugs. Parameters let one procedure be reused across a range of inputs."
          },
          {
            question: "A program must report how many different user IDs appear in a list of n IDs. It keeps a second list, seen, and APPENDs each ID only if a linear search of seen does not find it. How does the number of steps grow as n grows?",
            options: [
              "The same number of steps for any n",
              "At most about n × n steps, a reasonable time",
              "Twice as many steps for each ID that is added",
              "About n! steps, an unreasonable time"
            ],
            correctAnswer: 1,
            explanation: "Each of the n IDs may be compared with up to n stored IDs, so the work is at most about n × n steps. Square growth is polynomial, which the CED calls reasonable time."
          }
        ]
      }
    }
  ]
};
