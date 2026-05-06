export const cspAlgorithmsPart3Data = {
  topicSlug: "csp-algorithms",
  sections: [
    {
      id: "cspalg3-intro",
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 3 of 7 — Patterns & Examples**

---

## Common Algorithmic Patterns

You will see the same building blocks again and again. Recognize them and tracing becomes pattern-matching.

| Pattern | Shape |
|---------|-------|
| **Accumulator** | Start sum/product at identity, update each pass. |
| **Counter** | Increment when a condition holds. |
| **Min/Max** | Track best-so-far, compare each new element. |
| **Filter** | Build a new list of elements meeting a condition. |
| **Map (transform)** | Replace each element with f(element). |
      `
    },
    {
      id: "cspalg3-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Trace:\n\nlist ← [4, 1, 7, 3, 9, 2]\nbest ← list[1]\nFOR EACH x IN list { IF (x > best) { best ← x } }\nDISPLAY(best)",
            options: [
              "4",
              "7",
              "9",
              "26"
            ],
            correctAnswer: 2,
            explanation: "Classic max pattern. best becomes 4, then 7, then 9. Final element 2 doesn’t exceed 9."
          },
          {
            question: "You want the COUNT of even numbers in a list. Which line belongs inside the loop?",
            options: [
              "IF (x MOD 2 = 0) { count ← count + 1 }",
              "count ← count + x",
              "count ← x MOD 2",
              "IF (count MOD 2 = 0) { x ← x + 1 }"
            ],
            correctAnswer: 0,
            explanation: "A counter increments by 1 only when the condition holds. x MOD 2 = 0 tests even."
          }
        ]
      }
    },
    {
      id: "cspalg3-content",
      type: 'text' as const,
      content: `
## Worked Example: Filter + Count

Goal: from prices, count how many are above 50 AND build a list of those prices.

    prices ← [42, 73, 51, 18, 99, 50]
    count ← 0
    expensive ← []
    FOR EACH p IN prices {
      IF (p > 50) {
        count ← count + 1
        APPEND(expensive, p)
      }
    }

**Trace:** 73 ✓, 51 ✓, 99 ✓. (50 fails because the test is strict >.) Output: **3** and **[73, 51, 99]**.

## Worked Example: Min Index, Not Just Min

Tracking the *position* of the minimum, not just the value.

    nums ← [8, 3, 6, 1, 9, 4]
    minIdx ← 1
    FOR i ← 2 TO LENGTH(nums) {
      IF (nums[i] < nums[minIdx]) { minIdx ← i }
    }

**minIdx** evolves: 1 → 2 (3 < 8) → 4 (1 < 3). Output: **4** (1-indexed position of the smallest value).
      `
    },
    {
      id: "cspalg3-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A variable that builds up a running total is called an _______.

2) To pick out elements meeting a condition into a new list, use the _______ pattern.

3) To replace every element with f(element) without filtering, use the _______ pattern.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["accumulator", "filter", "map"],
        hint1: "It accumulates a result.",
        hint2: "Like a sieve.",
        hint3: "Like a one-to-one transformation.",
        explanation: "Accumulator builds totals. Filter selects. Map transforms element-by-element."
      }
    },
    {
      id: "cspalg3-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "For an empty list, the standard \"sum\" accumulator should start at ___",
            options: ["0", "1", "list[1]", "undefined"]
          },
          {
            label: "For a \"product\" accumulator, the identity starting value is ___",
            options: ["1", "0", "list[1]", "−1"]
          },
          {
            label: "When tracking max, initializing best to list[1] instead of a tiny constant is safer because ___",
            options: ["it guarantees best is a real list value", "it uses less memory", "it is faster", "it allows nesting"]
          }
        ],
        correctAnswers: ["0", "1", "it guarantees best is a real list value"],
        hint1: "Adding 0 changes nothing.",
        hint2: "Multiplying by 1 changes nothing.",
        hint3: "A magic constant might not be smaller than every legal element.",
        explanation: "Identity values keep accumulators correct. Initializing max from list[1] handles negative-only lists where a constant like 0 would be wrong."
      }
    },
    {
      id: "cspalg3-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Pattern Recognition

- Skim pseudocode for the **shape**: is there a counter? An accumulator? A min/max comparison?
- Watch for **strict vs. non-strict** comparisons (> vs ≥). They change boundary results.
- Watch the **starting value** of an accumulator — wrong identity is a frequent FRQ deduction.
- For "first occurrence" patterns, remember to **break/exit** or guard with a flag so you don't overwrite a found index later.
      `
    },
    {
      id: "cspalg3-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program is supposed to find the FIRST element greater than 100 in a list. The student writes:\n\nresult ← −1\nFOR EACH x IN list { IF (x > 100) { result ← x } }\n\nWhat is wrong?",
            options: [
              "Nothing is wrong; the code is correct.",
              "The loop overwrites result every time a match is found, so it returns the LAST match, not the first.",
              "The variable result should start at 0, not −1.",
              "FOR EACH cannot be used with a numeric list."
            ],
            correctAnswer: 1,
            explanation: "Without an early exit (or a flag like IF (result = -1)), every match overwrites the previous one."
          },
          {
            question: "Code:\n\nlist ← [5, 5, 5, 5]\ncount ← 0\nFOR EACH x IN list { count ← count + 1 }\n\nIf the list is replaced with [ ] (empty), what does count equal after the loop?",
            options: [
              "0",
              "1",
              "undefined / error",
              "4"
            ],
            correctAnswer: 0,
            explanation: "FOR EACH on an empty list executes the body zero times. The accumulator stays at its initial value 0."
          }
        ]
      }
    }
  ]
};
