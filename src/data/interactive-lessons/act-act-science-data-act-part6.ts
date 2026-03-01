export const actScienceDataPart6Data = {
  topicSlug: 'act-science-data-act',
  sections: [
      {
        id: "act-sdata-p6-intro",
        type: 'text' as const,
        content: `\n# ACT Science Data Analysis
**Part 6 of 7 — Data synthesis across figures**

Most ACT Science questions in this unit are solved with arithmetic and careful reading of labels.
Use this sequence:
1. Identify variable on each axis.
2. Compute only what the question asks (difference, rate, or estimate).
3. Match units before finalizing.

Precision beats speed-reading in data-heavy passages.\n        `
      },
      {
        id: "act-sdata-p6-mcq1",
        type: 'multiple-choice' as const,
        content: `\n**Data Fundamentals**\n        `,
        exercise: {
          questions: [
            {
              question: "In a graph, point A is (7, 28) and point B is (9, 36). What is the slope?",
              options: [
                "4.0",
                "0.25",
                "8",
                "2"
              ],
              correctAnswer: 0,
              explanation: "Slope is rise/run = (36-28)/(9-7) = 4.0."
            },
            {
              question: "A best-fit line rises as x increases. Which claim is directly supported?",
              options: [
                "There is a positive association between variables",
                "x causes y in all settings",
                "The relationship is perfectly linear",
                "No outliers exist"
              ],
              correctAnswer: 0,
              explanation: "Upward trend supports positive association. Causation and perfect linearity are stronger claims not guaranteed by one plot."
            }
          ]
        }
      },
      {
        id: "act-sdata-p6-worked",
        type: 'text' as const,
        content: `\n## Worked Numeric Example
A table lists concentration (mM) and absorbance:
- 2 mM → 0.18
- 4 mM → 0.33
- 6 mM → 0.47

Suppose a question asks for the estimated absorbance at 5 mM.
5 mM lies between 4 and 6 mM, so interpolate between 0.33 and 0.47.
Midpoint estimate: about 0.40.

On ACT Science, interpolation is usually linear unless the graph clearly curves.\n        `
      },
      {
        id: "act-sdata-p6-input",
        type: 'input-boxes' as const,
        content: `\n**Computation Set**
1) A value rises from 14 to 23. Enter the increase.
2) A quantity changes from 50 to 65 over 3 minutes. Enter average rate per minute (decimal allowed).
3) If a point estimate is 31 and measured value is 28, enter absolute error.\n        `,
        exercise: {
          boxes: 3,
          correctAnswers: [
            "9",
            "5",
            "3"
          ],
          hint1: "Increase = final - initial.",
          hint2: "Rate = change divided by time.",
          hint3: "Absolute error uses distance between estimate and observed value.",
          explanation: "Increase is 9. Rate is (65-50)/3 = 5 per minute. Absolute error is |31-28| = 3."
        }
      },
      {
        id: "act-sdata-p6-strategy",
        type: 'text' as const,
        content: `\n## Practical Strategy for Data synthesis across figures
- When options are close, compute with one extra decimal before choosing.
- For controls/variables items, identify what is held constant first.
- For uncertainty questions, overlapping error bars mean weak evidence for a difference.
- In synthesis passages, build a mini two-column note: Source A claim vs Source B claim.\n        `
      },
      {
        id: "act-sdata-p6-dropdown",
        type: 'dropdown-select' as const,
        content: `\n**Reasoning Match**\n        `,
        exercise: {
          dropdowns: [
            {
              label: "Interpolation means:",
              options: [
                "Estimating within observed x-values",
                "Estimating far beyond observed x-values",
                "Ignoring the graph scale",
                "Choosing the largest y-value"
              ]
            },
            {
              label: "When two means differ but error bars overlap strongly, the safest conclusion is:",
              options: [
                "A definite difference exists",
                "Difference is uncertain from this data",
                "The larger mean must be wrong",
                "Units are irrelevant"
              ]
            },
            {
              label: "A control condition is used to:",
              options: [
                "Increase vocabulary complexity",
                "Provide a baseline for comparison",
                "Eliminate all random error",
                "Avoid graph interpretation"
              ]
            }
          ],
          correctAnswers: [
            "Estimating within observed x-values",
            "Difference is uncertain from this data",
            "Provide a baseline for comparison"
          ],
          hint1: "Inside range = interpolation.",
          hint2: "Overlap weakens certainty.",
          hint3: "Controls establish what changes are due to treatment.",
          explanation: "Data interpretation on ACT Science favors conservative conclusions backed by measured comparisons and baseline controls."
        }
      },
      {
        id: "act-sdata-p6-mcq2",
        type: 'multiple-choice' as const,
        content: `\n**Timed Review Questions**\n        `,
        exercise: {
          questions: [
            {
              question: "A question asks for the best estimate at x=7, while data points are x=1 to x=8. Which method is most appropriate?",
              options: [
                "Interpolation from nearby points",
                "Random guessing because x=7 is not listed",
                "Extrapolation far beyond data",
                "Ignoring units"
              ],
              correctAnswer: 0,
              explanation: "x=7 is inside the data range, so interpolation using neighboring values is appropriate."
            },
            {
              question: "You have 90 seconds left and 2 data questions remain. Best scoring move?",
              options: [
                "Fully re-read the entire passage",
                "Target each question's referenced figure directly",
                "Leave both blank",
                "Spend all time on one question"
              ],
              correctAnswer: 1,
              explanation: "Directly accessing referenced figures maximizes attempts and accuracy under short time constraints."
            }
          ]
        }
      }
    ]
};
