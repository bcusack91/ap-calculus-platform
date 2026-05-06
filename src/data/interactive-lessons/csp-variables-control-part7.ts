export const cspVariablesControlPart7Data = {
  topicSlug: "csp-variables-control",
  sections: [
    {
      id: "cspvc7-intro",
      type: 'text' as const,
      content: `
# 🔀 Variables & Control Flow

**Part 7 of 7 — AP Review**

---

## AP Exam Recap — Variables & Control Flow

Final review.
      `
    },
    {
      id: "cspvc7-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "Assignment **x ← y** ___",
            options: [
              "tests if x equals y.",
              "copies y's value into x.",
              "swaps x and y.",
              "deletes y."
            ],
            correctAnswer: 1,
            explanation: "Assignment = copy right into left."
          },
          {
            question: "A REPEAT UNTIL loop stops when its condition ___",
            options: [
              "becomes true.",
              "becomes false.",
              "is initialized.",
              "is encrypted."
            ],
            correctAnswer: 0,
            explanation: "REPEAT UNTIL exits when the condition becomes true."
          }
        ]
      }
    },
    {
      id: "cspvc7-content",
      type: 'text' as const,
      content: `
## Final Vocab

| Term | Definition |
|------|-----------|
| Variable | Named container for a value. |
| Assignment | Set a variable's value. |
| Boolean | True / false. |
| Sequencing | Steps in order. |
| Selection | IF / ELSE. |
| Iteration | Loop. |
| Scope | Where a variable is visible. |
| Local / global | Inside a procedure / whole program. |
| Constant | Variable that never changes. |
| Off-by-one | A common bug at loop boundaries. |
| Side effect | Change to state outside the local scope. |

## Common Pitfalls

- Reading **=** as equality when it's assignment (or vice versa).
- Off-by-one errors in loops.
- Infinite loops (condition never becomes the exit condition).
- Modifying global state from many places, creating bugs.
- Forgetting that AP pseudocode is 1-indexed.
      `
    },
    {
      id: "cspvc7-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) AP CSP pseudocode lists are _______-indexed.

2) A loop whose exit condition is never satisfied is called an _______ loop.

3) A bug where a loop runs one too many or one too few times is an _______-by-one error.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1", "infinite", "off"],
        hint1: "1-indexed.",
        hint2: "Never stops.",
        hint3: "Common boundary bug.",
        explanation: "1-indexed pseudocode, infinite loops, off-by-one errors."
      }
    },
    {
      id: "cspvc7-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "IF / ELSE IF / ELSE chains are best when ___",
            options: ["cases partition into ranked conditions", "a loop is needed", "no decision is needed", "compression is needed"]
          },
          {
            label: "Tracing through code with a small variable table is ___",
            options: ["the standard technique for predicting program output", "illegal", "optional only", "a compression technique"]
          },
          {
            label: "A pure function without side effects is ___",
            options: ["easier to test and reason about", "always slower", "cannot be reused", "always encrypted"]
          }
        ],
        correctAnswers: ["cases partition into ranked conditions", "the standard technique for predicting program output", "easier to test and reason about"],
        hint1: "Multi-way.",
        hint2: "Trace tables.",
        hint3: "Predictability.",
        explanation: "Else-if for ranked cases. Tracing predicts output. Pure functions are testable."
      }
    },
    {
      id: "cspvc7-strategy",
      type: 'text' as const,
      content: `
## Final Exam Tips

- Trace tables are your friend.
- Distinguish counter / accumulator / search / filter / max patterns.
- Watch for off-by-one and infinite loops.
- Local + constant + pure = modern good practice.
      `
    },
    {
      id: "cspvc7-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A program needs to find the SECOND-largest value in a list. The most straightforward approach is ___",
            options: [
              "no loop needed — the second-largest value can be read off any single element.",
              "two \"best so far\" trackers (largest and secondLargest) updated together as you scan.",
              "random selection of one element and returning it as the second-largest candidate.",
              "sort the list ascending and then take its first element as the second-largest value."
            ],
            correctAnswer: 1,
            explanation: "Single-pass with two trackers — also acceptable: sort then take element 2 from end."
          },
          {
            question: "A counter variable is incremented from event handlers AND from a timer. Without coordination, the count is sometimes wrong. The most accurate diagnosis is ___",
            options: [
              "no issue — concurrent increments to the same counter always interleave safely by default.",
              "a race condition on shared mutable state; needs synchronization or a different design.",
              "a compression issue that causes the counter to shrink occasionally between updates.",
              "a transport-layer issue that prevents the counter from updating across the network."
            ],
            correctAnswer: 1,
            explanation: "Concurrent updates to shared state cause race conditions."
          }
        ]
      }
    }
  ]
};
