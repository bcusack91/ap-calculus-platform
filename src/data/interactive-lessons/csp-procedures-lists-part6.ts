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
            question: "In **PROCEDURE add(a, b) RETURN a + b**, calling **add(2, 3)** returns ___",
            options: [
              "2",
              "5",
              "23",
              "undefined"
            ],
            correctAnswer: 1,
            explanation: "Substitute a=2, b=3 → 5."
          },
          {
            question: "**APPEND(list, x)** then **LENGTH(list)** vs original LENGTH ___",
            options: [
              "decreases by 1.",
              "increases by 1.",
              "stays the same.",
              "is undefined."
            ],
            correctAnswer: 1,
            explanation: "APPEND adds one element."
          }
        ]
      }
    },
    {
      id: "csppl6-content",
      type: 'text' as const,
      content: `
## Worked: Build A "Top K" Procedure

    PROCEDURE topK(scores, k)
      sorted ← SORT(scores, descending)
      result ← []
      FOR i FROM 1 TO k:
        APPEND(result, sorted[i])
      RETURN result

Now any caller can ask for the top 3, top 10, etc.

## Worked: Compose Map + Filter + Reduce

Sum the squares of even numbers in **nums**:

    total ← 0
    FOR EACH n IN nums:
      IF n MOD 2 = 0 THEN
        total ← total + n * n

Conceptually: filter (even) → map (square) → reduce (sum).

## Worked: 2D Sum

    PROCEDURE gridSum(grid)
      total ← 0
      FOR EACH row IN grid:
        FOR EACH cell IN row:
          total ← total + cell
      RETURN total
      `
    },
    {
      id: "csppl6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A "top K" procedure usually first _______ the list, then takes the first k elements.

2) Filter then map then reduce is a common functional _______.

3) Touching every cell in a 2D list requires _______ loops.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["sorts", "pipeline", "nested"],
        hint1: "Order first.",
        hint2: "Composition.",
        hint3: "One inside another.",
        explanation: "Sort → take. Pipeline of patterns. Nested loops for 2D."
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
            label: "A procedure that takes a list and returns its sum is most accurately a ___",
            options: ["reduce-pattern procedure", "filter-pattern procedure", "map-pattern procedure", "sort-pattern procedure"]
          },
          {
            label: "A procedure that takes a list and returns a new list of squared values is a ___",
            options: ["map-pattern procedure", "reduce-pattern procedure", "filter-pattern procedure", "sort-pattern procedure"]
          },
          {
            label: "A procedure that takes a list and returns only positive numbers is a ___",
            options: ["filter-pattern procedure", "map-pattern procedure", "reduce-pattern procedure", "sort-pattern procedure"]
          }
        ],
        correctAnswers: ["reduce-pattern procedure", "map-pattern procedure", "filter-pattern procedure"],
        hint1: "Roll up.",
        hint2: "Transform each.",
        hint3: "Subset.",
        explanation: "Sum = reduce. Squaring each = map. Positives only = filter."
      }
    },
    {
      id: "csppl6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop

- Recognize map / filter / reduce shape from the loop body.
- Top-K = sort + take.
- 2D traversal = nested loops.
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
            question: "A program processes a 1000×1000 grid. A nested loop runs how many iterations?",
            options: [
              "2,000",
              "1,000,000",
              "1000",
              "0"
            ],
            correctAnswer: 1,
            explanation: "1000 × 1000 = 1,000,000 iterations."
          },
          {
            question: "A team needs the average of the top 10 scores in a list of 1,000. The most reasonable approach is ___",
            options: [
              "no procedure — just inline the sort, slice, and average code at the call site directly.",
              "topTen ← topK(scores, 10); average ← AVG(topTen) — compose existing procedures.",
              "compress the list of 1,000 scores first and then average the compressed bytes directly.",
              "encrypt the list before averaging so the top-K values cannot be observed by other code."
            ],
            correctAnswer: 1,
            explanation: "Compose existing procedures."
          }
        ]
      }
    }
  ]
};
