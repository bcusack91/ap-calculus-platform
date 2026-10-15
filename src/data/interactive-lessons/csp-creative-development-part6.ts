export const cspCreativeDevelopmentPart6Data = {
  topicSlug: "csp-creative-development",
  sections: [
    {
      id: "cspcd6-intro",
      type: 'text' as const,
      content: `
# 🎨 Creative Development

**Part 6 of 7 — Problem-Solving Workshop: Finding and Fixing Errors**

---

## Creative Development Workshop

Apply the development process to AP-style scenarios: decide what a team should do next, pick test inputs, and find and correct errors.
      `
    },
    {
      id: "cspcd6-quiz1",
      type: 'multiple-choice' as const,
      content: `
**Concept Check 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "After two weeks of coding, a team realizes their understanding of the user's problem was wrong. What should they do?",
            options: [
              "Ship the current code anyway and let users adapt to it.",
              "Re-investigate users' needs, then redesign.",
              "Continue building the original plan since the team has already started.",
              "Replace the whole project with a different but vaguely similar one."
            ],
            correctAnswer: 1,
            explanation: "An iterative process may require revisiting earlier phases, such as investigation, based on what the team learns."
          },
          {
            question: "A program contains a misspelled keyword. This program ___",
            options: [
              "runs but always produces a slightly wrong result.",
              "has a syntax error, since it breaks a language rule.",
              "crashes only for some of the inputs it receives.",
              "runs faster, since there is less code to read."
            ],
            correctAnswer: 1,
            explanation: "A syntax error is a mistake where the rules of the programming language are not followed, such as a misspelled keyword."
          }
        ]
      }
    },
    {
      id: "cspcd6-content",
      type: 'text' as const,
      content: `
## Worked Scenario: Finding a Logic Error

Requirement: count the scores that are **70 or higher**.

\`\`\`
PROCEDURE countPassing(scores)
{
    count ← 0
    FOR EACH s IN scores
    {
        IF (s > 70)
        {
            count ← count + 1
        }
    }
    RETURN(count)
}
\`\`\`

| Test input | Expected | Actual |
|------------|----------|--------|
| [90, 50] | 1 | 1 |
| [70, 85] | 2 | 1 ⚠️ |
| [] | 0 | 0 |

The boundary test (a score of exactly 70) exposes a **logic error**: the program runs, but its output is wrong. The fix is IF (s ≥ 70). After fixing it, run every test again.

## Ways to Find and Correct Errors

| Method | How it helps |
|--------|--------------|
| **Test cases** | Compare expected and actual results for defined inputs. |
| **Hand tracing** | Step through the code on paper, tracking each variable. |
| **Visualizations** | Show data or program state as a picture or chart. |
| **Debuggers** | Pause the program and inspect values one step at a time. |
| **Extra output statements** | DISPLAY variable values to see what the program is doing. |

## Choosing Test Inputs

Program requirements tell you which inputs to test. Good test inputs show each different expected outcome and include values **at or just beyond the extremes** (the minimum and maximum) of the input data.
      `
    },
    {
      id: "cspcd6-input",
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In the worked scenario, which score value revealed the error? _______

2) Adding DISPLAY statements to see variable values is a way to find errors with extra _______ statements.

3) A mistake that makes a program behave incorrectly, without breaking the language's rules, is a _______ error.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["70", "output", "logic"],
        hint1: "The boundary value in the requirement.",
        hint2: "DISPLAY produces this.",
        hint3: "The program runs, but the answer is wrong.",
        explanation: "A score of exactly 70 should count but did not. Extra output statements show values as the program runs. A program that runs but gives wrong results has a logic error."
      }
    },
    {
      id: "cspcd6-dropdown",
      type: 'dropdown-select' as const,
      content: `
**Targeted Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Stepping through code on paper while tracking each variable is called ___",
            options: ["hand tracing", "a debugger", "a visualization", "a syntax check"]
          },
          {
            label: "An input must be a whole number from 1 to 100. The most useful set of test values is ___",
            options: ["0, 1, 100, and 101", "50 only", "1 only", "25, 50, and 75"]
          },
          {
            label: "After fixing a bug, the programmer should ___",
            options: ["run all the test cases again", "delete the test that failed", "stop testing the program", "only add more comments"]
          }
        ],
        correctAnswers: ["hand tracing", "0, 1, 100, and 101", "run all the test cases again"],
        hint1: "Done by hand, with a trace table.",
        hint2: "Test at and just beyond each extreme.",
        hint3: "Make sure the fix didn't break anything else.",
        explanation: "Hand tracing follows the code on paper. Values at and just beyond the minimum and maximum test the boundaries. Re-running the tests confirms the fix and checks for new problems."
      }
    },
    {
      id: "cspcd6-strategy",
      type: 'text' as const,
      content: `
## AP Exam Strategy: Workshop Style

- "What should the team do next?" answers usually involve **investigate, test, refine, document** — never "ship blindly" or "quit".
- Classify the error: breaks a language rule → syntax; stops the program while running → run-time; wrong output → logic; number outside the representable range → overflow.
- Pick test inputs at and just beyond each boundary, then compare expected and actual results.
- Know the five ways to find errors: test cases, hand tracing, visualizations, debuggers, and extra output statements.
      `
    },
    {
      id: "cspcd6-applied",
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application 🎯**
      `,
      exercise: {
        questions: [
          {
            question: "A team plans a single 6-month \"big bang\" release with no intermediate testing. The most CSP-aligned critique is ___",
            options: [
              "a six-month window is too short to fit any useful work.",
              "with no feedback until launch, problems stay hidden until costly to fix.",
              "the team just needs to write more in-line code comments to stay on track.",
              "big single-shot releases are the safest way to ship software."
            ],
            correctAnswer: 1,
            explanation: "An iterative, incremental process tests and gets feedback along the way. Waiting until the end hides problems until they are expensive to fix."
          },
          {
            question: "A procedure gives the wrong result only when its input is 0. The next best step is ___",
            options: [
              "ignore the failing case, since in practice users rarely pass exactly 0 as input.",
              "add test cases for 0 and its neighbors -1 and 1, then correct the procedure.",
              "rewrite the entire program in a different language so the bug might disappear.",
              "add a comment above the procedure warning users never to pass 0 as an input."
            ],
            correctAnswer: 1,
            explanation: "Pin down the failure with test cases at and around the boundary, then correct the error and re-run the tests."
          }
        ]
      }
    }
  ]
};
