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
1. Enter equation 1: \`y = 3x - 2\`
2. Enter equation 2: \`y = -x + 6\`
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
    },
    {
      id: 'cs3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Systems Solving with Desmos

### Worked Example 1: Non-Linear System

| Step | Work |
|---|---|
| **Problem** | "Find all solutions to $y = x^2 - 3$ and $y = x + 1$." |
| **Desmos** | Type both equations. Two intersection dots appear. |
| **Click dots** | Intersections at $(-1, 0)$ and $(2, 3)$ → two solutions. |
| **SAT question might ask** | "What is the sum of the x-coordinates?" → $-1 + 2 = 1$ |

### Worked Example 2: Finding the Value of k

| Step | Work |
|---|---|
| **Problem** | "For what value of $k$ does $y = 2x + k$ intersect $y = x^2$ at exactly one point?" |
| **Desmos** | Type $y = x^2$ and $y = 2x + k$. Add a slider for $k$. |
| **Adjust slider** | Move $k$ until the line is tangent to the parabola (touches at exactly one point). |
| **Read** | $k = -1$ — the line $y = 2x - 1$ is tangent to $y = x^2$. |

### System Types Summary

| What Desmos Shows | Algebraic Meaning | Number of Solutions |
|---|---|---|
| Lines cross at one point | Unique solution | 1 |
| Lines are parallel (no crossing) | No solution (inconsistent) | 0 |
| Lines overlap completely | Infinitely many (dependent) | ∞ |
| Line crosses parabola twice | Two real solutions | 2 |
| Line tangent to parabola | One real (repeated) solution | 1 |
| Line misses parabola | No real solution | 0 |

### SAT "How Many Solutions" Strategy

Instead of computing the discriminant or manipulating equations:
1. Graph both equations in Desmos
2. Count the intersections
3. That's your answer — takes 10 seconds`
    },
    {
      id: 'cs3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Systems in Desmos Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'The system $y = x^2$ and $y = -1$ has how many solutions?',
            options: ['$0$ — parabola is above $y = -1$ everywhere', '$1$ — they touch at the vertex', '$2$ — they cross twice', '$\\infty$ — they overlap'],
            correctAnswer: 0,
            explanation: '$x^2 \\geq 0$ for all real $x$, so $y = x^2$ never reaches $y = -1$. The horizontal line sits below the entire parabola — 0 intersections.'
          },
          {
            question: 'You graph $y = 3x + 2$ and $y = 3x + 5$ in Desmos and see two parallel lines. What does this tell you about the system?',
            options: ['No solution — the lines never intersect', 'Infinitely many solutions', 'Exactly one solution', 'Exactly two solutions'],
            correctAnswer: 0,
            explanation: 'Same slope ($m = 3$) but different y-intercepts ($b = 2$ vs $b = 5$) → parallel lines → no solution. In Desmos, you\'d see two parallel lines with no intersection dot.'
          },
          {
            question: 'To find the value of $c$ where $y = x^2 + c$ is tangent to $y = 4x - 3$, you should:',
            options: ['Graph both with a slider for $c$, adjust until they touch at exactly one point', 'Set the discriminant of $x^2 - 4x + (c + 3) = 0$ to zero', 'Both methods work — Desmos is faster', 'Guess values of $c$ by hand'],
            correctAnswer: 2,
            explanation: 'Both work. Algebraically: $x^2 - 4x + (c + 3) = 0$, discriminant $= 16 - 4(c+3) = 0$ → $c = 1$. With Desmos, a slider for $c$ shows tangency instantly. Use whichever is faster for you.'
          }
        ]
      }
    },
    {
      id: 'cs3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Count the Solutions** — How many intersections do these systems have?',
      exercise: {
        dropdowns: [
          '$y = x^2$ and $y = 0$ → [1 (at origin)|0|2|∞]',
          '$y = 2x + 1$ and $y = 2x - 3$ → [0 (parallel)|1|2|∞]',
          '$y = x^2$ and $y = 4$ → [2|0|1|4]',
          '$y = x$ and $y = x$ → [∞ (same line)|0|1|2]'
        ],
        correctAnswers: ['1 (at origin)', '0 (parallel)', '2', '∞ (same line)'],
        hint1: '$x^2 = 0$ only when $x = 0$ — the parabola touches the x-axis at just one point.',
        hint2: 'Same slope, different intercepts = parallel = no intersection.',
        hint3: '$x^2 = 4$ → $x = \\pm 2$ — two intersection points.',
        explanation: '$y = x^2$ touches $y = 0$ once at the vertex. Parallel lines ($m = 2$, different $b$) never cross. $x^2 = 4$ gives $x = 2, -2$ (two crossings). Same equation = infinite overlap.'
      }
    },
    {
      id: 'cs3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary: Systems with Desmos

| Task | Desmos Steps |
|---|---|
| Solve a system | Enter both equations, click intersection |
| Count solutions | Graph both, count intersection dots |
| Find tangent parameter | Use a slider, adjust until one dot appears |
| Identify parallel/identical | Look for no intersection or full overlap |

### Key Insight
"How many solutions?" is one of the most common SAT question types — and Desmos turns it from an algebra problem into a visual one that takes 10 seconds.

*Next: Graphing inequalities and domain restrictions →*`
    }
  ]
};
