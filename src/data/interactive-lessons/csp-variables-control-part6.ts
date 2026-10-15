export const cspVariablesControlPart6Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc6-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 6 of 7 — Problem-Solving Workshop**

---

## Variables & Control Workshop

Trace and design with vocabulary in hand.
      `
    },
    {
      id: "cspvc6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "After **a ← 1; b ← 2; a ← b; b ← a**, the values of (a, b) are ___",
            options: [
              "(1, 2)",
              "(2, 2)",
              "(2, 1)",
              "(1, 1)"
            ],
            correctAnswer: 1,
            explanation: "a becomes 2, then b reads the now-2 a → both are 2 (classic swap pitfall — needs a temp variable)."
          },
          {
            question: "The correct way to swap a and b in pseudocode is ___",
            options: [
              "a ← b; b ← a",
              "temp ← a; a ← b; b ← temp",
              "temp ← a; b ← a; a ← temp",
              "temp ← b; a ← b; b ← temp"
            ],
            correctAnswer: 1,
            explanation: "Save a in temp first, copy b into a, then copy the saved value into b. The other orders either overwrite a value before it is saved or copy the same value twice."
          }
        ]
      }
    },
    {
      id: "cspvc6-content",
      type: 'text' as const,
      content: `
## Worked: Trace A Loop

    sum ← 0
    i ← 1
    REPEAT 4 TIMES
    {
      sum ← sum + i
      i ← i + 1
    }

| Iter | i | sum (after) |
|------|---|-------------|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |

Final sum = 10.

## Worked: Conditions

The reference sheet has only IF and IF / ELSE, so ranked grade bands nest each IF inside the previous ELSE:

\`\`\`
IF (score ≥ 90)
{
    grade ← "A"
}
ELSE
{
    IF (score ≥ 80)
    {
        grade ← "B"
    }
    ELSE
    {
        IF (score ≥ 70)
        {
            grade ← "C"
        }
        ELSE
        {
            grade ← "F"
        }
    }
}
\`\`\`

For score = 85 → grade = "B".

## Worked: Off-By-One Caution

    i ← 1
    REPEAT UNTIL (i > LENGTH(list))
    {
      DISPLAY(list[i])
      i ← i + 1
    }

In a 1-indexed list this is fine; in a 0-indexed language, you'd need 0 to LENGTH(list) - 1. AP pseudocode is **1-indexed**.
      `
    },
    {
      id: "cspvc6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In AP CSP pseudocode, the first element of a list is at index _______.

2) To swap two variables you need a _______ variable.

3) Tracing a loop step by step is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1", "temporary", "tracing"],
        hint1: "1-indexed.",
        hint2: "Holds intermediate value.",
        hint3: "Walk through.",
        explanation: "AP CSP is 1-indexed. Swap needs temp. \"Tracing\" = step-through."
      }
    },
    {
      id: "cspvc6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A loop that sets i ← 1, repeats UNTIL (i > 5), and ends each pass with i ← i + 1 runs its body ___ times",
            options: ["5", "4", "6", "0"]
          },
          {
            label: "A loop REPEAT UNTIL false would ___",
            options: ["run forever (infinite loop)", "run zero times (skipped loop)", "run once (single pass)", "run until an error (crash)"]
          },
          {
            label: "An IF without an ELSE ___",
            options: ["skips the body when the condition is false", "runs the body once whether or not it is true", "causes an error when the condition is false", "repeats the body until the condition is true"]
          }
        ],
        correctAnswers: ["5", "run forever (infinite loop)", "skips the body when the condition is false"],
        hint1: "Inclusive range.",
        hint2: "Never-true exit.",
        hint3: "No alternate branch.",
        explanation: "The body runs with i = 1, 2, 3, 4, 5; then i > 5 is true, so 5 passes. UNTIL false = infinite. IF without ELSE just skips."
      }
    },
    {
      id: "cspvc6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop Style

- Trace by drawing a small table of variables across iterations.
- Watch for off-by-one and infinite-loop traps.
- AP pseudocode is 1-indexed.
      `
    },
    {
      id: "cspvc6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A loop intended to sum 10 numbers actually sums 11 because the index runs 0..10. This is a classic ___",
            options: [
              "syntax error, since an index cannot start at 0.",
              "off-by-one error, from a loop boundary that was not chosen carefully.",
              "overflow error, since the sum got too large.",
              "no error; summing 11 values is the usual pattern."
            ],
            correctAnswer: 1,
            explanation: "Off-by-one is one of the most common bug categories."
          },
          {
            question: "A program asks for a number and divides 100 by it. For input 0 it crashes. The most appropriate fix is ___",
            options: [
              "ignore the crash, since users rarely type zero into the prompt on purpose.",
              "check for 0 before the division and warn the user.",
              "divide 100 by the absolute value of the input so negatives cannot occur.",
              "wrap the division in a loop that repeats until the answer is not 0."
            ],
            correctAnswer: 1,
            explanation: "Boundary check = guard clause."
          }
        ]
      }
    }
  ]
};
