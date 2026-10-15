export const cspAlgorithmsProgrammingPart3Data = {
  topicSlug: "csp-algorithms-programming",
  sections: [
    {
      id: "cspap3-intro",
      type: 'text' as const,
      content: `
# 💻 Algorithms & Programming

**Part 3 of 7 — Patterns & Examples**

---

## Programming Patterns You Will See Again and Again

Once you can translate algorithms into programs, you'll notice the same shapes recur. The AP exam tests these patterns directly.

| Pattern | Purpose |
|---------|---------|
| **Guard clause** | Return early on bad input so the main logic stays clean. |
| **Loop with accumulator** | Build a sum, product, count, or list. |
| **Helper procedure** | Hide a sub-task behind a name. |
| **Boolean flag** | Track "did this happen?" across iterations. |
      `
    },
    {
      id: "cspap3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure should return 0 immediately if its input list is empty. Which structure is best?",
            options: [
              "IF (LENGTH(list) = 0) { RETURN(0) } as the first statement of the procedure",
              "IF (LENGTH(list) = 1) { RETURN(0) } as the first statement of the procedure",
              "No check at all, letting the main loop fail on the empty input",
              "IF (LENGTH(list) > 0) { RETURN(0) } as the first statement of the procedure"
            ],
            correctAnswer: 0,
            explanation: "A guard clause at the top, IF (LENGTH(list) = 0) { RETURN(0) }, rejects the empty list before any other work, so the main code can assume valid data. Testing = 1 or > 0 would return 0 for the wrong lists."
          },
          {
            question: "A loop should set a flag found ← true the first time list[i] = target. Which approach guarantees correctness AND avoids unnecessary work?",
            options: [
              "Set found ← true inside the IF and continue iterating through the rest of the list anyway.",
              "Set found ← true inside the IF and RETURN right away once the first match is found.",
              "Initialize found ← true before the loop even starts and let the loop body verify each element.",
              "Set found ← list[i] when found, so the variable holds the matching value rather than a Boolean."
            ],
            correctAnswer: 1,
            explanation: "Returning on the first match is correct, and it skips the rest of the list, so the loop does fewer steps when a match appears early."
          }
        ]
      }
    },
    {
      id: "cspap3-content",
      type: 'text' as const,
      content: `
## Worked Pattern: Boolean Flag

    PROCEDURE allPositive(nums) {
      FOR EACH n IN nums {
        IF (n ≤ 0) { RETURN(false) }
      }
      RETURN(true)
    }

**Trick:** instead of a Boolean variable, the procedure RETURNs early on the first counter-example. RETURN(true) at the end runs only when no counter-example was found. This is the cleanest "for-all" pattern.

## Worked Pattern: Helper Procedure

A complicated task becomes readable when split:

    PROCEDURE isWeekend(day) {
      RETURN((day = "Sat") OR (day = "Sun"))
    }
    PROCEDURE shouldOpenStore(day, isHoliday) {
      IF (isHoliday) { RETURN(false) }
      RETURN(NOT isWeekend(day))
    }

The shouldOpenStore reader doesn't have to think about what "weekend" means — it's been **abstracted** behind a name.

## Worked Pattern: Accumulator With Filter

    PROCEDURE sumPositive(nums) {
      total ← 0
      FOR EACH n IN nums {
        IF (n > 0) { total ← total + n }
      }
      RETURN(total)
    }

The IF inside the loop is the **filter**; total is the **accumulator**. Together they implement "sum of positive elements".
      `
    },
    {
      id: "cspap3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An IF check at the start of a procedure that exits early on bad input is called a _______ clause.

2) A small named procedure that does one sub-task and is called by other procedures is called a _______.

3) A "for-all" check is implemented by RETURNing false on the first _______-example.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["guard", "helper", "counter"],
        hint1: "It \"guards\" the main logic.",
        hint2: "Such procedures abstract details.",
        hint3: "A single counter-example disproves a universal claim.",
        explanation: "Guard clauses, helpers, and early-exit on counter-examples are core programming patterns."
      }
    },
    {
      id: "cspap3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A \"there exists\" check is implemented by RETURNing true on the first ___",
            options: ["match", "non-match", "counter-example", "comparison"]
          },
          {
            label: "When a helper is reused 5 times across a program, the main benefit is ___",
            options: ["readability and single-point-of-fix", "faster execution of each separate call", "lower memory use while the program runs", "fewer instructions executed at runtime"]
          },
          {
            label: "The accumulator pattern initializes the accumulator with the operation's ___ value",
            options: ["identity", "inverse", "maximum possible", "average"]
          }
        ],
        correctAnswers: ["match", "readability and single-point-of-fix", "identity"],
        hint1: "One match proves existence.",
        hint2: "Helpers centralize behavior.",
        hint3: "Adding 0, multiplying by 1.",
        explanation: "Existence: first match. Helpers create a single fix-point. Accumulators start at the operation identity (0 for sum, 1 for product, [] for list)."
      }
    },
    {
      id: "cspap3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Recognizing Patterns

- "Returns true if every X is Y" → for-all → early RETURN(false) on a counter-example.
- "Returns true if some X is Y" → exists → early RETURN(true) on the first match.
- "Returns the count / sum / product / list of Y" → accumulator with appropriate identity.
- Spotting the pattern in the first 5 seconds saves all the time you'd waste line-tracing a 20-line procedure.
      `
    },
    {
      id: "cspap3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A procedure should return true if any element of list is negative. The student writes:\n\nresult ← false\nFOR EACH x IN list { IF (x < 0) { result ← true } ELSE { result ← false } }\nRETURN(result)\n\nWhat is the bug?",
            options: [
              "Nothing is wrong; result correctly reports any negative element.",
              "The ELSE resets result, so only the last element decides the answer.",
              "result should start as true, since the loop only sets it to false.",
              "FOR EACH gives elements, not indexes, so x < 0 never runs."
            ],
            correctAnswer: 1,
            explanation: "The ELSE clobbers prior matches. Either remove the ELSE, or RETURN(true) on the first match."
          },
          {
            question: "A team has six places in their codebase that compute \"is this a weekend day?\". Each implements the check inline. They later need to add Friday to the weekend (cultural calendar). Which design choice would have prevented the multi-place fix?",
            options: [
              "Inlining the check, since editing all six places is only a small task.",
              "Extracting one isWeekend helper procedure that every caller uses.",
              "Renaming the variables in each copy so the checks are easier to find.",
              "Adding comments at each call site that point to the other five copies."
            ],
            correctAnswer: 1,
            explanation: "Helper procedures create a single point of change — the central abstraction win."
          }
        ]
      }
    }
  ]
};
