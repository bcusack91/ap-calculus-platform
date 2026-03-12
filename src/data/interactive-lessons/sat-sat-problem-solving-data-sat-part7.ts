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
    }
  ]
};
