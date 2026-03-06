export const satTestDayStrategyPart4Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'tds4-intro',
      type: 'text' as const,
      content: `# Math Section Strategy

**Part 4 of 7 — Maximizing Your Math Score**

### The 4 Math Question Types
1. **Algebra** (~35%): Linear equations, systems, inequalities, functions
2. **Advanced Math** (~35%): Quadratics, polynomials, exponentials, rational functions
3. **Problem Solving & Data** (~15%): Ratios, percents, probability, statistics
4. **Geometry & Trig** (~15%): Area, volume, angles, right triangles, trig

### Problem-Solving Approaches (in order of preference)
1. **Direct solve** — set up equation and solve
2. **Backsolve** — plug in answer choices to see which works
3. **Pick numbers** — substitute simple values for variables
4. **Desmos** — graph it and find the answer visually

### When to Backsolve
Best for: "Which value of x satisfies..." or when answer choices are simple numbers.
1. Start with choice B or C (middle value)
2. If too big/small, you know which direction to go
3. Often faster than algebraic manipulation

### When to Pick Numbers
Best for: Problems with variables in the answer choices.
1. Choose simple numbers (x = 2, y = 3 — avoid 0 and 1)
2. Calculate the answer with your numbers
3. Plug the same numbers into each answer choice
4. Only ONE choice will match

### Grid-In (Student-Produced Response)
- ~25% of Math questions are grid-in (type your answer)
- **No negative answers** on grid-in
- Fractions and decimals both accepted
- If you get a range, give any value in the range`
    },
    {
      id: 'tds4-q1',
      type: 'quiz' as const,
      question: 'For a problem that says "If 2x + 3 = ax + 6 has no solution, what is a?" — what approach is fastest?',
      options: [
        'Backsolve with answer choices',
        'Recognize that no solution means same slope, different constant → a = 2',
        'Graph both sides in Desmos',
        'Pick a number for x and test'
      ],
      correctAnswer: 1,
      explanation: 'For a linear equation to have no solution, the coefficients of x must be equal (parallel lines) but the constants must differ. So a = 2 (matching the coefficient of x on the left). This takes 5 seconds — no calculation needed.'
    }
  ]
};
