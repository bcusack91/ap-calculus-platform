export const satProbSolvDataPart7Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd7-intro',
      type: 'text' as const,
      content: `# Problem Solving & Data Review

**Part 7 of 7 — Mixed Practice & Strategy**

### Topic Checklist
✓ Ratios, rates, proportions, and unit conversion
✓ Percent increase/decrease and successive changes
✓ Two-way tables and conditional probability
✓ Mean, median, standard deviation, and outliers
✓ Scatterplots, line of best fit, and residuals
✓ Probability, expected value, and counting

### SAT Strategy for This Section
1. **Read the question last** — scan the table/graph first to understand the data
2. **Identify what the denominators should be** — marginal vs. conditional probability
3. **Watch for traps**: part-to-part vs. part-to-whole ratios
4. **Use estimation** — if a scatterplot has a clear trend, estimate before calculating

### Common Mistakes
- Confusing "percent increase" with "percentage points"
- Using the wrong total for conditional probability
- Forgetting that percent change compounds (not additive)
- Extrapolating beyond the data range when the question asks for interpolation`
    },
    {
      id: 'psd7-q1',
      type: 'quiz' as const,
      question: 'A population grows from 1,000 to 1,210 over 2 years with constant percent growth. What is the annual growth rate?',
      options: [
        '10%',
        '10.5%',
        '21%',
        '21.5%'
      ],
      correctAnswer: 0,
      explanation: '1,000 × r² = 1,210 → r² = 1.21 → r = 1.1 → 10% annual growth. Check: 1,000 × 1.1 = 1,100. Then 1,100 × 1.1 = 1,210. ✓ Note: it\'s NOT 21%/2 = 10.5% — growth compounds.'
    },
    {
      id: 'psd7-q2',
      type: 'quiz' as const,
      question: 'In a two-way table, 60 out of 200 surveyed prefer Brand A. Of those 60, 45 are female. What is P(Female | Brand A)?',
      options: [
        '45/200',
        '60/200',
        '45/60',
        '45/140'
      ],
      correctAnswer: 2,
      explanation: '"Given Brand A" restricts to the 60 who prefer Brand A. Of those, 45 are female. P(Female | Brand A) = 45/60 = 3/4 = 75%.'
    },
    {
      id: 'psd7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Mixed SAT Data Problems

### Worked Example 1: Multi-Concept Problem

| Step | Work |
|---|---|
| **Problem** | "A dataset's mean is 50 and SD is 8. Every value is doubled then 10 is added. Find the new mean and SD." |
| **Double** | Mean $= 50 \\times 2 = 100$, SD $= 8 \\times 2 = 16$ |
| **Add 10** | Mean $= 100 + 10 = 110$, SD $= 16$ (unchanged by adding) |
| **Answer** | New mean $= 110$, new SD $= 16$ |

### Worked Example 2: Comprehensive Table + Probability

| Step | Work |
|---|---|
| **Problem** | "150 students surveyed: 60 prefer A, 50 prefer B, 40 prefer C. Of the A-preferrers, 40 are juniors. What is P(Junior | prefers A)?" |
| **Restrict** | Given "prefers A" → denominator $= 60$ |
| **Answer** | $\\frac{40}{60} = \\frac{2}{3}$ |

### SAT Problem Solving Cheat Sheet

| Topic | Key Formula | Common Trap |
|---|---|---|
| Ratios | Part $= \\frac{a}{a+b} \\times$ total | Part:part vs. part:whole |
| Percents | Multiplier method | Successive changes compound |
| Two-way tables | Conditional → use subtotal | Wrong denominator |
| Mean | $\\frac{\\text{sum}}{n}$ | Outliers distort |
| SD | Spread from mean | Add constant → SD unchanged |
| Scatterplots | Slope = rate of change | Extrapolation ≠ interpolation |
| Probability | Complement for "at least one" | With vs. without replacement |

### Time Management for This Section

| Difficulty | Time Budget | Strategy |
|---|---|---|
| Easy (direct read from table) | 30 sec | Read carefully, answer |
| Medium (one calculation) | 60 sec | Set up, solve, check |
| Hard (multi-step) | 90 sec | Plan approach first |
| Very hard (trap question) | 90+ sec | Skip, flag, return |`
    },
    {
      id: 'psd7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT Problem Solving Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A dataset has mean 40. Two values are added: 40 and 60. The new mean:',
            options: ['Increases', 'Stays the same', 'Decreases', 'Cannot determine without knowing $n$'],
            correctAnswer: 0,
            explanation: 'The average of the two added values is $(40 + 60)/2 = 50$, which is above the old mean of 40. Adding values above the mean always pulls the mean up.'
          },
          {
            question: 'In a proportion, $\\frac{x}{12} = \\frac{15}{20}$. What is $x$?',
            options: ['$9$', '$12$', '$15$', '$16$'],
            correctAnswer: 0,
            explanation: '$\\frac{x}{12} = \\frac{15}{20} = \\frac{3}{4}$. Cross multiply: $4x = 36$ → $x = 9$.'
          },
          {
            question: 'A scatterplot has $r = -0.92$. Which statement is true?',
            options: ['Strong negative linear association', 'Weak negative association', 'Strong positive association', '$x$ causes $y$ to decrease'],
            correctAnswer: 0,
            explanation: '$|r| = 0.92$ is close to 1, indicating strong correlation. The negative sign means as $x$ increases, $y$ decreases. Correlation does NOT mean causation (ruling out D).'
          }
        ]
      }
    },
    {
      id: 'psd7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Problem Solving Quick Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'Ratio 3:7, total 50. Smaller group = [15|21|30|35]',
          '25% increase then 20% decrease. Net multiplier = [1.00|0.95|1.05|1.45]',
          'P(A) = 0.4, P(B) = 0.3, independent. P(A and B) = [0.12|0.70|0.10|0.07]',
          'Mean = 70, every value +5. New mean = [75|70|65|350]'
        ],
        correctAnswers: ['15', '1.00', '0.12', '75'],
        hint1: 'Smaller group = 3 out of 3+7 = 10 parts.',
        hint2: '1.25 × 0.80 = 1.00 — back to original!',
        hint3: 'Independent: P(A and B) = P(A) × P(B).',
        explanation: '3/10 × 50 = 15. 1.25 × 0.80 = 1.00 (no net change). Independent: 0.4 × 0.3 = 0.12. Adding 5 to all values adds 5 to the mean: 75.'
      }
    },
    {
      id: 'psd7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Problem Solving & Data

| Part | Topic | Must-Know |
|---|---|---|
| 1 | Ratios & Proportions | Part:whole, cross-multiply, unit rates |
| 2 | Percentages | Multiplier method, successive changes compound |
| 3 | Two-Way Tables | Marginal vs. conditional vs. joint probability |
| 4 | Statistics | Mean/median/SD, outlier effects, skewness |
| 5 | Scatterplots | Slope in context, residuals, $r$ and $r^2$ |
| 6 | Probability | Complement, OR/AND rules, expected value |
| 7 | Review | Decision framework, time management, traps |

### Top Strategies
1. **Read the question carefully** — identify what the denominator should be
2. **Use multipliers** for percent problems
3. **Complement** for "at least one" probability
4. **Median** when data has outliers
5. **Check your answer** — does it make sense in context?

🎉 *Problem Solving & Data complete!*`
    }
  ]
};
