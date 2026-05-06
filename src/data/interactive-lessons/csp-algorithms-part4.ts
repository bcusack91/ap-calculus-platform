export const cspAlgorithmsPart4Data = {
  topicSlug: "csp-algorithms",
  sections: [
    {
      id: "cspalg4-intro",
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 4 of 7 — Connections & Interactions**

---

## How Algorithms Connect to Other CSP Topics

Algorithms don’t live in isolation. An efficient sort matters because of **data** size. A good search matters because the **internet** delivers gigabytes of records. The AP exam loves cross-topic questions.

| Connection | Why it matters |
|-----------|----------------|
| **Algorithms ↔ Data** | Choice of data structure (list vs. set) changes the algorithm’s running time. |
| **Algorithms ↔ Abstraction** | Procedures hide algorithmic detail behind a name. |
| **Algorithms ↔ Computing Systems** | Faster CPUs help, but a bad algorithm wastes any hardware budget. |
| **Algorithms ↔ Impact** | A biased ranking algorithm can amplify inequity at scale. |
      `
    },
    {
      id: "cspalg4-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Which pair of changes is most likely to make a slow program faster?",
            options: [
              "Switching from a quadratic-time algorithm to a linear-time algorithm.",
              "Renaming variables for readability.",
              "Adding more comments.",
              "Splitting one procedure into two equivalent procedures."
            ],
            correctAnswer: 0,
            explanation: "Asymptotic improvement (n² → n) dominates micro-optimizations."
          },
          {
            question: "A search algorithm runs over a sorted list. Which fact most clearly enables a faster (logarithmic) search?",
            options: [
              "The list is short.",
              "The list is sorted, so binary search is possible.",
              "The list contains only integers.",
              "The list has no duplicates."
            ],
            correctAnswer: 1,
            explanation: "Binary search requires a sorted ordering. Sortedness is the structural property that lets the algorithm halve the search space each step."
          }
        ]
      }
    },
    {
      id: "cspalg4-content",
      type: 'text' as const,
      content: `
## Linear vs. Binary Search

| Algorithm | Requires | Time on n items |
|-----------|----------|----------------|
| **Linear** | Nothing | up to n comparisons |
| **Binary** | Sorted list | about log₂(n) comparisons |

For 1,000,000 items, linear can need a million comparisons; binary needs about 20. The connection: **data structure** (sortedness) directly determines which **algorithm** you can use.

## Procedures Hide Algorithms

    PROCEDURE find(list, target) {
      // body could be linear or binary search;
      // callers don't need to know.
    }

This is **abstraction**: callers call **find** without caring which algorithm runs inside. You can swap the implementation later for a faster one without changing any caller.

## Algorithms and Impact

A recommendation algorithm that always returns the most-clicked content reinforces popularity bias — small differences compound into large gaps over millions of users. Algorithm choice has social consequences.
      `
    },
    {
      id: "cspalg4-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Binary search requires the input list to be _______.

2) Hiding the implementation of an algorithm behind a procedure name is an example of _______.

3) Switching from an n² algorithm to an n algorithm is an example of an _______ improvement.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["sorted", "abstraction", "efficiency"],
        hint1: "Binary search halves the range using ordering.",
        hint2: "Procedures hide details.",
        hint3: "It changes how running time scales with input size.",
        explanation: "Sortedness enables binary search. Procedures abstract over algorithms. Reducing growth rate is an efficiency improvement."
      }
    },
    {
      id: "cspalg4-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Linear search on n items needs at most ___ comparisons",
            options: ["n", "log₂(n)", "n²", "1"]
          },
          {
            label: "Binary search on n items needs about ___ comparisons",
            options: ["log₂(n)", "n", "√n", "2n"]
          },
          {
            label: "For n = 1,048,576 (≈ 1 million), binary search uses about ___ comparisons",
            options: ["20", "1000", "1", "500,000"]
          }
        ],
        correctAnswers: ["n", "log₂(n)", "20"],
        hint1: "Worst case checks every element.",
        hint2: "Each step halves the remaining range.",
        hint3: "log₂(2²⁰) = 20.",
        explanation: "Linear is O(n); binary is O(log n). 2²⁰ ≈ 1.05 million, so log₂(1M) ≈ 20."
      }
    },
    {
      id: "cspalg4-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cross-Topic Reasoning

- "Most efficient" almost always means lowest growth rate (n vs n² vs log n).
- If the question mentions a sorted list, **binary search** is on the table.
- If two algorithms produce identical output, the question is about **efficiency**, not correctness.
- Watch for cross-topic framing: "the algorithm runs on a server" hints at scalability; "the algorithm assigns loans" hints at bias/impact.
      `
    },
    {
      id: "cspalg4-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A library catalog of 4,000,000 books is sorted by title. Roughly how many comparisons does binary search need in the worst case?",
            options: [
              "About 22",
              "About 2,000",
              "About 4,000,000",
              "Exactly 1"
            ],
            correctAnswer: 0,
            explanation: "2²² ≈ 4.2M, so log₂(4M) ≈ 22."
          },
          {
            question: "A school adopts an automated scheduling algorithm that consistently assigns students with last names early in the alphabet to better elective slots. Which CSP cross-topic concern is most directly raised?",
            options: [
              "The algorithm has the wrong running time.",
              "The algorithm uses too much memory.",
              "The algorithm produces a biased outcome that disproportionately affects a group.",
              "The algorithm cannot be expressed as pseudocode."
            ],
            correctAnswer: 2,
            explanation: "Systematic outcome differences across groups are an algorithmic-bias / impact-of-computing concern."
          }
        ]
      }
    }
  ]
};
