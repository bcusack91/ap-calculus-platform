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
              "swaps the values of x and y.",
              "copies x's value into y."
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
              "becomes undefined."
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
| Nested conditional | An IF inside another IF or ELSE. |
| MOD | Remainder after division; same precedence as * and /. |
| Off-by-one | A common bug at loop boundaries. |

## Common Pitfalls

- Reading **←** as a comparison, or **=** as an assignment (← assigns; = compares).
- Off-by-one errors in loops.
- Infinite loops (condition never becomes the exit condition).
- Forgetting that MOD is evaluated before + and −.
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
            label: "An IF nested inside an ELSE is best when ___",
            options: ["cases partition into ranked conditions", "every condition must be tested on its own", "an action repeats a set number of times", "only a single yes-or-no check is needed"]
          },
          {
            label: "Tracing through code with a small variable table is ___",
            options: ["the standard technique for predicting program output", "only useful after the program has been compiled", "a substitute for testing the program on real inputs", "a technique that only works for loop-free programs"]
          },
          {
            label: "NOT (x ≥ 10) is equivalent to ___",
            options: ["x < 10", "x > 10", "x ≤ 10", "x ≠ 10"]
          }
        ],
        correctAnswers: ["cases partition into ranked conditions", "the standard technique for predicting program output", "x < 10"],
        hint1: "Multi-way.",
        hint2: "Trace tables.",
        hint3: "The opposite of \"at least 10\".",
        explanation: "Nest an IF inside an ELSE for ranked cases. Tracing predicts output. The opposite of x ≥ 10 is x < 10."
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
- Rewrite NOT applied to AND / OR with De Morgan's laws, then check a boundary value.
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
              "two \"best so far\" trackers for the largest and second-largest, updated in one scan.",
              "a single counter that tallies how many values exceed the first element.",
              "sort the list ascending and then take its first element as the second-largest value."
            ],
            correctAnswer: 1,
            explanation: "Single-pass with two trackers — also acceptable: sort then take element 2 from end."
          },
          {
            question: "A program should display \"pass\" when score is at least 60 and \"fail\" otherwise. Which condition completes IF (condition) { DISPLAY(\"pass\") } ELSE { DISPLAY(\"fail\") }?",
            options: [
              "score > 60",
              "score ≤ 60",
              "NOT (score ≥ 59)",
              "score ≥ 60"
            ],
            correctAnswer: 3,
            explanation: "\"At least 60\" includes 60, so the test is score ≥ 60. score > 60 would fail a score of exactly 60, and NOT (score ≥ 59) is true only for scores below 59."
          }
        ]
      }
    }
  ]
};
