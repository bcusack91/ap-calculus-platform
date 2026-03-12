export const actReadSciTipsPart4Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
      {
        id: "act-rsci-p4-intro",
        type: 'text' as const,
        content: `\n# ACT Reading + Science Tips
**Part 4 of 7 — Conflicting viewpoints**

ACT Science rewards fast pattern recognition, not outside science knowledge.
In this part, you practice a repeatable method:

1. Read title, axes, and units before touching answer choices.
2. Predict trend direction in 3–5 seconds.
3. Match evidence directly to one row, column, or sentence.

Keep your process measurable: spend about 15–20 seconds scanning a figure and save full reading for questions that require detail.\n        `
      },
      {
        id: "act-rsci-p4-mcq1",
        type: 'multiple-choice' as const,
        content: `\n**Fast Data Decisions**\n        `,
        exercise: {
          questions: [
            {
              question: "A table shows reaction yield rising from 60% at trial 1 to 76% at trial 2 and 92% at trial 3. Which statement is best supported?",
              options: [
                "Yield decreases as trials continue",
                "Yield increases each trial",
                "Yield stays constant",
                "No conclusion can be made from these values"
              ],
              correctAnswer: 1,
              explanation: "The values 60%, 76%, and 92% increase each trial, so the supported claim is a rising trend."
            },
            {
              question: "A graph shows temperature at 24°C and 34°C with all other conditions fixed. If output is higher at 34°C, what is the safest inference?",
              options: [
                "Temperature likely influences output",
                "Output will always double when temperature rises",
                "The experiment proves temperature is the only factor",
                "The data are invalid without a control group description"
              ],
              correctAnswer: 0,
              explanation: "One controlled comparison supports influence, not an absolute claim. ACT rewards cautious, evidence-based wording."
            }
          ]
        }
      },
      {
        id: "act-rsci-p4-worked",
        type: 'text' as const,
        content: `\n## Worked ACT Example
A passage includes a figure where dissolved oxygen (mg/L) is measured at three depths:
- 1 m: 9.2
- 5 m: 7.6
- 10 m: 6.0

A question asks which depth has the highest oxygen concentration.
**Efficient method:**
- Ignore narrative text first.
- Read the y-values directly.
- Choose the maximum value, not the steepest visual slope.

Correct conclusion: 1 m is highest. This avoids a common ACT trap where students pick a visually dramatic segment instead of the actual largest value.\n        `
      },
      {
        id: "act-rsci-p4-input",
        type: 'input-boxes' as const,
        content: `\n**Timed Accuracy Drill**
1) You budget 35 minutes for 40 questions. What is the average seconds per question (rounded to nearest whole number)?
2) A chart value moves from 24 to 30. Enter the increase.
3) You spend 2 minutes 20 seconds on a hard item but target 50 seconds. Enter how many extra seconds you used.\n        `,
        exercise: {
          boxes: 3,
          correctAnswers: [
            "53",
            "6",
            "90"
          ],
          hint1: "35 minutes is 2,100 seconds. Divide by 40.",
          hint2: "Increase is final minus initial.",
          hint3: "2:20 is 140 seconds, then subtract 50.",
          explanation: "ACT pacing is numerical. 2,100/40 ≈ 52.5 so 53 seconds per question. The data increase is 6. Extra time used is 90 seconds."
        }
      },
      {
        id: "act-rsci-p4-strategy",
        type: 'text' as const,
        content: `\n## Trap Avoidance for Conflicting viewpoints
- Prefer exact evidence over broad paraphrases.
- Eliminate choices containing extreme language like *always* or *never* unless the data prove it.
- If two answers seem close, pick the one tied to a specific figure value or line reference.
- On conflicting viewpoints, identify one sentence that separates Scientist 1 from Scientist 2 before checking options.\n        `
      },
      {
        id: "act-rsci-p4-dropdown",
        type: 'dropdown-select' as const,
        content: `\n**Method Check**\n        `,
        exercise: {
          dropdowns: [
            {
              label: "When a question asks for a trend, your first move should be:",
              options: [
                "Read every paragraph in full",
                "Inspect axes/units and compare values",
                "Pick the longest answer",
                "Use outside science facts"
              ]
            },
            {
              label: "For conflicting viewpoints passages, strongest evidence usually comes from:",
              options: [
                "A remembered classroom rule",
                "A direct quote or paraphrase from each viewpoint",
                "The most technical vocabulary",
                "The answer with the broadest claim"
              ]
            },
            {
              label: "If one question consumes too much time, the best exam move is to:",
              options: [
                "Keep pushing until certain",
                "Skip, mark, and return if time remains",
                "Leave it blank",
                "Change the passage order mid-question"
              ]
            }
          ],
          correctAnswers: [
            "Inspect axes/units and compare values",
            "A direct quote or paraphrase from each viewpoint",
            "Skip, mark, and return if time remains"
          ],
          hint1: "ACT Science is data-first.",
          hint2: "The test rewards text/figure evidence, not outside knowledge.",
          hint3: "Time management preserves points across easier later items.",
          explanation: "A reliable science workflow is: read labels, verify values, support claims with explicit evidence, and protect pacing by moving on when needed."
        }
      },
      {
        id: "act-rsci-p4-mcq2",
        type: 'multiple-choice' as const,
        content: `\n**Mixed ACT Review**\n        `,
        exercise: {
          questions: [
            {
              question: "A student says, 'Because one sample increased, the treatment always works.' What is the best critique?",
              options: [
                "The claim is too absolute for limited data",
                "The claim must be correct if the graph slopes upward",
                "The claim is valid because ACT uses simple science",
                "The claim is valid if the answer is choice C"
              ],
              correctAnswer: 0,
              explanation: "Single-trial or limited data rarely justifies always/never conclusions. ACT answers favor cautious language tied to observed evidence."
            },
            {
              question: "You finish 4 passages in 28 minutes and have 7 minutes left for the final passage. Which adjustment is best?",
              options: [
                "Read the final passage twice",
                "Use question-first scanning and strict 45–50 second caps",
                "Guess all remaining immediately",
                "Leave difficult questions blank"
              ],
              correctAnswer: 1,
              explanation: "With limited time, prioritize answerable questions quickly, cap hard items, and return if possible. This maximizes expected points."
            }
          ]
        }
      }
    ]
};
