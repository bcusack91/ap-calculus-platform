export const satCalcStrategyPart3Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs3-intro',
      type: 'text' as const,
      content: `# Solving Systems with Desmos

**Part 3 of 7 — Graphical Solutions to Systems**

### Why Desmos Excels at Systems
Algebraically solving systems can be tedious (substitution, elimination). Desmos finds the intersection in seconds.

### Method: Graph Both Equations
1. Enter equation 1: `y = 3x - 2`
2. Enter equation 2: `y = -x + 6`
3. Click the intersection dot → **(2, 4)**

### Systems with No Solution
If the lines are **parallel** (same slope, different y-intercept), there is no intersection. Desmos shows no dot — the graphs never touch.

### Systems with Infinite Solutions
If both equations represent the **same line**, they overlap completely. This happens when one equation is a multiple of the other.

### Non-Linear Systems
Desmos handles these effortlessly:
- Line + parabola → 0, 1, or 2 intersections
- Two parabolas → 0, 1, 2, 3, or 4 intersections
- Line + circle → 0, 1, or 2 intersections

### SAT Trap: "How many solutions?"
Instead of solving algebraically, graph both equations and **count the intersection points**. This is one of the biggest time-savers on the SAT.`
    },
    {
      id: 'cs3-q1',
      type: 'quiz' as const,
      question: 'The system y = x² and y = 4 has how many solutions? (Think graphically)',
      options: [
        '0',
        '1',
        '2',
        '4'
      ],
      correctAnswer: 2,
      explanation: 'y = x² is a parabola opening upward, and y = 4 is a horizontal line. They intersect at two points: (2, 4) and (-2, 4). In Desmos you\'d see two intersection dots.'
    },
    {
      id: 'cs3-q2',
      type: 'quiz' as const,
      question: 'If you graph two linear equations in Desmos and see parallel lines, the system has:',
      options: [
        'Exactly one solution',
        'Exactly two solutions',
        'No solution',
        'Infinitely many solutions'
      ],
      correctAnswer: 2,
      explanation: 'Parallel lines never intersect, so the system has no solution. On the SAT, this often means the answer is "no solution" or the problem asks you to find the slope/y-intercept that creates parallel lines.'
    }
  ]
};
