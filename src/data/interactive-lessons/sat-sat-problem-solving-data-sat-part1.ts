export const satProbSolvDataPart1Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'psd1-intro',
      type: 'text' as const,
      content: `# Problem Solving: Ratios, Rates & Proportions

**Part 1 of 7 — Setting Up and Solving Proportions**

This is one of the most heavily tested topics on the SAT Math section. About 25-30% of Math questions fall under Problem Solving & Data Analysis.

### Ratios
A ratio compares two quantities: If a recipe uses 3 cups flour to 2 cups sugar, the ratio is **3:2** or **3/2**.

### Setting Up Proportions
**Cross-multiply** to solve:

$$\\frac{3}{5} = \\frac{x}{20} \implies 3 \\times 20 = 5x \implies x = 12$$

### Unit Rates
A unit rate has a denominator of 1:
- 240 miles in 4 hours → **60 mph**
- \$45 for 3 shirts → **\$15 per shirt**

### SAT Trap: Mixing Up Parts and Wholes
If the ratio of boys to girls is 3:5, there are **8 total parts** (not 5).
- Boys = 3/8 of total
- Girls = 5/8 of total

### Dimensional Analysis
Convert units by multiplying fractions:
$$60 \\frac{\\text{miles}}{\\text{hour}} \\times \\frac{1 \\text{ hour}}{60 \\text{ min}} = 1 \\frac{\\text{mile}}{\\text{min}}$$`
    },
    {
      id: 'psd1-q1',
      type: 'quiz' as const,
      question: 'In a class, the ratio of students who passed to those who failed is 7:3. If 40 students took the test, how many passed?',
      options: [
        '7',
        '21',
        '28',
        '30'
      ],
      correctAnswer: 2,
      explanation: 'Total parts = 7 + 3 = 10. Students who passed = (7/10) × 40 = 28. Common trap: choosing 7 (just the ratio number) or 30 (confusing 7:3 with "7 out of 3").'
    },
    {
      id: 'psd1-q2',
      type: 'quiz' as const,
      question: 'A car travels 150 miles using 5 gallons of gas. At this rate, how many gallons are needed for 420 miles?',
      options: [
        '12',
        '14',
        '16',
        '84'
      ],
      correctAnswer: 1,
      explanation: 'Unit rate = 150/5 = 30 mpg. Gallons needed = 420/30 = 14 gallons. Set up: 150/5 = 420/x → 150x = 2100 → x = 14.'
    }
  ]
};
