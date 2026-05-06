export const cspAlgorithmsPart2Data = {
  topicSlug: "csp-algorithms",
  sections: [
    {
      id: "cspalg2-intro",
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 2 of 7 — Key Processes**

---

## How Algorithms Execute Step by Step

An **algorithm** is a finite, ordered sequence of unambiguous steps. On the AP CSP exam you will trace pseudocode by hand. Master three control flows and you can trace anything.

| Construct | What it does |
|-----------|--------------|
| **Sequence** | Statements run top to bottom, exactly once. |
| **Selection** | **IF / ELSE** chooses between branches. |
| **Iteration** | **REPEAT N TIMES** or **REPEAT UNTIL** runs a block multiple times. |

**AP pseudocode rule:** assignment uses **a ← 5**. Comparison uses **=**. Lists are 1-indexed.
      `
    },
    {
      id: "cspalg2-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "After this code, what is x?\n\nx ← 2\nREPEAT 3 TIMES { x ← x + x }",
            options: [
              "6",
              "8",
              "16",
              "12"
            ],
            correctAnswer: 2,
            explanation: "x doubles each pass: 2 → 4 → 8 → 16. Three doublings of 2 give 2·2³ = 16."
          },
          {
            question: "Which best describes when REPEAT UNTIL (n = 0) stops executing its block?",
            options: [
              "After exactly n iterations.",
              "When n equals 0 at the top of an iteration.",
              "When n equals 0 at the bottom of an iteration, after the block runs.",
              "When n becomes negative."
            ],
            correctAnswer: 2,
            explanation: "REPEAT UNTIL is a post-test loop in AP pseudocode: the block runs, then the condition is checked. The loop exits the next time the condition is true."
          }
        ]
      }
    },
    {
      id: "cspalg2-content",
      type: 'text' as const,
      content: `
## Tracing a Loop by Hand

    n ← 4
    total ← 0
    REPEAT n TIMES {
      total ← total + n
      n ← n − 1
    }
    DISPLAY(total)

**Key trick:** the loop count for **REPEAT n TIMES** is fixed when the loop *starts* (n = 4), even if n changes inside.

| Iteration | total before | n before | total after | n after |
|-----------|--------------|----------|-------------|---------|
| 1 | 0 | 4 | 4 | 3 |
| 2 | 4 | 3 | 7 | 2 |
| 3 | 7 | 2 | 9 | 1 |
| 4 | 9 | 1 | 10 | 0 |

DISPLAY shows **10**.

## Selection With Compound Conditions

    IF (score ≥ 90 AND attendance ≥ 0.8) {
      grade ← "A"
    } ELSE IF (score ≥ 80 OR bonus = true) {
      grade ← "B"
    } ELSE {
      grade ← "C"
    }

**AND** requires both; **OR** requires at least one. **NOT** flips a Boolean.
      `
    },
    {
      id: "cspalg2-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The three core control structures are sequence, selection, and _______.

2) AP pseudocode assignment uses the symbol _______ (write the name).

3) In REPEAT n TIMES, n is evaluated _______ times during the loop.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["iteration", "arrow", "1"],
        hint1: "It means \"repetition\".",
        hint2: "A leftward-pointing symbol like ←.",
        hint3: "It is set when the loop begins.",
        explanation: "Iteration is the third primitive control structure. The arrow ← assigns. The repeat count is captured once when the loop starts."
      }
    },
    {
      id: "cspalg2-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "After a ← 3, b ← a, a ← 7, the value of b is ___",
            options: ["3", "7", "10", "undefined"]
          },
          {
            label: "A pre-test loop checks the condition ___ each iteration body",
            options: ["before", "after", "in the middle of", "twice during"]
          },
          {
            label: "The expression (NOT (x > 5)) AND (x ≠ 0) is true when x equals ___",
            options: ["3", "6", "0", "7"]
          }
        ],
        correctAnswers: ["3", "before", "3"],
        hint1: "b is a snapshot, not a reference.",
        hint2: "REPEAT UNTIL is post-test; many other loops are pre-test.",
        hint3: "NOT (x > 5) means x ≤ 5; combined with x ≠ 0.",
        explanation: "Assignments copy values. Pre-test loops evaluate first. For x = 3: NOT (3 > 5) is true, AND (3 ≠ 0) is true."
      }
    },
    {
      id: "cspalg2-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Reading Algorithms

- Trace with a **table**: one column per variable, one row per iteration. This catches off-by-one errors.
- For **REPEAT N TIMES** the count is **fixed at the start**; modifying the counter inside doesn't change how many times the block runs.
- For **REPEAT UNTIL (cond)** the block runs **at least once** and exits when cond becomes true *after* a pass.
- DeMorgan: NOT (A AND B) = (NOT A) OR (NOT B). The exam tests this.
- When in doubt, plug in **boundary values** (0, 1, n−1, n) — they are where bugs live.
      `
    },
    {
      id: "cspalg2-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A loop counts how many list elements equal a target. After tracing, the counter is 0 but you can see the target appears in the list. Which bug is most likely?",
            options: [
              "The loop iterates through the list correctly but compares index to target instead of element to target.",
              "Lists are 0-indexed in AP pseudocode and the loop starts at 1.",
              "REPEAT UNTIL was used instead of REPEAT N TIMES.",
              "The DISPLAY statement is missing."
            ],
            correctAnswer: 0,
            explanation: "The classic mistake is comparing the index variable to the target instead of list[i]. AP pseudocode lists are 1-indexed, ruling out option B."
          },
          {
            question: "Two algorithms produce the same output for every input. Algorithm A uses one loop and runs in time proportional to n. Algorithm B uses two nested loops and runs in time proportional to n². For n = 1000, which statement is best supported?",
            options: [
              "Algorithm B is preferred because nested loops are more reliable.",
              "Algorithm A is more efficient; both are correct, so A should be used.",
              "Algorithm A is incorrect because it doesn’t use nesting.",
              "Both have identical efficiency since they produce the same output."
            ],
            correctAnswer: 1,
            explanation: "Correctness is equal; efficiency is not. Same output + lower running time means the linear algorithm is preferred."
          }
        ]
      }
    }
  ]
};
