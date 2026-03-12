export const actStatProbPart1Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
      {
        id: "act-stat-p1-intro",
        type: 'text' as const,
        content: `\n# ACT Statistics and Probability
**Part 1 of 7 — Mean, median, and weighted averages**

ACT math statistics questions are usually short and computation-based.
Core scoring rule: compute exactly what is asked, then test units and constraints.

Common formulas used in this unit:
- Mean = sum of values / number of values
- Range = max - min
- P(A or B) = P(A) + P(B) - P(A and B)\n        `
      },
      {
        id: "act-stat-p1-mcq1",
        type: 'multiple-choice' as const,
        content: `\n**Core Concepts**\n        `,
        exercise: {
          questions: [
            {
              question: "What is the mean of 9, 13, and 17?",
              options: [
                "15",
                "13",
                "8",
                "39"
              ],
              correctAnswer: 1,
              explanation: "Mean is (9+13+17)/3 = 13."
            },
            {
              question: "If P(rain)=0.30, what is P(no rain)?",
              options: [
                "0.70",
                "0.30",
                "1.30",
                "0.50"
              ],
              correctAnswer: 0,
              explanation: "Complement rule: P(not A) = 1 - P(A) = 0.70."
            }
          ]
        }
      },
      {
        id: "act-stat-p1-worked",
        type: 'text' as const,
        content: `\n## Worked Table Example
A class survey result:
- 40 students total
- 18 take art
- 15 take music
- 7 take both

Probability a random student takes art or music:
\(P(A \cup M) = (18 + 15 - 7)/40 = 26/40 = 0.65\)

Subtracting overlap once is the key move. ACT often tests this exact trap.\n        `
      },
      {
        id: "act-stat-p1-input",
        type: 'input-boxes' as const,
        content: `\n**Numeric Practice**
1) Dataset: 4, 7, 9, 10. Enter the median.
2) If P(A)=0.4 and P(B)=0.5 and P(A and B)=0.2, enter P(A or B).
3) How many 2-letter arrangements can be made from letters A, B, C with no repetition?\n        `,
        exercise: {
          boxes: 3,
          correctAnswers: [
            "8",
            "0.7",
            "6"
          ],
          hint1: "For even count, median is average of middle two values.",
          hint2: "Use addition rule with overlap subtraction.",
          hint3: "Order matters for arrangements (permutations).",
          explanation: "Median is (7+9)/2=8. Union probability is 0.4+0.5-0.2=0.7. Two-letter permutations from 3 letters: 3×2=6."
        }
      },
      {
        id: "act-stat-p1-strategy",
        type: 'text' as const,
        content: `\n## ACT Pitfalls for Mean, median, and weighted averages
- Do not confuse mean with median when outliers are present.
- For conditional probability tables, confirm row/column denominator before dividing.
- In counting problems, decide first: does order matter?
- Translate wording to symbols before computing to avoid arithmetic slips.\n        `
      },
      {
        id: "act-stat-p1-dropdown",
        type: 'dropdown-select' as const,
        content: `\n**Formula Selection**\n        `,
        exercise: {
          dropdowns: [
            {
              label: "Best formula for 'A or B':",
              options: [
                "P(A)+P(B)",
                "P(A)+P(B)-P(A and B)",
                "P(A)×P(B)",
                "1-P(A and B)"
              ]
            },
            {
              label: "When order matters in counting, use:",
              options: [
                "Combinations",
                "Permutations",
                "Median",
                "Range"
              ]
            },
            {
              label: "A quick check for impossible probability is:",
              options: [
                "Value less than 0 or greater than 1",
                "Value is a decimal",
                "Value has two significant digits",
                "Value includes a fraction"
              ]
            }
          ],
          correctAnswers: [
            "P(A)+P(B)-P(A and B)",
            "Permutations",
            "Value less than 0 or greater than 1"
          ],
          hint1: "Union needs overlap correction.",
          hint2: "Permutations apply when arrangements are different by order.",
          hint3: "Probabilities must lie in [0, 1].",
          explanation: "Correct model choice is half the work on ACT stats: pick the right formula before arithmetic."
        }
      },
      {
        id: "act-stat-p1-mcq2",
        type: 'multiple-choice' as const,
        content: `\n**ACT-Style Review**\n        `,
        exercise: {
          questions: [
            {
              question: "A set has values 2, 3, 3, 4, 20. Which measure is most affected by the outlier?",
              options: [
                "Median",
                "Mode",
                "Mean",
                "Minimum"
              ],
              correctAnswer: 2,
              explanation: "The mean shifts strongly with extreme values, while the median remains anchored near center order."
            },
            {
              question: "From 5 candidates, how many ways can captain and co-captain be chosen?",
              options: [
                "10",
                "20",
                "25",
                "5"
              ],
              correctAnswer: 1,
              explanation: "Different roles mean order matters: 5 choices for captain, then 4 for co-captain, so 5×4=20."
            }
          ]
        }
      }
    ]
};
