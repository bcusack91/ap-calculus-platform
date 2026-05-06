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
| Sequence | a; b; c | None — just trace top-down. |
| IF/ELSE | IF (c) {…} ELSE {…} | Wrong comparison (> vs ≥). |
| REPEAT N TIMES | block runs exactly N times | Modifying N inside changes nothing. |
| REPEAT UNTIL | runs at least once, exits when cond true | Forgetting it’s post-test (off by one). |
| FOR EACH x IN list | iterates over elements | Treating x as the index. |
| FOR i ← a TO b | iterates i = a, a+1, …, b | Off-by-one if pairing list[i+1]. |

## Quick-Reference: Boolean Logic

- A AND B → both true.
- A OR B → at least one true.
- NOT (A AND B) = (NOT A) OR (NOT B) (DeMorgan).
- NOT (A OR B) = (NOT A) AND (NOT B).

## Quick-Reference: Efficiency

- Polynomial = reasonable. Exponential = unreasonable.
- Linear search: O(n). Binary search (sorted): O(log n).
- Doubling input on O(n²) → 4×; on O(log n) → +1 step.
      `
    },
    {
      id: "cspalg7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) AP pseudocode lists are _______-indexed.

2) A REPEAT UNTIL loop runs the block at least _______ time(s) before checking the condition.

3) log₂(1,048,576) equals approximately _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1", "1", "20"],
        hint1: "First element is list[1].",
        hint2: "Post-test loop.",
        hint3: "2¹⁰ ≈ 1024, 2²⁰ ≈ 1M.",
        explanation: "1-indexed lists. REPEAT UNTIL is post-test (≥ 1 execution). 2²⁰ = 1,048,576."
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
            options: ["binary search", "linear search", "sort first", "random guess"]
          },
          {
            label: "Two algorithms with identical output but different running times — choose the ___ one",
            options: ["faster (lower growth rate)", "slower", "shorter source code", "one with more comments"]
          },
          {
            label: "A heuristic is appropriate when ___",
            options: ["the exact algorithm is unreasonable", "we need a guaranteed optimum", "the input is tiny", "the data is sorted"]
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
- Watch the boundaries: > vs ≥, list[1] vs list[0], REPEAT UNTIL post-test.
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
            question: "A learning app records millions of student responses and must repeatedly answer \"how many responses contain word W?\". Which design improves both correctness and efficiency?",
            options: [
              "Linearly scan every recorded student response from start to finish on every individual incoming query.",
              "Precompute, then maintain, a frequency map updated when responses arrive; queries become a single lookup.",
              "Sort all of the recorded student responses alphabetically and then run a binary search on every query.",
              "Compress the entire response dataset on disk and decompress the whole archive on every individual query."
            ],
            correctAnswer: 1,
            explanation: "A maintained index turns each query into O(1)."
          },
          {
            question: "A class debates which algorithm is \"best\". A is correct and runs in O(n²). B is faster (O(n log n)) but produces wrong results on lists with duplicates. The dataset has many duplicates. Which choice is best supported?",
            options: [
              "Always choose B because it is faster.",
              "Choose A because correctness is a precondition for considering efficiency.",
              "Choose B and ignore the duplicate cases.",
              "Neither — the problem is undecidable."
            ],
            correctAnswer: 1,
            explanation: "Correctness comes first; efficiency is the tiebreaker among correct algorithms."
          }
        ]
      }
    }
  ]
};
