export const cspAlgorithmsPart5Data = {
  topicSlug: "csp-algorithms",
  sections: [
    {
      id: "cspalg5-intro",
      type: 'text' as const,
      content: `
# ⚙️ Algorithms

**Part 5 of 7 — Change Over Time**

---

## How Algorithms Scale

A "fast enough" algorithm at n = 100 may be unusable at n = 10,000,000. The AP exam tests whether you understand **how running time grows** with input size.

| Class | Doubling input multiplies time by | Practical feel |
|-------|----------------------------------|----------------|
| Constant | 1× | Instant regardless of size. |
| Logarithmic | adds a constant | Scales beautifully. |
| Linear | 2× | Reasonable. |
| Quadratic | 4× | Painful past ~$10^{4}$. |
| Exponential | huge multiplier | Infeasible past tiny inputs. |
      `
    },
    {
      id: "cspalg5-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "An algorithm takes 1 second on 1,000 inputs and is **linear-time**. Roughly how long does it take on 10,000 inputs?",
            options: [
              "1 second",
              "10 seconds",
              "100 seconds",
              "1,000 seconds"
            ],
            correctAnswer: 1,
            explanation: "Linear: 10× input → 10× time."
          },
          {
            question: "An algorithm takes 1 second on 1,000 inputs and is **quadratic-time**. Roughly how long does it take on 10,000 inputs?",
            options: [
              "1 second",
              "10 seconds",
              "100 seconds",
              "10,000 seconds"
            ],
            correctAnswer: 2,
            explanation: "Quadratic: 10× input → 100× time."
          }
        ]
      }
    },
    {
      id: "cspalg5-content",
      type: 'text' as const,
      content: `
## Reasonable vs. Unreasonable Algorithms

The CED uses two key terms:

- **Reasonable**: time grows polynomially (constant, log, linear, $n^{2}$, $n^{3}$, …).
- **Unreasonable**: time grows exponentially ($2^{n}$, n!, …) — quickly impossible to run.

A 30-element problem that needs to try every subset $(2^{30} \\approx 1 billion)$ is borderline. At 50 elements $(2^{50} \\approx 10^{15})$, no realistic computer finishes in your lifetime.

## Heuristics: When Exact Is Too Slow

When an exact algorithm is unreasonable, we often use a **heuristic** — an approach that finds a *good enough* answer quickly without guaranteeing optimality.

| Problem | Exact (unreasonable) | Heuristic (reasonable) |
|---------|----------------------|----------------------|
| Traveling Salesperson | Try all routes | "Always go to nearest unvisited city." |
| Schedule fitting | Try all schedules | Greedy first-fit. |

**Trade-off:** speed vs. guaranteed optimality.

## Decidable vs. Undecidable

Some problems can't be solved by *any* algorithm for *all* inputs (e.g., the Halting Problem). These are **undecidable**. Most exam-relevant problems are decidable; the question is whether they're tractable in reasonable time.
      `
    },
    {
      id: "cspalg5-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) An algorithm whose running time grows polynomially is called _______.

2) An algorithm that finds a good but not necessarily optimal solution faster is called a _______.

3) A problem that no algorithm can solve for all inputs is _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["reasonable", "heuristic", "undecidable"],
        hint1: "CED vocabulary for tractable.",
        hint2: "Greek root meaning \"to find\".",
        hint3: "Opposite of decidable.",
        explanation: "Reasonable = polynomial time. Heuristics trade optimality for speed. Undecidable problems have no general algorithm."
      }
    },
    {
      id: "cspalg5-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "A $2^{n}$ algorithm on n = 60 is best described as ___",
            options: ["Reasonable", "Unreasonable", "Linear", "Logarithmic"]
          },
          {
            label: "A heuristic guarantees ___",
            options: ["the optimal answer", "a good answer in less time", "no answer", "exponential time"]
          },
          {
            label: "Doubling the input of an $O(n^{2})$ algorithm makes it ___ as long",
            options: ["twice", "four times", "the same length of", "half"]
          }
        ],
        correctAnswers: ["Unreasonable", "a good answer in less time", "four times"],
        hint1: "$2^{60}$ is astronomical.",
        hint2: "It is a speed/optimality trade.",
        hint3: "$(2n)^{2}$ = $4n^{2}$.",
        explanation: "Exponential time is unreasonable. Heuristics trade optimality for speed. Quadratic scaling is 4× per input doubling."
      }
    },
    {
      id: "cspalg5-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Scaling Questions

- For "how long does it take on 10× input?" multiply by the growth factor: linear → 10×, $n^{2}$ → 100×, log → tiny constant change.
- "Reasonable" = polynomial. "Unreasonable" = exponential.
- A heuristic ≠ a guarantee. If the answer must be optimal, a heuristic alone can't promise it.
- The Halting Problem is the canonical undecidable problem the exam might mention.
      `
    },
    {
      id: "cspalg5-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A genetics lab has an exact algorithm that finds the best protein folding for n amino acids in time proportional to $2^{n}$. For n = 50 the run is estimated at 35 years. Which is the best practical response?",
            options: [
              "Wait the projected 35 years for the exact algorithm to terminate and report the optimal protein folding.",
              "Run the same exponential algorithm on a slightly faster computer in the hope that it finishes much sooner.",
              "Use a heuristic that returns a near-optimal protein folding in a matter of seconds for any input size n.",
              "Conclude that the protein folding problem is undecidable and that no algorithm can ever produce a folding."
            ],
            correctAnswer: 2,
            explanation: "Exponential growth is unreasonable; doubling CPU speed buys one extra n. A heuristic returns a usable answer quickly."
          },
          {
            question: "A search algorithm runs in O(log n). On 1,000 items it does about 10 comparisons. On 1,000,000 items it does about how many?",
            options: [
              "1,000",
              "10,000,000",
              "20",
              "100"
            ],
            correctAnswer: 2,
            explanation: "$\\log_{2}(10^{6})$ ≈ 20."
          }
        ]
      }
    }
  ]
};
