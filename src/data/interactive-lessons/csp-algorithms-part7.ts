export const cspAlgorithmsPart7Data = {
  topicSlug: "csp-algorithms",
  sections: [
    {
      id: "cspalg7-intro",
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Algorithms

Cheat sheet for exam day. Match each construct to its AP-pseudocode shape and the most common bug.
      `
    },
    {
      id: "cspalg7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "On the AP CSP exam, lists in pseudocode are indexed starting at ___",
            options: [
              "0",
              "1",
              "−1",
              "It depends on the problem."
            ],
            correctAnswer: 1,
            explanation: "AP pseudocode lists are 1-indexed. list[1] is the first element."
          },
          {
            question: "Which expression is TRUE only when x is between 1 and 10 inclusive?",
            options: [
              "x > 1 AND x < 10",
              "x ≥ 1 OR x ≤ 10",
              "x ≥ 1 AND x ≤ 10",
              "NOT (x = 1 OR x = 10)"
            ],
            correctAnswer: 2,
            explanation: "Inclusive needs ≥ and ≤. AND ensures both bounds."
          }
        ]
      }
    },
    {
      id: "cspalg7-content",
      type: 'text' as const,
      content: `
## Quick-Reference: Constructs and Pitfalls

| Construct | Looks like | Common bug |
|-----------|-----------|------------|
| Sequence | statements one after another | None — just trace top-down. |
| IF/ELSE | IF (c) {…} ELSE {…} | Wrong comparison (> vs ≥). |
| REPEAT N TIMES | block runs exactly N times | Modifying N inside changes nothing. |
| REPEAT UNTIL | checks cond before each pass, exits when cond true | Assuming the block always runs once (it can run zero times). |
| FOR EACH x IN list | iterates over elements | Treating x as the index. |
| i ← 1, then REPEAT UNTIL (i > LENGTH(list)) | visits i = 1, 2, …, LENGTH(list) when the body ends with i ← i + 1 | Forgetting i ← i + 1 (infinite loop), or reading list[i + 1] past the end. |

## Quick-Reference: Boolean Logic

- A AND B → both true.
- A OR B → at least one true.
- NOT (A AND B) = (NOT A) OR (NOT B) (DeMorgan).
- NOT (A OR B) = (NOT A) AND (NOT B).

## Quick-Reference: Efficiency

- Polynomial = reasonable. Exponential = unreasonable.
- Linear search: up to n checks. Binary search (sorted data only): about $\\log_{2}(n)$ checks.
- Doubling the input of an algorithm whose steps grow like $n^{2}$ → about 4× the steps; for binary search → about 1 more check.
      `
    },
    {
      id: "cspalg7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) AP pseudocode lists are _______-indexed.

2) If its condition is already true when it is first checked, a REPEAT UNTIL loop runs the block _______ time(s).

3) $\\log_{2}$(1,048,576) equals approximately _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1", "0", "20"],
        hint1: "First element is list[1].",
        hint2: "The condition is checked before each pass.",
        hint3: "$2^{10}$ ≈ 1024, $2^{20}$ ≈ 1M.",
        explanation: "1-indexed lists. REPEAT UNTIL checks its condition before each pass, so it can run 0 times. $2^{20}$ = 1,048,576."
      }
    },
    {
      id: "cspalg7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Sorted list + need-to-find-one-value → use ___",
            options: ["binary search", "linear search", "sort first", "compare every pair"]
          },
          {
            label: "Two algorithms with identical output but different running times — choose the ___ one",
            options: ["faster (lower growth rate)", "shorter (fewer lines of code)", "simpler (fewer procedures used)", "newer (written most recently)"]
          },
          {
            label: "A heuristic is appropriate when ___",
            options: ["the exact algorithm is unreasonable", "a guaranteed optimal answer is required", "the input is tiny", "the data is sorted"]
          }
        ],
        correctAnswers: ["binary search", "faster (lower growth rate)", "the exact algorithm is unreasonable"],
        hint1: "Halving the search space.",
        hint2: "Correctness is equal; choose efficiency.",
        hint3: "Heuristics trade optimality for speed.",
        explanation: "Sortedness enables binary search. With equal correctness, prefer lower growth rate. Heuristics rescue intractable exact problems."
      }
    },
    {
      id: "cspalg7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Always **trace** loops with a table; don’t eyeball them.
- Watch the boundaries: > vs ≥, list[1] vs list[0], REPEAT UNTIL checks before each pass.
- Distinguish **correctness** (does it produce the right output?) from **efficiency** (how fast / how much memory?).
- For pseudocode FRQs, write at least one example trace in your scratch space.
- "Most appropriate" usually means efficient AND correct AND simplest — eliminate options that fail any one.
      `
    },
    {
      id: "cspalg7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program must check whether a student ID appears in a list of 50,000 IDs that is kept in sorted order. Which approach examines the fewest elements in the worst case?",
            options: [
              "A linear search, checking about 50,000 elements",
              "Binary search, checking about 16 elements",
              "Checking every pair of IDs, about 1.25 billion checks",
              "Checking only the first and last IDs in the list"
            ],
            correctAnswer: 1,
            explanation: "The list is sorted, so binary search can halve it each step; $2^{16}$ = 65,536 is more than 50,000, so about 16 checks are enough. Checking only the ends is fast but would miss most IDs."
          },
          {
            question: "A class debates which algorithm is \"best\". A is correct, and its steps grow like $n^{2}$. B needs far fewer steps but produces wrong results on lists with duplicates. The dataset has many duplicates. Which choice is best supported?",
            options: [
              "Choose B, because faster is always better.",
              "Choose A, because correctness must come before efficiency.",
              "Choose B and ignore the duplicates.",
              "Neither, since the problem is undecidable."
            ],
            correctAnswer: 1,
            explanation: "Correctness comes first; efficiency is the tiebreaker among correct algorithms."
          }
        ]
      }
    }
  ]
};
