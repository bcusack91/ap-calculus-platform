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
              "changes the caller's variable.",
              "does NOT change the caller's variable.",
              "crashes the program.",
              "requires a RETURN to take effect."
            ],
            correctAnswer: 1,
            explanation: "Parameters in AP pseudocode are local; the caller's variable is unaffected."
          },
          {
            question: "A program reads list = INPUT() and the user provides nothing. After the FOR EACH loop, the accumulator total equals ___",
            options: [
              "its initial value (0)",
              "1",
              "undefined",
              "the number of inputs requested"
            ],
            correctAnswer: 0,
            explanation: "FOR EACH on an empty list runs the body zero times; the initial value is preserved."
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
| First match | Loop with early RETURN; default RETURN after. |
| For-all | Loop with early RETURN FALSE; RETURN TRUE after. |
| Exists | Loop with early RETURN TRUE; RETURN FALSE after. |
| Count / Sum | Initialize to identity, accumulate inside loop. |
| Min / Max | Initialize from list[1], compare each element. |
| Filter | Build new list with APPEND inside IF. |
| Map | Build new list with APPEND of f(element). |
| Group | Build a dictionary keyed by group. |

## Common Bugs

- **Off-by-one** (1 vs LENGTH(list), or pair-loop ending at LENGTH instead of LENGTH−1).
- **Strict vs. non-strict** (> vs ≥) — always re-read the problem statement.
- **Overwriting first match** — missing early RETURN.
- **Empty input not handled** — guard before dividing.
- **Mutating a parameter and expecting the caller to see it** — they will not.

## Efficiency Quick Hits

- Replace nested loops with a single pass + dictionary (O(n²) → O(n)).
- Pre-sort once, then linear scan, instead of repeated max searches.
- Cache repeated computations.
- Pick the right data structure: list for ordered, set for membership, dictionary for keyed lookup.
      `
    },
    {
      id: "cspap7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Modifying a parameter inside a procedure does NOT affect the _______.

2) A doubly-nested loop where each element is compared to every other element runs in O(_______).

3) For first-match patterns, you should _______ as soon as the match is found.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["caller", "n²", "return"],
        hint1: "Parameters are local copies.",
        hint2: "n times n.",
        hint3: "Don't keep iterating.",
        explanation: "Parameters are local. Doubly-nested = quadratic. Early RETURN gives correctness AND efficiency."
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
            label: "For \"list contains target\" the most efficient structure once n is large is a ___",
            options: ["set / hash", "sorted list with linear scan", "unsorted list with linear scan", "string"]
          },
          {
            label: "A procedure that uses a Boolean flag updated every iteration but no early RETURN is usually ___",
            options: ["vulnerable to being overwritten by later iterations", "always optimal", "recursive", "object-oriented"]
          },
          {
            label: "For pair-comparison loops over LENGTH n, the outer loop should iterate from 1 to ___",
            options: ["n − 1", "n", "n + 1", "0"]
          }
        ],
        correctAnswers: ["set / hash", "vulnerable to being overwritten by later iterations", "n − 1"],
        hint1: "O(1) lookup.",
        hint2: "No early RETURN means later iterations decide.",
        hint3: "Inner loop indexes i+1.",
        explanation: "Sets give O(1) membership. Without early return, last iteration decides. Pair loops end one short."
      }
    },
    {
      id: "cspap7-strategy",
      type: 'text' as const,
      content: `
## Final Programming Tips

- Always **trace** with a small example before answering loop questions.
- "Same output, faster" → choose the lower growth rate.
- "Easier maintenance / single fix point" → extract a procedure.
- "Affects users by group at scale" → think Big Idea 5.
- Library/built-in beats hand-rolled for well-solved problems.
- Accept-the-AI-suggestion does NOT transfer responsibility.
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
            question: "A team supports a global service. A procedure formatPhoneNumber(s) is duplicated in 14 places, each with slightly different rules. Which refactor is most appropriate?",
            options: [
              "Add explanatory comments to all 14 duplicate places without changing any of the underlying duplicate code itself.",
              "Extract a single well-tested formatPhoneNumber procedure (parameterized for region rules) and replace each duplicate with a call.",
              "Delete 13 of the 14 duplicates and leave just one of them, regardless of the behavior differences between them.",
              "Convert all 14 of the duplicates into inline machine code so that each call site has its own optimized assembly."
            ],
            correctAnswer: 1,
            explanation: "Consolidate to a single procedure with parameters; preserve behavior differences via parameters."
          },
          {
            question: "For a stream of 10 million events you must answer the query \"how many distinct user IDs have appeared so far?\". Which design is most appropriate?",
            options: [
              "Maintain a set of seen IDs as the stream arrives; the query result is simply the current size of that set.",
              "Re-scan the entire stream from the beginning every time the distinct-count query is asked of the system.",
              "Sort the entire stream after each new event arrives and then count distinct runs in the freshly sorted result.",
              "Store every event in a list and divide the list's LENGTH by 2 to estimate the count of distinct user IDs."
            ],
            correctAnswer: 0,
            explanation: "A maintained set gives O(1) per insert and O(1) per query — the canonical streaming distinct-count pattern."
          }
        ]
      }
    }
  ]
};
