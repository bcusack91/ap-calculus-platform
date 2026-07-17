export const mcatQuantSkillsPart1Data = {
  topicSlug: 'mcat-quantitative-skills-mcat',
  sections: [
    {
      id: 'mcat-quant-intro',
      type: 'text' as const,
      content: `# MCAT Quantitative Skills

**Part 1 of 1 - Percent Change, Ratios & Fold-Change**

Many MCAT science questions look like biology, chemistry, or physics — but the real hurdle is a quick mental-math calculation. If you cannot rapidly compute a **percent increase**, a **fold-change**, or a **ratio** from a table or graph, you will lose time and pick trap answers.

### The Three Core Formulas

| Calculation | Formula | When to Use |
|---|---|---|
| **Percent change** | (new − old) / old × 100% | "What is the approximate percent increase/decrease?" |
| **Fold-change** | new / old | "How many times greater is condition B than condition A?" |
| **Ratio** | A / B | "What is the ratio of X to Y?" |

**Key insight:** Percent change and fold-change use the **same denominator** (the reference/old value). Percent change = (fold-change − 1) × 100%.

### Worked Example: Percent Increase

A table shows enzyme activity of 12 units at pH 6 and 54 units at pH 8. What is the approximate percent increase?

1. Old = 12, New = 54
2. (54 − 12) / 12 × 100% = 42/12 × 100% = **350%**
3. Sanity check: fold-change = 54 / 12 = 4.5×. Percent increase = (4.5 − 1) × 100% = 350% ✓

**Common Trap:** Students sometimes divide by the **new** value instead of the **old** value. That gives 42/54 ≈ 78% — a wrong answer that will appear as a distractor.

### Quick Reference Table

| Fold-change | Percent increase | Percent decrease (if reversed) |
|---|---|---|
| 2× | 100% | 50% |
| 3× | 200% | 67% |
| 4× | 300% | 75% |
| 5× | 400% | 80% |
| 10× | 900% | 90% |

If a value triples, the percent increase is 200%, not 300%. Many students make this off-by-one error.`
    },
    {
      id: 'mcat-quant-quiz',
      type: 'multiple-choice' as const,
      content: `**Percent Change & Ratios Drill**`,
      exercise: {
        questions: [
          {
            question: `A table shows 8 mg/dL at baseline and 40 mg/dL after treatment. What is the percent increase from baseline?`,
            options: [
              `300%`,
              `400%`,
              `500%`,
              `80%`
            ],
            correctAnswer: 1,
            explanation: `Percent increase = (40 − 8) / 8 × 100% = 32/8 × 100% = 400%. Fold-change: 40/8 = 5×, so (5 − 1) × 100% = 400%.`
          },
          {
            question: `Condition 1 shows a value of 2 and condition 4 shows a value of 9. What is the approximate percent increase from condition 1 to condition 4?`,
            options: [
              `350%`,
              `450%`,
              `78%`,
              `250%`
            ],
            correctAnswer: 0,
            explanation: `Percent increase = (9 − 2) / 2 × 100% = 7/2 × 100% = 350%.`
          },
          {
            question: `Cell count goes from $1.5 \\times 10^{4}$ to $6.0 \\times 10^{4}$. What is the fold-change?`,
            options: [
              `4×`,
              `3×`,
              `4.5×`,
              `6×`
            ],
            correctAnswer: 0,
            explanation: `Fold-change = $6.0 \\times 10^{4}$ / $1.5 \\times 10^{4}$ = 4×. The powers of 10 cancel.`
          },
          {
            question: `A student calculates percent change as (new − old) / new × 100%. What error are they making?`,
            options: [
              `Dividing by the wrong reference value — should divide by old, not new`,
              `Subtracting in the wrong order — should compute old − new`,
              `Forgetting to multiply by 100`,
              `No error — both formulas are equivalent`
            ],
            correctAnswer: 0,
            explanation: `Percent change always uses the original (old/reference) value as the denominator. Dividing by the new value underestimates the true percent change.`
          },
          {
            question: `An experiment measures 90 mL/min at rest and 30 mL/min under experimental conditions. What is the percent decrease?`,
            options: [
              `67%`,
              `33%`,
              `200%`,
              `300%`
            ],
            correctAnswer: 0,
            explanation: `Percent decrease = (90 − 30) / 90 × 100% = 60/90 × 100% ≈ 67%.`
          },
          {
            question: `If a value increases by 300%, the new value is how many times the original?`,
            options: [
              `3×`,
              `4×`,
              `300×`,
              `30×`
            ],
            correctAnswer: 1,
            explanation: `300% increase means the change equals 3× the original, so new = original + 3× original = 4× original.`
          },
          {
            question: `On a graph, condition 1 = 5 and condition 4 = 15. Which pair is correct: fold-change AND percent increase?`,
            options: [
              `3× and 200%`,
              `3× and 300%`,
              `10× and 200%`,
              `2× and 200%`
            ],
            correctAnswer: 0,
            explanation: `Fold-change = 15/5 = 3×. Percent increase = (15 − 5)/5 × 100% = 200%. Percent increase = (fold − 1) × 100%.`
          },
          {
            question: `Concentration drops from 200 uM to 50 uM. What is the percent decrease?`,
            options: [
              `75%`,
              `400%`,
              `25%`,
              `150%`
            ],
            correctAnswer: 0,
            explanation: `Percent decrease = (200 − 50) / 200 × 100% = 75%. The fold-change is 200/50 = 4, so percent decrease = (1 − 1/4) × 100% = 75%.`
          }
        ]
      }
    },
    {
      id: 'mcat-quant-summary',
      type: 'text' as const,
      content: `### Key Takeaways

1. **Percent change = (new − old) / old × 100%.** Always divide by the **reference** value.
2. **Fold-change = new / old.** Percent increase = (fold − 1) × 100%.
3. A **3× increase** is a **200%** increase, not 300%. Watch for this MCAT trap.
4. For **percent decrease**, the formula is (old − new) / old × 100%.
5. **Sanity-check** every calculation: if a value quadruples, that is a 300% increase and 4× fold-change.

Practice recognizing these patterns in tables and graphs — MCAT science sections frequently embed quantitative-reasoning hurdles within biology and chemistry questions.`
    }
  ]
}
